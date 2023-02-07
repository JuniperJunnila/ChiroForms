//all groups must have:
// id, parentname, groupHeader, and at least one question styles qXX
//all questions must have:
// parentname, value: "", placeholder, input, and id
// optional description
// input can be "control", "select", "radio", "checkbox", or "range"
//  select, checkbox, and radio inputs must also have a an array of options called selections
//   and a name string

const formSeed = {
  group1: {
    id: "basic-information",
    name: "basic-information",
    parentname: "group1",
    groupHeader: "basic-information",
    q01: {
      parentname: "q01",
      value: "",
      placeholder: "Patient's Name",
      input: "control",
      description: "Name",
      id: "basic-name",
      name: "basic-name",
    },
    q02: {
      parentname: "q02",
      value: "",
      placeholder: "",
      input: "date",
      description: "Today's Date",
      id: "basic-today",
      name: "basic-today",
    },
    q03: {
      parentname: "q03",
      value: "",
      placeholder: "",
      input: "date",
      description: "Date of Accident",
      id: "basic-date",
      name: "basic-date",
    },
    q04: {
      parentname: "q04",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["Yes", "No"],
      description:
        "Did this accident occur during the course of your employment or in a company vehicle?",
      id: "basic-company",
      name: "basic-company",
    },
  },

  group2: {
    parentname: "group2",
    groupHeader: "location-of-accident",
    q01: {
      parentname: "q01",
      value: "",
      placeholder: "City",
      input: "control",
      description: "",
      id: "location-city",
      name: "location-city",
    },
    q02: {
      parentname: "q02",
      value: "",
      placeholder: "CA",
      input: "select",
      description: "",
      id: "location-state",
      name: "location-state",
      selections: [
        "AK",
        "AL",
        "AR",
        "AZ",
        "CO",
        "CT",
        "DE",
        "FL",
        "GA",
        "HI",
        "IA",
        "ID",
        "IL",
        "IN",
        "KS",
        "KY",
        "LA",
        "MA",
        "MD",
        "ME",
        "MI",
        "MN",
        "MO",
        "MS",
        "MT",
        "NC",
        "ND",
        "NE",
        "NH",
        "NJ",
        "NM",
        "NV",
        "NY",
        "OH",
        "OK",
        "OR",
        "PA",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VA",
        "VT",
        "WA",
        "WI",
        "WV",
        "WY",
      ],
    },
    q03: {
      parentname: "q03",
      value: "",
      placeholder: "2",
      input: "number",
      description: "How many Vehicles were involved?",
      id: "location-number",
      name: "location-number",
    },
    q04: {
      parentname: "q04",
      value: "",
      placeholder: "",
      input: "radio",
      description: "At the moment of the impact, your vehicle was",
      selections: ["stopped", "braking", "decelerating", "accelerating"],
      id: "location-moment-of-impact-vehicle",
      name: "location-moment-of-impact-vehicle",
    },
    q05: {
      parentname: "q05",
      value: "",
      placeholder: "unknown",
      input: "number",
      description: "Your vehicle was traveling at approximately (in mph)",
      id: "location-approximate-mph",
      name: "location-approximate-mph",
    },
    q06: {
      parentname: "q06",
      value: "",
      placeholder: "unknown",
      input: "radio",
      description: "The other vehicle was",
      selections: [
        "stopped",
        "braking",
        "decelerating",
        "accelerating",
        "moving at approximately __ mph",
      ],
      id: "location-other-vehicle",
      name: "location-other-vehicle",
    },
    //conditionally render an mph option
    q06o: {
      parentname: "q06o",
      conditional: true,
      value: "",
      placeholder: "",
      input: "control",
      description: "",
      id: "location-",
      name: "location-",
    },
  },

  group3: {
    parentname: "group3",
    groupHeader: "vehicles-involved",
    q01: {
      parentname: "q01",
      value: "",
      placeholder: "-choose one-",
      input: "select",
      description: "",
      selections: [
        "head-on collision",
        "you were rear-ended",
        "they hit your Driver side",
        "they hit your Passenger side",
        "you rear-ended the vehicle in front of you",
        "you hit their side ",
        "side-swipe",
        "non-collision",
        "single car versus object:",
      ],
      id: "involved-your-car",
      name: "involved-your-car",
    },
    q01o: { conditional: true },
    q02: {
      parentname: "q02",
      value: "",
      placeholder: "",
      input: "radio",
      description: "Did your vehicle hit anything else after the accident?",
      selections: ["No", "Yes (describe)"],
      id: "involved-else",
      name: "involved-else",
    },
    q02o: { conditional: true },
  },

  group4: {
    parentname: "group4",
    groupHeader: "your-location-inside-the-vehicle",
    q01: {
      parentname: "q01",
      value: "",
      placeholder: "driver",
      input: "select",
      selections: [
        "front passenger",
        "rear seat behind driver",
        "rear seat behind front passenger",
        "other:",
      ],
      description: "Where were you sitting in the car?",
      id: "location-in-car-sitting",
      name: "location-in-car-sitting",
    },
    q01o: { conditional: true },
    q02: {
      parentname: "q02",
      value: "",
      placeholder: "",
      input: "text",
      description: "If someone else was driving, who was the driver?",
      id: "location-in-car-driver",
      name: "location-in-car-driver",
    },
    q03: {
      parentname: "q03",
      value: "",
      placeholder: "Nobody",
      input: "control",
      description: "Who else was in your vehicle?",
      id: "location-in-car-other-passengers",
      name: "location-in-car-other-passengers",
    },
    q04: {
      parentname: "q04",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["Yes", "No"],
      description: "Did you know the accident was coming?",
      id: "location-in-car-know",
      name: "location-in-car-know",
    },
    q05: {
      parentname: "q05",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["Yes", "No"],
      description: "Did you brace for the impact?",
      id: "location-in-car-brace",
      name: "location-in-car-brace",
    },
    q06: {
      parentname: "q06",
      value: "1990",
      placeholder: "",
      input: "number",
      description: "The vehicle you were in was a __ Make",
      id: "location-in-car-make",
      name: "location-in-car-make",
    },
    q07: {
      parentname: "q07",
      value: "",
      placeholder: "Model",
      input: "control",
      description: "and Model",
      id: "location-in-car-model",
      name: "location-in-car-model",
    },
    q08: {
      parentname: "q08",
      value: "",
      placeholder: "Owner",
      input: "control",
      description: "Who owns the vehicle you were in?",
      id: "location-in-car-owner",
      name: "location-in-car-owner",
    },
    q09: {
      parentname: "q09",
      value: "Self",
      placeholder: "Relationship to Owner",
      input: "control",
      description: "What is your relationship to the owner of the car?",
      id: "location-in-car-owner-relationship",
      name: "location-in-car-owner-relationship",
    },
    q10: {
      parentname: "q10",
      value: "",
      placeholder: "",
      input: "checkbox",
      selections: [
        "kept going straight",
        "spun around",
        "kept going straight hitting a car in front",
        "spun around and hit a stationary object",
        "was hit by another vehicle",
        "hit a stationary object",
      ],
      description:
        "During and after the crash what happened to YOUR vehicle? (check all that apply)",
      id: "location-in-car-your-vehicle",
      name: "location-in-car-your-vehicle",
    },
    q12: {
      parentname: "q12",
      value: "",
      placeholder: "",
      input: "number",
      description: "How many other cars were involved?",
      id: "location-in-car-number-of-cars",
      name: "location-in-car-number-of-cars",
    },

    //conditionally render a number of other vehicles to be filled out
  },

  group5: {
    parentname: "group5",
    groupHeader: "at-the-time-of-impact",
    q01: {
      parentname: "q01",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Did you lose consciousness?",
      id: "time-of-impact-consciousness",
      name: "time-of-impact-consciousness",
    },
    q02: {
      parentname: "q02",
      value: "",
      placeholder: "",
      input: "radio",
      description: "Were you dazed?",
      selections: ["No", "Yes"],
      id: "time-of-impact-dazed",
      name: "time-of-impact-dazed",
    },
    q03: {
      parentname: "q03",
      value: "",
      placeholder: "",
      input: "radio",
      description: "Did you lose track of time?",
      selections: ["No", "Yes"],
      id: "time-of-impact-time",
      name: "time-of-impact-time",
    },
    q04: {
      parentname: "q04",
      value: "",
      placeholder: "",
      input: "checkbox",
      selections: [
        "head was straight forward",
        "body was straight upright in a sitting position",
        "head was turned left",
        "head was turned right",
        "body was rotated to the left",
        "body was rotated to the right",
        "you were looking back over your left shoulder",
        "you were looking back over your right shoulder",
        "other",
      ],
      description:
        "How were your head and body positioned? (check all that apply)",
      id: "time-of-impact-position",
      name: "time-of-impact-position",
    },
    q05: {
      parentname: "q05",
      value: "",
      placeholder: "",
      input: "control",
      description: "How were your hands positioned during the accident?",
      id: "time-of-impact-hands",
      name: "time-of-impact-hands",
    },
    q06: {
      parentname: "q06",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Were you wearing a hat or glasses?",
      id: "time-of-impact-hat",
      name: "time-of-impact-hat",
    },
    q07: {
      parentname: "q07",
      conditional: true,
      value: "",
      placeholder: "",
      input: "radio",
      description: "if yes Did they fly off your head?",
      selections: ["No", "Yes"],
      id: "time-of-impact-hat-fly",
      name: "time-of-impact-hat-fly",
    },
    q08: {
      parentname: "q08",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Did your head hit anything during the accident?",
      id: "time-of-impact-head-hit",
      name: "time-of-impact-head-hit",
    },
    q09: {
      parentname: "q09",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Did your face hit anything during the accident?",
      id: "time-of-impact-face-hit",
      name: "time-of-impact-face-hit",
    },
    q10: {
      parentname: "q10",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Did your shoulders hit anything during the accident?",
      id: "time-of-impact-shoulders-hit",
      name: "time-of-impact-shoulders-hit",
    },
    q11: {
      parentname: "q11",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Did your neck hit anything during the accident?",
      id: "time-of-impact-neck-hit",
      name: "time-of-impact-neck-hit",
    },
    q12: {
      parentname: "q12",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Did your chest hit anything during the accident?",
      id: "time-of-impact-chest-hit",
      name: "time-of-impact-chest-hit",
    },
    q13: {
      parentname: "q13",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Did your hips hit anything during the accident?",
      id: "time-of-impact-hips-hit",
      name: "time-of-impact-hips-hit",
    },
    q14: {
      parentname: "q14",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Did your knees hit anything during the accident?",
      id: "time-of-impact-knees-hit",
      name: "time-of-impact-knees-hit",
    },
    q15: {
      parentname: "q15",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Did your feet hit anything during the accident?",
      id: "time-of-impact-feet-hit",
      name: "time-of-impact-feet-hit",
    },
    q16: {
      parentname: "q16",
      value: "",
      placeholder: "",
      selections: [
        "movable fixed headrest",
        "non-movable fixed headrest",
        "no headrest",
      ],
      input: "radio",
      description: "What kind of headrest was in your vehicle?",
      id: "time-of-impact-headrest-type",
      name: "time-of-impact-headrest-type",
    },
    q17: {
      parentname: "q17",
      value: "",
      placeholder: "",
      selections: [
        "top of headrest even with bottom of your head",
        "top of headrest even with top of your head",
        "top of headrest even with middle of your head",
        "unknown",
        "no headrest",
      ],
      input: "radio",
      description: "Where was the headrest positioned on your head?",
      id: "time-of-impact-headrest-position",
      name: "time-of-impact-headrest-position",
    },
    q18: {
      parentname: "q18",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Did you have your seatbelt on during the accident?",
      id: "time-of-impact-seatbelt-on",
      name: "time-of-impact-seatbelt-on",
    },
    q19: {
      parentname: "q19",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Did you slide out of your seatbelt during the accident?",
      id: "time-of-impact-seatbelt-off",
      name: "time-of-impact-seatbelt-off",
    },
    q20: {
      parentname: "q20",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Was there an airbag at your position?",
      id: "time-of-impact-airbag",
      name: "time-of-impact-airbag",
    },
    q21: {
      parentname: "q21",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Did it deploy?",
      id: "time-of-impact-airbag-deploy",
      name: "time-of-impact-airbag-deploy",
    },
    q22: {
      parentname: "q22",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Were you injured by the airbag or safety equipment?",
      id: "time-of-impact-safety-equipment",
      name: "time-of-impact-safety-equipment",
    },
    q23: {
      parentname: "q23",
      value: "",
      placeholder: "",
      input: "checkbox",
      selections: [
        "COMPLETELY TOTALED",
        "mild amount of damage",
        "moderate amount of damage",
        "severe amount of damage",
        `Windshield`,
        `rear bumper`,
        `steering wheel`,
        `front bumper`,
        `knee bolster`,
        `dashboard`,
        `trunk`,
        `back driver door`,
        `back passenger door`,
        `driver side window`,
        `front driver door`,
        `front passenger door`,
        `passenger side window`,
        `rear window`,
      ],
      description: "What was damaged on YOUR vehicle? (Check all that apply)",
      id: "time-of-impact-your-damage",
      name: "time-of-impact-your-damage",
    },
    q24: {
      parentname: "q24",
      value: "",
      placeholder: "",
      input: "checkbox",
      selections: [`floorboards`, `side door`, `dashboard`],
      description: "Choose the items that dented inward:",
      id: "time-of-impact-dented",
      name: "time-of-impact-dented",
    },
    q25: {
      parentname: "q25",
      value: "",
      placeholder: "",
      input: "checkbox",
      selections: [
        `front driver`,
        `front passenger`,
        `rear driver`,
        `rear passenger`,
      ],
      description:
        "Choose the doors that would not open as a result of the accident",
      id: "time-of-impact-doors",
      name: "time-of-impact-doors",
    },
    q26: {
      parentname: "q26",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Did you go to the hospital?",
      id: "time-of-impact-hospital",
      name: "time-of-impact-hospital",
    },
    q26oA: {
      parentname: "q26oA",
      conditional: true,
      value: "",
      placeholder: "",
      input: "",
      description: "",
      id: "time-of-impact-",
      name: "time-of-impact-",
    },
    q26oB: {
      parentname: "q26oB",
      conditional: true,
      value: "",
      placeholder: "",
      input: "",
      description: "",
      id: "time-of-impact-",
      name: "time-of-impact-",
    },
    q26oC: {
      parentname: "q26oC",
      conditional: true,
      value: "",
      placeholder: "",
      input: "",
      description: "",
      id: "time-of-impact-",
      name: "time-of-impact-",
    },
    q26oD: {
      parentname: "q26oD",
      conditional: true,
      value: "",
      placeholder: "",
      input: "",
      description: "",
      id: "time-of-impact-",
      name: "time-of-impact-",
    },
    q26oE: {
      parentname: "q26oE",
      conditional: true,
      value: "",
      placeholder: "",
      input: "",
      description: "",
      id: "time-of-impact-",
      name: "time-of-impact-",
    },
    q26oF: {
      parentname: "q26oF",
      conditional: true,
      value: "",
      placeholder: "",
      input: "",
      description: "",
      id: "time-of-impact-",
      name: "time-of-impact-",
    },
    q27: {
      parentname: "q27",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Did you get any bruises, abrasions or bleeding cuts?",
      id: "time-of-impact-bleeding",
      name: "time-of-impact-bleeding",
    },
    q28: {
      parentname: "q28",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Have you seen any other doctors for this accident?",
      id: "time-of-impact-other-doctors",
      name: "time-of-impact-other-doctors",
    },
    q29: {
      parentname: "q29",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Has surgery been performed due to this accident?",
      id: "time-of-impact-surgery",
      name: "time-of-impact-surgery",
    },
    q30: {
      parentname: "q30",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Has surgery been recommended due to this accident?",
      id: "time-of-impact-surgery-rec",
      name: "time-of-impact-surgery-rec",
    },
    q31: {
      parentname: "q31",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Are you currently taking medication for this injury?",
      id: "time-of-impact-meds",
      name: "time-of-impact-meds",
    },
    q32: {
      parentname: "q32",
      value: "",
      placeholder: "",
      input: "checkbox",
      selections: [
        `massage`,
        `rest`,
        `exercise/stretch`,
        `ice`,
        `heat`,
        `OTC medication`,
        `I took myself off work`,
        `other`,
      ],
      description: "What home care did you try?",
      id: "time-of-impact-",
      name: "time-of-impact-",
    },
  },

  group6: {
    parentname: "group6",
    groupHeader: "immediately-following-the-accident",
    q01: {
      parentname: "q01",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description:
        "Was your body in the same location inside the car as before the accident?",
      id: "following-location",
      name: "following-location",
    },
    q02: {
      parentname: "q02",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Could you move all parts of your body?",
      id: "following-mobility",
      name: "following-mobility",
    },
    q03: {
      parentname: "q03",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Were you able to get out of the vehicle and walk unaided?",
      id: "following-unaided",
      name: "following-unaided",
    },
    q04: {
      parentname: "q04",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Did any emergency vehicles arrive at the scene?",
      id: "following-emergency",
      name: "following-emergency",
    },
    q05: {
      parentname: "q05",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description:
        "Did you receive any medical assistance at the scene of the accident?",
      id: "following-medical",
      name: "following-medical",
    },
    q06: {
      parentname: "q06",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Did you feel any pain at the moment of impact?",
      id: "following-pain",
      name: "following-pain",
    },
    q07: {
      parentname: "q07",
      value: "",
      placeholder: "",
      input: "control",
      description: "Please describe your delayed symptoms later that day/night",
      id: "following-later",
      name: "following-later",
    },
    q08: {
      parentname: "q08",
      value: "",
      placeholder: "",
      input: "control",
      description:
        "Please describe your delayed symptoms from the next day onward",
      id: "following-next-day",
      name: "following-next-day",
    },
  },

  group7: {
    parentname: "group7",
    groupHeader: "your-work",
    q01: {
      parentname: "q01",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description:
        "Before the injury, were you capable of working on an equal basis with others your age?",
      id: "work-capability",
      name: "work-capability",
    },
    q02: {
      parentname: "q02",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Are you currently Able to work?",
      id: "work-ability",
      name: "work-ability",
    },
    q03: {
      parentname: "q03",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Are you working?",
      id: "work-working",
      name: "work-working",
    },
    q04: {
      parentname: "q04",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description:
        "Have you lost any time from work as a result of this accident?",
      id: "work-lost-time",
      name: "work-lost-time",
    },
    q04oA: {
      parentname: "q04oA",
      conditional: true,
      value: "",
      placeholder: "",
      input: "",
      description: "",
      id: "work-",
      name: "work-",
    },
    q04oB: {
      parentname: "q04oB",
      conditional: true,
      value: "",
      placeholder: "",
      input: "",
      description: "",
      id: "work-",
      name: "work-",
    },
    q04oC: {
      parentname: "q04oC",
      conditional: true,
      value: "",
      placeholder: "",
      input: "",
      description: "",
      id: "work-",
      name: "work-",
    },
    q05: {
      parentname: "q05",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Do you have breast implants?",
      id: "work-implants",
      name: "work-implants",
    },
    q06: {
      parentname: "q06",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Were you pregnant at the time of the accident?",
      id: "work-pregnant",
      name: "work-pregnant",
    },
    q07: {
      parentname: "q07",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["No", "Yes"],
      description: "Is there any chance that you may be pregnant today?",
      id: "work-pregnant-now",
      name: "work-pregnant-now",
    },
  },

  group8: {
    parentname: "group8",
    groupHeader: "before-and-after-the-accident",
    // q01: {
    //   parentname: "q01",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q02: {
    //   parentname: "q02",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q03: {
    //   parentname: "q03",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q04: {
    //   parentname: "q04",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q05: {
    //   parentname: "q05",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q06: {
    //   parentname: "q06",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q07: {
    //   parentname: "q07",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q08: {
    //   parentname: "q08",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q09: {
    //   parentname: "q09",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q10: {
    //   parentname: "q10",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q11: {
    //   parentname: "q11",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q12: {
    //   parentname: "q12",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q13: {
    //   parentname: "q13",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q14: {
    //   parentname: "q14",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q15: {
    //   parentname: "q15",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q16: {
    //   parentname: "q16",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q17: {
    //   parentname: "q17",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q18: {
    //   parentname: "q18",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q19: {
    //   parentname: "q19",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q20: {
    //   parentname: "q20",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q21: {
    //   parentname: "q21",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q22: {
    //   parentname: "q22",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q23: {
    //   parentname: "q23",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q24: {
    //   parentname: "q24",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q25: {
    //   parentname: "q25",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q26: {
    //   parentname: "q26",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q27: {
    //   parentname: "q27",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q28: {
    //   parentname: "q28",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q29: {
    //   parentname: "q29",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q30: {
    //   parentname: "q30",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
    // q31: {
    //   parentname: "q31",
    //   value: "",
    //   placeholder: "",
    //   input: "",
    //   description: "",
    //   id: "before-and-after-",
    //   name: "before-and-after-",
    // },
  },
};

export default formSeed;
