import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  BiTimer, 
  BiChevronLeft, 
  BiChevronRight, 
  BiBookmark, 
  BiCheckCircle, 
  BiXCircle, 
  BiRefresh,
  BiCheck,
  BiGridAlt,
  BiInfoCircle,
  BiHelpCircle,
  BiBookOpen
} from 'react-icons/bi';
import { FaFire, FaLightbulb } from 'react-icons/fa';
import GlassCard from '../components/GlassCard';
import { subjectsData } from '../data';

const Quiz = ({ onAddAttempt, bookmarks = [], onToggleBookmark, settings = {} }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const subjectId = searchParams.get('subject') || 'math';
  const selectedSubject = subjectsData[subjectId] || subjectsData.math;

  // --- QUIZ SETUP STATES ---
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [questionCount, setQuestionCount] = useState(10);
  const [shuffleQuestions, setShuffleQuestions] = useState(true);
  const [shuffleChoices, setShuffleChoices] = useState(true);
  const [enableTimer, setEnableTimer] = useState(true);
  const [instantFeedback, setInstantFeedback] = useState(true); // Default Instant Feedback ON!

  // --- EXAM RUNTIME STATES ---
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { questionId: selectedOriginalChoiceIndex }
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);

  // Play sound helper
  const playSound = (type) => {
    if (!settings.soundEnabled) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'correct') {
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1); // A5
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } else if (type === 'wrong') {
        osc.frequency.setValueAtTime(220, ctx.currentTime); // A3
        osc.frequency.setValueAtTime(196, ctx.currentTime + 0.1); // G3
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      }
    } catch {
      // Audio context fallback
    }
  };

  // Start exam initialization
  const handleStartQuiz = () => {
    let sourceQuestions = [...selectedSubject.questions];

    if (shuffleQuestions) {
      sourceQuestions = sourceQuestions.sort(() => Math.random() - 0.5);
    }

    const selectedQ = sourceQuestions.slice(0, Math.min(questionCount, sourceQuestions.length));

    // Map question choice shuffling
    const preparedQuestions = selectedQ.map((q) => {
      let choiceObjects = q.choices.map((text, originalIndex) => ({
        text,
        originalIndex
      }));

      if (shuffleChoices) {
        choiceObjects = choiceObjects.sort(() => Math.random() - 0.5);
      }

      return {
        ...q,
        preparedChoices: choiceObjects
      };
    });

    setQuestions(preparedQuestions);
    setCurrentIndex(0);
    setAnswers({});
    setIsExamStarted(true);

    // Set timer (1.5 minutes per question)
    const initialTime = preparedQuestions.length * 90;
    setTimeLeft(initialTime);
  };

  // Timer countdown hook
  useEffect(() => {
    if (isExamStarted && enableTimer && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            handleFinishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      setTimerId(interval);
      return () => clearInterval(interval);
    }
  }, [isExamStarted, enableTimer, timeLeft]);

  // Choice Selection
  const handleSelectChoice = (originalIndex) => {
    const currentQ = questions[currentIndex];
    const isFirstTimeAnswering = answers[currentQ.id] === undefined;

    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: originalIndex
    }));

    if (instantFeedback && isFirstTimeAnswering) {
      if (originalIndex === currentQ.answer) {
        playSound('correct');
      } else {
        playSound('wrong');
      }
    }
  };

  // Finish exam & navigate to result
  const handleFinishExam = () => {
    if (timerId) clearInterval(timerId);

    // Calculate score
    let score = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        score += 1;
      }
    });

    const totalQuestions = questions.length;
    const initialTime = totalQuestions * 90;
    const timeSpent = enableTimer ? Math.max(0, initialTime - timeLeft) : 0;

    const attemptData = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('th-TH', { 
        year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' 
      }),
      subjectId: selectedSubject.id,
      subjectName: selectedSubject.name,
      questions,
      answers,
      score,
      totalQuestions,
      timeSpent
    };

    onAddAttempt(attemptData);
    navigate('/result');
  };

  // Format seconds to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // --- RENDER 1: SETUP SCREEN ---
  if (!isExamStarted) {
    return (
      <div className="max-w-2xl mx-auto space-y-8 py-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2">ตั้งค่าการทดลองสอบ</h1>
          <p className="text-sm text-brand-text-secondary">วิชา: <strong className="text-white">{selectedSubject.name}</strong></p>
        </div>

        <GlassCard hoverEffect={false} className="p-8 space-y-6">
          {/* Question Count Selection */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-brand-text-secondary uppercase">จำนวนข้อสอบที่ต้องการทำ</label>
            <div className="grid grid-cols-4 gap-3">
              {[10, 20, 30, selectedSubject.questions.length].map((cnt) => {
                if (cnt > selectedSubject.questions.length) return null;
                const active = questionCount === cnt;
                return (
                  <button
                    key={cnt}
                    onClick={() => setQuestionCount(cnt)}
                    className={`py-3 rounded-xl border text-xs font-bold transition-all ${
                      active
                        ? 'bg-brand-red-ruby/30 border-brand-red-bright text-brand-red-glow shadow-glow-red'
                        : 'bg-white/5 border-white/5 text-brand-text-secondary hover:bg-white/10'
                    }`}
                  >
                    {cnt === selectedSubject.questions.length ? `ทั้งหมด (${cnt})` : `${cnt} ข้อ`}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            {/* INSTANT FEEDBACK TOGGLE (ตอบแล้วเฉลยทันที) */}
            <div className="flex justify-between items-center p-3.5 rounded-xl bg-brand-red-ruby/10 border border-brand-red-bright/30">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-red-bright/20 rounded-lg text-brand-red-glow">
                  <FaLightbulb className="text-xl text-yellow-400" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">⚡ โหมดเฉลยและอธิบายทันที (Instant Feedback)</span>
                  <span className="text-[10px] text-brand-text-secondary">ตอบแล้วตรวจคำตอบทันทีพร้อมวิเคราะห์ช้อยส์และจุดที่มักผิด</span>
                </div>
              </div>
              <input 
                type="checkbox" 
                checked={instantFeedback} 
                onChange={(e) => setInstantFeedback(e.target.checked)}
                className="w-4 h-4 text-brand-red-bright accent-brand-red-bright focus:ring-0 cursor-pointer"
              />
            </div>

            {/* Timer Toggle */}
            <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.01] border border-white/5">
              <span className="text-xs text-white font-medium">เปิดใช้งานตัวจับเวลา (90 วินาที/ข้อ)</span>
              <input 
                type="checkbox" 
                checked={enableTimer} 
                onChange={(e) => setEnableTimer(e.target.checked)}
                className="w-4 h-4 text-brand-red-bright accent-brand-red-bright focus:ring-0 cursor-pointer"
              />
            </div>

            {/* Shuffle Questions Toggle */}
            <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.01] border border-white/5">
              <span className="text-xs text-white font-medium">สุ่มลำดับโจทย์ข้อสอบ (Shuffle Questions)</span>
              <input 
                type="checkbox" 
                checked={shuffleQuestions} 
                onChange={(e) => setShuffleQuestions(e.target.checked)}
                className="w-4 h-4 text-brand-red-bright accent-brand-red-bright focus:ring-0 cursor-pointer"
              />
            </div>

            {/* Shuffle Choices Toggle */}
            <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.01] border border-white/5">
              <span className="text-xs text-white font-medium">สุ่มลำดับตัวเลือก ก, ข, ค, ง (Shuffle Choices)</span>
              <input 
                type="checkbox" 
                checked={shuffleChoices} 
                onChange={(e) => setShuffleChoices(e.target.checked)}
                className="w-4 h-4 text-brand-red-bright accent-brand-red-bright focus:ring-0 cursor-pointer"
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <button
              onClick={handleStartQuiz}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-red-ruby to-brand-red-bright text-white font-extrabold text-sm tracking-wider uppercase shadow-glow-red hover:scale-[1.02] transition-all"
            >
              เริ่มทำข้อสอบเสมือนจริง
            </button>
          </div>
        </GlassCard>
      </div>
    );
  }

  // --- RENDER 2: EXAM RUNTIME SCREEN ---
  const currentQ = questions[currentIndex];
  const selectedChoice = answers[currentQ.id];
  const isAnswered = selectedChoice !== undefined;
  const isCorrect = selectedChoice === currentQ.answer;

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      {/* Exam Header Bar */}
      <div className="flex justify-between items-center p-4 rounded-2xl glass border border-white/10">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-brand-text-secondary">วิชา: <strong className="text-white">{selectedSubject.name}</strong></span>
          <span className="text-xs text-brand-text-muted">| ข้อ {currentIndex + 1} จาก {questions.length}</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Timer Badge */}
          {enableTimer && (
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border text-xs font-bold font-mono ${
              timeLeft < 180 ? 'bg-red-500/20 border-red-500 text-red-400 animate-pulse' : 'bg-white/5 border-white/10 text-white'
            }`}>
              <BiTimer className="text-base" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          )}

          {/* Question Nav Drawer Toggle Button */}
          <button
            onClick={() => setIsNavDrawerOpen(!isNavDrawerOpen)}
            className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-brand-text-secondary hover:text-white"
          >
            <BiGridAlt className="text-base" />
            <span>ผังข้อสอบ</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-brand-red-ruby to-brand-red-bright transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Main Question & Options Card */}
      <GlassCard hoverEffect={false} className="p-8 space-y-6">
        {/* Question Topic & Bookmark Button */}
        <div className="flex justify-between items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-brand-red-deep/40 border border-brand-red-bright/20 text-[10px] font-bold text-brand-red-glow uppercase">
              {currentQ.topic || 'เนื้อหาเตรียมสอบ'}
            </span>
            {currentQ.difficulty && (
              <span className="px-2 py-0.5 rounded text-[9px] bg-white/5 border border-white/10 text-brand-text-muted">
                ความยาก: {currentQ.difficulty}
              </span>
            )}
          </div>

          <button
            onClick={() => onToggleBookmark(currentQ.id)}
            className={`p-2 rounded-xl border transition-all ${
              bookmarks.includes(currentQ.id)
                ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                : 'bg-white/5 border-white/5 text-brand-text-muted hover:text-white'
            }`}
            title="บันทึกข้อสอบ (Bookmark)"
          >
            <BiBookmark className="text-lg" />
          </button>
        </div>

        {/* Reading Passage if available */}
        {currentQ.passage && (
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs leading-relaxed text-brand-text-secondary whitespace-pre-line italic">
            <strong className="text-white not-italic block mb-1">📖 บทความสำหรับอ่านประกอบคำถาม:</strong>
            {currentQ.passage}
          </div>
        )}

        {/* Question Text */}
        <h2 className="text-base md:text-lg font-bold text-white leading-relaxed">
          ข้อที่ {currentIndex + 1}. {currentQ.question}
        </h2>

        {/* Choices Options List */}
        <div className="space-y-3 pt-2">
          {currentQ.preparedChoices.map((choice, idx) => {
            const isThisChoiceSelected = selectedChoice === choice.originalIndex;
            const isCorrectAnswer = choice.originalIndex === currentQ.answer;

            let optionStyle = 'bg-white/[0.02] border-white/5 text-brand-text-secondary hover:bg-white/[0.06] hover:text-white';

            if (instantFeedback && isAnswered) {
              if (isCorrectAnswer) {
                optionStyle = 'bg-green-500/20 border-green-500 text-green-300 font-bold shadow-sm';
              } else if (isThisChoiceSelected) {
                optionStyle = 'bg-red-500/20 border-red-500 text-red-300 font-bold';
              } else {
                optionStyle = 'bg-white/[0.01] border-white/5 text-brand-text-muted opacity-50';
              }
            } else if (isThisChoiceSelected) {
              optionStyle = 'bg-brand-red-ruby/30 border-brand-red-bright text-white font-bold shadow-glow-red';
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectChoice(choice.originalIndex)}
                className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between text-xs md:text-sm ${optionStyle}`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className={`w-7 h-7 rounded-lg border flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                    instantFeedback && isAnswered
                      ? isCorrectAnswer 
                        ? 'border-green-500 bg-green-500 text-black' 
                        : isThisChoiceSelected 
                          ? 'border-red-500 bg-red-500 text-white' 
                          : 'border-white/10 text-brand-text-muted'
                      : isThisChoiceSelected
                        ? 'border-brand-red-bright bg-brand-red-bright text-white'
                        : 'border-white/10 text-brand-text-muted'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="leading-relaxed">{choice.text}</span>
                </div>

                {/* Status Indicator Icon */}
                {instantFeedback && isAnswered && (
                  <div className="ml-2 flex-shrink-0">
                    {isCorrectAnswer ? (
                      <span className="text-xs font-bold text-green-400 flex items-center gap-1">
                        <BiCheckCircle className="text-lg" />
                        <span>ถูกต้อง</span>
                      </span>
                    ) : isThisChoiceSelected ? (
                      <span className="text-xs font-bold text-red-400 flex items-center gap-1">
                        <BiXCircle className="text-lg" />
                        <span>คำตอบของคุณ</span>
                      </span>
                    ) : null}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </GlassCard>

      {/* INSTANT FEEDBACK EXPLANATION DRAWER */}
      {instantFeedback && isAnswered && (
        <div className="space-y-4 animate-slide-up">
          <GlassCard 
            hoverEffect={false} 
            className={`p-6 border-l-4 ${
              isCorrect ? 'border-l-green-500 bg-green-950/10' : 'border-l-red-500 bg-red-950/10'
            }`}
          >
            {/* Header Banner */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
              {isCorrect ? (
                <>
                  <BiCheckCircle className="text-2xl text-green-400" />
                  <div>
                    <h3 className="text-sm font-extrabold text-green-400">🎉 ถูกต้องครับ!</h3>
                    <p className="text-[10px] text-brand-text-secondary">เก่งมาก! คุณเลือกคำตอบที่ถูกต้องแล้ว</p>
                  </div>
                </>
              ) : (
                <>
                  <BiXCircle className="text-2xl text-red-400" />
                  <div>
                    <h3 className="text-sm font-extrabold text-red-400">❌ ยังไม่ถูกต้อง</h3>
                    <p className="text-[10px] text-brand-text-secondary">
                      คำตอบที่ถูกต้องคือ: <strong className="text-green-400 font-bold">{currentQ.choices[currentQ.answer]}</strong>
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="space-y-4 text-xs">
              {/* General Explanation */}
              {currentQ.explanation?.general && (
                <div className="space-y-1">
                  <span className="font-bold text-white flex items-center gap-1 text-[11px]">
                    <BiInfoCircle className="text-brand-red-glow" />
                    <span>คำอธิบายภาพรวม:</span>
                  </span>
                  <p className="text-brand-text-secondary leading-relaxed pl-4 bg-white/[0.01] p-3 rounded-lg border border-white/5">
                    {currentQ.explanation.general}
                  </p>
                </div>
              )}

              {/* Choices Analysis */}
              {currentQ.explanation?.choicesAnalysis && (
                <div className="space-y-1.5">
                  <span className="font-bold text-white flex items-center gap-1 text-[11px]">
                    <BiBookOpen className="text-brand-red-glow" />
                    <span>วิเคราะห์เหตุผลรายตัวเลือก:</span>
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4">
                    {currentQ.preparedChoices.map((choice, cIdx) => (
                      <div key={cIdx} className="p-2.5 rounded bg-brand-dark/40 border border-white/5 text-[11px] leading-relaxed">
                        <span className="font-bold text-white">{choice.text}:</span>{' '}
                        <span className="text-brand-text-secondary">{currentQ.explanation.choicesAnalysis[choice.originalIndex]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step-by-step solution */}
              {currentQ.solution && (
                <div className="space-y-1">
                  <span className="font-bold text-white flex items-center gap-1 text-[11px]">
                    <FaLightbulb className="text-yellow-400" />
                    <span>วิธีคิดและขั้นตอนการแก้ปัญหา:</span>
                  </span>
                  <div className="pl-4 space-y-1 text-brand-text-secondary text-[11px]">
                    {currentQ.solution.map((step, sIdx) => (
                      <div key={sIdx}>{step}</div>
                    ))}
                  </div>
                </div>
              )}

              {/* Formula & Common Pitfalls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {currentQ.formula && (
                  <div className="p-3 rounded-lg bg-brand-dark/40 border border-white/5">
                    <span className="text-[10px] font-bold text-brand-red-glow uppercase block mb-1">สูตร / หลักการสำคัญ:</span>
                    <span className="font-mono text-white text-[11px] font-semibold">{currentQ.formula}</span>
                  </div>
                )}

                {currentQ.commonMistakes && (
                  <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/20">
                    <span className="text-[10px] font-bold text-red-400 uppercase block mb-1">⚠️ จุดที่นักเรียนมักทำผิด:</span>
                    <span className="text-brand-text-secondary text-[11px]">{currentQ.commonMistakes}</span>
                  </div>
                )}
              </div>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Bottom Controls */}
      <div className="flex justify-between items-center pt-4">
        <button
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((prev) => prev - 1)}
          className="flex items-center gap-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-xs font-semibold text-brand-text-secondary disabled:opacity-30"
        >
          <BiChevronLeft className="text-xl" />
          <span>ข้อก่อนหน้า</span>
        </button>

        {currentIndex === questions.length - 1 ? (
          <button
            onClick={handleFinishExam}
            className="flex items-center gap-1 px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-red-ruby to-brand-red-bright text-xs font-bold text-white shadow-glow-red"
          >
            <span>ส่งข้อสอบและสรุปผล</span>
            <BiCheck className="text-xl" />
          </button>
        ) : (
          <button
            onClick={() => setCurrentIndex((prev) => prev + 1)}
            className="flex items-center gap-1 px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-red-ruby to-brand-red-bright text-xs font-bold text-white shadow-glow-red"
          >
            <span>ข้อถัดไป</span>
            <BiChevronRight className="text-xl" />
          </button>
        )}
      </div>

      {/* Quick Nav Drawer Overlay */}
      {isNavDrawerOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-end">
          <div className="w-80 h-full glass border-l border-white/10 p-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <h3 className="text-sm font-bold text-white">ผังข้อสอบ (Quick Navigation)</h3>
                <button onClick={() => setIsNavDrawerOpen(false)} className="text-brand-text-muted hover:text-white">
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2 max-h-[60vh] overflow-y-auto pr-1 scrollbar-none">
                {questions.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAns = answers[q.id] !== undefined;
                  const isBookmarked = bookmarks.includes(q.id);

                  let bgStyle = 'bg-white/5 border-white/5 text-brand-text-muted';
                  if (isAns) bgStyle = 'bg-brand-red-ruby/30 border-brand-red-bright text-white';
                  if (isCurrent) bgStyle += ' border-2 border-brand-red-glow font-bold scale-105';

                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setCurrentIndex(idx);
                        setIsNavDrawerOpen(false);
                      }}
                      className={`relative aspect-square rounded-xl border flex items-center justify-center text-xs transition-all ${bgStyle}`}
                    >
                      <span>{idx + 1}</span>
                      {isBookmarked && (
                        <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handleFinishExam}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-red-ruby to-brand-red-bright text-white text-xs font-bold shadow-glow-red"
            >
              ส่งข้อสอบทันที
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
