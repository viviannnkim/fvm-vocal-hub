import { BookOpen, Target, Award, Users, Settings } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const KAKAO_CHANNEL_URL = 'https://pf.kakao.com/_WvSxjxj';

export default function Curriculum() {
  const { t, language } = useLanguage();

  const phases = language === 'ko'
    ? [
        { phase: '01', title: '기초 발성', desc: '호흡, 발성, 발음, 공명 등의 기본기를 다집니다.' },
        { phase: '02', title: '음정과 리듬', desc: '정확한 음정과 리듬 감각을 훈련합니다.' },
        { phase: '03', title: '테크닉', desc: '비브라토, 믹스보이스, 멜리즈마 등 다양한 테크닉 훈련을 진행합니다.' },
        { phase: '04', title: '감정표현 및 실전', desc: '노래에 표현되는 감정과 스토리를 담는 법을 익힙니다.' },
      ]
    : [
        { phase: '01', title: 'Basic Vocalization', desc: 'Build fundamentals of breathing, vocalization, pronunciation, and resonance.' },
        { phase: '02', title: 'Pitch & Rhythm', desc: 'Train accurate pitch and rhythm sense.' },
        { phase: '03', title: 'Techniques', desc: 'Practice various techniques like vibrato, mix voice, and melisma.' },
        { phase: '04', title: 'Expression & Performance', desc: 'Learn to convey emotion and story through singing.' },
      ];

  const systemFeatures = language === 'ko'
    ? [
        { icon: Target, title: '맞춤형 커리큘럼', desc: '각자의 목소리와 방향에 맞춘 개인별 레슨 설계' },
        { icon: BookOpen, title: '대표 설계 프로그램', desc: '현장 경험을 기반으로 검증된 레슨 시스템' },
        { icon: Users, title: '트레이닝된 강사진', desc: '대표 트레이닝을 거친 일관된 퀄리티의 강사진' },
        { icon: Settings, title: '체계적인 운영 시스템', desc: '수업에만 집중할 수 있도록 설계된 관리 시스템' },
      ]
    : [
        { icon: Target, title: 'Custom Curriculum', desc: 'Personalized lesson design tailored to your voice and goals' },
        { icon: BookOpen, title: 'Expert-Designed Program', desc: 'Proven lesson system based on real-world experience' },
        { icon: Users, title: 'Trained Instructors', desc: 'Consistent quality instructors trained by our founder' },
        { icon: Settings, title: 'Systematic Operations', desc: 'Management system designed for focused learning' },
      ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
              Curriculum
            </p>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              {t('nav.curriculum')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'ko'
                ? '대표가 직접 설계한 체계적인 커리큘럼으로 효과적인 성장을 약속합니다.'
                : 'Systematic curriculum designed by our founder promises effective growth.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Phases - Zigzag Layout */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-16 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
            {language === 'ko' ? '단계별 커리큘럼' : 'Step-by-Step Curriculum'}
          </h2>

          <div className="space-y-12 lg:space-y-0">
            {phases.map((phase, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={phase.phase}
                  className={cn(
                    "relative flex flex-col lg:flex-row lg:items-center",
                    !isEven && "lg:flex-row-reverse"
                  )}
                >
                  {/* Content Card */}
                  <div className={cn(
                    "flex-1 lg:w-1/2",
                    isEven ? "lg:pr-16" : "lg:pl-16"
                  )}>
                    <div className={cn(
                      "p-8 rounded-2xl bg-card border border-border/50 transition-all hover:shadow-lg hover:border-accent/30",
                      isEven ? "lg:text-right" : "lg:text-left"
                    )}>
                      <div className={cn(
                        "flex items-center gap-4 mb-4",
                        isEven ? "lg:justify-end" : "lg:justify-start"
                      )}>
                        <span className="text-4xl font-bold text-accent/20">
                          {phase.phase}
                        </span>
                        <h3 className="text-xl font-bold">{phase.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {phase.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Line & Circle (Desktop) */}
                  <div className="hidden lg:flex flex-col items-center absolute left-1/2 -translate-x-1/2 top-0 h-full">
                    {/* Vertical Line */}
                    <div className={cn(
                      "w-px bg-border flex-1",
                      index === 0 && "mt-12"
                    )} />
                    {/* Circle */}
                    <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shrink-0 shadow-lg">
                      {phase.phase}
                    </div>
                    {/* Vertical Line */}
                    <div className={cn(
                      "w-px bg-border flex-1",
                      index === phases.length - 1 && "mb-12"
                    )} />
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden lg:block flex-1 lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Features */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
              System
            </p>
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              {language === 'ko' ? 'FVM 운영 시스템' : 'FVM Operating System'}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {systemFeatures.map((feature, index) => (
              <Card key={feature.title} className="border border-border/50 bg-card text-center transition-all hover:shadow-lg hover:border-accent/30">
                <CardContent className="p-6">
                  <div className="relative mx-auto mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent mx-auto">
                      <feature.icon className="h-7 w-7" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mb-2 font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            {language === 'ko' ? '체계적인 보컬 교육을 시작하세요' : 'Start Your Systematic Vocal Education'}
          </h2>
          <p className="mb-8 text-muted-foreground max-w-md mx-auto">
            {language === 'ko'
              ? '카카오톡으로 편하게 상담을 신청해 주세요.'
              : 'Contact us via KakaoTalk for a consultation.'
            }
          </p>
          <Button asChild size="lg" className="h-14 px-8 bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FEE500]/90">
            <a href={KAKAO_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
              {t('cta.consult')}
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
