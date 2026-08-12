// One-off generator: reads the structured post data below and writes
// blog/index.html (listing) + blog/<slug>.html (one page per article).
// Source content: blog/2026-08_zerati_blog-seo.md
// Run with: node .claude/build-blog.js

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'blog');

const WHATSAPP = 'https://wa.me/551740099191?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.';

const LINKS = {
  'Urologia Feminina': 'urologia-feminina-quando-procurar.html',
  'cirurgia robótica': 'cirurgia-robotica-urologia-o-que-e.html',
  'Urologia Pediátrica': 'fimose-infantil-quando-tratar.html',
  'fimose': 'fimose-infantil-quando-tratar.html',
  'Preenchimento Peniano é Seguro? Mitos e Riscos': 'preenchimento-peniano-e-seguro-mitos-riscos.html',
};

const PILLAR_ICON = {
  'Urologia': 'icon-urologia.png',
  'Urologia Feminina': 'icon-urologia-feminina.png',
  'Urologia Pediátrica': 'icon-urologia-pediatrica.png',
  'Cirurgia Robótica': 'icon-cirurgia-robotica.png',
  'Cálculo Renal': 'icon-calculo-renal.png',
  'Disfunção Erétil': 'icon-disfuncao-eretil.png',
  'Infecção Urinária': 'icon-infeccao-urinaria.png',
  'Estética Íntima Masculina': 'icon-estetica-intima.png',
  'Saúde Geral': 'icon-humanizado.png',
};

/* ------------------------------------------------------------------ */
/* Post data — transcribed from blog/2026-08_zerati_blog-seo.md        */
/* ------------------------------------------------------------------ */

