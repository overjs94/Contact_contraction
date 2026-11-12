"""Check the exact static publication without requiring a web server."""
import hashlib
import json
from pathlib import Path
import xml.etree.ElementTree as ET

root=Path(__file__).resolve().parent/'site'
meta=json.loads((root/'recording-provenance.json').read_text())
assert not meta['python_backend_included'] and not meta['live_optimization_available']
for name,expected in meta['files'].items():
    path=(root/name).resolve()
    assert path.is_relative_to(root.resolve()) and path.is_file(),name
    assert hashlib.sha256(path.read_bytes()).hexdigest()==expected,name
assert not list(root.rglob('*.py'))
assert not (root/'.git').exists()
assert 'scale-aware-contact-transfer' not in (root/'index.html').read_text()
for marker in ['id="library-categories"','id="scenario-category"','id="scenario-status"']:
    assert marker in (root/'index.html').read_text(),marker
index=json.loads((root/'data/index.json').read_text())
for model in index['models']:
    data=json.loads((root/'data'/(model['id']+'.json')).read_text())
    assert len(data['q'])==len(data['times']) and len(data['times'])>1
    specs=data.get('instances') or [{'manifest':'./models/'+model['id']+'/model.json'}]
    if model['id']=='dual_cito':continue
    for spec in specs:
        path=root/spec['manifest'].removeprefix('./')
        manifest=json.loads(path.read_text())
        urdf=path.parent/manifest['urdf']
        assert ET.parse(urdf).getroot().tag=='robot'
        if 'urdf_sha256' in manifest:
            assert hashlib.sha256(urdf.read_bytes()).hexdigest()==manifest['urdf_sha256']
record=json.loads((root/'data/three_franka.json').read_text())
assert len(record['instances'])==3 and record['dof']==23
assert record['report']['tracking_passed'] and record['report']['force_envelopes_passed']
assert record['report']['seal_retained_before_vent']
assembly=json.loads((root/'data/table_assembly.json').read_text())
assert assembly['dof']==25 and len(assembly['instances'])==5
assert len(assembly['keyframes'])==8 and assembly['times'][-1]==30
assert assembly['report']['execution_passed'] and assembly['report']['leg_released']
assert assembly['report']['assembly_seated'] and len(assembly['objects'])==2
assert .020<assembly['report']['insertion_depth_m']<.030
print(f'Validated {len(meta["files"])} static files and {len(index["models"])} recordings')
panel=json.loads((root/'data/panel_fixture.json').read_text())
r=panel['report']
assert panel['dof']==23 and len(panel['instances'])==5 and len(panel['objects'])==1
assert len(panel['keyframes'])==8 and panel['times'][-1]==30
assert r['execution_passed'] and r['all_tools_released'] and r['fixture_supported']
assert r['source']['source_contact_positions_optimized'] and r['source']['synthetic_input']
assert r['source']['source_rho_after']>r['source']['source_rho_before']
assert not r['network_inference_executed'] and not r['full_geometry_certified']
assert abs(r['jig_support_final_N']-19.62)<.15
assert panel['instances'][-1]['role']=='static_jig'
mobile=json.loads((root/'data/mobile_panel.json').read_text());r=mobile['report']
assert mobile['dof']==37 and mobile['nq']==51 and len(mobile['instances'])==4
assert mobile['times'][-1]==36 and len(mobile['keyframes'])==9
assert r['execution_passed'] and r['fixture_supported'] and r['all_tools_released']
assert 1.35<r['base_travel_m']<1.45 and abs(r['jig_support_final_N']-19.62)<.15
assert all(x['provably_outside_fixed_base'] for x in r['workspace_comparison'].values())
assert not r['mobile_base_pose_prescribed'] and not r['object_pose_prescribed']
assert (root/'models/rby1_mobile/LICENSE.rby1').exists() and (root/'models/rby1_mobile/NOTICE.rby1').exists()

for id in ['hinged_door','folding_panel','drawer']:
    d=json.loads((root/'data'/(id+'.json')).read_text());r=d['report']
    assert r['execution_passed'] and r['object_joint_actuators']==0 and not r['object_pose_prescribed']
    assert r['contact_fraction']>.95 and not r['unexpected_penetrations_m']
    assert d['articulated_object'] and len(d['instances'])==2 and len(d['keyframes'])==5
    assert len(d['q'][0])==d['nq'] and d['times'][-1]==14
