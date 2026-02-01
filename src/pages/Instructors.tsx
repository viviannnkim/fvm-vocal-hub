import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';

const KAKAO_CHANNEL_URL = 'https://pf.kakao.com/_WvSxjxj';

interface Instructor {
  id: number;
  nameKo: string;
  nameEn: string;
  role: { ko: string; en: string };
  specialties: { ko: string[]; en: string[] };
  experience?: { ko: string; en: string };
  image?: string;
}

const instructors: Instructor[] = [
  {
    id: 1,
    nameKo: '비비안',
    nameEn: 'VIVIAN',
    role: { ko: '대표 / 보컬 디렉터', en: 'Founder / Vocal Director' },
    specialties: {
      ko: ['발성', 'K-POP', '취미/전문/입시', '온라인 클래스'],
      en: ['Vocalization', 'K-POP', 'Hobby/Pro/Audition', 'Online Class']
    },
    experience: { ko: '10년+ 보컬 트레이닝 경력', en: '10+ years vocal training' },
    image: '/images/profiles/vivian.jpeg',
  },
  {
    id: 2,
    nameKo: '모나',
    nameEn: 'MONA',
    role: { ko: '보컬 디렉터', en: 'Vocal Director' },
    specialties: {
      ko: ['발성', '글로벌 클래스', '취미', '음정교정'],
      en: ['Vocalization', 'Global Class', 'Hobby', 'Pitch Correction']
    },
    image: '/images/profiles/mona.jpeg',
  },
  {
    id: 3,
    nameKo: '수아',
    nameEn: 'SUA',
    role: { ko: '보컬 디렉터', en: 'Vocal Director' },
    specialties: {
      ko: ['발성', '음정교정', '취미', 'CCM'],
      en: ['Vocalization', 'Pitch Correction', 'Hobby', 'CCM']
    },
    image: '/images/profiles/sua.jpeg',
  },
  {
    id: 4,
    nameKo: '제이든',
    nameEn: 'JAYDEN',
    role: { ko: '보컬 디렉터', en: 'Vocal Director' },
    specialties: {
      ko: ['발성', '음정교정', '취미', '팝 보컬'],
      en: ['Vocalization', 'Pitch Correction', 'Hobby', 'Pop Vocal']
    },
    image: '/images/profiles/jayden.jpeg',
  },
  {
    id: 5,
    nameKo: '리엔',
    nameEn: 'LIEN',
    role: { ko: '보컬 디렉터', en: 'Vocal Director' },
    specialties: {
      ko: ['발성', '음정교정', '취미', '키즈 보컬'],
      en: ['Vocalization', 'Pitch Correction', 'Hobby', 'Kids Vocal']
    },
  },
  {
    id: 6,
    nameKo: '메이지',
    nameEn: 'MAISE',
    role: { ko: '보컬 디렉터', en: 'Vocal Director' },
    specialties: {
      ko: ['발성', '음정교정', '취미'],
      en: ['Vocalization', 'Pitch Correction', 'Hobby']
    },
  },
];

function InstructorCard({ instructor, language }: { instructor: Instructor; language: 'ko' | 'en' }) {
  const hasImage = instructor.image;

  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-card">
      {/* Image or Placeholder Background */}
      {hasImage ? (
        <img
          src={instructor.image}
          alt={`${instructor.nameKo} (${instructor.nameEn})`}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
          <span className="text-6xl font-bold text-accent/20">
            {instructor.nameEn.charAt(0)}
          </span>
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Content - Always visible at bottom */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        {/* Name & Role */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-white">
            {instructor.nameKo}
            <span className="ml-2 text-sm font-normal text-white/70">
              {instructor.nameEn}
            </span>
          </h3>
          <p className="text-sm text-accent">
            {instructor.role[language]}
          </p>
        </div>

        {/* Experience */}
        {instructor.experience && (
          <p className="mb-3 text-xs text-white/60">
            {instructor.experience[language]}
          </p>
        )}

        {/* Specialties */}
        <div className="flex flex-wrap gap-1.5">
          {instructor.specialties[language].map((specialty) => (
            <span
              key={specialty}
              className="rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-1 text-xs text-white"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Instructors() {
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
              Instructors
            </p>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              {t('nav.instructors')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'ko'
                ? '대표 트레이닝을 거친 전문 보컬 디렉터가 함께합니다.'
                : 'Professional vocal directors trained by our founder are here for you.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {instructors.map((instructor) => (
              <InstructorCard
                key={instructor.id}
                instructor={instructor}
                language={language}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">
              {language === 'ko' ? 'FVM 강사 철학' : 'FVM Instructor Philosophy'}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {language === 'ko'
                ? 'FVM 강사진은 대표 트레이닝을 통해 동일한 교육 철학과 방법을 공유하며, 안정적이고 신뢰할 수 있는 레슨을 진행합니다.'
                : 'FVM instructors share the same educational philosophy and methods through founder training, providing stable and reliable lessons.'
              }
            </p>
            <Button asChild size="lg" className="h-14 px-8 bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FEE500]/90">
              <a href={KAKAO_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                {t('cta.consult')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
