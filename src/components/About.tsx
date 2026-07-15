import { GraduationCap, Award, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { uiTranslations } from '../translations';
import { getMilestones } from '../data';

interface AboutProps {
  language: Language;
}

export default function About({ language }: AboutProps) {
  const t = uiTranslations[language];
  const milestones = getMilestones(language);

  const stats = [
    { value: "30+", label: t.aboutStatsExperience, sub: language === 'TR' ? 'Tıp & Üroloji Pratiği' : 'Medical & Urology Practice' },
    { value: "5.000+", label: t.aboutStatsSurgeries, sub: language === 'TR' ? 'Mikro & Lazer Cerrahi' : 'Micro & Laser Cases' },
    { value: "80+", label: t.aboutStatsPapers, sub: language === 'TR' ? 'Uluslararası Yayın' : 'Peer-Reviewed Articles' }
  ];

  return (
    <section id="about" className="py-24 bg-navy relative overflow-hidden border-t border-white/10">
      {/* Visual background accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-sky-950/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-3">
            {t.sectionAboutTitle}
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-none">
            {t.sectionAboutSubtitle}
          </p>
          <div className="w-16 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </div>

        {/* Biographic Details & Timeline Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bio Card and Numeric Metrics */}
          <div className="lg:col-span-7 space-y-8">
            <div className="card-glass p-8 sm:p-10 rounded-xl shadow-xl">
              <h3 className="text-xl font-bold font-display text-white mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 text-gold mr-3" />
                {t.aboutBioTitle}
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed font-light">
                <p>
                  {language === 'TR' ? (
                    <>
                      <strong>Prof. Dr. Basri Çakıroğlu</strong>, Türkiye'nin önde gelen üroloji uzmanlarındandır. Akademik tıp kariyerine 1993 yılında <strong>Hacettepe Üniversitesi İngilizce Tıp Fakültesi</strong>'nde başlamış, ardından <strong>İstanbul Üniversitesi İstanbul Tıp Fakültesi (Çapa)</strong>'nde üroloji uzmanlığı ihtisasını yüksek dereceyle tamamlamıştır.
                    </>
                  ) : (
                    <>
                      <strong>Prof. Dr. Basri Çakıroğlu</strong> is one of Turkey's foremost urological surgeons. He embarked on his elite medical journey at <strong>Hacettepe University Faculty of Medicine (English)</strong> in 1993, followed by a highly acclaimed residency and specialization at <strong>Istanbul University, Istanbul Faculty of Medicine (Capa Urology)</strong>.
                    </>
                  )}
                </p>
                
                <p>
                  {language === 'TR' ? (
                    "Akademik araştırmalarını özellikle 'Kanser cerrahisinde sinirlerin korunması', 'Böbrek taşlarının lazerle milimetrik tedavisi' ve 'Robotik prostat ameliyatları' üzerinde yoğunlaştırmıştır. Doçentlik ve Profesörlük unvanlarını üstün klinik başarıları, cerrahi yenilikleri ve uluslararası tıp literatürüne sunduğu katkıları sayesinde almaya hak kazanmıştır."
                  ) : (
                    "His scientific and clinical research has concentrated extensively on nerve-sparing oncological surgery, precision laser stone fragmentation, and robotic prostatectomy. His associate professorship and full professorship were conferred in recognition of his superior surgical standards, instructional leadership, and contributions to international medical literature."
                  )}
                </p>

                <p>
                  {language === 'TR' ? (
                    "Amacımız, her hastanın özgün fiziksel yapısını ve yaşam beklentilerini göz önüne alarak, cerrahi başarısı yüksek ve iyileşme konforu en üst seviyede olan kişiselleştirilmiş tedavi planları sunmaktır."
                  ) : (
                    "Our objective is to deliver bespoke treatment plans that respect each patient's unique anatomical variation and lifestyle goals, optimizing oncological success while maximizing post-surgical comfort."
                  )}
                </p>
              </div>

              {/* Core Philosophy Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center space-x-3 text-slate-300 text-xs">
                  <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                  <span>{language === 'TR' ? 'Kişiselleştirilmiş Cerrahi Plan' : 'Customized Surgical Mapping'}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 text-xs">
                  <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                  <span>{language === 'TR' ? 'Multidisipliner Onkoloji' : 'Multidisciplinary Cancer Board'}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 text-xs">
                  <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                  <span>{language === 'TR' ? 'Minimal İnvaziv Yaklaşımlar' : 'Minimally Invasive Focus'}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 text-xs">
                  <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                  <span>{language === 'TR' ? 'Hızlı İyileşme Protokolleri' : 'Rapid-Recovery Protocols'}</span>
                </div>
              </div>
            </div>

            {/* Responsive Numeric Stats Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="card-glass p-6 rounded-xl text-center group"
                >
                  <div className="text-3xl font-bold text-gold font-display tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                    {stat.label}
                  </div>
                  <div className="text-slate-400 text-[11px] font-light">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic CV Timeline */}
          <div className="lg:col-span-5">
            <div className="card-glass p-8 rounded-xl shadow-lg relative">
              <h3 className="text-xl font-bold font-display text-white mb-2 flex items-center">
                <Award className="w-5 h-5 text-gold mr-2" />
                {t.aboutMilestonesTitle}
              </h3>
              <p className="text-xs text-slate-400 mb-8 leading-relaxed">
                {t.aboutMilestoneDesc}
              </p>

              {/* Timeline Items */}
              <div className="relative border-l-2 border-white/10 pl-6 ml-2 space-y-8 py-2">
                {milestones.map((m, idx) => (
                  <div key={idx} className="relative group">
                    {/* Glowing circular connector point */}
                    <span className="absolute -left-[31px] top-1 flex items-center justify-center w-4 h-4 rounded-full bg-navy border-2 border-gold group-hover:bg-gold transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold group-hover:bg-navy" />
                    </span>
                    
                    <span className="inline-block text-[10px] font-bold text-gold tracking-widest uppercase mb-1">
                      {m.year}
                    </span>
                    <h4 className="text-white font-bold text-sm mb-1 group-hover:text-gold transition-colors">
                      {m.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-light">
                      {m.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
