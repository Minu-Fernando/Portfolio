export const personalDetails = {
  name: "Minaya Fernando",
  title: "Electronic & Telecommunication Engineering Undergraduate",
  tagline: "Building high-performance embedded systems, custom PCBs, robotics, and machine learning solutions.",
  university: "University of Moratuwa",
  degree: "B.Sc. of Science of Engineering Honours in Electronic and Telecommunication Engineering",
  gpa: "3.86 / 4.00",
  email: "minayafh@gmail.com",
  phone: "+94 76 458 5477",
  location: "Negombo, Sri Lanka",
  profileImage: "/images/profile.png",
  github: "https://github.com/Minu-Fernando",
  linkedin: "https://linkedin.com/in/minaya-fernando",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  interests: ["PCB Design", "Embedded Systems", "Robotics", "3D Modeling", "Machine Learning", "Quantum Computing"]
};

export const academicHistory = [
  {
    id: "uom",
    institution: "University of Moratuwa",
    degree: "B.Sc. Eng. Hons in Electronic and Telecommunication Engineering",
    period: "June 2024 - Present",
    location: "Colombo, Sri Lanka",
    badge: "GPA: 3.86 / 4.00 (Honours)",
    details: "Specializing in electronic circuit design, embedded hardware, signal processing, power systems, and autonomous robotics."
  },
  {
    id: "al",
    institution: "Ave Maria Convent",
    degree: "G.C.E. Advanced Level Examination",
    period: "Jan 2020 - Jan 2023",
    location: "Negombo, Sri Lanka",
    badge: "3A Distinctions (Z-score: 2.53)",
    details: "Physics, Chemistry, Combined Mathematics."
  },
  {
    id: "ol",
    institution: "Ave Maria Convent",
    degree: "G.C.E. Ordinary Level Examination",
    period: "Jan 2018 - Dec 2019",
    location: "Negombo, Sri Lanka",
    badge: "9A Distinctions",
    details: "English, Sinhala, Mathematics, Science, Religion, History, Geography, ICT, Western Music."
  }
];

