import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiCog, BiVolumeFull, BiVolumeMute, BiSlideshow, BiTrash, BiCheckCircle, BiSun, BiMoon } from 'react-icons/bi';
import GlassCard from '../components/GlassCard';

const Settings = ({ settings = {}, onSaveSettings, onResetAllData, theme = 'dark', onToggleTheme }) => {
  const navigate = useNavigate();
  const [soundEnabled, setSoundEnabled] = useState(settings.soundEnabled ?? true);
  const [animationsEnabled, setAnimationsEnabled] = useState(settings.animationsEnabled ?? true);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    onSaveSettings({
      soundEnabled,
      animationsEnabled
    });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleReset = () => {
    if (window.confirm("คำเตือน: คุณต้องการลบผลการสอบประเมิน ประวัติการทำ และข้อมูลผู้เรียนทั้งหมดหรือไม่? การดำเนินการนี้เป็นแบบถาวรและไม่สามารถเรียกคืนข้อมูลได้")) {
      onResetAllData();
      alert("รีเซ็ตข้อมูลผู้ใช้งานเรียบร้อย");
      navigate('/');
    }
  };

  return (
    <div className="space-y-8 max-w-xl mx-auto">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">ตั้งค่าระบบ</h1>
        <p className="text-sm text-brand-text-secondary">ปรับแต่งโหมดสีธีม เสียงนำทาง การแสดงผลภาพเคลื่อนไหว หรือจัดการฐานข้อมูลนักเรียน</p>
      </div>

      {/* Theme Switcher Card */}
      <GlassCard hoverEffect={false} className="p-8 space-y-4">
        <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2 uppercase flex items-center gap-2">
          {theme === 'dark' ? <BiMoon className="text-brand-red-glow text-lg" /> : <BiSun className="text-amber-500 text-lg" />}
          <span>ธีมสีและการแสดงผล (Theme Mode)</span>
        </h3>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <button
            type="button"
            onClick={() => { if (theme !== 'dark') onToggleTheme(); }}
            className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center gap-2 ${
              theme === 'dark'
                ? 'bg-brand-red-ruby/30 border-brand-red-bright text-white shadow-glow-red font-bold'
                : 'bg-white/5 border-white/5 text-brand-text-secondary hover:bg-white/10'
            }`}
          >
            <BiMoon className="text-2xl text-brand-red-glow" />
            <div className="text-xs">
              <span className="block font-bold">โหมดมืด (Dark Mode)</span>
              <span className="text-[9px] text-brand-text-muted">สีดำออปซิเดียน สลับสีแดงทับทิม</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => { if (theme !== 'light') onToggleTheme(); }}
            className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center gap-2 ${
              theme === 'light'
                ? 'bg-rose-500/20 border-rose-500 text-slate-800 shadow-sm font-bold'
                : 'bg-white/5 border-white/5 text-brand-text-secondary hover:bg-white/10'
            }`}
          >
            <BiSun className="text-2xl text-amber-500" />
            <div className="text-xs">
              <span className="block font-bold">โหมดสว่าง (Light Mode)</span>
              <span className="text-[9px] text-brand-text-muted">สีขาวคลีน สบายตา มินิมอล Apple UI</span>
            </div>
          </button>
        </div>
      </GlassCard>

      <GlassCard hoverEffect={false} className="p-8 space-y-6">
        <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2 uppercase flex items-center gap-2">
          <BiCog className="text-brand-red-glow text-lg" />
          <span>การปรับแต่งแอปพลิเคชัน</span>
        </h3>

        <form onSubmit={handleSave} className="space-y-6">
          {/* Sound Toggle */}
          <div className="flex justify-between items-center p-4 rounded-xl bg-white/[0.01] border border-white/5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg text-brand-text-secondary">
                {soundEnabled ? <BiVolumeFull className="text-xl" /> : <BiVolumeMute className="text-xl" />}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">เสียงเอฟเฟกต์การใช้งาน (Audio)</span>
                <span className="text-[9px] text-brand-text-muted">เล่นเสียงสั้นเวลากดปุ่ม พลิกการ์ด หรือส่งคะแนนสอบ</span>
              </div>
            </div>
            <input 
              type="checkbox" 
              checked={soundEnabled} 
              onChange={(e) => setSoundEnabled(e.target.checked)}
              className="w-4 h-4 text-brand-red-bright accent-brand-red-bright focus:ring-0 bg-brand-dark border-white/10 cursor-pointer"
            />
          </div>

          {/* Animation Toggle */}
          <div className="flex justify-between items-center p-4 rounded-xl bg-white/[0.01] border border-white/5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg text-brand-text-secondary">
                <BiSlideshow className="text-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">อนิเมชั่นและการแสดงผลเคลื่อนไหว (Effects)</span>
                <span className="text-[9px] text-brand-text-muted">แสดงคลื่นสะเทือนไหลเวียนและเอฟเฟกต์สั่นลอย (Framer Motion)</span>
              </div>
            </div>
            <input 
              type="checkbox" 
              checked={animationsEnabled} 
              onChange={(e) => setAnimationsEnabled(e.target.checked)}
              className="w-4 h-4 text-brand-red-bright accent-brand-red-bright focus:ring-0 bg-brand-dark border-white/10 cursor-pointer"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-between items-center pt-4 border-t border-white/5">
            {saveSuccess ? (
              <span className="text-xs font-bold text-green-400 flex items-center gap-1">
                <BiCheckCircle />
                <span>บันทึกการตั้งค่าแล้ว</span>
              </span>
            ) : (
              <span />
            )}
            <button
              type="submit"
              className="px-6 py-2.5 bg-gradient-to-r from-brand-red-ruby to-brand-red-bright hover:shadow-glow-red hover:scale-105 text-white font-bold text-xs rounded-xl transition-all"
            >
              บันทึกการปรับเปลี่ยน
            </button>
          </div>
        </form>
      </GlassCard>

      {/* Danger Zone */}
      <GlassCard hoverEffect={false} className="p-8 border border-red-900/30 bg-red-950/5 space-y-4">
        <h3 className="text-sm font-bold text-red-500 uppercase">พื้นที่อันตราย (Danger Zone)</h3>
        <p className="text-xs text-brand-text-secondary leading-relaxed">
          หากคุณต้องการรีเซ็ตแอปและล้างข้อมูลความพยายามทั้งหมด ประวัติการทำข้อสอบ บ bookmarks และโปรไฟล์กลับสู่ค่าเริ่มต้นจากโรงงาน สามารถล้างได้โดยใช้ปุ่มด้านล่างนี้
        </p>
        <button
          onClick={handleReset}
          className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-red-deep/40 border border-brand-red-bright/20 hover:bg-brand-red-bright/25 transition-all text-brand-red-glow text-xs font-bold"
        >
          <BiTrash className="text-sm" />
          <span>ลบประวัติและข้อมูลระบบทั้งหมด</span>
        </button>
      </GlassCard>
    </div>
  );
};

export default Settings;
