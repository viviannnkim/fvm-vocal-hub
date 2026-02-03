import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Check } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';

const KAKAO_CHANNEL_URL = 'https://pf.kakao.com/_WvSxjxj';

export default function GroupLesson() {
  const { t, language } = useLanguage();

  const features = language === 'ko'
    ? [
        '다른 사람의 피드백을 함께 듣는 학습효과',
        '합리적이고 가성비 있는 수강료',
        '함께 꾸준히 성장하는 분위기',
        '화음 및 합창 연습',
      ]
    : [
        'Learning effect from hearing feedback together',
        'Affordable and cost-effective tuition',
        'Atmosphere of growing together steadily',
        'Harmony and chorus practice',
      ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-24 bg-muted/30">
        <div className="container">
          <Link
            to="/services"
            className="mb-6 md:mb-8 inline-flex items-center text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="mr-1.5 md:mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
            {t('common.goBack')}
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 md:gap-3 mb-3 md:mb-4">
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-accent/10 text-accent">
                <Users className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <p className="text-xs md:text-sm font-semibold tracking-widest text-accent uppercase">
                Group Lesson
              </p>
            </div>
            <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl mb-3 md:mb-4">
              {language === 'ko' ? '2:1 그룹 레슨' : '2:1 Group Lesson'}
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              {language === 'ko'
                ? '친구와 함께, 연인과 함께 성장하는 즐거움을 경험하세요.'
                : 'Experience the joy of growing together with friends or loved ones.'
              }
            </p>
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-medium">
              <span>
                {language === 'ko'
                  ? '인당 월 150,000원 (주 1회, 월 4회 기준)'
                  : '₩150,000/person/month (once a week, 4 sessions)'
                }
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-24">
        <div className="container">
          <h2 className="mb-8 md:mb-12 text-xl font-bold md:text-3xl text-center">
            {language === 'ko' ? '그룹 레슨의 장점' : 'Benefits of Group Lessons'}
          </h2>
          <div className="grid gap-3 md:gap-6 grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-lg md:rounded-xl bg-accent/10 text-accent">
                    <Check className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <span className="text-sm md:text-lg pt-1 md:pt-2">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-muted/30">
        <div className="container text-center px-6">
          <h2 className="mb-3 md:mb-4 text-xl font-bold md:text-3xl">
            {language === 'ko' ? '그룹 레슨 상담 신청하기' : 'Apply for Group Lesson Consultation'}
          </h2>
          <p className="mb-6 md:mb-8 text-sm md:text-base text-muted-foreground max-w-md mx-auto">
            {language === 'ko'
              ? '카카오톡으로 편하게 문의해 주세요.'
              : 'Contact us via KakaoTalk.'
            }
          </p>
          <Button asChild size="lg" className="h-12 md:h-14 px-6 md:px-8 text-sm md:text-base bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FEE500]/90">
            <a href={KAKAO_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
              {t('cta.consult')}
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