export const projectsData = [
  {
    id: "smart-iron",
    title: "SmartSense Plug",
    subtitle: "Motion-Aware Appliance Safety System",
    category: "Embedded & PCB",
    period: "Feb 2025 - July 2025",
    featured: true,
    bentoSize: "large",
    image: "/images/smartsense/plug-unit.png",
    tools: ["ESP32-S3", "MPU6050", "ESP-NOW", "FreeRTOS", "Altium Designer", "SolidWorks", "PlatformIO"],
    summary: "A two-unit retrofit safety system combining IMU motion sensing, wireless ESP-NOW communication, automatic mains cutoff, modular PCBs, and custom enclosures.",
    repository: "https://github.com/rus1ru/SmartSense-EN1190",
    intro: "A retrofit safety system that gives conventional irons motion-aware automatic shutoff without requiring a smart-home hub or replacing the appliance. A battery-powered sensing unit observes the iron while a separate mains plug makes the power-control decision.",
    metrics: [
      { value: "2", label: "wireless ESP32 units" },
      { value: "7", label: "selectable timeout levels" },
      { value: "10 h", label: "motion-unit battery target" },
      { value: "3", label: "modular plug PCBs" }
    ],
    contributions: [
      "Co-designed the plug-unit PCB architecture, including the mains power, ESP32 control, and user-interface boards.",
      "Designed the plug enclosure and internal mechanical layout around PCB clearances, mains wiring, fuse access, socket geometry, and the rotary interface.",
      "Produced the engineering documentation and final project report, translating the electrical, firmware, mechanical, testing, and market decisions into a complete design record."
    ],
    architecture: [
      {
        title: "Iron-mounted motion unit",
        text: "An MPU6050 measures acceleration and angular motion across three axes. An ESP32-S3 Mini samples the sensor and transmits activity packets over ESP-NOW from a rechargeable Li-Po supply."
      },
      {
        title: "Wireless sensing pipeline",
        text: "Acceleration-vector deltas are smoothed with a 60-sample moving-average buffer before thresholding, reducing noise and separating deliberate movement from stationary vibration."
      },
      {
        title: "Smart plug control unit",
        text: "A second ESP32 receives motion packets, runs the inactivity state machine, reads the rotary encoder, updates the RGB status indicator, and de-energizes an isolated relay when the timeout expires."
      }
    ],
    features: [
      "Adjustable 1, 5, 10, 15, 20, 25, and 30-minute idle timeouts",
      "Five explicit operating states: searching, connected, connected-idle, power-off, and manual override",
      "Five-second encoder hold to bypass automatic control and operate as a conventional plug",
      "Color-coded RGB feedback for active, idle, cutoff, searching/low-battery, and override states",
      "ESP-NOW peer-to-peer operation with no Wi-Fi router, cloud service, or mobile application",
      "Non-volatile timeout persistence using ESP32 Preferences storage"
    ],
    gallery: [
      { src: "/images/smartsense/product-overview.jpeg", alt: "SmartSense plug and iron motion unit", caption: "Complete two-unit SmartSense product concept" },
      { src: "/images/smartsense/plug-unit.png", alt: "SmartSense plug enclosure render", caption: "Plug-side enclosure and rotary timeout control" },
      { src: "/images/smartsense/encoder.png", alt: "SmartSense rotary encoder design", caption: "Tactile rotary encoder interface detail" },
      { src: "/images/smartsense/motion-threshold.png", alt: "Motion classification threshold experiment", caption: "Experimental threshold scoring used to tune motion classification" }
    ],
    outcome: "The prototype demonstrated end-to-end motion monitoring, low-latency wireless communication, adjustable inactivity timing, clear local status feedback, and automatic mains isolation. The design remained retrofit-friendly: users could add safety automation to an existing iron without modifying the appliance itself.",
    future: [
      "Replace the mechanical relay with a suitably protected triac-based switching stage.",
      "Introduce learned motion-pattern classification to distinguish ironing behavior more robustly.",
      "Move to lower-power hardware and deeper sleep modes to extend motion-unit battery life.",
      "Use certified heat-resistant, flame-retardant materials and production-grade isolation for commercialization."
    ],
    description: [
      "Developed a two-unit architecture featuring an iron-mounted sensing module and a smart plug control unit using ESP microcontrollers.",
      "Implemented accelerometer-based motion detection to accurately analyze iron activity and trigger auto-shutoff idle states.",
      "Built the plug-side control unit with relay-based power switching and a rotary encoder interface for adjustable timeout parameters.",
      "Exclusively designed the complete double-layer PCB in Altium Designer and engineered a sleek custom enclosure in SolidWorks."
    ]
  },
  {
    id: "micromouse-n1k0",
    title: "N1K0 Micromouse Robot",
    subtitle: "Autonomous Maze-Solving Robotics Platform",
    category: "Robotics & Hardware",
    period: "Aug 2025 - Dec 2025",
    featured: true,
    bentoSize: "tall",
    image: "/images/n1k0/main-actual.png",
    heroFit: "stage",
    imageCaption: "The physical N1K0 micromouse: a compact differential-drive robot built around a custom circular controller PCB.",
    tools: ["ESP32-S3", "FreeRTOS", "Altium Designer", "C++", "SolidWorks", "ToF Sensing", "PID Control", "Power Electronics"],
    summary: "A full-stack autonomous micromouse combining a custom PCB, five-sensor wall perception, closed-loop motion control, maze search, and a compact manufactured chassis.",
    repository: "https://github.com/N1K0-micromouse/n1k0_micromouse",
    intro: "N1K0 was built as a complete autonomous robotics platform, not simply a maze-solving algorithm. Its electrical, mechanical, sensing, control, and navigation systems were developed together so the robot could explore an unknown maze, build an internal route, and transition toward a faster optimized run.",
    metrics: [
      { value: "5", label: "VL53L4CD ToF sensors" },
      { value: "2", label: "closed-loop drive wheels" },
      { value: "4", label: "concurrent control tasks" },
      { value: "1", label: "custom integrated PCB" }
    ],
    contributions: [
      "Designed the power system for the robot's first hardware iteration, establishing the supply architecture needed to support the controller, sensors, and motor-drive loads.",
      "Worked through the practical power-integrity challenges created by placing noise-sensitive sensing and logic beside rapidly changing motor currents in a very small robot.",
      "Supported early hardware integration by aligning power delivery, grounding, regulation, and connector requirements with the rest of the robot architecture. This contribution belongs to the first iteration and is not represented by the repository's current revision history."
    ],
    architecture: [
      {
        title: "Perception",
        text: "Five VL53L4CD time-of-flight sensors observe the front and side walls. Continuous ranging and coordinated polling give the navigation stack the distances needed for wall tracking, junction detection, and motion correction."
      },
      {
        title: "Estimation & control",
        text: "Two AS5600 magnetic encoders close the wheel-speed loop, while an SPI-connected ICM45686 IMU provides yaw information. Bias calibration, Kalman filtering, PID control, and wall-based corrections work together to hold deliberate trajectories."
      },
      {
        title: "Compute & actuation",
        text: "An ESP32-S3 runs the real-time stack and commands two DC motors through a TB6612FNG dual motor driver. FreeRTOS separates encoder acquisition, inertial updates, ToF ranging, and motion control into concurrent execution paths."
      },
      {
        title: "Integrated hardware",
        text: "The custom circular PCB consolidates processing, sensing interfaces, motor control, power, status feedback, a buzzer, and DIP-switch mode selection into the footprint of the chassis."
      }
    ],
    features: [
      "Flood-fill-style exploration and an internal maze representation for route planning",
      "Search-run behavior followed by a path-based fast-run workflow",
      "Encoder and wall-assisted correction for repeatable cell-to-cell motion",
      "Continuous yaw estimation with IMU calibration and filtered sensor data",
      "Semaphore-protected shared I²C access for stable multi-sensor operation",
      "Browser-based debugging pages, telemetry utilities, and dedicated motor/PID test programs",
      "Manufacturing-ready CAD, drawings, gears, STL files, and laser-cut exports"
    ],
    taskPhases: [
      {
        title: "01 — Explore",
        text: "Read the surrounding walls, classify openings, update the maze representation, and choose the next cell using flood-fill search logic."
      },
      {
        title: "02 — Control",
        text: "Translate each navigation decision into closed-loop straight-line and turning movements using encoder, IMU, and wall feedback."
      },
      {
        title: "03 — Optimize",
        text: "Convert the discovered route into an internal path that can be replayed with faster, more decisive motion during the speed-run phase."
      },
      {
        title: "04 — Validate",
        text: "Use standalone sensor, encoder, motor, PID, calibration, and logging utilities to tune subsystems before combining them on the maze."
      }
    ],
    gallery: [
      { src: "/images/n1k0/main-actual.png", alt: "Assembled N1K0 micromouse robot", caption: "Physical N1K0 prototype with drivetrain, sensor PCB, motors, gearing, and mode-selection hardware" },
      { src: "/images/n1k0/main-3d.png", alt: "N1K0 micromouse CAD assembly", caption: "CAD assembly showing the compact packaging of the drive system and custom electronics" }
    ],
    outcome: "The project produced a physical, integrated micromouse and the engineering stack required to keep iterating it: custom electronics, manufacturable mechanical assets, concurrent embedded firmware, sensor calibration tools, motion-control tests, maze-search logic, and a lightweight browser debugging interface.",
    future: [
      "Complete system-level tuning for repeatable high-speed runs on competition mazes.",
      "Refine acceleration, braking, and cornering profiles after collecting telemetry from longer runs.",
      "Continue validating the current PCB and power architecture under peak motor load and rapid direction changes.",
      "Reduce mechanical and electrical mass while preserving traction, sensing geometry, and serviceability."
    ],
    description: [
      "Developed a compact differential-drive platform for autonomous maze exploration and optimized return runs.",
      "Integrated five ToF sensors, magnetic wheel encoders, an IMU, dual motor drive, and an ESP32-S3 on a custom robot PCB.",
      "Structured sensing and control as concurrent FreeRTOS tasks with filtering, PID control, and protected shared-bus communication.",
      "Designed the first-iteration power system that supplied the robot's compute, sensing, and actuation subsystems."
    ]
  },
  {
    id: "cable-driven-robot",
    title: "LumonBot CDPR",
    subtitle: "Eight-Cable Industrial Pick-and-Place Robot",
    category: "Robotics & Hardware",
    period: "Feb 2026 - July 2026",
    featured: true,
    bentoSize: "wide",
    image: "/images/lumonbot/prototype.jpg",
    heroFit: "cdpr-crop",
    imageCaption: "Completed eight-cable prototype with central actuator and external power system",
    repository: "https://github.com/Team-Lumon",
    tools: ["STM32", "ESP32-S3", "CAN Bus", "TMC2209", "Altium Designer", "SolidWorks", "Python", "PySide6"],
    summary: "A distributed eight-cable parallel robot built to automate repetitive crate loading with inverse kinematics, synchronized stepper control, custom PCBs, and a desktop control station.",
    intro: "LumonBot is a low-footprint cable-driven parallel robot developed after validating a manual crate-loading bottleneck at a garment factory. Eight frame-mounted winches coordinate cable lengths to position a lightweight central actuator in 3D, providing a scalable alternative to bulky six-axis arms for conveyor-side material handling.",
    metrics: [
      { value: "8", label: "independently driven cables" },
      { value: "0.8 m³", label: "verified workspace" },
      { value: "1.5 kg", label: "verified payload" },
      { value: "0.8 mm", label: "measured repeatability" }
    ],
    contributions: [
      "Designed the complete robot mechanical system in SolidWorks, including the structural frame, cable-routing pulleys, motor-and-drum mounts, corner brackets, actuator geometry, and electronics enclosures.",
      "Designed the power-distribution board schematic and PCB, covering protected mains input, dual 24 V SMPS distribution, motor-power outputs, low-voltage rails, connectors, filtering, and emergency-stop integration.",
      "Participated in PCB soldering, board bring-up, electrical debugging, frame fabrication, cable routing, and complete prototype assembly.",
      "Coordinated PCB-to-mechanical integration so controller boards, power hardware, wiring, cooling, and service access fit within the physical robot."
    ],
    architecture: [
      {
        title: "Command & kinematics",
        text: "A Python control station sends Cartesian XYZ targets over Wi-Fi/UDP to an ESP32-S3 gateway. The STM32H7 main controller converts requested poses into eight cable-length targets and segments trajectories at approximately 100 ms intervals."
      },
      {
        title: "Distributed actuation",
        text: "CAN links the coordinator to eight STM32G0 motor nodes. Each node drives a NEMA 23 stepper through a TMC2209 and uses AS5600 magnetic feedback for local spool position and fault monitoring."
      },
      {
        title: "Mechanics & safety",
        text: "A rigid metal frame supports eight drum-and-pulley paths around a suspended central actuator. The system includes homing, travel limits, timeout handling, overcurrent protection, pretension requirements, and a physical emergency stop."
      }
    ],
    taskSectionTitle: "End-to-End Control Pipeline",
    taskPhases: [
      { title: "Operator command", text: "The desktop application validates X, Y, and Z inputs, previews the exact coordinate payload, and transmits commands to the robot gateway over UDP." },
      { title: "Gateway transport", text: "An ESP32-S3 provides the local Wi-Fi interface and forwards accepted coordinate data to the real-time controller over UART." },
      { title: "Inverse kinematics", text: "The main controller calculates cable lengths from the eight anchor points, pulley wrapping geometry, and requested central-actuator position." },
      { title: "Wrench-feasible motion", text: "Workspace limits and cable-tension constraints are considered so the platform remains controllable and cables do not become slack during motion." },
      { title: "CAN coordination", text: "Synchronized position commands are distributed to eight addressable motor-controller nodes, with node state and communication faults handled centrally." },
      { title: "Cable actuation", text: "TMC2209-driven NEMA 23 motors wind or unwind the spools while magnetic encoder feedback supports repeatable cable-length changes." }
    ],
    features: [
      "Three-axis translational positioning using an eight-cable suspended actuator",
      "Desktop XYZ command interface with payload preview and mock UDP receiver for offline testing",
      "Distributed CAN architecture with modular, replaceable motor-controller nodes",
      "Custom main controller, motor controller, actuator controller, and power-distribution PCBs",
      "24 V motor power with isolated logic regulation, protection, filtering, and serviceable connectors",
      "Mechanical emergency stop and controller-side timeout/fault handling",
      "Custom cable drums, pulley holders, clamps, motor mounts, and ventilated electronics enclosures",
      "Tested at 0.2 m/s cable speed with a 1.5 kg payload across a measured 0.8 m³ enclosed volume",
      "34.6% tension-feasible, collision-free usable workspace after accounting for the physical actuator geometry"
    ],
    gallery: [
      { src: "/images/lumonbot/cad-cable-routing.png", alt: "LumonBot cable routing CAD", caption: "Full SolidWorks assembly showing eight cable paths and suspended actuator" },
      { src: "/images/lumonbot/emergency-stop.jpg", alt: "LumonBot emergency stop", caption: "Physical emergency-stop station integrated into the robot frame" },
      { src: "/images/lumonbot/power-enclosure.png", alt: "LumonBot power electronics enclosure", caption: "Ventilated enclosure designed for power distribution and control electronics" },
      { src: "/images/lumonbot/team-integration.jpg", alt: "LumonBot team during final integration", caption: "The five-person team during the final integration push—mechanics, electronics, firmware, and testing converging in one build" }
    ],
    outcome: "The prototype demonstrated coordinated control of all eight cable actuators and three-axis positioning of the central platform. Testing verified a 0.8 m³ reachable volume, 1.5 kg payload, approximately 1 cm positioning repeatability, and 0.2 m/s maximum cable speed—establishing the feasibility of the architecture for scaled industrial pick-and-place automation.",
    future: [
      "Add load cells and real-time tension distribution so every cable remains positively tensioned.",
      "Introduce grooved capstans or level-wind spools to reduce cable layering error.",
      "Implement automatic workspace validation, collision checks, and cable-angle constraints before motion.",
      "Scale the frame, motors, cables, and actuator from the prototype payload toward 25–30 kg garment crates."
    ],
    description: [
      "Validated the industrial problem through a garment-factory field visit, focusing the robot on repetitive crate transfer to conveyor systems where floor space and reconfigurability matter.",
      "Used eight independently controlled cables to translate a lightweight actuator while keeping motors and most structural mass fixed to the frame.",
      "Implemented a layered control path spanning Python UI, UDP, ESP32 gateway, UART, STM32 coordination, CAN messaging, and local motor-node control.",
      "Designed the electronics as modular boards so the main controller, eight motor nodes, actuator controller, and power system could be assembled and debugged independently."
    ]
  },
  {
    id: "autonomous-drone",
    title: "Autonomous Drone Navigation System",
    subtitle: "Vision-Guided Airport Navigation in Simulation",
    category: "ML & Simulation",
    period: "July 2026 - Present",
    featured: true,
    bentoSize: "medium",
    image: "/images/drone/airport-world.jpg",
    heroFit: "stage",
    imageCaption: "IESL RoboGames 2026 Phase 2 airport environment with the Iris quadcopter, six landing pads, and yellow guide paths.",
    tools: ["Webots R2025a", "ArduPilot SITL", "Python", "PyMAVLink", "Computer Vision", "AprilTags", "Docker", "Podman"],
    summary: "A reproducible drone-simulation platform for following a visual guide path, identifying AprilTag-labelled airports, and executing autonomous landing missions.",
    repository: "https://github.com/Minu-Fernando/IESL-RoboGames-2026",
    intro: "Developed for Phase 2 of the IESL RoboGames 2026 university competition, this project provides the simulation and integration stack for autonomous airport navigation. An ArduPilot-controlled Iris quadcopter flies inside a purpose-built Webots arena, where a downward-facing camera supplies the visual information needed to follow yellow routes, identify AprilTag-labelled landing pads, and respond to a configurable airport mission list.",
    metrics: [
      { value: "6", label: "airport landing pads" },
      { value: "640×480", label: "camera resolution" },
      { value: "20 FPS", label: "simulation world rate" },
      { value: "3", label: "integrated runtime layers" }
    ],
    contributions: [
      "Built and published the reproducible IESL RoboGames 2026 drone simulation codebase around Webots, ArduPilot SITL, and Python-based MAVLink control.",
      "Configured the Iris quadcopter, downward-facing 640×480 camera, six airport pads, AprilTag textures, yellow route geometry, and external vehicle controller inside the competition world.",
      "Containerized the controller and flight-controller services and provided automated setup, start, stop, environment, dependency, and Windows installation workflows.",
      "Documented the connection contract for contestant navigation code, including the camera stream, MAVLink endpoints, required Task/flight.py entry point, and evaluator-controlled airport list."
    ],
    architecture: [
      {
        title: "Webots environment",
        text: "Webots R2025a simulates the Iris airframe, motors, inertial sensors, GPS, camera, six raised airport pads, and the curved and straight yellow routes connecting them. The world runs at 20 FPS with a 1 ms basic physics step."
      },
      {
        title: "ArduPilot flight stack",
        text: "ArduPilot SITL supplies the production-style autopilot behavior. The Webots vehicle bridge exchanges simulated sensor data and motor commands with SITL, keeping high-level navigation separate from low-level flight stabilization."
      },
      {
        title: "Vision & mission interface",
        text: "A downward-facing 640×480 camera is streamed on port 5599 for route and landing-pad perception. Python mission code connects through MAVLink on TCP port 5760 and receives an evaluator-defined airport sequence."
      },
      {
        title: "Reproducible runtime",
        text: "Docker Compose or Podman runs the Webots controller and ArduPilot SITL as cooperating services. Mounted controller sources, fixed ports, helper scripts, and a documented environment file keep development and grading aligned."
      }
    ],
    taskSectionTitle: "Autonomous Mission Pipeline",
    taskPhases: [
      {
        title: "01 — Initialize",
        text: "Start the containerized controller and ArduPilot services, load the competition world, connect to SITL over MAVLink, and verify the vehicle heartbeat before issuing flight commands."
      },
      {
        title: "02 — Take off & acquire",
        text: "Arm the Iris, establish a safe tracking altitude, acquire the yellow guide path from the downward camera, and convert its image-space position into steering corrections."
      },
      {
        title: "03 — Follow & identify",
        text: "Track straight and curved route segments between airports while detecting AprilTags and pad markings to determine airport identity and landing status."
      },
      {
        title: "04 — Execute mission",
        text: "Match observed airports against the externally supplied Airports list, approach the requested pad, align over its center, and perform the required landing behavior."
      },
      {
        title: "05 — Validate",
        text: "Run the same flight script against the containerized grading stack so camera access, MAVLink communication, dependencies, and mission behavior remain portable."
      }
    ],
    features: [
      "Competition-specific 8 m × 8 m Webots airport arena with six raised landing pads",
      "Iris quadcopter model connected to accelerometer, IMU, gyroscope, GPS, motors, and camera",
      "Downward-facing 640×480 camera streamed from the simulator for visual navigation",
      "Yellow straight and curved route geometry designed for camera-based path following",
      "AprilTag and numbered pad textures for airport identity and state recognition",
      "ArduPilot SITL integration through the official Webots vehicle-controller pattern",
      "PyMAVLink and DroneKit-compatible TCP endpoints for Python flight control",
      "Docker/Podman services, noVNC MAVProxy access, helper scripts, and cross-platform setup documentation"
    ],
    outcome: "The repository delivers a portable, grading-aligned foundation for the RoboGames autonomous-navigation task: a complete airport world, simulated Iris sensor and actuator model, ArduPilot SITL bridge, camera transport, MAVLink access, and scripted container workflow. It cleanly separates vehicle simulation and stabilization from the Python mission layer, allowing navigation strategies to be developed and evaluated against a consistent environment.",
    future: [
      "Commit the Task/flight.py navigation implementation as normal tracked source rather than an unresolved gitlink.",
      "Add recorded mission runs and quantitative results for route-tracking error, tag-detection range, landing accuracy, and completion time.",
      "Introduce automated headless smoke tests that verify SITL heartbeat, camera frames, arming, takeoff, and controlled landing.",
      "Add recovery states for temporary line loss, missed tags, overshoot, and failed landing-pad acquisition."
    ],
    description: [
      "Created the Webots-based Phase 2 airport environment used to develop and grade an autonomous Iris quadcopter mission.",
      "Connected Webots vehicle physics and sensors to ArduPilot SITL through an external Python controller and MAVLink endpoints.",
      "Exposed a downward camera stream for yellow-line tracking and AprilTag-based airport recognition.",
      "Packaged the multi-process simulator as a reproducible Docker/Podman workflow with Linux and Windows guidance."
    ]
  },
  {
    id: "dengue-detection",
    title: "Dengue Detection System",
    subtitle: "Dual-Wavelength Optical Perfusion Research Prototype",
    category: "Embedded & PCB",
    period: "Apr 2026 - Present",
    featured: false,
    bentoSize: "medium",
    tools: ["Photoplethysmography", "Red & IR Sensing", "Pulse-Oximetry Principles", "Biomedical Optics", "Embedded Systems", "Signal Processing", "Data Analysis"],
    summary: "An in-progress non-invasive research system using red and infrared optical signals, pulse-oximeter-inspired sensing, and mathematical perfusion features to investigate dengue-screening indicators.",
    intro: "This ongoing research project explores whether a compact optical instrument can capture perfusion-related features that may support dengue screening. Inspired by pulse oximetry, the prototype illuminates tissue with red and infrared light, records the returned or transmitted photoplethysmographic signals, and mathematically compares their pulsatile and baseline components. The work is currently focused on sensing quality, feature extraction, repeatability, and comparison with reference measurements—not clinical diagnosis.",
    metrics: [
      { value: "2", label: "optical wavelengths" },
      { value: "AC + DC", label: "signal components analyzed" },
      { value: "R", label: "red-to-IR normalized ratio" },
      { value: "Ongoing", label: "research status" }
    ],
    architecture: [
      {
        title: "Dual-wavelength illumination",
        text: "Red and infrared emitters probe tissue at two wavelengths where oxygenated and deoxygenated hemoglobin exhibit different absorption behavior. Alternating the emitters allows both channels to share a photodetector while remaining distinguishable in time."
      },
      {
        title: "Optical acquisition",
        text: "A photodetector and analog front end convert the received light into electrical signals. Careful gain, filtering, ambient-light rejection, and sensor placement are needed because the useful pulsatile component is small and sensitive to motion and contact pressure."
      },
      {
        title: "PPG signal decomposition",
        text: "Each red and infrared waveform is separated into a slowly varying DC baseline and an AC component associated with pulsatile blood-volume change. Signal-quality checks prevent calculations from using clipped, noisy, or motion-corrupted samples."
      },
      {
        title: "Mathematical feature extraction",
        text: "The normalized optical ratio is calculated as R = (ACred/DCred) ÷ (ACir/DCir). This compensates for absolute brightness differences and forms a foundation for extracting oxygenation- and perfusion-related features alongside timing and waveform measurements."
      },
      {
        title: "Research interpretation",
        text: "Computed features are intended for comparison with controlled reference data and relevant clinical measurements. Any dengue-screening relationship must be established statistically across representative subjects before the system can support medical conclusions."
      }
    ],
    taskSectionTitle: "Current Research Pipeline",
    taskPhases: [
      {
        title: "01 — Illuminate & sample",
        text: "Alternate the red and infrared light sources and synchronously sample the photodetector so each measurement is assigned to the correct wavelength."
      },
      {
        title: "02 — Clean the signals",
        text: "Remove ambient and high-frequency interference, establish stable baselines, and detect motion or poor-contact intervals that would make the optical calculation unreliable."
      },
      {
        title: "03 — Extract PPG components",
        text: "Estimate the AC pulse amplitude and DC optical level for both channels over a consistent analysis window."
      },
      {
        title: "04 — Calculate features",
        text: "Compute normalized red and infrared amplitudes, their ratio-of-ratios, pulse timing, waveform morphology, and candidate perfusion or recovery features."
      },
      {
        title: "05 — Evaluate",
        text: "Repeat measurements under controlled conditions and compare the derived features with reference devices and clinically relevant data before selecting any screening model or threshold."
      }
    ],
    features: [
      "Pulse-oximeter-inspired red and infrared optical measurement",
      "Photoplethysmographic capture of peripheral blood-volume changes",
      "AC/DC decomposition for both wavelength channels",
      "Normalized red-to-infrared ratio-of-ratios calculation",
      "Signal-quality assessment for motion, ambient light, contact, and low-perfusion artifacts",
      "Candidate extraction of perfusion, pulse, waveform, and optical recovery features",
      "Embedded acquisition pathway intended for a compact non-invasive prototype",
      "Research-first validation workflow without premature diagnostic claims"
    ],
    outcome: "The project is still in development. The present work defines the dual-wavelength sensing method and the mathematical pipeline needed to turn red and infrared PPG measurements into normalized optical and perfusion features. Hardware characterization, dataset collection, statistical evaluation, and clinical validation remain necessary before determining whether these measurements can contribute meaningfully to dengue screening.",
    future: [
      "Complete the red/infrared emitter, photodetector, analog front-end, and embedded acquisition prototype.",
      "Validate the calculated optical features against a reference pulse oximeter and controlled perfusion measurements.",
      "Quantify repeatability and sensitivity to motion, skin contact, ambient light, temperature, pigmentation, and low perfusion.",
      "Collect ethically approved, clinically labelled data before training or evaluating any dengue-screening model.",
      "Define uncertainty and rejection criteria so poor-quality readings are never presented as medical results."
    ],
    description: [
      "Developing an optical research prototype based on the red and infrared sensing principles used in pulse oximetry.",
      "Separating the pulsatile AC and baseline DC components of both PPG channels for robust mathematical comparison.",
      "Calculating normalized red/infrared features, including the ratio R = (ACred/DCred) ÷ (ACir/DCir).",
      "Investigating whether the resulting oxygenation- and perfusion-related features can support future dengue-screening research."
    ]
  },
  {
    id: "analog-function-gen",
    title: "Analog Function Generator",
    subtitle: "Fully Analog Multi-Waveform Laboratory Instrument",
    category: "Signal Processing",
    period: "Aug 2025 - Dec 2025",
    featured: false,
    bentoSize: "medium",
    image: "/images/function-generator/isometric-view.png",
    heroFit: "stage",
    imageCaption: "Complete μSquad function-generator assembly with custom enclosure, front-panel controls, and integrated PCB.",
    tools: ["TL072 Op-Amps", "Analog Electronics", "Altium Designer", "Multisim", "SolidWorks", "Wien Bridge Oscillator", "Schmitt Trigger", "3D Printing"],
    summary: "A mains-powered laboratory instrument generating five adjustable analog waveforms across the 20 Hz–20 kHz audio range from a custom PCB and enclosure.",
    repository: "https://github.com/rus1ru/Function-Generator-EN2091",
    intro: "Designed and built from first principles for the EN2091 Laboratory Practice module, the μSquad function generator produces sine, square, triangle, sawtooth, and variable-duty-cycle PWM signals without digital synthesis. Separate analog oscillator paths, switched timing capacitors, amplitude and offset conditioning, a custom two-layer PCB, and a purpose-built enclosure combine into a self-contained laboratory instrument.",
    metrics: [
      { value: "20 Hz–20 kHz", label: "rated frequency range" },
      { value: "±12 V", label: "maximum output swing" },
      { value: "1–99%", label: "adjustable PWM duty cycle" },
      { value: "4", label: "selectable frequency bands" }
    ],
    contributions: [
      "Designed the complete product enclosure and lid in SolidWorks around the 90 × 110 mm PCBA, mains hardware, ventilation, front-panel controls, output terminals, and assembly clearances.",
      "Built the full mechanical assembly using the exported PCBA STEP model and integrated rotary switches, potentiometers, connectors, and multiple knob variants for fit and usability checks.",
      "Produced the final isometric product visualization used to communicate the completed instrument and its control layout.",
      "Authored the user manual covering installation, mains safety, oscilloscope connection, waveform and range selection, and operation of every front-panel control."
    ],
    architecture: [
      {
        title: "Square-wave core",
        text: "A TL072 stage operates as a Schmitt-trigger comparator with positive feedback. Its hysteretic switching produces the master square wave, while selectable timing capacitors divide the operating span into four practical frequency bands."
      },
      {
        title: "Triangle, sawtooth & PWM",
        text: "An op-amp integrator converts the square wave into linear rising and falling ramps. Varying the comparator duty cycle changes the ramp symmetry, producing sawtooth behavior and providing continuously adjustable 1–99% PWM control."
      },
      {
        title: "Low-distortion sine path",
        text: "A separate Wien-bridge oscillator uses a lead-lag RC feedback network and automatic gain stabilization. Switched capacitor banks and fine resistance control tune the sine output across the audio-frequency range."
      },
      {
        title: "Output & power system",
        text: "Amplitude and DC-offset stages condition the selected waveform before the 50 Ω output. An internal linear supply converts 230 V AC into regulated dual rails for the op-amps, references, and output-drive circuitry."
      },
      {
        title: "Integrated product",
        text: "A two-layer FR4 PCB consolidates the oscillator, shaping, selection, conditioning, and power sections. The 3D-printed PLA enclosure packages the board behind a labelled control panel with banana terminals, ventilation, and serviceable upper and lower shells."
      }
    ],
    taskSectionTitle: "Signal Generation Chain",
    taskPhases: [
      {
        title: "01 — Select waveform",
        text: "A rotary selector routes the independent sine oscillator or the shared square, triangle, and sawtooth generator into the output-conditioning path."
      },
      {
        title: "02 — Set frequency band",
        text: "A four-position capacitor bank establishes the coarse operating range; dedicated sine and square-family frequency controls then tune the exact output frequency."
      },
      {
        title: "03 — Shape the signal",
        text: "Comparator hysteresis establishes the square wave, integration creates the triangle, and duty-cycle asymmetry produces sawtooth and PWM behavior."
      },
      {
        title: "04 — Condition the output",
        text: "Front-panel amplitude and offset controls scale and translate the selected waveform for the connected experiment while preserving the instrument's supply limits."
      },
      {
        title: "05 — Validate & package",
        text: "Part-level and full-circuit Multisim models support circuit verification, while the PCBA STEP model and SolidWorks assembly verify mechanical fit before fabrication and enclosure assembly."
      }
    ],
    features: [
      "Sine, square, triangle, sawtooth, and PWM waveform generation using only analog circuitry",
      "20 Hz–20 kHz rated coverage through four switched capacitor ranges and fine frequency controls",
      "Adjustable output amplitude and positive or negative DC offset for every primary waveform",
      "Continuously variable 1–99% square-wave duty cycle",
      "Wien-bridge sine oscillator with automatic gain stabilization",
      "Shared Schmitt-trigger, integrator, and diode-shaping topology for square, triangle, and sawtooth signals",
      "Up to ±12 V output swing with a nominal 50 Ω output interface",
      "Custom Altium schematic and two-layer 90 × 110 mm FR4 PCB",
      "Self-contained 230 V AC linear supply and ventilated 3D-printed enclosure",
      "Dedicated waveform, frequency-range, sine-frequency, square-frequency, PWM, amplitude, and offset controls"
    ],
    outcome: "The project progressed from individual oscillator simulations to a documented, mechanically integrated laboratory instrument. The repository preserves the editable Altium design, Multisim simulation work, PCBA exchange model, complete SolidWorks enclosure assembly, product datasheet, presentation, and operating manual—providing both the engineering source and the documentation needed to reproduce or refine the generator.",
    future: [
      "Measure and publish total harmonic distortion, amplitude flatness, frequency accuracy, rise time, and load regulation across every range.",
      "Add short-circuit and external-overvoltage protection to the output stage.",
      "Improve mains isolation, strain relief, earthing, fusing, and flame-retardant enclosure materials for routine laboratory use.",
      "Add calibrated frequency and amplitude readouts while keeping the signal-generation path fully analog."
    ],
    description: [
      "Combined a Wien-bridge sine oscillator with a Schmitt-trigger and integrator signal chain to generate five useful laboratory waveforms.",
      "Used switched capacitor banks and fine controls to span 20 Hz–20 kHz with adjustable amplitude, offset, and PWM duty cycle.",
      "Consolidated the analog and power circuitry on a custom two-layer Altium PCB with a 230 V AC internal supply.",
      "Designed the complete SolidWorks enclosure and assembly around the PCBA and authored the final user-facing operating documentation."
    ]
  },
  /* Temporarily hidden.
  {
    id: "class-d-amplifier",
    title: "Class D Audio Amplifier",
    subtitle: "High Efficiency Power Amplifier",
    category: "Signal Processing",
    period: "Feb 2026 - July 2026",
    featured: false,
    bentoSize: "medium",
    image: "/images/cable_robot.png",
    tools: ["Power Electronics", "Multisim", "Signal Processing", "MOSFET Switching", "Filter Design"],
    summary: "High-efficiency Class D switching power audio amplifier with low THD and active LC output filtering.",
    description: [
      "Designed and tested a Class D audio amplifier using pulse-width modulation (PWM) power electronics principles.",
      "Simulated high-frequency MOSFET switching loops in Multisim to maximize efficiency while suppressing harmonic noise.",
      "Implemented LC low-pass output filtering to reconstruct clean high-fidelity audio signals."
    ]
  },
  */
  {
    id: "robot-competition",
    title: "Arena Robot",
    subtitle: "Competition Robot & Ball-Manipulation System",
    category: "Robotics & Hardware",
    period: "Aug 2025 - Dec 2025",
    featured: false,
    bentoSize: "medium",
    image: "/images/robot-design/robot-built-front.jpg",
    tools: ["Arduino Mega 2560", "PlatformIO", "Embedded C++", "PID Control", "VL53L0X", "MPU6050", "SolidWorks", "BTS7960"],
    summary: "A task-driven autonomous competition robot combining encoder-controlled mobility, line and wall following, arena perception, color recognition, obstacle avoidance, and ball manipulation.",
    repository: "https://github.com/NileshAm/Robot-Design-and-Competition",
    intro: "A ground-up autonomous robot created for the EN2533 Robot Design and Competition module. It was engineered to progress through a multi-stage arena using line, wall, distance, inertial, encoder, and color feedback—then interact with game objects through a servo-driven grabber and dedicated actuation mechanisms.",
    metrics: [
      { value: "7", label: "competition task modules" },
      { value: "8", label: "reflective line sensors" },
      { value: "5", label: "VL53L0X ToF sensors" },
      { value: "2", label: "encoder drive motors" }
    ],
    contributions: [
      "Developed and refined the robot chassis around drivetrain, sensor, electronics, wiring, and manipulation-system clearances.",
      "Created the integrated SolidWorks assembly and fabrication drawings, including revisioned chassis DXFs and a STEP export for cross-platform mechanical review.",
      "Designed and packaged the front ball-handling mechanism, including geared components, ball carrier geometry, bearing structures, servo mounting, and IR-array positioning.",
      "Developed the solenoid mount and actuation hardware as printable parts, with assembly-level checks for stroke alignment, retention, and service access."
    ],
    architecture: [
      {
        title: "Motion & control",
        text: "An Arduino Mega commands two 12 V, 280 RPM JGA25-370 encoder motors through independent BTS7960 drivers. Closed-loop routines combine wheel ticks, PID correction, and MPU6050 yaw for straight motion and controlled turns."
      },
      {
        title: "Arena perception",
        text: "Eight reflective sensors resolve lines, junctions, and surface transitions; five independently addressed VL53L0X sensors measure walls and obstacles; dual color sensors classify balls and target areas."
      },
      {
        title: "Object interaction",
        text: "A custom grabber uses positional servos for gripping and lifting, current feedback for load awareness, geared mechanical linkages, and a ball-handling tray for collection, transport, and release tasks."
      }
    ],
    taskPhases: [
      {
        title: "Line, ramp & junction navigation",
        text: "Weighted IR-array feedback drives PID line following, detects edges and junction states, and transitions to gyro-stabilized motion when track markings temporarily disappear."
      },
      {
        title: "Wall following & obstacle detection",
        text: "Multiple ToF viewpoints support single-wall and corridor control, front obstacle checks, box detection, end-of-wall recognition, and distance-triggered task transitions."
      },
      {
        title: "Arena traversal & mapping",
        text: "The Traverse module tracks x/y position and heading across a 9×9 grid, records obstacles and boxes, and implements left/right bypass maneuvers during systematic coverage."
      },
      {
        title: "Object identification & handling",
        text: "Color sampling uses repeated readings and majority selection, while grabber routines coordinate grip, lift, transport, release, and current-based mechanism feedback."
      },
      {
        title: "Seven-stage competition flow",
        text: "Dedicated Task1–Task7 modules encode the arena sequence, including route traversal, ramp movement, binary track decoding, color-aware ball handling, gate detection, and the final delivery/shooting phase."
      },
      {
        title: "Setup, tuning & diagnostics",
        text: "An OLED and three-button menu exposes task selection and diagnostics, while modular PID setters and an ESP32-based updater support rapid controller tuning between test runs."
      }
    ],
    features: [
      "Encoder- and IMU-assisted straight driving, calibrated turns, and distance-based motion",
      "PID line following, single-wall tracking, double-wall centering, and ramp control",
      "Independent I²C addressing and offsets for five ToF sensing positions",
      "Color classification at both the grabber and arena-box interfaces",
      "11.1 V 4800 mAh LiPo supply with separated electronics and high-power regulation rails",
      "OLED initialization feedback, task menu, push-button controls, and serial diagnostics",
      "Reusable C++ libraries for motors, sensors, PID, grabber, robot behavior, menus, and task logic",
      "Physical safety isolation through a master switch and deliberate power-domain separation"
    ],
    gallery: [
      { src: "/images/robot-design/robot-built-front.jpg", alt: "Completed autonomous competition robot", caption: "The completed robot with electronics, drivetrain, tray, and manipulation systems installed" },
      { src: "/images/robot-design/robot-built-side.jpg", alt: "Real competition robot grabber and tray", caption: "Physical grabber, geared linkages, color sensing, and ball-handling tray" },
      { src: "/images/robot-design/full-assembly.png", alt: "Complete competition robot CAD assembly", caption: "Full-system CAD used to coordinate the chassis and front mechanism" },
      { src: "/images/robot-design/grabber.png", alt: "Robot ball grabber mechanism", caption: "Geared grabber, servo actuation, IR array, and ball interface" },
      { src: "/images/robot-design/solenoid.png", alt: "Robot solenoid mechanism", caption: "Guided solenoid actuator and custom printable mounting system" }
    ],
    outcome: "The project progressed from subsystem models and modular firmware into a complete physical robot integrating sensing, control, power electronics, navigation, and object manipulation. The repository preserves both the built platform and the seven-stage competition software, alongside test utilities and tunable controller parameters.",
    future: [
      "Complete and consolidate remaining task-level TODO paths into a single explicit competition state machine.",
      "Add sensor health checks, motion timeouts, and recovery behavior for failed readings or stalled mechanisms.",
      "Log lap, task, localization, and controller data for evidence-based PID and route optimization.",
      "Reduce wiring complexity through a custom distribution PCB and locking connectors."
    ],
    description: [
      "Built on an Arduino Mega 2560 to accommodate the unusually high sensor and actuator I/O count while keeping task execution deterministic.",
      "Drove two encoder-equipped DC motors through BTS7960 bridges, with separate PID controllers for straight motion, turning, line following, ramps, and wall-relative movement.",
      "Fused IR, ToF, wheel-encoder, MPU6050, current, and color feedback into a shared Robot abstraction used by every arena task.",
      "Structured the codebase into reusable hardware libraries, robot-level behaviors, a 9×9 traversal model, and seven selectable competition task modules."
    ]
  }
];

