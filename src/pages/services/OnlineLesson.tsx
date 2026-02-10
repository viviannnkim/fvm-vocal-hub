import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Check, Wifi, Camera, Volume2, FileText } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';
import SEO from '@/components/SEO';

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
      <SEO
        title="온라인 보컬 레슨"
        description="어디서든 전문 보컬 트레이너의 레슨을 받을 수 있습니다. ZOOM을 통한 고화질 화상수업으로 국내외 어디서나 보컬 트레이닝이 가능합니다."
        path="/services/online"
      />
      {/* Hero */}
      <section className="py-12 md:py-24 bg-muted/30">
        <div className="container">
          <Link
            to="/services"
            className="mb-6 md:mb-8 inline-flex items-center text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="mr-1.5 md:mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
            {t('common.goBack')}
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 md:gap-3 mb-3 md:mb-4">
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-accent/10 text-accent">
                <Monitor className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <p className="text-xs md:text-sm font-semibold tracking-widest text-accent uppercase">
                Online Lesson
              </p>
            </div>
            <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl mb-3 md:mb-4">
              {language === 'ko' ? '온라인 보컬레슨' : 'Online Vocal Lesson'}
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              {language === 'ko'
                ? '어디서든 전문 보컬 트레이너의 레슨을 받을 수 있습니다.'
                : 'Get professional vocal training from anywhere in the world.'
              }
            </p>
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-medium">
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
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 md:mb-8 text-xl font-bold md:text-3xl">
                {language === 'ko' ? '온라인 레슨의 장점' : 'Benefits of Online Lessons'}
              </h2>
              <ul className="space-y-3 md:space-y-5">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 md:gap-4">
                    <div className="flex h-6 w-6 md:h-7 md:w-7 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Check className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    </div>
                    <span className="text-sm md:text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6 md:mb-8 text-xl font-bold md:text-3xl">
                {language === 'ko' ? '수업 전 준비물' : 'What You Need'}
              </h2>
              <div className="grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2">
                {requirements.map((item, index) => (
                  <div
                    key={index}
                    className="group p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-accent/10 text-accent">
                        <item.icon className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <span className="text-sm md:text-base font-medium">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-muted/30">
        <div className="container text-center px-6">
          <h2 className="mb-3 md:mb-4 text-xl font-bold md:text-3xl">
            {language === 'ko' ? '온라인 레슨 상담 신청하기' : 'Apply for Online Lesson Consultation'}
          </h2>
          <p className="mb-6 md:mb-8 text-sm md:text-base text-muted-foreground max-w-md mx-auto">
            {language === 'ko'
              ? '카카오톡으로 편하게 문의해 주세요.'
              : 'Contact us via KakaoTalk.'
            }
          </p>
          <Button asChild size="lg" className="h-12 md:h-14 px-6 md:px-8 text-sm md:text-base bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FEE500]/90">
            <a href={KAKAO_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
              {t('cta.consult')}
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
