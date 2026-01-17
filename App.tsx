
import React, { useState, useEffect } from 'react';
import { Crown, Globe, Menu } from 'lucide-react';
import { INITIAL_CONFIG, INITIAL_CONTENT, SAMPLE_POSTS, SAMPLE_EVENTS, TRANSLATIONS } from './constants';
import { Language, SiteConfig, SiteContent, Post, EducationEvent } from './types';
import { Button } from './components/Button';
import { Calendar } from './components/Calendar';
import { AdminDashboard } from './components/AdminDashboard';
import { ContactSection } from './components/ContactSection';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('KOR');
  const [activePage, setActivePage] = useState<'home' | 'news' | 'coaching' | 'schedule' | 'admin'>('home');
  const [siteConfig] = useState<SiteConfig>(INITIAL_CONFIG);
  const [siteContent] = useState<SiteContent>(INITIAL_CONTENT);
  const [posts] = useState<Post[]>(SAMPLE_POSTS);
  const [events] = useState<EducationEvent[]>(SAMPLE_EVENTS);

  return (
    <div className="relative min-h-screen text-white">
      <div className="ambient-bg" />
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-[#D4AF37]/20 h-20 flex items-center justify-between px-6">
        <div className="text-2xl font-black gold-glow flex items-center gap-2 uppercase tracking-tighter cursor-pointer" onClick={() => setActivePage('home')}>
          <Crown className="text-[#D4AF37]" /> ARTonTOK
        </div>
        <div className="flex gap-6 items-center">
          <button onClick={() => setActivePage('news')} className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-[#D4AF37]">News</button>
          <button onClick={() => setActivePage('schedule')} className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-[#D4AF37]">Schedule</button>
          <button onClick={() => setLang(lang === 'KOR' ? 'ENG' : 'KOR')} className="text-[10px] font-black border border-[#D4AF37] px-3 py-1 rounded-full text-[#D4AF37]">
            {lang === 'KOR' ? 'ENGLISH' : 'KOREAN'}
          </button>
        </div>
      </nav>

      <main className="pt-20">
        {activePage === 'home' && (
          <section className="h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl md:text-7xl font-black mb-8 gold-glow whitespace-pre-wrap">
              {siteContent.heroTitle[lang]}
            </h1>
            <div className="flex flex-col gap-4">
              <Button size="lg" className="w-64" onClick={() => setActivePage('coaching')}>{TRANSLATIONS.btnExploreCoaching[lang]}</Button>
              <Button variant="outline" size="lg" className="w-64" onClick={() => setActivePage('schedule')}>{TRANSLATIONS.btnJoinClub[lang]}</Button>
            </div>
          </section>
        )}
        {activePage === 'schedule' && <div className="py-20 px-6"><Calendar events={events} language={lang} onSelectEvent={() => {}} /></div>}
        {activePage === 'admin' && <AdminDashboard config={siteConfig} content={siteContent} posts={posts} onSaveConfig={() => {}} onSaveContent={() => {}} onAddPost={() => {}} onDeletePost={() => {}} />}
      </main>
    </div>
  );
};

export default App;
