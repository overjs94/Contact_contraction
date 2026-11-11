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
print(f'Validated {len(meta["files"])} static files and {len(index["models"])} recordings')
