import { useState, useEffect } from 'react';
import { Calendar, Clock, ChevronUp, Shield, Globe, FileText, Phone, Lock } from 'lucide-react';
import { Language, Appointment } from './types';
import { uiTranslations } from './translations';

// Import our modular components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Blog from './components/Blog';
import Contact from './components/Contact';
import AppointmentModal from './components/AppointmentModal';
import AppointmentHistory from './components/AppointmentHistory';

export default function App() {
  const [language, setLanguage] = useState<Language>('TR');
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('basri_logged_in') === 'true');

  // Sync login status across events
  useEffect(() => {
    const handleLoginState = (e: any) => {
      const loggedIn = e.detail?.isLoggedIn ?? (localStorage.getItem('basri_logged_in') === 'true');
      setIsLoggedIn(loggedIn);
    };
    window.addEventListener('basri-login-state-changed', handleLoginState);
    return () => window.removeEventListener('basri-login-state-changed', handleLoginState);
  }, []);

  // Persistence: Restore user's real appointments from local storage
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    try {
      const stored = localStorage.getItem('dr_basri_appointments');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Save changes to local storage
  useEffect(() => {
    localStorage.setItem('dr_basri_appointments', JSON.stringify(appointments));
  }, [appointments]);

  // Back to top scroll listener
  useEffect(() => {
    const toggleVisibility = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const t = uiTranslations[language];

  // Callback to insert new scheduled session
  const handleAppointmentCreated = (newApt: Appointment) => {
    setAppointments((prev) => [newApt, ...prev]);
  };

  // Callback to cancel an existing session
  const handleCancelAppointment = (id: string) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, status: 'cancelled' } : apt))
    );
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Active appointments counter (excludes cancelled)
  const activeAppointmentsCount = appointments.filter((a) => a.status !== 'cancelled').length;

  return (
    <div className="min-h-screen bg-navy text-slate-100 flex flex-col justify-between selection:bg-gold selection:text-navy font-sans">
      
      {/* 1. STICKY HEADER */}
      <Header
        language={language}
        setLanguage={setLanguage}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        onOpenHistory={() => setIsHistoryOpen(true)}
        appointmentCount={activeAppointmentsCount}
      />

      {/* MAIN VIEWPORT */}
      <main className="flex-grow">
        
        {/* 2. HERO LANDING */}
        <Hero
          language={language}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
          onScrollToExpertise={() => scrollToSection('expertise')}
          onAppointmentCreated={handleAppointmentCreated}
        />

        {/* 3. ACADEMIC ABOUT PORTFOLIO */}
        <About language={language} />

        {/* 4. CLINICAL EXPERTISE GRID */}
        <Expertise language={language} />

        {/* 5. SCIENTIFIC HEALTH BLOG */}
        <Blog language={language} />

        {/* 6. SECURE CONTACT & DIRECTION MAP */}
        <Contact language={language} />

      </main>

      {/* 7. SECURE ACADEMIC FOOTER */}
      <footer className="bg-black/30 border-t border-white/5 py-12 px-6 relative z-10 text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          
          {/* Copyright Info */}
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">
              {t.footerCopyright}
            </p>
            <p className="text-[11px] text-slate-600 max-w-md mx-auto md:mx-0">
              {t.footerDisclaimer}
            </p>
          </div>

          {/* Quick link tags for professional footer navigation */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-slate-400">
              <button
                onClick={() => scrollToSection('home')}
                className="hover:text-gold transition-colors focus:outline-none cursor-pointer"
              >
                {t.navHome}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="hover:text-gold transition-colors focus:outline-none cursor-pointer"
              >
                {t.navAbout}
              </button>
              <button
                onClick={() => scrollToSection('expertise')}
                className="hover:text-gold transition-colors focus:outline-none cursor-pointer"
              >
                {t.navExpertise}
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="hover:text-gold transition-colors focus:outline-none cursor-pointer"
              >
                {t.navBlog}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="hover:text-gold transition-colors focus:outline-none cursor-pointer"
              >
                {t.navContact}
              </button>
            </div>

            {/* Author Portal Trigger */}
            <button
              id="footer-doctor-login"
              onClick={() => window.dispatchEvent(new CustomEvent('open-add-article'))}
              className="flex items-center space-x-2 px-5 py-2.5 bg-gold/10 hover:bg-gold/20 active:bg-gold/30 border border-gold/30 hover:border-gold/50 text-gold rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer focus:outline-none shrink-0"
              title={language === 'TR' ? 'Hekim & Yazar Giriş Paneli' : 'Doctor & Author Login Portal'}
            >
              {isLoggedIn ? (
                <>
                  <Shield className="w-3.5 h-3.5" />
                  <span>{language === 'TR' ? 'Yazar Paneli' : 'Author Panel'}</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  <span>{language === 'TR' ? 'Giriş' : 'Login'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </footer>

      {/* 8. PERSISTENT INTERACTIVE MODALS */}
      <AppointmentModal
        language={language}
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        onAppointmentCreated={handleAppointmentCreated}
      />

      <AppointmentHistory
        language={language}
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        appointments={appointments}
        onCancelAppointment={handleCancelAppointment}
      />

      {/* 9. FLOATING ACTION ACCESSORIES (BACK-TO-TOP & DIRECT-DIAL) */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-30">
        {/* Quick dial assistant button */}
        <a
          id="floating-dial-btn"
          href="tel:+902165550055"
          className="bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center border border-emerald-400/20"
          title={language === 'TR' ? 'Hemen Arayın' : 'Call Assistant Now'}
        >
          <Phone className="w-5 h-5 fill-slate-950" />
        </a>

        {/* Floating Quick Booking trigger */}
        <button
          id="floating-booking-btn"
          onClick={() => setIsAppointmentOpen(true)}
          className="bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center border border-amber-400/20"
          title={t.navAppointment}
        >
          <Calendar className="w-5 h-5" />
        </button>

        {/* Back to top scroll pointer */}
        {showBackToTop && (
          <button
            id="back-to-top-btn"
            onClick={handleScrollToTop}
            className="bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white p-3.5 rounded-full border border-slate-850 shadow-xl transition-all duration-300 flex items-center justify-center focus:outline-none"
            aria-label="Scroll back to top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
}
