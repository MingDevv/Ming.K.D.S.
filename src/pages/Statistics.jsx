import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BiCalendar, 
  BiTrophy, 
  BiTimeFive, 
  BiChevronRight,
  BiTrendingUp,
  BiTrash
} from 'react-icons/bi';
import GlassCard from '../components/GlassCard';
import { subjectsData } from '../data';

const Statistics = ({ history = [], onClearHistory }) => {
  const navigate = useNavigate();
  const [filterSubject, setFilterSubject] = useState('all');

  // Filter attempts
  const filteredHistory = history.filter(item => {
    if (filterSubject === 'all') return true;
    return item.subjectId === filterSubject;
  }).reverse(); // Latest attempts first

  // Summary statistics for active filter
  const totalAttempts = filteredHistory.length;
  const avgScorePercent = totalAttempts > 0
    ? Math.round(filteredHistory.reduce((sum, item) => sum + (item.score / item.totalQuestions * 100), 0) / totalAttempts)
    : 0;

  const avgTimeSpent = totalAttempts > 0
    ? Math.round(filteredHistory.reduce((sum, item) => sum + item.timeSpent, 0) / totalAttempts)
    : 0;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  const getSubjectColor = (subId) => {
    return subjectsData[subId]?.color || 'from-zinc-700 to-zinc-900';
  };

  return (
    <div className="space-y-8">
      {/* Title Panel */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2">สถิติและประวัติการสอบ</h1>
          <p className="text-sm text-brand-text-secondary">ประเมินวิวัฒนาการเรียนรู้ ตรวจสอบความถูกต้องเฉลี่ยสะสมรายวิชา</p>
        </div>
        {history.length > 0 && (
          <button
            onClick={() => {
              if (window.confirm("คุณแน่ใจว่าต้องการล้างประวัติผลการสอบทั้งหมด? ข้อมูลสะสมจะถูกลบถาวร")) {
                onClearHistory();
              }
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-red-ruby/20 border border-brand-red-bright/20 hover:bg-brand-red-bright/20 transition-all text-brand-red-glow text-xs font-semibold"
          >
            <BiTrash />
            <span>ล้างประวัติทั้งหมด</span>
          </button>
        )}
      </div>

      {/* Filter tab buttons */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setFilterSubject('all')}
          className={`px-4 py-2 text-xs font-bold rounded-lg border whitespace-nowrap transition-all ${
            filterSubject === 'all'
              ? 'bg-brand-red-ruby/30 border-brand-red-bright text-brand-red-glow'
              : 'bg-white/5 border-white/5 text-brand-text-secondary hover:bg-white/10'
          }`}
        >
          ทั้งหมด
        </button>
        {Object.values(subjectsData).map(sub => (
          <button
            key={sub.id}
            onClick={() => setFilterSubject(sub.id)}
            className={`px-4 py-2 text-xs font-bold rounded-lg border whitespace-nowrap transition-all ${
              filterSubject === sub.id
                ? 'bg-brand-red-ruby/30 border-brand-red-bright text-brand-red-glow'
                : 'bg-white/5 border-white/5 text-brand-text-secondary hover:bg-white/10'
            }`}
          >
            {sub.name}
          </button>
        ))}
      </div>

      {/* Summary boxes under active filter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard hoverEffect={false} className="flex items-center gap-4 p-5">
          <div className="p-3 bg-brand-red-bright/10 border border-brand-red-bright/20 text-brand-red-glow rounded-xl">
            <BiTrendingUp className="text-2xl" />
          </div>
          <div>
            <p className="text-[10px] text-brand-text-secondary">ความพยายามในหมวดนี้</p>
            <h4 className="text-xl font-bold text-white">{totalAttempts} ครั้ง</h4>
          </div>
        </GlassCard>

        <GlassCard hoverEffect={false} className="flex items-center gap-4 p-5">
          <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl">
            <BiTrophy className="text-2xl" />
          </div>
          <div>
            <p className="text-[10px] text-brand-text-secondary">ความถูกต้องเฉลี่ย</p>
            <h4 className="text-xl font-bold text-green-400">{avgScorePercent}%</h4>
          </div>
        </GlassCard>

        <GlassCard hoverEffect={false} className="flex items-center gap-4 p-5">
          <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl">
            <BiTimeFive className="text-2xl" />
          </div>
          <div>
            <p className="text-[10px] text-brand-text-secondary">เวลาเฉลี่ยต่อการสอบ</p>
            <h4 className="text-xl font-bold text-white">{formatTime(avgTimeSpent)}</h4>
          </div>
        </GlassCard>
      </div>

      {/* History List Table */}
      <GlassCard hoverEffect={false} className="p-0 overflow-hidden">
        <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
          <h3 className="text-xs font-bold text-white tracking-wider uppercase">บันทึกประวัติการสอบ</h3>
          <span className="text-[10px] text-brand-text-muted">คลิกรายการเพื่อทบทวนผลสอบ</span>
        </div>

        {filteredHistory.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/[0.01] text-[10px] text-brand-text-muted font-bold uppercase tracking-wider border-b border-white/5">
                  <th className="py-4 px-6">วันที่สอบ</th>
                  <th className="py-4 px-6">วิชา</th>
                  <th className="py-4 px-6 text-center">คะแนน</th>
                  <th className="py-4 px-6 text-center">ความแม่นยำ</th>
                  <th className="py-4 px-6">เวลาที่ใช้</th>
                  <th className="py-4 px-6"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs">
                {filteredHistory.map((item) => {
                  const percent = Math.round((item.score / item.totalQuestions) * 100);
                  const sub = subjectsData[item.subjectId];
                  return (
                    <tr 
                      key={item.id}
                      onClick={() => navigate(`/result?id=${item.id}`)}
                      className="hover:bg-white/[0.02] cursor-pointer transition-colors group"
                    >
                      <td className="py-4 px-6 text-brand-text-secondary font-medium">
                        <div className="flex items-center gap-2">
                          <BiCalendar className="text-brand-text-muted text-sm" />
                          <span>{item.date}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[9px] font-bold text-white bg-gradient-to-r ${getSubjectColor(item.subjectId)}`}>
                          {sub?.name || item.subjectId}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center font-bold text-white">
                        {item.score} <span className="text-[10px] text-brand-text-muted">/ {item.totalQuestions}</span>
                      </td>
                      <td className="py-4 px-6 text-center font-mono font-bold">
                        <span className={percent >= 80 ? 'text-green-400' : percent >= 60 ? 'text-yellow-400' : 'text-brand-red-glow'}>
                          {percent}%
                        </span>
                      </td>
                      <td className="py-4 px-6 text-brand-text-secondary font-mono">
                        {formatTime(item.timeSpent)}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <BiChevronRight className="text-lg text-brand-text-muted group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-16 text-center space-y-4">
            <p className="text-xs text-brand-text-muted italic">ไม่มีประวัติจำลองสอบในหมวดวิชานี้</p>
            <button
              onClick={() => navigate('/select-subject')}
              className="px-4 py-2 rounded-xl bg-brand-red-bright text-white text-xs font-semibold hover:shadow-glow-red transition-all"
            >
              เริ่มต้นทำข้อสอบครั้งแรก
            </button>
          </div>
        )}
      </GlassCard>
    </div>
  );
};

export default Statistics;
