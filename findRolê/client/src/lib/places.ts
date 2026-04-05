/*
 * FindRolês — Base de dados dos lugares
 * Extraídos da conversa do WhatsApp entre Caetano e Amanda + links TikTok/Instagram
 * Categorias: Restaurante, Café, Bar, Cultura, Mercado, Experiência
 * Preço: $ (até R$30) | $$ (R$30–80) | $$$ (acima R$80)
 */

export type Category =
  | "Restaurante"
  | "Café"
  | "Bar"
  | "Cultura"
  | "Mercado"
  | "Experiência"
  | "Asiático"
  | "Rooftop"
  | "Natureza";

export type Price = "$" | "$$" | "$$$";

export interface Place {
  id: number;
  name: string;
  category: Category;
  neighborhood: string;
  price: Price;
  description: string;
  tip?: string;
  transport?: string;
  sourceUrl: string;
  visited: boolean;
}

export const places: Place[] = [
  // ── RESTAURANTES ──────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Shinsei",
    category: "Asiático",
    neighborhood: "Campo Belo",
    price: "$$$",
    description: "Restaurante japonês sofisticado. Ambiente lindo, comida impecável. Bom pra ir de noite pela vista e clima.",
    tip: "Bom pra ir de noite, a vista e tudo mais.",
    transport: "Metrô São Judas ou Campo Belo + Uber 13 min",
    sourceUrl: "https://www.instagram.com/reel/DTsoOKMil38/",
    visited: false,
  },
  {
    id: 2,
    name: "Indie Food Lab",
    category: "Restaurante",
    neighborhood: "Bela Vista",
    price: "$$",
    description: "Restaurante com proposta autoral e criativa, perto do MASP.",
    transport: "7 min a pé do metrô Trianon-MASP",
    sourceUrl: "https://www.instagram.com/reel/DS-3XGbEhYe/",
    visited: false,
  },
  {
    id: 3,
    name: "Yume Mart",
    category: "Asiático",
    neighborhood: "Paraíso",
    price: "$$",
    description: "Mercado e restaurante japonês com ambiente descolado. Cookie diferente e produtos importados.",
    tip: "Gostei do cookie, diferente né.",
    transport: "4 min a pé do metrô Ana Rosa",
    sourceUrl: "https://vt.tiktok.com/ZSmMumA6g/",
    visited: false,
  },
  {
    id: 4,
    name: "Bráz Pizzaria",
    category: "Restaurante",
    neighborhood: "Vila Mariana",
    price: "$$",
    description: "Eleita a quarta melhor pizzaria do mundo. Atendimento impecável, pizza deliciosa, espaço aconchegante.",
    sourceUrl: "https://vt.tiktok.com/ZSmPstYyF/",
    visited: false,
  },
  {
    id: 5,
    name: "Gero Panini",
    category: "Restaurante",
    neighborhood: "Itaim Bibi",
    price: "$$$",
    description: "Filial do grupo Gero no Itaim. Ambiente sofisticado ao ar livre, pesto imperdível.",
    sourceUrl: "https://vt.tiktok.com/ZSm5bB2bg/",
    visited: false,
  },
  {
    id: 6,
    name: "Figo",
    category: "Restaurante",
    neighborhood: "São Paulo",
    price: "$$$",
    description: "Ambiente simplesmente lindíssimo. Pratos bem feitos, entrada que fica na memória.",
    sourceUrl: "https://vt.tiktok.com/ZSmafN4kQ/",
    visited: false,
  },
  {
    id: 7,
    name: "Pé de Manga",
    category: "Bar",
    neighborhood: "Vila Madalena",
    price: "$$",
    description: "Bar e restaurante ao ar livre com muito verde, embaixo de 2 mangueiras centenárias.",
    tip: "R. Arapiraca, 152 – Vila Madalena",
    sourceUrl: "https://vt.tiktok.com/ZSmPstYyF/",
    visited: false,
  },
  {
    id: 8,
    name: "Hannover Fondue",
    category: "Restaurante",
    neighborhood: "Perdizes",
    price: "$$$",
    description: "Restaurante romântico com violino ao vivo, clima de pedido de namoro. Rodízio de fondue.",
    tip: "R. Cardoso de Almeida, 1301. Conta ~R$600 pra 2. Vai uma vez pra viver o momento.",
    transport: "Perdizes",
    sourceUrl: "https://vt.tiktok.com/ZSmu4B5RX/",
    visited: false,
  },
  {
    id: 9,
    name: "YunFood",
    category: "Asiático",
    neighborhood: "Bom Retiro",
    price: "$",
    description: "Restaurante coreano no Bom Retiro, comida feita com amor pela Dona Cris.",
    tip: "Rua Prates, 379-B",
    sourceUrl: "https://vt.tiktok.com/ZSuxS2E5F/",
    visited: false,
  },
  {
    id: 10,
    name: "Skye Restaurant & Bar",
    category: "Rooftop",
    neighborhood: "Jardins",
    price: "$$$",
    description: "Restaurante no Hotel Unique. Vista incrível, experiência indescritível. Vale cada minuto.",
    sourceUrl: "https://vt.tiktok.com/ZSmPstYyF/",
    visited: false,
  },

  // ── BARES E ROOFTOPS ──────────────────────────────────────────────────────
  {
    id: 11,
    name: "Iccarus SP",
    category: "Rooftop",
    neighborhood: "Centro",
    price: "$$",
    description: "Rooftop hypado no centro. Bar 360°, DJ, área de mesas. Vista incrível no pôr do sol.",
    tip: "Chegar 30 min antes da abertura (18h30) sem reserva. Fila virtual para mesa.",
    transport: "Centro de SP",
    sourceUrl: "https://vt.tiktok.com/ZSmu4B5RX/",
    visited: false,
  },
  {
    id: 12,
    name: "Balsa Bar",
    category: "Rooftop",
    neighborhood: "Centro",
    price: "$$",
    description: "Bar com rooftop próximo à estação São Bento. Preços razoáveis, ambiente descolado.",
    sourceUrl: "https://vt.tiktok.com/ZSmPnA7mB/",
    visited: false,
  },
  {
    id: 13,
    name: "Shoshanna",
    category: "Bar",
    neighborhood: "Paulista",
    price: "$$",
    description: "Bar intimista na Paulista, ótimo para aniversários e encontros menores.",
    tip: "Bem intimista, boa opção para aniversário.",
    transport: "Avenida Paulista",
    sourceUrl: "https://vt.tiktok.com/ZSm9SWHUJ/",
    visited: false,
  },
  {
    id: 14,
    name: "Isca Bar",
    category: "Bar",
    neighborhood: "São Paulo",
    price: "$$",
    description: "Bar novo e hypado em SP, ambiente descolado com drinks autorais.",
    sourceUrl: "https://vt.tiktok.com/ZSu67YeSR/",
    visited: false,
  },

  // ── CAFÉS ─────────────────────────────────────────────────────────────────
  {
    id: 15,
    name: "FFV Café",
    category: "Café",
    neighborhood: "Santa Cecília",
    price: "$",
    description: "Cafeteria com revelação de filmes analógicos e galeria de arte. Queijo quente muito bom.",
    tip: "Rua Barão de Tatuí, 240. Galeria de arte e produtos de fotografia analógica nos outros andares.",
    transport: "Santa Cecília",
    sourceUrl: "https://vt.tiktok.com/ZSmu4SQ5A/",
    visited: false,
  },
  {
    id: 16,
    name: "Ronin Café",
    category: "Café",
    neighborhood: "Marechal Deodoro",
    price: "$",
    description: "Café com preparo complexo e ambiente urbano. Queijo quente + punk lemonade + oreo por ~R$67.",
    tip: "Metrô mais próximo: Marechal (4 min andando).",
    transport: "Metrô Marechal",
    sourceUrl: "https://vt.tiktok.com/ZSmuCctEs/",
    visited: false,
  },
  {
    id: 17,
    name: "Teto Café",
    category: "Café",
    neighborhood: "Vila Madalena",
    price: "$",
    description: "Cafeteria escondida em Pinheiros. Mega intimista, conforto, comida boa e atendimento incrível.",
    tip: "R. Simão Álvares, 986 – loja 01",
    sourceUrl: "https://vt.tiktok.com/ZSmPsnyCq/",
    visited: false,
  },
  {
    id: 18,
    name: "Betchavas Café",
    category: "Café",
    neighborhood: "Jardins",
    price: "$",
    description: "Cafeteria-livraria com vibe dos filmes de NYC e anos 2000. Preços entre R$9 e R$28.",
    tip: "R. Oscar Freire, 1128 – Jardins",
    sourceUrl: "https://vt.tiktok.com/ZSmPsnyCq/",
    visited: false,
  },
  {
    id: 19,
    name: "Baccio di Latte",
    category: "Café",
    neighborhood: "Paulista",
    price: "$",
    description: "Sorveteria italiana na Paulista. Dica: baixe o app, cadastre o CPF e acumule pontos pra ganhar sorvete de graça.",
    tip: "Baixe o app Baccio di Latte e insira o CPF na maquininha em todas as compras.",
    sourceUrl: "https://vt.tiktok.com/ZSmPjWm8X/",
    visited: false,
  },

  // ── CULTURA ───────────────────────────────────────────────────────────────
  {
    id: 20,
    name: "Casa Bola — ABERTO5",
    category: "Cultura",
    neighborhood: "Jardim Paulistano",
    price: "$$",
    description: "Casa esférica icônica de Eduardo Longo (anos 70) aberta ao público. Mostra de arte, design e arquitetura. Até 31 de maio de 2026.",
    tip: "Av. Brigadeiro Faria Lima, 2889. Ingressos: R$75 inteira / R$35,50 meia.",
    transport: "Faria Lima",
    sourceUrl: "https://www.instagram.com/reel/DVo1xfrEVzU/",
    visited: false,
  },
  {
    id: 21,
    name: "Museu Lasar Segall",
    category: "Cultura",
    neighborhood: "Vila Mariana",
    price: "$",
    description: "Tem uma sala de cinema dentro! Vale demais a visita. Cinema de rua no museu.",
    sourceUrl: "https://vt.tiktok.com/ZSmP6dRN3/",
    visited: false,
  },
  {
    id: 22,
    name: "Japan House",
    category: "Cultura",
    neighborhood: "Paulista",
    price: "$",
    description: "Centro cultural japonês na Paulista. Entrada gratuita, exposições incríveis.",
    tip: "Av. Paulista, 52",
    transport: "Metrô Brigadeiro",
    sourceUrl: "https://vt.tiktok.com/ZSmPsH5cp/",
    visited: false,
  },
  {
    id: 23,
    name: "Mirante do SESC Paulista",
    category: "Cultura",
    neighborhood: "Paulista",
    price: "$",
    description: "Vista de SP de cima, de dia e à noite. Agendamento pelo app Credencial SESC SP. Tem cafeteria no terraço.",
    tip: "Av. Paulista, 119 – 17° andar. Agendamento obrigatório pelo app.",
    transport: "Metrô Brigadeiro",
    sourceUrl: "https://vt.tiktok.com/ZSmPsH5cp/",
    visited: false,
  },
  {
    id: 24,
    name: "Centro Cultural Coreano",
    category: "Cultura",
    neighborhood: "Paulista",
    price: "$",
    description: "Terça a sábado das 10h às 18h30. Domingo e feriados das 11h às 17h. Entrada gratuita.",
    tip: "Av. Paulista, 460 – Bela Vista",
    transport: "Metrô Brigadeiro",
    sourceUrl: "https://vt.tiktok.com/ZSmPsH5cp/",
    visited: false,
  },
  {
    id: 25,
    name: "Solar da Marquesa de Santos",
    category: "Cultura",
    neighborhood: "Centro Histórico",
    price: "$",
    description: "Casa onde Domitila de Castro (amante de Dom Pedro I) viveu. Cheio de história e escândalos do Brasil Império.",
    tip: "R. Roberto Simonsen, 136 – Centro Histórico",
    sourceUrl: "https://vt.tiktok.com/ZSmPnRv5h/",
    visited: false,
  },

  // ── MERCADOS ──────────────────────────────────────────────────────────────
  {
    id: 26,
    name: "Mercado de Pinheiros",
    category: "Mercado",
    neighborhood: "Pinheiros",
    price: "$$",
    description: "Mercado centenário que virou rolê completo: almoço, café, compras, vinho. Napoli Centrale, Kaji, Azur do Mar.",
    tip: "R. Pedro Cristi, 89 — Seg a Sáb, 8h–18h.",
    transport: "Metrô Faria Lima",
    sourceUrl: "https://www.instagram.com/reel/DUogwDwkfHB/",
    visited: false,
  },

  // ── NATUREZA / PASSEIO ────────────────────────────────────────────────────
  {
    id: 27,
    name: "Templo Zu Lai",
    category: "Natureza",
    neighborhood: "Cotia",
    price: "$",
    description: "Maior templo budista da América Latina. Parece Japão, mas é SP. Ter–sex 12h–17h, sáb–dom 9h30–17h.",
    tip: "Estr. Fernando Nobre, 1461 – Parque Rincão, Cotia",
    sourceUrl: "https://vt.tiktok.com/ZSmPnmeKC/",
    visited: false,
  },
  {
    id: 28,
    name: "Pavilhão Japonês",
    category: "Natureza",
    neighborhood: "Ibirapuera",
    price: "$",
    description: "Pavilhão japonês dentro do Ibirapuera. Jardim sereno, arquitetura tradicional.",
    tip: "Parque do Ibirapuera, Portão 10",
    sourceUrl: "https://vt.tiktok.com/ZSmPnmeKC/",
    visited: false,
  },
  {
    id: 29,
    name: "O Velhão – Antiquário",
    category: "Experiência",
    neighborhood: "Mairiporã",
    price: "$",
    description: "Antiquário em Mairiporã que te transporta para outra dimensão. Vila secreta, completamente fora do comum.",
    sourceUrl: "https://vt.tiktok.com/ZSmPnRv5h/",
    visited: false,
  },

  // ── EXPERIÊNCIAS ──────────────────────────────────────────────────────────
  {
    id: 30,
    name: "LEGO Store Oscar Freire",
    category: "Experiência",
    neighborhood: "Jardins",
    price: "$$",
    description: "Loja LEGO na Oscar Freire. Dá pra montar a miniatura um do outro. Ótima ideia de date diferente.",
    tip: "R. Oscar Freire, 1106 – Jardim Paulista",
    sourceUrl: "https://vt.tiktok.com/ZSmPsnyCq/",
    visited: false,
  },
  {
    id: 31,
    name: "Bodogami",
    category: "Experiência",
    neighborhood: "Liberdade",
    price: "$$",
    description: "Bar de jogos na Liberdade. Parede cheia de jogos, comida boa, Escape 60. Lugar perfeito pra ir com a galera.",
    tip: "Av. da Liberdade, 456",
    sourceUrl: "https://vt.tiktok.com/ZSmPsnyCq/",
    visited: false,
  },
  {
    id: 32,
    name: "Escape 60 + Jogos – Campo Belo",
    category: "Experiência",
    neighborhood: "Campo Belo",
    price: "$$",
    description: "Lugar pra jogar, rir e comer muito bem. Parede cheia de jogos + Escape 60. Aceita VR.",
    tip: "R. Vieira de Morais, 1438 – Campo Belo",
    sourceUrl: "https://vt.tiktok.com/ZSmafN4kQ/",
    visited: false,
  },
];

export const categories: Category[] = [
  "Restaurante",
  "Asiático",
  "Café",
  "Bar",
  "Rooftop",
  "Cultura",
  "Mercado",
  "Natureza",
  "Experiência",
];

export const categoryColors: Record<Category, string> = {
  Restaurante: "#2D5A27",
  Asiático: "#5C2D1A",
  Café: "#7B4F2E",
  Bar: "#1A3A5C",
  Rooftop: "#2D1A5C",
  Cultura: "#5C2D7B",
  Mercado: "#5C4A1A",
  Natureza: "#1A5C2D",
  Experiência: "#1A5C4A",
};
