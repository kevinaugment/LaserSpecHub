import type { Metadata } from 'next';

interface PageMetadataProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.laserspechub.com';
const SITE_NAME = 'LaserSpecHub';

export function generatePageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = '/og-image.png',
  noIndex = false,
}: PageMetadataProps): Metadata {
  const fullUrl = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    keywords: [
      'laser cutting machine',
      'laser equipment',
      'fiber laser',
      'CO2 laser',
      ...keywords,
    ],
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}

// Structured Data helpers
export function generateProductSchema(product: {
  name: string;
  description: string;
  brand: string;
  model: string;
  url: string;
  image?: string;
  price?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    model: product.model,
    url: product.url,
    ...(product.image && { image: product.image }),
    ...(product.price && {
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'USD',
      },
    }),
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateHowToSchema(howTo: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateCalculatorSchema(calculator: {
  name: string;
  description: string;
  url: string;
  input: Array<{ name: string; description: string }>;
  output: Array<{ name: string; description: string }>;
  applicationCategory: string;
  operatingSystem: string;
  softwareVersion?: string;
}) {
  const fullUrl = `${SITE_URL}${calculator.url}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': fullUrl,
    name: calculator.name,
    description: calculator.description,
    url: fullUrl,
    applicationCategory: calculator.applicationCategory,
    operatingSystem: calculator.operatingSystem,
    ...(calculator.softwareVersion && { softwareVersion: calculator.softwareVersion }),
    featureList: [
      ...calculator.input.map((input) => `Input: ${input.name} - ${input.description}`),
      ...calculator.output.map((output) => `Output: ${output.name} - ${output.description}`),
    ],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}

























