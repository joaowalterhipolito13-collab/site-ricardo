const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Sticky header: solid/blurred once the page scrolls past the announcement bar
const siteHeader = document.querySelector('.site-header');

if (siteHeader) {
  const updateHeaderState = () => {
    siteHeader.classList.toggle('scrolled', window.scrollY > 40);
  };
  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });
}

// Scroll reveal: fade/slide elements in as they enter the viewport
const revealEls = document.querySelectorAll('.reveal');

if (revealEls.length && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in-view'));
}

// Service cards -> info modal
// Cada chave corresponde ao data-service do card. Estrutura de "sections":
//   { heading, type: 'check' | 'warning', items: [...] }  -> lista com ícone
//   { heading, type: 'text', text: '...' }                -> parágrafo simples
// Troque/complete conforme o Dr. Ricardo for enviando o conteúdo de cada área.
const CHECK_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M8 12.5l2.5 2.5L16 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const WARNING_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5L21 19.5H3L12 4.5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="12" y1="10" x2="12" y2="14.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="17" r="0.9" fill="currentColor"/></svg>';

const serviceContent = {
  'urologia': {
    title: 'Urologia',
    subtitle: '',
    intro: 'A urologia cuida do trato urinário — rins, ureteres, bexiga e uretra — e do sistema reprodutor masculino. É uma especialidade que exige seis anos de formação médica, incluindo três anos de residência em cirurgia geral e três em urologia.',
    sections: [
      {
        heading: 'Condições mais tratadas',
        type: 'check',
        items: [
          'Cálculos renais',
          'Infecções urinárias',
          'Alterações no fluxo urinário',
          'Doenças da próstata',
          'Câncer do trato urinário e genital masculino',
          'Disfunção erétil e infertilidade'
        ]
      },
      {
        heading: 'Áreas de atuação',
        type: 'check',
        items: [
          'Urologia geral',
          'Urologia oncológica',
          'Urologia pediátrica',
          'Urologia feminina',
          'Andrologia'
        ]
      }
    ],
    footerHook: 'Ficou com alguma dúvida sobre um sintoma específico? Vale uma conversa.'
  },
  'urologia-feminina': {
    title: 'Urologia Feminina',
    subtitle: '',
    intro: 'A urologia feminina trata o sistema urinário e genital da mulher, em todas as fases da vida.',
    sections: [
      {
        heading: 'Principais frentes de cuidado',
        type: 'check',
        items: [
          'Incontinência urinária',
          'Prolapso genital',
          'Infecções urinárias recorrentes',
          'Doenças renais, com destaque para cálculos renais',
          'Câncer do sistema urinário e genital feminino',
          'Disfunção vesical (urgência noturna, dor ao urinar)',
          'Dor pélvica'
        ]
      }
    ],
    footerHook: 'Se algum desses sintomas faz parte da sua rotina, esperar passar não é estratégia.'
  },
  'urologia-pediatrica': {
    title: 'Urologia Pediátrica',
    subtitle: '',
    intro: '',
    sections: [
      {
        heading: '1. Fimose',
        type: 'text',
        text: 'A dificuldade de retrair o prepúcio é comum até os 3 anos — quando 90% dos meninos já conseguem fazer isso naturalmente. Quando não resolve com cremes, a cirurgia costuma ser indicada.'
      },
      {
        heading: '2. Enurese noturna',
        type: 'text',
        text: 'Fazer xixi na cama ainda é bem comum na infância — cerca de 7% dos meninos e 3% das meninas aos 7 anos. A maioria resolve sozinha com o tempo; quando persiste, existe tratamento.'
      },
      {
        heading: '3. Criptorquidismo',
        type: 'text',
        text: 'Quando o testículo não desce até a bolsa escrotal, a correção cirúrgica é recomendada até 1 ano e meio de idade — quanto antes, menor o risco de complicações futuras.'
      },
      {
        heading: '4. Hidrocele',
        type: 'text',
        text: 'Acúmulo de líquido no escroto, presente em cerca de 6% dos meninos. Na maioria das vezes, regride sozinha até o primeiro ano de vida.'
      },
      {
        heading: '5. Infecção urinária infantil',
        type: 'text',
        text: 'Febre sem causa aparente em criança merece investigação — pode ser sinal de infecção urinária, a segunda infecção bacteriana mais comum da infância.'
      }
    ],
    footerHook: 'Cada fase da infância tem seus próprios sinais de alerta. Na dúvida, vale uma conversa.'
  },
  'cirurgia-robotica': {
    title: 'Cirurgia Robótica',
    subtitle: '',
    intro: 'Uma técnica minimamente invasiva que une precisão cirúrgica a uma recuperação mais tranquila.',
    sections: [
      {
        heading: 'Vantagens',
        type: 'check',
        items: [
          'Incisões pequenas (1 a 2 cm)',
          'Menor sangramento e menos dor',
          'Recuperação mais rápida',
          'Visão em alta definição durante o procedimento'
        ]
      },
      {
        heading: 'Procedimentos mais realizados',
        type: 'check',
        items: [
          'Prostatectomia radical ou parcial',
          'Nefrectomia parcial ou total',
          'Reimplante ureteral e pieloplastia',
          'Cistectomia',
          'Reconstrução uretral',
          'Tratamento cirúrgico de câncer de próstata, rim e bexiga'
        ]
      }
    ],
    footerHook: 'A tecnologia muda a experiência da cirurgia — mas a decisão do melhor caminho é sempre conversada com você.'
  },
  'calculo-renal': {
    title: 'Cálculo Renal',
    subtitle: '(Nefrolitíase)',
    intro: 'Formação de cálculos (pedras) nos rins, que podem causar dor intensa, sangramento, infecção e obstrução do fluxo urinário.',
    sections: [
      {
        heading: 'Causas mais comuns',
        type: 'check',
        items: [
          'Desidratação',
          'Dieta rica em sódio, proteína e açúcar',
          'Alterações metabólicas',
          'Fatores genéticos e anatômicos'
        ]
      },
      {
        heading: 'Sinais de alerta',
        type: 'warning',
        items: [
          'Dor lombar ou abdominal intensa, que pode irradiar para a virilha',
          'Sangue na urina',
          'Náusea, febre, dificuldade para urinar'
        ]
      },
      {
        heading: 'Tratamento',
        type: 'text',
        text: 'Vai desde hidratação e medicação até cirurgia, dependendo do tamanho do cálculo e do grau de obstrução.'
      }
    ],
    footerHook: 'Dor que aparece do nada pode ter explicação — e solução.'
  },
  'disfuncao-eretil': {
    title: 'Disfunção Erétil',
    subtitle: '',
    intro: 'Afeta cerca de 40% dos homens acima dos 40 anos — e tem tratamento.',
    sections: [
      {
        heading: 'Causas possíveis',
        type: 'check',
        items: [
          'Doenças cardiovasculares, hipertensão, diabetes',
          'Alterações hormonais',
          'Fatores emocionais: ansiedade, estresse',
          'Efeito colateral de medicamentos',
          'Alterações na próstata'
        ]
      },
      {
        heading: 'Quando vale procurar um urologista',
        type: 'warning',
        items: [
          'Dificuldade recorrente em obter ou manter ereção',
          'Dor durante a ereção',
          'Queda no interesse sexual sem explicação aparente'
        ]
      }
    ],
    footerHook: 'Falar sobre isso não precisa ser constrangedor — e o diagnóstico precoce faz diferença.'
  },
  'infeccao-urinaria': {
    title: 'Infecção Urinária',
    subtitle: '',
    intro: 'Mais comum em mulheres, mas presente em qualquer idade e gênero.',
    sections: [
      {
        heading: 'Sintomas',
        type: 'warning',
        items: [
          'Ardência ao urinar',
          'Vontade frequente de urinar',
          'Sangue na urina',
          'Febre e mal-estar'
        ]
      },
      {
        heading: 'Prevenção',
        type: 'check',
        items: [
          'Boa hidratação (ao menos 2 litros de água por dia)',
          'Evitar segurar a urina por muito tempo',
          'Higiene adequada',
          'Exames de rotina, especialmente para quem tem diabetes ou histórico recorrente'
        ]
      }
    ],
    footerHook: 'Sintoma recorrente merece investigação, não repetição de antibiótico por conta própria.'
  },
  'estetica-intima': {
    title: 'Estética Íntima Masculina',
    subtitle: '',
    intro: 'Cuidar da aparência também é cuidar da autoestima — com técnica e segurança.',
    sections: [
      {
        heading: 'Preenchimento peniano com ácido hialurônico',
        type: 'text',
        text: 'Procedimento ambulatorial, com duração entre 30 minutos e 1 hora, indicado para aumento de volume, correção de assimetrias e melhora da autoestima.'
      },
      {
        heading: 'Vantagens',
        type: 'check',
        items: [
          'Recuperação rápida',
          'Resultado perceptível já nos primeiros dias',
          'Procedimento reversível'
        ]
      }
    ],
    footerHook: 'Estética íntima também é assunto de saúde — e merece avaliação médica especializada.'
  }
};

