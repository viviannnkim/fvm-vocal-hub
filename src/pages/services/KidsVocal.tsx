import { Link } from 'react-router-dom';
import { ArrowLeft, Sprout, Check, Heart, Music, Star } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n';

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
        { age: '5-7', title: 'Music Play Class', desc: 'Fun start with songs and movement' },
        { age: '8-10', title: 'Basic Vocal Class', desc: 'Learn basic vocalization and pitch' },
        { age: '11-13', title: 'Junior Vocal Class', desc: 'Serious vocal training begins' },
      ];

  return (
    <Layout>
      {/* Hero - Kids Theme */}
      <section className="bg-gradient-to-br from-kids-peach to-kids-coral/30 py-16 md:py-24">
        <div className="container">
          <Link 
            to="/services" 
            className="mb-6 inline-flex items-center text-sm text-foreground/70 hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('common.goBack')}
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-kids-mint/30 text-kids-mint">
              <Sprout className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                {t('service.kids')}
              </h1>
              <p className="text-foreground/80">
                {t('service.kids.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold">
                {language === 'ko' ? '키즈 보컬의 특별함' : 'What Makes Kids Vocal Special'}
              </h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-kids-coral/20 text-kids-coral">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-bold">
                {language === 'ko' ? '연령별 클래스' : 'Classes by Age'}
              </h2>
              <div className="space-y-4">
                {ageGroups.map((item, index) => (
                  <Card key={index} className="border-none bg-kids-peach/20">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-kids-coral px-3 py-1 text-xs font-bold text-white">
                          {item.age}{language === 'ko' ? '' : ' yrs'}
                        </span>
                        <h3 className="font-semibold">{item.title}</h3>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-kids-peach/10 py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold">
            {language === 'ko' ? '우리 아이에게 주는 선물' : 'Gifts for Your Child'}
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <Card className="border-none bg-white text-center shadow-sm">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-kids-coral/20 text-kids-coral">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">
                  {language === 'ko' ? '자신감 향상' : 'Confidence'}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {language === 'ko' 
                    ? '무대에서 빛나는 아이로'
                    : 'Shine on any stage'
                  }
                </p>
              </CardContent>
            </Card>
            <Card className="border-none bg-white text-center shadow-sm">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-kids-mint/20 text-kids-mint">
                  <Music className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">
                  {language === 'ko' ? '음악적 감수성' : 'Musical Sensitivity'}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {language === 'ko' 
                    ? '평생 가는 음악적 재능'
                    : 'Lifelong musical talent'
                  }
                </p>
              </CardContent>
            </Card>
            <Card className="border-none bg-white text-center shadow-sm">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-kids-lavender/20 text-kids-lavender">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">
                  {language === 'ko' ? '정서 발달' : 'Emotional Growth'}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {language === 'ko' 
                    ? '감정 표현력 향상'
                    : 'Better emotional expression'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold">
            {language === 'ko' ? '우리 아이 첫 보컬 레슨, 상담 신청하기' : "Apply for Your Child's First Vocal Lesson"}
          </h2>
          <p className="mb-8 text-muted-foreground">
            {language === 'ko' 
              ? '카카오톡으로 편하게 문의해 주세요.'
              : 'Contact us via KakaoTalk.'
            }
          </p>
          <Button asChild size="lg" className="bg-kids-coral text-white hover:bg-kids-coral/90">
            <a href="https://pf.kakao.com/_example" target="_blank" rel="noopener noreferrer">
              {t('cta.consult')}
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
