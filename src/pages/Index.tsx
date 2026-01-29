import { Link } from 'react-router-dom';
import { ArrowRight, Mic, Monitor, Users, Globe, Sprout, BookOpen, Award, Settings } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const services = [
  { key: 'private', path: '/services/private', icon: Mic, color: 'text-accent' },
  { key: 'online', path: '/services/online', icon: Monitor, color: 'text-accent' },
  { key: 'group', path: '/services/group', icon: Users, color: 'text-accent' },
  { key: 'global', path: '/services/global', icon: Globe, color: 'text-accent' },
  { key: 'kids', path: '/services/kids', icon: Sprout, color: 'text-kids-coral' },
];

const philosophyItems = [
  { key: 'curriculum', icon: BookOpen },
  { key: 'instructors', icon: Award },
  { key: 'system', icon: Settings },
];

const reviews = [
  {
    id: 1,
    name: '김서연',
    nameEn: 'Seoyeon Kim',
    service: 'private',
    content: {
      ko: '3개월 동안 꾸준히 레슨을 받으면서 고음이 편해지고, 노래에 감정을 담는 법을 배웠어요. 선생님이 정말 체계적으로 가르쳐 주세요!',
      en: 'After 3 months of consistent lessons, high notes became easier and I learned how to put emotion into my singing. The teacher is very systematic!'
    }
  },
  {
    id: 2,
    name: '이준호',
    nameEn: 'Junho Lee',
    service: 'online',
    content: {
      ko: '해외에서 온라인으로 수업 받고 있는데, 대면 못지않게 꼼꼼한 피드백을 받을 수 있어서 만족해요.',
      en: 'Taking online classes from abroad, and I\'m satisfied with the detailed feedback that rivals in-person lessons.'
    }
  },
  {
    id: 3,
    name: '박지민 (학부모)',
    nameEn: 'Jimin Park (Parent)',
    service: 'kids',
    content: {
      ko: '아이가 방문 수업을 너무 좋아해요! 집에서 편하게 배울 수 있어서 부모로서도 만족스럽습니다.',
      en: 'My child loves the home visit lessons! As a parent, I\'m satisfied that they can learn comfortably at home.'
    }
  },
];

export default function Index() {
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-navy py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="mb-6 text-xl text-gradient-gold md:text-2xl lg:text-3xl">
              {t('hero.subtitle')}
            </p>
            <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
              {t('hero.description')}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="https://pf.kakao.com/_example" target="_blank" rel="noopener noreferrer">
                  {t('hero.cta')}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/services">
                  {t('services.viewAll')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {t('philosophy.title')}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {philosophyItems.map((item, index) => (
              <Card
                key={item.key}
                className="group border-none bg-secondary/50 shadow-none transition-all hover:bg-secondary hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">
                    {t(`philosophy.${item.key}.title`)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {t(`philosophy.${item.key}.desc`)}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {t('services.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.key}
                to={service.path}
                className="group"
              >
                <Card className={cn(
                  "h-full border-2 border-transparent transition-all hover:border-accent hover:shadow-lg",
                  service.key === 'kids' && "bg-kids-peach/20 hover:bg-kids-peach/30"
                )}>
                  <CardHeader>
                    <div className={cn(
                      "mb-2 flex h-12 w-12 items-center justify-center rounded-lg transition-colors",
                      service.key === 'kids' 
                        ? "bg-kids-coral/20 text-kids-coral group-hover:bg-kids-coral group-hover:text-white"
                        : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                    )}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      {t(`service.${service.key}`)}
                      <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {t(`service.${service.key}.desc`)}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                {t('services.viewAll')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Highlight Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {t('reviews.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('reviews.subtitle')}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <Card key={review.id} className="border-none bg-secondary/30 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                      {(language === 'ko' ? review.name : review.nameEn).charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-base">
                        {language === 'ko' ? review.name : review.nameEn}
                      </CardTitle>
                      <CardDescription className="text-xs">
                        {t(`service.${review.service}`)}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80">
                    "{review.content[language]}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/reviews">
                {t('common.viewMore')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-navy py-16 md:py-20">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-3xl">
            {language === 'ko' ? '지금 바로 상담을 시작하세요' : 'Start Your Consultation Today'}
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            {language === 'ko' 
              ? '카카오톡으로 편하게 문의해 주세요. 빠르게 답변 드리겠습니다.'
              : 'Contact us via KakaoTalk. We\'ll respond promptly.'
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
