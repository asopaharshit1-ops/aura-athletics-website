export interface Discipline {
  id: string;
  number: string;
  tag: string;
  title: string;
  description: string;
  image?: string;
  metrics: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
  ctaText: string;
  equipment: string[];
  protocol: string;
  idealFor: string;
}

export const DISCIPLINE_DATA: Discipline[] = [
  {
    id: "strength",
    number: "01",
    tag: "STRENGTH",
    title: "Heavy Strength & Powerlifting",
    description: "Tier-1 calibrated Eleiko steel plates, competition squat cages, and calibrated deadlift platforms.",
    metrics: [
      { label: "Velocity Tracker", value: "Linear Transducer" },
      { label: "Max Target", value: "92-100% 1RM" },
      { label: "Typical Session", value: "75 MIN" }
    ],
    ctaText: "Inspect Lab",
    equipment: ["Eleiko IPF Competition Bars", "Calibrated Cast Iron Discs", "Custom Power Racks w/ Band Pegs", "GymAware Linear Encoders"],
    protocol: "Barbell kinematic profiling, eccentric tempo control, intra-set velocity loss monitoring (<15%).",
    idealFor: "Powerlifters, strength athletes, and trainees targeting neuromuscular motor unit recruitment."
  },
  {
    id: "metabolic",
    number: "02",
    tag: "METABOLIC",
    title: "HIIT & Engine Lab",
    description: "Lactate buffering systems, SkiErgs, assault runners, and high-frequency metabolic intervals.",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1VV1STX0vYyjidmcNWKcH6dONez2H-c3M28HRtdKU2ZrsITWgFgaBWQuNW6hMkZCc6Mmshh1_TvPmZxGkKXhnlB1mDm-_EXT5COehVD0M3bC-2BTLTfH12vyUK67dlHfyOCROQF_WYDhPEVJPOvWbnecKC1-syNZMentOlUvM_1Qq4gWrks4jvcQzFhgppPcfJO8RcJsGXlKt5ucQKbZmy3TSkb4ktpa4ciZqXNcTN3wJ5WgzcgQ_OjRA",
    metrics: [
      { label: "Heart Rate Band", value: "Zone 4 & 5", highlight: true },
      { label: "Focus", value: "VO2 Max / Stamina" },
      { label: "Typical Session", value: "45 MIN" }
    ],
    ctaText: "View Engine Matrix",
    equipment: ["Concept2 SkiErg & RowErg", "Woodway Curve Non-Motorized Treadmills", "Assault AirBike Elite", "Moxy NIRS Muscle Oxygen Monitors"],
    protocol: "High-density interval pacing, lactate threshold accumulation, active aerobic recovery replenishment.",
    idealFor: "Hyrox contenders, combat sport athletes, and high-output cardiovascular conditioning."
  },
  {
    id: "agility",
    number: "03",
    tag: "AGILITY",
    title: "Functional Movement & Speed",
    description: "40-meter indoor turf sprint lanes, torque-drive weighted sleds, and multidirectional plyometric boxes.",
    metrics: [
      { label: "Surface", value: "Sprint Turf PRO" },
      { label: "Biometric Key", value: "Contact Time (ms)" },
      { label: "Typical Session", value: "60 MIN" }
    ],
    ctaText: "Inspect Arena",
    equipment: ["Torque Tank M4 Resistance Sleds", "Speed Trap Timing Gates", "Soft Plyometric Vault Boxes", "VertiMax Raptor Systems"],
    protocol: "Ground reaction force enhancement, multidirectional deceleration mechanics, acceleration kinematics.",
    idealFor: "Field athletes, sprinters, and trainees prioritizing joint resiliency and athletic explosiveness."
  },
  {
    id: "recovery",
    number: "04",
    tag: "RECOVERY",
    title: "Regeneration & Cryo Spa",
    description: "Cold plunge immersion tanks (3°C), full-spectrum infrared cedar saunas, and hyperbaric chambers.",
    metrics: [
      { label: "Plunge Temp", value: "3°C / 37.4°F" },
      { label: "Sauna Type", value: "Far-Infrared 85°C" },
      { label: "Protocol Sync", value: "Parasympathetic", highlight: true }
    ],
    ctaText: "Book Recovery Suite",
    equipment: ["Edge Theory Labs Chilled Immersion Plunge", "Clearlight Sanctuary Full-Spectrum Sauna", "NormaTec 3 Pulse Compression Boots", "Mild Hyperbaric Chamber 1.5 ATA"],
    protocol: "Vasoconstriction / vasodilation cycling (Contrast therapy: 15 min 85°C sauna + 3 min 3°C cold plunge).",
    idealFor: "Central nervous system replenishment, rapid soreness dissipation, and sleep architecture optimization."
  }
];

