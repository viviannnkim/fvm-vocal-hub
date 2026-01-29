import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Check } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n';

export default function OnlineLesson() {
  const { t, language } = useLanguage();

  const features = language === 'ko' 
    ? [
        '고화질 화상 수업 (Zoom/Google Meet)',
        '실시간 음성 피드백',
        '수업 녹화본 제공',
        '해외 거주자도 수강 가능',
        '대면 수업과 동일한 커리큘럼',
      ]
    : [
        'HD video lessons (Zoom/Google Meet)',
        'Real-time voice feedback',
        'Lesson recordings provided',
        'Available for overseas residents',
        'Same curriculum as in-person',
      ];

  const requirements = language === 'ko'
    ? ['안정적인 인터넷 연결', '웹캠 및 마이크', '조용한 수업 환경', '이어폰 또는 헤드셋']
    : ['Stable internet connection', 'Webcam and microphone', 'Quiet lesson environment', 'Earphones or headset'];

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
              <Monitor className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                {t('service.online')}
              </h1>
              <p className="text-primary-foreground/80">
                {t('service.online.desc')}
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
                {language === 'ko' ? '온라인 레슨의 장점' : 'Benefits of Online Lessons'}
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
                {language === 'ko' ? '수업 전 준비물' : 'What You Need'}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {requirements.map((item, index) => (
                  <Card key={index} className="border-none bg-secondary/50">
                    <CardContent className="flex items-center gap-3 p-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium">{item}</span>
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
            {language === 'ko' ? '온라인 레슨 상담 신청하기' : 'Apply for Online Lesson Consultation'}
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
