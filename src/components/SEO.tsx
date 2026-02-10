import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/lib/i18n';

const SITE_URL = 'https://www.fromvivianmusic.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/open-graph.png`;

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}

interface JsonLd {
  '@context': string;
  '@type': string | string[];
  [key: string]: unknown;
}

const organizationJsonLd: JsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FVM - From Vivian Music',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  description: '체계적인 커리큘럼과 전문 강사진이 함께하는 프리미엄 보컬 교육 브랜드',
  sameAs: [
    'https://www.instagram.com/from.vivian.music',
    'https://youtube.com/@from.vivian',
    'https://m.blog.naver.com/vivian_artistt',
    'https://pf.kakao.com/_WvSxjxj',
  ],
};

const localBusinessJsonLd: JsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'EducationalOrganization'],
  name: 'FVM - From Vivian Music',
  url: SITE_URL,
  description: '프리미엄 보컬 교육 브랜드 - 1:1 프라이빗, 온라인, 그룹, 글로벌, 키즈 보컬 레슨',
  image: DEFAULT_OG_IMAGE,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KR',
  },
  sameAs: [
    'https://www.instagram.com/from.vivian.music',
    'https://youtube.com/@from.vivian',
    'https://m.blog.naver.com/vivian_artistt',
  ],
};

export default function SEO({ title, description, path, ogImage, noindex }: SEOProps) {
  const { language } = useLanguage();
  const canonicalUrl = `${SITE_URL}${path}`;
  const image = ogImage || DEFAULT_OG_IMAGE;
  const fullTitle = path === '/' ? title : `${title} | FVM`;
  const isHome = path === '/';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="보컬 레슨, 보컬 트레이닝, 노래 레슨, 보컬 학원, K-POP 보컬, 키즈 보컬, 온라인 보컬 레슨, 프라이빗 보컬 레슨, vocal lesson, vocal training, FVM" />
      <link rel="canonical" href={canonicalUrl} />
      <html lang={language} />

      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="FVM - From Vivian Music" />
      <meta property="og:locale" content={language === 'ko' ? 'ko_KR' : 'en_US'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {isHome && (
        <script type="application/ld+json">
          {JSON.stringify(organizationJsonLd)}
        </script>
      )}
      {isHome && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessJsonLd)}
        </script>
      )}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: fullTitle,
          description,
          url: canonicalUrl,
          isPartOf: {
            '@type': 'WebSite',
            name: 'FVM - From Vivian Music',
            url: SITE_URL,
          },
        })}
      </script>
    </Helmet>
  );
}