export interface Coach {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  quote: string;
  bio: string;
  stats: {
    value: string;
    label: string;
  }[];
  tags: string[];
}

export const COACH_DATA: Coach[] = [
  {
    id: "elena",
    name: "Elena Vance",
    role: "Head of Biomechanics",
    specialty: "Olympic Certified Head Coach",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1wEGpYSy4MouXL8PsZNOiGMLVfxnBKfKQaoD1oQGfSHCLm9u3KCfFop5z76rukGwqZDAFDOXg0PXes0CVyNRVVr03ZoBvf5LEjgfJr0Dw5A2-AdSLztgWYswen-4cJM-Y5p3pvfyyoh8u9G-ujtdCANImBHmQsJ-Ql2rYjbr0nFgVdDOa0N8g4dIvEvpDGcz4JcEB7qynCY5bwLtAn3yn2_jpu6pmfP0n0Wx7SBmGuaXY9hUUWk5D",
    quote: "True force is quiet. It begins with angular discipline.",
    bio: "Former national Olympic lifter with 12 years directing elite human performance pipelines. Elena fuses joint kinesthetics with neurological readiness protocols to unlock raw power output while eradicating movement dysfunction.",
    stats: [
      { value: "14", label: "Olympic Athletes Trained" },
      { value: "CSCS", label: "Certified Strength Spec." },
      { value: "10k+", label: "Hours Barbell Coaching" }
    ],
    tags: ["Kinematic Analysis", "Lactate Clearance", "Clean & Jerk"]
  },
  {
    id: "marcus",
    name: "Marcus Thorne",
    role: "Lead Weightlifting Scientist",
    specialty: "USAW Senior International Coach",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVDJ2Oqn4E9hvcLxCMeOI24-Cph_B4HxUeeNkzkjEYNXWP9dyuvX2ZbUf2VOs89j-jOAAKPK06ndxinXXDulv8rswrfdmJhPqQ7b_rKEDUTQ8CI88gMc1FqW592Xr8dD7T5ydUcHix6vLALOV3iV1X09jY4hm5d5lRFBxqJcfgLSbEGCYwyC7urNbpBpWAXyr4Hp3mEXG-o26qcJYPIhwx1co86bOS3-qJZ-uhs4Uoo1yyirg5_iD5",
    quote: "Velocity dictates adaptation. If the barbell slows down, your program is obsolete.",
    bio: "Ex-national team biomechanist specializing in linear transducer analytics, explosive triple extension mechanics, and posterior chain hypertrophy protocols.",
    stats: [
      { value: "9+", label: "World Championship Medals" },
      { value: "M.S.", label: "Exercise Physiology" },
      { value: "8k+", label: "VBT Data Profiles" }
    ],
    tags: ["Velocity-Based Training", "Snatch Kinematics", "Bar Path Laser Tracking"]
  },
  {
    id: "maya",
    name: "Dr. Maya Lin",
    role: "Director of Recovery & Physiology",
    specialty: "Ph.D. Sports Biomechanics",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1VV1STX0vYyjidmcNWKcH6dONez2H-c3M28HRtdKU2ZrsITWgFgaBWQuNW6hMkZCc6Mmshh1_TvPmZxGkKXhnlB1mDm-_EXT5COehVD0M3bC-2BTLTfH12vyUK67dlHfyOCROQF_WYDhPEVJPOvWbnecKC1-syNZMentOlUvM_1Qq4gWrks4jvcQzFhgppPcfJO8RcJsGXlKt5ucQKbZmy3TSkb4ktpa4ciZqXNcTN3wJ5WgzcgQ_OjRA",
    quote: "Performance is only as deep as your autonomic nervous system's capacity to adapt.",
    bio: "Pioneered contrast hydrotherapy protocols for ultra-endurance athletes. Specializes in heart rate variability (HRV) sync, hypoxic conditioning, and mitochondrial density.",
    stats: [
      { value: "18", label: "Peer-Reviewed Studies" },
      { value: "Ph.D.", label: "Sports Biomechanics" },
      { value: "99.2%", label: "Client Injury Recovery" }
    ],
    tags: ["HRV Synchronization", "Cryo Protocols", "Infrared Hyperthermia"]
  }
];

