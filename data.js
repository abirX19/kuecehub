

function course(code, title, url = "") {
  const id = code.replace(/\s+/g, "-").toLowerCase();
  return { id, code, title, url };
}

function termExtra(label, url = "") {
  const id = label.replace(/\s+/g, "-").toLowerCase();
  return { id, label, url };
}

const TERMS = [
  {
    id: "y1t1",
    year: 1,
    term: 1,
    label: "1st Year, 1st Term",
    courses: [
      course("0714 09 ECE 1101", "Electrical Circuits I"),
      course("0714 09 ECE 1102", "Electrical Circuits I Sessional"),
      course("0714 09 CSE 1151", "Structured Programming"),
      course("0714 09 CSE 1152", "Structured Programming Sessional"),
      course("0541 09 Math 1171", "Differential and Integral Calculus"),
      course("0533 09 Phy 1173", "Physics"),
      course("0533 09 Phy 1174", "Physics Sessional"),
      course("0531 09 Chem 1175", "Chemistry"),
      course("0531 09 Chem 1176", "Chemistry Sessional"),
    ],
    extras: [
      termExtra("CT Questions"),
      termExtra("Term Final"),
    ],
  },
  {
    id: "y1t2",
    year: 1,
    term: 2,
    label: "1st Year, 2nd Term",
    courses: [
      course("0714 09 ECE 1201", "Electrical Circuits II"),
      course("0714 09 ECE 1202", "Electrical Circuits II Sessional"),
      course("0714 09 ECE 1203", "Bipolar and Unipolar Devices and Circuits"),
      course("0714 09 ECE 1204", "Bipolar and Unipolar Devices and Circuits Sessional"),
      course("0714 09 ECE 1206", "Electrical Services Design"),
      course("0714 09 CSE 1251", "Object Oriented Programming"),
      course("0714 09 CSE 1252", "Object Oriented Programming Sessional"),
      course("0541 09 Math 1271", "Differential Equations"),
      course("0231 09 Eng 1281", "English"),
      course("0314 09 Soc 1283", "Sociology"),
      course("0314 09 Phil 1285", "Professional Ethics"),
    ],
    extras: [
      termExtra("CT Questions"),
      termExtra("Term Final"),
    ],
  },
  {
    id: "y2t1",
    year: 2,
    term: 1,
    label: "2nd Year, 1st Term",
    courses: [
      course("0714 09 ECE 2101", "Electronic Amplifiers and Power Supply Circuits","https://drive.google.com/drive/folders/1ULzgxOjgDQWQBU1JO6Ue4qA-Hp3Ce8Fc?usp=sharing"),
      course("0714 09 ECE 2102", "Electronic Amplifiers and Power Supply Circuits Sessional","https://drive.google.com/drive/folders/1UnOm4gTRm05S00ocHZ7Nd2FHJroHwC2M?usp=sharing"),
      course("0714 09 ECE 2103", "Signals and Systems","https://drive.google.com/drive/folders/13P3lxGJY1TxDaQ7FU74JUpWOTY0Fy5WJ?usp=sharing"),
      course("0714 09 ECE 2104", "Signals and Systems Sessional","https://drive.google.com/drive/folders/1RxBFwCFmBnPbHTVdA88w3FQqskKr5x_W?usp=sharing"),
      course("0714 09 ECE 2105", "Electrical Machine I", "https://drive.google.com/drive/folders/1dNq3NDnXVOf22_uxgLTUqeESR7s1O3xb?usp=sharing"),
      course("0714 09 ECE 2106", "Electrical Machine I Sessional","https://drive.google.com/drive/folders/1Qe1kX0u8iuvu6Clvnl0kn0d3Vb_Buzav?usp=sharing"),
      course("0714 09 CSE 2151", "Data Structures and Algorithms","https://drive.google.com/drive/folders/1UP2NxhmDZ4jG31IMlO6qpGXGBFVPrlXN?usp=sharing"),
      course("0714 09 CSE 2152", "Data Structures and Algorithms Sessional"),
      course("0514 09 Math 2171", "Coordinate Geometry and Vector Analysis","https://drive.google.com/drive/folders/1gqyuhqOcb5J0rC3QNugxDapuCQDZ_Slf?usp=sharing"),
      course("0311 09 Econ 2181", "Economics","https://drive.google.com/drive/folders/1nwjH4OZeln9wOcoqjR4nbNJCBL-rx-F9?usp=sharing"),
    ],
    extras: [
      termExtra("CT Questions","https://drive.google.com/drive/folders/1SoLXngM0-isiiYo04rqE8PxnG1WBNCq7?usp=sharing"),
      termExtra("Term Final","https://drive.google.com/drive/folders/1XBvq6wCDTlLhie7pPJSN5PCHuV5HoFKW?usp=sharing"),
    ],
  },
  {
    id: "y2t2",
    year: 2,
    term: 2,
    label: "2nd Year, 2nd Term",
    courses: [
      course("0714 09 ECE 2201", "Solid State Electronic Devices"),
      course("0714 09 ECE 2203", "OpAmp and IC Technology"),
      course("0714 09 ECE 2204", "OpAmp and IC Technology Sessional"),
      course("0714 09 ECE 2205", "Electrical Machine II"),
      course("0714 09 ECE 2206", "Electrical Machine II Sessional"),
      course("0714 09 ECE 2207", "Numerical Techniques"),
      course("0714 09 ECE 2208", "Numerical Techniques Sessional"),
      course("0714 09 Math 2271", "Matrix and Complex Variable"),
      course("0542 09 Stat 2273", "Probability and Stochastic Variable"),
    ],
    extras: [
      termExtra("CT Questions"),
      termExtra("Term Final"),
    ],
  },
  {
    id: "y3t1",
    year: 3,
    term: 1,
    label: "3rd Year, 1st Term",
    courses: [
      course("0714 09 ECE 3101", "Measurements and Electronic Instrumentations"),
      course("0714 09 ECE 3102", "Measurements and Electronic Instrumentations Sessional"),
      course("0714 09 ECE 3103", "Digital Electronics"),
      course("0714 09 ECE 3104", "Digital Electronics Sessional"),
      course("0714 09 ECE 3105", "Analog Communications"),
      course("0714 09 ECE 3106", "Analog Communications Sessional"),
      course("0714 09 ECE 3107", "Electromagnetic Fields and Waves"),
      course("0714 09 CSE 3151", "Computer Network and Security"),
      course("0714 09 CSE 3152", "Computer Network and Security Sessional"),
      course("0413 09 BA 3181", "Accounting"),
    ],
    extras: [
      termExtra("CT Questions"),
      termExtra("Term Final"),
    ],
  },
  {
    id: "y3t2",
    year: 3,
    term: 2,
    label: "3rd Year, 2nd Term",
    courses: [
      course("0714 09 ECE 3201", "Control Systems"),
      course("0714 09 ECE 3203", "Digital Communications"),
      course("0714 09 ECE 3204", "Digital Communications Sessional"),
      course("0714 09 ECE 3205", "Microwave Engineering"),
      course("0714 09 ECE 3206", "Microwave Engineering Sessional"),
      course("0714 09 ECE 3207", "Electrical Engineering Material"),
      course("0714 09 ECE 3209", "Semiconductor Processing and Fabrication Technology"),
      course("0714 09 ECE 3211", "Power System"),
      course("0714 09 ECE 3213", "Data Science"),
      course("0714 09 CSE 3215", "Artificial Intelligence"),
      course("0714 09 CSE 3251", "Microprocessor and Embedded Systems"),
      course("0714 09 CSE 3252", "Microprocessor and Embedded Systems Sessional"),
      course("0413 09 BA 3281", "Industrial Management and Law"),
    ],
    extras: [
      termExtra("CT Questions"),
      termExtra("Term Final"),
    ],
  },
  {
    id: "y4t1",
    year: 4,
    term: 1,
    label: "4th Year, 1st Term",
    courses: [], // intentionally left blank for now
    extras: [
      termExtra("CT Questions"),
      termExtra("Term Final"),
    ],
  },
  {
    id: "y4t2",
    year: 4,
    term: 2,
    label: "4th Year, 2nd Term",
    courses: [], // intentionally left blank for now
    extras: [
      termExtra("CT Questions"),
      termExtra("Term Final"),
    ],
  },
];
