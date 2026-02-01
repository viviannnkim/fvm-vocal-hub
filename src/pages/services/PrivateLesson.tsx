import { Link } from 'react-router-dom';
import { ArrowLeft, Mic, Check, Clock, Target, TrendingUp, FileText } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';

const KAKAO_CHANNEL_URL = 'https://pf.kakao.com/_WvSxjxj';

export default function PrivateLesson() {
  const { t, language } = useLanguage();

  const features = language === 'ko'
    ? [
        '개인 맞춤형 커리큘럼 설계',
        '발성, 호흡, 음정, 리듬 체계적 트레이닝',
        '원하는 곡 집중 연습',
        '녹음 및 피드백 제공',
        '레슨 시간 유연하게 조정',
      ]
    : [
        'Personalized curriculum design',
        'Systematic training: breathing, pitch, rhythm',
        'Focus on songs you want to learn',
        'Recording and feedback provided',
        'Flexible lesson scheduling',
      ];

  const process = language === 'ko'
    ? [
        { icon: Target, step: '01', title: '상담', desc: '목표와 현재 실력 파악' },
        { icon: FileText, step: '02', title: '레벨 테스트', desc: '맞춤 커리큘럼 설계' },
        { icon: Clock, step: '03', title: '정규 레슨', desc: '주 1-2회 1:1 트레이닝' },
        { icon: TrendingUp, step: '04', title: '피드백', desc: '월별 성장 리포트 제공' },
      ]
    : [
        { icon: Target, step: '01', title: 'Consultation', desc: 'Understand goals and current level' },
        { icon: FileText, step: '02', title: 'Level Test', desc: 'Design custom curriculum' },
        { icon: Clock, step: '03', title: 'Regular Lessons', desc: '1-2 times per week training' },
        { icon: TrendingUp, step: '04', title: 'Feedback', desc: 'Monthly progress report' },
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
              {t('service.private')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'ko'
                ? '1:1 맞춤 레슨으로 당신만의 목소리를 찾아드립니다.'
                : 'Find your unique voice with personalized 1:1 lessons.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-2xl font-bold md:text-3xl">
                {language === 'ko' ? '이런 분들께 추천해요' : 'Recommended for'}
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
              <h2 className="mb-8 text-2xl font-bold md:text-3xl">
                {language === 'ko' ? '레슨 진행 방식' : 'Lesson Process'}
              </h2>
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
