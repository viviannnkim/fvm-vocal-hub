import { Link } from 'react-router-dom';
import { ArrowLeft, Mic, Check, Clock, Target, BookOpen, MessageSquare } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';

const KAKAO_CHANNEL_URL = 'https://pf.kakao.com/_WvSxjxj';

export default function PrivateLesson() {
  const { t, language } = useLanguage();

  const highlights = language === 'ko'
    ? [
        '1:1 집중 피드백',
        '체계적인 발성과 호흡 트레이닝',
        '단계별 실력향상 관리',
      ]
    : [
        '1:1 Focused Feedback',
        'Systematic Voice & Breathing Training',
        'Step-by-step Progress Management',
      ];

  const features = language === 'ko'
    ? [
        '노래를 취미로 제대로 배워보고 싶은 분',
        '1:1 프라이빗한 환경에서 집중하고 싶은 분',
        '호흡, 발성 등에 고민이 있으신 분',
        '노래를 처음 배우거나 기초부터 시작하고 싶으신 분',
        '오디션이나 입시를 준비하시는 분',
      ]
    : [
        'Those who want to properly learn singing as a hobby',
        'Those who want to focus in a private 1:1 environment',
        'Those who have concerns about breathing and vocalization',
        'Beginners or those who want to start from basics',
        'Those preparing for auditions or entrance exams',
      ];

  const process = language === 'ko'
    ? [
        { icon: Target, step: '01', title: '상담 & 레벨 테스트', desc: '목표와 현재 실력을 파악한 후 개인 맞춤 커리큘럼을 설계합니다.' },
        { icon: BookOpen, step: '02', title: '이론 레슨', desc: '호흡·발성·발음의 기본 개념을 이론적으로 정리합니다.' },
        { icon: Clock, step: '03', title: '정규 레슨', desc: '주 1회 또는 주 2회, 개인 일정과 목표에 맞춰 트레이닝을 진행합니다.' },
        { icon: MessageSquare, step: '04', title: '피드백 또는 녹음 공유', desc: '수업 후 피드백 또는 녹음 자료를 공유하며 성장 과정을 확인할 수 있는 리포트를 제공합니다.' },
      ]
    : [
        { icon: Target, step: '01', title: 'Consultation & Level Test', desc: 'Understand your goals and current level, then design a personalized curriculum.' },
        { icon: BookOpen, step: '02', title: 'Theory Lesson', desc: 'Organize the basic concepts of breathing, vocalization, and pronunciation theoretically.' },
        { icon: Clock, step: '03', title: 'Regular Lessons', desc: 'Training once or twice a week, tailored to your schedule and goals.' },
        { icon: MessageSquare, step: '04', title: 'Feedback & Recording', desc: 'Share feedback or recordings after class with progress reports.' },
      ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <Link
            to="/services"
            className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('common.goBack')}
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Mic className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium tracking-widest text-accent uppercase">
                Private Lesson
              </p>
            </div>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
              {language === 'ko' ? '1:1 프라이빗 보컬레슨' : '1:1 Private Vocal Lesson'}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {language === 'ko'
                ? '개인 맞춤형 1:1 보컬 트레이닝으로 당신만의 목소리를 찾아드립니다.'
                : 'Find your unique voice with personalized 1:1 vocal training.'
              }
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
              <span>
                {language === 'ko'
                  ? '취미반 기준 월 200,000원~ (전문·입시 별도)'
                  : 'From ₩200,000/month for hobby class (Professional/Audition separate)'
                }
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50">
                  <Check className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-2xl font-bold md:text-3xl">
                {language === 'ko' ? '이런 분들에게 추천해요!' : 'Recommended for!'}
              </h2>
              <ul className="space-y-5">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                {language === 'ko' ? '레슨 진행 방식' : 'Lesson Process'}
              </h2>
              <p className="mb-8 text-sm text-muted-foreground">
                {language === 'ko' ? '(취미반 기준, 전문·입시 별도)' : '(Hobby class standard, Professional/Audition separate)'}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {process.map((item) => (
                  <div
                    key={item.step}
                    className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span className="text-2xl font-bold text-accent/50">{item.step}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            {language === 'ko' ? '1:1 레슨 상담 신청하기' : 'Apply for 1:1 Lesson Consultation'}
          </h2>
          <p className="mb-8 text-muted-foreground max-w-md mx-auto">
            {language === 'ko'
              ? '카카오톡으로 편하게 문의해 주세요.'
              : 'Contact us via KakaoTalk.'
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