const posts = [
  {
    num: '1.1', pillar: 'Urologia',
    title: 'Quando Procurar um Urologista: Sintomas Que Não Devem Ser Ignorados',
    seoTitle: 'Quando Procurar um Urologista? Sintomas de Alerta',
    metaDescription: 'Dor ao urinar, sangue na urina, dor lombar? Veja os sintomas que indicam a hora de procurar um urologista e agende sua avaliação.',
    slug: 'quando-procurar-um-urologista-sintomas',
    keyword: 'quando procurar um urologista',
    body: `Muita gente só pensa em procurar um urologista quando o desconforto já virou rotina — ou pior, deixa passar sinais por vergonha ou por achar que "vai passar sozinho". Boa parte das condições urológicas, quando identificadas cedo, tem acompanhamento mais simples e resultado melhor. Veja os sinais que merecem atenção e quando vale marcar uma consulta.

#### O que faz um urologista

O urologista cuida do trato urinário — rins, ureteres, bexiga e uretra — e do sistema reprodutor masculino. É uma especialidade que exige seis anos de formação médica após a graduação, incluindo residência em cirurgia geral e em urologia.

#### Sintomas que merecem investigação

- Dor ou ardência ao urinar
- Sangue na urina
- Dor lombar ou abdominal que vai e volta
- Jato urinário fraco, interrompido ou gotejante
- Vontade frequente ou urgente de urinar
- Dificuldade para conter a urina
- Nódulos ou alterações nos testículos
- Dificuldade recorrente para obter ou manter ereção

#### Não é "coisa de homem"

O urologista também atua na [Urologia Feminina], tratando incontinência, infecções urinárias recorrentes e dor pélvica, e na urologia pediátrica, cuidando de condições como fimose e enurese noturna. Na prática, é uma especialidade que acompanha a família inteira, em diferentes fases da vida — não só o público masculino adulto, como o senso comum costuma sugerir.

#### Por que adiar a consulta pode custar caro

O diagnóstico precoce faz diferença: muitas condições urológicas, quando tratadas cedo, respondem melhor e exigem intervenções mais simples. Um cálculo renal pequeno identificado a tempo, por exemplo, pode ser tratado com hidratação e acompanhamento; o mesmo cálculo, ignorado por meses, pode crescer e exigir cirurgia. Esperar passar não é estratégia — sintomas urológicos raramente desaparecem sozinhos quando têm uma causa estrutural por trás.

#### Sinais urgentes x sinais que podem esperar a próxima consulta

Alguns sintomas pedem atenção imediata: febre alta associada a dor lombar, sangue vivo na urina, dor insuportável ou dificuldade completa para urinar são sinais de que algo precisa ser avaliado sem demora. Já um desconforto leve e recorrente — como uma leve ardência esporádica ou uma vontade de urinar um pouco mais frequente que o normal — sem outros sinais de alerta, ainda assim merece ser levado a uma consulta agendada. Não precisa ser hoje, mas não deve ser esquecido: sintomas leves que se repetem por semanas costumam ter uma causa identificável.

#### Como é feita a avaliação inicial

Na primeira consulta, o urologista costuma levantar o histórico completo dos sintomas — quando começaram, com que frequência aparecem, se pioram em algum contexto específico — antes de decidir se são necessários exames complementares, como exame de urina, ultrassom ou exames de sangue. Essa conversa inicial, por si só, já direciona boa parte da investigação.

#### Os exames mais pedidos e o que eles mostram

O exame de urina (EAS) é geralmente o ponto de partida, útil para identificar sinais de infecção, sangue ou outras alterações. O ultrassom das vias urinárias avalia rins, bexiga e, em homens, a próstata, sem uso de radiação. Já o PSA, um exame de sangue, entra na avaliação da próstata a partir da faixa etária em que esse rastreio passa a fazer sentido — sempre interpretado dentro do contexto clínico do paciente, não isoladamente. Nenhum desses exames substitui a consulta: eles complementam a avaliação clínica, não a definem sozinhos.

#### Urologia e andrologia: uma relação próxima

Dentro da urologia, a andrologia é a área voltada especificamente à saúde reprodutiva e sexual masculina — disfunção erétil, infertilidade e alterações hormonais entram nesse recorte. Um urologista com atuação também em andrologia consegue investigar de forma mais integrada sintomas que, à primeira vista, pareceriam questões separadas.`,
    faq: `**Preciso de encaminhamento para consultar um urologista?**
Não necessariamente — você pode agendar diretamente. Se seu médico de família já identificou algo específico, um encaminhamento ajuda a direcionar a avaliação.

**Urologista atende mulheres?**
Sim. A [Urologia Feminina] trata incontinência, infecções recorrentes, dor pélvica e outras condições do sistema urinário e genital feminino.

**Com que frequência devo fazer um check-up urológico?**
Varia conforme idade e histórico. Em geral, recomenda-se avaliação anual a partir dos 40–50 anos, ou antes se houver sintomas.

**Sangue na urina é sempre grave?**
Nem sempre, mas sempre merece investigação — pode ter causas simples ou apontar para algo que precisa de tratamento específico.

**Dor ao urinar sempre indica infecção?**
Não necessariamente — pode ter outras causas, como irritação local ou cálculo renal. Por isso a avaliação individual é o que confirma a causa exata.

**O que devo fazer se meus sintomas forem leves, mas persistentes?**
Vale agendar uma consulta mesmo assim. Sintomas leves que não desaparecem em poucos dias merecem investigação, mesmo sem urgência.

**Preciso fazer PSA mesmo sem sintomas?**
A partir de determinada faixa etária, o PSA costuma ser incluído no check-up de rotina como rastreio preventivo — a indicação exata deve ser conversada com o médico, considerando idade e histórico familiar.

**Um exame de urina alterado significa que tenho uma doença grave?**
Não necessariamente — alterações leves podem ter causas simples. O que importa é interpretar o resultado dentro do quadro clínico completo, por isso o exame deve ser sempre avaliado por um médico.`,
  },
  {
    num: '1.2', pillar: 'Urologia',
    title: 'Urologista em São José do Rio Preto: Como Escolher o Profissional Certo',
    seoTitle: 'Urologista em São José do Rio Preto | Como Escolher',
    metaDescription: 'Procurando um urologista em São José do Rio Preto? Veja os critérios para escolher o profissional certo e agende sua consulta.',
    slug: 'urologista-sao-jose-do-rio-preto-como-escolher',
    keyword: 'urologista em São José do Rio Preto',
    body: `Escolher um urologista à distância, só pelo que se vê on-line, não é simples. Como saber se o profissional tem a formação, a tecnologia e o tipo de atendimento que você precisa? Reunimos os critérios que fazem diferença antes de marcar a primeira consulta em São José do Rio Preto.

#### Formação e título de especialista

Verifique se o profissional é titulado pela Sociedade Brasileira de Urologia (TiSBU) — título que confirma formação específica e reconhecida na área. O Dr. Ricardo Zerati é Urologista Titular pela SBU (CRM 163.810 | RQE 91.772), com residência em cirurgia geral e em urologia.

#### Áreas de atuação

Um urologista que atua em urologia geral, feminina, pediátrica e [cirurgia robótica] consegue atender a família inteira, com continuidade de cuidado — em vez de você precisar procurar profissionais diferentes para cada fase da vida.

#### Tecnologia disponível

A [cirurgia robótica] é hoje um diferencial técnico relevante em casos que exigem cirurgia: incisões menores, mais precisão e recuperação geralmente mais rápida. Vale perguntar se o profissional tem certificação para operar com essa tecnologia.

#### Atendimento: além da técnica

Tecnologia sem escuta não resolve tudo. Um consultório com atendimento humanizado — tempo para tirar dúvidas, sem pressa e sem julgamento — costuma fazer diferença na experiência do paciente, especialmente em temas sensíveis como saúde íntima. Isso vale tanto para uma consulta de rotina quanto para o acompanhamento de uma condição mais delicada, como disfunção erétil ou incontinência.

#### Perguntas para fazer antes da primeira consulta

- O profissional atua na condição específica que você precisa tratar?
- Ele oferece cirurgia robótica, se for o seu caso?
- Como funciona o agendamento e o retorno de dúvidas?
- O consultório fica em uma localização acessível para você?
- Existe atendimento para toda a família, incluindo crianças?

#### Por que a proximidade geográfica também importa

Morar em São José do Rio Preto ou região facilita não só a primeira consulta, mas todo o acompanhamento — retornos, exames de rotina e, se for necessário, o pós-operatório de uma cirurgia. Um urologista local reduz deslocamentos justamente nos momentos em que o paciente mais precisa de praticidade.

#### O que observar na conversa inicial pelo WhatsApp

Antes mesmo da consulta, a forma como o contato inicial é conduzido já diz bastante sobre o atendimento: clareza nas informações sobre agendamento, disposição para esclarecer dúvidas simples e tempo de resposta são sinais de organização que costumam se refletir também na consulta presencial.

#### Continuidade de cuidado: por que isso importa a longo prazo

Escolher um urologista pensando não só na queixa atual, mas em um acompanhamento de longo prazo, evita a necessidade de repetir seu histórico médico do zero a cada nova consulta com um profissional diferente. Isso é especialmente relevante em condições crônicas, como acompanhamento de próstata ou disfunção erétil, que se beneficiam de continuidade.`,
    faq: `**O Dr. Ricardo Zerati atende urologia pediátrica também?**
Sim, atua em urologia geral, feminina, pediátrica e cirurgia robótica.

**Onde fica o consultório?**
R. Voluntários de São Paulo, 3826, Vila Redentora, São José do Rio Preto — SP.

**Como faço para agendar uma consulta?**
Pelo WhatsApp (17) 4009-9191 ou pelo site www.zeratiurologia.com.br.

**Quais os horários de atendimento?**
Segunda a sexta, das 8h às 18h30.

**Atende pacientes de cidades vizinhas a São José do Rio Preto?**
Sim, o consultório recebe pacientes da cidade e da região — entre em contato para confirmar a melhor forma de organizar sua vinda.

**Vale a pena escolher um urologista com certificação em cirurgia robótica mesmo se eu não for operar agora?**
Sim — ter esse recurso disponível, caso seja necessário no futuro, evita ter que procurar outro profissional ou clínica caso a condição evolua para indicação cirúrgica.

**Como faço para transferir meus exames de outro médico para o Dr. Ricardo Zerati?**
Basta levar os exames anteriores (impressos ou digitais) para a primeira consulta — eles ajudam a construir um histórico mais completo desde o início.

**O consultório atende em horário de almoço ou fora do horário comercial?**
O atendimento segue de segunda a sexta, das 8h às 18h30 — para confirmar disponibilidade em horários específicos, o ideal é consultar diretamente pelo WhatsApp.`,
  },
  {
    num: '2.1', pillar: 'Urologia Feminina',
    title: 'Urologia Feminina: Quando a Mulher Deve Procurar um Urologista',
    seoTitle: 'Urologia Feminina: Quando Procurar um Urologista',
    metaDescription: 'Incontinência, infecção urinária recorrente, dor pélvica? Entenda quando a mulher deve procurar um urologista.',
    slug: 'urologia-feminina-quando-procurar',
    keyword: 'urologia feminina',
    body: `Muita mulher associa qualquer sintoma urinário ao ginecologista — e nem sempre sabe que existe uma especialidade dedicada especificamente ao sistema urinário e genital feminino: a urologia feminina. Entenda quando vale procurar esse profissional.

#### Por que mulheres também precisam de urologista

A urologia feminina trata o sistema urinário e genital da mulher em todas as fases da vida — da juventude à menopausa —, com foco em condições que vão além do que a ginecologia costuma abordar.

#### Principais condições tratadas

- Incontinência urinária
- Prolapso genital
- Infecções urinárias recorrentes
- Doenças renais, com destaque para cálculos renais
- Câncer do sistema urinário e genital feminino
- Disfunção vesical (urgência noturna, dor ao urinar)
- Dor pélvica

#### Urologista ou ginecologista: qual procurar?

Não é uma coisa ou outra — os dois profissionais podem, inclusive, trabalhar em conjunto. Em geral, o ginecologista é a porta de entrada para saúde reprodutiva; o urologista entra quando o sintoma está mais relacionado à bexiga, aos rins ou ao trato urinário especificamente, como perda de urina, infecções repetidas ou dor pélvica persistente. Em muitos casos, é o próprio ginecologista quem encaminha a paciente para a avaliação urológica complementar.

#### Sinais de que é hora de procurar

Perda de urina ao tossir ou rir, infecção urinária que volta com frequência, dor pélvica sem explicação aparente, ou sensação de peso/pressão na região genital são sinais que merecem avaliação urológica. Alterações no padrão urinário depois da menopausa, como maior urgência ou ardência sem sinal claro de infecção, também entram nessa lista.

#### O que muda em cada fase da vida

Na juventude, as queixas mais comuns costumam envolver infecções urinárias pontuais. Depois da gravidez, ganha destaque a avaliação do assoalho pélvico e sinais de incontinência. Na menopausa, as alterações hormonais podem trazer ressecamento, maior frequência urinária e infecções mais recorrentes — cada fase pede um olhar específico, e é isso que a urologia feminina oferece.

#### Exames que costumam fazer parte da avaliação

Dependendo da queixa, a avaliação pode incluir exame de urina, ultrassom das vias urinárias, e, em casos específicos, estudo urodinâmico — um exame que avalia o funcionamento da bexiga em situações de incontinência ou urgência urinária persistente. Nem toda consulta exige todos esses exames; o médico define o que é necessário conforme os sintomas relatados.

#### Dor pélvica: um sintoma que merece atenção especial

A dor pélvica crônica é um dos sintomas mais subestimados na saúde feminina — muitas vezes atribuída "ao corpo da mulher" sem investigação mais profunda. Quando persiste por semanas, sem explicação clara, vale avaliação urológica, já que pode ter origem na bexiga ou no trato urinário, e não apenas em questões ginecológicas.`,
    faq: `**Preciso estar com sintomas graves para procurar um urologista?**
Não. Sintomas leves e recorrentes já justificam uma avaliação — não é preciso esperar piorar.

**A consulta com urologista é parecida com a ginecológica?**
Não necessariamente. A avaliação é focada no sistema urinário e pode incluir exame físico, exames de urina e de imagem, conforme o caso.

**Infecção urinária recorrente é sempre da mesma causa?**
Nem sempre — por isso vale investigar a fundo em vez de repetir o mesmo tratamento a cada episódio.

**Existe idade certa para a primeira avaliação urológica feminina?**
Não existe uma idade fixa — o que define é a presença de sintomas ou fatores de risco, como infecções recorrentes.

**A urologia feminina trata apenas mulheres adultas?**
Não — mulheres de qualquer idade adulta podem precisar de avaliação urológica, e as queixas mudam conforme a fase da vida.

**É normal sentir desconforto para falar sobre sintomas íntimos na consulta?**
É comum, mas a consulta é conduzida de forma acolhedora, sem pressa, justamente para que a paciente se sinta à vontade para descrever o que sente.

**Dor pélvica pode ser só coisa emocional, sem causa física?**
Raramente é só isso — mesmo quando há componente emocional associado, vale investigar possíveis causas físicas antes de atribuir o sintoma unicamente ao estresse.

**Preciso de pedido médico do ginecologista para consultar um urologista?**
Não é obrigatório — você pode procurar diretamente um urologista, embora o encaminhamento do ginecologista possa ajudar a direcionar a investigação em alguns casos.`,
  },
  {
    num: '2.2', pillar: 'Urologia Feminina',
    title: 'Incontinência Urinária Feminina: Causas, Tratamentos e Quando Buscar Ajuda',
    seoTitle: 'Incontinência Urinária Feminina: Causas e Tratamento',
    metaDescription: 'Perda de urina ao tossir, rir ou se exercitar? Veja as causas da incontinência urinária feminina e as opções de tratamento.',
    slug: 'incontinencia-urinaria-feminina-tratamento',
    keyword: 'incontinência urinária feminina',
    body: `"Isso é normal depois que a gente tem filho" é uma das frases mais repetidas — e mais equivocadas — sobre incontinência urinária. Existe explicação médica para o escape de urina, e também existe tratamento.

#### O que é incontinência urinária

É a perda involuntária de urina, que pode acontecer ao tossir, espirrar, rir, praticar exercício físico, ou de forma mais súbita e urgente.

#### Tipos mais comuns

A incontinência de esforço acontece com aumento da pressão abdominal (tosse, exercício); a de urgência vem com uma vontade repentina e difícil de conter; a mista combina as duas.

#### Causas

Gravidez e parto podem enfraquecer o assoalho pélvico; a menopausa, com a queda de estrogênio, também altera os tecidos da região; o envelhecimento natural do corpo é outro fator.

#### Tratamentos disponíveis

Fisioterapia pélvica e exercícios específicos costumam ser o primeiro passo, com bons resultados em boa parte dos casos. O acompanhamento urológico ajuda a identificar a causa exata e, quando necessário, avaliar outras abordagens.

#### Mitos comuns sobre incontinência urinária

*Mito: "é normal e não tem jeito."* Tem explicação e, na maioria dos casos, tratamento.
*Mito: "só acontece com idosas."* Pode acontecer em qualquer fase adulta, especialmente após a gravidez.
*Mito: "só cirurgia resolve."* A cirurgia é uma entre várias opções, reservada a casos específicos após avaliação.
*Mito: "é preciso usar absorvente para sempre."* Para muitas mulheres, o tratamento reduz significativamente ou resolve os episódios, tornando o uso constante desnecessário.

#### O impacto no dia a dia que muita gente não comenta

Além do desconforto físico, a incontinência urinária costuma afetar a rotina social — evitar exercícios, rir sem cuidado ou viajar por medo de um episódio de escape é mais comum do que se imagina. Reconhecer esse impacto ajuda a entender por que vale a pena buscar tratamento, mesmo quando os episódios parecem "pequenos".

#### Como funciona a fisioterapia pélvica na prática

A fisioterapia pélvica trabalha o fortalecimento da musculatura que sustenta a bexiga e outros órgãos pélvicos, por meio de exercícios específicos — muitas vezes com o apoio de biofeedback, um recurso que ajuda a paciente a identificar e ativar corretamente esses músculos. O acompanhamento costuma ser semanal, com evolução gradual ao longo de algumas semanas ou meses, conforme o caso.

#### Quando a avaliação cirúrgica entra em cena

Em casos que não respondem suficientemente à fisioterapia e às mudanças de hábito, ou quando a incontinência tem uma causa anatômica específica, a avaliação de opções cirúrgicas pode ser considerada — sempre como parte de uma decisão conjunta entre médico e paciente, depois de esgotadas ou combinadas as abordagens menos invasivas.`,
    faq: `**Incontinência urinária tem cura?**
Depende da causa — muitos casos respondem bem a fisioterapia pélvica e mudanças de hábito; outros exigem avaliação mais aprofundada.

**Fisioterapia pélvica funciona mesmo?**
Para boa parte das mulheres, sim, especialmente quando iniciada cedo. O resultado varia conforme o caso.

**É normal ter vergonha de falar sobre isso?**
É comum, mas não precisa ser um impedimento — é um sintoma como outro qualquer, e o consultório é um espaço sem julgamento.

**Quando devo procurar ajuda?**
Assim que perceber episódios recorrentes de perda de urina, mesmo que pequenos — não é preciso esperar piorar.

**A incontinência urinária piora com o tempo se não for tratada?**
Em muitos casos, sim, especialmente se o fator de fundo (como enfraquecimento do assoalho pélvico) continuar sem acompanhamento.

**Homens também podem ter incontinência urinária?**
Sim, embora seja mais comum em mulheres — em homens, costuma estar mais associada a questões prostáticas ou pós-cirúrgicas.

**Quanto tempo de fisioterapia pélvica costuma ser necessário para notar melhora?**
Varia de pessoa para pessoa, mas muitas mulheres já percebem alguma melhora em algumas semanas de acompanhamento consistente.

**Atividade física precisa ser interrompida durante o tratamento?**
Não necessariamente — em muitos casos, a atividade física pode continuar, com ajustes orientados pelo profissional que acompanha o tratamento.`,
  },
  {
    num: '3.1', pillar: 'Urologia Pediátrica',
    title: 'Fimose Infantil: Quando é Normal e Quando Tratar',
    seoTitle: 'Fimose Infantil: Quando é Normal e Quando Tratar',
    metaDescription: 'Fimose em crianças é comum até os 3 anos. Entenda quando é normal, quando tratar com pomada e quando a cirurgia é indicada.',
    slug: 'fimose-infantil-quando-tratar',
    keyword: 'fimose infantil',
    body: `Poucos temas geram tanta dúvida entre pais quanto a fimose. É normal? Precisa de cirurgia? Até quando esperar? Este artigo reúne as respostas mais comuns dessa conversa no consultório.

#### O que é fimose

É a dificuldade de retrair completamente o prepúcio, expondo a glande. Em bebês e crianças pequenas, isso é esperado — o prepúcio ainda não se soltou totalmente.

#### Até que idade é considerada normal

Cerca de 90% dos meninos já conseguem retrair o prepúcio naturalmente até os 3 anos de idade, sem qualquer intervenção.

#### Quando tratar com pomada

Em muitos casos, o uso de pomadas específicas, orientado por um médico, ajuda a soltar o prepúcio de forma gradual, evitando a necessidade de cirurgia.

#### Quando a cirurgia é indicada

Quando a fimose não resolve com o tempo ou com o tratamento com pomada, ou quando causa infecções recorrentes, dor ou dificuldade para urinar, a cirurgia costuma ser indicada.

#### Sinais de alerta que merecem avaliação antes do prazo esperado

Inchaço, vermelhidão, dor ao urinar, jato urinário fraco ou infecções repetidas na região são sinais que justificam uma avaliação mesmo antes dos 3 anos.

#### Por que julho (férias escolares) costuma ser um período procurado

Muitas famílias aproveitam o período de férias para realizar a cirurgia de fimose, quando indicada — a criança tem tempo de recuperação sem a pressão de faltar à escola, o que costuma tornar o processo mais tranquilo tanto para a criança quanto para os pais.

#### Diferença entre fimose fisiológica e patológica

A fimose fisiológica é a esperada nos primeiros anos de vida, sem sinais de alerta, e tende a resolver com o desenvolvimento natural da criança. Já a fimose patológica está associada a um anel de tecido mais rígido (geralmente por inflamações repetidas), que não cede com o tempo nem com pomada — essa distinção, feita pelo médico no exame físico, é o que orienta a conduta mais adequada.

#### Como é a técnica cirúrgica quando indicada

Quando a cirurgia é necessária, o procedimento mais comum é a postectomia (remoção total ou parcial do prepúcio), realizada sob anestesia, com duração de cerca de 30 a 45 minutos. Na maioria dos casos, a criança recebe alta no mesmo dia, com orientações específicas de cuidados locais para os dias seguintes.`,
    faq: `**Posso usar pomada sem indicação médica?**
Não é recomendado — o uso deve ser orientado por um profissional, que avalia o grau da fimose antes de indicar o tratamento.

**A cirurgia de fimose dói muito?**
É um procedimento com recuperação geralmente tranquila, principalmente quando realizado no período de férias escolares, com tempo para o repouso adequado.

**Fimose precisa ser tratada em bebês?**
Na maioria dos casos, não — é esperado que resolva naturalmente até os 3 anos, salvo sinais de alerta.

**Fimose atrapalha a higiene da criança?**
Pode dificultar um pouco a limpeza local, mas isso, por si só, não é motivo para intervenção precoce sem outros sinais.

**Forçar a retração do prepúcio em casa ajuda a resolver mais rápido?**
Não é recomendado — forçar pode causar pequenas lesões e piorar o quadro. O tratamento deve seguir orientação médica.

**Depois da cirurgia, existe algum cuidado especial?**
Sim, os cuidados pós-operatórios (higiene local, curativos, retorno de acompanhamento) são orientados individualmente pelo médico conforme a técnica utilizada.

**A criança sente muita dor depois da cirurgia?**
O desconforto costuma ser controlado com medicação analgésica prescrita pelo médico, e a maioria das crianças retoma atividades leves em poucos dias.

**Circuncisão e cirurgia de fimose são a mesma coisa?**
São procedimentos relacionados, mas a circuncisão pode ser feita por diferentes motivos (culturais, religiosos ou médicos), enquanto a cirurgia de fimose tem indicação médica específica.`,
  },
  {
    num: '3.2', pillar: 'Urologia Pediátrica',
    title: 'Xixi na Cama (Enurese Noturna): Até Quando é Normal?',
    seoTitle: 'Enurese Noturna: Xixi na Cama, Até Quando é Normal?',
    metaDescription: 'Seu filho ainda faz xixi na cama? Veja até que idade é considerado normal e quando vale procurar um urologista pediátrico.',
    slug: 'enurese-noturna-xixi-na-cama-crianca',
    keyword: 'enurese noturna',
    body: `Poucas coisas deixam os pais tão preocupados quanto o filho que continua fazendo xixi na cama depois dos primeiros anos escolares. A boa notícia: na maioria das vezes, é uma fase — e tem explicação.

#### O que é enurese noturna

É a perda involuntária de urina durante o sono, em crianças que já deveriam ter controle da bexiga para a idade.

#### É mais comum do que parece

Cerca de 7% dos meninos e 3% das meninas ainda apresentam enurese noturna aos 7 anos — um número bem maior do que os pais costumam imaginar.

#### Causas possíveis

Na maioria dos casos, está relacionada ao ritmo de desenvolvimento da bexiga e do sono profundo, com componente genético relevante (é comum haver histórico familiar). Em uma parcela menor dos casos, pode estar associada a outras causas que merecem investigação.

#### Quando procurar um urologista pediátrico

Quando a enurese persiste além dos 7 anos, quando volta a acontecer depois de um período seco, ou quando vem acompanhada de outros sintomas urinários durante o dia.

#### O que não fazer

Evite culpar ou punir a criança — isso não ajuda e pode piorar o quadro emocional. Também vale cuidado com restrições exageradas de líquido à noite sem orientação médica, e evite comparar o ritmo da criança com o de irmãos ou colegas.

#### Como apoiar a criança nesse período

Manter uma rotina tranquila antes de dormir, evitar bebidas com cafeína à noite e envolver a criança de forma leve no processo (sem transformar em cobrança) costuma ajudar. O acompanhamento médico entra quando a família quer entender se existe algo além do desenvolvimento natural — e para orientar, com segurança, os próximos passos.

#### Como funciona a avaliação médica

O médico costuma perguntar sobre a frequência dos episódios, se a criança também tem sintomas durante o dia (como urgência ou perda de urina), histórico familiar e hábitos de sono. Em geral, a investigação começa de forma simples, com exame de urina, e só avança para exames mais específicos se houver sinais que fujam do padrão esperado para a idade.

#### O que os pais podem observar em casa

Vale anotar a frequência dos episódios por algumas semanas, se há relação com determinados dias (como noites de maior cansaço) e se a criança também apresenta sintomas diurnos. Essas informações ajudam bastante na consulta e tornam a avaliação mais objetiva.`,
    faq: `**Enurese noturna é psicológica?**
Raramente é a causa principal — na maioria dos casos, tem relação com o desenvolvimento da bexiga e do sono, não com questões emocionais.

**Existe tratamento para enurese?**
Sim, quando ela persiste além do esperado. As abordagens variam conforme a causa identificada.

**Até que idade devo esperar sem me preocupar?**
Em geral, até os 7 anos ainda é considerado dentro da normalidade — antes disso, raramente é motivo de investigação.

**Enurese noturna pode voltar depois de meses sem acontecer?**
Sim, e quando isso ocorre vale conversar com um urologista pediátrico para entender o contexto.

**Existe relação entre enurese e histórico familiar?**
Sim, é comum que pais que também tiveram enurese na infância tenham filhos com o mesmo padrão — o componente genético é relevante.

**Fraldas noturnas atrapalham o tratamento?**
Não impedem o tratamento, mas o uso prolongado deve ser conversado com o médico, para não mascarar sinais importantes de evolução.

**Existe algum tratamento medicamentoso para enurese?**
Sim, em casos que persistem e exigem intervenção, existem opções que devem ser avaliadas e prescritas por um médico, conforme a causa identificada.

**Alarmes de enurese funcionam?**
Podem ajudar em alguns casos, treinando a criança a acordar diante da sensação de bexiga cheia — a indicação e o acompanhamento devem ser conversados com o médico.`,
  },
  {
    num: '4.1', pillar: 'Cirurgia Robótica',
    title: 'Cirurgia Robótica na Urologia: O Que é e Quais Cirurgias Podem Ser Feitas',
    seoTitle: 'Cirurgia Robótica na Urologia: O Que é e Como Funciona',
    metaDescription: 'Entenda o que é a cirurgia robótica na urologia, quais procedimentos podem ser feitos com essa técnica e suas vantagens.',
    slug: 'cirurgia-robotica-urologia-o-que-e',
    keyword: 'cirurgia robótica urologia',
    body: `A cirurgia robótica ainda gera dúvida em muitos pacientes — a começar pela mais comum: "o robô opera sozinho?" Não. Entenda como a técnica funciona de verdade e em quais cirurgias urológicas ela é aplicada.

#### O que é a cirurgia robótica

É uma técnica cirúrgica minimamente invasiva na qual o cirurgião comanda braços robóticos de altíssima precisão, a partir de um console, para realizar o procedimento através de pequenas incisões.

#### Como funciona na prática

O robô não decide nada sozinho: cada movimento é comandado, em tempo real, pelo cirurgião. A tecnologia oferece mais precisão e uma visão em alta definição do campo cirúrgico — mas quem opera continua sendo o médico.

#### Vantagens

- Incisões pequenas (1 a 2 cm)
- Menor sangramento e menos dor
- Recuperação geralmente mais rápida
- Visão em alta definição durante o procedimento

#### Procedimentos mais realizados

Prostatectomia radical ou parcial, nefrectomia parcial ou total, reimplante ureteral e pieloplastia, cistectomia, reconstrução uretral, e tratamento cirúrgico de câncer de próstata, rim e bexiga.

#### Quem pode se beneficiar da técnica

A indicação depende do tipo de cirurgia, do estágio da doença e de características individuais do paciente — não existe uma resposta única. A avaliação clínica é o que define se a cirurgia robótica é o caminho mais adequado para cada caso.

#### A formação do cirurgião faz diferença

Operar com o sistema robótico exige certificação específica e curva de aprendizado própria — não basta ter acesso ao equipamento. A experiência acumulada em número de casos influencia diretamente a segurança e o resultado do procedimento, por isso vale confirmar a certificação do cirurgião antes de decidir.

#### Como funciona o dia da cirurgia, na prática

O paciente é posicionado e anestesiado normalmente, como em qualquer cirurgia. O cirurgião, então, se posiciona em um console próximo à mesa cirúrgica, de onde comanda os braços robóticos que realizam o procedimento através das pequenas incisões. Uma equipe cirúrgica completa permanece ao lado do paciente durante todo o processo, pronta para qualquer ajuste necessário.

#### O acompanhamento pós-operatório

Depois da cirurgia robótica, o acompanhamento costuma incluir retorno em poucos dias para avaliação da cicatrização, orientações sobre retomada gradual de atividades, e, dependendo do procedimento, exames de controle para confirmar a evolução esperada.`,
    faq: `**O robô pode falhar e operar por conta própria?**
Não. O sistema robótico não toma decisões — ele reproduz com precisão os movimentos comandados pelo cirurgião.

**A cirurgia robótica é mais cara?**
O custo pode variar conforme o procedimento e a cobertura do plano de saúde. Entre em contato para esclarecer as condições do seu caso.

**Quanto tempo dura a recuperação?**
Varia conforme o procedimento, mas costuma ser mais rápida do que na cirurgia aberta tradicional, graças às incisões menores.

**Todo paciente pode fazer cirurgia robótica?**
Não necessariamente — a indicação depende de uma avaliação individual completa.

**Quanto tempo dura a cirurgia em si?**
Varia conforme o procedimento e a complexidade do caso — uma prostatectomia robótica, por exemplo, costuma durar entre 2 e 4 horas, incluindo preparação e anestesia.

**A cirurgia robótica deixa cicatriz?**
Deixa cicatrizes pequenas, correspondentes às incisões de 1 a 2 cm usadas para os instrumentos — bem menores do que as de uma cirurgia aberta tradicional.

**Quantos dias de internação são necessários?**
Costuma ser mais curta do que na cirurgia aberta, variando conforme o procedimento — muitos pacientes recebem alta em 1 a 3 dias, dependendo da evolução.

**Existe alguma contraindicação para a cirurgia robótica?**
Sim, algumas condições clínicas específicas podem tornar a técnica menos indicada — por isso a avaliação pré-operatória completa é sempre necessária.`,
  },
  {
    num: '4.2', pillar: 'Cirurgia Robótica',
    title: 'Cirurgia Robótica x Cirurgia Tradicional: Diferenças, Vantagens e Recuperação',
    seoTitle: 'Cirurgia Robótica x Tradicional: Diferenças e Vantagens',
    metaDescription: 'Qual a diferença entre cirurgia robótica e cirurgia tradicional na urologia? Compare vantagens, recuperação e indicações.',
    slug: 'cirurgia-robotica-x-tradicional-diferencas',
    keyword: 'cirurgia robótica x cirurgia tradicional',
    body: `Antes de qualquer cirurgia urológica, é natural que surja a dúvida: robótica ou tradicional? A resposta não é sempre a mesma — depende do procedimento e do caso. Veja as principais diferenças entre as abordagens.

#### As diferentes abordagens cirúrgicas

Na cirurgia aberta tradicional, o acesso é feito por uma incisão maior. Na laparoscópica, por pequenas incisões com instrumentos manuais. Na [cirurgia robótica], as incisões também são pequenas, mas o cirurgião comanda braços robóticos com maior precisão e visão em alta definição.

#### Diferenças em incisões e recuperação

Incisões menores tendem a significar menos dor no pós-operatório e recuperação mais rápida — uma das principais vantagens da robótica em relação à cirurgia aberta.

#### Diferenças em precisão e controle cirúrgico

A tecnologia robótica amplia a movimentação das mãos do cirurgião com mais estabilidade e permite ajustes finos, especialmente úteis em cirurgias que exigem preservar estruturas delicadas próximas ao órgão operado.

#### A técnica certa depende do caso

A cirurgia robótica não é sempre a melhor opção para todo mundo — a decisão considera o tipo de cirurgia, o estágio da doença, características anatômicas e a experiência clínica do cirurgião.

#### Comparação lado a lado

| Aspecto | Cirurgia Robótica | Cirurgia Tradicional |
|---|---|---|
| Incisões | Pequenas (1–2 cm) | Maior, única incisão |
| Sangramento | Geralmente menor | Pode ser maior |
| Recuperação | Geralmente mais rápida | Costuma ser mais longa |
| Visão cirúrgica | Alta definição, ampliada | Direta, sem ampliação |

#### Um mito comum: "cirurgia mais longa é sinal de problema"

Não é bem assim. Um tempo cirúrgico mais longo pode simplesmente refletir mais cuidado técnico em um caso mais complexo, seja qual for a técnica usada — não uma intercorrência. O que importa mais do que o tempo em si é o resultado e a segurança do procedimento.

#### O que considerar além da técnica cirúrgica

A escolha do hospital, a experiência da equipe cirúrgica completa (não só do cirurgião principal) e a estrutura de suporte pós-operatório também influenciam o resultado final, independentemente da técnica escolhida. Vale considerar esses fatores na decisão, não apenas robótica versus tradicional isoladamente.

#### Custos e cobertura por convênio

A cobertura de cirurgia robótica por planos de saúde varia conforme a operadora e o procedimento. Antes de decidir, vale confirmar diretamente com o convênio e com a clínica quais são as condições aplicáveis ao seu caso específico.`,
    faq: `**A cirurgia robótica é sempre melhor que a tradicional?**
Não necessariamente — depende do procedimento e do caso individual. A avaliação médica é o que define o melhor caminho.

**A recuperação da cirurgia robótica é garantidamente mais rápida?**
Na maioria dos casos, sim, mas isso varia conforme o procedimento e a resposta de cada paciente.

**Quais cirurgias urológicas podem ser feitas com técnica robótica?**
Prostatectomia, nefrectomia, reimplante ureteral, pieloplastia, cistectomia e reconstrução uretral, entre outras.

**Como saber qual técnica é indicada para o meu caso?**
Somente após uma avaliação clínica completa — não é possível definir isso sem exame e histórico do paciente.

**A cirurgia laparoscópica é a mesma coisa que a robótica?**
Não. Ambas usam pequenas incisões, mas na robótica o cirurgião comanda braços mecânicos com mais precisão e visão ampliada, o que muda o nível de controle do procedimento.

**Quem decide qual técnica será usada, eu ou o médico?**
A decisão é conjunta — o médico apresenta as opções tecnicamente viáveis para o seu caso, e a escolha final leva em conta essa avaliação e a conversa com o paciente.

**A cirurgia tradicional está ultrapassada?**
Não — continua sendo indicada em situações específicas, especialmente quando a técnica robótica não está disponível ou não é a mais adequada para o caso.

**Vale a pena buscar uma segunda opinião antes de decidir a técnica cirúrgica?**
Pode ser útil, especialmente em casos mais complexos — o importante é que a decisão final seja bem informada e alinhada com um profissional de confiança.`,
  },
  {
    num: '5.1', pillar: 'Cálculo Renal',
    title: 'Pedra nos Rins: Sintomas, Causas e Como Prevenir',
    seoTitle: 'Pedra nos Rins: Sintomas, Causas e Como Prevenir',
    metaDescription: 'Dor lombar intensa, sangue na urina? Veja os sintomas de pedra nos rins, principais causas e como reduzir o risco de cálculos.',
    slug: 'pedra-nos-rins-sintomas-causas-prevencao',
    keyword: 'pedra nos rins sintomas',
    body: `A dor de pedra nos rins é frequentemente descrita como uma das mais intensas que existem. Entender os sinais e as causas ajuda a agir cedo — e, em muitos casos, a evitar que o quadro se repita.

#### O que é cálculo renal (nefrolitíase)

É a formação de cálculos — popularmente "pedras" — dentro dos rins, que podem causar dor, sangramento, infecção e obstrução do fluxo urinário.

#### Sintomas de alerta

- Dor lombar ou abdominal intensa, que pode irradiar para a virilha
- Sangue na urina
- Náusea
- Febre
- Dificuldade para urinar

#### Causas mais comuns

Desidratação, dieta rica em sódio, proteína e açúcar, alterações metabólicas e fatores genéticos e anatômicos estão entre as causas mais frequentes.

#### Como prevenir

A boa hidratação é a medida mais simples e eficaz para a maioria das pessoas. Ajustes na alimentação também podem ajudar, mas o ideal — especialmente para quem já teve cálculo antes — é uma avaliação individual, já que a composição da pedra influencia qual cuidado faz mais diferença.

#### Quando a dor de pedra no rim é emergência

Dor súbita e insuportável, febre alta associada à dor lombar, ou incapacidade de urinar são sinais que pedem atendimento imediato. Um desconforto lombar recorrente, sem esses sinais, ainda assim merece ser investigado em consulta.

#### O calor e o verão aumentam o risco

Em períodos de calor intenso, a perda de líquido pelo suor aumenta, e a urina fica mais concentrada — o que favorece a formação de cálculos em pessoas predispostas. Reforçar a hidratação nessas épocas é uma medida simples que reduz esse risco sazonal.

#### Tipos de cálculo renal e por que isso importa

Existem diferentes composições de cálculo — os mais comuns são os de cálcio, mas também existem os de ácido úrico, estruvita e cistina, cada um com fatores de risco e estratégias de prevenção específicas. Saber qual foi o tipo do cálculo eliminado ou removido, quando possível analisá-lo, ajuda a direcionar a prevenção de forma mais precisa do que uma orientação genérica.

#### O papel dos exames de imagem no diagnóstico

O ultrassom costuma ser o primeiro exame solicitado, por não usar radiação e conseguir identificar a maioria dos cálculos. Em casos mais complexos, a tomografia computadorizada oferece detalhamento maior sobre tamanho, posição exata e grau de obstrução, ajudando a definir a conduta mais adequada.`,
    faq: `**Beber muita água resolve qualquer pedra nos rins?**
Ajuda na prevenção e em cálculos pequenos, mas nem toda pedra se resolve só com hidratação — depende do tamanho e da posição.

**Pedra nos rins tem relação com alimentação?**
Sim, dieta rica em sódio, proteína animal e açúcar pode aumentar o risco em pessoas predispostas.

**Quem já teve pedra no rim uma vez vai ter de novo?**
Existe uma tendência maior de recorrência, por isso a avaliação da causa específica ajuda a reduzir esse risco.

**Toda pedra no rim causa dor?**
Não — algumas são descobertas em exames de rotina, sem sintomas, especialmente quando pequenas.

**Suplementos alimentares podem causar pedra nos rins?**
Alguns, usados em excesso e sem orientação, podem aumentar o risco — por isso o uso deve sempre ser acompanhado por um profissional.

**Existe exame que já mostra se tenho tendência a formar cálculos?**
Sim, exames metabólicos específicos ajudam a identificar fatores de risco individuais, especialmente para quem já teve episódios anteriores.

**Todo cálculo renal aparece em exame de sangue?**
Não — o diagnóstico costuma depender mais de exames de imagem (ultrassom ou tomografia) do que de exames de sangue isoladamente.

**Pedra nos rins pode causar febre?**
Sim, especialmente quando associada a infecção urinária concomitante — nesse caso, é considerada um sinal de alerta que merece atenção médica rápida.`,
  },
  {
    num: '5.2', pillar: 'Cálculo Renal',
    title: 'Tratamento para Cálculo Renal: Quando Basta Medicação e Quando é Preciso Cirurgia',
    seoTitle: 'Tratamento para Cálculo Renal: Medicação ou Cirurgia?',
    metaDescription: 'Nem toda pedra no rim precisa de cirurgia. Entenda quando o tratamento é clínico e quando a cirurgia é indicada.',
    slug: 'tratamento-calculo-renal-cirurgia-ou-medicacao',
    keyword: 'tratamento cálculo renal',
    body: `Nem toda pedra nos rins segue o mesmo caminho de tratamento. Entenda os fatores que definem se o cuidado será clínico ou cirúrgico.

#### Fatores que definem o tratamento

Tamanho do cálculo, posição, presença de sintomas e grau de obstrução do fluxo urinário são os principais fatores avaliados antes de definir a conduta.

#### Tratamento clínico

Para cálculos pequenos, sem obstrução importante, o tratamento costuma incluir hidratação reforçada, medicação para controle da dor e facilitação da eliminação, com acompanhamento por imagem.

#### Quando a cirurgia é necessária

Cálculos maiores, que causam obstrução significativa, dor persistente ou risco de dano ao rim, costumam exigir intervenção cirúrgica — que pode variar de procedimentos menos invasivos a cirurgias mais complexas.

#### Cirurgia robótica em casos complexos

Em cálculos associados a alterações anatômicas ou situações mais complexas, a [cirurgia robótica] pode ser uma alternativa, permitindo mais precisão na remoção do cálculo com preservação do tecido renal saudável.

#### O que esperar depois do tratamento

Após o tratamento, o acompanhamento ajuda a identificar a causa do cálculo e reduzir o risco de recidiva — incluindo, quando indicado, exames metabólicos e ajustes de hábito.

#### Sinais de que o tratamento clínico não está sendo suficiente

Dor que persiste ou piora apesar da medicação, febre que surge durante o acompanhamento, ou dificuldade crescente para urinar são sinais de que vale reavaliar o plano de tratamento — nesses casos, a indicação cirúrgica costuma ser reconsiderada mais cedo.

#### As técnicas cirúrgicas mais utilizadas

Entre as opções cirúrgicas para cálculo renal estão a litotripsia extracorpórea (fragmentação do cálculo por ondas de choque, sem cortes), a ureterorrenoscopia (acesso pelas vias naturais, com instrumentos finos) e, em casos mais complexos, a nefrolitotripsia percutânea ou a cirurgia robótica. Cada técnica tem indicação conforme tamanho, posição e composição do cálculo.

#### Prevenção pós-tratamento: o que realmente ajuda

Depois de tratado o cálculo, a prevenção passa por hidratação consistente ao longo do ano (não só em picos de calor), ajustes alimentares orientados conforme o tipo de cálculo identificado, e acompanhamento com exames periódicos para quem já teve mais de um episódio.

#### Quando buscar uma segunda avaliação

Se a dor persiste mesmo após o tratamento inicial, se surgem novos episódios em curto espaço de tempo, ou se restam dúvidas sobre a causa do cálculo, vale buscar uma reavaliação — entender a causa de fundo é o que diferencia tratar o episódio de realmente prevenir o próximo.`,
    faq: `**Toda pedra nos rins precisa de cirurgia?**
Não. Muitos casos são resolvidos apenas com hidratação e medicação, dependendo do tamanho e da posição do cálculo.

**A cirurgia para pedra no rim é sempre robótica?**
Não — a indicação da técnica depende da complexidade do caso e será avaliada individualmente.

**Depois do tratamento, a pedra pode voltar?**
Existe risco de recorrência, especialmente sem investigação da causa — por isso o acompanhamento pós-tratamento é importante.

**Quanto tempo leva para eliminar um cálculo pequeno?**
Varia de pessoa para pessoa — pode levar de poucos dias a algumas semanas, com acompanhamento médico no processo.

**A cirurgia para cálculo renal deixa sequelas?**
Na maioria dos casos, não, especialmente quando realizada com técnicas modernas que preservam o tecido renal saudável ao redor.

**Posso continuar tomando medicação para dor durante todo o processo?**
O uso de medicação deve ser sempre orientado pelo médico responsável, ajustado conforme a evolução do quadro.

**A litotripsia extracorpórea dói?**
É um procedimento não invasivo, realizado sob sedação leve ou analgesia, e costuma ser bem tolerado pela maioria dos pacientes.

**Depois de remover um cálculo, preciso mudar toda a minha alimentação?**
Não necessariamente toda — os ajustes costumam ser direcionados ao tipo específico de cálculo identificado, e não a uma dieta genérica.

**A cirurgia robótica para cálculo renal exige mais tempo de recuperação do que outras técnicas?**
Não — costuma ter recuperação comparável ou até mais rápida do que técnicas mais invasivas, graças às incisões menores.`,
  },
  {
    num: '6.1', pillar: 'Disfunção Erétil',
    title: 'Disfunção Erétil: Causas Físicas e Emocionais (Não é Só Psicológico)',
    seoTitle: 'Disfunção Erétil: Causas Físicas e Emocionais',
    metaDescription: 'Disfunção erétil afeta cerca de 40% dos homens acima dos 40 anos. Entenda as causas físicas e emocionais dessa condição.',
    slug: 'disfuncao-eretil-causas',
    keyword: 'disfunção erétil causas',
    body: `"Deve ser coisa da cabeça" é uma das frases mais comuns — e mais incompletas — sobre disfunção erétil. A condição afeta cerca de 40% dos homens acima dos 40 anos, e as causas vão muito além do emocional.

#### Causas físicas

Doenças cardiovasculares, hipertensão e diabetes estão entre as causas físicas mais frequentes, além de alterações hormonais, efeito colateral de medicamentos e alterações na próstata.

#### Causas emocionais

Ansiedade e estresse podem, sim, causar ou agravar a disfunção erétil — mas raramente são a explicação isolada, especialmente quando o sintoma é persistente.

#### Por que pode ser um sinal de alerta cardiovascular

A ereção depende de um bom funcionamento vascular. Por isso, a disfunção erétil pode, em alguns casos, aparecer antes de outros sinais de problemas cardiovasculares — o que reforça a importância de investigar, e não apenas tratar o sintoma isoladamente.

#### Quando procurar um urologista

Dificuldade recorrente para obter ou manter ereção, dor durante a ereção, ou queda no interesse sexual sem explicação aparente são sinais que merecem avaliação.

#### Fatores de risco no dia a dia

Sedentarismo, tabagismo, consumo excessivo de álcool e sono de má qualidade estão entre os fatores que podem contribuir para o quadro — e que também são pontos de partida para melhora.

#### Não é um problema isolado do paciente

A disfunção erétil também afeta relacionamentos e autoestima, e é comum que o paciente adie a conversa por vergonha, deixando o parceiro ou parceira sem entender o que está acontecendo. Tratar o sintoma cedo tende a aliviar não só a questão física, mas também esse peso emocional que acompanha o quadro.

#### Como o urologista investiga a causa

A avaliação costuma incluir uma conversa detalhada sobre histórico de saúde, medicamentos em uso, hábitos de vida e características específicas do sintoma (se é constante ou situacional, por exemplo). Exames de sangue, incluindo avaliação hormonal, e, em alguns casos, exames vasculares específicos ajudam a confirmar ou descartar causas físicas.

#### A relação com outras condições de saúde

Diabetes mal controlado, colesterol alto e hipertensão não tratada estão entre as condições que mais se relacionam com disfunção erétil — o que reforça que, muitas vezes, tratar a causa de base é parte importante do tratamento, não apenas o sintoma isoladamente.`,
    faq: `**Disfunção erétil é sempre psicológica?**
Não. Na maioria dos casos, existe também um componente físico, que precisa ser investigado.

**Disfunção erétil pode indicar outro problema de saúde?**
Sim, em alguns casos pode ser um sinal precoce de questões cardiovasculares, o que reforça a importância da avaliação médica.

**A idade é a principal causa?**
A idade é um fator de risco, mas não é a única causa — hábitos e condições de saúde têm papel importante.

**É normal sentir vergonha de falar sobre isso com o médico?**
É comum, mas não precisa ser um impedimento — é um sintoma como outro qualquer, tratado com naturalidade no consultório.

**Disfunção erétil pode acontecer em homens jovens?**
Sim, embora seja mais comum a partir dos 40 anos, fatores como estresse, ansiedade e hábitos de vida podem causar o quadro em homens mais jovens também.

**Parar de fumar e beber menos já ajuda?**
Em muitos casos, sim — esses ajustes de hábito fazem parte do tratamento e podem melhorar o quadro isoladamente ou em conjunto com outras abordagens.

**Diabetes sempre causa disfunção erétil?**
Não sempre, mas é um fator de risco relevante — o controle adequado da glicemia ajuda a reduzir esse risco ao longo do tempo.

**Quais exames costumam ser pedidos na investigação?**
Exames de sangue (incluindo hormônios e glicemia) e, conforme o caso, avaliações vasculares específicas ajudam a identificar a causa por trás do sintoma.`,
  },
  {
    num: '6.2', pillar: 'Disfunção Erétil',
    title: 'Tratamento para Disfunção Erétil: Quais São as Opções Disponíveis Hoje',
    seoTitle: 'Tratamento para Disfunção Erétil: Quais as Opções',
    metaDescription: 'Veja as principais opções de tratamento para disfunção erétil, da mudança de hábitos aos recursos médicos disponíveis.',
    slug: 'tratamento-disfuncao-eretil-opcoes',
    keyword: 'tratamento disfunção erétil',
    body: `A boa notícia sobre disfunção erétil é que ela tem tratamento na grande maioria dos casos — o primeiro passo é entender qual abordagem faz sentido para cada situação.

#### Avaliação vem antes do tratamento

Identificar a causa — física, emocional ou combinada — é o que direciona o tratamento mais adequado. Tratar sem entender a causa costuma trazer resultado limitado.

#### Mudanças de hábito que ajudam

Atividade física regular, controle de doenças como diabetes e hipertensão, redução do consumo de álcool e melhora da qualidade do sono podem ajudar a melhorar o quadro, isoladamente ou junto com outras abordagens.

#### Opções medicamentosas

Existem medicações específicas para disfunção erétil, com diferentes indicações e cuidados — a escolha e a prescrição devem ser sempre feitas por um médico, considerando histórico de saúde e possíveis interações.

#### Outras abordagens

Em alguns casos, o tratamento hormonal ou o acompanhamento psicológico em conjunto fazem parte do plano de cuidado, dependendo da causa identificada.

#### Por que buscar ajuda cedo faz diferença

Quanto antes a causa é identificada, mais opções de tratamento costumam estar disponíveis — e menor a chance de o quadro se tornar mais complexo.

#### O papel do parceiro ou parceira no processo

Quando o assunto é conversado abertamente em casa, o processo de avaliação e tratamento costuma fluir melhor — reduz a pressão sobre o paciente e ajuda a manter a adesão às orientações médicas ao longo do tempo.

#### Tratamentos além da medicação oral

Quando a medicação oral não é indicada ou não traz o resultado esperado, existem outras alternativas terapêuticas que podem ser consideradas, sempre com avaliação individual — desde ajustes hormonais até outras abordagens específicas, discutidas caso a caso conforme a causa identificada.

#### Acompanhamento contínuo: por que não é "resolver e esquecer"

Mesmo depois de iniciado o tratamento, o acompanhamento periódico ajuda a ajustar a abordagem conforme a resposta do paciente e a monitorar condições de saúde associadas, como as cardiovasculares, que podem evoluir ao longo do tempo.

#### O que evitar durante o tratamento

Interromper a medicação por conta própria assim que os sintomas melhoram, associar diferentes tratamentos sem orientação médica, ou buscar produtos vendidos sem receita como "solução rápida" são práticas que podem atrapalhar o processo ou mascarar a causa real do problema.`,
    faq: `**Disfunção erétil tem cura?**
Na maioria dos casos, existe tratamento eficaz — o resultado depende da causa identificada e da adesão ao acompanhamento.

**O tratamento é definitivo?**
Varia conforme a causa. Alguns casos melhoram com mudança de hábito; outros exigem acompanhamento contínuo.

**O tratamento funciona para todo mundo?**
A resposta varia de pessoa para pessoa — por isso a avaliação individual é essencial antes de qualquer indicação.

**Preciso fazer exames antes de iniciar o tratamento?**
Geralmente sim — os exames ajudam a identificar a causa e a descartar questões de saúde associadas, como as cardiovasculares.

**Quanto tempo leva para ver resultado com o tratamento?**
Varia conforme a abordagem e a causa — algumas respostas aparecem em semanas, outras exigem acompanhamento mais prolongado.

**Existe risco em usar medicação para disfunção erétil sem prescrição?**
Sim — a automedicação pode mascarar a causa real do problema e trazer riscos, especialmente para quem tem outras condições de saúde não diagnosticadas.

**O tratamento hormonal é indicado para todos os casos?**
Não — só é considerado quando exames confirmam alteração hormonal relevante, e sempre com acompanhamento médico específico.

**Preciso continuar o tratamento para sempre?**
Depende da causa — alguns casos melhoram e permitem reduzir ou suspender o tratamento com acompanhamento; outros exigem manejo mais contínuo.

**Terapia com casal ajuda no tratamento?**
Em alguns casos, sim, especialmente quando o componente emocional tem peso relevante — pode ser indicada em conjunto com o acompanhamento médico, não como substituto dele.`,
  },
  {
    num: '7.1', pillar: 'Infecção Urinária',
    title: 'Infecção Urinária: Sintomas, Causas e Como Prevenir',
    seoTitle: 'Infecção Urinária: Sintomas, Causas e Prevenção',
    metaDescription: 'Ardência ao urinar, vontade frequente de ir ao banheiro? Veja os sintomas de infecção urinária, causas e como preveni-la.',
    slug: 'infeccao-urinaria-sintomas-prevencao',
    keyword: 'infecção urinária sintomas',
    body: `A infecção urinária é uma das queixas mais comuns no consultório — e também uma das mais mal compreendidas. Veja os sinais, as causas mais frequentes e como reduzir o risco.

#### Sintomas mais comuns

Ardência ao urinar, vontade frequente de urinar, sangue na urina, febre e mal-estar estão entre os sinais mais característicos.

#### Por que é mais comum em mulheres

A anatomia feminina, com uretra mais curta, facilita a chegada de bactérias à bexiga — o que explica a maior frequência de infecção urinária em mulheres, embora ela também ocorra em homens e crianças.

#### Causas e fatores de risco

Higiene inadequada, hábito de segurar a urina por muito tempo, relações sexuais e condições como diabetes podem aumentar o risco de infecção.

#### Como prevenir

- Boa hidratação (ao menos 2 litros de água por dia)
- Evitar segurar a urina por muito tempo
- Higiene adequada
- Exames de rotina, especialmente para quem tem diabetes ou histórico recorrente

#### Quando procurar atendimento imediato

Febre alta, dor lombar intensa ou sangue na urina, associados aos sintomas urinários, merecem atenção médica sem demora — podem indicar que a infecção atingiu os rins.

#### Grupos com maior atenção necessária

Gestantes, pessoas com diabetes e quem já teve pielonefrite (infecção que atinge os rins) merecem atenção redobrada diante de qualquer sintoma urinário, já que nesses grupos a infecção tende a evoluir de forma mais rápida e exige investigação mais próxima.

#### Como é feito o diagnóstico

O exame de urina (EAS) costuma ser o primeiro passo, seguido, quando necessário, de urocultura — exame que identifica a bactéria específica e orienta a escolha do antibiótico mais eficaz. Em infecções recorrentes ou atípicas, exames de imagem também podem ser solicitados.

#### Infecção urinária na gravidez merece atenção redobrada

Durante a gestação, alterações hormonais e anatômicas aumentam a predisposição a infecções urinárias, que, se não tratadas, podem representar risco tanto para a gestante quanto para o bebê. Por isso, o pré-natal costuma incluir exames de urina de rotina, mesmo sem sintomas aparentes.

#### Diferença entre cistite e infecção que atinge os rins

A cistite (infecção na bexiga) costuma trazer ardência e vontade frequente de urinar, sem grande comprometimento do estado geral. Já a pielonefrite (infecção que sobe até os rins) costuma vir acompanhada de febre alta, calafrios e dor lombar mais intensa — um quadro mais sério, que exige atenção médica sem demora.`,
    faq: `**Infecção urinária passa sozinha?**
Não é recomendado esperar — o tratamento adequado evita complicações e alívio mais rápido dos sintomas.

**Posso tomar o mesmo antibiótico de uma infecção anterior?**
Não é indicado se automedicar — cada episódio deve ser avaliado, inclusive para checar se é preciso investigar mais a fundo.

**Homens também têm infecção urinária?**
Sim, embora seja mais comum em mulheres, homens e crianças também podem apresentar o quadro.

**Beber muita água evita infecção urinária?**
Ajuda bastante na prevenção, mas não elimina o risco por completo — outros hábitos também influenciam.

**Relação sexual pode causar infecção urinária?**
Pode ser um fator contribuinte em algumas mulheres — urinar logo após a relação é uma medida simples que ajuda a reduzir esse risco.

**Quanto tempo dura o tratamento de uma infecção urinária comum?**
Varia conforme a gravidade e a orientação médica, mas costuma durar de poucos dias a cerca de uma semana.

**Toda infecção urinária precisa de urocultura?**
Não sempre — em episódios isolados e sintomas típicos, o exame de urina simples costuma ser suficiente para orientar o tratamento inicial.

**Chá e outros remédios caseiros tratam infecção urinária?**
Não substituem o tratamento médico adequado — podem até ajudar no conforto, mas a infecção precisa de avaliação e, geralmente, de antibiótico específico.

**Infecção urinária é contagiosa, posso passar para outra pessoa?**
Não é uma infecção transmissível de pessoa para pessoa da forma como um resfriado, por exemplo — está relacionada a bactérias que já fazem parte da flora do próprio corpo.`,
  },
  {
    num: '7.2', pillar: 'Infecção Urinária',
    title: 'Infecção Urinária de Repetição: Por Que Acontece e Quando Investigar a Fundo',
    seoTitle: 'Infecção Urinária de Repetição: Por Que Acontece',
    metaDescription: 'Infecção urinária voltando sempre? Entenda por que a infecção urinária de repetição acontece e quando investigar.',
    slug: 'infeccao-urinaria-repeticao-investigar',
    keyword: 'infecção urinária de repetição',
    body: `Quando a infecção urinária vira quase uma visita mensal, o incômodo deixa de ser só físico — vira também motivo de frustração. Entenda por que isso acontece e quando vale ir além do tratamento de sempre.

#### O que caracteriza infecção de repetição

Em geral, considera-se recorrente quando há 2 ou mais episódios em 6 meses, ou 3 ou mais em 12 meses.

#### Possíveis causas

Fatores anatômicos, hábitos do dia a dia, alterações hormonais (como na menopausa) e, em alguns casos, resistência bacteriana relacionada ao uso repetido de antibiótico sem investigação adequada podem explicar a recorrência.

#### Os riscos de se automedicar toda vez

Repetir o mesmo antibiótico a cada novo episódio, sem investigar a causa, pode mascarar um problema de fundo e favorecer resistência bacteriana — tornando tratamentos futuros mais difíceis.

#### Quando investigar a fundo

Diante de infecções recorrentes, exames de imagem e uma avaliação urológica completa ajudam a identificar se existe uma causa específica por trás — e a definir uma estratégia de prevenção mais eficaz do que só tratar cada episódio isoladamente.

#### Hábitos que podem estar contribuindo sem você perceber

Segurar a urina por longos períodos, baixa ingestão de água, uso de roupas íntimas sintéticas por tempo prolongado e não urinar após a relação sexual são hábitos comuns que podem favorecer novos episódios.

#### Como costuma ser a investigação mais aprofundada

Diante de episódios recorrentes, o urologista pode solicitar exames de imagem (como ultrassom das vias urinárias), urocultura para identificar a bactéria específica, e, em alguns casos, avaliação funcional da bexiga — o objetivo é entender se existe um fator estrutural ou funcional por trás da recorrência.

#### Estratégias de prevenção usadas em casos recorrentes

Além dos hábitos básicos de prevenção, em alguns casos o médico pode considerar estratégias específicas, como profilaxia antibiótica em doses baixas por período determinado, ou orientações direcionadas conforme o padrão identificado nos exames — sempre uma decisão individualizada, nunca um protocolo padrão para todo mundo.

#### O papel da imunidade e de outras condições associadas

Quedas de imunidade, alterações hormonais e condições como diabetes mal controlado podem tornar o corpo mais suscetível a infecções recorrentes — por isso, em alguns casos, a investigação da infecção urinária de repetição acaba revelando também outra condição de saúde que precisa de atenção.`,
    faq: `**Infecção urinária de repetição é sinal de algo mais grave?**
Nem sempre, mas merece investigação para descartar causas específicas e ajustar a prevenção.

**Preciso trocar de antibiótico a cada nova infecção?**
Essa decisão deve ser sempre médica — repetir o mesmo tratamento sem avaliação pode não resolver a causa de fundo.

**Existe forma de prevenir a recorrência?**
Sim, com hábitos adequados e, quando indicado, acompanhamento específico após identificar a causa.

**A menopausa aumenta o risco de infecção de repetição?**
Sim, as alterações hormonais desse período podem tornar a região mais suscetível a infecções recorrentes.

**Uso de probióticos ajuda a prevenir infecção de repetição?**
Existem estudos sobre o tema, mas o uso deve ser conversado com o médico, já que a eficácia varia conforme o caso.

**Infecção urinária de repetição pode afetar os rins a longo prazo?**
Se não investigada e tratada adequadamente, episódios recorrentes podem, em alguns casos, evoluir e afetar os rins — mais um motivo para não normalizar a repetição.

**Trocar de antibiótico a cada episódio aumenta o risco de resistência bacteriana?**
Sim — o uso repetido e não orientado de antibióticos é um dos principais fatores associados à resistência, o que reforça a importância da investigação adequada.

**Homens têm infecção urinária de repetição com a mesma frequência que mulheres?**
Não, é bem menos comum em homens — quando acontece, costuma merecer uma investigação mais detalhada, já que foge do padrão mais esperado.`,
  },
  {
    num: '8.1', pillar: 'Estética Íntima Masculina',
    title: 'Preenchimento Peniano com Ácido Hialurônico: Como Funciona o Procedimento',
    seoTitle: 'Preenchimento Peniano com Ácido Hialurônico: Como Funciona',
    metaDescription: 'Entenda como funciona o preenchimento peniano com ácido hialurônico, indicações, duração do procedimento e recuperação.',
    slug: 'preenchimento-peniano-acido-hialuronico-como-funciona',
    keyword: 'preenchimento peniano ácido hialurônico',
    body: `Cuidar da estética íntima também é cuidar da autoestima — e o preenchimento peniano com ácido hialurônico é hoje uma das opções mais procuradas nesse campo. Entenda como funciona.

#### O que é o procedimento

É a aplicação de ácido hialurônico na região peniana, com finalidade estética, feita em ambiente ambulatorial.

#### Para quem é indicado

Costuma ser indicado para aumento de volume, correção de assimetrias e melhora da autoestima — sempre após avaliação individual das expectativas e da anatomia do paciente.

#### Como é feito

O procedimento é ambulatorial, com duração entre 30 minutos e 1 hora, e não exige internação.

#### Vantagens

- Recuperação rápida
- Resultado perceptível já nos primeiros dias
- Procedimento reversível

#### O que esperar antes e depois

Antes do procedimento, é feita uma avaliação clínica para confirmar a indicação e alinhar expectativas. Depois, alguns cuidados simples de recuperação são orientados individualmente pelo médico.

#### Por que a avaliação individual é a etapa mais importante

Cada corpo responde de forma diferente, e a quantidade de produto, a técnica de aplicação e o resultado esperado variam de pessoa para pessoa. É por isso que o procedimento nunca deve ser padronizado — a consulta prévia é o que garante que a expectativa do paciente seja compatível com o que é tecnicamente indicado para o seu caso.

#### O que motiva a busca pelo procedimento

Melhora da autoestima, correção de assimetrias percebidas pelo próprio paciente e busca por mais confiança na vida íntima estão entre os motivos mais comuns relatados no consultório. Reconhecer esse motivador ajuda o médico a alinhar as expectativas de forma realista antes do procedimento.

#### Cuidados na escolha do material utilizado

O ácido hialurônico usado deve ser de qualidade médica, com registro apropriado — a procedência do material é um dos pontos que devem ser esclarecidos antes de qualquer aplicação, já que influencia diretamente na segurança do procedimento.

#### Diferença entre preenchimento e outras técnicas de engrossamento

Existem outras abordagens para aumento de volume peniano, como o enxerto de gordura, com indicações, durabilidade e características diferentes do preenchimento com ácido hialurônico. A escolha entre técnicas depende da anatomia do paciente, do resultado esperado e da avaliação clínica — não existe uma técnica única "melhor para todos", e cada uma tem prós e contras discutidos individualmente na consulta.`,
    faq: `**O procedimento dói?**
É realizado com anestesia local, o que reduz bastante o desconforto durante a aplicação.

**O resultado é definitivo?**
Não — é um procedimento reversível, o que é considerado uma vantagem por muitos pacientes.

**Quando posso voltar à rotina normal?**
Na maioria dos casos, a recuperação é rápida, mas o prazo exato deve ser orientado individualmente pelo médico.

**É um procedimento seguro?**
Quando feito por profissional médico habilitado, com avaliação prévia adequada, é considerado seguro — veja mais em [Preenchimento Peniano é Seguro? Mitos e Riscos].

**Quanto tempo dura o resultado?**
Varia conforme o organismo de cada paciente e o tipo de produto utilizado — esse prazo é discutido individualmente na consulta.

**Posso ter relações sexuais logo depois do procedimento?**
A orientação sobre retomada da atividade sexual e prazos de recuperação é sempre individualizada e passada pelo médico responsável.

**O procedimento interfere na sensibilidade?**
Quando bem indicado e realizado, não costuma alterar a sensibilidade — mas essa é uma das dúvidas que devem ser esclarecidas na avaliação prévia.

**É possível repetir o procedimento no futuro?**
Sim, dependendo da avaliação e do resultado desejado, pode ser considerada uma nova aplicação após o período de reabsorção do material anterior.

**O preenchimento peniano é o mesmo procedimento usado em outras partes do corpo?**
A substância (ácido hialurônico) é similar à usada em outras aplicações estéticas, mas a técnica, a quantidade e os cuidados são específicos para a anatomia peniana, exigindo experiência particular do profissional.`,
  },
  {
    num: '8.2', pillar: 'Estética Íntima Masculina',
    title: 'Preenchimento Peniano é Seguro? Mitos, Riscos e o Que Considerar Antes de Decidir',
    seoTitle: 'Preenchimento Peniano é Seguro? Mitos e Riscos',
    metaDescription: 'Separamos mitos e verdades sobre o preenchimento peniano — riscos reais e o que considerar antes de decidir.',
    slug: 'preenchimento-peniano-e-seguro-mitos-riscos',
    keyword: 'preenchimento peniano é seguro',
    body: `A busca por preenchimento peniano cresce a cada ano — e cresce também a desinformação sobre o tema. Separamos os principais mitos para ajudar na decisão.

#### Mito ou verdade: "é só estética, não tem risco"

Mito. Qualquer procedimento médico, mesmo estético, tem indicação, técnica e avaliação prévia — e o preenchimento peniano não é exceção.

#### Mito ou verdade: "qualquer profissional pode aplicar"

Mito. O procedimento deve ser realizado por médico habilitado, com conhecimento da anatomia local e capacidade de conduzir eventuais intercorrências.

#### Mito ou verdade: "o resultado é sempre definitivo"

Mito. O preenchimento com ácido hialurônico é reversível — o que, aliás, costuma ser visto como uma vantagem por quem ainda está decidindo.

#### Riscos reais quando feito sem avaliação adequada

Assimetrias, resultado insatisfatório e reações locais são riscos possíveis, principalmente quando o procedimento não é precedido de avaliação médica individual adequada.

#### O que perguntar antes de decidir

- O profissional é médico habilitado para o procedimento?
- Qual material será usado e por quê?
- Quais os cuidados esperados antes e depois?
- O que fazer em caso de intercorrência?
- Qual a experiência do profissional especificamente com esse procedimento?

#### Por que procurar um urologista, e não qualquer clínica de estética

O preenchimento peniano envolve uma região com anatomia específica e sensível. Um urologista tem a formação necessária para avaliar essa anatomia, reconhecer contraindicações e conduzir eventuais intercorrências com segurança — algo que vai além da técnica de aplicação em si.

#### Sinais de alerta após o procedimento

Dor intensa e persistente, sinais de infecção (vermelhidão, calor local, secreção) ou assimetria acentuada que surge após o procedimento merecem contato imediato com o médico responsável — a maioria das intercorrências, quando identificadas cedo, tem manejo simples.

#### Estética íntima como parte do cuidado integral com a saúde

Cuidar da estética íntima não precisa ser tratado como um tema separado da saúde geral — pelo contrário, quando conduzido com avaliação médica adequada, é parte do mesmo cuidado que envolve prevenção, bem-estar e autoestima.

#### Como avaliar depoimentos e fotos de "antes e depois"

É comum encontrar promessas exageradas e imagens editadas em redes sociais sobre esse tipo de procedimento. O ideal é levar essas referências para a própria consulta e perguntar diretamente ao médico o que é realista para o seu caso específico, em vez de basear a decisão apenas no que se vê on-line.`,
    faq: `**O preenchimento peniano pode dar errado?**
Como qualquer procedimento médico, existem riscos, que são reduzidos com avaliação adequada e profissional habilitado.

**Existe idade mínima recomendada?**
A indicação deve ser sempre avaliada individualmente pelo médico, considerando maturidade física e expectativa do paciente.

**O resultado é igual para todo mundo?**
Não — o resultado depende da anatomia, da técnica utilizada e da resposta individual de cada paciente.

**Posso reverter se não gostar do resultado?**
Sim, o preenchimento com ácido hialurônico é reversível, ao contrário de outras técnicas mais permanentes.

**Preciso de exames antes do procedimento?**
Pode ser solicitada uma avaliação prévia, conforme o histórico de saúde do paciente, antes de confirmar a indicação.

**O que diferencia um bom resultado de um resultado insatisfatório?**
Avaliação individual correta, técnica adequada e expectativa alinhada previamente com o paciente são os fatores que mais influenciam um resultado satisfatório.

**Preciso avisar o médico se estiver tomando algum medicamento?**
Sim — o histórico completo de saúde e medicações em uso deve sempre ser informado na avaliação prévia, para garantir a segurança do procedimento.

**O procedimento é indicado para qualquer idade adulta?**
A indicação é sempre individual — o médico avalia maturidade física, expectativas e histórico de saúde antes de confirmar se o procedimento é adequado.

**Existe alguma condição de saúde que impede o procedimento?**
Algumas condições clínicas específicas podem exigir cuidado adicional ou contraindicar o procedimento — por isso a avaliação médica prévia é indispensável, e não apenas uma formalidade.`,
  },
  {
    num: '9.1', pillar: 'Saúde Geral',
    title: 'Primeira Consulta com o Urologista: Como Funciona e o Que Levar',
    seoTitle: 'Primeira Consulta com o Urologista: Como Funciona',
    metaDescription: 'Vai à primeira consulta com o urologista? Veja como funciona o atendimento, o que levar e como se preparar.',
    slug: 'primeira-consulta-urologista-como-funciona',
    keyword: 'primeira consulta urologista',
    body: `Chegar para a primeira consulta sem saber o que esperar aumenta a ansiedade — e não precisa ser assim. Veja como funciona o atendimento e como se preparar.

#### Antes da consulta: o que levar

Exames anteriores relacionados ao motivo da consulta, lista de medicamentos em uso e informações sobre histórico de saúde pessoal e familiar ajudam o médico a ter uma visão mais completa desde o início.

#### Como funciona o atendimento

A consulta costuma começar com uma conversa detalhada sobre os sintomas e o histórico de saúde (anamnese), seguida de exame físico quando necessário, e a explicação do raciocínio clínico e dos próximos passos.

#### Perguntas que você pode (e deve) fazer

- O que pode estar causando meu sintoma?
- Quais exames serão necessários e por quê?
- Quais são as opções de tratamento?
- O que posso fazer no dia a dia para ajudar?

#### Depois da consulta: próximos passos

Dependendo do caso, o médico pode solicitar exames complementares, indicar um tratamento inicial ou agendar retorno para acompanhar a evolução.

#### Dicas para se sentir mais à vontade

Falar abertamente sobre sintomas íntimos pode ser desconfortável no início — mas é exatamente essa informação que ajuda o médico a chegar a um diagnóstico mais preciso. O consultório é um espaço pensado para acolher essas conversas sem pressa e sem julgamento.

#### Como funciona o agendamento

A forma mais direta de agendar é pelo WhatsApp, informando o motivo da consulta com a liberdade de detalhar apenas o que for confortável nesse primeiro contato — o restante pode ser conversado pessoalmente, no seu tempo, durante o atendimento.

#### O que acontece se eu não tiver exames anteriores

Não ter exames prévios não impede a consulta — o médico pode solicitar os exames necessários a partir da avaliação inicial. O ideal é apenas não deixar de comparecer por achar que "precisa chegar com tudo pronto"; a primeira consulta é justamente o ponto de partida da investigação.

#### Consultas de retorno: o que muda

Diferente da primeira consulta, os retornos costumam ser mais objetivos, focados em avaliar resultados de exames, resposta ao tratamento iniciado e ajustes necessários — o que torna esses encontros geralmente mais rápidos que o atendimento inicial.`,
    faq: `**Preciso estar em jejum para a primeira consulta?**
Normalmente não, salvo orientação específica dada no momento do agendamento.

**Posso levar alguém comigo?**
Sim, especialmente em consultas pediátricas ou quando o paciente se sente mais à vontade acompanhado.

**Quanto tempo dura a primeira consulta?**
Costuma ser mais longa do que os retornos, já que envolve levantar todo o histórico do paciente.

**Vou sair da consulta com diagnóstico fechado?**
Nem sempre — em muitos casos, a consulta define os exames necessários para chegar ao diagnóstico completo.

**Posso marcar consulta só para tirar dúvidas, sem sintomas específicos?**
Sim — consultas de rotina e check-ups preventivos também fazem parte do acompanhamento urológico, mesmo sem sintomas.

**Como escolho entre marcar para mim ou para meu filho?**
Se a queixa for de uma criança, a consulta é conduzida em [Urologia Pediátrica]; se for sua, a avaliação segue o fluxo padrão de urologia geral, feminina ou masculina, conforme o caso.

**Posso remarcar a consulta se surgir algum imprevisto?**
Sim, basta avisar com antecedência pelo WhatsApp para reorganizar a agenda sem prejuízo no atendimento.

**A consulta é só presencial ou existe atendimento remoto?**
O formato de atendimento deve ser confirmado diretamente no momento do agendamento, conforme a disponibilidade e o tipo de avaliação necessária.`,
  },
  {
    num: '9.2', pillar: 'Saúde Geral',
    title: 'Saúde Urológica: 7 Hábitos Que Fazem Diferença na Prevenção',
    seoTitle: 'Saúde Urológica: 7 Hábitos de Prevenção',
    metaDescription: 'Pequenos hábitos do dia a dia fazem diferença na saúde urológica. Veja 7 recomendações simples de prevenção.',
    slug: 'saude-urologica-habitos-prevencao',
    keyword: 'saúde urológica hábitos',
    body: `Cuidar da saúde urológica não exige mudanças radicais — pequenos hábitos consistentes já fazem diferença na prevenção de boa parte dos problemas mais comuns.

#### 1. Hidratação adequada

Beber água ao longo do dia (não só quando sente sede) ajuda a prevenir infecções urinárias e formação de cálculos renais.

#### 2. Não segurar a urina

Adiar repetidamente a ida ao banheiro favorece o acúmulo de bactérias e sobrecarrega a bexiga.

#### 3. Higiene íntima adequada

Cuidados simples de higiene, sem exageros, ajudam a reduzir o risco de infecções.

#### 4. Moderação em sal, proteína e álcool

O consumo excessivo desses itens está associado a maior risco de cálculo renal e outras alterações urológicas.

#### 5. Check-up regular

Consultas de rotina, especialmente a partir dos 40–50 anos, ajudam a identificar alterações antes que virem sintoma.

#### 6. Atenção a sintomas persistentes

Dor, ardência ou mudança no padrão urinário que persistem por mais de alguns dias merecem avaliação, não devem ser normalizados.

#### 7. Atividade física regular

Contribui para a saúde cardiovascular e hormonal, ambas relacionadas à saúde urológica como um todo.

#### Hábitos que parecem saudáveis mas podem prejudicar

Restringir água de forma exagerada achando que "ajuda a segurar mais" tem efeito contrário. O uso indiscriminado de suplementos, sem orientação médica, também pode sobrecarregar os rins.

#### Como transformar esses hábitos em rotina

Pequenas mudanças, como manter uma garrafa de água por perto, ir ao banheiro assim que sentir vontade e agendar o check-up anual junto com outros compromissos fixos do ano (como a renovação de exames de rotina), ajudam a manter esses hábitos sem que pareçam um esforço extra no dia a dia.

#### Hábitos específicos para cada fase da vida

Crianças se beneficiam de rotina regular de idas ao banheiro e boa hidratação desde cedo. Adultos no meio da vida ganham mais com check-ups regulares e atenção a sinais de alerta. Pessoas acima dos 50 anos costumam precisar de acompanhamento mais próximo da próstata (homens) ou do assoalho pélvico (mulheres) — os mesmos princípios gerais, com ênfases diferentes conforme a fase.`,
    faq: `**Quanto de água devo beber por dia?**
A recomendação geral gira em torno de 2 litros, mas pode variar conforme idade, clima e nível de atividade física — vale confirmar com seu médico.

**Esses hábitos previnem todos os problemas urológicos?**
Ajudam a reduzir o risco de boa parte deles, mas não substituem o acompanhamento médico regular.

**A partir de que idade devo me preocupar mais com isso?**
Os hábitos valem para qualquer idade, mas o check-up regular ganha mais importância a partir dos 40–50 anos.

**Suplementos alimentares fazem mal para os rins?**
Alguns, em excesso ou sem orientação, podem sobrecarregar os rins — o uso deve ser sempre acompanhado por um profissional.

**Praticar exercício físico intenso pode prejudicar a saúde urológica?**
Em geral não, mas exige atenção redobrada à hidratação — atletas têm maior risco de infecção urinária e de cálculos se não repuserem líquido adequadamente.

**Existe um hábito que faz mais diferença do que os outros?**
A hidratação adequada costuma ser apontada como o hábito de maior impacto isolado, por influenciar diretamente a prevenção de infecções e cálculos renais.

**Café e chá contam como parte da hidratação diária?**
Ajudam parcialmente, mas não substituem a água, já que têm efeito diurético leve — o ideal é priorizar água como principal fonte de hidratação.

**Esses hábitos ajudam também na saúde sexual?**
Indiretamente, sim — hidratação, atividade física e controle de condições como diabetes e hipertensão têm relação direta com a saúde vascular, que impacta também a função sexual.`,
  },
  {
    num: '9.3', pillar: 'Saúde Geral',
    title: 'Urologia: Mitos e Verdades Que Todo Paciente Deveria Saber',
    seoTitle: 'Urologia: Mitos e Verdades Que Todo Paciente Deve Saber',
    metaDescription: 'Separamos mitos e verdades comuns sobre urologia — de cálculo renal a disfunção erétil — para você entender melhor sua saúde.',
    slug: 'urologia-mitos-e-verdades',
    keyword: 'mitos e verdades urologia',
    body: `A desinformação em urologia é comum — muitas vezes por vergonha de perguntar, outras por informação repassada sem checagem. Reunimos alguns dos mitos mais frequentes ouvidos no consultório.

#### Mito: "infecção urinária é só falta de higiene"

Higiene é um fator entre vários — anatomia, hidratação, hábitos e até questões hormonais também influenciam. Nem toda infecção urinária está relacionada à higiene.

#### Mito: "pedra no rim só dá em quem bebe pouca água"

A hidratação é um fator importante, mas dieta, genética e alterações metabólicas também têm papel relevante na formação de cálculos.

#### Mito: "disfunção erétil é sempre psicológica"

Na maioria dos casos, existe também um componente físico — cardiovascular, hormonal ou relacionado a medicamentos — que precisa ser investigado.

#### Mito: "cirurgia robótica é só para quem pode pagar muito caro"

A disponibilidade da técnica pode variar conforme convênio e tipo de procedimento — vale sempre confirmar as condições diretamente com a clínica antes de descartar a opção.

#### Por que tantos mitos persistem

Vergonha de perguntar, falta de informação de qualidade e a naturalização de sintomas ("deve ser normal") ajudam a manter esses mitos vivos — e a atrasar diagnósticos que poderiam ser mais simples se investigados cedo.

#### Mito: "criança não precisa de urologista, só pediatra resolve"

Mito. Algumas condições, como [fimose] persistente, testículo não descido ou infecções urinárias recorrentes na infância, têm melhor acompanhamento com um urologista pediátrico, em conjunto com o pediatra — não como substituição.

#### Mito: "homem não precisa de acompanhamento preventivo, só quando dói"

Mito, e um dos mais custosos. Muitas condições urológicas, incluindo alterações prostáticas, evoluem de forma silenciosa nas fases iniciais — esperar sentir dor para procurar o médico costuma significar procurar tarde demais.

#### Mito: "resultado de exame na internet substitui a consulta"

Mito. Comparar resultados de exames com valores de referência encontrados on-line, sem contexto clínico, pode gerar tanto alarme desnecessário quanto falsa sensação de segurança. Só o médico, com o histórico completo do paciente, consegue interpretar corretamente um resultado.`,
    faq: `**Existe algum mito perigoso que as pessoas ainda acreditam?**
Sim — acreditar que sintomas urinários vão "passar sozinhos" é um dos mais arriscados, porque atrasa diagnósticos.

**Onde posso confirmar se uma informação sobre urologia é verdadeira?**
O ideal é sempre confirmar com um médico urologista, em vez de se basear apenas em pesquisas na internet.

**Homens e mulheres têm os mesmos mitos sobre urologia?**
Alguns são comuns aos dois grupos, mas também existem mitos específicos, como os relacionados à [Urologia Feminina] e à disfunção erétil.

**Vale a pena perguntar tudo na consulta, mesmo o que parece bobo?**
Sim — nenhuma dúvida é boba quando o assunto é a sua saúde.

**Cirurgia robótica é só para casos graves?**
Não necessariamente — a indicação depende do tipo de procedimento e das características do caso, não apenas da gravidade da condição.

**Beber pouco líquido "treina" a bexiga a segurar mais urina?**
Mito, e um dos mais arriscados — beber pouco aumenta o risco de infecção urinária e de cálculos renais, sem qualquer benefício real.

**Suplementos "naturais" vendidos para próstata ou libido são seguros?**
Nem sempre — muitos não têm comprovação científica robusta e podem interagir com medicamentos. O uso deve ser sempre conversado com o médico.

**"Se não dói, não é grave" é verdade?**
Mito perigoso — várias condições urológicas, incluindo alguns tipos de câncer, podem evoluir sem dor nas fases iniciais, o que reforça a importância dos exames preventivos.

**Mulheres têm menos mitos sobre urologia do que homens?**
Não necessariamente — apenas costumam ser mitos diferentes, muitas vezes ligados à ideia equivocada de que sintomas urinários "fazem parte" de fases como pós-parto ou menopausa.`,
  },
  {
    num: '9.4', pillar: 'Saúde Geral',
    title: 'Vergonha de Falar Sobre Saúde Íntima? Veja Por Que Isso Pode Custar Caro',
    seoTitle: 'Vergonha de Falar Sobre Saúde Íntima? Veja Por Quê Importa',
    metaDescription: 'A vergonha de falar sobre saúde íntima faz muita gente adiar o urologista. Entenda os riscos e como a consulta é mais tranquila do que parece.',
    slug: 'vergonha-de-falar-sobre-saude-intima',
    keyword: 'vergonha de ir ao urologista',
    body: `Vergonha é, provavelmente, o motivo mais comum para adiar uma consulta urológica — mais até do que falta de tempo ou de informação. E é também um dos motivos mais fáceis de superar, uma vez que se entende o custo de esperar.

#### Por que sentimos vergonha

Saúde íntima ainda carrega tabu social, mesmo sendo, no fundo, uma questão de saúde como qualquer outra. Falar sobre disfunção erétil, incontinência ou sintomas genitais parece mais difícil do que falar sobre uma dor no joelho — mas não deveria ser.

#### O custo de adiar

Adiar a consulta por vergonha pode significar diagnóstico mais tardio, tratamento mais complexo e mais tempo convivendo com um desconforto que poderia ter sido resolvido antes.

#### O consultório é um espaço sem julgamento

Médicos urologistas lidam com esses temas todos os dias — o que para o paciente é único e constrangedor, para o profissional é rotina tratada com naturalidade e respeito.

#### Como se preparar emocionalmente para a consulta

Anotar os sintomas antes da consulta, levar alguém de confiança se ajudar, e lembrar que o objetivo do médico é ajudar, não julgar, são formas simples de reduzir a ansiedade antes do primeiro encontro.

#### Situações que se repetem no consultório

Um exemplo hipotético comum: um paciente adia por anos uma queixa de disfunção erétil, até que o desconforto no relacionamento pesa mais do que a vergonha da consulta — e, ao finalmente conversar sobre isso, descobre que o tratamento era mais simples do que imaginava. Esse tipo de cenário se repete com frequência, em diferentes versões, para homens e mulheres.

#### O primeiro passo costuma ser o mais difícil

Depois de decidir marcar a consulta, a maior parte da ansiedade já passou. O que resta é uma conversa — conduzida com respeito e sem pressa — sobre um sintoma que, na maioria das vezes, tem explicação simples e caminho de tratamento claro. Adiar não muda o sintoma; só adia o alívio de entender o que está acontecendo.

#### O que muda quando o assunto vira rotina

Pacientes que já passaram por consultas urológicas anteriores costumam relatar que a segunda vez é muito mais tranquila do que a primeira — o desconforto inicial dá lugar a uma relação de confiança com o médico, o que facilita inclusive futuras conversas sobre outros sintomas.

#### Vergonha não deveria ser motivo de diagnóstico tardio

No fim, o que está em jogo não é só o desconforto de uma conversa — é o tempo entre sentir o sintoma e buscar ajuda. Quanto menor esse intervalo, maiores costumam ser as chances de um tratamento simples e eficaz.`,
    faq: `**É normal sentir vergonha antes da primeira consulta urológica?**
Totalmente normal — é uma das reações mais comuns, e o consultório está preparado para acolher isso.

**O médico vai me julgar pelos meus sintomas?**
Não. A avaliação é clínica e feita com naturalidade, independentemente do tema.

**Posso pedir para conversar só sobre uma parte do meu sintoma primeiro?**
Sim — a consulta é conduzida no seu ritmo, e você pode expressar o que sente mais confortável em compartilhar a cada momento.

**A vergonha diminui com o tempo?**
Para a maioria dos pacientes, sim — depois da primeira consulta, o processo costuma ficar bem mais tranquilo.

**Isso acontece só com homens?**
Não — mulheres também relatam vergonha para falar sobre incontinência, dor pélvica ou infecções recorrentes. É um sentimento comum aos dois públicos.

**Existe alguma forma de me preparar antes de ir à consulta?**
Anotar os sintomas, quando começaram e o que os agrava ajuda a organizar as ideias e torna a conversa mais objetiva, reduzindo parte da ansiedade inicial.

**Posso pedir para trocar de assunto se ficar desconfortável durante a consulta?**
Sim — a consulta é conduzida no ritmo do paciente, e é sempre possível voltar a um ponto depois, se for mais confortável.

**A vergonha é um motivo válido para adiar exames preventivos, como o toque retal?**
Não deveria ser — é um exame rápido e simples, e o desconforto inicial é bem menor do que a maioria das pessoas imagina antes de passar por ele.`,
  },
];

