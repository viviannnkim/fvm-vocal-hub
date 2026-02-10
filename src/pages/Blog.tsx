import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n';
import SEO from '@/components/SEO';

const posts = [
  {
    id: 1,
    title: { ko: '보컬 트레이닝 전 워밍업의 중요성', en: 'The Importance of Warming Up Before Vocal Training' },
    excerpt: { 
      ko: '노래하기 전 올바른 워밍업 방법과 그 효과에 대해 알아봅니다.',
      en: 'Learn about proper warm-up techniques before singing and their benefits.'
    },
    category: { ko: '보컬 팁', en: 'Vocal Tips' },
    date: '2024.03.15',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    title: { ko: 'FVM 2024 봄 워크샵 안내', en: 'FVM 2024 Spring Workshop Announcement' },
    excerpt: { 
      ko: '수강생 여러분을 위한 특별 워크샵을 준비했습니다. 함께 성장하는 시간이 될 거예요.',
      en: 'We prepared a special workshop for our students. It will be a time for growth together.'
    },
    category: { ko: 'FVM 소식', en: 'FVM News' },
    date: '2024.03.10',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    title: { ko: '고음을 쉽게 내는 5가지 팁', en: '5 Tips for Easier High Notes' },
    excerpt: { 
      ko: '많은 분들이 어려워하는 고음, 이 5가지만 기억하면 훨씬 편해집니다.',
      en: 'High notes are challenging for many. Remember these 5 tips and it becomes much easier.'
    },
    category: { ko: '보컬 팁', en: 'Vocal Tips' },
    date: '2024.03.05',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    title: { ko: '아이의 음악 교육, 언제 시작하면 좋을까요?', en: 'When Should Children Start Music Education?' },
    excerpt: { 
      ko: '아이의 음악 교육 적정 시기와 그 이유에 대해 전문가의 시각으로 설명합니다.',
      en: 'Expert insights on the right time for children\'s music education and the reasons behind it.'
    },
    category: { ko: '키즈', en: 'Kids' },
    date: '2024.02.28',
    image: '/placeholder.svg'
  },
];

export default function Blog() {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <SEO
        title="블로그 - 보컬 트레이닝 팁과 소식"
        description="FVM 블로그에서 보컬 트레이닝 팁, 발성 연습법, 노래 잘 부르는 법 등 유용한 보컬 정보를 확인하세요."
        path="/blog"
      />
      {/* Hero */}
      <section className="bg-gradient-navy py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              {t('nav.blog')}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              {language === 'ko'
                ? '보컬 팁, FVM 소식 등 다양한 콘텐츠를 만나보세요.'
                : 'Discover vocal tips, FVM news, and more.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <Card key={post.id} className="group overflow-hidden border-none bg-secondary/30 transition-all hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img 
                    src={post.image}
                    alt={post.title[language]}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                      {post.category[language]}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {post.title[language]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base line-clamp-2">
                    {post.excerpt[language]}
                  </CardDescription>
                  <Button variant="link" className="mt-4 p-0 text-accent">
                    {t('common.viewMore')}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
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
            {language === 'ko' ? '더 많은 보컬 팁이 궁금하신가요?' : 'Want More Vocal Tips?'}
          </h2>
          <p className="mb-8 text-muted-foreground">
            {language === 'ko' 
              ? '카카오톡 채널을 추가하고 유용한 정보를 받아보세요.'
              : 'Add our KakaoTalk channel for useful information.'
            }
          </p>
          <Button asChild size="lg" className="bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FEE500]/90">
            <a href="https://pf.kakao.com/_example" target="_blank" rel="noopener noreferrer">
              {t('cta.kakao')}
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