const serviceCards = document.querySelectorAll('.service-card');
const modalOverlay = document.getElementById('serviceModal');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalBody = document.getElementById('modalBody');
const modalFooter = document.getElementById('modalFooter');
const modalHook = document.getElementById('modalHook');
const modalClose = document.getElementById('modalClose');

let lastFocusedCard = null;

function renderModalSection(section) {
  let inner = `<h4 class="modal-section-heading">${section.heading}</h4>`;
  if (section.type === 'text') {
    inner += `<p class="modal-section-text">${section.text}</p>`;
  } else {
    const icon = section.type === 'warning' ? WARNING_ICON : CHECK_ICON;
    const items = section.items
      .map((item) => `<li><span class="list-icon">${icon}</span><span>${item}</span></li>`)
      .join('');
    inner += `<ul class="modal-list">${items}</ul>`;
  }
  return `<div class="modal-section">${inner}</div>`;
}

function openServiceModal(card) {
  const key = card.dataset.service;
  const data = serviceContent[key];
  if (!data || !modalOverlay) return;

  const iconMarkup = card.querySelector('.service-icon');
  modalIcon.innerHTML = iconMarkup ? iconMarkup.outerHTML : '';
  modalTitle.textContent = data.title;

  if (data.subtitle) {
    modalSubtitle.textContent = data.subtitle;
    modalSubtitle.style.display = '';
  } else {
    modalSubtitle.style.display = 'none';
  }

  let bodyHtml = data.intro ? `<p class="modal-intro">${data.intro}</p>` : '';
  bodyHtml += (data.sections || []).map(renderModalSection).join('');
  modalBody.innerHTML = bodyHtml;

  if (data.footerHook) {
    modalHook.textContent = data.footerHook;
    modalHook.style.display = '';
  } else {
    modalHook.style.display = 'none';
  }

  lastFocusedCard = card;
  modalOverlay.classList.add('open');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeServiceModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('open');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocusedCard) lastFocusedCard.focus();
}

serviceCards.forEach((card) => {
  card.addEventListener('click', () => openServiceModal(card));
});

if (modalClose) modalClose.addEventListener('click', closeServiceModal);

if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeServiceModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
    closeServiceModal();
  }
});
