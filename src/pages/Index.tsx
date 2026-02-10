import { Link } from 'react-router-dom';
import { ArrowRight, Mic, Monitor, Users, Globe, Sprout, BookOpen, Award, Settings, MessageCircle } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import SEO from '@/components/SEO';

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
    name: '이**',
    tag: { ko: '축가 준비', en: 'Wedding Song' },
    highlight: { ko: '당장 노래가 밋밋하지 않게 되는 변화', en: 'Immediate improvement' },
    content: {
      ko: '지인 축가를 앞두고 여러 선생님들을 찾아본 결과 너무 좋았습니다. 개인 음역과 발성, 습관 그리고 연습을 어떻게 해야할지 잘 집어주어서 당장 노래가 밋밋하지 않게 되는 변화를 수업중에 체감할 수 있었습니다.',
      en: 'I searched for many teachers before a wedding song performance and found the perfect one. The lesson addressed my range, vocalization, habits, and practice methods. I felt immediate improvement during the lesson itself.'
    }
  },
  {
    id: 2,
    name: '권**',
    tag: { ko: '보컬 입문', en: 'Beginner' },
    highlight: { ko: '생각보다 훨씬 체계적', en: 'Very systematic' },
    content: {
      ko: '보컬레슨 처음 받았는데 생각보다 훨씬 체계적이였습니다. 문제점을 잘 짚어주시고 호흡, 발성, 공명 하나씩 교정해주셔서 감을 잡는데 좋았습니다.',
      en: 'This was my first vocal lesson and it was much more systematic than expected. The instructor identified my issues and corrected my breathing, vocalization, and resonance one by one.'
    }
  },
  {
    id: 3,
    name: 'C*****',
    tag: { ko: '글로벌 클래스', en: 'Global Class' },
    highlight: { ko: 'Best decision I made', en: 'Best decision I made' },
    content: {
      ko: "보컬 레슨을 시작하기 너무 떨렸지만 새로운 취미를 갖고 도전하고 싶었어요. 정말 최고의 결정이었습니다. 편안하게 느끼게 해주시고 모든 것을 쉽게 설명해 주셨어요.",
      en: "I was so nervous to start vocal lessons but I wanted a new hobby and to push myself out of my comfort zone. It was one of the best decisions I made. The teacher made me feel so comfortable and explained everything in an easy to understand way."
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
      <SEO
        title="FVM - From Vivian Music | 프리미엄 보컬 교육"
        description="FVM은 대표 설계 커리큘럼과 트레이닝된 강사진이 함께하는 프리미엄 보컬 교육 브랜드입니다. 1:1 프라이빗, 온라인, 그룹, 글로벌, 키즈 보컬 레슨을 제공합니다."
        path="/"
      />
      {/* Hero Section - 2 Column Layout */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

        {/* Subtle accent glow */}
        <div className="absolute top-1/4 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/5 rounded-full blur-3xl" />

        <div className="container relative z-10 py-10 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left - Founder Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[3/4] md:aspect-[4/5] max-w-[280px] md:max-w-md mx-auto lg:mx-0">
                {/* Image Container with accent border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 -rotate-3" />
                <div className="relative h-full rounded-2xl overflow-hidden border border-border/50 bg-card shadow-xl">
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
              <p className="mb-3 md:mb-4 text-xs md:text-sm font-semibold tracking-widest text-accent uppercase">
                From Vivian Music
              </p>

              {/* Main Headline */}
              <h1 className="mb-3 md:mb-4 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-5xl lg:text-6xl leading-tight md:leading-snug lg:leading-normal whitespace-pre-line">
                {t('hero.title')}
              </h1>

              {/* English Subtitle */}
              <p className="mb-2 text-sm text-muted-foreground sm:text-base md:text-xl font-light tracking-wide">
                {language === 'ko' ? 'Where Your Voice Shines the Most' : t('hero.subtitle')}
              </p>

              {/* Description */}
              <p className="mb-6 md:mb-8 text-sm md:text-base text-muted-foreground lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {t('hero.description')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-12 md:h-14 px-6 md:px-8 text-sm md:text-base bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20"
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
                  className="h-12 md:h-14 px-6 md:px-8 text-sm md:text-base border-border hover:bg-muted"
                >
                  <Link to="/services">
                    {t('services.viewAll')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-border/50">
                <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-center lg:justify-start md:gap-8 text-xs md:text-sm text-muted-foreground">
                  <div className="flex items-center justify-center md:justify-start gap-2 p-3 md:p-0 rounded-lg bg-muted/50 md:bg-transparent">
                    <Award className="h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0" />
                    <span className="font-medium">{language === 'ko' ? '전문 트레이너' : 'Professional'}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 p-3 md:p-0 rounded-lg bg-muted/50 md:bg-transparent">
                    <Users className="h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0" />
                    <span className="font-medium">{language === 'ko' ? '1,000+ 수강생' : '1,000+ Students'}</span>
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
      <section className="py-16 md:py-32 bg-muted/30">
        <div className="container">
          <div className="mb-10 md:mb-16 text-center">
            <p className="mb-2 md:mb-3 text-xs md:text-sm font-semibold tracking-widest text-accent uppercase">
              Why FVM
            </p>
            <h2 className="text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {t('philosophy.title')}
            </h2>
          </div>

          <div className="grid gap-4 md:gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {philosophyItems.map((item, index) => (
              <div
                key={item.key}
                className="group relative"
              >
                <div className="relative p-5 md:p-8 rounded-xl md:rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
                  {/* Number Badge */}
                  <span className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-6 h-6 md:w-8 md:h-8 rounded-full bg-accent text-accent-foreground text-xs md:text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </span>

                  {/* Mobile: Horizontal layout / Desktop: Vertical layout */}
                  <div className="flex items-start gap-4 md:block">
                    {/* Icon */}
                    <div className="flex-shrink-0 flex h-11 w-11 md:h-14 md:w-14 md:mb-6 items-center justify-center rounded-lg md:rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <item.icon className="h-5 w-5 md:h-7 md:w-7" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="mb-1 md:mb-3 text-base md:text-xl font-bold">
                        {t(`philosophy.${item.key}.title`)}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {t(`philosophy.${item.key}.desc`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-32">
        <div className="container">
          <div className="mb-8 md:mb-16 text-center">
            <p className="mb-2 md:mb-3 text-xs md:text-sm font-semibold tracking-widest text-accent uppercase">
              Services
            </p>
            <h2 className="mb-2 md:mb-4 text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {t('services.title')}
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid gap-3 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
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
                  <CardHeader className="p-4 md:p-6 pb-2 md:pb-3">
                    <div className="flex items-center gap-3 md:block">
                      <div className={cn(
                        "flex-shrink-0 md:mb-3 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl transition-all duration-300",
                        service.isKids
                          ? "bg-kids-coral/20 text-kids-coral group-hover:bg-kids-coral group-hover:text-white"
                          : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                      )}>
                        <service.icon className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <CardTitle className="flex items-center gap-2 text-base md:text-lg group-hover:text-accent transition-colors">
                        {t(`service.${service.key}`)}
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
                    <CardDescription className="text-sm md:text-base leading-relaxed">
                      {t(`service.${service.key}.desc`)}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="h-11 md:h-12 px-6 md:px-8 text-sm md:text-base">
              <Link to="/services">
                {t('services.viewAll')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-32 bg-muted/30">
        <div className="container">
          <div className="mb-8 md:mb-16 text-center">
            <p className="mb-2 md:mb-3 text-xs md:text-sm font-semibold tracking-widest text-accent uppercase">
              Reviews
            </p>
            <h2 className="mb-2 md:mb-4 text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {t('reviews.title')}
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground">
              {t('reviews.subtitle')}
            </p>
          </div>

          {/* Mobile: Horizontal scroll / Desktop: Grid */}
          <div className="md:grid md:gap-6 md:grid-cols-3 md:max-w-6xl md:mx-auto">
            <div className="flex md:contents gap-4 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
              {reviews.map((review) => (
                <Card key={review.id} className="flex-shrink-0 w-[85vw] max-w-[320px] md:w-auto md:max-w-none snap-center border border-border/50 bg-card hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="p-4 md:p-6 pb-2 md:pb-3">
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <span className="px-2.5 py-1 text-[11px] md:text-xs font-medium rounded-full bg-accent/10 text-accent">
                        {review.tag[language]}
                      </span>
                    </div>
                    <CardTitle className="text-base md:text-lg font-bold leading-snug">
                      "{review.highlight[language]}"
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3 md:mb-4 line-clamp-4 md:line-clamp-none">
                      {review.content[language]}
                    </p>
                    <div className="flex items-center gap-2.5 md:gap-3 pt-3 md:pt-4 border-t border-border/50">
                      <div className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-accent/10 text-xs md:text-sm font-bold text-accent">
                        {review.name.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {review.name}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="h-11 md:h-12 px-6 md:px-8 text-sm md:text-base">
              <Link to="/reviews">
                {t('common.viewMore')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-accent/5" />
        <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center px-2">
            <p className="mb-3 md:mb-4 text-xs md:text-sm font-semibold tracking-widest text-accent uppercase">
              Get Started
            </p>
            <h2 className="mb-4 md:mb-6 text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {language === 'ko' ? '지금 바로 상담을 시작하세요' : 'Start Your Consultation Today'}
            </h2>
            <p className="mb-8 md:mb-10 text-sm md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              {language === 'ko'
                ? '카카오톡으로 편하게 문의해 주세요. 전문 상담사가 빠르게 답변 드리겠습니다.'
                : 'Contact us via KakaoTalk. Our specialists will respond promptly.'
              }
            </p>
            <Button
              asChild
              size="lg"
              className="h-14 md:h-16 px-8 md:px-10 text-base md:text-lg bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FEE500]/90 shadow-xl"
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