export const skillCategories = [
  {
    title: "Programming & Firmware",
    icon: "Code",
    skills: ["Python", "C", "C++", "MATLAB", "Arduino (C/C++)", "Embedded C", "Linux Environment"]
  },
  {
    title: "Hardware, PCB & Robotics",
    icon: "Cpu",
    skills: ["SolidWorks 3D CAD", "Altium Designer", "EasyEDA", "ESP32", "STM32", "Circuit Design", "Power Electronics", "Multisim"]
  },
  {
    title: "DevOps, ML & Data Science",
    icon: "Layers",
    skills: ["Git & GitHub", "Docker", "PyTorch", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "LaTeX", "SciPy"]
  },
  {
    title: "Specialized & Research",
    icon: "Sparkles",
    skills: ["Technical Documentation", "Experiment Design", "Rapid Prototyping", "Photoshop", "Canva", "Team Leadership"]
  }
];

export const leadershipExperiences = [
  {
    id: "igt-vp",
    role: "Local Committee Vice President - iGT Sales & Innovations",
    organization: "AIESEC in University of Moratuwa",
    period: "Feb 2025 - Feb 2026",
    badge: "🏆 Best Local Committee in iGT Award (2025/26)",
    description: [
      "Led the iGT function, securing the top national award for Best Local Committee in iGT across Sri Lanka.",
      "Oversaw an executive board managing over 40 active members to execute organizational goals and strategy.",
      "Initiated internal performance programs that boosted team productivity and engagement to unprecedented levels."
    ]
  },
  {
    id: "lead-cs",
    role: "Organising Committee Vice President - Partnership Development",
    organization: "LEAD CS 11.0 | AIESEC in University of Moratuwa",
    period: "Oct 2024 - Feb 2025",
    badge: "Flagship Leadership Development Conference",
    description: [
      "Led the partnership development team for University of Moratuwa's flagship youth leadership development conference.",
      "Secured corporate sponsorships and long-term event partnerships."
    ]
  },
  {
    id: "idealize",
    role: "Organising Committee Member - Partnership Development",
    organization: "IDEALIZE '24 | AIESEC in University of Moratuwa",
    period: "Apr 2024 - Sep 2025",
    badge: "National Web & Mobile Hackathon",
    description: [
      "Contributed to partnership development and sponsor acquisition for IDEALIZE '24, empowering school and university app developers."
    ]
  }
];

export const industrialExperiences = [
  {
    id: "filotex",
    role: "Industrial Engineering Intern",
    organization: "Filotex Lanka (PVT) LTD",
    period: "June 2023 - Dec 2023",
    location: "Katunayake, Sri Lanka",
    badge: "Industrial Internship",
    description: [
      "Gained operational and strategic management exposure through active participation in executive leadership meetings.",
      "Assisted in workflow restructuring, departmental reorganization, and administrative efficiency optimizations.",
      "Supported new strategic initiatives, research documentation, and workflow implementations."
    ]
  }
];

export const certificates = [
  { title: "Cambridge IELTS Examination", detail: "Overall Band 7.5 (Listening: 8.5, Reading: 8.0)", date: "May 2023" },
  { title: "Australian Chemistry Quiz", detail: "Higher Distinction Award", date: "June 2020" },
  { title: "Cambridge First Certificate in English", detail: "C1 Advanced Level", date: "Dec 2020" },
  { title: "Trinity College London Music Exams", detail: "Theory & Practical Certifications", date: "2014 - 2018" }
];
