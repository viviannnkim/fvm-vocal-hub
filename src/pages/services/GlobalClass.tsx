import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Check } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n';

export default function GlobalClass() {
  const { language } = useLanguage();

  // This page defaults to English content since it targets global audience
  const features = [
    'All lessons conducted in English',
    'K-POP vocal techniques & style',
    'Understanding Korean music culture',
    'Online & in-person options',
    'Flexible scheduling for different time zones',
  ];

  const targetAudience = [
    { title: 'Foreigners in Korea', desc: 'Learn K-POP vocal techniques while living in Korea' },
    { title: 'K-POP Enthusiasts Abroad', desc: 'Online lessons for international K-POP fans' },
    { title: 'Korean Heritage Learners', desc: 'Connect with Korean culture through music' },
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
            {language === 'ko' ? '뒤로 가기' : 'Go Back'}
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 text-accent">
              <Globe className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                Global Class
              </h1>
              <p className="text-primary-foreground/80">
                English vocal classes for foreigners and overseas residents
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
                What We Offer
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
                Who Is This For?
              </h2>
              <div className="space-y-4">
                {targetAudience.map((item, index) => (
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
            Ready to Start Your K-POP Vocal Journey?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Contact us via KakaoTalk for consultation in English.
          </p>
          <Button asChild size="lg" className="bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FEE500]/90">
            <a href="https://pf.kakao.com/_example" target="_blank" rel="noopener noreferrer">
              Book Consultation
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
