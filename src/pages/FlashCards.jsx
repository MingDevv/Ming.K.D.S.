import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  BiLayer, 
  BiRefresh, 
  BiChevronLeft, 
  BiChevronRight, 
  BiCalculator, 
  BiGlobe, 
  BiBookOpen
} from 'react-icons/bi';
import { FaFlask, FaPrayingHands } from 'react-icons/fa';
import GlassCard from '../components/GlassCard';

const FlashCards = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSubject = searchParams.get('subject') || 'math';

  // --- STATE ---
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionStats, setSessionStats] = useState({ easy: 0, hard: 0, again: 0 });

  const setSubject = (subId) => {
    setSearchParams({ subject: subId });
    setCurrentIndex(0);
    setIsFlipped(false);
    setSessionStats({ easy: 0, hard: 0, again: 0 });
  };

  const tabs = [
    { id: 'math', label: 'คณิตศาสตร์', icon: BiCalculator },
    { id: 'earthScience', label: 'โลกและอวกาศ', icon: BiGlobe },
    { id: 'english', label: 'ภาษาอังกฤษ', icon: BiBookOpen },
    { id: 'chemistry', label: 'เคมี', icon: FaFlask },
    { id: 'social', label: 'สังคมศึกษา', icon: FaPrayingHands }
  ];

  // --- FLASH CARDS DATABASES ---
  const flashCardsDatabase = {
    math: [
      { front: "สูตร n(A ∪ B) ในเรื่องเซต", back: "n(A) + n(B) - n(A ∩ B)" },
      { front: "นิยามของ 'เดอมอร์แกน' (A ∪ B)'", back: "A' ∩ B' (กระจายคอมพลีเมนต์และกลับยูเนียนเป็นอินเตอร์เซกชัน)" },
      { front: "ประพจน์เชื่อมเงื่อนไข p → q สมมูลกับรูปใดที่เป็น 'หรือ' (∨)", back: "¬p ∨ q (นิเสธตัวหน้า หรือ ตัวหลัง)" },
      { front: "Contrapositive ของ p → q ที่มีค่าสมมูลกัน", back: "¬q → ¬p (สลับหน้าหลังและใส่นิเสธคู่)" },
      { front: "นิเสธของเงื่อนไข ¬(p → q) จัดรูปได้อย่างไร", back: "p ∧ ¬q (หน้า และ นิเสธหลัง)" },
      { front: "ตัวเชื่อมประพจน์ 'ก็ต่อเมื่อ' (↔) มีผลลัพธ์เป็นเท็จ (F) เมื่อใด", back: "เมื่อประพจน์หน้าและประพจน์หลังมีค่าความจริงต่างกัน (T ↔ F ≡ F หรือ F ↔ T ≡ F)" },
      { front: "ตรรกะแบบ 'ถ้า...แล้ว...' (→) เป็นเท็จ (F) กรณีใดบ้าง", back: "มีกรณีเดียวเท่านั้นคือ หน้าจริงหลังเท็จ (T → F ≡ F)" },
      { front: "สัจนิรันดร์ (Tautology) คืออะไร", back: "ประพจน์ที่มีค่าความจริงเป็นจริงในทุกๆ กรณีของการแทนค่าความจริงประพจน์ย่อย" },
      { front: "กฎ Modus Ponens ในการอ้างเหตุผล", back: "เหตุ: 1) p → q, 2) p | ผลสรุป: q (สมเหตุสมผล)" },
      { front: "กฎ Modus Tollens ในการอ้างเหตุผล", back: "เหตุ: 1) p → q, 2) ¬q | ผลสรุป: ¬p (สมเหตุสมผล)" }
    ],
    earthScience: [
      { front: "ความร้อนเริ่มแรกของการกำเนิดโลกเกิดจากแหล่งใด", back: "1) การชนดาวเคราะห์อสังหาริมทรัพย์, 2) การหดตัวแรงโน้มถ่วง, 3) การสลายตัวของกัมมันตรังสี" },
      { front: "ความหนาแน่นเฉลี่ยของโลกส่วน เปลือก vs เนื้อ vs แก่น", back: "เปลือกโลกทวีป/มหาสมุทร (~2.7-3.0) < เนื้อโลก (~3.3-5.7) < แก่นโลก (~9.9-13.0) g/cm³" },
      { front: "สมบัติตัวกลางการเดินทางของคลื่น P vs คลื่น S", back: "คลื่น P วิ่งผ่านของแข็ง ของเหลว แก๊ส | คลื่น S วิ่งผ่านได้เฉพาะของแข็งเท่านั้น" },
      { front: "ชั้น 'ธรณีภาค' (Lithosphere) ประกอบด้วยส่วนใดของโครงสร้างโลก", back: "เปลือกโลกทั้งหมด (Crust) และเนื้อโลกชั้นบนสุดที่เป็นของแข็งแกร่ง (Rigid Upper Mantle)" },
      { front: "ชั้น 'ฐานธรณีภาค' (Asthenosphere) มีลักษณะทางฟิสิกส์อย่างไร", back: "เป็นหินกึ่งเหลว สภาพพลาสติก มีความร้อนและแรงกดดันจนเกิดการหลอมละลายบางส่วน เกิดกระแสพาความร้อนช่วยเคลื่อนแผ่นเปลือกโลก" },
      { front: "แนวรอยต่อโมโฮ (Moho Discontinuity) แบ่งชั้นใด", back: "แบ่งระหว่างเปลือกโลก (Crust) และเนื้อโลก (Mantle)" },
      { front: "แนวรอยต่อกูเตนเบิร์ก (Gutenberg Discontinuity) แบ่งชั้นใด", back: "แบ่งระหว่างเนื้อโลก (Mantle) และแก่นโลกชั้นนอก (Outer Core) ลึก ~2,900 กม." },
      { front: "เขตอับคลื่น P-wave shadow zone อยู่ในช่วงองศาใด", back: "103 - 143 องศา จากจุดแผ่นดินไหว เกิดจากการหักเหของคลื่น P ที่ขอบรอยต่อแก่นนอกของเหลว" },
      { front: "องค์ประกอบทางเคมีของเปลือกโลกทวีป (SiAl)", back: "ซิลิคอน (Si) และ อะลูมิเนียม (Al) เป็นหลัก (หินแกรนิต)" },
      { front: "องค์ประกอบทางเคมีของเปลือกโลกมหาสมุทร (SiMa)", back: "ซิลิคอน (Si) และ แมกนีเซียม (Mg) เป็นหลัก (หินบะซอลต์)" }
    ],
    english: [
      { front: "คำแปลและหน้าที่ของคำศัพท์ 'specimen'", back: "ตัวอย่างสิ่งตรวจ, ตัวอย่างสำหรับเก็บวิจัย (Noun)" },
      { front: "คำแปลและหน้าที่ของคำศัพท์ 'respondent'", back: "ผู้ตอบแบบสำรวจความเห็น/ตอบแบบสอบถาม (Noun)" },
      { front: "คำแปลและหน้าที่ของคำศัพท์ 'extinct'", back: "ซึ่งสูญพันธุ์, สิ้นชีพ, หายสาบสูญไป (Adjective)" },
      { front: "คำแปลและหน้าที่ของคำศัพท์ 'contradictory'", back: "ซึ่งขัดแย้งกันเอง, ตรงกันข้ามกัน (Adjective)" },
      { front: "คำแปลและหน้าที่ของคำศัพท์ 'elusive'", back: "ซึ่งหลบหลีกเก่ง, หายาก, จับต้องจับใจได้ยาก (Adjective)" },
      { front: "คำกริยา 'enjoy' ต้องตามหลังด้วยรูปประโยคแบบใด", back: "ตามด้วย Gerund (คำกริยาเติม -ing) เสมอ เช่น enjoys studying. (ห้ามใช้ enjoys to study)" },
      { front: "ข้อห้าม Double Conjunction ในภาษาอังกฤษ", back: "ห้ามใช้ Because... คู่กับ so... และห้ามใช้ Although... คู่กับ but... ในประโยคเดียวกันเด็ดขาด" },
      { front: "โครงสร้าง Conditional Sentence Type 1", back: "If + Present Simple (V.1 s/es), Subject + will + Verb (Infinitive)" },
      { front: "กฎ Capitalization สำหรับชื่อวิชาเรียน", back: "เขียนตัวพิมพ์ใหญ่เฉพาะวิชาที่เป็นสัญชาติ/ภาษา (English, Thai) แต่วิชาวิทยาศาสตร์ทั่วไป (science, math) เขียนตัวพิมพ์เล็ก" },
      { front: "คำแปลของ 'exponential growth' ในรายงานข่าวเศรษฐกิจ", back: "การเติบโตแบบก้าวกระโดด/ทวีความรวดเร็วขึ้นเป็นทวีคูณ" }
    ],
    chemistry: [
      { front: "แบบจำลองอะตอมที่เป็นทรงกลมตันขนาดเล็กที่สุดแยกแยะไม่ได้", back: "ของ ดอลตัน (John Dalton)" },
      { front: "แบบจำลองของ 'รัทเทอร์ฟอร์ด' ค้นพบอะไรชิ้นสำคัญ", back: "นิวเคลียสประจุบวกขนาดเล็กตรงกลางที่มีมวลเกือบทั้งหมด และอิเล็กตรอนวิ่งอยู่รอบนอก" },
      { front: "นิยามของคู่ธาตุที่เป็น 'ไอโซโทน' (Isotone)", back: "ธาตุต่างชนิดที่มีจำนวน 'นิวตรอน (n)' เท่ากัน" },
      { front: "นิยามของคู่สารที่เป็น 'ไอโซอิเล็กทรอนิก' (Isoelectronic)", back: "สารที่มีจำนวน 'อิเล็กตรอน (e⁻)' และโครงจัดเรียงเหมือนกัน" },
      { front: "สูตรคำนวณพลังงานโฟตอนจากความยาวคลื่นคลื่นแม่เหล็กไฟฟ้า", back: "E = hc / λ (แปรผกผันกับความยาวคลื่น)" },
      { front: "ข้อยกเว้นการจัดเรียงอิเล็กตรอนของโครเมียม (Cr Z=24)", back: "[Ar] 4s¹ 3d⁵ (ไม่ใช่ 4s² 3d⁴ เพื่อความเสถียรของ d ออร์บิทัลครึ่งเต็ม)" },
      { front: "ข้อยกเว้นการจัดเรียงอิเล็กตรอนของทองแดง (Cu Z=29)", back: "[Ar] 4s¹ 3d¹⁰ (ไม่ใช่ 4s² 3d⁹ เพื่อความเสถียรออร์บิทัล d เต็ม)" },
      { front: "การเกิดไอออนบวกของทรานซิชัน ดึง e⁻ จากห้องใดออกก่อน", back: "ต้องดึงออกจากออร์บิทัลวงนอกสุด 4s เสมอก่อนดึงจาก 3d" },
      { front: "แนวโน้มขนาดอะตอมในคาบเดียวกัน (ซ้ายไปขวา)", back: "ขนาดเล็กลงเรื่อยๆ เนื่องจากประจุนิวเคลียสบวกดึงดูดอิเล็กตรอนแน่นขึ้น" },
      { front: "สูตรครึ่งชีวิต (Half-life) ของสารกัมมันตรังสี", back: "N_t = N_0 / (2^n) โดยที่จำนวนรอบสลาย n = เวลาทั้งหมด / ครึ่งชีวิต" }
    ],
    social: [
      { front: "วรรณะใดมีหน้าที่ดูแลเศรษฐกิจและการค้าขายในชมพูทวีป", back: "วรรณะแพศย์ (พ่อค้า/เกษตรกร/พาณิชยกรรม)" },
      { front: "ศูนย์กลางความเจริญของชมพูทวีปเรียกว่าอะไร", back: "มัชฌิมประเทศ" },
      { front: "หลักอธิปไตยที่ถือความถูกต้องเป็นใหญ่เรียกว่าอะไร", back: "ธรรมาธิปไตย" },
      { front: "ในอริยสัจ 4 ข้อใดบ้างที่ทำหน้าที่เป็น 'เหตุ'", back: "สมุทัย (เหตุให้เกิดทุกข์) และ มรรค (เหตุให้เกิดความดับทุกข์)" },
      { front: "สถานที่ตรัสรู้ของพระพุทธเจ้าคือสังเวชนียสถานใด", back: "พุทธคยา (ตำบลอุรุเวลาเสนานิคม)" },
      { front: "พุทธจริยาข้อใดหมายถึงการโปรดพระประยูรญาติที่กบิลพัสดุ์", back: "ญาตัตถจริยา" },
      { front: "วันมาฆบูชา ตรงกับวันทางจันทรคติใด", back: "วันขึ้น 15 ค่ำ เดือน 3" },
      { front: "วันถวายพระเพลิงพระพุทธสรีระเรียกว่าวันอะไร", back: "วันอัฏฐมีบูชา (แรม 8 ค่ำ เดือน 6)" },
      { front: "การถวายทานแก่พระสงฆ์ส่วนรวมโดยไม่เจาะจงรูปใดเรียกว่าอะไร", back: "สังฆทาน" },
      { front: "พิธีที่เปิดโอกาสให้พระสงฆ์ว่ากล่าวตักเตือนกันในวันออกพรรษาคือพิธีใด", back: "พิธีปวารณา" }
    ]
  };

  // Load cards for active subject
  useEffect(() => {
    if (flashCardsDatabase[activeSubject]) {
      setCards(flashCardsDatabase[activeSubject]);
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  }, [activeSubject]);

  // Shuffling cards
  const shuffleCards = () => {
    setIsFlipped(false);
    setTimeout(() => {
      const shuffled = [...cards].sort(() => Math.random() - 0.5);
      setCards(shuffled);
      setCurrentIndex(0);
    }, 150);
  };

  const handleRate = (rating) => {
    setSessionStats(prev => ({
      ...prev,
      [rating]: prev[rating] + 1
    }));
    
    // Auto advance
    setIsFlipped(false);
    setTimeout(() => {
      if (currentIndex < cards.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        alert(`🎉 ครบทุกการ์ดแล้ว! สรุปเซสชัน: ทำได้สบาย ${sessionStats.easy + (rating === 'easy' ? 1 : 0)} ใบ, เกือบได้ ${sessionStats.hard + (rating === 'hard' ? 1 : 0)} ใบ, ต้องอ่านซ้ำ ${sessionStats.again + (rating === 'again' ? 1 : 0)} ใบ`);
        setCurrentIndex(0);
        setSessionStats({ easy: 0, hard: 0, again: 0 });
      }
    }, 200);
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="space-y-8 max-w-xl mx-auto">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center justify-center gap-2">
          <BiLayer className="text-brand-red-glow" />
          <span>บัตรคำช่วยจำ (Flash Cards)</span>
        </h1>
        <p className="text-xs text-brand-text-secondary">ใช้หลักคิดวิจัยความจำ (Active Recall) ฝึกตอบในใจก่อนคลิกพลิกการ์ดอ่านเฉลย</p>
      </div>

      {/* Subject select tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-2 justify-center scrollbar-none">
        {tabs.map((tab) => {
          const active = activeSubject === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSubject(tab.id)}
              className={`px-3 py-1.5 text-[10px] font-bold rounded-lg border whitespace-nowrap transition-all ${
                active
                  ? 'bg-brand-red-ruby/30 border-brand-red-bright text-brand-red-glow shadow-glow-red'
                  : 'bg-white/5 border-white/5 text-brand-text-secondary hover:bg-white/10'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center text-xs px-2 text-brand-text-secondary">
        <span>การ์ดใบที่ <strong className="text-white font-bold">{currentIndex + 1}</strong> จาก {cards.length} ใบ</span>
        <button 
          onClick={shuffleCards}
          className="flex items-center gap-1 hover:text-white transition-colors bg-white/5 border border-white/5 px-2.5 py-1.5 rounded-lg"
        >
          <BiRefresh className="text-base" />
          <span>สุ่มการ์ดใหม่</span>
        </button>
      </div>

      {/* Flippable Card Container */}
      {currentCard && (
        <div 
          onClick={() => setIsFlipped(!isFlipped)}
          className="w-full h-80 cursor-pointer perspective-1000 group select-none"
        >
          <div 
            className={`w-full h-full rounded-3xl duration-500 transform-style-3d relative border border-white/10 ${
              isFlipped ? 'rotate-y-180 bg-brand-red-ruby/15 border-brand-red-bright/30' : 'bg-brand-card glass'
            }`}
          >
            {/* Front Side */}
            <div className="absolute inset-0 w-full h-full p-8 flex flex-col justify-between items-center text-center backface-hidden">
              <div className="text-[10px] text-brand-text-muted uppercase font-bold tracking-widest">คำถาม / แนวคิด</div>
              <p className="text-base md:text-lg font-semibold text-white leading-relaxed flex-1 flex items-center">
                {currentCard.front}
              </p>
              <div className="text-[10px] text-brand-red-glow font-semibold animate-pulse">กดเพื่อพลิกการ์ดอ่านเฉลย 🔄</div>
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 w-full h-full p-8 flex flex-col justify-between items-center text-center rotate-y-180 backface-hidden">
              <div className="text-[10px] text-brand-red-glow uppercase font-bold tracking-widest">คำตอบ / คำอธิบาย</div>
              <p className="text-sm font-medium text-white leading-relaxed flex-1 flex items-center whitespace-pre-line justify-center">
                {currentCard.back}
              </p>
              <div className="text-[10px] text-brand-text-muted">คลิกที่การ์ดเพื่อกลับไปด้านหน้า</div>
            </div>
          </div>
        </div>
      )}

      {/* Ratings Panel (Visible only after flipped) */}
      {isFlipped && (
        <div className="flex gap-2 animate-slide-up">
          <button
            onClick={() => handleRate('again')}
            className="flex-1 py-3 rounded-xl bg-brand-red-deep/40 border border-brand-red-bright/20 hover:bg-brand-red-bright/35 transition-colors text-brand-red-glow text-xs font-bold"
          >
            ต้องเรียนใหม่ (Again)
          </button>
          <button
            onClick={() => handleRate('hard')}
            className="flex-1 py-3 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-colors text-amber-400 text-xs font-bold"
          >
            เกือบได้ (Hard)
          </button>
          <button
            onClick={() => handleRate('easy')}
            className="flex-1 py-3 rounded-xl bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 transition-colors text-green-400 text-xs font-bold"
          >
            ทำได้สบาย (Easy)
          </button>
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-between items-center gap-4">
        <button
          disabled={currentIndex === 0}
          onClick={() => { setIsFlipped(false); setTimeout(() => setCurrentIndex(prev => prev - 1), 150); }}
          className="flex items-center gap-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-brand-text-secondary disabled:opacity-30"
        >
          <BiChevronLeft className="text-xl" />
          <span>ก่อนหน้า</span>
        </button>

        <div className="text-xs text-brand-text-muted flex gap-2">
          <span>😊 {sessionStats.easy}</span>
          <span>😐 {sessionStats.hard}</span>
          <span>🔁 {sessionStats.again}</span>
        </div>

        <button
          disabled={currentIndex === cards.length - 1}
          onClick={() => { setIsFlipped(false); setTimeout(() => setCurrentIndex(prev => prev + 1), 150); }}
          className="flex items-center gap-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-brand-text-secondary disabled:opacity-30"
        >
          <span>ถัดไป</span>
          <BiChevronRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default FlashCards;
