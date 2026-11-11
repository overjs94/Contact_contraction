# Contact Transfer Lab — public viewer

This repository publishes the static research viewer and recorded simulation
examples. The optimization and physics backend source remains in a private
repository. The site contains no credentials or Python execution service.

## Scope

The default experiment replays three real Franka Panda URDF models, with seven
arm joints per robot and two native hand finger joints. The tools are a sphere,
a Panda hand and a pressure-limited suction seal. Three object keyframes are
connected by an IK-prescribed, fixed-orientation path with optimized forces and
joint torques. The object moves freely under MuJoCo dynamics. This baseline does
not perform learned-network inference, full Panda CITO, or continuous collision
certification. The separate Cartesian experiment demonstrates restricted CITO.

The viewer supports playback, keyframe navigation, visual/collision meshes,
measured tool states, torque utilization and JSON downloads. Inputs can be
inspected and edited; new CasADi/IPOPT or MuJoCo computations require the separate
Python backend and are disabled on this static site. The stored reports describe
the actual recorded runs, not the edited inputs.

## Models and licenses

URDFs, manifests, upstream licenses and provenance are under `site/models/`.
Original visual/collision assets load from immutable public upstream commits.
Franka Panda models derive from Gepetto/example-robot-data (Apache-2.0); authored
sphere/suction tools and a native Panda hand are attached for this scenario.
Other library models retain their own upstream licenses in their model folders.
Three.js, urdf-loader and project notices are included in `site/`.

## Deployment

The workflow validates checksums and recording/URDF references, uploads only
`site/`, then publishes via the official GitHub Pages Actions. It attempts initial
Pages enablement; if GitHub refuses it, select **Settings → Pages → Source →
GitHub Actions** and rerun the workflow. Repository visibility is public.

`site/recording-provenance.json` records the private source revision and hashes
of the exported static files. It does not contain private optimizer source.