/* ------------------------------------------------------------------ */
/* Markdown-lite -> HTML                                               */
/* ------------------------------------------------------------------ */

function mdInline(text) {
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
  text = text.replace(/\[([^\]]+)\]/g, (m, label) => {
    const href = LINKS[label];
    return href ? `<a href="${href}">${label}</a>` : label;
  });
  return text;
}

function bodyToHtml(md) {
  const blocks = md.trim().split(/\n\n+/);
  let html = '';
  blocks.forEach((block) => {
    block = block.trim();
    if (block.startsWith('#### ')) {
      html += `<h2>${mdInline(block.replace(/^#### /, ''))}</h2>\n`;
    } else if (/^- /.test(block)) {
      const items = block.split('\n').filter((l) => l.trim().startsWith('- '));
      html += '<ul>\n' + items.map((l) => `  <li>${mdInline(l.replace(/^- /, '').trim())}</li>`).join('\n') + '\n</ul>\n';
    } else if (block.startsWith('|')) {
      const rows = block.split('\n').map((r) => r.trim()).filter(Boolean);
      const parseRow = (r) => r.split('|').map((c) => c.trim()).filter((c) => c.length);
      const header = parseRow(rows[0]);
      const bodyRows = rows.slice(2).map(parseRow);
      html += '<div class="table-scroll"><table>\n<thead><tr>' +
        header.map((h) => `<th>${mdInline(h)}</th>`).join('') +
        '</tr></thead>\n<tbody>\n';
      bodyRows.forEach((r) => {
        html += '<tr>' + r.map((c) => `<td>${mdInline(c)}</td>`).join('') + '</tr>\n';
      });
      html += '</tbody>\n</table></div>\n';
    } else {
      html += `<p>${mdInline(block)}</p>\n`;
    }
  });
  return html;
}

