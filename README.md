# Contact Transfer Lab — public viewer

**Open the viewer: https://overjs94.github.io/Contact_contraction/**

This repository publishes the static research viewer and recorded simulation
examples. The optimization and physics backend source remains in a private
repository. The site contains no credentials or Python execution service.

## Scope

The default recording is a **30-second tabletop and leg assembly**, with three
real 7-DoF Panda arms, **two native grippers and one spherical support tool**.
The tabletop's underside faces upward. One gripper and the sphere lift and
reorient it by 12°; the other gripper carries a leg, aligns its peg with the empty
socket, inserts it, opens and retracts. Both parts move freely under MuJoCo
contact dynamics. There are no welds or artificial holding forces.

Eight keyframes cover preparation (0/2 s), lift (6 s), reorientation (12 s),
approach (18 s), alignment (22 s), insertion (27 s), and final hold (30 s).
Leg-hand release starts at 28 s. The default measured run passed tracking,
grip retention, wrench envelopes, sampled collision, insertion and release
checks. Final insertion depth was 25.00 mm and lateral error was 0.134 mm.

The path uses prescribed SE(3) IK and a contact-mode schedule; IPOPT allocates
inertial wrenches and joint torques. Pad friction and capability bounds are
research assumptions. This does not certify full CITO, continuous collision
safety, hardware performance, fastening or structural strength. Previous
transport, point/gripper/suction and Cartesian CITO recordings remain available
in the library.

The viewer supports playback, keyframe navigation, visual/collision meshes,
measured tool states, torque utilization and JSON downloads. Inputs can be
inspected and edited; new CasADi/IPOPT or MuJoCo computations require the separate
Python backend and are disabled on this static site. The stored reports describe
the actual recorded runs, not the edited inputs. The private Python backend
implements this new scenario, duration retiming, async jobs, progress and
cancellation; it is not a service hosted by GitHub Pages.

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

After publishing, `check_live.py` verifies the deployed HTML/JS/CSS, project-path
recordings, Panda URDFs and public upstream DAE/STL access with browser CORS.
