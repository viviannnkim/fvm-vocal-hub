import { Link } from 'react-router-dom';
import { ArrowRight, Mic, Monitor, Users, Globe, Sprout } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const services = [
  { 
    key: 'private', 
    path: '/services/private', 
    icon: Mic, 
    features: {
      ko: ['개인 맞춤형 커리큘럼', '원하는 시간 예약', '1:1 집중 피드백'],
      en: ['Personalized curriculum', 'Flexible scheduling', '1:1 focused feedback']
    },
    target: { ko: '성인, 직장인, 입시생', en: 'Adults, professionals, exam students' }
  },
  { 
    key: 'online', 
    path: '/services/online', 
    icon: Monitor,
    features: {
      ko: ['언제 어디서나 가능', '녹화 복습 제공', '실시간 화면 공유'],
      en: ['Anytime, anywhere', 'Recording for review', 'Real-time screen sharing']
    },
    target: { ko: '해외 거주자, 바쁜 직장인', en: 'Overseas residents, busy professionals' }
  },
  { 
    key: 'group', 
    path: '/services/group', 
    icon: Users,
    features: {
      ko: ['소규모 3-5명 구성', '합리적인 수강료', '함께 성장하는 분위기'],
      en: ['Small groups of 3-5', 'Affordable tuition', 'Collaborative atmosphere']
    },
    target: { ko: '친구와 함께, 취미반', en: 'With friends, hobby class' }
  },
  { 
    key: 'global', 
    path: '/services/global', 
    icon: Globe,
    features: {
      ko: ['영어로 진행', '한국 K-POP 보컬 스타일', '문화적 맥락 이해'],
      en: ['Conducted in English', 'K-POP vocal style', 'Cultural context understanding']
    },
    target: { ko: '외국인, 해외 거주자', en: 'Foreigners, overseas residents' }
  },
  { 
    key: 'kids', 
    path: '/services/kids', 
    icon: Sprout,
    features: {
      ko: ['가정 방문 수업', '아이 눈높이 커리큘럼', '재미있는 음악 교육'],
      en: ['Home visit lessons', 'Child-friendly curriculum', 'Fun music education']
    },
    target: { ko: '5-13세 아동', en: 'Children aged 5-13' }
  },
];

export default function Services() {
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-navy py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              {t('services.title')}
            </h1>
            <p className="text-lg text-primary-foreground/80 md:text-xl">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <Card 
                key={service.key}
                className={cn(
                  "group overflow-hidden border-2 border-transparent transition-all hover:border-accent hover:shadow-xl",
                  service.key === 'kids' && "bg-kids-peach/10"
                )}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-xl transition-colors",
                      service.key === 'kids'
                        ? "bg-kids-coral/20 text-kids-coral group-hover:bg-kids-coral group-hover:text-white"
                        : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                    )}>
                      <service.icon className="h-7 w-7" />
                    </div>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      {service.target[language]}
                    </span>
                  </div>
                  <CardTitle className="mt-4 text-2xl">
                    {t(`service.${service.key}`)}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {t(`service.${service.key}.desc`)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features[language].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-foreground/80">
                        <div className={cn(
                          "h-1.5 w-1.5 rounded-full",
                          service.key === 'kids' ? "bg-kids-coral" : "bg-accent"
                        )} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={cn(
                    "w-full",
                    service.key === 'kids' 
                      ? "bg-kids-coral text-white hover:bg-kids-coral/90"
                      : ""
                  )}>
                    <Link to={service.path}>
                      {t('services.learnMore')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            {language === 'ko' ? '어떤 레슨이 맞는지 모르겠다면?' : 'Not sure which lesson is right for you?'}
          </h2>
          <p className="mb-8 text-muted-foreground">
            {language === 'ko' 
              ? '카카오톡으로 문의해 주시면 맞춤 상담을 도와드립니다.'
              : 'Contact us via KakaoTalk for personalized consultation.'
            }
          </p>
          <Button asChild size="lg" className="bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FEE500]/90">
            <a href="https://pf.kakao.com/_example" target="_blank" rel="noopener noreferrer">
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.48 3 2 6.48 2 10.8c0 2.76 1.84 5.16 4.56 6.48-.2.72-.72 2.64-.84 3.04-.12.52.2.52.4.36.16-.12 2.52-1.68 3.56-2.36.76.12 1.52.16 2.32.16 5.52 0 10-3.48 10-7.68S17.52 3 12 3z"/>
              </svg>
              {t('cta.kakao')}
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
