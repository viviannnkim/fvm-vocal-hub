import { Link } from 'react-router-dom';
import { ArrowRight, Mic, Monitor, Users, Globe, Sprout, BookOpen, Award, Settings, MessageCircle } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const KAKAO_CHANNEL_URL = 'https://pf.kakao.com/_WvSxjxj';

const services = [
  { key: 'private', path: '/services/private', icon: Mic },
  { key: 'online', path: '/services/online', icon: Monitor },
  { key: 'group', path: '/services/group', icon: Users },
  { key: 'global', path: '/services/global', icon: Globe },
  { key: 'kids', path: '/services/kids', icon: Sprout, isKids: true },
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

function KakaoIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
      <path d="M10 0C4.4767 0 0 3.46596 0 7.74549C0 10.5302 1.89737 12.9709 4.74004 14.3335C4.53072 15.1007 3.98379 17.1049 3.87576 17.5348C3.74072 18.0706 4.07157 18.0574 4.2944 17.9185C4.46995 17.806 7.03579 16.0929 8.14315 15.3587C8.74409 15.4447 9.36529 15.491 10 15.491C15.5233 15.491 20 12.025 20 7.74549C20 3.46596 15.5233 0 10 0Z" fill="#371C1D"/>
    </svg>
  );
}

export default function Index() {
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Hero Section - 2 Column Layout */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

        {/* Subtle accent glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

        <div className="container relative z-10 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Founder Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
                {/* Image Container with accent border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 -rotate-3" />
                <div className="relative h-full rounded-2xl overflow-hidden border border-border/50 bg-card">
                  <img
                    src="/images/profiles/vivian.jpeg"
                    alt="Vivian - FVM 대표"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.classList.add('flex', 'items-center', 'justify-center', 'bg-muted');
                      target.parentElement!.innerHTML = `
                        <div class="text-center p-8">
                          <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                            <svg class="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <p class="text-sm text-muted-foreground">대표 사진</p>
                        </div>
                      `;
                    }}
                  />
                </div>

              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              {/* Brand Tag */}
              <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
                From Vivian Music
              </p>

              {/* Main Headline */}
              <h1 className="mb-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-snug lg:leading-normal whitespace-pre-line">
                {t('hero.title')}
              </h1>

              {/* English Subtitle */}
              <p className="mb-2 text-base text-muted-foreground sm:text-lg md:text-xl font-light tracking-wide">
                {language === 'ko' ? 'Where Your Voice Shines the Most' : t('hero.subtitle')}
              </p>

              {/* Description */}
              <p className="mb-8 text-base text-muted-foreground md:text-lg max-w-xl mx-auto lg:mx-0">
                {t('hero.description')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-8 text-base bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20"
                >
                  <a href={KAKAO_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                    <KakaoIcon />
                    {t('hero.cta')}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-base border-border hover:bg-muted"
                >
                  <Link to="/services">
                    {t('services.viewAll')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 pt-8 border-t border-border/50">
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent" />
                    <span>{language === 'ko' ? '전문 보컬 트레이너' : 'Professional Trainer'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-accent" />
                    <span>{language === 'ko' ? '1,000+ 수강생' : '1,000+ Students'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
              Why FVM
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {t('philosophy.title')}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {philosophyItems.map((item, index) => (
              <div
                key={item.key}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
                  {/* Number Badge */}
                  <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </span>

                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <item.icon className="h-7 w-7" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-bold">
                    {t(`philosophy.${item.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`philosophy.${item.key}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
              Services
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {t('services.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.key}
                to={service.path}
                className="group"
              >
                <Card className={cn(
                  "h-full border border-border/50 transition-all duration-300 hover:border-accent/50 hover:shadow-lg",
                  service.isKids && "bg-gradient-to-br from-kids-peach/10 to-kids-coral/5"
                )}>
                  <CardHeader>
                    <div className={cn(
                      "mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300",
                      service.isKids
                        ? "bg-kids-coral/20 text-kids-coral group-hover:bg-kids-coral group-hover:text-white"
                        : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                    )}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="flex items-center gap-2 text-lg group-hover:text-accent transition-colors">
                      {t(`service.${service.key}`)}
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {t(`service.${service.key}.desc`)}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="h-12 px-8">
              <Link to="/services">
                {t('services.viewAll')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
              Reviews
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {t('reviews.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('reviews.subtitle')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="border border-border/50 bg-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-base font-bold text-accent">
                      {(language === 'ko' ? review.name : review.nameEn).charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-base">
                        {language === 'ko' ? review.name : review.nameEn}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {t(`service.${review.service}`)}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    "{review.content[language]}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="h-12 px-8">
              <Link to="/reviews">
                {t('common.viewMore')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-accent/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
              Get Started
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {language === 'ko' ? '지금 바로 상담을 시작하세요' : 'Start Your Consultation Today'}
            </h2>
            <p className="mb-10 text-lg text-muted-foreground max-w-xl mx-auto">
              {language === 'ko'
                ? '카카오톡으로 편하게 문의해 주세요. 전문 상담사가 빠르게 답변 드리겠습니다.'
                : 'Contact us via KakaoTalk. Our specialists will respond promptly.'
              }
            </p>
            <Button
              asChild
              size="lg"
              className="h-16 px-10 text-lg bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FEE500]/90 shadow-xl"
            >
              <a href={KAKAO_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                <KakaoIcon />
                {t('cta.kakao')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
