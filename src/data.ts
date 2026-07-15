import { Milestone, ExpertiseItem, BlogPost, ContactInfo } from './types';

// Academic Milestones Timeline
export const getMilestones = (lang: 'TR' | 'EN'): Milestone[] => {
  return lang === 'TR'
    ? [
        { year: "2018 - Günümüz", title: "Üroloji Profesörü", institution: "Tıp Fakültesi / Memorial ve Çevre Klinikler Koordinatörlüğü" },
        { year: "2012 - 2018", title: "Üroloji Doçenti", institution: "Hisar Intercontinental Hospital & Akademik Kadro" },
        { year: "2006 - 2012", title: "Yardımcı Doçent & Klinik Şef Yardımcısı", institution: "Üroloji Anabilim Dalı ve Eğitici Kadrosu" },
        { year: "2000 - 2005", title: "Üroloji Uzmanlığı Eğitimi & İhtisas", institution: "İstanbul Üniversitesi İstanbul Tıp Fakültesi (Çapa Üroloji)" },
        { year: "1993 - 1999", title: "Tıp Doktoru Eğitimi", institution: "Hacettepe Üniversitesi İngilizce Tıp Fakültesi" }
      ]
    : [
        { year: "2018 - Present", title: "Professor of Urology", institution: "Faculty of Medicine / Chief of Urology, Affiliated Clinical Networks" },
        { year: "2012 - 2018", title: "Associate Professor", institution: "Hisar Intercontinental Hospital & Academic Board" },
        { year: "2006 - 2012", title: "Assistant Professor & Clinical Director", institution: "Department of Urology, Academic Training Hospital" },
        { year: "2000 - 2005", title: "Residency & Specialty in Urology", institution: "Istanbul University, Istanbul Faculty of Medicine (Capa Urology)" },
        { year: "1993 - 1999", title: "Doctor of Medicine (M.D.)", institution: "Hacettepe University Faculty of Medicine (English Medium)" }
      ];
};

