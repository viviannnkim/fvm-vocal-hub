import { Link } from 'react-router-dom';
import { ArrowLeft, Sprout, Check, Heart, Music, Star } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';

const KAKAO_CHANNEL_URL = 'https://pf.kakao.com/_WvSxjxj';

export default function KidsVocal() {
  const { t, language } = useLanguage();

  const features = language === 'ko'
    ? [
        '아이 집에서 편하게 받는 방문 수업',
        '아이 눈높이에 맞춘 재미있는 커리큘럼',
        '정서 발달과 자신감 향상',
        '음악적 감수성 키우기',
        '기초 발성부터 동요, 팝송까지',
      ]
    : [
        'Convenient home visit lessons',
        'Fun curriculum tailored to children',
        'Emotional development and confidence building',
        'Nurturing musical sensitivity',
        'From basic vocals to nursery rhymes and pop songs',
      ];

  const ageGroups = language === 'ko'
    ? [
        { age: '5-7세', title: '음악 놀이반', desc: '노래와 율동으로 즐겁게 시작해요' },
        { age: '8-10세', title: '기초 보컬반', desc: '기본 발성과 음정을 배워요' },
        { age: '11-13세', title: '주니어 보컬반', desc: '본격적인 보컬 트레이닝 시작' },
      ]
    : [
        { age: '5-7 yrs', title: 'Music Play Class', desc: 'Fun start with songs and movement' },
        { age: '8-10 yrs', title: 'Basic Vocal Class', desc: 'Learn basic vocalization and pitch' },
        { age: '11-13 yrs', title: 'Junior Vocal Class', desc: 'Serious vocal training begins' },
      ];

  const benefits = language === 'ko'
    ? [
        { icon: Heart, title: '자신감 향상', desc: '무대에서 빛나는 아이로' },
        { icon: Music, title: '음악적 감수성', desc: '평생 가는 음악적 재능' },
        { icon: Star, title: '정서 발달', desc: '감정 표현력 향상' },
      ]
    : [
        { icon: Heart, title: 'Confidence', desc: 'Shine on any stage' },
        { icon: Music, title: 'Musical Sensitivity', desc: 'Lifelong musical talent' },
        { icon: Star, title: 'Emotional Growth', desc: 'Better emotional expression' },
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
                <Sprout className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium tracking-widest text-accent uppercase">
                Kids Vocal
              </p>
            </div>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
              {t('service.kids')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'ko'
                ? '아이의 잠재력을 노래로 꽃피워요.'
                : 'Let your child bloom through singing.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-2xl font-bold md:text-3xl">
                {language === 'ko' ? '키즈 보컬의 특별함' : 'What Makes Kids Vocal Special'}
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
                {language === 'ko' ? '연령별 클래스' : 'Classes by Age'}
              </h2>
              <div className="space-y-4">
                {ageGroups.map((item, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-accent text-accent-foreground">
                        {item.age}
                      </span>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
            {language === 'ko' ? '우리 아이에게 주는 선물' : 'Gifts for Your Child'}
          </h2>
          <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border/50 text-center hover:border-accent/30 transition-all hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            {language === 'ko' ? '우리 아이 첫 보컬 레슨, 상담 신청하기' : "Apply for Your Child's First Vocal Lesson"}
          </h2>
          <p className="mb-8 text-muted-foreground max-w-md mx-auto">
            {language === 'ko'
              ? '카카오톡으로 편하게 문의해 주세요.'
              : 'Contact us via KakaoTalk.'
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
