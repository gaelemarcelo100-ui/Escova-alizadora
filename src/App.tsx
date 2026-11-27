import {useEffect, useRef, useState} from 'react';
import {
  BLOCK_2_PROBLEM,
  BLOCK_3_SOLUTION,
  BLOCK_4_CERAMIC,
  BLOCK_5_STRUCTURE,
  BLOCK_6_USAGE,
  BLOCK_7_DETAILS,
  BLOCK_8_VIDEO,
  HERO_GALLERY_SLOTS,
  PRODUCT_HERO,
  type MediaAssetSlot,
} from './data/lissemaxContent';
import {CheckoutButton} from './components/CheckoutButton';
import {MediaSlot, VideoSlot} from './components/MediaSlot';
import {ProductGallery} from './components/ProductGallery';
import {UsageStepsSection} from './components/UsageStepsSection';

interface AlternatingStorySectionProps {
  id: string;
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  media: MediaAssetSlot;
  mediaPosition: 'left' | 'right';
  surface?: 'base' | 'elevated';
}

/**
 * Seção alternada para os blocos explicativos:
 * - Desktop: alterna imagem esquerda/direita conforme `mediaPosition`
 * - Mobile-First: sempre exibe headline -> texto curto -> imagem
 */
function AlternatingStorySection({
  id,
  eyebrow,
  headline,
  paragraphs,
  media,
  mediaPosition,
  surface = 'base',
}: AlternatingStorySectionProps) {
  const bgClass = surface === 'elevated' ? 'bg-[#0D0D11]' : 'bg-[#09090B]';
  const mediaOrderDesktop = mediaPosition === 'left' ? 'lg:order-1' : 'lg:order-2';
  const textOrderDesktop = mediaPosition === 'left' ? 'lg:order-2' : 'lg:order-1';

  return (
    <section id={id} className={`border-t border-[#CFA968]/15 ${bgClass} py-16 md:py-24`}>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
        {/* Texto sempre primeiro no mobile */}
        <div className={`order-1 lg:col-span-6 ${textOrderDesktop}`}>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#CFA968]">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-[0.01em] text-[#F7F4F5] sm:text-3xl md:text-4xl">
            {headline}
          </h2>
          <div className="mt-5 space-y-4">
            {paragraphs.map((paragraph, idx) => (
              <p key={idx} className="max-w-[60ch] text-base leading-relaxed text-[#C7C0C4]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Imagem depois do texto no mobile; alternada no desktop */}
        <div className={`order-2 lg:col-span-6 ${mediaOrderDesktop}`}>
          <MediaSlot slot={media} />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const heroCtaRef = useRef<HTMLDivElement | null>(null);
  const [showMobileStickyCta, setShowMobileStickyCta] = useState(false);

  useEffect(() => {
    const target = heroCtaRef.current;
    if (!target || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowMobileStickyCta(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      {threshold: 0.1},
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#09090B] pb-20 text-[#F7F4F5] md:pb-0">
      {/* BLOCO 1: PRIMEIRA DOBRA (Galeria à esquerda + Ficha comercial à direita no desktop; Carrossel + Headline + Preço + Botão no mobile) */}
      <section
        id="primeira-dobra"
        className="mx-auto max-w-[1200px] px-5 pb-14 pt-6 sm:px-8 md:pb-24 md:pt-12"
      >
        <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-12 md:gap-10 lg:gap-14">
          {/* Coluna da Galeria */}
          <div className="md:col-span-7">
            <ProductGallery items={HERO_GALLERY_SLOTS} />
          </div>

          {/* Coluna da Ficha Comercial */}
          <div className="md:col-span-5 md:sticky md:top-8">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-[#CFA968]">
              <span className="font-editorial text-2xl font-semibold tracking-wide text-[#F7F4F5]">
                {PRODUCT_HERO.brand}
              </span>
              <span aria-hidden="true" className="text-[#CFA968]/60">
                ·
              </span>
              <span className="text-xs uppercase tracking-[0.12em] text-[#CFA968]">
                {PRODUCT_HERO.productName}
              </span>
            </div>

            <h1 className="mt-4 text-balance text-2xl font-semibold leading-[1.15] tracking-[0.01em] text-[#F7F4F5] sm:text-3xl lg:text-[2.25rem]">
              {PRODUCT_HERO.headline}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-[#C7C0C4]">
              {PRODUCT_HERO.subheadline}
            </p>

            {/* Preço e Ficha Comercial */}
            <div className="mt-6 border-t border-[#CFA968]/20 pt-5">
              <p className="text-xs uppercase tracking-[0.14em] text-[#B8B1B5]">
                Valor do produto
              </p>
              <p className="mt-1 text-3xl font-semibold tracking-tight text-[#F7F4F5] tabular-nums sm:text-4xl">
                {PRODUCT_HERO.priceFormatted}
              </p>

              <div ref={heroCtaRef} className="mt-5">
                <CheckoutButton
                  id="cta-hero"
                  label={PRODUCT_HERO.ctaLabel}
                  fullWidth
                />
              </div>

              <p className="mt-3.5 text-xs leading-relaxed text-[#9C9499]">
                {PRODUCT_HERO.commercialNotice}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 2: O PROBLEMA (Desktop: texto esquerda / visual direita) */}
      <AlternatingStorySection
        id="o-problema"
        eyebrow="Rotina diária"
        headline={BLOCK_2_PROBLEM.headline}
        paragraphs={BLOCK_2_PROBLEM.paragraphs}
        media={BLOCK_2_PROBLEM.media}
        mediaPosition="right"
        surface="elevated"
      />

      {/* BLOCO 3: A SOLUÇÃO (Desktop: visual esquerda / texto direita) */}
      <AlternatingStorySection
        id="a-solucao"
        eyebrow="Proposta LisseMax"
        headline={BLOCK_3_SOLUTION.headline}
        paragraphs={BLOCK_3_SOLUTION.paragraphs}
        media={BLOCK_3_SOLUTION.media}
        mediaPosition="left"
        surface="base"
      />

      {/* BLOCO 4: REVESTIMENTO CERÂMICO (Desktop: texto esquerda / visual direita) */}
      <AlternatingStorySection
        id="revestimento-ceramico"
        eyebrow="Superfície de aquecimento"
        headline={BLOCK_4_CERAMIC.headline}
        paragraphs={BLOCK_4_CERAMIC.paragraphs}
        media={BLOCK_4_CERAMIC.media}
        mediaPosition="right"
        surface="elevated"
      />

      {/* BLOCO 5: ESTRUTURA DA ESCOVA (Desktop: visual esquerda / texto direita) */}
      <AlternatingStorySection
        id="estrutura-da-escova"
        eyebrow="Formato do aparelho"
        headline={BLOCK_5_STRUCTURE.headline}
        paragraphs={BLOCK_5_STRUCTURE.paragraphs}
        media={BLOCK_5_STRUCTURE.media}
        mediaPosition="left"
        surface="base"
      />

      {/* BLOCO 6: COMO UTILIZAR */}
      <UsageStepsSection headline={BLOCK_6_USAGE.headline} steps={BLOCK_6_USAGE.steps} />

      {/* BLOCO 7: DETALHES DO PRODUTO */}
      <section id="detalhes-do-produto" className="border-t border-[#CFA968]/15 bg-[#09090B] py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#CFA968]">
              Acabamento e componentes
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-[0.01em] text-[#F7F4F5] sm:text-3xl md:text-4xl">
              {BLOCK_7_DETAILS.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#C7C0C4]">
              {BLOCK_7_DETAILS.subtitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOCK_7_DETAILS.items.map((item, idx) => (
              <article
                key={item.id}
                className="flex flex-col rounded-xl border border-[#CFA968]/20 bg-[#111115] p-4"
              >
                <MediaSlot slot={item} />
                <div className="mt-4 flex items-baseline gap-2.5">
                  <span className="font-editorial text-lg font-semibold text-[#CFA968] tabular-nums">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-semibold text-[#F7F4F5]">{item.title}</h3>
                </div>
                {item.note && (
                  <p className="mt-1.5 text-xs leading-relaxed text-[#9C9499]">{item.note}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 8: VÍDEO DEMONSTRATIVO */}
      <section
        id="video-demonstrativo"
        className="border-t border-[#CFA968]/15 bg-[#0D0D11] py-16 md:py-24"
      >
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
          <div className="order-1 lg:col-span-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#CFA968]">
              Demonstração real
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-[0.01em] text-[#F7F4F5] sm:text-3xl md:text-4xl">
              {BLOCK_8_VIDEO.title}
            </h2>
            <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-[#C7C0C4]">
              {BLOCK_8_VIDEO.description}
            </p>

            <div className="mt-8 border-t border-[#CFA968]/15 pt-6">
              <div className="mb-4 flex items-baseline gap-3">
                <span className="font-editorial text-xl font-medium text-[#F7F4F5]">
                  {PRODUCT_HERO.brand}
                </span>
                <span aria-hidden="true" className="text-[#CFA968]/60">
                  ·
                </span>
                <span className="text-xl font-semibold text-[#F7F4F5] tabular-nums">
                  {PRODUCT_HERO.priceFormatted}
                </span>
              </div>
              <CheckoutButton id="cta-video" label={PRODUCT_HERO.ctaLabel} />
            </div>
          </div>

          <div className="order-2 lg:col-span-6">
            <VideoSlot
              videoSrc={BLOCK_8_VIDEO.videoSrc}
              posterSrc={BLOCK_8_VIDEO.posterSrc}
              description={BLOCK_8_VIDEO.description}
            />
          </div>
        </div>
      </section>

      {/* Barra fixa inferior compacta apenas no mobile após rolar além da primeira dobra */}
      {showMobileStickyCta && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#CFA968]/25 bg-[#09090B]/95 px-4 py-2.5 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-[600px] items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-[#CFA968]">{PRODUCT_HERO.brand}</p>
              <p className="text-base font-semibold text-[#F7F4F5] tabular-nums">
                {PRODUCT_HERO.priceFormatted}
              </p>
            </div>
            <CheckoutButton id="cta-sticky-mobile" label={PRODUCT_HERO.ctaLabel} compact />
          </div>
        </div>
      )}
    </main>
  );
}
