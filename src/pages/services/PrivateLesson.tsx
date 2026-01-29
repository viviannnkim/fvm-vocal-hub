import { Link } from 'react-router-dom';
import { ArrowLeft, Mic, Check } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n';

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
        { step: '01', title: '상담', desc: '목표와 현재 실력 파악' },
        { step: '02', title: '레벨 테스트', desc: '맞춤 커리큘럼 설계' },
        { step: '03', title: '정규 레슨', desc: '주 1-2회 1:1 트레이닝' },
        { step: '04', title: '피드백', desc: '월별 성장 리포트 제공' },
      ]
    : [
        { step: '01', title: 'Consultation', desc: 'Understand goals and current level' },
        { step: '02', title: 'Level Test', desc: 'Design custom curriculum' },
        { step: '03', title: 'Regular Lessons', desc: '1-2 times per week training' },
        { step: '04', title: 'Feedback', desc: 'Monthly progress report' },
      ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-navy py-16 md:py-24">
        <div className="container">
          <Link 
            to="/services" 
            className="mb-6 inline-flex items-center text-sm text-primary-foreground/70 hover:text-primary-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('common.goBack')}
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 text-accent">
              <Mic className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                {t('service.private')}
              </h1>
              <p className="text-primary-foreground/80">
                {t('service.private.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold">
                {language === 'ko' ? '이런 분들께 추천해요' : 'Recommended for'}
              </h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-bold">
                {language === 'ko' ? '레슨 진행 방식' : 'Lesson Process'}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {process.map((item) => (
                  <Card key={item.step} className="border-none bg-secondary/50">
                    <CardContent className="p-4">
                      <span className="text-2xl font-bold text-accent">{item.step}</span>
                      <h3 className="mt-2 font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/50 py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold">
            {language === 'ko' ? '1:1 레슨 상담 신청하기' : 'Apply for 1:1 Lesson Consultation'}
          </h2>
          <p className="mb-8 text-muted-foreground">
            {language === 'ko' 
              ? '카카오톡으로 편하게 문의해 주세요.'
              : 'Contact us via KakaoTalk.'
            }
          </p>
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
