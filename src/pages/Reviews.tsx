import { useState } from 'react';
import { Star } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const reviews = [
  {
    id: 1,
    name: { ko: '김서연', en: 'Seoyeon Kim' },
    service: 'private',
    rating: 5,
    content: {
      ko: '3개월 동안 꾸준히 레슨을 받으면서 고음이 편해지고, 노래에 감정을 담는 법을 배웠어요. 선생님이 정말 체계적으로 가르쳐 주세요!',
      en: 'After 3 months of consistent lessons, high notes became easier and I learned how to put emotion into my singing. The teacher is very systematic!'
    },
    date: '2024.01'
  },
  {
    id: 2,
    name: { ko: '이준호', en: 'Junho Lee' },
    service: 'online',
    rating: 5,
    content: {
      ko: '해외에서 온라인으로 수업 받고 있는데, 대면 못지않게 꼼꼼한 피드백을 받을 수 있어서 만족해요.',
      en: 'Taking online classes from abroad, and I\'m satisfied with the detailed feedback that rivals in-person lessons.'
    },
    date: '2024.02'
  },
  {
    id: 3,
    name: { ko: '박지민 (학부모)', en: 'Jimin Park (Parent)' },
    service: 'kids',
    rating: 5,
    content: {
      ko: '아이가 방문 수업을 너무 좋아해요! 집에서 편하게 배울 수 있어서 부모로서도 만족스럽습니다.',
      en: 'My child loves the home visit lessons! As a parent, I\'m satisfied that they can learn comfortably at home.'
    },
    date: '2024.01'
  },
  {
    id: 4,
    name: { ko: '최유나', en: 'Yuna Choi' },
    service: 'group',
    rating: 5,
    content: {
      ko: '친구들과 함께 그룹 레슨을 받고 있어요. 서로 격려하면서 배우니까 더 즐겁고 성장도 빨라요!',
      en: 'Taking group lessons with friends. Learning while encouraging each other makes it more fun and we grow faster!'
    },
    date: '2024.03'
  },
  {
    id: 5,
    name: { ko: 'Sarah Johnson', en: 'Sarah Johnson' },
    service: 'global',
    rating: 5,
    content: {
      ko: 'As a foreigner living in Korea, I wanted to learn K-POP vocal techniques. The Global Class was perfect - all in English with great cultural context!',
      en: 'As a foreigner living in Korea, I wanted to learn K-POP vocal techniques. The Global Class was perfect - all in English with great cultural context!'
    },
    date: '2024.02'
  },
  {
    id: 6,
    name: { ko: '정민수', en: 'Minsu Jung' },
    service: 'private',
    rating: 5,
    content: {
      ko: '음치였던 제가 6개월 만에 노래방에서 박수를 받았어요. 체계적인 커리큘럼 덕분입니다.',
      en: 'I was tone-deaf but after 6 months, I got applause at karaoke. Thanks to the systematic curriculum.'
    },
    date: '2024.01'
  },
];

const filters = [
  { key: 'all', label: { ko: '전체', en: 'All' } },
  { key: 'private', label: { ko: '1:1 프라이빗', en: 'Private' } },
  { key: 'online', label: { ko: '온라인', en: 'Online' } },
  { key: 'group', label: { ko: '그룹', en: 'Group' } },
  { key: 'global', label: { ko: '글로벌', en: 'Global' } },
  { key: 'kids', label: { ko: '키즈', en: 'Kids' } },
];

export default function Reviews() {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredReviews = activeFilter === 'all' 
    ? reviews 
    : reviews.filter(review => review.service === activeFilter);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-navy py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              {t('reviews.title')}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              {t('reviews.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b py-4">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(filter.key)}
                className={cn(
                  activeFilter === filter.key && 'bg-accent text-accent-foreground hover:bg-accent/90'
                )}
              >
                {filter.label[language]}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="border-none bg-secondary/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                        {review.name[language].charAt(0)}
                      </div>
                      <div>
                        <CardTitle className="text-base">{review.name[language]}</CardTitle>
                        <CardDescription className="text-xs">
                          {t(`service.${review.service}`)} · {review.date}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80">"{review.content[language]}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/50 py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold">
            {language === 'ko' ? '다음 후기의 주인공이 되어보세요' : 'Be the Next Success Story'}
          </h2>
          <Button asChild size="lg" className="bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FEE500]/90">
            <a href="https://pf.kakao.com/_example" target="_blank" rel="noopener noreferrer">
              {t('cta.consult')}
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
