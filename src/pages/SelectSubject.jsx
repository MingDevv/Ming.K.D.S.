import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BiCalculator, 
  BiGlobe, 
  BiBookOpen, 
  BiPlay, 
  BiFile, 
  BiGitBranch, 
  BiLayer 
} from 'react-icons/bi';
import { FaFlask, FaPrayingHands } from 'react-icons/fa';
import GlassCard from '../components/GlassCard';
import { subjectsData } from '../data';

const SelectSubject = ({ history = [] }) => {
  const navigate = useNavigate();

  // Helper to map icon string to actual React Icon component
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'BiCalculator': return BiCalculator;
      case 'BiGlobe': return BiGlobe;
      case 'BiBookOpen': return BiBookOpen;
      case 'FaFlask': return FaFlask;
      case 'FaPrayingHands': return FaPrayingHands;
      default: return BiBookOpen;
    }
  };

  // Helper to calculate subject progress
  const getSubjectProgress = (subjectId, totalQuestions) => {
    const attemptedIds = new Set();
    history.forEach(attempt => {
      if (attempt.subjectId === subjectId && attempt.answers) {
        Object.keys(attempt.answers).forEach(qId => attemptedIds.add(qId));
      }
    });
    const attemptedCount = Math.min(attemptedIds.size, totalQuestions);
    return {
      count: attemptedCount,
      percent: Math.round((attemptedCount / totalQuestions) * 100)
    };
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">เลือกรายวิชาเพื่อเตรียมสอบ</h1>
        <p className="text-sm text-brand-text-secondary">เลือกวิชาที่คุณต้องการทดสอบความรู้ ทบทวนสรุป หรือฝึกฝนผ่านการ์ดช่วยจำ</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Object.values(subjectsData).map((sub) => {
          const IconComp = getIcon(sub.icon);
          const progress = getSubjectProgress(sub.id, sub.questions.length);

          return (
            <GlassCard 
              key={sub.id} 
              hoverEffect={true} 
              className={`flex flex-col justify-between shadow-xl ${sub.shadow} border-l-4 border-l-brand-red-bright`}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-red-glow transition-colors">{sub.name}</h3>
                    <p className="text-xs text-brand-text-secondary">{sub.description}</p>
                  </div>
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${sub.color} text-white shadow-md`}>
                    <IconComp className="text-2xl" />
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-brand-text-secondary">ทำไปแล้ว {progress.count} จาก {sub.questions.length} ข้อ</span>
                    <span className="font-bold text-brand-red-glow">{progress.percent}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${sub.color} rounded-full`}
                      style={{ width: `${progress.percent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-6">
                <button
                  onClick={() => navigate(`/quiz?subject=${sub.id}`)}
                  className={`flex flex-col items-center gap-1 p-2 rounded-xl bg-gradient-to-br ${sub.color} hover:shadow-glow-red hover:scale-105 transition-all text-white font-medium`}
                >
                  <BiPlay className="text-xl" />
                  <span className="text-[10px]">ทำข้อสอบ</span>
                </button>

                <button
                  onClick={() => navigate(`/cheat-sheet?subject=${sub.id}`)}
                  className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/5 hover:bg-white/10 hover:scale-105 transition-all text-white border border-white/5"
                >
                  <BiFile className="text-xl text-brand-text-secondary" />
                  <span className="text-[10px]">สรุปเนื้อหา</span>
                </button>

                <button
                  onClick={() => navigate(`/mind-map?subject=${sub.id}`)}
                  className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/5 hover:bg-white/10 hover:scale-105 transition-all text-white border border-white/5"
                >
                  <BiGitBranch className="text-xl text-brand-text-secondary" />
                  <span className="text-[10px]">แผนผังความคิด</span>
                </button>

                <button
                  onClick={() => navigate(`/flash-cards?subject=${sub.id}`)}
                  className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/5 hover:bg-white/10 hover:scale-105 transition-all text-white border border-white/5"
                >
                  <BiLayer className="text-xl text-brand-text-secondary" />
                  <span className="text-[10px]">บัตรคำศัพท์</span>
                </button>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
};

export default SelectSubject;