function faqToHtml(md) {
  const pairs = md.trim().split(/\n\n+/);
  let html = '';
  const faqEntries = [];
  pairs.forEach((pair) => {
    const lines = pair.split('\n').filter(Boolean);
    const q = lines[0].replace(/^\*\*/, '').replace(/\*\*$/, '').trim();
    const a = lines.slice(1).join(' ').trim();
    faqEntries.push({ q, a });
    html += `<details class="faq-item">
  <summary>${mdInline(q)}<span class="faq-icon">+</span></summary>
  <p>${mdInline(a)}</p>
</details>\n`;
  });
  return { html, entries: faqEntries };
}

/* ------------------------------------------------------------------ */
/* Templates                                                           */
/* ------------------------------------------------------------------ */

function headHtml({ title, description, canonical }) {
  return `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${canonical}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/style.css">`;
}

function headerHtml(activeBlog) {
  return `<header class="site-header">
  <div class="announcement-bar">
    <p>Atendimento humanizado e especializado. Agende sua consulta.</p>
    <a href="${WHATSAPP}" target="_blank" rel="noopener" class="btn btn-ghost-sm">Agende agora</a>
  </div>

  <nav class="navbar">
    <a href="../index.html" class="logo">
      <img src="../assets/img/logo.png" alt="Ricardo Zerati - Urologia e Cirurgia Robótica" class="logo-img">
    </a>

    <ul class="nav-links">
      <li><a href="../index.html">Início</a></li>
      <li><a href="../index.html#areas">Áreas de Atuação</a></li>
      <li><a href="../index.html#sobre">Dr. Ricardo Zerati</a></li>
      <li><a href="index.html"${activeBlog ? ' class="active"' : ''}>Blog</a></li>
    </ul>

    <a href="${WHATSAPP}" target="_blank" rel="noopener" class="btn btn-primary">Agende sua Consulta</a>

    <button class="nav-toggle" aria-label="Abrir menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
</header>`;
}

