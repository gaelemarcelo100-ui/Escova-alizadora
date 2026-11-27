/**
 * Conteúdo e mapeamento centralizado de mídias reais da página LisseMax (Parte 2).
 *
 * Para publicar as fotografias e o vídeo reais do produto, substitua `src: null`
 * pelo caminho público ou URL do arquivo oficial correspondente (mantendo intacta
 * a aparência preta com detalhes rosa e dourado da escova real).
 */

export const CHECKOUT_URL = '[URL_CHECKOUT_CONFIRMAR]';

export interface MediaAssetSlot {
  id: string;
  src: string | null;
  alt: string;
  label: string;
  caption: string;
  aspectClass: string;
}

export const PRODUCT_HERO = {
  brand: 'LisseMax',
  productName: 'Escova Alisadora Cerâmica Elétrica LisseMax',
  headline: 'CABELO ARRUMADO SEM PASSAR HORAS NA FRENTE DO ESPELHO!',
  subheadline:
    'Conheça a LisseMax: uma escova alisadora elétrica com revestimento cerâmico, desenvolvida para ajudar você a alinhar os fios enquanto penteia.',
  priceFormatted: 'R$ 197,90',
  ctaLabel: 'QUERO MINHA LISSEMAX',
  commercialNotice:
    'Condições de entrega e pagamento serão exibidas após confirmação comercial.',
};

export const HERO_GALLERY_SLOTS: MediaAssetSlot[] = [
  {
    id: 'gallery-main',
    src: null,
    alt: 'Escova Alisadora Cerâmica Elétrica LisseMax em corpo preto com detalhes rosa e dourado',
    label: 'Foto Real 01 · Visão principal',
    caption: 'Fotografia real do produto (corpo preto com detalhes rosa e dourado)',
    aspectClass: 'aspect-[4/5]',
  },
  {
    id: 'gallery-angled',
    src: null,
    alt: 'Ângulo lateral da Escova LisseMax destacando o formato do corpo',
    label: 'Foto Real 02 · Perfil e corpo inclinado',
    caption: 'Fotografia real em ângulo lateral do aparelho',
    aspectClass: 'aspect-[4/5]',
  },
  {
    id: 'gallery-ceramic',
    src: null,
    alt: 'Superfície com revestimento cerâmico da escova LisseMax',
    label: 'Foto Real 03 · Revestimento cerâmico',
    caption: 'Detalhe real da superfície de aquecimento cerâmica',
    aspectClass: 'aspect-[4/5]',
  },
  {
    id: 'gallery-blades',
    src: null,
    alt: 'Lâminas em formato de U da escova alisadora LisseMax',
    label: 'Foto Real 04 · Lâminas em formato de U',
    caption: 'Close real da disposição das lâminas',
    aspectClass: 'aspect-[4/5]',
  },
  {
    id: 'gallery-cord',
    src: null,
    alt: 'Acabamento do cabo e conexão elétrica da LisseMax',
    label: 'Foto Real 05 · Cabo e detalhes',
    caption: 'Fotografia real de acabamento, cabo e conexão elétrica',
    aspectClass: 'aspect-[4/5]',
  },
];

export const BLOCK_2_PROBLEM = {
  index: '02',
  headline: 'VOCÊ SÓ QUER SE ARRUMAR. MAS SEU CABELO PARECE TER OUTROS PLANOS.',
  paragraphs: [
    'Tem dias em que você só quer deixar o cabelo alinhado e seguir com sua rotina. Mas acaba passando tempo demais tentando organizar os fios.',
    'A LisseMax foi pensada para tornar esse momento mais prático.',
  ],
  media: {
    id: 'problem-mirror',
    src: '/src/assets/images/editorial_mirror_routine_1795575647546.jpg',
    alt: 'Mulher diante do espelho arrumando os cabelos na rotina cotidiana',
    label: 'Rotina cotidiana diante do espelho',
    caption: 'Cenário cotidiano antes de iniciar o dia',
    aspectClass: 'aspect-[4/3]',
  } satisfies MediaAssetSlot,
};

export const BLOCK_3_SOLUTION = {
  index: '03',
  headline: 'PENTEIE ENQUANTO ALINHA OS FIOS.',
  paragraphs: [
    'A LisseMax combina o formato de uma escova com aquecimento elétrico. Uma alternativa para quem deseja alinhar os fios enquanto penteia, sem depender exclusivamente dos movimentos de uma chapinha tradicional.',
  ],
  media: {
    id: 'solution-in-use',
    src: null,
    alt: 'Fotografia real da escova LisseMax sendo utilizada nos cabelos',
    label: 'Fotografia real da escova em uso',
    caption: 'Espaço reservado para fotografia real da LisseMax em uso',
    aspectClass: 'aspect-[4/3]',
  } satisfies MediaAssetSlot,
};

export const BLOCK_4_CERAMIC = {
  index: '04',
  headline: 'UM DIFERENCIAL QUE COMEÇA NA SUPERFÍCIE DE AQUECIMENTO.',
  paragraphs: [
    'O revestimento cerâmico faz parte da estrutura da LisseMax e é um dos detalhes que caracterizam sua proposta de alinhamento dos fios.',
  ],
  media: {
    id: 'ceramic-surface',
    src: null,
    alt: 'Fotografia aproximada e fiel da superfície com revestimento cerâmico da LisseMax',
    label: 'Fotografia aproximada da superfície cerâmica',
    caption: 'Espaço reservado para imagem aproximada e fiel do revestimento cerâmico',
    aspectClass: 'aspect-[4/3]',
  } satisfies MediaAssetSlot,
};

