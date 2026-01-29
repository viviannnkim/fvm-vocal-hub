import { BookOpen, Target, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n';

export default function Curriculum() {
  const { t, language } = useLanguage();

  const phases = language === 'ko'
    ? [
        { phase: '1단계', title: '기초 발성', desc: '호흡, 발성, 공명의 기본기를 다집니다.', duration: '1-2개월' },
        { phase: '2단계', title: '음정 & 리듬', desc: '정확한 음정과 리듬 감각을 훈련합니다.', duration: '2-3개월' },
        { phase: '3단계', title: '테크닉', desc: '비브라토, 믹스보이스 등 다양한 기법을 배웁니다.', duration: '3-4개월' },
        { phase: '4단계', title: '감정 표현', desc: '노래에 감정과 스토리를 담는 법을 익힙니다.', duration: '지속' },
      ]
    : [
        { phase: 'Phase 1', title: 'Basic Vocalization', desc: 'Build fundamentals of breathing, vocalization, and resonance.', duration: '1-2 months' },
        { phase: 'Phase 2', title: 'Pitch & Rhythm', desc: 'Train accurate pitch and rhythm sense.', duration: '2-3 months' },
        { phase: 'Phase 3', title: 'Techniques', desc: 'Learn various techniques like vibrato and mix voice.', duration: '3-4 months' },
        { phase: 'Phase 4', title: 'Emotional Expression', desc: 'Learn to convey emotion and story through singing.', duration: 'Ongoing' },
      ];

  const systemFeatures = language === 'ko'
    ? [
        { icon: Target, title: '맞춤형 커리큘럼', desc: '개인 목표와 수준에 맞는 학습 계획' },
        { icon: TrendingUp, title: '진도 관리', desc: '매 레슨 기록과 월별 성장 리포트' },
        { icon: Users, title: '트레이닝된 강사진', desc: '대표 교육을 받은 전문 강사 배정' },
        { icon: CheckCircle, title: '피드백 시스템', desc: '녹음과 함께 상세한 피드백 제공' },
      ]
    : [
        { icon: Target, title: 'Custom Curriculum', desc: 'Learning plan tailored to your goals and level' },
        { icon: TrendingUp, title: 'Progress Tracking', desc: 'Lesson records and monthly progress reports' },
        { icon: Users, title: 'Trained Instructors', desc: 'Professional instructors trained by our founder' },
        { icon: CheckCircle, title: 'Feedback System', desc: 'Detailed feedback with recordings' },
      ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-navy py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              {t('nav.curriculum')}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              {language === 'ko'
                ? '대표가 직접 설계한 체계적인 커리큘럼으로 효과적인 성장을 약속합니다.'
                : 'Systematic curriculum designed by our founder promises effective growth.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Phases */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
            {language === 'ko' ? '단계별 커리큘럼' : 'Step-by-Step Curriculum'}
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[19px] top-0 hidden h-full w-0.5 bg-accent/30 md:left-1/2 md:-translate-x-1/2 lg:block" />
            
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <div 
                  key={phase.phase}
                  className={`relative flex flex-col gap-4 lg:flex-row lg:items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 lg:text-right">
                    {index % 2 === 0 && (
                      <Card className="border-none bg-secondary/50">
                        <CardHeader>
                          <div className="flex items-center gap-2 lg:justify-end">
                            <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                              {phase.phase}
                            </span>
                            <span className="text-sm text-muted-foreground">{phase.duration}</span>
                          </div>
                          <CardTitle className="text-xl">{phase.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">{phase.desc}</CardDescription>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                  
                  {/* Center Circle */}
                  <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground lg:flex">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  
                  <div className="flex-1">
                    {index % 2 !== 0 && (
                      <Card className="border-none bg-secondary/50">
                        <CardHeader>
                          <div className="flex items-center gap-2">
                            <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                              {phase.phase}
                            </span>
                            <span className="text-sm text-muted-foreground">{phase.duration}</span>
                          </div>
                          <CardTitle className="text-xl">{phase.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">{phase.desc}</CardDescription>
                        </CardContent>
                      </Card>
                    )}
                    {index % 2 === 0 && <div className="hidden lg:block" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Features */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
            {language === 'ko' ? 'FVM 운영 시스템' : 'FVM Operating System'}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {systemFeatures.map((feature) => (
              <Card key={feature.title} className="border-none bg-background text-center shadow-sm">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold">
            {language === 'ko' ? '체계적인 보컬 교육을 시작하세요' : 'Start Your Systematic Vocal Education'}
          </h2>
          <Button asChild size="lg" className="bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FEE500]/90">
            <a href="https://pf.kakao.com/_example" target="_blank" rel="noopener noreferrer">
              {t('cta.consult')}
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
