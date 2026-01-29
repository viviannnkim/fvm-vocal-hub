import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Language = 'ko' | 'en';

interface Translations {
  [key: string]: {
    ko: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { ko: '홈', en: 'Home' },
  'nav.services': { ko: '서비스', en: 'Services' },
  'nav.curriculum': { ko: '커리큘럼', en: 'Curriculum' },
  'nav.instructors': { ko: '강사진', en: 'Instructors' },
  'nav.reviews': { ko: '수강 후기', en: 'Reviews' },
  'nav.blog': { ko: '블로그', en: 'Blog' },
  'nav.contact': { ko: '문의하기', en: 'Contact' },

  // Services
  'service.private': { ko: '1:1 프라이빗 보컬레슨', en: '1:1 Private Vocal Lesson' },
  'service.online': { ko: '온라인 보컬 레슨', en: 'Online Vocal Lesson' },
  'service.group': { ko: '그룹 레슨', en: 'Group Lesson' },
  'service.global': { ko: '글로벌 클래스', en: 'Global Class' },
  'service.kids': { ko: 'FVM Kids Vocal', en: 'FVM Kids Vocal' },

  // Hero Section
  'hero.title': { ko: 'From Vivian Music', en: 'From Vivian Music' },
  'hero.subtitle': { ko: '당신의 목소리를 빛나게', en: 'Make Your Voice Shine' },
  'hero.description': { 
    ko: '대표가 설계한 체계적인 커리큘럼과 트레이닝된 강사진이 함께하는 프리미엄 보컬 교육',
    en: 'Premium vocal education with systematic curriculum designed by our founder and trained instructors'
  },
  'hero.cta': { ko: '상담 신청하기', en: 'Book Consultation' },

  // Brand Philosophy
  'philosophy.title': { ko: '왜 FVM인가요?', en: 'Why FVM?' },
  'philosophy.curriculum.title': { ko: '대표 설계 커리큘럼', en: 'Founder-Designed Curriculum' },
  'philosophy.curriculum.desc': { 
    ko: '보컬 전문가가 직접 설계한 체계적인 커리큘럼으로 효과적인 성장을 약속합니다.',
    en: 'Systematic curriculum designed by vocal experts promises effective growth.'
  },
  'philosophy.instructors.title': { ko: '트레이닝된 강사진', en: 'Trained Instructors' },
  'philosophy.instructors.desc': { 
    ko: '엄격한 교육과정을 거친 전문 강사진이 1:1 맞춤 지도를 제공합니다.',
    en: 'Professional instructors with rigorous training provide personalized guidance.'
  },
  'philosophy.system.title': { ko: '체계적인 운영 시스템', en: 'Systematic Operations' },
  'philosophy.system.desc': { 
    ko: '진도 관리부터 피드백까지, 완벽한 시스템으로 관리합니다.',
    en: 'From progress tracking to feedback, managed with a perfect system.'
  },

  // Services Section
  'services.title': { ko: '서비스 안내', en: 'Our Services' },
  'services.subtitle': { 
    ko: '당신에게 맞는 레슨을 찾아보세요',
    en: 'Find the lesson that fits you'
  },
  'services.viewAll': { ko: '전체 서비스 보기', en: 'View All Services' },
  'services.learnMore': { ko: '자세히 보기', en: 'Learn More' },

  // Service Descriptions
  'service.private.desc': { 
    ko: '개인 맞춤형 1:1 보컬 트레이닝으로 당신만의 목소리를 찾아드립니다.',
    en: 'Personalized 1:1 vocal training to help you find your unique voice.'
  },
  'service.online.desc': { 
    ko: '언제 어디서나, 온라인으로 받는 프로페셔널 보컬 레슨',
    en: 'Professional vocal lessons online, anytime, anywhere.'
  },
  'service.group.desc': { 
    ko: '함께 성장하는 즐거움, 소규모 그룹 보컬 레슨',
    en: 'The joy of growing together in small group vocal lessons.'
  },
  'service.global.desc': { 
    ko: '외국인 및 해외 거주자를 위한 영어 보컬 클래스',
    en: 'English vocal classes for foreigners and overseas residents.'
  },
  'service.kids.desc': { 
    ko: '우리 아이 첫 보컬 레슨, 방문 수업으로 편하게',
    en: "Your child's first vocal lesson, conveniently at home."
  },

  // Reviews
  'reviews.title': { ko: '수강생 후기', en: 'Student Reviews' },
  'reviews.subtitle': { ko: 'FVM과 함께한 분들의 이야기', en: 'Stories from those who joined FVM' },

  // CTA
  'cta.kakao': { ko: '카카오톡 상담', en: 'KakaoTalk Consultation' },
  'cta.consult': { ko: '상담 신청하기', en: 'Book Consultation' },

  // Footer
  'footer.brand': { ko: 'From Vivian Music', en: 'From Vivian Music' },
  'footer.description': { 
    ko: '체계적인 커리큘럼과 전문 강사진이 함께하는 프리미엄 보컬 교육 브랜드',
    en: 'Premium vocal education brand with systematic curriculum and professional instructors'
  },
  'footer.quickLinks': { ko: '바로가기', en: 'Quick Links' },
  'footer.services': { ko: '서비스', en: 'Services' },
  'footer.contact': { ko: '문의', en: 'Contact' },
  'footer.copyright': { 
    ko: '© 2024 FVM. All rights reserved.',
    en: '© 2024 FVM. All rights reserved.'
  },

  // Common
  'common.viewMore': { ko: '더 보기', en: 'View More' },
  'common.goBack': { ko: '뒤로 가기', en: 'Go Back' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ko');

  const t = useCallback((key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