export const BLOCK_5_STRUCTURE = {
  index: '05',
  headline: 'DETALHES QUE FAZEM PARTE DO SEU FORMATO.',
  paragraphs: [
    'A estrutura apresentada pelo fornecedor possui lâminas em formato de U e corpo inclinado. Esses detalhes devem ser mostrados em imagens aproximadas, sem atribuir resultados não comprovados.',
  ],
  media: {
    id: 'structure-blades',
    src: null,
    alt: 'Close real das lâminas em formato de U e do corpo inclinado da escova LisseMax',
    label: 'Close real da estrutura',
    caption: 'Espaço reservado para close real das lâminas em formato de U e corpo inclinado',
    aspectClass: 'aspect-[4/3]',
  } satisfies MediaAssetSlot,
};

export interface UsageStep {
  number: string;
  text: string;
  media: MediaAssetSlot;
}

export const BLOCK_6_USAGE = {
  index: '06',
  headline: 'UM MOMENTO DE CUIDADO, SEM COMPLICAR A ROTINA.',
  steps: [
    {
      number: '01',
      text: 'Confira as instruções do fabricante.',
      media: {
        id: 'step-01',
        src: null,
        alt: 'Etapa 1: Conferência das instruções do fabricante da LisseMax',
        label: 'Etapa 01 · Instruções do fabricante',
        caption: 'Fotografia real da conferência inicial do aparelho e orientações',
        aspectClass: 'aspect-[4/3]',
      },
    },
    {
      number: '02',
      text: 'Utilize nos cabelos secos, se essa indicação estiver confirmada no manual.',
      media: {
        id: 'step-02',
        src: null,
        alt: 'Etapa 2: Preparação dos cabelos secos conforme indicação do manual',
        label: 'Etapa 02 · Cabelos secos',
        caption: 'Fotografia real da preparação com fios secos',
        aspectClass: 'aspect-[4/3]',
      },
    },
    {
      number: '03',
      text: 'Ligue o aparelho e aguarde conforme o tempo indicado pelo fabricante.',
      media: {
        id: 'step-03',
        src: null,
        alt: 'Etapa 3: Ligando a escova LisseMax conforme tempo do fabricante',
        label: 'Etapa 03 · Ligar o aparelho',
        caption: 'Fotografia real do acionamento do botão no corpo do aparelho',
        aspectClass: 'aspect-[4/3]',
      },
    },
    {
      number: '04',
      text: 'Separe os fios em mechas.',
      media: {
        id: 'step-04',
        src: null,
        alt: 'Etapa 4: Separação dos cabelos em mechas antes de passar a escova',
        label: 'Etapa 04 · Separação em mechas',
        caption: 'Fotografia real separando os fios em mechas',
        aspectClass: 'aspect-[4/3]',
      },
    },
    {
      number: '05',
      text: 'Passe cuidadosamente a escova, respeitando as orientações de segurança.',
      media: {
        id: 'step-05',
        src: null,
        alt: 'Etapa 5: Passando a escova LisseMax cuidadosamente pelos fios',
        label: 'Etapa 05 · Passagem cuidadosa',
        caption: 'Fotografia real da passagem da escova ao longo da mecha',
        aspectClass: 'aspect-[4/3]',
      },
    },
  ] satisfies UsageStep[],
};

export interface ProductDetailSlot extends MediaAssetSlot {
  title: string;
  note?: string;
}

export const BLOCK_7_DETAILS = {
  index: '07',
  title: 'Detalhes do Produto',
  subtitle: 'Registro fotográfico fiel das partes que compõem a LisseMax.',
  items: [
    {
      id: 'detail-black-body',
      title: 'Corpo preto',
      src: null,
      alt: 'Fotografia real do corpo preto da escova LisseMax',
      label: 'Corpo preto',
      caption: 'Fotografia real do acabamento principal em preto',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'detail-rose-gold',
      title: 'Detalhes rosa/dourado',
      src: null,
      alt: 'Fotografia real dos detalhes em rosa e dourado da LisseMax',
      label: 'Detalhes rosa/dourado',
      caption: 'Fotografia real dos acabamentos em rosa e dourado',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'detail-ceramic',
      title: 'Superfície cerâmica',
      src: null,
      alt: 'Fotografia real da superfície cerâmica da escova LisseMax',
      label: 'Superfície cerâmica',
      caption: 'Fotografia real da superfície com revestimento cerâmico',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'detail-blades',
      title: 'Estrutura das lâminas',
      src: null,
      alt: 'Fotografia real da estrutura das lâminas em formato de U da LisseMax',
      label: 'Estrutura das lâminas',
      caption: 'Fotografia real da estrutura interna das lâminas',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'detail-cord',
      title: 'Cabo e conexão elétrica',
      note: 'Exibido conforme disponibilidade nas fotos enviadas.',
      src: null,
      alt: 'Fotografia real do cabo e conexão elétrica da escova LisseMax',
      label: 'Cabo e conexão elétrica',
      caption: 'Fotografia real do cabo e da conexão elétrica (quando disponível)',
      aspectClass: 'aspect-[4/3]',
    },
  ] satisfies ProductDetailSlot[],
};

export const BLOCK_8_VIDEO = {
  index: '08',
  title: 'Vídeo Demonstrativo',
  description:
    'Espaço reservado para o vídeo real mostrando a LisseMax sendo utilizada em cabelos secos, com enquadramento próximo do produto e dos fios.',
  videoSrc: null as string | null,
  posterSrc: null as string | null,
};
