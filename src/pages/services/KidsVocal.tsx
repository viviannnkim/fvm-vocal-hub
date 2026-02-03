import { Link } from 'react-router-dom';
import { ArrowLeft, Sprout, Check } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';

const KAKAO_CHANNEL_URL = 'https://pf.kakao.com/_WvSxjxj';

export default function KidsVocal() {
  const { t, language } = useLanguage();

  const features = language === 'ko'
    ? [
        '정서 발달과 자신감 향상',
        '아이 눈높이에 맞춘 안정적인 수업 진행',
        '집에서 받는 방문레슨으로 안전한 환경과 높은 집중도 향상',
        '대표가 직접 설계한 키즈 전용 커리큘럼',
      ]
    : [
        'Emotional development and confidence building',
        'Stable lessons tailored to children\'s level',
        'Safe environment and high focus with home visit lessons',
        'Kids-only curriculum designed by the director',
      ];

  const ageGroups = language === 'ko'
    ? [
        { age: '8~10세', title: '기초 보컬반', desc: '기본 발성 / 음정을 위주로 즐겁게 시작해요!' },
        { age: '11~17세', title: '주니어 보컬반', desc: '본격적인 보컬 트레이닝을 시작으로 원하는 장르별로 진행합니다.' },
      ]
    : [
        { age: '8-10 yrs', title: 'Basic Vocal Class', desc: 'Start with basic vocalization and pitch in a fun way!' },
        { age: '11-17 yrs', title: 'Junior Vocal Class', desc: 'Begin serious vocal training with your preferred genre.' },
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
                <Sprout className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <p className="text-xs md:text-sm font-semibold tracking-widest text-accent uppercase">
                Kids Vocal
              </p>
            </div>
            <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl mb-3 md:mb-4">
              {language === 'ko' ? 'FVM 키즈 보컬' : 'FVM Kids Vocal'}
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              {language === 'ko'
                ? '아이의 잠재력을 노래로 꽃피워요.'
                : 'Let your child bloom through singing.'
              }
            </p>
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-medium">
              <span>
                {language === 'ko'
                  ? '월 220,000원 (주 1회 50분, 월 4회)'
                  : '₩220,000/month (50 min/session, once a week, 4 sessions)'
                }
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 md:mb-8 text-xl font-bold md:text-3xl">
                {language === 'ko' ? '키즈 보컬의 특별함' : 'What Makes Kids Vocal Special'}
              </h2>
              <ul className="space-y-3 md:space-y-5">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 md:gap-4">
                    <div className="flex h-6 w-6 md:h-7 md:w-7 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Check className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    </div>
                    <span className="text-sm md:text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6 md:mb-8 text-xl font-bold md:text-3xl">
                {language === 'ko' ? '연령별 클래스' : 'Classes by Age'}
              </h2>
              <div className="space-y-3 md:space-y-4">
                {ageGroups.map((item, index) => (
                  <div
                    key={index}
                    className="group p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-center gap-2 md:gap-3 mb-1.5 md:mb-2">
                      <span className="px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-bold rounded-full bg-accent text-accent-foreground">
                        {item.age}
                      </span>
                      <h3 className="font-bold text-sm md:text-lg">{item.title}</h3>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-muted/30">
        <div className="container text-center px-6">
          <h2 className="mb-3 md:mb-4 text-xl font-bold md:text-3xl">
            {language === 'ko' ? '우리 아이 첫 보컬 레슨, 상담 신청하기' : "Apply for Your Child's First Vocal Lesson"}
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
