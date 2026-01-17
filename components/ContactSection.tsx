
import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { Button } from './Button';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const translations = {
    title: { KOR: '예술의 여정을 함께 시작해볼까요?', ENG: 'Shall we start your art journey together?' },
    subtitle: { KOR: '당신의 예술적 아이디어가 ARTonTOK을 만나면 현실이 됩니다. 가벼운 문의라도 언제든 환영합니다.', ENG: 'Your artistic ideas become reality with ARTonTOK. Any inquiry is always welcome.' },
    labelName: { KOR: '이름', ENG: 'Name' },
    labelPhone: { KOR: '연락처', ENG: 'Phone' },
    labelEmail: { KOR: '이메일', ENG: 'Email' },
    labelMessage: { KOR: '문의 내용 (아트 코칭 / 아트 딜러 등)', ENG: 'Message (Art Coaching / Art Dealer, etc.)' },
    placeholderMessage: { KOR: '어떤 예술적 성장을 구상 중이신가요?', ENG: 'What kind of artistic growth are you envisioning?' },
    btnSubmit: { KOR: '문의 보내기', ENG: 'Send Inquiry' },
    success: { KOR: '문의가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.', ENG: 'Inquiry sent successfully! We will contact you soon.' },
    error: { KOR: '전송 중 오류가 발생했습니다. 나중에 다시 시도해주세요.', ENG: 'An error occurred while sending. Please try again later.' }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mwvvvanz', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert(translations.success[language]);
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        alert(translations.error[language]);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert(translations.error[language]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-funnel" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left Side: Text & Contact Info */}
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {translations.title[language]}
          </h2>
          <p className="text-zinc-400 text-lg max-w-md">
            {translations.subtitle[language]}
          </p>
          
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-zinc-900 rounded-xl group-hover:bg-[#D4AF37] transition-colors border border-zinc-800">
                <Mail className="text-[#D4AF37] group-hover:text-black" size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Email</p>
                <p className="font-semibold">concierge@artontok.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-zinc-900 rounded-xl group-hover:bg-[#D4AF37] transition-colors border border-zinc-800">
                <Phone className="text-[#D4AF37] group-hover:text-black" size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Phone</p>
                <p className="font-semibold">02-1234-5678</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-1">
          <form 
            onSubmit={handleSubmit}
            className="bg-zinc-900/40 border border-zinc-800 p-8 md:p-10 rounded-[2.5rem] shadow-2xl space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 ml-1">{translations.labelName[language]}</label>
                <input 
                  required
                  name="name"
                  type="text"
                  placeholder="홍길동"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black/60 border border-zinc-800 rounded-2xl p-4 focus:outline-none focus:border-[#D4AF37] transition-all text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 ml-1">{translations.labelPhone[language]}</label>
                <input 
                  required
                  name="phone"
                  type="tel"
                  placeholder="010-0000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-black/60 border border-zinc-800 rounded-2xl p-4 focus:outline-none focus:border-[#D4AF37] transition-all text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-zinc-400 ml-1">{translations.labelEmail[language]}</label>
              <input 
                required
                name="email"
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-black/60 border border-zinc-800 rounded-2xl p-4 focus:outline-none focus:border-[#D4AF37] transition-all text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-zinc-400 ml-1">{translations.labelMessage[language]}</label>
              <textarea 
                required
                name="message"
                rows={4}
                placeholder={translations.placeholderMessage[language]}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-black/60 border border-zinc-800 rounded-2xl p-4 focus:outline-none focus:border-[#D4AF37] transition-all text-white resize-none"
              ></textarea>
            </div>

            <Button 
              type="submit" 
              className="w-full py-5 rounded-2xl gap-3 text-lg font-bold"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <Send size={20} />
              )}
              {translations.btnSubmit[language]}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
