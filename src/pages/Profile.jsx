import React, { useState } from 'react';
import { BiUser, BiTargetLock, BiTrophy, BiAward, BiShieldQuarter } from 'react-icons/bi';
import { FaGraduationCap } from 'react-icons/fa';
import GlassCard from '../components/GlassCard';

const Profile = ({ userProfile = {}, onSaveProfile, history = [] }) => {
  const [name, setName] = useState(userProfile.name || 'นักเรียน ม.4');
  const [school, setSchool] = useState(userProfile.school || 'โรงเรียนของฉัน');
  const [targetGrade, setTargetGrade] = useState(userProfile.targetGrade || 'A');
  const [avatar, setAvatar] = useState(userProfile.avatar || "https://api.dicebear.com/7.x/pixel-art/svg?seed=kds");
  const [saveSuccess, setSaveSuccess] = useState(false);

  const avatarSeeds = ['kds', 'maria', 'john', 'grace', 'alex', 'lucas', 'emma', 'tom'];

  const handleSave = (e) => {
    e.preventDefault();
    onSaveProfile({
      name,
      school,
      targetGrade,
      avatar
    });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  // Calculate stats for profile level badge
  const totalQuestions = history.reduce((sum, item) => sum + item.totalQuestions, 0);
  const avgAccuracy = history.length > 0
    ? Math.round(history.reduce((sum, item) => sum + (item.score / item.totalQuestions * 100), 0) / history.length)
    : 0;

  const getRankBadge = (count, accuracy) => {
    if (count >= 50 && accuracy >= 80) return { title: "อัจฉริยะ ม.4 ขั้นเทพ", color: "from-amber-500 to-yellow-500 text-amber-300 border-amber-500/30" };
    if (count >= 30 && accuracy >= 70) return { title: "ผู้ชำนาญการสอบกลางภาค", color: "from-purple-600 to-rose-600 text-purple-300 border-purple-500/30" };
    if (count >= 10) return { title: "นักสู้ข้อสอบ ม.4", color: "from-blue-600 to-cyan-600 text-blue-300 border-blue-500/30" };
    return { title: "ผู้เริ่มต้นเตรียมสอบ", color: "from-zinc-700 to-zinc-900 text-zinc-300 border-white/10" };
  };

  const rank = getRankBadge(totalQuestions, avgAccuracy);

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">ข้อมูลส่วนตัวผู้เรียน</h1>
        <p className="text-sm text-brand-text-secondary">แก้ไขชื่อสถานศึกษาเป้าหมาย และตรวจสอบเหรียญตราเกียรติยศของคุณ</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Avatar & Rank Badge Card */}
        <div className="space-y-6">
          <GlassCard hoverEffect={false} className="text-center p-8 space-y-6">
            <div className="relative w-28 h-28 mx-auto">
              <img 
                src={avatar} 
                alt="Profile Avatar" 
                className="w-full h-full rounded-2xl border-2 border-brand-red-bright/40 bg-brand-dark p-1 object-cover"
              />
              <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-brand-dark animate-pulse" />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">{name}</h3>
              <p className="text-xs text-brand-text-secondary">{school}</p>
            </div>

            {/* Rank badge */}
            <div className={`p-3 rounded-xl border bg-gradient-to-r ${rank.color} text-xs font-bold flex items-center justify-center gap-1.5 shadow-md`}>
              <BiShieldQuarter className="text-base animate-bounce" />
              <span>ระดับ: {rank.title}</span>
            </div>
          </GlassCard>

          {/* Quick stats brief */}
          <GlassCard hoverEffect={false} className="p-6 space-y-4">
            <h4 className="text-xs font-bold tracking-wider text-brand-text-secondary uppercase">สมรรถนะการเรียนสะสม</h4>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 bg-white/[0.01] border border-white/5 rounded-xl">
                <span className="text-xl font-bold text-white block">{totalQuestions}</span>
                <span className="text-[9px] text-brand-text-muted">ข้อที่ทำเสร็จ</span>
              </div>
              <div className="p-3 bg-white/[0.01] border border-white/5 rounded-xl">
                <span className="text-xl font-bold text-green-400 block">{avgAccuracy}%</span>
                <span className="text-[9px] text-brand-text-muted">ความแม่นยำ</span>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Right: Edit form & Avatar Selection */}
        <div className="lg:col-span-2">
          <GlassCard hoverEffect={false} className="p-8 space-y-6">
            <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2 uppercase">ตั้งค่าข้อมูลส่วนตัว</h3>

            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-text-secondary flex items-center gap-1">
                    <BiUser />
                    <span>ชื่อ-นามสกุล</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl glass-input text-xs"
                    placeholder="กรอกชื่อ-นามสกุลของคุณ"
                  />
                </div>

                {/* School Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-text-secondary flex items-center gap-1">
                    <FaGraduationCap />
                    <span>โรงเรียน / สถานศึกษา</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl glass-input text-xs"
                    placeholder="กรอกชื่อโรงเรียน"
                  />
                </div>
              </div>

              {/* Target Grade Input */}
              <div className="space-y-2 max-w-xs">
                <label className="text-xs font-bold text-brand-text-secondary flex items-center gap-1">
                  <BiTargetLock />
                  <span>เป้าหมายเกรดกลางภาค</span>
                </label>
                <select
                  value={targetGrade}
                  onChange={(e) => setTargetGrade(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white focus:outline-none focus:border-brand-red-bright text-xs cursor-pointer"
                >
                  <option value="S" className="bg-brand-dark">เกรด S (คะแนนเต็ม 100%)</option>
                  <option value="A" className="bg-brand-dark">เกรด A (คะแนนมากกว่า 80%)</option>
                  <option value="B" className="bg-brand-dark">เกรด B (คะแนนมากกว่า 70%)</option>
                  <option value="C" className="bg-brand-dark">เกรด C (ผ่านเกณฑ์มาตรฐาน)</option>
                </select>
              </div>

              {/* Avatar Selector Grid */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-brand-text-secondary">เลือกรูปโปรไฟล์ (Avatar)</label>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                  {avatarSeeds.map((seed) => {
                    const avatarUrl = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${seed}`;
                    const selected = avatar === avatarUrl;
                    return (
                      <button
                        key={seed}
                        type="button"
                        onClick={() => setAvatar(avatarUrl)}
                        className={`aspect-square rounded-xl p-1 bg-brand-dark border-2 transition-all hover:scale-105 ${
                          selected ? 'border-brand-red-bright bg-brand-red-ruby/20' : 'border-white/5'
                        }`}
                      >
                        <img src={avatarUrl} alt={seed} className="w-full h-full rounded-lg" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-between items-center pt-4 border-t border-white/5">
                {saveSuccess ? (
                  <span className="text-xs font-bold text-green-400 animate-pulse">
                    ✓ บันทึกการเปลี่ยนแปลงเรียบร้อย!
                  </span>
                ) : (
                  <span />
                )}
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-brand-red-ruby to-brand-red-bright hover:shadow-glow-red hover:scale-105 text-white font-bold text-xs rounded-xl transition-all"
                >
                  บันทึกข้อมูล
                </button>
              </div>
            </form>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Profile;