for amp,passed in [(2,True),(8,True),(25,False)]:
    d=json.loads((root/'data'/f'mobile_push_{amp}.json').read_text());r=d['report']['robustness']
    assert r['recovery_passed'] and r['all_task_checks_passed']==passed
    assert d['external_disturbances'][0]['force_world_N']==[0,amp,0]

for id in ['free_box_lid','free_folding_object','free_portable_drawer']:
    d=json.loads((root/'data'/(id+'.json')).read_text());r=d['report']
    assert r['execution_passed'] and r['arm_count']==3 and not r['world_hinge']
    assert r['object_joint_actuators']==0 and r['contact_fraction']==[1.,1.,1.]
    assert len(d['instances'])==4 and d['instances'][-1]['floating_base']
    assert d['contact_contraction']['dense_sample_count']==125
    assert not r['full_paper_pipeline_executed'] and r['planning_mode']=='nominal_path_baseline'
force=json.loads((root/'data/free_box_push.json').read_text())
assert force['external_disturbances'][0]['force_world_N']==[0,5,0]
assert any(e['time']==8.5 and '화살표' in e['id'] for e in force['events'])

clamp=json.loads((root/'data/robotiq_2f85.json').read_text());r=clamp['report']
assert len(clamp['instances'])==2 and clamp['dof']==8 and r['passed']
assert r['native_internal_equalities']==3 and not r['object_pose_prescribed']
assert all(38<v<42 for v in r['mean_jaw_force_N'])
assert r['maximum_motor_force_Nm']<=5+1e-9 and not r['full_paper_pipeline_executed']
lift=json.loads((root/'data/panda_robotiq_lift.json').read_text());r=lift['report']
assert lift['dof']==29 and lift['nq']==36 and len(lift['instances'])==4
assert r['execution_passed'] and r['independent_plan']['passed']
assert r['sampled_interface_wrench_capability']['passed']
assert r['object_equality_constraints_used']==0 and r['internal_gripper_equalities']==3
assert r['reference_interpolation']=='holding_grasp' and not r['full_paper_pipeline_executed']
assert r['maximum_position_error_m']<.0003
assert min(r['maintained_contact_fraction'].values())>.9998
assert (root/'models/panda_robotiq_lift_edge_gripper/LICENSE.robotiq').exists()

for task in ['assembly','box','panel']:
    model_id='full_'+task
    if not any(m['id']==model_id for m in index['models']):continue
    d=json.loads((root/'data'/(model_id+'.json')).read_text());r=d['report'];s=r['selection']
    assert d['full_task_recording'] and d['multi_arm'] and r['execution_passed']
    assert r['full_variant_pipeline_executed'] and not r['full_paper_pipeline_executed']
    assert s['selection_executed'] and s['candidate_count']>=12
    assert s['keyframes']>=5 and s['intervals']==s['keyframes']-1
    assert r['sampled_interface_wrench_capability']['passed']
    assert not r['object_pose_prescribed'] and r['object_equality_constraints_used']==0
    assert d['contact_contraction']['dense_sample_count']==0 and not d['contact_contraction']['network_inference_executed']
    tool=d['provenance']['canonical_point_tool'];assert tool['radius_m']==.025
    assert [row[3] for row in tool['ee_to_tip'][:3]]==[0.,0.,.165]
    if task=='assembly':assert r['task_metrics']['leg_released'] and r['task_metrics']['lateral_error_m']<.002
print('Validated completed full-task records and explicit scope flags')

required_variants={'full','no_source_refinement','fixed_contact_types','fixed_path','no_arm_force_feedforward','contact_disabled','external_push'}
point_hashes=set();point_mounts=0
for task in ['assembly','box','panel']:
    data=json.loads((root/'data'/('full_'+task+'.json')).read_text())
    variants=data['report']['ablation_results']
    assert set(variants)==required_variants and not variants['contact_disabled']['execution_passed']
    pulse=json.loads((root/'data'/('full_'+task+'_external_push.json')).read_text())['external_disturbances']
    assert len(pulse)==1 and pulse[0]['force_world_N']==[5.,0.,0.] and pulse[0]['duration']==1.
