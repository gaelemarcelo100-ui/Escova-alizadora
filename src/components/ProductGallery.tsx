import {useRef, useState} from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import type {MediaAssetSlot} from '../data/lissemaxContent';
import {MediaSlot} from './MediaSlot';

interface ProductGalleryProps {
  items: MediaAssetSlot[];
}

export function ProductGallery({items}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileCarouselRef = useRef<HTMLDivElement | null>(null);

  const selectSlide = (index: number) => {
    const bounded = (index + items.length) % items.length;
    setActiveIndex(bounded);

    if (mobileCarouselRef.current) {
      const container = mobileCarouselRef.current;
      const slideWidth = container.clientWidth;
      container.scrollTo({
        left: bounded * slideWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleMobileScroll = () => {
    const container = mobileCarouselRef.current;
    if (!container || container.clientWidth === 0) return;
    const nextIndex = Math.round(container.scrollLeft / container.clientWidth);
    if (nextIndex !== activeIndex && nextIndex >= 0 && nextIndex < items.length) {
      setActiveIndex(nextIndex);
    }
  };

  const activeItem = items[activeIndex];

  return (
    <div className="w-full">
      {/* Mobile-First: Carrossel horizontal com swipe e imagens grandes */}
      <div className="md:hidden">
        <div className="relative">
          <div
            ref={mobileCarouselRef}
            onScroll={handleMobileScroll}
            className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-xl"
            aria-label="Galeria de fotos reais da LisseMax"
          >
            {items.map((item, idx) => (
              <div key={item.id} className="w-full shrink-0 snap-center">
                <MediaSlot slot={item} priority={idx === 0} />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => selectSlide(activeIndex - 1)}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#CFA968]/35 bg-[#09090B]/80 text-[#F7F4F5] backdrop-blur-sm transition-colors hover:border-[#E384A4]"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => selectSlide(activeIndex + 1)}
            aria-label="Próxima foto"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#CFA968]/35 bg-[#09090B]/80 text-[#F7F4F5] backdrop-blur-sm transition-colors hover:border-[#E384A4]"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Indicadores de slide + legenda rápida */}
        <div className="mt-3 flex items-center justify-between px-1">
          <span className="text-xs text-[#B8B1B5] tabular-nums">
            {activeIndex + 1} / {items.length}
          </span>
          <div className="flex items-center gap-2" role="tablist" aria-label="Selecionar foto">
            {items.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={idx === activeIndex}
                aria-label={`Ver ${item.label}`}
                onClick={() => selectSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  idx === activeIndex
                    ? 'w-7 bg-[#E384A4]'
                    : 'w-2.5 bg-[#32323B] hover:bg-[#CFA968]/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: Imagem principal ampla + miniaturas selecionáveis */}
      <div className="hidden md:block">
        <div className="relative">
          <MediaSlot slot={activeItem} priority />

          <button
            type="button"
            onClick={() => selectSlide(activeIndex - 1)}
            aria-label="Foto anterior"
            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#CFA968]/35 bg-[#09090B]/80 text-[#F7F4F5] transition-colors hover:border-[#E384A4] focus-visible:outline-2 focus-visible:outline-[#E384A4]"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => selectSlide(activeIndex + 1)}
            aria-label="Próxima foto"
            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#CFA968]/35 bg-[#09090B]/80 text-[#F7F4F5] transition-colors hover:border-[#E384A4] focus-visible:outline-2 focus-visible:outline-[#E384A4]"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-4 grid grid-cols-5 gap-3">
          {items.map((item, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => selectSlide(idx)}
                aria-label={`Selecionar ${item.label}`}
                aria-pressed={isSelected}
                className={`group overflow-hidden rounded-lg border p-1 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#E384A4] ${
                  isSelected
                    ? 'border-[#E384A4] bg-[#1A1418]'
                    : 'border-[#CFA968]/20 bg-[#121216] hover:border-[#CFA968]/50'
                }`}
              >
                <div className="flex aspect-square w-full flex-col items-center justify-center rounded bg-[#0E0E12] px-1.5 text-center">
                  {item.src ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      referrerPolicy="no-referrer"
                      className="h-full w-full rounded object-cover"
                    />
                  ) : (
                    <>
                      <span
                        className={`text-[11px] font-semibold tabular-nums ${
                          isSelected ? 'text-[#E384A4]' : 'text-[#CFA968]'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span className="mt-1 line-clamp-2 text-[10px] leading-tight text-[#B8B1B5]">
                        Foto real
                      </span>
                    </>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
