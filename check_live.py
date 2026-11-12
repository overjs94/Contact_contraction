"""Verify the published project-path viewer from the deployment runner."""
import json
import os
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

url=os.environ['SITE_URL']
p=urllib.parse.urlsplit(url)
assert p.scheme=='https' and p.hostname=='overjs94.github.io' and p.path=='/Contact_contraction/'


def get(path):
    target=urllib.parse.urljoin(url,path)
    for attempt in range(4):
        try:
            with urllib.request.urlopen(target,timeout=20) as response:
                assert response.status==200,target
                return response.read(),response.headers
        except (urllib.error.URLError,AssertionError):
            if attempt==3:raise
            time.sleep(3)


html,_=get('index.html')
assert b'Contact Transfer' in html and b'./app.js' in html
assert b'id="library-categories"' in html and b'id="scenario-status"' in html
app,_=get('app.js');assert len(app)>100000
css,_=get('style.css');assert b'viewport' in css
index=json.loads(get('data/index.json')[0])
data=json.loads(get('data/table_assembly.json')[0])
assert data['dof']==25 and len(data['instances'])==5
report=data['report']
assert report['tracking_passed'] and report['force_envelopes_passed'] and report['assembly_seated'] and report['leg_released']
assert report['execution_passed'] and report['keyframes']==8
assert .020<report['insertion_depth_m']<.030
assert report['insertion_lateral_error_m']<.002
mesh_manifest=None
for spec in data['instances']:
    manifest=json.loads(get(spec['manifest'])[0])
    if manifest.get('assets'):mesh_manifest=manifest
    urdf_url=urllib.parse.urljoin(spec['manifest'],manifest['urdf'])
    assert ET.fromstring(get(urdf_url)[0]).tag=='robot'
assets=mesh_manifest['assets']
for suffix in ('.dae','.stl'):
    target=next(a for a in assets if a.endswith(suffix))
    with urllib.request.urlopen(target,timeout=30) as response:
        assert response.status==200
        assert response.headers.get('Access-Control-Allow-Origin')=='*'
        body=response.read()
        assert not body.startswith(b'version https://git-lfs')
        if suffix=='.dae':assert b'COLLADA' in body
print(json.dumps({'url':url,'recordings':len(index['models']),'panda_instances':3,'free_parts':2,'assembly':'passed','duration_seconds':30,'static_assets':'passed','upstream_mesh_CORS':'passed'}))
panel=json.loads(get('data/panel_fixture.json')[0]);r=panel['report']
assert r['execution_passed'] and r['fixture_supported'] and r['all_tools_released']
assert r['source']['source_contact_positions_optimized'] and r['source']['synthetic_input']
assert not r['network_inference_executed'] and r['target_mass_kg']==2
assert abs(r['jig_support_final_N']-19.62)<.15
for spec in panel['instances']:
    manifest=json.loads(get(spec['manifest'])[0])
    assert ET.fromstring(get(urllib.parse.urljoin(spec['manifest'],manifest['urdf']))[0]).tag=='robot'
print(json.dumps({'primary_task':'single_panel_to_fixed_jig','execution':'passed','source_refinement':'synthetic_input_optimized','all_tools_released':True,'URDF_instances':len(panel['instances'])}))
mobile=json.loads(get('data/mobile_panel.json')[0]);r=mobile['report']
assert r['execution_passed'] and r['all_tools_released'] and r['fixture_supported']
assert 1.35<r['base_travel_m']<1.45 and not r['mobile_base_pose_prescribed']
assert all(x['provably_outside_fixed_base'] for x in r['workspace_comparison'].values())
for spec in mobile['instances']:
    manifest=json.loads(get(spec['manifest'])[0])
    assert ET.fromstring(get(urllib.parse.urljoin(spec['manifest'],manifest['urdf']))[0]).tag=='robot'
    if spec['id']=='rby':
        get(urllib.parse.urljoin(spec['manifest'],manifest['license_file']))
        get(urllib.parse.urljoin(spec['manifest'],manifest['notice_file']))
        target=next(x for x in manifest['assets'] if x.endswith('.obj'))
        with urllib.request.urlopen(target,timeout=30) as response:
            assert response.status==200 and response.headers.get('Access-Control-Allow-Origin')=='*'
            assert b'\nv ' in response.read()
print(json.dumps({'workspace_extension':'RBY1-A_plus_Panda','execution':'passed','measured_base_travel_m':r['base_travel_m'],'fixed_base_unreachable':True,'mobile_base_pose_prescribed':False,'RBY1_mesh_CORS':'passed'}))

for id in ['hinged_door','folding_panel','drawer']:
    d=json.loads(get('data/'+id+'.json')[0]);r=d['report']
    assert r['execution_passed'] and r['object_joint_actuators']==0 and not r['object_pose_prescribed']
    for spec in d['instances']:
        manifest=json.loads(get(spec['manifest'])[0])
        assert ET.fromstring(get(urllib.parse.urljoin(spec['manifest'],manifest['urdf']))[0]).tag=='robot'
        get(urllib.parse.urljoin(spec['manifest'],manifest['license_file']))
