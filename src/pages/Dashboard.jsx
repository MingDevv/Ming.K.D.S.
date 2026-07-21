import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement, 
  RadialLinearScale, 
  ArcElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
} from 'chart.js';
import { Radar, Pie, Bar } from 'react-chartjs-2';
import { 
  BiTrophy, 
  BiCheckCircle, 
  BiTimeFive, 
  BiAward
} from 'react-icons/bi';
import { FaFire, FaRocket, FaBrain } from 'react-icons/fa';
import GlassCard from '../components/GlassCard';
import { subjectsData } from '../data';

// Register ChartJS elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Dashboard = ({ history = [], streak = 0 }) => {
  const navigate = useNavigate();

  // --- STATS CALCULATIONS ---
  const totalAttempts = history.length;
  const totalQuestionsDone = history.reduce((sum, item) => sum + item.totalQuestions, 0);
  
  const avgAccuracy = totalAttempts > 0
    ? Math.round(history.reduce((sum, item) => sum + (item.score / item.totalQuestions * 100), 0) / totalAttempts)
    : 0;

  const totalTimeSpent = history.reduce((sum, item) => sum + item.timeSpent, 0); // in seconds
  const totalTimeSpentMins = Math.round(totalTimeSpent / 60);

  // --- SUBJECT STATISTICS FOR CHARTS ---
  const subjectAttemptCounts = { math: 0, earthScience: 0, english: 0, chemistry: 0 };
  const subjectAccuracySum = { math: 0, earthScience: 0, english: 0, chemistry: 0 };
  
  history.forEach(attempt => {
    const subId = attempt.subjectId;
    if (subjectAttemptCounts[subId] !== undefined) {
      subjectAttemptCounts[subId] += 1;
      subjectAccuracySum[subId] += (attempt.score / attempt.totalQuestions) * 100;
    }
  });

  const subjectAverages = {};
  Object.keys(subjectsData).forEach(subId => {
    const count = subjectAttemptCounts[subId];
    subjectAverages[subId] = count > 0 ? Math.round(subjectAccuracySum[subId] / count) : 0;
  });

  // --- CHART CONFIGURATIONS ---
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: '#a1a1aa', font: { family: 'Sarabun, sans-serif', size: 10 } }
      },
      tooltip: {
        titleFont: { family: 'Sarabun, sans-serif' },
        bodyFont: { family: 'Sarabun, sans-serif' }
      }
    },
    scales: {
      r: {
        angleLines: { color: 'rgba(255, 255, 255, 0.08)' },
        grid: { color: 'rgba(255, 255, 255, 0.08)' },
        pointLabels: { color: '#a1a1aa', font: { family: 'Sarabun, sans-serif', size: 9 } },
        ticks: { backdropColor: 'transparent', color: '#71717a', font: { size: 8 } },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  };

  // 1. Radar Chart Data (Subject Accuracy)
  const radarData = {
    labels: ['คณิตศาสตร์', 'โลกและอวกาศ', 'ภาษาอังกฤษ', 'เคมี'],
    datasets: [
      {
        label: 'ความแม่นยำเฉลี่ย (%)',
        data: [
          subjectAverages.math,
          subjectAverages.earthScience,
          subjectAverages.english,
          subjectAverages.chemistry
        ],
        backgroundColor: 'rgba(230, 30, 42, 0.2)',
        borderColor: '#e61e2a',
        borderWidth: 2,
        pointBackgroundColor: '#ff3b47',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#e61e2a'
      }
    ]
  };

  // 2. Pie Chart Data (Attempt Distributions)
  const pieData = {
    labels: ['คณิตศาสตร์', 'โลกและอวกาศ', 'ภาษาอังกฤษ', 'เคมี'],
    datasets: [
      {
        label: 'จำนวนการทำข้อสอบ (ครั้ง)',
        data: [
          subjectAttemptCounts.math,
          subjectAttemptCounts.earthScience,
          subjectAttemptCounts.english,
          subjectAttemptCounts.chemistry
        ],
        backgroundColor: [
          'rgba(239, 68, 68, 0.6)',   // Red
          'rgba(225, 29, 72, 0.6)',   // Rose
          'rgba(190, 24, 74, 0.6)',   // Pink/Magenta
          'rgba(127, 29, 29, 0.6)'    // Dark Red
        ],
        borderColor: 'rgba(255, 255, 255, 0.08)',
        borderWidth: 1
      }
    ]
  };

  // 3. Bar Chart Data (Progress of last 5 attempts)
  const recentAttempts = history.slice(-5);
  const barData = {
    labels: recentAttempts.map((_, idx) => `ครั้งที่ ${idx + 1}`),
    datasets: [
      {
        label: 'คะแนน (%)',
        data: recentAttempts.map(item => Math.round((item.score / item.totalQuestions) * 100)),
        backgroundColor: 'rgba(230, 30, 42, 0.75)',
        borderRadius: 8
      }
    ]
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#71717a', font: { family: 'Sarabun, sans-serif' } }
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#71717a', font: { family: 'Sarabun, sans-serif' } },
        min: 0,
        max: 100
      }
    }
  };

  // --- ACHIEVEMENTS / BADGES ---
  const achievements = [
    {
      id: 'first_step',
      name: 'เริ่มก้าวแรก',
      description: 'ทำข้อสอบจำลองสำเร็จ 1 ครั้ง',
      unlocked: totalAttempts >= 1,
      icon: BiAward,
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    },
    {
      id: 'expert',
      name: 'คะแนนดีเลิศ',
      description: 'ได้เกรด A หรือ S ในวิชาใดๆ',
      unlocked: history.some(item => (item.score / item.totalQuestions) >= 0.8),
      icon: BiTrophy,
      color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20'
    },
    {
      id: 'speed_runner',
      name: 'ความเร็วแสง',
      description: 'ทำข้อสอบเร็วเฉลี่ยไม่เกิน 90 วิ/ข้อ',
      unlocked: totalAttempts > 0 && (totalTimeSpent / totalQuestionsDone) <= 90,
      icon: FaRocket,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      id: 'marathon',
      name: 'สมองเพชร',
      description: 'ทำโจทย์สะสมครบ 50 ข้อขึ้นไป',
      unlocked: totalQuestionsDone >= 50,
      icon: FaBrain,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">แผงควบคุมความคืบหน้า</h1>
        <p className="text-sm text-brand-text-secondary">วิเคราะห์ภาพรวมการเรียน ผลสัมฤทธิ์ และความคืบหน้าของแนวข้อสอบสะสม</p>
      </div>

      {/* Grid Status Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <GlassCard hoverEffect={false} className="flex items-center gap-4">
          <div className="p-3 bg-brand-red-ruby/20 border border-brand-red-bright/20 rounded-xl text-brand-red-glow">
            <FaFire className="text-xl text-amber-500 animate-pulse" />
          </div>
          <div>
            <p className="text-[10px] text-brand-text-secondary">ความพยายามต่อเนื่อง</p>
            <h4 className="text-xl font-bold text-white">{streak} วัน</h4>
          </div>
        </GlassCard>

        <GlassCard hoverEffect={false} className="flex items-center gap-4">
          <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-yellow-500">
            <BiTrophy className="text-2xl" />
          </div>
          <div>
            <p className="text-[10px] text-brand-text-secondary">จำนวนข้อสอบที่ทำ</p>
            <h4 className="text-xl font-bold text-white">{totalQuestionsDone} ข้อ</h4>
          </div>
        </GlassCard>

        <GlassCard hoverEffect={false} className="flex items-center gap-4">
          <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400">
            <BiCheckCircle className="text-2xl" />
          </div>
          <div>
            <p className="text-[10px] text-brand-text-secondary">ความถูกต้องเฉลี่ย</p>
            <h4 className="text-xl font-bold text-green-400">{avgAccuracy}%</h4>
          </div>
        </GlassCard>

        <GlassCard hoverEffect={false} className="flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400">
            <BiTimeFive className="text-2xl" />
          </div>
          <div>
            <p className="text-[10px] text-brand-text-secondary">เวลาที่สะสมในระบบ</p>
            <h4 className="text-xl font-bold text-white">{totalTimeSpentMins} นาที</h4>
          </div>
        </GlassCard>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Radar subject proficiency */}
        <GlassCard hoverEffect={false} className="h-96 flex flex-col justify-between">
          <h3 className="text-xs font-semibold text-brand-text-secondary tracking-wider uppercase mb-2">ความสามารถรายวิชา (Proficiency)</h3>
          <div className="flex-1 min-h-0 relative">
            {totalAttempts > 0 ? (
              <Radar data={radarData} options={chartOptions} />
            ) : (
              <div className="h-full flex items-center justify-center text-xs text-brand-text-muted italic">ไม่มีประวัติจำลองสอบเพื่อวาดกราฟ</div>
            )}
          </div>
        </GlassCard>

        {/* Pie subject attempt counts */}
        <GlassCard hoverEffect={false} className="h-96 flex flex-col justify-between">
          <h3 className="text-xs font-semibold text-brand-text-secondary tracking-wider uppercase mb-2">สัดส่วนการจำลองสอบ (Attempts)</h3>
          <div className="flex-1 min-h-0 relative">
            {totalAttempts > 0 ? (
              <Pie 
                data={pieData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                      labels: { color: '#a1a1aa', font: { family: 'Sarabun, sans-serif', size: 9 } }
                    }
                  }
                }} 
              />
            ) : (
              <div className="h-full flex items-center justify-center text-xs text-brand-text-muted italic">ไม่มีประวัติจำลองสอบเพื่อวาดกราฟ</div>
            )}
          </div>
        </GlassCard>

        {/* Bar progress progression */}
        <GlassCard hoverEffect={false} className="h-96 flex flex-col justify-between">
          <h3 className="text-xs font-semibold text-brand-text-secondary tracking-wider uppercase mb-2">ประวัติการทำข้อสอบ 5 ครั้งล่าสุด</h3>
          <div className="flex-1 min-h-0 relative">
            {totalAttempts > 0 ? (
              <Bar data={barData} options={barOptions} />
            ) : (
              <div className="h-full flex items-center justify-center text-xs text-brand-text-muted italic">ไม่มีประวัติจำลองสอบเพื่อวาดกราฟ</div>
            )}
          </div>
        </GlassCard>
      </div>

      {/* Achievement & Badges */}
      <GlassCard hoverEffect={false} className="space-y-6">
        <div>
          <h3 className="text-xs font-semibold text-brand-text-secondary tracking-wider uppercase mb-1">ความสำเร็จและตราสัญลักษณ์ (Achievements)</h3>
          <p className="text-[10px] text-brand-text-muted">ปลดล็อกเหรียญรางวัลพิเศษจากการฝึกฝนและทำสถิติคะแนนดีเลิศ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((ach) => {
            const BadgeIcon = ach.icon;
            return (
              <div 
                key={ach.id}
                className={`p-4 rounded-xl border flex items-start gap-3 transition-all ${
                  ach.unlocked 
                    ? `${ach.color} shadow-sm` 
                    : 'bg-white/[0.01] border-white/5 opacity-40'
                }`}
              >
                <div className={`p-2.5 rounded-lg border ${ach.unlocked ? 'border-current' : 'border-white/5'} flex-shrink-0`}>
                  <BadgeIcon className="text-xl" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white">{ach.name}</h4>
                  <p className="text-[10px] text-brand-text-secondary leading-relaxed">{ach.description}</p>
                  <span className="text-[8px] font-bold uppercase block pt-1">
                    {ach.unlocked ? '✅ ปลดล็อกแล้ว' : '🔒 ล็อกอยู่'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </GlassCard>
    </div>
  );
};

export default Dashboard;