export interface MembershipTier {
  id: string;
  tierNumber: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceAnnual: number;
  popular?: boolean;
  ctaText: string;
  features: {
    included: boolean;
    text: string;
    bold?: boolean;
  }[];
}

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: "essential",
    tierNumber: "Tier 01",
    name: "Essential",
    description: "Standard floor and equipment access for independent, dedicated conditioning.",
    priceMonthly: 69,
    priceAnnual: 55,
    popular: false,
    ctaText: "Select Essential Pass",
    features: [
      { included: true, text: "Off-Peak & Standard Hours Floor Access" },
      { included: true, text: "Eleiko Free Weight & Barbell Arena" },
      { included: true, text: "Locker Room & Luxury Rain Showers" },
      { included: false, text: "Cold Plunge & Cryo Recovery Access" },
      { included: false, text: "Monthly Biometric Coach Telemetry" }
    ]
  },
  {
    id: "pro",
    tierNumber: "Tier 02",
    name: "Pro Athlete",
    description: "The definitive performance regimen. Unrestricted round-the-clock physical access.",
    priceMonthly: 129,
    priceAnnual: 105,
    popular: true,
    ctaText: "Initialize Pro Access",
    features: [
      { included: true, text: "24/7/365 Unlimited Keycard Access", bold: true },
      { included: true, text: "All Specialized Conditioning & Engine Labs" },
      { included: true, text: "Uncapped Cold Plunge & Infrared Sauna" },
      { included: true, text: "Monthly Coach Biometrics & Movement Audit" },
      { included: true, text: "Digital Telemetry App + Live Heart-Rate Sync" }
    ]
  },
  {
    id: "vip",
    tierNumber: "Tier 03",
    name: "VIP Sanctuary",
    description: "The pinnacle private athletics suite. Total concierge convenience and luxury recovery.",
    priceMonthly: 199,
    priceAnnual: 159,
    popular: false,
    ctaText: "Request VIP Keycard",
    features: [
      { included: true, text: "Private Assigned Locker Suite & Towel Service" },
      { included: true, text: "Complimentary Daily Performance Apparel Laundry" },
      { included: true, text: "Weekly 1-on-1 Kinematic Coach Session" },
      { included: true, text: "Unlimited Complimentary Guest Passes" },
      { included: true, text: "Hyperbaric Oxygen & NormaTec Recovery Bar" }
    ]
  }
];

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Aura is completely stripped of fitness commercialism. You step into pure athletic intent: Eleiko calibrated gear, zero distraction, and coaching that understands structural mechanics down to the millimeter.",
    author: "Marcus Kane",
    title: "Regional Weightlifting Medalist • Member 2 Years",
    initials: "MK"
  },
  {
    quote: "The engine lab combined with cold plunge protocols cut my lactate clearance time by half. There is simply no comparable training sanctuary in the sector.",
    author: "Dr. Sarah Lin",
    title: "Competitive Marathoner & Sports Physician • Member 1 Year",
    initials: "SL"
  },
  {
    quote: "24/7 keycard access that actually delivers Olympic-grade equipment at 4 AM is a game changer for elite athletes balancing intense career demands.",
    author: "Julian Reynolds",
    title: "Hyrox Pro Division Contender • Member 18 Months",
    initials: "JR"
  }
];

export interface ExerciseItem {
  id: string;
  name: string;
  category: "Strength" | "Metabolic" | "Agility" | "Recovery";
  targetMuscles: string;
  equipment: string;
  recommendedSets: string;
  recommendedReps: string;
  velocityTarget: string;
  tempo: string;
  cues: string[];
}

