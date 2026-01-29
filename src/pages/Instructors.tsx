import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n';

const instructors = [
  {
    id: 1,
    name: { ko: '비비안', en: 'Vivian' },
    role: { ko: '대표 / 수석 보컬 트레이너', en: 'Founder / Head Vocal Trainer' },
    specialties: { ko: ['발성 교정', 'K-POP 보컬', '입시 보컬'], en: ['Vocal Correction', 'K-POP Vocals', 'Audition Prep'] },
    experience: { ko: '10년+ 보컬 트레이닝 경력', en: '10+ years vocal training experience' },
    image: '/placeholder.svg',
  },
  {
    id: 2,
    name: { ko: '수진', en: 'Sujin' },
    role: { ko: '보컬 트레이너', en: 'Vocal Trainer' },
    specialties: { ko: ['팝 보컬', '재즈 보컬', '음정 교정'], en: ['Pop Vocals', 'Jazz Vocals', 'Pitch Correction'] },
    experience: { ko: '7년 보컬 트레이닝 경력', en: '7 years vocal training experience' },
    image: '/placeholder.svg',
  },
  {
    id: 3,
    name: { ko: '민준', en: 'Minjun' },
    role: { ko: '보컬 트레이너', en: 'Vocal Trainer' },
    specialties: { ko: ['R&B', '소울', '남성 보컬'], en: ['R&B', 'Soul', 'Male Vocals'] },
    experience: { ko: '5년 보컬 트레이닝 경력', en: '5 years vocal training experience' },
    image: '/placeholder.svg',
  },
  {
    id: 4,
    name: { ko: '하늘', en: 'Haneul' },
    role: { ko: '키즈 보컬 전문 트레이너', en: 'Kids Vocal Specialist' },
    specialties: { ko: ['아동 음악 교육', '동요', '뮤지컬'], en: ['Children Music Education', 'Nursery Songs', 'Musical'] },
    experience: { ko: '6년 아동 음악 교육 경력', en: '6 years children music education' },
    image: '/placeholder.svg',
  },
];

export default function Instructors() {
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-navy py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              {t('nav.instructors')}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              {language === 'ko'
                ? '대표의 엄격한 교육과정을 거친 전문 강사진이 여러분과 함께합니다.'
                : 'Professional instructors trained through our rigorous program are here for you.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {instructors.map((instructor) => (
              <Card key={instructor.id} className="overflow-hidden border-none bg-secondary/30">
                <div className="flex flex-col sm:flex-row">
                  <div className="aspect-square w-full bg-muted sm:w-48 shrink-0">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name[language]}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <CardHeader>
                      <CardTitle className="text-xl">{instructor.name[language]}</CardTitle>
                      <CardDescription className="text-accent font-medium">
                        {instructor.role[language]}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-sm font-medium mb-1">
                          {language === 'ko' ? '전문 분야' : 'Specialties'}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {instructor.specialties[language].map((specialty) => (
                            <span 
                              key={specialty}
                              className="rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {instructor.experience[language]}
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training System */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold">
              {language === 'ko' ? 'FVM 강사 트레이닝 시스템' : 'FVM Instructor Training System'}
            </h2>
            <p className="mb-8 text-muted-foreground">
              {language === 'ko'
                ? 'FVM의 모든 강사는 대표의 체계적인 트레이닝 프로그램을 이수합니다. 동일한 교육 철학과 방법론을 공유하여 어떤 강사와 함께해도 일관된 품질의 레슨을 받으실 수 있습니다.'
                : 'All FVM instructors complete our systematic training program. They share the same educational philosophy and methodology, ensuring consistent lesson quality with any instructor.'
              }
            </p>
            <Button asChild size="lg" className="bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FEE500]/90">
              <a href="https://pf.kakao.com/_example" target="_blank" rel="noopener noreferrer">
                {t('cta.consult')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
