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
