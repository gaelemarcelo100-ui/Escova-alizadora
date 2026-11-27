import {useState} from 'react';
import type {UsageStep} from '../data/lissemaxContent';
import {MediaSlot} from './MediaSlot';

interface UsageStepsSectionProps {
  headline: string;
  steps: UsageStep[];
}

export function UsageStepsSection({headline, steps}: UsageStepsSectionProps) {
  const [selectedStep, setSelectedStep] = useState(0);
  const currentStep = steps[selectedStep];

  return (
    <section
      id="como-utilizar"
      className="border-t border-[#CFA968]/15 bg-[#0D0D11] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* Cabeçalho da seção */}
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#CFA968]">
            Modo de uso
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-[0.01em] text-[#F7F4F5] sm:text-3xl md:text-4xl">
            {headline}
          </h2>
        </div>

        {/* Desktop: Lista interativa de passos à esquerda + sequência visual em foco à direita */}
        <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <ol className="divide-y divide-[#CFA968]/15 border-y border-[#CFA968]/15">
              {steps.map((step, idx) => {
                const isActive = idx === selectedStep;
                return (
                  <li key={step.number}>
                    <button
                      type="button"
                      onClick={() => setSelectedStep(idx)}
                      className={`flex w-full items-start gap-4 py-4 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#E384A4] ${
                        isActive ? 'text-[#F7F4F5]' : 'text-[#B8B1B5] hover:text-[#F7F4F5]'
                      }`}
                    >
                      <span
                        className={`font-editorial text-2xl font-semibold leading-none tabular-nums transition-colors ${
                          isActive ? 'text-[#E384A4]' : 'text-[#CFA968]/80'
                        }`}
                      >
                        {step.number}
                      </span>
                      <span className="text-base leading-relaxed">{step.text}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Mobile: Carrossel horizontal de fotos das etapas / Desktop: Imagem da etapa selecionada */}
          <div className="lg:col-span-6">
            <div className="hidden lg:block">
              <MediaSlot slot={currentStep.media} />
              <div className="mt-3 flex items-center justify-between text-xs text-[#B8B1B5]">
                <span className="tabular-nums">
                  Etapa {currentStep.number} de 0{steps.length}
                </span>
                <span className="text-[#CFA968]">{currentStep.media.label}</span>
              </div>
            </div>

            <div className="lg:hidden">
              <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2">
                {steps.map((step) => (
                  <div key={step.number} className="w-[84%] shrink-0 snap-center">
                    <MediaSlot slot={step.media} />
                    <p className="mt-2.5 text-xs font-medium text-[#CFA968] tabular-nums">
                      Passo {step.number}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
