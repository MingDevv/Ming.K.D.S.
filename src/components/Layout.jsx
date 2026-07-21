import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BiHome, 
  BiGridAlt, 
  BiBookOpen, 
  BiFile, 
  BiGitBranch, 
  BiLayer, 
  BiTask, 
  BiBarChartAlt2, 
  BiUser, 
  BiCog, 
  BiMenu, 
  BiX,
  BiSun,
  BiMoon
} from 'react-icons/bi';
import { FaFire } from 'react-icons/fa';

const Layout = ({ children, streak = 0, userProfile = {}, theme = 'dark', onToggleTheme }) => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'หน้าแรก (Home)', icon: BiHome },
    { path: '/dashboard', label: 'แผงควบคุม (Dashboard)', icon: BiGridAlt },
    { path: '/select-subject', label: 'เลือกวิชา (Select Subject)', icon: BiBookOpen },
    { path: '/cheat-sheet', label: 'สรุปสูตร (Cheat Sheet)', icon: BiFile },
    { path: '/mind-map', label: 'แผนผังความคิด (Mind Map)', icon: BiGitBranch },
    { path: '/flash-cards', label: 'บัตรคำศัพท์ (Flash Cards)', icon: BiLayer },
    { path: '/quiz', label: 'ทำข้อสอบ (Quiz)', icon: BiTask },
    { path: '/statistics', label: 'สถิติการเรียน (Statistics)', icon: BiBarChartAlt2 },
    { path: '/profile', label: 'ข้อมูลส่วนตัว (Profile)', icon: BiUser },
    { path: '/settings', label: 'ตั้งค่า (Settings)', icon: BiCog },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex text-white relative">
      {/* Mobile Top Navbar */}
      <header className="md:hidden w-full h-16 fixed top-0 left-0 glass z-40 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl">📕</span>
          <span className="font-bold tracking-wider text-sm bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-red-bright">By K.D.S.</span>
        </div>
        <div className="flex items-center gap-2">
          {/* Theme Switcher Button Mobile */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-brand-text-secondary hover:text-white"
            title="สลับโหมดมืด/สว่าง"
          >
            {theme === 'dark' ? <BiSun className="text-lg text-amber-400" /> : <BiMoon className="text-lg text-indigo-400" />}
          </button>

          {streak > 0 && (
            <div className="flex items-center gap-1 bg-brand-red-deep/40 border border-brand-red-bright/20 px-2 py-0.5 rounded-full text-xs font-semibold text-brand-red-glow">
              <FaFire className="text-xs animate-pulse text-amber-500" />
              <span>{streak} วัน</span>
            </div>
          )}
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-1 rounded-md text-gray-400 hover:text-white focus:outline-none"
          >
            {isMobileOpen ? <BiX className="text-2xl" /> : <BiMenu className="text-2xl" />}
          </button>
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 fixed inset-y-0 left-0 glass border-r border-white/5 z-30">
        {/* Logo & Theme Switcher */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-white/5">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📕</span>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm tracking-wider text-glow-red text-gradient-red uppercase">แนวข้อสอบกลางภาค</span>
              <span className="text-[10px] text-brand-text-secondary tracking-widest uppercase">By K.D.S. Education</span>
            </div>
          </Link>

          {/* Theme Switcher Button Desktop */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-brand-text-secondary hover:text-white hover:scale-105 transition-all"
            title="สลับโหมดมืด (Dark) / โหมดสว่าง (Light)"
          >
            {theme === 'dark' ? <BiSun className="text-lg text-amber-400" /> : <BiMoon className="text-lg text-indigo-500" />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto space-y-1 scrollbar-none">
          {menuItems.map((item) => {
            const ActiveIcon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative ${
                  active 
                    ? 'bg-brand-red-ruby/20 text-white font-medium border-l-4 border-brand-red-bright shadow-glow-red' 
                    : 'text-brand-text-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                <ActiveIcon className={`text-xl transition-transform duration-300 group-hover:scale-110 ${active ? 'text-brand-red-glow' : 'text-brand-text-muted group-hover:text-brand-red-glow'}`} />
                <span className="text-xs tracking-wide">{item.label}</span>
                {active && (
                  <span className="absolute right-3 w-1.5 h-1.5 rounded-full bg-brand-red-glow animate-ping" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Card */}
        <div className="p-4 border-t border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src={userProfile.avatar || "https://api.dicebear.com/7.x/pixel-art/svg?seed=kds"} 
                alt="Avatar" 
                className="w-10 h-10 rounded-xl border border-brand-red-bright/30 bg-brand-dark object-cover"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-brand-dark animate-pulse" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-semibold truncate text-white">{userProfile.name || 'นักเรียน ม.4'}</h4>
              <p className="text-[10px] text-brand-text-muted truncate">{userProfile.school || 'โรงเรียนของฉัน'}</p>
            </div>
            {streak > 0 && (
              <div className="flex flex-col items-center justify-center bg-brand-red-ruby/30 border border-brand-red-bright/20 p-1.5 rounded-lg text-brand-red-glow" title="Streak เรียนต่อเนื่อง">
                <FaFire className="text-sm animate-pulse text-amber-500" />
                <span className="text-[8px] font-bold">{streak}d</span>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile Drawer menu */}
      {isMobileOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsMobileOpen(false)}
        >
          <aside 
            className="w-64 h-full glass border-r border-white/10 flex flex-col z-50 animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-16 flex justify-between items-center px-4 border-b border-white/5 bg-brand-dark/20">
              <div className="flex items-center gap-2">
                <span>📕</span>
                <span className="font-extrabold text-sm text-gradient-red">K.D.S. ติวสอบ</span>
              </div>
              <button onClick={() => setIsMobileOpen(false)} className="p-1 text-brand-text-muted hover:text-white">
                <BiX className="text-2xl" />
              </button>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {menuItems.map((item) => {
                const ActiveIcon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${
                      active 
                        ? 'bg-brand-red-ruby/20 text-white font-medium border-l-4 border-brand-red-bright shadow-glow-red' 
                        : 'text-brand-text-secondary hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <ActiveIcon className={`text-xl ${active ? 'text-brand-red-glow' : 'text-brand-text-muted'}`} />
                    <span className="text-xs tracking-wide">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <img 
                  src={userProfile.avatar || "https://api.dicebear.com/7.x/pixel-art/svg?seed=kds"} 
                  alt="Avatar" 
                  className="w-9 h-9 rounded-lg border border-brand-red-bright/30"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-semibold truncate">{userProfile.name || 'นักเรียน ม.4'}</h4>
                  <p className="text-[9px] text-brand-text-muted truncate">{userProfile.school || 'โรงเรียนของฉัน'}</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 min-h-screen flex flex-col md:pl-64 pt-16 md:pt-0 overflow-x-hidden">
        <div className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