export const EXERCISE_LIBRARY: ExerciseItem[] = [
  {
    id: "clean-jerk",
    name: "Olympic Clean & Jerk",
    category: "Strength",
    targetMuscles: "Posterior Chain, Deltoids, Core, Quadriceps",
    equipment: "Eleiko Olympic Barbell + Calibrated Bumper Plates",
    recommendedSets: "5 sets",
    recommendedReps: "1-2 reps",
    velocityTarget: "1.25 m/s (First Pull)",
    tempo: "Explosive (X-0-X)",
    cues: ["Keep bar tight against shins on break", "Violent hip extension at mid-thigh pocket", "Punch elbows up into front rack instantly"]
  },
  {
    id: "back-squat",
    name: "Barbell Back Squat (Low-Bar)",
    category: "Strength",
    targetMuscles: "Gluteus Maximus, Hamstrings, Quadriceps, Erectors",
    equipment: "Eleiko Competition Squat Rack + Calibrated Steel Discs",
    recommendedSets: "4 sets",
    recommendedReps: "3-5 reps",
    velocityTarget: "0.55 - 0.70 m/s",
    tempo: "3-1-X-1",
    cues: ["Root tripod foot into platform", "Drive knees outward along toe angle", "Brace 360° intra-abdominal pressure into belt"]
  },
  {
    id: "deadlift",
    name: "Conventional Deficit Deadlift",
    category: "Strength",
    targetMuscles: "Hamstrings, Spinal Erectors, Latissimus, Trapezius",
    equipment: "Eleiko Calibrated Deadlift Platform + Chalk Station",
    recommendedSets: "3 sets",
    recommendedReps: "3 reps",
    velocityTarget: "0.45 - 0.60 m/s",
    tempo: "2-0-X-1",
    cues: ["Engage lats to remove slack from bar before lift", "Push the floor away with midfoot", "Maintain neutral cervical spine"]
  },
  {
    id: "skierg-intervals",
    name: "SkiErg Anaerobic Threshold Pacing",
    category: "Metabolic",
    targetMuscles: "Latissimus Dorsi, Triceps, Core, Glutes",
    equipment: "Concept2 SkiErg with PM5 Telemetry Monitor",
    recommendedSets: "6 rounds",
    recommendedReps: "500m sprint / 60s rest",
    velocityTarget: "Sub 1:42 / 500m split",
    tempo: "Cadence 42 SPM",
    cues: ["Hinge deeply from hips without collapsing lumbar", "Drive through core crunch on downward stroke", "Quick recovery hands overhead"]
  },
  {
    id: "airbike-burst",
    name: "Assault AirBike Lactate Flush",
    category: "Metabolic",
    targetMuscles: "Full Body Cardiovascular System",
    equipment: "Assault AirBike Elite Commercial",
    recommendedSets: "8 sets",
    recommendedReps: "20s max wattage / 40s cruising",
    velocityTarget: "> 850 Watts peak output",
    tempo: "Maximal RPM",
    cues: ["Drive push-pull equally through handles", "Keep chest proud to preserve diaphragm expansion", "Focus on nasal breathing during recovery cruise"]
  },
  {
    id: "sled-push",
    name: "Torque-Drive Heavy Sled Sprint",
    category: "Agility",
    targetMuscles: "Calves, Quadriceps, Gluteus Medius, Core",
    equipment: "Torque Tank M4 All-Surface Resistance Sled",
    recommendedSets: "5 runs",
    recommendedReps: "30 meters",
    velocityTarget: "Ground speed > 4.2 m/s",
    tempo: "Continuous drive",
    cues: ["Lock straight-line 45-degree body angle", "Drive knees high with dorsiflexed ankles", "Pound forefoot firmly into turf"]
  },
  {
    id: "contrast-therapy",
    name: "Autonomic Contrast Hydrotherapy",
    category: "Recovery",
    targetMuscles: "Central Nervous System, Cardiovascular Capillary Beds",
    equipment: "3°C Chilled Immersion Tub & 85°C Cedar Sauna",
    recommendedSets: "3 cycles",
    recommendedReps: "15 min Heat / 3 min Cold",
    velocityTarget: "HRR drop > 35 BPM in 120s",
    tempo: "Parasympathetic box breath",
    cues: ["Exhale slowly upon entering ice plunge (4-count in, 6-count out)", "Do not shiver voluntarily; relax shoulder girdle", "Dry off before entering far-infrared sauna"]
  }
];

export interface WorkoutSet {
  setNumber: number;
  weightKg: number;
  reps: number;
  targetRpe: number;
  actualRpe: number;
  velocity: number;
  completed: boolean;
}

export const INITIAL_WORKOUT_SETS: WorkoutSet[] = [
  { setNumber: 1, weightKg: 100, reps: 5, targetRpe: 6.5, actualRpe: 6.5, velocity: 0.88, completed: true },
  { setNumber: 2, weightKg: 120, reps: 4, targetRpe: 7.5, actualRpe: 7.5, velocity: 0.74, completed: true },
  { setNumber: 3, weightKg: 135, reps: 3, targetRpe: 8.5, actualRpe: 8.5, velocity: 0.62, completed: true },
  { setNumber: 4, weightKg: 145, reps: 2, targetRpe: 9.0, actualRpe: 9.0, velocity: 0.54, completed: false },
  { setNumber: 5, weightKg: 150, reps: 1, targetRpe: 9.5, actualRpe: 0, velocity: 0, completed: false }
];
