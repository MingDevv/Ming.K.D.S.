export const englishData = [
  // --- PART 1: VOCABULARY (1-18) ---
  {
    id: "eng_q1",
    topic: "Vocabulary",
    difficulty: "ง่าย",
    question: "The ancient Greeks believed that the storm was caused by a lightning strike from Zeus, but modern science proved it was just a ______.",
    choices: [
      "myth",
      "device",
      "survey",
      "habitat"
    ],
    answer: 0, // index 0 = myth
    explanation: {
      general: "โจทย์แปลว่า: 'ชาวกรีกโบราณเชื่อว่าพายุเกิดจากสายฟ้าฟาดของซูส แต่วิทยาศาสตร์สมัยใหม่พิสูจน์แล้วว่ามันเป็นเพียงแค่ ______'",
      choicesAnalysis: [
        "ถูกต้อง เพราะ myth แปลว่า 'ตำนาน/ความเชื่อดั้งเดิมที่ไม่มีจริง'",
        "ผิด เพราะ device แปลว่า 'อุปกรณ์/เครื่องมือ'",
        "ผิด เพราะ survey แปลว่า 'การสำรวจ/แบบสอบถาม'",
        "ผิด เพราะ habitat แปลว่า 'ถิ่นที่อยู่อาศัย'"
      ]
    },
    solution: [
      "1. วิเคราะห์ความหมายประโยค: มีคำเชื่อมขัดแย้ง 'but' แสดงว่าส่วนหลังต้องขัดแย้งกับคำว่า 'believed... Zeus' (ความเชื่อเรื่องเทพเจ้า)",
      "2. คำที่ตรงข้ามกับข้อเท็จจริงทางวิทยาศาสตร์ในเชิงความเชื่อโบราณคือ 'myth' (เรื่องตำนาน/เรื่องแต่ง)",
      "3. ตอบข้อ A."
    ],
    formula: null,
    commonMistakes: "นักเรียนมักจำสลับสับสนระหว่าง 'myth' (ตำนาน) กับ 'belief' (ความเชื่อ) แม้ความหมายคล้ายกัน แต่ประโยคต้องการสื่อว่าเป็นเรื่องแต่งที่พิสูจน์แล้วว่าไม่จริง"
  },
  {
    id: "eng_q2",
    topic: "Vocabulary",
    difficulty: "ง่าย",
    question: "Scientists collected a rare butterfly ______ from the rainforest to study its unique wing patterns.",
    choices: [
      "consortium",
      "specimen",
      "respondent",
      "span"
    ],
    answer: 1, // index 1 = specimen
    explanation: {
      general: "โจทย์แปลว่า: 'นักวิทยาศาสตร์ได้เก็บ ______ ผีเสื้อที่หายากจากป่าดิบชื้นเพื่อศึกษาลวดลายปีกอันเป็นเอกลักษณ์ของมัน'",
      choicesAnalysis: [
        "ผิด เพราะ consortium แปลว่า 'ห้างหุ้นส่วน/สมาคม'",
        "ถูกต้อง เพราะ specimen แปลว่า 'ตัวอย่าง (ทางชีววิทยา/การแพทย์)'",
        "ผิด เพราะ respondent แปลว่า 'ผู้ตอบแบบสอบถาม'",
        "ผิด เพราะ span แปลว่า 'ช่วงระยะเวลา/ความกว้าง'"
      ]
    },
    solution: [
      "1. หาคำศัพท์ที่เกี่ยวข้องกับการเก็บตัวอย่างผีเสื้อไปวิจัยในห้องแล็บ",
      "2. คำศัพท์เฉพาะทางวิทยาศาสตร์ที่หมายถึงสิ่งมีชีวิตตัวอย่างคือ 'specimen'"
    ],
    formula: null,
    commonMistakes: "นักเรียนอาจเลือก 'respondent' เนื่องจากเห็นเป็นบุคคลที่เกี่ยวข้องกับการทดลอง แต่ผีเสื้อเป็นสัตว์และสสาร ต้องใช้คำว่า 'specimen'"
  },
  {
    id: "eng_q3",
    topic: "Vocabulary",
    difficulty: "ปานกลาง",
    question: "The two witnesses gave ______ descriptions of the thief; one said he was tall, while the other claimed he was short.",
    choices: [
      "similar",
      "contradictory",
      "annual",
      "elementary"
    ],
    answer: 1, // index 1 = contradictory
    explanation: {
      general: "โจทย์แปลว่า: 'พยานสองคนให้รายละเอียดรูปพรรณของหัวขโมยที่ ______ คนหนึ่งบอกว่าเขาสูง ในขณะที่อีกคนบอกว่าเขาเตี้ย'",
      choicesAnalysis: [
        "ผิด เพราะ similar แปลว่า 'คล้ายคลึงกัน' ซึ่งขัดกับคำอธิบายเบื้องหลังที่ต่างกันสุดขั้ว",
        "ถูกต้อง เพราะ contradictory แปลว่า 'ซึ่งขัดแย้งกัน/ตรงกันข้ามกัน' (สูง vs เตี้ย)",
        "ผิด เพราะ annual แปลว่า 'ประจำปี'",
        "ผิด เพราะ elementary แปลว่า 'ในขั้นต้น/ระดับประถม'"
      ]
    },
    solution: [
      "1. สังเกตเครื่องหมาย semicolon (;) และคำขยายความด้านหลัง: 'one said tall, while the other said short' (คนหนึ่งบอกสูง อีกคนบอกเตี้ย)",
      "2. ลักษณะคำพูดของทั้งสองคนมีลักษณะที่ขัดแย้งกันอย่างสิ้นเชิง ตรงกับศัพท์ 'contradictory'"
    ],
    formula: null,
    commonMistakes: "บางครั้งเผลอแปลผิดคิดว่า similar แปลว่าแตกต่าง หรือไม่เข้าใจคำเชื่อม 'while' ที่แสดงความขัดแย้ง"
  },
  {
    id: "eng_q4",
    topic: "Vocabulary",
    difficulty: "ง่าย",
    question: "Destruction of the coral reefs is threatening the natural ______ of many marine species.",
    choices: [
      "habitat",
      "capacity",
      "privacy",
      "consortium"
    ],
    answer: 0, // index 0 = habitat
    explanation: {
      general: "โจทย์แปลว่า: 'การทำลายแนวปะการังกำลังคุกคาม ______ ตามธรรมชาติของสิ่งมีชีวิตในทะเลหลายชนิด'",
      choicesAnalysis: [
        "ถูกต้อง เพราะ habitat แปลว่า 'ถิ่นที่อยู่อาศัยตามธรรมชาติของพืชหรือสัตว์'",
        "ผิด เพราะ capacity แปลว่า 'ความจุ/ความสามารถ'",
        "ผิด เพราะ privacy แปลว่า 'ความเป็นส่วนตัว'",
        "ผิด เพราะ consortium แปลว่า 'สมาคม/ความร่วมมือ'"
      ]
    },
    solution: [
      "1. คีย์เวิร์ดของประโยคคือ 'coral reefs' (แนวปะการัง) ซึ่งเป็นแหล่งที่อยู่ของสัตว์ทะเล",
      "2. สัตว์และพืชอาศัยอยู่ในแหล่งที่เรียกว่า 'natural habitat'"
    ],
    formula: null,
    commonMistakes: "สับสนคิดว่าสัตว์ต้องการ 'privacy' (ความเป็นส่วนตัว) หรือตอบ 'capacity' เพราะเดาว่าเป็นขอบเขตพื้นที่"
  },
  {
    id: "eng_q5",
    topic: "Vocabulary",
    difficulty: "ปานกลาง",
    question: "Bats use echolocation to ______ through dark caves without bumping into the walls.",
    choices: [
      "accelerate",
      "conduct",
      "navigate",
      "convey"
    ],
    answer: 2, // index 2 = navigate
    explanation: {
      general: "โจทย์แปลว่า: 'ค้างคาวใช้การสะท้อนของเสียง (echolocation) เพื่อ ______ ผ่านถ้ำที่มืดมิดโดยไม่ชนกับผนังถ้ำ'",
      choicesAnalysis: [
        "ผิด เพราะ accelerate แปลว่า 'เร่งความเร็ว'",
        "ผิด เพราะ conduct แปลว่า 'ประพฤติ/นำทางประจุ/จัดการ'",
        "ถูกต้อง เพราะ navigate แปลว่า 'นำทาง/หาเส้นทาง/เดินทาง'",
        "ผิด เพราะ convey แปลว่า 'สื่อสาร/ส่งผ่าน (สาร/ความคิด)'"
      ]
    },
    solution: [
      "1. บริบทระบุการหาทางเดินทางผ่านที่มืดโดยไม่ชนกำแพง",
      "2. คำกริยาที่แปลว่าการหาทิศทางหรือบินนำทางคือ 'navigate'"
    ],
    formula: null,
    commonMistakes: "สับสนความหมายของ 'convey' (สื่อสารสาร) เพราะนึกว่าค้างคาวส่งเสียงเพื่อคุยกันอย่างเดียว แต่ในประโยคบอกว่าบินไม่ให้ชนฝาผนังถ้ำ"
  },
  {
    id: "eng_q6",
    topic: "Vocabulary",
    difficulty: "ง่าย",
    question: "The school will ______ a survey next week to collect feedback about the quality of school lunches.",
    choices: [
      "conduct",
      "confess",
      "indicate",
      "emit"
    ],
    answer: 0, // index 0 = conduct
    explanation: {
      general: "โจทย์แปลว่า: 'โรงเรียนจะ ______ การสำรวจในสัปดาห์หน้าเพื่อรวบรวมข้อคิดเห็นเกี่ยวกับคุณภาพอาหารกลางวันของโรงเรียน'",
      choicesAnalysis: [
        "ถูกต้อง เพราะ conduct a survey แปลว่า 'จัดทำ/ดำเนินกิจกรรมการสำรวจ' (เป็น Collocation ที่ใช้คู่กันบ่อย)",
        "ผิด เพราะ confess แปลว่า 'สารภาพบาป/ยอมรับผิด'",
        "ผิด เพราะ indicate แปลว่า 'ชี้แนะ/แสดงให้เห็น'",
        "ผิด เพราะ emit แปลว่า 'ปล่อย/แผ่ออกมา (แสง/ความร้อน/แก๊ส)'"
      ]
    },
    solution: [
      "1. จำคู่คำศัพท์ที่มาด้วยกัน: conduct + survey/experiment/research แปลว่า ดำเนินการทำ...",
      "2. ตอบข้อ A."
    ],
    formula: "Collocation: conduct a survey / conduct research",
    commonMistakes: "เลือก 'indicate' เพราะคิดว่าแปลว่าชี้แจงการสำรวจ แต่กริยาที่แปลว่าดำเนินการจัดการคือ 'conduct'"
  },
  {
    id: "eng_q7",
    topic: "Vocabulary",
    difficulty: "ง่าย",
    question: "Due to overhunting and climate change, many prehistoric mammals became ______ thousands of years ago.",
    choices: [
      "muscular",
      "extinct",
      "annual",
      "elementary"
    ],
    answer: 1, // index 1 = extinct
    explanation: {
      general: "โจทย์แปลว่า: 'เนื่องจากการล่าเกินขอบเขตและการเปลี่ยนแปลงภูมิอากาศ สัตว์เลี้ยงลูกด้วยนมยุคก่อนประวัติศาสตร์จำนวนมากจึง ______ หลายพันปีก่อน'",
      choicesAnalysis: [
        "ผิด เพราะ muscular แปลว่า 'มีกล้ามเนื้อใหญ่โต'",
        "ถูกต้อง เพราะ extinct แปลว่า 'สูญพันธุ์'",
        "ผิด เพราะ annual แปลว่า 'ประจำปี'",
        "ผิด เพราะ elementary แปลว่า 'ขั้นพื้นฐาน'"
      ]
    },
    solution: [
      "1. คีย์เวิร์ดคือ 'overhunting' (การล่าสัตว์เกินขนาด) และ 'prehistoric' (ก่อนประวัติศาสตร์) ส่งผลให้สัตว์ตายจนหมดสิ้น",
      "2. ศัพท์สำหรับการล้มหายตายจากไปจากโลกของสัตว์คือ 'extinct'"
    ],
    formula: null,
    commonMistakes: "สับสนกับคำว่า 'distinct' (โดดเด่น/แตกต่าง) หรือสะกดสับสน"
  },
  {
    id: "eng_q8",
    topic: "Vocabulary",
    difficulty: "ปานกลาง",
    question: "He had a ______ expression on his face when he read the confusing instructions of the puzzle.",
    choices: [
      "puzzled",
      "puzzling",
      "ridiculous",
      "elusive"
    ],
    answer: 0, // index 0 = puzzled
    explanation: {
      general: "โจทย์แปลว่า: 'เขามีสีหน้าแบบ ______ เมื่อเขาอ่านคู่มือการเล่นตัวต่อที่ชวนสับสน'",
      choicesAnalysis: [
        "ถูกต้อง เพราะ puzzled (adj.) ทำหน้าที่ขยายคน/สีหน้าของคน แปลว่า 'รู้สึกสับสนงุนงง'",
        "ผิด เพราะ puzzling (adj.) แปลว่า 'น่าสับสน/น่าฉงน' ใช้ขยายสิ่งของหรือสถานการณ์ ไม่ใช่สีหน้าแสดงความรู้สึกของคนในลักษณะนี้",
        "ผิด เพราะ ridiculous แปลว่า 'น่าขำขัน/น่าขันสิ้นดี'",
        "ผิด เพราะ elusive แปลว่า 'ยากที่จะหาพบ/จับตัวยาก'"
      ]
    },
    solution: [
      "1. ตัดสินใจระหว่างการเติ่ม -ed (รู้สึก) และ -ing (น่า):",
      "   - He felt confused -> He had a puzzled look/expression (เขารู้สึกงุนงง สีหน้าจึงออกมาแสดงความรู้สึกงุนงง)",
      "   - The instructions were puzzling (คำสั่งมันน่าปวดหัวสับสน)",
      "2. ในที่นี้ขยาย expression (การแสดงออกทางสีหน้าของคนที่มีอารมณ์งง) จึงต้องเลือก 'puzzled'"
    ],
    formula: "-ed adjective (feeling) vs -ing adjective (characteristic)",
    commonMistakes: "นักเรียนมักสับสนการใช้งาน Adjective ที่ลงท้ายด้วย -ed และ -ing เลือกสลับบริบทกันบ่อยมาก"
  },
  {
    id: "eng_q9",
    topic: "Vocabulary",
    difficulty: "ง่าย",
    question: "Out of the 500 visitors who received the feedback forms, only 150 ______ sent their answers back.",
    choices: [
      "consortiums",
      "skeptics",
      "grooms",
      "respondents"
    ],
    answer: 3, // index 3 = respondents
    explanation: {
      general: "โจทย์แปลว่า: 'จากนักท่องเที่ยว 500 คนที่ได้รับใบแสดงความคิดเห็น มีเพียง 150 ______ เท่านั้นที่ส่งคำตอบกลับคืนมา'",
      choicesAnalysis: [
        "ผิด เพราะ consortium แปลว่า 'พันธมิตรห้างร้าน'",
        "ผิด เพราะ skeptic แปลว่า 'คนขี้ระแวง/ผู้คลางแคลงใจ'",
        "ผิด เพราะ groom แปลว่า 'เจ้าบ่าว/คนดูแลม้า'",
        "ถูกต้อง เพราะ respondent แปลว่า 'ผู้ทำแบบสอบถาม/ผู้ให้ข้อมูลการสำรวจ'"
      ]
    },
    solution: [
      "1. สังเกตประโยคขยายความ: 'received feedback forms... sent answers back'",
      "2. บุคคลผู้กรอกเอกสารความคิดเห็นและส่งตอบกลับในการสำรวจเรียกว่า 'respondents'"
    ],
    formula: null,
    commonMistakes: "เดาคำว่า 'skeptics' เพราะคิดว่าคนที่ส่งฟอร์มกลับอาจจะกำลังสงสัยคุณภาพบริการ แต่ศัพท์ที่เป็นทางการทางสถิติคือ 'respondents'"
  },
  {
    id: "eng_q10",
    topic: "Vocabulary",
    difficulty: "ง่าย",
    question: "Car exhaust pipes ______ dangerous carbon monoxide into the atmosphere during traffic jams.",
    choices: [
      "navigate",
      "accelerate",
      "emit",
      "indicate"
    ],
    answer: 2, // index 2 = emit
    explanation: {
      general: "โจทย์แปลว่า: 'ท่อไอเสียรถยนต์ ______ แก๊สคาร์บอนมอนอกไซด์ที่เป็นอันตรายออกสู่บรรยากาศในระหว่างที่รถติด'",
      choicesAnalysis: [
        "ผิด เพราะ navigate แปลว่า 'นำทาง'",
        "ผิด เพราะ accelerate แปลว่า 'เร่งความเร็ว'",
        "ถูกต้อง เพราะ emit แปลว่า 'ปล่อยออกมา/แผ่ออกมา (มลพิษ/แสง/เสียง)'",
        "ผิด เพราะ indicate แปลว่า 'ชี้บอก'"
      ]
    },
    solution: [
      "1. ประธานคือ 'Car exhaust pipes' (ท่อไอเสีย) และกรรมคือ 'dangerous carbon monoxide' (แก๊สพิษ)",
      "2. กริยาที่เกี่ยวกับการปล่อยสาร/แก๊สออกสู่ภายนอกคือ 'emit'"
    ],
    formula: null,
    commonMistakes: "สับสนกับคำว่า 'omit' (ละเว้น/ข้ามไป) เนื่องจากรูปลักษณ์การสะกดคล้ายคลึงกัน"
  },
  {
    id: "eng_q11",
    topic: "Vocabulary",
    difficulty: "ง่าย",
    question: "Bodybuilders consume high levels of protein to help build their ______ strength and mass.",
    choices: [
      "muscular",
      "annual",
      "exponential",
      "legendary"
    ],
    answer: 0, // index 0 = muscular
    explanation: {
      general: "โจทย์แปลว่า: 'นักเพาะกายบริโภคโปรตีนปริมาณสูงเพื่อช่วยสร้างความแข็งแกร่งและมวล ______ ของพวกตน'",
      choicesAnalysis: [
        "ถูกต้อง เพราะ muscular แปลว่า 'เกี่ยวกับกล้ามเนื้อ' (muscular strength = ความแข็งแรงของกล้ามเนื้อ)",
        "ผิด เพราะ annual แปลว่า 'รายปี/ประจำปี'",
        "ผิด เพราะ exponential แปลว่า 'ทวีคูณอย่างรวดเร็ว/ในอัตราเร่ง'",
        "ผิด เพราะ legendary แปลว่า 'ซึ่งเป็นตำนาน'"
      ]
    },
    solution: [
      "1. ผู้บริโภคคือ 'Bodybuilders' (นักเล่นกล้าม) ซึ่งกินโปรตีนไปซ่อมแซมและขยายส่วนของกล้ามเนื้อ",
      "2. คำศัพท์ขยายความแข็งแกร่งของร่างกายในเชิงกล้ามเนื้อคือ 'muscular'"
    ],
    formula: null,
    commonMistakes: "เลือก 'exponential' เนื่องจากคิดว่าต้องการสร้างกล้ามเนื้อแบบพุ่งพรวดพราด แต่ Collocation หลักคือ 'muscular strength/mass'"
  },
  {
    id: "eng_q12",
    topic: "Vocabulary",
    difficulty: "ปานกลาง",
    question: "The newly developed train can ______ up to 250 kilometers per hour in under a minute.",
    choices: [
      "accelerate",
      "comprise",
      "convey",
      "extinct"
    ],
    answer: 0, // index 0 = accelerate
    explanation: {
      general: "โจทย์แปลว่า: 'รถไฟที่พัฒนาขึ้นใหม่สามารถ ______ ความเร็วได้ถึง 250 กิโลเมตรต่อชั่วโมงภายในเวลาไม่ถึงนาที'",
      choicesAnalysis: [
        "ถูกต้อง เพราะ accelerate แปลว่า 'เร่งความเร็ว/เพิ่มความเร็ว'",
        "ผิด เพราะ comprise แปลว่า 'ประกอบด้วย'",
        "ผิด เพราะ convey แปลว่า 'สื่อความ/ขนส่ง'",
        "ผิด เพราะ extinct เป็น adjective แปลว่า 'สูญพันธุ์' ซึ่งผิดประเภทแกรมมาร์ด้วยเนื่องจากตำแหน่งต้องการคำกริยาแท้"
      ]
    },
    solution: [
      "1. ประโยคพูดถึงรถไฟและความเร็ว 'up to 250 km/h in under a minute'",
      "2. คำศัพท์ที่เกี่ยวกับการกวดความเร็วขึ้นคือ 'accelerate'"
    ],
    formula: null,
    commonMistakes: "ใช้คำว่า 'convey' เพราะคุ้นเคยว่าแปลว่าขนส่งสิ่งของ แต่รถไฟเร่งความเร็วต้องใช้ 'accelerate'"
  },
  {
    id: "eng_q13",
    topic: "Vocabulary",
    difficulty: "ยาก",
    question: "During the presentation, the CEO used visual charts to ______ the financial plan to the investors.",
    choices: [
      "comprise",
      "convey",
      "accelerate",
      "extinct"
    ],
    answer: 1, // index 1 = convey
    explanation: {
      general: "โจทย์แปลว่า: 'ในระหว่างการนำเสนอ ซีอีโอได้ใช้แผนภาพกราฟิกเพื่อ ______ แผนทางการเงินให้ผู้ลงทุนเข้าใจ'",
      choicesAnalysis: [
        "ผิด เพราะ comprise แปลว่า 'ประกอบไปด้วย'",
        "ถูกต้อง เพราะ convey แปลว่า 'สื่อความหมาย/ถ่ายทอดคำพูดหรือไอเดีย/สื่อสาร'",
        "ผิด เพราะ accelerate แปลว่า 'เร่งความเร็ว'",
        "ผิด เพราะ extinct แปลว่า 'สูญพันธุ์'"
      ]
    },
    solution: [
      "1. คีย์เวิร์ดคือ 'CEO... charts... financial plan to investors' แสดงถึงการอธิบายงานหรือถ่ายทอดข้อมูล",
      "2. คำกริยาสำหรับการสื่อความเข้าใจ ถ่ายทอดสารให้กระจ่างคือ 'convey'"
    ],
    formula: null,
    commonMistakes: "นักเรียนมักไม่คุ้นเคยกับความหมายทางตรรกะสื่อสารของคำว่า 'convey' (มักรู้จักในแง่สายพานลำเลียง conveyor belt) จึงมักเลือกข้ออื่นแทน"
  },
  {
    id: "eng_q14",
    topic: "Vocabulary",
    difficulty: "ปานกลาง",
    question: "We must respect each person's freedom to choose their own religious ______ without force.",
    choices: [
      "belief",
      "myth",
      "similarity",
      "remains"
    ],
    answer: 0, // index 0 = belief
    explanation: {
      general: "โจทย์แปลว่า: 'เราต้องเคารพเสรีภาพของแต่ละบุคคลในการเลือก ______ ทางศาสนาของพวกเขาเองโดยไม่มีการบังคับ'",
      choicesAnalysis: [
        "ถูกต้อง เพราะ religious belief แปลว่า 'ความเชื่อ/ศรัทธาทางศาสนา'",
        "ผิด เพราะ myth แปลว่า 'เรื่องนิยายปรัมปรา'",
        "ผิด เพราะ similarity แปลว่า 'ความคล้ายคลึงกัน'",
        "ผิด เพราะ remains แปลว่า 'ซากปรักหักพัง/อัฐิ'"
      ]
    },
    solution: [
      "1. โครงสร้างความหมายพูดถึงเสรีภาพในการเลือกทางศาสนา (religious)",
      "2. คำศัพท์ที่ควบคู่และอธิบายการนับถือศรัทธาคือ 'belief' (ความเชื่อ)"
    ],
    formula: "Collocation: religious belief",
    commonMistakes: "อาจเลือก 'myth' เพราะมองว่าเรื่องศาสนาเป็นเรื่องเล่าโบราณ แต่ในภาษาสุภาพของการพูดถึงเสรีภาพสากลต้องใช้ 'belief'"
  },
  {
    id: "eng_q15",
    topic: "Vocabulary",
    difficulty: "ยาก",
    question: "The rare virus has been extremely ______; doctors have spent months trying to isolate it in the laboratory.",
    choices: [
      "upright",
      "puzzled",
      "elusive",
      "elementary"
    ],
    answer: 2, // index 2 = elusive
    explanation: {
      general: "โจทย์แปลว่า: 'ไวรัสที่หายากตัวนี้มีความ ______ เป็นอย่างยิ่ง แพทย์ใช้เวลาหลายเดือนพยายามแยกเชื้อในห้องปฏิบัติการแต่ไม่สำเร็จ'",
      choicesAnalysis: [
        "ผิด เพราะ upright แปลว่า 'ตั้งตรง/มีศีลธรรม'",
        "ผิด เพราะ puzzled แปลว่า 'รู้สึกงุนงง' (ใช้กับคน ไม่ขยายเชื้อไวรัส)",
        "ถูกต้อง เพราะ elusive แปลว่า 'ยากที่จะพบตัว/หลบเลี่ยงเก่ง/จับต้องได้ยาก'",
        "ผิด เพราะ elementary แปลว่า 'ขั้นพื้นฐาน'"
      ]
    },
    solution: [
      "1. บริบทคือไวรัสที่หายากและค้นหาตัวจับยาก 'spent months trying to isolate' (พยายามแยกเชื้ออยู่นาน)",
      "2. คุณสมบัติของสิ่งที่หาเจอหรือตรวจจับเจอได้ยากมากคือ 'elusive'"
    ],
    formula: null,
    commonMistakes: "ตอบ 'puzzled' เพราะคิดว่าคุณหมอกำลังปวดหัวกับมัน แต่ตัวประธานของประโยคคือ 'The rare virus' ซึ่งเป็นสิ่งไม่มีความรู้สึก จึงไม่สามารถใช้ -ed adjective ได้"
  },
  {
    id: "eng_q16",
    topic: "Vocabulary",
    difficulty: "ปานกลาง",
    question: "This digital hard drive has the ______ to store up to two terabytes of files and videos.",
    choices: [
      "capacity",
      "consortium",
      "span",
      "specimen"
    ],
    answer: 0, // index 0 = capacity
    explanation: {
      general: "โจทย์แปลว่า: 'ฮาร์ดไดรฟ์ดิจิทัลตัวนี้มีความ ______ ในการบันทึกไฟล์และวิดีโอได้สูงสุดถึงสองเทราไบต์'",
      choicesAnalysis: [
        "ถูกต้อง เพราะ capacity แปลว่า 'ความจุ/ความสามารถในการบรรจุหรือรองรับ'",
        "ผิด เพราะ consortium แปลว่า 'กลุ่มธุรกิจร่วมค้า'",
        "ผิด เพราะ span แปลว่า 'ช่วงขอบเขต (เวลา/ความกว้าง)'",
        "ผิด เพราะ specimen แปลว่า 'ตัวอย่างสิ่งตรวจชิ้นงาน'"
      ]
    },
    solution: [
      "1. บริบทคือการกักเก็บพื้นที่ของอุปกรณ์ไอที 'store up to two terabytes'",
      "2. คำศัพท์ที่หมายถึงความจุของอุปกรณ์บันทึกข้อมูลคือ 'capacity'"
    ],
    formula: null,
    commonMistakes: "สับสนกับคำว่า 'span' เนื่องจากจำโครงสร้าง life span (ช่วงอายุขัย) มาปนเปกับความจุเก็บข้อมูล"
  },
  {
    id: "eng_q17",
    topic: "Vocabulary",
    difficulty: "ยาก",
    question: "A ______ is a scientist who focuses on the physical development, skeletal changes, and evolution of ancient humans.",
    choices: [
      "physical anthropologist",
      "skeptic",
      "respondent",
      "groom"
    ],
    answer: 0, // index 0 = physical anthropologist
    explanation: {
      general: "โจทย์แปลว่า: '______ คือนักวิทยาศาสตร์ที่มุ่งเน้นการศึกษาพัฒนาการทางร่างกาย การเปลี่ยนแปลงของกระดูก และวิวัฒนาการของมนุษย์โบราณ'",
      choicesAnalysis: [
        "ถูกต้อง เพราะ physical anthropologist แปลว่า 'นักมานุษยวิทยากายภาพ' (ผู้ศึกษาเรื่องกระดูกและวิวัฒนาการร่างกายของมนุษย์)",
        "ผิด เพราะ skeptic แปลว่า 'ผู้สงสัย/ผู้ไม่เชื่อตามคนอื่น'",
        "ผิด เพราะ respondent แปลว่า 'ผู้ทำแบบสอบถาม'",
        "ผิด เพราะ groom แปลว่า 'คนจูงม้า/เจ้าบ่าว'"
      ]
    },
    solution: [
      "1. พิจารณาคำนิยามสายอาชีพ: 'scientist... physical development, skeletal changes... of ancient humans' (วิทยาศาสตร์โครงสร้างกระดูกมนุษย์โบราณ)",
      "2. ศัพท์เฉพาะด้านนี้คือ 'physical anthropologist' มานุษยวิทยาชีวภาพ/กายภาพ"
    ],
    formula: null,
    commonMistakes: "นักเรียนมักตอบผิดเพราะเห็นศัพท์คำนี้ยาวและดูยากเกินตัว แต่เป็นคำศัพท์สำคัญที่พบในชุดเอกสารแนวข้อสอบ"
  },
  {
    id: "eng_q18",
    topic: "Vocabulary",
    difficulty: "ปานกลาง",
    question: "Technology sales have seen an ______ growth, doubling every six months for the past two years.",
    choices: [
      "exponential",
      "annual",
      "elementary",
      "upright"
    ],
    answer: 0, // index 0 = exponential
    explanation: {
      general: "โจทย์แปลว่า: 'ยอดขายกลุ่มเทคโนโลยีมีการเติบโตแบบ ______ เพิ่มขึ้นเป็นสองเท่าในทุกๆ หกเดือนในช่วงสองปีที่ผ่านมา'",
      choicesAnalysis: [
        "ถูกต้อง เพราะ exponential growth แปลว่า 'การเติบโตแบบก้าวกระโดด/ทวีคูณทวีความรวดเร็วขึ้น'",
        "ผิด เพราะ annual แปลว่า 'เป็นประจำทุกปี'",
        "ผิด เพราะ elementary แปลว่า 'เบื้องต้น'",
        "ผิด เพราะ upright แปลว่า 'ในแนวตั้งตรง'"
      ]
    },
    solution: [
      "1. คีย์เวิร์ดบอกรูปแบบการเติบโตว่า 'doubling every six months' (เบิ้ลสองเท่าทุกครึ่งปี) ซึ่งเป็นการทวีคูณยกกำลัง",
      "2. คำศัพท์ภาษาอังกฤษของการเติบโตรูปแบบนี้คือ 'exponential'"
    ],
    formula: "Exponential growth = การเติบโตรูปแบบสมการเอ็กซ์โพเนนเชียล y = a(b)^x",
    commonMistakes: "สับสนกับ 'annual' เพราะคิดว่ายอดขายรายงานเป็นปีๆ แต่ข้อความเน้นถึงอัตราความเร็วของการเติบโตแบบทวีคูณ"
  },

  // --- PART 2: WRITING & GRAMMAR (19-30) ---
  {
    id: "eng_q19",
    topic: "Writing & Grammar",
    difficulty: "ง่าย",
    question: "Choose the grammatically correct sentence.",
    choices: [
      "My sister don't watch action movies.",
      "My sister doesn't watches action movies.",
      "My sister doesn't watch action movies.",
      "My sister not watch action movies."
    ],
    answer: 2, // index 2 = My sister doesn't watch action movies.
    explanation: {
      general: "การทำประโยคปฏิเสธใน Present Simple Tense ของประธานเอกพจน์บุรุษที่ 3 (My sister) ต้องใช้ doesn't และตามด้วยคำกริยาช่อง 1 รูปเดิม (Bare Infinitive - ไม่มี s)",
      choicesAnalysis: [
        "ผิด เพราะ My sister เป็นเอกพจน์ ต้องใช้ doesn't ไม่ใช่ don't",
        "ผิด เพราะหลัง doesn't กริยาต้องไม่มีการเติม s (watches)",
        "ถูกต้อง เพราะประธานเอกพจน์คู่กับ doesn't และตามด้วยกริยาไม่ผัน (watch)",
        "ผิด เพราะห้ามใช้ not วางลอยๆ หน้ากริยาหลักในภาษาเขียนที่เป็นทางการเช่นนี้"
      ]
    },
    solution: [
      "1. สังเกตประธาน: 'My sister' = เอกพจน์",
      "2. กริยาช่วยปฏิเสธที่เหมาะสม: 'doesn't'",
      "3. ตรวจสอบกริยาหลัก: ต้องกลับเป็นรูปเดิมไม่ผัน (watch) ห้ามใส่ watches",
      "4. สรุปประโยคที่ถูกต้องคือข้อ C."
    ],
    formula: "Subject (Singular) + doesn't + Verb (Infinitive)",
    commonMistakes: "นักเรียนเผลอใส่อักขระ s ซ้ำซ้อนที่คำกริยาหลังใช้ doesn't แล้ว เช่น doesn't watches ซึ่งขัดต่อหลักไวยากรณ์"
  },
  {
    id: "eng_q20",
    topic: "Writing & Grammar",
    difficulty: "ง่าย",
    question: "Choose the grammatically correct sentence.",
    choices: [
      "They is preparing for the final exam now.",
      "They are preparing for the final exam now.",
      "They preparing for the final exam now.",
      "They were preparing for the final exam now."
    ],
    answer: 1, // index 1 = They are preparing for the final exam now.
    explanation: {
      general: "โครงสร้าง Present Continuous Tense ใช้ระบุเหตุการณ์กำลังเกิดขึ้นขณะพูด (มีคำว่า now) โครงสร้างคือ Subject + is/am/are + V.ing",
      choicesAnalysis: [
        "ผิด เพราะ They เป็นพหูพจน์ ต้องใช้ verb to be 'are' ไม่ใช่ 'is'",
        "ถูกต้อง เพราะ They เป็นพหูพจน์ ใช้คู่กับ 'are' และกริยาเติม -ing (preparing) เหมาะสมกับช่วงเวลา 'now' (ขณะนี้)",
        "ผิด เพราะขาด Verb to be หน้ากริยา -ing",
        "ผิด เพราะ were ใช้กับเหตุการณ์ในอดีต (Past Continuous) ขัดกับคำระบุเวลาปัจจุบัน 'now'"
      ]
    },
    solution: [
      "1. ค้นหาคำบอกเวลา: 'now' (ขณะนี้) บ่งชี้ Present Continuous Tense",
      "2. ตรวจสอบประธาน: 'They' (พหูพจน์) ต้องใช้คู่กับ Verb to be 'are'",
      "3. วางโครงสร้าง: They + are + preparing...",
      "4. ตอบข้อ B."
    ],
    formula: "Subject (Plural) + are + V-ing (for Present action)",
    commonMistakes: "ลืมใส่ Verb to be (is/am/are) หน้าคำกริยาที่เติม -ing"
  },
  {
    id: "eng_q21",
    topic: "Writing & Grammar",
    difficulty: "ปานกลาง",
    question: "Choose the grammatically correct sentence.",
    choices: [
      "I have visited Chiang Mai three years ago.",
      "I visited Chiang Mai three years ago.",
      "I have visit Chiang Mai three years ago.",
      "I visiting Chiang Mai three years ago."
    ],
    answer: 1, // index 1 = I visited Chiang Mai three years ago.
    explanation: {
      general: "ประโยคระบุช่วงเวลากำหนดไว้ในอดีตอย่างเจาะจงและสิ้นสุดแล้ว ('three years ago' - สามปีที่แล้ว) ต้องใช้ Past Simple Tense (Subject + V.2) ห้ามใช้ Present Perfect (have + V.3)",
      choicesAnalysis: [
        "ผิด เพราะ Present Perfect Tense ห้ามใช้กับเวลาอดีตที่ระบุชัดเจนเด็ดขาด",
        "ถูกต้อง เพราะเจาะจงอดีตสามปีก่อน ต้องใช้กริยาช่อง 2 'visited'",
        "ผิด เพราะใช้แกรมมาร์ปนเป และกริยา visit ผิดรูปหลัง have",
        "ผิด เพราะนำกริยาเติม -ing มาทำหน้าที่เป็นกริยาแท้เดี่ยวๆ โดยไม่มี Verb to be"
      ]
    },
    solution: [
      "1. ค้นหาคำระบุเวลาอดีตเฉียบขาด: 'three years ago' (บ่งชี้เหตุการณ์เกิดและจบไปแล้วในอดีต)",
      "2. Tense ที่ต้องใช้คือ Past Simple Tense (Verb ช่อง 2 เท่านั้น)",
      "3. มองหารูปประโยคที่มีกริยาช่อง 2 แท้: 'I visited...'",
      "4. เลือกข้อ B."
    ],
    formula: "Subject + Verb 2 (for specific past time markers like 'ago', 'yesterday', 'in 2020')",
    commonMistakes: "สับสนใช้ Present Perfect (have visited) เมื่อเห็นคำบอกเวลาที่เป็นอดีตเพราะคิดว่าการท่องเที่ยวเป็นประสบการณ์สะสมในใจ"
  },
  {
    id: "eng_q22",
    topic: "Writing & Grammar",
    difficulty: "ง่าย",
    question: "Choose the grammatically correct sentence.",
    choices: [
      "David can speaks Japanese fluently.",
      "David cans speak Japanese fluently.",
      "David can speaking Japanese fluently.",
      "David can speak Japanese fluently."
    ],
    answer: 3, // index 3 = David can speak Japanese fluently.
    explanation: {
      general: "หลังคำกริยาช่วยกลุ่ม Modals (can, could, will, would, shall, should, may, might, must) ต้องตามด้วยคำกริยาช่อง 1 รูปธรรมดาไม่ผัน ไม่เติม s/es/ing และไม่มี to (Infinitive without 'to')",
      choicesAnalysis: [
        "ผิด เพราะกริยาหลัง can ห้ามเติม s (speaks)",
        "ผิด เพราะคำว่า can ห้ามเติม s แม้ประธานจะเป็นเอกพจน์ก็ตาม",
        "ผิด เพราะหลัง can ห้ามเติม -ing (speaking)",
        "ถูกต้อง เพราะใช้ can ควบคู่กับกริยาช่อง 1 รูปปกติ (speak)"
      ]
    },
    solution: [
      "1. วิเคราะห์กฎไวยากรณ์สำหรับคำกริยาช่วย 'can':",
      "   - can + Verb (Bare Infinitive)",
      "2. ตรวจเช็กช้อยส์หาประโยคที่มีโครงสร้าง 'can + speak' ดั้งเดิม",
      "3. ได้คำตอบข้อ D."
    ],
    formula: "Subject + Modal Verb (can) + Verb (Infinitive)",
    commonMistakes: "เผลอเติม s ที่คำกริยาหลักเนื่องจากจำฝังใจว่าประธานเอกพจน์ (David) กริยาต้องเติม s เสมอใน Present tense"
  },
  {
    id: "eng_q23",
    topic: "Writing & Grammar",
    difficulty: "ปานกลาง",
    question: "Choose the grammatically correct sentence.",
    choices: [
      "Because the weather was rainy, so they stayed inside.",
      "Since the weather was rainy, they stayed inside.",
      "Since the weather was rainy, so they stayed inside.",
      "Although the weather was rainy, but they stayed inside."
    ],
    answer: 1, // index 1 = Since the weather was rainy, they stayed inside.
    explanation: {
      general: "ในภาษาอังกฤษมาตรฐาน ห้ามใช้คำเชื่อมบอกเหตุผลซ้ำซ้อนสองคำร่วมกันในประโยคคู่ เช่น ห้ามใช้ Because... คู่กับ so หรือ Although... คู่กับ but ในประโยคเดียวกัน",
      choicesAnalysis: [
        "ผิด เพราะมีตัวเชื่อมบอกเหตุผล Because แล้ว ห้ามใส่ตัวเชื่อมบอกผล so ซ้ำในประโยคเดียวกัน",
        "ถูกต้อง เพราะใช้ Since เปิดหน้าประโยคย่อยเหตุ แล้วคั่นเครื่องหมายคอมมาตามด้วยประโยคผลลัพธ์โดยไม่มีคำเชื่อมซ้ำซ้อน",
        "ผิด เพราะมี Since แล้วห้ามใช้ so ซ้ำซ้อน",
        "ผิด เพราะมี Although (แม้ว่า) แล้วห้ามใช้ but (แต่) ซ้ำซ้อนกันตามกฎภาษาอังกฤษ"
      ]
    },
    solution: [
      "1. ตรวจสอบการใช้คำเชื่อมคู่ฟุ่มเฟือยที่เป็นจุดผิดบ่อย (Double Conjunctions)",
      "2. กฎทอง: Because... , [no 'so'] / Although... , [no 'but']",
      "3. ข้อ B. ใช้ 'Since... , they...' ถูกต้องสมบูรณ์แบบ"
    ],
    formula: "Since/Because/As + S1 + V1, S2 + V2  (ไม่มี 'so' คั่น)",
    commonMistakes: "นักเรียนไทยมักคุ้นเคยกับการแปลตรงตัวจากภาษาไทยว่า 'เพราะว่า... ดังนั้น...' (Because... so...) หรือ 'ถึงแม้ว่า... แต่ว่า...' (Although... but...) ซึ่งในภาษาอังกฤษถือว่าผิดแกรมมาร์ร้ายแรง"
  },
  {
    id: "eng_q24",
    topic: "Writing & Grammar",
    difficulty: "ปานกลาง",
    question: "Choose the sentence with the CORRECT capitalization.",
    choices: [
      "We plan to visit central bangkok next monday.",
      "We plan to visit central Bangkok next monday.",
      "We plan to visit Central Bangkok next Monday.",
      "We plan to visit Central bangkok next Monday."
    ],
    answer: 2, // index 2 = We plan to visit Central Bangkok next Monday.
    explanation: {
      general: "หลักการใช้อักษรตัวพิมพ์ใหญ่ (Capitalization): ชื่อสถานที่เฉพาะเจาะจง (Central Bangkok) และวันในรอบสัปดาห์ (Monday) ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่เสมอ",
      choicesAnalysis: [
        "ผิด เพราะชื่อกรุงเทพ (bangkok) และวันจันทร์ (monday) ใช้ตัวเล็กทั้งหมด",
        "ผิด เพราะเขียน monday เป็นตัวพิมพ์เล็ก",
        "ถูกต้อง เพราะเขียนอักษรตัวใหญ่ที่ตัวอักษรแรกของสถานที่เฉพาะ (Central Bangkok) และวันจันทร์ (Monday)",
        "ผิด เพราะสะกดชื่อ bangkok ด้วยตัวพิมพ์เล็ก"
      ]
    },
    solution: [
      "1. ตรวจเช็กคำที่เป็นวิสามานยนาม (Proper Noun): 'Central Bangkok' (สถานที่ท่องเที่ยวระบุพิกัดชัดเจน)",
      "2. ตรวจเช็กชื่อวัน: 'Monday' ต้องเป็นตัวอักษรพิมพ์ใหญ่ตัวแรกเสมอ",
      "3. มองหาตัวเลือกที่เขียน 'Central Bangkok' และ 'Monday' ขึ้นต้นด้วยตัวใหญ่ทั้งหมด"
    ],
    formula: "Capitalize Proper Nouns (names, cities, days of the week, months, languages)",
    commonMistakes: "มักลืมพิมพ์ตัวพิมพ์ใหญ่ในส่วนวันของสัปดาห์ (monday, sunday) หรือภาษา/สัญชาติ (english, thai)"
  },
  {
    id: "eng_q25",
    topic: "Writing & Grammar",
    difficulty: "ง่าย",
    question: "Choose the sentence with the CORRECT capitalization.",
    choices: [
      "my favorite subjects are english and science.",
      "My favorite subjects are english and Science.",
      "My favorite subjects are English and science.",
      "My favorite subjects are English and Science."
    ],
    answer: 2, // index 2 = My favorite subjects are English and science.
    explanation: {
      general: "กฎการเขียนวิชาเรียน: ชื่อภาษาหรือสัญชาติ เช่น English, Thai, Spanish ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่เสมอ ส่วนวิชาทั่วไปที่ไม่ได้มาจากสัญชาติ เช่น science, math, history ให้เขียนด้วยตัวพิมพ์เล็ก (เว้นแต่ขึ้นต้นประโยค)",
      choicesAnalysis: [
        "ผิด เพราะคำแรกของประโยค my ต้องเป็นตัวพิมพ์ใหญ่ และ English เขียนตัวพิมพ์เล็ก",
        "ผิด เพราะเขียน english ตัวพิมพ์เล็ก และ science ตัวพิมพ์ใหญ่สลับกัน",
        "ถูกต้อง ตัวอักษรแรกขึ้นต้นประโยคตัวใหญ่ (My), วิชาสัญชาติภาษาตัวใหญ่ (English) และวิชาความรู้ทั่วไปตัวเล็ก (science)",
        "ผิด เพราะเขียนวิชาทั่วไป Science ด้วยตัวพิมพ์ใหญ่"
      ]
    },
    solution: [
      "1. คำนำหน้าประโยค 'My' ต้องขึ้นต้นตัวใหญ่",
      "2. แยกแยะประเภทวิชา: English (วิชาที่ตั้งชื่อตามภาษา/ประเทศ) -> ตัวใหญ่ตัวแรก, science (วิชาสายวิทย์ทั่วไป) -> ตัวเล็ก",
      "3. ตรวจสอบช้อยส์พบข้อ C. ถูกกฎเกณฑ์กติกาที่สุด"
    ],
    formula: "Capitalize language subjects (English, Thai) but lowercase general subjects (math, science) unless they are part of a specific course title",
    commonMistakes: "นักเรียนมักเขียนวิชาวิทยาศาสตร์และคณิตศาสตร์ด้วยตัวพิมพ์ใหญ่ตัวแรกเสมอ (Science, Math) เนื่องจากสำคัญ แต่แท้จริงตามหลักไวยากรณ์สากลใช้ตัวพิมพ์เล็ก"
  },
  {
    id: "eng_q26",
    topic: "Writing & Grammar",
    difficulty: "ปานกลาง",
    question: "Choose the sentence with the CORRECT capitalization.",
    choices: [
      "We will travel to Japan in july.",
      "We will travel to japan in July.",
      "We will travel to Japan in July.",
      "we will travel to Japan in july."
    ],
    answer: 2, // index 2 = We will travel to Japan in July.
    explanation: {
      general: "ประเทศ (Japan) และชื่อเดือนในรอบปี (July) จัดเป็นคำนามเฉพาะที่ต้องใช้ตัวอักษรตัวใหญ่ตัวแรกเสมอในทุกตำแหน่งของประโยค",
      choicesAnalysis: [
        "ผิด เพราะสะกดชื่อเดือน july ด้วยตัวพิมพ์เล็ก",
        "ผิด เพราะสะกดประเทศญี่ปุ่น japan ด้วยตัวพิมพ์เล็ก",
        "ถูกต้อง ตัวแรกประโยค (We), ประเทศ (Japan) และเดือน (July) เขียนถูกต้องตามข้อกำหนดพิมพ์ใหญ่ทั้งหมด",
        "ผิด เพราะใช้ตัวเล็กนำหน้าประโยค (we) และใช้ตัวเล็กที่เดือน (july)"
      ]
    },
    solution: [
      "1. ตัวแรกของประโยค 'We' ต้องใหญ่",
      "2. คำนามเฉพาะประเทศ 'Japan' ต้องใหญ่",
      "3. คำนามเฉพาะเดือน 'July' ต้องใหญ่",
      "4. จับคู่คำตอบที่ถูกต้องตรงกับข้อ C."
    ],
    formula: "Capitalize country names and months of the year",
    commonMistakes: "เผลอเขียนชื่อเดือนด้วยอักษรตัวพิมพ์เล็กเนื่องจากพิมพ์รีบหรือคุ้นชินตาในโซเชียลมีเดีย"
  },
  {
    id: "eng_q27",
    topic: "Writing & Grammar",
    difficulty: "ง่าย",
    question: "Choose the best sentence.",
    choices: [
      "The students are studying quietly in the school library.",
      "The students studying quietly school library.",
      "The students is studying quietly in school library.",
      "Students quietly studying in the school library are."
    ],
    answer: 0, // index 0 = The students are studying quietly in the school library.
    explanation: {
      general: "ตรวจสอบโครงสร้างความครบถ้วนของภาคประธาน กริยา และกรรม/ส่วนขยายให้สอดคล้องกันตามหลัก S-V Agreement",
      choicesAnalysis: [
        "ถูกต้อง เพราะประธานพหูพจน์ (The students) ใช้คู่กับกริยาพหูพจน์ (are studying) มี adverb ขยายกริยา (quietly) และมี prepositional phrase ระบุสถานที่ถูกหลักไวยากรณ์",
        "ผิด เพราะขาด Verb to be และบุพบท 'in the'",
        "ผิด เพราะใช้ 'is' กับประธานที่เป็นพหูพจน์ (students)",
        "ผิด เพราะวางโครงสร้างกริยาช่วย are กลับด้านสับสน"
      ]
    },
    solution: [
      "1. ตรวจสอบประธาน: 'The students' (มี -s ท้ายคำ) -> พหูพจน์",
      "2. ตรวจสอบกริยาช่วย: ต้องเป็น 'are' เท่านั้น (ตัดข้อ C. ทิ้ง)",
      "3. ตรวจสอบความสมบูรณ์ของโครงสร้างประโยค: ข้อ A. มีส่วนเติมเต็มครบถ้วนและลื่นไหลที่สุด"
    ],
    formula: "Subject (Plural) + are + V-ing + Adverb + Prepositional phrase",
    commonMistakes: "สะเพร่าไม่ได้ตรวจตัวสะกดพหูพจน์ของคำนาม ทำให้เลือกกริยาช่วยผิดพลาด"
  },
  {
    id: "eng_q28",
    topic: "Writing & Grammar",
    difficulty: "ปานกลาง",
    question: "Choose the correct sentence (Conditional Sentence Type 1).",
    choices: [
      "If it will rain tomorrow, we will stay at home.",
      "If it rains tomorrow, we stay at home.",
      "If it rains tomorrow, we will stay at home.",
      "If it rain tomorrow, we will stay at home."
    ],
    answer: 2, // index 2 = If it rains tomorrow, we will stay at home.
    explanation: {
      general: "ประโยคเงื่อนไขแบบที่ 1 (First Conditional) ใช้แสดงเงื่อนไขที่มีแนวโน้มจะเป็นจริงในอนาคต โครงสร้างคือ: If + Present Simple (Subject + V.1 s/es), Future Simple (Subject + will + Verb infinitive)",
      choicesAnalysis: [
        "ผิด เพราะหลัง If ห้ามใช้ will (will rain) ในประโยคระบุเงื่อนไขอนาคตลักษณะนี้",
        "ผิด เพราะฝั่งผลลัพธ์เป็น Present Simple (stay) ซึ่งเหมาะสำหรับกฎความจริงทั่วไป (Type 0) มากกว่าคาดเดาอนาคตพรุ่งนี้",
        "ถูกต้อง เพราะใช้โครงสร้าง If + it (เอกพจน์) + rains (V.1 เติม s) คู่กับ we + will + stay (V.infinitive) เหมาะสมกับช่วงเวลาอนาคต 'tomorrow'",
        "ผิด เพราะ it เป็นประธานเอกพจน์ กริยา rain ต้องเติม s ในรูป Present Simple"
      ]
    },
    solution: [
      "1. โครงสร้าง First Conditional: If + Present Simple, Subject + will + V.inf",
      "2. พิจารณาส่วนแรก (If-clause): ประธาน 'it' คำกริยา 'rain' ต้องเติม s -> 'If it rains'",
      "3. พิจารณาส่วนสอง (Main clause): ต้องมี will -> 'we will stay'",
      "4. รวมร่างประโยคที่ถูกต้อง: 'If it rains tomorrow, we will stay at home.'"
    ],
    formula: "If + Present Simple (V.1 s/es), Subject + will + Verb (Infinitive)",
    commonMistakes: "นักเรียนมักใส่ will ในประโยคทั้งสองส่วน เช่น If it will rain... we will stay... ซึ่งผิดหลักการภาษาอังกฤษ"
  },
  {
    id: "eng_q29",
    topic: "Writing & Grammar",
    difficulty: "ง่าย",
    question: "Choose the correct sentence.",
    choices: [
      "My mother enjoys to cook dinner for the family.",
      "My mother enjoys cooking dinner for the family.",
      "My mother enjoy cooking dinner for the family.",
      "My mother enjoys cooks dinner for the family."
    ],
    answer: 1, // index 1 = My mother enjoys cooking dinner for the family.
    explanation: {
      general: "คำกริยา 'enjoy' เป็นคำกริยาประเภทที่ต้องตามหลังด้วย Gerund (คำกริยาที่เติม -ing ทำหน้าที่นาม) เท่านั้น ห้ามใช้กับ to-infinitive",
      choicesAnalysis: [
        "ผิด เพราะหลัง enjoy ห้ามใช้ to-infinitive (to cook)",
        "ถูกต้อง เพราะประธานเอกพจน์ (My mother) คู่กับกริยาเติม s (enjoys) และตามด้วยกริยาเติม -ing (cooking) ตามกฎของกริยา enjoy",
        "ผิด เพราะประธานเอกพจน์แต่คำกริยาหลัก enjoy ไม่มีลักษณนาม s",
        "ผิด เพราะนำกริยาผันสองตัวมาวางชนกันตรงๆ โดยไม่มีเครื่องเชื่อมตัวกลาง"
      ]
    },
    solution: [
      "1. ตรวจสอบกริยาเฉพาะที่ต้องตามด้วย Gerund: กริยา 'enjoy' + V-ing",
      "2. ตรวจสอบความสัมพันธ์ประธานและกริยา: 'My mother' (เอกพจน์) -> 'enjoys'",
      "3. ดึงโครงสร้างมารวมกัน: My mother + enjoys + cooking...",
      "4. เลือกข้อ B."
    ],
    formula: "Subject (Singular) + enjoys + Gerund (V-ing)",
    commonMistakes: "เผลอใช้โครงสร้าง Verb + to + V.1 (เช่น enjoys to cook) เนื่องจากแปลตรงตัวในใจว่า 'ชอบที่จะทำ...' ซึ่งผิดแกรมมาร์"
  },
  {
    id: "eng_q30",
    topic: "Writing & Grammar",
    difficulty: "ปานกลาง",
    question: "Choose the correct sentence (Conditional Sentence Type 0).",
    choices: [
      "If you heat ice, it will melts.",
      "If you heat ice, it melt.",
      "If you heat ice, it melts.",
      "If you heated ice, it melts."
    ],
    answer: 2, // index 2 = If you heat ice, it melts.
    explanation: {
      general: "ประโยคเงื่อนไขแบบที่ 0 (Zero Conditional) ใช้กับข้อเท็จจริงทางวิทยาศาสตร์ที่เป็นจริงเสมอ โครงสร้างคือ: If + Present Simple, Present Simple",
      choicesAnalysis: [
        "ผิด เพราะหลัง will ต้องตามด้วยกริยาไม่ผัน ห้ามใส่ melts เติม s ทับซ้อน",
        "ผิด เพราะ it เป็นประธานเอกพจน์ กริยา melt ต้องเติม s ใน Present Simple Tense",
        "ถูกต้อง เพราะความจริงทางวิทยาศาสตร์ (เมื่อให้ความร้อนน้ำแข็ง มันจะละลาย) ใช้โครงสร้าง Present Simple ทั้งสองฟาก: heat (V.1) คู่กับ melts (V.1 s)",
        "ผิด เพราะประโยคส่วนแรกใช้รูปอดีต (heated) ซึ่งขัดแย้งกับหลักข้อเท็จจริงทั่วไป"
      ]
    },
    solution: [
      "1. วิเคราะห์ความเป็นจริงของประโยค: 'If you heat ice...' (ต้มความร้อนน้ำแข็ง) เป็นสัจธรรมทางวิทยาศาสตร์ 100% จึงต้องใช้ Zero Conditional",
      "2. โครงสร้าง Zero Conditional: If + Present Simple, Present Simple",
      "3. ตรวจสอบคำกริยาคู่: heat (คู่ you) และ melts (เติม s คู่ it)",
      "4. ข้อ C. เขียนรูปแกรมมาร์ได้สอดคล้องถูกต้องที่สุด"
    ],
    formula: "If + Present Simple (V.1), Present Simple (V.1 s/es) (For scientific facts)",
    commonMistakes: "เผลอใส่ will ในส่วนผลลัพธ์ของข้อเท็จจริงวิทยาศาสตร์พื้นฐาน แม้พอสื่อสารเข้าใจได้แต่วิธีที่ถูกต้องที่สุดในข้อสอบคือ Present Simple ทั้งคู่"
  },

  // --- PART 3: READING COMPREHENSION (31-40) ---
  // Passage 1: Technology & Smartphone Usage (31-35)
  {
    id: "eng_q31",
    topic: "Reading Comprehension (Passage 1)",
    difficulty: "ง่าย",
    question: "According to Passage 1, what is the main idea of the text?",
    choices: [
      "Smartphones are only used for playing games and talking to friends.",
      "Teachers believe smartphones should be completely banned in schools.",
      "Smartphones have both benefits and drawbacks for teenage students.",
      "Using smartphones before bedtime helps teenagers concentrate in class."
    ],
    answer: 2, // index 2 = Smartphones have both benefits and drawbacks for teenage students.
    explanation: {
      general: "วิเคราะห์ใจความสำคัญรวมของ Passage 1 โดยสรุปย่อหน้าแรก (ประโยชน์ของการค้นคว้าและเรียนรู้) และย่อหน้าที่สอง (โทษของการจ้องจอนานเกินไป ส่งผลเสียต่อการเรียนและการนอนหลับ)",
      choicesAnalysis: [
        "ผิด เพราะจำกัดขอบเขตข้อมูลเกินไป แท้จริงมีการกล่าวถึงคุณประโยชน์ด้านการเรียนด้วย",
        "ผิด เพราะผู้เขียนและคุณครูเสนอให้ใช้อย่างมีขอบเขตและจำกัดเวลา ไม่ได้เสนอให้แบนร้อยเปอร์เซ็นต์",
        "ถูกต้อง เพราะบทความนำเสนอทั้งสองแง่มุมควบคู่กัน (มีทั้งข้อดีและปัญหาจากการใช้มือถือของวัยรุ่น)",
        "ผิด เพราะในบทความระบุว่าการใช้มือถือก่อนนอนจะทำให้นอนดึก รู้สึกเพลียและขาดสมาธิในการเรียน"
      ]
    },
    solution: [
      "1. สแกนเนื้อหา Passage 1 ย่อหน้าแรก: ระบุประโยชน์ในการหาข้อมูล ทำการบ้าน เรียนรู้รวดเร็ว",
      "2. สแกนเนื้อหาย่อหน้าสอง: ระบุโทษเรื่องติดเกม โซเชียล นอนดึก และไม่มีสมาธิ",
      "3. ย่อหน้าสาม: ข้อเสนอแนะการใช้ให้เหมาะสม (มีทั้งบวกลบ)",
      "4. ประเด็นสรุปที่เป็นใจความหลักคือข้อความแสดงความสมดุลทั้งข้อดีและข้อเสีย ตรงกับข้อ C."
    ],
    formula: null,
    commonMistakes: "เลือกข้อที่เป็นประเด็นย่อยในพารากราฟแรกหรือพารากราฟสองเพียงฝั่งเดียว แทนที่จะสรุปรวมภาพกว้างทั้งหมด"
  },
  {
    id: "eng_q32",
    topic: "Reading Comprehension (Passage 1)",
    difficulty: "ง่าย",
    question: "According to the passage, smartphones help students because they can ______.",
    choices: [
      "complete exams automatically without studying",
      "quickly search for information and study almost anywhere",
      "sleep better at night and avoid screen eye strain",
      "communicate with teachers without going to classrooms"
    ],
    answer: 1, // index 1 = quickly search for information and study almost anywhere
    explanation: {
      general: "ค้นหารายละเอียดเชิงประจักษ์ในพารากราฟแรกที่กล่าวถึงประโยชน์โดยตรงของสมาร์ทโฟน",
      choicesAnalysis: [
        "ผิด เพราะไม่มีข้อมูลระบุว่าทำให้ทำข้อสอบได้ทันทีโดยไม่ต้องเรียนหนังสือ",
        "ถูกต้อง เพราะพารากราฟ 1 ระบุประโยคเด่นชัด: '...search for information... study almost anywhere.'",
        "ผิด เพราะพารากราฟสองชี้ว่ามันรบกวนการนอนหลับทำให้นอนดึก",
        "ผิด เพราะไม่มีข้อความใดระบุจุดประสงค์การหลบเลี่ยงไม่ไปเข้าชั้นเรียนห้องเรียนปกติ"
      ]
    },
    solution: [
      "1. มองหาคีย์เวิร์ด 'help students' ในย่อหน้าแรก",
      "2. ข้อความในพารากราฟระบุ: 'Smartphones have made learning easier because students can find answers quickly and study almost anywhere.'",
      "3. คำตอบที่แปลงรูปความหมายตรงกันคือข้อ B."
    ],
    formula: null,
    commonMistakes: "ไม่ได้ตรวจเช็กกับข้อความดั้งเดิมในบทความและเดาตามความเห็นส่วนตัว"
  },
  {
    id: "eng_q33",
    topic: "Reading Comprehension (Passage 1)",
    difficulty: "ปานกลาง",
    question: "Which of the following problems is NOT mentioned as a result of using smartphones for a long time?",
    choices: [
      "Playing online games instead of studying.",
      "Sleeping late and feeling tired in class.",
      "Losing physical smartphones at school.",
      "Having difficulty concentrating during lessons."
    ],
    answer: 2, // index 2 = Losing physical smartphones at school.
    explanation: {
      general: "ตรวจสอบข้อมูลเชิงปฏิเสธ (สิ่งที่บทความไม่ได้กล่าวถึง) ในส่วนปัญหาการใช้งานสมาร์ทโฟนยืดเยื้อนานเกินไป",
      choicesAnalysis: [
        "ผิด เพราะข้อความย่อหน้าสองเอ่ยถึงประเด็น: 'spend too much time on... online games instead of studying.'",
        "ผิด เพราะเอ่ยถึง: 'sleep late... feel tired...'",
        "ถูกต้อง เพราะในเนื้อหาไม่มีการพูดถึงปัญหาเด็กทำโทรศัพท์หายที่โรงเรียนแต่อย่างใด",
        "ผิด เพราะเอ่ยถึง: 'difficulty concentrating in class.'"
      ]
    },
    solution: [
      "1. ไปที่ย่อหน้าสองซึ่งพูดถึงปัญหาจากการใช้มือถือเป็นเวลานาน",
      "2. ขีดเส้นใต้ประเด็นที่กล่าวถึง: เกมออนไลน์, นอนดึก, อ่อนเพลีย, ขาดสมาธิ",
      "3. สิ่งเดียวที่หลุดกรอบและไม่มีเขียนระบุไว้คือเรื่องโทรศัพท์หาย (Losing physical smartphones)",
      "4. ตอบข้อ C."
    ],
    formula: null,
    commonMistakes: "ไม่ได้อ่านคำว่า 'NOT' ในคำถาม ทำให้ไปเลือกประเด็นแรกที่พบเจอในพารากราฟส่งเดช"
  },
  {
    id: "eng_q34",
    topic: "Reading Comprehension (Passage 1)",
    difficulty: "ปานกลาง",
    question: "In paragraph 3, the word 'wisely' is closest in meaning to ______.",
    choices: [
      "carelessly",
      "loudly",
      "secretly",
      "carefully"
    ],
    answer: 3, // index 3 = carefully
    explanation: {
      general: "วิเคราะห์บริบทคำศัพท์ 'wisely' ในย่อหน้าสาม: 'use them wisely. Setting a time limit and taking breaks...' (ใช้อย่างฉลาด/รอบคอบ มีการจำกัดเวลาและหยุดพักสายตา)",
      choicesAnalysis: [
        "ผิด เพราะ carelessly แปลว่า 'อย่างไม่ใส่ใจ/ประมาทเลินเล่อ' ตรงข้ามกับความหมายในประโยค",
        "ผิด เพราะ loudly แปลว่า 'อย่างส่งเสียงดัง'",
        "ผิด เพราะ secretly แปลว่า 'อย่างเป็นความลับ/ลับๆ ล่อๆ'",
        "ถูกต้อง เพราะ wisely แปลว่า 'อย่างชาญฉลาด/มีวิจารณญาณ' ซึ่งใกล้เคียงที่สุดกับ carefully 'อย่างระมัดระวังรอบคอบ/ใส่ใจ'"
      ]
    },
    solution: [
      "1. ค้นหาบริบทประโยค: 'smartphones are useful learning tools if students use them wisely.' (เครื่องมือจะเป็นประโยชน์ถ้าใช้อย่าง...)",
      "2. เทียบเคียงคำแปล 'wisely' (อย่างฉลาด/อย่างมีสติ)",
      "3. เปรียบเทียบตัวเลือก: การใช้อย่างระมัดระวังและรอบคอบ (carefully) ให้ผลลัพธ์เชิงบวกตรงกันที่สุด"
    ],
    formula: null,
    commonMistakes: "สับสนเลือกคำว่า 'secretly' เนื่องจากเด็กวัยรุ่นมักแอบแชตคุณครูลับๆ ในห้องเรียน แต่นั่นไม่ใช่ความหมายที่คุณครูแนะนำให้ทำ"
  },
  {
    id: "eng_q35",
    topic: "Reading Comprehension (Passage 1)",
    difficulty: "ง่าย",
    question: "What does the passage suggest students do to avoid the negative effects of technology?",
    choices: [
      "Stop using smartphones permanently.",
      "Only use smartphones inside the school library.",
      "Set a time limit and take regular screen breaks.",
      "Purchase a newer and faster smartphone model."
    ],
    answer: 2, // index 2 = Set a time limit and take regular screen breaks.
    explanation: {
      general: "ถอดรหัสข้อแนะนำท้ายบทความเพื่อแก้ไขปัญหาเชิงลบของการใช้สมาร์ทโฟน",
      choicesAnalysis: [
        "ผิด เพราะคุณครูไม่ได้บอกให้เลิกใช้โทรศัพท์อย่างถาวร",
        "ผิด เพราะไม่มีประโยคแนะนำให้ย้ายไปเล่นในห้องสมุดเท่านั้น",
        "ถูกต้อง เพราะบทความกล่าวตรงท้าย: 'Setting a time limit and taking breaks from the screen can help...'",
        "ผิด การซื้อรุ่นใหม่ไม่ได้ช่วยลดผลกระทบด้านสุขภาพหรือการเรียนเสียสมาธิ"
      ]
    },
    solution: [
      "1. โฟกัสช่วงประโยคท้ายสุดของ Passage 1:",
      "   - 'Setting a time limit and taking breaks from the screen can help students enjoy the benefits...'",
      "2. ประโยคดังกล่าวถูกแปลงสำนวนเล็กน้อยในข้อ C. อย่างสอดคล้องสมบูรณ์"
    ],
    formula: null,
    commonMistakes: "คิดลึกเกินตัวบทความ คาดเดามาตรการเด็ดขาดอย่างเลิกใช้ถาวร (ข้อ A) ซึ่งเกินเลยไปจากที่ระบุจริง"
  },

  // Passage 2: Clean School Week (36-40)
  {
    id: "eng_q36",
    topic: "Reading Comprehension (Passage 2)",
    difficulty: "ง่าย",
    question: "What is the primary goal of Greenwood High School in organizing 'Clean School Week'?",
    choices: [
      "To prepare the school fields for a national football tournament.",
      "To encourage students to work together and care about the environment.",
      "To reduce the amount of homework given to students this semester.",
      "To recruit new workers to clean classrooms and gardens."
    ],
    answer: 1, // index 1 = To encourage students to work together and care about the environment.
    explanation: {
      general: "วิเคราะห์วัตถุประสงค์หลักของการจัดงานสัปดาห์โรงเรียนสะอาดในพารากราฟแรกและพารากราฟสองของบทความที่ 2",
      choicesAnalysis: [
        "ผิด ไม่มีข้อมูลเกี่ยวกับทัวร์นาเมนต์การแข่งฟุตบอล",
        "ถูกต้อง เพราะเนื้อหาระบุว่าต้องการสอนให้นักเรียนหัดแยกขยะพลาสติก รักสิ่งแวดล้อม และชื่นชอบการร่วมมือทำงานเป็นทีมกับผองเพื่อน",
        "ผิด กิจกรรมนี้ไม่ได้ช่วยลดการบ้านวิชาการแต่อย่างใด",
        "ผิด วัตถุประสงค์คือการสร้างสุขนิสัยให้นักเรียนเอง ไม่ใช่รับสมัครพนักงานทำความสะอาดใหม่"
      ]
    },
    solution: [
      "1. ค้นหาเป้าหมายท้ายย่อหน้าหนึ่ง: 'Teachers hope these activities will help students develop good habits and care more about the environment.'",
      "2. ผสมกับประเด็นย่อหน้าสองเรื่องชอบทำงานร่วมกัน (working together)",
      "3. ข้อความที่ครอบคลุมวัตถุประสงค์นี้คือข้อ B."
    ],
    formula: null,
    commonMistakes: "ตอบข้อ D เพราะคิดตามบริบทการล้างโรงเรียนว่าต้องการหาคนมาขัดห้องน้ำ แต่จริงๆ เป็นกิจกรรมบ่มเพาะนิสัยนักเรียน"
  },
  {
    id: "eng_q37",
    topic: "Reading Comprehension (Passage 2)",
    difficulty: "ง่าย",
    question: "According to Passage 2, which area is NOT listed as a place students clean during the event?",
    choices: [
      "Classrooms",
      "Gardens",
      "Sports fields",
      "Shopping malls"
    ],
    answer: 3, // index 3 = Shopping malls
    explanation: {
      general: "สแกนสถานที่ที่ปรากฏอยู่ในย่อหน้าแรกเพื่อตัดตัวเลือกที่ไม่ได้ระบุออก",
      choicesAnalysis: [
        "ผิด เพราะมีระบุในบทความ: 'such as classrooms...'",
        "ผิด เพราะมีระบุในบทความ: '...gardens...'",
        "ผิด เพราะมีระบุในบทความ: '...and sports fields.'",
        "ถูกต้อง เพราะห้างสรรพสินค้า (Shopping malls) อยู่นอกขอบเขตของพื้นที่โรงเรียนและไม่มีระบุในเนื้อหา"
      ]
    },
    solution: [
      "1. ไปย่อหน้า 1 บรรทัด 2: '...cleaning different areas of the school, such as classrooms, gardens, and sports fields.'",
      "2. ตรวจสอบพื้นที่ที่ไม่มีในรายชื่อข้างต้น พบว่าคือ Shopping malls (ข้อ D.)"
    ],
    formula: null,
    commonMistakes: "อ่านคำถามไม่ละเอียด คิดว่าโจทย์ถามหาสถานที่ที่นักเรียนทำความสะอาดเลยเผลอเลือกข้อแรก (Classrooms)"
  },
  {
    id: "eng_q38",
    topic: "Reading Comprehension (Passage 2)",
    difficulty: "ปานกลาง",
    question: "Besides cleaning, what eco-friendly practice does the school encourage students to do?",
    choices: [
      "Bring reusable water bottles and lunch boxes instead of using plastic ones.",
      "Collect plastic trash to sell and raise money for school trips.",
      "Plant new vegetable gardens behind the sports fields.",
      "Create recycled paper art for classroom decoration."
    ],
    answer: 0, // index 0 = Bring reusable water bottles and lunch boxes instead of using plastic ones.
    explanation: {
      general: "มองหารายละเอียดเพิ่มเติมเกี่ยวกับพฤติกรรมรักษ์โลกที่โรงเรียนส่งเสริมนอกเหนือจากการกวาดถูทำความสะอาดทั่วไป",
      choicesAnalysis: [
        "ถูกต้อง เพราะบทความเขียนไว้ชัดเจน: 'the school encourages students to bring reusable water bottles and lunch boxes instead of using plastic ones.'",
        "ผิด เพราะโรงเรียนไม่ได้เน้นการนำขยะไปขายหาทุนทัศนศึกษาในข้อความ",
        "ผิด เพราะการเพาะปลูกผักไม่ได้ถูกกล่าวถึงในแง่แนวทางรักษ์โลกนี้ในย่อหน้า",
        "ผิด เพราะไม่มีระบุการประดิษฐ์กระดาษรีไซเคิลตกแต่งห้อง"
      ]
    },
    solution: [
      "1. โฟกัสช่วงกลางของย่อหน้าแรก: 'In addition to cleaning, the school encourages students to bring reusable water bottles and lunch boxes...'",
      "2. คำตอบที่ก๊อปปี้ความหมายมาเป๊ะๆ คือข้อ A."
    ],
    formula: null,
    commonMistakes: "มักจะเดากิจกรรมรักษ์โลกอื่นๆ ที่คิดว่าน่าจะทำในโรงเรียน (เช่น ปลูกผัก หรือทำศิลปะรีไซเคิล) โดยไม่ได้กลับมาตรวจดูตัวบทความหลัก"
  },
  {
    id: "eng_q39",
    topic: "Reading Comprehension (Passage 2)",
    difficulty: "ปานกลาง",
    question: "Why do many students enjoy participating in Clean School Week activities?",
    choices: [
      "They receive high scores and money prizes.",
      "They do not have to attend any academic classes for a week.",
      "They can work and spend time with their friends while helping the school.",
      "They are allowed to go back home early in the afternoon."
    ],
    answer: 2, // index 2 = They can work and spend time with their friends while helping the school.
    explanation: {
      general: "สืบค้นเหตุผลความสุขสนุกสนานของนักเรียนในการร่วมโครงการนี้ตามข้อเขียนในพารากราฟสอง",
      choicesAnalysis: [
        "ผิด บทความไม่ได้กล่าวถึงการแจกคะแนนพิเศษหรือรางวัลเป็นเงินทอง",
        "ผิด เพราะกิจกรรมนี้จัดเสริมในช่วงการเรียนทั่วไป ไม่ได้ยกเว้นงดเรียนวิชาการทั้งหมดเจ็ดวัน",
        "ถูกต้อง เพราะย่อหน้าสองระบุ: 'Many students say they enjoy working together because they can make the school cleaner while spending time with their friends.'",
        "ผิด ไม่มีข้อมูลว่าได้รับอนุญาตให้เลิกเรียนกลับบ้านก่อนเวลาปกติ"
      ]
    },
    solution: [
      "1. ค้นหาประโยคสะท้อนความเห็นของนักเรียนในย่อหน้า 2 บรรทัด 1:",
      "   - 'enjoy working together... spending time with their friends'",
      "2. เลือกข้อ C. ซึ่งแปลงสำนวนขยายความได้ตรงวัตถุประสงค์"
    ],
    formula: null,
    commonMistakes: "มักถูกล่อลวงด้วยผลประโยชน์ของนักเรียนทั่วไป เช่น ได้งดเรียนวิชาการทั้งสัปดาห์ หรือได้เงินรางวัลกลับบ้าน"
  },
  {
    id: "eng_q40",
    topic: "Reading Comprehension (Passage 2)",
    difficulty: "ง่าย",
    question: "Based on the text, what are the school's plans for this event in the future?",
    choices: [
      "They plan to hire professional cleaners next time.",
      "They plan to expand the event to other schools in the city.",
      "They plan to organize similar activities every semester.",
      "They plan to make it a mandatory graded project for all seniors."
    ],
    answer: 2, // index 2 = They plan to organize similar activities every semester.
    explanation: {
      general: "ค้นหารายละเอียดอนาคตของแผนงาน Clean School Week ในช่วงท้ายของบทความ",
      choicesAnalysis: [
        "ผิด เพราะขัดกับเจตนาของโรงเรียนที่ต้องการฝึกเด็กด้วยตนเอง",
        "ผิด โรงเรียนไม่ได้พูดถึงการไปร่วมขยายผลกับต่างสถาบันในขณะนี้",
        "ถูกต้อง เพราะประโยคสุดท้ายของบทความระบุ: 'The school plans to organize similar activities every semester.'",
        "ผิด ไม่มีข้อความระบุว่าจะต้องเป็นเกรดตัดคะแนนภาคบังคับสำหรับรุ่นพี่ปีสุดท้ายอย่างเดียว"
      ]
    },
    solution: [
      "1. ไปประโยคสุดท้ายปลายพารากราฟสอง: 'The school plans to organize similar activities every semester.'",
      "2. คำตอบตรงกับข้อ C. อย่างสอดคล้องคำต่อคำ"
    ],
    formula: null,
    commonMistakes: "มักมองข้ามประโยคสั้นๆ ปิดท้ายสุดของข้อสอบทำให้อ่านข้ามคีย์เวิร์ด 'every semester'"
  }
];
