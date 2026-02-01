import { Link } from 'react-router-dom';
import { ArrowRight, Mic, Monitor, Users, Globe, Sprout } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';

const KAKAO_CHANNEL_URL = 'https://pf.kakao.com/_WvSxjxj';

const services = [
  {
    key: 'private',
    path: '/services/private',
    icon: Mic,
    price: { ko: '월 200,000원~', en: 'From ₩200,000/mo' },
    features: {
      ko: ['1:1 집중 피드백', '체계적인 발성과 호흡 트레이닝', '단계별 실력향상 관리'],
      en: ['1:1 focused feedback', 'Systematic voice & breathing training', 'Step-by-step progress']
    },
    target: { ko: '취미 · 입시 · 전문', en: 'Hobby · Audition · Pro' }
  },
  {
    key: 'online',
    path: '/services/online',
    icon: Monitor,
    price: { ko: '월 200,000원~', en: 'From ₩200,000/mo' },
    features: {
      ko: ['고화질 화상수업 (ZOOM)', '익숙한 공간에서 편하게', '국내·해외 어디서나'],
      en: ['HD video lessons (ZOOM)', 'Learn in your own space', 'Available worldwide']
    },
    target: { ko: '국내·해외 거주자', en: 'Domestic · International' }
  },
  {
    key: 'group',
    path: '/services/group',
    icon: Users,
    price: { ko: '인당 월 150,000원', en: '₩150,000/person/mo' },
    features: {
      ko: ['2:1 레슨', '함께 듣는 피드백 학습효과', '가성비 있는 수강료'],
      en: ['2:1 lessons', 'Learning from shared feedback', 'Cost-effective']
    },
    target: { ko: '친구 · 연인과 함께', en: 'With friends · couples' }
  },
  {
    key: 'global',
    path: '/services/global',
    icon: Globe,
    price: { ko: '월 180,000원~', en: 'From ₩180,000/mo' },
    features: {
      ko: ['영어로 진행', 'K-POP 보컬 테크닉', '한국어 발음 교정'],
      en: ['Conducted in English', 'K-POP vocal techniques', 'Korean pronunciation']
    },
    target: { ko: '외국인 · 교포', en: 'Foreigners · Korean diaspora' }
  },
  {
    key: 'kids',
    path: '/services/kids',
    icon: Sprout,
    price: { ko: '월 220,000원', en: '₩220,000/mo' },
    features: {
      ko: ['방문레슨으로 안전하게', '대표 직접 설계 커리큘럼', '정서 발달과 자신감 향상'],
      en: ['Safe home visit lessons', 'Director-designed curriculum', 'Emotional growth']
    },
    target: { ko: '8~17세', en: 'Ages 8-17' }
  },
];

export default function Services() {
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
              Services
            </p>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              {t('services.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.key}
                to={service.path}
                className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Icon & Target Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                    {service.target[language]}
                  </span>
                </div>

                {/* Title & Price */}
                <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                  {t(`service.${service.key}`)}
                </h3>
                <p className="text-sm font-medium text-accent mb-3">
                  {service.price[language]}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {t(`service.${service.key}.desc`)}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features[language].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-foreground/70">
                      <div className="h-1 w-1 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <div className="flex items-center text-sm font-medium text-accent">
                  {t('services.learnMore')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            {language === 'ko' ? '어떤 레슨이 맞는지 모르겠다면?' : 'Not sure which lesson is right for you?'}
          </h2>
          <p className="mb-8 text-muted-foreground max-w-md mx-auto">
            {language === 'ko'
              ? '카카오톡으로 문의해 주시면 맞춤 상담을 도와드립니다.'
              : 'Contact us via KakaoTalk for personalized consultation.'
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
