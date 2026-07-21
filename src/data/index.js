import { mathData } from './math';
import { earthScienceData } from './earthScience';
import { englishData } from './english';
import { chemistryData } from './chemistry';
import { socialData } from './social';

export const subjectsData = {
  math: {
    id: "math",
    name: "คณิตศาสตร์เพิ่มเติม",
    icon: "BiCalculator",
    description: "บทเรียน เซต และ ตรรกศาสตร์เบื้องต้น (รวม 30 ข้อ)",
    questions: mathData,
    color: "from-red-600 to-amber-600",
    shadow: "shadow-red-900/30",
    statsColor: "rgb(239, 68, 68)"
  },
  earthScience: {
    id: "earthScience",
    name: "โลก ดาราศาสตร์ และอวกาศ",
    icon: "BiGlobe",
    description: "บทเรียน โครงสร้างโลก (Earth's Structure) (รวม 30 ข้อ)",
    questions: earthScienceData,
    color: "from-red-700 to-rose-950",
    shadow: "shadow-rose-950/30",
    statsColor: "rgb(225, 29, 72)"
  },
  english: {
    id: "english",
    name: "English Reading & Writing 1",
    icon: "BiBookOpen",
    description: "Vocabulary, Writing, & Reading Comprehension (รวม 40 ข้อ)",
    questions: englishData,
    color: "from-red-800 to-rose-600",
    shadow: "shadow-rose-900/30",
    statsColor: "rgb(190, 24, 74)"
  },
  chemistry: {
    id: "chemistry",
    name: "เคมี ม.4",
    icon: "FaFlask",
    description: "บทเรียน โครงสร้างอะตอม และ ตารางธาตุ (รวม 30 ข้อ)",
    questions: chemistryData,
    color: "from-rose-700 to-red-900",
    shadow: "shadow-red-950/30",
    statsColor: "rgb(244, 63, 94)"
  },
  social: {
    id: "social",
    name: "สังคมศึกษา (พุทธศาสนา)",
    icon: "FaPrayingHands",
    description: "บทเรียน พุทธศาสนา วรรณะ ศาสนพิธี และวันสำคัญ (รวม 40 ข้อ)",
    questions: socialData,
    color: "from-amber-600 to-red-800",
    shadow: "shadow-amber-900/30",
    statsColor: "rgb(217, 119, 6)"
  }
};