for item in index['models']:
    if not item['id'].startswith('full_'):continue
    data=json.loads((root/'data'/(item['id']+'.json')).read_text())
    assert len(data['report']['ablation_results'])==7
    contacts=data['native_contact_samples']
    assert contacts['source']=='raw_native_contacts' and not contacts['interpolated']
    assert contacts['sample_times_s']==data['times'] and len(contacts['frames'])==len(data['times'])
    for instance in data['instances']:
        manifest=json.loads((root/instance['manifest'].removeprefix('./')).read_text())
        if 'point_tool' not in manifest:continue
        tool=manifest['point_tool'];assert tool['radius_m']==.025 and [r[3] for r in tool['ee_to_tip'][:3]]==[0.,0.,.165]
        point_hashes.add(tool['urdf_sha256']);point_mounts+=1
assert len(point_hashes)==1 and point_mounts==29
summary=json.loads((root/'reports/full-scenario-results.json').read_text())
assert all(case['full']['execution_passed'] and len(case['variants'])==7 for case in summary['cases'].values())
assert (root/'reports/full-scenario-flow.svg').is_file()
print('Validated 21 controlled trials and 29 identical spherical tool mounts')
box=json.loads((root/'data/full_box.json').read_text())
spec=next(i for i in box['instances'] if i['id']=='object')
manifest_path=root/spec['manifest'].removeprefix('./');manifest=json.loads(manifest_path.read_text())
body=ET.parse(manifest_path.parent/manifest['urdf']).find("link[@name='base']")
assert body.find("visual[@name='base_handle_connector']") is not None
assert body.find("collision[@name='base_handle_connector']") is not None
assert json.loads((root/'data/free_box_lid.json').read_text())['known_modeling_issues']
assert json.loads((root/'data/free_box_push.json').read_text())['known_modeling_issues']
for task,case in summary['cases'].items():
    record=json.loads((root/'data'/('full_'+task+'.json')).read_text())
    for key,value in case['native_identity'].items():assert record['provenance'][key]==value
print('Validated measured contact overlays, repaired box geometry, and historical-model warnings')
study=json.loads((root/'data/algorithm-comparisons.json').read_text())
trials=study['source_robustness']['trials'];assert len(trials)==14
assert study['source_robustness']['controller_settings_equal']
shared_hashes=set(point_hashes);extra_points=0
for trial in trials:
    d=json.loads((root/'data'/(trial['recording_id']+'.json')).read_text());r=d['report']
    assert d['comparison_recording'] and not d['full_task_recording']
    assert r['execution_passed']==trial['execution_passed'] and not r['object_pose_prescribed']
    assert r['object_equality_constraints_used']==0 and r['arm_force_selection']==[0.]*6
    assert r['source']['optimization_vertex_count']==(8 if trial['robustness_enabled'] else 1)
    assert d['native_contact_samples']['sample_times_s']==d['times']
for enabled in (True,False):
    group=[t for t in trials if t['robustness_enabled']==enabled]
    assert len({(t['native_case_id'],t['native_plan_id']) for t in group})==1
    assert next(t for t in group if t['force_N']==0)['execution_passed']
    assert next(t for t in group if t['force_N']==-4)['execution_passed']==enabled
for task in ('panel','box'):
    group=study['contact_types'][task];trial=group['counterfactuals'][0]
    assert trial['new_physical_trial_executed'] and not trial['execution_passed']
    assert trial['sequence_objective']>group['selected_sequence_objective']
assert study['contact_types']['assembly']['counterfactuals'][0]['stage']=='planning'
for item in index['models']:
    if not item['id'].startswith(('robust_refinement_','counterfactual_')):continue
    d=json.loads((root/'data'/(item['id']+'.json')).read_text())
    for spec in d['instances']:
        m=json.loads((root/spec['manifest'].removeprefix('./')).read_text());tool=m.get('point_tool')
        if tool:
            assert tool['radius_m']==.025 and [r[3] for r in tool['ee_to_tip'][:3]]==[0.,0.,.165]
            shared_hashes.add(tool['urdf_sha256']);extra_points+=1
assert len(shared_hashes)==1 and extra_points==47
assert (root/'data/source-robustness-comparison.svg').is_file()
assert (root/'data/type-counterfactual-comparison.svg').is_file()
print('Validated 14 matched robustness trials, 3 forced-type comparisons, and 76 shared spherical mounts')