function footerHtml() {
  return `<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-brand reveal">
        <a href="../index.html" class="logo">
          <img src="../assets/img/logo.png" alt="Ricardo Zerati - Urologia e Cirurgia Robótica" class="logo-img">
        </a>
        <p class="footer-desc">Atendimento urológico completo, com tecnologia de ponta e cuidado humano, em São José do Rio Preto.</p>
        <div class="footer-social">
          <a href="#" class="social-icon" aria-label="Facebook" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8.5h2V5.5h-2c-2 0-3.5 1.5-3.5 3.5v2H9.5v3H11.5v7h3v-7h2.2l.8-3H14.5V9c0-.3.2-.5.5-.5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
          </a>
          <a href="#" class="social-icon" aria-label="Instagram" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor"/></svg>
          </a>
          <a href="${WHATSAPP}" class="social-icon" aria-label="WhatsApp" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3.5a8.5 8.5 0 00-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1012 3.5z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.7 8.6c-.2.5-.2 1.1.3 1.9.8 1.5 2.1 2.8 3.7 3.5.7.3 1.3.3 1.8.1.4-.2.8-.6 1-1l.2-.5-1.9-1-.3.6c-.1.2-.3.2-.5.1-.7-.3-1.6-1.1-2-1.8-.1-.2-.1-.4.1-.5l.5-.4-.8-1.9-.6.1c-.5.1-1.1.3-1.5.8z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="footer-col reveal">
        <h4>Contato</h4>
        <ul class="footer-contact">
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s-7-6.3-7-11.5A7 7 0 0119 9.5C19 14.7 12 21 12 21z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="12" cy="9.5" r="2.3" stroke="currentColor" stroke-width="1.5"/></svg>
            <span>R. Voluntários de São Paulo, 3826, Vila Redentora, São José do Rio Preto - SP</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.5"/><path d="M12 7.5V12l3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>Segunda a sexta, 8h às 18h30</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3.5c1 0 2.7 2.3 2.7 3.3 0 .8-1.4 1.5-1.4 2.2 0 1.4 3.7 5.1 5.1 5.1.7 0 1.4-1.4 2.2-1.4 1 0 3.3 1.7 3.3 2.7 0 1.4-1.8 3.1-3.1 3.1C11.3 18.5 5.5 12.7 5.5 9.1c0-1.3 1.7-3.1 3.1-3.1z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
            <span>(17) 4009-9191</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.5"/><path d="M3.5 12h17M12 3.5c2.2 2.3 3.4 5.2 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.2-3.4-8.5s1.2-6.2 3.4-8.5z" stroke="currentColor" stroke-width="1.4"/></svg>
            <span>www.zeratiurologia.com.br</span>
          </li>
        </ul>
      </div>

      <div class="footer-col reveal">
        <h4>Links Rápidos</h4>
        <ul class="footer-links">
          <li><a href="index.html"><span class="chevron">›</span> Blog</a></li>
          <li><a href="${WHATSAPP}" target="_blank" rel="noopener" class="footer-link-highlight"><span class="chevron">›</span> Agendamento (WhatsApp)</a></li>
          <li><a href="../index.html#privacidade"><span class="chevron">›</span> Política de Privacidade</a></li>
        </ul>
      </div>

      <div class="footer-col reveal">
        <h4>Agende Agora</h4>
        <p class="footer-desc">Atendimento rápido e especializado.</p>
        <a href="${WHATSAPP}" class="btn btn-primary footer-whatsapp" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3.5a8.5 8.5 0 00-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1012 3.5z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.7 8.6c-.2.5-.2 1.1.3 1.9.8 1.5 2.1 2.8 3.7 3.5.7.3 1.3.3 1.8.1.4-.2.8-.6 1-1l.2-.5-1.9-1-.3.6c-.1.2-.3.2-.5.1-.7-.3-1.6-1.1-2-1.8-.1-.2-.1-.4.1-.5l.5-.4-.8-1.9-.6.1c-.5.1-1.1.3-1.5.8z" fill="currentColor"/>
          </svg>
          Agende sua consulta
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="footer-disclaimer">As informações deste site têm caráter educativo e não substituem a avaliação médica. O diagnóstico e o tratamento devem sempre ser definidos em consulta individual.</p>
      <p class="footer-copyright">© 2026 Dr. Ricardo Zerati — CRM 163.810 | RQE 91.772. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>`;
}

