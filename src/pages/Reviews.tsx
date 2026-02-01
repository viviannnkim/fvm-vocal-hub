import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';

const KAKAO_CHANNEL_URL = 'https://pf.kakao.com/_WvSxjxj';

const reviews = [
  {
    id: 1,
    name: '이**',
    content: '지인 축가를 앞두고 여러 선생님들을 찾아본 결과 너무 좋았습니다. 개인 음역과 발성, 습관 그리고 연습을 어떻게 해야할지 잘 집어주어서 당장 노래가 밋밋하지 않게 되는 변화를 수업중에 체감할 수 있었습니다. 아주 만족입니다!',
  },
  {
    id: 2,
    name: '권**',
    content: '보컬레슨 처음 받았는데 생각보다 훨씬 체계적이였습니다. 문제점을 잘 짚어주시고 호흡, 발성, 공명 하나씩 교정해주셔서 감을 잡는데 좋았습니다. 특히 제 목소리에 맞는 발성을 알려주셔서 좋았고 수업 분위기도 편해서 긴장 안하고 자연스럽게 노래를 부를 수 있었습니다. 앞으로 얼마나 달라질지 기대됩니다.',
  },
  {
    id: 3,
    name: 'C*****',
    content: "I was so nervous to start vocal lessons but I wanted a new hobby and to push myself out of my comfort zone. It was one of the best decisions I made Mona made me feel so comfortable and explained everything in an easy to understand way with no judgement. I can already feel a difference and feel like I'm learning so much, I can't wait to continue and keep growing. I would recommend anyone who's thinking about it to just do it you will definitely enjoy it.",
  },
  {
    id: 4,
    name: '박**',
    content: '저희 아이가 미국에서 줌레슨으로 보컬레슨을 받고 있습니다. 시간대도 잘 맞춰주시고, 줌레슨이어도 꼼꼼하게 잘 봐주셔서 아이가 프로패셔널하게 느껴서 만족입니다. 이제 아이돌 오디션을 앞두고 있는데 좋은 결과가 있기를 기대합니다.',
  },
  {
    id: 5,
    name: '엄**',
    content: '하는 일 특성상 노래 부를 일이 많습니다. 위축되고 자신감을 잃어가고 있는 중에 선생님을 만났습니다. 시원 시원하게 잘 가르쳐주시고 낯가리는 성격임에도 수업 중에 너무 즐겁고 유쾌합니다. 한시간이 너무 빨리 지나가는 것 같습니다. 앞으로의 수업들도 기대가 됩니다.',
  },
];

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="group relative">
      {/* Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-card/80 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 border border-border/30 hover:border-accent/20">
        {/* Large Quote Mark */}
        <div className="absolute -top-2 -left-2 text-[120px] font-serif leading-none text-accent/10 select-none pointer-events-none">
          "
        </div>

        {/* Content */}
        <div className="relative z-10">
          <p className="text-foreground/80 leading-relaxed mb-8 text-[15px]">
            {review.content}
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            <span className="text-sm font-medium text-accent">
              {review.name}
            </span>
          </div>
        </div>

        {/* Subtle glow on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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

      {/* Reviews - Masonry-like layout */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto [column-fill:_balance]">
            {reviews.map((review) => (
              <div key={review.id} className="mb-6 break-inside-avoid">
                <ReviewCard review={review} />
              </div>
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
