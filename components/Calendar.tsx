
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EducationEvent, Language } from '../types';

interface CalendarProps {
  events: EducationEvent[];
  language: Language;
  onSelectEvent: (event: EducationEvent) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ events, language, onSelectEvent }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1));

  const totalDays = daysInMonth(year, month);
  const startDay = firstDayOfMonth(year, month);

  const monthNames = {
    KOR: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
    ENG: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
  };

  const weekDays = {
    KOR: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    ENG: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  };

  const dayCells = [];
  for (let i = 0; i < startDay; i++) {
    dayCells.push(<div key={`empty-${i}`} className="h-32 sm:h-40 border border-[#D4AF37]/5 bg-transparent"></div>);
  }

  for (let d = 1; d <= totalDays; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const dayEvents = events.filter(e => e.date === dateStr);

    dayCells.push(
      <div key={d} className="h-32 sm:h-40 border border-[#D4AF37]/5 bg-black/40 hover:bg-[#D4AF37]/5 p-4 transition-all relative group">
        <span className="text-zinc-700 text-xs font-black">{d}</span>
        <div className="mt-2 space-y-2 overflow-y-auto max-h-[80%]">
          {dayEvents.map(ev => (
            <div 
              key={ev.id}
              onClick={() => onSelectEvent(ev)}
              className="bg-[#D4AF37]/10 border-l-2 border-[#D4AF37] text-[9px] sm:text-[10px] font-black p-2 cursor-pointer hover:bg-[#D4AF37]/20 truncate text-[#D4AF37] uppercase tracking-tighter transition-all"
            >
              {ev.title[language]}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto bg-black/60 backdrop-blur-3xl border border-[#D4AF37]/20 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">
      <div className="flex items-center justify-between p-10 border-b border-[#D4AF37]/10 bg-white/5">
        <h3 className="text-3xl font-black gold-glow tracking-tighter">
          {monthNames[language][month]} <span className="text-[#D4AF37] opacity-50">{year}</span>
        </h3>
        <div className="flex space-x-4">
          <button onClick={handlePrevMonth} className="p-3 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37] rounded-full transition-all"><ChevronLeft size={20} /></button>
          <button onClick={handleNextMonth} className="p-3 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37] rounded-full transition-all"><ChevronRight size={20} /></button>
        </div>
      </div>
      <div className="grid grid-cols-7 border-b border-[#D4AF37]/10">
        {weekDays[language].map(wd => (
          <div key={wd} className="py-5 text-center text-[10px] font-black text-[#D4AF37] tracking-[0.3em] uppercase">{wd}</div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {dayCells}
      </div>
    </div>
  );
};