function pageShell({ head, body }) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
${head}
</head>
<body>

${body}

<script src="../js/main.js"></script>
</body>
</html>
`;
}

function postCardHtml(post) {
  const icon = PILLAR_ICON[post.pillar];
  return `      <a href="${post.slug}.html" class="post-card reveal">
        <span class="post-card-tag"><img src="../assets/img/${icon}" alt="">${post.pillar}</span>
        <h2>${post.title}</h2>
        <p>${post.metaDescription}</p>
        <span class="post-card-link">Ler artigo <span class="arrow-right">→</span></span>
      </a>`;
}

function renderListing() {
  const cards = posts.map(postCardHtml).join('\n\n');
  const head = headHtml({
    title: 'Blog | Dr. Ricardo Zerati — Urologia e Cirurgia Robótica',
    description: 'Conteúdo educativo sobre urologia geral, feminina, pediátrica, cirurgia robótica e saúde íntima, direto do consultório do Dr. Ricardo Zerati.',
    canonical: 'https://www.zeratiurologia.com.br/blog/',
  });
  const body = `${headerHtml(true)}

<main>
  <section class="blog-hero">
    <div class="blog-hero-inner">
      <p class="breadcrumb"><a href="../index.html">Início</a><span class="sep">/</span><span class="current">Blog</span></p>
      <h1>Blog</h1>
      <p>Conteúdo educativo sobre urologia geral, feminina, pediátrica, cirurgia robótica e saúde íntima — direto do consultório do Dr. Ricardo Zerati.</p>
    </div>
  </section>

  <section class="blog-listing">
    <div class="blog-listing-inner">
      <div class="blog-grid">
