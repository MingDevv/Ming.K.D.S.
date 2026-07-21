import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Layout from './components/Layout';

// Import Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SelectSubject from './pages/SelectSubject';
import CheatSheet from './pages/CheatSheet';
import MindMap from './pages/MindMap';
import FlashCards from './pages/FlashCards';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Review from './pages/Review';
import Statistics from './pages/Statistics';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

const App = () => {
  // --- THEME STATE ---
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('kds_theme');
      return savedTheme || 'dark';
    } catch {
      return 'dark';
    }
  });

  // Toggle Theme Handler
  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    try {
      localStorage.setItem('kds_theme', theme);
    } catch (e) {
      console.error(e);
    }

    if (theme === 'light') {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [theme]);

  // --- LOCALSTORAGE PERSISTENCE STATES ---
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('kds_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [userProfile, setUserProfile] = useState(() => {
    try {
      const saved = localStorage.getItem('kds_profile');
      return saved ? JSON.parse(saved) : {
        name: 'นักเรียน ม.4',
        school: 'โรงเรียนของฉัน',
        targetGrade: 'A',
        avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=kds'
      };
    } catch {
      return {
        name: 'นักเรียน ม.4',
        school: 'โรงเรียนของฉัน',
        targetGrade: 'A',
        avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=kds'
      };
    }
  });

  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('kds_settings');
      return saved ? JSON.parse(saved) : { soundEnabled: true, animationsEnabled: true };
    } catch {
      return { soundEnabled: true, animationsEnabled: true };
    }
  });

  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('kds_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [streak, setStreak] = useState(() => {
    try {
      const saved = localStorage.getItem('kds_streak');
      return saved ? Number(saved) : 1;
    } catch {
      return 1;
    }
  });

  // Save changes to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('kds_history', JSON.stringify(history));
    } catch (e) {
      console.error(e);
    }
  }, [history]);

  useEffect(() => {
    try {
      localStorage.setItem('kds_profile', JSON.stringify(userProfile));
    } catch (e) {
      console.error(e);
    }
  }, [userProfile]);

  useEffect(() => {
    try {
      localStorage.setItem('kds_settings', JSON.stringify(settings));
    } catch (e) {
      console.error(e);
    }
  }, [settings]);

  useEffect(() => {
    try {
      localStorage.setItem('kds_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarks]);

  useEffect(() => {
    try {
      localStorage.setItem('kds_streak', streak.toString());
    } catch (e) {
      console.error(e);
    }
  }, [streak]);

  // --- HANDLERS ---
  const handleAddAttempt = (newAttempt) => {
    setHistory(prev => [...prev, newAttempt]);

    // Check streak
    const lastDate = localStorage.getItem('kds_last_active_date');
    const today = new Date().toISOString().split('T')[0];

    if (lastDate !== today) {
      localStorage.setItem('kds_last_active_date', today);
      if (!lastDate) {
        setStreak(1);
      } else {
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        if (lastDate === yesterday) {
          setStreak(prev => prev + 1);
        } else {
          setStreak(1);
        }
      }
    }
  };

  const handleSaveProfile = (updated) => {
    setUserProfile(updated);
  };

  const handleSaveSettings = (updated) => {
    setSettings(updated);
  };

  const handleToggleBookmark = (questionId) => {
    setBookmarks(prev => {
      if (prev.includes(questionId)) {
        return prev.filter(id => id !== questionId);
      } else {
        return [...prev, questionId];
      }
    });
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  const handleResetAllData = () => {
    localStorage.clear();
    setHistory([]);
    setBookmarks([]);
    setStreak(1);
    setTheme('dark');
    setUserProfile({
      name: 'นักเรียน ม.4',
      school: 'โรงเรียนของฉัน',
      targetGrade: 'A',
      avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=kds'
    });
    setSettings({ soundEnabled: true, animationsEnabled: true });
  };

  return (
    <Router>
      <Background theme={theme} />
      <Layout streak={streak} userProfile={userProfile} theme={theme} onToggleTheme={handleToggleTheme}>
        <Routes>
          <Route path="/" element={<Home streak={streak} history={history} />} />
          <Route path="/dashboard" element={<Dashboard history={history} streak={streak} />} />
          <Route path="/select-subject" element={<SelectSubject history={history} />} />
          <Route path="/cheat-sheet" element={<CheatSheet />} />
          <Route path="/mind-map" element={<MindMap />} />
          <Route path="/flash-cards" element={<FlashCards />} />
          <Route 
            path="/quiz" 
            element={
              <Quiz 
                onAddAttempt={handleAddAttempt} 
                bookmarks={bookmarks} 
                onToggleBookmark={handleToggleBookmark} 
                settings={settings} 
              />
            } 
          />
          <Route path="/result" element={<Result history={history} />} />
          <Route path="/review" element={<Review history={history} />} />
          <Route path="/statistics" element={<Statistics history={history} onClearHistory={handleClearHistory} />} />
          <Route 
            path="/profile" 
            element={
              <Profile 
                userProfile={userProfile} 
                onSaveProfile={handleSaveProfile} 
                history={history} 
              />
            } 
          />
          <Route 
            path="/settings" 
            element={
              <Settings 
                settings={settings} 
                onSaveSettings={handleSaveSettings} 
                onResetAllData={handleResetAllData}
                theme={theme}
                onToggleTheme={handleToggleTheme}
              />
            } 
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
