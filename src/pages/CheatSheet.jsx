import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  BiFile, 
  BiHelpCircle, 
  BiInfoCircle, 
  BiBookOpen, 
  BiCalculator, 
  BiGlobe 
} from 'react-icons/bi';
import { FaFlask, FaLightbulb, FaPrayingHands } from 'react-icons/fa';
import GlassCard from '../components/GlassCard';

const CheatSheet = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSubject = searchParams.get('subject') || 'math';

  const setSubject = (subId) => {
    setSearchParams({ subject: subId });
  };

  const tabs = [
    { id: 'math', label: 'คณิตศาสตร์เพิ่มเติม', icon: BiCalculator },
    { id: 'earthScience', label: 'โลก ดาราศาสตร์ และอวกาศ', icon: BiGlobe },
    { id: 'english', label: 'ภาษาอังกฤษ (Reading & Writing)', icon: BiBookOpen },
    { id: 'chemistry', label: 'เคมี ม.4', icon: FaFlask },
    { id: 'social', label: 'สังคมศึกษา (พุทธศาสนา)', icon: FaPrayingHands }
  ];

  return (
    <div className="space-y-8">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">Cheat Sheet คลังสูตรและบทสรุป</h1>
        <p className="text-sm text-brand-text-secondary">สรุปสูตรเด็ด คำศัพท์สำคัญ และเทคนิคจำเฉพาะวิชาสำหรับผู้เตรียมตัวสอบ</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {tabs.map((tab) => {
          const TabIcon = tab.icon;
          const active = activeSubject === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSubject(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-lg border whitespace-nowrap transition-all ${
                active
                  ? 'bg-brand-red-ruby/30 border-brand-red-bright text-brand-red-glow shadow-glow-red'
                  : 'bg-white/5 border-white/5 text-brand-text-secondary hover:bg-white/10'
              }`}
            >
              <TabIcon className="text-base" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Cheat Sheet Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* MATH CHEAT SHEET */}
        {activeSubject === 'math' && (
          <>
            <div className="lg:col-span-2 space-y-6">
              {/* Formulas */}
              <GlassCard hoverEffect={false} className="space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <BiFile className="text-brand-red-glow text-lg" />
                  <span>สูตรและกฎการคำนวณ: เซต</span>
                </h3>
                <div className="space-y-4 text-xs leading-relaxed text-brand-text-secondary">
                  <div>
                    <span className="font-bold text-white block mb-1">1. สูตรจำนวนสมาชิก ยูเนียน 2 เซต</span>
                    <div className="bg-brand-dark/40 border border-white/5 p-3 rounded-lg font-mono text-brand-red-glow text-center font-bold">
                      n(A ∪ B) = n(A) + n(B) - n(A ∩ B)
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-white block mb-1">2. สูตรจำนวนสมาชิก ยูเนียน 3 เซต</span>
                    <div className="bg-brand-dark/40 border border-white/5 p-3 rounded-lg font-mono text-brand-red-glow text-center font-bold">
                      n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(B ∩ C) - n(A ∩ C) + n(A ∩ B ∩ C)
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-white block mb-1">3. กฎของเดอมอร์แกน (De Morgan's Laws)</span>
                    <div className="grid grid-cols-2 gap-2 font-mono text-center">
                      <div className="bg-brand-dark/40 border border-white/5 p-2 rounded-lg text-white font-bold">(A ∪ B)' = A' ∩ B'</div>
                      <div className="bg-brand-dark/40 border border-white/5 p-2 rounded-lg text-white font-bold">(A ∩ B)' = A' ∪ B'</div>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Logic Equivalences */}
              <GlassCard hoverEffect={false} className="space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <BiFile className="text-brand-red-glow text-lg" />
                  <span>สัจพจน์ตรรกศาสตร์ที่สมมูลกันบ่อย</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="bg-brand-dark/40 border border-white/5 p-3 rounded-lg text-brand-text-secondary">
                    <span className="text-[10px] text-brand-text-muted block">เงื่อนไขเป็น หรือ</span>
                    p → q <span className="text-brand-red-glow font-bold">≡</span> ¬p ∨ q
                  </div>
                  <div className="bg-brand-dark/40 border border-white/5 p-3 rounded-lg text-brand-text-secondary">
                    <span className="text-[10px] text-brand-text-muted block">สลับที่ใส่เงื่อนไข</span>
                    p → q <span className="text-brand-red-glow font-bold">≡</span> ¬q → ¬p
                  </div>
                  <div className="bg-brand-dark/40 border border-white/5 p-3 rounded-lg text-brand-text-secondary">
                    <span className="text-[10px] text-brand-text-muted block">นิเสธของเงื่อนไข</span>
                    ¬(p → q) <span className="text-brand-red-glow font-bold">≡</span> p ∧ ¬q
                  </div>
                  <div className="bg-brand-dark/40 border border-white/5 p-3 rounded-lg text-brand-text-secondary">
                    <span className="text-[10px] text-brand-text-muted block">ก็ต่อเมื่อแยกส่วน</span>
                    p ↔ q <span className="text-brand-red-glow font-bold">≡</span> (p → q) ∧ (q → p)
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Side column: Memory and Cautions */}
            <div className="space-y-6">
              <GlassCard hoverEffect={false} className="space-y-3">
                <h3 className="text-xs font-bold text-green-400 uppercase flex items-center gap-1.5">
                  <FaLightbulb />
                  <span>เทคนิคช่วยจำ (Memory Tricks)</span>
                </h3>
                <ul className="space-y-2 text-[11px] text-brand-text-secondary list-disc pl-4 leading-relaxed">
                  <li><strong className="text-white">เซตว่าง:</strong> เป็นสับเซตของทุกๆ เซตเสมอ (∅ ⊂ A)</li>
                  <li><strong className="text-white">ตรรกะ OR (∨):</strong> เป็นเท็จ (F) กรณีเดียวคือ เท็จทั้งคู่ (F ∨ F ≡ F) นอกนั้นเป็นจริงหมด</li>
                  <li><strong className="text-white">ตรรกะ AND (∧):</strong> เป็นจริง (T) กรณีเดียวคือ จริงทั้งคู่ (T ∧ T ≡ T) นอกนั้นเป็นเท็จหมด</li>
                  <li><strong className="text-white">ตรรกะ IF-THEN (→):</strong> เป็นเท็จ (F) กรณีเดียวคือ หน้าจริงหลังเท็จ (T → F ≡ F)</li>
                </ul>
              </GlassCard>

              <GlassCard hoverEffect={false} className="space-y-3 border-l-4 border-l-brand-red-bright bg-brand-red-ruby/5">
                <h3 className="text-xs font-bold text-brand-red-glow uppercase flex items-center gap-1.5">
                  <BiInfoCircle />
                  <span>ข้อควรระวังในการสอบ (Cautions)</span>
                </h3>
                <p className="text-[10.5px] text-brand-text-secondary leading-relaxed">
                  ⚠️ <strong className="text-white">ระวังการหักลบซ้ำซ้อน:</strong> เวลาหาคนที่ชอบกิจกรรมเดียว เช่น ฟิสิกส์อย่างเดียว ห้ามนำ n(Physics) - n(Physics ∩ Chemistry) ตรงๆ ถ้ามีวิชาที่สามปนอยู่ด้วย ให้ใช้แผนภาพเวนน์แล้วแยกคิดทีละพื้นที่แยกกันเสมอ เพื่อไม่ให้ลืมหักคนกลุ่ม 3 วิชา
                </p>
                <p className="text-[10.5px] text-brand-text-secondary leading-relaxed mt-2">
                  ⚠️ <strong className="text-white">สัจนิรันดร์:</strong> วิธีเช็กที่รวดเร็วคือ 'สมมติให้เป็นเท็จ' หากแทนค่าแล้วเกิดขัดแย้ง แสดงว่าเป็นสัจนิรันดร์ แต่ถ้าหาทางให้เป็นเท็จได้โดยไม่ขัดแย้ง แสดงว่าไม่เป็นสัจนิรันดร์
                </p>
              </GlassCard>
            </div>
          </>
        )}

        {/* EARTH SCIENCE CHEAT SHEET */}
        {activeSubject === 'earthScience' && (
          <>
            <div className="lg:col-span-2 space-y-6">
              {/* Layers info */}
              <GlassCard hoverEffect={false} className="space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <BiFile className="text-brand-red-glow text-lg" />
                  <span>การแบ่งชั้นโครงสร้างโลก</span>
                </h3>
                <div className="space-y-4 text-xs text-brand-text-secondary">
                  <div>
                    <span className="font-bold text-white block mb-1">1. แบ่งตามองค์ประกอบทางเคมี (Chemical Division)</span>
                    <ul className="list-disc pl-4 space-y-1 leading-relaxed">
                      <li><strong className="text-white">เปลือกโลก (Crust):</strong> แบ่งเป็น เปลือกโลกทวีป (หินแกรนิต, ไซอัล - SiAl) และเปลือกโลกมหาสมุทร (หินบะซอลต์, ไซมา - SiMa)</li>
                      <li><strong className="text-white">เนื้อโลก (Mantle):</strong> ชั้นหนาที่สุด (~84% ปริมาตร) ประกอบด้วยหินเพริโดไทต์ (ซิลิเกตของเหล็กและแมกนีเซียมสูง)</li>
                      <li><strong className="text-white">แก่นโลก (Core):</strong> โลหะหนักเหล็ก (Fe) และนิกเกิล (Ni)</li>
                    </ul>
                  </div>

                  <div>
                    <span className="font-bold text-white block mb-1">2. แบ่งตามสมบัติเชิงกล/กายภาพ (Physical Division)</span>
                    <ul className="list-disc pl-4 space-y-1 leading-relaxed">
                      <li><strong className="text-white">ธรณีภาค (Lithosphere):</strong> เปลือกโลก + เนื้อโลกชั้นบนสุด ของแข็ง แข็งเกร็ง เปราะ หนา ~100 กม.</li>
                      <li><strong className="text-white">ฐานธรณีภาค (Asthenosphere):</strong> เนื้อโลกตอนบน ของแข็งเนื้อพลาสติกกึ่งเหลว ไหลพาความร้อนได้ช้า เป็นสายพานเคลื่อนเปลือกโลก</li>
                      <li><strong className="text-white">มัชฌิมภาค (Mesosphere):</strong> เนื้อโลกตอนล่าง ของแข็งแข็งเกร็งเนื่องจากความดันสูงมาก</li>
                      <li><strong className="text-white">แก่นโลกชั้นนอก (Outer Core):</strong> โลหะเหลวร้อนจัด สร้างสนามแม่เหล็กโลก (Geodynamo)</li>
                      <li><strong className="text-white">แก่นโลกชั้นใน (Inner Core):</strong> โลหะของแข็ง บีบอัดหนาแน่นด้วยแรงดันมหาศาล</li>
                    </ul>
                  </div>
                </div>
              </GlassCard>

              {/* Seismic waves summary */}
              <GlassCard hoverEffect={false} className="space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <BiFile className="text-brand-red-glow text-lg" />
                  <span>สมบัติคลื่นไหวสะเทือนที่ห้ามลืม</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
                  <div className="bg-brand-dark/40 border border-white/5 p-3 rounded-lg">
                    <span className="font-bold text-brand-red-glow block mb-1">คลื่นปฐมภูมิ (P-wave)</span>
                    คลื่นตามยาว อนุภาคสั่นทิศเดียวกับคลื่น เคลื่อนที่เร็วที่สุด ผ่านได้ทุกสถานะ (ของแข็ง, ของเหลว, แก๊ส) หักเหเมื่อผ่านรอยต่อหนาแน่นต่างกัน
                  </div>
                  <div className="bg-brand-dark/40 border border-white/5 p-3 rounded-lg">
                    <span className="font-bold text-brand-red-glow block mb-1">คลื่นทุติยภูมิ (S-wave)</span>
                    คลื่นตามขวาง อนุภาคสั่นตั้งฉาก ผ่านได้เฉพาะ <strong className="text-white underline">ของแข็งเท่านั้น</strong> ดับสลายหายไปเป็นศูนย์ทันทีเมื่อวิ่งชนของเหลว (เช่น แก่นโลกชั้นนอก)
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Side column: Memory and Cautions */}
            <div className="space-y-6">
              <GlassCard hoverEffect={false} className="space-y-3">
                <h3 className="text-xs font-bold text-green-400 uppercase flex items-center gap-1.5">
                  <FaLightbulb />
                  <span>เทคนิคช่วยจำ (Memory Tricks)</span>
                </h3>
                <ul className="space-y-2 text-[11px] text-brand-text-secondary list-disc pl-4 leading-relaxed">
                  <li><strong className="text-white">ไซอัล (SiAl):</strong> ซิลิคอน + อะลูมิเนียม (ทวีป แกรนิต เบา)</li>
                  <li><strong className="text-white">ไซมา (SiMa):</strong> ซิลิคอน + แมกนีเซียม (มหาสมุทร บะซอลต์ หนัก)</li>
                  <li><strong className="text-white">ขั้วแม่เหล็กโลก:</strong> โลหะเหล็กเหลวในแก่นโลกชั้นนอก ไหลเวียนพาความร้อนสร้างไดนาโมปั่นไฟสร้างสนามแม่เหล็ก</li>
                  <li><strong className="text-white">รอยต่อลึกสุด:</strong> เลห์มันน์ (คั่นเหลวนอก-แข็งใน)</li>
                </ul>
              </GlassCard>

              <GlassCard hoverEffect={false} className="space-y-3 border-l-4 border-l-brand-red-bright bg-brand-red-ruby/5">
                <h3 className="text-xs font-bold text-brand-red-glow uppercase flex items-center gap-1.5">
                  <BiInfoCircle />
                  <span>ข้อควรระวังในการสอบ (Cautions)</span>
                </h3>
                <p className="text-[10.5px] text-brand-text-secondary leading-relaxed">
                  ⚠️ <strong className="text-white">ระวังเขตอับคลื่น:</strong> เขตอับคลื่น P อยู่ในช่วง 103-143 องศา (เกิดจากการหักเหหลบลึก) ส่วนเขตอับคลื่น S อยู่ในช่วง 103-180 องศา (เกิดจากการถูกดูดกลืนตัวในของเหลวแก่นโลกชั้นนอก) ข้อสอบชอบหลอกถามสลับช่วงองศากันบ่อยๆ
                </p>
                <p className="text-[10.5px] text-brand-text-secondary leading-relaxed mt-2">
                  ⚠️ <strong className="text-white">ข้อมูลตรง:</strong> หินแปลกปลอมในลาวา (Xenoliths) คือข้อมูลตรง แต่คลื่นไหวสะเทือนและสนามแม่เหล็กเป็นข้อมูลอ้อม
                </p>
              </GlassCard>
            </div>
          </>
        )}

        {/* ENGLISH CHEAT SHEET */}
        {activeSubject === 'english' && (
          <>
            <div className="lg:col-span-2 space-y-6">
              {/* Grammar Focus */}
              <GlassCard hoverEffect={false} className="space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <BiFile className="text-brand-red-glow text-lg" />
                  <span>โครงสร้างไวยากรณ์หลัก (Grammar Core)</span>
                </h3>
                <div className="space-y-4 text-xs text-brand-text-secondary leading-relaxed">
                  <div>
                    <span className="font-bold text-white block mb-1">1. Subject-Verb Agreement ปฏิเสธ (Present Simple)</span>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>ประธานเอกพจน์ (He, She, It, My friend): ใช้ <code className="font-mono text-brand-red-glow font-bold">doesn't + Verb 1 (ไม่ผัน)</code> เช่น He doesn't watch. (ห้ามใช้ doesn't watches)</li>
                      <li>ประธานพหูพจน์ (I, You, We, They, Students): ใช้ <code className="font-mono text-brand-red-glow font-bold">don't + Verb 1 (ไม่ผัน)</code></li>
                    </ul>
                  </div>

                  <div>
                    <span className="font-bold text-white block mb-1">2. Modals (can / could / will / would)</span>
                    <p className="bg-brand-dark/30 border border-white/5 p-3 rounded-lg font-mono text-center text-white">
                      Subject + Modal (can/will) + <span className="text-brand-red-glow font-bold">Verb Bare Infinitive (ห้ามเติม s, ing, ed)</span>
                    </p>
                    <p className="text-[10px] text-brand-text-muted mt-1">ตัวอย่าง: David can speak English. (ไม่ใช่ David can speaks หรือ David can speaking)</p>
                  </div>

                  <div>
                    <span className="font-bold text-white block mb-1">3. Conditionals (Type 0 & Type 1)</span>
                    <ul className="list-disc pl-4 space-y-1">
                      <li><strong className="text-white">Type 0 (ความจริงวิทยาศาสตร์):</strong> If + Present Simple, Present Simple. <br /><code className="text-[10.5px] font-mono text-brand-text-muted">Example: If you heat ice, it melts.</code></li>
                      <li><strong className="text-white">Type 1 (อนาคตที่เป็นไปได้):</strong> If + Present Simple, Future Simple (will + inf). <br /><code className="text-[10.5px] font-mono text-brand-text-muted">Example: If it rains tomorrow, we will stay at home.</code></li>
                    </ul>
                  </div>
                </div>
              </GlassCard>

              {/* Vocab key terms */}
              <GlassCard hoverEffect={false} className="space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <BiFile className="text-brand-red-glow text-lg" />
                  <span>คำศัพท์ออกข้อสอบบ่อย (High-Frequency Vocabulary)</span>
                </h3>
                <div className="grid grid-cols-2 gap-3 text-xs leading-relaxed">
                  <div className="p-2.5 rounded-lg bg-white/[0.01] border border-white/5">
                    <span className="font-bold text-white block">specimen (n.)</span> ตัวอย่างสิ่งของ, สัตว์ทดลอง
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.01] border border-white/5">
                    <span className="font-bold text-white block">respondent (n.)</span> ผู้ตอบแบบสอบถาม
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.01] border border-white/5">
                    <span className="font-bold text-white block">extinct (adj.)</span> สูญพันธุ์, ดับสูญ
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.01] border border-white/5">
                    <span className="font-bold text-white block">contradictory (adj.)</span> ขัดแย้งกัน, ตรงข้าม
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.01] border border-white/5">
                    <span className="font-bold text-white block">elusive (adj.)</span> หลบหลีกเก่ง, หายาก
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.01] border border-white/5">
                    <span className="font-bold text-white block">convey (v.)</span> ถ่ายทอด, สื่อความหมาย
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Side column: Memory and Cautions */}
            <div className="space-y-6">
              <GlassCard hoverEffect={false} className="space-y-3">
                <h3 className="text-xs font-bold text-green-400 uppercase flex items-center gap-1.5">
                  <FaLightbulb />
                  <span>เทคนิคช่วยจำ (Memory Tricks)</span>
                </h3>
                <ul className="space-y-2 text-[11px] text-brand-text-secondary list-disc pl-4 leading-relaxed">
                  <li><strong className="text-white">Adjective -ed vs -ing:</strong> เติม -ed แปลว่า "รู้สึก..." (รู้สึกงง = confused, puzzled) เติม -ing แปลว่า "น่า..." (น่าสับสน = confusing, puzzling)</li>
                  <li><strong className="text-white">Enjoy + Gerund:</strong> enjoy เป็นกริยาที่ต้องตามด้วยคำกริยาเติม -ing เสมอ เช่น enjoy cooking (ห้ามใช้ enjoy to cook)</li>
                </ul>
              </GlassCard>

              <GlassCard hoverEffect={false} className="space-y-3 border-l-4 border-l-brand-red-bright bg-brand-red-ruby/5">
                <h3 className="text-xs font-bold text-brand-red-glow uppercase flex items-center gap-1.5">
                  <BiInfoCircle />
                  <span>ข้อควรระวังในการสอบ (Cautions)</span>
                </h3>
                <p className="text-[10.5px] text-brand-text-secondary leading-relaxed">
                  ⚠️ <strong className="text-white">ระวังเรื่อง Double Conjunction:</strong> ภาษาอังกฤษห้ามวางคำเชื่อมบอกเหตุผลและคำเชื่อมบอกผลลัพธ์ซ้ำซ้อนกันในประโยคย่อยคู่เด็ดขาด ตัวอย่างเช่นประโยคไทย 'เพราะหิวฉันเลยกินข้าว' ห้ามเขียน <code className="text-brand-red-glow">Because I was hungry, so I ate rice.</code> ให้ลบ so ทิ้งไปเสียเหลือเพียงเครื่องหมายคอมมาคั่น
                </p>
                <p className="text-[10.5px] text-brand-text-secondary leading-relaxed mt-2">
                  ⚠️ <strong className="text-white">ตัวพิมพ์ใหญ่ (Capitalization):</strong> จำไว้ว่าวิชาเรียนที่เป็นชื่อสัญชาติ/ภาษา เช่น English, Thai, French ต้องขึ้นต้นด้วยตัวใหญ่เสมอ แต่วิชาอื่นที่ไม่เกี่ยวพัน เช่น math, chemistry, science ต้องเขียนตัวเล็ก
                </p>
              </GlassCard>
            </div>
          </>
        )}

        {/* CHEMISTRY CHEAT SHEET */}
        {activeSubject === 'chemistry' && (
          <>
            <div className="lg:col-span-2 space-y-6">
              {/* Formulas */}
              <GlassCard hoverEffect={false} className="space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <BiFile className="text-brand-red-glow text-lg" />
                  <span>สูตรคำนวณเคมีฟิสิกส์</span>
                </h3>
                <div className="space-y-4 text-xs text-brand-text-secondary leading-relaxed">
                  <div>
                    <span className="font-bold text-white block mb-1">1. พลังงานของโฟตอนคลื่นแม่เหล็กไฟฟ้า</span>
                    <div className="bg-brand-dark/40 border border-white/5 p-3 rounded-lg font-mono text-brand-red-glow text-center font-bold">
                      E = hν = hc / λ
                    </div>
                    <p className="text-[9px] text-brand-text-muted mt-1.5">
                      h = 6.6 × 10⁻³⁴ J·s (ค่าคงตัวพลังค์), c = 3.0 × 10⁸ m/s (ความเร็วแสง), λ = ความยาวคลื่น (เมตร), ν = ความถี่ (Hz หรือ s⁻¹)
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-white block mb-1">2. ครึ่งชีวิตของสารกัมมันตรังสี (Half-Life)</span>
                    <div className="bg-brand-dark/40 border border-white/5 p-3 rounded-lg font-mono text-brand-red-glow text-center font-bold">
                      N_t = N_0 / (2^n) &nbsp;|&nbsp; t_total = n × t_1/2
                    </div>
                    <p className="text-[9px] text-brand-text-muted mt-1.5">
                      N_0 = มวลเริ่มต้น, N_t = มวลคงเหลือ, n = จำนวนรอบการสลายครึ่งชีวิต, t_1/2 = ระยะครึ่งชีวิตของสาร
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Orbitals & Config */}
              <GlassCard hoverEffect={false} className="space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <BiFile className="text-brand-red-glow text-lg" />
                  <span>กฎการจัดเรียงอิเล็กตรอน (Electron Configuration)</span>
                </h3>
                <div className="space-y-3 text-xs text-brand-text-secondary leading-relaxed">
                  <p>
                    <strong className="text-white">Aufbau Principle:</strong> บรรจุอิเล็กตรอนในออร์บิทัลย่อยที่มีระดับพลังงานต่ำสุดที่ว่างอยู่ก่อน (เช่น 1s → 2s → 2p → 3s → 3p → 4s → 3d)
                  </p>
                  <p>
                    <strong className="text-white">Hund's Rule:</strong> สำหรับระดับพลังงานเท่ากัน (เช่น 2p มี 3 ออร์บิทัล) ต้องจัดอิเล็กตรอนเดี่ยวให้กระจายสปินขนานครบทุกห้องก่อนเริ่มจับคู่
                  </p>
                  <p>
                    <strong className="text-white">Pauli Exclusion Principle:</strong> ไม่มีอิเล็กตรอนคู่ใดในกล่องออร์บิทัลย่อยเดียวกันมีทิศทางการปั่นสปินเหมือนกัน (ต้องมีหัวชี้ขึ้นตัวชี้ลงคู่กัน ↑↓)
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* Side column: Memory and Cautions */}
            <div className="space-y-6">
              <GlassCard hoverEffect={false} className="space-y-3">
                <h3 className="text-xs font-bold text-green-400 uppercase flex items-center gap-1.5">
                  <FaLightbulb />
                  <span>เทคนิคช่วยจำ (Memory Tricks)</span>
                </h3>
                <ul className="space-y-2 text-[11px] text-brand-text-secondary list-disc pl-4 leading-relaxed">
                  <li><strong className="text-white">ข้อยกเว้นการจัดเรียงอิเล็กตรอน:</strong> โครเมียม (Cr Z=24) จัดเป็น <code className="font-mono text-brand-red-glow">4s¹ 3d⁵</code> (Half-full d เสถียร) และ ทองแดง (Cu Z=29) จัดเป็น <code className="font-mono text-brand-red-glow">4s¹ 3d¹⁰</code> (Full d เสถียร) ห้ามตอบ 4s² 3d⁴ หรือ 4s² 3d⁹ เด็ดขาด</li>
                  <li><strong className="text-white">ขนาดอะตอม:</strong> ซ้ายไปขวาเล็กลงเรื่อยๆ เนื่องจากประจุนิวเคลียสบวกดึงแรงขึ้น, บนลงล่างใหญ่ขึ้นเนื่องจากเปิดคาบพลังงานชั้นใหม่เพิ่ม</li>
                </ul>
              </GlassCard>

              <GlassCard hoverEffect={false} className="space-y-3 border-l-4 border-l-brand-red-bright bg-brand-red-ruby/5">
                <h3 className="text-xs font-bold text-brand-red-glow uppercase flex items-center gap-1.5">
                  <BiInfoCircle />
                  <span>ข้อควรระวังในการสอบ (Cautions)</span>
                </h3>
                <p className="text-[10.5px] text-brand-text-secondary leading-relaxed">
                  ⚠️ <strong className="text-white">การสูญเสียอิเล็กตรอนของไอออนโลหะทรานซิชัน:</strong> เวลาโลหะทรานซิชันเกิดไอออนบวก (เช่น Fe²⁺) อิเล็กตรอนที่จะหลุดออกไปก่อน <strong className="underline text-white">จะต้องหลุดออกจากชั้น 4s ก่อน 3d เสมอ</strong> เนื่องจากอยู่ระดับนอกสุด n=4 แม้ในลำดับเขียนจะจัดทีหลังก็ตาม
                </p>
                <p className="text-[10.5px] text-brand-text-secondary leading-relaxed mt-2">
                  ⚠️ <strong className="text-white">ขนาดของไอออน:</strong> ไอออนบวกจะมีขนาดเล็กกว่าอะตอมปกติของมันเองเสมอ (เพราะเสียอิเล็กตรอนวงนอกสุด) และไอออนลบจะมีขนาดใหญ่กว่าอะตอมปกติของมันเสมอ (เพราะมีอิเล็กตรอนเพิ่มขยายแรงผลักระหว่างประจุ)
                </p>
              </GlassCard>
            </div>
          </>
        )}

        {/* SOCIAL STUDIES CHEAT SHEET */}
        {activeSubject === 'social' && (
          <>
            <div className="lg:col-span-2 space-y-6">
              {/* Core Doctrines */}
              <GlassCard hoverEffect={false} className="space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <BiFile className="text-brand-red-glow text-lg" />
                  <span>บทสรุป 4 วรรณะและวันสำคัญพุทธศาสนา</span>
                </h3>
                <div className="space-y-4 text-xs text-brand-text-secondary leading-relaxed">
                  <div>
                    <span className="font-bold text-white block mb-1">1. สรุปหน้าที่ 4 วรรณะชมพูทวีป</span>
                    <ul className="list-disc pl-4 space-y-1">
                      <li><strong className="text-white">วรรณะกษัตริย์:</strong> ปกครองบ้านเมือง ป้องกันอาณาจักร</li>
                      <li><strong className="text-white">วรรณะพราหมณ์:</strong> ประกอบพิธีกรรม สวดมนต์ ทรมานตน</li>
                      <li><strong className="text-white">วรรณะแพศย์:</strong> ดูแลเศรษฐกิจ เกษตรกรรม ค้าขาย พาณิชยกรรม</li>
                      <li><strong className="text-white">วรรณะศูทร:</strong> ผู้ใช้แรงงาน รับใช้สามวรรณะสูง</li>
                    </ul>
                  </div>

                  <div>
                    <span className="font-bold text-white block mb-1">2. ลำดับวันสำคัญ 4 มหาบูชาตามรอบปี</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center font-mono">
                      <div className="p-2 bg-brand-dark/40 border border-white/5 rounded-lg">
                        <span className="font-bold text-brand-red-glow block">มาฆบูชา</span>
                        ขึ้น 15 ค่ำ เดือน 3<br />(โอวาทปาติโมกข์)
                      </div>
                      <div className="p-2 bg-brand-dark/40 border border-white/5 rounded-lg">
                        <span className="font-bold text-brand-red-glow block">วิสาขบูชา</span>
                        ขึ้น 15 ค่ำ เดือน 6<br />(ประสูติ ตรัสรู้ ปรินิพพาน)
                      </div>
                      <div className="p-2 bg-brand-dark/40 border border-white/5 rounded-lg">
                        <span className="font-bold text-brand-red-glow block">อาสาฬหบูชา</span>
                        ขึ้น 15 ค่ำ เดือน 8<br />(ปฐมเทศนา/ทางสายกลาง)
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Rituals breakdown */}
              <GlassCard hoverEffect={false} className="space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <BiFile className="text-brand-red-glow text-lg" />
                  <span>ศาสนพิธี และการทำบุญ</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
                  <div className="p-3 bg-brand-dark/40 border border-white/5 rounded-lg">
                    <span className="font-bold text-white block mb-1">มงคลพิธี (สวดพระพุทธมนต์)</span>
                    ทำบุญบ้านใหม่ แต่งงาน บวช นิยมนิมนต์พระจำนวนคี่ (5, 7, 9 รูป) และจัดสถานที่ต้อนรับเหมาะสม
                  </div>
                  <div className="p-3 bg-brand-dark/40 border border-white/5 rounded-lg">
                    <span className="font-bold text-white block mb-1">อวมงคลพิธี (สวดพระอภิธรรม/มาติกา)</span>
                    งานศพ ทำบุญหน้าศพ ทำบุญอัฐิ นิยมนิมนต์พระจำนวนคู่ (สวดอภิธรรม 4 รูป)
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Side column: Memory and Cautions */}
            <div className="space-y-6">
              <GlassCard hoverEffect={false} className="space-y-3">
                <h3 className="text-xs font-bold text-green-400 uppercase flex items-center gap-1.5">
                  <FaLightbulb />
                  <span>เทคนิคช่วยจำ (Memory Tricks)</span>
                </h3>
                <ul className="space-y-2 text-[11px] text-brand-text-secondary list-disc pl-4 leading-relaxed">
                  <li><strong className="text-white">สังฆทาน:</strong> อยู่ที่เจตนาถวายแก่สงฆ์ส่วนรวมโดยไม่เจาะจงรูป ไม่ใช่ถังสีเหลือง</li>
                  <li><strong className="text-white">ปวารณา:</strong> วันออกพรรษา เปิดโอกาสให้ว่ากล่าวตักเตือนกันได้ด้วยความเมตตา</li>
                  <li><strong className="text-white">อริยสัจฝั่งเหตุ:</strong> สมุทัย (เหตุเกิดทุกข์) และ มรรค (เหตุดับทุกข์)</li>
                </ul>
              </GlassCard>

              <GlassCard hoverEffect={false} className="space-y-3 border-l-4 border-l-brand-red-bright bg-brand-red-ruby/5">
                <h3 className="text-xs font-bold text-brand-red-glow uppercase flex items-center gap-1.5">
                  <BiInfoCircle />
                  <span>ข้อควรระวังในการสอบ (Cautions)</span>
                </h3>
                <p className="text-[10.5px] text-brand-text-secondary leading-relaxed">
                  ⚠️ <strong className="text-white">จำนวนพระงานมงคล vs อวมงคล:</strong> งานมงคล (เช่น ทำบุญบ้าน) นิยมนิมนต์พระจำนวนคี่ (5, 7, 9 รูป) ส่วนงานอวมงคล (สวดพระอภิธรรมศพ) นิยมนิมนต์พระจำนวนคู่ (4 รูป) ข้อสอบชอบถามสลับกันบ่อยมาก
                </p>
                <p className="text-[10.5px] text-brand-text-secondary leading-relaxed mt-2">
                  ⚠️ <strong className="text-white">วันอัฏฐมีบูชา:</strong> คือวันแรม 8 ค่ำ เดือน 6 (วันถวายพระเพลิงพระพุทธสรีระ) มักถูกลืมเพราะไม่ใช่วันหยุดราชการหลัก
                </p>
              </GlassCard>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CheatSheet;