${cards}
      </div>
    </div>
  </section>
</main>

${footerHtml()}`;
  return pageShell({ head, body });
}

function faqJsonLd(entries) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((e) => ({
      '@type': 'Question',
      name: e.q,
      acceptedAnswer: { '@type': 'Answer', text: e.a.replace(/<[^>]+>/g, '') },
    })),
  };
  return JSON.stringify(data, null, 2);
}

function renderPost(post) {
  const icon = PILLAR_ICON[post.pillar];
  const bodyHtml = bodyToHtml(post.body);
  const { html: faqHtml, entries } = faqToHtml(post.faq);
  const head = `${headHtml({
    title: `${post.seoTitle} | Zerati Urologia`,
    description: post.metaDescription,
    canonical: `https://www.zeratiurologia.com.br/blog/${post.slug}`,
  })}
<script type="application/ld+json">
${faqJsonLd(entries)}
</script>`;

  const body = `${headerHtml(true)}

<main>
  <section class="post-hero">
    <div class="post-hero-bg-icon"><img src="../assets/img/${icon}" alt=""></div>
    <div class="post-hero-inner">
      <p class="breadcrumb">
        <a href="../index.html">Início</a><span class="sep">/</span>
        <a href="index.html">Blog</a><span class="sep">/</span>
        <span class="current">${post.pillar}</span>
      </p>
      <span class="post-tag"><img src="../assets/img/${icon}" alt="">${post.pillar}</span>
      <h1>${post.title}</h1>
      <p class="post-byline">Dr. Ricardo Zerati · Urologia, Cirurgia Robótica e Saúde Íntima</p>
    </div>
  </section>

  <section class="post-shell">
    <article class="article-body">
