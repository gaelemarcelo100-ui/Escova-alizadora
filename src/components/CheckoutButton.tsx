import {useState, type MouseEvent} from 'react';
import {ArrowRight} from 'lucide-react';
import {CHECKOUT_URL} from '../data/lissemaxContent';

interface CheckoutButtonProps {
  label: string;
  fullWidth?: boolean;
  compact?: boolean;
  id?: string;
}

export function CheckoutButton({
  label,
  fullWidth = false,
  compact = false,
  id,
}: CheckoutButtonProps) {
  const [pendingNotice, setPendingNotice] = useState(false);
  const isPlaceholder = CHECKOUT_URL === '[URL_CHECKOUT_CONFIRMAR]';

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isPlaceholder) {
      event.preventDefault();
      setPendingNotice(true);
    }
  };

  return (
    <div className={fullWidth ? 'w-full' : 'inline-flex flex-col items-start'}>
      <a
        id={id}
        href={CHECKOUT_URL}
        data-checkout-url={CHECKOUT_URL}
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#E384A4] font-semibold uppercase tracking-[0.06em] text-[#140B10] transition-colors duration-200 hover:bg-[#EC9AB6] active:bg-[#D46F92] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CFA968] whitespace-nowrap shrink-0 ${
          compact ? 'min-h-[44px] px-5 py-2.5 text-xs' : 'min-h-[52px] px-7 py-3.5 text-sm'
        } ${fullWidth ? 'w-full' : ''}`}
      >
        <span>{label}</span>
        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
      </a>
      {pendingNotice && (
        <p className="mt-2 text-xs text-[#CFA968]" role="status">
          Checkout aguardando configuração da URL real ({CHECKOUT_URL}).
        </p>
      )}
    </div>
  );
}
