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
  'hero.title': { ko: '당신의 목소리가\n가장 빛나는 순간', en: 'Where Your Voice\nShines the Most' },
  'hero.subtitle': { ko: 'Where Your Voice Shines the Most', en: 'From Vivian Music' },
  'hero.description': {
    ko: '체계적인 커리큘럼과 검증된 강사진이 함께하는 프리미엄 보컬 교육',
    en: 'Premium vocal education with systematic curriculum and verified instructors'
  },
  'hero.cta': { ko: '상담 신청하기', en: 'Book Consultation' },

  // Brand Philosophy
  'philosophy.title': { ko: '왜 FVM인가요?', en: 'Why FVM?' },
  'philosophy.curriculum.title': { ko: '대표 설계 프로그램', en: 'Expert-Designed Program' },
  'philosophy.curriculum.desc': {
    ko: '10년 이상의 보컬 노하우를 바탕으로 전문가가 직접 설계한 커리큘럼으로 가장 빠르고 안전하게 효과적으로 성장합니다.',
    en: 'Grow effectively and safely with curriculum directly designed by experts with over 10 years of vocal expertise.'
  },
  'philosophy.instructors.title': { ko: '검증된 강사진', en: 'Verified Instructors' },
  'philosophy.instructors.desc': {
    ko: '검증된 실력과 교육 기준을 통과한 트레이닝된 강사진이 일관된 퀄리티의 레슨을 제공합니다.',
    en: 'Trained instructors who have passed verified skills and education standards provide consistent quality lessons.'
  },
  'philosophy.system.title': { ko: '체계적인 운영 시스템', en: 'Systematic Operations' },
  'philosophy.system.desc': {
    ko: '레슨부터 관리까지, 모든 과정이 정리된 체계적인 운영 시스템으로 안정적인 레슨 환경을 제공합니다.',
    en: 'From lessons to management, our systematic operations provide a stable learning environment.'
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