${bodyHtml}    </article>

    <section class="faq-section">
      <h2>Perguntas frequentes</h2>
${faqHtml}    </section>

    <div class="post-cta-box">
      <a href="${WHATSAPP}" class="btn btn-primary btn-lg" target="_blank" rel="noopener">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.5a8.5 8.5 0 00-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1012 3.5z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.7 8.6c-.2.5-.2 1.1.3 1.9.8 1.5 2.1 2.8 3.7 3.5.7.3 1.3.3 1.8.1.4-.2.8-.6 1-1l.2-.5-1.9-1-.3.6c-.1.2-.3.2-.5.1-.7-.3-1.6-1.1-2-1.8-.1-.2-.1-.4.1-.5l.5-.4-.8-1.9-.6.1c-.5.1-1.1.3-1.5.8z" fill="currentColor"/>
        </svg>
        Agende sua consulta
      </a>
      <p class="post-cta-info">
        <span>🌐 www.zeratiurologia.com.br</span>
        <span>📱 WhatsApp: (17) 4009-9191</span>
        <span>📍 São José do Rio Preto — SP</span>
      </p>
    </div>

    <p class="post-disclaimer">As informações deste artigo têm caráter educativo e não substituem a avaliação médica individual.</p>
  </section>
</main>

${footerHtml()}`;
  return pageShell({ head, body });
}

/* ------------------------------------------------------------------ */
/* Write files                                                         */
/* ------------------------------------------------------------------ */

if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });

fs.writeFileSync(path.join(BLOG_DIR, 'index.html'), renderListing(), 'utf8');
console.log('Wrote blog/index.html');

posts.forEach((post) => {
  const outPath = path.join(BLOG_DIR, `${post.slug}.html`);
  fs.writeFileSync(outPath, renderPost(post), 'utf8');
  console.log(`Wrote blog/${post.slug}.html`);
});

console.log(`\nDone. ${posts.length} posts + listing generated.`);