// Medical Specialties Data
export const getExpertiseItems = (lang: 'TR' | 'EN'): ExpertiseItem[] => {
  return lang === 'TR'
    ? [
        {
          id: "robotic-surgery",
          title: "Robotik & Laparoskopik Cerrahi",
          shortDesc: "daVinci cerrahi robotu ile milimetrik hassasiyette, az ağrılı ve hızlı iyileşme sağlayan kapalı ameliyatlar.",
          longDesc: "Robotik cerrahi, üroloji alanındaki en üst düzey teknolojik gelişmelerden biridir. Cerrahın konsol üzerinden 3 boyutlu, yüksek çözünürlüklü ve 10-15 kat büyütülmüş görüntüler altında ameliyatı gerçekleştirmesini sağlar. robotik kollar insan elinin titremesini sıfırlayarak en dar alanlarda dahi 540 derece hareket kabiliyeti sunar.",
          iconName: "Cpu",
          conditions: [
            "Prostat Kanseri (Radikal Prostatektomi)",
            "Böbrek Tümörleri (Parsiyel/Radikal Nefrektomi)",
            "Mesane Kanseri (Sistektomi & Yapay Mesane)",
            "Üreteral Darlıklar (Pyeloplasti)"
          ],
          treatments: [
            "Robot Yardımlı Radikal Prostatektomi",
            "Robotik Parsiyel Nefrektomi (Tümörün çıkartılıp böbreğin korunması)",
            "Laparoskopik ve Robotik Adrenalektomi (Sürrenal bezi)",
            "Robotik Rekonstrüktif Üroloji Ameliyatları"
          ]
        },
        {
          id: "prostate-diseases",
          title: "Prostat Hastalıkları & Lazer Tedavileri",
          shortDesc: "İyi huylu prostat büyümesinde (BPH) HoLEP, ThuFLEP ve Rezum gibi en gelişmiş minimal invaziv tedavi yöntemleri.",
          longDesc: "Yaşla birlikte büyüyen prostat bezi idrar akışını engelleyerek yaşam kalitesini ciddi ölçüde düşürür. Günümüzde açık ameliyatların yerini alan Holmiyum Lazer Enükleasyon (HoLEP) ve Rezum su buharı terapisi ile kanamasız, ağrısız ve cinsel fonksiyonları tamamen koruyan çözümler sunuyoruz.",
          iconName: "Activity",
          conditions: [
            "İyi Huylu Prostat Büyümesi (BPH)",
            "Akut ve Kronik Prostatit (Prostat İltihabı)",
            "Prostat Kanseri Şüphesi ve Multiparametrik MR Füzyon Biyopsi",
            "Sık İdrara Çıkma, Gece İdrara Kalkma ve Zorlanma"
          ],
          treatments: [
            "HoLEP (Holmium Laser Enucleation of Prostate)",
            "ThuFLEP (Thulium Fiber Laser Enucleation)",
            "Rezum Su Buharı Terapisi (Günübirlik ameliyatsız tedavi)",
            "Yüksek Hassasiyetli MR Füzyon Prostat Biyopsisi"
          ]
        },
        {
          id: "urologic-oncology",
          title: "Ürolojik Onkoloji",
          shortDesc: "Prostat, böbrek, mesane, testis ve böbrek üstü bezi kanserlerinin multidisipliner yaklaşımla cerrahi tedavisi.",
          longDesc: "Ürolojik kanserler, erken teşhis edildiğinde tamamen tedavi edilebilme şansı en yüksek onkolojik gruplardandır. Amacımız sadece tümörü temizlemek değil; hastanın idrar tutma yeteneğini, cinsel fonksiyonlarını ve böbrek dokularını maksimum seviyede korumaktır.",
          iconName: "ShieldAlert",
          conditions: [
            "Prostat Kanseri",
            "Böbrek Hücreli Kanseri (RCC)",
            "Mesane Kanseri ve İdrardan Kan Gelmesi",
            "Testis Tümörleri",
            "Adrenal (Böbrek Üstü Bezi) Kitleleri"
          ],
          treatments: [
            "Sinir Koruyucu Robotik Radikal Prostatektomi",
            "Nefron Koruyucu (Parsiyel) Nefrektomi",
            "Radikal Sistektomi ve İleal Loop (Yapay İnce Bağırsak Mesanesi)",
            "Retroperitoneal Lenf Nodu Diseksiyonu (RPLND)"
          ]
        },
        {
          id: "stone-disease",
          title: "Böbrek & İdrar Yolları Taşları",
          shortDesc: "Lazer ve ultrasonik dalgalarla kesi yapmadan, böbrek içindeki taşların toz haline getirilmesi tedavileri.",
          longDesc: "Şiddetli ağrılara sebep olan idrar yolu taşları, böbreğin fonksiyonunu tamamen yitirmesine sebep olabilir. Gelişmiş bükülebilir (flexible) endoskoplar sayesinde idrar deliğinden girerek böbrek içindeki taşa ulaşıyor ve Holmiyum Lazer ile taşı saniyeler içinde toza dönüştürüyoruz.",
          iconName: "Sparkles",
          conditions: [
            "Böbrek Taşları (Koraliform ve Kompleks Taşlar dahil)",
            "Üreter (İdrar Kanalı) Taşları",
            "Mesane Taşları",
            "Tekrarlayan Taş Oluşumları ve Metabolik Analiz"
          ],
          treatments: [
            "RIRS (Retrograd İntrarenal Cerrahi - Flexible Lazerle Taş Kırma)",
            "URS (Üreteroskopi Lazer Taş Tedavisi)",
            "Mini-PNL (Minimal İnvaziv Perkütan Nefrolitotomi - Sırttan küçük delikle)",
            "Vücut Dışından Şok Dalgalarıyla Taş Kırma (ESWL)"
          ]
        },
        {
          id: "andrology-infertility",
          title: "Androloji & Erkek Sağlığı",
          shortDesc: "Sertleşme problemleri, erken boşalma, varikosel ve erkek kısırlığına yönelik mikrocerrahi ve yenilikçi tedaviler.",
          longDesc: "Erkek cinsel sağlığı ve kısırlık problemleri, günümüz tıbbında son derece hassas ve kişiye özel yöntemlerle ele alınmaktadır. Mikrocerrahi varikoselektomi, şok dalga terapileri (ESWT) ve mikro-TESE operasyonlarıyla yüksek başarı oranları sağlıyoruz.",
          iconName: "Heart",
          conditions: [
            "Erektil Disfonksiyon (Sertleşme Sorunu)",
            "Erkek İnfertilitesi (Kısırlık) ve Sperm Sayı Azlığı",
            "Varikosel (Testis Damarlarında Genişleme)",
            "Peyronie Hastalığı (Penis Eğriliği)"
          ],
          treatments: [
            "Mikrocerrahi Varikoselektomi (Nüks oranını sıfırlayan yöntem)",
            "Penil Protez (Mutluluk Çubuğu) İmplantasyonu",
            "ESWT (Penise Düşük Yoğunluklu Şok Dalga Terapisi)",
            "Mikro-TESE (Mikroskobik Sperm Arama Ameliyatı)"
          ]
        },
        {
          id: "urogynecology",
          title: "Kadın Ürolojisi & İdrar Kaçırma",
          shortDesc: "Kadınlarda idrar kaçırma (inkontinans) ve pelvik organ sarkmalarına yönelik kalıcı ve konforlu çözümler.",
          longDesc: "Kadınlarda idrar kaçırma ve sarkma şikayetleri sık görülmesine rağmen sosyal çekinceler nedeniyle ertelenmektedir. Oysaki 15-20 dakikalık günübirlik askı ameliyatları veya lazer uygulamalarıyla bu sorunları kalıcı ve konforlu bir şekilde çözmek mümkündür.",
          iconName: "User",
          conditions: [
            "Stres İdrar Kaçırma (Öksürürken, hapşırırken kaçırma)",
            "Sıkışma Tipi İdrar Kaçırma (Aşırı Aktif Mesane)",
            "Sistosel (Mesane Sarkması)",
            "Tekrarlayan İdrar Yolu Enfeksiyonları"
          ],
          treatments: [
            "TOT (Transobturator Tape) & TVT Askı Ameliyatları",
            "Mesane Botoksu Uygulamaları (Aşırı Aktif Mesane için)",
            "Robotik Sakrokolpopeksi (Sarkma cerrahisi)",
            "Pelvik Taban Kas Rehabilitasyonu"
          ]
        }
      ]
    : [
        {
          id: "robotic-surgery",
          title: "Robotic & Laparoscopic Surgery",
          shortDesc: "Keyhole, highly precise, minimal pain, and rapid recovery surgical procedures utilizing the state-of-the-art daVinci surgical robot.",
          longDesc: "Robotic surgery is the pinnacle of technological advancements in modern urology. It allows the surgeon to perform complex procedures through a specialized console providing 3D, high-definition visualization magnified up to 15 times. The robotic instruments negate natural hand tremors and provide 540-degree range of motion inside tight spaces.",
          iconName: "Cpu",
          conditions: [
            "Prostate Cancer (Radical Prostatectomy)",
            "Kidney Tumors (Partial or Radical Nephrectomy)",
            "Bladder Cancer (Cystectomy & Neobladder)",
            "Ureteral Strictures (Pyeloplasty)"
          ],
          treatments: [
            "Robot-Assisted Radical Prostatectomy",
            "Robotic Partial Nephrectomy (Sparing the kidney tissue)",
            "Laparoscopic & Robotic Adrenalectomy (Adrenal gland)",
            "Robotic Reconstruction of the Urinary Tract"
          ]
        },
        {
          id: "prostate-diseases",
          title: "Prostate Diseases & Laser Therapies",
          shortDesc: "Advanced minimally invasive therapies for Benign Prostate Hyperplasia (BPH) including HoLEP, ThuFLEP, and Rezum.",
          longDesc: "As the prostate gland enlarges with age, it compresses the urethra, causing severe lower urinary tract symptoms. Today, traditional open surgeries are replaced by Holmium Laser Enucleation of the Prostate (HoLEP) and Rezum water vapor therapy, delivering bloodless, painless, and sexual-function-preserving clinical results.",
          iconName: "Activity",
          conditions: [
            "Benign Prostatic Hyperplasia (BPH)",
            "Acute & Chronic Prostatitis (Prostate Inflammation)",
            "Suspected Prostate Cancer & MRI-Fusion Targeted Biopsy",
            "Urinary Urgency, Nocturia, and Weak Stream"
          ],
          treatments: [
            "HoLEP (Holmium Laser Enucleation of Prostate)",
            "ThuFLEP (Thulium Fiber Laser Enucleation)",
            "Rezum Water Vapor Therapy (Outpatient non-surgical option)",
            "High-Precision Multiparametric MRI-Fusion Biopsy"
          ]
        },
        {
          id: "urologic-oncology",
          title: "Urologic Oncology",
          shortDesc: "Comprehensive surgical treatment of prostate, kidney, bladder, testicular, and adrenal cancers using a multidisciplinary approach.",
          longDesc: "Urologic cancers have some of the highest cure rates among all oncological diseases when diagnosed early. Our surgical objective is not only to achieve oncological clearance but also to preserve urinary continence, erectile function, and vital organ tissue to the maximum extent.",
          iconName: "ShieldAlert",
          conditions: [
            "Prostate Cancer",
            "Renal Cell Carcinoma (RCC)",
            "Bladder Cancer & Hematuria (Blood in urine)",
            "Testicular Cancer",
            "Adrenal Masses"
          ],
          treatments: [
            "Nerve-Sparing Robotic Radical Prostatectomy",
            "Nephron-Sparing (Partial) Nephrectomy",
            "Radical Cystectomy with Ileal Conduit or Orthotopic Neobladder",
            "Retroperitoneal Lymph Node Dissection (RPLND)"
          ]
        },
        {
          id: "stone-disease",
          title: "Kidney & Urinary Tract Stones",
          shortDesc: "Laser-assisted disintegration of stones inside the kidney without any surgical incision, reducing recovery time to a single day.",
          longDesc: "Urinary stones can cause excruciating pain and permanent kidney damage. Using advanced flexible ureteroscopes, we navigate naturally through the urethra into the kidney and pulverize the stone into dust within seconds using specialized high-power Holmium Lasers.",
          iconName: "Sparkles",
          conditions: [
            "Kidney Stones (including complex staghorn calculi)",
            "Ureteral Stones (Urinary tract obstruction)",
            "Bladder Stones",
            "Recurrent Stone Disease & Metabolic Evaluation"
          ],
          treatments: [
            "RIRS (Retrograde Intrarenal Surgery - Flexible Laser Lithotripsy)",
            "URS (Ureteroscopic Laser Stone Treatment)",
            "Mini-PCNL (Mini-Percutaneous Nephrolithotomy through a tiny back incision)",
            "Extracorporeal Shock Wave Lithotripsy (ESWL)"
          ]
        },
        {
          id: "andrology-infertility",
          title: "Andrology & Men's Health",
          shortDesc: "Microsurgical and innovative clinical treatments for erectile dysfunction, premature ejaculation, varicocele, and male infertility.",
          longDesc: "Male reproductive and sexual health issues require highly customized and private treatments. We utilize microsurgical varicocelectomy to eliminate recurrence risks, low-intensity shockwave therapy (ESWT) for vascular regeneration, and micro-TESE to source sperm for IVF.",
          iconName: "Heart",
          conditions: [
            "Erectile Dysfunction (ED)",
            "Male Infertility & Low Sperm Count",
            "Varicocele (Dilated testicular veins)",
            "Peyronie's Disease (Penile curvature)"
          ],
          treatments: [
            "Microsurgical Varicocelectomy (The gold standard with zero recurrence)",
            "Penile Prosthesis (Malleable or Inflatable) Implantation",
            "ESWT (Low-Intensity Extracorporeal Shockwave Therapy)",
            "Micro-TESE (Microscopic Testicular Sperm Extraction)"
          ]
        },
        {
          id: "urogynecology",
          title: "Female Urology & Urinary Incontinence",
          shortDesc: "Comfortable and durable surgical correction for female urinary leakage and pelvic organ prolapse.",
          longDesc: "Urinary leakage and pelvic prolapse in women are frequently underreported due to social reservations. However, with modern 15-minute outpatient sling operations or robotic suspension, these issues can be permanently and comfortably resolved.",
          iconName: "User",
          conditions: [
            "Stress Urinary Incontinence (Leakage upon coughing, laughing, exercising)",
            "Urge Incontinence & Overactive Bladder (OAB)",
            "Cystocele (Bladder Prolapse)",
            "Recurrent Urinary Tract Infections (UTIs)"
          ],
          treatments: [
            "TOT (Transobturator Tape) & TVT Sling Procedures",
            "Intravesical Botox Injections (for stubborn OAB)",
            "Robotic Sacrocolpopexy (Advanced prolapse suspension)",
            "Pelvic Floor Muscle Training & Biofeedback"
          ]
        }
      ];
};

