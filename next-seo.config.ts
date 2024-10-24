import { DefaultSeoProps } from 'next-seo';

const defaultSEOConfig: DefaultSeoProps = {
  title: "williamk19",
  titleTemplate: "%s | williamk19",
  defaultTitle: "williamk19",
  description: "William Kurniawan's personal website",
  canonical: "https://williamk19.my.id",
  openGraph: {
    url: "https://williamk19.my.id",
    title: "williamk19",
    description: "Frontend Web Engineer",
    siteName: "williamk19 personal site",
  },
  additionalLinkTags: [
    { rel: 'shortcut icon', href: '/icon/favicon.ico' },
  ]
};

export default defaultSEOConfig;