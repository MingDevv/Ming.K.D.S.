import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BiPlayCircle, BiBookOpen, BiFile, BiBarChartAlt2, BiTrophy } from 'react-icons/bi';
import { FaFire } from 'react-icons/fa';
import GlassCard from '../components/GlassCard';

const Home = ({ streak = 0, history = [] }) => {
  const navigate = useNavigate();

  // Calculate statistics
  const totalCompleted = history.reduce((sum, item) => sum + item.totalQuestions, 0);
  const avgScore = history.length > 0 
    ? Math.round(history.reduce((sum, item) => sum + (item.score / item.totalQuestions * 100), 0) / history.length)
    : 0;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12 py-4"
    >
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-3xl mx-auto py-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="inline-flex items-center gap-2 bg-brand-red-ruby/20 border border-brand-red-bright/30 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-brand-red-glow text-glow-red uppercase"
        >
          🎓 สำหรับระดับมัธยมศึกษาปีที่ 4 (ม.4)
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
        >
          แนวข้อสอบกลางภาค <br />
          <span className="text-gradient-red text-glow-red font-black">By K.D.S.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base text-brand-text-secondary max-w-xl mx-auto leading-relaxed"
        >
          เตรียมความพร้อมสู่สนามสอบจริงด้วยระบบทดลองสอบเสมือนจริง อ้างอิงตามสัดส่วนเนื้อหาในหลักสูตรอย่างแม่นยำ พร้อมวิเคราะห์ผลประเมินจุดเด่นและจุดด้อยทันใจ
        </motion.p>
      </section>

      {/* Main Buttons Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard 
          hoverEffect={true} 
          glowOnHover={true}
          onClick={() => navigate('/select-subject')}
          className="group cursor-pointer border border-brand-red-bright/10 hover:border-brand-red-bright/30"
        >
          <div className="flex flex-col h-full justify-between space-y-6">
            <div className="bg-brand-red-bright/10 p-3 rounded-2xl w-fit group-hover:bg-brand-red-bright/20 transition-colors duration-300">
              <BiPlayCircle className="text-3xl text-brand-red-glow" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-red-glow transition-colors">เริ่มทำข้อสอบ</h3>
              <p className="text-xs text-brand-text-muted">เข้าสู่ระบบจำลองข้อสอบเสมือนจริง จับเวลาเสมือนห้องสอบจริง</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard 
          hoverEffect={true} 
          onClick={() => navigate('/select-subject')}
          className="group cursor-pointer hover:bg-white/[0.04]"
        >
          <div className="flex flex-col h-full justify-between space-y-6">
            <div className="bg-white/5 p-3 rounded-2xl w-fit group-hover:bg-white/10 transition-colors duration-300">
              <BiBookOpen className="text-3xl text-brand-text-secondary group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-text-secondary transition-colors">เลือกวิชาติว</h3>
              <p className="text-xs text-brand-text-muted">คณิตศาสตร์เพิ่มเติม, โลกและอวกาศ, ภาษาอังกฤษ, เคมี</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard 
          hoverEffect={true} 
          onClick={() => navigate('/cheat-sheet')}
          className="group cursor-pointer hover:bg-white/[0.04]"
        >
          <div className="flex flex-col h-full justify-between space-y-6">
            <div className="bg-white/5 p-3 rounded-2xl w-fit group-hover:bg-white/10 transition-colors duration-300">
              <BiFile className="text-3xl text-brand-text-secondary group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-text-secondary transition-colors">อ่านสรุปสูตร</h3>
              <p className="text-xs text-brand-text-muted">Cheat Sheet สรุปนิยาม สูตรสำคัญ ข้อควรระวังในการทำโจทย์</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard 
          hoverEffect={true} 
          onClick={() => navigate('/dashboard')}
          className="group cursor-pointer hover:bg-white/[0.04]"
        >
          <div className="flex flex-col h-full justify-between space-y-6">
            <div className="bg-white/5 p-3 rounded-2xl w-fit group-hover:bg-white/10 transition-colors duration-300">
              <BiBarChartAlt2 className="text-3xl text-brand-text-secondary group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-text-secondary transition-colors">สถิติและผลลัพธ์</h3>
              <p className="text-xs text-brand-text-muted">ตรวจคะแนนสะสม ความแม่นยำ วิเคราะห์จุดอ่อนรายหัวข้อ</p>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Stats Quick Summary & Motivational Quote */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2 space-y-4" hoverEffect={false}>
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-semibold text-brand-text-secondary tracking-wider uppercase">ความก้าวหน้าโดยรวม</h3>
            <span className="text-[10px] bg-brand-red-deep/40 text-brand-red-glow px-2 py-0.5 rounded-md border border-brand-red-bright/20">สถิติล่าสุด</span>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-center gap-1 text-brand-red-glow mb-1">
                <FaFire className="text-lg text-amber-500 animate-pulse" />
                <span className="text-xl font-bold">{streak}</span>
              </div>
              <p className="text-[10px] text-brand-text-muted">Streak ล่าสุด</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-center gap-1 text-white mb-1">
                <BiTrophy className="text-xl text-yellow-500" />
                <span className="text-xl font-bold">{totalCompleted}</span>
              </div>
              <p className="text-[10px] text-brand-text-muted">จำนวนข้อที่ทำ</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-center gap-1 text-white mb-1">
                <span className="text-xl font-bold text-green-400">{avgScore}%</span>
              </div>
              <p className="text-[10px] text-brand-text-muted">คะแนนเฉลี่ย</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="space-y-4" hoverEffect={false}>
          <h3 className="text-sm font-semibold text-brand-text-secondary tracking-wider uppercase">คำคมให้กำลังใจประจำวัน</h3>
          <div className="flex flex-col justify-center h-[70%]">
            <p className="text-xs italic text-brand-text-secondary leading-relaxed">
              "ความเพียรพยายามไม่ได้การันตีว่าจะได้คะแนนเต็มในวันนี้ แต่การละทิ้งความเพียรจะการันตีว่าจะไม่มีอะไรพัฒนาขึ้นเลย ค่อยๆ ฝึกฝนทีละข้อนะ!"
            </p>
            <span className="text-[10px] text-brand-red-glow font-bold mt-3 block text-right">— Senior Education Specialist</span>
          </div>
        </GlassCard>
      </section>
    </motion.div>
  );
};

export default Home;