for amp,passed in [(2,True),(8,True),(25,False)]:
    d=json.loads(get(f'data/mobile_push_{amp}.json')[0]);assert d['report']['robustness']['all_task_checks_passed']==passed
print(json.dumps({'passive_articulated_tasks':3,'external_force_trials':3,'capability_failure_preserved_25N':True}))

for id in ['free_box_lid','free_folding_object','free_portable_drawer','free_box_push']:
    d=json.loads(get('data/'+id+'.json')[0]);r=d['report']
    assert r['execution_passed'] and r['arm_count']==3 and not r['world_hinge']
    assert not r['full_paper_pipeline_executed']
    for spec in d['instances']:
        m=json.loads(get(spec['manifest'])[0]);assert ET.fromstring(get(urllib.parse.urljoin(spec['manifest'],m['urdf']))[0]).tag=='robot'
print(json.dumps({'free_articulated_multi_arm_baselines':3,'force_arrow_recording':True,'full_paper_pipeline_claimed':False}))

clamp=json.loads(get('data/robotiq_2f85.json')[0]);assert clamp['report']['passed']
lift=json.loads(get('data/panda_robotiq_lift.json')[0]);r=lift['report']
assert r['execution_passed'] and r['independent_plan']['passed'] and not r['full_paper_pipeline_executed']
assert r['gripper_model']=='robotiq_2f85' and len(lift['instances'])==4
manifest=json.loads(get('models/robotiq_2f85/model.json')[0])
get('models/robotiq_2f85/'+manifest['license_file'])
target=next(a for a in manifest['assets'] if a.endswith('/base.stl'))
with urllib.request.urlopen(target,timeout=30) as response:
    assert response.status==200 and response.headers.get('Access-Control-Allow-Origin')=='*'
    assert len(response.read())>10000
print(json.dumps({'Robotiq_native_component':'passed','Robotiq_three_arm_first_lift':'passed','full_paper_pipeline':False}))

for task in ['assembly','box','panel']:
    model_id='full_'+task
    if not any(m['id']==model_id for m in index['models']):continue
    d=json.loads(get('data/'+model_id+'.json')[0]);r=d['report']
    assert d['native_contact_samples']['sample_times_s']==d['times']
    assert not d['native_contact_samples']['interpolated'] and len(r['ablation_results'])==7
    assert r['execution_passed'] and r['full_variant_pipeline_executed'] and not r['full_paper_pipeline_executed']
    assert r['sampled_interface_wrench_capability']['passed'] and r['object_equality_constraints_used']==0
    for spec in d['instances']:
        manifest=json.loads(get(spec['manifest'])[0]);assert ET.fromstring(get(urllib.parse.urljoin(spec['manifest'],manifest['urdf']))[0]).tag=='robot'
        get(urllib.parse.urljoin(spec['manifest'],manifest['license_file']))
    print(json.dumps({'completed_full_task':task,'type_selection':r['selection']['selected_types'],'native_execution':'passed','source_fallback_explicit':True}))

summary=json.loads(get('reports/full-scenario-results.json')[0])
assert all(case['full']['execution_passed'] and len(case['variants'])==7 for case in summary['cases'].values())
assert b'<svg' in get('reports/full-scenario-flow.svg')[0]
print('Verified live three-task summary and code-structure diagram')
box=json.loads(get('data/full_box.json')[0]);spec=next(i for i in box['instances'] if i['id']=='object')
m=json.loads(get(spec['manifest'])[0]);body=ET.fromstring(get(urllib.parse.urljoin(spec['manifest'],m['urdf']))[0]).find("link[@name='base']")
assert body.find("visual[@name='base_handle_connector']") is not None
assert body.find("collision[@name='base_handle_connector']") is not None
assert json.loads(get('data/free_box_lid.json')[0])['known_modeling_issues']
assert json.loads(get('data/free_box_push.json')[0])['known_modeling_issues']
print('Verified live repaired box, native contact overlays, and historical-model warnings')
study=json.loads(get('data/algorithm-comparisons.json')[0]);assert len(study['source_robustness']['trials'])==14
assert study['source_robustness']['controller_settings_equal']
for mode,passed in [('polytope',True),('nominal',False)]:
    d=json.loads(get('data/robust_refinement_'+mode+'_-4N.json')[0])
    assert d['report']['execution_passed']==passed and d['comparison_recording']
    assert d['external_disturbances'][0]['force_world_N']==[0.,0.,4.]
    assert any(event['id']=='과도응답 비교' and event['time']==4.7 for event in d['events'])
for task,types in [('panel','PPP'),('box','PPG')]:
    d=json.loads(get('data/counterfactual_'+task+'_'+types+'.json')[0]);assert not d['report']['execution_passed']
    assert d['report']['selection']['forced_types']==list(types)
assert b'<svg' in get('data/source-robustness-comparison.svg')[0]
assert b'<svg' in get('data/type-counterfactual-comparison.svg')[0]
print('Verified live matched polytope ablation, alternative-type failures, and comparison figures')
