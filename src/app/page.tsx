import Image from "next/image";
import styles from './styles.module.css';
import AboutUs from "./components/AboutUs/AboutUs";
import ExampleRealizations from "./components/ExampleRealizations/ExampleRealizations";
import Contact from "./components/Contact/Contact";
import Oferta from "./components/Oferta/Oferta";
import Gallery from "./components/Gallery/Gallery";

export const metadata = {
  title: 'QbkoweLove – Personalizowane kubki na każdą okazję',
  description: 'Odkryj QbkoweLove – rodzinną markę specjalizującą się w tworzeniu personalizowanych kubków, idealnych na prezent. Nasze unikatowe kubki z nadrukiem wyróżniają się jakością i oryginalnym designem, doskonale sprawdzając się jako upominek na każdą okazję, święta czy urodziny.',
  keywords: [
    'personalizowane kubki',
    'kubki z nadrukiem',
    'QbkoweLove',
    'kubki na prezent',
    'kubki okolicznościowe',
    'upominki'
  ],
  openGraph: {
    title: 'QbkoweLove – Personalizowane kubki na każdą okazję',
    description: 'Odkryj QbkoweLove – rodzinną markę specjalizującą się w tworzeniu personalizowanych kubków, idealnych na prezent. Nasze unikatowe kubki z nadrukiem wyróżniają się jakością i oryginalnym designem, doskonale sprawdzając się jako upominek na każdą okazję, święta czy urodziny.',
    url: 'https://qbkowelove.pl',
    siteName: 'QbkoweLove',
    images: [
      {
        url: '/images/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'QbkoweLove – personalizowane kubki',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QbkoweLove – Personalizowane kubki na każdą okazję',
    description: 'Odkryj QbkoweLove – rodzinną markę specjalizującą się w tworzeniu personalizowanych kubków, idealnych na prezent. Nasze unikatowe kubki z nadrukiem wyróżniają się jakością i oryginalnym designem, doskonale sprawdzając się jako upominek na każdą okazję, święta czy urodziny.',
    images: ['/images/logo.jpeg'],
  },
};


export default function Home() {
  return (
    <div className={styles.page}>
      <h1>QbkoweLove – Twój kubek, Twoja historia</h1>
      <p className={styles.heroSectionPar}>QbkoweLove to rodzinna firma, w której z pasją tworzymy personalizowane kubki. Każdy nasz projekt jest niepowtarzalny i pełen emocji. Poznaj nas bliżej i przekonaj się, jak możemy nadać wyjątkowy charakter Twoim prezentom!</p>
      <div className={styles.topPageImages}>
        <Image src={'/images/IMG-20250320-WA0025.jpg'} width={380} height={380} alt="QbkoweLove - kubek dla par" />
        <Image src={'/images/IMG-20250320-WA0004.jpg'} width={380} height={380} alt="QbkoweLove - kubek dla pary" />
        <Image src={'/images/IMG-20250320-WA0018.jpg'} width={380} height={380} alt="QbkoweLove - kubek dla zięcia" />
      </div>
      <AboutUs />
      <ExampleRealizations />
      <Gallery />
      <Oferta />
      <Contact />
    </div>
  );
}
