import { Star } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const KAKAO_CHANNEL_URL = 'https://pf.kakao.com/_WvSxjxj';

const reviews = [
  {
    id: 1,
    name: '이**',
    tag: { ko: '축가 준비', en: 'Wedding Song' },
    highlight: { ko: '당장 노래가 밋밋하지 않게 되는 변화', en: 'Immediate improvement' },
    content: '지인 축가를 앞두고 여러 선생님들을 찾아본 결과 너무 좋았습니다. 개인 음역과 발성, 습관 그리고 연습을 어떻게 해야할지 잘 집어주어서 당장 노래가 밋밋하지 않게 되는 변화를 수업중에 체감할 수 있었습니다. 아주 만족입니다!',
  },
  {
    id: 2,
    name: '권**',
    tag: { ko: '보컬 입문', en: 'Beginner' },
    highlight: { ko: '생각보다 훨씬 체계적', en: 'Very systematic' },
    content: '보컬레슨 처음 받았는데 생각보다 훨씬 체계적이였습니다. 문제점을 잘 짚어주시고 호흡, 발성, 공명 하나씩 교정해주셔서 감을 잡는데 좋았습니다. 특히 제 목소리에 맞는 발성을 알려주셔서 좋았고 수업 분위기도 편해서 긴장 안하고 자연스럽게 노래를 부를 수 있었습니다. 앞으로 얼마나 달라질지 기대됩니다.',
  },
  {
    id: 3,
    name: 'C*****',
    tag: { ko: '글로벌 클래스', en: 'Global Class' },
    highlight: { ko: 'Best decision I made', en: 'Best decision I made' },
    content: "I was so nervous to start vocal lessons but I wanted a new hobby and to push myself out of my comfort zone. It was one of the best decisions I made Mona made me feel so comfortable and explained everything in an easy to understand way with no judgement. I can already feel a difference and feel like I'm learning so much, I can't wait to continue and keep growing. I would recommend anyone who's thinking about it to just do it you will definitely enjoy it.",
  },
  {
    id: 4,
    name: '박**',
    tag: { ko: '아이돌 입시', en: 'K-POP Audition' },
    highlight: { ko: '줌레슨이어도 꼼꼼하게', en: 'Thorough online lessons' },
    content: '저희 아이가 미국에서 줌레슨으로 보컬레슨을 받고 있습니다. 시간대도 잘 맞춰주시고, 줌레슨이어도 꼼꼼하게 잘 봐주셔서 아이가 프로패셔널하게 느껴서 만족입니다. 이제 아이돌 오디션을 앞두고 있는데 좋은 결과가 있기를 기대합니다.',
  },
  {
    id: 5,
    name: '엄**',
    tag: { ko: '직장인', en: 'Professional' },
    highlight: { ko: '한시간이 너무 빨리 지나가는', en: 'Time flies' },
    content: '하는 일 특성상 노래 부를 일이 많습니다. 위축되고 자신감을 잃어가고 있는 중에 선생님을 만났습니다. 시원 시원하게 잘 가르쳐주시고 낯가리는 성격임에도 수업 중에 너무 즐겁고 유쾌합니다. 한시간이 너무 빨리 지나가는 것 같습니다. 앞으로의 수업들도 기대가 됩니다.',
  },
];

function ReviewCard({ review, language, featured = false }: { review: typeof reviews[0]; language: 'ko' | 'en'; featured?: boolean }) {
  return (
    <div className={cn(
      "group relative h-full",
      featured && "sm:col-span-2 lg:col-span-2"
    )}>
      <div className={cn(
        "relative h-full overflow-hidden rounded-2xl border border-border/50 transition-all duration-300",
        "hover:border-accent/50 hover:shadow-xl hover:-translate-y-1",
        featured ? "p-8" : "p-6"
      )}>
        {/* Background */}
        <div className="absolute inset-0 bg-card" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header: Tag + Stars */}
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent">
              {review.tag[language]}
            </span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
              ))}
            </div>
          </div>

          {/* Highlight Quote */}
          <p className={cn(
            "font-bold text-foreground mb-4",
            featured ? "text-xl lg:text-2xl" : "text-lg"
          )}>
            "{review.highlight[language]}"
          </p>

          {/* Full Content */}
          <p className={cn(
            "text-foreground/70 leading-relaxed flex-1",
            featured ? "text-base" : "text-sm"
          )}>
            {review.content}
          </p>

          {/* Author */}
          <div className="mt-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-sm font-bold text-accent">
                {review.name.charAt(0)}
              </span>
            </div>
            <span className="font-medium text-foreground">
              {review.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
              Reviews
            </p>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              {language === 'ko' ? '수강생이 말하는 FVM' : 'What Students Say About FVM'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'ko'
                ? '실제 수강생들의 생생한 후기를 확인하세요.'
                : 'Read authentic reviews from our students.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Reviews - Bento Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto auto-rows-fr">
            {reviews.map((review, index) => (
              <ReviewCard
                key={review.id}
                review={review}
                language={language}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lesson Photos Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
              Gallery
            </p>
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              {language === 'ko' ? '레슨 현장' : 'Lesson Gallery'}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl bg-secondary/50 flex items-center justify-center"
              >
                <p className="text-sm text-muted-foreground">
                  {language === 'ko' ? '사진 준비 중' : 'Coming Soon'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            {language === 'ko' ? '다음 후기의 주인공이 되어보세요' : 'Be the Next Success Story'}
          </h2>
          <p className="mb-8 text-muted-foreground max-w-md mx-auto">
            {language === 'ko'
              ? '지금 바로 상담을 신청하고 변화를 경험하세요.'
              : 'Book a consultation now and experience the change.'
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
