import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  BiGitBranch, 
  BiCalculator, 
  BiGlobe, 
  BiBookOpen, 
  BiChevronRight, 
  BiInfoCircle 
} from 'react-icons/bi';
import { FaFlask, FaPrayingHands } from 'react-icons/fa';
import GlassCard from '../components/GlassCard';

const MindMap = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSubject = searchParams.get('subject') || 'math';
  const [selectedNode, setSelectedNode] = useState(null);

  const setSubject = (subId) => {
    setSearchParams({ subject: subId });
    setSelectedNode(null);
  };

  const tabs = [
    { id: 'math', label: 'คณิตศาสตร์', icon: BiCalculator },
    { id: 'earthScience', label: 'โลกและอวกาศ', icon: BiGlobe },
    { id: 'english', label: 'ภาษาอังกฤษ', icon: BiBookOpen },
    { id: 'chemistry', label: 'เคมี', icon: FaFlask },
    { id: 'social', label: 'สังคมศึกษา', icon: FaPrayingHands }
  ];

  // --- MIND MAP NODES DATABASES ---
  const mindMapData = {
    math: {
      title: "คณิตศาสตร์เพิ่มเติม ม.4",
      description: "ขอบเขตเตรียมสอบ: เซต และ ตรรกศาสตร์เบื้องต้น",
      nodes: [
        {
          id: "m_sets",
          label: "เซต (Sets)",
          details: "แนวคิดการสะสมสมาชิกและจัดระเบียบข้อมูลทางคณิตศาสตร์",
          subNodes: [
            { label: "การดำเนินการเซต (∪, ∩, -, ')", notes: "ยูเนียน (รวม), อินเตอร์เซกชัน (ส่วนร่วม), ผลต่าง (ลบออก), คอมพลีเมนต์ (นอกเหนือจาก)" },
            { label: "จำนวนสมาชิกเซตจำกัด", notes: "สูตร n(A ∪ B) = n(A) + n(B) - n(A ∩ B) และสูตร 3 เซต" },
            { label: "แผนภาพเวนน์และการแก้ปัญหา", notes: "การนำสมาชิกไปวางพิกัดพื้นที่ Venn-Euler เพื่อจัดแยกเงื่อนไขโจทย์ทับซ้อน" }
          ]
        },
        {
          id: "m_logic",
          label: "ตรรกศาสตร์ (Logic)",
          details: "วิชาว่าด้วยกฎเกณฑ์ความสมเหตุสมผลและการวิเคราะห์ประโยคมีค่าความจริง",
          subNodes: [
            { label: "ประพจน์และค่าความจริง", notes: "ประโยคบอกเล่า/ปฏิเสธที่มีค่า T หรือ F ชัดเจน" },
            { label: "ตัวเชื่อมประพจน์", notes: "ตัวเชื่อม และ (∧), หรือ (∨), ถ้า...แล้ว... (→), ก็ต่อเมื่อ (↔)" },
            { label: "ความสมมูลและสัจนิรันดร์", notes: "สัจนิรันดร์คือจริงทุกกรณี ตรวจสอบด้วยวิธีสมมติให้เป็นเท็จเพื่อหาข้อขัดแย้ง" },
            { label: "การอ้างเหตุผล", notes: "พิจารณาโครงสร้าง เหตุ ∧ เหตุ → ผลสรุป ว่าเป็นสัจนิรันดร์ (สมเหตุสมผล) หรือไม่" }
          ]
        }
      ]
    },
    earthScience: {
      title: "โลก ดาราศาสตร์ และอวกาศ",
      description: "ขอบเขตเตรียมสอบ: โครงสร้างโลก (Earth's Structure)",
      nodes: [
        {
          id: "es_info",
          label: "หลักฐานศึกษาโครงสร้างโลก",
          details: "วิธีการรวบรวมข้อมูลภายในเนื้อโลกเนื่องจากความลึกเป็นข้อจำกัดการเข้าถึง",
          subNodes: [
            { label: "ข้อมูลตรง (Direct Data)", notes: "หินอัคนีลึก หินแปลกปลอมในลาวา (Xenoliths) และแกนหินจากการเจาะสำรวจลึก" },
            { label: "ข้อมูลอ้อม (Indirect Data)", notes: "คลื่นไหวสะเทือน (P/S-wave), สนามแม่เหล็กโลก (Geodynamo), แรงโน้มถ่วง, อุกกาบาตเหล็ก" }
          ]
        },
        {
          id: "es_layers",
          label: "การแบ่งชั้นโครงสร้างโลก",
          details: "เกณฑ์สองแบบในการแบ่งชั้นโครงสร้างโลกตามหลักเคมีฟิสิกส์",
          subNodes: [
            { label: "แบ่งตามองค์ประกอบทางเคมี", notes: "เปลือกโลก (ทวีป-ไซอัล / มหาสมุทร-ไซมา), เนื้อโลก (เพริโดไทต์), แก่นโลก (เหล็ก+นิกเกิล)" },
            { label: "แบ่งตามสมบัติเชิงกล (กายภาพ)", notes: "ธรณีภาค (แข็งเกร็งเปรอะ), ฐานธรณีภาค (พลาสติกไหลวนพาความร้อน), มัชฌิมภาค (แข็งแกร่งดันสูง), แก่นนอก (เหล็กเหลว), แก่นใน (เหล็กแข็งจากแรงอัด)" }
          ]
        },
        {
          id: "es_boundaries",
          label: "แนวรอยต่อที่สำคัญ",
          details: "ขอบเขตสัมผัสที่มีคุณสมบัติความหนาแน่นและความเร็วคลื่นสะเทือนเปลี่ยนกะทันหัน",
          subNodes: [
            { label: "รอยต่อโมโฮ (Moho)", notes: "คั่นเปลือกโลกกับเนื้อโลก ความเร็วคลื่นสะเทือนเร่งเร็วขึ้นชัดเจน" },
            { label: "รอยต่อกูเตนเบิร์ก (Gutenberg)", notes: "คั่นเนื้อโลกกับแก่นโลกชั้นนอก คลื่น S หายไปเลย, คลื่น P ความเร็วร่วงและหักเหเกิดเขตอับคลื่น" },
            { label: "รอยต่อเลห์มันน์ (Lehmann)", notes: "คั่นแก่นโลกชั้นนอกกับแก่นโลกชั้นใน คลื่น P เร่งความเร็วตัวขึ้นใหม่เนื่องจากเจอของแข็ง" }
          ]
        }
      ]
    },
    english: {
      title: "English Reading & Writing 1",
      description: "ขอบเขตเตรียมสอบ: Vocabulary, Grammar, & Comprehension",
      nodes: [
        {
          id: "en_vocab",
          label: "Vocabulary Core",
          details: "คำศัพท์ระดับสูงที่พบบ่อยในการทำข้อสอบอ่านเขียนและบทความวิทยาศาสตร์",
          subNodes: [
            { label: "Academic Terms", notes: "เช่น specimen (สิ่งทดลอง), respondent (ผู้ตอบแบบสอบถาม), consortium (กลุ่มพันธมิตร)" },
            { label: "Descriptive & Modifiers", notes: "เช่น extinct (สูญพันธุ์), contradictory (ขัดแย้ง), elusive (หายากจับยาก), puzzled (รู้สึกงง)" }
          ]
        },
        {
          id: "en_grammar",
          label: "Grammar & Sentence Correctness",
          details: "ระเบียบโครงสร้างประโยคและการใช้ตัวอักษรพิมพ์ใหญ่",
          subNodes: [
            { label: "Subject-Verb Agreement", notes: "การใช้ don't / doesn't และกริยาหลักไม่ผัน, คล้อยกริยาตามพหูพจน์เอกพจน์" },
            { label: "Conditional Sentences", notes: "Type 0 (If + Present Sim, Present Sim) และ Type 1 (If + Present Sim, Future Sim)" },
            { label: "Capitalization Rules", notes: "วิสามานยนาม: ประเทศ (Japan), เมือง (Bangkok), วันและเดือน (Monday, July) และภาษา/สัญชาติ (English)" }
          ]
        }
      ]
    },
    chemistry: {
      title: "เคมี ม.4 เล่ม 1",
      description: "ขอบเขตเตรียมสอบ: โครงสร้างอะตอมและตารางธาตุ",
      nodes: [
        {
          id: "ch_atom",
          label: "โครงสร้างและทฤษฎีอะตอม",
          details: "วิวัฒนาการทัศนะโครงสร้างอะตอมและอนุภาคมูลฐานภายใต้กลศาสตร์ควอนตัม",
          subNodes: [
            { label: "แบบจำลองอะตอม", notes: "ดอลตัน (ทรงกลมตัน), ทอมสัน (ขนมปังลูกเกดพุดดิ้ง), รัทเทอร์ฟอร์ด (นิวเคลียสบวกเด่น), โบร์ (ระดับพลังงานวงโคจร), กลุ่มหมอก (โอกาสเจออิเล็กตรอน)" },
            { label: "สัญลักษณ์นิวเคลียร์และไอออน", notes: "คำนวณโปรตอน (Z), นิวตรอน (A-Z) และอิเล็กตรอนของไอออนบวกและลบ" },
            { label: "ความสัมพันธ์นิวเคลียร์", notes: "Isotope (p⁺ เท่า), Isotone (n เท่า), Isobar (เลขมวลบนเท่า), Isoelectronic (e⁻ เท่า)" }
          ]
        },
        {
          id: "ch_config",
          label: "การจัดเรียงอิเล็กตรอน",
          details: "กฎเกณฑ์การบรรจุอิเล็กตรอนในห้องระดับพลังงานหลักและระดับพลังงานย่อย s, p, d, f",
          subNodes: [
            { label: "หลักการบรรจุ (Principles)", notes: "Aufbau (พลังงานต่ำสุดก่อน), Hund's (กระจายเดี่ยวก่อนจับคู่), Pauli (สปินต่างทิศห้ามขนานกันในห้องเดียวกัน)" },
            { label: "ข้อยกเว้นทรานซิชัน (Exceptions)", notes: "โครเมียม (Cr Z=24 -> 4s¹ 3d⁵) และ ทองแดง (Cu Z=29 -> 4s¹ 3d¹⁰) เพื่อเสถียรภาพออร์บิทัลครึ่งและเต็ม" },
            { label: "การสูญเสียอิเล็กตรอนของไอออน", notes: "ไอออนทรานซิชันบวกต้องสูญเสียอิเล็กตรอนใน 4s ออกไปก่อน 3d เสมอ" }
          ]
        },
        {
          id: "ch_trends",
          label: "แนวโน้มตารางธาตุ (Trends)",
          details: "พฤติกรรมสมบัติทางเคมีตามตำแหน่งในหมู่และคาบของตารางธาตุ",
          subNodes: [
            { label: "สมบัติตามขอบเขต", notes: "ขนาดอะตอม, ขนาดไอออน (บวกลดลง ลบเพิ่มขึ้น), พลังงานไอออนไนเซชัน (IE), อิเล็กโทรเนกาติวิตี (EN), สัมพรรคภาพอิเล็กตรอน (EA)" },
            { label: "สมดุลนิวเคลียร์และครึ่งชีวิต", notes: "ปฏิกิริยาการคายรังสี (แอลฟา, บีตา, โพซิตรอน, นิวตรอน) และสมการคำนวณครึ่งชีวิตของสารกัมมันตรังสี" }
          ]
        }
      ]
    },
    social: {
      title: "สังคมศึกษา (พุทธศาสนา) ม.4",
      description: "ขอบเขตเตรียมสอบ: ประวัติศาสตร์ศาสนา อริยสัจ 4 พุทธจริยา วันสำคัญ และศาสนพิธี",
      nodes: [
        {
          id: "soc_history",
          label: "สังคมชมพูทวีปและประวัติศาสนา",
          details: "สภาพสังคมในสมัยพุทธกาล การแบ่งวรรณะ และภูมิศาสตร์",
          subNodes: [
            { label: "วรรณะทั้ง 4", notes: "กษัตริย์ (นักรบ), พราหมณ์ (นักบวช/พิธีกรรม), แพศย์ (พ่อค้า/เศรษฐกิจ), ศูทร (กรรมกรรับใช้)" },
            { label: "มัชฌิมประเทศ vs ปัจจันตประเทศ", notes: "มัชฌิมประเทศคือศูนย์กลางความเจริญของชมพูทวีปที่เป็นบ่อเกิดพุทธศาสนา" },
            { label: "การสังเวชนียสถาน 4", notes: "ลุมพินีวัน (ประสูติ), พุทธคยา (ตรัสรู้), ป่าอิสิปตนมฤคทายวัน (ปฐมเทศนา), กุสินารา (ปรินิพพาน)" }
          ]
        },
        {
          id: "soc_doctrines",
          label: "หลักธรรมคำสอนและอริยสัจ 4",
          details: "หลักเหตุและผล ไตรลักษณ์ และอธิปไตย",
          subNodes: [
            { label: "อริยสัจ 4 เชิงเหตุผล", notes: "สมุทัย (เหตุทุกข์) -> ทุกข์ (ผล) | มรรค (เหตุหลุดพ้น) -> นิโรธ (ผลดับทุกข์)" },
            { label: "สามัญลักษณะ (ไตรลักษณ์)", notes: "อนิจจัง (ไม่เที่ยง) ทุกขัง (ทนสภาพเดิมไม่ได้) อนัตตา (ไม่อยู่ในบังคับบัญชา)" },
            { label: "อธิปไตย 3 และโยนิโสมนัสสิการ", notes: "ธรรมาธิปไตย (ถือความถูกต้องเป็นใหญ่), โยนิโสมนัสสิการ (คิดวิเคราะห์แยกแยะหาความจริงอย่างแยบคาย)" }
          ]
        },
        {
          id: "soc_rituals",
          label: "ศาสนพิธีและวันสำคัญทางพุทธศาสนา",
          details: "วันสำคัญ 4 มหาบูชา ศาสนพิธีมงคลและอวมงคล",
          subNodes: [
            { label: "ลำดับวันสำคัญ", notes: "มาฆบูชา (ขึ้น 15 ค่ำ เดือน 3 - โอวาทปาติโมกข์), วิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6), อาสาฬหบูชา (ขึ้น 15 ค่ำ เดือน 8 - ปฐมเทศนา/ทางสายกลาง)" },
            { label: "งานมงคล vs อวมงคล", notes: "งานมงคล (บ้านใหม่/บวช -> สวดพระพุทธมนต์, นิมนต์พระคี่ 5,7,9) | งานอวมงคล (งานศพ -> สวดพระอภิธรรม/มาติกา)" },
            { label: "สังฆทาน และ ปวารณา", notes: "สังฆทานคือทานถวายแก่สงฆ์ส่วนรวมโดยไม่เจาะจงรูป | ปวารณาคือเปิดโอกาสให้ว่ากล่าวตักเตือนกันได้ด้วยความเมตตา" }
          ]
        }
      ]
    }
  };

  const currentMap = mindMapData[activeSubject] || mindMapData.math;

  return (
    <div className="space-y-8">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">แผนผังความคิด (Mind Map)</h1>
        <p className="text-sm text-brand-text-secondary">โครงสร้างหัวข้อสอบแบบแผนภูมิ คลิกแต่ละกิ่งเพื่อทบทวนโน้ตสรุปแบบรวดเร็ว</p>
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

      {/* Mind Map Interactive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Visual Map (Left 2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          <GlassCard hoverEffect={false} className="p-8 min-h-[450px] flex flex-col justify-center relative">
            <div className="absolute top-4 left-6 text-xs text-brand-text-muted flex items-center gap-1">
              <BiInfoCircle />
              <span>กดเลือกหัวข้อด้านล่างเพื่อแสดงสรุปเนื้อหา</span>
            </div>

            {/* Root Node */}
            <div className="flex flex-col items-center mb-10">
              <div className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-red-deep to-brand-red-glow border border-brand-red-bright text-center shadow-lg shadow-red-950/20 max-w-sm">
                <h2 className="text-sm font-extrabold text-white tracking-wider">{currentMap.title}</h2>
                <p className="text-[10px] text-brand-text-secondary mt-1">{currentMap.description}</p>
              </div>
              <div className="w-0.5 h-10 bg-gradient-to-b from-brand-red-bright to-white/10" />
            </div>

            {/* Sub-root Branches */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {currentMap.nodes.map((node) => {
                const isSelected = selectedNode?.id === node.id;
                return (
                  <div key={node.id} className="flex flex-col items-center">
                    <button
                      onClick={() => setSelectedNode(node)}
                      className={`w-full p-4 rounded-xl border text-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-brand-red-ruby/20 border-brand-red-bright text-white shadow-glow-red scale-105'
                          : 'bg-white/5 border-white/5 text-brand-text-secondary hover:bg-white/[0.08] hover:text-white'
                      }`}
                    >
                      <BiGitBranch className="mx-auto text-xl mb-1 text-brand-red-glow" />
                      <span className="text-xs font-bold block">{node.label}</span>
                      <span className="text-[9px] text-brand-text-muted mt-1 block line-clamp-1">{node.details}</span>
                    </button>

                    {/* Connecting lines for subnodes */}
                    {isSelected && (
                      <div className="w-0.5 h-6 bg-brand-red-bright/40" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Child Node Leafs under selected branch */}
            {selectedNode && (
              <div className="mt-4 pt-6 border-t border-white/5 animate-fade-in space-y-3">
                <div className="text-[10px] text-brand-text-muted text-center font-bold uppercase tracking-wider mb-2">
                  กิ่งก้านการเรียนรู้ในหัวข้อ "{selectedNode.label}"
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedNode.subNodes.map((sub, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-brand-red-bright/20 transition-all flex flex-col justify-between"
                    >
                      <span className="text-xs font-bold text-white mb-1.5 flex items-center gap-1">
                        <BiChevronRight className="text-brand-red-glow" />
                        {sub.label}
                      </span>
                      <p className="text-[10px] text-brand-text-secondary leading-relaxed">{sub.notes}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </GlassCard>
        </div>

        {/* Sidebar Info Drawer Detail (Right 1 col) */}
        <div className="space-y-6">
          <GlassCard hoverEffect={false} className="h-full flex flex-col justify-between p-6">
            <div className="space-y-4">
              <h3 className="text-xs font-bold tracking-wider text-brand-text-secondary uppercase">รายละเอียดเชิงลึก</h3>
              
              {selectedNode ? (
                <div className="space-y-4 animate-fade-in">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">{selectedNode.label}</h4>
                    <p className="text-[10.5px] text-brand-text-secondary leading-relaxed">{selectedNode.details}</p>
                  </div>

                  <div className="pt-4 border-t border-white/5 space-y-4">
                    <span className="text-[10px] text-brand-text-muted uppercase font-bold block">บทสรุปประเด็นหลัก:</span>
                    <div className="space-y-3">
                      {selectedNode.subNodes.map((sub, idx) => (
                        <div key={idx} className="space-y-1">
                          <span className="text-[11px] font-semibold text-brand-red-glow block">{sub.label}</span>
                          <p className="text-[10px] text-brand-text-secondary leading-relaxed bg-brand-dark/20 p-2.5 rounded border border-white/5">
                            {sub.notes}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-[250px] flex flex-col items-center justify-center text-center p-4 space-y-2">
                  <BiGitBranch className="text-4xl text-brand-text-muted animate-pulse" />
                  <p className="text-xs text-brand-text-muted italic">คลิกที่หนึ่งในกิ่งหลัก เพื่อสแกนแผนที่ความคิดแบบละเอียดในบานหน้าต่างนี้</p>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-white/5 text-[9px] text-brand-text-muted leading-relaxed">
              💡 แผนภาพโครงสร้างวิชาจะครอบคลุมแนวทางการจำกัดหัวข้อในเอกสารแนวข้อสอบ เพื่อไม่ให้ล้นออกนอกขอบเขตการเตรียมตัวกลางภาค
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default MindMap;