// 3 High-Quality Blog Posts (Requested by prompt)
export const getBlogPosts = (lang: 'TR' | 'EN'): BlogPost[] => {
  return lang === 'TR'
    ? [
        {
          id: "prostate-early-diagnosis",
          title: "Prostat Sağlığında Erken Teşhisin Önemi ve PSA Taramaları",
          slug: "prostat-sagliginda-erken-teshis",
          excerpt: "Prostat kanseri erkeklerde en sık görülen kanser türlerinden biridir. Hiçbir belirti vermeden ilerleyebilen bu hastalıkta erken tanı hayat kurtarır.",
          category: "Onkoloji",
          date: "10 Haziran 2026",
          readTime: "5",
          author: "Prof. Dr. Basri Çakıroğlu",
          content: `### Prostat Kanseri Belirti Vermeden İlerleyebilir
Prostat kanseri, erken evrelerde genellikle hiçbir klinik şikayete yol açmaz. Sık idrara çıkma, idrarda kan görülmesi veya ağrı gibi belirtiler genellikle hastalık ileri aşamalara ulaştığında ya da iyi huylu prostat büyümesi ile birlikte seyrettiğinde ortaya çıkar. Bu nedenle, hiçbir şikayeti olmayan erkeklerin de düzenli tarama yaptırması hayati öneme sahiptir.

### PSA (Prostat Spesifik Antijen) Testi Nedir?
PSA, prostat bezi hücreleri tarafından üretilen ve kanda ölçülebilen bir proteindir. Basit bir kan testi ile ölçülür. Kandaki PSA düzeyinin yükselmesi, prostat kanseri riskini gösterebileceği gibi iyi huylu büyüme (BPH) veya prostat iltihabı (prostatit) gibi durumların da habercisi olabilir. Uzman hekim değerlendirmesi ile bu ayrım doğru şekilde yapılır.

### Ne Zaman Tarama Yaptırılmalı?
* **Ailesinde prostat kanseri öyküsü olmayanlar:** 50 yaşından itibaren yılda bir kez PSA testi ve ürolojik muayene yaptırmalıdır.
* **Ailesinde (baba, erkek kardeş vb.) prostat kanseri olanlar:** Genetik yatkınlık nedeniyle taramalara 45 yaşından itibaren başlamalıdır.

### Multiparametrik MR ve Akıllı Füzyon Biyopsi
Eğer PSA testinde veya muayenede şüpheli bir bulguya rastlanırsa, günümüzde en modern teşhis yöntemi olan **Multiparametrik MR (mpMR)** çekilir. MR görüntülerinde şüpheli alanlar tespit edilirse, **MR-Ultrasound Füzyon Biyopsi** teknolojisi ile tam o noktalardan milimetrik doğrulukla örnek alınır. Bu sayede gereksiz biyopsilerin önüne geçilir ve kanser odağı kaçırılmadan teşhis edilir.`
        },
        {
          id: "holep-prostate-treatment",
          title: "HoLEP: Büyük Prostatlarda Kesisiz ve Güvenli Lazer Çözümü",
          slug: "holep-lazer-prostat-tedavisi",
          excerpt: "İyi huylu prostat büyümesi tedavisinde altın standart kabul edilen HoLEP yöntemi, her boyuttaki prostata kesi yapılmadan uygulanabilen modern bir teknolojidir.",
          category: "Lazer Cerrahi",
          date: "22 Mayıs 2026",
          readTime: "6",
          author: "Prof. Dr. Basri Çakıroğlu",
          content: `### İyi Huylu Prostat Büyümesi (BPH) Nedir?
50 yaşın üzerindeki erkeklerin yarısından fazlasında görülen iyi huylu prostat büyümesi; idrar yaparken zorlanma, idrar hızında azalma, geceleri sık sık idrara çıkma ve mesaneyi tam boşaltamama hissiyle kendini gösterir. İlaç tedavilerinin yetersiz kaldığı durumlarda cerrahi müdahale gereklidir.

### HoLEP Teknolojisi Nedir?
HoLEP (Holmium Laser Enucleation of the Prostate), yüksek güçlü Holmiyum lazer kullanılarak prostat dokusunun kapsülünden tamamen sıyrılarak çıkartılması yöntemidir. İdrar kanalından girilerek (kapalı yöntemle) gerçekleştirilen bu operasyonda dışarıdan hiçbir kesi yapılmaz.

### HoLEP Ameliyatının Avantajları Nelerdir?
1. **Sınır Tanımaz:** Geleneksel kapalı ameliyatlar (TUR-P) büyük prostatlarda uygulanamazken, HoLEP 80 gramdan büyük, hatta 150-200 gramlık dev prostatlarda bile güvenle uygulanır ve açık ameliyat ihtiyacını tamamen ortadan kaldırır.
2. **Kanamasız ve Güvenli:** Lazer teknolojisi işlem sırasında damarları hemen mühürlediği için kanama riski minimumdur. Kalp veya tansiyon ilacı (kan sulandırıcı) kullanan hastalar için son derece güvenlidir.
3. **Hızlı İyileşme ve Kısa Sondalı Kalış Süresi:** Hastalar genellikle ameliyattan 24 saat sonra sondalarından kurtulur ve normal yaşantılarına dönerler.
4. **Cinsel Fonksiyonların Korunması:** HoLEP cerrahisinde prostatı çevreleyen hayati sinirler zarar görmez. Bu sayede ameliyat sonrasında sertleşme sorunu yaşanmaz.
5. **Sıfıra Yakın Tekrarlama Riski:** Dokunun tamamı kapsülünden sıyrılarak alındığı için prostatın yıllar içinde tekrar büyüme ihtimali yok denecek kadar azdır.`
        },
        {
          id: "robotic-urology-oncology",
          title: "Robotik Cerrahi ile Ürolojik Kanser Tedavilerinde Yeni Dönem",
          slug: "robotik-cerrahi-uroloji",
          excerpt: "daVinci robotik cerrahi sistemi, cerraha sunduğu 3 boyutlu yüksek çözünürlüklü görüntü ve hassas manevra kabiliyeti ile kanser ameliyatlarında başarıyı artırıyor.",
          category: "Teknoloji",
          date: "14 Nisan 2026",
          readTime: "7",
          author: "Prof. Dr. Basri Çakıroğlu",
          content: `### Robotik Cerrahi Nedir?
Robotik cerrahi veya robot yardımlı cerrahi, hastanın vücudunda açılan birkaç küçük delikten (0.8 - 1 cm) yerleştirilen robotik kolların, cerrah tarafından özel bir konsol aracılığıyla kontrol edildiği kapalı ameliyat yöntemidir. Ürolojide özellikle prostat, böbrek ve mesane kanserlerinin tedavisinde dünya çapında en çok tercih edilen yöntem haline gelmiştir.

### Ameliyat Başarısını Artıran Teknolojik Üstünlükler
* **3 Boyutlu ve 15 Kat Büyütülmüş Görüntü:** Cerrah, çıplak gözle veya standart laparoskopi ile görülmesi çok zor olan milimetrik damarları, sinir liflerini ve tümör sınırlarını net bir şekilde ayırt edebilir.
* **Titreme Engelleme Teknolojisi (Tremor Filter):** İnsan elinde oluşabilecek en küçük fizyolojik titremeler bile robotik kollara yansımaz, böylece son derece hassas doku kesimleri ve dikiş işlemleri yapılabilir.
* **Çok Yönlü Manevra Kabiliyeti:** Robotun uç kısımlarında yer alan enstrümanlar (EndoWrist), insan bileğinden çok daha fazla derecede (540 derece) dönebilir ve bükülebilir. Bu da dar pelvis bölgelerinde (prostat gibi) kusursuz çalışmayı sağlar.

### Hastaya Sağladığı Hayati Faydalar
1. **Daha Az Kan Kaybı ve Ağrı:** Kesi boyutları küçük olduğu için kan kaybı önemsiz düzeydedir. Ameliyat sonrası ağrı, açık cerrahiye kıyasla son derece hafiftir ve ağrı kesici ihtiyacı çok azdır.
2. **Hızlı Taburculuk ve Günlük Hayata Dönüş:** Hastalar genellikle ameliyatın ertesi günü ayağa kalkar ve birkaç gün içinde taburcu edilerek sosyal hayatlarına dönebilirler.
3. **Kanserli Dokunun Tam Temizlenmesi (Negatif Cerrahi Sınır):** Yüksek görüş gücü, kanserli dokunun etrafındaki sağlıklı sınırlardan temiz bir şekilde ayrılmasını sağlar.
4. **Hayati Fonksiyonların Korunması:** Prostat kanseri ameliyatlarında prostatın hemen yanından geçen idrar tutma ve sertleşme sinirleri (ereksiyon sinirleri) robotun hassasiyeti sayesinde korunur. Böylece ameliyat sonrasında idrar kaçırma ve iktidarsızlık gibi istenmeyen yan etkiler en aza indirilir.`
        }
      ]
    : [
        {
          id: "prostate-early-diagnosis",
          title: "The Importance of Early Diagnosis in Prostate Health and PSA Screening",
          slug: "prostate-health-early-diagnosis",
          excerpt: "Prostate cancer is one of the most common cancers diagnosed in men. Early detection is a lifesaver for this silent disease.",
          category: "Oncology",
          date: "June 10, 2026",
          readTime: "5",
          author: "Prof. Dr. Basri Çakıroğlu",
          content: `### Prostate Cancer Can Progress Silently
In its initial stages, prostate cancer typically does not trigger any clinical discomfort or symptoms. Warning signs such as frequent urination, weak stream, or blood in the urine usually present themselves only after the disease has reached advanced stages or is accompanied by benign enlargement. Therefore, regular screening is crucial even for men who feel entirely healthy.

### What is the PSA (Prostate-Specific Antigen) Test?
PSA is a protein produced by prostate gland cells and measured through a simple blood draw. While an elevated PSA level can indicate an increased risk of cancer, it can also be caused by benign conditions such as BPH (enlargement) or prostatitis (infection). A specialized urologist's assessment is key to accurately differentiating these etiologies.

### When Should You Get Screened?
* **Men with no family history of prostate cancer:** Should undergo an annual PSA test and urological examination starting at age 50.
* **Men with a family history (father, brother, etc.):** Due to genetic predisposition, screening should begin at age 45.

### Multiparametric MRI and Smart Fusion Biopsy
If an elevated PSA or suspicious physical examination is detected, a **Multiparametric MRI (mpMRI)** is performed. If suspicious areas are identified, **MRI-Ultrasound Fusion Biopsy** is conducted. This high-end technology matches real-time ultrasound with pre-acquired MR images to guide the biopsy needle with millimeter precision directly into the tumor core, preventing unnecessary tissue sampling and ensuring highly accurate staging.`
        },
        {
          id: "holep-prostate-treatment",
          title: "HoLEP: Incision-free and Safe Laser Solution for Enlarged Prostate",
          slug: "holep-laser-prostate-treatment",
          excerpt: "Recognized as the gold standard in benign prostatic hyperplasia (BPH) surgery, HoLEP utilizes state-of-the-art Holmium Laser to treat any prostate size with no incision.",
          category: "Laser Surgery",
          date: "May 22, 2026",
          readTime: "6",
          author: "Prof. Dr. Basri Çakıroğlu",
          content: `### What is Benign Prostatic Hyperplasia (BPH)?
Affecting over half of all men above the age of 50, BPH occurs when the prostate gland enlarges, leading to urinary hesitation, reduced urinary speed, frequent waking at night (nocturia), and a sensation of incomplete bladder emptying. When medical therapies fail to provide relief, surgical intervention becomes necessary.

### What is HoLEP Technology?
HoLEP (Holmium Laser Enucleation of the Prostate) uses a high-power Holmium laser to anatomically peel the obstructing prostate tissue away from its outer capsule. Performed transurethrally (through the natural urinary channel), it requires absolutely no external skin incisions.

### Essential Clinical Advantages of HoLEP:
1. **No Size Limits:** While conventional endoscopic surgeries (TUR-P) cannot be safely performed on very large prostates, HoLEP is highly successful for glands exceeding 80 grams, even up to 200 grams, entirely eliminating the need for open surgery.
2. **Virtually Bloodless:** The Holmium laser coagulates blood vessels instantly as it cuts. This makes the procedure incredibly safe, even for patients who must continue taking blood thinners for cardiac conditions.
3. **Rapid Recovery:** Patients are typically catheter-free within 24 hours of surgery and can return to light daily activities immediately.
4. **Preserved Sexual Function:** Crucial nerves regulating erectile function lie just outside the prostate capsule and are spared during HoLEP's precise anatomical dissection, safeguarding potency.
5. **Near-Zero Recurrence Rate:** Because the entire adenoma is shelled out cleanly down to the surgical capsule, the probability of the prostate growing back in the future is virtually non-existent.`
        },
        {
          id: "robotic-urology-oncology",
          title: "Robotic Surgery: A New Era in Treating Urologic Cancers",
          slug: "robotic-surgery-urologic-cancer",
          excerpt: "The daVinci robotic system enhances surgical accuracy with high-definition 3D imaging and micro-maneuverability, leading to superior oncological outcomes.",
          category: "Technology",
          date: "April 14, 2026",
          readTime: "7",
          author: "Prof. Dr. Basri Çakıroğlu",
          content: `### What is Robotic Surgery?
Robotic-assisted surgery is a minimally invasive technique where the surgeon sits at a specialized console, manipulating high-precision surgical instruments attached to robotic arms. These arms enter the patient through small keyhole ports (0.8 - 1 cm wide). In urology, it has become the global gold standard for treating prostate, kidney, and bladder cancers.

### Technological Advancements Enhancing Outcomes:
* **High-Definition 3D Visualization:** The surgeon views a magnified (up to 15x) stereoscopic view of the pelvic cavity. This exposes microscopic blood vessels, nerve bundles, and tumor boundaries invisible to the naked eye.
* **Tremor Filtering Technology:** Tiny physiological hand tremors of the surgeon are filtered out by the software, delivering stable and extremely precise micro-dissections.
* **EndoWrist Maneuverability:** Unlike stiff laparoscopic instruments, the robotic wrist can rotate and articulate up to 540 degrees, enabling effortless suturing and dissection even inside the narrowest recesses of the male pelvis.

### Vital Patient Benefits:
1. **Minimal Pain and Blood Loss:** Small incisions result in minimal tissue trauma, minimal blood loss, and significantly reduced postoperative discomfort.
2. **Shorter Hospital Stay:** Patients are mobile on Day 1 and are usually discharged in 1-2 days, returning to normal routines much faster than open-surgery patients.
3. **Oncological Precision (Negative Margins):** The enhanced visualization allows for optimal cancer clearance by identifying precise tissue planes around the tumor.
4. **Preserving Quality of Life (Continence & Potency):** In radical prostatectomy, the delicate neurovascular bundles responsible for erectile function and urinary continence are spared with high precision, minimizing the occurrence of post-surgical incontinence or erectile dysfunction.`
        }
      ];
};

// Professional Contact Details and Mapping Info
export const contactDetails: ContactInfo = {
  phone: "+902165550055",
  phoneFormatted: "+90 (216) 555 00 55",
  email: "info@basricakiroglu.com",
  address: "Bağdat Caddesi No: 345, Kat: 3, Kadıköy / İstanbul (Klinik Rezidans)",
  // This is a premium medical area placeholder map, visually stunning
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.3456789!2d29.0765432!3d40.9765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU4JzM1LjYiTiAyOcKwMDQnMzUuNiJF!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str",
  gmapsDirectionUrl: "https://maps.google.com/?q=Bagdat+Caddesi+Kadikoy+Istanbul",
  hours: [
    { days: "Pazartesi - Cuma / Mon - Fri", hours: "09:00 - 18:00" },
    { days: "Cumartesi / Saturday", hours: "09:00 - 14:00" },
    { days: "Pazar / Sunday", hours: "Kapalı / Closed" }
  ]
};
