import {useState} from 'react';
import {Camera, Play} from 'lucide-react';
import type {MediaAssetSlot} from '../data/lissemaxContent';

interface MediaSlotProps {
  slot: MediaAssetSlot;
  className?: string;
  priority?: boolean;
}

/**
 * Moldura preparada para fotografias reais do produto.
 * Quando `slot.src` ainda não foi preenchido pelo proprietário, renderiza um
 * quadro reservado discreto na identidade preto/rosa/dourado sem simular o produto.
 */
export function MediaSlot({slot, className = '', priority = false}: MediaSlotProps) {
  const [hasError, setHasError] = useState(false);

  const showImage = Boolean(slot.src) && !hasError;

  return (
    <figure
      className={`relative overflow-hidden rounded-xl border border-[#CFA968]/25 bg-[#121216] ${slot.aspectClass} ${className}`}
    >
      {showImage ? (
        <img
          src={slot.src as string}
          alt={slot.alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setHasError(true)}
          className="h-full w-full object-cover object-center"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top_right,rgba(227,132,164,0.09),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(207,169,104,0.08),transparent_55%)] p-6 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#CFA968]/35 bg-[#191920] text-[#E384A4]">
            <Camera className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#CFA968]">
            {slot.label}
          </p>
          <p className="mt-2 max-w-[28ch] text-sm leading-relaxed text-[#B8B1B5]">
            {slot.caption}
          </p>
        </div>
      )}
    </figure>
  );
}

interface VideoSlotProps {
  videoSrc: string | null;
  posterSrc: string | null;
  description: string;
}

export function VideoSlot({videoSrc, posterSrc, description}: VideoSlotProps) {
  const [noticeVisible, setNoticeVisible] = useState(false);

  if (videoSrc) {
    return (
      <div className="relative mx-auto aspect-[9/16] max-h-[560px] w-full max-w-[340px] overflow-hidden rounded-2xl border border-[#CFA968]/30 bg-[#121216]">
        <video
          src={videoSrc}
          poster={posterSrc ?? undefined}
          controls
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative mx-auto flex aspect-[9/16] max-h-[540px] w-full max-w-[330px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#CFA968]/30 bg-[#121216] bg-[radial-gradient(circle_at_top,rgba(227,132,164,0.10),transparent_58%)] p-7 text-center">
      <button
        type="button"
        onClick={() => setNoticeVisible((prev) => !prev)}
        aria-label="Espaço reservado para vídeo real da LisseMax"
        className="group mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#CFA968]/45 bg-[#1B1B22] text-[#E384A4] transition-transform duration-200 hover:scale-105 hover:border-[#E384A4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E384A4]"
      >
        <Play className="ml-0.5 h-6 w-6 fill-current" aria-hidden="true" />
      </button>

      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#CFA968]">
        Vídeo real em cabelos secos
      </p>
      <p className="mt-3 text-sm leading-relaxed text-[#C7C0C4]">{description}</p>

      {noticeVisible && (
        <p className="mt-4 border-t border-[#CFA968]/20 pt-3 text-xs leading-relaxed text-[#E384A4]">
          Aguardando inserção do arquivo de vídeo real gravado com a LisseMax em uso.
        </p>
      )}
    </div>
  );
}
