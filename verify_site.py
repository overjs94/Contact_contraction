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
