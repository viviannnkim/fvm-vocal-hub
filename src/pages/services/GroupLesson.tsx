import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Check } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n';

export default function GroupLesson() {
  const { t, language } = useLanguage();

  const features = language === 'ko' 
    ? [
        '소규모 3-5명 그룹 구성',
        '합리적인 수강료',
        '함께 성장하는 분위기',
        '하모니 및 합창 연습',
        '친구와 함께 신청 가능',
      ]
    : [
        'Small groups of 3-5 people',
        'Affordable tuition',
        'Collaborative learning atmosphere',
        'Harmony and chorus practice',
        'Apply with friends',
      ];

  const groupTypes = language === 'ko'
    ? [
        { title: '취미반', desc: '노래를 즐기고 싶은 분들을 위한 편안한 클래스' },
        { title: '실력 향상반', desc: '기초부터 탄탄하게 실력을 쌓고 싶은 분들' },
        { title: '오디션 준비반', desc: '오디션을 준비하는 분들을 위한 집중 클래스' },
      ]
    : [
        { title: 'Hobby Class', desc: 'Relaxed class for those who want to enjoy singing' },
        { title: 'Skill Improvement', desc: 'For those who want to build solid fundamentals' },
        { title: 'Audition Prep', desc: 'Intensive class for audition preparation' },
      ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-navy py-16 md:py-24">
        <div className="container">
          <Link 
            to="/services" 
            className="mb-6 inline-flex items-center text-sm text-primary-foreground/70 hover:text-primary-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('common.goBack')}
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 text-accent">
              <Users className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                {t('service.group')}
              </h1>
              <p className="text-primary-foreground/80">
                {t('service.group.desc')}
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
                {language === 'ko' ? '그룹 레슨의 장점' : 'Benefits of Group Lessons'}
              </h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-bold">
                {language === 'ko' ? '그룹 유형' : 'Group Types'}
              </h2>
              <div className="space-y-4">
                {groupTypes.map((item, index) => (
                  <Card key={index} className="border-none bg-secondary/50">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-accent">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/50 py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold">
            {language === 'ko' ? '그룹 레슨 상담 신청하기' : 'Apply for Group Lesson Consultation'}
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
