import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Check } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';

const KAKAO_CHANNEL_URL = 'https://pf.kakao.com/_WvSxjxj';

export default function GlobalClass() {
  const { t, language } = useLanguage();

  const features = language === 'ko'
    ? [
        '영어로 진행되는 레슨',
        'K-POP 보컬 테크닉 & 스타일',
        '한국 음악 문화에 대한 이해',
        '한국어 발음 교정',
      ]
    : [
        'Classes conducted in English',
        'K-POP vocal techniques & stylistic training',
        'Understanding of Korean music culture',
        'Korean pronunciation coaching',
      ];

  const targetAudience = language === 'ko'
    ? [
        { title: '한국에 거주하는 외국인', desc: '한국에서 K-POP 보컬 테크닉 배우기', tag: 'In Korea' },
        { title: 'K-POP 팬', desc: 'K-POP 경험을 해보고 싶은 외국인', tag: 'K-POP' },
        { title: '교포 출신 학습자', desc: '음악을 통해 한국 문화 연결', tag: 'Heritage' },
      ]
    : [
        { title: 'International Residents', desc: 'International residents living in Korea', tag: 'In Korea' },
        { title: 'K-POP Fans', desc: 'International learners interested in K-POP experience', tag: 'K-POP' },
        { title: 'Korean Diaspora', desc: 'Overseas Koreans connecting with Korean culture', tag: 'Heritage' },
      ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <Link
            to="/services"
            className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('common.goBack')}
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Globe className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium tracking-widest text-accent uppercase">
              {language === 'ko' ? '글로벌 클래스 (Global Class)' : 'Global Class'}
              </p>
            </div>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
              {language === 'ko' ? '글로벌 클래스 (Global Class)' : 'Global Class'}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {language === 'ko'
                ? '영어로 진행되는 외국인들을 위한 수업입니다.'
                : 'An English-conducted vocal program for international students.'
              }
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
              <span>
                {language === 'ko'
                  ? '월 180,000원~ (주 1회, 월 4회 기준)'
                  : 'From ₩180,000/month (4 sessions, once a week)'
                }
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-2xl font-bold md:text-3xl">
                {language === 'ko' ? '제공 서비스' : 'What We Offer'}
              </h2>
              <ul className="space-y-5">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-8 text-2xl font-bold md:text-3xl">
                {language === 'ko' ? '대상' : 'Who Is This For?'}
              </h2>
              <div className="space-y-4">
                {targetAudience.map((item, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            {language === 'ko' ? 'K-POP 보컬 여정을 시작하세요' : 'Ready to Start Your K-POP Vocal Journey?'}
          </h2>
          <p className="mb-8 text-muted-foreground max-w-md mx-auto">
            {language === 'ko'
              ? '영어로 상담 가능합니다. 카카오톡으로 문의하세요.'
              : 'Contact us via KakaoTalk for consultation in English.'
            }
          </p>
          <Button asChild size="lg" className="h-14 px-8 bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FEE500]/90">
            <a href={KAKAO_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
              {language === 'ko' ? t('cta.consult') : 'Book Consultation'}
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
