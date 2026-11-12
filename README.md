# Contact Transfer Lab — public viewer

## Workspace extension: RBY1-A + fixed Panda

[Open the mobile-base experiment](https://overjs94.github.io/Contact_contraction/?model=mobile_panel).
A fixed Panda supports the initial lift, hands over to the RBY1-A dual arms and
retreats clear. RBY1 drives 1.4 m along a supplied straight corridor, beyond the
stationary arms' geometric reach upper bounds, then seats the panel on a jig
and releases both tools. The default recording is 36 seconds and nine keyframes.
Both mobile base and panel are free bodies; wheel torques and floor contacts
drive the base. Their poses are measured, never prescribed during simulation.

Original RBY1-A URDF mass/inertia/joint geometry and upstream DAE/OBJ meshes are
pinned with Apache-2.0 license and NOTICE. Contact tools are authored gripper
pads and a spherical support. Passive chassis support uses a low-friction skid
approximation; resolved caster rolling is not implemented. Wheel effort bounds
and inner servo gains are declared simulation assumptions, not manufacturer
ratings. Synthetic contracted source refinement runs before target allocation.
The corridor, path, torso ready posture, initial grasp and handover modes are
supplied; no network inference, general mobile planning or hardware result is
claimed. The Panda-only panel baseline and auxiliary assembly remain available.


## Primary task: single panel to fixed jig

[Open the main panel experiment](https://overjs94.github.io/Contact_contraction/?model=panel_fixture).
The free 2 kg panel is lifted and reoriented by 12°, seated on a fixed jig,
then all three tools release. Three real Panda URDF instances use one native
gripper and two spherical supports. The panel and jig also load from URDF.
The default recording is 30 seconds and eight keyframes. The older tabletop
and leg assembly remains available as an auxiliary demonstration.

This recording **actually refines quarter-scale synthetic contracted contact
positions** before geometry-only scaling. Independent source SOCP margin:
1.053 → 1.116. Target forces and torques are recomputed with target URDF
mechanics; source forces are never scaled. Final panel position error is
0.133 mm, the jig carries 19.62 N, and all tools have released. The initial
grasp, SE(3) path and mode schedule are supplied. This is not network inference,
a learned-data experiment, full CITO search or a hardware result.

The form exposes source-refinement on/off for a connected local Python
backend. This free GitHub Pages site replays measured records; it does not run
Python, IPOPT or MuJoCo on the hosting server. RB5-850E position-servo simulation
has been verified separately in the private implementation; it is not the
robot executing this public panel recording. G1 preview does not provide a
balanced mobile manipulation controller. RBY1 remains an extension path.


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

## Passive articulated objects and external forces

[Hinged door](https://overjs94.github.io/Contact_contraction/?model=hinged_door),
[folding panel](https://overjs94.github.io/Contact_contraction/?model=folding_panel) and
[drawer](https://overjs94.github.io/Contact_contraction/?model=drawer) are measured 14-second,
five-keyframe MuJoCo recordings. Only the Panda is actuated; each fixture has one passive
hinge/rail. Contacts and joint paths are supplied. Contact-disabled controls fail all three tasks.
Joint friction, spring and tool compliance are authored simulation assumptions, not calibrated hardware.
These extensions do not implement learned articulated contraction or general articulated CITO.
Studio PBR lighting/shadows and analysis/collision geometry can be selected without changing recorded states.

The same mobile plan/controller is also replayed under prespecified 16–16.5 s world-Y panel pushes:
[2 N](https://overjs94.github.io/Contact_contraction/?model=mobile_push_2),
[8 N](https://overjs94.github.io/Contact_contraction/?model=mobile_push_8),
[25 N](https://overjs94.github.io/Contact_contraction/?model=mobile_push_25).
All three recover position; 25 N violates the planned P capability and remains overall FAIL.
The planned P cone uses mu=0.8 while native tool friction is 0.9; this is not an engine cone violation.
One deterministic direction/point/time is not a statistical or formal robustness guarantee.
No third-party research dataset assets are redistributed here.

## Free articulated object: three-arm diagnostic baselines

The current primary scene is [a free box with a lid](https://overjs94.github.io/Contact_contraction/?model=free_box_lid).
Three Panda arms perform base grasp (G), base support (P), and moving-link manipulation (G).
[The folding panel](https://overjs94.github.io/Contact_contraction/?model=free_folding_object)
and [portable drawer](https://overjs94.github.io/Contact_contraction/?model=free_portable_drawer)
also have a free root and passive internal joint; there is no world-fixed hinge.
125 synthetic dense source samples retain functional/link IDs, contract to three representative
grip/contact frames, and transfer to the target. Source group IDs and paths are supplied.

These are **nominal-path diagnostic baselines**, not completed manuscript Sec. III-B–IV
or hybrid-controller validation records. Each report explicitly sets
`full_paper_pipeline_executed=false`. The older single-arm fixtures are component tests.

In [the 5 N force trial](https://overjs94.github.io/Contact_contraction/?model=free_box_push),
click **외력 최대 · 화살표 · 8.5 s** to pause at the peak and see the red force arrow at its
actual application point. Force magnitude/time and dense/contracted contact display controls
are included. The previous RBY1 pulse recordings also have a force-peak event.
