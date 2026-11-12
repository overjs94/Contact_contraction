# Contact Transfer Lab — public viewer

**Open: https://overjs94.github.io/Contact_contraction/**

The library is organized by experimental purpose:

- **논문 목표:** core panel-to-jig task; mobile and free-articulated
  extensions; auxiliary tabletop/leg assembly. Completed full-task recordings are distinguished from legacy baseline executions; each recording states its validation scope.
- **단일 embodiment:** seven robot-arm tracking recordings and the G1
  kinematic preview. These are separate from cooperative manipulation tasks.
- **요소·강건성:** external-force trials, contact-tool/restricted-CITO
  tests, single-arm world-fixed hinge/rail components, and the Robotiq tests.

Each scene displays its purpose and validation scope. Selecting a task updates
its experiment editor; individual embodiment previews hide that editor.
Direct `?model=...` links open the corresponding category. The default opens the first completed full-task assembly recording. Static Pages replays records; it does not run
the private Python optimizer or simulator.

## Three complete multi-arm tasks

| Record | Selected tools | Keyframes / intervals | Measured full-method result |
|---|---|---:|---|
| [Furniture assembly](https://overjs94.github.io/Contact_contraction/?model=full_assembly) | G/P/G | 10 / 9 | 25.001 mm insertion, 0.453 mm lateral error; leg released and supported |
| [Free box opening](https://overjs94.github.io/Contact_contraction/?model=full_box) | G/P/G | 8 / 7 | passive hinge opens about 60 degrees; 3.294 mm maximum body position error |
| [Panel to jig](https://overjs94.github.io/Contact_contraction/?model=full_panel) | G/P/P | 9 / 8 | 0.182 mm final error; jig carries 19.62 N; all tools released |

All three full-method trials pass independent planning and native MuJoCo
execution gates. The records include supplied contracted groups, source
refinement/fallback, robust target realization, configured G/P and physical-arm
assignment search, every transition and measured native URDF poses. Configured
candidate counts are 12 for the panel and 24 for box/assembly. Conditional cost
bounds and numerical/geometry rejections are recorded separately.

All P tools use the same 25 mm spherical-tip URDF and `[0,0,0.165] m` EE bias.
All moving intervals use 16 nodes in the accepted plans. Native physics uses a
1 ms timestep. Stationary load transfer uses conic QPs and released-arm retreat
uses full joint dynamics. Panel/box use a contact-coordinate midpoint variant;
assembly uses independent midpoint integration. These are explicit numerical
variants, not literal manuscript Eq. (17), and not whole-body passive midpoint
integration. Objects are free, with no object actuator, weld or pose forcing.

The 40 N/jaw simulation operating bound is retained. Squeeze targets are
28/24/18 N for assembly/box/panel; measured maxima are 32.10/35.94/30.03 N.
Arms use impedance plus planned contact feedforward (`Sf=0`); measured jaw-force
feedback is active. This is not a successful measured-normal-force hybrid arm
feedback or a hardware calibration claim.

Each task includes six controlled comparisons, for 21 total trials:

| Variant | Assembly | Box | Panel |
|---|---|---|---|
| Full | pass | pass | pass |
| No source refinement | pass | pass | fail |
| Fixed types/assignment | pass | pass | pass |
| Fixed path / force allocation | pass | fail (jaw bound) | pass |
| No arm force feedforward | fail (tracking) | pass | pass |
| Robot/object contact disabled | fail | fail | fail |
| Actual 5 N external push | pass | pass | pass |

Force pulses use the native force API, world +X, one-second sin-squared profile
and 2.5 Ns impulse. Replay event buttons and arrows show the recorded force.
P retention is evaluated when the stored planned normal reaction exceeds
0.1 N; zero-force handoff steps retain their original contact fractions in the
report. Raw contact flags remain unchanged. Jaw bounds cover the whole trace.

Panel source margin increases from 0.44343 to 0.53207 at its initial posture.
Common-P source solves for box/assembly use the explicit geometric fallback;
their source/no-source priors coincide. Fixed types also coincide with the
selected candidates. These comparisons reuse identical continuous plans and
execute fresh physical trials; they do not demonstrate a refinement/type-search
advantage or solver-time improvement. The panel source-off run rejects G/P/P
numerically at keyframe 4, selects P/P/P, then fails native tracking/contact
checks. No global physical infeasibility or isolated source-refinement causal
claim is made. Every variant has one trial; no statistical success rate is claimed.

[Code structure diagram](https://overjs94.github.io/Contact_contraction/reports/full-scenario-flow.svg)
and [compact validation summary](https://overjs94.github.io/Contact_contraction/reports/full-scenario-results.json).
Legacy records below remain separately labelled. New full-task recorded replay
needs no Python server; fresh optimization/execution uses the private Python CLI.

## Robotiq 2F-85: native gripper and three-arm lift

[Three-arm panel lift](https://overjs94.github.io/Contact_contraction/?model=panda_robotiq_lift)
uses one Panda with a native Robotiq 2F-85 and two Panda spherical supports.
The complete linkage and measured passive-joint poses are rendered from the
pinned original STL assets. Source refinement, robust target realization and
the first fixed-assignment CITO interval precede free-panel MuJoCo execution.
The configuration update uses an explicit midpoint variant. This is the first
lift only, not a completed full-paper sequence or III-D assignment search.

Maximum panel tracking error is 0.216 mm. Maximum measured jaw reactions are
38.914 / 42.474 N under a declared 60 N per-jaw simulation bound; all three
contact retention fractions exceed 99.98%. All 147 sampled raw resultants per
interface pass the declared grasp/contact capabilities. Arms use pose/joint
impedance and planned force feedforward; the gripper uses measured jaw-force
admittance over its finite position servo. Internal gripper constraints are
preserved, with no object weld or prescribed object pose.

[The separate gripper component test](https://overjs94.github.io/Contact_contraction/?model=robotiq_2f85)
holds a free block with approximately 40 N per jaw using the native four-bar
mechanism and original ±5 Nm tendon actuator. The mounted scene splits that
servo into two bounded PD halves with common commands and the native driver
coupling; exact equivalence under soft coupling is not claimed. Manufacturer
85 mm stroke / 20–235 N grip-force figures are references, not the simulation's
net Cartesian wrench bounds or a hardware calibration. Virtual admittance uses
passive midpoint integration; full multibody contact PMI is not implemented.
Robotiq assets retain their BSD-2-Clause license alongside Panda Apache-2.0.

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


## Legacy panel baseline to fixed jig

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
balanced mobile manipulation controller. RBY1 mobile cooperation is the implemented
extension described above.


**Open the viewer: https://overjs94.github.io/Contact_contraction/**

This repository publishes the static research viewer and recorded simulation
examples. The optimization and physics backend source remains in a private
repository. The site contains no credentials or Python execution service.

## Scope

The following describes the legacy `table_assembly` baseline; the completed
full optimization records are documented above.

The auxiliary assembly recording is a **30-second tabletop and leg assembly**, with three
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

## Single-arm passive-joint component tests and external forces

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
