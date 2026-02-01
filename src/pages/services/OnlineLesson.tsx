import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Check, Wifi, Camera, Volume2, FileText } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';

const KAKAO_CHANNEL_URL = 'https://pf.kakao.com/_WvSxjxj';

export default function OnlineLesson() {
  const { t, language } = useLanguage();

  const features = language === 'ko'
    ? [
        '고화질 화상수업 (ZOOM)',
        '익숙한 공간에서 편하게 수업',
        '긴장 없이 소리에 집중할 수 있는 환경',
        '국내·해외에서 가능',
      ]
    : [
        'HD video lessons (ZOOM)',
        'Learn comfortably in your own space',
        'Focus on your voice without tension',
        'Available domestically and internationally',
      ];

  const requirements = language === 'ko'
    ? [
        { icon: Wifi, title: '안정적인 인터넷 환경 (Zoom 설치)' },
        { icon: Camera, title: '웹캠 및 마이크' },
        { icon: Volume2, title: '조용한 수업 환경' },
        { icon: FileText, title: '물 또는 악보 (아이패드 가능)' },
      ]
    : [
        { icon: Wifi, title: 'Stable internet (Zoom installed)' },
        { icon: Camera, title: 'Webcam and microphone' },
        { icon: Volume2, title: 'Quiet lesson environment' },
        { icon: FileText, title: 'Water or sheet music (iPad OK)' },
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
                <Monitor className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium tracking-widest text-accent uppercase">
                Online Lesson
              </p>
            </div>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
              {language === 'ko' ? '온라인 보컬레슨' : 'Online Vocal Lesson'}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {language === 'ko'
                ? '어디서든 전문 보컬 트레이너의 레슨을 받을 수 있습니다.'
                : 'Get professional vocal training from anywhere in the world.'
              }
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
              <span>
                {language === 'ko'
                  ? '취미반 기준 월 200,000원 (주 1회, 월 4회)'
                  : 'From ₩200,000/month for hobby class (once a week, 4 sessions)'
                }
              </span>
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
                {language === 'ko' ? '온라인 레슨의 장점' : 'Benefits of Online Lessons'}
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
                {language === 'ko' ? '수업 전 준비물' : 'What You Need'}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {requirements.map((item, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <span className="font-medium">{item.title}</span>
                    </div>
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
            {language === 'ko' ? '온라인 레슨 상담 신청하기' : 'Apply for Online Lesson Consultation'}
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
