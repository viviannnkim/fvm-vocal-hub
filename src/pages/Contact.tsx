import { MessageCircle, HelpCircle } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/lib/i18n';
import SEO from '@/components/SEO';

const faqs = [
  {
    question: { ko: '레슨은 어떻게 예약하나요?', en: 'How do I book a lesson?' },
    answer: { 
      ko: '카카오톡 채널로 문의해 주시면 상담 후 레슨 일정을 조율해 드립니다.',
      en: 'Contact us via KakaoTalk channel, and we\'ll arrange your lesson schedule after consultation.'
    }
  },
  {
    question: { ko: '완전 초보자도 수강할 수 있나요?', en: 'Can complete beginners take lessons?' },
    answer: { 
      ko: '물론입니다! FVM은 초보자부터 전문가까지 모든 레벨에 맞춤형 커리큘럼을 제공합니다.',
      en: 'Absolutely! FVM provides customized curriculum for all levels, from beginners to professionals.'
    }
  },
  {
    question: { ko: '레슨 비용은 얼마인가요?', en: 'How much do lessons cost?' },
    answer: { 
      ko: '레슨 종류와 패키지에 따라 다양한 옵션이 있습니다. 카카오톡으로 문의해 주시면 상세히 안내해 드립니다.',
      en: 'We have various options depending on lesson type and package. Contact us via KakaoTalk for details.'
    }
  },
  {
    question: { ko: '온라인 레슨은 어떻게 진행되나요?', en: 'How are online lessons conducted?' },
    answer: { 
      ko: 'Zoom 또는 Google Meet을 통해 실시간으로 진행됩니다. 수업 녹화본도 제공해 드려서 복습이 가능합니다.',
      en: 'Lessons are conducted in real-time via Zoom or Google Meet. We also provide lesson recordings for review.'
    }
  },
  {
    question: { ko: '키즈 보컬은 몇 살부터 가능한가요?', en: 'What age can children start Kids Vocal?' },
    answer: { 
      ko: '만 5세부터 수강 가능합니다. 연령대에 맞는 맞춤 커리큘럼으로 즐겁게 음악을 배울 수 있어요.',
      en: 'Children from age 5 can start. They can enjoy learning music with age-appropriate curriculum.'
    }
  },
];

export default function Contact() {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <SEO
        title="문의하기 - 상담 및 FAQ"
        description="FVM 보컬 레슨 상담 및 자주 묻는 질문을 확인하세요. 카카오톡으로 간편하게 레슨 상담을 받으실 수 있습니다."
        path="/contact"
      />
      {/* Hero */}
      <section className="bg-gradient-navy py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              {t('nav.contact')}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              {language === 'ko'
                ? '궁금한 점이 있으시면 언제든 편하게 연락해 주세요.'
                : 'Feel free to contact us anytime with any questions.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Main CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-xl">
            <Card className="border-none bg-[#FEE500]/10 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FEE500]">
                  <MessageCircle className="h-10 w-10 text-[#3C1E1E]" />
                </div>
                <h2 className="mb-4 text-2xl font-bold">
                  {language === 'ko' ? '카카오톡으로 상담하기' : 'Consult via KakaoTalk'}
                </h2>
                <p className="mb-6 text-muted-foreground">
                  {language === 'ko'
                    ? '카카오톡 채널을 추가하시면 빠르게 상담받으실 수 있습니다. 레슨 문의, 스케줄 조율, 기타 궁금한 점 무엇이든 물어보세요!'
                    : 'Add our KakaoTalk channel for quick consultation. Ask about lessons, scheduling, or any other questions!'
                  }
                </p>
                <Button asChild size="lg" className="w-full bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FEE500]/90">
                  <a href="https://pf.kakao.com/_example" target="_blank" rel="noopener noreferrer">
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3C6.48 3 2 6.48 2 10.8c0 2.76 1.84 5.16 4.56 6.48-.2.72-.72 2.64-.84 3.04-.12.52.2.52.4.36.16-.12 2.52-1.68 3.56-2.36.76.12 1.52.16 2.32.16 5.52 0 10-3.48 10-7.68S17.52 3 12 3z"/>
                    </svg>
                    {language === 'ko' ? '카카오톡 채널 바로가기' : 'Go to KakaoTalk Channel'}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 flex items-center justify-center gap-2">
              <HelpCircle className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold">
                {language === 'ko' ? '자주 묻는 질문' : 'Frequently Asked Questions'}
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question[language]}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer[language]}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
}
