// Gerado por build-hypotheses.py a partir de drafts/tratamento-*.json. Não editar à mão.
window.TREATMENTS = [
 {
  "id": "tx-monitorizacao-ativa-depressao",
  "hypotheses": [
   "h-depressao-major",
   "h-distimia"
  ],
  "name": "Monitorização ativa (vigilância) na depressão ligeira",
  "category": "outra",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "5 a 18 anos (NG134)",
  "line": 1,
  "summary": "Reavaliação marcada, sem intervenção específica, para a criança ou jovem com depressão ligeira que não quer intervenção ou que pode recuperar sem ela. Evita iniciar logo psicoterapia ou medicação numa forma ligeira.",
  "when": "NG134: depressão ligeira diagnosticada em que o doente não quer intervenção ou, no parecer do clínico, pode recuperar sem ela; nova avaliação normalmente em 2 semanas (rec. 1.5.1). Se a depressão persistir às 2 semanas e sem comorbilidade significativa nem ideação ou plano suicida ativos, passar a psicoterapia (5-11 anos: rec. 1.5.6; 12-18 anos: rec. 1.5.7). Não usar antidepressivo como tratamento inicial (rec. 1.5.3). AACAP 2023: educação/apoio breve para formas subsindrómicas e ligeiras.",
  "format": "Consultas de reavaliação (criança/jovem e família); contactar quem falta às consultas (rec. 1.5.2).",
  "sessions": {
   "typical": null,
   "text": "A fonte não fixa número de sessões: apenas nova avaliação 'normalmente dentro de 2 semanas' (NG134 rec. 1.5.1)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Reavaliação cerca das 2 semanas",
    "description": "Voltar a avaliar a depressão e o risco. Registar se melhorou, se está igual ou se agravou."
   },
   {
    "id": "m2",
    "title": "Contacto se faltar",
    "description": "Se a criança ou jovem não comparecer ao seguimento, o profissional deve contactá-la (rec. 1.5.2)."
   },
   {
    "id": "m3",
    "title": "Se persistir: escolher psicoterapia",
    "description": "Discutir as opções de psicoterapia por idade (ver itens de TCC digital, grupo e individual) e acordar com a família."
   },
   {
    "id": "m4",
    "title": "Se não houver resposta a 2-3 meses de psicoterapia",
    "description": "Rever em equipa de pedopsiquiatria e seguir as recomendações da depressão moderada a grave (rec. 1.5.10 e 1.5.11)."
   }
  ],
  "source": "NICE NG134 (depressão em crianças e jovens), publicada 25/06/2019, última revisão 07/05/2024, https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (rec. 1.5.1, 1.5.2, 1.5.3, 1.5.6, 1.5.7, 1.5.10, 1.5.11); AACAP, Walter HJ et al., Clinical Practice Guideline for the Assessment and Treatment of Children and Adolescents With Major and Persistent Depressive Disorders, JAACAP 2023;62(5):479-502, https://pubmed.ncbi.nlm.nih.gov/36273673/ (texto integral lido numa cópia PDF alojada em hscsnhealthplan.org) (nota de rodapé d dos Treatment Statements: educação/apoio breve para formas subsindrómicas e ligeiras)"
 },
 {
  "id": "tx-psicoeducacao-apoio-depressao",
  "hypotheses": [
   "h-depressao-major",
   "h-distimia"
  ],
  "name": "Psicoeducação e apoio breve à criança e à família (depressão)",
  "category": "psicoeducacao",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "5 a 18 anos (NG134); DGS 2009 sem idades",
  "line": 1,
  "summary": "Explicação da depressão e do plano de tratamento, escuta e aconselhamento da família, com materiais de autoajuda apenas dentro de um pacote de cuidados planeado e apoiado. É o apoio de base em qualquer gravidade e a opção inicial das formas ligeiras.",
  "when": "AACAP 2023: educação/apoio breve é a sequência prudente para formas subsindrómicas e ligeiras (psicoterapia e/ou medicação para as moderadas e graves). NG134: perguntar sempre sobre materiais de autoajuda que a família já usa e só recomendar autoajuda como parte de um pacote de cuidados apoiado e planeado. DGS/CNSM 2009 (cuidados de saúde primários): disponibilidade para ouvir e aconselhamento familiar.",
  "format": "Individual e com os pais, em consulta; integra qualquer outra abordagem.",
  "sessions": {
   "typical": null,
   "text": "As fontes lidas não indicam número de sessões para este apoio; é contínuo ao longo do acompanhamento (componentes, sem ordem fixa)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Mostrar disponibilidade para ouvir",
    "description": "Ouvir as preocupações da criança ou do adolescente, avaliar causas orgânicas e risco de suicídio (DGS 2009)."
   },
   {
    "id": "m2",
    "title": "Aconselhamento familiar",
    "description": "Sensibilizar os pais para o sofrimento do filho e discutir estratégias para lidar com o problema, por exemplo a valorização de competências (DGS 2009)."
   },
   {
    "id": "m3",
    "title": "Materiais de autoajuda e apoios já usados",
    "description": "Perguntar sobre folhetos, linhas de apoio, grupos de pares e outros recursos que a família use (NG134 rec. 1.1.9); só recomendar autoajuda dentro de um pacote apoiado e planeado (rec. 1.1.10)."
   },
   {
    "id": "m4",
    "title": "Formulação e rede de apoio",
    "description": "Antes do tratamento, avaliar com o jovem a rede social à sua volta e escrever uma formulação dos fatores que contribuem para a depressão (NG134 rec. 1.1.20)."
   },
   {
    "id": "m5",
    "title": "Articulação com a rede social e comunitária",
    "description": "Ligar a família a atividades organizadas locais (ex.: escuteiros, ATL), segundo as recomendações da DGS/CNSM de 2009."
   }
  ],
  "source": "NICE NG134 (depressão em crianças e jovens), publicada 25/06/2019, última revisão 07/05/2024, https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (rec. 1.1.9, 1.1.10, 1.1.20); AACAP, Walter HJ et al., Clinical Practice Guideline for the Assessment and Treatment of Children and Adolescents With Major and Persistent Depressive Disorders, JAACAP 2023;62(5):479-502, https://pubmed.ncbi.nlm.nih.gov/36273673/ (texto integral lido numa cópia PDF alojada em hscsnhealthplan.org) (nota de rodapé d dos Treatment Statements); Coordenação Nacional para a Saúde Mental, Saúde Mental Infantil e Juvenil nos Cuidados de Saúde Primários: Recomendações para a Prática Clínica, Lisboa, 2009 (alojado no site da DGS, https://www.dgs.pt/accao-de-saude-para-criancas-e-jovens-em-risco/ficheiros-externos/pub-saude-mentalrecomendacoes-para-a-pratica-clinica-1-pdf.aspx), secções Perturbações da ansiedade e Perturbações do humor (documento de 2009, anterior às guidelines atuais), secção Perturbações do humor, Intervenção"
 },
 {
  "id": "tx-estilo-de-vida-depressao",
  "hypotheses": [
   "h-depressao-major",
   "h-distimia"
  ],
  "name": "Exercício, sono e alimentação (aconselhamento de estilo de vida na depressão)",
  "category": "estilo-de-vida",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "5 a 18 anos (NG134)",
  "line": null,
  "summary": "Aconselhamento sobre exercício físico regular, higiene do sono, gestão da ansiedade e alimentação equilibrada, oferecido a toda a criança ou jovem com depressão. Complementa, e não substitui, a psicoterapia.",
  "when": "NG134 (princípios de tratamento em todos os contextos): oferecer a todos os doentes com depressão. O programa de exercício estruturado e supervisionado é para ser 'considerado'.",
  "format": "Aconselhamento em consulta; programa de exercício supervisionado, tipicamente até 3 sessões por semana, de duração moderada (45 minutos a 1 hora), durante 10 a 12 semanas.",
  "sessions": {
   "typical": null,
   "text": "Exercício: até 3 sessões por semana de 45 minutos a 1 hora durante 10 a 12 semanas (NG134 rec. 1.1.27). Sono, ansiedade e alimentação: aconselhamento, sem número de sessões (componentes, sem ordem fixa)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Exercício físico regular",
    "description": "Informar sobre os benefícios e encorajar um programa estruturado e supervisionado (até 3 sessões por semana, 45 minutos a 1 hora, 10 a 12 semanas)."
   },
   {
    "id": "m2",
    "title": "Higiene do sono",
    "description": "Dar conselhos de higiene do sono."
   },
   {
    "id": "m3",
    "title": "Gestão da ansiedade",
    "description": "Dar conselhos de gestão da ansiedade."
   },
   {
    "id": "m4",
    "title": "Alimentação equilibrada",
    "description": "Dar conselhos sobre nutrição e os benefícios de uma dieta equilibrada."
   }
  ],
  "source": "NICE NG134 (depressão em crianças e jovens), publicada 25/06/2019, última revisão 07/05/2024, https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (rec. 1.1.27, 1.1.28, 1.1.29)"
 },
 {
  "id": "tx-escola-depressao",
  "hypotheses": [
   "h-depressao-major",
   "h-distimia"
  ],
  "name": "Intervenção escolar e prevenção do bullying (depressão)",
  "category": "escolar",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "5 a 18 anos (NG134)",
  "line": null,
  "summary": "Articulação com a escola para facilitar a integração no grupo de pares e o investimento em atividades lúdicas e desportivas, e ação concertada contra o bullying quando este contribui para a depressão. Faz parte do plano em qualquer gravidade.",
  "when": "NG134: quando o bullying é considerado fator da depressão, CAMHS, cuidados primários e educação devem trabalhar em conjunto (rec. 1.1.21); comorbilidades e problemas de desenvolvimento, sociais e educativos devem ser tratados em sequência ou em paralelo (rec. 1.1.25). DGS/CNSM 2009: planear intervenções ao nível da escola.",
  "format": "Contacto do clínico e da família com a escola; psicoterapia pode ser prestada em escolas e faculdades (NG134 rec. 1.5.9).",
  "sessions": {
   "typical": null,
   "text": "Sem número de sessões nas fontes lidas (componentes, sem ordem fixa)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Identificar o papel do bullying",
    "description": "Perguntar diretamente à criança e aos pais sobre bullying ou abuso (NG134 rec. 1.1.7)."
   },
   {
    "id": "m2",
    "title": "Estratégias antibullying em conjunto",
    "description": "Se o bullying contribui, os serviços de saúde mental, os cuidados primários e a escola desenvolvem estratégias em colaboração (rec. 1.1.21)."
   },
   {
    "id": "m3",
    "title": "Integração no grupo de pares",
    "description": "Planear com a escola medidas que facilitem a integração e o investimento em atividades lúdicas e desportivas (DGS 2009)."
   },
   {
    "id": "m4",
    "title": "Problemas de aprendizagem e outros",
    "description": "Avaliar e tratar em paralelo as dificuldades de desenvolvimento, sociais e educativas, em articulação com a escola (rec. 1.1.25)."
   }
  ],
  "source": "NICE NG134 (depressão em crianças e jovens), publicada 25/06/2019, última revisão 07/05/2024, https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (rec. 1.1.7, 1.1.21, 1.1.25, 1.5.9); Coordenação Nacional para a Saúde Mental, Saúde Mental Infantil e Juvenil nos Cuidados de Saúde Primários: Recomendações para a Prática Clínica, Lisboa, 2009 (alojado no site da DGS, https://www.dgs.pt/accao-de-saude-para-criancas-e-jovens-em-risco/ficheiros-externos/pub-saude-mentalrecomendacoes-para-a-pratica-clinica-1-pdf.aspx), secções Perturbações da ansiedade e Perturbações do humor (documento de 2009, anterior às guidelines atuais), secção Perturbações do humor, Intervenção"
 },
 {
  "id": "tx-apoio-parental-depressao",
  "hypotheses": [
   "h-depressao-major",
   "h-distimia"
  ],
  "name": "Apoio aos pais e tratamento paralelo da depressão parental",
  "category": "parental",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "pais de crianças e jovens dos 5 aos 18 anos (NG134)",
  "line": null,
  "summary": "Avaliar a depressão, o consumo de substâncias ou outros problemas de saúde mental dos pais e apoiar a sua vinculação ao tratamento do filho. Pode ser necessário tratar a depressão dos pais em paralelo para o filho melhorar.",
  "when": "NG134: considerar sempre a possibilidade de depressão ou outros problemas dos pais (rec. 1.1.12); tratar em paralelo se identificado (rec. 1.1.26); o terapeuta deve criar aliança de tratamento com a família (rec. 1.1.24).",
  "format": "Pais, em consulta própria ou com referenciação a serviços de adultos.",
  "sessions": {
   "typical": null,
   "text": "Sem número de sessões nas fontes lidas (componentes, sem ordem fixa)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Identificar problemas nos pais",
    "description": "Considerar depressão parental, consumo de substâncias ou outros problemas de saúde mental (rec. 1.1.12)."
   },
   {
    "id": "m2",
    "title": "Plano para tratamento dos pais",
    "description": "Se houver necessidade, fazer um plano para obter tratamento, tendo em conta a disponibilidade de serviços de adultos (rec. 1.1.26)."
   },
   {
    "id": "m3",
    "title": "Aliança com a família",
    "description": "Criar aliança terapêutica com a família; se for difícil, considerar outro terapeuta (rec. 1.1.24)."
   },
   {
    "id": "m4",
    "title": "Terapia para pais ou família se não houver resposta",
    "description": "Após revisão multidisciplinar, considerar terapia adicional para os pais ou familiares quando fatores como discórdia familiar ou doença mental parental impedem a resposta (rec. 1.6.9)."
   }
  ],
  "source": "NICE NG134 (depressão em crianças e jovens), publicada 25/06/2019, última revisão 07/05/2024, https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (rec. 1.1.12, 1.1.24, 1.1.26, 1.6.9)"
 },
 {
  "id": "tx-tcc-digital-depressao",
  "hypotheses": [
   "h-depressao-major",
   "h-distimia"
  ],
  "name": "Terapia cognitivo-comportamental digital (depressão ligeira)",
  "category": "psicoterapia",
  "branches": [
   "adol"
  ],
  "ages": "12 a 18 anos (oferecer, NG134 rec. 1.5.7)",
  "line": 1,
  "summary": "TCC administrada por computador, tablet ou telemóvel, com ou sem apoio de um profissional. É uma das opções de primeira escolha na depressão ligeira que persiste após vigilância.",
  "when": "NG134, depressão ligeira que persiste após 2 semanas de vigilância e sem comorbilidade significativa nem ideação ou plano suicida ativos: 5-11 anos, considerar (rec. 1.5.6); 12-18 anos, oferecer a escolha entre TCC digital, TCC em grupo, apoio não diretivo em grupo ou terapia interpessoal em grupo, por cerca de 2 a 3 meses (rec. 1.5.7).",
  "format": "Individual, digital; alguns programas têm contacto com profissional, outros não. Programas citados: SPARX, Stressbusters e Grasp the Opportunity (só o Stressbusters foi testado no Reino Unido).",
  "sessions": {
   "typical": null,
   "text": "A NG134 não indica número de sessões; o período de psicoterapia na depressão ligeira em 12-18 anos é de cerca de 2 a 3 meses. Os módulos abaixo são os componentes comuns dos programas digitais, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Psicoeducação",
    "description": "Informação sobre a depressão."
   },
   {
    "id": "m2",
    "title": "Relaxamento",
    "description": "Treino de relaxamento."
   },
   {
    "id": "m3",
    "title": "Análise do comportamento e ativação comportamental",
    "description": "Analisar o comportamento e aumentar atividades gratificantes."
   },
   {
    "id": "m4",
    "title": "Comunicação e competências interpessoais básicas",
    "description": "Treino de comunicação e de competências interpessoais básicas."
   },
   {
    "id": "m5",
    "title": "Reconhecimento e gestão de emoções",
    "description": "Reconhecer emoções e lidar com emoções fortes."
   },
   {
    "id": "m6",
    "title": "Resolução de problemas",
    "description": "Treino de resolução de problemas."
   },
   {
    "id": "m7",
    "title": "Reestruturação cognitiva",
    "description": "Identificar pensamentos e desafiar os pensamentos negativos ou pouco úteis."
   },
   {
    "id": "m8",
    "title": "Mindfulness",
    "description": "Treino de atenção plena."
   },
   {
    "id": "m9",
    "title": "Prevenção de recaída",
    "description": "Preparar o fim do programa e os sinais de alerta."
   }
  ],
  "source": "NICE NG134 (depressão em crianças e jovens), publicada 25/06/2019, última revisão 07/05/2024, https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (rec. 1.5.6, 1.5.7; secção 'Terms used in this guideline', Digital CBT)"
 },
 {
  "id": "tx-psicoterapia-grupo-depressao-ligeira",
  "hypotheses": [
   "h-depressao-major",
   "h-distimia"
  ],
  "name": "Psicoterapia em grupo (TCC, terapia interpessoal ou apoio não diretivo) na depressão ligeira",
  "category": "psicoterapia",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "5 a 18 anos (NG134)",
  "line": 1,
  "summary": "Tratamento psicológico em grupo para a depressão ligeira que persiste após vigilância: TCC em grupo, terapia interpessoal em grupo ou apoio não diretivo (NDST) em grupo. Pode ser prestado em escolas, cuidados primários, serviços sociais ou no setor associativo.",
  "when": "NG134: 5-11 anos, considerar TCC em grupo, NDST em grupo ou terapia interpessoal em grupo (rec. 1.5.6); 12-18 anos, oferecer a escolha entre TCC digital, TCC em grupo, NDST em grupo ou terapia interpessoal em grupo, por cerca de 2 a 3 meses (rec. 1.5.7). Se não servirem, considerar TCC individual ou terapia familiar de vinculação (rec. 1.5.6 e 1.5.8). Sem resposta aos 2 a 3 meses, referenciar à pedopsiquiatria (rec. 1.5.10).",
  "format": "Grupo; duração limitada de cerca de 2 a 3 meses nos 12-18 anos.",
  "sessions": {
   "typical": null,
   "text": "A NG134 não indica número de sessões para a terapia em grupo; indica duração limitada de cerca de 2 a 3 meses (12-18 anos). A fonte não descreve os temas por sessão."
  },
  "modules": [],
  "source": "NICE NG134 (depressão em crianças e jovens), publicada 25/06/2019, última revisão 07/05/2024, https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (rec. 1.5.6, 1.5.7, 1.5.8, 1.5.9, 1.5.10; tabela 1)"
 },
 {
  "id": "tx-tcc-individual-depressao",
  "hypotheses": [
   "h-depressao-major",
   "h-distimia"
  ],
  "name": "Terapia cognitivo-comportamental individual (depressão)",
  "category": "psicoterapia",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "5 a 18 anos (NG134)",
  "line": 1,
  "summary": "TCC estruturada que combina reestruturação cognitiva e ativação comportamental, com agenda semanal e trabalhos de casa. É a psicoterapia de primeira escolha na depressão moderada a grave do adolescente.",
  "when": "NG134: 12-18 anos com depressão moderada a grave, oferecer TCC individual durante pelo menos 3 meses (rec. 1.6.5); 5-11 anos, considerar TCC individual entre outras opções (rec. 1.6.4); em ambos, pode ser combinada com fluoxetina. AACAP 2023 sugere TCC e terapia interpessoal para depressão major ou persistente (2I).",
  "format": "Individual, com colaboração da família e, nalguns casos, da escola; trabalhar só com o jovem ou também com familiares depende do caso. Terapeuta com formação em saúde mental da infância e adolescência e na modalidade (NG134 rec. 1.1.22 e 1.1.23).",
  "sessions": {
   "typical": null,
   "text": "AACAP 2023: melhoria sintomática e funcional visada em 12 a 24 sessões (ou menos se os sintomas forem ligeiros). NG134: pelo menos 3 meses (12-18 anos, moderada a grave); se não houver resposta após 4 a 6 sessões, rever em equipa multidisciplinar (rec. 1.6.8). Os módulos seguem as fases típicas descritas pela AACAP."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Fase inicial: avaliação e aliança",
    "description": "Avaliar o problema, criar aliança terapêutica e explicar o curso do tratamento."
   },
   {
    "id": "m2",
    "title": "Educação sobre a depressão",
    "description": "Informar sobre a natureza, a causa e a evolução da depressão, com uma compreensão cognitivo-comportamental dos sintomas como justificação do tratamento."
   },
   {
    "id": "m3",
    "title": "Tratamento ativo",
    "description": "Reestruturação cognitiva, ativação comportamental e automonitorização, com agenda semanal e trabalhos de casa. Conforme o caso: definição de objetivos, relaxamento, resolução de problemas, assertividade, gestão de conflitos, comunicação e regulação afetiva."
   },
   {
    "id": "m4",
    "title": "Generalização e prevenção de recaída",
    "description": "Consolidar as competências e preparar a prevenção de recaída; a frequência das sessões diminui à medida que o jovem assume a responsabilidade."
   },
   {
    "id": "m5",
    "title": "Sessões de reforço",
    "description": "Podem ser úteis depois do fim do tratamento para manter as competências a longo prazo."
   }
  ],
  "source": "AACAP, Walter HJ et al., Clinical Practice Guideline for the Assessment and Treatment of Children and Adolescents With Major and Persistent Depressive Disorders, JAACAP 2023;62(5):479-502, https://pubmed.ncbi.nlm.nih.gov/36273673/ (texto integral lido numa cópia PDF alojada em hscsnhealthplan.org) (Treatment Statement 1, secção Implementation, texto lido; 12 a 24 sessões e fases do tratamento); NICE NG134 (depressão em crianças e jovens), publicada 25/06/2019, última revisão 07/05/2024, https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (rec. 1.1.22, 1.1.23, 1.6.4, 1.6.5, 1.6.8)"
 },
 {
  "id": "tx-tcc-depressao-tads",
  "hypotheses": [
   "h-depressao-major"
  ],
  "name": "TCC para depressão do adolescente: programa TADS (15 sessões em 12 semanas)",
  "category": "psicoterapia",
  "branches": [
   "adol"
  ],
  "ages": "adolescentes (programa TADS; NG134 12 a 18 anos)",
  "line": 1,
  "summary": "Manual de TCC do Treatment for Adolescents with Depression Study, com sessões semanais individuais, duas sessões psicoeducativas para os pais e sessões familiares conjuntas. Dá a ordem típica dos temas semana a semana na fase aguda e continua com consolidação e manutenção.",
  "when": "Depressão major do adolescente em que a guideline recomenda TCC individual (NG134 rec. 1.6.5; AACAP 2023). O programa TADS é um manual publicado; a NG134 e a AACAP 2023 não o nomeiam. Crises (família, escola, ideação suicida, desesperança) têm prioridade sobre o tema planeado.",
  "format": "Fase I (aguda, 12 semanas): 15 sessões, sendo 2 em cada uma das semanas 1, 3 e 5 (semana 1: 2 sessões de 1 hora; semanas 3 e 5: 45 min com o adolescente e 45 min com os pais), 1 por semana nas restantes. Fase II (6 semanas): 3 sessões de consolidação de 50 min se resposta completa, ou 6 se resposta parcial. Fase III (18 semanas): visitas de 50 min de 6 em 6 semanas, para prevenção de recaída.",
  "sessions": {
   "typical": 15,
   "text": "15 sessões na fase aguda (12 semanas), mais 3 ou 6 sessões de consolidação (fase II) e visitas de manutenção de 6 em 6 semanas durante 18 semanas (fase III), segundo o manual TADS de 2000 (© 2005 Duke)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Semana 1: racional e definição de objetivos; monitorização do humor",
    "description": "Sessão conjunta com pais e adolescente (modelo de depressão, racional do tratamento, papel dos pais, objetivos) e sessão de monitorização do humor com o 'termómetro emocional'."
   },
   {
    "id": "m2",
    "title": "Semana 2: definição de objetivos (continuação)",
    "description": "Continuar a fixar objetivos acordados e a relacionar pensamentos, comportamentos e emoções com o humor deprimido."
   },
   {
    "id": "m3",
    "title": "Semana 3: aumentar atividades agradáveis (+ sessão psicoeducativa para os pais)",
    "description": "Planear atividades gratificantes com registo de domínio e prazer; os pais têm uma sessão própria de 45 min."
   },
   {
    "id": "m4",
    "title": "Semana 4: resolução de problemas",
    "description": "Ensinar um método de resolução de problemas interpessoais."
   },
   {
    "id": "m5",
    "title": "Semana 5: pensamentos automáticos e distorções cognitivas (+ sessão psicoeducativa para os pais)",
    "description": "Identificar pensamentos automáticos e distorções cognitivas; segunda sessão psicoeducativa dos pais."
   },
   {
    "id": "m6",
    "title": "Semana 6: pensamentos alternativos realistas",
    "description": "Formular contrapensamentos realistas. Entre as semanas 6 e 7 o terapeuta faz a formulação do caso e o plano de tratamento."
   },
   {
    "id": "m7",
    "title": "Semanas 7 a 11: competências sociais, regulação afetiva e sessões familiares",
    "description": "Um tema por semana conforme a necessidade: competências sociais (interação, assertividade, comunicação), regulação afetiva (relaxamento, controlo de impulsos) ou sessão familiar (mínimo 1, máximo 3 sessões conjuntas)."
   },
   {
    "id": "m8",
    "title": "Semana 12: balanço e transição para a fase II",
    "description": "Rever progresso e competências úteis com o adolescente e os pais e planear a fase II."
   },
   {
    "id": "m9",
    "title": "Fase II (semanas 13 a 18): consolidação",
    "description": "Aplicar as competências a situações novas; sem novas competências se resposta completa. A sessão da semana 18 faz o plano de prevenção de recaída."
   },
   {
    "id": "m10",
    "title": "Fase III (18 semanas): manutenção",
    "description": "Visitas de 6 em 6 semanas centradas na prevenção de recaída, sem novas competências."
   }
  ],
  "source": "Curry JF, Wells KC, Brent DA, Clarke GN, Rohde P, Albano AM, Reinecke MA, Benazon N, March JS et al., Treatment for Adolescents with Depression Study (TADS) Cognitive Behavior Therapy Manual: Introduction, Rationale, and Adolescent Sessions, 15/03/2000, © 2005 Duke University Medical Center, https://aaronkrasner.com/wp-content/uploads/2017/10/TADS_CBT.pdf (cópia alojada num site de terceiros; secções 'Recommended Sequence of CBT Topics in TADS Stage I', 'Phases of Acute Treatment', 'Stage II', 'Stage III' e agenda de sessões); NICE NG134 (depressão em crianças e jovens), publicada 25/06/2019, última revisão 07/05/2024, https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (rec. 1.6.5)"
 },
 {
  "id": "tx-tip-a-depressao",
  "hypotheses": [
   "h-depressao-major",
   "h-distimia"
  ],
  "name": "Terapia interpessoal para adolescentes (TIP-A)",
  "category": "psicoterapia",
  "branches": [
   "adol"
  ],
  "ages": "12 a 18 anos",
  "line": 2,
  "summary": "Psicoterapia limitada no tempo que liga o humor deprimido a acontecimentos nas relações significativas do adolescente (luto, disputas, transições de papel ou défices interpessoais) e treina comunicação e resolução de problemas. Dirigida a adolescentes de 12 a 18 anos com depressão unipolar não psicótica.",
  "when": "NG134: 12-18 anos com depressão moderada a grave, quando a TCC individual não responderia às necessidades ou não é adequada, considerar TIP-A (rec. 1.6.6); depressão ligeira, a terapia interpessoal em grupo é uma das opções (rec. 1.5.7). AACAP 2023: sugere TCC e terapia interpessoal. Os autores do capítulo não a recomendam em adolescentes com atividade suicida ou homicida, psicose, bipolaridade ou abuso ativo de substâncias.",
  "format": "Individual, 1 sessão por semana; pais convidados a pelo menos 1 sessão na fase inicial (a participação dos pais é recomendada mas não obrigatória). Sessões com verificação do humor (escala de 1 a 10) e monitorização semanal da ideação suicida.",
  "sessions": {
   "typical": 12,
   "text": "AACAP 2023: tipicamente 1 vez por semana durante 12 semanas, com 3 fases (inicial, intermédia, final); o capítulo de Mufson et al. descreve cada fase com cerca de 4 sessões (fase inicial: sessões 1 a 4)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Sessão 1: avaliação dos sintomas, psicoeducação e papel de doente limitado",
    "description": "Verificação dos sintomas e avaliação do humor, explicação da depressão ao adolescente e aos pais e atribuição do 'papel de doente limitado' (continuar a ir à escola e a participar, sem culpar pelo desempenho)."
   },
   {
    "id": "m2",
    "title": "Fase inicial (sessões 1 a 4): inventário interpessoal e formulação",
    "description": "Rever as relações significativas atuais e passadas e a sua carga emocional; ligar a situação interpessoal ao humor e escolher um dos 4 problemas (luto, disputas, transições de papel, défices interpessoais)."
   },
   {
    "id": "m3",
    "title": "Contrato de tratamento e sessão com os pais",
    "description": "Acordar com o adolescente o problema interpessoal foco do tratamento; ≥1 sessão com os pais na fase inicial para educação sobre depressão e sobre a TIP-A."
   },
   {
    "id": "m4",
    "title": "Fase intermédia (cerca das sessões 5 a 8): trabalhar o problema interpessoal",
    "description": "Ligar o humor a acontecimentos da semana, trabalhar o luto, analisar a comunicação, treinar resolução de problemas e tomada de perspetiva, e fazer 'experiências interpessoais' entre sessões."
   },
   {
    "id": "m5",
    "title": "Fase final (cerca das sessões 9 a 12): generalização e prevenção de recaída",
    "description": "Rever o progresso, generalizar competências e identificar sinais de alerta de depressão que justifiquem mais tratamento; discutir os sentimentos sobre o fim da terapia."
   }
  ],
  "source": "AACAP, Walter HJ et al., Clinical Practice Guideline for the Assessment and Treatment of Children and Adolescents With Major and Persistent Depressive Disorders, JAACAP 2023;62(5):479-502, https://pubmed.ncbi.nlm.nih.gov/36273673/ (texto integral lido numa cópia PDF alojada em hscsnhealthplan.org) (Treatment Statement 1, Implementation, IPT: 12 semanas, 3 fases); Mufson L, Verdeli H, Clougherty KF, Shoum KA, How to Use Interpersonal Psychotherapy for Depressed Adolescents (IPT-A), in Treating Child and Adolescent Depression (cópia parcial alojada em https://neupsykey.com/how-to-use-interpersonal-psychotherapy-for-depressed-adolescents-ipt-a/, só lida a introdução, as fases e as tarefas da sessão 1; o resto exige subscrição); NICE NG134 (depressão em crianças e jovens), publicada 25/06/2019, última revisão 07/05/2024, https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (rec. 1.5.7, 1.6.6)"
 },
 {
  "id": "tx-tip-familiar-esc-depressao",
  "hypotheses": [
   "h-depressao-major"
  ],
  "name": "Terapia interpessoal de base familiar (TIP-F) para crianças dos 5 aos 11 anos",
  "category": "psicoterapia",
  "branches": [
   "esc"
  ],
  "ages": "5 a 11 anos",
  "line": 2,
  "summary": "Adaptação da terapia interpessoal em que os pais participam nas sessões semanais, individualmente e em díade com a criança, conforme a fase do tratamento. Foi estudada num ensaio aberto com 16 pré-adolescentes.",
  "when": "NG134: 5-11 anos com depressão moderada a grave, considerar TIP de base familiar, terapia familiar, psicoterapia psicodinâmica ou TCC individual (rec. 1.6.4). A evidência da TIP-F na fonte é só um ensaio aberto pequeno.",
  "format": "Sessões semanais divididas entre encontros individuais com a criança e encontros conjuntos ou em díade com os pais, consoante a fase.",
  "sessions": {
   "typical": 14,
   "text": "No ensaio aberto (Dietz et al. 2008), as famílias que completaram o tratamento tiveram em média 14 sessões (intervalo de 9 a 22). A fase I teve tipicamente 4 sessões e a fase II foi de duração aberta, determinada pela melhoria."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Fase I (tipicamente 4 sessões): sintomas, inventário interpessoal e problema-foco",
    "description": "A criança revê os sintomas depressivos, faz o inventário das relações importantes e identifica um dos 4 problemas (luto, disputa familiar, transição familiar, défices interpessoais). Com os pais: preocupações, stresses familiares e papel de doente limitado."
   },
   {
    "id": "m2",
    "title": "Fase I: contrato e objetivos",
    "description": "Com a criança e os pais, estabelecer o contrato e os objetivos do tratamento."
   },
   {
    "id": "m3",
    "title": "Fase II (duração aberta): trabalhar o problema-foco",
    "description": "A criança discute dificuldades interpessoais recentes, analisa a comunicação e as decisões e pratica novas respostas em role-play; nas sessões em díade comunica emoções e preocupações aos pais."
   },
   {
    "id": "m4",
    "title": "Fase III (final): terminar e planear",
    "description": "Rever a relação entre o problema-foco e os sintomas, as estratégias usadas e o esforço dos pais e da criança em casa; estabelecer plano de monitorização e de tratamento se houver novo episódio."
   }
  ],
  "source": "Dietz LJ, Mufson L, Irvine H, Brent DA, Family-based interpersonal psychotherapy for depressed preadolescents: an open-treatment trial, Early Interv Psychiatry 2008;2(3):154-161, https://pmc.ncbi.nlm.nih.gov/articles/PMC3551579/ (secções de métodos e resultados); NICE NG134 (depressão em crianças e jovens), publicada 25/06/2019, última revisão 07/05/2024, https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (rec. 1.6.4)"
 },
 {
  "id": "tx-terapia-familiar-depressao",
  "hypotheses": [
   "h-depressao-major"
  ],
  "name": "Terapia familiar na depressão (sistémica, de vinculação ou focada na depressão infantil)",
  "category": "familiar",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "5 a 18 anos (NG134)",
  "line": 2,
  "summary": "Terapia com a família como unidade de tratamento, em várias modalidades (de vinculação, sistémica, tratamento focado na família para a depressão infantil, terapia sistémica integrativa). É alternativa quando a TCC individual não serve ou quando há fatores familiares que impedem a resposta.",
  "when": "NG134: depressão ligeira (5-18 anos), terapia familiar de vinculação se as opções de grupo ou digitais não servirem (rec. 1.5.6 e 1.5.8). Moderada a grave: 5-11 anos, terapia familiar entre as opções (rec. 1.6.4); 12-18 anos, terapia familiar de vinculação ou sistémica se a TCC individual não servir (rec. 1.6.6). Depois de revisão multidisciplinar por depressão sem resposta: terapia familiar sistémica com pelo menos 15 sessões quinzenais (rec. 1.6.13).",
  "format": "Família; sessões quinzenais na modalidade sistémica mencionada em 1.6.13.",
  "sessions": {
   "typical": null,
   "text": "NG134 rec. 1.6.13: terapia familiar sistémica com pelo menos 15 sessões quinzenais, ou terapia familiar mais curta com pelo menos 3 meses. A fonte não descreve os temas por sessão."
  },
  "modules": [],
  "source": "NICE NG134 (depressão em crianças e jovens), publicada 25/06/2019, última revisão 07/05/2024, https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (rec. 1.5.6, 1.5.8, 1.6.4, 1.6.6, 1.6.13; tabela 1)"
 },
 {
  "id": "tx-psicoterapia-psicodinamica-depressao",
  "hypotheses": [
   "h-depressao-major"
  ],
  "name": "Psicoterapia psicodinâmica na depressão",
  "category": "psicoterapia",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "5 a 18 anos (NG134)",
  "line": 3,
  "summary": "Psicoterapia de orientação psicodinâmica, considerada quando as opções preferidas não servem ou como alternativa depois de revisão multidisciplinar na depressão sem resposta. A evidência é a mais limitada das psicoterapias listadas na guideline.",
  "when": "NG134: depressão moderada a grave, 5-11 anos, entre as opções a considerar (rec. 1.6.4); 12-18 anos, se a TCC individual não servir (rec. 1.6.6); depressão sem resposta ao combinado após revisão multidisciplinar: cerca de 30 sessões semanais (rec. 1.6.13).",
  "format": "Individual, semanal.",
  "sessions": {
   "typical": 30,
   "text": "NG134 rec. 1.6.13: psicoterapia psicodinâmica de cerca de 30 sessões semanais (formulação de 2005). A fonte não descreve os temas por sessão."
  },
  "modules": [],
  "source": "NICE NG134 (depressão em crianças e jovens), publicada 25/06/2019, última revisão 07/05/2024, https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (rec. 1.6.4, 1.6.6, 1.6.13; tabela 1)"
 },
 {
  "id": "tx-intervencao-psicossocial-breve-depressao",
  "hypotheses": [
   "h-depressao-major"
  ],
  "name": "Intervenção psicossocial breve (BPI) na depressão do adolescente",
  "category": "psicoterapia",
  "branches": [
   "adol"
  ],
  "ages": "12 a 18 anos",
  "line": 2,
  "summary": "Intervenção baseada na BPI do ensaio IMPACT, com psicoeducação sobre a depressão, atividades orientadas para objetivos e hábitos de saúde. Não envolve técnicas cognitivas nem reflexivas analíticas.",
  "when": "NG134: 12-18 anos com depressão moderada a grave, quando a TCC individual não serve ou não é adequada, considerar intervenção psicossocial breve (rec. 1.6.6).",
  "format": "Individual, com apoio à escola e aos pares. A NG134 não indica duração nem número de sessões.",
  "sessions": {
   "typical": null,
   "text": "A NG134 não indica número de sessões; descreve só os componentes principais (componentes, sem ordem fixa)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Psicoeducação sobre a depressão",
    "description": "Psicoeducação sobre depressão e atividades orientadas para objetivos, de natureza interpessoal, como estratégias terapêuticas."
   },
   {
    "id": "m2",
    "title": "Criar hábitos de saúde",
    "description": "Construir hábitos de saúde."
   },
   {
    "id": "m3",
    "title": "Planear atividades valorizadas",
    "description": "Planear e agendar atividades valorizadas."
   },
   {
    "id": "m4",
    "title": "Higiene mental e física",
    "description": "Conselhos para manter e melhorar o sono, a alimentação e o exercício."
   },
   {
    "id": "m5",
    "title": "Escola e pares",
    "description": "Promover o envolvimento com o trabalho escolar e as relações com os pares e diminuir o isolamento."
   }
  ],
  "source": "NICE NG134 (depressão em crianças e jovens), publicada 25/06/2019, última revisão 07/05/2024, https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (rec. 1.6.6; secção 'Terms used in this guideline', Brief psychosocial intervention)"
 },
 {
  "id": "tx-prevencao-recaida-depressao",
  "hypotheses": [
   "h-depressao-major"
  ],
  "name": "Prevenção de recaída: TCC de manutenção e sessões de seguimento",
  "category": "psicoterapia",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "crianças e adolescentes (NG134 5 a 18 anos)",
  "line": 2,
  "summary": "Sessões de TCC dirigidas à prevenção de recaída ou recorrência, em jovens que responderam ao tratamento agudo. Também sessões de seguimento psicológico nos jovens com risco elevado de recaída.",
  "when": "AACAP 2023: sugere (2C) fluoxetina continuada, ou TCC mais fluoxetina continuada, em adolescentes e crianças que respondem ao tratamento agudo com fluoxetina, para prevenir a recaída; a TCC de prevenção de recaída pode ser introduzida na fase de continuação. NG134: considerar sessões de seguimento em quem tem risco elevado de recaída (por exemplo 2 episódios anteriores, sintomas subsindrómicos elevados ou exposição a múltiplos riscos).",
  "format": "Individual, com componente familiar em média de 3 sessões na maioria dos estudos.",
  "sessions": {
   "typical": null,
   "text": "AACAP 2023: implementação típica de 8 a 12 sessões em 3 fases (semanal no 1.º mês, quinzenal nos 2 meses seguintes e de 4 em 4 a 6 semanas nos 3 últimos meses), individualizável. NG134 não indica número de sessões de seguimento."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Fase 1: reduzir sintomas residuais com competências básicas",
    "description": "Psicoeducação, formulação do caso e monitorização do humor; treino de coping comportamental, reestruturação cognitiva, autoesquema positivo, resolução de problemas e comunicação familiar; identificar crenças centrais e áreas de força e bem-estar."
   },
   {
    "id": "m2",
    "title": "Fase 2: consolidar e prevenir recaída",
    "description": "Introdução ao bem-estar, prática das competências e criação de um plano de prevenção de recaída e de bem-estar."
   },
   {
    "id": "m3",
    "title": "Fase 3: consolidar ganhos",
    "description": "Avaliar e rever os planos de prevenção de recaída e de bem-estar, com técnicas ajustadas às necessidades do doente."
   }
  ],
  "source": "AACAP, Walter HJ et al., Clinical Practice Guideline for the Assessment and Treatment of Children and Adolescents With Major and Persistent Depressive Disorders, JAACAP 2023;62(5):479-502, https://pubmed.ncbi.nlm.nih.gov/36273673/ (texto integral lido numa cópia PDF alojada em hscsnhealthplan.org) (Treatment Statement 4, Implementation; texto lido); NICE NG134 (depressão em crianças e jovens), publicada 25/06/2019, última revisão 07/05/2024, https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (rec. 1.6.49)"
 },
 {
  "id": "tx-psicoeducacao-cuidadores-bipolar",
  "hypotheses": [
   "h-bipolar-1",
   "h-bipolar-2"
  ],
  "name": "Informação e programa de educação e apoio para cuidadores (bipolar)",
  "category": "psicoeducacao",
  "branches": [
   "adol"
  ],
  "ages": "idade não especificada na fonte",
  "line": 1,
  "summary": "Informação verbal e escrita aos cuidadores sobre o diagnóstico, a recuperação e como obter ajuda em crise, e um programa de educação e apoio aos cuidadores, que pode fazer parte de uma intervenção familiar. Deve ser oferecido o mais cedo possível.",
  "when": "NICE CG185: oferecer a todos os cuidadores, o mais cedo possível, um programa de educação e apoio centrado no cuidador (rec. 1.1.8); informar sobre diagnóstico e tratamento, resultados positivos e recuperação, tipos de apoio, papel das equipas e como obter ajuda em crise (rec. 1.1.6).",
  "format": "Cuidadores, individualmente ou em grupo, disponível quando necessário e com mensagem positiva sobre recuperação.",
  "sessions": {
   "typical": null,
   "text": "A CG185 não indica número de sessões (componentes, sem ordem fixa)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Informação sobre diagnóstico e tratamento",
    "description": "Dar aos cuidadores, de forma acessível e oral e escrita, informação sobre o diagnóstico e o tratamento."
   },
   {
    "id": "m2",
    "title": "Resultados positivos e recuperação",
    "description": "Transmitir uma mensagem positiva sobre a recuperação."
   },
   {
    "id": "m3",
    "title": "Tipos de apoio e papel das equipas",
    "description": "Explicar os apoios disponíveis para cuidadores e o papel das equipas e serviços."
   },
   {
    "id": "m4",
    "title": "Como obter ajuda em crise",
    "description": "Plano claro sobre a quem recorrer numa crise."
   },
   {
    "id": "m5",
    "title": "Partilha de informação e confidencialidade",
    "description": "Negociar cedo como se partilha a informação sobre o doente, sublinhando a importância de partilhar os riscos."
   }
  ],
  "source": "NICE CG185 (perturbação bipolar), publicada 24/09/2014, última revisão 02/09/2025, https://www.nice.org.uk/guidance/cg185/chapter/Recommendations (rec. 1.1.6, 1.1.7, 1.1.8)"
 },
 {
  "id": "tx-intervencao-psicologica-depressao-bipolar-jovens",
  "hypotheses": [
   "h-bipolar-1",
   "h-bipolar-2"
  ],
  "name": "TCC ou terapia interpessoal individual na depressão bipolar do jovem",
  "category": "psicoterapia",
  "branches": [
   "adol"
  ],
  "ages": "idade não especificada na fonte",
  "line": 1,
  "summary": "Intervenção psicológica estruturada individual, TCC ou terapia interpessoal, com manual publicado, durante pelo menos 3 meses, para a depressão bipolar do jovem. Combina-se com fármaco se a depressão for moderada a grave.",
  "when": "NICE CG185 rec. 1.11.12: oferecer a jovens com depressão bipolar. Se após 4 a 6 semanas não houver resposta ou for limitada, fazer revisão multidisciplinar e considerar psicoterapia individual ou familiar alternativa (rec. 1.11.13). Se houver risco de suicídio ou autolesão, revisão urgente com plano de gestão de risco (rec. 1.11.14). Depressão moderada a grave: considerar fármaco adicional à psicoterapia (rec. 1.11.16).",
  "format": "Individual; duração de pelo menos 3 meses; com manual descrito e publicado. O diagnóstico de bipolaridade no jovem só deve ser feito após monitorização longitudinal prospetiva intensiva (rec. 1.11.4).",
  "sessions": {
   "typical": null,
   "text": "A CG185 não indica número de sessões; exige pelo menos 3 meses e revisão às 4 a 6 semanas se não houver resposta. A fonte não descreve temas por sessão: usar um manual publicado de TCC ou de terapia interpessoal (a TADS e a TIP-A de outros itens foram concebidas para depressão unipolar)."
  },
  "modules": [],
  "source": "NICE CG185 (perturbação bipolar), publicada 24/09/2014, última revisão 02/09/2025, https://www.nice.org.uk/guidance/cg185/chapter/Recommendations (rec. 1.11.4, 1.11.12, 1.11.13, 1.11.14, 1.11.15, 1.11.16)"
 },
 {
  "id": "tx-intervencao-psicologica-manutencao-bipolar",
  "hypotheses": [
   "h-bipolar-1",
   "h-bipolar-2"
  ],
  "name": "Intervenção psicológica estruturada de manutenção e prevenção de recaída (bipolar)",
  "category": "psicoterapia",
  "branches": [
   "adol"
  ],
  "ages": "idade não especificada na fonte",
  "line": 1,
  "summary": "Intervenção psicológica individual, de grupo ou familiar, desenhada para a perturbação bipolar e com manual publicado, para prevenir recaídas ou tratar sintomas persistentes entre episódios. Inclui informação, automonitorização do humor, plano de gestão de recaída e resolução de problemas.",
  "when": "NICE CG185: oferecer para prevenir recaída ou quando há sintomas persistentes entre episódios (rec. 1.7.3, 1.7.4); nos jovens, considerar, depois da revisão multidisciplinar, uma intervenção individual ou familiar estruturada para o tratamento a longo prazo (rec. 1.11.17). Oferecer intervenção familiar a quem vive ou tem contacto próximo com a família (rec. 1.7.2).",
  "format": "Individual (adaptada à formulação do caso), de grupo (com discussão da relevância da informação para os participantes) ou familiar.",
  "sessions": {
   "typical": null,
   "text": "A CG185 não indica número de sessões (componentes, sem ordem fixa)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Informação sobre a perturbação bipolar",
    "description": "Dar informação sobre a doença."
   },
   {
    "id": "m2",
    "title": "Impacto de pensamentos e comportamentos no humor e na recaída",
    "description": "Considerar o impacto dos pensamentos e do comportamento no humor e no risco de recaída."
   },
   {
    "id": "m3",
    "title": "Automonitorização",
    "description": "Auto-registo do humor, dos pensamentos e do comportamento."
   },
   {
    "id": "m4",
    "title": "Risco de recaída, sofrimento e funcionamento",
    "description": "Abordar o risco de recaída, o sofrimento e como melhorar o funcionamento."
   },
   {
    "id": "m5",
    "title": "Plano de gestão de recaída e de manutenção do bem-estar",
    "description": "Desenvolver planos para gerir a recaída e para se manter bem."
   },
   {
    "id": "m6",
    "title": "Resolução de problemas",
    "description": "Resolver problemas de comunicação e dificuldades funcionais."
   }
  ],
  "source": "NICE CG185 (perturbação bipolar), publicada 24/09/2014, última revisão 02/09/2025, https://www.nice.org.uk/guidance/cg185/chapter/Recommendations (rec. 1.7.2, 1.7.3, 1.7.4, 1.11.17)"
 },
 {
  "id": "tx-fft-a-bipolar",
  "hypotheses": [
   "h-bipolar-1",
   "h-bipolar-2"
  ],
  "name": "Tratamento focado na família para adolescentes com perturbação bipolar (FFT-A, 21 sessões)",
  "category": "familiar",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "adolescentes; versão curta para jovens de alto risco dos 9 aos 17 anos",
  "line": 2,
  "summary": "Programa familiar em 21 sessões ao longo de 9 meses, com psicoeducação, treino de comunicação e treino de resolução de problemas, dado com o tratamento farmacológico. Começa normalmente na fase de recuperação após um episódio agudo.",
  "when": "A CG185 manda oferecer intervenção familiar e psicológica estruturada (rec. 1.7.2, 1.7.3, 1.11.17) sem nomear o FFT-A; o programa é um protocolo publicado de Miklowitz. Versão curta de 12 sessões em 4 meses para jovens de alto risco (9-17 anos).",
  "format": "Família com o jovem; 12 sessões semanais, 6 quinzenais e 3 mensais ao longo de 9 meses; psiquiatra trata da medicação em paralelo.",
  "sessions": {
   "typical": 21,
   "text": "21 sessões em 9 meses (12 semanais, 6 quinzenais, 3 mensais) segundo Miklowitz 2012; pode ser encurtado em contexto comunitário."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Fase de envolvimento",
    "description": "Ligar-se à família e explicar a estrutura do tratamento. A fonte não indica número de sessões."
   },
   {
    "id": "m2",
    "title": "Sessões 1 a 7/8: psicoeducação",
    "description": "Sintomas, diagnóstico diferencial, prognóstico, tratamento e autogestão; termina com um plano de gestão do humor com gatilhos, sinais precoces e medidas preventivas, e com as rotinas familiares (refeições, deitar, sono)."
   },
   {
    "id": "m3",
    "title": "Sessões 10 a 15: treino de melhoria da comunicação",
    "description": "Expressar sentimentos positivos, escuta ativa, pedidos positivos e feedback construtivo; menos formal nos adolescentes que nos adultos."
   },
   {
    "id": "m4",
    "title": "Sessões 16 a 21: treino de resolução de problemas",
    "description": "Definir áreas de desacordo, gerar e avaliar soluções e aplicá-las, por exemplo medicação e tarefas domésticas."
   }
  ],
  "source": "Miklowitz DJ, Family-Focused Treatment for Children and Adolescents with Bipolar Disorder, Isr J Psychiatry Relat Sci 2012;49(2):95-101, https://pmc.ncbi.nlm.nih.gov/articles/PMC3869947/ (lido por resumo do WebFetch, não em texto integral); NICE CG185 (perturbação bipolar), publicada 24/09/2014, última revisão 02/09/2025, https://www.nice.org.uk/guidance/cg185/chapter/Recommendations (rec. 1.7.2, 1.7.3, 1.11.17)"
 },
 {
  "id": "tx-tcc-exposicao-irritabilidade-ddm",
  "hypotheses": [
   "h-ddm"
  ],
  "name": "TCC baseada em exposição para irritabilidade grave (DDM)",
  "category": "psicoterapia",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "9 a 15 anos no piloto (média 12,4)",
  "line": null,
  "summary": "Adaptação da exposição usada na ansiedade, combinada com técnicas selecionadas de treino parental, para a irritabilidade crónica grave. A fonte indica que ainda não deve ser considerada empiricamente suportada.",
  "when": "Não existe guideline para a DDM nas fontes lidas. Os autores (Kircanski et al. 2018) escrevem que 'não existem atualmente tratamentos farmacológicos ou psicossociais bem estabelecidos especificamente para a DDM' e que a TCC baseada em exposição 'não deve ser considerada empiricamente suportada'; os dados são de um ensaio aberto piloto com 10 participantes.",
  "format": "Piloto: 12 a 16 sessões semanais de 60 a 90 minutos, com componente individual para a criança e para os pais e algumas sessões conjuntas.",
  "sessions": {
   "typical": null,
   "text": "12 a 16 sessões semanais de 60 a 90 minutos no piloto (Kircanski 2018). O estudo de caso de Linke 2020 descreve 12 sessões semanais; os módulos abaixo são os desse caso único (criança de 11 anos), não um manual."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Sessões 1 e 2: orientação e motivação",
    "description": "Psicoeducação, entrevista motivacional, avaliação da história familiar e da irritabilidade e construção de uma hierarquia de raiva."
   },
   {
    "id": "m2",
    "title": "Sessão 3: competências e racional da exposição",
    "description": "Respiração, explicação da exposição e exposição imaginal; os pais começam a elogiar e reconhecer."
   },
   {
    "id": "m3",
    "title": "Sessões 4 e 5: exposição em sessão (primeira)",
    "description": "Exposição em sessão com monitorização da irritabilidade; os pais aprendem a ignorar ativamente e a lidar com explosões."
   },
   {
    "id": "m4",
    "title": "Sessões 6 a 8: exposição escalonada",
    "description": "Exposições mais difíceis; os pais aprendem a dar ordens (sessão 6), a pôr limites (sessão 7) e a usar interações positivas e recompensas (sessão 8)."
   },
   {
    "id": "m5",
    "title": "Sessões 9 a 11: exposição continuada",
    "description": "Atividade não preferida; os pais treinam ordens, elogio e ignorar ativo, tolerando o seu próprio desconforto. Trabalhos de casa de exposição desde a sessão 4."
   },
   {
    "id": "m6",
    "title": "Sessões 11 e 12: conclusão",
    "description": "Planear a alta e rever as conquistas e os objetivos."
   }
  ],
  "source": "Kircanski K, Clayton ME, Leibenluft E, Brotman MA, Psychosocial Treatment of Irritability in Youth, Curr Treat Options Psychiatry 2018;5(1):129-140, https://pmc.ncbi.nlm.nih.gov/articles/PMC6181450/ (lido por resumo do WebFetch); Linke J, Kircanski K, Brooks J, Perhamus G, Gold AL, Brotman MA, Exposure-Based Cognitive-Behavioral Therapy for Disruptive Mood Dysregulation Disorder: An Evidence-Based Case Study, Behav Ther 2020;51(2):320-333, https://pmc.ncbi.nlm.nih.gov/articles/PMC9719109/ (lido por resumo do WebFetch; caso único)"
 },
 {
  "id": "tx-treino-parental-irritabilidade-ddm",
  "hypotheses": [
   "h-ddm"
  ],
  "name": "Treino parental (gestão do comportamento) na irritabilidade e DDM",
  "category": "parental",
  "ages": "idade não especificada na fonte",
  "line": null,
  "summary": "Os pais aprendem a reforçar o comportamento adaptativo e a responder ao desadaptativo (elogio, ignorar ativo, consequências ligeiras como o time-out). É a base dos programas de treino parental citados, mas a evidência específica para DDM é fraca.",
  "when": "Kircanski et al. 2018: 'não existem tratamentos bem estabelecidos especificamente para a DDM'; o treino parental e a TCC têm evidência na agressividade e nos problemas de comportamento disruptivo, não demonstrada especificamente para irritabilidade grave.",
  "format": "Pais; programas citados: Incredible Years, Parent-Child Interaction Therapy e Triple-P. O artigo não indica o número de sessões.",
  "sessions": {
   "typical": null,
   "text": "A fonte lida não indica número de sessões (componentes, sem ordem fixa)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Elogio e atenção ao comportamento adaptativo",
    "description": "Reforçar com elogio e atenção o comportamento adequado."
   },
   {
    "id": "m2",
    "title": "Ignorar ativo",
    "description": "Retirar atenção ao comportamento desadequado quando apropriado."
   },
   {
    "id": "m3",
    "title": "Consequências ligeiras e time-out",
    "description": "Aplicar consequências ligeiras, como o time-out."
   }
  ],
  "source": "Kircanski K, Clayton ME, Leibenluft E, Brotman MA, Psychosocial Treatment of Irritability in Youth, Curr Treat Options Psychiatry 2018;5(1):129-140, https://pmc.ncbi.nlm.nih.gov/articles/PMC6181450/ (lido por resumo do WebFetch)"
 },
 {
  "id": "tx-aconselhamento-parental-ansiedade-cuidados-primarios",
  "hypotheses": [
   "h-pag",
   "h-ansiedade-separacao",
   "h-ansiedade-social",
   "h-fobia-especifica",
   "h-panico"
  ],
  "name": "Aconselhamento aos pais na ansiedade (primeira abordagem nos cuidados de saúde primários)",
  "category": "psicoeducacao",
  "ages": "idade não especificada na fonte",
  "line": null,
  "summary": "Conselhos aos pais para tranquilizarem a criança com atitude firme e segura, incentivarem a procura de soluções e evitarem favorecer o evitamento excessivo sem forçar além da capacidade de adaptação. Referenciar à pedopsiquiatria se os sintomas persistirem ou forem invasivos.",
  "when": "Recomendação portuguesa de 2009 para cuidados de saúde primários: orientar para pedopsiquiatria se houver persistência ou agravamento, interferência na rotina, sofrimento intenso ou incapacidade dos pais. As guidelines internacionais lidas (AACAP 2020, NICE CG159) recomendam TCC como tratamento e não mencionam vigilância ativa.",
  "format": "Pais e criança, em consulta.",
  "sessions": {
   "typical": null,
   "text": "Sem número de sessões (componentes, sem ordem fixa)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Tranquilizar com atitude firme e segura",
    "description": "Aconselhar os pais a tranquilizar a criança mantendo uma atitude firme e segura."
   },
   {
    "id": "m2",
    "title": "Incentivar a procura de soluções",
    "description": "Encorajar a criança a encontrar soluções para enfrentar a situação problemática."
   },
   {
    "id": "m3",
    "title": "Não favorecer o evitamento excessivo",
    "description": "Não evitar em excesso as situações que causam ansiedade, sem forçar a criança além da sua capacidade de adaptação."
   },
   {
    "id": "m4",
    "title": "Referenciar se persistir",
    "description": "Orientar para pedopsiquiatria se persistir ou agravar, se for invasivo na rotina, se causar sofrimento intenso ou se os pais não conseguirem lidar."
   }
  ],
  "source": "Coordenação Nacional para a Saúde Mental, Saúde Mental Infantil e Juvenil nos Cuidados de Saúde Primários: Recomendações para a Prática Clínica, Lisboa, 2009 (alojado no site da DGS, https://www.dgs.pt/accao-de-saude-para-criancas-e-jovens-em-risco/ficheiros-externos/pub-saude-mentalrecomendacoes-para-a-pratica-clinica-1-pdf.aspx), secções Perturbações da ansiedade e Perturbações do humor (documento de 2009, anterior às guidelines atuais), secção Perturbações da ansiedade (Intervenção e Referenciação)"
 },
 {
  "id": "tx-tcc-ansiedade",
  "hypotheses": [
   "h-pag",
   "h-ansiedade-separacao",
   "h-ansiedade-social",
   "h-fobia-especifica",
   "h-panico"
  ],
  "name": "Terapia cognitivo-comportamental para a ansiedade (componentes AACAP)",
  "category": "psicoterapia",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "6 a 18 anos (AACAP 2020)",
  "line": 1,
  "summary": "TCC dirigida às dimensões cognitiva, comportamental e fisiológica da ansiedade, com agenda e trabalhos de casa, e exposição gradual como núcleo no medo de situações específicas. Visa melhoria sintomática e funcional em 12 a 20 sessões.",
  "when": "AACAP 2020: oferecer TCC a doentes de 6 a 18 anos com ansiedade social, generalizada ou de separação, fobia específica ou perturbação de pânico (1C). Sequência prudente: TCC antes de ISRS na ansiedade de início recente, mais ligeira e menos incapacitante. NICE CG159: TCC individual ou em grupo na ansiedade social da criança (ver item próprio).",
  "format": "Individual, colaboração entre doente, família e, por vezes, escola; os elementos e o número de sessões variam com a perturbação e a apresentação.",
  "sessions": {
   "typical": null,
   "text": "AACAP 2020: meta de melhoria significativa em 12 a 20 sessões. A fonte descreve os elementos, não a ordem por sessão (componentes, sem ordem fixa)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Educação sobre a ansiedade",
    "description": "Explicar a ansiedade e o modelo cognitivo-comportamental."
   },
   {
    "id": "m2",
    "title": "Definição de objetivos comportamentais com recompensas",
    "description": "Fixar objetivos e recompensas contingentes."
   },
   {
    "id": "m3",
    "title": "Automonitorização",
    "description": "Registar as ligações entre preocupações ou medos, pensamentos e comportamentos."
   },
   {
    "id": "m4",
    "title": "Relaxamento",
    "description": "Respiração profunda, relaxamento muscular progressivo e imaginação guiada."
   },
   {
    "id": "m5",
    "title": "Reestruturação cognitiva",
    "description": "Desafiar distorções como catastrofização, sobregeneralização, previsão negativa e pensamento tudo-ou-nada."
   },
   {
    "id": "m6",
    "title": "Exposição gradual",
    "description": "Hierarquia de medos dominada passo a passo: exposição in vivo, imagética emotiva, modelação ao vivo e gestão de contingências; é o núcleo no medo de situações específicas (separação, fobias, ansiedade social)."
   },
   {
    "id": "m7",
    "title": "Resolução de problemas e treino de competências sociais",
    "description": "Relevante para as situações que provocam ansiedade."
   },
   {
    "id": "m8",
    "title": "Intervenções familiares e escolares",
    "description": "Melhorar a relação pais-criança, a comunicação e a resolução de problemas, reduzir a ansiedade parental e promover competências parentais que diminuam a ansiedade; envolver a escola (por exemplo reentrada gradual com recompensas na ansiedade de separação)."
   }
  ],
  "source": "AACAP, Walter HJ et al., Clinical Practice Guideline for the Assessment and Treatment of Children and Adolescents With Anxiety Disorders, JAACAP 2020;59(10):1107-1124, https://pubmed.ncbi.nlm.nih.gov/32439401/ (texto integral lido numa cópia PDF alojada em njaap.org) (Treatment Statement 1, Implementation, texto lido; sequência prudente na nota de rodapé c)"
 },
 {
  "id": "tx-coping-cat",
  "hypotheses": [
   "h-pag",
   "h-ansiedade-separacao",
   "h-ansiedade-social"
  ],
  "name": "Programa Coping Cat (TCC de 16 sessões)",
  "category": "psicoterapia",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "7 a 13 anos nos estudos; adaptação a adolescentes descrita",
  "line": 1,
  "summary": "Programa manualizado de TCC com manual do terapeuta e caderno da criança, dividido em oito sessões de psicoeducação e competências e oito de exposição graduada. Usa o plano mnemónico FEAR para lembrar as competências.",
  "when": "Concebido para crianças dos 7 aos 13 anos com ansiedade generalizada, fobia social ou ansiedade de separação; a AACAP 2020 recomenda TCC aos 6-18 anos e a NICE CG159 TCC na ansiedade social. A adaptação a adolescentes é discutida no artigo, com ajustes de linguagem e de exposições.",
  "format": "Individual, com manual e caderno; atividades lúdicas e recompensas semanais pelos trabalhos de casa. A fonte lida não indica a duração de cada sessão nem em que sessões se vêem os pais.",
  "sessions": {
   "typical": 16,
   "text": "16 sessões: as primeiras 8 de psicoeducação e competências, as segundas 8 de exposição (Beidas et al., Cogn Behav Pract 2010). A fonte lida não atribui cada passo FEAR a uma sessão concreta; ordem F, E, A, R dentro das primeiras 8."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Sessão 1: construção de relação",
    "description": "A maior parte da primeira sessão é dedicada à construção da relação com a criança."
   },
   {
    "id": "m2",
    "title": "F (Feeling Frightened?): reações corporais à ansiedade",
    "description": "Reconhecer as reações somáticas e sinais de desconforto."
   },
   {
    "id": "m3",
    "title": "E (Expecting Bad Things to Happen?): pensamentos ansiosos",
    "description": "Identificar pensamentos ansiosos."
   },
   {
    "id": "m4",
    "title": "A (Attitudes and Actions that Can Help): estratégias",
    "description": "Pensamentos de coping, resolução de problemas, relaxamento e respiração abdominal."
   },
   {
    "id": "m5",
    "title": "R (Results and Rewards): avaliar e recompensar",
    "description": "Avaliar o desempenho e o esforço e recompensar a criança por enfrentar os medos."
   },
   {
    "id": "m6",
    "title": "Sessões 9 a 16: exposição graduada",
    "description": "Enfrentar os medos numa hierarquia, de tarefas menos para mais ansiogénicas, usando as competências da primeira metade."
   }
  ],
  "source": "Beidas RS, Benjamin CL, Puleo CM, Edmunds JM, Kendall PC, Flexible Applications of the Coping Cat Program for Anxious Youth, Cogn Behav Pract 2010;17(2):142-153, https://pmc.ncbi.nlm.nih.gov/articles/PMC2950324/ (texto lido: descrição do programa de 16 sessões de Kendall e Hedtke 2006, plano FEAR, sessão 1 e adaptação a adolescentes); AACAP, Walter HJ et al., Clinical Practice Guideline for the Assessment and Treatment of Children and Adolescents With Anxiety Disorders, JAACAP 2020;59(10):1107-1124, https://pubmed.ncbi.nlm.nih.gov/32439401/ (texto integral lido numa cópia PDF alojada em njaap.org)"
 },
 {
  "id": "tx-tcc-ansiedade-social-criancas-nice",
  "hypotheses": [
   "h-ansiedade-social"
  ],
  "name": "TCC centrada na ansiedade social (individual ou em grupo), NICE",
  "category": "psicoterapia",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "idade não especificada na fonte",
  "line": 1,
  "summary": "TCC individual ou de grupo centrada na ansiedade social, com psicoeducação, exposição a situações sociais temidas ou evitadas, treino de competências sociais com oportunidades de ensaio e treino dos pais. É o tratamento recomendado para crianças e jovens com ansiedade social.",
  "when": "NICE CG159 rec. 1.5.3: oferecer TCC individual ou de grupo centrada na ansiedade social; considerar o envolvimento dos pais, sobretudo em crianças pequenas. Não oferecer rotineiramente fármacos, mindfulness ou terapia de apoio (rec. 1.6.1 e 1.6.3).",
  "format": "Individual: 8 a 12 sessões de 45 minutos. Grupo: 8 a 12 sessões de 90 minutos com crianças ou jovens da mesma faixa etária. Oferecer o tratamento onde a criança e a família se sintam mais à vontade (casa, escola, centro comunitário).",
  "sessions": {
   "typical": null,
   "text": "8 a 12 sessões (45 min individual; 90 min em grupo) segundo NICE CG159 rec. 1.5.4 e 1.5.5. A fonte descreve os componentes, sem ordem fixa por sessão."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Psicoeducação",
    "description": "Explicar a ansiedade social."
   },
   {
    "id": "m2",
    "title": "Exposição a situações sociais temidas ou evitadas",
    "description": "Expor a criança às situações temidas ou evitadas, dentro e fora das sessões."
   },
   {
    "id": "m3",
    "title": "Treino de competências sociais",
    "description": "Treinar e dar oportunidades de ensaio das competências em situações sociais."
   },
   {
    "id": "m4",
    "title": "Psicoeducação e treino de competências para os pais",
    "description": "Promover e reforçar a exposição às situações temidas e o desenvolvimento de competências, sobretudo nas crianças pequenas."
   },
   {
    "id": "m5",
    "title": "Medidas de resultado em cada sessão",
    "description": "Usar medidas de resultado a cada sessão (por exemplo LSAS versão criança ou SPAI-C, SPIN ou LSAS nos jovens; MASC, RCADS, SCAS ou SCARED nas crianças) e supervisão regular."
   }
  ],
  "source": "NICE CG159 (perturbação de ansiedade social), publicada 22/05/2013, última revisão 21/05/2024, https://www.nice.org.uk/guidance/cg159/chapter/Recommendations (rec. 1.5.1, 1.5.3, 1.5.4, 1.5.5, 1.6.1, 1.6.3)"
 },
 {
  "id": "tx-tcc-ansiedade-social-adaptada-adultos",
  "hypotheses": [
   "h-ansiedade-social"
  ],
  "name": "TCC para ansiedade social desenvolvida para adultos, adaptada a jovens (Clark e Wells ou Heimberg)",
  "category": "psicoterapia",
  "branches": [
   "adol"
  ],
  "ages": "tipicamente 15 anos ou mais",
  "line": 2,
  "summary": "Intervenções psicológicas desenvolvidas para adultos, individuais e específicas para a ansiedade social, que a NICE aceita considerar para jovens com capacidade cognitiva e emocional para um tratamento de adulto. Diferem na estrutura: o modelo de Clark e Wells tem até 14 sessões de 90 minutos; o de Heimberg 15 sessões de 60 minutos e 1 de 90.",
  "when": "NICE CG159 rec. 1.5.6: considerar para jovens tipicamente com 15 anos ou mais que tenham capacidade cognitiva e emocional para um tratamento desenvolvido para adultos.",
  "format": "Individual. Clark e Wells: até 14 sessões de 90 minutos em cerca de 4 meses. Heimberg: 15 sessões de 60 minutos mais 1 de 90 minutos para exposição, em cerca de 4 meses.",
  "sessions": {
   "typical": 14,
   "text": "Clark e Wells: até 14 sessões de 90 min (CG159 rec. 1.3.13); Heimberg: 15 sessões de 60 min e 1 de 90 min (rec. 1.3.14); o valor 14 refere-se ao modelo de Clark e Wells. Os módulos são os componentes do modelo de Clark e Wells, sem ordem fixa na fonte."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Educação sobre ansiedade social",
    "description": "Explicar o problema."
   },
   {
    "id": "m2",
    "title": "Exercícios experienciais sobre atenção auto-focada e comportamentos de segurança",
    "description": "Mostrar os efeitos adversos da atenção auto-focada e dos comportamentos de segurança."
   },
   {
    "id": "m3",
    "title": "Feedback por vídeo",
    "description": "Corrigir a autoimagem negativa distorcida."
   },
   {
    "id": "m4",
    "title": "Treino sistemático da atenção externa",
    "description": "Dirigir a atenção para o exterior."
   },
   {
    "id": "m5",
    "title": "Experiências comportamentais em sessão com trabalhos de casa",
    "description": "Testar crenças negativas."
   },
   {
    "id": "m6",
    "title": "Discriminação ou reescrita de memórias de trauma social",
    "description": "Trabalhar memórias problemáticas de situações sociais."
   },
   {
    "id": "m7",
    "title": "Exame e modificação de crenças nucleares",
    "description": "Rever crenças nucleares."
   },
   {
    "id": "m8",
    "title": "Pré e pós-processamento dos eventos",
    "description": "Modificar o processamento antes e depois dos eventos."
   },
   {
    "id": "m9",
    "title": "Prevenção de recaída",
    "description": "Preparar o fim do tratamento."
   }
  ],
  "source": "NICE CG159 (perturbação de ansiedade social), publicada 22/05/2013, última revisão 21/05/2024, https://www.nice.org.uk/guidance/cg159/chapter/Recommendations (rec. 1.5.6, 1.3.13, 1.3.14)"
 },
 {
  "id": "tx-exposicao-sessao-unica-fobia",
  "hypotheses": [
   "h-fobia-especifica"
  ],
  "name": "Tratamento de sessão única (one-session treatment) da fobia específica",
  "category": "psicoterapia",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "crianças e adolescentes (AACAP 2020: 6 a 18 anos)",
  "line": null,
  "summary": "Exposição graduada intensiva numa única sessão de cerca de 3 horas, precedida de uma sessão de avaliação funcional, com modelagem pelo terapeuta, desafio de cognições e reforço. Descrita para crianças e adolescentes.",
  "when": "AACAP 2020: TCC para fobia específica aos 6-18 anos (1C), com exposição graduada como núcleo. O protocolo de sessão única é um programa publicado (Öst); a guideline não o nomeia.",
  "format": "Sessão de avaliação funcional de cerca de 45 minutos, idealmente uma semana antes, e uma sessão de exposição de 3 horas; os pais acompanham no fim e são ensinados a dar oportunidades seguras de prática.",
  "sessions": {
   "typical": 1,
   "text": "1 sessão de exposição de 3 horas, mais 1 sessão prévia de avaliação funcional de cerca de 45 minutos (Davis, Ollendick e Öst 2009)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Avaliação diagnóstica e funcional",
    "description": "Entrevista multimétodo e multi-informante e, se possível, teste de evitamento comportamental; sessão separada de cerca de 45 minutos para construir a hierarquia de medo, identificar cognições catastróficas e o que mantém o evitamento."
   },
   {
    "id": "m2",
    "title": "Racional e instruções prévias",
    "description": "Explicar que a exposição é planeada, graduada, controlada, prolongada e colaborativa: cada exposição é discutida, demonstrada pelo terapeuta e depois feita em conjunto, sempre com consentimento da criança."
   },
   {
    "id": "m3",
    "title": "Exposição graduada in vivo",
    "description": "Experiências comportamentais negociadas a partir da hierarquia; manter a exposição até o medo baixar pelo menos 50% do valor máximo de sofrimento subjetivo."
   },
   {
    "id": "m4",
    "title": "Desafio de cognições",
    "description": "Antes de cada experiência a criança prevê o que vai acontecer; depois compara com o que sucedeu."
   },
   {
    "id": "m5",
    "title": "Modelação do participante e reforço",
    "description": "O terapeuta mostra o passo difícil, depois envolve a criança com contacto físico que vai reduzindo; elogiar a aproximação."
   },
   {
    "id": "m6",
    "title": "Psicoeducação e treino de competências",
    "description": "Corrigir mitos sobre o estímulo temido e ensinar a aproximar-se com segurança."
   },
   {
    "id": "m7",
    "title": "Pais e seguimento",
    "description": "Os pais veem a criança demonstrar o comportamento de aproximação e aprendem como dar oportunidades seguras de prática; auto-exposições nos meses seguintes e consultas de seguimento."
   }
  ],
  "source": "Davis TE III, Ollendick TH, Öst L-G, Intensive Treatment of Specific Phobias in Children and Adolescents, Cogn Behav Pract 2009;16(3):294-303, https://pmc.ncbi.nlm.nih.gov/articles/PMC2747757/ (lido por resumo do WebFetch, não em texto integral); AACAP, Walter HJ et al., Clinical Practice Guideline for the Assessment and Treatment of Children and Adolescents With Anxiety Disorders, JAACAP 2020;59(10):1107-1124, https://pubmed.ncbi.nlm.nih.gov/32439401/ (texto integral lido numa cópia PDF alojada em njaap.org) (Treatment Statement 1)"
 },
 {
  "id": "tx-tcc-panico-adolescentes",
  "hypotheses": [
   "h-panico"
  ],
  "name": "TCC específica para a perturbação de pânico do adolescente (Panic Control Treatment for Adolescents)",
  "category": "psicoterapia",
  "branches": [
   "adol"
  ],
  "ages": "14 a 17 anos (estudo de viabilidade); adolescentes",
  "line": null,
  "summary": "Protocolo de TCC para pânico (manual 'Mastery of Anxiety and Panic for Adolescents: Riding the Wave'), com psicoeducação, reestruturação cognitiva, exposição interoceptiva e exposição situacional. Existe em versão semanal e em versão intensiva de 8 dias.",
  "when": "AACAP 2020 recomenda TCC aos 6-18 anos com perturbação de pânico (1C). A NICE não faz recomendações para o pânico na criança e no adolescente (Baker e Waite 2020). A evidência do protocolo é um pequeno estudo de viabilidade com 13 adolescentes de 14 a 17 anos.",
  "format": "Semanal: 11 sessões semanais; intensiva: 8 dias consecutivos (dias 4 e 5 com 6 a 8 horas de exposições in vivo), com chamadas de 30 minutos nas 4 semanas seguintes. A participação dos pais variou (maior ou mínima) com resultados equivalentes.",
  "sessions": {
   "typical": 11,
   "text": "11 sessões semanais no estudo de viabilidade (Pincus 2010, citado em Baker e Waite 2020); ou 8 dias consecutivos na versão intensiva. A distribuição do conteúdo pelas 11 sessões semanais não foi lida; os módulos seguem a versão intensiva de Elkins et al."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Dias 1 e 2: relação, psicoeducação e hierarquia",
    "description": "Construir a relação, psicoeducação sobre ansiedade e pânico, construir a hierarquia individual de medo e evitamento e fazer reestruturação cognitiva."
   },
   {
    "id": "m2",
    "title": "Dia 3: exposição interoceptiva",
    "description": "Praticar a exposição às sensações corporais temidas."
   },
   {
    "id": "m3",
    "title": "Dias 4 e 5: exposições in vivo assistidas",
    "description": "Exposições repetidas a situações temidas, assistidas pelo terapeuta, muitas vezes fora da clínica."
   },
   {
    "id": "m4",
    "title": "Fim de semana: exposições independentes",
    "description": "O adolescente e a família fazem exposições sozinhos."
   },
   {
    "id": "m5",
    "title": "Dia 8: revisão e prevenção de recaída",
    "description": "Rever, prevenir recaída e planear a prática em casa."
   },
   {
    "id": "m6",
    "title": "Chamadas de seguimento",
    "description": "Quatro chamadas semanais de 30 minutos para planear exposições em casa, resolver problemas e passar progressivamente a responsabilidade ao adolescente."
   }
  ],
  "source": "Elkins RM, Gallo KP, Pincus DB, Comer JS, Moderators of intensive CBT for adolescent panic disorder, Child Adolesc Ment Health 2016;21(1):30-36, https://pmc.ncbi.nlm.nih.gov/articles/PMC4768300/ (lido por resumo do WebFetch); Baker HJ, Waite P, The identification and psychological treatment of panic disorder in adolescents: a survey of CAMHS clinicians, Child Adolesc Ment Health 2020;25, https://pmc.ncbi.nlm.nih.gov/articles/PMC7496854/ (texto lido); AACAP, Walter HJ et al., Clinical Practice Guideline for the Assessment and Treatment of Children and Adolescents With Anxiety Disorders, JAACAP 2020;59(10):1107-1124, https://pubmed.ncbi.nlm.nih.gov/32439401/ (texto integral lido numa cópia PDF alojada em njaap.org)"
 },
 {
  "id": "tx-intervencao-comportamental-mutismo",
  "hypotheses": [
   "h-mutismo-seletivo"
  ],
  "name": "Intervenção comportamental e sistémica no mutismo seletivo (exposição gradual e esbatimento de estímulos)",
  "category": "psicoterapia",
  "branches": [
   "pre",
   "esc"
  ],
  "ages": "3 a 9 anos (resultados mais promissores)",
  "line": null,
  "summary": "Combinação de técnicas comportamentais (exposição gradual, esbatimento de estímulos, modelagem, recompensas) com abordagens sistémicas (psicoeducação de pais e professores e estilo de interação adaptado). Os resultados são promissores nas idades dos 3 aos 9 anos, com evidência limitada.",
  "when": "Não há guideline NICE nem AACAP lida para o mutismo seletivo. Hipolito et al. 2023: as intervenções não farmacológicas são vistas como primeira escolha; dos 25 estudos, 72% usaram abordagem comportamental e sistémica combinada, mas só 6 foram ensaios aleatorizados. A NICE CG159 diz só que a criança com mutismo seletivo pode não conseguir falar na avaliação e que se aceite informação dos pais.",
  "format": "Maioria individual (84%), com manual (92%); quem a executa é mais frequentemente clínico, pais e professor (48%); locais: escola ou sala de aula simulada, clínica, casa ou comunidade. Exemplos de duração: 2 a 9 semanas (32%), 10 a 19 semanas (40%), 20 ou mais semanas (12%) e intensivos de menos de 1 semana (16%).",
  "sessions": {
   "typical": null,
   "text": "Sem número típico: os 25 estudos variam de intensivos em menos de 1 semana (2 a 40 horas de contacto) a 20 ou mais semanas (20 a 54 horas). Um programa citado pela Selective Mutism Association é o Integrated Behavior Therapy, de 20 sessões semanais durante seis meses, com 'escada de fala' (talking ladder). Componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Exposição graduada e esbatimento de estímulos",
    "description": "Aumentar gradualmente o número de pessoas e de locais em que a fala é recompensada (por exemplo, começar com um colega com quem já fala)."
   },
   {
    "id": "m2",
    "title": "Sistema de recompensas",
    "description": "Gestão de contingências, reforço e elogio específico e contingente."
   },
   {
    "id": "m3",
    "title": "Psicoeducação a pais e/ou professores",
    "description": "Compreender o mutismo, o tratamento, a gestão da ansiedade e a manutenção do problema."
   },
   {
    "id": "m4",
    "title": "Construção de relação e interação adaptada",
    "description": "Comunicação 'desfocada' ou despreocupada, interação dirigida pela criança."
   },
   {
    "id": "m5",
    "title": "Estratégias de coping",
    "description": "Relaxamento, regulação emocional e respiração (40% das intervenções)."
   },
   {
    "id": "m6",
    "title": "Transferência de controlo e competências sociais",
    "description": "Passar progressivamente o controlo e treinar competências sociais (40% e 32% das intervenções)."
   },
   {
    "id": "m7",
    "title": "Trabalho cognitivo",
    "description": "Mais útil a partir dos 7 anos aproximadamente, acrescentado em momento decidido pelo terapeuta (24% das intervenções)."
   }
  ],
  "source": "Hipolito G, Pagnamenta E, Stacey H, Wright E, Joffe V, Murayama K, Creswell C, A systematic review and meta-analysis of nonpharmacological interventions for children and adolescents with selective mutism, JCPP Advances 2023;3(3):e12166, https://pmc.ncbi.nlm.nih.gov/articles/PMC10501694/ (texto lido, via Europe PMC); Selective Mutism Association, Treating Selective Mutism, https://www.selectivemutism.org/treating-selective-mutism/ (página sem data, lida por resumo do WebFetch); NICE CG159 (perturbação de ansiedade social), publicada 22/05/2013, última revisão 21/05/2024, https://www.nice.org.uk/guidance/cg159/chapter/Recommendations (rec. sobre comunicação com crianças com possível mutismo seletivo)"
 },
 {
  "id": "tx-intervencao-escolar-ansiedade",
  "hypotheses": [
   "h-pag",
   "h-ansiedade-separacao",
   "h-ansiedade-social",
   "h-fobia-especifica",
   "h-panico",
   "h-mutismo-seletivo"
  ],
  "name": "Intervenção escolar na ansiedade e no mutismo seletivo",
  "category": "escolar",
  "ages": "6 a 18 anos (AACAP 2020, TCC); mutismo seletivo 3 a 9 anos",
  "line": null,
  "summary": "Educar professores sobre a ansiedade do aluno e como promover resolução de problemas e coping, com plano de gestão da ansiedade na escola (por exemplo reentrada escolar gradual com recompensas, oportunidades graduadas de prática). Nas intervenções para mutismo seletivo, o professor é frequentemente co-interveniente.",
  "when": "AACAP 2020: intervenções dirigidas à escola podem fazer parte do plano de tratamento. NICE CG159: trabalhar com pais, professores e pares para criar um ambiente que apoie os objetivos do tratamento (rec. 1.5.2). DGS 2009: articulação com a escola. Mutismo seletivo: em 48% das intervenções, clínico, pais e professor participaram.",
  "format": "Contactos clínico-escola; planos escritos de gestão da ansiedade na escola (a AACAP cita o plano 504 e o programa educativo individualizado, do sistema escolar dos EUA).",
  "sessions": {
   "typical": null,
   "text": "Sem número de sessões (componentes, sem ordem fixa)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Educar os professores",
    "description": "Informar sobre a ansiedade do aluno e sobre como promover resolução de problemas, coping e estratégias de gestão da ansiedade na sala de aula."
   },
   {
    "id": "m2",
    "title": "Plano escrito de gestão da ansiedade na escola",
    "description": "Por exemplo reentrada gradual com recompensas contingentes na ansiedade de separação; oportunidades graduadas de prática na ansiedade social."
   },
   {
    "id": "m3",
    "title": "Ambiente que apoie os objetivos do tratamento",
    "description": "Trabalhar com pais, professores, outros adultos e pares para criar condições de apoio (NICE CG159 rec. 1.5.2)."
   },
   {
    "id": "m4",
    "title": "Mutismo seletivo: professor co-interveniente",
    "description": "Nos estudos de intervenção, o professor aplica, com orientação do clínico, as estratégias de esbatimento de estímulos e as recompensas na escola."
   }
  ],
  "source": "AACAP, Walter HJ et al., Clinical Practice Guideline for the Assessment and Treatment of Children and Adolescents With Anxiety Disorders, JAACAP 2020;59(10):1107-1124, https://pubmed.ncbi.nlm.nih.gov/32439401/ (texto integral lido numa cópia PDF alojada em njaap.org) (Treatment Statement 1, Implementation, parágrafo sobre intervenções dirigidas à escola); NICE CG159 (perturbação de ansiedade social), publicada 22/05/2013, última revisão 21/05/2024, https://www.nice.org.uk/guidance/cg159/chapter/Recommendations (rec. 1.5.2); Coordenação Nacional para a Saúde Mental, Saúde Mental Infantil e Juvenil nos Cuidados de Saúde Primários: Recomendações para a Prática Clínica, Lisboa, 2009 (alojado no site da DGS, https://www.dgs.pt/accao-de-saude-para-criancas-e-jovens-em-risco/ficheiros-externos/pub-saude-mentalrecomendacoes-para-a-pratica-clinica-1-pdf.aspx), secções Perturbações da ansiedade e Perturbações do humor (documento de 2009, anterior às guidelines atuais); Hipolito G et al., JCPP Advances 2023;3(3):e12166, https://pmc.ncbi.nlm.nih.gov/articles/PMC10501694/"
 },
 {
  "id": "tx-apoio-parental-ansiedade",
  "hypotheses": [
   "h-pag",
   "h-ansiedade-separacao",
   "h-ansiedade-social",
   "h-fobia-especifica",
   "h-panico",
   "h-mutismo-seletivo"
  ],
  "name": "Apoio e treino dos pais na ansiedade",
  "category": "parental",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "idade não especificada na fonte",
  "line": 1,
  "summary": "Psicoeducação e treino de competências parentais para promover e reforçar a exposição da criança às situações temidas, melhorar a relação pais-criança e reduzir a ansiedade parental. Faz parte da TCC da criança com ansiedade, sobretudo nas crianças pequenas.",
  "when": "NICE CG159: considerar envolver os pais, sobretudo em crianças pequenas (rec. 1.5.3), e incluir psicoeducação e treino de competências dos pais na TCC (rec. 1.5.4 e 1.5.5). AACAP 2020: intervenções dirigidas à família costumam complementar o tratamento individual.",
  "format": "Pais, em sessões próprias ou incluídos nas sessões da criança.",
  "sessions": {
   "typical": null,
   "text": "Sem número específico: faz parte dos 8 a 12 sessões da TCC na ansiedade social (NICE CG159) e dos 12 a 20 sessões da TCC na ansiedade em geral (AACAP 2020). Componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Psicoeducação sobre ansiedade",
    "description": "Explicar aos pais o que é a ansiedade e como a TCC funciona."
   },
   {
    "id": "m2",
    "title": "Promover e reforçar a exposição",
    "description": "Treinar os pais a apoiar e reforçar as exposições às situações temidas e o desenvolvimento de competências."
   },
   {
    "id": "m3",
    "title": "Melhorar a relação pais-criança",
    "description": "Fortalecer a relação entre pais e criança."
   },
   {
    "id": "m4",
    "title": "Comunicação e resolução de problemas em família",
    "description": "Fortalecer a resolução de problemas e a comunicação familiares."
   },
   {
    "id": "m5",
    "title": "Reduzir a ansiedade parental e promover competências parentais",
    "description": "Reduzir a ansiedade dos pais e promover competências parentais que diminuam a ansiedade do filho."
   }
  ],
  "source": "NICE CG159 (perturbação de ansiedade social), publicada 22/05/2013, última revisão 21/05/2024, https://www.nice.org.uk/guidance/cg159/chapter/Recommendations (rec. 1.5.3, 1.5.4, 1.5.5); AACAP, Walter HJ et al., Clinical Practice Guideline for the Assessment and Treatment of Children and Adolescents With Anxiety Disorders, JAACAP 2020;59(10):1107-1124, https://pubmed.ncbi.nlm.nih.gov/32439401/ (texto integral lido numa cópia PDF alojada em njaap.org) (Treatment Statement 1, Implementation)"
 },
 {
  "id": "tx-autoajuda-guiada-toc",
  "hypotheses": [
   "h-toc"
  ],
  "name": "Autoajuda guiada com apoio à família (TOC com compromisso funcional ligeiro)",
  "category": "psicoeducacao",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "a partir dos 8 anos (CG31)",
  "line": 1,
  "summary": "Autoajuda guiada, considerada em conjunto com apoio e informação à família, para crianças e jovens com TOC com compromisso funcional ligeiro. Se for ineficaz ou recusada, passa-se a TCC com exposição e prevenção de resposta.",
  "when": "NICE CG31 rec. 1.5.1.8: TOC com compromisso funcional ligeiro, 'pode ser considerada' a autoajuda guiada com apoio e informação à família ou cuidadores. A CG31 cobre crianças a partir dos 8 anos.",
  "format": "Autoajuda guiada (a fonte não descreve material nem duração).",
  "sessions": {
   "typical": null,
   "text": "A CG31 não indica número de sessões nem o conteúdo da autoajuda guiada para crianças."
  },
  "modules": [],
  "source": "NICE CG31 (PEOC e perturbação dismórfica corporal), publicada 29/11/2005, última revisão 11/07/2024, https://www.nice.org.uk/guidance/cg31/chapter/Recommendations (rec. 1.5.1.8, 1.5.1.9; nota de que a CG31 cobre crianças com 8 anos ou mais)"
 },
 {
  "id": "tx-tcc-epr-toc",
  "hypotheses": [
   "h-toc"
  ],
  "name": "TCC com exposição e prevenção de resposta (EPR) no TOC, 14 sessões (protocolo POTS)",
  "category": "psicoterapia",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "7 a 17 anos (POTS)",
  "line": 1,
  "summary": "TCC com psicoeducação, treino cognitivo, hierarquia de tratamento e exposição com prevenção de resposta, com envolvimento da família e adaptada ao nível de desenvolvimento. É o tratamento de escolha no TOC pediátrico de gravidade moderada a grave.",
  "when": "NICE CG31 rec. 1.5.1.9: TOC com compromisso funcional moderado a grave, ou ligeiro em que a autoajuda guiada foi ineficaz ou recusada: TCC (incluindo EPR) com envolvimento da família ou cuidadores, adaptada à idade de desenvolvimento, como tratamento de escolha; formato de grupo ou individual conforme a preferência. Se recusarem a psicoterapia ou não conseguirem aderir, pode considerar-se ISRS com monitorização cuidadosa (rec. 1.5.1.11). O protocolo POTS foi testado em 7-17 anos.",
  "format": "Individual, sessões de 1 hora; 14 visitas em 12 semanas no POTS II, administradas por psicólogo, enquanto os doentes mantinham um ISRS. Cada sessão tem objetivos, revisão da semana, informação nova, prática assistida, trabalho de casa e monitorização.",
  "sessions": {
   "typical": 14,
   "text": "14 sessões de 1 hora em 12 semanas (POTS II, Franklin 2011). A CG31 não indica número de sessões para crianças; pede 1 ou mais sessões adicionais nas revisões após o fim da TCC, se necessário (rec. 1.5.2.12)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Sessões 1 a 4: psicoeducação e definição da PEOC como o problema",
    "description": "Explicar o TOC e identificar o TOC como o problema a tratar, em conjunto com a família."
   },
   {
    "id": "m2",
    "title": "Sessões 1 a 4: treino cognitivo",
    "description": "Treino cognitivo no início do tratamento (a fonte não detalha a ordem interna das sessões 1 a 4)."
   },
   {
    "id": "m3",
    "title": "Sessões 1 a 4: hierarquia de tratamento",
    "description": "Construir uma hierarquia das situações temidas, da menos para a mais ansiogénica, para guiar a exposição."
   },
   {
    "id": "m4",
    "title": "Sessões 5 a 12: exposição com prevenção de resposta (EPR)",
    "description": "Exposição às situações temidas sem executar o ritual, escalonada pela hierarquia, com prática assistida em sessão e trabalho de casa."
   },
   {
    "id": "m5",
    "title": "Últimas sessões: generalização e prevenção de recaída",
    "description": "As duas últimas sessões incorporam treino de generalização e prevenção de recaída (e reutilizar a EPR se surgirem sintomas novos, rec. 1.5.2.12)."
   },
   {
    "id": "m6",
    "title": "Em toda a TCC: aliança, otimismo, família e escola",
    "description": "Manter a aliança com a criança e a família, manter o otimismo, definir alvos em colaboração, envolver a família na EPR, articular com professores e considerar recompensas para motivar (CG31 rec. 1.5.2.12 e 1.5.2.13)."
   }
  ],
  "source": "NICE CG31 (PEOC e perturbação dismórfica corporal), publicada 29/11/2005, última revisão 11/07/2024, https://www.nice.org.uk/guidance/cg31/chapter/Recommendations (rec. 1.5.1.8 a 1.5.1.12, 1.5.2.12, 1.5.2.13); Franklin ME, Sapyta J, Freeman JB, Khanna M, Compton S, Almirall D, Moore P, Choate-Summers M, Garcia A, Edson AL, Foa EB, March JS, Cognitive behavior therapy augmentation of pharmacotherapy in pediatric obsessive-compulsive disorder: the Pediatric OCD Treatment Study II (POTS II) randomized controlled trial, JAMA 2011;306(11):1224-1232, https://pmc.ncbi.nlm.nih.gov/articles/PMC3495326/ (manuscrito de autor, texto lido) (secção de métodos, CBT: 14 visitas de 1 hora em 12 semanas, visitas 1 a 4 e 5 a 12)"
 },
 {
  "id": "tx-tcc-epr-familiar-toc-5-8",
  "hypotheses": [
   "h-toc"
  ],
  "name": "TCC com EPR de base familiar para o TOC dos 5 aos 8 anos (POTS Jr, 12 sessões)",
  "category": "psicoterapia",
  "branches": [
   "esc"
  ],
  "ages": "5 a 8 anos (POTS Jr)",
  "line": 1,
  "summary": "TCC com EPR em que as duas primeiras sessões são só com os pais, para explicar o TOC e o racional antes de a criança ser introduzida, seguidas de sessões conjuntas com a criança. Combina psicoeducação, 'ferramentas' parentais, externalização do TOC, EPR e componentes de processo familiar.",
  "when": "NICE CG31 rec. 1.5.1.9: TCC com EPR com envolvimento da família e adaptada à idade de desenvolvimento. O POTS Jr é um protocolo para 5-8 anos; o artigo lido é a descrição do desenho e dos métodos (ensaio comparado com relaxamento), não um manual completo.",
  "format": "12 sessões em 14 semanas; as 2 primeiras de 90 minutos só com os pais, as restantes de 60 minutos conjuntas pais e criança. Prática em casa com sistema de recompensas.",
  "sessions": {
   "typical": 12,
   "text": "12 sessões em 14 semanas (Freeman et al. 2012). A fonte fixa só as sessões 1 e 2 (só pais); os restantes módulos são os componentes descritos, sem ordem exata por sessão."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Sessões 1 e 2 (só pais, 90 min): psicoeducação",
    "description": "Neurobiologia do TOC, correção de atribuições erradas, distinguir o TOC de comportamentos que não são TOC (incluindo rituais normais do desenvolvimento) e explicar o racional do tratamento."
   },
   {
    "id": "m2",
    "title": "Psicoeducação da criança: externalizar o TOC",
    "description": "Ajudar a criança, com os pais, a ver o TOC como separado de si ('mandar no TOC')."
   },
   {
    "id": "m3",
    "title": "Competências parentais ('ferramentas dos pais')",
    "description": "Atenção diferencial (incluindo programa de recompensas), modelação e andaimagem da regulação emocional; gestão de contingências se a criança resistir à EPR por oposição."
   },
   {
    "id": "m4",
    "title": "Hierarquia e termómetro do medo",
    "description": "Construir a hierarquia e avaliar a ansiedade com escalas simplificadas (por exemplo rostos ou termómetro por colorir)."
   },
   {
    "id": "m5",
    "title": "EPR com colaboração dos pais",
    "description": "Exposição com prevenção de resposta com os pais ativos durante as exposições em sessão e a prática em casa facilitada pelo programa de recompensas."
   },
   {
    "id": "m6",
    "title": "Componentes de processo familiar (opcionais)",
    "description": "Reduzir a acomodação familiar dos sintomas, a crítica e a hostilidade, promover a resolução de problemas familiar e ajudar os pais a perceber o seu próprio papel de modelo de interpretações ansiosas."
   }
  ],
  "source": "Freeman J, Garcia A, Benito K, Conelea C, Sapyta J, Khanna M, March J, Franklin M, The Pediatric Obsessive Compulsive Disorder Treatment Study for Young Children (POTS Jr): developmental considerations in the rationale, design, and methods, J Obsessive Compuls Relat Disord 2012;1(4):294-300, https://pmc.ncbi.nlm.nih.gov/articles/PMC3501965/ (texto lido, secção 2.8; lista de autores completa não confirmada: primeira autora Jennifer Freeman); NICE CG31 (PEOC e perturbação dismórfica corporal), publicada 29/11/2005, última revisão 11/07/2024, https://www.nice.org.uk/guidance/cg31/chapter/Recommendations (rec. 1.5.1.9)"
 },
 {
  "id": "tx-reducao-acomodacao-familiar-toc",
  "hypotheses": [
   "h-toc"
  ],
  "name": "Redução da acomodação familiar aos rituais e evitamentos",
  "category": "familiar",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "a partir dos 8 anos (NICE CG31)",
  "line": 1,
  "summary": "Ajudar os familiares envolvidos nos comportamentos compulsivos, no evitamento ou na procura de reasseguramento a reduzirem essa participação de forma sensível e de apoio. Faz parte do plano de tratamento do TOC.",
  "when": "NICE CG31 rec. 1.5.2.9: quando os familiares ou cuidadores se envolveram nos comportamentos compulsivos, no evitamento ou na procura de reasseguramento, os planos de tratamento devem ajudá-los a reduzir esse envolvimento.",
  "format": "Pais e família, em articulação com a TCC da criança.",
  "sessions": {
   "typical": null,
   "text": "Sem número de sessões (componentes, sem ordem fixa)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Reduzir a acomodação familiar",
    "description": "Reduzir o envolvimento da família nos rituais, evitamentos e pedidos de reasseguramento."
   },
   {
    "id": "m2",
    "title": "Reduzir a crítica e a hostilidade",
    "description": "Reduzir a crítica e a hostilidade face aos sintomas."
   },
   {
    "id": "m3",
    "title": "Promover a resolução de problemas em família",
    "description": "Promover resolução positiva de problemas relacionados com o TOC."
   },
   {
    "id": "m4",
    "title": "Papel dos pais como modelo",
    "description": "Ajudar os pais a perceber o papel das suas próprias interpretações e comportamentos ansiosos."
   },
   {
    "id": "m5",
    "title": "Corrigir atribuições erradas",
    "description": "Corrigir atribuições ou pressupostos negativos ou incorretos sobre o TOC; abordar a acomodação de forma processual e não didática."
   }
  ],
  "source": "NICE CG31 (PEOC e perturbação dismórfica corporal), publicada 29/11/2005, última revisão 11/07/2024, https://www.nice.org.uk/guidance/cg31/chapter/Recommendations (rec. 1.5.2.9); Freeman J et al., J Obsessive Compuls Relat Disord 2012;1(4):294-300, https://pmc.ncbi.nlm.nih.gov/articles/PMC3501965/ (componentes de processo familiar do POTS Jr)"
 },
 {
  "id": "tx-articulacao-escola-toc",
  "hypotheses": [
   "h-toc"
  ],
  "name": "Articulação com a escola no TOC",
  "category": "escolar",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "a partir dos 8 anos (NICE CG31)",
  "line": null,
  "summary": "Contacto com professores e outros profissionais quando os sintomas obsessivo-compulsivos interferem com o desempenho escolar. Faz parte do cuidado do TOC na criança e no jovem.",
  "when": "NICE CG31: em crianças e jovens, quando os sintomas interferem com o desempenho escolar, pode ser adequado articular com profissionais da escola (rec. 1.1.4.1); a TCC deve incluir contacto com professores, assistentes sociais e outros profissionais quando a atividade compulsiva interfere com o funcionamento (rec. 1.5.2.12).",
  "format": "Contactos clínico-escola.",
  "sessions": {
   "typical": null,
   "text": "Sem número de sessões (componentes, sem ordem fixa)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Identificar a interferência na escola",
    "description": "Avaliar o impacto dos rituais e das compulsões no desempenho escolar."
   },
   {
    "id": "m2",
    "title": "Articular com professores e outros profissionais",
    "description": "Com consentimento da família, contactar professores, assistentes sociais e outros profissionais envolvidos."
   },
   {
    "id": "m3",
    "title": "Alinhar a escola com os alvos da TCC",
    "description": "Coordenar a ação da escola com os alvos acordados na TCC."
   }
  ],
  "source": "NICE CG31 (PEOC e perturbação dismórfica corporal), publicada 29/11/2005, última revisão 11/07/2024, https://www.nice.org.uk/guidance/cg31/chapter/Recommendations (rec. 1.1.4.1, 1.5.2.12)"
 },
 {
  "id": "tx-hrt-tricotilomania",
  "hypotheses": [
   "h-tricotilomania"
  ],
  "name": "Treino de inversão de hábito (habit reversal training, HRT)",
  "category": "psicoterapia",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "crianças e jovens (idades não detalhadas na fonte)",
  "line": 1,
  "summary": "Terapia comportamental que ensina a notar o início do puxar de cabelo (consciência), a usar uma resposta incompatível e a controlar os estímulos que o desencadeiam. É apresentada como o tratamento padrão da tricotilomania, com ensaios aleatorizados e estudos de coorte em crianças e jovens.",
  "when": "Não há guideline NICE nem AACAP lida para a tricotilomania. Sharifi et al. 2026 (revisão sistemática): TCC, em concreto HRT, 'permanece o tratamento de primeira linha'; a evidência pediátrica tem poucos ensaios e amostras pequenas. Pais envolvidos como apoio.",
  "format": "Individual, com envolvimento opcional da família.",
  "sessions": {
   "typical": 8,
   "text": "8 sessões semanais no ensaio de Rahman et al. 2017 (n=40, crianças) e 8 sessões na coorte de Rautio et al. 2024 (n=63), segundo a revisão. A ordem dos componentes abaixo é a lista dos autores, sem sequência por sessão."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Psicoeducação",
    "description": "Explicar a perturbação e o racional da terapia."
   },
   {
    "id": "m2",
    "title": "Intervenção funcional",
    "description": "Identificar gatilhos, funções e consequências do comportamento."
   },
   {
    "id": "m3",
    "title": "Controlo de estímulos",
    "description": "Reduzir a exposição aos contextos que desencadeiam o puxar."
   },
   {
    "id": "m4",
    "title": "Treino de consciência",
    "description": "Aprender a notar o puxar logo no início."
   },
   {
    "id": "m5",
    "title": "Treino de resposta competitiva",
    "description": "Aprender um comportamento incompatível com o puxar, usado quando surge o impulso."
   },
   {
    "id": "m6",
    "title": "Treino de evitamento",
    "description": "Componente listado pelos autores; a fonte não o descreve."
   },
   {
    "id": "m7",
    "title": "Apoio social",
    "description": "Um familiar ajuda a criança a usar a resposta competitiva (componente do ensaio de Rahman)."
   },
   {
    "id": "m8",
    "title": "Prevenção de recaída",
    "description": "Preparar a manutenção dos ganhos."
   }
  ],
  "source": "Sharifi S, Estill M, Tordjman L, Millan SH, Ouyang JX et al., Treatment Strategies for Pediatric Trichotillomania: State-of-the-Art Review on Progress and Persistent Challenges, Pediatr Dermatol 2026;43(1), doi 10.1111/pde.70014, https://pmc.ncbi.nlm.nih.gov/articles/PMC12854921/ (texto lido, via Europe PMC; revisão sistemática com pesquisa de abril de 2024)"
 },
 {
  "id": "tx-comb-tricotilomania",
  "hypotheses": [
   "h-tricotilomania"
  ],
  "name": "Tratamento comportamental abrangente (ComB) da tricotilomania",
  "category": "psicoterapia",
  "ages": "idade não especificada na fonte",
  "line": null,
  "summary": "Terapia individualizada em 4 fases que parte de uma avaliação funcional de cinco domínios (sensorial, cognitivo, afetivo, motor e local) e escolhe intervenções para cada domínio. Foi adaptada a crianças e adolescentes, mas a evidência de eficácia ainda está a ser reunida.",
  "when": "Não há guideline lida que a recomende. Mansueto e Golomb (IOCDF): o ComB é favorecido por muitos clínicos; o manual foi desenvolvido e testado numa primeira fase, a segunda (contra placebo de mínima atenção) estava em curso e a terceira (contra HRT) por fazer. Adaptado a crianças e adolescentes por Golomb e Vavrichek (2000).",
  "format": "Individual e flexível, sem estrutura rígida de sessões.",
  "sessions": {
   "typical": null,
   "text": "A fonte lida não indica número de sessões; descreve 4 fases."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Fase 1: avaliação funcional",
    "description": "Mapear antecedentes e consequências nos domínios sensorial, cognitivo, afetivo, motor e local (modelo SCAMP)."
   },
   {
    "id": "m2",
    "title": "Fase 2: identificar e escolher domínios-alvo",
    "description": "Escolher os domínios e as estratégias, com alternativas saudáveis ao puxar."
   },
   {
    "id": "m3",
    "title": "Fase 3: implementar intervenções",
    "description": "Reestruturação cognitiva e mindfulness (cognitivo); relaxação, respiração e competências de DBT (afetivo); consciência, resposta competitiva e prevenção de resposta (motor); controlo de estímulos e gestão de contingências (local); substituição sensorial (sensorial)."
   },
   {
    "id": "m4",
    "title": "Fase 4: avaliação, terminação e prevenção de recaída",
    "description": "Passar da orientação do terapeuta para a autogestão e preparar contratempos."
   }
  ],
  "source": "Mansueto CS, Golomb RG, Comprehensive Behavioral (ComB) Treatment for Skin Picking and Hair Pulling Disorders, International OCD Foundation, https://iocdf.org/expert-opinions/comprehensive-behavioral-comb-treatment-for-skin-picking-and-hair-pulling-disorders/ (página sem data, texto lido)"
 },
 {
  "id": "tx-psicoeducacao-pais-tricotilomania",
  "hypotheses": [
   "h-tricotilomania"
  ],
  "name": "Psicoeducação e apoio aos pais na tricotilomania da criança pequena",
  "category": "psicoeducacao",
  "branches": [
   "pre",
   "esc"
  ],
  "ages": "crianças mais novas (sem idades na fonte)",
  "line": null,
  "summary": "Explicar aos pais a natureza do comportamento e apoiá-los, porque na criança pequena a tricotilomania é muitas vezes vista como um hábito que pode resolver espontaneamente. Não substitui a avaliação nem o tratamento comportamental quando há compromisso funcional.",
  "when": "Sharifi et al. 2026: em crianças mais novas a tricotilomania é muitas vezes percebida como um hábito que pode resolver espontaneamente, e a educação e o apoio dos pais são essenciais; um diagnóstico atempado é importante.",
  "format": "Pais, em consulta.",
  "sessions": {
   "typical": null,
   "text": "Sem número de sessões nas fontes lidas."
  },
  "modules": [],
  "source": "Sharifi S et al., Pediatr Dermatol 2026;43(1), https://pmc.ncbi.nlm.nih.gov/articles/PMC12854921/ (introdução)"
 },
 {
  "id": "tx-monitorizacao-ativa-pstp",
  "hypotheses": [
   "h-pstp"
  ],
  "name": "Monitorização ativa no primeiro mês após o trauma",
  "category": "outra",
  "ages": "menores de 18 anos (NG116)",
  "line": 1,
  "summary": "Seguimento regular, sem tratamento psicológico específico, nos primeiros tempos após um acontecimento traumático. É uma das duas opções, com a TCC focada no trauma individual, no primeiro mês.",
  "when": "NICE NG116: sintomas subliminares de PSPT no primeiro mês: considerar monitorização ativa, com contacto de seguimento no prazo de 1 mês (rec. 1.6.4); crianças e jovens com menos de 18 anos com perturbação aguda de stress ou sintomas de PSPT clinicamente importantes no primeiro mês: considerar monitorização ativa ou TCC focada no trauma individual (rec. 1.6.6). A comissão notou que há muita recuperação natural nas primeiras semanas.",
  "format": "Contactos de seguimento.",
  "sessions": {
   "typical": null,
   "text": "Sem número de sessões: contacto de seguimento no prazo de 1 mês."
  },
  "modules": [],
  "source": "NICE NG116 (PSPT), publicada 05/12/2018, última revisão 23/07/2026 (sem atualização das recomendações), https://www.nice.org.uk/guidance/ng116/chapter/Recommendations (rec. 1.6.4, 1.6.6; secção Rationale and impact)"
 },
 {
  "id": "tx-tf-cbt-individual",
  "hypotheses": [
   "h-pstp",
   "h-pstp-complexo",
   "h-vinculacao-reativa",
   "h-relacao-social-desinibida"
  ],
  "name": "TCC focada no trauma individual (TF-CBT)",
  "category": "psicoterapia",
  "ages": "3 a 18 anos (NCTSN); NG116 sem limite de idade (5-6 anos considerar, 7-17 oferecer)",
  "line": 1,
  "summary": "Terapia individual com pais ou cuidadores, adaptada à idade, com psicoeducação, gestão da ativação, narrativa e processamento do trauma e prevenção do evitamento. O modelo TF-CBT estrutura-a em componentes sucessivos (PRACTICE).",
  "when": "NICE NG116: 7-17 anos com PSPT ou sintomas clinicamente importantes que se apresentam mais de 3 meses após o trauma, oferecer (rec. 1.6.11); entre 1 e 3 meses, considerar (rec. 1.6.10); 5-6 anos, mais de 1 mês depois, considerar (rec. 1.6.9). Não oferecer fármacos a menores de 18 anos (rec. 1.6.14). Se houver PSPT e depressão, tratar em geral primeiro o PSPT, exceto se a depressão for tão grave que dificulte a terapia ou houver risco de dano (rec. 1.7.1). NICE NG26 rec. 1.4.12: crianças maltratadas com sinais de trauma ou PSPT.",
  "format": "Sessões individuais da criança e dos pais ou cuidadores em paralelo, e sessões conjuntas; manual validado, terapeutas treinados com supervisão; sessões de reforço se necessário, sobretudo em datas significativas.",
  "sessions": {
   "typical": null,
   "text": "NG116: tipicamente 6 a 12 sessões, mais se clinicamente indicado (por exemplo traumas múltiplos). NCTSN (2004, atualizado em 2008): 12 a 16 sessões em casos habituais e 16 a 20 em casos complexos, componentes PRACTICE pela ordem, salvo razão para alterar."
  },
  "modules": [
   {
    "id": "m1",
    "title": "P: Psicoeducação",
    "description": "Informar crianças e cuidadores sobre reações normais ao trauma, benefícios do tratamento e o processo terapêutico; é o primeiro passo."
   },
   {
    "id": "m2",
    "title": "P: Competências parentais",
    "description": "Ensinar aos cuidadores estratégias para gerir o comportamento (elogio, atenção seletiva, time-out, consistência e previsibilidade)."
   },
   {
    "id": "m3",
    "title": "R: Relaxamento",
    "description": "Respiração controlada, relaxamento muscular progressivo, imaginação positiva e outras atividades calmantes; as crianças ensinam-nas aos pais nas sessões conjuntas."
   },
   {
    "id": "m4",
    "title": "A: Identificação e regulação afetiva",
    "description": "Vocabulário emocional, expressão e modulação de emoções; autoapaziguamento."
   },
   {
    "id": "m5",
    "title": "C: Coping cognitivo",
    "description": "Triângulo cognitivo, identificar e desafiar 'erros de pensamento' e substituí-los por pensamentos corretos e úteis."
   },
   {
    "id": "m6",
    "title": "T: Narrativa e processamento do trauma",
    "description": "Exposição gradual por livro, desenhos ou canções; processar vergonha, culpa, perda e raiva; os cuidadores são preparados para ouvir."
   },
   {
    "id": "m7",
    "title": "I: Mestria in vivo dos lembretes do trauma",
    "description": "Exposição gradual in vivo a lembretes inofensivos que a criança evita; é o componente que pode não ser necessário se não houver evitamento."
   },
   {
    "id": "m8",
    "title": "C: Sessões conjuntas criança-cuidadores",
    "description": "Partilhar a narrativa com os cuidadores, normalmente depois de concluída."
   },
   {
    "id": "m9",
    "title": "E: Segurança e desenvolvimento futuro",
    "description": "Plano de segurança e competências de segurança pessoal, preparar o fim do tratamento e planear sessões de reforço se necessário."
   }
  ],
  "source": "NICE NG116 (PSPT), publicada 05/12/2018, última revisão 23/07/2026 (sem atualização das recomendações), https://www.nice.org.uk/guidance/ng116/chapter/Recommendations (rec. 1.6.9 a 1.6.14, 1.7.1); NICE NG26 (vinculação em crianças e jovens adotados, em acolhimento ou em risco de acolhimento), publicada 25/11/2015, https://www.nice.org.uk/guidance/ng26/chapter/Recommendations (rec. 1.4.12); NCTSN Child Sexual Abuse Task Force, How to Implement Trauma-Focused Cognitive Behavioral Therapy (TF-CBT), 2004, versão 2, atualização de referências 2008, https://www.nctsn.org/sites/default/files/resources/how_to_implement_tfcbt.pdf (12-16 e 16-20 sessões, ordem PRACTICE); Cohen JA, Mannarino AP, Deblinger E, TF-CBT Treatment Components Summary PRACTICE, versão 17/10/2017, https://tfcbt2.musc.edu/enpractice_pdf.pdf (componentes; sem número de sessões)"
 },
 {
  "id": "tx-tf-cbt-grupo-trauma-partilhado",
  "hypotheses": [
   "h-pstp"
  ],
  "name": "TCC focada no trauma em grupo (acontecimento de trauma coletivo recente)",
  "category": "psicoterapia",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "7 a 17 anos",
  "line": 2,
  "summary": "Intervenção de grupo com psicoeducação, estratégias de gestão da ativação e dos flashbacks, plano de segurança, elaboração das memórias do trauma, reestruturação de significados e ajuda para superar o evitamento. Destina-se a crianças e jovens expostos a um trauma coletivo de grande escala.",
  "when": "NICE NG116 rec. 1.6.7: considerar, nos 7-17 anos, se houve nos últimos 30 dias um acontecimento que levou a trauma coletivo de grande escala. A TCC focada no trauma é mais eficaz e custo-efetiva se for individual do que em grupo.",
  "format": "Grupo, baseada em manual validado, por profissionais treinados com supervisão contínua.",
  "sessions": {
   "typical": null,
   "text": "NG116 rec. 1.6.8: tipicamente 5 a 15 sessões."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Psicoeducação sobre reações ao trauma",
    "description": "Informar sobre as reações ao trauma."
   },
   {
    "id": "m2",
    "title": "Gestão da ativação e dos flashbacks",
    "description": "Estratégias para lidar com a ativação fisiológica e os flashbacks."
   },
   {
    "id": "m3",
    "title": "Plano de segurança",
    "description": "Planeamento de segurança."
   },
   {
    "id": "m4",
    "title": "Elaboração e processamento das memórias do trauma",
    "description": "Trabalhar as memórias do trauma."
   },
   {
    "id": "m5",
    "title": "Reestruturação de significados",
    "description": "Reestruturar os significados relacionados com o trauma."
   },
   {
    "id": "m6",
    "title": "Superar o evitamento",
    "description": "Ajudar a ultrapassar o evitamento."
   }
  ],
  "source": "NICE NG116 (PSPT), publicada 05/12/2018, última revisão 23/07/2026 (sem atualização das recomendações), https://www.nice.org.uk/guidance/ng116/chapter/Recommendations (rec. 1.6.7, 1.6.8; Rationale and impact)"
 },
 {
  "id": "tx-emdr-pstp",
  "hypotheses": [
   "h-pstp",
   "h-pstp-complexo"
  ],
  "name": "Dessensibilização e reprocessamento por movimentos oculares (EMDR)",
  "category": "psicoterapia",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "7 a 17 anos",
  "line": 2,
  "summary": "Terapia centrada no trauma alternativa à TCC focada no trauma. A NICE só a considera se a criança não responder ou não aderir à TCC focada no trauma.",
  "when": "NICE NG116 rec. 1.6.13: considerar nos 7-17 anos com PSPT que se apresentam mais de 3 meses após o trauma, apenas se não responderem ou não aderirem à TCC focada no trauma. Os dados sobre EMDR em crianças são limitados e menos eficazes e custo-efetivos do que todas as TCC focadas no trauma individuais.",
  "format": "Individual.",
  "sessions": {
   "typical": null,
   "text": "A NG116 não indica número de sessões nem componentes do EMDR em crianças e jovens."
  },
  "modules": [],
  "source": "NICE NG116 (PSPT), publicada 05/12/2018, última revisão 23/07/2026 (sem atualização das recomendações), https://www.nice.org.uk/guidance/ng116/chapter/Recommendations (rec. 1.6.13; Rationale and impact)"
 },
 {
  "id": "tx-adaptacao-tf-cbt-pstp-complexo",
  "hypotheses": [
   "h-pstp-complexo"
  ],
  "name": "Adaptações do tratamento focado no trauma no PSPT complexo (mais tempo e estabilização)",
  "category": "psicoterapia",
  "ages": "idade não especificada na fonte",
  "line": null,
  "summary": "Não existe tratamento específico recomendado para o PSPT complexo na criança; a TCC focada no trauma ajuda mas menos, pelo que se sugerem mais sessões, mais tempo para criar confiança e atenção aos fatores que impedem a terapia. A TCC focada no trauma pode ser usada com estes ajustes.",
  "when": "ISTSS (2018, posição sobre PSPT complexo em crianças e adolescentes): 'não há evidência suficiente para recomendar um tratamento em particular', a TCC focada no trauma beneficia estas crianças 'embora um pouco menos'. NICE NG116 rec. 1.7.3: pessoas com necessidades adicionais, incluindo PSPT complexo.",
  "format": "Individual, com cuidadores; ajustes ao tratamento focado no trauma.",
  "sessions": {
   "typical": null,
   "text": "NG116: aumentar a duração ou o número de sessões de acordo com as necessidades. NCTSN: 16 a 20 sessões nos casos complexos de TF-CBT. A ISTSS sugere investigar sessões adicionais, maior envolvimento dos pais, mais de certos componentes, sequenciação diferente ou sessões de reforço."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Mais tempo para criar confiança",
    "description": "Aumentar a duração ou o número de sessões conforme a necessidade."
   },
   {
    "id": "m2",
    "title": "Segurança e estabilidade das circunstâncias",
    "description": "Ter em conta a segurança e a estabilidade das circunstâncias pessoais (por exemplo habitação) e o seu efeito na adesão e no resultado."
   },
   {
    "id": "m3",
    "title": "Barreiras ao tratamento focado no trauma",
    "description": "Ajudar a gerir consumo de substâncias, dissociação, desregulação emocional, dificuldades interpessoais e autoperceção negativa."
   },
   {
    "id": "m4",
    "title": "Plano de apoio após o fim do tratamento",
    "description": "Planear com a pessoa o apoio necessário depois do fim, por exemplo para sintomas residuais ou comorbilidades."
   }
  ],
  "source": "NICE NG116 (PSPT), publicada 05/12/2018, última revisão 23/07/2026 (sem atualização das recomendações), https://www.nice.org.uk/guidance/ng116/chapter/Recommendations (rec. 1.7.3); ISTSS Guidelines Position Paper on Complex PTSD in Children and Adolescents, 2018, https://istss.org/wp-content/uploads/2024/08/ISTSS-Guidelines-Position-Paper-on-Complex-PTSD-in-Children-and-Adolescents.pdf (texto lido); NCTSN, How to Implement TF-CBT, 2004/2008"
 },
 {
  "id": "tx-componentes-tcc-coping-adaptacao",
  "hypotheses": [
   "h-adaptacao"
  ],
  "name": "Componentes de TCC para o coping com o stress na perturbação de adaptação",
  "category": "psicoterapia",
  "ages": "idade não especificada na fonte",
  "line": null,
  "summary": "Estratégias cognitivo-comportamentais de coping com o stress, escolhidas conforme os sintomas predominantes. É a abordagem com mais suporte indireto, mas não há tratamento específico validado para a perturbação de adaptação na criança.",
  "when": "Não foi encontrada guideline (NICE, AACAP, DGS) para a perturbação de adaptação em crianças e jovens. Uma revisão de 2026 (Clin Child Fam Psychol Rev) escreve que há 'pouca orientação com suporte empírico' e que 'os componentes de terapias cognitivas e comportamentais têm mais apoio de investigação e dão aos jovens várias estratégias para lidar com o stress'. Só li o resumo (abstract).",
  "format": "Não especificado na fonte lida.",
  "sessions": {
   "typical": null,
   "text": "A fonte lida (resumo) não indica sessões nem componentes concretos."
  },
  "modules": [],
  "source": "Treating Adjustment Disorders in Children and Adolescents: At the Intersection of Prevention and Psychopathology, Clin Child Fam Psychol Rev 2026, doi 10.1007/s10567-026-00575-5, PMID 42301559 (apenas resumo lido, via Europe PMC; texto integral inacessível; autores não registados)"
 },
 {
  "id": "tx-apoio-luto-informado",
  "hypotheses": [
   "h-luto-prolongado"
  ],
  "name": "Apoio informado pelo luto (bereavement-informed care) a jovens e famílias",
  "category": "psicoeducacao",
  "ages": "idade não especificada na fonte",
  "line": null,
  "summary": "Escuta empática, apoio social, bem-estar dos cuidadores, autocuidado e explicação de que o luto leva tempo e que cada pessoa o vive de forma diferente. Pode prevenir ou acompanhar o luto prolongado, e integra a prevenção do suicídio informada pelo luto.",
  "when": "ISTSS (ficha informativa, não é guideline): critérios DSM-5-TR de perturbação de luto prolongado em crianças com pelo menos 6 meses desde a morte (12 meses em adultos); sintomas do critério B (anseio, preocupação) podem sinalizar risco e necessidade de intervenção precoce.",
  "format": "Individual e familiar.",
  "sessions": {
   "typical": null,
   "text": "Sem número de sessões (componentes, sem ordem fixa)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Escutar sem julgar e ajudar a nomear emoções",
    "description": "Ouvir com empatia e sem julgamento e ajudar o jovem a nomear e compreender emoções."
   },
   {
    "id": "m2",
    "title": "Mobilizar apoio social",
    "description": "Ensinar o jovem a recrutar apoio e ajudar a rede social a prestá-lo."
   },
   {
    "id": "m3",
    "title": "Promover o bem-estar e o papel dos cuidadores",
    "description": "Reconhecer que também os cuidadores podem estar em luto e enfrentar adversidades."
   },
   {
    "id": "m4",
    "title": "Autocuidado",
    "description": "Sono, alimentação, exercício, descanso e convívio."
   },
   {
    "id": "m5",
    "title": "Explicar que o luto leva tempo",
    "description": "O luto exige tempo e energia e pode ser adiado em parte perante problemas urgentes; as pessoas e as famílias vivem o luto de formas diferentes e podem estar dessincronizadas."
   },
   {
    "id": "m6",
    "title": "Ideação suicida informada pelo luto",
    "description": "A ideação pode refletir anseio de reencontro com o falecido ou crise existencial ou de identidade; validar e integrar na prevenção do suicídio."
   }
  ],
  "source": "Layne CM, Ahmad A, Schapiro S, Yoder BA, Bereavement, Prolonged Grief Disorder, and Bereavement-Informed Care for Children and Adolescents, ISTSS fact sheet, https://istss.org/wp-content/uploads/2024/09/ISTSS-Fact-Sheet-Bereavement-Child-and-Adolescent.pdf (texto lido; ficha informativa e não guideline)"
 },
 {
  "id": "tx-tcc-luto-grief-help",
  "hypotheses": [
   "h-luto-prolongado"
  ],
  "name": "TCC centrada no luto (CBT Grief-Help): 9 sessões com a criança e 5 com os pais",
  "category": "psicoterapia",
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "8 a 18 anos",
  "line": null,
  "summary": "Terapia familiar de base cognitivo-comportamental com psicoeducação, reestruturação cognitiva, exposição e exercícios de escrita, centrada na relação criança-cuidador. Foi a única intervenção testada em mais de um estudo numa revisão sistemática de 2025.",
  "when": "Não há guideline lida para o luto prolongado em crianças. A revisão (Bondy e Scott 2025) refere resultados 'geralmente positivos' mas preliminares, amostras pequenas e só 2 ensaios aleatorizados. A mesma revisão lista também CBT-CTG (TCC para luto traumático infantil, 12 sessões com psicoeducação, narrativa do trauma, atribuição de sentido e competências parentais).",
  "format": "Individual com a criança e sessões separadas para pais ou cuidadores.",
  "sessions": {
   "typical": 9,
   "text": "9 sessões individuais com a criança mais 5 sessões com os pais (Bondy e Scott 2025, por resumo). A fonte lida não detalha os temas por sessão (componentes, sem ordem fixa)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Psicoeducação",
    "description": "Informar sobre o luto."
   },
   {
    "id": "m2",
    "title": "Reestruturação cognitiva",
    "description": "Trabalhar pensamentos relacionados com a perda."
   },
   {
    "id": "m3",
    "title": "Exposição",
    "description": "Aproximar-se de memórias e lembranças da perda."
   },
   {
    "id": "m4",
    "title": "Exercícios de escrita",
    "description": "Atividades de escrita sobre a perda."
   },
   {
    "id": "m5",
    "title": "Melhorar a relação criança-cuidador",
    "description": "Sessões paralelas com pais ou cuidadores."
   }
  ],
  "source": "Bondy S, Scott H, Interventions for Prolonged Grief Disorder in Children and Adolescents: A Systematic Review, J Child Adolesc Trauma 2025;18(3):517-527, https://pmc.ncbi.nlm.nih.gov/articles/PMC12433411/ (lido por resumo do WebFetch)"
 },
 {
  "id": "tx-tgcta-luto-trauma",
  "hypotheses": [
   "h-luto-prolongado"
  ],
  "name": "Terapia modular de trauma e luto para adolescentes (TGCTA)",
  "category": "psicoterapia",
  "branches": [
   "adol"
  ],
  "ages": "12 a 20 anos",
  "line": null,
  "summary": "Programa manualizado, em grupo ou individual, orientado pela avaliação, com 4 módulos que o clínico seleciona e sequencia conforme as necessidades. Dirigido a jovens expostos a trauma, a perda traumática ou a ambos.",
  "when": "Não há guideline lida que o recomende; o Clearinghouse CEBC dá-lhe classificação científica 3 (a escala não é explicada na página lida). Idades 12-20.",
  "format": "Grupo de 5 a 9 jovens com 1 a 2 clínicos, ou individual; sessões geralmente semanais de 50 a 75 minutos durante 12 a 26 semanas; trabalhos de casa em todas as sessões; consultas breves para pais.",
  "sessions": {
   "typical": null,
   "text": "12 a 26 semanas, em geral semanais de 50 a 75 minutos (CEBC); a página não indica o número total de sessões. A revisão de Bondy e Scott descreve o TGCTA em grupo como 2 sessões por semana durante 5 semanas."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Módulo I: psicoeducação e treino de competências",
    "description": "Reações ao stress traumático e ao luto, regulação emocional, lidar com lembretes do trauma e da perda e construir apoio social."
   },
   {
    "id": "m2",
    "title": "Módulo II: narrativa do trauma ou da perda",
    "description": "Construir uma narrativa detalhada de um trauma ou perda principal e processar os 'piores momentos' e impulsos."
   },
   {
    "id": "m3",
    "title": "Módulo III: processamento do luto e da perda traumática",
    "description": "Trabalhar o luto nos domínios do desconforto da separação, do sofrimento existencial ou de identidade e do sofrimento sobre as circunstâncias da morte."
   },
   {
    "id": "m4",
    "title": "Módulo IV: retomar a progressão do desenvolvimento",
    "description": "Esperanças e objetivos futuros, resolução de problemas para stresses futuros e atividades pró-sociais."
   }
  ],
  "source": "California Evidence-Based Clearinghouse for Child Welfare, Trauma-Grief Component Therapy for Adolescents (TGCT-A), https://www.cebc4cw.org/program/trauma-grief-component-therapy-for-adolescents/ (página sem data, lida por resumo do WebFetch; só os primeiros 100000 caracteres); Bondy S, Scott H, J Child Adolesc Trauma 2025;18(3):517-527, https://pmc.ncbi.nlm.nih.gov/articles/PMC12433411/"
 },
 {
  "id": "tx-figura-vinculacao-estavel",
  "hypotheses": [
   "h-vinculacao-reativa",
   "h-relacao-social-desinibida"
  ],
  "name": "Garantir uma figura de vinculação emocionalmente disponível e processos estáveis",
  "category": "familiar",
  "branches": [
   "pre",
   "esc"
  ],
  "ages": "crianças pequenas (AACAP 2005); NG26 crianças e jovens",
  "line": 1,
  "summary": "A intervenção mais importante na criança pequena sem vinculação a um cuidador discriminado é defender que lhe seja assegurada uma figura de vinculação emocionalmente disponível, e manter estáveis os processos de saúde, educação e proteção à volta dela. A NICE não recomenda tratar as dificuldades de vinculação com fármacos.",
  "when": "AACAP 2005 (versão lida), recomendação 5 [MS]: em crianças pequenas com PRA e sem vinculação a um cuidador discriminado; o ensaio de Bucareste mostrou reduções substanciais de sinais de ambos os padrões depois de passar de instituição a acolhimento familiar. NICE NG26: garantir processos estáveis e consistentes de saúde, educação e proteção; a estabilidade do local de colocação não deve determinar se há intervenção psicológica; não tratar a vinculação com fármacos.",
  "format": "Avaliação e trabalho com serviços sociais, família e rede de cuidados.",
  "sessions": {
   "typical": null,
   "text": "Sem número de sessões (componentes, sem ordem fixa)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Garantir uma figura de vinculação disponível",
    "description": "Defender que a criança tenha um cuidador emocionalmente disponível e com investimento psicológico nela."
   },
   {
    "id": "m2",
    "title": "Colocação segura e estável",
    "description": "Procurar uma colocação segura e estável antes de focar o tratamento nas interações com o cuidador."
   },
   {
    "id": "m3",
    "title": "Processos estáveis e consistentes",
    "description": "Manter estáveis e consistentes as estruturas de saúde, educação e assistência social, com decisões partilhadas entre profissionais, a criança e os cuidadores."
   },
   {
    "id": "m4",
    "title": "Apoio e monitorização dos cuidadores",
    "description": "Apoio e aconselhamento telefónico ou presencial e monitorização proativa das dificuldades na colocação."
   },
   {
    "id": "m5",
    "title": "Não usar fármacos para a vinculação",
    "description": "Reservar fármacos para problemas de saúde mental coexistentes, segundo as respetivas guidelines."
   }
  ],
  "source": "AACAP, Boris NW, Zeanah CH et al., Practice Parameter for the Assessment and Treatment of Children and Adolescents With Reactive Attachment Disorder of Infancy and Early Childhood, JAACAP 2005;44(11):1206-1219, https://www.aacap.org/App_Themes/AACAP/docs/practice_parameters/reactive_attachment_practice_parameter.pdf (texto lido; é a versão de 2005, substituída pela de 2016 de Zeanah, Chesher e Boris, que não consegui abrir) (recomendação 5); NICE NG26 (vinculação em crianças e jovens adotados, em acolhimento ou em risco de acolhimento), publicada 25/11/2015, https://www.nice.org.uk/guidance/ng26/chapter/Recommendations (secção 1.1; rec. sobre estabilidade e sobre fármacos)"
 },
 {
  "id": "tx-video-feedback-parental-vinculacao",
  "hypotheses": [
   "h-vinculacao-reativa",
   "h-relacao-social-desinibida"
  ],
  "name": "Programa de vídeo-feedback para pais ou cuidadores de crianças pré-escolares",
  "category": "parental",
  "branches": [
   "pre"
  ],
  "ages": "idade pré-escolar",
  "line": 1,
  "summary": "Programa de 10 sessões no domicílio em que o profissional filma o cuidador a interagir com a criança e vê o vídeo com ele, realçando a sensibilidade parental, os pontos fortes e as mudanças positivas. Visa melhorar como o cuidador conforta, interpreta e responde à criança.",
  "when": "NICE NG26: crianças em idade pré-escolar em risco de acolhimento (rec. 1.4.1 e 1.4.2) e, nas famílias de acolhimento, tutores especiais ou pais adotivos (rec. 1.5.1). Se houver pouca melhoria da sensibilidade parental ou da vinculação após 10 sessões, fazer revisão multiagência antes de mais sessões ou outras intervenções (rec. 1.4.3 e 1.5.2).",
  "format": "No domicílio, por profissional de saúde ou social treinado e com experiência com crianças; sessões de pelo menos 60 minutos, com filmagem de 10 a 20 minutos em cada uma; 3 a 4 meses.",
  "sessions": {
   "typical": 10,
   "text": "10 sessões de pelo menos 60 minutos em 3 a 4 meses (NG26 rec. 1.4.2)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Filmar a interação pai-criança",
    "description": "Em cada sessão, filmar o cuidador a interagir com a criança durante 10 a 20 minutos."
   },
   {
    "id": "m2",
    "title": "Rever o vídeo com o cuidador",
    "description": "O profissional vê o vídeo com o cuidador."
   },
   {
    "id": "m3",
    "title": "Realçar a sensibilidade, a responsividade e a comunicação",
    "description": "Mostrar momentos de sensibilidade parental, de resposta e de comunicação."
   },
   {
    "id": "m4",
    "title": "Realçar os pontos fortes do cuidador",
    "description": "Sublinhar o que o cuidador faz bem."
   },
   {
    "id": "m5",
    "title": "Reconhecer mudanças positivas",
    "description": "Reconhecer as mudanças positivas no comportamento do cuidador e da criança."
   }
  ],
  "source": "NICE NG26 (vinculação em crianças e jovens adotados, em acolhimento ou em risco de acolhimento), publicada 25/11/2015, https://www.nice.org.uk/guidance/ng26/chapter/Recommendations (rec. 1.4.1 a 1.4.3, 1.5.1, 1.5.2)"
 },
 {
  "id": "tx-treino-sensibilidade-parental-comportamento",
  "hypotheses": [
   "h-vinculacao-reativa",
   "h-relacao-social-desinibida"
  ],
  "name": "Treino de sensibilidade e de comportamento parental",
  "category": "parental",
  "ages": "pré-escolar e idade escolar, adaptado à idade; não aplicável dos 0 aos 18 meses",
  "line": 2,
  "summary": "Uma sessão inicial com os pais seguida de 5 a 15 sessões pais-criança semanais ou quinzenais, com coaching na gestão do comportamento e na colocação de limites, reforço da responsividade sensível e trabalhos de casa. Oferecida quando os pais não querem o vídeo-feedback ou como adaptação à idade da criança.",
  "when": "NICE NG26: se os pais pré-escolares não quiserem o vídeo-feedback (rec. 1.4.4); considerar em pais de crianças e jovens em idade escolar com dificuldades de vinculação, adaptando à idade (rec. 1.4.11) e em pais em risco de maltratar (rec. 1.4.13); em famílias de acolhimento e adoção sem vídeo-feedback (rec. 1.5.3); em cuidadores profissionais de acolhimento residencial (rec. 1.6.1 e 1.6.2). No coaching da gestão comportamental, não se aplica a crianças de 0 a 18 meses.",
  "format": "Profissional de saúde ou social treinado; sessões de 60 minutos; 6 meses.",
  "sessions": {
   "typical": null,
   "text": "1 sessão única com os pais e depois pelo menos 5 e até 15 sessões semanais ou quinzenais pais-criança de 60 minutos ao longo de 6 meses (NG26 rec. 1.4.5)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Sessão única inicial com os pais",
    "description": "Primeira sessão só com os pais."
   },
   {
    "id": "m2",
    "title": "Coaching na gestão do comportamento e colocação de limites",
    "description": "Ensinar os pais a gerir o comportamento difícil e a pôr limites (não aplicável de 0 a 18 meses)."
   },
   {
    "id": "m3",
    "title": "Reforçar a responsividade sensível",
    "description": "Reforçar a resposta sensível do cuidador às necessidades da criança."
   },
   {
    "id": "m4",
    "title": "Melhorar a qualidade parental",
    "description": "Estratégias para melhorar a qualidade da parentalidade."
   },
   {
    "id": "m5",
    "title": "Trabalhos de casa",
    "description": "Treinar as novas competências entre sessões."
   }
  ],
  "source": "NICE NG26 (vinculação em crianças e jovens adotados, em acolhimento ou em risco de acolhimento), publicada 25/11/2015, https://www.nice.org.uk/guidance/ng26/chapter/Recommendations (rec. 1.4.4, 1.4.5, 1.4.11, 1.4.13, 1.5.3, 1.6.1, 1.6.2)"
 },
 {
  "id": "tx-psicoterapia-pais-crianca-maus-tratos",
  "hypotheses": [
   "h-vinculacao-reativa",
   "h-relacao-social-desinibida"
  ],
  "name": "Psicoterapia pais-criança para famílias com maus-tratos ou risco de maus-tratos (modelo Cicchetti e Toth)",
  "category": "psicoterapia",
  "branches": [
   "pre"
  ],
  "ages": "idade pré-escolar",
  "line": 2,
  "summary": "Sessões semanais no domicílio, durante 1 ano, com observação direta da criança e da interação pais-criança. Exploram como os pais compreendem o comportamento da criança e como as suas reações emocionais e as suas experiências de infância se relacionam com a perceção que têm do filho.",
  "when": "NICE NG26 rec. 1.4.9: considerar em pais que maltrataram ou estão em risco de maltratar a criança em idade pré-escolar, garantindo que as preocupações de proteção estão tratadas.",
  "format": "Domicílio, terapeuta treinado na intervenção; sessões de 45 a 60 minutos.",
  "sessions": {
   "typical": null,
   "text": "Sessões semanais de 45 a 60 minutos durante 1 ano (NG26 rec. 1.4.10)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Observação direta da criança e da interação",
    "description": "Observar diretamente a criança e a interação pais-criança."
   },
   {
    "id": "m2",
    "title": "Compreensão parental do comportamento da criança",
    "description": "Explorar como os pais compreendem o comportamento da criança."
   },
   {
    "id": "m3",
    "title": "Reações emocionais e perceção da criança",
    "description": "Explorar a relação entre as reações emocionais dos pais e as suas perceções da criança."
   },
   {
    "id": "m4",
    "title": "Experiências de infância dos pais",
    "description": "Relacionar essas reações com as experiências dos próprios pais na infância."
   }
  ],
  "source": "NICE NG26 (vinculação em crianças e jovens adotados, em acolhimento ou em risco de acolhimento), publicada 25/11/2015, https://www.nice.org.uk/guidance/ng26/chapter/Recommendations (rec. 1.4.9, 1.4.10)"
 },
 {
  "id": "tx-programa-visitas-domiciliarias-vinculacao",
  "hypotheses": [
   "h-vinculacao-reativa",
   "h-relacao-social-desinibida"
  ],
  "name": "Programa de visitas domiciliárias para melhorar competências parentais",
  "category": "parental",
  "branches": [
   "pre"
  ],
  "ages": "idade pré-escolar",
  "line": 3,
  "summary": "12 visitas semanais ou mensais de 30 a 90 minutos ao longo de 18 meses, por visitador leigo treinado ou profissional de saúde, com observação (sem vídeo) da criança com os pais, modelação de interação positiva e educação sobre o desenvolvimento. É um passo posterior, depois da revisão multiagência.",
  "when": "NICE NG26 rec. 1.4.6 e 1.4.7: se os pais não querem o vídeo-feedback nem o treino de sensibilidade parental, ou não há melhoria e persistem preocupações, fazer revisão multiagência; se concluir que mais intervenção é apropriada, considerar visitas domiciliárias.",
  "format": "Domicílio; visitador leigo treinado ou profissional de saúde (por exemplo enfermeiro).",
  "sessions": {
   "typical": 12,
   "text": "12 sessões semanais ou mensais de 30 a 90 minutos em 18 meses (NG26 rec. 1.4.8)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Observar a criança com os pais, sem vídeo",
    "description": "Observar a criança com os pais."
   },
   {
    "id": "m2",
    "title": "Modelação de interação positiva",
    "description": "Apoiar a interação pais-criança positiva por modelação."
   },
   {
    "id": "m3",
    "title": "Reforçar interações positivas e empatia parental",
    "description": "Reforçar interações positivas e a empatia dos pais."
   },
   {
    "id": "m4",
    "title": "Educação e orientação sobre o desenvolvimento da criança",
    "description": "Dar educação parental e orientação sobre o desenvolvimento infantil."
   }
  ],
  "source": "NICE NG26 (vinculação em crianças e jovens adotados, em acolhimento ou em risco de acolhimento), publicada 25/11/2015, https://www.nice.org.uk/guidance/ng26/chapter/Recommendations (rec. 1.4.6, 1.4.7, 1.4.8)"
 },
 {
  "id": "tx-treino-cuidadores-e-jogo-terapeutico",
  "hypotheses": [
   "h-vinculacao-reativa",
   "h-relacao-social-desinibida"
  ],
  "name": "Treino intensivo de cuidadores e sessões de jogo terapêutico em grupo (crianças em idade escolar primária)",
  "category": "parental",
  "branches": [
   "esc"
  ],
  "ages": "ensino primário",
  "line": 2,
  "summary": "Treino e apoio intensivos a famílias de acolhimento, tutores especiais e pais adotivos antes da colocação e durante 9 a 12 meses depois, combinados com sessões semanais de jogo terapêutico em grupo para a criança. Dirigido a crianças em acolhimento, sob tutela especial ou adotadas.",
  "when": "NICE NG26 rec. 1.5.4: considerar em crianças do ensino primário em acolhimento, sob tutela especial ou adotadas, com dificuldades de vinculação.",
  "format": "Treino de cuidadores; apoio com contacto telefónico diário, grupos de apoio semanais e linha telefónica de crise 24 horas; jogo terapêutico em grupo semanal de 60 a 90 minutos por profissional treinado.",
  "sessions": {
   "typical": null,
   "text": "Sessões de jogo terapêutico semanais de 60 a 90 minutos ao longo de 9 a 12 meses (NG26 rec. 1.5.7); o treino e o apoio dos cuidadores decorrem antes da colocação e 9 a 12 meses depois."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Treino: métodos positivos de gestão do comportamento",
    "description": "Treinar os cuidadores em métodos positivos de gestão do comportamento."
   },
   {
    "id": "m2",
    "title": "Treino: relações entre pares e com os cuidadores, trabalho escolar e conflito",
    "description": "Ajuda com as relações da criança com pares e cuidadores, apoio ao trabalho escolar e ajuda para desarmar conflitos."
   },
   {
    "id": "m3",
    "title": "Apoio: contacto telefónico diário, grupo semanal e linha de crise 24 h",
    "description": "Supervisão por contacto telefónico diário, reuniões semanais de grupo de apoio e linha de intervenção de crise 24 horas."
   },
   {
    "id": "m4",
    "title": "Jogo terapêutico em grupo",
    "description": "Sessões semanais de 60 a 90 minutos após a colocação, com monitorização do progresso comportamental, social e de desenvolvimento."
   }
  ],
  "source": "NICE NG26 (vinculação em crianças e jovens adotados, em acolhimento ou em risco de acolhimento), publicada 25/11/2015, https://www.nice.org.uk/guidance/ng26/chapter/Recommendations (rec. 1.5.4, 1.5.5, 1.5.6, 1.5.7)"
 },
 {
  "id": "tx-psicoterapia-diadica-cuidador-crianca",
  "hypotheses": [
   "h-vinculacao-reativa",
   "h-relacao-social-desinibida"
  ],
  "name": "Psicoterapia diádica cuidador-criança (psicoterapia pais-bebé ou orientação de interação)",
  "category": "familiar",
  "branches": [
   "pre",
   "esc"
  ],
  "ages": "infância e primeira infância; díade preferida nas crianças mais pequenas",
  "line": null,
  "summary": "Três modalidades para ajudar a criança com perturbação de vinculação e o cuidador a sintonizarem-se: trabalhar através do cuidador, trabalhar a díade (psicoterapia pais-bebé ou orientação de interação com vídeo) e, como complemento, terapia individual da criança. A díade é a estratégia preferida nas crianças mais pequenas.",
  "when": "AACAP 2005 (versão lida), recomendação 7 [MS]: depois de garantida uma colocação segura e estável, o tratamento eficaz foca-se em criar interações positivas com os cuidadores. A psicoterapia pais-bebé e a orientação de interação não foram avaliadas formalmente em crianças com perturbação de vinculação, mas sim em crianças com relações de vinculação perturbadas. Terapias coercivas ou com contenção física não têm suporte e estão associadas a danos graves (recomendação 9).",
  "format": "Cuidador, díade (cuidador e criança) ou criança individual; alargar a abordagem à família numa segunda etapa.",
  "sessions": {
   "typical": null,
   "text": "A fonte não indica número de sessões (componentes, sem ordem fixa). Nota: a versão de 2005 foi substituída por uma de 2016 que não li."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Trabalhar através do cuidador",
    "description": "Ensinar o cuidador a criar interações positivas com uma criança difícil de alcançar e a gerir o comportamento; se o cuidador estiver muito sobrecarregado ou zangado, tratar primeiro o seu stress (por vezes com tratamento individual)."
   },
   {
    "id": "m2",
    "title": "Trabalho diádico",
    "description": "Psicoterapia pais-bebé (foca a experiência mútua e os padrões de comunicação emocional) ou orientação de interação (usa vídeo para rever padrões de interação com reforço positivo), centrado nos pontos fortes do cuidador."
   },
   {
    "id": "m3",
    "title": "Alargar a abordagem à família",
    "description": "Numa segunda etapa, reforçar os ganhos diádicos envolvendo outros familiares."
   },
   {
    "id": "m4",
    "title": "Terapia individual da criança como complemento",
    "description": "Para reduzir comportamentos que interfiram com o trabalho diádico, com colaboração ativa do cuidador."
   },
   {
    "id": "m5",
    "title": "Adjuntos para agressividade e oposição",
    "description": "Se houver agressividade e oposição, acrescentar tratamentos usados na perturbação de oposição ou de conduta, como a educação parental ou a terapia multissistémica."
   }
  ],
  "source": "AACAP, Boris NW, Zeanah CH et al., Practice Parameter for the Assessment and Treatment of Children and Adolescents With Reactive Attachment Disorder of Infancy and Early Childhood, JAACAP 2005;44(11):1206-1219, https://www.aacap.org/App_Themes/AACAP/docs/practice_parameters/reactive_attachment_practice_parameter.pdf (texto lido; é a versão de 2005, substituída pela de 2016 de Zeanah, Chesher e Boris, que não consegui abrir) (recomendações 7, 8 e 9)"
 },
 {
  "id": "tx-escola-vinculacao",
  "hypotheses": [
   "h-vinculacao-reativa",
   "h-relacao-social-desinibida"
  ],
  "name": "Apoio escolar a crianças e jovens com dificuldades de vinculação",
  "category": "escolar",
  "ages": "idade não especificada na fonte",
  "line": null,
  "summary": "Formação do pessoal da escola sobre dificuldades de vinculação, acesso aos serviços de saúde mental e de psicologia da educação e apoio na escola enquanto decorrem as intervenções. Evitar a exclusão escolar sempre que possível nas crianças em acolhimento.",
  "when": "NICE NG26 secção 1.2: escolas e profissionais de saúde e sociais devem trabalhar em conjunto para que a criança aceda aos serviços e seja apoiada na escola durante as intervenções.",
  "format": "Contactos clínico-escola; formação de pessoal.",
  "sessions": {
   "typical": null,
   "text": "Sem número de sessões (componentes, sem ordem fixa)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Formação do pessoal",
    "description": "Como começam as dificuldades de vinculação, como se apresentam, o seu efeito na aprendizagem e desenvolvimento social e como apoiar."
   },
   {
    "id": "m2",
    "title": "Acesso a serviços",
    "description": "Garantir acesso a serviços de saúde mental e psicologia da educação."
   },
   {
    "id": "m3",
    "title": "Apoio durante as intervenções",
    "description": "Apoiar a criança na escola enquanto participa nas intervenções, seguindo o conselho dos serviços."
   },
   {
    "id": "m4",
    "title": "Evitar a exclusão escolar",
    "description": "Evitar, tanto quanto possível, a exclusão permanente e temporária de crianças em acolhimento com dificuldades de vinculação."
   }
  ],
  "source": "NICE NG26 (vinculação em crianças e jovens adotados, em acolhimento ou em risco de acolhimento), publicada 25/11/2015, https://www.nice.org.uk/guidance/ng26/chapter/Recommendations (secção 1.2, texto parcialmente lido: números das recomendações não confirmados)"
 },
 {
  "id": "tx-pcit-vinculacao",
  "hypotheses": [
   "h-ddm",
   "h-vinculacao-reativa",
   "h-relacao-social-desinibida"
  ],
  "name": "Terapia de interação pais-criança (PCIT)",
  "category": "parental",
  "branches": [
   "pre"
  ],
  "ages": "idade não especificada na fonte (site oficial: «crianças pequenas»)",
  "line": null,
  "summary": "Terapia em 2 fases em que o terapeuta orienta os pais em tempo real enquanto brincam com o filho: primeiro competências de relação (CDI, com as competências PRIDE), depois gestão do comportamento (PDI). É um programa de treino parental para problemas de comportamento disruptivo.",
  "when": "Programa publicado de Eyberg, descrito pelo site oficial (crianças com birras, desafio, agressividade e hiperatividade). Não é nomeado pela NICE NG26 nem pela AACAP 2005 para a vinculação, e a AACAP 2023 refere evidência insuficiente de PCIT na depressão. Kircanski et al. 2018 citam-no como programa de treino parental, sem especificar evidência na DDM. Evidência para PRA e perturbação de relação social desinibida não verificada.",
  "format": "Pais com a criança; sessões semanais de 60 minutos, em média 14 a 16 semanas; cada fase começa com uma sessão de ensino só com os pais, seguida de sessões de coaching em tempo real (espelho unidirecional, ponto no ouvido, na sala ou por telessaúde).",
  "sessions": {
   "typical": null,
   "text": "Duração média de 14 a 16 semanas, em geral 1 sessão de 60 minutos por semana (site oficial PCIT); número exato de sessões não indicado."
  },
  "modules": [
   {
    "id": "m1",
    "title": "CDI: sessão de ensino aos pais",
    "description": "Os pais aprendem, com modelação e role-play, as competências PRIDE e a 'regra de ouro' de seguir a liderança da criança."
   },
   {
    "id": "m2",
    "title": "CDI: sessões de coaching e prática diária",
    "description": "Coaching em tempo real das competências PRIDE (elogio, reflexão, imitação, descrição, entusiasmo) e 5 minutos de brincadeira diária em casa."
   },
   {
    "id": "m3",
    "title": "PDI: sessão de ensino aos pais",
    "description": "Os pais aprendem a dar ordens eficazes e estratégias de gestão do comportamento para problemas persistentes, como agressão e destruição."
   },
   {
    "id": "m4",
    "title": "PDI: sessões de coaching",
    "description": "Coaching em tempo real para os pais serem consistentes, previsíveis e cumprirem o que combinam."
   }
  ],
  "source": "Official PCIT Website (PCIT International), What is PCIT? e Child Directed Interaction, https://www.parentchildinteractiontherapy.com/what-is-pcit e https://www.parentchildinteractiontherapy.com/pcit-child-directed-interaction (páginas sem data, texto lido); AACAP, Walter HJ et al., Clinical Practice Guideline for the Assessment and Treatment of Children and Adolescents With Major and Persistent Depressive Disorders, JAACAP 2023;62(5):479-502, https://pubmed.ncbi.nlm.nih.gov/36273673/ (texto integral lido numa cópia PDF alojada em hscsnhealthplan.org) (Treatment Statement 1: evidência insuficiente de PCIT); Kircanski K et al., Curr Treat Options Psychiatry 2018;5(1):129-140 (PCIT citado entre programas de treino parental); NICE NG26 (vinculação em crianças e jovens adotados, em acolhimento ou em risco de acolhimento), publicada 25/11/2015, https://www.nice.org.uk/guidance/ng26/chapter/Recommendations"
 },
 {
  "id": "tx-psicoeducacao-phda",
  "hypotheses": [
   "h-phda"
  ],
  "name": "Psicoeducação e aconselhamento à família na PHDA",
  "category": "psicoeducacao",
  "line": 1,
  "ages": "todas as idades (NICE: a qualquer idade)",
  "summary": "Conversa estruturada após o diagnóstico sobre o impacto da PHDA na vida da criança e da família, com conselhos práticos aos pais. Serve para a família compreender o diagnóstico, planear o tratamento em conjunto e evitar a ideia de que o treino parental implica má parentalidade.",
  "when": "NICE: oferecer após o diagnóstico de PHDA, a qualquer idade; faz parte do plano de tratamento partilhado.",
  "format": "Conversa com a criança/jovem e a família ou cuidadores; adaptada ao nível de desenvolvimento. A fonte não indica duração.",
  "sessions": {
   "typical": null,
   "text": "Componentes, sem ordem fixa; a NICE não indica número de sessões para esta conversa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Conversa estruturada após o diagnóstico",
    "description": "Discutir como a PHDA pode afetar a vida da pessoa: impactos positivos do diagnóstico (compreender os sintomas, identificar pontos fortes, acesso a serviços), estigma e rotulagem, maior tendência para impulsividade, modificações ambientais, questões escolares, relações sociais, perturbações coexistentes e risco de consumo de substâncias. A discussão alimenta o plano de tratamento."
   },
   {
    "id": "m2",
    "title": "Aconselhamento aos pais",
    "description": "Aconselhar sobre a importância do contacto positivo pais-criança, de regras claras e adequadas com gestão consistente, e de estrutura no dia da criança."
   },
   {
    "id": "m3",
    "title": "Treino parental não implica má parentalidade",
    "description": "Explicar que a recomendação de treino parental não significa mau desempenho parental, mas sim otimizar competências face às necessidades acima da média destas crianças."
   },
   {
    "id": "m4",
    "title": "Impacto na família e necessidades dos cuidadores",
    "description": "Perguntar como a PHDA afeta os familiares, incentivar a avaliação das suas próprias necessidades e grupos de apoio, e apoiar pais que também tenham PHDA (por exemplo com estratégias de organização)."
   },
   {
    "id": "m5",
    "title": "Fontes de informação e adaptação ao nível da criança",
    "description": "Dar informação sobre grupos de apoio locais e nacionais, sites e apoio educativo, em formato adaptado ao nível de desenvolvimento, linguagem e comorbilidades."
   }
  ],
  "source": "NICE NG87, publicada 14/03/2018, última atualização 13/09/2019, https://www.nice.org.uk/guidance/ng87/chapter/Recommendations (rec. 1.4.3 a 1.4.11)"
 },
 {
  "id": "tx-apoio-parental-phda",
  "hypotheses": [
   "h-phda"
  ],
  "name": "Apoio parental focado na PHDA (a partir dos 5 anos)",
  "category": "parental",
  "line": 1,
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "a partir dos 5 anos (NICE: 5 anos ou mais e jovens)",
  "summary": "Informação sobre a PHDA e apoio aos pais, focado na perturbação, que pode ser em grupo e ter apenas 1 ou 2 sessões. Inclui estratégias parentais e ligação com a escola.",
  "when": "NICE: oferecer aos pais ou cuidadores de todas as crianças com 5 anos ou mais e jovens com PHDA, antes de considerar medicação.",
  "format": "Pais ou cuidadores, em grupo ou individual; ambos os pais se possível. A fonte não indica duração da sessão.",
  "sessions": {
   "typical": null,
   "text": "A NICE indica que o apoio pode ter tão poucas quanto 1 ou 2 sessões (não é um número típico fixo)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Educação e informação sobre a PHDA",
    "description": "Causas e impacto da PHDA."
   },
   {
    "id": "m2",
    "title": "Estratégias parentais",
    "description": "Aconselhamento sobre estratégias de parentalidade."
   },
   {
    "id": "m3",
    "title": "Ligação com a escola",
    "description": "Com consentimento, contacto com a escola, faculdade ou universidade para explicar o diagnóstico e o plano."
   }
  ],
  "source": "NICE NG87, publicada 14/03/2018, última atualização 13/09/2019, https://www.nice.org.uk/guidance/ng87/chapter/Recommendations (rec. 1.5.10; ligação com a escola na rec. 1.4.12)"
 },
 {
  "id": "tx-treino-parental-phda-pre",
  "hypotheses": [
   "h-phda"
  ],
  "name": "Treino parental de grupo focado na PHDA (pré-escolar)",
  "category": "parental",
  "line": 1,
  "branches": [
   "pre"
  ],
  "ages": "menos de 5 anos (NICE); 4 anos até ao 6.º aniversário (AAP)",
  "summary": "Programa de treino de pais, em grupo e centrado na PHDA, é a primeira linha no pré-escolar com PHDA, antes de qualquer medicação. Ensina competências parentais adequadas à idade e estratégias de gestão do comportamento.",
  "when": "NICE: 1.ª linha em menores de 5 anos com PHDA. AAP: 1.ª linha dos 4 anos até ao 6.º aniversário (treino parental e/ou intervenções comportamentais na sala, grau A). Se persistir incapacidade significativa em vários contextos após o programa e as modificações ambientais, a NICE pede parecer de serviço especializado em PHDA no pré-escolar (idealmente terciário); sem esse parecer não oferecer medicação abaixo dos 5 anos.",
  "format": "Grupo de pais (NICE). A AAP refere que estes programas são tipicamente de grupo e que o PCIT é uma alternativa diádica pais-criança. Sem diagnóstico confirmado também pode ser iniciado.",
  "sessions": {
   "typical": null,
   "text": "A NG87 não fixa número de sessões e remete para as rec. 1.5.1 a 1.5.10 da CG158 (princípios gerais), que para grupos de pais indica tipicamente 10 a 16 encontros de 90 a 120 minutos. A AAP não indica número. Componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Expectativas de desenvolvimento adequadas à idade",
    "description": "A AAP descreve o treino como ensinando aos pais o que esperar em cada idade."
   },
   {
    "id": "m2",
    "title": "Reforço da relação pais-criança",
    "description": "Comportamentos dos pais que fortalecem a relação com a criança."
   },
   {
    "id": "m3",
    "title": "Competências específicas de gestão de comportamentos-problema",
    "description": "Estratégias para os comportamentos difíceis; a NICE (CG158) pede modelo de aprendizagem social com modelação, ensaio e feedback e manual de programa avaliado em ensaio aleatorizado."
   },
   {
    "id": "m4",
    "title": "Modificações ambientais e adaptações no jardim de infância",
    "description": "A AAP recomenda intervenções comportamentais na sala se a criança frequentar a pré-escola; a NICE exige rever as modificações ambientais antes de pedir parecer especializado."
   }
  ],
  "source": "NICE NG87, publicada 14/03/2018, última atualização 13/09/2019, https://www.nice.org.uk/guidance/ng87/chapter/Recommendations (rec. 1.5.7 a 1.5.9); AAP, Wolraich et al., Pediatrics 2019;144(4):e20192528, https://pmc.ncbi.nlm.nih.gov/articles/PMC7067282/ (KAS 5a e secção de pré-escolares)"
 },
 {
  "id": "tx-treino-parental-comportamental-phda",
  "hypotheses": [
   "h-phda"
  ],
  "name": "Treino parental comportamental na PHDA (escolar e adolescente)",
  "category": "parental",
  "line": null,
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "6 a 18 anos (AAP: 6 a 12 e 12 a 18 anos)",
  "summary": "Treino em que os pais aprendem a influenciar as contingências do ambiente para melhorar o comportamento do filho. A AAP recomenda-o em conjunto com medicação nas crianças em idade escolar e como opção nos adolescentes.",
  "when": "AAP: dos 6 aos 12 anos, medicação aprovada mais treino parental e/ou intervenção comportamental na sala (de preferência ambos), grau A; dos 12 aos 18 anos, a medicação com assentimento do jovem é a recomendação forte e o treino/terapia comportamental é encorajado. NICE: se houver também sintomas de perturbação de oposição ou de conduta, oferecer treino parental segundo a CG158 mais apoio de grupo focado na PHDA; considerar treino individual se houver dificuldades em frequentar grupos.",
  "format": "Pais, em grupo ou individual (NICE). Nos adolescentes a AAP descreve uma versão em que pais e adolescente participam juntos em sessões para definir um contrato comportamental e melhorar a comunicação e a resolução de problemas.",
  "sessions": {
   "typical": null,
   "text": "Nenhuma das fontes fixa número de sessões para este treino; a NICE remete para a CG158 (ver tx-treino-parental-grupo-conduta). Componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Gestão de contingências em casa",
    "description": "A terapia comportamental treina adultos a influenciar as contingências do ambiente: prevenir e responder a comportamentos como interromper, agressividade, não completar tarefas e não cumprir pedidos."
   },
   {
    "id": "m2",
    "title": "Contrato comportamental (adolescentes)",
    "description": "Pais e adolescente em sessão conjunta definem um contrato; a AAP avisa que os adolescentes podem obstruir os contratos e aumentar o conflito."
   },
   {
    "id": "m3",
    "title": "Comunicação e resolução de problemas pais-adolescente",
    "description": "Também incluídas na versão para adolescentes; a AAP considera a evidência mista e menos forte do que nos pré-adolescentes."
   }
  ],
  "source": "AAP, Wolraich et al., Pediatrics 2019;144(4):e20192528, https://pmc.ncbi.nlm.nih.gov/articles/PMC7067282/ (KAS 5b e 5c; secção de tratamento psicossocial); NICE NG87, publicada 14/03/2018, última atualização 13/09/2019, https://www.nice.org.uk/guidance/ng87/chapter/Recommendations (rec. 1.5.11 e 1.5.12)"
 },
 {
  "id": "tx-escola-phda",
  "hypotheses": [
   "h-phda"
  ],
  "name": "Intervenções e adaptações escolares na PHDA",
  "category": "escolar",
  "line": 1,
  "branches": [
   "pre",
   "esc",
   "adol"
  ],
  "ages": "4 a 18 anos (AAP: 4 anos até ao 6.º aniversário, 6 a 12, 12 a 18; NICE sem faixa)",
  "summary": "Contacto com a escola e conjunto de modificações ambientais e intervenções comportamentais na sala de aula, mais apoios educativos individualizados. É parte necessária de qualquer plano de tratamento nas crianças em idade escolar e nos adolescentes.",
  "when": "NICE: contactar a escola (com consentimento) ao diagnóstico, quando os sintomas mudam e nas transições de escola; as modificações ambientais são revistas antes de oferecer medicação. AAP: apoios educativos individualizados são parte necessária de qualquer plano (grau A).",
  "format": "Escola e professores, em articulação com a família; duração não aplicável.",
  "sessions": {
   "typical": null,
   "text": "Não aplicável (sem sessões); componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Contacto com a escola",
    "description": "Explicar a validade do diagnóstico e o provável efeito dos sintomas na vida escolar; que perturbações coexistentes (por exemplo dificuldades de aprendizagem) são distintas e podem exigir adaptações diferentes; o plano de tratamento e as necessidades educativas; e o valor do feedback da escola."
   },
   {
    "id": "m2",
    "title": "Modificações ambientais",
    "description": "Exemplos da NICE: alterar lugares na sala, luz e ruído, reduzir distrações, períodos de foco mais curtos com pausas de movimento (incluindo cartões \"preciso de uma pausa\"), reforçar pedidos verbais com instruções escritas e uso adequado de assistentes de ensino."
   },
   {
    "id": "m3",
    "title": "Intervenção comportamental na sala de aula",
    "description": "Formar o pessoal escolar para prevenir e responder a comportamentos como interromper, agressividade, não completar tarefas e não cumprir pedidos."
   },
   {
    "id": "m4",
    "title": "Apoios educativos individualizados",
    "description": "A AAP inclui ambiente escolar, colocação na turma, colocação instrucional e apoios comportamentais, muitas vezes com plano educativo formal; em Portugal ver tx-escola-medidas-inclusao."
   }
  ],
  "source": "NICE NG87, publicada 14/03/2018, última atualização 13/09/2019, https://www.nice.org.uk/guidance/ng87/chapter/Recommendations (rec. 1.4.12, 1.5.13 e glossário \"Environmental modifications\"); AAP, Wolraich et al., Pediatrics 2019;144(4):e20192528, https://pmc.ncbi.nlm.nih.gov/articles/PMC7067282/ (KAS 5b e 5c; secção de tratamento psicossocial)"
 },
 {
  "id": "tx-treino-competencias-organizacao-phda",
  "hypotheses": [
   "h-phda"
  ],
  "name": "Treino de competências de organização e de funcionamento escolar",
  "category": "outra",
  "line": null,
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "crianças e adolescentes, com mais evidência em adolescentes (AAP; sem faixa exata)",
  "summary": "Intervenções de treino que ensinam competências com prática repetida e feedback, para a desorganização de materiais e de tempo típica da PHDA. Nos adolescentes o treino de competências ligadas ao funcionamento escolar mostra benefícios consistentes.",
  "when": "AAP: bem estabelecidas para a desorganização de materiais e tempo; mais evidência em adolescentes para treino focado no funcionamento escolar. Treino de competências sociais não mostrou eficácia na PHDA segundo a AAP.",
  "format": "Individual ou escola; a fonte não indica formato nem duração de sessão.",
  "sessions": {
   "typical": null,
   "text": "A AAP não indica número de sessões; refere que os maiores benefícios ocorrem quando o treino se prolonga durante um período alargado. Componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Prática repetida com feedback de desempenho",
    "description": "Treino centrado no desenvolvimento de competências, em vez de modificar contingências num contexto."
   },
   {
    "id": "m2",
    "title": "Organização de materiais e do tempo",
    "description": "Alvo principal destas intervenções na PHDA."
   },
   {
    "id": "m3",
    "title": "Aplicação direta ao quotidiano",
    "description": "Comportamentos-alvo diretamente aplicáveis ao dia a dia do jovem e feedback frequente e construtivo."
   }
  ],
  "source": "AAP, Wolraich et al., Pediatrics 2019;144(4):e20192528, https://pmc.ncbi.nlm.nih.gov/articles/PMC7067282/ (secção de tratamento psicossocial)"
 },
 {
  "id": "tx-tcc-phda-adolescente",
  "hypotheses": [
   "h-phda"
  ],
  "name": "Terapia cognitivo-comportamental após resposta parcial à medicação",
  "category": "psicoterapia",
  "line": null,
  "branches": [
   "adol"
  ],
  "ages": "adolescentes (AAP); a NICE diz apenas jovens",
  "summary": "Curso de TCC para jovens que beneficiaram da medicação mas mantêm incapacidade significativa. Trabalha competências sociais, resolução de problemas, autocontrolo, escuta ativa e expressão de emoções.",
  "when": "NICE: considerar em jovens com PHDA que beneficiaram da medicação mas com sintomas ainda a causar incapacidade significativa em pelo menos um domínio. Divergência: a AAP diz que não foram reportadas melhorias de funcionamento significativas com abordagens cognitivo-comportamentais nos adolescentes.",
  "format": "Formato e duração de sessão não indicados na fonte.",
  "sessions": {
   "typical": null,
   "text": "A NICE não indica número de sessões; componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Competências sociais com pares",
    "description": "Área a trabalhar segundo a NICE."
   },
   {
    "id": "m2",
    "title": "Resolução de problemas",
    "description": "Área a trabalhar segundo a NICE."
   },
   {
    "id": "m3",
    "title": "Autocontrolo",
    "description": "Área a trabalhar segundo a NICE."
   },
   {
    "id": "m4",
    "title": "Escuta ativa",
    "description": "Área a trabalhar segundo a NICE."
   },
   {
    "id": "m5",
    "title": "Lidar com e expressar sentimentos",
    "description": "Área a trabalhar segundo a NICE."
   }
  ],
  "source": "NICE NG87, publicada 14/03/2018, última atualização 13/09/2019, https://www.nice.org.uk/guidance/ng87/chapter/Recommendations (rec. 1.5.14); AAP, Wolraich et al., Pediatrics 2019;144(4):e20192528, https://pmc.ncbi.nlm.nih.gov/articles/PMC7067282/ (secção de tratamento psicossocial em adolescentes)"
 },
 {
  "id": "tx-estilo-vida-phda",
  "hypotheses": [
   "h-phda"
  ],
  "name": "Aconselhamento sobre alimentação e exercício na PHDA",
  "category": "estilo-de-vida",
  "line": null,
  "ages": "todas as idades (NICE: aconselhar a todos com PHDA)",
  "summary": "Reforçar uma alimentação equilibrada e exercício regular. Só investigar alimentos específicos se houver ligação clara com a hiperatividade, com diário alimentar e dietista.",
  "when": "NICE: aconselhar a todos com PHDA. Não aconselhar a eliminação de corantes e aditivos como tratamento geral, nem suplementação de ácidos gordos.",
  "format": "Aconselhamento nas consultas; sem sessões.",
  "sessions": {
   "typical": null,
   "text": "Não aplicável (sem sessões); componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Alimentação equilibrada e exercício regular",
    "description": "Valor de dieta equilibrada, boa nutrição e exercício regular."
   },
   {
    "id": "m2",
    "title": "Alimentos que parecem influenciar o comportamento",
    "description": "Perguntar na avaliação; se houver ligação clara, diário de alimentos e comportamento; se o diário apoiar, referenciar a dietista e gerir em conjunto com o especialista e a família."
   },
   {
    "id": "m3",
    "title": "O que não aconselhar",
    "description": "Eliminação de corantes e aditivos como tratamento geral; suplementação dietética com ácidos gordos."
   }
  ],
  "source": "NICE NG87, publicada 14/03/2018, última atualização 13/09/2019, https://www.nice.org.uk/guidance/ng87/chapter/Recommendations (rec. 1.6.1 a 1.6.4)"
 },
 {
  "id": "tx-nao-recomendadas-phda",
  "hypotheses": [
   "h-phda"
  ],
  "name": "Abordagens não farmacológicas sem evidência suficiente na PHDA",
  "category": "outra",
  "line": null,
  "ages": "4 a 18 anos (âmbito da diretriz AAP; sem faixa por abordagem)",
  "summary": "Lista do que as guidelines lidas não recomendam como tratamento da PHDA. Útil para responder a perguntas da família.",
  "when": "AAP 2019: evidência insuficiente ou benefício nulo para mindfulness, treino cognitivo, modificação da dieta, biofeedback por EEG e aconselhamento de apoio. Estimulação do nervo trigémeo externo: evidência esparsa, não recomendada. Canabidiol: apenas anedótico.",
  "format": "Não aplicável.",
  "sessions": {
   "typical": null,
   "text": "Não aplicável (abordagens não recomendadas)."
  },
  "modules": [],
  "source": "AAP, Wolraich et al., Pediatrics 2019;144(4):e20192528, https://pmc.ncbi.nlm.nih.gov/articles/PMC7067282/ (secção de tratamento psicossocial); NICE NG87, publicada 14/03/2018, última atualização 13/09/2019, https://www.nice.org.uk/guidance/ng87/chapter/Recommendations (rec. 1.6.2 e 1.6.4)"
 },
 {
  "id": "tx-psicoeducacao-conduta",
  "hypotheses": [
   "h-oposicao",
   "h-conduta"
  ],
  "name": "Princípios gerais de cuidado e informação à família na oposição e conduta",
  "category": "psicoeducacao",
  "line": 1,
  "ages": "todas as idades (NICE: a todas as idades)",
  "summary": "Preparar a família para o tratamento: explicar a finalidade das intervenções, responder ao sentimento de culpa dos pais e avaliar fatores complicadores. Garante que a intervenção escolhida é adequada ao nível de desenvolvimento.",
  "when": "NICE: antes de encaminhar para intervenção, a todas as idades. Fatores complicadores (outra perturbação mental, perturbação do neurodesenvolvimento como PHDA ou autismo, dificuldade de aprendizagem, consumo de substâncias) justificam avaliação especializada.",
  "format": "Conversa com a criança/jovem e os pais; a fonte não indica duração.",
  "sessions": {
   "typical": null,
   "text": "Componentes, sem ordem fixa; a NICE não indica número de sessões."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Explicar a intervenção",
    "description": "Natureza, conteúdo e duração, aceitabilidade, tolerabilidade e impacto noutras intervenções; ter em conta as preferências da criança e dos pais."
   },
   {
    "id": "m2",
    "title": "Pais que se sentem culpados",
    "description": "Ter presente que os pais podem sentir-se culpabilizados ou estigmatizados; abordar diretamente as preocupações e explicar a razão e o objetivo de programas como o treino parental."
   },
   {
    "id": "m3",
    "title": "Rastrear fatores complicadores",
    "description": "Perturbação mental coexistente, PHDA ou autismo, dificuldade de aprendizagem, consumo de substâncias em jovens; se presentes, referenciar para avaliação especializada."
   },
   {
    "id": "m4",
    "title": "Avaliar a parentalidade",
    "description": "Aspetos positivos e negativos, uso de disciplina coerciva, relação pais-criança, violência doméstica e bem-estar dos pais."
   }
  ],
  "source": "NICE CG158, publicada 27/03/2013, última atualização 19/04/2017, https://www.nice.org.uk/guidance/cg158/chapter/Recommendations (rec. 1.1.4, 1.3.5, 1.3.6, 1.3.15, 1.4.1 e 1.4.2)"
 },
 {
  "id": "tx-treino-parental-grupo-conduta",
  "hypotheses": [
   "h-oposicao",
   "h-conduta",
   "h-phda"
  ],
  "name": "Treino parental de grupo (oposição, conduta, e PHDA com sintomas de oposição)",
  "category": "parental",
  "line": 1,
  "branches": [
   "pre",
   "esc"
  ],
  "ages": "3 a 11 anos",
  "summary": "Programa de grupo para pais que ensina competências parentais com modelação, ensaio e feedback. É a opção oferecida pela NICE a pais de crianças com perturbação de oposição ou de conduta.",
  "when": "NICE: oferecer a pais de crianças dos 3 aos 11 anos com perturbação de oposição ou de conduta, de alto risco, ou em contacto com a justiça por comportamento antissocial. Na PHDA com sintomas de oposição ou conduta, a NICE (NG87) pede este treino mais apoio de grupo focado na PHDA.",
  "format": "Grupo de pais (tipicamente 10 a 12 pais); ambos os pais se possível; encontros de 90 a 120 minutos. A NICE exige manual de programa avaliado em ensaio aleatorizado e modelo (aprendizagem social ou cognitivo-comportamental) com modelação, ensaio e feedback; não define os temas por sessão, que dependem do programa escolhido.",
  "sessions": {
   "typical": null,
   "text": "Tipicamente 10 a 16 encontros de 90 a 120 minutos."
  },
  "modules": [],
  "source": "NICE CG158, publicada 27/03/2013, última atualização 19/04/2017, https://www.nice.org.uk/guidance/cg158/chapter/Recommendations (rec. 1.5.1 e 1.5.2); NICE NG87, publicada 14/03/2018, última atualização 13/09/2019, https://www.nice.org.uk/guidance/ng87/chapter/Recommendations (rec. 1.5.11)"
 },
 {
  "id": "tx-treino-parental-individual-conduta",
  "hypotheses": [
   "h-oposicao",
   "h-conduta",
   "h-phda"
  ],
  "name": "Treino parental individual (quando o grupo não é possível)",
  "category": "parental",
  "line": 2,
  "branches": [
   "pre",
   "esc"
  ],
  "ages": "3 a 11 anos",
  "summary": "Versão individual do treino parental, para famílias que não conseguem frequentar grupos. Mantém o modelo de aprendizagem social e o manual de programa.",
  "when": "NICE: dos 3 aos 11 anos, se os pais não puderem participar em grupo. Na PHDA com oposição ou conduta, considerar se houver dificuldades em ir a grupos (por exemplo deficiência, diferenças de língua, dificuldade de aprendizagem, doença dos pais, transporte) ou necessidades familiares complexas.",
  "format": "Individual, com ambos os pais se possível; encontros de 60 a 90 minutos. A NICE exige manual de programa avaliado em ensaio aleatorizado e modelo (aprendizagem social ou cognitivo-comportamental) com modelação, ensaio e feedback; não define os temas por sessão, que dependem do programa escolhido.",
  "sessions": {
   "typical": null,
   "text": "Tipicamente 8 a 10 encontros de 60 a 90 minutos."
  },
  "modules": [],
  "source": "NICE CG158, publicada 27/03/2013, última atualização 19/04/2017, https://www.nice.org.uk/guidance/cg158/chapter/Recommendations (rec. 1.5.3 e 1.5.4); NICE NG87, publicada 14/03/2018, última atualização 13/09/2019, https://www.nice.org.uk/guidance/ng87/chapter/Recommendations (rec. 1.5.12)"
 },
 {
  "id": "tx-treino-pais-e-crianca-conduta",
  "hypotheses": [
   "h-oposicao",
   "h-conduta"
  ],
  "name": "Treino individual de pais e criança (problemas graves e complexos)",
  "category": "parental",
  "line": null,
  "branches": [
   "pre",
   "esc"
  ],
  "ages": "3 a 11 anos",
  "summary": "Programa individual em que pais e criança são treinados em conjunto. Reservado para casos graves e complexos.",
  "when": "NICE: dos 3 aos 11 anos, se os problemas forem graves e complexos (oposição ou conduta, alto risco, ou contacto com a justiça). A NICE não nomeia programas; o PCIT (tx-pcit) é um formato diádico pais-criança, mas a ligação a esta recomendação é minha, não da NICE.",
  "format": "Individual, com ambos os pais, cuidadores de acolhimento ou tutores se possível; encontros de 60 minutos. A NICE exige manual de programa avaliado em ensaio aleatorizado e modelo (aprendizagem social ou cognitivo-comportamental) com modelação, ensaio e feedback; não define os temas por sessão, que dependem do programa escolhido.",
  "sessions": {
   "typical": null,
   "text": "Até 10 encontros de 60 minutos."
  },
  "modules": [],
  "source": "NICE CG158, publicada 27/03/2013, última atualização 19/04/2017, https://www.nice.org.uk/guidance/cg158/chapter/Recommendations (rec. 1.5.5 e 1.5.6)"
 },
 {
  "id": "tx-treino-cuidadores-acolhimento-conduta",
  "hypotheses": [
   "h-oposicao",
   "h-conduta"
  ],
  "name": "Treino de cuidadores de acolhimento ou tutores",
  "category": "parental",
  "line": null,
  "branches": [
   "pre",
   "esc"
  ],
  "ages": "3 a 11 anos",
  "summary": "Treino de grupo ou individual para cuidadores de acolhimento e tutores, adaptado ao contexto em que a criança vive.",
  "when": "NICE: dos 3 aos 11 anos, em crianças com oposição ou conduta, de alto risco ou em contacto com a justiça; versão individual se não puderem frequentar o grupo.",
  "format": "Grupo de 8 a 12 cuidadores (encontros de 90 a 120 minutos) ou individual (encontros de 60 minutos). A NICE exige manual de programa avaliado em ensaio aleatorizado e modelo (aprendizagem social ou cognitivo-comportamental) com modelação, ensaio e feedback; não define os temas por sessão, que dependem do programa escolhido.",
  "sessions": {
   "typical": null,
   "text": "Grupo: tipicamente 12 a 16 encontros de 90 a 120 minutos. Individual: até 10 encontros de 60 minutos."
  },
  "modules": [],
  "source": "NICE CG158, publicada 27/03/2013, última atualização 19/04/2017, https://www.nice.org.uk/guidance/cg158/chapter/Recommendations (rec. 1.5.7 a 1.5.10)"
 },
 {
  "id": "tx-programa-crianca-resolucao-problemas",
  "hypotheses": [
   "h-oposicao",
   "h-conduta"
  ],
  "name": "Programa de grupo de resolução de problemas social e cognitivo para a criança",
  "category": "psicoterapia",
  "line": null,
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "9 a 14 anos",
  "summary": "Programa de grupo para a criança, de base cognitivo-comportamental, centrado na resolução de problemas, com modelação, ensaio e feedback. Complementa o treino parental.",
  "when": "NICE: dos 9 aos 14 anos com oposição ou conduta, alto risco ou contacto com a justiça.",
  "format": "Grupo; encontros semanais de 2 horas; adaptado ao nível de desenvolvimento. A NICE exige manual de programa avaliado em ensaio aleatorizado e modelo (aprendizagem social ou cognitivo-comportamental) com modelação, ensaio e feedback; não define os temas por sessão, que dependem do programa escolhido.",
  "sessions": {
   "typical": null,
   "text": "Tipicamente 10 a 18 encontros semanais de 2 horas."
  },
  "modules": [],
  "source": "NICE CG158, publicada 27/03/2013, última atualização 19/04/2017, https://www.nice.org.uk/guidance/cg158/chapter/Recommendations (rec. 1.5.11 e 1.5.12)"
 },
 {
  "id": "tx-multimodal-mst-conduta",
  "hypotheses": [
   "h-conduta"
  ],
  "name": "Intervenção multimodal (terapia multissistémica)",
  "category": "outra",
  "line": null,
  "branches": [
   "adol"
  ],
  "ages": "11 a 17 anos",
  "summary": "Intervenção intensiva centrada na família, com gestores de caso especialmente treinados, que atua em vários níveis. Destina-se a adolescentes com perturbação de conduta.",
  "when": "NICE: dos 11 aos 17 anos para tratamento da perturbação de conduta; exemplo dado pela NICE: terapia multissistémica.",
  "format": "Criança/jovem e pais ou cuidadores; níveis individual, familiar, escolar, justiça e comunidade.",
  "sessions": {
   "typical": null,
   "text": "Tipicamente 3 a 4 encontros por semana durante 3 a 5 meses."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Foco familiar explícito e de apoio",
    "description": "Envolve o jovem e os pais ou cuidadores."
   },
   {
    "id": "m2",
    "title": "Intervenção em vários níveis",
    "description": "Modelo de aprendizagem social, com intervenções ao nível individual, familiar, escolar, da justiça e da comunidade."
   },
   {
    "id": "m3",
    "title": "Gestores de caso especialmente treinados",
    "description": "Manual do programa avaliado em ensaio aleatorizado e materiais completos."
   }
  ],
  "source": "NICE CG158, publicada 27/03/2013, última atualização 19/04/2017, https://www.nice.org.uk/guidance/cg158/chapter/Recommendations (rec. 1.5.13 e 1.5.14)"
 },
 {
  "id": "tx-prevencao-escolar-conduta",
  "hypotheses": [
   "h-oposicao",
   "h-conduta"
  ],
  "name": "Programas escolares de aprendizagem emocional e resolução de problemas (prevenção seletiva)",
  "category": "escolar",
  "line": null,
  "branches": [
   "pre",
   "esc"
  ],
  "ages": "3 a 7 anos",
  "summary": "Programas na sala de aula que aumentam a consciência das emoções, ensinam autocontrolo, promovem autoconceito positivo e relações com os pares e desenvolvem a resolução de problemas. É prevenção, não tratamento da perturbação já instalada.",
  "when": "NICE: dos 3 aos 7 anos, em escolas onde muitas crianças têm risco elevado de oposição ou conduta (baixo nível socioeconómico, baixo rendimento escolar, abuso ou conflito parental, pais separados, problemas de saúde mental ou de consumo nos pais, contacto dos pais com a justiça).",
  "format": "Turma, em contexto escolar, num clima positivo.",
  "sessions": {
   "typical": null,
   "text": "Até 30 sessões em sala de aula ao longo de 1 ano letivo."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Consciência das próprias emoções e das dos outros",
    "description": "Objetivo do programa."
   },
   {
    "id": "m2",
    "title": "Autocontrolo da ativação e do comportamento",
    "description": "Objetivo do programa."
   },
   {
    "id": "m3",
    "title": "Autoconceito positivo e boas relações com os pares",
    "description": "Objetivo do programa."
   },
   {
    "id": "m4",
    "title": "Resolução de problemas",
    "description": "Objetivo do programa."
   }
  ],
  "source": "NICE CG158, publicada 27/03/2013, última atualização 19/04/2017, https://www.nice.org.uk/guidance/cg158/chapter/Recommendations (rec. 1.2.1 e 1.2.2)"
 },
 {
  "id": "tx-incredible-years",
  "hypotheses": [
   "h-oposicao",
   "h-conduta",
   "h-phda"
  ],
  "name": "Incredible Years, programa BASIC para pais de crianças de 3 a 6 anos",
  "category": "parental",
  "line": null,
  "branches": [
   "pre"
  ],
  "ages": "3 a 6 anos (programa pré-escolar BASIC); a versão para a idade escolar (6 a 8 / 6 a 12 anos) tem outro manual, não lido",
  "summary": "Programa de grupo para pais, com vinhetas em vídeo e trabalho de casa, que começa pela relação (brincadeira e elogio) antes da disciplina. O desenvolvedor indica o protocolo de 20 sessões para crianças com diagnóstico de PHDA ou de oposição.",
  "when": "Desenvolvedor: protocolo de 20 sessões para crianças com diagnóstico (PHDA, oposição) e populações de alto risco; versão preventiva de 14 a 16 sessões. Para escolar de 6 a 12 anos ou PHDA nessa idade, o desenvolvedor recomenda a versão para a idade escolar, cujo manual não li. A NICE não nomeia programas e indica 10 a 16 encontros para grupos de pais; este protocolo é mais longo.",
  "format": "Grupo de pais, sessões semanais de 2 a 2,5 horas, com um líder de grupo.",
  "sessions": {
   "typical": 20,
   "text": "20 sessões semanais de 2 a 2,5 horas no protocolo de tratamento (versão preventiva: 14 a 16; o Blueprints refere 18 a 20 sessões para o programa pré-escolar de 3 a 5 anos e 12 a 16 ou mais para a idade escolar)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Sessões 1 e 2: apresentações, objetivos e brincadeira dirigida pela criança",
    "description": "Brincadeira dirigida pela criança e como promove relações positivas."
   },
   {
    "id": "m2",
    "title": "Sessões 3 e 4: brincadeira com treino académico e de persistência",
    "description": "Coaching académico e de persistência; promove a preparação para a escola."
   },
   {
    "id": "m3",
    "title": "Sessões 5 e 6: brincadeira com treino social e emocional",
    "description": "Coaching social e emocional durante a brincadeira."
   },
   {
    "id": "m4",
    "title": "Sessões 7 a 9: elogio, encorajamento e recompensas tangíveis",
    "description": "A arte do elogio e do encorajamento eficazes, recompensas tangíveis e programas de recompensa."
   },
   {
    "id": "m5",
    "title": "Sessões 10 a 12: rotinas, regras da casa e definição de limites",
    "description": "Estabelecer rotinas e regras; definir limites eficazes e fazer cumprir."
   },
   {
    "id": "m6",
    "title": "Sessões 13 a 15: ignorar comportamentos inadequados e time-out",
    "description": "Ignorar comportamentos inadequados; time-out para acalmar; time-out para agressão e incumprimento."
   },
   {
    "id": "m7",
    "title": "Sessão 16: consequências naturais e lógicas",
    "description": "Consequências naturais e lógicas."
   },
   {
    "id": "m8",
    "title": "Sessões 17 e 18: ensinar a criança a resolver problemas",
    "description": "Resolução de problemas com a criança."
   },
   {
    "id": "m9",
    "title": "Sessão 19: reuniões de resolução de problemas entre adultos (opcional)",
    "description": "Pais a resolver problemas em conjunto e resolução de problemas com professores (programa avançado opcional)."
   },
   {
    "id": "m10",
    "title": "Sessão 20: revisão e celebração",
    "description": "Revisão do programa."
   }
  ],
  "source": "The Incredible Years, Agendas and Checklists from Preschool Basic (nov. 2019), https://www.incredibleyears.com/hubfs/The%20Incredible%20Years-%20Resources%20and%20Files/Resources%20for%20Group%20Leaders/Resources%20for%20parent%20group%20leaders/Preschool%20program/Agendas-and-Checklists-from-Preschool-Basic-Nov-2019.pdf; Blueprints for Healthy Youth Development, Incredible Years Parent, https://www.blueprintsprograms.org/programs/29999999/incredible-years-parent/print/"
 },
 {
  "id": "tx-triple-p-standard",
  "hypotheses": [
   "h-oposicao",
   "h-conduta"
  ],
  "name": "Triple P Nível 4 Standard (individual, para pais)",
  "category": "parental",
  "line": null,
  "branches": [
   "pre",
   "esc"
  ],
  "ages": "menos de 12 anos (promotor, via Foundations); população avaliada de 3 a 4 anos",
  "summary": "Programa individual para pais com preocupações sobre o comportamento do filho, que ensina 17 estratégias para promover o bom comportamento e aplicar disciplina adequada à idade.",
  "when": "Foundations (a partir de informação do promotor): pais de crianças com menos de 12 anos; população avaliada de 3 a 4 anos. A NICE não nomeia programas; o formato individual encaixa no treino parental individual de 8 a 10 encontros.",
  "format": "Individual, com um profissional acreditado; 10 sessões semanais de cerca de 1 hora.",
  "sessions": {
   "typical": 10,
   "text": "10 sessões individuais semanais de cerca de 1 hora."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Sessão 1: história do comportamento e do desenvolvimento",
    "description": "Os pais fornecem informação detalhada sobre o comportamento da criança, desenvolvimento e circunstâncias familiares; preenchem questionário e recebem um formulário de observação para as semanas seguintes."
   },
   {
    "id": "m2",
    "title": "Sessão 2: observação e objetivos",
    "description": "O profissional observa a interação pais-criança e dá feedback; constroem em conjunto a compreensão da natureza, gravidade e causas prováveis das preocupações e definem objetivos de mudança."
   },
   {
    "id": "m3",
    "title": "Sessões 3 a 10: 10 estratégias para promover a competência",
    "description": "Tempo de qualidade, conversar com as crianças, afeto físico, elogio, atenção, atividades interessantes, dar o exemplo, \"pedir, dizer, fazer\", ensino incidental e quadros de comportamento. A fonte não atribui cada estratégia a uma sessão."
   },
   {
    "id": "m4",
    "title": "Sessões 3 a 10: 7 estratégias para gerir mau comportamento",
    "description": "Estabelecer regras, discussão dirigida, ignorar planeado, instruções claras e diretas, consequências lógicas, tempo calmo e time-out."
   },
   {
    "id": "m5",
    "title": "Rotina de atividades planeadas",
    "description": "Rotina de seis passos para generalizar e manter as competências; ao longo das 10 sessões enfatizam-se as preocupações específicas dos pais, com role-play, trabalhos de casa e vídeos."
   }
  ],
  "source": "Foundations (What Works Centre for Children and Families), Level 4 Standard Triple P, publicado em abril de 2025, última revisão julho de 2016, https://foundations.org.uk/toolkit/guidebook/triple-p-standard-level-4/ (informação indicada como fornecida pelo promotor do programa)"
 },
 {
  "id": "tx-pcit",
  "hypotheses": [
   "h-oposicao",
   "h-conduta",
   "h-phda"
  ],
  "name": "Parent-Child Interaction Therapy (PCIT)",
  "category": "psicoterapia",
  "line": null,
  "branches": [
   "pre"
  ],
  "ages": "pré-escolar (AAP: 4 anos até ao 6.º aniversário); a idade-alvo do próprio programa não consta do manual lido",
  "summary": "Terapia diádica pais-criança com coaching em tempo real, em duas fases: primeiro a interação dirigida pela criança (CDI), depois a dirigida pelos pais (PDI). Avança por critérios de mestria dos pais, não por número fixo de sessões.",
  "when": "AAP 2019: cita o PCIT como exemplo de treino parental baseado em evidência, de formato diádico, para pré-escolares com PHDA. NICE (CG158) não a nomeia. Idade-alvo do programa não verificada na fonte lida. Atenção: o manual lido é a variante para crianças traumatizadas (PCIT-TC).",
  "format": "Diádico pais-criança, individual; admissão 1 a 2 h; sessão de ensino CDI de 1 h; nas sessões de coaching: 10 min de check-in, 5 min de codificação, cerca de 30 min de coaching e 5 min de revisão. Pelo menos 50% de cada sessão em coaching.",
  "sessions": {
   "typical": null,
   "text": "Pelo manual UC Davis (PCIT-TC): 1 a 2 admissão, 1 ensino CDI, 6 a 8 coaching CDI, até 1 avaliação intermédia, 1 a 2 ensino PDI, 1 coaching com role-play, 6 a 8 coaching PDI e 1 a 2 de graduação (soma 17 a 25, calculada por mim). Termina por mestria. Contraste: a NICE indica até 10 encontros para treino de pais e criança."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Admissão: entrevista e avaliação",
    "description": "1 a 2 sessões; os pais preenchem avaliações padronizadas e há observação comportamental de 15 minutos."
   },
   {
    "id": "m2",
    "title": "Ensino CDI (competências PRIDE)",
    "description": "1 sessão: ensinar as competências PRIDE e a atenção seletiva/ignorar."
   },
   {
    "id": "m3",
    "title": "Coaching CDI até à mestria",
    "description": "6 a 8 sessões de coaching em tempo real com codificação no início. Mestria no manual: 10 elogios específicos, 10 reflexões, 10 descrições de comportamento e no máximo 3 afirmações críticas, perguntas ou comandos em 5 minutos."
   },
   {
    "id": "m4",
    "title": "Avaliação intermédia",
    "description": "Até 1 sessão: verificar a mestria e reavaliar objetivos com os instrumentos do programa."
   },
   {
    "id": "m5",
    "title": "Ensino PDI",
    "description": "1 a 2 sessões: dar instruções eficazes e time-out PCIT, com role-play."
   },
   {
    "id": "m6",
    "title": "Coaching PDI com role-play",
    "description": "1 sessão com role-play de instruções eficazes e time-out."
   },
   {
    "id": "m7",
    "title": "Coaching PDI até à mestria",
    "description": "6 a 8 sessões: instrução, cumprimento, elogio e processo de time-out; regras da casa, time-out automático e competências em público; graduação quando 75% das instruções dos pais são eficazes."
   },
   {
    "id": "m8",
    "title": "Graduação",
    "description": "1 a 2 sessões: os pais dão instruções eficazes e gerem o comportamento em vários contextos; reavaliação final."
   }
  ],
  "source": "UC Davis PCIT Training Center, Course of Treatment Manual for PCIT for Traumatized Children (PCIT-TC), versão 4.3, março de 2013, https://pcit.ucdavis.edu/wp-content/uploads/2013/01/Section-1_General-Information2.pdf, secção 1 (quadro General Course of Treatment); AAP, Wolraich et al., Pediatrics 2019;144(4):e20192528, https://pmc.ncbi.nlm.nih.gov/articles/PMC7067282/ (secção de pré-escolares)"
 },
 {
  "id": "tx-psicoeducacao-autismo",
  "hypotheses": [
   "h-autismo"
  ],
  "name": "Informação e apoio às famílias no autismo",
  "category": "psicoeducacao",
  "line": 1,
  "ages": "crianças e jovens autistas (NICE CG170; sem faixa exata)",
  "summary": "Informação contínua sobre o autismo e o seu tratamento, adequada ao nível do jovem, e avaliação das necessidades da família e cuidadores, incluindo irmãos. Inclui direito a pausas e apoio em momentos de maior necessidade.",
  "when": "NICE: oferecer a todas as famílias e cuidadores de crianças e jovens autistas, de forma continuada.",
  "format": "Famílias e cuidadores (incluindo irmãos); adaptado ao nível de desenvolvimento. Sem duração indicada.",
  "sessions": {
   "typical": null,
   "text": "Componentes, sem ordem fixa; a NICE não indica número de sessões."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Informação sobre o autismo, o tratamento e os apoios",
    "description": "Organizações locais e nacionais, cursos sobre autismo, benefícios sociais e direitos, apoios educativos e de lazer, serviços e tratamentos disponíveis, preparação do futuro e da transição para serviços de adultos."
   },
   {
    "id": "m2",
    "title": "Direitos e avaliação das necessidades da família",
    "description": "Informação verbal e escrita sobre direito a pausas e cuidados de descanso e a avaliação das necessidades do cuidador; avaliar apoio pessoal, social e emocional, apoio prático (pausas, planos de emergência) e plano de cuidados futuros."
   },
   {
    "id": "m3",
    "title": "Formação para quem participa na intervenção",
    "description": "Informação, aconselhamento, formação e apoio, sobretudo a quem presta cuidados pessoais ou participa na intervenção com os profissionais."
   },
   {
    "id": "m4",
    "title": "Apoio em momentos de maior necessidade",
    "description": "Puberdade, início ou mudança de escola, nascimento de um irmão."
   },
   {
    "id": "m5",
    "title": "Decisão partilhada",
    "description": "Explorar se o jovem e a família querem participar nas decisões e voltar a perguntar com regularidade."
   }
  ],
  "source": "NICE CG170, publicada 28/08/2013, última atualização 14/06/2021, https://www.nice.org.uk/guidance/cg170/chapter/recommendations (rec. 1.1.11 a 1.1.13 e 1.2.1 a 1.2.3)"
 },
 {
  "id": "tx-comunicacao-social-autismo",
  "hypotheses": [
   "h-autismo"
  ],
  "name": "Intervenção de comunicação social com estratégias de jogo (pais, professores ou pares)",
  "category": "outra",
  "line": 1,
  "branches": [
   "pre",
   "esc"
  ],
  "ages": "pré-escolar (mediação por pais, cuidadores ou professores) e idade escolar (mediação por pares); NICE diz crianças e jovens, sem faixa exata",
  "summary": "Intervenção específica para as características nucleares do autismo, baseada em jogo com pais, cuidadores e professores, para aumentar atenção conjunta, envolvimento e comunicação recíproca. É a única intervenção psicossocial dirigida ao núcleo do autismo recomendada pela NICE.",
  "when": "NICE: considerar em crianças e jovens autistas; no pré-escolar considerar mediação por pais, cuidadores ou professores; na idade escolar considerar mediação por pares. A NICE indica que a revisão das recomendações psicossociais está planeada (página de visão geral da CG170, \"Planned updates\").",
  "format": "Administrada por profissional treinado, com pais, cuidadores, professores ou pares; ajustada ao nível de desenvolvimento. Sem duração indicada.",
  "sessions": {
   "typical": null,
   "text": "A NICE não indica número de sessões; componentes, sem ordem fixa. Exemplo publicado com número de sessões: tx-pact."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Estratégias de jogo para atenção conjunta, envolvimento e comunicação recíproca",
    "description": "Com pais, cuidadores e professores."
   },
   {
    "id": "m2",
    "title": "Sensibilidade e capacidade de resposta dos adultos",
    "description": "Aumentar a compreensão, a sensibilidade e a capacidade de resposta de pais, cuidadores, professores ou pares aos padrões de comunicação e interação da criança."
   },
   {
    "id": "m3",
    "title": "Modelação pelo terapeuta e feedback em vídeo",
    "description": "Técnicas incluídas pela NICE."
   },
   {
    "id": "m4",
    "title": "Alargar comunicação, jogo interativo e rotinas sociais",
    "description": "Técnicas para expandir a comunicação da criança, o jogo interativo e as rotinas sociais."
   }
  ],
  "source": "NICE CG170, publicada 28/08/2013, última atualização 14/06/2021, https://www.nice.org.uk/guidance/cg170/chapter/recommendations (rec. 1.3.1); página de visão geral https://www.nice.org.uk/guidance/cg170 (consultada em 10/10/2026)"
 },
 {
  "id": "tx-pact",
  "hypotheses": [
   "h-autismo"
  ],
  "name": "PACT: tratamento de comunicação mediado pelos pais (exemplo publicado)",
  "category": "parental",
  "line": null,
  "branches": [
   "pre"
  ],
  "ages": "2 anos a 4 anos e 11 meses",
  "summary": "Programa manualizado e escalonado em que o terapeuta trabalha com os pais, com feedback em vídeo, para aumentar a sensibilidade parental à comunicação da criança. Estudado em ensaio aleatorizado no Reino Unido.",
  "when": "Estudo de crianças autistas dos 2 anos aos 4 anos e 11 meses. A NICE não nomeia programas; é um exemplo concreto do tipo de intervenção da rec. 1.3.1 (ligação minha, não da NICE).",
  "format": "Sessões individuais na clínica entre terapeuta e pais, com a criança presente; terapeutas de fala e linguagem; sessões de 2 horas; 30 minutos de prática diária em casa.",
  "sessions": {
   "typical": 18,
   "text": "Após uma reunião de orientação, sessões de 2 h (descritas como \"biweekly\") durante 6 meses, seguidas de sessões de reforço mensais durante 6 meses, total de 18 possíveis por caso; mediana de 16 realizadas. Estudo, não recomendação."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Reunião inicial de orientação",
    "description": "Antes das sessões."
   },
   {
    "id": "m2",
    "title": "Feedback em vídeo sobre a interação pais-criança",
    "description": "Aumentar a sensibilidade e a capacidade de resposta dos pais à comunicação da criança e reduzir respostas desfasadas no tempo."
   },
   {
    "id": "m3",
    "title": "Desenvolvimento gradual da comunicação da criança",
    "description": "Estratégias como rotinas de ação, linguagem familiar repetitiva e pausas; o programa é escalonado segundo a progressão do desenvolvimento pré-linguístico e linguístico (apêndice do estudo não lido)."
   },
   {
    "id": "m4",
    "title": "Prática diária em casa",
    "description": "30 minutos por dia entre sessões."
   },
   {
    "id": "m5",
    "title": "Sessões de reforço mensais",
    "description": "Durante os 6 meses finais."
   }
  ],
  "source": "Green et al., Lancet 2010;375:2152, doi 10.1016/S0140-6736(10)60587-9, https://pmc.ncbi.nlm.nih.gov/articles/PMC2890859/ (secção Intervention)"
 },
 {
  "id": "tx-modelo-dgs-autismo",
  "hypotheses": [
   "h-autismo"
  ],
  "name": "Intervenção não farmacológica de base relacional (Norma DGS 002/2019)",
  "category": "outra",
  "line": 1,
  "ages": "idade pediátrica e adultos (DGS); intervenção precoce dos 0 aos 6 anos e, a partir dos 6 anos, treino de autonomia e socialização",
  "summary": "Modelo português de intervenção individualizada, com componente terapêutica e componente pedagógica, articulado entre a consulta hospitalar e as equipas locais de intervenção. A partir dos 6 anos acrescenta treino de autonomia e de socialização em contexto comunitário.",
  "when": "DGS: a abordagem terapêutica assenta na intervenção não farmacológica de base relacional (nível de evidência C, grau I). A consulta hospitalar elabora um plano terapêutico centrado na pessoa e na família.",
  "format": "Individualizada; equipa local de intervenção precoce (0 a 6 anos) ou equipas locais de intervenção escolar e de transição (terapeuta da fala, terapeuta ocupacional, psicólogo e técnico de educação especial). Sem duração indicada.",
  "sessions": {
   "typical": null,
   "text": "Sem sessões definidas; componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Componente terapêutica",
    "description": "Terapia ocupacional de integração sensorial, intervenção da psicologia clínica e terapia da fala. Nota: a EACD 2019 (DCD) diz que a evidência da terapia de integração sensorial é inconclusiva e a NICE CG170 não a menciona nas recomendações lidas."
   },
   {
    "id": "m2",
    "title": "Componente pedagógica",
    "description": "Inclusão educativa em centros de apoio à aprendizagem (UEEA), conforme critérios de gravidade, ensino especial e reabilitação, e psicologia educacional."
   },
   {
    "id": "m3",
    "title": "A partir dos 6 anos: autonomia e socialização",
    "description": "Além das componentes anteriores, treino de autonomia e de socialização em contexto ambiental e comunitário (nível C, grau I)."
   },
   {
    "id": "m4",
    "title": "Reunião entre profissionais, pais e equipa educativa",
    "description": "A consulta e a equipa de saúde de proximidade devem promover reuniões."
   },
   {
    "id": "m5",
    "title": "Plano terapêutico multidisciplinar",
    "description": "Disponibilizado à pessoa, ao representante legal e ao cuidador."
   }
  ],
  "source": "DGS, Norma 002/2019 de 23/04/2019, https://normas.dgs.min-saude.pt/wp-content/uploads/2019/09/Abordagem-Diagnostica-e-Intervencao-na-Perturbacao-do-Espetro-do-Autismo-em-Idade-Pediatrica-e-no-Adulto_2019.pdf (recomendações 6 e 7 e secção organizacional, pontos I, J, K, Q e R)"
 },
 {
  "id": "tx-intervencao-precoce-snipi",
  "hypotheses": [
   "h-autismo",
   "h-linguagem",
   "h-ddi",
   "h-dcd"
  ],
  "name": "Intervenção precoce na infância (SNIPI e equipas locais de intervenção)",
  "category": "intervencao-precoce",
  "line": null,
  "branches": [
   "pre"
  ],
  "ages": "0 a 6 anos",
  "summary": "Medidas de apoio de saúde, educação e segurança social a crianças dos 0 aos 6 anos e às suas famílias, nos ambientes habituais da criança (casa, creche, jardim de infância). Visam melhorar as oportunidades de aprendizagem, reforçar as competências dos cuidadores e mobilizar recursos da família e da comunidade.",
  "when": "DGS: crianças de 0 a 6 anos com suspeita de autismo devem ser referenciadas à equipa local de intervenção (ELI) no prazo máximo de 30 dias, em simultâneo com a consulta hospitalar. Para linguagem, DDI e DCD o SNIPI abrange as idades dos 0 aos 6; critérios de elegibilidade não verificados nas fontes lidas.",
  "format": "Equipa local multidisciplinar, trabalhando nas rotinas do dia a dia da criança; a ELI inclui, no caso do autismo, terapeuta ocupacional, terapeuta da fala e psicólogo clínico com formação em PEA (Norma DGS). Sem duração de sessão indicada.",
  "sessions": {
   "typical": null,
   "text": "Sem número de sessões; apoio contínuo nas rotinas."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Referenciação à ELI",
    "description": "No autismo, até 30 dias após a suspeita, para avaliação das necessidades e recursos da criança, família e comunidade e início de intervenção específica."
   },
   {
    "id": "m2",
    "title": "Intervenção nos ambientes naturais",
    "description": "Casa, creche, jardim de infância, durante rotinas e atividades diárias, a partir dos objetivos definidos pela família."
   },
   {
    "id": "m3",
    "title": "Fortalecer competências dos cuidadores",
    "description": "Objetivo declarado do SNIPI."
   },
   {
    "id": "m4",
    "title": "Intervenção não farmacológica direta no pré-escolar",
    "description": "Realizada pela ELI com profissionais de saúde (terapeuta ocupacional, terapeuta da fala, psicólogo clínico) com formação em PEA, segundo a DGS."
   }
  ],
  "source": "SNIPI, página Quem somos, https://snipi.gov.pt/quem-somos; DGS, Norma 002/2019 de 23/04/2019, https://normas.dgs.min-saude.pt/wp-content/uploads/2019/09/Abordagem-Diagnostica-e-Intervencao-na-Perturbacao-do-Espetro-do-Autismo-em-Idade-Pediatrica-e-no-Adulto_2019.pdf (secção organizacional, pontos A, B e J)"
 },
 {
  "id": "tx-comportamento-desafiante-autismo",
  "hypotheses": [
   "h-autismo"
  ],
  "name": "Intervenção psicossocial para comportamento desafiante no autismo",
  "category": "outra",
  "line": 1,
  "ages": "crianças e jovens autistas (NICE CG170; sem faixa exata)",
  "summary": "Intervenção psicossocial guiada por uma avaliação funcional do comportamento, em primeira linha quando não há causa física, mental ou ambiental identificada. Assenta em comportamento-alvo claro, medição antes e depois e aplicação consistente em casa e na escola.",
  "when": "NICE: primeiro avaliar e tratar fatores desencadeantes (dor ou perturbação digestiva, ansiedade ou depressão, PHDA, ambiente físico e social, mudanças de rotina, puberdade, abuso, falta de previsibilidade e estrutura); se o comportamento persistir, revisão multidisciplinar; se não houver outra causa, intervenção psicossocial como 1.ª linha. Antipsicótico só se as intervenções psicossociais forem insuficientes ou inviáveis (fora do âmbito deste ficheiro).",
  "format": "Pais, cuidadores e profissionais em todos os contextos; duração não indicada.",
  "sessions": {
   "typical": null,
   "text": "A NICE exige um prazo especificado para atingir os objetivos, mas não indica número de sessões; componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Avaliação funcional",
    "description": "Identificar desencadeantes, padrões do comportamento, necessidades que a criança tenta satisfazer e consequências (reforço recebido)."
   },
   {
    "id": "m2",
    "title": "Comportamento-alvo e objetivos ligados à qualidade de vida",
    "description": "Comportamento-alvo claramente identificado."
   },
   {
    "id": "m3",
    "title": "Modificar fatores ambientais",
    "description": "Avaliar e modificar fatores ambientais que iniciam ou mantêm o comportamento."
   },
   {
    "id": "m4",
    "title": "Estratégia de intervenção definida e prazo",
    "description": "Tendo em conta o nível de desenvolvimento e os problemas coexistentes; prazo definido para atingir os objetivos."
   },
   {
    "id": "m5",
    "title": "Medição antes e depois",
    "description": "Medida sistemática do comportamento-alvo."
   },
   {
    "id": "m6",
    "title": "Aplicação consistente e acordo entre contextos",
    "description": "Em casa e na escola, com acordo entre pais, cuidadores e profissionais."
   }
  ],
  "source": "NICE CG170, publicada 28/08/2013, última atualização 14/06/2021, https://www.nice.org.uk/guidance/cg170/chapter/recommendations (rec. 1.4.1 a 1.4.9)"
 },
 {
  "id": "tx-tcc-ansiedade-autismo",
  "hypotheses": [
   "h-autismo"
  ],
  "name": "TCC adaptada para ansiedade em jovens autistas",
  "category": "psicoterapia",
  "line": null,
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "crianças e jovens autistas com capacidade verbal e cognitiva (NICE; sem faixa exata)",
  "summary": "Terapia cognitivo-comportamental ajustada às necessidades de jovens autistas com ansiedade. Aplica-se apenas se houver ansiedade coexistente e capacidade verbal e cognitiva para a TCC.",
  "when": "NICE: considerar em autistas com ansiedade e capacidade verbal e cognitiva para TCC; TCC de grupo adaptada, ou individual se o grupo for difícil.",
  "format": "Grupo adaptado ou individual; com participação de um pai ou cuidador nas sessões. Duração da sessão não indicada.",
  "sessions": {
   "typical": null,
   "text": "A NICE não indica número de sessões; componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Treino de reconhecimento de emoções",
    "description": "Adaptação recomendada."
   },
   {
    "id": "m2",
    "title": "Mais informação escrita e visual e folhas de trabalho estruturadas",
    "description": "Abordagem mais concreta e estruturada."
   },
   {
    "id": "m3",
    "title": "Atividades cognitivas simplificadas",
    "description": "Por exemplo folhas de escolha múltipla."
   },
   {
    "id": "m4",
    "title": "Envolver um pai ou cuidador",
    "description": "Nas sessões, para apoiar a aplicação da intervenção."
   },
   {
    "id": "m5",
    "title": "Pausas regulares e interesses especiais",
    "description": "Manter a atenção com pausas e incorporar os interesses especiais da criança."
   }
  ],
  "source": "NICE CG170, publicada 28/08/2013, última atualização 14/06/2021, https://www.nice.org.uk/guidance/cg170/chapter/recommendations (rec. 1.7.2 e 1.7.3)"
 },
 {
  "id": "tx-sono-autismo",
  "hypotheses": [
   "h-autismo"
  ],
  "name": "Plano de sono comportamental no autismo",
  "category": "estilo-de-vida",
  "line": null,
  "ages": "crianças e jovens autistas (NICE CG170; sem faixa exata)",
  "summary": "Avaliação do problema de sono e plano comportamental construído com os pais, com registo do sono durante 2 semanas. Fármaco só se o problema persistir apesar do plano.",
  "when": "NICE: perante problema de sono num jovem autista. Roncopatia, engasgamento ou apneias: referenciar para despiste de apneia obstrutiva do sono.",
  "format": "Pais ou cuidadores; plano ajustado com base no registo. Duração não indicada.",
  "sessions": {
   "typical": null,
   "text": "Sem sessões definidas; registo do sono durante 2 semanas para ajustar o plano."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Avaliação do problema de sono",
    "description": "Tipo de problema, padrões dia e noite, regularidade da hora de deitar, ambiente de sono, comorbilidades, atividade física, doença ou desconforto, medicação, fatores emocionais e impacto na família."
   },
   {
    "id": "m2",
    "title": "Plano de sono com os pais",
    "description": "Intervenção comportamental específica para estabelecer um padrão regular de sono noturno."
   },
   {
    "id": "m3",
    "title": "Registo do sono e da vigília durante 2 semanas",
    "description": "Usado para modificar o plano se necessário."
   },
   {
    "id": "m4",
    "title": "Se o problema persistir",
    "description": "Considerar referenciação a especialista em sono pediátrico e pausas de descanso para os cuidadores."
   }
  ],
  "source": "NICE CG170, publicada 28/08/2013, última atualização 14/06/2021, https://www.nice.org.uk/guidance/cg170/chapter/recommendations (rec. 1.7.4 a 1.7.8)"
 },
 {
  "id": "tx-nao-recomendadas-autismo",
  "hypotheses": [
   "h-autismo"
  ],
  "name": "Abordagens a não usar no autismo",
  "category": "outra",
  "line": null,
  "ages": "crianças e jovens autistas (NICE CG170; sem faixa exata)",
  "summary": "Lista de intervenções que a NICE e a DGS desaconselham para as características nucleares do autismo ou como tratamento do autismo.",
  "when": "NICE: não usar antipsicóticos, antidepressivos, anticonvulsivantes nem dietas de exclusão (glúten ou caseína) para as características nucleares; não usar neurofeedback nem treino de integração auditiva para problemas de fala e linguagem; não usar ómega-3 para o sono; não usar secretina, quelação nem oxigénio hiperbárico. DGS: não usar secretina, agentes quelantes, oxigénio hiperbárico, suplementos de ácidos gordos, regime alimentar restritivo nem neurofeedback.",
  "format": "Não aplicável.",
  "sessions": {
   "typical": null,
   "text": "Não aplicável (abordagens não recomendadas)."
  },
  "modules": [],
  "source": "NICE CG170, publicada 28/08/2013, última atualização 14/06/2021, https://www.nice.org.uk/guidance/cg170/chapter/recommendations (rec. 1.3.2 e 1.6.1 a 1.6.4); DGS, Norma 002/2019 de 23/04/2019, https://normas.dgs.min-saude.pt/wp-content/uploads/2019/09/Abordagem-Diagnostica-e-Intervencao-na-Perturbacao-do-Espetro-do-Autismo-em-Idade-Pediatrica-e-no-Adulto_2019.pdf (recomendações 5 e 8, alínea h)"
 },
 {
  "id": "tx-terapia-da-fala",
  "hypotheses": [
   "h-linguagem",
   "h-autismo",
   "h-ddi"
  ],
  "name": "Terapia da fala e da linguagem (modelo por níveis)",
  "category": "terapia-da-fala",
  "line": null,
  "ages": "idade não especificada na fonte (o modelo descreve pais no pré-escolar e pessoal educativo na idade escolar; fonte não verificável)",
  "summary": "Intervenção da terapeuta da fala organizada por níveis de necessidade, desde apoio universal na escola até intervenção direta individual. Nas perturbações graves, complexas ou abrangentes há boa evidência para intervenção individualizada direta pela terapeuta da fala.",
  "when": "Ebbels 2019 (artigo de discussão, não guideline): nível 1 universal e nível 2 dirigido, liderados pela educação com pessoal bem formado e apoiado; nível 3A individualizado indireto, planeado pela terapeuta e aplicado por outros, para dificuldades mais ligeiras ou menos abrangentes; nível 3B individualizado direto, para perturbações complexas ou abrangentes. CATALISE-2 (consenso Delphi): usar a designação perturbação do desenvolvimento da linguagem (DLD) quando não há condição biomédica diferenciadora; o consenso trata da terminologia e não prescreve tratamento.",
  "format": "Individual direto (1:1) pela terapeuta da fala, ou indireto através dos pais (pré-escolar) ou do pessoal educativo (idade escolar), com formação, coaching e monitorização. Duração de sessão não indicada.",
  "sessions": {
   "typical": null,
   "text": "Sem número fixo; a dosagem depende do alvo, do impacto funcional, dos conhecimentos da família e das exigências do ambiente. Exemplo de dose insuficiente citado: 6 horas de intervenção direta ao longo de 8 meses. Componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Nível 1: apoio universal",
    "description": "Intervenções para todas as crianças, lideradas pela educação."
   },
   {
    "id": "m2",
    "title": "Nível 2: apoio dirigido",
    "description": "Para crianças com fragilidades de linguagem, lideradas pela educação."
   },
   {
    "id": "m3",
    "title": "Nível 3A: intervenção individualizada indireta",
    "description": "Planeada pela terapeuta da fala e aplicada por pais ou pessoal educativo; a eficácia exige coaching direto, feedback e monitorização."
   },
   {
    "id": "m4",
    "title": "Nível 3B: intervenção individualizada direta",
    "description": "Individual, pela terapeuta da fala; boa evidência para linguagem expressiva e vocabulário na DLD; evidência emergente em perturbações graves, complexas e abrangentes, incluindo as associadas ao autismo e à incapacidade intelectual."
   }
  ],
  "source": "Ebbels et al., Int J Lang Commun Disord 2019;54(1):3-19, doi 10.1111/1460-6984.12387 (versão aceite lida em https://discovery.ucl.ac.uk/id/eprint/10047539/); CATALISE-2, Bishop et al., J Child Psychol Psychiatry 2017;58:1068, doi 10.1111/jcpp.12721, https://pmc.ncbi.nlm.nih.gov/articles/PMC5638113/; DGS, Norma 002/2019 de 23/04/2019, https://normas.dgs.min-saude.pt/wp-content/uploads/2019/09/Abordagem-Diagnostica-e-Intervencao-na-Perturbacao-do-Espetro-do-Autismo-em-Idade-Pediatrica-e-no-Adulto_2019.pdf (terapia da fala como componente terapêutica no autismo)"
 },
 {
  "id": "tx-escola-medidas-inclusao",
  "hypotheses": [
   "h-linguagem",
   "h-ddi",
   "h-aprendizagem",
   "h-dcd",
   "h-autismo",
   "h-phda"
  ],
  "name": "Medidas de suporte à aprendizagem e à inclusão (Portugal, Decreto-Lei 54/2018)",
  "category": "escolar",
  "line": null,
  "ages": "idade não especificada na fonte",
  "summary": "Quadro legal português que a escola aplica em três níveis crescentes de resposta, de acordo com a necessidade do aluno. O médico pode apoiar com informação clínica ao relatório técnico-pedagógico.",
  "when": "Medidas adicionais só se se demonstrar, com evidências, que as universais e seletivas são insuficientes. Texto lido: ato original de 2018; alterações posteriores não verificadas.",
  "format": "Escola, aluno e família; equipa multidisciplinar de apoio à educação inclusiva; relatório técnico-pedagógico. Sem sessões.",
  "sessions": {
   "typical": null,
   "text": "Não aplicável (sem sessões); três níveis de medidas."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Medidas universais",
    "description": "Para todos os alunos: diferenciação pedagógica, acomodações curriculares, enriquecimento curricular, promoção do comportamento pró-social e intervenção com foco académico ou comportamental em pequenos grupos."
   },
   {
    "id": "m2",
    "title": "Medidas seletivas",
    "description": "Quando as universais não bastam: percursos curriculares diferenciados, adaptações curriculares não significativas, apoio psicopedagógico, antecipação e reforço das aprendizagens e apoio tutorial."
   },
   {
    "id": "m3",
    "title": "Medidas adicionais",
    "description": "Para dificuldades acentuadas e persistentes de comunicação, interação, cognição ou aprendizagem: frequência do ano por disciplinas, adaptações curriculares significativas, plano individual de transição, metodologias de ensino estruturado e desenvolvimento de competências de autonomia pessoal e social. Intervém o docente de educação especial, de preferência em sala de aula."
   }
  ],
  "source": "Decreto-Lei n.º 54/2018, de 6 de julho, arts. 8.º, 9.º e 10.º (texto do ato original lido numa cópia em https://aemcs.pt/site/wp-content/uploads/2026/01/Decreto-Lei-n.o-54_2018-Diario-da-Republica-n.o-129_2018-Serie-I-de-2018-07-06.pdf; publicação oficial em https://diariodarepublica.pt/dr/detalhe/decreto-lei/54-2018-115652961)"
 },
 {
  "id": "tx-leitura-aprendizagem",
  "hypotheses": [
   "h-aprendizagem"
  ],
  "name": "Intervenção educativa estruturada na leitura e adaptações escolares",
  "category": "escolar",
  "line": null,
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "idade escolar e adolescentes; intervenção precoce no jardim de infância e 1.º ano (cerca de 5 a 7 anos); sem faixa exata",
  "summary": "A intervenção na dislexia é educativa: instrução explícita, sistemática e intensiva em consciência fonémica e fonética, dada por educador ou terapeuta com formação, mais adaptações na sala. Quanto mais cedo começar, melhor.",
  "when": "AAP 2020: identificar cedo e intervir sem demora, em vez de esperar pela falha prolongada. Nota: o relatório técnico da AAP foi retirado em outubro de 2025; o artigo da AAP de 2020 não dá protocolo de tratamento.",
  "format": "Pequenos grupos de alunos com perfil semelhante ou 1:1; diária e intensiva segundo a AAP; duração de sessão não indicada.",
  "sessions": {
   "typical": null,
   "text": "A AAP não indica número de sessões; a instrução deve ser intensiva e prolongada o suficiente para ter efeito duradouro. Componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Instrução explícita, sistemática e multissensorial",
    "description": "Instrução diária, intensiva e individualizada em consciência fonémica e aplicação da fonética, ensinada de forma explícita (a criança não é esperada a inferir competências)."
   },
   {
    "id": "m2",
    "title": "Elementos críticos",
    "description": "Individualização, feedback e orientação, avaliação contínua e prática regular."
   },
   {
    "id": "m3",
    "title": "Terapia da fala para a linguagem oral",
    "description": "As terapeutas da fala avaliam e tratam dificuldades de linguagem oral associadas à dislexia."
   },
   {
    "id": "m4",
    "title": "Adaptações e modificações na escola",
    "description": "Lugar preferencial, mais tempo, tarefas encurtadas ou modificadas, apoio na tomada de notas, computador, sala silenciosa, leitores de texto, livros gravados, tutores."
   },
   {
    "id": "m5",
    "title": "Participação dos pais",
    "description": "Ler em voz alta em casa, dar feedback aos especialistas e defender a criança junto da escola."
   }
  ],
  "source": "AAP, Learning Disabilities, Dyslexia, and Vision, Pediatrics 2011;127(3):e818, doi 10.1542/peds.2010-3670, https://publications.aap.org/pediatrics/article/127/3/e818/64947/Learning-Disabilities-Dyslexia-and-Vision (relatório técnico retirado em outubro de 2025, segundo a própria página) (secção Recognition and Treatment); Sanfilippo et al., Reintroducing Dyslexia: Early Identification and Implications for Pediatric Practice, Pediatrics 2020;146(1):e20193046, doi 10.1542/peds.2019-3046, https://pmc.ncbi.nlm.nih.gov/articles/PMC7329249/ (intervenção precoce intensiva: 56% a 92% dos leitores em risco atingem leitura média)"
 },
 {
  "id": "tx-psicoeducacao-aprendizagem",
  "hypotheses": [
   "h-aprendizagem"
  ],
  "name": "Informação à família e vigilância da saúde mental nas dificuldades de aprendizagem",
  "category": "psicoeducacao",
  "line": 1,
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "idade escolar (o diagnóstico de dislexia só se faz após o início da instrução de leitura); sem faixa exata",
  "summary": "Explicar à família o papel do diagnóstico clínico e da avaliação escolar e vigiar a ansiedade e a depressão, que são mais frequentes na dislexia. O médico coordena os cuidados e não substitui a avaliação educativa.",
  "when": "AAP 2020: considerar dislexia no diagnóstico diferencial de baixa autoestima, depressão, ansiedade ou comportamentos disruptivos.",
  "format": "Família e criança; sem duração indicada.",
  "sessions": {
   "typical": null,
   "text": "Componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Rastrear ansiedade e depressão",
    "description": "Mais frequentes em crianças com dislexia; o diagnóstico tardio é precursor de comorbilidade psiquiátrica."
   },
   {
    "id": "m2",
    "title": "Diagnóstico formal e avaliação escolar",
    "description": "Avaliação abrangente multidisciplinar com entrevistas, questionários, observação e testes; o diagnóstico de dislexia só se faz após o início da instrução de leitura."
   },
   {
    "id": "m3",
    "title": "Coordenar cuidados",
    "description": "O médico ajuda os pais a decidir sobre avaliações adicionais e coordena os cuidados após o diagnóstico."
   },
   {
    "id": "m4",
    "title": "Defesa da criança",
    "description": "Pais como defensores junto da escola, pedindo avaliação educativa."
   }
  ],
  "source": "Sanfilippo et al., Reintroducing Dyslexia: Early Identification and Implications for Pediatric Practice, Pediatrics 2020;146(1):e20193046, doi 10.1542/peds.2019-3046, https://pmc.ncbi.nlm.nih.gov/articles/PMC7329249/; AAP, Learning Disabilities, Dyslexia, and Vision, Pediatrics 2011;127(3):e818, doi 10.1542/peds.2010-3670, https://publications.aap.org/pediatrics/article/127/3/e818/64947/Learning-Disabilities-Dyslexia-and-Vision (relatório técnico retirado em outubro de 2025, segundo a própria página) (secção Pediatrician's role)"
 },
 {
  "id": "tx-psicossocial-ddi",
  "hypotheses": [
   "h-ddi"
  ],
  "name": "Intervenções psicossociais para sintomas psiquiátricos na incapacidade intelectual",
  "category": "psicoterapia",
  "line": null,
  "ages": "crianças e jovens com incapacidade intelectual (AACAP; ABA dos 6 aos 18 anos)",
  "summary": "Intervenções psicossociais para perturbações psiquiátricas coexistentes ou sintomas específicos em crianças e jovens com incapacidade intelectual. A AACAP classifica-as como opção clínica, por evidência emergente, não definitiva.",
  "when": "AACAP 2020: opção clínica. Considerar primeiro fatores médicos, ambientais e psicossociais, incluindo colocação ou exigências educativas inadequadas, que são causa importante de sintomas psiquiátricos e comportamentais.",
  "format": "Adaptado à idade de desenvolvimento e capacidade de comunicação; a fonte não indica duração.",
  "sessions": {
   "typical": null,
   "text": "A AACAP não indica número de sessões; componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "TCC adaptada",
    "description": "A AACAP aconselha não presumir que não podem beneficiar; adaptar à idade de desenvolvimento e comunicação. Evidência em jovens escassa. Considerar colaborar com terapeuta com experiência."
   },
   {
    "id": "m2",
    "title": "Comunicação aumentativa e treino de comunicação funcional",
    "description": "Treinar a criança a iniciar comunicação para substituir comportamentos-problema com a mesma função; efeito maior quando iniciado mais cedo."
   },
   {
    "id": "m3",
    "title": "Análise do comportamento aplicada",
    "description": "Eficaz para problemas de comportamento em jovens dos 6 aos 18 anos em estudos de caso único: competências adaptativas, comunicação, antecedentes, reforço, reforço diferencial e extinção."
   },
   {
    "id": "m4",
    "title": "Programa parental",
    "description": "Triple P num estudo piloto com pais de crianças com incapacidade intelectual associou-se a menos sofrimento parental, parentalidade desadaptativa e problemas de comportamento (estudo observacional)."
   }
  ],
  "source": "AACAP, Siegel, McGuire et al., J Am Acad Child Adolesc Psychiatry 2020;59(4):468-496, doi 10.1016/j.jaac.2019.11.018 (cópia lida em https://ramp.luriechildrens.org/globalassets/ramp/reference/aacap-practice-parameter-intellectual-disability-2020.pdf) (secção Treatment, Statement 1)"
 },
 {
  "id": "tx-psicoeducacao-ddi",
  "hypotheses": [
   "h-ddi"
  ],
  "name": "Apoio à família e adequação do ambiente educativo na incapacidade intelectual",
  "category": "psicoeducacao",
  "line": 1,
  "ages": "crianças e jovens, ao longo da vida (AACAP; sem faixa exata)",
  "summary": "Psicoeducação e apoio às famílias ao longo da vida, ajuda a obter apoios, e verificação de que o programa educativo e o ambiente respondem às necessidades da criança.",
  "when": "AACAP 2020: avaliar sempre se o programa educativo e o ambiente respondem ao nível da criança; a falta de apoio empírico para a psicoeducação familiar é referida pela própria AACAP.",
  "format": "Família; gestor de caso, defensor educativo ou organização local de apoio; sem sessões.",
  "sessions": {
   "typical": null,
   "text": "Sem sessões; apoio contínuo; componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Verificar a adequação educativa",
    "description": "Colocação ou exigências inadequadas são causa importante de sintomas; avaliar o programa educativo e de habilitação."
   },
   {
    "id": "m2",
    "title": "Mudanças e rotinas",
    "description": "Considerar o efeito de mudanças de escola, residência ou pessoal; as crianças podem ter dificuldade em adaptar-se à mudança."
   },
   {
    "id": "m3",
    "title": "Psicoeducação e apoio contínuos à família",
    "description": "Também para obter apoios sociais, serviços escolares e apoios da comunidade."
   },
   {
    "id": "m4",
    "title": "Vigiar o sono, bullying e abuso",
    "description": "A AACAP refere perturbação do sono e maior risco de bullying, trauma e abuso."
   }
  ],
  "source": "AACAP, Siegel, McGuire et al., J Am Acad Child Adolesc Psychiatry 2020;59(4):468-496, doi 10.1016/j.jaac.2019.11.018 (cópia lida em https://ramp.luriechildrens.org/globalassets/ramp/reference/aacap-practice-parameter-intellectual-disability-2020.pdf) (secções Assessment e Treatment, Social Support)"
 },
 {
  "id": "tx-atividade-participacao-dcd",
  "hypotheses": [
   "h-dcd"
  ],
  "name": "Intervenção orientada para a atividade e a participação (terapia ocupacional/fisioterapia)",
  "category": "terapia-ocupacional",
  "line": 1,
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "a partir dos 5 anos (a EACD só admite diagnóstico de DCD antes dos 5 anos em casos graves); inclui adolescentes e adultos",
  "summary": "Treino de tarefas concretas do dia a dia que a criança precisa de realizar, com objetivos definidos com a família e transferência para casa e escola. É a abordagem recomendada pela EACD (nível A) para melhorar competências motoras.",
  "when": "EACD 2019: crianças com DCD e indicação atual devem receber intervenção (nível A). Exemplos formalmente estudados: treino específico de tarefas, treino neuromotor de tarefas (NTT) e abordagem cognitiva de orientação para o desempenho ocupacional diário (CO-OP). Em alguns casos bastam apoio compensatório e adaptações ambientais com seguimento.",
  "format": "Individual ou pequeno grupo (4 a 6 crianças com um terapeuta e, se necessário, um assistente, em estudos); com envolvimento de pais e professores para transferência. A fonte não indica a duração da sessão.",
  "sessions": {
   "typical": null,
   "text": "A EACD diz que a evidência não permite recomendar intensidade, duração ou calendário: duração média dos estudos eficazes de 10 semanas (intervalo 2 a 18); intervenções relativamente curtas (cerca de 10 sessões) mostraram efeitos; protocolos de 20 a 30 h não pareceram mais eficazes do que 10 a 15 h."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Definir objetivos individualizados",
    "description": "Objetivos de atividade e de participação, com a perspetiva da criança, da família e de outros relevantes; a EACD sugere instrumentos como a Canadian Occupational Performance Measure."
   },
   {
    "id": "m2",
    "title": "Tarefa e contexto específicos",
    "description": "Descrever claramente a tarefa e o contexto em que tem de ser feita."
   },
   {
    "id": "m3",
    "title": "Papel ativo da criança",
    "description": "A intervenção deve ser significativa para a criança e visar funcionalidade, não normalidade."
   },
   {
    "id": "m4",
    "title": "Envolvimento de pais e professores",
    "description": "Para transferir e generalizar, com oportunidades de prática."
   },
   {
    "id": "m5",
    "title": "Prática ampla em contexto",
    "description": "Depois das competências básicas, dar tempo e oportunidades para as praticar em casa, escola, comunidade, lazer e desporto."
   }
  ],
  "source": "EACD, Blank et al., Dev Med Child Neurol 2019;61:242-285, doi 10.1111/dmcn.14132, https://pmc.ncbi.nlm.nih.gov/articles/PMC6850610/ (rec. 15 a 18, 22, 29; statement 4)"
 },
 {
  "id": "tx-escrita-teclado-dcd",
  "hypotheses": [
   "h-dcd"
  ],
  "name": "Escrita manual e ensino precoce de teclado",
  "category": "terapia-ocupacional",
  "line": null,
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "a partir dos 5 anos (a EACD só admite diagnóstico de DCD antes dos 5 anos em casos graves); inclui adolescentes e adultos",
  "summary": "Quando a escrita é problemática, intervenção orientada para a atividade e participação, incluindo formas de a criança avaliar o seu desempenho, e ensino do teclado desde cedo.",
  "when": "EACD 2019: recomendação 23 (nível B) e 24 (boa prática clínica).",
  "format": "Individual ou escolar; duração não indicada pela fonte.",
  "sessions": {
   "typical": null,
   "text": "A EACD não fixa um número; cita um estudo de caso com 2 sessões de 45 min por semana mais trabalho de casa diário durante 13 semanas, em 3 crianças."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Intervenção na escrita orientada para a atividade e a participação",
    "description": "Incluindo autoavaliação do desempenho."
   },
   {
    "id": "m2",
    "title": "Ensino precoce de teclado",
    "description": "Para melhorar a legibilidade e a limpeza dos trabalhos; treino paralelo de teclado e tablet."
   }
  ],
  "source": "EACD, Blank et al., Dev Med Child Neurol 2019;61:242-285, doi 10.1111/dmcn.14132, https://pmc.ncbi.nlm.nih.gov/articles/PMC6850610/ (rec. 23 e 24)"
 },
 {
  "id": "tx-psicoeducacao-dcd",
  "hypotheses": [
   "h-dcd"
  ],
  "name": "Informação a pais e professores e atenção ao autoconceito na DCD",
  "category": "psicoeducacao",
  "line": 1,
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "a partir dos 5 anos (a EACD só admite diagnóstico de DCD antes dos 5 anos em casos graves); inclui adolescentes e adultos",
  "summary": "Aconselhar pais e professores sobre as dificuldades da criança e como a ajudar, avaliar o autoconceito e os fatores psicossociais, e adaptar o ambiente.",
  "when": "EACD 2019: recomendações 19, 20, 29 e 30 (boa prática clínica).",
  "format": "Pais, professores e criança; sem sessões definidas.",
  "sessions": {
   "typical": null,
   "text": "Componentes, sem ordem fixa; a EACD não indica número de sessões."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Aconselhar pais e professores",
    "description": "Sobre as capacidades e problemas da criança e como melhorar a função motora e a participação em casa, escola, lazer, desporto e atividades culturais."
   },
   {
    "id": "m2",
    "title": "Avaliar e acomodar o autoconceito",
    "description": "Por escalas de autorrelato ou entrevista."
   },
   {
    "id": "m3",
    "title": "Vigiar fatores psicossociais",
    "description": "Durante toda a intervenção, referenciando se necessário."
   },
   {
    "id": "m4",
    "title": "Apoiar a participação",
    "description": "Incentivar jogos e desporto para promover a prática e evitar a evasão."
   }
  ],
  "source": "EACD, Blank et al., Dev Med Child Neurol 2019;61:242-285, doi 10.1111/dmcn.14132, https://pmc.ncbi.nlm.nih.gov/articles/PMC6850610/ (rec. 19, 20, 29 e 30)"
 },
 {
  "id": "tx-atividade-fisica-dcd",
  "hypotheses": [
   "h-dcd"
  ],
  "name": "Condição física e jogos ativos de vídeo como complemento (DCD)",
  "category": "estilo-de-vida",
  "line": null,
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "a partir dos 5 anos (a EACD só admite diagnóstico de DCD antes dos 5 anos em casos graves); inclui adolescentes e adultos",
  "summary": "Incluir a condição física (força, resistência, flexibilidade) no plano. Os videojogos ativos podem ser um complemento útil à intervenção orientada para a atividade, em ambiente supervisionado ou de grupo.",
  "when": "EACD 2019: recomendação 26 (boa prática clínica) e recomendação 25 (nível B) para os videojogos ativos como complemento.",
  "format": "Grupo ou supervisionado.",
  "sessions": {
   "typical": null,
   "text": "Sem número de sessões."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Condição física no planeamento",
    "description": "Força, resistência e flexibilidade; a EACD refere maior frequência de excesso de peso nesta população."
   },
   {
    "id": "m2",
    "title": "Videojogos ativos como complemento",
    "description": "Não substituem a intervenção orientada para a atividade; a transferência para a vida real não está demonstrada."
   }
  ],
  "source": "EACD, Blank et al., Dev Med Child Neurol 2019;61:242-285, doi 10.1111/dmcn.14132, https://pmc.ncbi.nlm.nih.gov/articles/PMC6850610/ (rec. 25 e 26)"
 },
 {
  "id": "tx-nao-recomendadas-dcd",
  "hypotheses": [
   "h-dcd"
  ],
  "name": "Abordagens sem evidência suficiente na DCD",
  "category": "outra",
  "line": null,
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "a partir dos 5 anos (a EACD só admite diagnóstico de DCD antes dos 5 anos em casos graves); inclui adolescentes e adultos",
  "summary": "A EACD não recomenda a terapia de integração sensorial nem o treino de sensibilidade cinestésica, por evidência inconclusiva. Outras abordagens (brain-gym, medicinas complementares) não foram avaliadas sistematicamente.",
  "when": "EACD 2019: statement 3. Note-se que a Norma DGS 002/2019 inclui a terapia ocupacional de integração sensorial na componente terapêutica do autismo (população diferente).",
  "format": "Não aplicável.",
  "sessions": {
   "typical": null,
   "text": "Não aplicável (abordagens não recomendadas)."
  },
  "modules": [],
  "source": "EACD, Blank et al., Dev Med Child Neurol 2019;61:242-285, doi 10.1111/dmcn.14132, https://pmc.ncbi.nlm.nih.gov/articles/PMC6850610/ (statements 2 e 3)"
 },
 {
  "id": "tx-psicoeducacao-tiques",
  "hypotheses": [
   "h-tiques"
  ],
  "name": "Psicoeducação sobre tiques (e vigiar e esperar)",
  "category": "psicoeducacao",
  "line": 1,
  "ages": "todas as idades (ESSTS: todos os diagnosticados)",
  "summary": "Partilhar informação clara e atualizada sobre sintomas, causa, prognóstico e tratamento dos tiques. A ESSTS recomenda-a como intervenção inicial em todos os diagnosticados, e vigiar e esperar é aceitável se os tiques não causarem incapacidade.",
  "when": "ESSTS 2022: intervenção inicial em todos; se for suficiente, vigiar e esperar. AAN 2019: informar que vigiar e esperar é aceitável sem incapacidade funcional (nível B); encaminhar para recursos de psicoeducação para professores e pares, por exemplo a Tourette Association of America (nível B).",
  "format": "Individualizada, com o doente e a família; pode ser feita sem formação em psicoterapia. A fonte não indica duração.",
  "sessions": {
   "typical": null,
   "text": "Componentes, sem ordem fixa; as fontes não indicam número de sessões."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Informação sobre a condição",
    "description": "Sintomas, causa, prognóstico, tratamento e experiência diária."
   },
   {
    "id": "m2",
    "title": "Curso natural",
    "description": "Tiques surgem na infância, oscilam e têm pico por volta dos 10 a 12 anos; muitos melhoram na adolescência (AAN)."
   },
   {
    "id": "m3",
    "title": "Vigiar e esperar",
    "description": "Aceitável se não houver incapacidade funcional."
   },
   {
    "id": "m4",
    "title": "Professores e pares",
    "description": "Referir recursos de psicoeducação para a escola; melhora o conhecimento dos professores e as atitudes dos pares (AAN)."
   }
  ],
  "source": "ESSTS parte II (psicológico), Andrén et al., Eur Child Adolesc Psychiatry 2022;31:403-423, doi 10.1007/s00787-021-01845-z, https://pmc.ncbi.nlm.nih.gov/articles/PMC8314030/ (secção Recommendations); AAN, Pringsheim et al., Neurology 2019;92(19):896-906, doi 10.1212/WNL.0000000000007466, https://pmc.ncbi.nlm.nih.gov/articles/PMC6537133/ (rec. 1a, 1c e 2)"
 },
 {
  "id": "tx-cbit",
  "hypotheses": [
   "h-tiques"
  ],
  "name": "CBIT: Comprehensive Behavioral Intervention for Tics",
  "category": "psicoterapia",
  "line": 1,
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "9 a 17 anos no ensaio principal; abaixo dos 9 anos possível mas com pouca evidência (AAN)",
  "summary": "Programa manualizado de terapia comportamental que ensina o treino de reversão de hábito (consciência do tique e resposta competitiva), relaxamento e uma intervenção funcional sobre as situações que mantêm ou agravam os tiques. É a terapia com mais evidência nos tiques.",
  "when": "ESSTS 2022: se a psicoeducação for insuficiente, terapia comportamental (HRT/CBIT ou ERP) como 1.ª linha em crianças e adultos, com HRT/CBIT a ter a evidência mais forte. AAN 2019: oferecer CBIT como opção inicial face a outras intervenções psicossociais e à medicação, quando disponível (nível B); pode ser prescrita mesmo sem incapacidade se o doente estiver motivado (nível C); por teleconferência se não houver presencial (nível C). O ensaio principal foi em idades de 9 a 17 anos; a AAN diz que pode ser eficaz abaixo dos 9 anos, com pouca evidência.",
  "format": "Individual, com os pais incluídos na totalidade ou numa parte de cada sessão; as duas primeiras sessões de 90 min e as restantes de 60 min (Piacentini 2010). Existem versões de grupo (8 sessões; duração de sessão varia entre estudos) e por videoconferência, com evidência emergente segundo a ESSTS.",
  "sessions": {
   "typical": 8,
   "text": "8 sessões ao longo de 10 semanas (as 6 primeiras semanais, as 2 últimas quinzenais) e 3 sessões de reforço mensais nos respondedores (Piacentini 2010; ESSTS 2022). A AAN refere que casos com pouca consciência dos tiques, pouca motivação, tiques mais graves ou comorbilidade importante podem precisar de mais sessões."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Sessão 1: racional, psicoeducação e hierarquia de tiques",
    "description": "Explicar o racional do CBIT, dar informação sobre os tiques e fazer a hierarquia dos tiques, do mais ao menos incomodativo. As 2 primeiras sessões servem também para criar relação e recolher informação."
   },
   {
    "id": "m2",
    "title": "Sessão 2: tiques-alvo, urgências premonitórias e educação dos pais",
    "description": "Identificar tiques-alvo e as urgências premonitórias; educação dos pais (no estudo de grupo, feita por pedopsiquiatra); no estudo de caso, a folha de incómodos dos tiques e a resposta competitiva começam aqui."
   },
   {
    "id": "m3",
    "title": "Sessões 2 a 6: treino de consciência e resposta competitiva, tique a tique",
    "description": "Autovigilância dos tiques e das urgências; escolher uma resposta fisicamente incompatível com o tique, sustentável pelo menos 60 segundos (série de casos) e mantida, no ensaio principal, cerca de 1 minuto ou até a urgência passar; praticar em sessão e em casa; passar ao tique seguinte quando o anterior estiver controlado."
   },
   {
    "id": "m4",
    "title": "Sessões 2 a 6: intervenção funcional",
    "description": "Em cada sessão, avaliar as situações que agravam ou mantêm os tiques e criar estratégias para cada antecedente e consequência; ensinar os pais a reagir aos tiques e a elogiar a prática."
   },
   {
    "id": "m5",
    "title": "Treino de relaxamento",
    "description": "Introduzido na 3.ª sessão no estudo de grupo e na 4.ª na série de casos; nota: a ESSTS coloca o relaxamento como intervenção de 2.ª linha quando isolado."
   },
   {
    "id": "m6",
    "title": "Sessões 7 e 8: revisão e prevenção de recaídas",
    "description": "Rever a resposta competitiva e o relaxamento, planear os tiques restantes e discutir como lidar com tiques novos."
   },
   {
    "id": "m7",
    "title": "Sessões de reforço",
    "description": "3 sessões mensais nos respondedores."
   }
  ],
  "source": "Piacentini et al., JAMA 2010;303(19):1929-1937, doi 10.1001/jama.2010.607, https://pmc.ncbi.nlm.nih.gov/articles/PMC2993317/ (Methods, descrição das sessões e dos componentes); ESSTS parte II (psicológico), Andrén et al., Eur Child Adolesc Psychiatry 2022;31:403-423, doi 10.1007/s00787-021-01845-z, https://pmc.ncbi.nlm.nih.gov/articles/PMC8314030/ (Table 1, secção Recommendations); AAN, Pringsheim et al., Neurology 2019;92(19):896-906, doi 10.1212/WNL.0000000000007466, https://pmc.ncbi.nlm.nih.gov/articles/PMC6537133/ (rec. 1d, 7a a 7c e racional); sequência por sessões adaptada de Kang et al., J Korean Acad Child Adolesc Psychiatry 2022;33(4):91, doi 10.5765/jkacap.220013, https://pmc.ncbi.nlm.nih.gov/articles/PMC9513408/ e Blount et al., World J Clin Cases 2014;2(10):569, doi 10.12998/wjcc.v2.i10.569, https://pmc.ncbi.nlm.nih.gov/articles/PMC4198411/ (o manual de Woods et al., Oxford University Press 2008, não foi lido)"
 },
 {
  "id": "tx-erp-tiques",
  "hypotheses": [
   "h-tiques"
  ],
  "name": "Exposição com prevenção de resposta (ERP) nos tiques",
  "category": "psicoterapia",
  "line": 1,
  "branches": [
   "esc",
   "adol"
  ],
  "ages": "7 a 55 anos no ensaio (crianças e adultos)",
  "summary": "Terapia comportamental em que o doente pratica suprimir os tiques durante períodos longos, com exposição gradual às urgências premonitórias e aos estímulos que desencadeiam tiques. É uma alternativa ao CBIT.",
  "when": "ESSTS 2022: 1.ª linha em crianças e adultos, mas com certeza menor do que HRT/CBIT, por haver menos estudos (um ensaio, 7 a 55 anos). AAN: se o CBIT não estiver disponível, outras intervenções comportamentais, como ERP, podem ser aceitáveis (nível C).",
  "format": "Individual; 2 h por sessão no ensaio. Sessões de 1 h não foram inferiores (estudo citado pela ESSTS). Versão de grupo intensivo piloto: 12 sessões em 3 dias mais 1.",
  "sessions": {
   "typical": 12,
   "text": "12 sessões semanais de 2 h no ensaio comparativo citado na tabela 1 da ESSTS; sessões mais curtas (1 h) não foram inferiores."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Treino de supressão dos tiques",
    "description": "O doente aprende a aumentar a supressão com cronómetro para registar tempos e tentar batê-los."
   },
   {
    "id": "m2",
    "title": "Exposição às urgências e aos estímulos",
    "description": "Foco nas urgências premonitórias e nos estímulos que desencadeiam tiques, praticando em várias situações e atividades, sempre a resistir a todos os tiques; não é preciso hierarquia de tiques."
   },
   {
    "id": "m3",
    "title": "Prática entre sessões",
    "description": "Incentivo a continuar a prática sozinho."
   }
  ],
  "source": "ESSTS parte II (psicológico), Andrén et al., Eur Child Adolesc Psychiatry 2022;31:403-423, doi 10.1007/s00787-021-01845-z, https://pmc.ncbi.nlm.nih.gov/articles/PMC8314030/ (Table 1, secções ERP e Recommendations); AAN, Pringsheim et al., Neurology 2019;92(19):896-906, doi 10.1212/WNL.0000000000007466, https://pmc.ncbi.nlm.nih.gov/articles/PMC6537133/ (rec. 7c)"
 },
 {
  "id": "tx-outras-psicologicas-tiques",
  "hypotheses": [
   "h-tiques"
  ],
  "name": "Relaxamento e terapias cognitivas ou de terceira vaga nos tiques",
  "category": "psicoterapia",
  "line": 2,
  "ages": "crianças e adultos (ESSTS; sem faixa exata)",
  "summary": "Intervenções psicológicas de apoio, sem estudos controlados suficientes para serem usadas sozinhas.",
  "when": "ESSTS 2022: relaxamento como 2.ª linha; intervenções cognitivas e de terceira vaga (aceitação e compromisso, mindfulness) como 2.ª linha ou complemento se HRT/ERP forem insuficientes e outros tratamentos baseados em evidência não estiverem disponíveis. Podem ajudar a comorbilidades associadas.",
  "format": "Não verificado.",
  "sessions": {
   "typical": null,
   "text": "As fontes lidas não indicam número de sessões."
  },
  "modules": [],
  "source": "ESSTS parte II (psicológico), Andrén et al., Eur Child Adolesc Psychiatry 2022;31:403-423, doi 10.1007/s00787-021-01845-z, https://pmc.ncbi.nlm.nih.gov/articles/PMC8314030/ (secção Recommendations)"
 },
 {
  "id": "tx-ft-an",
  "hypotheses": [
   "h-anorexia-nervosa"
  ],
  "name": "Terapia familiar focada na anorexia nervosa (FT-AN; na guideline canadiana, tratamento baseado na família, FBT)",
  "category": "familiar",
  "line": 1,
  "summary": "Terapia familiar em que os pais assumem, de forma temporária, um papel central na ajuda ao jovem para gerir a alimentação, sem culpabilizar o jovem nem a família. Visa a recuperação do peso e da alimentação, com psicoeducação sobre nutrição e os efeitos da malnutrição.",
  "when": "NICE NG69 (rec. 1.3.10): considerar FT-AN em crianças e jovens com anorexia nervosa, em terapia só de família ou combinada com terapia multifamiliar, com a opção de algumas sessões separadas do jovem e das famílias. A guideline canadiana 2020 dá recomendação forte ao FBT na anorexia e bulimia, desde que o jovem esteja clinicamente estável. SAHM 2022 (só resumo): a terapia familiar é o tratamento psicológico ambulatório de primeira linha na anorexia nervosa do adolescente.",
  "format": "Família (sessões únicas de família ou combinação com multifamiliar), com algumas sessões separadas do jovem; cerca de 1 ano.",
  "sessions": {
   "typical": null,
   "text": "NICE NG69 1.3.11: tipicamente 18 a 20 sessões ao longo de 1 ano; rever as necessidades às 4 semanas e depois de 3 em 3 meses para decidir a frequência e a duração. A guideline descreve o programa em 3 fases, não sessão a sessão. A guideline canadiana refere um ensaio que não encontrou diferença no peso ao fim de 1 ano entre 10 e 20 sessões de FBT."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Fase 1: aliança terapêutica",
    "description": "Estabelecer uma boa aliança com o jovem, os pais ou cuidadores e os restantes familiares; a terapia enfatiza o papel da família na recuperação e não culpa o jovem nem a família."
   },
   {
    "id": "m2",
    "title": "Psicoeducação sobre nutrição",
    "description": "Informar sobre nutrição e os efeitos da malnutrição, em sessões de família e (se houver) individuais."
   },
   {
    "id": "m3",
    "title": "Pais ao centro da gestão da alimentação",
    "description": "Logo no início, apoiar os pais ou cuidadores a assumir um papel central na ajuda ao jovem para gerir a alimentação, sublinhando que este papel é temporário."
   },
   {
    "id": "m4",
    "title": "Revisão às 4 semanas e de 3 em 3 meses",
    "description": "Rever as necessidades do jovem 4 semanas após o início e depois de 3 em 3 meses, para ajustar a regularidade e a duração do tratamento."
   },
   {
    "id": "m5",
    "title": "Fase 2: autonomia adequada ao desenvolvimento",
    "description": "Apoiar o jovem (com ajuda dos pais) a estabelecer um nível de independência adequado ao seu nível de desenvolvimento."
   },
   {
    "id": "m6",
    "title": "Fase 3: plano para o fim do tratamento",
    "description": "Planear o fim do tratamento, incluindo as preocupações do jovem e da família, e a prevenção de recaída."
   },
   {
    "id": "m7",
    "title": "Apoio se o tratamento parar",
    "description": "Combinar como o jovem pode obter apoio se o tratamento for interrompido; considerar apoio aos familiares que não participam na terapia."
   }
  ],
  "source": "NICE, Eating disorders: recognition and treatment (NG69), publicada em 23/05/2017, atualizada em 16/12/2020 (datas do cabeçalho da página), https://www.nice.org.uk/guidance/ng69/chapter/Recommendations, secções 1.3.10 a 1.3.14; Couturier et al., Canadian practice guidelines for the treatment of children and adolescents with eating disorders, J Eat Disord 2020, https://pmc.ncbi.nlm.nih.gov/articles/PMC6995106/ (texto integral lido via Europe PMC), secção de tratamento baseado na família e resumo das recomendações; SAHM, Medical management of restrictive eating disorders in adolescents and young adults, J Adolesc Health 2022, https://pubmed.ncbi.nlm.nih.gov/36058805/ (só li o resumo)",
  "ages": "crianças e jovens (NICE); adolescentes (SAHM)",
  "branches": [
   "esc",
   "adol"
  ]
 },
 {
  "id": "tx-cbt-ed-an-jovens",
  "hypotheses": [
   "h-anorexia-nervosa"
  ],
  "name": "TCC focada nas perturbações alimentares (CBT-ED) individual, na anorexia nervosa",
  "category": "psicoterapia",
  "line": 2,
  "summary": "Terapia cognitivo-comportamental individual, centrada nos processos que mantêm o problema alimentar, com sessões familiares curtas associadas. Procura reduzir o risco físico e os sintomas, e promover o peso saudável e a alimentação saudável.",
  "when": "NICE NG69 (rec. 1.3.15): considerar se FT-AN for inaceitável, contraindicada ou ineficaz. A guideline canadiana 2020 dá recomendação fraca à TCC na anorexia nervosa do jovem.",
  "format": "Individual, com 8 a 12 sessões breves adicionais com o jovem e os pais ou cuidadores; até 40 semanas.",
  "sessions": {
   "typical": null,
   "text": "NICE NG69 1.3.16: tipicamente até 40 sessões ao longo de 40 semanas, com sessões 2 vezes por semana nas primeiras 2 ou 3 semanas, mais 8 a 12 sessões familiares breves. Componentes sem ordem fixa: a guideline lista-os mas não os ordena por sessão."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Plano personalizado e riscos da malnutrição",
    "description": "Criar um plano de tratamento personalizado, baseado nos processos que parecem manter o problema alimentar, e explicar os riscos da malnutrição e do baixo peso."
   },
   {
    "id": "m2",
    "title": "Psicoeducação e plano alimentar",
    "description": "Psicoeducação sobre nutrição e os efeitos da malnutrição, nas sessões individuais e de família; discutir planos de refeições nas sessões de família."
   },
   {
    "id": "m3",
    "title": "Automonitorização",
    "description": "Registar a ingestão alimentar e os pensamentos e sentimentos associados."
   },
   {
    "id": "m4",
    "title": "Reestruturação cognitiva e humor",
    "description": "Reestruturação cognitiva e regulação do humor."
   },
   {
    "id": "m5",
    "title": "Competências sociais, imagem corporal e autoestima",
    "description": "Trabalhar competências sociais, preocupação com a imagem corporal e autoestima, aumentando a autoeficácia."
   },
   {
    "id": "m6",
    "title": "Sessões de família",
    "description": "Identificar o que, na vida em casa, dificulta a mudança de comportamento e encontrar formas de o resolver."
   },
   {
    "id": "m7",
    "title": "Trabalho de casa",
    "description": "Praticar no dia a dia o que foi aprendido."
   },
   {
    "id": "m8",
    "title": "Prevenção de recaída e apoio no fim",
    "description": "Prevenção de recaída e combinar como obter apoio se o tratamento parar."
   }
  ],
  "source": "NICE, Eating disorders: recognition and treatment (NG69), publicada em 23/05/2017, atualizada em 16/12/2020 (datas do cabeçalho da página), https://www.nice.org.uk/guidance/ng69/chapter/Recommendations, secção 1.3.15 e 1.3.16; Couturier et al., Canadian practice guidelines for the treatment of children and adolescents with eating disorders, J Eat Disord 2020, https://pmc.ncbi.nlm.nih.gov/articles/PMC6995106/ (texto integral lido via Europe PMC), resumo das recomendações",
  "ages": "crianças e jovens (NICE, sem idades)",
  "branches": [
   "esc",
   "adol"
  ]
 },
 {
  "id": "tx-afp-an",
  "hypotheses": [
   "h-anorexia-nervosa"
  ],
  "name": "Psicoterapia focada no adolescente para a anorexia nervosa (AFP-AN)",
  "category": "psicoterapia",
  "line": 3,
  "summary": "Psicoterapia individual longa, que trabalha a autoimagem, as emoções e os processos interpessoais, e a forma como o jovem usa o comportamento anoréxico como estratégia de coping. Inclui sessões de família para ajudar os pais a apoiar a mudança.",
  "when": "NICE NG69 (rec. 1.3.15): considerar se FT-AN for inaceitável, contraindicada ou ineficaz. Guideline canadiana 2020: recomendação fraca para AFP na anorexia nervosa.",
  "format": "Individual, com 8 a 12 sessões de família adicionais; 12 a 18 meses.",
  "sessions": {
   "typical": null,
   "text": "NICE NG69 1.3.17: tipicamente 32 a 40 sessões individuais ao longo de 12 a 18 meses, mais sessões regulares no início, mais 8 a 12 sessões de família; rever as necessidades às 4 semanas e depois de 3 em 3 meses."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Início: relação e motivação",
    "description": "Sessões mais regulares no início, para construir a relação com o terapeuta e a motivação para mudar o comportamento."
   },
   {
    "id": "m2",
    "title": "Psicoeducação sobre nutrição",
    "description": "Nas sessões individuais e de família, sobre nutrição e os efeitos da malnutrição."
   },
   {
    "id": "m3",
    "title": "Formulação",
    "description": "Formulação dos problemas psicológicos e de como o jovem usa o comportamento anoréxico como estratégia de coping."
   },
   {
    "id": "m4",
    "title": "Medo do aumento de peso",
    "description": "Abordar os medos sobre o aumento de peso, sublinhando que o aumento de peso e a alimentação saudável são parte crítica da terapia."
   },
   {
    "id": "m5",
    "title": "Estratégias alternativas para o stress",
    "description": "Encontrar outras formas de gerir o stress, com foco na autoimagem, nas emoções e nos processos interpessoais."
   },
   {
    "id": "m6",
    "title": "Fases tardias: identidade e independência",
    "description": "Explorar questões de identidade e construir independência."
   },
   {
    "id": "m7",
    "title": "Fim do tratamento",
    "description": "Transferir a experiência da terapia para situações do dia a dia e combinar como obter apoio se o tratamento parar."
   },
   {
    "id": "m8",
    "title": "Sessões de família",
    "description": "Ajudar os pais ou cuidadores a apoiar o jovem a mudar o comportamento."
   }
  ],
  "source": "NICE, Eating disorders: recognition and treatment (NG69), publicada em 23/05/2017, atualizada em 16/12/2020 (datas do cabeçalho da página), https://www.nice.org.uk/guidance/ng69/chapter/Recommendations, secção 1.3.15 e 1.3.17; Couturier et al., Canadian practice guidelines for the treatment of children and adolescents with eating disorders, J Eat Disord 2020, https://pmc.ncbi.nlm.nih.gov/articles/PMC6995106/ (texto integral lido via Europe PMC), resumo das recomendações",
  "ages": "adolescentes",
  "branches": [
   "adol"
  ]
 },
 {
  "id": "tx-ft-bn",
  "hypotheses": [
   "h-bulimia-nervosa"
  ],
  "name": "Terapia familiar focada na bulimia nervosa (FT-BN)",
  "category": "familiar",
  "line": 1,
  "summary": "Terapia familiar que apoia a família a ajudar o jovem a recuperar, sem o culpar, estabelecendo em colaboração padrões regulares de alimentação e reduzindo os comportamentos compensatórios. Inclui reuniões regulares com o jovem a sós.",
  "when": "NICE NG69 (rec. 1.5.6): oferecer FT-BN a crianças e jovens com bulimia nervosa. Guideline canadiana 2020: FBT com recomendação forte na bulimia nervosa do jovem (ensaios com remissão maior que TCC e psicoterapia de apoio, evidência de qualidade moderada).",
  "format": "Família, com reuniões regulares com o jovem a sós; cerca de 6 meses.",
  "sessions": {
   "typical": null,
   "text": "NICE NG69 1.5.7: tipicamente 18 a 20 sessões ao longo de 6 meses. A guideline refere fases inicial, tardias e final, sem detalhe sessão a sessão."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Relação terapêutica",
    "description": "Estabelecer uma boa relação terapêutica com o jovem e a família; apoiar e encorajar a família a ajudar a recuperação, sem culpar."
   },
   {
    "id": "m2",
    "title": "Informação sobre peso, dietas e compensação",
    "description": "Informação sobre regulação do peso corporal, dietas e os efeitos adversos de tentar controlar o peso com vómitos autoinduzidos, laxantes ou outros comportamentos compensatórios."
   },
   {
    "id": "m3",
    "title": "Padrões regulares de alimentação",
    "description": "Abordagem colaborativa entre pais e jovem para estabelecer padrões regulares de alimentação e minimizar os comportamentos compensatórios."
   },
   {
    "id": "m4",
    "title": "Automonitorização e conversa com a família",
    "description": "Automonitorização dos comportamentos bulímicos e discussão com os familiares."
   },
   {
    "id": "m5",
    "title": "Reuniões com o jovem a sós",
    "description": "Reuniões regulares com o jovem a sós ao longo de todo o tratamento."
   },
   {
    "id": "m6",
    "title": "Fases tardias: independência",
    "description": "Apoiar o jovem e a família a estabelecer um nível de independência adequado ao desenvolvimento."
   },
   {
    "id": "m7",
    "title": "Fase final: fim do tratamento e recaída",
    "description": "Planos para o fim do tratamento, incluindo as preocupações do jovem e da família, e prevenção de recaída."
   }
  ],
  "source": "NICE, Eating disorders: recognition and treatment (NG69), publicada em 23/05/2017, atualizada em 16/12/2020 (datas do cabeçalho da página), https://www.nice.org.uk/guidance/ng69/chapter/Recommendations, secção 1.5.6 a 1.5.8; Couturier et al., Canadian practice guidelines for the treatment of children and adolescents with eating disorders, J Eat Disord 2020, https://pmc.ncbi.nlm.nih.gov/articles/PMC6995106/ (texto integral lido via Europe PMC), secção de tratamento baseado na família na bulimia",
  "ages": "crianças e jovens (NICE, sem idades); bulimia sobretudo adolescentes",
  "branches": [
   "adol"
  ]
 },
 {
  "id": "tx-cbt-ed-bn-jovens",
  "hypotheses": [
   "h-bulimia-nervosa"
  ],
  "name": "TCC focada nas perturbações alimentares (CBT-ED) individual, na bulimia nervosa",
  "category": "psicoterapia",
  "line": 2,
  "summary": "TCC individual que começa pelo papel da bulimia na vida do jovem e pela motivação para mudar, e passa pela alimentação regular, formulação de caso e automonitorização. Inclui até 4 sessões com os pais.",
  "when": "NICE NG69 (rec. 1.5.9): considerar se FT-BN for inaceitável, contraindicada ou ineficaz. Guideline canadiana 2020: recomendação fraca para TCC na bulimia nervosa do jovem.",
  "format": "Individual, com até 4 sessões adicionais com os pais ou cuidadores; 6 meses.",
  "sessions": {
   "typical": 18,
   "text": "NICE NG69 1.5.10: tipicamente 18 sessões ao longo de 6 meses, com sessões mais frequentes no início do tratamento, mais até 4 sessões com os pais ou cuidadores. A guideline lista os temas por ordem aproximada; não os atribui a sessões fixas."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Papel da bulimia e motivação",
    "description": "Foco inicial no papel que a bulimia nervosa tem na vida do jovem e na construção da motivação para mudar."
   },
   {
    "id": "m2",
    "title": "Psicoeducação e alimentação regular",
    "description": "Psicoeducação sobre perturbações alimentares e como os sintomas se mantêm, encorajando o estabelecimento gradual de hábitos alimentares regulares."
   },
   {
    "id": "m3",
    "title": "Formulação de caso",
    "description": "Construir com o jovem a formulação de caso."
   },
   {
    "id": "m4",
    "title": "Automonitorização",
    "description": "Ensinar a monitorizar pensamentos, sentimentos e comportamentos."
   },
   {
    "id": "m5",
    "title": "Metas e resolução de problemas",
    "description": "Definir metas e encorajar a abordar pensamentos, crenças e comportamentos problemáticos com resolução de problemas."
   },
   {
    "id": "m6",
    "title": "Prevenção de recaída",
    "description": "Estratégias de prevenção de recaída para preparar e atenuar recuos futuros."
   },
   {
    "id": "m7",
    "title": "Sessões com os pais",
    "description": "Educação sobre perturbações alimentares, identificar fatores familiares que impedem a mudança e discutir como a família pode apoiar a recuperação."
   }
  ],
  "source": "NICE, Eating disorders: recognition and treatment (NG69), publicada em 23/05/2017, atualizada em 16/12/2020 (datas do cabeçalho da página), https://www.nice.org.uk/guidance/ng69/chapter/Recommendations, secção 1.5.9 e 1.5.10; Couturier et al., Canadian practice guidelines for the treatment of children and adolescents with eating disorders, J Eat Disord 2020, https://pmc.ncbi.nlm.nih.gov/articles/PMC6995106/ (texto integral lido via Europe PMC), resumo das recomendações",
  "ages": "crianças e jovens (NICE, sem idades); bulimia sobretudo adolescentes",
  "branches": [
   "adol"
  ]
 },
 {
  "id": "tx-autoajuda-guiada-ingestao-compulsiva",
  "hypotheses": [
   "h-ingestao-compulsiva"
  ],
  "name": "Programa de autoajuda guiada focado na ingestão compulsiva",
  "category": "psicoterapia",
  "line": 1,
  "summary": "Programa de materiais de autoajuda cognitivo-comportamental, apoiado por sessões breves cujo único foco é ajudar a pessoa a seguir o programa. A NICE aplica aos jovens o que recomenda para adultos.",
  "when": "NICE NG69 (rec. 1.4.8): para crianças e jovens com ingestão compulsiva oferecer os mesmos tratamentos recomendados para adultos; para adultos, a autoajuda guiada é a primeira oferta (rec. 1.4.2). A guideline não indica adaptações específicas para jovens (não verifiquei se existem noutra fonte).",
  "format": "Autoajuda com materiais cognitivo-comportamentais e sessões breves de apoio (20 minutos cada).",
  "sessions": {
   "typical": null,
   "text": "NICE NG69 1.4.3 (recomendação para adultos): por exemplo, 4 a 9 sessões de 20 minutos ao longo de 16 semanas, semanais no início. É um exemplo da guideline, não um número fixo. Componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Materiais de autoajuda cognitivo-comportamental",
    "description": "Programa de autoajuda cognitivo-comportamental focado na ingestão compulsiva."
   },
   {
    "id": "m2",
    "title": "Sessões breves de apoio",
    "description": "Sessões breves, semanais no início, que se focam exclusivamente em ajudar a pessoa a seguir o programa."
   },
   {
    "id": "m3",
    "title": "Foco na adesão",
    "description": "O apoio não alarga o âmbito: concentra-se na adesão ao programa."
   },
   {
    "id": "m4",
    "title": "Reavaliação às 4 semanas",
    "description": "Se a autoajuda guiada for inaceitável, contraindicada ou ineficaz após 4 semanas, passar a TCC em grupo ou individual."
   },
   {
    "id": "m5",
    "title": "Peso não é o alvo",
    "description": "Explicar que os tratamentos psicológicos para a ingestão compulsiva têm efeito limitado no peso e que a perda de peso não é um alvo da terapia."
   }
  ],
  "source": "NICE, Eating disorders: recognition and treatment (NG69), publicada em 23/05/2017, atualizada em 16/12/2020 (datas do cabeçalho da página), https://www.nice.org.uk/guidance/ng69/chapter/Recommendations, secção 1.4.1 a 1.4.8",
  "ages": "crianças e jovens, como nos adultos (NICE, sem idades)",
  "branches": [
   "adol"
  ]
 },
 {
  "id": "tx-cbt-ed-grupo-ingestao-compulsiva",
  "hypotheses": [
   "h-ingestao-compulsiva"
  ],
  "name": "TCC focada nas perturbações alimentares (CBT-ED) em grupo, na ingestão compulsiva",
  "category": "psicoterapia",
  "line": 2,
  "summary": "Programa de grupo semanal com psicoeducação, automonitorização do comportamento alimentar, plano diário de alimentação e identificação de sinais que desencadeiam as compulsões. Inclui treino de exposição ao corpo e prevenção de recaída.",
  "when": "NICE NG69 (rec. 1.4.4 e 1.4.8): oferecer se a autoajuda guiada for inaceitável, contraindicada ou ineficaz após 4 semanas; para jovens, os mesmos tratamentos que para adultos.",
  "format": "Grupo, 90 minutos por sessão, semanal; 4 meses.",
  "sessions": {
   "typical": 16,
   "text": "NICE NG69 1.4.5 (recomendação para adultos, aplicada aos jovens pela rec. 1.4.8): tipicamente 16 sessões semanais de grupo de 90 minutos ao longo de 4 meses. A guideline lista os componentes sem os ordenar por sessão."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Psicoeducação",
    "description": "Psicoeducação sobre a ingestão compulsiva."
   },
   {
    "id": "m2",
    "title": "Automonitorização",
    "description": "Automonitorização do comportamento alimentar e ajudar a analisar os problemas e objetivos."
   },
   {
    "id": "m3",
    "title": "Plano diário de alimentação",
    "description": "Fazer um plano diário de ingestão alimentar."
   },
   {
    "id": "m4",
    "title": "Sinais desencadeantes",
    "description": "Identificar os sinais que desencadeiam as compulsões."
   },
   {
    "id": "m5",
    "title": "Treino de exposição ao corpo",
    "description": "Treino de exposição ao corpo e identificar e mudar crenças negativas sobre o corpo."
   },
   {
    "id": "m6",
    "title": "Prevenção de recaída",
    "description": "Evitar recaídas e lidar com riscos e desencadeantes atuais e futuros."
   }
  ],
  "source": "NICE, Eating disorders: recognition and treatment (NG69), publicada em 23/05/2017, atualizada em 16/12/2020 (datas do cabeçalho da página), https://www.nice.org.uk/guidance/ng69/chapter/Recommendations, secção 1.4.4, 1.4.5 e 1.4.8",
  "ages": "crianças e jovens, como nos adultos (NICE, sem idades)",
  "branches": [
   "adol"
  ]
 },
 {
  "id": "tx-cbt-ed-individual-ingestao-compulsiva",
  "hypotheses": [
   "h-ingestao-compulsiva"
  ],
  "name": "TCC focada nas perturbações alimentares (CBT-ED) individual, na ingestão compulsiva",
  "category": "psicoterapia",
  "line": 3,
  "summary": "TCC individual que parte de uma formulação sobre como fatores alimentares e emocionais contribuem para as compulsões. Trabalha refeições regulares, gatilhos emocionais e imagem corporal, com registo semanal.",
  "when": "NICE NG69 (rec. 1.4.6 e 1.4.8): considerar se a TCC em grupo não estiver disponível ou a pessoa a recusar; para jovens, os mesmos tratamentos que para adultos.",
  "format": "Individual.",
  "sessions": {
   "typical": null,
   "text": "NICE NG69 1.4.7 (recomendação para adultos): tipicamente 16 a 20 sessões. Componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Formulação",
    "description": "Formulação dos problemas psicológicos para perceber como fatores alimentares e emocionais contribuem para as compulsões."
   },
   {
    "id": "m2",
    "title": "Refeições e lanches regulares",
    "description": "Aconselhar a comer refeições e lanches regulares para evitar a fome."
   },
   {
    "id": "m3",
    "title": "Gatilhos emocionais",
    "description": "Abordar os gatilhos emocionais das compulsões com reestruturação cognitiva, experiências comportamentais e exposição."
   },
   {
    "id": "m4",
    "title": "Registo semanal",
    "description": "Monitorização semanal das compulsões, da ingestão alimentar e do peso, partilhando o registo do peso com a pessoa."
   },
   {
    "id": "m5",
    "title": "Imagem corporal",
    "description": "Abordar as questões de imagem corporal, se existirem."
   },
   {
    "id": "m6",
    "title": "Não fazer dieta",
    "description": "Explicar que a TCC não visa perder peso e aconselhar a não tentar perder peso (por exemplo com dietas) durante o tratamento, porque tende a desencadear compulsões."
   }
  ],
  "source": "NICE, Eating disorders: recognition and treatment (NG69), publicada em 23/05/2017, atualizada em 16/12/2020 (datas do cabeçalho da página), https://www.nice.org.uk/guidance/ng69/chapter/Recommendations, secção 1.4.6 a 1.4.8",
  "ages": "crianças e jovens, como nos adultos (NICE, sem idades)",
  "branches": [
   "esc",
   "adol"
  ]
 },
 {
  "id": "tx-cbt-ar-arfid",
  "hypotheses": [
   "h-arfid"
  ],
  "name": "TCC para ARFID (CBT-AR)",
  "category": "psicoterapia",
  "branches": [
   "esc",
   "adol"
  ],
  "line": null,
  "summary": "Tratamento manualizado e flexível em 4 estágios, com sessões semanais de 50 minutos, em formato individual ou com apoio da família. Foi estudado em jovens dos 10 aos 17 anos com resultados de viabilidade e prova de conceito, sem ensaio aleatorizado lido.",
  "when": "Sem guideline lida que a recomende: a guideline canadiana 2020 só encontrou relatos de caso de TCC no ARFID, e uma revisão de 2024 refere evidência limitada. Opção a ponderar, com evidência preliminar.",
  "format": "Individual ou com apoio da família; sessões semanais de 50 minutos.",
  "sessions": {
   "typical": null,
   "text": "Thomas et al., 2020 (resumo): 20 a 30 sessões em jovens de 10 a 17 anos. Estudo de CBT-AR dirigido por dietista (2026): 20 sessões se o peso estava estável e até 30 se havia supressão de peso; estágio 1 com 2 a 4 sessões, estágio 2 com 2, estágio 3 com 14 a 22 e estágio 4 com 2."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Estágio 1: psicoeducação e mudança precoce de comportamento",
    "description": "2 a 4 sessões."
   },
   {
    "id": "m2",
    "title": "Estágio 2: planeamento do tratamento",
    "description": "2 sessões."
   },
   {
    "id": "m3",
    "title": "Estágio 3: abordar as apresentações fenotípicas",
    "description": "14 a 22 sessões; o estudo descrito cita, como exemplo, um módulo para a sensibilidade sensorial; nos doentes com supressão de peso, o aumento de peso mantém-se como foco."
   },
   {
    "id": "m4",
    "title": "Estágio 4: prevenção de recaída",
    "description": "2 sessões."
   }
  ],
  "source": "CBT-AR em crianças e adolescentes (Thomas et al.), Int J Eat Disord 2020, https://pubmed.ncbi.nlm.nih.gov/32776570/ (só li o resumo); Dietetic-led CBT-AR, Int J Eat Disord 2026, https://pmc.ncbi.nlm.nih.gov/articles/PMC13349403/ (texto integral, secção de métodos, onde se descrevem os 4 estágios); Couturier et al., Canadian practice guidelines for the treatment of children and adolescents with eating disorders, J Eat Disord 2020, https://pmc.ncbi.nlm.nih.gov/articles/PMC6995106/ (texto integral lido via Europe PMC), secção de TCC no ARFID; Fonseca et al., J Eat Disord 2024, https://pmc.ncbi.nlm.nih.gov/articles/PMC11157884/. SAHM 2022 só no resumo (inclui o ARFID entre as perturbações restritivas).",
  "ages": "10 a 17 anos"
 },
 {
  "id": "tx-fbt-arfid",
  "hypotheses": [
   "h-arfid"
  ],
  "name": "Tratamento baseado na família adaptado ao ARFID (FBT-ARFID)",
  "category": "familiar",
  "branches": [
   "esc"
  ],
  "line": null,
  "summary": "Terapia familiar adaptada ao ARFID, em que os cuidadores são os agentes principais da mudança do comportamento alimentar. Num ensaio aleatorizado em crianças de 6 a 12 anos com baixo peso, foi superior a uma terapia individual para aumentar o peso.",
  "when": "Crianças de 6 a 12 anos com ARFID e baixo peso (ensaio JAACAP 2026, só resumo). A guideline canadiana 2020 só tinha relatos de caso.",
  "format": "Família; telessaúde no ensaio.",
  "sessions": {
   "typical": 14,
   "text": "Ensaio JAACAP 2026 (resumo): 14 sessões de FBT-ARFID por telessaúde ao longo de 4 meses. Não li a descrição das sessões, por isso não indico módulos."
  },
  "modules": [],
  "source": "Family vs individual treatment for children with ARFID: a randomized clinical trial, J Am Acad Child Adolesc Psychiatry 2026, https://pubmed.ncbi.nlm.nih.gov/42019720/ (só li o resumo); Couturier et al., Canadian practice guidelines for the treatment of children and adolescents with eating disorders, J Eat Disord 2020, https://pmc.ncbi.nlm.nih.gov/articles/PMC6995106/ (texto integral lido via Europe PMC), secção de FBT noutras populações; Fonseca et al., J Eat Disord 2024, https://pmc.ncbi.nlm.nih.gov/articles/PMC11157884/",
  "ages": "6 a 12 anos"
 },
 {
  "id": "tx-space-arfid",
  "hypotheses": [
   "h-arfid"
  ],
  "name": "SPACE-ARFID (tratamento centrado nos pais)",
  "category": "parental",
  "branches": [
   "esc",
   "adol"
  ],
  "line": null,
  "summary": "Tratamento ambulatório centrado nos pais, que trabalha as respostas parentais aos hábitos alimentares problemáticos da criança para promover a flexibilidade alimentar. Estudo piloto sem grupo de controlo, com crianças de 6 a 14 anos.",
  "when": "Evidência preliminar (piloto de 15 famílias); não encontrei guideline que o recomende.",
  "format": "Pais; sessões semanais.",
  "sessions": {
   "typical": 12,
   "text": "Piloto (resumo): 12 sessões semanais. Não li o manual nem o conteúdo de cada sessão, por isso não indico módulos."
  },
  "modules": [],
  "source": "SPACE-ARFID: a pilot trial of a novel parent-based treatment for ARFID, Int J Eat Disord 2020, https://pubmed.ncbi.nlm.nih.gov/33464594/ (só li o resumo)",
  "ages": "6 a 14 anos"
 },
 {
  "id": "tx-comportamental-pica",
  "hypotheses": [
   "h-pica"
  ],
  "name": "Tratamento comportamental da pica",
  "category": "comportamental",
  "line": null,
  "summary": "Intervenções comportamentais que reduzem a pica, estudadas sobretudo em crianças com perturbações do desenvolvimento. Existem recomendações práticas de avaliação, tratamento e prevenção.",
  "when": "Pica em crianças com perturbações do desenvolvimento intelectual ou do espetro do autismo. Li apenas os resumos: não sei que técnicas concretas recomendam, por isso não indico módulos.",
  "format": "Não verificado.",
  "sessions": {
   "typical": null,
   "text": "Não verificado: li só os resumos, sem número de sessões."
  },
  "modules": [],
  "source": "Assessment, behavioral treatment, and prevention of pica: clinical guidelines and recommendations for practitioners, Res Dev Disabil 2012, https://pubmed.ncbi.nlm.nih.gov/22750361/ (só li o resumo); Clinical outcomes of behavioral treatments for pica in children with developmental disabilities, J Autism Dev Disord 2015, https://pubmed.ncbi.nlm.nih.gov/25636679/ (só li o resumo: 11 doentes, efeito grande)",
  "ages": "crianças com perturbações do desenvolvimento; idade não especificada na fonte"
 },
 {
  "id": "tx-respiracao-diafragmatica-ruminacao",
  "hypotheses": [
   "h-ruminacao-regurgitacao"
  ],
  "name": "Respiração diafragmática com re-deglutição e TCC na ruminação",
  "category": "comportamental",
  "line": null,
  "summary": "Abordagem biopsicossocial em que a respiração diafragmática, emparelhada com a re-deglutição como resposta competitiva (semelhante à reversão de hábito), reduz a frequência e a intensidade dos episódios. Associa psicoeducação e técnicas cognitivo-comportamentais.",
  "when": "Ruminação pediátrica, com evidência muito limitada: série de 2 casos de 2025, que refere falta de investigação sobre tratamento eficaz. Não encontrei guideline.",
  "format": "Individual; ambulatório, programa intensivo ambulatório ou internamento, consoante a gravidade.",
  "sessions": {
   "typical": null,
   "text": "Componentes, sem ordem fixa; a série de casos não indica número de sessões que eu tenha lido."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Psicoeducação",
    "description": "Explicar os mecanismos que mantêm a ruminação."
   },
   {
    "id": "m2",
    "title": "Avaliação funcional da ruminação",
    "description": "Compreender o que precede e mantém os episódios."
   },
   {
    "id": "m3",
    "title": "Respiração diafragmática",
    "description": "Reduz a frequência e a intensidade dos sintomas ao induzir ativação parassimpática e relaxamento da parede abdominal."
   },
   {
    "id": "m4",
    "title": "Re-deglutição",
    "description": "Resposta competitiva que ajuda a resistir ao impulso, emparelhada com a respiração diafragmática."
   },
   {
    "id": "m5",
    "title": "Técnicas cognitivo-comportamentais e autoeficácia",
    "description": "Reestruturação cognitiva, aumento da autoeficácia e técnicas de entrevista motivacional."
   },
   {
    "id": "m6",
    "title": "Gestão do stress",
    "description": "Gestão do stress, com adesão e, se necessário, biofeedback ou referenciação para saúde mental especializada."
   }
  ],
  "source": "Piña-Anastasiadis et al., Rethinking psychological treatment targets for pediatric rumination syndrome, JPGN Reports 2025, https://pmc.ncbi.nlm.nih.gov/articles/PMC12611596/ (texto integral lido via Europe PMC; série de 2 casos)",
  "ages": "idade não especificada na fonte"
 },
 {
  "id": "tx-tcci-adolescentes",
  "hypotheses": [
   "h-insonia"
  ],
  "name": "TCC para a insónia (TCC-I) em adolescentes",
  "category": "psicoterapia",
  "branches": [
   "adol"
  ],
  "line": null,
  "summary": "Programa multicomponente com educação sobre o sono, diário do sono, restrição do tempo na cama, controlo de estímulos, relaxamento, mindfulness e reestruturação cognitiva. A ordem dos módulos abaixo vem do programa digital somnio junior (14 a 17 anos); não encontrei guideline pediátrica que a defina.",
  "when": "Insónia crónica em adolescentes. Meta-análise de 2018 (Ma et al.): a TCC-I melhora a latência do sono e a eficiência do sono, sem melhoria significativa do tempo de vigília depois do início do sono nem do tempo total de sono. As guidelines da AASM que encontrei sobre tratamentos comportamentais da insónia são de adultos; a guideline AAN 2020 põe as estratégias comportamentais em primeira linha na PEA.",
  "format": "Individual (ou em grupo, ou digital); pais envolvidos nos programas para crianças.",
  "sessions": {
   "typical": null,
   "text": "Sem número de sessões em guideline. Exemplos lidos: TCC-I de 6 sessões em crianças (Schlarb, citado em Ma 2018); Sleepio com 6 sessões semanais de cerca de 20 minutos (adolescentes com problemas de saúde mental, 2020); i-Sleep youth com 5 sessões em 5 a 8 semanas (protocolo 2021); somnio junior com 14 módulos de 5 a 30 minutos (protocolo 2026). A ordem dos módulos é a do somnio junior."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Introdução e diário do sono",
    "description": "Conhecer o problema de sono do jovem e iniciar o diário do sono (registo de manhã e à noite: hora de deitar, tempo de sono e eficiência do sono)."
   },
   {
    "id": "m2",
    "title": "Conhecimento sobre o sono",
    "description": "Fases do sono, ritmo do sono, quantidade ideal; desmontar mitos e reduzir medos e preocupações que impedem de dormir."
   },
   {
    "id": "m3",
    "title": "Exercício prático 1",
    "description": "Testar o que aprendeu com exemplos do dia a dia de jovens personagens."
   },
   {
    "id": "m4",
    "title": "Ciclo da insónia",
    "description": "Como se desenvolve a perturbação do sono e que fatores a mantêm."
   },
   {
    "id": "m5",
    "title": "Horas de sono: regularidade e janela de sono",
    "description": "Ciclo sono-vigília regular; introdução da redução do tempo na cama, com janela de sono sugerida a partir do diário; omite-se se contraindicada."
   },
   {
    "id": "m6",
    "title": "Comportamento do sono 1",
    "description": "Fatores que favorecem ou prejudicam o sono (regras de higiene do sono); introdução do controlo de estímulos."
   },
   {
    "id": "m7",
    "title": "Relaxamento",
    "description": "Relaxamento muscular progressivo."
   },
   {
    "id": "m8",
    "title": "Comportamento do sono 2",
    "description": "Atividades diárias, alimentação e substâncias; estabelecer uma rotina de sono."
   },
   {
    "id": "m9",
    "title": "Mindfulness",
    "description": "Introdução à redução do stress baseada em mindfulness."
   },
   {
    "id": "m10",
    "title": "Exercício prático 2",
    "description": "Novo teste dos conhecimentos com exemplos de jovens personagens."
   },
   {
    "id": "m11",
    "title": "Pensamentos",
    "description": "Identificar pensamentos que atrapalham o sono e reestruturar expectativas irrealistas e conceções erradas."
   },
   {
    "id": "m12",
    "title": "Decisões do dia a dia",
    "description": "Comportamentos de segurança, ruminação, procura de apoio social, sestas, rotinas e atividades diurnas, pressão de sono e olhar para o relógio à noite."
   },
   {
    "id": "m13",
    "title": "Mindfulness (consolidação)",
    "description": "Consolidar o mindfulness e abordar as dificuldades individuais."
   },
   {
    "id": "m14",
    "title": "Revisão e acompanhamento",
    "description": "Revisão global (com quiz) e reavaliação regular dos parâmetros do sono e dos sintomas, do humor e da motivação."
   }
  ],
  "source": "Digital treatment for insomnia in adolescents: study protocol for a randomized controlled trial (somnio junior, 14 a 17 anos), Front Child Adolesc Psychiatry 2026, https://pmc.ncbi.nlm.nih.gov/articles/PMC13176156/, Tabela 1 (protocolo de ensaio, não guideline); Ma et al., Efficacy of CBT in children and adolescents with insomnia: systematic review and meta-analysis, Braz J Med Biol Res 2018, https://pmc.ncbi.nlm.nih.gov/articles/PMC6002144/; Digital CBT-I for adolescents with mental health problems, JMIR Ment Health 2020, https://pmc.ncbi.nlm.nih.gov/articles/PMC7078631/; i-Sleep youth, Trials 2021, https://pmc.ncbi.nlm.nih.gov/articles/PMC8077706/. AAN 2020 (resumo): https://pubmed.ncbi.nlm.nih.gov/32051244/",
  "ages": "14 a 17 anos (programa somnio junior); adolescentes"
 },
 {
  "id": "tx-comportamental-sono-pequenos",
  "hypotheses": [
   "h-insonia"
  ],
  "name": "Tratamento comportamental dos problemas de deitar e despertares noturnos em crianças pequenas",
  "category": "comportamental",
  "branches": [
   "pre"
  ],
  "line": 1,
  "summary": "Intervenções comportamentais para problemas ao deitar e despertares noturnos dos 0 aos 4 anos e 11 meses. A AASM classifica a extinção, a extinção com presença dos pais e a educação parental preventiva como eficazes (Standards).",
  "when": "Problemas ao deitar e despertares noturnos em crianças até aos 4 anos e 11 meses (parâmetros de prática da AASM, 2006). É o documento da AASM mais recente que li sobre o tema; não confirmei se foi substituído (pesquisas apontam trabalhos de 2023 a 2025 que só vi como título).",
  "format": "Pais.",
  "sessions": {
   "typical": null,
   "text": "Componentes, sem ordem fixa; os parâmetros de prática não indicam número de sessões (só li o resumo). Mais de 80% das crianças tratadas tiveram melhoria clinicamente significativa mantida 3 a 6 meses, em revisão de 52 estudos."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Educação parental preventiva",
    "description": "Classificada como Standard (eficaz)."
   },
   {
    "id": "m2",
    "title": "Extinção sem modificação",
    "description": "Classificada como Standard (eficaz)."
   },
   {
    "id": "m3",
    "title": "Extinção com presença dos pais",
    "description": "Classificada como Standard (eficaz)."
   },
   {
    "id": "m4",
    "title": "Extinção gradual",
    "description": "Classificada como Guideline (eficaz, com menor certeza)."
   },
   {
    "id": "m5",
    "title": "Desvanecimento da hora de deitar e rotinas positivas",
    "description": "Classificado como Guideline (eficaz, com menor certeza)."
   },
   {
    "id": "m6",
    "title": "Despertares programados",
    "description": "Classificados como Guideline (eficaz, com menor certeza)."
   }
  ],
  "source": "Practice parameters for behavioral treatment of bedtime problems and night wakings in infants and young children, Sleep 2006, https://pubmed.ncbi.nlm.nih.gov/17068980/ (só li o resumo); Behavioral treatment of bedtime problems and night wakings in infants and young children (revisão de 52 estudos), Sleep 2006, https://pubmed.ncbi.nlm.nih.gov/17068979/ (só li o resumo)",
  "ages": "0 a 4 anos e 11 meses"
 },
 {
  "id": "tx-estrategias-comportamentais-sono-pea",
  "hypotheses": [
   "h-insonia"
  ],
  "name": "Estratégias comportamentais para o sono na PEA (aconselhamento aos pais)",
  "category": "psicoeducacao",
  "line": 1,
  "summary": "Aconselhar os pais sobre hábitos de sono, com estratégias comportamentais como primeira abordagem, depois de rever medicação e condições coexistentes. Não há evidência para o uso rotineiro de cobertores pesados ou colchões especiais.",
  "when": "Crianças e adolescentes com PEA e perturbação do sono (guideline AAN 2020, nível B).",
  "format": "Pais.",
  "sessions": {
   "typical": null,
   "text": "Componentes, sem ordem fixa; só li o resumo e não consta número de sessões."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Avaliar medicação e comorbilidades",
    "description": "Rever medicamentos e condições coexistentes que possam contribuir para a perturbação do sono e tratá-las."
   },
   {
    "id": "m2",
    "title": "Aconselhar os pais sobre hábitos de sono",
    "description": "Estratégias comportamentais como abordagem de primeira linha, sozinhas ou combinadas com abordagens farmacológicas ou nutracêuticas."
   },
   {
    "id": "m3",
    "title": "Cobertores pesados e colchões especiais",
    "description": "Informar que não há evidência para o uso rotineiro; se perguntarem, o ensaio não relatou eventos adversos graves com os cobertores."
   }
  ],
  "source": "Practice guideline: treatment for insomnia and disrupted sleep behavior in children and adolescents with ASD, AAN, Neurology 2020, https://pubmed.ncbi.nlm.nih.gov/32051244/ (só li o resumo)",
  "ages": "crianças e adolescentes com PEA"
 },
 {
  "id": "tx-cpap-osa-persistente",
  "hypotheses": [
   "h-apneia-obstrutiva-sono"
  ],
  "name": "Pressão positiva contínua (CPAP) na apneia obstrutiva do sono persistente pediátrica",
  "category": "outra",
  "line": 3,
  "summary": "Tratamento com CPAP para crianças com apneia obstrutiva persistente depois da adenotonsilectomia, que não reúnem condições para tratamento específico da via aérea superior. A adesão é o ponto crítico e exige educação e seguimento intensivo nas primeiras semanas.",
  "when": "ATS 2024: sugere-se (recomendação condicional, certeza muito baixa) considerar CPAP em crianças com apneia obstrutiva persistente que não são candidatas a tratamento específico da via aérea superior. Não li a recomendação para a adenotonsilectomia (primeira abordagem habitual), que é cirúrgica.",
  "format": "Individual, em equipa multidisciplinar; adesão com apoio de pais ou cuidadores.",
  "sessions": {
   "typical": null,
   "text": "Sem sessões de terapia: primeira consulta 30 a 90 dias após o início (de preferência dentro de poucas semanas); seguimento intensivo nas primeiras semanas; frequência posterior varia consoante a tolerância e a adesão."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Avaliação multidisciplinar",
    "description": "Avaliar com equipa multidisciplinar as opções; pode ponderar-se endoscopia do sono induzida por fármacos e outros exames de imagem se o CPAP não for desejado, a adesão for fraca ou houver suspeita de obstrução cirurgicamente corrigível."
   },
   {
    "id": "m2",
    "title": "Titulação",
    "description": "Decidir entre estudo de titulação em laboratório (por disponibilidade ou se a resposta for parcial com CPAP automático) e CPAP automático empírico (por exemplo em adolescentes saudáveis)."
   },
   {
    "id": "m3",
    "title": "Educação de doente e cuidadores",
    "description": "Focar a educação desde o início; o sucesso precoce associa-se ao sucesso a longo prazo; o objetivo é usar o CPAP durante todo o tempo de sono."
   },
   {
    "id": "m4",
    "title": "Primeira consulta de seguimento",
    "description": "Dentro de 30 a 90 dias, de preferência em poucas semanas."
   },
   {
    "id": "m5",
    "title": "Descarga de dados e efeitos adversos",
    "description": "Descarregar regularmente os dados do CPAP para avaliar a adesão e rever a aparência e crescimento da face e efeitos adversos."
   },
   {
    "id": "m6",
    "title": "Estratégias de adesão",
    "description": "Terapia comportamental, sessões de educação terapêutica com técnico respiratório, economia de fichas, hipnose médica e ferramentas de decisão partilhada; psicólogo comportamental se a resposta for parcial ou houver problemas de adesão."
   }
  ],
  "source": "Ehsan et al., Management of persistent, post-adenotonsillectomy obstructive sleep apnea in children: an official American Thoracic Society clinical practice guideline, Am J Respir Crit Care Med 2024, https://pmc.ncbi.nlm.nih.gov/articles/PMC10840779/ (texto integral lido via Europe PMC; recomendações e discussão da questão 1)",
  "ages": "crianças (pediátrico); idade não especificada na fonte"
 },
 {
  "id": "tx-perda-peso-osa-persistente",
  "hypotheses": [
   "h-apneia-obstrutiva-sono"
  ],
  "name": "Programa multidisciplinar de perda de peso na apneia obstrutiva do sono persistente com obesidade",
  "category": "estilo-de-vida",
  "line": 2,
  "summary": "Intervenção de perda de peso por dieta, exercício e modificação comportamental, idealmente num programa multidisciplinar. A ATS considera a cirurgia bariátrica apenas se a perda de peso não for conseguida.",
  "when": "ATS 2024: sugere-se (recomendação condicional, certeza muito baixa) intervenção de perda de peso em crianças com apneia obstrutiva persistente e excesso de peso ou obesidade. Sem ensaios aleatorizados; revisão de 12 estudos observacionais.",
  "format": "Programa multidisciplinar, individual ou em família (não especificado).",
  "sessions": {
   "typical": null,
   "text": "Componentes, sem ordem fixa; os programas dos estudos duraram 6 meses (residencial), 9 meses e 1 ano (ambulatório), sem sessões indicadas."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Dieta",
    "description": "Intervenção dietética no programa de perda de peso."
   },
   {
    "id": "m2",
    "title": "Exercício",
    "description": "Exercício físico no programa."
   },
   {
    "id": "m3",
    "title": "Modificação comportamental",
    "description": "Modificação comportamental, idealmente num programa multidisciplinar."
   },
   {
    "id": "m4",
    "title": "Cirurgia se não houver sucesso",
    "description": "Se a perda de peso não for conseguida com sucesso, considerar cirurgia de perda de peso nas crianças elegíveis."
   }
  ],
  "source": "Ehsan et al., ATS 2024, https://pmc.ncbi.nlm.nih.gov/articles/PMC10840779/, recomendação 3 e discussão da questão 3 (texto integral lido via Europe PMC)",
  "ages": "crianças com excesso de peso (pediátrico); idade não especificada na fonte",
  "branches": [
   "esc",
   "adol"
  ]
 },
 {
  "id": "tx-medidas-gerais-parassonias-nrem",
  "hypotheses": [
   "h-parassonias"
  ],
  "name": "Medidas de primeira linha nas parassónias do sono NREM",
  "category": "psicoeducacao",
  "line": 1,
  "summary": "Tranquilização, instrução aos pais, higiene do sono, segurança do ambiente, tratamento de outros problemas do sono e retirada de fármacos indutores. É a base do tratamento descrita numa revisão de 2023.",
  "when": "Parassónias NREM (sonambulismo, terrores noturnos, despertares confusionais) em crianças e adultos; fonte é uma revisão narrativa de 2023, não uma guideline.",
  "format": "Pais e jovem; sem formato de sessões.",
  "sessions": {
   "typical": null,
   "text": "Componentes, sem ordem fixa; a revisão não indica número de sessões."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Tranquilização",
    "description": "Explicar que não há outra condição neuropsiquiátrica grave associada e que a resolução espontânea com a idade é possível."
   },
   {
    "id": "m2",
    "title": "Instruções aos pais",
    "description": "Não interagir nem tentar acordar o jovem durante o episódio, para não o agravar nem prolongar nem provocar reações violentas."
   },
   {
    "id": "m3",
    "title": "Higiene do sono",
    "description": "Rotina de sono-vigília regular, quarto calmo e escuro, evitar privação de sono."
   },
   {
    "id": "m4",
    "title": "Segurança do ambiente",
    "description": "Remover objetos perigosos junto à cama, instalar alarmes ou trancas em portas, janelas e escadas e dormir no rés do chão."
   },
   {
    "id": "m5",
    "title": "Tratar comorbilidades do sono",
    "description": "Sobretudo apneia, mesmo ligeira, e movimentos periódicos das pernas."
   },
   {
    "id": "m6",
    "title": "Retirar fármacos indutores",
    "description": "Identificar e retirar fármacos que possam induzir os episódios (quase todos os psicotrópicos e muitas outras classes)."
   },
   {
    "id": "m7",
    "title": "Despertares programados (opcional)",
    "description": "Se os episódios forem muito previsíveis, acordar o jovem 15 a 20 minutos antes da hora habitual do episódio durante 1 a 4 semanas; exigente para os pais e a revisão classifica os resultados em crianças como insuficientes."
   }
  ],
  "source": "Mainieri et al., Diagnosis and management of NREM sleep parasomnias in children and adults, Diagnostics (Basel) 2023, https://pmc.ncbi.nlm.nih.gov/articles/PMC10093221/, secções 2.6.1 e Tabela de tratamentos (texto integral lido via Europe PMC; revisão narrativa)",
  "ages": "crianças e adultos; idade não especificada na fonte"
 },
 {
  "id": "tx-fatores-agravantes-spi",
  "hypotheses": [
   "h-sindrome-pernas-inquietas"
  ],
  "name": "Corrigir fatores agravantes na síndrome das pernas inquietas",
  "category": "estilo-de-vida",
  "line": 1,
  "summary": "Primeiro passo no tratamento: identificar e corrigir fatores que agravam os sintomas, como álcool, cafeína, alguns fármacos e a apneia obstrutiva não tratada. Inclui estudos do ferro.",
  "when": "Declaração de boa prática da AASM 2025 (consenso de peritos), em adultos e crianças com síndrome das pernas inquietas clinicamente significativa. Li o resumo; não li o texto integral nem recomendações não farmacológicas em crianças.",
  "format": "Individual; pais.",
  "sessions": {
   "typical": null,
   "text": "Componentes, sem ordem fixa; sem sessões. A suplementação de ferro e o sulfato ferroso pertencem ao módulo farmacológico."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Estudos do ferro",
    "description": "Pedir regularmente ferritina e saturação da transferrina, de manhã e sem suplementos de ferro nas 24 h anteriores; a decisão de suplementar fica para o módulo farmacológico."
   },
   {
    "id": "m2",
    "title": "Álcool e cafeína",
    "description": "Corrigir o consumo, que pode agravar os sintomas."
   },
   {
    "id": "m3",
    "title": "Rever fármacos agravantes",
    "description": "Medicação anti-histamínica, serotoninérgica e antidopaminérgica."
   },
   {
    "id": "m4",
    "title": "Tratar apneia obstrutiva não tratada",
    "description": "Fator agravante a procurar e tratar."
   }
  ],
  "source": "Winkelman et al., Treatment of RLS and PLMD: an AASM clinical practice guideline, J Clin Sleep Med 2025;21(1):137-152, https://pubmed.ncbi.nlm.nih.gov/39324694/ (só li o resumo, que inclui as declarações de boa prática)",
  "ages": "adultos e crianças; idade não especificada na fonte"
 },
 {
  "id": "tx-luz-horario-dswpd",
  "hypotheses": [
   "h-atraso-fase-sono"
  ],
  "name": "Luz brilhante matinal e reajuste do horário de sono no atraso de fase",
  "category": "estilo-de-vida",
  "branches": [
   "adol"
  ],
  "line": null,
  "summary": "Protocolo de 3 meses em que se avança a hora de levantar e se faz luz brilhante logo ao acordar; no estudo, a melatonina à noite fazia parte do protocolo. Aplicado em jovens de 16 a 18 anos ou mais com perturbação de fase de sono atrasada.",
  "when": "Perturbação de fase de sono atrasada em jovens; fonte é um estudo qualitativo de entrevistas sobre um protocolo, não uma guideline. Referência a revisões (Meyer 2022, Narala 2024) que não li.",
  "format": "Individual; autoadministrado em casa.",
  "sessions": {
   "typical": null,
   "text": "Sem sessões: protocolo diário durante 3 meses, com formulário diário de adesão."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Dia 1: dormir até acordar espontaneamente",
    "description": "Primeiro dia do tratamento."
   },
   {
    "id": "m2",
    "title": "Avançar a hora de levantar 1 hora por dia",
    "description": "Até chegar à hora de levantar preferida pelo jovem."
   },
   {
    "id": "m3",
    "title": "Manter a hora preferida",
    "description": "Manter a hora de levantar durante o resto do período de tratamento; não foi dada indicação sobre a hora de deitar."
   },
   {
    "id": "m4",
    "title": "Luz brilhante ao acordar",
    "description": "Todos os dias, imediatamente depois de acordar, 30 a 45 minutos com a luz de 10 000 lux, olhos virados para o candeeiro, a não mais de 40 a 50 cm."
   },
   {
    "id": "m5",
    "title": "Reduzir a luz à noite",
    "description": "Os protocolos habituais incluem redução da exposição à luz à noite (a fonte cita-o como prática habitual, não como parte do protocolo do estudo)."
   },
   {
    "id": "m6",
    "title": "Registo diário de adesão",
    "description": "Formulário diário para a luz e a cápsula de melatonina (esta pertence ao módulo farmacológico)."
   }
  ],
  "source": "Wilhelmsen-Langeland et al., How do youth with Delayed Sleep-Wake Phase Disorder experience a chronobiological treatment protocol? An interview study, Front Sleep 2025, https://pmc.ncbi.nlm.nih.gov/articles/PMC12713934/ (texto integral lido via Europe PMC)",
  "ages": "16 a 18 anos ou mais (jovens)"
 },
 {
  "id": "tx-medidas-iniciais-enurese",
  "hypotheses": [
   "h-enurese"
  ],
  "name": "Aconselhamento inicial e sistema de recompensas na enurese",
  "category": "psicoeducacao",
  "line": 1,
  "summary": "Informar sem culpabilizar, corrigir a ingestão de líquidos e os hábitos de ida à casa de banho e usar recompensas por comportamentos acordados, não por noites secas. É o passo anterior ao alarme.",
  "when": "NICE CG111: tratar os problemas de ingestão de líquidos ou de padrões de ida à casa de banho antes de outro tratamento (1.5.6); aconselhar sistema de recompensas isolado como tratamento inicial em crianças pequenas que já têm algumas noites secas (1.7.3).",
  "format": "Criança e pais; consulta.",
  "sessions": {
   "typical": null,
   "text": "Componentes, sem ordem fixa; a guideline não define número de sessões. A CG111 não nomeia entrevista motivacional: o apoio vem da informação e das recompensas."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Sem culpa nem castigo",
    "description": "Explicar à criança e aos pais que a enurese não é culpa da criança e que não se devem usar medidas punitivas."
   },
   {
    "id": "m2",
    "title": "Líquidos durante o dia",
    "description": "Ingestão adequada de líquidos ao longo do dia (a guideline tem tabela por idade), evitando bebidas com cafeína; não restringir a dieta como tratamento."
   },
   {
    "id": "m3",
    "title": "Idas regulares à casa de banho",
    "description": "Aconselhar idas regulares durante o dia e antes de dormir (tipicamente 4 a 7 vezes no total)."
   },
   {
    "id": "m4",
    "title": "Sem fraldas ou cuecas absorventes à noite",
    "description": "Sugerir ensaio sem fraldas ou pull-ups em crianças já continentes de dia, e orientar sobre proteção da cama."
   },
   {
    "id": "m5",
    "title": "Acordar e levantar a criança",
    "description": "Só como medida prática de curto prazo, porque não promove secura a longo prazo; jovens sem resposta ao tratamento podem usar despertador próprio."
   },
   {
    "id": "m6",
    "title": "Sistema de recompensas",
    "description": "Recompensas por comportamentos acordados (beber os líquidos recomendados, urinar antes de dormir, participar no tratamento) e não por noites secas; nunca retirar recompensas já ganhas."
   }
  ],
  "source": "NICE, Bedwetting in under 19s (CG111), publicada em 27/10/2010 (a página do capítulo não mostra data de atualização; a nota de atualização refere uma emenda em agosto de 2015), https://www.nice.org.uk/guidance/cg111/chapter/Recommendations, secções 1.1 a 1.7",
  "ages": "a partir dos 5 anos (NICE CG111, menores de 19)",
  "branches": [
   "esc",
   "adol"
  ]
 },
 {
  "id": "tx-alarme-enurese",
  "hypotheses": [
   "h-enurese"
  ],
  "name": "Alarme da enurese",
  "category": "comportamental",
  "line": 1,
  "summary": "Treina a criança a reconhecer a necessidade de urinar, a acordar para ir à casa de banho ou a aguentar, e com o tempo a parar de molhar a cama. Exige empenho continuado da criança e dos pais.",
  "when": "NICE CG111 (1.8.1): primeira linha em crianças e jovens cuja enurese não respondeu a conselhos sobre líquidos, idas à casa de banho e recompensas, exceto se for indesejado ou inadequado (enurese muito pouco frequente, menos de 1 a 2 camas molhadas por semana; pais com dificuldades emocionais ou com raiva, negatividade ou culpa em relação à criança). Considerar abaixo dos 7 anos consoante capacidade, maturidade e motivação.",
  "format": "Criança e pais, em casa; com apoio acordado do serviço.",
  "sessions": {
   "typical": null,
   "text": "Sem sessões de terapia: uso do alarme em casa com apoio. Avaliar a resposta às 4 semanas; continuar até 2 semanas seguidas de noites secas; reavaliar aos 3 meses."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Preparar a família",
    "description": "Explicar a condição e as vantagens e desvantagens do tratamento; explorar a capacidade da família para usar o alarme; combinar papéis e responsabilidades de cada um."
   },
   {
    "id": "m2",
    "title": "Ensinar a usar o alarme",
    "description": "Como programar e usar o alarme, como responder quando toca, manutenção, resolver problemas (e quem contactar) e como o devolver; considerar alarme vibratório se houver défice auditivo."
   },
   {
    "id": "m3",
    "title": "Recompensas por comportamento desejado",
    "description": "Acordar ao alarme, ir à casa de banho, voltar para a cama e repor o alarme."
   },
   {
    "id": "m4",
    "title": "Primeiras semanas: sinais precoces",
    "description": "Manchas molhadas mais pequenas, acordar ao alarme, alarme a tocar mais tarde e menos vezes por noite e menos noites molhadas; as noites secas são um sinal tardio e podem demorar semanas."
   },
   {
    "id": "m5",
    "title": "Revisão às 4 semanas",
    "description": "Continuar se houver sinais precoces de resposta; parar só se não houver nenhum."
   },
   {
    "id": "m6",
    "title": "Consolidação",
    "description": "Continuar nas crianças com resposta até conseguirem pelo menos 2 semanas seguidas de noites secas."
   },
   {
    "id": "m7",
    "title": "Revisão aos 3 meses",
    "description": "Se ainda não houver secura completa, só continuar se continuar a melhorar e se criança e pais estiverem motivados."
   },
   {
    "id": "m8",
    "title": "Recaída e falta de resposta",
    "description": "Se a enurese voltar, os pais podem reiniciar o alarme sem consultar; sem resposta ao alarme, a guideline passa para tratamento combinado ou farmacológico e, se persistir, para referenciação."
   }
  ],
  "source": "NICE CG111, https://www.nice.org.uk/guidance/cg111/chapter/Recommendations, secções 1.4, 1.8, 1.9, 1.11 e 1.12 (publicada em 27/10/2010)",
  "ages": "a partir dos 5 anos; em geral a partir dos 7 (abaixo dos 7 consoante maturidade)",
  "branches": [
   "esc",
   "adol"
  ]
 },
 {
  "id": "tx-medidas-comportamentais-encoprese",
  "hypotheses": [
   "h-encoprese"
  ],
  "name": "Intervenções comportamentais e treino de toalete na encoprese associada a obstipação",
  "category": "comportamental",
  "line": 1,
  "summary": "Com a desimpactação e a manutenção com laxantes (módulo farmacológico), a NICE associa intervenções comportamentais negociadas e sem punição, com idas programadas à casa de banho, diário intestinal e recompensas. Inclui dieta, líquidos e atividade física.",
  "when": "NICE CG99 (1.5.2): tratar a obstipação idiopática com laxantes e a combinação de intervenções comportamentais e modificação alimentar; a dieta isolada não é primeira linha (1.5.1). A guideline é sobre obstipação e fala de escape fecal (soiling), não de encoprese não retentiva. Não encaminhar rotineiramente para psicologia ou CAMHS (1.6.2) e não usar biofeedback (1.6.1).",
  "format": "Criança e pais; seguimento telefónico ou presencial.",
  "sessions": {
   "typical": null,
   "text": "Componentes, sem ordem fixa; seguimento adaptado, de contacto diário a cada poucas semanas; referenciar a um especialista se não houver resposta ao tratamento inicial em 3 meses."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Avaliar impactação fecal",
    "description": "Procurar escape fecal e massa fecal; se existir, a desimpactação é farmacológica e fica fora deste módulo; rever em 1 semana."
   },
   {
    "id": "m2",
    "title": "Informação",
    "description": "Como funcionam os intestinos, sinais de alarme, o que esperar dos laxantes, como fazer cocó, origens da obstipação e sinais de risco de recaída, oralmente e por escrito."
   },
   {
    "id": "m3",
    "title": "Idas programadas à casa de banho",
    "description": "Apoio para estabelecer um hábito intestinal regular, adaptado à fase de desenvolvimento."
   },
   {
    "id": "m4",
    "title": "Diário intestinal",
    "description": "Manter e discutir um diário intestinal; avaliar a resposta pela frequência, quantidade e consistência das fezes (escala de Bristol)."
   },
   {
    "id": "m5",
    "title": "Encorajamento e recompensas",
    "description": "Sistemas de encorajamento e recompensa, negociados e sem punição."
   },
   {
    "id": "m6",
    "title": "Dieta, líquidos e atividade física",
    "description": "Dieta equilibrada, fibra adequada (não recomendar farelo não processado), líquidos suficientes e atividade física diária adequada ao desenvolvimento."
   },
   {
    "id": "m7",
    "title": "Seguimento e escola",
    "description": "Reavaliar frequentemente na manutenção para evitar reimpactação, de preferência pela mesma pessoa ou equipa; ponto de contacto e ligação ao enfermeiro escolar."
   }
  ],
  "source": "NICE, Constipation in children and young people: diagnosis and management (CG99), publicada em 26/05/2010, atualizada em 13/07/2017 (datas do cabeçalho), https://www.nice.org.uk/guidance/cg99/chapter/Recommendations, secções 1.4 a 1.8",
  "ages": "crianças e jovens (NICE CG99); idade não especificada na fonte",
  "branches": [
   "esc",
   "adol"
  ]
 },
 {
  "id": "tx-intervencao-familiar-psicose",
  "hypotheses": [
   "h-psicose-inicio-precoce"
  ],
  "name": "Intervenção familiar na psicose de início precoce",
  "category": "familiar",
  "line": 1,
  "summary": "Intervenção com função de apoio, educação ou tratamento, que inclui resolução de problemas negociada ou gestão de crises. Visa sobretudo prevenir e reduzir recaídas e promover a recuperação.",
  "when": "NICE CG155 (1.4.4, 1.8.2): oferecer a todas as famílias de crianças e jovens com psicose ou esquizofrenia, na fase aguda ou mais tarde; na psicose de primeiro episódio, em conjunto com TCC individual (1.3.12). Considerar sobretudo se houve recaída recente ou risco de recaída, ou sintomas persistentes (1.8.3). Também considerar com ou sem TCC em sintomas transitórios ou atenuados (1.2.5).",
  "format": "Família (unifamiliar ou grupo multifamiliar, conforme a preferência), com inclusão do jovem se for prático; 3 meses a 1 ano.",
  "sessions": {
   "typical": 10,
   "text": "NICE CG155 1.3.30: pelo menos 10 sessões planeadas, ao longo de 3 meses a 1 ano. Componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Quem participa",
    "description": "Incluir o jovem com psicose, se for prático, e escolher entre intervenção unifamiliar ou grupo multifamiliar conforme a preferência da família."
   },
   {
    "id": "m2",
    "title": "Relação pais-jovem",
    "description": "Ter em conta a relação entre o progenitor ou cuidador e o jovem."
   },
   {
    "id": "m3",
    "title": "Função de apoio, educação ou tratamento",
    "description": "Cada sessão tem uma função específica de apoio, educacional ou de tratamento."
   },
   {
    "id": "m4",
    "title": "Resolução de problemas negociada",
    "description": "Trabalho negociado de resolução de problemas."
   },
   {
    "id": "m5",
    "title": "Gestão de crises",
    "description": "Trabalho de gestão de crises."
   },
   {
    "id": "m6",
    "title": "Adaptar ao desenvolvimento",
    "description": "Considerar o nível de desenvolvimento, a maturidade emocional e a capacidade cognitiva do jovem, incluindo dificuldades de aprendizagem, visão, audição ou atraso de linguagem."
   }
  ],
  "source": "NICE, Psychosis and schizophrenia in children and young people (CG155), publicada em 23/01/2013, atualizada em 26/10/2016 (datas do cabeçalho), https://www.nice.org.uk/guidance/cg155/chapter/Recommendations, secções 1.2.5, 1.3.12, 1.3.29, 1.3.30, 1.4.4, 1.8.2 e 1.8.3",
  "ages": "crianças e jovens (NICE CG155)",
  "branches": [
   "esc",
   "adol"
  ]
 },
 {
  "id": "tx-tcc-psicose",
  "hypotheses": [
   "h-psicose-inicio-precoce"
  ],
  "name": "TCC individual na psicose de início precoce",
  "category": "psicoterapia",
  "line": 1,
  "summary": "TCC individual manualizada para estabelecer ligações entre pensamentos, sentimentos ou ações e os sintomas ou o funcionamento, e reavaliar perceções, crenças ou raciocínio relacionados com os sintomas-alvo. Visa sobretudo reduzir os sintomas.",
  "when": "NICE CG155 (1.4.5, 1.8.4): oferecer a todos os jovens com psicose ou esquizofrenia, na fase aguda ou mais tarde, e na recuperação com sintomas positivos e negativos persistentes ou em remissão; no primeiro episódio, com a intervenção familiar e antipsicótico (1.3.12). Considerar em sintomas transitórios ou atenuados (1.2.5).",
  "format": "Individual.",
  "sessions": {
   "typical": 16,
   "text": "NICE CG155 1.3.31: pelo menos 16 sessões planeadas (pode ser necessário mais); seguir um manual. Componentes, sem ordem fixa: a guideline pede pelo menos um dos componentes listados."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Ligar pensamentos, sentimentos e ações aos sintomas",
    "description": "Estabelecer ligações entre pensamentos, sentimentos ou ações e os sintomas atuais ou passados, e/ou o funcionamento."
   },
   {
    "id": "m2",
    "title": "Reavaliar perceções, crenças e raciocínio",
    "description": "Reavaliação relacionada com os sintomas-alvo."
   },
   {
    "id": "m3",
    "title": "Normalizar",
    "description": "Normalização, levando à compreensão e aceitabilidade da experiência."
   },
   {
    "id": "m4",
    "title": "Automonitorização",
    "description": "O jovem monitoriza os próprios pensamentos, sentimentos ou comportamentos em relação aos sintomas ou à sua recorrência."
   },
   {
    "id": "m5",
    "title": "Formas alternativas de lidar com o sintoma-alvo",
    "description": "Promover estratégias de coping alternativas."
   },
   {
    "id": "m6",
    "title": "Reduzir o sofrimento e melhorar o funcionamento",
    "description": "Dois componentes possíveis, a escolher consoante a formulação."
   }
  ],
  "source": "NICE CG155, https://www.nice.org.uk/guidance/cg155/chapter/Recommendations, secções 1.2.5, 1.3.12, 1.3.31, 1.4.5 e 1.8.4",
  "ages": "crianças e jovens (NICE CG155)",
  "branches": [
   "esc",
   "adol"
  ]
 },
 {
  "id": "tx-terapias-artes-psicose",
  "hypotheses": [
   "h-psicose-inicio-precoce"
  ],
  "name": "Terapias de artes na psicose de início precoce",
  "category": "psicoterapia",
  "line": 2,
  "summary": "Terapias de dança-movimento, música, arte ou dramaterapia, em grupo, que combinam técnicas psicoterapêuticas com atividade que promove a expressão criativa. Visam sobretudo aliviar os sintomas negativos.",
  "when": "NICE CG155 (1.4.6, 1.8.5): considerar em todos os jovens com psicose ou esquizofrenia, na fase aguda ou mais tarde e na recuperação, sobretudo com sintomas negativos. Devem ser fornecidas por terapeutas de artes registados no HCPC (Reino Unido) com experiência.",
  "format": "Grupo, a menos que haja problemas de aceitabilidade, acesso ou adesão.",
  "sessions": {
   "typical": null,
   "text": "A guideline não indica número de sessões. Componentes: os 3 objetivos descritos, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Experimentar-se de forma diferente",
    "description": "Permitir ao jovem experimentar-se de forma diferente e desenvolver novas formas de se relacionar com os outros."
   },
   {
    "id": "m2",
    "title": "Expressão e organização da experiência",
    "description": "Ajudar a exprimir-se e a organizar a experiência numa forma estética satisfatória."
   },
   {
    "id": "m3",
    "title": "Aceitar e compreender sentimentos",
    "description": "Ajudar a aceitar e compreender sentimentos que surjam durante o processo criativo, ao ritmo do jovem."
   }
  ],
  "source": "NICE CG155, https://www.nice.org.uk/guidance/cg155/chapter/Recommendations, secções 1.4.6, 1.4.7 e 1.8.5",
  "ages": "crianças e jovens (NICE CG155)",
  "branches": [
   "esc",
   "adol"
  ]
 },
 {
  "id": "tx-entrevista-motivacional-substancias",
  "hypotheses": [
   "h-perturbacao-uso-substancias"
  ],
  "name": "Entrevista motivacional (EM) e terapia de melhoria motivacional (MET) no consumo de substâncias",
  "category": "psicoterapia",
  "line": null,
  "summary": "Estilo de aconselhamento não confrontativo que trabalha a ambivalência sobre deixar de consumir e reforça a motivação para a mudança. A AACAP 2026 sugere EM breve (1 a 2 sessões) no álcool e EM não breve (mais de 2 sessões) no álcool ou perturbação por álcool, com ou sem outras drogas.",
  "when": "AACAP 2026 (sugestão 2C): EM breve (1 a 2 sessões) no consumo de álcool; EM não breve, terapia familiar ou TCC no consumo ou perturbação por álcool com ou sem outras drogas; EM mais TCC nas perturbações por drogas ilícitas. Para as outras perturbações, evidência insuficiente.",
  "format": "Individual.",
  "sessions": {
   "typical": null,
   "text": "AACAP 2026 (resumo): breve é 1 a 2 sessões e não breve é mais de 2 sessões. Em adultos com cannabis, uma MET típica tem 1 a 4 sessões individuais de 45 a 90 minutos (Budney 2007). Componentes, sem ordem fixa: a fonte lista técnicas, não sessões."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Empatia estratégica e escuta reflexiva",
    "description": "Expressão estratégica de empatia e reflexão do que o jovem diz."
   },
   {
    "id": "m2",
    "title": "Resumos e afirmações",
    "description": "Resumir e afirmar os esforços e os pontos fortes do jovem."
   },
   {
    "id": "m3",
    "title": "Reforçar a autoeficácia",
    "description": "Reforçar a confiança do jovem na sua capacidade de mudar."
   },
   {
    "id": "m4",
    "title": "Explorar prós e contras do consumo",
    "description": "Explorar a ambivalência."
   },
   {
    "id": "m5",
    "title": "Lidar com a resistência",
    "description": "Rolar com a resistência em vez de confrontar."
   },
   {
    "id": "m6",
    "title": "Metas e plano",
    "description": "Definir metas e planos para as alcançar, com compromisso e passagem à ação."
   }
  ],
  "source": "AACAP, Clinical practice guideline: assessment and treatment of adolescents and young adults with substance use disorders and problematic substance use (excluding tobacco), J Am Acad Child Adolesc Psychiatry 2026, doi 10.1016/j.jaac.2025.08.006, https://pubmed.ncbi.nlm.nih.gov/40819708/ (só li o resumo; o texto integral deu 403); Budney, Roffman, Stephens e Walker, Marijuana dependence and its treatment, Addict Sci Clin Pract 2007, https://pmc.ncbi.nlm.nih.gov/articles/PMC2797098/ (texto integral lido via Europe PMC; revisão sobretudo em adultos), secção de MET",
  "ages": "adolescentes e jovens adultos (AACAP)",
  "branches": [
   "adol"
  ]
 },
 {
  "id": "tx-met-tcc-cannabis-jovens",
  "hypotheses": [
   "h-perturbacao-uso-substancias"
  ],
  "name": "MET combinada com TCC (MET/TCC) em jovens com consumo de cannabis",
  "category": "psicoterapia",
  "line": null,
  "summary": "Combinação de sessões de motivação (MET) com sessões de TCC (competências para parar e gerir o consumo). A versão curta testada em jovens, MET/TCC5, tem 2 sessões individuais e 3 de grupo.",
  "when": "AACAP 2026 (sugestão 2C): EM mais TCC nas perturbações por drogas ilícitas em jovens. Os ensaios de adolescentes testaram MET/TCC5, MET/TCC12 e outros modelos (revisão de 2007).",
  "format": "MET individual e TCC em grupo ou individual (em adultos, sessões de TCC de 45 a 60 minutos).",
  "sessions": {
   "typical": 5,
   "text": "Formato testado em adolescentes (Dennis 2004, citado em Budney 2007): MET/TCC5 com 2 sessões individuais e 3 de grupo; MET/TCC12 com 2 individuais e 10 de grupo. A TCC testada em adultos variou de 6 a 14 sessões. A ordem dos temas de TCC é a listada na fonte e não confirmei que seja a ordem fixa de um manual."
  },
  "modules": [
   {
    "id": "m1",
    "title": "MET: motivação para mudar",
    "description": "Sessões individuais iniciais para trabalhar a ambivalência e reforçar a motivação."
   },
   {
    "id": "m2",
    "title": "Análise funcional do consumo e da vontade de consumir",
    "description": "Analisar os episódios recentes de consumo e de craving."
   },
   {
    "id": "m3",
    "title": "Plano de autogestão",
    "description": "Planear como evitar ou lidar com os gatilhos do consumo."
   },
   {
    "id": "m4",
    "title": "Competências de recusa",
    "description": "Competências para recusar drogas."
   },
   {
    "id": "m5",
    "title": "Resolução de problemas",
    "description": "Competências de resolução de problemas."
   },
   {
    "id": "m6",
    "title": "Gestão do estilo de vida",
    "description": "Gestão do estilo de vida."
   }
  ],
  "source": "AACAP, Clinical practice guideline: assessment and treatment of adolescents and young adults with substance use disorders and problematic substance use (excluding tobacco), J Am Acad Child Adolesc Psychiatry 2026, doi 10.1016/j.jaac.2025.08.006, https://pubmed.ncbi.nlm.nih.gov/40819708/ (só li o resumo; o texto integral deu 403); Budney, Roffman, Stephens e Walker, Marijuana dependence and its treatment, Addict Sci Clin Pract 2007, https://pmc.ncbi.nlm.nih.gov/articles/PMC2797098/ (texto integral lido via Europe PMC; revisão sobretudo em adultos), secções de MET, CBT e tratamento de adolescentes",
  "ages": "adolescentes",
  "branches": [
   "adol"
  ]
 },
 {
  "id": "tx-terapia-familiar-substancias",
  "hypotheses": [
   "h-perturbacao-uso-substancias"
  ],
  "name": "Terapia familiar no consumo de substâncias",
  "category": "familiar",
  "line": null,
  "summary": "Intervenções estruturadas, baseadas em competências, para os familiares do jovem. A AACAP 2026 sugere terapia familiar no consumo ou perturbação por álcool com ou sem outras drogas.",
  "when": "AACAP 2026 (sugestão 2C, só resumo). Modelos testados em jovens, citados em Budney 2007: terapia familiar funcional, terapia familiar multidimensional, terapia multissistémica, intervenção de rede de apoio familiar e terapia familiar estratégica breve. Não li a descrição dos manuais, por isso não indico módulos.",
  "format": "Família.",
  "sessions": {
   "typical": null,
   "text": "Não verificado: não li número de sessões de nenhum modelo."
  },
  "modules": [],
  "source": "AACAP, Clinical practice guideline: assessment and treatment of adolescents and young adults with substance use disorders and problematic substance use (excluding tobacco), J Am Acad Child Adolesc Psychiatry 2026, doi 10.1016/j.jaac.2025.08.006, https://pubmed.ncbi.nlm.nih.gov/40819708/ (só li o resumo; o texto integral deu 403); Budney, Roffman, Stephens e Walker, Marijuana dependence and its treatment, Addict Sci Clin Pract 2007, https://pmc.ncbi.nlm.nih.gov/articles/PMC2797098/ (texto integral lido via Europe PMC; revisão sobretudo em adultos), secção de tratamento de adolescentes",
  "ages": "adolescentes e jovens adultos (AACAP)",
  "branches": [
   "adol"
  ]
 },
 {
  "id": "tx-apoio-comportamental-tabaco",
  "hypotheses": [
   "h-perturbacao-uso-substancias"
  ],
  "name": "Apoio comportamental para deixar de fumar (tabaco)",
  "category": "psicoterapia",
  "line": 1,
  "summary": "Encontros marcados com um conselheiro treinado em cessação tabágica, individuais ou em grupo, com informação, metas, automonitorização e como lidar com as barreiras. A NICE oferece sempre apoio comportamental, com terapêutica de substituição de nicotina em jovens a partir dos 12 anos.",
  "when": "NICE NG209 (1.12.3 e 1.12.6): considerar terapêutica de substituição de nicotina em jovens de 12 anos ou mais dependentes do tabaco, sempre com apoio comportamental; não oferecer citisinicline, vareniclina nem bupropiom a menores de 18 anos (1.12.4). Só vi a definição de apoio comportamental e as recomendações gerais, sem número de sessões para jovens.",
  "format": "Individual ou grupo, presencial ou virtual.",
  "sessions": {
   "typical": null,
   "text": "Componentes, sem ordem fixa; a NG209 não dá número de sessões para jovens (o exemplo de sessões semanais por, pelo menos, 4 semanas é para adultos em serviços de internamento)."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Informação",
    "description": "Informação sobre os tipos de apoio comportamental disponíveis."
   },
   {
    "id": "m2",
    "title": "Definir metas",
    "description": "Aconselhamento prático sobre estabelecer objetivos."
   },
   {
    "id": "m3",
    "title": "Automonitorização",
    "description": "Monitorizar o consumo."
   },
   {
    "id": "m4",
    "title": "Barreiras para parar",
    "description": "Lidar com os obstáculos a deixar de fumar."
   },
   {
    "id": "m5",
    "title": "Encorajamento",
    "description": "Encorajar a pessoa durante o processo."
   },
   {
    "id": "m6",
    "title": "Antecipar desafios",
    "description": "Prever e lidar com os desafios de deixar de fumar."
   }
  ],
  "source": "NICE, Tobacco: preventing uptake, promoting quitting and treating dependence (NG209), publicada em 30/11/2021, atualizada em 04/02/2025 (datas do cabeçalho), https://www.nice.org.uk/guidance/ng209/chapter/Treating-tobacco-dependence, secção 1.12; definição de apoio comportamental em https://www.nice.org.uk/guidance/ng209/chapter/Terms-used-in-this-guideline",
  "ages": "terapêutica de substituição de nicotina a partir dos 12 anos; menores de 18 sem fármacos",
  "branches": [
   "adol"
  ]
 },
 {
  "id": "tx-treino-competencias-prevencao-drogas",
  "hypotheses": [
   "h-perturbacao-uso-substancias"
  ],
  "name": "Treino de competências para jovens vulneráveis ao consumo de drogas (prevenção seletiva)",
  "category": "psicoeducacao",
  "line": null,
  "summary": "Treino de competências pessoais e sociais para crianças e jovens avaliados como vulneráveis, com treino em paralelo dos cuidadores ou famílias. É prevenção, não tratamento de perturbação já estabelecida.",
  "when": "NICE NG64 (1.3.1): considerar em crianças e jovens avaliados como vulneráveis ao consumo de drogas. A NG64 não contém entrevista motivacional, terapia familiar nem TCC para jovens com perturbação instalada.",
  "format": "Jovens e cuidadores ou famílias, em conjunto ou separados, individual ou em grupo.",
  "sessions": {
   "typical": null,
   "text": "NICE NG64 1.3.5: oferecer no mínimo 2 sessões; o número de sessões, a duração e o local dependem do jovem."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Escutar",
    "description": "Competência para os jovens."
   },
   {
    "id": "m2",
    "title": "Resolução de conflitos",
    "description": "Competência para os jovens."
   },
   {
    "id": "m3",
    "title": "Recusa",
    "description": "Competência para os jovens."
   },
   {
    "id": "m4",
    "title": "Identificar e gerir o stress",
    "description": "Competência para os jovens."
   },
   {
    "id": "m5",
    "title": "Tomar decisões e lidar com a crítica",
    "description": "Competências para os jovens."
   },
   {
    "id": "m6",
    "title": "Lidar com a exclusão e escolhas saudáveis",
    "description": "Em jovens institucionalizados ou que saíram de acolhimento, a NG64 dá ênfase particular a lidar com sentimentos de exclusão."
   },
   {
    "id": "m7",
    "title": "Competências dos cuidadores e famílias",
    "description": "Comunicação, relações saudáveis, resolução de conflitos e resolução de problemas."
   }
  ],
  "source": "NICE, Drug misuse prevention: targeted interventions (NG64), publicada em 22/02/2017, https://www.nice.org.uk/guidance/ng64/chapter/Recommendations, secção 1.3",
  "ages": "crianças e jovens vulneráveis (NICE NG64, sem idades)",
  "branches": [
   "esc",
   "adol"
  ]
 },
 {
  "id": "tx-tcc-perturbacao-jogo",
  "hypotheses": [
   "h-perturbacao-jogo-videojogos"
  ],
  "name": "TCC e variantes na perturbação do jogo de videojogos",
  "category": "psicoterapia",
  "branches": [
   "adol"
  ],
  "line": null,
  "summary": "A TCC é a abordagem mais estudada e apoiada para reduzir os sintomas a curto prazo, muitas vezes com reestruturação cognitiva e prevenção de recaída. As variantes estudadas incluem a abordagem motivacional, a regulação emocional e comportamental e a terapia de aceitação.",
  "when": "Perturbação do jogo em crianças e adolescentes; revisão sistemática de 2025 sem guideline. A TCC tradicional deu resultados mistos; dá-se TCC com medicação nos casos com comorbilidade (por exemplo PHDA e depressão).",
  "format": "Individual ou grupo; pais envolvidos em alguns estudos.",
  "sessions": {
   "typical": null,
   "text": "Componentes, sem ordem fixa; os programas estudados duraram 4, 5, 6 ou 8 semanas, ou 12 sessões (estudo pré-pós), sem manual comum."
  },
  "modules": [
   {
    "id": "m1",
    "title": "TCC padrão",
    "description": "Reestruturação cognitiva e prevenção de recaída; um ensaio de 6 semanas não mostrou diferença face a aconselhamento básico, e um estudo pré-pós com 12 sessões (jovens, pais e professores) reduziu a gravidade e o tempo de jogo."
   },
   {
    "id": "m2",
    "title": "TCC com abordagem motivacional",
    "description": "Usar os pontos fortes para definir metas e planos (grupo de 8 semanas com melhoria da gravidade e do tempo de jogo face à lista de espera)."
   },
   {
    "id": "m3",
    "title": "TCC de regulação emocional e comportamental",
    "description": "Reduzir a intolerância ao tédio e promover regulação emocional (programa de 4 semanas com redução da gravidade, sem mudança no tempo de jogo)."
   },
   {
    "id": "m4",
    "title": "Reestruturação cognitiva e aceitação",
    "description": "Programas de 5 e 8 semanas para reestruturar pensamentos negativos, melhorar a autoestima, as relações e as estratégias de coping."
   },
   {
    "id": "m5",
    "title": "Terapia de aceitação e compromisso",
    "description": "8 semanas num estudo pré-pós em jovens com PHDA: aceitar os impulsos em vez de os suprimir, atenção ao presente e compromissos baseados em valores."
   }
  ],
  "source": "Park et al., Treatment of gaming disorder in children and adolescents: a systematic review, J Korean Acad Child Adolesc Psychiatry 2025, https://pmc.ncbi.nlm.nih.gov/articles/PMC12223676/ (texto integral lido via Europe PMC; 30 estudos, metade ensaios aleatorizados)",
  "ages": "adolescentes (estudos dos 12 aos 19 anos; nenhum com menores de 12)"
 },
 {
  "id": "tx-formacao-parental-perturbacao-jogo",
  "hypotheses": [
   "h-perturbacao-jogo-videojogos"
  ],
  "name": "Formação de pais na perturbação do jogo",
  "category": "parental",
  "line": null,
  "summary": "Programa de 8 semanas, com psicoeducação sobre uso de media, comunicação, limites e alternativas de lazer. Os resultados foram inconsistentes: o piloto reduziu a gravidade, mas o ensaio aleatorizado posterior não mostrou diferença face à lista de espera.",
  "when": "Perturbação do jogo em crianças e adolescentes, com evidência inconsistente (revisão 2025). Considerar como complemento, não como tratamento isolado.",
  "format": "Pais; 8 semanas.",
  "sessions": {
   "typical": null,
   "text": "Três estudos de 8 semanas de formação parental; a revisão não indica o número de sessões. Componentes, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Psicoeducação sobre uso de media e dependência",
    "description": "Para os pais."
   },
   {
    "id": "m2",
    "title": "Comunicação eficaz",
    "description": "Estratégias de comunicação."
   },
   {
    "id": "m3",
    "title": "Limites pessoais e do jogo",
    "description": "Estabelecer limites pessoais e sobre o jogo."
   },
   {
    "id": "m4",
    "title": "Alternativas de lazer",
    "description": "Orientar o jovem para atividades recreativas alternativas."
   },
   {
    "id": "m5",
    "title": "Situações de risco",
    "description": "Maior consciência das situações de risco que podem levar ao jogo problemático."
   }
  ],
  "source": "Park et al., Treatment of gaming disorder in children and adolescents: a systematic review, J Korean Acad Child Adolesc Psychiatry 2025, https://pmc.ncbi.nlm.nih.gov/articles/PMC12223676/ (texto integral lido via Europe PMC; 30 estudos, metade ensaios aleatorizados)",
  "ages": "pais de adolescentes (estudos com idade média 14 a 16 anos)",
  "branches": [
   "adol"
  ]
 },
 {
  "id": "tx-react-fnd",
  "hypotheses": [
   "h-perturbacao-neurologica-funcional"
  ],
  "name": "ReACT (Retraining and Control Therapy) nas crises funcionais",
  "category": "psicoterapia",
  "line": null,
  "summary": "TCC curta, de ambulatório, com princípios de reversão de hábito para retreinar os sintomas, aumentar o sentido de controlo e desafiar expectativas catastróficas. Até à data da revisão (2022), o único ensaio aleatorizado de tratamento pediátrico de FND, com 29 participantes.",
  "when": "Crises funcionais em crianças e adolescentes (ensaio piloto de 2020, seguimento de 7 e 60 dias). Não generalizado a sintomas motores sem evidência própria.",
  "format": "Individual, com plano para a família; ambulatório.",
  "sessions": {
   "typical": 8,
   "text": "Ensaio de Fobian 2020: 8 sessões de ReACT ou terapia de suporte; os 17 doentes com ReACT tiveram em média 4,6 sessões. Os módulos são os 4 componentes descritos, sem ordem fixa."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Psicoeducação",
    "description": "Baseada no modelo integrado de resumo etiológico."
   },
   {
    "id": "m2",
    "title": "Plano individual de retreino",
    "description": "Aumentar o sentido de controlo com comportamentos incompatíveis com as crises e desafiar as expectativas catastróficas sobre os sintomas."
   },
   {
    "id": "m3",
    "title": "Plano da família",
    "description": "Como reagir aos episódios: vigiar a segurança e, no resto, atender o mínimo e não interferir no plano de retreino."
   },
   {
    "id": "m4",
    "title": "Regresso à escola e atividades sociais",
    "description": "Plano para voltar à escola e às atividades sociais."
   }
  ],
  "source": "Kozlowska, Vassilopoulos e Fobian, Treatment approaches for functional neurological disorders in children, Curr Treat Options Neurol 2022, https://pmc.ncbi.nlm.nih.gov/articles/PMC8958484/ (texto integral lido via Europe PMC), secção de ReACT e Tabela 1",
  "ages": "crianças; idade não especificada na fonte",
  "branches": [
   "esc",
   "adol"
  ]
 },
 {
  "id": "tx-reabilitacao-multidisciplinar-fnd",
  "hypotheses": [
   "h-perturbacao-neurologica-funcional"
  ],
  "name": "Reabilitação multidisciplinar biopsicossocial na perturbação neurológica funcional",
  "category": "outra",
  "line": null,
  "summary": "Programa com fisioterapia, terapia ocupacional, psicoterapia da criança, terapia familiar e escola, para devolver a função. Nas coortes, 63% a 95% das crianças tiveram resolução completa dos sintomas.",
  "when": "FND moderada a grave ou que não responde a medidas mais simples; coortes de 1 a 3 semanas de internamento. A revisão defende um modelo de cuidados escalonados. Evidência de coortes, não de ensaios aleatorizados.",
  "format": "Equipa multidisciplinar, criança e família; internamento de 1 a 3 semanas ou ambulatório, consoante o centro.",
  "sessions": {
   "typical": null,
   "text": "Componentes, sem ordem fixa; internamento de 1 a 3 semanas nas coortes de Kozlowska e média de 10,5 e 8,4 dias nas de Butz e Bolger, sem número de sessões."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Avaliação biopsicossocial",
    "description": "Avaliação abrangente com a criança e a família, incluindo avaliação neurológica."
   },
   {
    "id": "m2",
    "title": "Formulação construída em conjunto",
    "description": "Co-construir com a criança e a família um resumo das dimensões física, psicológica e social."
   },
   {
    "id": "m3",
    "title": "Psicoeducação da família",
    "description": "Sobre o diagnóstico e os fatores predisponentes, precipitantes e perpetuantes; desviar o foco de atenção dos sintomas."
   },
   {
    "id": "m4",
    "title": "Fisioterapia e terapia ocupacional",
    "description": "Restaurar função e, em alguns programas, construir resiliência física, regulação autonómica e resistência ao stress."
   },
   {
    "id": "m5",
    "title": "Psicoterapia da criança",
    "description": "Abordagens de baixo para cima (regulação neurofisiológica), TCC e, se necessário, intervenções específicas para trauma."
   },
   {
    "id": "m6",
    "title": "Intervenção familiar",
    "description": "Reduzir as acomodações da família à doença, usar motivadores para reforçar a função e minimizar o papel de doente; terapia familiar formal se houver conflito."
   },
   {
    "id": "m7",
    "title": "Escola",
    "description": "Escola hospitalar e reintegração na escola de origem após a alta."
   },
   {
    "id": "m8",
    "title": "Plano de alta",
    "description": "Plano com a família para continuar o apoio em escalões descendentes depois da alta."
   }
  ],
  "source": "Kozlowska, Vassilopoulos e Fobian, Treatment approaches for functional neurological disorders in children, Curr Treat Options Neurol 2022, https://pmc.ncbi.nlm.nih.gov/articles/PMC8958484/ (texto integral lido via Europe PMC), secção de reabilitação multidisciplinar, caixas 1 e 2 e Tabela 1",
  "ages": "crianças; idade não especificada na fonte",
  "branches": [
   "esc",
   "adol"
  ]
 },
 {
  "id": "tx-cuidados-escalonados-fnd",
  "hypotheses": [
   "h-perturbacao-neurologica-funcional"
  ],
  "name": "Cuidados escalonados em crises funcionais (educação, TCC, ambulatório multidisciplinar, internamento)",
  "category": "psicoterapia",
  "line": null,
  "summary": "Modelo em que todos recebem educação sobre o diagnóstico e as recomendações, e a intensidade sobe se não houver resposta: TCC e biofeedback, depois intervenção multidisciplinar de ambulatório e, por fim, internamento. O diagnóstico precoce associa-se a melhores resultados.",
  "when": "Crianças com crises funcionais; duas coortes retrospetivas, com remissão completa em 59% a 63% e parcial em 21% a 28%; sem ensaio aleatorizado.",
  "format": "Equipa neurologia e psicologia; individual e família.",
  "sessions": {
   "typical": null,
   "text": "Duração do tratamento entre 1 e 12 meses (coorte de 29) e 1 a 24 meses (coorte de 43); não indicam número de sessões. Os módulos são os 4 níveis da segunda coorte."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Nível 1: educação",
    "description": "Educação sobre o diagnóstico e recomendações de gestão, em todos os doentes."
   },
   {
    "id": "m2",
    "title": "Nível 2: TCC e biofeedback",
    "description": "TCC padronizada e biofeedback (por exemplo respiração lenta), com TCC focada no trauma quando necessário."
   },
   {
    "id": "m3",
    "title": "Nível 3: intervenção multidisciplinar de ambulatório",
    "description": "Mais intensiva, para quem não responde ao nível 2."
   },
   {
    "id": "m4",
    "title": "Nível 4: internamento multidisciplinar",
    "description": "Para os casos mais graves."
   }
  ],
  "source": "Kozlowska, Vassilopoulos e Fobian, Treatment approaches for functional neurological disorders in children, Curr Treat Options Neurol 2022, https://pmc.ncbi.nlm.nih.gov/articles/PMC8958484/ (texto integral lido via Europe PMC), secção de TCC em cuidados escalonados e Tabela 1 (coortes de Sawchuk)",
  "ages": "crianças; idade não especificada na fonte",
  "branches": [
   "esc",
   "adol"
  ]
 },
 {
  "id": "tx-abordagem-interdisciplinar-sofrimento-corporal",
  "hypotheses": [
   "h-perturbacao-sofrimento-corporal"
  ],
  "name": "Abordagem interdisciplinar com TCC no sofrimento corporal (sintomas somáticos e perturbações relacionadas)",
  "category": "psicoterapia",
  "line": null,
  "summary": "Avaliação física e mental em simultâneo, reunião interdisciplinar, reunião de informação à família e intervenções breves, seguidas de TCC em ambulatório. A TCC é a intervenção com mais evidência.",
  "when": "Sintomas somáticos e perturbações relacionadas em crianças e adolescentes, em doentes internados e em seguimento (clinical progress note de 2022). Nenhum fármaco, suplemento ou dieta aprovados.",
  "format": "Equipa interdisciplinar; criança e família; TCC em ambulatório.",
  "sessions": {
   "typical": null,
   "text": "Componentes, sem ordem fixa; um estudo alemão citado teve em média 48 dias de internamento; a nota não define número de sessões de TCC."
  },
  "modules": [
   {
    "id": "m1",
    "title": "Avaliação biopsicossocial completa",
    "description": "Avaliação médica, psiquiátrica e social, incluindo reconhecer cedo incoerências na história ou no exame."
   },
   {
    "id": "m2",
    "title": "Reunião interdisciplinar",
    "description": "Formar um diagnóstico integrado e um plano, com linguagem comum."
   },
   {
    "id": "m3",
    "title": "Informar a família",
    "description": "Diagnóstico, conceptualização e recomendações de tratamento."
   },
   {
    "id": "m4",
    "title": "Intervenções breves",
    "description": "Estratégias e exercícios de coping, horário e plano de regresso à escola."
   },
   {
    "id": "m5",
    "title": "Seguimento em ambulatório",
    "description": "Facilitar serviços médicos, psicológicos e terapia, com TCC como intervenção com mais evidência."
   }
  ],
  "source": "Clinical progress note: management of somatic symptom and related disorders in pediatric inpatients, J Hosp Med 2022, doi 10.1002/jhm.12947, https://pmc.ncbi.nlm.nih.gov/articles/PMC10087315/ (texto integral lido via Europe PMC)",
  "ages": "crianças e adolescentes (estudos citados: 8 a 17 anos)",
  "branches": [
   "esc",
   "adol"
  ]
 }
];
