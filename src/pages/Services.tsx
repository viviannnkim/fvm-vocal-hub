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
    features: {
      ko: ['개인 맞춤형 커리큘럼', '원하는 시간 예약', '1:1 집중 피드백'],
      en: ['Personalized curriculum', 'Flexible scheduling', '1:1 focused feedback']
    },
    target: { ko: '성인 · 직장인 · 입시생', en: 'Adults · Professionals · Students' }
  },
  {
    key: 'online',
    path: '/services/online',
    icon: Monitor,
    features: {
      ko: ['언제 어디서나 가능', '녹화 복습 제공', '실시간 화면 공유'],
      en: ['Anytime, anywhere', 'Recording for review', 'Real-time screen sharing']
    },
    target: { ko: '해외 거주자 · 바쁜 직장인', en: 'Overseas · Busy professionals' }
  },
  {
    key: 'group',
    path: '/services/group',
    icon: Users,
    features: {
      ko: ['소규모 3-5명 구성', '합리적인 수강료', '함께 성장하는 분위기'],
      en: ['Small groups of 3-5', 'Affordable tuition', 'Collaborative atmosphere']
    },
    target: { ko: '친구와 함께 · 취미반', en: 'With friends · Hobby class' }
  },
  {
    key: 'global',
    path: '/services/global',
    icon: Globe,
    features: {
      ko: ['영어로 진행', 'K-POP 보컬 스타일', '문화적 맥락 이해'],
      en: ['Conducted in English', 'K-POP vocal style', 'Cultural context']
    },
    target: { ko: '외국인 · 해외 거주자', en: 'Foreigners · Overseas' }
  },
  {
    key: 'kids',
    path: '/services/kids',
    icon: Sprout,
    features: {
      ko: ['가정 방문 수업', '아이 눈높이 커리큘럼', '재미있는 음악 교육'],
      en: ['Home visit lessons', 'Child-friendly curriculum', 'Fun music education']
    },
    target: { ko: '5-13세 아동', en: 'Ages 5-13' }
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

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {t(`service.${service.key}`)}
                </h3>
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
