import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  BiArrowBack, 
  BiCheckCircle, 
  BiXCircle,
  BiHelpCircle,
  BiChevronLeft,
  BiChevronRight
} from 'react-icons/bi';
import GlassCard from '../components/GlassCard';
import { subjectsData } from '../data';

const Review = ({ history = [] }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const attemptId = searchParams.get('id');

  // Find attempt
  const attempt = history.find(item => item.id === attemptId);

  const [activeIndex, setActiveIndex] = useState(0);

  if (!attempt) {
    return (
      <GlassCard className="text-center p-12 space-y-6 max-w-md mx-auto">
        <h2 className="text-xl font-bold text-white">ไม่พบประวัติการทำข้อสอบนี้</h2>
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
  const currentQ = attempt.questions[activeIndex];
  const userAns = attempt.answers[activeIndex];
  const isCorrect = userAns === currentQ.answer;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <button 
            onClick={() => navigate(`/result?id=${attempt.id}`)}
            className="flex items-center gap-1 text-xs text-brand-text-secondary hover:text-white transition-colors mb-2"
          >
            <BiArrowBack className="text-sm" />
            <span>กลับไปยังผลการสอบ</span>
          </button>
          <h1 className="text-2xl font-extrabold text-white">เฉลยละเอียดและวิเคราะห์ตัวเลือก</h1>
          <p className="text-xs text-brand-text-secondary">วิชา {subject.name} | คะแนนรวม {attempt.score}/{attempt.totalQuestions}</p>
        </div>

        {/* Paginated Controller */}
        <div className="flex items-center gap-2">
          <button
            disabled={activeIndex === 0}
            onClick={() => setActiveIndex(prev => prev - 1)}
            className="p-2 rounded-xl bg-white/5 border border-white/5 disabled:opacity-30 transition-colors"
          >
            <BiChevronLeft className="text-xl" />
          </button>
          <span className="text-xs font-bold text-white font-mono px-3">
            {activeIndex + 1} / {attempt.totalQuestions}
          </span>
          <button
            disabled={activeIndex === attempt.totalQuestions - 1}
            onClick={() => setActiveIndex(prev => prev + 1)}
            className="p-2 rounded-xl bg-white/5 border border-white/5 disabled:opacity-30 transition-colors"
          >
            <BiChevronRight className="text-xl" />
          </button>
        </div>
      </div>

      {/* Grid Navigator */}
      <GlassCard hoverEffect={false} className="p-4">
        <div className="flex flex-wrap gap-1.5 justify-center">
          {attempt.questions.map((q, idx) => {
            const isUserCorrect = attempt.answers[idx] === q.answer;
            const active = idx === activeIndex;

            let borderStyle = 'border-white/5 text-brand-text-secondary bg-white/[0.02]';
            if (isUserCorrect) {
              borderStyle = active 
                ? 'border-green-500 bg-green-500/25 text-white shadow-glow-red' 
                : 'border-green-500/30 bg-green-500/5 text-green-400';
            } else {
              borderStyle = active 
                ? 'border-brand-red-bright bg-brand-red-ruby/30 text-white shadow-glow-red' 
                : 'border-brand-red-bright/20 bg-brand-red-ruby/5 text-brand-red-glow';
            }

            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-8 h-8 rounded-lg border text-[10px] font-semibold flex items-center justify-center transition-all ${borderStyle}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </GlassCard>

      {/* Active Question Review Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column: Question and choices */}
        <div className="lg:col-span-2 space-y-6">
          <GlassCard hoverEffect={false} className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold tracking-wider text-brand-red-glow bg-brand-red-ruby/20 border border-brand-red-bright/10 px-2 py-0.5 rounded uppercase">
                {currentQ.topic}
              </span>
              <div className="flex items-center gap-1.5">
                {isCorrect ? (
                  <span className="flex items-center gap-1 text-[10px] bg-green-500/10 border border-green-500/20 text-green-400 px-2 py-0.5 rounded font-bold">
                    <BiCheckCircle /> ถูกต้อง
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[10px] bg-brand-red-deep/20 border border-brand-red-bright/20 text-brand-red-glow px-2 py-0.5 rounded font-bold animate-pulse">
                    <BiXCircle /> ผิดพลาด
                  </span>
                )}
              </div>
            </div>

            {/* Question Text */}
            <p className="text-base font-semibold leading-relaxed whitespace-pre-line">
              {activeIndex + 1}. {currentQ.question}
            </p>

            {/* Choice Displays */}
            <div className="grid grid-cols-1 gap-3">
              {currentQ.shuffledChoices.map((choice, idx) => {
                const prefix = ['ก.', 'ข.', 'ค.', 'ง.'][idx];
                const isCurrentCorrect = choice.originalIndex === currentQ.answer;
                const isSelectedByStudent = choice.originalIndex === userAns;

                let stateStyle = 'bg-white/[0.01] border-white/5 text-brand-text-secondary';
                if (isCurrentCorrect) {
                  stateStyle = 'bg-green-500/10 border-green-500/40 text-green-400';
                } else if (isSelectedByStudent && !isCorrect) {
                  stateStyle = 'bg-brand-red-ruby/20 border-brand-red-bright/40 text-brand-red-glow';
                }

                return (
                  <div
                    key={idx}
                    className={`flex items-start text-left gap-4 p-4 rounded-xl border transition-all ${stateStyle}`}
                  >
                    <span className="font-bold">{prefix}</span>
                    <div className="flex-1 space-y-2">
                      <span className="text-xs font-medium">{choice.text}</span>
                      
                      {/* Detailed Choice Analysis */}
                      <p className={`text-[10px] mt-1.5 leading-relaxed ${
                        isCurrentCorrect ? 'text-green-300' : isSelectedByStudent ? 'text-red-300' : 'text-brand-text-muted'
                      }`}>
                        👉 {currentQ.explanation.choicesAnalysis[choice.originalIndex]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </div>

        {/* Right column: Step by step Solution & Common mistakes */}
        <div className="space-y-6">
          {/* Step-by-step thinking */}
          <GlassCard hoverEffect={false} className="space-y-4">
            <h3 className="text-xs font-bold tracking-wider text-brand-text-secondary uppercase">วิธีคิดทีละขั้นตอน</h3>
            
            {currentQ.formula && (
              <div className="p-3 bg-brand-red-ruby/15 border border-brand-red-bright/20 rounded-xl text-center">
                <span className="text-[10px] text-brand-text-secondary block mb-1">สูตรสำคัญที่ใช้</span>
                <span className="font-mono text-xs font-bold text-brand-red-glow">{currentQ.formula}</span>
              </div>
            )}

            <div className="space-y-3">
              {currentQ.solution.map((step, idx) => (
                <div key={idx} className="flex gap-2.5 items-start text-[11px] leading-relaxed">
                  <span className="flex-shrink-0 w-4 h-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-[9px] text-brand-text-muted mt-0.5">{idx + 1}</span>
                  <p className="text-brand-text-secondary">{step}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Common Mistakes */}
          <GlassCard hoverEffect={false} className="space-y-3 border-l-4 border-l-amber-500/80 bg-amber-500/[0.02]">
            <h3 className="text-xs font-bold tracking-wider text-amber-500 uppercase flex items-center gap-1.5">
              <BiHelpCircle className="text-sm" />
              <span>จุดที่นักเรียนมักผิด</span>
            </h3>
            <p className="text-[10.5px] text-brand-text-secondary leading-relaxed">
              {currentQ.commonMistakes}
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Review;
