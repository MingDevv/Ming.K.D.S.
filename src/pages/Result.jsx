import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BiTrophy, 
  BiTimeFive, 
  BiCheckShield, 
  BiCompass,
  BiBookOpen,
  BiChevronRight,
  BiRefresh
} from 'react-icons/bi';
import GlassCard from '../components/GlassCard';
import { subjectsData } from '../data';

const Result = ({ history = [] }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const attemptId = searchParams.get('id');

  // Find attempt in history
  const attempt = history.find(item => item.id === attemptId);

  if (!attempt) {
    return (
      <GlassCard className="text-center p-12 space-y-6 max-w-md mx-auto">
        <h2 className="text-xl font-bold text-white">ไม่พบประวัติการทำข้อสอบนี้</h2>
        <p className="text-xs text-brand-text-secondary">อาจเกิดจากระบบรีเซ็ตข้อมูลคลาวด์ หรือไม่มีผลลัพธ์ ID นี้จัดเก็บในอุปกรณ์</p>
        <button
          onClick={() => navigate('/select-subject')}
          className="px-6 py-2.5 rounded-xl bg-brand-red-bright text-white text-xs font-semibold"
        >
          กลับไปเลือกวิชา
        </button>
      </GlassCard>
    );
  }

  const subject = subjectsData[attempt.subjectId];
  const percent = Math.round((attempt.score / attempt.totalQuestions) * 100);

  // Calculate grade letter
  const getGrade = (percentage) => {
    if (percentage === 100) return { letter: 'S', desc: 'สุดยอดไร้พ่าย (Perfect)', color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' };
    if (percentage >= 80) return { letter: 'A', desc: 'ยอดเยี่ยม (Excellent)', color: 'text-green-400 bg-green-500/10 border-green-500/30' };
    if (percentage >= 70) return { letter: 'B', desc: 'ดีมาก (Good)', color: 'text-blue-400 bg-blue-500/10 border-blue-500/30' };
    if (percentage >= 60) return { letter: 'C', desc: 'ผ่านเกณฑ์ (Pass)', color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30' };
    if (percentage >= 50) return { letter: 'D', desc: 'พอใช้ (Pass Minimum)', color: 'text-orange-400 bg-orange-500/10 border-orange-500/30' };
    return { letter: 'F', desc: 'ควรปรับปรุง (Improvement Need)', color: 'text-red-400 bg-brand-red-deep/20 border-brand-red-bright/30' };
  };

  const gradeInfo = getGrade(percent);

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins} นาที ${secs} วินาที` : `${secs} วินาที`;
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">สรุปคะแนนสอบ</h1>
        <p className="text-sm text-brand-text-secondary">ผลสรุปสมรรถนะการจำลองสอบวิชา <span className="text-white font-semibold">{subject.name}</span></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Grade Badge Card */}
        <GlassCard hoverEffect={false} className="flex flex-col items-center justify-center p-8 text-center space-y-4">
          <h3 className="text-xs font-semibold tracking-wider text-brand-text-secondary uppercase">เกรดเฉลี่ยประเมิน</h3>
          <motion.div 
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className={`w-32 h-32 rounded-full border-4 flex items-center justify-center text-5xl font-black shadow-lg ${gradeInfo.color}`}
          >
            {gradeInfo.letter}
          </motion.div>
          <div className="space-y-1">
            <span className="text-sm font-bold text-white">{gradeInfo.desc}</span>
            <p className="text-[10px] text-brand-text-secondary">ระดับคะแนนเทียบเท่าเกณฑ์จริง</p>
          </div>
        </GlassCard>

        {/* Stats details */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <GlassCard hoverEffect={false} className="flex items-center gap-4 p-5">
            <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded-xl">
              <BiTrophy className="text-2xl" />
            </div>
            <div>
              <p className="text-[10px] text-brand-text-secondary">คะแนนที่ได้</p>
              <h4 className="text-2xl font-bold text-white">{attempt.score} <span className="text-sm text-brand-text-muted">/ {attempt.totalQuestions} คะแนน</span></h4>
            </div>
          </GlassCard>

          <GlassCard hoverEffect={false} className="flex items-center gap-4 p-5">
            <div className="p-3 bg-brand-red-bright/10 border border-brand-red-bright/20 text-brand-red-glow rounded-xl">
              <BiTimeFive className="text-2xl" />
            </div>
            <div>
              <p className="text-[10px] text-brand-text-secondary">เวลาที่ใช้ไป</p>
              <h4 className="text-base font-bold text-white">{formatDuration(attempt.timeSpent)}</h4>
            </div>
          </GlassCard>

          <GlassCard hoverEffect={false} className="flex items-center gap-4 p-5">
            <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl">
              <BiCheckShield className="text-2xl" />
            </div>
            <div>
              <p className="text-[10px] text-brand-text-secondary">ความถูกต้อง</p>
              <h4 className="text-2xl font-bold text-green-400">{percent}%</h4>
            </div>
          </GlassCard>

          <GlassCard hoverEffect={false} className="flex items-center gap-4 p-5">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl">
              <BiCompass className="text-2xl" />
            </div>
            <div>
              <p className="text-[10px] text-brand-text-secondary">เกณฑ์วิเคราะห์</p>
              <h4 className="text-xs font-bold text-white leading-relaxed">ผ่านสัดส่วน: {percent >= 60 ? 'ผ่านเกณฑ์ขั้นต่ำ' : 'ยังไม่ผ่านเกณฑ์ขั้นต่ำ'}</h4>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Weak & Strong Topics Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strong Topics */}
        <GlassCard hoverEffect={false} className="space-y-4">
          <h3 className="text-xs font-semibold text-green-400 tracking-wider uppercase">จุดแข็งของคุณ (Strong Areas)</h3>
          {attempt.strongTopics.length > 0 ? (
            <ul className="space-y-2">
              {attempt.strongTopics.map((topic, idx) => (
                <li key={idx} className="text-xs bg-green-500/5 border border-green-500/10 p-3 rounded-lg flex items-center gap-2 text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-brand-text-muted italic">ยังไม่พบหัวข้อทำคะแนนโดดเด่นในรอบนี้ พยายามทบทวนบ่อยๆ นะครับ</p>
          )}
        </GlassCard>

        {/* Weak Topics & Recommendations */}
        <GlassCard hoverEffect={false} className="space-y-4">
          <h3 className="text-xs font-semibold text-brand-red-glow tracking-wider uppercase font-sans">จุดอ่อนที่ควรเร่งปรับปรุง (Focus Areas)</h3>
          {attempt.weakTopics.length > 0 ? (
            <div className="space-y-3">
              <ul className="space-y-2">
                {attempt.weakTopics.map((topic, idx) => (
                  <li key={idx} className="text-xs bg-brand-red-ruby/5 border border-brand-red-bright/10 p-3 rounded-lg flex items-center gap-2 text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red-glow" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
              
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <h4 className="text-xs font-bold text-white">💡 คำแนะนำสำหรับการพัฒนา:</h4>
                <p className="text-[11px] text-brand-text-secondary leading-relaxed">
                  ขอแนะนำให้อ่านทบทวนในแท็บ <span className="text-brand-red-glow font-semibold cursor-pointer" onClick={() => navigate('/cheat-sheet')}>Cheat Sheet</span> ในหัวข้อด้านบน หรือใช้ฟีเจอร์ <span className="text-brand-red-glow font-semibold cursor-pointer" onClick={() => navigate('/flash-cards')}>Flash Cards</span> เพื่อกระตุ้นความจำด้วยหลักวิทยาศาสตร์เชิงรุก (Active Recall)
                </p>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-center">
              <p className="text-xs font-bold">🎉 ยอดเยี่ยม! ไม่พบจุดอ่อนในวิชานี้เลย คุณพร้อมสำหรับการสอบจริงแล้ว!</p>
            </div>
          )}
        </GlassCard>
      </div>

      {/* Action panel */}
      <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
        <button
          onClick={() => navigate(`/quiz?subject=${attempt.subjectId}`)}
          className="flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-colors border border-white/5"
        >
          <BiRefresh className="text-lg" />
          <span>ทำข้อสอบใหม่อีกรอบ</span>
        </button>

        <button
          onClick={() => navigate(`/review?id=${attempt.id}`)}
          className="flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-red-ruby to-brand-red-bright hover:shadow-glow-red hover:scale-105 text-white text-xs font-bold transition-all"
        >
          <span>ตรวจคำตอบและอ่านเฉลยละเอียด</span>
          <BiChevronRight className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Result;
