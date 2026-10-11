// Gerado por build-hypotheses.py a partir de drafts/hipoteses-*.json. Não editar à mão.
window.HYPOTHESES = [
 {
  "id": "h-depressao-major",
  "name": "Perturbação depressiva major (episódio único ou recorrente)",
  "icd11": "6A70 (episódio único); 6A71 (recorrente)",
  "core": [
   {
    "domain": "d-humor",
    "level": 2,
    "why": "Humor deprimido ou irritável e/ou perda marcada de interesse ou prazer, face ao habitual"
   }
  ],
  "support": [
   {
    "domain": "d-sono",
    "level": 1,
    "why": "Insónia ou hipersónia são sintomas do episódio; a hipersónia é mais comum no adolescente"
   },
   {
    "domain": "d-alimentacao",
    "level": 1,
    "why": "Alteração do apetite ou do peso; na criança pode ser não ganhar o peso esperado"
   },
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "Dificuldade de concentração ou indecisão; queda do rendimento escolar"
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Ansiedade coexiste com frequência e pode ser a queixa de entrada"
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Irritabilidade e oposição podem fazer parte do episódio depressivo"
   },
   {
    "domain": "d-outros",
    "level": 1,
    "why": "Na criança pequena o humor depressivo pode surgir como queixas somáticas (cefaleias, dor abdominal)"
   },
   {
    "scale": "phqa_10",
    "why": "PHQ-A com total >= 10: sinal de rastreio, não critério da CID-11"
   },
   {
    "scale": "phqa_major",
    "why": "Algoritmo de depressão major do PHQ-A: sinal de rastreio, não critério da CID-11"
   },
   {
    "scale": "sdq_emocional",
    "why": "Subescala emocional elevada: sinal inespecífico de sofrimento interiorizado"
   },
   {
    "scale": "cssrs_moderado_alto",
    "why": "Ideação suicida: pensamentos recorrentes de morte ou ideação suicida são sintoma do episódio"
   },
   {
    "risk": "risk-suic",
    "why": "Ideação ou comportamento suicida: sintoma do episódio e risco acrescido nas perturbações depressivas"
   },
   {
    "risk": "risk-auto",
    "why": "Autolesão não suicida pode ocorrer no episódio depressivo da criança e do adolescente"
   }
  ],
  "confirm": [
   "Pelo menos 5 sintomas em simultâneo, quase todos os dias, durante pelo menos 2 semanas, com pelo menos 1 do grupo afetivo: humor deprimido (na criança e no adolescente pode ser irritabilidade) ou perda marcada de interesse ou prazer. Restantes: dificuldade de concentração ou indecisão, baixa autoestima ou culpa excessiva, desesperança, pensamentos recorrentes de morte ou ideação suicida, alteração do sono, do apetite ou do peso, agitação ou lentificação observáveis, cansaço. DSM-5-TR (índice 309): mesma contagem (5 de 9 sintomas na mesma janela de 2 semanas, pelo menos 1 de humor deprimido ou perda de interesse; irritável na criança e no adolescente; na criança, não ganhar o peso esperado conta para o critério de peso); a CID-11 trata a desesperança como sintoma à parte.",
   "Que os sintomas são mudança face ao funcionamento anterior; na criança pequena depende sobretudo do relato de pais e educadores.",
   "Prejuízo funcional significativo (pessoal, familiar, social, escolar), ou funcionamento só mantido com esforço adicional significativo.",
   "Irritabilidade isolada não basta: pode indicar outra perturbação ou ser reação normal à frustração.",
   "Sem história de episódio maníaco, misto ou hipomaníaco: se existir, o diagnóstico passa a ser bipolar. Perguntar por história familiar de depressão e de bipolaridade (NICE NG134 1.1.11). DSM-5-TR (índice 310, critério E): a exclusão não se aplica a episódios maníacos ou hipomaníacos induzidos por substância ou por condição médica.",
   "Excluir luto normal (morte de pessoa querida há menos de 6 meses, ou mais tempo conforme a cultura); suspeitar de episódio depressivo se houver sintomas contínuos 1 mês ou mais após a perda, culpa grave não ligada ao falecido, sintomas psicóticos, ideação suicida ou lentificação psicomotora. O DSM-5-TR (índices 310 e 320) não fixa prazo de 6 meses: a resposta a uma perda significativa pode assemelhar-se a um episódio e deve considerar-se episódio adicional por juízo clínico (no luto predominam o vazio e a perda, em ondas ligadas a lembranças; no episódio, o humor deprimido é persistente).",
   "Episódio único: um só episódio. Recorrente: pelo menos 2 episódios separados por vários meses sem perturbação significativa do humor. DSM-5-TR (índice 311): recorrente exige um intervalo de pelo menos 2 meses consecutivos sem critérios de episódio (CID-11: vários meses).",
   "Gravidade do episódio (ligeira, moderada, grave) e presença de delírios ou alucinações. O DSM-5-TR (índices 310-311) usa também os especificadores com ansiedade, características mistas, melancólicas, atípicas, catatonia, início no periparto e padrão sazonal.",
   "Perguntar sempre pelo consumo de álcool e drogas, bullying ou abuso, autolesão e ideias de suicídio; o adolescente deve ter oportunidade de falar em privado (NICE NG134 1.1.7).",
   "Não explicado por doença médica, substância ou medicamento.",
   "Risco de evolução para bipolar: o DSM-5-TR (índice 316) refere maior probabilidade com início na adolescência, características psicóticas e história familiar de bipolaridade."
  ],
  "differential": [
   "h-distimia",
   "h-bipolar-1",
   "h-bipolar-2",
   "h-ddm",
   "h-adaptacao",
   "h-luto-prolongado",
   "h-pstp",
   "h-pag",
   "PHDA: a desatenção persiste fora dos episódios e não acompanha as mudanças de humor ou de energia (CDDR) DSM-5-TR (índice 319): distraibilidade e baixa tolerância à frustração ocorrem nos dois; se cumprir critérios de ambos, diagnosticam-se ambos, com cautela para não sobrediagnosticar episódio depressivo na criança com PHDA cuja alteração de humor é irritabilidade.",
   "Perturbação mista depressiva e ansiosa (6A73), se nenhum dos conjuntos de sintomas atinge o limiar (CDDR; não incluída no catálogo)",
   "Causa médica a excluir primeiro: hipotiroidismo, mononucleose, anemia, doença autoimune, síndrome de fadiga crónica, enxaqueca, epilepsia, asma, doença inflamatória intestinal (AACAP 2023)",
   "Medicamentos e substâncias que causam sintomas depressivos (por exemplo corticoides, estimulantes, canábis, álcool): rever a medicação e perguntar por consumos (AACAP 2023)",
   "Perturbações psicóticas: os sintomas depressivos fazem parte do quadro psicótico; esquizoafetiva se houver delírios ou alucinações durante pelo menos 2 semanas sem episódio (DSM-5-TR, índice 319)"
  ],
  "comorbid": [
   "h-pag",
   "h-ansiedade-separacao",
   "h-ansiedade-social",
   "h-toc",
   "h-pstp",
   "PHDA",
   "perturbações do comportamento",
   "consumo de substâncias",
   "perturbações alimentares"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção Mood disorders: episódio depressivo (pp. 212-217), 6A70 (pp. 244-245), 6A71 (pp. 246-254); AACAP, Walter et al., JAACAP 2023;62(5):479-502, https://www.jaacap.org/article/S0890-8567(22)01852-4/fulltext (diferencial e comorbilidades); NICE NG134 (publicada 25/06/2019), https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (1.1.7, 1.1.11). DSM-5-TR (APA, 2022; índices de página do ficheiro dsm5tr__dsm5tr-completo.pdf.txt), Major Depressive Disorder: critérios e codificação (309-311), características (311-312), evolução e risco de bipolaridade (315-316), diagnóstico diferencial (318-320), comorbilidade (320); códigos DSM-5-TR (CID-10-CM) F32.x episódio único e F33.x recorrente (310-311). Nome, 5 sintomas em 2 semanas e exclusões confirmados no DSM-5-TR e na CID-11. Divergências mantidas: recorrência (DSM-5-TR pelo menos 2 meses consecutivos sem critérios; CID-11 vários meses) e luto (CID-11 até 6 meses; o DSM-5-TR não fixa prazo). O NG134 não define critérios diagnósticos. Índice de página do .txt do CDDR = página impressa + 18."
 },
 {
  "id": "h-distimia",
  "name": "Perturbação distímica (depressão persistente)",
  "icd11": "6A72",
  "core": [
   {
    "domain": "d-humor",
    "level": 1,
    "why": "Humor deprimido ou irritável persistente, mesmo que de intensidade ligeira"
   }
  ],
  "support": [
   {
    "domain": "d-sono",
    "level": 1,
    "why": "Sono perturbado ou aumentado é um dos sintomas adicionais"
   },
   {
    "domain": "d-alimentacao",
    "level": 1,
    "why": "Apetite diminuído ou aumentado é um dos sintomas adicionais"
   },
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "Menor concentração ou indecisão; queda do rendimento escolar"
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Ansiedade coexiste com frequência, sobretudo se o início foi precoce"
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "A oposição que surge no contexto do humor não justifica diagnóstico separado"
   },
   {
    "scale": "sdq_emocional",
    "why": "Subescala emocional elevada: sinal inespecífico de sofrimento interiorizado"
   },
   {
    "scale": "phqa_10",
    "why": "PHQ-A com total >= 10: sinal de rastreio; não mede a duração exigida"
   },
   {
    "risk": "risk-suic",
    "why": "O risco de suicídio é significativamente superior ao da população geral (CDDR)"
   }
  ],
  "confirm": [
   "Humor deprimido na maior parte do dia, na maioria dos dias, durante pelo menos 2 anos (na criança e no adolescente pode ser irritabilidade pervasiva). Na criança, a CID-11 admite diagnosticar após cerca de 1 ano; a AACAP 2023 refere duração mínima de 1 ano para a perturbação depressiva persistente em crianças e adolescentes (coincide com esse limiar). DSM-5-TR (índices 320-322): 1 ano na criança e no adolescente (humor pode ser irritável) e 2 anos no adulto, com humor deprimido e pelo menos 2 de 6 sintomas enquanto deprimido (apetite, sono, energia, autoestima, concentração ou decisões, desesperança); a CID-11 não fixa número mínimo de sintomas adicionais.",
   "Sintomas adicionais típicos do episódio depressivo, ainda que mais ligeiros: perda de interesse ou prazer, menor concentração ou indecisão, baixa autoestima ou culpa excessiva, desesperança, alteração do sono, do apetite, baixa energia.",
   "Nos primeiros 2 anos nunca houve um período de 2 semanas com sintomas em número e duração suficientes para episódio depressivo. Divergência: no DSM-5-TR (índices 321-322 e 324) os critérios de episódio depressivo major podem estar presentes continuamente; se ocorrer um episódio em qualquer momento, diagnostica-se também depressão major e indica-se o curso (por exemplo com episódios intermitentes).",
   "Sem períodos prolongados sem sintomas (cerca de 2 meses ou mais) desde o início; intervalos curtos são compatíveis. DSM-5-TR (índice 321): nunca mais de 2 meses de cada vez sem os sintomas.",
   "Sem história de episódio maníaco, misto ou hipomaníaco. DSM-5-TR (índice 321, critério E): idem para mania ou hipomania.",
   "Sofrimento significativo com os sintomas persistentes, ou prejuízo funcional significativo.",
   "Não explicado por doença médica (por exemplo hipotiroidismo), substância ou medicamento.",
   "Se, mais tarde, os sintomas atingirem o limiar de episódio depressivo, podem diagnosticar-se ambos (distimia e depressão major).",
   "DSM-5-TR (índices 321 e 323): início antes dos 21 anos é \"precoce\" e associa-se a mais perturbações da personalidade e de uso de substâncias; perda ou separação de um progenitor e adversidade na infância são fatores de risco."
  ],
  "differential": [
   "h-depressao-major",
   "h-bipolar-1",
   "h-bipolar-2",
   "h-pag",
   "Perturbação ciclotímica (6A62): oscilações entre períodos depressivos subliminares e hipomaníacos (CDDR; não incluída no catálogo)",
   "Perturbação de oposição e desafio: se os problemas de comportamento ocorrem sobretudo no contexto da perturbação do humor, não se atribui diagnóstico separado (CDDR)",
   "Irritabilidade por si só não indica distimia: pode ser outra perturbação ou reação normal à frustração (CDDR)",
   "Causa médica a excluir primeiro: hipotiroidismo, mononucleose, anemia, doença autoimune, síndrome de fadiga crónica, enxaqueca, epilepsia, asma, doença inflamatória intestinal (AACAP 2023)",
   "Medicamentos e substâncias que causam sintomas depressivos (por exemplo corticoides, estimulantes, canábis, álcool): rever a medicação e perguntar por consumos (AACAP 2023)",
   "Perturbações psicóticas crónicas: sintomas depressivos que só ocorrem durante a psicose não dão distimia (DSM-5-TR, índice 325)"
  ],
  "comorbid": [
   "h-pag",
   "h-ansiedade-separacao",
   "h-ansiedade-social",
   "h-toc",
   "perturbação de oposição e desafio",
   "perturbações do comportamento",
   "consumo de substâncias",
   "perturbações alimentares"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6A72 (pp. 255-258); AACAP, Walter et al., JAACAP 2023;62(5):479-502, https://www.jaacap.org/article/S0890-8567(22)01852-4/fulltext (duração de 1 ano em jovens, DSM-5-TR); NICE NG134 (publicada 25/06/2019), https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (cita a distimia só na categoria de depressão ligeira). DSM-5-TR (APA, 2022; índices de página do ficheiro dsm5tr__dsm5tr-completo.pdf.txt), Persistent Depressive Disorder: critérios (320-322), evolução e fatores de risco (322-323), diagnóstico diferencial (324-325), comorbilidade (325); código DSM-5-TR (CID-10-CM) F34.1 (320). Divergências mantidas: duração (CID-11 2 anos com possibilidade de cerca de 1 ano na criança; DSM-5-TR 1 ano em crianças e adolescentes); número de sintomas adicionais (CID-11 sem mínimo; DSM-5-TR 2 de 6); episódio depressivo nos primeiros 2 anos (CID-11 exclui; DSM-5-TR admite e diagnostica também depressão major). Índice de página do .txt do CDDR = página impressa + 18."
 },
 {
  "id": "h-ddm",
  "name": "Perturbação de desregulação disruptiva do humor (DMDD)",
  "icd11": "Sem categoria própria na CID-11; a irritabilidade-raiva crónica é enquadrada em 6C90.0 (perturbação de oposição e desafio, com irritabilidade-raiva crónica) ou, sem outras características de oposição, em 6A8Y (outra perturbação do humor especificada). No DSM-5-TR, F34.81 (CID-10-CM)",
  "branches": [
   "esc",
   "adol"
  ],
  "core": [
   {
    "domain": "d-comportamento",
    "level": 2,
    "why": "Explosões graves, desproporcionadas, frequentes"
   },
   {
    "domain": "d-humor",
    "level": 2,
    "why": "Irritabilidade ou raiva persistente entre as explosões"
   }
  ],
  "support": [
   {
    "scale": "sdq_comportamento",
    "why": "Subescala de comportamento elevada: sinal de apoio, não critério"
   },
   {
    "scale": "snap_oposicao",
    "why": "SNAP-IV de oposição em banda moderada ou superior: sinal de apoio, não critério"
   },
   {
    "scale": "sdq_emocional",
    "why": "Subescala emocional elevada: a irritabilidade crónica associa-se a perturbações depressivas e de ansiedade"
   },
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "A oposição com irritabilidade crónica coexiste frequentemente com PHDA (CDDR)"
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "A ansiedade pode manifestar-se por explosões e recusa perante o que assusta"
   },
   {
    "risk": "risk-terc",
    "why": "Agressividade ou ameaças a terceiros nas explosões"
   }
  ],
  "confirm": [
   "A CID-11 (CDDR) não tem esta categoria nem nomeia a DMDD (pesquisa no texto); o DSM-5-TR tem-na, entre as perturbações depressivas (F34.81; índices 302-308). Para a CID-11, a irritabilidade crónica codifica-se em 6C90.0 (oposição e desafio com irritabilidade-raiva crónica; CDDR pp. 539-540) ou, quando não há outras características de oposição, em 6A8Y (CDDR p. 263). Que 6C90.0 seja o equivalente da DMDD é uma aproximação, não uma equivalência estabelecida.",
   "DSM-5-TR (índice 303, critérios A a C): explosões graves e recorrentes (verbais ou comportamentais), desproporcionadas em intensidade ou duração e incoerentes com o nível de desenvolvimento, em média 3 ou mais por semana.",
   "Humor persistentemente irritável ou zangado entre as explosões, na maior parte do dia, quase todos os dias, observável por outros. DSM-5-TR (índice 303, critério D).",
   "Presente há 12 meses ou mais, sem mais de 3 meses seguidos sem sintomas; em pelo menos 2 de 3 contextos (casa, escola, pares), graves em pelo menos 1. DSM-5-TR (índice 303, critérios E e F).",
   "Idade: o DSM-5-TR (critérios G e H, índices 303 e 305) não permite o primeiro diagnóstico antes dos 6 nem depois dos 18 anos, exige início antes dos 10 e não se aplica a idade de desenvolvimento inferior a 6; a introdução do capítulo (índice 302) fala em \"crianças até aos 12 anos\", incoerente com os critérios, e o NIMH resume \"entre os 6 e os 10 anos\". Seguidos os critérios.",
   "DSM-5-TR (critérios I a K, índices 303-304): nunca um período distinto de mais de 1 dia com os sintomas completos de mania ou hipomania; não ocorre só durante episódio depressivo major nem é melhor explicado por autismo, stress pós-traumático, ansiedade de separação ou perturbação depressiva persistente; não atribuível a substância nem a condição médica ou neurológica. Não coexiste com bipolar, perturbação de oposição e desafio nem perturbação explosiva intermitente (se cumprir também oposição, só DMDD); pode coexistir com depressão major, PHDA, perturbação do comportamento e uso de substâncias.",
   "CID-11 (6C90.0): critérios de perturbação de oposição e desafio (padrão persistente, por exemplo 6 meses ou mais, de desobediência e desafio, com prejuízo) mais irritabilidade-raiva quase todos os dias, em vários contextos, desproporcionada e não limitada à relação com os pais; só irritabilidade e raiva não bastam para oposição.",
   "Que a irritabilidade crónica não é episódica: a mania exige episódio distinto com euforia (NICE CG185 1.11.5). DSM-5-TR (índice 307): na DMDD a irritabilidade é persistente durante meses; humor elevado ou expansivo e grandiosidade são característicos da mania e não da DMDD.",
   "Procurar causas da irritabilidade: stress psicossocial, conflito familiar, maus-tratos, perturbações da aprendizagem e da comunicação (Rao 2014). O DSM-5-TR (índice 305) associa aos comportamentos centrais o abuso ou negligência psicológica, doença psiquiátrica parental, trauma precoce, morte de um progenitor, divórcio e desnutrição."
  ],
  "differential": [
   "h-bipolar-1",
   "h-bipolar-2",
   "h-depressao-major",
   "h-distimia",
   "h-ansiedade-separacao",
   "h-pstp",
   "Perturbação de oposição e desafio (6C90), com ou sem irritabilidade-raiva crónica (DSM-5-TR, índice 307: se cumprir os critérios de ambas, só DMDD)",
   "PHDA",
   "autismo",
   "Perturbação explosiva intermitente (6C73) (DSM-5-TR, índice 308: não exige humor persistentemente irritável entre as explosões; não se atribuem os dois diagnósticos)",
   "Perturbação do comportamento (6C91)",
   "Problemas de linguagem, aprendizagem e sono (prática clínica, sem fonte); doença médica ou neurológica e substâncias ou medicamentos que alterem o humor (DSM-5-TR, índice 304, critério K)"
  ],
  "comorbid": [
   "PHDA",
   "perturbação de oposição e desafio (CID-11: o equivalente aproximado é o especificador 6C90.0; no DSM-5-TR não se diagnostica em simultâneo com a DMDD, índice 303)",
   "h-pag",
   "h-depressao-major",
   "perturbações da aprendizagem e da comunicação",
   "outras perturbações de ansiedade (DSM-5-TR, índice 308)"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6C90 e especificadores (pp. 537-543); NIMH, Disruptive Mood Dysregulation Disorder: The Basics (revisto em 2023), https://www.nimh.nih.gov/health/publications/disruptive-mood-dysregulation-disorder; Rao U, DSM-5: Disruptive Mood Dysregulation Disorder, Asian J Psychiatr 2014, https://pmc.ncbi.nlm.nih.gov/articles/PMC4254488/ (fonte secundária do DSM-5); AACAP, Walter et al., JAACAP 2023;62(5):479-502, https://www.jaacap.org/article/S0890-8567(22)01852-4/fulltext (lista a DMDD como perturbação depressiva do DSM-5-TR, F34.81, sem critérios). DSM-5-TR (APA, 2022; índices de página do ficheiro dsm5tr__dsm5tr-completo.pdf.txt), Disruptive Mood Dysregulation Disorder: critérios (303-304), evolução e idades (305), diagnóstico diferencial (307-308), comorbilidade (308); código F34.81 (303). Critérios agora confirmados no DSM-5-TR (primária) em vez de só Rao 2014. Divergência mantida: CID-11 sem a categoria (6C90.0 ou 6A8Y), DSM-5-TR com ela e sem coexistência com oposição e desafio; discrepância interna de idade no DSM-5-TR (12 anos na introdução, 6 a 18 nos critérios) e no NIMH. NICE sem guideline lida. Índice de página do .txt do CDDR = página impressa + 18."
 },
 {
  "id": "h-bipolar-1",
  "name": "Perturbação bipolar tipo I",
  "icd11": "6A60",
  "branches": [
   "adol"
  ],
  "core": [
   {
    "domain": "d-humor",
    "level": 2,
    "why": "Período distinto de humor elevado ou eufórico com mais energia, diferente do habitual (o domínio não distingue a polaridade: confirmar)"
   }
  ],
  "support": [
   {
    "domain": "d-sono",
    "level": 1,
    "why": "Menor necessidade de sono sem cansaço (não é insónia)"
   },
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "Distractibilidade: só conta se agravar nos períodos de humor elevado"
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Comportamento impulsivo de risco, desinibição, agressividade nos períodos de humor elevado"
   },
   {
    "domain": "d-substancias",
    "level": 1,
    "why": "Consumo de substâncias coexiste com frequência e pode induzir sintomas maníacos"
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Ansiedade é a comorbilidade mais frequente nas perturbações bipolares (CDDR)"
   },
   {
    "risk": "risk-psic",
    "why": "Delírios ou alucinações podem ocorrer na mania e tornam o episódio mais grave"
   },
   {
    "risk": "risk-suic",
    "why": "Risco de suicídio mais alto, sobretudo em episódios depressivos ou mistos"
   }
  ],
  "confirm": [
   "Pelo menos um episódio maníaco ou misto (CID-11); um só chega para o tipo I. Na criança e no jovem, o NICE exige mania, com euforia na maior parte dos dias e do tempo durante pelo menos 7 dias; a irritabilidade não é critério diagnóstico central (CG185 1.11.5). DSM-5-TR (índices 256 e 259): mania = período distinto de humor elevado, expansivo ou irritável com aumento de atividade ou energia durante pelo menos 1 semana (ou qualquer duração se houver internamento), com 3 de 7 sintomas (4 se o humor for só irritável); basta um episódio maníaco ao longo da vida.",
   "Divergência: a CID-11 admite estado de humor extremo com euforia, irritabilidade ou expansividade e refere que na criança pode ser irritabilidade extrema. Seguido o NICE e a releitura de drafts/humor.json (campo changed de dh-24): a irritabilidade crónica ou os acessos de raiva não bastam; só apontam para mania se episódicos, prolongados, diferentes do habitual e com outros sintomas e mudança de funcionamento (apoio CANMAT/ISBD 2018 da releitura anterior, não relido nesta tarefa). O DSM-5-TR (índices 260-261 e 267) aceita humor só irritável com 4 sintomas, mas na criança exige episódio claro e distinto da linha de base, com euforia ou tolice nitidamente superior ao habitual e aumento de energia; a irritabilidade persistente e grave aponta antes para DMDD. Ficam as três versões: NICE, CID-11 e DSM-5-TR.",
   "Aumento de atividade ou de energia e vários sintomas associados: maior loquacidade, fuga de ideias ou pensamentos acelerados, grandiosidade, menor necessidade de sono, distractibilidade, comportamento impulsivo de risco, aumento do impulso sexual, da sociabilidade ou da atividade dirigida a objetivos. O CDDR não fixa número mínimo. DSM-5-TR (índices 256 e 261): mínimo de 3 de 7 (4 se só irritável); na criança podem contar muitas tarefas em simultâneo, planos irrealistas e preocupações sexuais inadequadas ao desenvolvimento e sem outra explicação.",
   "Comportamentos episódicos e recorrentes (ou de início rápido se for o primeiro episódio), inadequados ao contexto, acima do esperado para a idade, mudança nítida face ao funcionamento anterior (CDDR). Grandiosidade: crenças mantidas contra evidência clara ou que põem a criança em perigo, não a sobrestimação normal das capacidades. DSM-5-TR (índice 261): mesma regra para a grandiosidade (contra evidência clara ou façanhas claramente perigosas e mudança face ao habitual).",
   "Prejuízo significativo, ou necessidade de tratamento intensivo (por exemplo internamento), ou sintomas psicóticos. DSM-5-TR (índice 256, critério C): prejuízo acentuado, necessidade de internamento para evitar dano ou características psicóticas.",
   "Sintomas de PHDA só contam se agravarem nos períodos de humor elevado; na PHDA o início é antes dos 12 anos, são persistentes e não ligados a mudanças de humor ou de energia (CDDR). DSM-5-TR (índice 267): a PHDA começa antes dos 12 anos e é persistente; os sintomas da mania ocorrem em episódios distintos e começam tipicamente no fim da adolescência ou início da idade adulta.",
   "Não decorrente de doença médica, substância ou medicamento; síndrome maníaca durante antidepressivo só conta se persistir depois de suspenso o tratamento e se cumprirem os critérios completos (CDDR). DSM-5-TR (índices 256 e 267): conta se o quadro completo persistir para além do efeito fisiológico do tratamento.",
   "NICE CG185: diagnóstico só após monitorização longitudinal prospetiva intensiva, por profissional ou equipa com experiência, com os pais ou cuidadores (1.11.4); não usar questionários em cuidados primários para identificar (1.11.1); suspeita abaixo dos 14 anos: referenciar a CAMHS (1.11.2); a partir dos 14: serviço de intervenção precoce em psicose ou CAMHS com experiência em bipolaridade (1.11.3).",
   "Não diagnosticar com base apenas em depressão com história familiar de bipolaridade: seguir (NICE 1.11.6).",
   "Avaliação completa (NICE 1.3.2 e 1.11.7): história de humor, episódios de hiperatividade e desinibição, gatilhos, história familiar, trauma precoce, perturbação do desenvolvimento, funcionamento escolar e social, com informação de pais ou cuidadores.",
   "DSM-5-TR (índice 263): sem idade mínima; a criança é avaliada face à sua própria linha de base. Idade média de início 22 anos."
  ],
  "differential": [
   "h-ddm",
   "h-bipolar-2",
   "h-depressao-major",
   "h-pstp",
   "PHDA (DSM-5-TR, índice 267: sintomas persistentes desde antes dos 12 anos, não em episódios distintos)",
   "Perturbação de oposição e desafio",
   "Esquizofrenia e outras perturbações psicóticas primárias: os sintomas psicóticos da bipolaridade ocorrem só durante os episódios de humor (NICE 1.3.3; CDDR)",
   "Perturbação de personalidade (NICE 1.3.3); DSM-5-TR (índice 267): labilidade e impulsividade só contam se forem um episódio distinto ou um aumento nítido sobre a linha de base",
   "Consumo de substâncias (NICE 1.3.3; CDDR)",
   "Causa médica a excluir primeiro: hipotiroidismo ou hipertiroidismo (NICE 1.3.3)",
   "Perturbação de ansiedade generalizada e PSPT: ruminações ansiosas podem confundir-se com pensamentos acelerados; avaliar a episodicidade e os gatilhos (DSM-5-TR, índice 266)"
  ],
  "comorbid": [
   "PHDA",
   "perturbações de ansiedade",
   "consumo de substâncias",
   "perturbação de oposição e desafio"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), episódios maníaco, misto e hipomaníaco (pp. 217-224), 6A60 (pp. 225-229) e secção das perturbações bipolares (pp. 236-240); NICE CG185 (publicada 24/09/2014, atualizada 02/09/2025), https://www.nice.org.uk/guidance/cg185/chapter/Recommendations (1.1.2, 1.3.2, 1.3.3, 1.11.1 a 1.11.7); drafts/humor.json (dh-7, dh-23, dh-24, dh-27, dh-34, campo changed). DSM-5-TR (APA, 2022; índices de página do ficheiro dsm5tr__dsm5tr-completo.pdf.txt), Bipolar I Disorder: critérios de mania e hipomania (256-259), características e idade na criança (260-261), evolução (263), diagnóstico diferencial (266-267), comorbilidade (268); códigos F31.x (259). Divergências mantidas: mania com humor irritável (NICE euforia pelo menos 7 dias e irritabilidade não central; CID-11 euforia, irritabilidade ou expansividade sem número mínimo; DSM-5-TR 3 de 7 sintomas, 4 se só irritável, pelo menos 1 semana). Ramo apenas adolescente é decisão do redator: o DSM-5-TR não fixa idade mínima e a CID-11 diz mania rara na infância. Índice de página do .txt do CDDR = página impressa + 18."
 },
 {
  "id": "h-bipolar-2",
  "name": "Perturbação bipolar tipo II",
  "icd11": "6A61",
  "branches": [
   "adol"
  ],
  "core": [
   {
    "domain": "d-humor",
    "level": 2,
    "why": "Episódio depressivo (o motivo habitual de consulta) com história de períodos de humor elevado; o domínio não distingue a polaridade: confirmar"
   }
  ],
  "support": [
   {
    "domain": "d-sono",
    "level": 1,
    "why": "Menor necessidade de sono nos períodos de humor elevado"
   },
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "Distractibilidade: só conta se agravar nos períodos de humor elevado"
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Impulsividade ou comportamento de risco nos períodos de humor elevado"
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Ansiedade é a comorbilidade mais frequente nas perturbações bipolares (CDDR)"
   },
   {
    "domain": "d-substancias",
    "level": 1,
    "why": "Consumo de substâncias coexiste com frequência"
   },
   {
    "scale": "phqa_major",
    "why": "Episódio depressivo provável: sinal de rastreio, que não distingue depressão unipolar de bipolar"
   },
   {
    "risk": "risk-suic",
    "why": "Risco de suicídio mais alto, sobretudo nos episódios depressivos"
   }
  ],
  "confirm": [
   "Pelo menos um episódio hipomaníaco e pelo menos um episódio depressivo, sem história de episódio maníaco ou misto (CID-11, 6A61). Hipomania sem episódio depressivo não chega. DSM-5-TR (índices 268-270): igual (pelo menos um episódio hipomaníaco e um depressivo major, nunca mania); exige ainda sofrimento ou prejuízo causado pelos sintomas depressivos ou pela imprevisibilidade da alternância (critério D).",
   "Hipomania: humor persistentemente elevado ou irritabilidade aumentada, com aumento de atividade ou de energia, quase todos os dias, durante pelo menos vários dias, e vários sintomas associados (loquacidade, pensamentos acelerados, autoestima aumentada, menor necessidade de sono, distractibilidade, comportamento impulsivo, mais impulso sexual ou sociabilidade); sem prejuízo marcado e sem sintomas psicóticos (CDDR). DSM-5-TR (índices 256-257 e 268): pelo menos 4 dias consecutivos (CID-11: pelo menos vários dias), 3 de 7 sintomas (4 se só irritável), mudança inequívoca de funcionamento observável por outros, sem prejuízo marcado nem internamento; com características psicóticas é, por definição, mania.",
   "Divergência: o NICE CG185 (1.11.5) exige mania, com euforia pelo menos 7 dias, para diagnosticar bipolaridade em crianças e jovens, e nas recomendações lidas não encontrei critérios próprios de hipomania nem de tipo II para esta idade. Por isso, até à avaliação especializada, manter como hipótese a vigiar (1.11.2 a 1.11.4), não como diagnóstico. O DSM-5-TR (índice 275) descreve o tipo II também em crianças e adolescentes: o primeiro episódio é tipicamente depressivo, a hipomania tem de exceder o esperado para o estádio de desenvolvimento e a irritabilidade não episódica não conta (associa-se a ansiedade e depressão, não a bipolaridade).",
   "Na criança e no adolescente a hipomania é difícil de distinguir de comportamento normal para a idade (por exemplo alterações do sono ou irritabilidade): considerar a episodicidade e a mudança marcada e concomitante de cognições (pensamentos acelerados) ou de comportamento (mais atividade) (CDDR).",
   "A hipomania é muitas vezes avaliada retrospetivamente, porque o doente procura ajuda nos episódios depressivos (CDDR): pedir descrição dos pais e de outros informadores.",
   "Se surgir um episódio maníaco ou misto, o diagnóstico muda para tipo I (CDDR).",
   "Não decorrente de doença médica, substância ou medicamento; síndrome hipomaníaca durante antidepressivo só conta se persistir depois de suspenso o tratamento (CDDR). DSM-5-TR (índice 257): 1 ou 2 sintomas após antidepressivo (irritabilidade, agitação) não bastam.",
   "NICE: monitorização longitudinal prospetiva por equipa com experiência (1.11.4) e referenciação (1.11.2, 1.11.3), como no tipo I.",
   "Episódio depressivo com hipomania passada que não cumpre os critérios: o DSM-5-TR (índice 318) deixa ao juízo clínico entre outra perturbação bipolar especificada e depressão major. Cerca de 5% a 15% dos casos de tipo II desenvolvem mais tarde mania, o que passa o diagnóstico a tipo I (índice 275)."
  ],
  "differential": [
   "h-bipolar-1",
   "h-depressao-major",
   "h-distimia",
   "h-ddm",
   "Perturbação ciclotímica (6A62), se os períodos depressivos nunca atingiram o limiar de episódio e nunca houve mania (CDDR; não incluída no catálogo)",
   "PHDA (DSM-5-TR, índice 278: sobreposição em falar muito, distraibilidade e menos sono; evitar contar duas vezes os sintomas, exigindo episódio distinto e aumento nítido sobre a linha de base)",
   "Variações normais do humor, do sono e da irritabilidade na adolescência (CDDR)",
   "Consumo de substâncias",
   "Causa médica a excluir primeiro: hipotiroidismo ou hipertiroidismo (NICE 1.3.3)"
  ],
  "comorbid": [
   "perturbações de ansiedade (DSM-5-TR, índice 278: as mais frequentes; na criança e no adolescente mais do que no tipo I e muitas vezes anteriores à bipolaridade)",
   "consumo de substâncias",
   "PHDA"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), episódio hipomaníaco (pp. 222-224), 6A61 (pp. 230-233) e perturbações bipolares (pp. 236-240); NICE CG185 (publicada 24/09/2014, atualizada 02/09/2025), https://www.nice.org.uk/guidance/cg185/chapter/Recommendations (1.11.2 a 1.11.5); drafts/humor.json (campo changed de dh-24 e dh-34). DSM-5-TR (APA, 2022; índices de página do ficheiro dsm5tr__dsm5tr-completo.pdf.txt), Bipolar II Disorder: critérios (268-270), prevalência e evolução na criança (274-275), diagnóstico diferencial (276-278), comorbilidade (278); código F31.81 (268). Divergência mantida: o DSM-5-TR define o tipo II (hipomania de pelo menos 4 dias) também na criança, o NICE só reconhece mania com euforia de 7 dias, e a CID-11 pede hipomania de pelo menos vários dias. Ramo apenas adolescente é decisão do redator. Índice de página do .txt do CDDR = página impressa + 18."
 },
 {
  "id": "h-pag",
  "name": "Perturbação de ansiedade generalizada",
  "icd11": "6B00",
  "branches": [
   "esc",
   "adol"
  ],
  "core": [
   {
    "domain": "d-ansiedade",
    "level": 2,
    "why": "Preocupação excessiva a vários aspetos da vida diária ou apreensão generalizada"
   }
  ],
  "support": [
   {
    "domain": "d-sono",
    "level": 1,
    "why": "Dificuldade em adormecer ou despertares noturnos"
   },
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "Dificuldade de concentração (diferenciar de PHDA)"
   },
   {
    "domain": "d-outros",
    "level": 1,
    "why": "Cefaleias, dor abdominal e sintomas gastrointestinais são frequentes na criança"
   },
   {
    "domain": "d-humor",
    "level": 1,
    "why": "No adolescente, irritabilidade excessiva e risco de depressão associada"
   },
   {
    "scale": "sdq_emocional",
    "why": "Subescala emocional elevada: sinal inespecífico, abrange preocupações, medos e queixas somáticas"
   }
  ],
  "confirm": [
   "Ansiedade marcada: apreensão generalizada não restrita a uma situação ou preocupação excessiva com acontecimentos negativos em vários aspetos da vida (família, saúde, desempenho escolar e desportivo).",
   "Acompanhada de sintomas como tensão muscular ou inquietação, sintomas autonómicos (náuseas, dor abdominal, palpitações, suor, tremor), nervosismo, dificuldade de concentração, irritabilidade, perturbação do sono. O CDDR dá exemplos e não fixa número mínimo.",
   "Persistente: pelo menos vários meses, na maioria dos dias; não transitória (CID-11). DSM-5-TR (índice 393): ansiedade e preocupação excessivas, mais dias do que não, durante pelo menos 6 meses, difíceis de controlar, com 3 de 6 sintomas (inquietação, fadiga fácil, dificuldade de concentração, irritabilidade, tensão muscular, perturbação do sono); na criança basta 1 sintoma. Divergência mantida: a CID-11 não fixa meses exatos nem número de sintomas.",
   "Na criança: perfecionismo, busca repetida de reasseguramento, conformidade excessiva com as regras, preocupação com a segurança e a saúde; sensibilidade à crítica. Pouco habitual antes dos 5 anos. DSM-5-TR (índices 394-395): preocupação com a competência e o desempenho mesmo sem avaliação por outros, com a pontualidade e com acontecimentos catastróficos. Início: a CID-11 diz pouco habitual antes dos 5 anos; o DSM-5-TR diz que raramente surge antes da adolescência (início médio aos 35 anos na América do Norte, índice 395).",
   "Sofrimento significativo com a ansiedade persistente, ou prejuízo funcional significativo.",
   "Só diagnosticar se os critérios já existiam antes de um episódio depressivo ou depois da sua remissão completa (CDDR). Divergência: o DSM-5-TR (índice 398) admite o diagnóstico comórbido com perturbações depressivas, bipolares e psicóticas se a ansiedade for suficientemente grave para merecer atenção clínica.",
   "Não explicada por outra perturbação, doença médica, substância ou medicamento. DSM-5-TR (índice 393, critério F): exclui as preocupações próprias do pânico, da ansiedade social, do TOC, da separação, do PSPT, da anorexia nervosa, da doença, da dismorfia corporal e dos delírios.",
   "Preocupações realistas (por exemplo ameaça real de perda do domicílio) não são excessivas; avaliar o contexto (CDDR)."
  ],
  "differential": [
   "h-ansiedade-social",
   "h-ansiedade-separacao",
   "h-panico",
   "h-toc",
   "h-pstp",
   "h-adaptacao",
   "h-depressao-major",
   "PHDA (inquietação, distração)",
   "Autismo",
   "Hipocondria ou perturbação de mal-estar corporal, se a preocupação se limita à saúde (CDDR); DSM-5-TR (índice 397): se o único receio é a própria doença, perturbação de ansiedade de doença; se incide nos sintomas físicos, perturbação de sintomas somáticos",
   "Causa médica a excluir primeiro: hipertiroidismo, asma, diabetes e hipoglicemia, arritmias, enxaqueca, epilepsia ou outra doença do sistema nervoso (AACAP 2020; CDDR cita hipertiroidismo)",
   "Medicamentos e substâncias que causam ansiedade (broncodilatadores, descongestionantes, esteroides, estimulantes, cafeína, canábis) e privação de nicotina, álcool ou cafeína (AACAP 2020)"
  ],
  "comorbid": [
   "h-depressao-major",
   "h-ansiedade-separacao",
   "h-fobia-especifica",
   "h-ansiedade-social",
   "PHDA",
   "perturbações do comportamento",
   "consumo de substâncias"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B00 (pp. 266-270); AACAP, Walter et al., JAACAP 2020;59(10):1107-1124, doi 10.1016/j.jaac.2020.05.005 (diferencial e comorbilidades). Sem guideline NICE para esta perturbação na criança lida nesta tarefa. DSM-5-TR (APA, 2022; índices de página do ficheiro dsm5tr__dsm5tr-completo.pdf.txt), Generalized Anxiety Disorder: critérios (393), características e idade na criança (394-395), diagnóstico diferencial (397-398), comorbilidade (398); código F41.1 (393). Divergências mantidas: duração (CID-11 vários meses; DSM-5-TR 6 meses), número de sintomas (DSM-5-TR 3 de 6, 1 na criança; CID-11 sem mínimo), início (CID-11 pouco comum antes dos 5 anos; DSM-5-TR raro antes da adolescência) e coexistência com depressão (CID-11 só antes ou depois do episódio; DSM-5-TR admite). Sem guideline NICE para esta perturbação na criança lida nesta tarefa. Índice de página do .txt do CDDR = página impressa + 18."
 },
 {
  "id": "h-ansiedade-separacao",
  "name": "Perturbação de ansiedade de separação",
  "icd11": "6B05",
  "branches": [
   "pre",
   "esc",
   "adol"
  ],
  "core": [
   {
    "domain": "d-ansiedade",
    "level": 2,
    "why": "Medo ou ansiedade excessivos perante a separação das figuras de vinculação"
   }
  ],
  "support": [
   {
    "domain": "d-sono",
    "level": 1,
    "why": "Recusa em dormir longe da figura de vinculação e pesadelos de separação"
   },
   {
    "domain": "d-outros",
    "level": 1,
    "why": "Náuseas, vómitos, dor abdominal ou cefaleia ao sair de casa para a escola"
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Birras, recusa ou irritabilidade que ocorrem só perante a separação"
   },
   {
    "scale": "sdq_emocional",
    "why": "Subescala emocional elevada: inclui medos e queixas somáticas"
   }
  ],
  "confirm": [
   "Medo ou ansiedade marcados e excessivos perante a separação das pessoas a quem a criança está vinculada, além do esperado para o desenvolvimento.",
   "Manifestações: pensamentos persistentes de que um acontecimento mau (por exemplo rapto) levará à separação, relutância ou recusa em ir à escola, mal-estar recorrente na separação (birras, retraimento), recusa em dormir sem a figura de vinculação, pesadelos de separação, sintomas físicos nas separações. Na criança pequena, seguir o cuidador de perto em casa. DSM-5-TR (índice 352): exige pelo menos 3 de 8 manifestações; a CID-11 não fixa número mínimo.",
   "Persistente: pelo menos vários meses (CID-11) ou pelo menos 4 semanas em crianças e adolescentes, tipicamente 6 meses ou mais em adultos (DSM-5-TR, índice 352); divergência mantida. As reações de separação do pré-escolar são esperadas e distinguem-se pela persistência com separações repetidas e pela preocupação excessiva com o bem-estar das figuras de vinculação.",
   "Sofrimento significativo ou prejuízo funcional significativo.",
   "Não explicada por outra perturbação (por exemplo agorafobia, perturbação de personalidade). DSM-5-TR (índice 353, critério D): autismo (resistência excessiva à mudança), psicose, agorafobia, ansiedade generalizada e ansiedade de doença.",
   "Os limites culturais da separação normal; um estilo parental que impede a autonomia pode associar-se (CDDR). Ver item dan-11.",
   "Se houve perda ou trauma, que o foco é a perda futura ou o dano às figuras, e não a re-experienciação do acontecimento. DSM-5-TR (índice 355): o início segue muitas vezes um stress de vida, sobretudo perda (morte de familiar ou animal, mudança de escola, divórcio, imigração); o bullying é fator de risco.",
   "Idade: início possível já no pré-escolar e em qualquer momento da infância e da adolescência (DSM-5-TR, índice 355; prevalência de 1,6% em 12 meses nos adolescentes, índice 354); os mais novos recusam a escola e podem só manifestar a ansiedade quando há separação."
  ],
  "differential": [
   "h-pag",
   "h-panico",
   "h-ansiedade-social",
   "h-depressao-major",
   "h-pstp",
   "h-luto-prolongado",
   "h-adaptacao",
   "Perturbação de oposição e desafio: só se a recusa não ocorre exclusivamente perante a separação (CDDR)",
   "Perturbação do comportamento: absentismo sem preocupação pelo bem-estar das figuras (CDDR)",
   "Doença física que explique as queixas somáticas (prática clínica, sem fonte)",
   "Agorafobia (6B02; não incluída no catálogo): o medo é de ficar preso e sem ajuda, não de estar longe das figuras de vinculação (DSM-5-TR, índice 356)",
   "Perturbações psicóticas: as experiências percetivas invulgares à noite assentam numa má interpretação de um estímulo real e cedem com a presença da figura de vinculação (DSM-5-TR, índice 357)"
  ],
  "comorbid": [
   "h-pag",
   "h-fobia-especifica",
   "h-ansiedade-social",
   "h-depressao-major"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B05 (pp. 289-293); AACAP, Walter et al., JAACAP 2020;59(10):1107-1124, doi 10.1016/j.jaac.2020.05.005. Sem guideline NICE para esta perturbação na criança lida nesta tarefa. DSM-5-TR (APA, 2022; índices de página do ficheiro dsm5tr__dsm5tr-completo.pdf.txt), Separation Anxiety Disorder: critérios (352-353), prevalência e evolução (354-355), diagnóstico diferencial (356-357), comorbilidade (357-358); código F93.0 (352). Divergência mantida: duração (CID-11 vários meses; DSM-5-TR pelo menos 4 semanas em crianças e adolescentes) e número de manifestações (DSM-5-TR 3 de 8). Ramo: acrescentado o adolescente (DSM-5-TR, índices 354-355). Sem guideline NICE para esta perturbação na criança lida nesta tarefa. Índice de página do .txt do CDDR = página impressa + 18."
 },
 {
  "id": "h-ansiedade-social",
  "name": "Perturbação de ansiedade social",
  "icd11": "6B04",
  "branches": [
   "esc",
   "adol"
  ],
  "core": [
   {
    "domain": "d-ansiedade",
    "level": 2,
    "why": "Medo ou ansiedade marcados em situações sociais, com receio de avaliação negativa"
   }
  ],
  "support": [
   {
    "scale": "sdq_colegas",
    "why": "Problemas com os colegas elevados: possível evitamento ou isolamento"
   },
   {
    "scale": "sdq_emocional",
    "why": "Subescala emocional elevada: sinal inespecífico"
   },
   {
    "domain": "d-social",
    "level": 1,
    "why": "Evitamento ou retraimento social; diferenciar de autismo"
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Explosões ou recusa para evitar a situação social"
   },
   {
    "domain": "d-humor",
    "level": 1,
    "why": "A depressão coexiste com frequência"
   },
   {
    "domain": "d-substancias",
    "level": 1,
    "why": "No adolescente, risco de consumo para atenuar a ansiedade social"
   }
  ],
  "confirm": [
   "Medo ou ansiedade marcados e excessivos, de forma consistente, numa ou mais situações sociais (conversar, ser observado, atuar perante outros), com receio de agir de forma ou mostrar sintomas de ansiedade que os outros avaliem negativamente. DSM-5-TR (índice 367, critério A): na criança a ansiedade tem de ocorrer com pares e não só em interações com adultos.",
   "Situações evitadas ou suportadas com intenso medo. Na criança e no adolescente: estratégias subtis de evitamento (falar pouco, evitar contacto ocular), recusa escolar, dificuldade em exprimir vontades. DSM-5-TR (índice 367): na criança o medo exprime-se por choro, birras, imobilidade, agarrar-se, encolhimento ou falta de fala em situações sociais.",
   "Persistente: pelo menos vários meses (CID-11) ou tipicamente 6 meses ou mais (DSM-5-TR, índice 368); divergência mantida. Não é a timidez nem a ansiedade face a estranhos normais para a idade; a CID-11 diz pouco habitual antes dos 10 anos. DSM-5-TR (índice 370): idade mediana de início 13 anos, com 75% entre os 8 e os 15, por vezes depois de história de inibição ou de experiência humilhante (por exemplo bullying); pode também começar na infância pequena.",
   "Sofrimento significativo ou prejuízo funcional significativo.",
   "Que o medo é desproporcionado à situação: perante bullying, o receio dos pares pode ser adequado (CDDR).",
   "NICE CG159: entrevista a sós com a criança ou o jovem sempre que possível, com informação de um adulto que o conheça (1.4.5); descrever situações temidas, comportamentos de segurança, ruminação antes e depois do evento (1.4.6); avaliar parentalidade que mantém a ansiedade e vitimização pelos pares (1.4.7); avaliar comorbilidades (1.4.8); risco (1.4.11).",
   "Se a criança responder 'sim' a uma ou mais das perguntas de identificação do NICE (1.4.1), considerar avaliação completa (1.4.2).",
   "DSM-5-TR (índice 368): especificador \"só desempenho\" (medo restrito a falar ou atuar em público); não é melhor explicado por pânico, dismorfia corporal ou autismo (critério I)."
  ],
  "differential": [
   "h-mutismo-seletivo",
   "h-pag",
   "h-panico",
   "h-fobia-especifica",
   "h-depressao-major",
   "Autismo: défices de comunicação social e, em regra, desinteresse pela interação (CDDR); DSM-5-TR (índice 374): na ansiedade social as relações e a comunicação adequadas à idade estão preservadas, embora possam parecer comprometidas perante pares ou adultos desconhecidos",
   "Agorafobia (6B02): o foco é a incapacidade de escapar, não a avaliação dos outros (CDDR; não incluída no catálogo)",
   "Perturbação dismórfica corporal e perturbação de referência olfativa, se o receio se limita à aparência ou ao odor (CDDR)",
   "Perturbação de oposição e desafio: recusa só em situações que provocam ansiedade (CDDR)",
   "h-vinculacao-reativa (na ansiedade social a criança procura conforto nos cuidadores)",
   "Timidez: traço de personalidade, só é perturbação se houver impacto adverso significativo (DSM-5-TR, índice 372)"
  ],
  "comorbid": [
   "h-pag",
   "h-ansiedade-separacao",
   "h-fobia-especifica",
   "h-mutismo-seletivo",
   "h-depressao-major",
   "PHDA",
   "autismo",
   "consumo de substâncias",
   "dificuldades de fala e linguagem"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B04 (pp. 284-288); NICE CG159 (publicada 22/05/2013), https://www.nice.org.uk/guidance/cg159/chapter/Recommendations (1.4.1 a 1.4.12); AACAP, Walter et al., JAACAP 2020;59(10):1107-1124, doi 10.1016/j.jaac.2020.05.005. DSM-5-TR (APA, 2022; índices de página do ficheiro dsm5tr__dsm5tr-completo.pdf.txt), Social Anxiety Disorder (Social Phobia): critérios (367-368), evolução (370), diagnóstico diferencial (372-374), comorbilidade (374); código F40.10 (367). Divergência mantida: duração (CID-11 vários meses; DSM-5-TR tipicamente 6 meses ou mais). Índice de página do .txt do CDDR = página impressa + 18."
 },
 {
  "id": "h-mutismo-seletivo",
  "name": "Mutismo seletivo",
  "icd11": "6B06",
  "branches": [
   "pre",
   "esc"
  ],
  "core": [
   {
    "domain": "d-ansiedade",
    "level": 2,
    "why": "Ausência consistente de fala em situações específicas, apesar de falar noutras"
   }
  ],
  "support": [
   {
    "domain": "d-social",
    "level": 1,
    "why": "Falha de comunicação social em contextos específicos; diferenciar de autismo"
   },
   {
    "scale": "sdq_colegas",
    "why": "Problemas com os colegas elevados: dificuldade em iniciar interações"
   },
   {
    "scale": "sdq_emocional",
    "why": "Subescala emocional elevada: sinal inespecífico"
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Oposição quando é pedido que fale, sem diagnóstico separado se for só isso (CDDR)"
   }
  ],
  "confirm": [
   "Seletividade consistente da fala: fala adequadamente em certas situações (em regra em casa) e falha de forma consistente noutras (em regra na escola); confirmar com pais ou cuidadores que a criança fala fora da escola.",
   "Duração de pelo menos 1 mês, não limitada ao primeiro mês de escola. DSM-5-TR (índice 358, critério C): igual.",
   "Não se deve a desconhecimento ou desconforto com a língua falada na situação (por exemplo criança imigrante ou de minoria linguística).",
   "Não explicada por outra perturbação (autismo, perturbação do desenvolvimento da linguagem). DSM-5-TR (índice 358, critério E): exclui perturbação da comunicação (por exemplo gaguez) e o mutismo que ocorre só durante autismo, esquizofrenia ou outra psicose; o autismo pode coexistir (índice 361).",
   "A seletividade interfere com a aprendizagem ou a comunicação social, ou causa prejuízo noutras áreas.",
   "Início em regra antes dos 5 anos, podendo só ser notada à entrada na escola; testes de linguagem recetiva por apontar ou executar ordens podem ser possíveis (CDDR). DSM-5-TR (índice 359): igual; quase sempre há outro diagnóstico de ansiedade, sobretudo ansiedade social, cujos sintomas costumam persistir depois de o mutismo desaparecer."
  ],
  "differential": [
   "h-ansiedade-social",
   "Perturbação do desenvolvimento da fala e da linguagem: afeta a expressão em todos os contextos (CDDR)",
   "Autismo e perturbação do desenvolvimento intelectual: défices de comunicação em todos os contextos (CDDR)",
   "Perturbações psicóticas primárias: perturbação da fala em todos os contextos (CDDR)",
   "Criança que não domina a língua do contexto (CDDR); DSM-5-TR (índice 360): o período silencioso de quem aprende nova língua só justifica mutismo se a compreensão for adequada e a recusa persistir nas duas línguas, em vários contextos e por tempo prolongado",
   "Défice auditivo a excluir primeiro (prática clínica, sem fonte)"
  ],
  "comorbid": [
   "h-ansiedade-social",
   "h-ansiedade-separacao",
   "h-fobia-especifica",
   "perturbações do desenvolvimento da linguagem e da comunicação",
   "autismo (DSM-5-TR, índice 361)",
   "comportamentos de oposição, por vezes limitados às situações que exigem fala (DSM-5-TR, índice 361)"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B06 (pp. 293-295); AACAP, Walter et al., JAACAP 2020;59(10):1107-1124, doi 10.1016/j.jaac.2020.05.005 (comorbilidade com perturbações do desenvolvimento e da comunicação); NICE CG159 (publicada 22/05/2013), https://www.nice.org.uk/guidance/cg159/chapter/Recommendations (1.4.12, mutismo seletivo como dificuldade associada). DSM-5-TR (APA, 2022; índices de página do ficheiro dsm5tr__dsm5tr-completo.pdf.txt), Selective Mutism: critérios (358), evolução (359), diagnóstico diferencial (360), comorbilidade (360-361); código F94.0 (358). Critérios e duração coincidem com a CID-11. Índice de página do .txt do CDDR = página impressa + 18."
 },
 {
  "id": "h-fobia-especifica",
  "name": "Fobia específica",
  "icd11": "6B03",
  "branches": [
   "pre",
   "esc",
   "adol"
  ],
  "core": [
   {
    "domain": "d-ansiedade",
    "level": 2,
    "why": "Medo marcado e desproporcionado de um objeto ou situação específicos, que é evitado"
   }
  ],
  "support": [
   {
    "domain": "d-sono",
    "level": 1,
    "why": "Medo do escuro pode perturbar o adormecer, se for o foco do medo"
   },
   {
    "domain": "d-alimentacao",
    "level": 1,
    "why": "Recusa alimentar por medo de engasgar ou vomitar, se for o foco do medo"
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Explosões ou recusa quando exposto ao estímulo temido"
   },
   {
    "scale": "sdq_emocional",
    "why": "Subescala emocional elevada: inclui medos"
   }
  ],
  "confirm": [
   "Medo ou ansiedade marcados, consistentes, perante o objeto ou a situação específicos (animais, alturas, espaços fechados, sangue ou lesão, tempestades, escuro, procedimentos médicos), desproporcionados ao perigo real, ou na antecipação. DSM-5-TR (índice 361): o medo provoca quase sempre ansiedade imediata e subtipos animal, ambiente natural, sangue-injeção-lesão, situacional e outro (na criança, por exemplo sons altos ou personagens mascaradas).",
   "Objeto ou situação evitados ou suportados com intenso medo; no pré-escolar a resposta pode ser paralisar, birra ou choro.",
   "Persistente: pelo menos vários meses (CID-11) ou tipicamente 6 meses ou mais (DSM-5-TR, índice 361); divergência mantida. Não é medo normativo para a idade (por exemplo medo do escuro em crianças pequenas) nem medo partilhado pela cultura. DSM-5-TR (índice 364): medos excessivos são comuns e transitórios na criança pequena e não dão fobia; a criança exprime-se por choro, birras, imobilidade ou agarrar-se e não compreende o conceito de evitamento, por isso recolher informação de pais e professores e avaliar prejuízo, duração e fase de desenvolvimento. Início habitual antes dos 10 anos, idade mediana 7 a 11; prevalência de cerca de 16% aos 13 a 17 anos (índices 363-364).",
   "Sofrimento significativo ou prejuízo funcional significativo.",
   "Não explicada por outra perturbação (ansiedade social, psicose). DSM-5-TR (índices 366-367): medo de avaliação negativa dá ansiedade social; de separação, ansiedade de separação; por obsessões, TOC; após trauma com critérios completos, PSPT; só do alimento, perturbação alimentar; ataques de pânico só perante o objeto temido não dão pânico; duas ou mais situações agorafóbicas apontam para agorafobia.",
   "Se houve exposição a acontecimento traumático, que a memória é vivida como passada e não como a acontecer de novo (CDDR)."
  ],
  "differential": [
   "h-pstp",
   "h-ansiedade-social",
   "h-toc",
   "h-panico",
   "h-ansiedade-separacao",
   "Agorafobia (6B02; não incluída no catálogo)",
   "Perturbações alimentares, se a evitação se prende com peso ou com qualidades sensoriais do alimento (CDDR)",
   "Perturbação de oposição e desafio: recusa só perante o estímulo temido (CDDR)",
   "Hipocondria, se a evitação de consultas se prende com a preocupação com doença (CDDR)"
  ],
  "comorbid": [
   "h-ansiedade-separacao",
   "h-pag",
   "h-ansiedade-social",
   "h-mutismo-seletivo"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B03 (pp. 280-283); AACAP, Walter et al., JAACAP 2020;59(10):1107-1124, doi 10.1016/j.jaac.2020.05.005. Sem guideline NICE para esta perturbação na criança lida nesta tarefa. DSM-5-TR (APA, 2022; índices de página do ficheiro dsm5tr__dsm5tr-completo.pdf.txt), Specific Phobia: critérios (361), características e evolução (362-364), diagnóstico diferencial (366-367), comorbilidade (367); códigos F40.218, F40.228, F40.23x, F40.248 e F40.298 conforme o subtipo (362). Divergência mantida: duração (CID-11 vários meses; DSM-5-TR tipicamente 6 meses ou mais). Ramo: acrescentado o adolescente (DSM-5-TR, índices 363-364). Sem guideline NICE para esta perturbação na criança lida nesta tarefa. Índice de página do .txt do CDDR = página impressa + 18."
 },
 {
  "id": "h-panico",
  "name": "Perturbação de pânico",
  "icd11": "6B01",
  "branches": [
   "adol"
  ],
  "core": [
   {
    "domain": "d-ansiedade",
    "level": 2,
    "why": "Ataques de pânico recorrentes, com preocupação persistente ou evitamento"
   }
  ],
  "support": [
   {
    "domain": "d-sono",
    "level": 1,
    "why": "Ataques noturnos: acordar em pânico"
   },
   {
    "domain": "d-outros",
    "level": 1,
    "why": "Queixas físicas e idas repetidas à urgência com exames normais"
   },
   {
    "domain": "d-humor",
    "level": 1,
    "why": "No adolescente, risco acrescido de depressão"
   },
   {
    "domain": "d-substancias",
    "level": 1,
    "why": "No adolescente, risco acrescido de consumo de substâncias"
   },
   {
    "risk": "risk-suic",
    "why": "O pânico no adolescente associa-se a depressão e suicidalidade (CDDR)"
   },
   {
    "scale": "sdq_emocional",
    "why": "Subescala emocional elevada: sinal inespecífico"
   }
  ],
  "confirm": [
   "Ataques de pânico recorrentes: episódios discretos de medo intenso com início rápido e simultâneo de vários sintomas (palpitações, suor, tremor, falta de ar, sensação de sufocar, dor no peito, náuseas, tonturas, calafrios, parestesias, despersonalização ou desrealização, medo de perder o controlo ou de morrer). DSM-5-TR (índices 374-375): pico em minutos com 4 ou mais de 13 sintomas; sintomas específicos de cultura (por exemplo acufenos, gritar ou chorar incontroláveis) não contam para os 4.",
   "Pelo menos alguns ataques inesperados, não restritos a estímulos ou situações.",
   "Seguidos de preocupação persistente (por exemplo durante semanas) com a recorrência ou o significado, ou de comportamentos de evitamento. Divergência: DSM-5-TR (índice 375, critério B) exige pelo menos 1 mês de preocupação com novos ataques ou com as suas consequências, ou de mudança desadaptativa do comportamento; a CID-11 dá \"por exemplo várias semanas\".",
   "Os ataques não se limitam a situações que provocam ansiedade no contexto de outra perturbação: ataques só perante o foco de outra perturbação não justificam este diagnóstico. DSM-5-TR (índice 375, critério D): exclui ataques só perante situações sociais, objetos fóbicos, obsessões, lembranças do trauma ou separação.",
   "Prejuízo funcional significativo.",
   "Não explicados por doença médica (por exemplo feocromocitoma) nem por substância (café, cocaína) ou privação.",
   "Muito raro em crianças pequenas; a prevalência aumenta na adolescência (CDDR). DSM-5-TR (índices 377-378): prevalência inferior a 0,4% antes dos 14 anos, a subir na adolescência; início mediano 20 a 24 anos nos EUA; os adolescentes podem falar menos dos ataques e preocupar-se menos com novos ataques do que os jovens adultos."
  ],
  "differential": [
   "h-pag",
   "h-ansiedade-social",
   "h-fobia-especifica",
   "h-ansiedade-separacao",
   "h-toc",
   "h-pstp",
   "h-depressao-major",
   "Agorafobia (6B02; não incluída no catálogo)",
   "Hipocondria",
   "Perturbação de oposição e desafio: recusa só quando a situação desencadeia ansiedade (CDDR)",
   "Causa médica a excluir primeiro: hipertiroidismo, asma, diabetes e hipoglicemia, arritmias, enxaqueca, epilepsia ou outra doença do sistema nervoso (AACAP 2020; CDDR cita hipertiroidismo)",
   "Medicamentos e substâncias que causam ansiedade (broncodilatadores, descongestionantes, esteroides, estimulantes, cafeína, canábis) e privação de nicotina, álcool ou cafeína (AACAP 2020)",
   "Ataque de pânico como especificador (DSM-5-TR, índice 382): ocorre em qualquer perturbação de ansiedade e noutras (depressão, PSPT, substâncias); só há perturbação de pânico se houver ataques inesperados e recorrentes. Na ansiedade de separação os ataques surgem na antecipação da separação (índice 356)."
  ],
  "comorbid": [
   "h-depressao-major",
   "h-pag",
   "h-ansiedade-social",
   "consumo de substâncias",
   "agorafobia",
   "perturbações bipolares (DSM-5-TR, índice 382)"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B01 (pp. 271-275); AACAP, Walter et al., JAACAP 2020;59(10):1107-1124, doi 10.1016/j.jaac.2020.05.005. Sem guideline NICE para esta perturbação na criança lida nesta tarefa. DSM-5-TR (APA, 2022; índices de página do ficheiro dsm5tr__dsm5tr-completo.pdf.txt), Panic Disorder: critérios (374-375), prevalência e evolução (377-378), diagnóstico diferencial (381-382), comorbilidade (382); código F41.0 (lista de classificação do capítulo, índice 47). Divergência mantida: tempo de preocupação após o ataque (DSM-5-TR pelo menos 1 mês; CID-11 por exemplo várias semanas); número de sintomas (DSM-5-TR 4 de 13). Sem guideline NICE para esta perturbação na criança lida nesta tarefa. Índice de página do .txt do CDDR = página impressa + 18."
 },
 {
  "id": "h-toc",
  "name": "Perturbação obsessivo-compulsiva (TOC)",
  "icd11": "6B20",
  "core": [
   {
    "domain": "d-ansiedade",
    "level": 2,
    "why": "Obsessões e/ou compulsões persistentes"
   }
  ],
  "support": [
   {
    "domain": "d-outros",
    "level": 1,
    "why": "Tiques, comportamentos repetitivos centrados no corpo; coexistem com TOC"
   },
   {
    "domain": "d-humor",
    "level": 1,
    "why": "Depressão coexiste com frequência"
   },
   {
    "domain": "d-social",
    "level": 1,
    "why": "Comportamentos repetitivos: diferenciar de autismo"
   },
   {
    "scale": "sdq_emocional",
    "why": "Subescala emocional elevada: sinal inespecífico"
   },
   {
    "risk": "risk-suic",
    "why": "Avaliar risco de suicídio e autolesão, sobretudo se coexiste depressão (NICE CG31 1.4.1.2)"
   }
  ],
  "confirm": [
   "Obsessões: pensamentos, imagens ou impulsos repetitivos e persistentes, vividos como intrusivos e indesejados, com ansiedade, que a criança tenta ignorar, suprimir ou neutralizar. Compulsões: comportamentos ou rituais (incluindo atos mentais) que a criança sente que tem de fazer, segundo regras rígidas ou para sentir que está 'completo'. DSM-5-TR (índices 410-411): igual; a criança pequena pode não conseguir explicar a finalidade dos rituais.",
   "As compulsões não têm ligação realista ao acontecimento temido ou são claramente excessivas.",
   "As obsessões e compulsões ocupam tempo (por exemplo mais de 1 hora por dia) ou causam sofrimento ou prejuízo significativos. DSM-5-TR (índice 411): o limiar de 1 hora por dia é um exemplo e alternativo a sofrimento ou prejuízo; o texto da CID-11 dá o mesmo exemplo.",
   "Na criança pode ser mais fácil avaliar as compulsões do que as obsessões. Não atribuir a rituais e preocupações próprios da idade (transitórios, adequados à idade, que não ocupam tempo nem causam prejuízo). DSM-5-TR (índices 413-414): a maioria das crianças tem obsessões e compulsões; mais obsessões de dano nas crianças e mais sexuais e religiosas nos adolescentes; início médio aos 19,5 anos, 25% antes dos 14 e cerca de 25% dos rapazes antes dos 10.",
   "Início em regra gradual; início súbito justifica avaliação de causa médica (CDDR; a PANDAS é referida como atribuição possível de início abrupto). DSM-5-TR (índices 413-414): habitualmente gradual, pode ser agudo; o início súbito associa-se a agentes infeciosos e a síndrome autoimune pós-infeciosa.",
   "Especificar o nível de insight (bom ou razoável; pobre ou ausente). DSM-5-TR (índices 411-412): bom ou razoável, pobre, ausente ou delirante; especificador \"relacionado com tiques\" se há tiques atuais ou passados (cerca de 30% têm tiques ao longo da vida, sobretudo rapazes com início na infância).",
   "NICE CG31: perguntar diretamente por lavagem, verificação, pensamentos que incomodam, tarefas lentas, ordem e simetria (1.4.1.1); envolver a família e avaliar o impacto dos rituais nos outros e o grau em que os cuidadores participam nos rituais (1.1.4.1); pensamentos intrusivos sexuais, agressivos ou de morte são comuns no TOC e muitas vezes mal interpretados como risco: se houver dúvida, consultar quem tenha experiência em TOC (1.4.1.3). DSM-5-TR (índice 413): a acomodação familiar agrava ou mantém os sintomas, sobretudo nas crianças.",
   "Não decorrente de doença médica, substância ou medicamento."
  ],
  "differential": [
   "h-pag",
   "h-depressao-major",
   "h-fobia-especifica",
   "h-panico",
   "h-ansiedade-social",
   "h-tricotilomania",
   "Autismo: os comportamentos repetitivos não respondem a obsessões nem reduzem ansiedade e há défices de comunicação social (CDDR)",
   "Tiques e síndrome de Tourette: involuntários, sem neutralizar obsessões; podem coexistir (CDDR)",
   "Perturbação do movimento estereotipado (CDDR)",
   "Perturbações alimentares: as obsessões não se limitam ao peso e à imagem corporal (CDDR)",
   "Perturbações psicóticas, se a convicção for delirante e houver outros sintomas psicóticos (CDDR)",
   "Hipocondria; perturbação dismórfica corporal; perturbação de acumulação (CDDR)",
   "Causa médica de início súbito (CDDR)"
  ],
  "comorbid": [
   "tiques e síndrome de Tourette",
   "PHDA",
   "h-depressao-major",
   "h-pag",
   "h-tricotilomania",
   "perturbação dismórfica corporal e de acumulação (adolescentes)"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B20 (pp. 300-307); NICE CG31 (publicada 29/11/2005), https://www.nice.org.uk/guidance/cg31/chapter/Recommendations (1.1.4.1, 1.4.1.1 a 1.4.1.3; segundo releitura-ansiedade.md a atualização está em desenvolvimento, não reverificado aqui); AACAP, Walter et al., JAACAP 2020;59(10):1107-1124, doi 10.1016/j.jaac.2020.05.005 (OCD como diagnóstico diferencial e comorbilidade da ansiedade). DSM-5-TR (APA, 2022; índices de página do ficheiro dsm5tr__dsm5tr-completo.pdf.txt), Obsessive-Compulsive Disorder: critérios (410-411), características e evolução (412-414), diagnóstico diferencial (416-417), comorbilidade (417-418); código F42.2 (410). Critério de tempo (mais de 1 hora por dia, ou sofrimento ou prejuízo) e exclusões coincidem com a CID-11. Índice de página do .txt do CDDR = página impressa + 18."
 },
 {
  "id": "h-tricotilomania",
  "name": "Tricotilomania",
  "icd11": "6B25.0",
  "core": [
   {
    "domain": "d-outros",
    "level": 2,
    "why": "Arrancar cabelo de forma recorrente, com perda capilar"
   }
  ],
  "support": [
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Ansiedade coexiste e o arrancar aumenta com o stress psicológico"
   },
   {
    "domain": "d-humor",
    "level": 1,
    "why": "Depressão coexiste com frequência"
   },
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "Na criança e no adolescente a PHDA coexiste com maior frequência"
   },
   {
    "scale": "sdq_emocional",
    "why": "Subescala emocional elevada: sinal inespecífico"
   }
  ],
  "confirm": [
   "Arrancar cabelo de forma recorrente, tentativas sem êxito de parar ou diminuir, e perda de cabelo significativa. DSM-5-TR (índice 430, critérios A e B): igual; aceita arrancar em padrão disperso, sem perda claramente visível, e tentativas de ocultar a perda.",
   "Sofrimento significativo ou prejuízo funcional significativo (pessoal, familiar, social, escolar). DSM-5-TR (índice 431): o sofrimento inclui perda de controlo, embaraço e vergonha; o prejuízo pode vir do evitamento da escola ou de situações públicas.",
   "Confirmar a perda por observação direta ou exame; se não for possível, informação de pessoa conhecedora ou de médico que tenha examinado.",
   "Locais mais comuns: couro cabeludo, sobrancelhas e pestanas; perguntar por tricofagia (ingestão do cabelo), que pode causar sintomas gastrointestinais graves. DSM-5-TR (índices 430-431): couro cabeludo, sobrancelhas e pálpebras; rituais com o cabelo (examinar, enrolar, morder, engolir).",
   "Nas crianças e adolescentes o arrancar é mais frequentemente automático, fora da consciência; na adolescência é mais frequente o arrancar focado, precedido de impulso e seguido de alívio. DSM-5-TR (índices 431-432): os estilos focado e automático misturam-se muitas vezes; em bebés o arrancar pode ocorrer e costuma resolver-se; o início mais comum coincide com a puberdade ou é posterior.",
   "Puxar ocasional, enrolar ou brincar com o cabelo, morder ou rasgar o cabelo não qualificam. DSM-5-TR (índice 433): remoção só por motivo estético não conta.",
   "Não explicada por doença dermatológica (biópsia ou dermatoscopia diferenciam) nem por delírio ou alucinação. DSM-5-TR (índices 432-433): em quem nega arrancar, considerar alopecias (areata, androgenética, efluvio telógeno, cicatriciais); a biópsia ou a dermatoscopia distinguem."
  ],
  "differential": [
   "h-toc",
   "Perturbação do movimento estereotipado: início mais precoce, movimentos coordenados e previsíveis (CDDR) (DSM-5-TR, índice 433: arrancar cabelo, por exemplo quando frustrada, em criança com deficiência intelectual ou autismo é movimento estereotipado)",
   "Perturbação dismórfica corporal (remoção de pelos por aparência) (CDDR)",
   "Perturbações psicóticas, se o arrancar responde a delírio ou alucinação (CDDR)",
   "Doença dermatológica do folículo piloso a excluir primeiro (CDDR)",
   "TOC com preocupações de simetria e perturbação dismórfica corporal: remoção de pelos como ritual ou por os achar feios não é tricotilomania (DSM-5-TR, índice 433)",
   "Substâncias: estimulantes podem agravar o arrancar, mas raramente são a causa primária (DSM-5-TR, índice 433)"
  ],
  "comorbid": [
   "perturbação de escoriação e outros comportamentos repetitivos centrados no corpo (por exemplo roer unhas)",
   "h-toc",
   "h-depressao-major",
   "h-pag",
   "PHDA"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B25 e 6B25.0 (pp. 327-330); DSM-5-TR (APA, 2022; índices de página do ficheiro dsm5tr__dsm5tr-completo.pdf.txt), Trichotillomania (Hair-Pulling Disorder): critérios (430), características e evolução (430-432), diagnóstico diferencial (433), comorbilidade (433; as mais comuns são depressão major e escoriação); código F63.3 (430). Critérios coincidem com a CID-11. Sem guideline lida para esta perturbação: prática clínica (sem fonte). Ver também item do-12 e do-21 (domínio Outros). Índice de página do .txt do CDDR = página impressa + 18."
 },
 {
  "id": "h-pstp",
  "name": "Perturbação de stress pós-traumático (PSPT)",
  "icd11": "6B40",
  "core": [
   {
    "domain": "d-trauma",
    "level": 2,
    "why": "Exposição a acontecimento ameaçador ou horrível, com sintomas que se mantêm"
   }
  ],
  "support": [
   {
    "domain": "d-sono",
    "level": 1,
    "why": "Pesadelos e terrores noturnos ligados ao acontecimento; dificuldade em dormir"
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Hipervigilância, sobressalto, ansiedade perante lembranças"
   },
   {
    "domain": "d-humor",
    "level": 1,
    "why": "Disforia, culpa, vergonha, raiva, retraimento social"
   },
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "Dificuldade de concentração e inquietação (NICE NG116 1.1.1, 1.1.6)"
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Irritabilidade, problemas de comportamento; na criança, reencenação"
   },
   {
    "domain": "d-substancias",
    "level": 1,
    "why": "No adolescente, consumo para evitar re-experienciar ou gerir emoções"
   },
   {
    "scale": "sdq_emocional",
    "why": "Subescala emocional elevada: sinal inespecífico"
   },
   {
    "risk": "risk-mt",
    "why": "Suspeita de maus-tratos ou negligência: exposição que pode explicar o quadro"
   },
   {
    "risk": "risk-suic",
    "why": "Ideação suicida pode acompanhar o PSPT (CDDR)"
   },
   {
    "risk": "risk-auto",
    "why": "Autolesão e comportamentos de risco ocorrem em taxas elevadas no adolescente"
   }
  ],
  "confirm": [
   "Exposição a acontecimento ou situação (breve ou prolongado) extremamente ameaçador ou horrível: vivido diretamente, testemunhado (lesão ou morte súbita, violenta) ou conhecimento de morte súbita, inesperada ou violenta de pessoa querida. A exposição por si só não indica PSPT. DSM-5-TR (índices 456 e 458): o critério A é morte ou ameaça de morte, lesão grave ou violência sexual; saber da morte de familiar ou amigo próximo só conta se for violenta ou acidental; até aos 6 anos conta testemunhar, sobretudo o que acontece aos cuidadores principais, ou saber que aconteceu a um progenitor ou cuidador; exposição por meios eletrónicos não conta, salvo por trabalho.",
   "Síndrome com os 3 elementos, com duração de pelo menos várias semanas: (1) re-experienciar no presente, não só recordar (memórias ou imagens intrusivas, flashbacks, pesadelos ligados ao acontecimento; ruminar não chega); (2) evitamento deliberado de lembranças internas ou externas; (3) perceção persistente de ameaça atual (hipervigilância, sobressalto aumentado). Divergência: o DSM-5-TR (índices 456-459) exige mais de 1 mês e quatro grupos de sintomas: intrusão (pelo menos 1), evitamento (pelo menos 1), alterações negativas de cognições e humor (pelo menos 2) e alterações de ativação e reatividade (pelo menos 2); a CID-11 pede os 3 elementos nucleares durante pelo menos várias semanas, sem o grupo de cognições e humor.",
   "Prejuízo funcional significativo, ou funcionamento só mantido com esforço adicional.",
   "Idade pré-escolar (menos de 6 anos): basear-se no relato dos cuidadores sobre sintomas comportamentais: reencenação em jogo repetitivo ou desenho, sonhos assustadores sem conteúdo claro, terrores noturnos, impulsividade invulgar; menos específicos podem surgir birras, ansiedade de separação, regressão, medos exagerados. A criança pode não parecer aflita ao falar ou brincar o acontecimento. DSM-5-TR (índices 458-459): critérios próprios até aos 6 anos (intrusão pelo menos 1; evitamento ou alterações cognitivas pelo menos 1; ativação pelo menos 2; mais de 1 mês); as memórias intrusivas podem não parecer aflitivas; a regressão do desenvolvimento, por exemplo perda da linguagem, é característica associada (índice 464).",
   "Crianças e adolescentes: relutância em relatar; pode ser preciso apoiar-se em mudanças de comportamento, reencenação ou evitamento visível; podem negar aflição ou referir emoções não angustiantes.",
   "Reação aguda normal que começa a diminuir em cerca de 1 semana após o fim do acontecimento (cerca de 1 mês se o stressor continua) não é perturbação (CDDR). NICE NG116 1.1.6: aconselhar os pais a contactar o médico de família se os sintomas persistirem além de 1 mês. DSM-5-TR (índices 457 e 470-472): o PSPT exige mais de 1 mês; entre 3 dias e 1 mês, com 9 de 14 sintomas, é perturbação de stress agudo (a CID-11 não a considera perturbação).",
   "DSM-5-TR (índice 458): especificadores \"com sintomas dissociativos\" (despersonalização ou desrealização persistentes ou recorrentes, não atribuíveis a substância ou condição médica) e \"com expressão retardada\" (critérios completos só 6 meses ou mais depois do acontecimento).",
   "Perguntar de forma específica por re-experienciação, evitamento, hiperativação, dissociação, alterações do humor e do pensamento e prejuízo funcional (NICE NG116 1.1.3), com exemplos concretos de acontecimentos (1.1.4), incluindo abuso na infância e violência doméstica (1.1.2).",
   "Que os sintomas surgiram após o acontecimento; outras perturbações (depressão, ansiedade, substâncias, dissociação) são comuns depois de trauma, muitas vezes sem PSPT (CDDR). DSM-5-TR (índice 469): se a resposta cumprir os critérios de outra perturbação, diagnostica-se essa em vez de, ou além do, PSPT."
  ],
  "differential": [
   "h-pstp-complexo",
   "h-adaptacao",
   "h-luto-prolongado",
   "h-depressao-major",
   "h-fobia-especifica",
   "h-panico",
   "h-ansiedade-separacao",
   "h-pag",
   "h-toc",
   "PHDA: a ansiedade e o trauma causam inquietação, distração e irritabilidade (NICE NG116 1.1.1); DSM-5-TR (índice 469): na PHDA o início é antes dos 12 anos; no PSPT, depois do acontecimento",
   "Psicose: flashbacks graves com qualidade alucinatória, hipervigilância que parece paranoide e pseudoalucinações não são evidência de perturbação psicótica (CDDR)",
   "Perturbações dissociativas: só se os sintomas dissociativos ocorrerem fora dos episódios de re-experienciação (CDDR)",
   "Reação aguda ao stress (QE84): não é perturbação; começa a diminuir em dias (CDDR); DSM-5-TR (índices 470-472): perturbação de stress agudo, de 3 dias a 1 mês após a exposição",
   "Epilepsia e outras causas neurológicas de olhar parado, amnésia ou confusão (prática clínica, sem fonte)",
   "Traumatismo craniano (por exemplo no abuso físico): desorientação e confusão persistentes são mais específicas do traumatismo; reexperienciação e evitamento são do PSPT (DSM-5-TR, índice 470)"
  ],
  "comorbid": [
   "h-depressao-major",
   "h-pag",
   "h-panico",
   "consumo de substâncias",
   "perturbações dissociativas",
   "PHDA",
   "h-pstp-complexo"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B40 (pp. 339-344); NICE NG116 (publicada 05/12/2018), https://www.nice.org.uk/guidance/ng116/chapter/Recommendations (1.1.1 a 1.1.6). AACAP 2010 não citada: a cópia lida tem rodapé de 1998 'not for distribution or citation'. DSM-5-TR (APA, 2022; índices de página do ficheiro dsm5tr__dsm5tr-completo.pdf.txt), Posttraumatic Stress Disorder: critérios para mais de 6 anos (455-458) e até 6 anos (458-459), características e evolução (463-465), diagnóstico diferencial (468-470), comorbilidade (470); código F43.10 (455). Divergências mantidas: duração (CID-11 pelo menos várias semanas; DSM-5-TR mais de 1 mês) e estrutura (CID-11 3 elementos; DSM-5-TR 4 grupos). O NG116 não distingue critérios CID-11 ou DSM. Índice de página do .txt do CDDR = página impressa + 18."
 },
 {
  "id": "h-pstp-complexo",
  "name": "Perturbação de stress pós-traumático complexo (PSPT complexo)",
  "icd11": "6B41",
  "core": [
   {
    "domain": "d-trauma",
    "level": 2,
    "why": "Exposição prolongada ou repetida a trauma de que é difícil ou impossível escapar"
   }
  ],
  "support": [
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Desregulação afetiva: explosões, comportamento imprudente ou autodestrutivo, agressividade"
   },
   {
    "domain": "d-humor",
    "level": 1,
    "why": "Crenças de ser diminuído ou sem valor, vergonha, culpa; entorpecimento emocional"
   },
   {
    "domain": "d-social",
    "level": 1,
    "why": "Dificuldade persistente em manter relações e sentir proximidade; diferenciar de autismo"
   },
   {
    "domain": "d-sono",
    "level": 1,
    "why": "Pesadelos e perturbação do sono ligados ao trauma"
   },
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "Dificuldades cognitivas (atenção, planeamento, organização) mais frequentes nestas crianças"
   },
   {
    "domain": "d-substancias",
    "level": 1,
    "why": "No adolescente, consumo e comportamentos de risco como expressão da desregulação"
   },
   {
    "scale": "sdq_colegas",
    "why": "Problemas com os colegas elevados: dificuldades relacionais"
   },
   {
    "risk": "risk-mt",
    "why": "Maus-tratos ou negligência prolongados: exposição característica"
   },
   {
    "risk": "risk-auto",
    "why": "Autolesão não suicida e comportamentos de risco são mais evidentes no adolescente"
   },
   {
    "risk": "risk-suic",
    "why": "Ideação e comportamento suicida podem estar presentes (CDDR)"
   }
  ],
  "confirm": [
   "Exposição a acontecimento ou série de acontecimentos extremamente ameaçadores ou horríveis, em regra prolongados ou repetidos e de que escapar é difícil ou impossível (por exemplo abuso físico ou sexual repetido na infância, violência doméstica prolongada).",
   "Todos os elementos do PSPT, com duração de pelo menos várias semanas: re-experienciar no presente, evitamento de lembranças, perceção persistente de ameaça atual (no PSPT complexo o sobressalto pode estar diminuído).",
   "Mais 3 elementos: (1) problemas graves e pervasivos de regulação afetiva (reatividade a stressores mínimos, explosões, comportamento imprudente ou autodestrutivo, dissociação sob stress, entorpecimento emocional); (2) crenças persistentes de ser diminuído, derrotado ou sem valor, com vergonha, culpa ou sensação de falhanço ligadas ao stressor; (3) dificuldades persistentes em manter relações e sentir proximidade.",
   "Prejuízo funcional significativo.",
   "Na criança: regressão, comportamento imprudente ou agressivo contra si ou os outros, dificuldades com pares, dissociação ou supressão emocional; no adolescente: consumo, comportamentos de risco, autolesão não suicida e agressividade. Quando o cuidador é a fonte do trauma, pode haver vinculação desorganizada (alternância de necessidade, rejeição e agressão) (CDDR).",
   "Na criança com menos de 5 anos, a perturbação reativa da vinculação ou da relação social desinibida podem coexistir (CDDR).",
   "Diagnósticos adicionais só se os sintomas não forem totalmente explicados pelo PSPT complexo e se cumprirem todos os critérios (CDDR).",
   "Perguntar de forma específica pelas várias áreas de sintomas e por exposição a trauma (NICE NG116 1.1.1 a 1.1.4).",
   "O DSM-5-TR não tem esta categoria: só refere, como características associadas após trauma prolongado e repetido (por exemplo abuso na infância), dificuldades de regulação emocional e de relações estáveis e sintomas dissociativos (índice 464), e que o PSPT pode ser mais grave ou duradouro se o stressor for interpessoal e intencional (índice 460). Um quadro destes, sem o complexo, diagnostica-se como PSPT no DSM-5-TR."
  ],
  "differential": [
   "h-pstp",
   "h-depressao-major",
   "h-vinculacao-reativa",
   "h-relacao-social-desinibida",
   "Perturbação de personalidade (padrão borderline): no PSPT complexo há evitamento de lembranças e ameaça atual, autoimagem negativa estável e suicidalidade menos frequente e menos impulsiva (CDDR; a categoria de personalidade não consta do catálogo)",
   "PHDA",
   "Perturbação de oposição e desafio e perturbação do comportamento",
   "Psicose (CDDR, como no PSPT)"
  ],
  "comorbid": [
   "h-depressao-major",
   "perturbações alimentares",
   "perturbações do sono",
   "PHDA",
   "perturbação de oposição e desafio",
   "perturbação do comportamento",
   "h-ansiedade-separacao",
   "h-vinculacao-reativa",
   "h-relacao-social-desinibida"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B41 (pp. 344-348, mais PSPT pp. 339-344); NICE NG116 (publicada 05/12/2018), https://www.nice.org.uk/guidance/ng116/chapter/Recommendations (1.1.1 a 1.1.4, 1.2.4). AACAP 2010 não citada (cópia lida é de 1998, não citável). DSM-5-TR (APA, 2022; índices de página do ficheiro dsm5tr__dsm5tr-completo.pdf.txt), Posttraumatic Stress Disorder (455-470): confirmado que não há PSPT complexo; ver características associadas (464) e fatores de gravidade (460). Categoria só da CID-11 (6B41); o resto dos critérios desta entrada vem do CDDR. Índice de página do .txt do CDDR = página impressa + 18."
 },
 {
  "id": "h-adaptacao",
  "name": "Perturbação de adaptação",
  "icd11": "6B43",
  "core": [
   {
    "domain": "d-trauma",
    "level": 1,
    "why": "Stressor identificável, de qualquer gravidade, e reação mal-adaptada"
   }
  ],
  "support": [
   {
    "domain": "d-humor",
    "level": 1,
    "why": "Sintomas depressivos e ruminação sobre o stressor"
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Preocupação excessiva e sintomas ansiosos"
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Comportamento oposicional, birras, irritabilidade, agir sem pensar"
   },
   {
    "domain": "d-sono",
    "level": 1,
    "why": "Alterações do sono, se persistirem cerca de 1 mês"
   },
   {
    "domain": "d-outros",
    "level": 1,
    "why": "Queixas somáticas e regressão (por exemplo enurese) na criança"
   },
   {
    "domain": "d-substancias",
    "level": 1,
    "why": "No adolescente, consumo e comportamentos de risco"
   }
  ],
  "confirm": [
   "Reação mal-adaptada a stressor ou stressores identificáveis (acontecimento único, dificuldade continuada ou combinação), que habitualmente surge no prazo de 1 mês, podendo atrasar (por exemplo 3 meses). DSM-5-TR (índice 477, critério A): início até 3 meses após o stressor (CID-11: habitualmente cerca de 1 mês).",
   "Preocupação com o stressor ou as suas consequências: preocupação excessiva, pensamentos recorrentes e angustiantes, ruminação. Na criança, expressa muitas vezes por queixas somáticas, comportamento disruptivo ou oposicional, hiperatividade, birras, problemas de concentração, irritabilidade, maior agarramento; regressão, enurese e perturbações do sono se persistirem cerca de 1 mês.",
   "Os sintomas resolvem em 6 meses depois de terminados o stressor e as suas consequências; se persistirem além disso, considerar outro diagnóstico. DSM-5-TR (índices 478-479, critério E): igual; o especificador \"agudo\" indica menos de 6 meses e \"persistente\" 6 meses ou mais, quando o stressor é crónico ou tem consequências duradouras.",
   "Prejuízo funcional significativo, ou funcionamento só mantido com esforço adicional; reações emocionais a acontecimentos negativos sem estes requisitos não são perturbação. DSM-5-TR (índice 477, critério B): sofrimento desproporcionado à gravidade do stressor, tendo em conta o contexto e a cultura, ou prejuízo significativo.",
   "Funcionamento normal antes do stressor; considerar a relação temporal entre stressor e início e a mudança face ao funcionamento anterior.",
   "Diagnóstico de exclusão: se a reação cumprir os critérios de depressão major ou de PSPT, diagnostica-se esse, mesmo com stressor identificável; não se atribui se outra perturbação (humor, ansiedade generalizada, ansiedade de separação, autismo, TOC) explica os sintomas. DSM-5-TR (índices 477 e 480-481): não cumpre os critérios de outra perturbação, não é mera exacerbação de perturbação prévia, não é luto normal nem luto prolongado; o stressor pode ter qualquer gravidade.",
   "NICE NG134 1.3.7 a 1.3.10: perante acontecimento isolado (luto, separação dos pais), avaliar risco de depressão e oferecer apoio; em regra não referenciar se não houver outros fatores de risco.",
   "Subtipos do DSM-5-TR (índice 478): com humor deprimido (F43.21), com ansiedade (F43.22), com ansiedade e humor deprimido (F43.23), com perturbação do comportamento (F43.24), com perturbação das emoções e do comportamento (F43.25) e não especificado (F43.20)."
  ],
  "differential": [
   "h-depressao-major",
   "h-pstp",
   "h-pag",
   "h-ansiedade-separacao",
   "h-luto-prolongado",
   "Reação aguda ao stress (QE84): reação normal, começa a diminuir em cerca de 1 semana (1 mês se o stressor continua) (CDDR)",
   "Reação normal ao stressor, sem prejuízo significativo",
   "Outra perturbação mental, incluindo autismo, que explique os sintomas (CDDR)",
   "Luto: sofrimento desproporcionado ou prejuízo após uma morte pode ser perturbação de adaptação; com mais de 12 meses após a morte (6 em crianças e adolescentes) considerar luto prolongado (DSM-5-TR, índices 481-482)"
  ],
  "comorbid": [
   "fobia específica e perturbação de pânico (sintomatologia não sobreposta, curso distinguível) (CDDR)",
   "outras perturbações mentais e doenças médicas, desde que a outra perturbação não explique os sintomas da reação ao stressor (DSM-5-TR, índice 481)"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B43 (pp. 352-354); NICE NG134 (publicada 25/06/2019), https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (1.3.7 a 1.3.10). Sem guideline NICE para esta perturbação na criança lida nesta tarefa. DSM-5-TR (APA, 2022; índices de página do ficheiro dsm5tr__dsm5tr-completo.pdf.txt), Adjustment Disorders: critérios e subtipos (477-479), diagnóstico diferencial (480-481), comorbilidade (481); códigos F43.20 a F43.25 (478). Divergência mantida: início (CID-11 habitualmente cerca de 1 mês; DSM-5-TR até 3 meses). Sem guideline NICE para esta perturbação na criança lida nesta tarefa. Índice de página do .txt do CDDR = página impressa + 18."
 },
 {
  "id": "h-luto-prolongado",
  "name": "Perturbação de luto prolongado",
  "icd11": "6B42",
  "core": [
   {
    "domain": "d-trauma",
    "level": 1,
    "why": "Morte de pessoa próxima com resposta de luto que se mantém"
   }
  ],
  "support": [
   {
    "domain": "d-humor",
    "level": 1,
    "why": "Tristeza, culpa, raiva, incapacidade de sentir humor positivo, entorpecimento"
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Preocupação de que outros morram ou ansiedade de separação centrada nos cuidadores"
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Raiva expressa como irritabilidade, protesto, birras, oposição"
   },
   {
    "domain": "d-sono",
    "level": 1,
    "why": "Perturbação do sono, se presente"
   },
   {
    "domain": "d-alimentacao",
    "level": 1,
    "why": "Na criança pequena o luto pode manifestar-se por perturbações do sono, da alimentação, digestivas e da energia (DSM-5-TR, índice 484)"
   },
   {
    "risk": "risk-suic",
    "why": "Ideação suicida pode estar aumentada (CDDR)"
   },
   {
    "domain": "d-substancias",
    "level": 1,
    "why": "No adolescente, aumento do consumo de substâncias (CDDR)"
   }
  ],
  "confirm": [
   "Morte de parceiro, progenitor, filho ou outra pessoa próxima.",
   "Resposta de luto persistente e pervasiva: saudade da pessoa ou preocupação persistente com ela, com dor emocional intensa (tristeza, culpa, raiva, negação, culpabilização, dificuldade em aceitar a morte, sentir que perdeu uma parte de si, incapacidade de sentir humor positivo, entorpecimento, dificuldade em envolver-se em atividades). DSM-5-TR (índice 482, critérios B e C): saudade intensa ou preocupação com o falecido (na criança pode incidir nas circunstâncias da morte), mais 3 de 8 sintomas (por exemplo rutura da identidade, descrença, dor intensa, entorpecimento, solidão), quase todos os dias no último mês.",
   "Duração atipicamente longa, que excede claramente as normas sociais, culturais ou religiosas; respostas com menos de 6 meses, ou mais tempo em certas culturas, não contam. Divergência: o DSM-5-TR (índices 481-482, critério A) exige pelo menos 12 meses desde a morte em adultos e pelo menos 6 meses em crianças e adolescentes, e que a duração e a gravidade excedam claramente as normas culturais; a CID-11 fixa 6 meses sem distinguir a idade.",
   "Prejuízo funcional significativo.",
   "Em crianças e adolescentes: a perda de uma figura de vinculação pode provocar resposta intensa e prolongada que deve ser considerada normal; diagnosticar com cautela. Nas crianças, a saudade pode expressar-se no jogo, em esperar que a pessoa regresse, em voltar aos locais onde a viram, em medo de que outros morram; reações podem ser retriggered ao longo do desenvolvimento. DSM-5-TR (índices 484-485): o sofrimento exprime-se no jogo e no comportamento, com regressões e protesto na separação e no reencontro; a perda do cuidador principal é particularmente traumática na criança pequena, que pode procurar o falecido; somatização (sono, alimentação, digestão, energia); nos mais velhos, desistir de aspirações ou indiferença ao risco; risco acrescido com morte violenta ou inesperada e com menor disponibilidade de cuidadores (índice 485).",
   "Considerar o contexto: mudança de ambiente, forma como os cuidadores lidam com a perda e a comunicação na família (CDDR).",
   "NICE NG134 1.3.7 a 1.3.10: após perda isolada avaliar o risco de depressão e oferecer apoio; referenciar se houver outros fatores de risco.",
   "DSM-5-TR (índices 482 e 486-487): não é melhor explicado por depressão major ou PSPT, substância ou condição médica; a intensificação do luto em aniversários e datas de lembrança não prova, só por si, a perturbação."
  ],
  "differential": [
   "h-depressao-major",
   "h-pstp",
   "h-adaptacao",
   "h-ansiedade-separacao",
   "Luto normal dentro do período esperado para a cultura e a religião (CDDR); DSM-5-TR (índice 487): alucinações ou sensação de presença do falecido são comuns no luto normal; só há psicose se existirem outros sintomas psicóticos"
  ],
  "comorbid": [
   "h-depressao-major",
   "h-pstp",
   "h-ansiedade-separacao",
   "consumo de substâncias"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B42 (pp. 348-351); NICE NG134 (publicada 25/06/2019), https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (1.3.7 a 1.3.10). Sem guideline lida específica de luto prolongado na criança. DSM-5-TR (APA, 2022; índices de página do ficheiro dsm5tr__dsm5tr-completo.pdf.txt), Prolonged Grief Disorder: critérios (481-482), características e evolução na criança (483-485), diagnóstico diferencial (486-487), comorbilidade (487); código F43.8 (lista de classificação do capítulo, índice 49). Divergência mantida: duração (DSM-5-TR 12 meses em adultos e 6 em crianças e adolescentes, mais 3 de 8 sintomas; CID-11 6 meses em todas as idades, sem número de sintomas). Sem guideline lida específica de luto prolongado na criança. Índice de página do .txt do CDDR = página impressa + 18."
 },
 {
  "id": "h-vinculacao-reativa",
  "name": "Perturbação reativa da vinculação",
  "icd11": "6B44",
  "branches": [
   "pre",
   "esc"
  ],
  "core": [
   {
    "domain": "d-trauma",
    "level": 2,
    "why": "História de cuidados gravemente insuficientes: negligência, maus-tratos, mudanças de cuidadores ou institucionalização"
   }
  ],
  "support": [
   {
    "domain": "d-social",
    "level": 1,
    "why": "Retraimento emocional inibido, em todos os contextos; diferenciar de autismo"
   },
   {
    "domain": "d-humor",
    "level": 1,
    "why": "Pouco afeto positivo e episódios de irritabilidade, tristeza ou medo sem causa aparente"
   },
   {
    "scale": "sdq_colegas",
    "why": "Problemas com os colegas elevados: dificuldades de relação"
   },
   {
    "risk": "risk-mt",
    "why": "Negligência ou maus-tratos: exposição característica; confirmar o procedimento local de sinalização"
   }
  ],
  "confirm": [
   "História de cuidados grosseiramente insuficientes: desrespeito persistente pelas necessidades emocionais (conforto, estimulação, afeto) ou físicas, mudanças repetidas do cuidador principal, criação em ambientes que impedem vinculação seletiva estável (por exemplo instituições) ou maus-tratos.",
   "Padrão persistente e pervasivo de comportamento inibido e emocionalmente retraído para com os cuidadores adultos, com os dois: procura mínima de conforto quando aflita e resposta rara ou mínima ao conforto oferecido. DSM-5-TR (índices 448-449, critério B): exige ainda perturbação social e emocional persistente, com pelo menos 2 de 3: responsividade mínima aos outros, afeto positivo limitado, episódios de irritabilidade, tristeza ou medo sem causa nos contactos não ameaçadores com cuidadores.",
   "Os cuidados insuficientes presumem-se responsáveis pelo padrão; sintomas evidentes antes dos 5 anos. DSM-5-TR (índices 449-450): idem; manifesta-se de forma semelhante entre os 9 meses e os 5 anos, com mais de 5 anos diagnosticar com cautela; especificador \"persistente\" se há mais de 12 meses.",
   "A criança atingiu o nível de desenvolvimento em que se formam vinculações seletivas (idade cronológica de cerca de 1 ano ou idade de desenvolvimento de pelo menos 9 meses). DSM-5-TR (índice 449, critério G): idade de desenvolvimento de pelo menos 9 meses.",
   "Não explicado por autismo; não confinado a uma relação diádica específica (observar com mais de um cuidador). DSM-5-TR (índices 449-451, critério E): exclui autismo, distinguido pela história de negligência, ausência de interesses restritos e comportamentos ritualizados e presença de comportamentos de vinculação seletiva; na deficiência intelectual a criança com idade cognitiva de 7 a 9 meses já mostra vinculações seletivas; na depressão a criança continua a procurar e a responder ao conforto.",
   "A redução transitória de comportamentos de vinculação é normal; a perturbação persiste, abrange todas as situações sociais e não se limita a um cuidador (CDDR).",
   "NICE NG26: avaliação completa antes de qualquer intervenção, incluindo história de colocações, sensibilidade parental, maus-tratos e trauma, saúde física e problemas de saúde mental coexistentes (1.3.2); só diagnosticar se cumprir os critérios DSM-5 ou CID-10 (1.3.6; o NG26 é anterior à CID-11).",
   "DSM-5-TR (índice 450): a negligência social grave é o único fator de risco conhecido e menos de 10% das crianças negligenciadas desenvolvem a perturbação; com cuidados normativos pode haver recuperação."
  ],
  "differential": [
   "h-relacao-social-desinibida",
   "h-pstp-complexo",
   "h-ansiedade-social",
   "h-depressao-major",
   "Autismo: a criança tem capacidade de iniciar e manter comunicação e reciprocidade social; o 'quase-autismo' da privação grave melhora em ambiente nutritivo (CDDR)",
   "Perturbação do desenvolvimento intelectual: forma vinculações seletivas ao nível do desenvolvimento (CDDR)",
   "Depressão na criança pequena: reduz o afeto positivo, mas a criança deve procurar e responder ao conforto (DSM-5-TR, índice 451)"
  ],
  "comorbid": [
   "h-pstp",
   "h-pstp-complexo",
   "h-depressao-major",
   "PHDA (relação sugerida, não estabelecida; DSM-5-TR, índice 452)",
   "perturbações do comportamento (relação sugerida, não estabelecida; DSM-5-TR, índice 452)",
   "atrasos cognitivos e de linguagem, estereotipias e desnutrição (DSM-5-TR, índice 452)",
   "h-pag"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B44 (pp. 355-357); NICE NG26 (publicada 25/11/2015), https://www.nice.org.uk/guidance/ng26/chapter/Recommendations (1.3.2, 1.3.6). DSM-5-TR (APA, 2022; índices de página do ficheiro dsm5tr__dsm5tr-completo.pdf.txt), Reactive Attachment Disorder: critérios (448-449), evolução e fatores de risco (450), diagnóstico diferencial (450-451), comorbilidade (452); código F94.1 (448). Critérios coincidem com a CID-11 (o DSM-5-TR acrescenta o critério B de perturbação social e emocional e o especificador \"persistente\"; a CID-11 acrescenta que não se confina a uma relação diádica). O NG26 refere DSM-5 e CID-10 (1.3.6). Sem tratamento nesta entrada. Índice de página do .txt do CDDR = página impressa + 18."
 },
 {
  "id": "h-relacao-social-desinibida",
  "name": "Perturbação da relação social desinibida (desinibição no envolvimento social)",
  "icd11": "6B45",
  "branches": [
   "pre",
   "esc"
  ],
  "core": [
   {
    "domain": "d-trauma",
    "level": 2,
    "why": "História de cuidados gravemente insuficientes, com comportamento indiscriminado perante adultos desconhecidos"
   }
  ],
  "support": [
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Impulsividade geral, sobretudo nas crianças mais velhas"
   },
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "Desatenção e hiperatividade; a PHDA coexiste com frequência"
   },
   {
    "scale": "sdq_hiperatividade",
    "why": "Subescala de hiperatividade elevada: sinal de apoio, não critério"
   },
   {
    "domain": "d-social",
    "level": 1,
    "why": "Violação de limites sociais com adultos desconhecidos; diferenciar de autismo ou défice intelectual"
   },
   {
    "risk": "risk-mt",
    "why": "Negligência ou maus-tratos: exposição característica; também risco de ir com desconhecidos"
   }
  ],
  "confirm": [
   "História de cuidados grosseiramente insuficientes (desrespeito persistente pelas necessidades emocionais e físicas, mudanças repetidas de cuidador, instituições, maus-tratos).",
   "Padrão persistente e pervasivo de comportamento social marcadamente anormal, com pouca ou nenhuma reserva em abordar e interagir com adultos desconhecidos, com um ou mais de: comportamento demasiado familiar com violação de limites físicos e verbais (por exemplo procurar conforto em desconhecidos, perguntas inadequadas à idade); pouca ou nenhuma verificação do cuidador depois de se afastar, mesmo em locais novos; disposição para ir com um adulto desconhecido com pouca ou nenhuma hesitação. Divergência: o DSM-5-TR (índice 452, critérios A e B) exige pelo menos 2 de 4 comportamentos (reticência reduzida ou ausente com adultos desconhecidos, comportamento demasiado familiar, não verificar o cuidador, disponibilidade para ir com um desconhecido) que não se limitem à impulsividade; a CID-11 exige a reticência reduzida ou ausente e pelo menos 1 dos 3 restantes.",
   "Sintomas evidentes antes dos 5 anos; a criança atingiu o nível de desenvolvimento em que se formam vinculações seletivas (cerca de 1 ano ou 9 meses de idade de desenvolvimento). O DSM-5-TR (índice 453, critério E) não exige início antes dos 5 anos: pede só idade de desenvolvimento de pelo menos 9 meses e tem o especificador \"persistente\" (mais de 12 meses).",
   "Não explicado melhor por outra perturbação (por exemplo PHDA); distinguir da extroversão própria do temperamento: o que distingue é o carácter disfuncional e a história de cuidados insuficientes. DSM-5-TR (índice 455): distingue-se da PHDA com impulsividade social porque na DSED não há problemas de atenção nem hiperatividade; as duas coocorrem com frequência.",
   "Pode persistir após cuidados adequados e coexistir com vinculações seletivas; mais persistente em quem viveu longamente em instituições (CDDR). DSM-5-TR (índices 454-455): alguns mantêm sinais da perturbação até à adolescência e à idade adulta, mesmo em ambiente normativo.",
   "NICE NG26: avaliação completa antes de qualquer intervenção (1.3.2); só diagnosticar se cumprir os critérios DSM-5 ou CID-10 (1.3.6).",
   "A disposição para ir com desconhecidos é um risco de segurança: ver triagem de maus-tratos."
  ],
  "differential": [
   "h-vinculacao-reativa",
   "h-pstp-complexo",
   "PHDA: pode coexistir e ambas ser diagnosticadas (CDDR); DSM-5-TR (índice 455): distingue-se pela ausência de problemas de atenção e de hiperatividade",
   "Perturbação do desenvolvimento intelectual: comportamento social em linha com o nível de desenvolvimento (CDDR)",
   "Lesão cerebral ou síndromes neurológicos (síndrome de Williams, síndrome alcoólico fetal): sociabilidade indiscriminada com características clínicas confirmatórias, em regra sem história de cuidados insuficientes (CDDR)"
  ],
  "comorbid": [
   "PHDA",
   "h-pstp",
   "h-pstp-complexo",
   "perturbações do comportamento",
   "autismo"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B45 (pp. 358-360); NICE NG26 (publicada 25/11/2015), https://www.nice.org.uk/guidance/ng26/chapter/Recommendations (1.3.2, 1.3.6). DSM-5-TR (APA, 2022; índices de página do ficheiro dsm5tr__dsm5tr-completo.pdf.txt), Disinhibited Social Engagement Disorder: critérios (452-453), evolução (454), diagnóstico diferencial e comorbilidade (455); código F94.2 (452). Divergências mantidas: número de comportamentos (DSM-5-TR 2 de 4; CID-11 reticência reduzida mais 1 dos 3 restantes) e idade de início (CID-11 antes dos 5 anos; DSM-5-TR sem esse critério). O NG26 refere DSM-5 e CID-10 (1.3.6). Sem tratamento nesta entrada. Índice de página do .txt do CDDR = página impressa + 18."
 },
 {
  "id": "h-phda",
  "name": "Perturbação de hiperatividade e défice de atenção (PHDA)",
  "icd11": "6A05",
  "core": [
   {
    "domain": "d-atencao",
    "level": 2,
    "why": "Desatenção e/ou hiperatividade-impulsividade persistentes, com impacto direto no funcionamento escolar, social ou familiar, são o núcleo da CID-11 (6A05)."
   }
  ],
  "support": [
   {
    "scale": "snap_desatencao",
    "why": "Subescala de desatenção do SNAP-IV em banda moderada ou superior; as escalas ajudam mas nunca decidem (NICE NG87 1.3.2)."
   },
   {
    "scale": "snap_hi",
    "why": "Subescala de hiperatividade-impulsividade do SNAP-IV em banda moderada ou superior; apoio, não diagnóstico (NICE NG87 1.3.2)."
   },
   {
    "scale": "sdq_hiperatividade",
    "why": "Subescala de hiperatividade/desatenção do SDQ elevada; o NICE NG87 1.3.2 aceita o SDQ como ferramenta adicional."
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Dificuldade em seguir instruções, cumprir regras e relacionar-se, quando explicada por desatenção ou impulsividade, é típica da PHDA (CID-11, fronteira com a oposição); confirmar a origem."
   }
  ],
  "confirm": [
   "Padrão persistente (a CID-11 dá como exemplo pelo menos 6 meses) de desatenção e/ou hiperatividade-impulsividade, fora dos limites normais de variação para a idade e o nível de desenvolvimento intelectual. A CID-11 não fixa número mínimo de sintomas. DSM-5-TR (critério A, págs. 167-169): pelo menos 6 de 9 sintomas de desatenção e/ou 6 de 9 de hiperatividade-impulsividade durante pelo menos 6 meses (5 a partir dos 17 anos), inconsistentes com o nível de desenvolvimento e não só manifestação de oposição, desafio, hostilidade ou incompreensão de tarefas; apresentação combinada, desatenta ou hiperativa-impulsiva, com gravidade ligeira, moderada ou grave e remissão parcial.",
   "Evidência de vários sintomas significativos antes dos 12 anos (CID-11; DSM-5-TR critério B, pág. 168: vários sintomas antes dos 12 anos). Pode só chegar à consulta na adolescência, quando as exigências excedem a capacidade de compensar (CID-11). Para o DSM-5-TR, se os sintomas parecem surgir pela primeira vez depois dos 13 anos, é mais provável outra perturbação mental ou efeito cognitivo de substâncias (pág. 170).",
   "Sintomas em 2 ou mais contextos importantes (casa, escola, amigos ou familiares), com informação de pais e de professores, sabendo que variam com a estrutura e as exigências de cada contexto (CID-11 6A05; NICE NG87 1.3.3; AAP 2019 KAS 2). Os sintomas de desatenção podem não se ver em atividades muito estimulantes e recompensadoras (CID-11). DSM-5-TR (critério C e pág. 170): vários sintomas em 2 ou mais contextos, confirmados por informadores desses contextos; podem estar mínimos ou ausentes com recompensas frequentes, supervisão apertada, novidade, atividades muito interessantes, ecrãs ou numa consulta a sós.",
   "Impacto negativo direto no funcionamento escolar, social ou familiar; o NICE NG87 1.3.3 exige pelo menos prejuízo moderado, apurado por entrevista ou observação em vários contextos. DSM-5-TR critério D (pág. 168-169): prova clara de que os sintomas interferem com o funcionamento social, escolar ou ocupacional ou reduzem a sua qualidade.",
   "Sintomas não explicados por outra perturbação mental (por exemplo ansiedade), nem por efeito de substância ou medicação (a CID-11 cita, por exemplo, broncodilatadores, hormona da tiroide, carbamazepina, valproato, risperidona), nem por doença do sistema nervoso; rever a medicação em curso e o consumo de substâncias. DSM-5-TR (critério E e pág. 175): não ocorre só durante esquizofrenia ou outra perturbação psicótica nem é melhor explicado por outra perturbação mental (humor, ansiedade, dissociativa, personalidade, intoxicação ou abstinência); sintomas atribuíveis a medicação (por exemplo broncodilatadores, isoniazida, neurolépticos com acatisia, hormona da tiroide) classificam-se como induzidos por substância ou medicação e não como PHDA.",
   "Início agudo de hiperatividade em criança em idade escolar ou adolescente: pensar noutra perturbação mental ou numa condição médica (CID-11; por exemplo mania ou psicose emergentes na adolescência).",
   "Pré-escolar: a AAP 2019 inicia a avaliação a partir dos 4 anos e não encontra evidência suficiente para diagnóstico abaixo dos 4; a hiperatividade predomina na idade pré-escolar (CID-11), por isso comparar com o esperado para a idade e obter informação de mais de um contexto, o que pode ser difícil se não frequenta creche ou jardim de infância. DSM-5-TR (pág. 171): antes dos 4 anos os sintomas distinguem-se mal do comportamento normativo muito variável; no pré-escolar predomina a hiperatividade e a desatenção só se torna mais evidente na idade escolar.",
   "Avaliação completa: necessidades, condições coexistentes, circunstâncias familiares e escolares, saúde física e saúde mental dos pais ou cuidadores (NICE NG87 1.3.4); ter em conta a opinião da criança sobre o impacto (NICE NG87 1.3.6).",
   "Escalas e observação (por exemplo na escola) apoiam, mas o diagnóstico não se faz só com elas (NICE NG87 1.3.2).",
   "Com deficiência intelectual, o DSM-5-TR só admite PHDA se a desatenção ou a hiperatividade forem excessivas para a idade mental; com perturbação específica da aprendizagem, a desatenção pode dever-se a frustração ou limitação de processamento e reduz-se muito nas tarefas que não exigem a competência afetada (DSM-5-TR, pág. 174)."
  ],
  "differential": [
   "h-autismo",
   "h-aprendizagem",
   "h-ddi",
   "h-oposicao",
   "h-conduta",
   "h-dcd",
   "h-tiques",
   "Ansiedade: inquietação e preocupações que dificultam a concentração (ver domínio Ansiedade); a PHDA só se atribui se desatenção e hiperatividade não forem exclusivamente ligadas a preocupações ansiosas nem surgirem só em situações ansiogénicas (CID-11)",
   "Episódio depressivo ou (hipo)maníaco: inquietação, má concentração e irritabilidade; início tardio, episodicidade e intensidade da elevação do humor distinguem a perturbação bipolar (CID-11); DSM-5-TR (págs. 174-175): a mania ou hipomania dura 4 ou mais dias, mesmo em crianças, e a labilidade de humor ao longo do mesmo dia na PHDA é distinta; a perturbação bipolar é rara antes da adolescência, mesmo com irritabilidade e raiva marcadas",
   "Perturbação explosiva intermitente: impulsividade em acessos graves, não generalizada (CID-11); DSM-5-TR (pág. 173): é rara na infância e pode diagnosticar-se em simultâneo com a PHDA",
   "Efeitos de álcool, nicotina, canábis, estimulantes ou de medicação (informantes que conheceram a criança antes do consumo ou da medicação são essenciais; CID-11)",
   "Condições médicas que alteram a atenção: hipoglicemia, disfunção da tiroide, exposição a toxinas, perturbações do sono (CID-11)",
   "Trauma, luto e adversidade na infância podem causar desatenção ou hiperatividade (CID-11, aspetos culturais): perguntar pela história de vida",
   "h-ddm",
   "Perturbação do movimento estereotipado e tiques múltiplos frequentes: a irrequietude da PHDA é generalizada e não repetitiva; a observação prolongada ajuda a distinguir da irrequietude dos tiques (DSM-5-TR, pág. 173)",
   "Perturbação reativa da vinculação: desinibição social sem o conjunto completo de sintomas de PHDA e com ausência de relações duradouras (DSM-5-TR, pág. 174)",
   "Trauma: abaixo dos 6 anos a perturbação de stress pós-traumático pode manifestar-se por inquietação, irritabilidade e desatenção que imitam PHDA, e os pais podem minimizar os sintomas; rever a exposição a acontecimentos traumáticos (DSM-5-TR, pág. 174)"
  ],
  "comorbid": [
   "h-autismo",
   "h-aprendizagem",
   "h-linguagem",
   "h-dcd (a PHDA ocorre em cerca de 50% dos casos de perturbação da coordenação, CID-11)",
   "h-tiques",
   "h-ddi",
   "h-oposicao",
   "h-conduta",
   "Perturbações de ansiedade e do humor; DSM-5-TR (pág. 176): ansiedade, depressão major, TOC e perturbação explosiva intermitente ocorrem numa minoria, mais do que na população geral",
   "TOC (risco aumentado, CID-11)",
   "Perturbação do jogo (gaming) (risco aumentado, CID-11)",
   "Epilepsia (taxas elevadas, CID-11)",
   "Consumo de álcool, nicotina, canábis ou estimulantes (adolescentes, CID-11)",
   "h-ddm (a maioria das crianças com desregulação disruptiva do humor cumpre também critérios de PHDA, que se diagnostica em separado; DSM-5-TR, pág. 175-176)",
   "Oposição em cerca de metade das crianças com apresentação combinada e cerca de um quarto com a desatenta; conduta em cerca de um quarto da apresentação combinada, consoante idade e contexto (DSM-5-TR, págs. 175-176)",
   "Perturbações do sono (um quarto a metade referem dificuldades: insónia, atraso de fase, apneia, pernas inquietas; sonolência diurna) e doenças alérgicas e autoimunes (DSM-5-TR, pág. 176)"
  ],
  "source": "ICD-11 CDDR, OMS, 2024 (ISBN 978-92-4-007726-3), https://www.who.int/publications/i/item/9789240077263 (texto lido numa cópia com o mesmo ISBN, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção 6A05, pp. 142-149 (essential features, additional clinical features, boundaries); NICE NG87, 2018 (atualizada 13/09/2019), https://www.nice.org.uk/guidance/ng87, rec. 1.2.7, 1.3.1 a 1.3.6; AAP (Wolraich et al.), Pediatrics 2019;144(4):e20192528, https://doi.org/10.1542/peds.2019-2528 (KAS 1 a 3 e texto de apoio). Critérios seguidos: CID-11 (limiar 'fora dos limites normais para a idade e nível intelectual', sem número mínimo de sintomas). DSM-5-TR (APA, 2022), secção Attention-Deficit/Hyperactivity Disorder, F90.2 apresentação combinada, F90.0 predominantemente desatenta, F90.1 predominantemente hiperativa-impulsiva (F90.8 e F90.9 para outra especificada e não especificada): critérios págs. 167-169, Diagnostic Features 169-170, Development and Course 171, Differential Diagnosis 173-175, Comorbidity 175-176 (ficheiro dsm5tr__dsm5tr-completo.pdf.txt, índice de página base 0). Verificado contra o texto do DSM-5-TR; continua rascunho, por validar pelo médico. Divergências DSM-5-TR contra CID-11, mantidas as duas: (1) o DSM-5-TR exige pelo menos 6 sintomas de desatenção e/ou 6 de hiperatividade-impulsividade (5 a partir dos 17 anos) durante pelo menos 6 meses, a CID-11 não fixa número; (2) o DSM-5-TR dá apresentações, gravidade e remissão parcial, a CID-11 dá 6A05.0 a 6A05.2; (3) correção: a AAP 2019 indica que o DSM-5 não exige explicitamente comparação com a idade de desenvolvimento, mas o critério A do DSM-5-TR (pág. 167) diz 'inconsistente com o nível de desenvolvimento', pelo que as duas fontes comparam com o desenvolvimento. O NICE NG87 1.3.3 aceita DSM-5 ou CID-11 e não recomenda excluir PHDA por autismo ou por início incerto."
 },
 {
  "id": "h-autismo",
  "name": "Perturbação do espetro do autismo",
  "icd11": "6A02 (6A02.0 a 6A02.5 segundo os especificadores de desenvolvimento intelectual e de linguagem funcional; 6A02.x1 com perda de competências adquiridas)",
  "core": [
   {
    "domain": "d-social",
    "level": 2,
    "why": "Défices persistentes de comunicação e reciprocidade social, com padrões restritos, repetitivos e inflexíveis (as duas componentes são exigidas pela CID-11, 6A02). O DSM-5-TR exige também as duas componentes: os 3 critérios de comunicação social (A1 a A3) e pelo menos 2 de 4 de comportamentos restritos e repetitivos (B1 a B4)."
   }
  ],
  "support": [
   {
    "scale": "mchat_positivo",
    "why": "M-CHAT-R/F positivo: apoia a decisão de referenciar, mas não diagnostica e um resultado negativo não exclui (NICE CG128 1.3.5; AAP 2020 recomenda rastreio aos 18 e 24 meses)."
   },
   {
    "scale": "sdq_colegas",
    "why": "Dificuldades com colegas no SDQ; fazer e manter relações com pares é um dos eixos da reciprocidade social na CID-11, mas a medida é inespecífica (ligação indireta)."
   },
   {
    "scale": "sdq_prosocial_baixo",
    "why": "Comportamento pró-social baixo no SDQ; a CID-11 inclui limitações em partilhar interesses e em responder às emoções dos outros, mas a medida é inespecífica (ligação indireta)."
   },
   {
    "domain": "d-alimentacao",
    "level": 1,
    "why": "Seletividade alimentar por características sensoriais ou rotinas inflexíveis é referida na CID-11 (fronteira com ARFID); alimentação restrita é condição coexistente a rastrear (NICE CG128 1.5.15). Inespecífico; o DSM-5-TR confirma estas comorbilidades (págs. 160, 164-167)."
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "No meio da infância surgem com frequência sintomas de ansiedade, incluindo ansiedade social, recusa escolar e fobia específica (CID-11). Inespecífico; o DSM-5-TR confirma estas comorbilidades (págs. 160, 164-167)."
   },
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "Desatenção, impulsividade e hiperatividade são frequentes no autismo (CID-11) e a PHDA aumenta a prevalência de autismo (NICE CG128, caixa 1). Inespecífico; o DSM-5-TR confirma estas comorbilidades (págs. 160, 164-167)."
   }
  ],
  "confirm": [
   "Défices persistentes em iniciar e manter comunicação social e interação social recíproca, fora do esperado para a idade e o nível de desenvolvimento intelectual (CID-11 6A02): por exemplo resposta ou interesse pelas comunicações dos outros, integração de linguagem e sinais não verbais, uso social da linguagem e conversa recíproca, partilha de interesses, relações com pares. DSM-5-TR critério A (págs. 153-154): os três défices (reciprocidade socioemocional, comunicação não verbal, desenvolvimento e manutenção de relações), atuais ou por história.",
   "E padrões persistentes de comportamento, interesses ou atividades restritos, repetitivos e inflexíveis, claramente atípicos para a idade e o contexto sociocultural (por exemplo rotinas rígidas, interesses especiais, movimentos estereotipados, hiper ou hiporreatividade sensorial). A CID-11 exige as duas componentes; por si sós, comportamentos repetitivos e interesses intensos são comuns no desenvolvimento típico. DSM-5-TR critério B (págs. 154-155): pelo menos 2 de 4 (movimentos, uso de objetos ou fala estereotipados; insistência na rotina; interesses fixos e anómalos; hiper ou hiporreatividade sensorial), atuais ou por história; podem ter estado presentes só na infância (pág. 160).",
   "Início no período do desenvolvimento, tipicamente na primeira infância, mesmo que os sintomas só se manifestem plenamente quando as exigências sociais excedem a capacidade (CID-11). A CID-11 não fixa duração mínima nem número de sintomas. DSM-5-TR critério C (págs. 154 e 161): sintomas no início do desenvolvimento, em regra reconhecidos entre os 12 e os 24 meses, antes se o atraso for grave e depois dos 24 meses se forem subtis; podem ser mascarados por estratégias aprendidas.",
   "Prejuízo significativo no funcionamento pessoal, familiar, social ou escolar; pode estar escondido por esforço excecional de compensação, sobretudo em raparigas, e o diagnóstico mantém-se (CID-11; NICE CG128 1.2.5). DSM-5-TR critério D: prejuízo clinicamente significativo atual.",
   "Dificuldades evidentes em todas as situações e contextos; se só surgem em situações específicas ou ansiogénicas, pensar em ansiedade social ou mutismo seletivo. Se o relato e a observação discordam, obter informação de outras fontes e observar noutros contextos (CID-11; NICE CG128 1.5.9).",
   "Não excluir autismo por bom contacto ocular, sorrisos e afeto com a família, jogo de faz de conta referido, marcos de linguagem normais, melhoria num ambiente estruturado, ou avaliação anterior negativa se houver informação nova (NICE CG128 1.2.7). Atraso de linguagem isolado não indica autismo, a menos que haja também pouca motivação para a comunicação social e poucas competências de interação (CID-11).",
   "Regressão: perda de competências de linguagem ou sociais antes dos 3 anos, referenciar à equipa de autismo; regressão da linguagem depois dos 3 anos, ou motora a qualquer idade, avaliar primeiro por pediatria ou neuropediatria (NICE CG128 1.3.1 e 1.3.2). A CID-11 tem o especificador 'com perda de competências adquiridas', raro depois dos 3 anos. O DSM-5-TR descreve o declínio de competências sociais e de comunicação nos primeiros 2 anos como raro noutras perturbações e útil para o autismo; regressão depois de pelo menos 2 anos de desenvolvimento normal é rara e pede investigação médica, por exemplo epilepsia com perda de linguagem (pág. 161).",
   "Audição avaliada em toda a criança com atraso de linguagem ou atenção reduzida à linguagem (AAP 2020); o NICE CG128 1.5.7 inclui défice auditivo grave no diferencial.",
   "Perfil do doente para os especificadores da CID-11 e o plano: nível intelectual (com ou sem perturbação do desenvolvimento intelectual), linguagem funcional (nenhum ou ligeiro défice, linguagem funcional comprometida, ausência quase completa), capacidades motoras, saúde mental, sensibilidades sensoriais, comportamento adaptativo (CID-11; NICE CG128 1.5.8). No DSM-5-TR: nível de apoio (1 a 3) em separado para comunicação social e para comportamentos restritos; com ou sem défice intelectual e de linguagem (linguagem recetiva e expressiva avaliadas em separado); condição genética ou médica associada (por exemplo X frágil, epilepsia, síndrome alcoólico fetal); problema associado (irritabilidade, sono, autolesão, regressão); catatonia (págs. 155-157).",
   "Exame físico: estigmas cutâneos (esclerose tuberosa, neurofibromatose), dismorfias, perímetro cefálico; testes genéticos só se houver dismorfias, anomalias congénitas ou evidência de deficiência intelectual; EEG só se houver suspeita de epilepsia (NICE CG128 1.5.6 e 1.7.1).",
   "Instrumentos específicos de autismo não chegam para diagnosticar nem um resultado negativo exclui; o diagnóstico usa informação de todas as fontes e juízo clínico segundo a CID-11 ou o DSM-5 (NICE CG128 1.3.5, 1.5.10 e 1.5.11). O DSM-5-TR diz o mesmo: os sintomas são dimensionais, sem pontos de corte universais, e o diagnóstico é clínico (pág. 160).",
   "Maior incerteza diagnóstica em menores de 24 meses, idade de desenvolvimento inferior a 18 meses, adolescentes mais velhos, falta de história precoce e quadros complexos (NICE CG128 1.5.12); a CID-11 considera possível o diagnóstico no pré-escolar (até aos 4 anos), sobretudo com atraso global.",
   "Com perturbação do desenvolvimento intelectual, o DSM-5-TR só admite o diagnóstico de autismo se a comunicação social estiver abaixo do esperado para o nível de desenvolvimento (critério E, pág. 154); reavaliar o nível intelectual ao longo do desenvolvimento, porque o QI é instável no autismo, sobretudo na primeira infância (pág. 140)."
  ],
  "differential": [
   "h-linguagem",
   "h-ddi",
   "h-phda",
   "h-tiques",
   "h-oposicao",
   "Défice auditivo ou visual grave (NICE CG128 1.5.7): avaliar a audição antes de atribuir o atraso de linguagem ao autismo",
   "Privação ou maus-tratos graves ('quase-autismo'): melhoram muito num ambiente mais cuidador; perturbação reativa da vinculação e perturbação de desinibição social (CID-11)",
   "Ansiedade social e mutismo seletivo (CID-11 6B04 e 6B06; ver domínio Ansiedade): comunicação adequada em situações familiares ou não ansiogénicas e sem padrões repetitivos; DSM-5-TR (pág. 165): no mutismo seletivo o desenvolvimento precoce não está tipicamente alterado e, onde há mutismo, a reciprocidade social e os comportamentos repetitivos estão ausentes; a ansiedade e o autismo sobrepõem-se (isolamento social e comportamentos repetitivos podem expressar ansiedade)",
   "Timidez e inibição comportamental: comunicação social adequada em situações familiares (CID-11)",
   "TOC: as compulsões são mais resistidas e não há défice de comunicação social (CID-11); DSM-5-TR (pág. 166): no autismo os comportamentos repetitivos podem ser vividos como agradáveis e reforçadores e predominam estereotipias motoras e rotinas, sem obsessões",
   "Esquizofrenia ou perturbação esquizotípica: início típico na adolescência, sintomas psicóticos, sem padrões restritos e repetitivos na infância (CID-11); DSM-5-TR (pág. 166): na esquizofrenia de início na infância há desenvolvimento quase normal prévio e alucinações e delírios, que não são do autismo; podem coexistir, e a interpretação concreta das perguntas pode simular sintomas",
   "Síndrome de Rett e encefalopatia epilética com regressão (NICE CG128 1.5.7); DSM-5-TR (pág. 165): na fase regressiva da síndrome de Rett (tipicamente dos 1 aos 4 anos) pode cumprir critérios de autismo, mas depois a comunicação social em regra melhora",
   "PHDA: no DSM-5-TR distingue-se pelo curso do desenvolvimento e pela ausência de comportamentos restritos e repetitivos e de interesses invulgares; é das comorbilidades mais frequentes e diagnostica-se também se a desatenção ou a hiperatividade excederem o esperado para a idade mental (pág. 164)",
   "Perturbação da comunicação social (pragmática): sem comportamentos restritos e repetitivos, atuais ou passados; o autismo prevalece sempre que os critérios estão cumpridos (DSM-5-TR, págs. 152 e 165)"
  ],
  "comorbid": [
   "h-phda",
   "h-ddi",
   "h-linguagem (outras formas, não só a pragmática)",
   "h-dcd",
   "h-tiques",
   "h-oposicao",
   "h-aprendizagem",
   "Perturbações de ansiedade (incluindo ansiedade social), recusa escolar e fobia específica no meio da infância; perturbações depressivas na adolescência, por vezes com apresentação atípica; DSM-5-TR (págs. 165-167): fobia específica em até cerca de 30% e ansiedade social e agorafobia em até cerca de 17%; cerca de 70% têm pelo menos uma perturbação mental comórbida e 40% duas ou mais",
   "TOC",
   "Comportamento autolesivo (mais frequente com perturbação do desenvolvimento intelectual, CID-11)",
   "Perturbação do movimento estereotipado, se os movimentos exigirem atenção clínica por autolesão (CID-11 6A06); DSM-5-TR (pág. 165): só se diagnostica no autismo se houver autolesão ou se as estereotipias forem foco de tratamento",
   "Epilepsia; síndromes genéticos (X frágil, esclerose tuberosa, neurofibromatose)",
   "Problemas de sono, alimentação, esfíncteres (enurese, encoprese) e gastrointestinais (NICE CG128 1.5.15; AAP 2020)",
   "Perturbação de evitamento ou restrição da ingestão alimentar (apresentação frequente), catatonia (risco maior na adolescência) e epilepsia (DSM-5-TR, págs. 160 e 166-167)"
  ],
  "source": "ICD-11 CDDR, OMS, 2024 (ISBN 978-92-4-007726-3), https://www.who.int/publications/i/item/9789240077263 (texto lido numa cópia com o mesmo ISBN, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção 6A02, pp. 124-133; NICE CG128, 2011 (atualizada 20/12/2017; revista 14/06/2021), https://www.nice.org.uk/guidance/cg128, rec. 1.2, 1.3, 1.5, 1.7; AAP (Hyman et al.), Pediatrics 2020;145(1):e20193447, https://doi.org/10.1542/peds.2019-3447 (texto integral). Critérios seguidos: CID-11 (sem duração mínima nem número de sintomas; dois eixos obrigatórios). DSM-5-TR (APA, 2022), secção Autism Spectrum Disorder, F84.0: critérios e especificadores págs. 153-157 (níveis de gravidade 155-156), Diagnostic Features 157-160, Development and Course 161-162, Differential Diagnosis 164-166, Comorbidity 166-167 (ficheiro dsm5tr__dsm5tr-completo.pdf.txt, índice de página base 0). Verificado contra o texto do DSM-5-TR; continua rascunho, por validar pelo médico. Divergências DSM-5-TR contra CID-11, mantidas as duas: (1) o DSM-5-TR exige os 3 défices de comunicação e interação social (A1 a A3) e pelo menos 2 de 4 comportamentos restritos e repetitivos (B1 a B4), atuais ou por história; a CID-11 exige as duas componentes sem número de sintomas nem duração; (2) o DSM-5-TR especifica níveis de apoio 1 a 3 (comunicação social e comportamentos restritos em separado), com ou sem défice intelectual e de linguagem, condição genética ou médica associada, problema associado e catatonia, enquanto a CID-11 especifica desenvolvimento intelectual, linguagem funcional e perda de competências; (3) a CID-11 não tem perturbação da comunicação social (pragmática) autónoma, só o especificador pragmático da perturbação do desenvolvimento da linguagem (ver h-linguagem); o DSM-5-TR tem-na como diagnóstico próprio (F80.82, págs. 150-152, AAP 2020) e o autismo prevalece sempre que os critérios estão cumpridos (pág. 165)."
 },
 {
  "id": "h-linguagem",
  "name": "Perturbação do desenvolvimento da linguagem (inclui a apresentação pragmática, ou de comunicação social, sem autismo)",
  "icd11": "6A01.2 (6A01.20 recetiva e expressiva; 6A01.21 sobretudo expressiva; 6A01.22 sobretudo pragmática; 6A01.23 outra)",
  "branches": [
   "pre",
   "esc"
  ],
  "core": [
   {
    "domain": "d-social",
    "level": 1,
    "why": "Dificuldade persistente de linguagem ou de comunicação (compreensão, expressão ou uso social da linguagem). O domínio mistura linguagem e reciprocidade: confirmar que a reciprocidade social está preservada."
   }
  ],
  "support": [
   {
    "domain": "d-outros",
    "level": 1,
    "why": "Marcos de linguagem atrasados (domínio misto 'Tiques, eliminação e outros'): ausência de palavras aos 2 anos ou de frases de duas palavras aos 3, persistente, indica mais perturbação de linguagem (CID-11 6A01.2)."
   },
   {
    "scale": "sdq_colegas",
    "why": "Dificuldades com os pares são frequentes na perturbação do desenvolvimento da linguagem (CID-11 6A01.2). O DSM-5-TR refere maior risco de vitimização por pares (pág. 144)."
   },
   {
    "scale": "sdq_emocional",
    "why": "Perturbação emocional associada com frequência a esta perturbação (CID-11 6A01.2). O DSM-5-TR refere a ansiedade como comorbilidade (pág. 142)."
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Comportamento disruptivo associado com frequência, sobretudo em idade escolar (CID-11 6A01.2)."
   }
  ],
  "confirm": [
   "Défices persistentes na aquisição, compreensão, produção ou uso da linguagem (falada ou gestual), claramente abaixo do esperado para a idade (CID-11 6A01.2). Caracterizar a área afetada: fonologia, gramática, semântica, discurso narrativo e conversacional, pragmática. DSM-5-TR (critérios A e B, págs. 142-143): dificuldades persistentes em todas as modalidades, por défice de compreensão ou de produção, com vocabulário reduzido, estrutura de frases limitada e discurso comprometido, e capacidades substancial e quantificavelmente abaixo do esperado para a idade, com limitação funcional.",
   "Início no período do desenvolvimento, tipicamente na primeira infância; limitação funcional da comunicação em casa, na escola ou nas atividades (CID-11). DSM-5-TR critério C: início no período precoce do desenvolvimento.",
   "Idade e persistência: ausência de palavras (ou aproximações) aos 2 anos, ausência de frases de duas palavras aos 3 anos e défices persistentes, sobretudo com história familiar de problemas de linguagem ou de literacia, são mais indicativos; atrasos muito precoces isolados não indicam perturbação, aos 4 anos as diferenças individuais são mais estáveis e problemas ainda evidentes aos 5 anos ou mais tendem a persistir (CID-11; CATALISE-2, declaração 3). O DSM-5-TR não dá limiares numéricos: antes dos 4 anos é difícil distinguir da variação normal, o início tardio da linguagem aos 24 meses foi o melhor preditor aos 7 anos, e a partir dos 4 anos as diferenças são estáveis e o quadro tende a persistir (pág. 144).",
   "Não é melhor explicada por perturbação do desenvolvimento intelectual, autismo, outra perturbação do neurodesenvolvimento, défice sensorial ou doença do sistema nervoso, incluindo lesão cerebral ou infeção (CID-11). A CATALISE-2 usa 'condições diferenciadoras' (lesão cerebral, perda auditiva neurossensorial, síndromes genéticos, deficiência intelectual, autismo) em vez de exclusões; fatores de risco e outras condições coexistentes não impedem o diagnóstico. DSM-5-TR critério D (págs. 143 e 145): não atribuível a défice auditivo ou outro sensorial, disfunção motora ou condição médica ou neurológica, nem melhor explicada por deficiência intelectual ou atraso global; pode diagnosticar-se se o défice de linguagem exceder o habitual nesses problemas, e não é necessária discrepância entre capacidade verbal e não verbal.",
   "Audição avaliada em toda a criança com défice de linguagem; a perda auditiva não impede o diagnóstico se as dificuldades de linguagem forem desproporcionadas à gravidade da perda (CID-11).",
   "Documentar todas as línguas a que a criança esteve exposta e avaliar competência em todas: o bilinguismo não causa perturbação persistente, e exposição insuficiente à língua da escola não é perturbação, salvo se faltar competência adequada à idade em todas as línguas (CID-11; CATALISE-2, declaração 4). O DSM-5-TR concorda: o bilinguismo não causa nem agrava a perturbação, que afeta as duas línguas (pág. 144).",
   "Sem perda de competências de linguagem já adquiridas: a regressão faz pensar em autismo (perda das primeiras palavras no 2.º ano com declínio social) ou em causa neurológica (por exemplo encefalopatia, epilepsia afásica adquirida) e não em perturbação do desenvolvimento da linguagem (CID-11). O DSM-5-TR pede avaliação neurológica, incluindo EEG de rotina e de sono, perante perda de fala ou de linguagem em qualquer idade (pág. 145).",
   "Se a apresentação é pragmática (6A01.22): dificuldades persistentes e substanciais em compreender e usar a linguagem em contexto social (inferências, humor verbal, ambiguidade), com linguagem recetiva e expressiva relativamente preservadas. Não usar este especificador se houver autismo (CID-11). DSM-5-TR (F80.82, critérios A a D, págs. 150-151): os 4 défices (uso social da comunicação, adaptação ao contexto ou ao ouvinte, regras da conversa e da narrativa, compreensão do que não é explícito e de sentidos não literais) com limitação funcional e início precoce, sem baixas capacidades de estrutura de palavras e gramática e não melhor explicados por autismo, deficiência intelectual, atraso global ou outra perturbação mental; é rara antes dos 4 anos e as formas ligeiras podem só surgir no início da adolescência (pág. 152).",
   "Reciprocidade social preservada (inicia e responde a sinais sociais e emocionais, partilha interesses) e sem comportamentos restritos, repetitivos e estereotipados; se faltarem, pensar em autismo (CID-11). O DSM-5-TR separa o autismo da comunicação social (pragmática) pela presença, atual ou passada, de comportamentos restritos e repetitivos; o autismo prevalece sempre que os critérios estão cumpridos (pág. 152).",
   "Avaliação da linguagem pragmática por terapeuta da fala acrescenta informação (AAP 2020, a propósito da perturbação da comunicação social do DSM-5)."
  ],
  "differential": [
   "h-autismo",
   "h-ddi",
   "h-aprendizagem",
   "Perda auditiva (avaliar a audição de toda a criança com défice de linguagem; CID-11)",
   "Mutismo seletivo: fala adequada em situações específicas, tipicamente em casa, e falha previsível noutras, tipicamente na escola; as dificuldades da perturbação do desenvolvimento da linguagem aparecem em todos os contextos (CID-11 6B06; ver domínio Ansiedade)",
   "Perturbação dos sons da fala e perturbação da fluência da fala (6A01.0 e 6A01.1): erros de pronúncia ou ritmo da fala em vez de dificuldade de compreensão ou uso da linguagem (CID-11)",
   "Lesão ou doença do sistema nervoso, incluindo síndromes de regressão (Landau-Kleffner, epilepsia afásica adquirida): síndrome secundário da fala ou da linguagem (CID-11)",
   "Variação dialetal e plurilinguismo: exposição insuficiente à língua da escola (CATALISE-2)",
   "Ansiedade social: na perturbação da comunicação social (pragmática) nunca houve comunicação social eficaz; na ansiedade social as competências desenvolveram-se mas não se usam por medo (DSM-5-TR, pág. 153)",
   "PHDA: os défices primários de atenção podem limitar a comunicação social e a participação (DSM-5-TR, pág. 152)"
  ],
  "comorbid": [
   "h-phda",
   "h-aprendizagem (sobretudo literacia: leitura, compreensão, escrita)",
   "h-dcd",
   "h-autismo (formas não pragmáticas, se houver défices específicos semânticos, sintáticos ou fonológicos)",
   "Perturbação dos sons da fala",
   "Dificuldades com os pares, perturbação emocional e comportamento disruptivo (CID-11)",
   "Mutismo seletivo (podem coexistir, CID-11)",
   "Anomalias cromossómicas (rastrear, se disponível, e diagnosticar também, CID-11); o DSM-5-TR refere também epilepsia (pág. 142)",
   "h-ddi e perturbação da comunicação social (pragmática) (DSM-5-TR, pág. 145)"
  ],
  "source": "ICD-11 CDDR, OMS, 2024 (ISBN 978-92-4-007726-3), https://www.who.int/publications/i/item/9789240077263 (texto lido numa cópia com o mesmo ISBN, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção 6A01.2 (e introdução 6A01, p. 112), pp. 118-123; Bishop et al. (CATALISE-2), J Child Psychol Psychiatry 2017;58(10):1068-1080, https://doi.org/10.1111/jcpp.12721 (texto integral, declarações 3, 4 e comentário sobre pragmática); AAP (Hyman et al.), Pediatrics 2020;145(1):e20193447, https://doi.org/10.1542/peds.2019-3447 (apenas a passagem sobre perturbação da comunicação social e a audição). Não encontrei guideline NICE ou AAP específica de perturbação da linguagem. Critérios seguidos: CID-11, que trata a pragmática como especificador da perturbação do desenvolvimento da linguagem e não como diagnóstico autónomo. DSM-5-TR (APA, 2022): Language Disorder F80.2 (critérios págs. 142-143, Diagnostic Features 143, Development and Course 144, Differential Diagnosis 144-145, Comorbidity 145) e Social (Pragmatic) Communication Disorder F80.82 (critérios págs. 150-151, Diagnostic Features 151, Development and Course 152, Differential Diagnosis 152-153) (ficheiro dsm5tr__dsm5tr-completo.pdf.txt, índice de página base 0). Verificado contra o texto do DSM-5-TR; continua rascunho, por validar pelo médico. Divergências DSM-5-TR contra CID-11, mantidas as duas: (1) o DSM-5-TR tem a perturbação da comunicação social (pragmática) como categoria própria, que exclui o autismo e as baixas capacidades de gramática e estrutura de palavras, e a CID-11 só tem o especificador 6A01.22; a CATALISE-2 segue a CID-11 e descreve a razão (pragmática como parte da linguagem); (2) o DSM-5-TR não dá limiares numéricos de idade nem número de palavras (os marcos de 2 e 3 anos vêm da CID-11 e da CATALISE-2); diz que antes dos 4 anos é difícil distinguir da variação normal (pág. 144)."
 },
 {
  "id": "h-ddi",
  "name": "Perturbação do desenvolvimento intelectual / atraso global do desenvolvimento",
  "icd11": "6A00 (6A00.0 ligeira, 6A00.1 moderada, 6A00.2 grave, 6A00.3 profunda; 6A00.4 provisória, abaixo dos 4 anos, a que a CID-11 chama 'atraso global do desenvolvimento')",
  "branches": [
   "pre",
   "esc"
  ],
  "core": [
   {
    "domain": "d-outros",
    "level": 2,
    "why": "Atraso global em marcos motores, de linguagem, cognição e autonomia, ou dificuldades escolares generalizadas (domínio misto 'Tiques, eliminação e outros': confirmar que o achado é de desenvolvimento global)."
   }
  ],
  "support": [
   {
    "domain": "d-social",
    "level": 1,
    "why": "Limitação de linguagem e de competências sociais adaptativas faz parte do perfil (CID-11 6A00, Tabelas 6.1 a 6.4); não distingue do autismo."
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Comportamentos desafiantes (agressão, autolesão, oposição) são mais frequentes na perturbação do desenvolvimento intelectual do que na população geral (CID-11 6A00). O DSM-5-TR refere agressão e comportamentos disruptivos, sobretudo nas formas mais graves (pág. 140)."
   }
  ],
  "confirm": [
   "Limitações significativas do funcionamento intelectual em vários domínios (raciocínio percetivo, memória de trabalho, velocidade de processamento, compreensão verbal), cerca de 2 ou mais desvios-padrão abaixo da média (aproximadamente abaixo do percentil 2,3), medidas com testes normalizados e administrados individualmente; sem testes adequados, juízo clínico com os indicadores comportamentais da CID-11 (6A00, Tabela 6.1). DSM-5-TR (critério A, págs. 133 e 136): défices do funcionamento intelectual confirmados por avaliação clínica e por testes de inteligência individuais e normalizados, com cerca de 2 desvios-padrão ou mais abaixo da média (QI de 65 a 75, com margem de erro de ± 5); testes breves de rastreio ou de grupo não servem.",
   "E limitações significativas do comportamento adaptativo (competências conceptuais, sociais e práticas), também cerca de 2 ou mais desvios-padrão abaixo da média (CID-11). O QI sozinho não basta: o diagnóstico exige avaliação do comportamento adaptativo. DSM-5-TR (critério B, págs. 133 e 135): défices do comportamento adaptativo nos domínios conceptual, social e prático, que limitam a independência e a responsabilidade social em vários contextos; a gravidade define-se pelo funcionamento adaptativo e não pelo QI.",
   "Início no período do desenvolvimento (CID-11). DSM-5-TR critério C: início dos défices intelectuais e adaptativos no período do desenvolvimento.",
   "Abaixo dos 4 anos, ou em qualquer idade quando não é possível avaliação válida (défice sensorial ou motor, problemas de comunicação, comportamentos problemáticos graves, sintomas de outra perturbação), usar a categoria provisória 6A00.4, a que a CID-11 chama 'atraso global do desenvolvimento'; reavaliar mais tarde. No DSM-5-TR a categoria equivalente é o atraso global do desenvolvimento (F88), só abaixo dos 5 anos, quando falham marcos em vários domínios e a gravidade não pode ser avaliada de forma fiável (inclui quem não faz avaliação sistemática), com reavaliação; F79 aplica-se acima dos 5 anos quando a avaliação é difícil ou impossível por défice sensorial ou físico, problemas de comportamento graves ou perturbação mental (pág. 141). É prática comum adiar o diagnóstico em lactentes e crianças pequenas até depois de um período de intervenção (pág. 138).",
   "As pontuações variam durante o desenvolvimento: uma criança pode cumprir os critérios numa ocasião e não noutra, e uma só avaliação na primeira infância tem utilidade preditiva limitada; podem ser precisas várias avaliações em momentos diferentes (CID-11). DSM-5-TR (pág. 138): a gravidade pode mudar com o tempo; a melhoria adaptativa só afasta o diagnóstico se resultar de aquisição estável e generalizada, e não se depender de apoios e intervenção continuados.",
   "Cuidado especial em quem tem défices de comunicação, sensoriais ou motores, perturbações do comportamento, é imigrante, tem baixa literacia, perturbação mental, tratamento médico ou privação social ou sensorial grave: estes fatores reduzem a validade dos testes. Verificar a adequação cultural e linguística dos testes (CID-11).",
   "Gravidade (ligeira a profunda) atribuída segundo o nível em que se situa a maioria das capacidades intelectuais e adaptativas nos três domínios (CID-11); funcionamento intelectual 'limite' (cerca de 1 a 2 desvios-padrão abaixo) não é perturbação, mas pode exigir apoios.",
   "Etiologia: se for conhecida, diagnosticar também a condição subjacente (CID-11); a avaliação genética, por fenótipo quando possível ou abordagem sem hipótese prévia, é descrita na AAP 2025 (só resumo lido). O DSM-5-TR pede também que a síndrome genética se registe como diagnóstico concomitante e que não se presuma deficiência intelectual só por uma condição genética ou médica (pág. 139).",
   "Descartar declínio de competências já adquiridas: faz pensar em doença neurodegenerativa e não em perturbação do desenvolvimento (CID-11).",
   "Perturbações mentais podem manifestar-se de forma atípica na deficiência intelectual: rastrear ideação suicida e atender a mudanças de comportamento; informadores que conheçam a criança são essenciais para irritabilidade, desregulação do humor, agressão, alimentação e sono (DSM-5-TR, págs. 139-140)."
  ],
  "differential": [
   "h-autismo",
   "h-linguagem",
   "h-aprendizagem",
   "h-dcd",
   "h-phda",
   "Défice sensorial (visual ou auditivo) não corrigido: se as limitações se devem só ao défice sensorial, não atribuir perturbação do desenvolvimento intelectual (CID-11)",
   "Privação psicossocial extrema na infância precoce: pode melhorar muito num ambiente mais positivo, embora alguns défices persistam (CID-11)",
   "Outra perturbação mental que explique melhor as limitações (por exemplo esquizofrenia); nesse caso não se diagnostica (CID-11)",
   "Doença neurodegenerativa com início no período do desenvolvimento (CID-11)",
   "Síndrome neurodesenvolvimental secundário: condição médica pré-natal ou do desenvolvimento sem limitação adaptativa (CID-11)",
   "Perturbações da comunicação e perturbação específica da aprendizagem: não mostram défice intelectual nem adaptativo e podem coexistir; fazem-se os dois diagnósticos se os critérios estiverem cumpridos (DSM-5-TR, pág. 140)",
   "Autismo: a avaliação intelectual pode ser difícil por défices de comunicação social e o QI é instável na primeira infância; no DSM-5-TR diagnostica-se autismo se a comunicação social estiver abaixo do esperado para as capacidades não verbais (págs. 140 e 164-165)"
  ],
  "comorbid": [
   "h-autismo (acrescentar se os défices sociais e de comunicação excederem o esperado para o nível intelectual, CID-11)",
   "h-phda (só se os sintomas forem desproporcionados ao nível intelectual, CID-11)",
   "h-linguagem",
   "h-dcd",
   "h-aprendizagem (só se as limitações de aprendizagem excederem muito o esperado para o nível intelectual, CID-11)",
   "Perturbações depressivas, bipolares e esquizofrenia (mais frequentes, CID-11)",
   "Comportamentos desafiantes (agressão, autolesão, oposição, comportamento sexual inadequado; CID-11)",
   "Epilepsia e outros problemas de saúde física",
   "Maior vulnerabilidade a vitimização e engano (credulidade, CID-11): rever risco de maus-tratos",
   "Ansiedade, perturbação do movimento estereotipado (com ou sem autolesão, que exige atenção diagnóstica rápida) e perturbações do controlo dos impulsos (DSM-5-TR, pág. 140)",
   "Paralisia cerebral, epilepsia e perturbações mentais, 3 a 4 vezes mais frequentes do que na população geral; problemas de saúde física, incluindo obesidade, ficam muitas vezes por diagnosticar porque a criança não os consegue verbalizar (DSM-5-TR, págs. 140-141)"
  ],
  "source": "ICD-11 CDDR, OMS, 2024 (ISBN 978-92-4-007726-3), https://www.who.int/publications/i/item/9789240077263 (texto lido numa cópia com o mesmo ISBN, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção 6A00, pp. 92-100 (tabelas 6.1 a 6.4, pp. 101-111); AAP (Rodan et al., Council on Genetics), Genetic Evaluation of the Child With Intellectual Disability or Global Developmental Delay, Pediatrics 2025;156(1):e2025072219, https://doi.org/10.1542/peds.2025-072219 (só resumo lido; mesmo tema da AAP 2014 de Moeschler e Shevell, https://doi.org/10.1542/peds.2014-1839; não li se a substitui formalmente). Critérios seguidos: CID-11 (desvios-padrão no funcionamento intelectual e no comportamento adaptativo, categoria provisória abaixo dos 4 anos). DSM-5-TR (APA, 2022), Intellectual Developmental Disorder (Intellectual Disability), F70 ligeira, F71 moderada, F72 grave, F73 profunda: critérios pág. 133, gravidade 133-135, Diagnostic Features 135-137, Development and Course 138, Differential Diagnosis 139-140, Comorbidity 140; Global Developmental Delay F88 e Unspecified Intellectual Developmental Disorder F79, pág. 141 (ficheiro dsm5tr__dsm5tr-completo.pdf.txt, índice de página base 0). Verificado contra o texto do DSM-5-TR; continua rascunho, por validar pelo médico. Divergências DSM-5-TR contra CID-11, mantidas as duas: (1) atraso global: o DSM-5-TR reserva F88 a menores de 5 anos quando a gravidade não pode ser avaliada de forma fiável, e F79 a maiores de 5 anos com avaliação difícil ou impossível; a CID-11 usa a categoria provisória 6A00.4 abaixo dos 4 anos ou, em qualquer idade, sem avaliação válida possível; (2) o DSM-5-TR indica cerca de 2 desvios-padrão abaixo da média (QI de 65 a 75, 70 ± 5), não aceita só o QI e define a gravidade pelo funcionamento adaptativo e não pelo QI; a CID-11 usa cerca de 2 ou mais desvios-padrão (percentil 2,3) no funcionamento intelectual e no comportamento adaptativo. Não encontrei guideline NICE de diagnóstico de deficiência intelectual (o NICE NG11 trata comportamento desafiante e não foi lido)."
 },
 {
  "id": "h-aprendizagem",
  "name": "Perturbação específica da aprendizagem (CID-11: perturbação do desenvolvimento da aprendizagem)",
  "icd11": "6A03 (6A03.0 leitura, 6A03.1 expressão escrita, 6A03.2 matemática, 6A03.3 outra)",
  "branches": [
   "esc",
   "adol"
  ],
  "core": [
   {
    "domain": "d-outros",
    "level": 2,
    "why": "Dificuldade marcada e persistente na aprendizagem da leitura, escrita ou cálculo, apesar de instrução adequada (domínio misto 'Tiques, eliminação e outros': confirmar que o achado é de aprendizagem escolar)."
   }
  ],
  "support": [
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "Muitos têm dificuldades marcadas de autorregulação da atenção, sem gravidade para diagnóstico separado de PHDA (CID-11 6A03); confirmar se a desatenção surge só nas tarefas da área afetada. O DSM-5-TR concorda: na perturbação da aprendizagem isolada a desatenção reduz-se muito nas tarefas que não exigem a competência afetada (pág. 174)."
   }
  ],
  "confirm": [
   "Limitações significativas na aprendizagem da leitura, escrita ou aritmética, com desempenho muito abaixo do esperado para a idade, apesar de instrução adequada nessas áreas. Podem limitar-se a um componente (por exemplo decodificação de palavras ou numeracia básica) ou afetar tudo. Medir idealmente com testes normalizados (CID-11 6A03). DSM-5-TR (critério A, págs. 177-178 e 180): pelo menos 1 de 6 dificuldades (leitura de palavras, compreensão da leitura, ortografia, expressão escrita, noção de número e cálculo, raciocínio matemático) com pelo menos 6 meses de persistência apesar de intervenções dirigidas, isto é, sem recuperar o atraso face aos colegas; registar cada domínio e subcompetência afetados.",
   "Início tipicamente nos primeiros anos de escola, mas pode só ser identificado mais tarde, quando as exigências excedem a capacidade, inclusive na idade adulta (CID-11); perguntar por dificuldades pré-escolares de linguagem, contagem, rimas ou motricidade fina. DSM-5-TR critério C e pág. 183: início em idade escolar, podendo só se manifestar plenamente quando as exigências excedem a capacidade; sinais pré-escolares: pouco interesse em jogos de sons e rimas, dificuldade com letras, números e contar, fala infantilizada.",
   "Não atribuível a fatores externos (desvantagem económica ou ambiental, falta de acesso a educação) (CID-11).",
   "Não melhor explicada por perturbação do desenvolvimento intelectual ou outra perturbação do neurodesenvolvimento, nem por perturbação motora ou défice visual ou auditivo (CID-11). DSM-5-TR critério D (pág. 178): não melhor explicada por deficiência intelectual, acuidade visual ou auditiva não corrigida, outras perturbações mentais ou neurológicas, adversidade psicossocial, falta de proficiência na língua de ensino ou ensino inadequado; com deficiência intelectual, só se as dificuldades excederem o habitual (pág. 187).",
   "Prejuízo significativo académico, ocupacional ou noutras áreas; se o desempenho se mantém, é só à custa de esforço adicional significativo (CID-11). DSM-5-TR critério B (págs. 178 e 180): interferência significativa no desempenho escolar ou ocupacional ou nas atividades diárias; desempenho médio só sustentado por esforço ou apoio extraordinários também conta.",
   "Uma só pontuação num teste não distingue perturbação de normalidade: considerar várias fontes de evidência sobre a capacidade de aprendizagem fora da situação formal de teste (CID-11). O DSM-5-TR exige síntese clínica da história (desenvolvimento, saúde, família, escola), relatórios escolares e avaliação psicoeducativa (pág. 178).",
   "Aquisição mais tardia de uma competência não indica por si perturbação; conta a dificuldade persistente apesar de oportunidades educativas adequadas e a gravidade do prejuízo (CID-11).",
   "Teste de leitura validado se houver suspeita de dificuldade de leitura (NICE CG158 1.3.12); a expressão da dificuldade de leitura varia com a língua (CID-11). O DSM-5-TR nota que, em línguas de correspondência som-letra mais direta, o sinal típico é a leitura lenta mas precisa (pág. 186).",
   "Rever visão e audição; o resumo da AAP 2011 considera que não há evidência científica adequada de que problemas visuais subtis causem ou agravem as dificuldades de aprendizagem (só resumo lido)."
  ],
  "differential": [
   "h-ddi",
   "h-linguagem",
   "h-phda",
   "Défice visual ou auditivo não corrigido (CID-11)",
   "Falta de oportunidades de ensino ou desvantagem socioeconómica (CID-11)",
   "Perda de competências académicas já adquiridas após lesão cerebral ou doença neurodegenerativa (CID-11)",
   "Ansiedade e depressão: coexistem muitas vezes e dificultam a avaliação (CID-11)",
   "PHDA: a má prestação académica pode refletir dificuldade em executar e não em aprender as competências; coexistem mais do que o acaso e fazem-se os dois diagnósticos se os critérios estiverem cumpridos (DSM-5-TR, págs. 187-188)"
  ],
  "comorbid": [
   "h-phda",
   "h-dcd",
   "h-linguagem",
   "h-autismo",
   "Perturbações depressivas, com risco aumentado de ideação e tentativa de suicídio ao longo da vida (CID-11)",
   "Perturbações de ansiedade",
   "Perturbações do comportamento externalizante (h-oposicao, h-conduta)",
   "Os vários tipos (leitura, escrita, matemática) coocorrem entre si e com outras perturbações do neurodesenvolvimento, de ansiedade e depressivas; as comorbilidades não excluem o diagnóstico mas dificultam a avaliação (DSM-5-TR, pág. 188)"
  ],
  "source": "ICD-11 CDDR, OMS, 2024 (ISBN 978-92-4-007726-3), https://www.who.int/publications/i/item/9789240077263 (texto lido numa cópia com o mesmo ISBN, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção 6A03, pp. 134-138; AAP (Handler, Fierson et al.), Learning disabilities, dyslexia, and vision, Pediatrics 2011;127(3):e818-56, https://doi.org/10.1542/peds.2010-3670 (só resumo lido; não verifiquei se foi reafirmada ou substituída); NICE CG158, 2013 (atualizada 19/04/2017; revista 17/04/2025), https://www.nice.org.uk/guidance/cg158, rec. 1.3.12 (teste de leitura validado). Critérios seguidos: CID-11. Não encontrei guideline NICE de diagnóstico de perturbação específica da aprendizagem; DSM-5-TR (APA, 2022), Specific Learning Disorder, F81.0 com défice na leitura, F81.81 na expressão escrita, F81.2 na matemática: critérios págs. 177-179, Diagnostic Features 179-181, Development and Course 183, Differential Diagnosis 187-188, Comorbidity 188 (ficheiro dsm5tr__dsm5tr-completo.pdf.txt, índice de página base 0). Verificado contra o texto do DSM-5-TR; continua rascunho, por validar pelo médico. Divergências DSM-5-TR contra CID-11, mantidas as duas: o DSM-5-TR exige pelo menos 1 de 6 dificuldades persistentes há pelo menos 6 meses apesar de intervenção dirigida e desempenho substancial e quantificavelmente abaixo da idade, confirmado por testes de aproveitamento individuais e normalizados (história documentada basta a partir dos 17 anos), com especificadores por domínio e gravidade ligeira, moderada ou grave; a CID-11 (6A03.0 a 6A03.3) não fixa duração nem número de dificuldades e usa 'persistente apesar de oportunidades educativas adequadas'."
 },
 {
  "id": "h-dcd",
  "name": "Perturbação do desenvolvimento da coordenação motora",
  "icd11": "6A04",
  "branches": [
   "pre",
   "esc"
  ],
  "core": [
   {
    "domain": "d-outros",
    "level": 2,
    "why": "Atraso na aquisição de competências motoras e execução desajeitada, lenta ou imprecisa, com limitação nas atividades diárias ou escolares (domínio misto 'Tiques, eliminação e outros': confirmar que o achado é motor)."
   }
  ],
  "support": [],
  "confirm": [
   "Atraso significativo na aquisição de competências motoras grossas ou finas e execução descoordenada (desajeitamento, lentidão, imprecisão), claramente abaixo do esperado para a idade (CID-11 6A04). Medir, idealmente, com testes de coordenação motora normalizados, individuais e culturalmente adequados, e avaliar o impacto em casa e na escola (CID-11; EACD 2019). DSM-5-TR (critério A, págs. 188-189): aquisição e execução de competências motoras coordenadas substancialmente abaixo do esperado para a idade e a oportunidade de aprender, com desajeitamento, lentidão e imprecisão (por exemplo apanhar objetos, usar tesoura ou talheres, escrever, andar de bicicleta, desporto).",
   "Limitações significativas e persistentes em atividades de vida diária, trabalho escolar, atividades profissionais, lazer ou jogo (CID-11; EACD 2019, rec. 3, critério II). DSM-5-TR critério B (pág. 189): interferência significativa e persistente nas atividades de vida diária adequadas à idade, na produtividade escolar, no lazer e no jogo.",
   "Início no período do desenvolvimento, tipicamente evidente desde a primeira infância (CID-11).",
   "Idade: o diagnóstico habitualmente não se faz antes dos 5 anos (CID-11); a EACD 2019 (rec. 4) só admite diagnóstico formal abaixo dos 5 anos em défice grave, com pelo menos duas avaliações motoras com intervalo mínimo de 3 meses. O DSM-5-TR também diz que habitualmente não se diagnostica antes dos 5 anos, por variabilidade na aquisição, instabilidade das medidas e outras causas de atraso motor que podem ainda não ter surgido (pág. 189).",
   "Não melhor explicada por doença do sistema nervoso (paralisia cerebral, distrofia muscular), doença musculo-esquelética ou do tecido conjuntivo, défice sensorial (sobretudo visual grave), hipermobilidade articular ou perturbação do desenvolvimento intelectual (CID-11); verificar também falta de oportunidade ou de prática (EACD 2019, critério I). DSM-5-TR critério D (págs. 189-190): não melhor explicada por deficiência intelectual ou défice visual nem atribuível a condição neurológica (paralisia cerebral, distrofia muscular, doença degenerativa); o exame da função visual e o exame neurológico fazem parte da avaliação; com deficiência intelectual, as dificuldades motoras excedem o esperado para a idade mental, sem limiar de QI.",
   "Movimentos coreiformes ou em espelho ('de transbordo') não excluem o diagnóstico (CID-11).",
   "Se o desajeitamento (esbarrar em obstáculos, deixar cair coisas) se deve a distração e impulsividade, não diagnosticar (CID-11, fronteira com PHDA). O DSM-5-TR admite os dois diagnósticos se ambos os critérios forem cumpridos (pág. 192).",
   "Com perturbação do desenvolvimento intelectual, ambos podem ser atribuídos se a coordenação estiver bem abaixo do esperado para o nível intelectual e for foco de atenção clínica (CID-11); no autismo, a relutância em jogos de coordenação pode ser desinteresse e não défice motor (CID-11). O DSM-5-TR concorda: o desinteresse em tarefas de coordenação (por exemplo jogos de bola) afeta o desempenho sem refletir a competência motora central; os dois diagnósticos são possíveis se ambos os critérios forem cumpridos (pág. 192).",
   "Diagnóstico por profissional médico ou equipa multiprofissional qualificada (EACD 2019, rec. 2).",
   "Síntese clínica da história, do exame físico, do relatório escolar e de testes motores normalizados e culturalmente adequados; registar se predominam as competências motoras grossas ou finas, incluindo a escrita (DSM-5-TR, págs. 189-190)."
  ],
  "differential": [
   "h-phda",
   "h-autismo",
   "h-ddi",
   "Doença do sistema nervoso (paralisia cerebral, distrofia muscular): exame neurológico (CID-11)",
   "Doença musculo-esquelética ou do tecido conjuntivo, hipermobilidade articular, défice visual grave (CID-11)",
   "Privação psicossocial extrema na infância precoce (CID-11)",
   "Falta de oportunidade ou de prática de competências motoras, diferenças culturais (EACD 2019)",
   "Ansiedade, depressão ou problemas de atenção como causa primária dos problemas motores (EACD 2019, critério III)"
  ],
  "comorbid": [
   "h-phda (cerca de 50% dos casos, CID-11); o DSM-5-TR também indica cerca de 50%, pág. 192",
   "h-linguagem",
   "h-aprendizagem (sobretudo leitura e escrita)",
   "h-autismo",
   "h-ddi",
   "Perturbação dos sons da fala (articulação)",
   "Problemas de comportamento disruptivo, ansiedade e depressão (CID-11); DSM-5-TR: problemas emocionais e de comportamento disruptivo, pág. 192",
   "Excesso de peso ou obesidade (risco aumentado, CID-11)",
   "Hipermobilidade articular e perturbações da comunicação (DSM-5-TR, pág. 192)"
  ],
  "source": "ICD-11 CDDR, OMS, 2024 (ISBN 978-92-4-007726-3), https://www.who.int/publications/i/item/9789240077263 (texto lido numa cópia com o mesmo ISBN, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção 6A04, pp. 139-142; Blank et al. (EACD), International clinical practice recommendations on DCD, Dev Med Child Neurol 2019;61(3):242-285, https://doi.org/10.1111/dmcn.14132 (texto integral; rec. 2, 3, 4 e 14; o texto indica validade até 31/12/2022 e não encontrei a revisão seguinte; as recomendações seguem os critérios do DSM-5 com pequenas alterações). Não encontrei guideline NICE nem AAP de diagnóstico. DSM-5-TR (APA, 2022), Developmental Coordination Disorder F82: critérios págs. 188-189, Diagnostic Features 189-190, Development and Course 190, Differential Diagnosis 191-192, Comorbidity 192 (ficheiro dsm5tr__dsm5tr-completo.pdf.txt, índice de página base 0). Verificado contra o texto do DSM-5-TR; continua rascunho, por validar pelo médico. Concordância: os critérios A a D do DSM-5-TR e a CID-11 6A04 coincidem no essencial (sem limiar quantitativo; habitualmente não diagnosticado antes dos 5 anos), e a EACD segue o DSM-5. Critérios seguidos: CID-11 6A04 (descrição sem limiar quantitativo); a EACD acrescenta a prudência abaixo dos 5 anos. Nota: este quadro só tem um sinal de domínio (d-outros) e nenhum sinal de apoio nos dados disponíveis."
 },
 {
  "id": "h-oposicao",
  "name": "Perturbação de oposição e desafio",
  "icd11": "6C90 (6C90.0 com irritabilidade-raiva crónica; 6C90.1 sem irritabilidade-raiva crónica)",
  "branches": [
   "pre",
   "esc"
  ],
  "core": [
   {
    "domain": "d-comportamento",
    "level": 2,
    "why": "Padrão marcado de comportamento não cumpridor, desafiador e desobediente, atípico para a idade, o desenvolvimento, o género e o contexto (CID-11 6C90)."
   }
  ],
  "support": [
   {
    "scale": "snap_oposicao",
    "why": "Subescala de oposição/desafio do SNAP-IV em banda moderada ou superior; apoio, não diagnóstico."
   },
   {
    "scale": "sdq_comportamento",
    "why": "Subescala de problemas de comportamento do SDQ elevada; o NICE CG158 1.3.4 aconselha o SDQ (pais, cuidadores ou professor) na avaliação inicial."
   },
   {
    "domain": "d-humor",
    "level": 1,
    "why": "Irritabilidade ou raiva quase diárias, em vários contextos, podem configurar o especificador com irritabilidade-raiva crónica (CID-11 6C90.0); excluir antes episódio de humor. No DSM-5-TR, irritabilidade crónica com acessos frequentes corresponde à perturbação de desregulação disruptiva do humor (F34.81), que exclui o diagnóstico de oposição (págs. 302-303 e 732); ver h-ddm."
   }
  ],
  "confirm": [
   "Padrão marcadamente não cumpridor, desafiador e desobediente, atípico para a idade, o nível de desenvolvimento, o género e o contexto sociocultural (CID-11 6C90): dificuldade persistente em se relacionar (discutir com figuras de autoridade, recusar pedidos ou regras, irritar de propósito, culpar os outros), comportamento provocador, rancoroso ou vingativo, irritabilidade ou raiva extremas. DSM-5-TR (critério A, págs. 727-728): pelo menos 4 de 8 sintomas, de humor zangado ou irritável, comportamento argumentativo ou desafiador e vingança, em interação com pelo menos uma pessoa que não seja irmão (entre irmãos são comuns).",
   "Padrão mantido durante um período prolongado (a CID-11 dá como exemplo 6 meses ou mais). Desafio ou birras transitórios, em fases de maior exigência ou mudança (por exemplo escola nova) ou por ansiedade normativa, não bastam (CID-11). Ocorrência pouco frequente de comportamentos desafiadores não exclui, se caracterizam a maioria das interações com figuras de autoridade (CID-11). DSM-5-TR (págs. 728-729): pelo menos 6 meses com frequência mínima: abaixo dos 5 anos, na maioria dos dias; a partir dos 5, pelo menos uma vez por semana (vingança: 2 vezes em 6 meses); na idade pré-escolar, uma birra só conta se ocorrer na maioria dos dias nos 6 meses, com pelo menos 3 outros sintomas e contribuir para o prejuízo; avaliar sempre face ao normativo para a idade, o género e a cultura.",
   "Prejuízo significativo pessoal, familiar, social ou escolar (CID-11). DSM-5-TR critério B: mal-estar na pessoa ou em quem a rodeia, ou impacto negativo no funcionamento social, escolar ou ocupacional.",
   "Não é melhor explicado por um problema relacional com uma figura de autoridade em particular que seja antagonista ou faça exigências desrazoáveis (CID-11).",
   "O comportamento não ocorre só no contexto de episódios de humor (depressivo, maníaco, hipomaníaco ou misto) nem só em resposta a situações que provocam ansiedade, medo ou pânico (CID-11). DSM-5-TR critério C: não ocorre só durante perturbação psicótica, por uso de substâncias, depressiva ou bipolar, e não se cumprem os critérios de desregulação disruptiva do humor.",
   "Especificadores a registar: com ou sem irritabilidade-raiva crónica (quase todos os dias, em vários contextos e não só com os pais; CID-11) e com emoções pró-sociais limitadas ou típicas (CID-11). No DSM-5-TR a gravidade define-se pelos contextos com sintomas (ligeira: 1; moderada: 2; grave: 3 ou mais) e é comum só haver sintomas em casa e com a família (pág. 728).",
   "Início: sintomas iniciais tipicamente em idade pré-escolar, início habitual no meio da infância, raramente surge pela primeira vez depois do início da adolescência (CID-11). DSM-5-TR (pág. 730): primeiros sintomas habitualmente em idade pré-escolar e raramente depois do início da adolescência; os sintomas de humor zangado ou irritável carregam mais risco de ansiedade e depressão, e os desafiadores e vingativos mais risco de perturbação do comportamento.",
   "Informação de várias fontes (pais, professor, a própria criança a sós), funcionamento em casa, na escola e com os pares, qualidade da parentalidade e saúde mental e física (NICE CG158 1.3.8 e 1.3.10).",
   "Rastrear fatores complicadores: perturbação mental coexistente, PHDA, autismo, dificuldades de aprendizagem, problemas de comunicação, epilepsia, consumo de substâncias (NICE CG158 1.3.5 e 1.3.11); a história de uma condição do neurodesenvolvimento não é barreira à avaliação (NICE CG158 1.3.3).",
   "Avaliar parentalidade (inclusive disciplina coerciva), relações familiares e risco de abuso físico, sexual ou emocional (NICE CG158 1.3.14 e 1.3.15); a CID-11 associa a perturbação a perturbações nos cuidados e a parentalidade dura, inconsistente ou negligente.",
   "Avaliar vários contextos e relações: os sintomas notam-se mais com adultos ou pares que a criança conhece bem e podem não aparecer na consulta (DSM-5-TR, pág. 729)."
  ],
  "differential": [
   "h-phda",
   "h-autismo",
   "h-conduta",
   "Ansiedade: recusa, explosões e irritabilidade para evitar o que assusta; sem comportamento provocador, rancoroso ou vingativo (CID-11; ver domínio Ansiedade)",
   "Episódio depressivo, maníaco ou hipomaníaco: irritabilidade e não colaboração dentro do episódio (CID-11; ver domínio Humor); DSM-5-TR (pág. 732): não diagnosticar oposição se os sintomas ocorrem só durante uma perturbação do humor",
   "Perturbação explosiva intermitente: acessos graves desproporcionados sem o padrão desafiador, com mais agressão física (CID-11); DSM-5-TR (pág. 732): a perturbação explosiva intermitente tem agressão grave contra outros, que não faz parte da definição de oposição",
   "Problema relacional com uma figura de autoridade específica ou exigências desrazoáveis (CID-11)",
   "Contexto: mudanças (escola ou cidade nova), perdas, conflito familiar ou maus-tratos; perguntar o que mudou e quando começou (CID-11; NICE CG158 1.3.14)",
   "h-ddm",
   "Perturbação de desregulação disruptiva do humor (DSM-5-TR, F34.81; sem categoria própria na CID-11, onde corresponde ao especificador 6C90.0): irritabilidade crónica entre acessos graves, 3 ou mais por semana, durante 12 meses ou mais; se cumpre os critérios, não se diagnostica oposição mesmo que os cumpra também (págs. 302-303 e 732-733)",
   "Perturbação de adaptação: associada a um stressor, com sintomas por menos de 6 meses após o fim do stressor (DSM-5-TR, págs. 731-732)",
   "Perturbação de stress pós-traumático abaixo dos 6 anos (desregulação, oposição e birras) e, no adolescente, reencenação e comportamentos de risco confundidos com desafio ou conduta (DSM-5-TR, pág. 732)",
   "PHDA: a recusa em obedecer não pode ocorrer só em situações que exigem esforço sustentado ou ficar sentado; deficiência intelectual (só se a oposição for muito superior à de idade mental comparável), perturbação da linguagem ou perda auditiva e ansiedade social (medo de avaliação negativa) também explicam a falha em cumprir pedidos (DSM-5-TR, pág. 732)",
   "Perturbação do comportamento: a oposição é em regra menos grave, sem agressão a pessoas ou animais, destruição de bens ou furto e fraude, e inclui desregulação emocional; os dois diagnósticos podem coexistir (DSM-5-TR, págs. 731 e 745)"
  ],
  "comorbid": [
   "h-phda",
   "h-conduta (podem coexistir se cumprirem ambos os critérios, CID-11); o DSM-5-TR também admite os dois diagnósticos; a oposição precede a conduta sobretudo no subtipo de início na infância, mas a maioria das crianças com oposição não desenvolve conduta (págs. 730-732 e 745)",
   "h-autismo",
   "h-aprendizagem",
   "h-linguagem",
   "Perturbações depressivas e de ansiedade (o especificador com irritabilidade-raiva crónica associa-se a depressão e ansiedade posteriores, CID-11); DSM-5-TR: associa-se sobretudo aos sintomas de humor zangado ou irritável (págs. 730 e 732)",
   "Consumo de substâncias (adolescentes); DSM-5-TR, pág. 733",
   "PHDA: a oposição acompanha cerca de metade das crianças com apresentação combinada e cerca de um quarto das com a desatenta (DSM-5-TR, pág. 732)"
  ],
  "source": "ICD-11 CDDR, OMS, 2024 (ISBN 978-92-4-007726-3), https://www.who.int/publications/i/item/9789240077263 (texto lido numa cópia com o mesmo ISBN, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção 6C90, pp. 538-543, e especificador de emoções pró-sociais, pp. 548-549; NICE CG158, 2013 (atualizada 19/04/2017; revista 17/04/2025), https://www.nice.org.uk/guidance/cg158, rec. 1.3.1 a 1.3.16. Critérios seguidos: CID-11 (padrão 'por exemplo 6 meses ou mais', sem número mínimo de sintomas nem divisão por idade). Divergência lida: o NICE CG158 1.3.10 separa os sintomas nucleares por idade (comportamento negativista, hostil ou desafiador abaixo dos 11 anos; agressão, destruição, fraude ou furto e violação de regras acima dos 11); a CID-11 não divide por idade e distingue a oposição da perturbação do comportamento pela gravidade e pela violação dos direitos dos outros. DSM-5-TR (APA, 2022), Oppositional Defiant Disorder F91.3: critérios págs. 727-728, Diagnostic Features 728-729, Development and Course 730, Differential Diagnosis 731-732, Comorbidity 732-733 (ficheiro dsm5tr__dsm5tr-completo.pdf.txt, índice de página base 0). Verificado contra o texto do DSM-5-TR; continua rascunho, por validar pelo médico. Divergências DSM-5-TR contra CID-11, mantidas as duas: (1) o DSM-5-TR exige pelo menos 4 de 8 sintomas (humor zangado ou irritável, comportamento argumentativo ou desafiador, vingança) durante pelo menos 6 meses, com frequência mínima (abaixo dos 5 anos, na maioria dos dias; a partir dos 5, pelo menos uma vez por semana; a vingança 2 vezes em 6 meses) e numa interação com pelo menos uma pessoa que não seja irmão; a CID-11 não fixa número de sintomas e dá 6 meses como exemplo; (2) o DSM-5-TR classifica a gravidade pelo número de contextos (1, 2, 3 ou mais) e não tem os especificadores da CID-11 (irritabilidade-raiva crónica, emoções pró-sociais); (3) a irritabilidade crónica com acessos frequentes é no DSM-5-TR a perturbação de desregulação disruptiva do humor (F34.81, que exclui o diagnóstico de oposição, ver h-ddm) e na CID-11 o especificador 6C90.0, sem categoria própria. A série de parâmetros AACAP sobre oposição (2007) não é usada: foi descontinuada."
 },
 {
  "id": "h-conduta",
  "name": "Perturbação do comportamento (perturbação dissocial)",
  "icd11": "6C91 (6C91.0 início na infância; 6C91.1 início na adolescência)",
  "branches": [
   "esc",
   "adol"
  ],
  "core": [
   {
    "domain": "d-comportamento",
    "level": 2,
    "why": "Padrão repetitivo e persistente de violação dos direitos dos outros ou de normas e regras importantes para a idade (agressão, destruição de bens, fraude ou furto, violações graves de regras) (CID-11 6C91)."
   }
  ],
  "support": [
   {
    "scale": "sdq_comportamento",
    "why": "Subescala de problemas de comportamento do SDQ elevada; o NICE CG158 1.3.4 aconselha o SDQ (pais, cuidadores ou professor) na avaliação inicial."
   },
   {
    "risk": "risk-terc",
    "why": "Agressão a pessoas ou animais, ameaças, intimidação ou uso de armas fazem parte do padrão (CID-11 6C91); triagem de risco positiva reforça e exige gestão de risco (NICE CG158 1.3.13). No DSM-5-TR, os critérios A1 a A7 incluem intimidar, lutar, usar arma, crueldade com pessoas ou animais, furto com confronto e coação sexual (pág. 738)."
   },
   {
    "domain": "d-substancias",
    "level": 1,
    "why": "Consumo de substâncias, sobretudo álcool, coocorre com frequência na adolescência (CID-11 6C91); o NICE CG158 1.3.5 inclui-o como fator complicador. O DSM-5-TR refere o consumo de substâncias como característica associada, sobretudo em adolescentes do sexo feminino, e como comorbilidade (págs. 742 e 746)."
   },
   {
    "scale": "sdq_prosocial_baixo",
    "why": "Comportamento pró-social baixo no SDQ: ligação indireta ao especificador de emoções pró-sociais limitadas (pouca empatia, pouco remorso), que a CID-11 define por informação de quem conhece a criança há muito tempo e por um padrão persistente."
   }
  ],
  "confirm": [
   "Padrão repetitivo e persistente em que se violam os direitos básicos dos outros ou normas, regras ou leis sociais importantes para a idade, tipicamente com vários comportamentos de pelo menos um destes grupos: agressão a pessoas ou animais (intimidação, ameaças, lutas, armas, crueldade, roubo com violência, coação sexual); destruição de bens (incluindo fogo posto intencional); fraude ou furto; violações graves de regras (noites fora apesar de proibição, fugas repetidas, faltas frequentes à escola) (CID-11 6C91). DSM-5-TR (critério A, págs. 738 e 741): lista de 15 comportamentos em 4 grupos (agressão a pessoas e animais, destruição de bens, fraude ou furto, violações graves de regras); sair à noite apesar de proibição e faltar à escola só contam se começaram antes dos 13 anos, e fugir de casa exige pelo menos 2 noites (ou 1 prolongada) e não conta se for consequência direta de abuso.",
   "Padrão persistente e recorrente, com vários episódios durante um período prolongado (a CID-11 dá como exemplo pelo menos 1 ano). Um ou mais atos delinquentes isolados não bastam; avaliar o padrão global e não só a criminalidade de cada episódio (CID-11). DSM-5-TR (pág. 738): pelo menos 3 dos 15 comportamentos nos últimos 12 meses, com pelo menos 1 nos últimos 6; a CID-11 não fixa número.",
   "Prejuízo significativo pessoal, familiar, social ou escolar (CID-11). DSM-5-TR critério B: prejuízo clinicamente significativo social, escolar ou ocupacional.",
   "Idade de início: subtipo de início na infância (um ou mais aspetos claramente presentes e persistentes antes da adolescência, por exemplo antes dos 10 anos, com pior prognóstico) ou de início na adolescência (nenhum antes); a CID-11 indica início típico no início ou meio da adolescência e raro depois dos 16 anos. DSM-5-TR (págs. 738-739 e 742): início na infância se pelo menos um sintoma antes dos 10 anos (F91.1), na adolescência se nenhum antes dos 10 (F91.2), não especificado se falta informação (F91.9); primeiros sintomas significativos da meia-infância à meia-adolescência e início raro depois dos 16 anos.",
   "Emoções pró-sociais limitadas (especificador): vários de pouca empatia, pouco remorso ou culpa, pouca preocupação com o desempenho, expressão emocional superficial; pervasivo e persistente (por exemplo 1 ano ou mais); informação de quem conhece a criança há muito tempo, além do autorrelato (CID-11). É independente do início na infância. DSM-5-TR (págs. 739-741): pelo menos 2 de 4 características (falta de remorso ou culpa; frieza e falta de empatia; despreocupação com o desempenho; afeto superficial ou deficiente), persistentes durante pelo menos 12 meses e em várias relações e contextos, com informação de quem conhece o jovem há muito tempo; aplica-se a qualquer subtipo e gravidade, mais provável no início na infância e na forma grave.",
   "Excluir comportamentos adaptativos ao contexto (por exemplo fugir de uma casa abusiva, roubar para sobreviver), e coerção em contextos de violência organizada ou de guerra (CID-11). Protestos políticos não contam (CID-11). O DSM-5-TR também pede para ponderar o contexto (por exemplo zonas de guerra ou de elevada criminalidade, em que o comportamento é quase normativo) e reações de resistência à discriminação, que podem ser mal diagnosticadas como conduta (pág. 744).",
   "Se o comportamento dissocial se limita a obter ou usar substâncias, ou à intoxicação, dependência ou abstinência, considerar antes perturbação por uso de substâncias (CID-11); se ocorre só dentro de episódios de humor, geralmente não se diagnostica (CID-11). Divergência: o DSM-5-TR admite os dois diagnósticos (conduta e perturbação do humor) quando há problemas de conduta em períodos sem alteração do humor, antes dela ou atos premeditados fora de excitação emocional intensa (pág. 745).",
   "Avaliação completa (NICE CG158 1.3.8 a 1.3.16): ouvir a criança ou jovem a sós, informador que conheça o comportamento atual e passado, funcionamento em casa, escola e pares, qualidade da parentalidade (incluindo disciplina coerciva), saúde mental e física, riscos para si e para os outros, abuso físico, sexual ou emocional.",
   "Fatores complicadores a rastrear (perturbação mental, PHDA, autismo, dificuldade de aprendizagem, consumo): se presentes, o NICE CG158 1.3.6 manda para avaliação especializada abrangente.",
   "Gravidade no DSM-5-TR pelo número e pelo dano dos comportamentos (ligeira: por exemplo mentir e faltar à escola; moderada: furto sem confronto e vandalismo; grave: coação sexual, crueldade física, arma, furto com confronto, arrombamento) (págs. 739-740)."
  ],
  "differential": [
   "h-oposicao",
   "h-phda",
   "Episódios de humor (depressivo, maníaco, misto ou hipomaníaco): irritabilidade, agressão e comportamentos de risco dentro do episódio (CID-11)",
   "Perturbação explosiva intermitente: agressão impulsiva em acessos, sem padrão geral de violação de regras, mentira ou furto; na perturbação do comportamento a agressão é muitas vezes premeditada e instrumental (CID-11); DSM-5-TR (pág. 745): só se diagnostica quando os acessos impulsivos recorrentes merecem atenção clínica independente",
   "Perturbação por uso de substâncias (comportamento limitado à obtenção ou uso, ou ligado à intoxicação) (CID-11)",
   "Perturbação da personalidade (pode coexistir, sobretudo em adolescentes mais velhos; CID-11)",
   "Trauma, maus-tratos ou contexto de perigo: comportamentos adaptativos ao ambiente não devem ser a única base do diagnóstico (CID-11; ver domínio Trauma e risk-mt)",
   "Oposição: no DSM-5-TR é em regra menos grave, sem agressão a pessoas ou animais, destruição de bens ou furto e fraude, e inclui desregulação emocional; os dois diagnósticos podem coexistir (pág. 745)",
   "PHDA: a hiperatividade e a impulsividade por si não violam normas nem os direitos dos outros; se ambos os critérios forem cumpridos, fazem-se os dois diagnósticos (DSM-5-TR, pág. 745)",
   "Perturbação de adaptação com perturbação da conduta: problemas de conduta em clara associação com o início de um stressor psicossocial, sem cumprir os critérios de outra perturbação (DSM-5-TR, pág. 745)"
  ],
  "comorbid": [
   "h-phda",
   "h-oposicao",
   "h-aprendizagem",
   "h-autismo",
   "h-linguagem",
   "Perturbações de ansiedade e do humor, TEPT e perturbação bipolar (NICE CG158 1.3.11); DSM-5-TR, pág. 746",
   "Consumo de substâncias, sobretudo álcool (adolescentes, CID-11)",
   "Epilepsia e défices motores (NICE CG158 1.3.11)",
   "Perturbação específica da aprendizagem e perturbações da comunicação: o rendimento em leitura e competências verbais abaixo do esperado pode justificar o diagnóstico adicional (DSM-5-TR, pág. 746); PHDA e oposição em conjunto predizem pior evolução (pág. 746)"
  ],
  "source": "ICD-11 CDDR, OMS, 2024 (ISBN 978-92-4-007726-3), https://www.who.int/publications/i/item/9789240077263 (texto lido numa cópia com o mesmo ISBN, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção 6C91, pp. 544-549 (especificadores de início e de emoções pró-sociais, pp. 544-545 e 548-549); NICE CG158, 2013 (atualizada 19/04/2017; revista 17/04/2025), https://www.nice.org.uk/guidance/cg158, rec. 1.3.1 a 1.3.16. Critérios seguidos: CID-11 (padrão 'por exemplo pelo menos 1 ano', sem número mínimo de comportamentos, sem divisão por idade). Divergência lida: o NICE CG158 1.3.10 divide os sintomas nucleares por idade (acima dos 11 anos: agressão, destruição de bens, fraude ou furto, violação de regras); a CID-11 não o faz. DSM-5-TR (APA, 2022), Conduct Disorder, F91.1 início na infância, F91.2 início na adolescência, F91.9 início não especificado: critérios págs. 737-739, subtipos e especificadores 739-741, Diagnostic Features 741, Development and Course 742, Differential Diagnosis 744-745, Comorbidity 745-746 (ficheiro dsm5tr__dsm5tr-completo.pdf.txt, índice de página base 0). Verificado contra o texto do DSM-5-TR; continua rascunho, por validar pelo médico. Divergências DSM-5-TR contra CID-11, mantidas as duas: (1) o DSM-5-TR exige pelo menos 3 de 15 critérios nos últimos 12 meses, com pelo menos 1 nos últimos 6; a CID-11 não fixa número e dá pelo menos 1 ano como exemplo; (2) o DSM-5-TR admite os diagnósticos de conduta e de perturbação do humor em simultâneo quando há problemas de conduta fora dos períodos de alteração do humor, enquanto a CID-11 diz que em geral não se diagnostica se ocorre só dentro de episódios de humor; (3) o especificador de emoções pró-sociais limitadas exige no DSM-5-TR pelo menos 2 de 4 características durante pelo menos 12 meses em várias relações e contextos; a CID-11 dá 1 ano como exemplo; (4) a idade de início de 10 anos coincide nos dois sistemas (a CID-11 dá-a como exemplo)."
 },
 {
  "id": "h-tiques",
  "name": "Perturbação de tiques e síndrome de Tourette",
  "icd11": "8A05.00 síndrome de Tourette; 8A05.01 perturbação de tiques motores crónicos; 8A05.02 perturbação de tiques fónicos crónicos (capítulo 8, com referência cruzada no neurodesenvolvimento)",
  "branches": [
   "pre",
   "esc"
  ],
  "core": [
   {
    "domain": "d-outros",
    "level": 2,
    "why": "Tiques motores e/ou fónicos (movimentos ou sons súbitos, rápidos, não rítmicos e recorrentes) (domínio misto 'Tiques, eliminação e outros': confirmar que o achado é de tiques)."
   }
  ],
  "support": [
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "PHDA coexiste em cerca de 55 a 60% das pessoas com síndrome de Tourette (ESSTS 2022; CID-11 8A05.00); associação, não critério. O DSM-5-TR também refere PHDA, TOC e comportamento disruptivo como as comorbilidades mais comuns (pág. 203)."
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "TOC (22 a 66% em populações clínicas, ESSTS 2022) e ansiedade, incluindo de separação em crianças (CID-11), são frequentes; associação, não critério."
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Acessos de raiva em 25 a 75% das pessoas com tiques (ESSTS 2022), ligados a PHDA, autismo ou TOC; associação, não critério."
   }
  ],
  "confirm": [
   "Síndrome de Tourette: tiques motores e tiques fónicos (vocais), os dois tipos presentes, não necessariamente em simultâneo nem de forma contínua. Só motores: tiques motores crónicos (8A05.01). Só fónicos: tiques fónicos crónicos (8A05.02) (CID-11). DSM-5-TR (págs. 197-198): Tourette (F95.2) exige tiques motores múltiplos e pelo menos um vocal em algum momento; tiques crónicos motores ou vocais (F95.1) são só motores ou só vocais e nunca cumpriram os critérios de Tourette; a hierarquia é Tourette, crónico, provisório.",
   "Tiques definidos como movimentos ou vocalizações súbitos, rápidos, não rítmicos e recorrentes (CID-11).",
   "Presentes há pelo menos 1 ano (podem aumentar e diminuir), com início no período do desenvolvimento (CID-11). A ESSTS 2022 refere que o DSM-5 usa início antes dos 18 anos, o que o DSM-5-TR confirma (critério C, págs. 197-198), com 'mais de 1 ano desde o primeiro tique' (a CID-11 diz pelo menos 1 ano); períodos de semanas a meses sem tiques não anulam a persistência (pág. 199).",
   "Tiques transitórios (piscar de olhos, pigarrear) são comuns na infância e distinguem-se pela natureza transitória (CID-11): sem 1 ano de evolução não cumprem os critérios de síndrome de Tourette nem de tiques crónicos. No DSM-5-TR, tiques com menos de 1 ano correspondem à perturbação de tiques provisória (F95.0), sem equivalente na CID-11 (pág. 198).",
   "Não são manifestação de outra condição médica (por exemplo doença de Huntington), nem efeito de substância ou medicação no sistema nervoso central (por exemplo anfetamina), incluindo abstinência (por exemplo de benzodiazepinas) (CID-11). DSM-5-TR critério D (págs. 198 e 200): não atribuível a substância (por exemplo cocaína) nem a outra condição médica (por exemplo doença de Huntington, encefalite pós-viral); com causa plausível usa-se 'tiques outra especificada'.",
   "Características do tique: suprimíveis por períodos curtos, agravam com stress, diminuem no sono ou em atividade agradável focada, sugestionáveis; urgência premonitória, tipicamente reconhecida a partir dos 10 anos (CID-11; ESSTS 2022). DSM-5-TR (págs. 199 e 201): sensação premonitória e urgência antes de muitos tiques, supressão por períodos variáveis, agravamento com ansiedade, entusiasmo e cansaço, melhoria em atividades calmas e focadas.",
   "História de início e evolução: idade de início dos tiques motores e dos fónicos (os fónicos costumam surgir 1 a 2 anos depois), idade média de início cerca de 5 anos, pior período entre os 8 e os 12 anos (CID-11; ESSTS 2022). DSM-5-TR (págs. 199-200): início habitual entre os 4 e os 6 anos, com piscar de olhos frequente como sintoma inicial, gravidade máxima entre os 10 e os 12 anos e declínio na adolescência; tiques de início na idade adulta são raros e associam-se a substâncias, lesão do sistema nervoso central ou perturbação funcional, devendo levar a avaliar outras perturbações do movimento.",
   "Início súbito ou tardio, movimentos complexos e rítmicos nos braços, pernas e tronco, ausência de urgência premonitória ou de supressão, e relação com redes sociais: pensar em tiques funcionais, que podem coexistir com tiques verdadeiros (ESSTS 2022).",
   "Se não há tiques na consulta, apoiar-se em vários informadores e em vídeo, porque os tiques variam e podem ser suprimidos no consultório (ESSTS 2022).",
   "Avaliar comorbilidade (PHDA, TOC, autismo, ansiedade, humor, comportamento, sono, aprendizagem), acessos de raiva e autolesão (ESSTS 2022; CID-11).",
   "Perguntar por ideação e comportamento suicida: no Tourette e nos tiques crónicos o DSM-5-TR indica risco aumentado de tentativa (OR 3,86) e de morte por suicídio (OR 4,39), e cerca de 1 em 10 jovens com tiques crónicos tem ideação ou comportamento suicida, sobretudo com raiva, ansiedade ou depressão e problemas sociais (págs. 201-202)."
  ],
  "differential": [
   "h-autismo",
   "h-phda",
   "Perturbação do movimento estereotipado (CID-11 6A06) e estereotipias do autismo: movimentos mais fixos, mais prolongados, quase rítmicos, em vários grupos musculares, com início aos 0-3 anos, sem urgência premonitória e muitas vezes calmantes ou prazerosos (CID-11; ESSTS 2022); DSM-5-TR (págs. 202 e 196): estereotipias com início antes dos 3 anos, duração de segundos a minutos, rítmicas, sem urgência premonitória, agradáveis e que cessam com a distração",
   "TOC: as compulsões visam neutralizar cognições ou reduzir ansiedade, e os tiques complexos podem ser difíceis de distinguir; ambos podem ser atribuídos (CID-11; ver domínio Ansiedade); DSM-5-TR (pág. 203): no TOC as compulsões respondem a obsessões; nos tiques a ação faz-se de certa maneira ou até se sentir 'certo'",
   "Tiques funcionais (ESSTS 2022); DSM-5-TR (pág. 203): 'ataques de tiques' de 15 minutos a várias horas apontam para perturbação funcional",
   "Coreia, distonia, mioclonias e blefarospasmo: tiques breves confundem-se com coreia e tiques prolongados com distonia; podem coexistir (ESSTS 2022); DSM-5-TR (págs. 202-203): também discinesias paroxísticas e mioclonias (súbitas, não suprimíveis, sem urgência, podem ocorrer durante o sono)",
   "Epilepsia focal: movimentos estereotipados e ligados a partes específicas do corpo, por vezes com estímulo fotossensível (ESSTS 2022)",
   "Causas oftalmológicas (tiques oculares), otorrinolaringológicas ou digestivas (pigarrear ou fungar, por alergia ou refluxo) (ESSTS 2022)",
   "Substâncias e medicação: perguntar por fármacos e drogas recentes (CID-11)",
   "Autolesão intencional: a síndrome de Tourette não envolve intenção de se ferir, embora tiques com força e repetição possam causar lesão (CID-11)",
   "Disfluência da fala: os tiques complexos não implicam a disfluência marcada da perturbação da fluência da fala (CID-11 6A01.1)",
   "PANS/PANDAS: hipótese debatida; um grande estudo europeu (EMTICS) não mostrou relação específica entre infeções estreptocócicas e exacerbação dos tiques (ESSTS 2022)",
   "Comportamentos repetitivos focados no corpo (arrancar cabelo, esfolar a pele, roer unhas): mais dirigidos a um objetivo e mais complexos do que os tiques (DSM-5-TR, pág. 203)",
   "PHDA: tiques múltiplos e frequentes podem confundir-se com a irrequietude generalizada; pode ser preciso observação prolongada (DSM-5-TR, pág. 173)"
  ],
  "comorbid": [
   "h-phda (cerca de 55 a 60%)",
   "TOC (22 a 66% em populações clínicas)",
   "h-autismo",
   "Ansiedade de separação (crianças) e outras perturbações de ansiedade; no DSM-5-TR, ansiedade de separação e TOC são mais frequentes antes da puberdade (pág. 200)",
   "Perturbações depressivas, perturbação por uso de substâncias e perturbação bipolar (mais em adolescentes e adultos, CID-11)",
   "Acessos de raiva e comportamento autolesivo",
   "h-aprendizagem",
   "h-dcd (dificuldades motoras, ESSTS 2022)",
   "Comportamento disruptivo, imaturidade social e dificuldades de aprendizagem associados à PHDA coexistente, que podem prejudicar mais do que os tiques; TOC com início mais precoce, simetria, exatidão e pensamentos proibidos (DSM-5-TR, pág. 203)",
   "Outras perturbações do movimento (coreia de Sydenham, perturbação do movimento estereotipado) (DSM-5-TR, pág. 203)"
  ],
  "source": "ICD-11 CDDR, OMS, 2024 (ISBN 978-92-4-007726-3), https://www.who.int/publications/i/item/9789240077263 (texto lido numa cópia com o mesmo ISBN, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção 8A05.0 (8A05.00, 8A05.01 e 8A05.02), pp. 153-159 (categorias do capítulo das doenças do sistema nervoso, com referência cruzada no neurodesenvolvimento); ESSTS, European clinical guidelines for Tourette syndrome and other tic disorders, version 2.0, Part I: assessment, Eur Child Adolesc Psychiatry 2022;31:383-402, https://doi.org/10.1007/s00787-021-01842-2 (texto integral). Não encontrei guideline NICE nem AAP de diagnóstico de tiques. DSM-5-TR (APA, 2022), Tic Disorders: Tourette's Disorder F95.2; Persistent (Chronic) Motor or Vocal Tic Disorder F95.1 (com tiques só motores ou só vocais); Provisional Tic Disorder F95.0 (F95.8 e F95.9 para outra especificada e não especificada): critérios págs. 197-198, Diagnostic Features 198-200, Development and Course 200, Differential Diagnosis 202-203, Comorbidity 203 (ficheiro dsm5tr__dsm5tr-completo.pdf.txt, índice de página base 0). Verificado contra o texto do DSM-5-TR; continua rascunho, por validar pelo médico. Critérios seguidos: CID-11 (pelo menos 1 ano, início no período do desenvolvimento) e DSM-5-TR lado a lado. Divergências DSM-5-TR contra CID-11: (1) duração: mais de 1 ano desde o primeiro tique no DSM-5-TR, pelo menos 1 ano na CID-11; (2) idade: início antes dos 18 anos no DSM-5-TR, sem idade na CID-11; (3) o DSM-5-TR tem uma só categoria de tiques crónicos motores ou vocais, com especificador, e a CID-11 separa 8A05.01 (motores) e 8A05.02 (fónicos); (4) o DSM-5-TR tem a perturbação de tiques provisória (menos de 1 ano, F95.0) e uma hierarquia entre categorias, a CID-11 não tem categoria equivalente e trata os tiques transitórios como fronteira com a normalidade. Divergência: a ESSTS 2022 refere que usa o DSM-5 (início antes dos 18 anos) para diagnosticar e critica a colocação da síndrome de Tourette, na CID-11, nos movimentos do capítulo do sistema nervoso e não nas perturbações emocionais; a CID-11 não fixa 18 anos."
 },
 {
  "id": "h-anorexia-nervosa",
  "name": "Anorexia nervosa",
  "icd11": "6B80",
  "branches": [
   "esc",
   "adol"
  ],
  "core": [
   {
    "domain": "d-alimentacao",
    "level": 2,
    "why": "Restrição alimentar persistente, com preocupação excessiva com peso ou forma e/ou peso baixo ou falha de ganho de peso esperado."
   }
  ],
  "support": [
   {
    "domain": "d-humor",
    "level": 1,
    "why": "Depressão associada é frequente; o NICE manda avaliá-la em quem tem suspeita de perturbação alimentar."
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Ansiedade e perturbação obsessivo-compulsiva associadas; o NICE manda avaliá-las."
   },
   {
    "scale": "phqa_10",
    "why": "Rastreio de depressão associada, que o NICE NG69 1.2.9 manda avaliar."
   },
   {
    "risk": "risk-auto",
    "why": "Autolesão: avaliar sempre (NICE NG69 1.2.9)."
   },
   {
    "risk": "risk-suic",
    "why": "A morte prematura na anorexia deve-se a complicações da inanição ou a suicídio (CDDR). DSM-5-TR (p. 386): risco de suicídio 18 vezes superior ao de controlos, ideação em um quarto a um terço e tentativas em 9% a 25%."
   },
   {
    "domain": "d-substancias",
    "level": 1,
    "why": "Consumo de álcool ou substâncias a avaliar (NICE NG69 1.2.9); fármacos que aumentam o gasto de energia fazem parte dos comportamentos descritos no CDDR."
   }
  ],
  "confirm": [
   "Peso significativamente baixo para a idade, estatura e trajetória de crescimento: o CDDR dá como limiar habitual IMC para a idade abaixo do percentil 5 em crianças e adolescentes; perda rápida (mais de 20% em 6 meses) pode substituir o peso baixo; em crianças pode haver falha de ganho esperado em vez de perda. Peso baixo não explicado por doença médica nem por falta de alimento. O DSM-5-TR (critério A, pp. 381-383) não fixa limiar: refere o percentil 5 do IMC para a idade como indicação e admite peso significativamente baixo acima dele se houver falha da trajetória de crescimento esperada.",
   "Padrão persistente de restrição ou de outros comportamentos para manter peso baixo (jejum, escolha de alimentos de baixo valor energético, comer muito devagar, esconder ou cuspir comida, vómito autoinduzido, laxantes, diuréticos, omissão de insulina na diabetes, exercício excessivo, medicação que aumenta o gasto de energia).",
   "Preocupação excessiva com peso ou forma: baixo peso sobrevalorizado ou perceção inexata do corpo; se não referida, procurar verificações repetidas (balança, fita métrica, espelho), contagem de calorias ou evitamentos. Medo explícito de engordar não é obrigatório na CID-11. No DSM-5-TR são exigidos o critério B (medo intenso de engordar ou comportamento persistente que impede o ganho de peso, mesmo com peso baixo; pode ser inferido da história e da evolução quando a criança não o reconhece) e o critério C (perturbação da vivência do peso ou forma, influência indevida na autoavaliação ou falta persistente de reconhecimento da gravidade do baixo peso). Divergência mantida: seguiu-se a CID-11.",
   "Em crianças pequenas a preocupação com o corpo pode não ser articulada: recusa alimentar com 'não tenho fome' ou dor abdominal, e recusa não verbal (CDDR).",
   "Avaliar o risco médico para lá do peso: hipotensão ortostática, bradicardia, hipotermia, arritmia, alterações bioquímicas, perda de peso rápida (CDDR; NICE NG69 1.2.8 desaconselha decidir pelo IMC ou duração isolados).",
   "Se o peso estiver dentro ou acima do normal apesar de perda significativa: não cumpre a anorexia nervosa da CID-11 (peso baixo exigido). O DSM-5-TR (pp. 382-383) também não atribui anorexia nervosa a um jovem cujo IMC fique acima da mediana para a idade: considera outra perturbação alimentar especificada ('anorexia nervosa atípica', F50.89, exemplo 1; pp. 396-397). A CID-11 não descreve a categoria atípica (fica em 6B80.Y ou 6B8Y). As duas versões coincidem quanto à exclusão.",
   "Subtipos e gravidade: o DSM-5-TR (F50.01 restritivo, F50.02 compulsão-purga, pelos últimos 3 meses; gravidade pelo percentil de IMC nos jovens, em adultos IMC 17 / 16-16,99 / 15-15,99 / abaixo de 15) e a CID-11 (6B80.0 e 6B80.1 por IMC ou percentil; padrões restritivo e compulsão-purga sem janela de 3 meses) divergem na forma; mantêm-se as duas. A amenorreia não é critério em nenhuma. Início antes da puberdade é raro (DSM-5-TR p. 384)."
  ],
  "differential": [
   "h-arfid",
   "h-bulimia-nervosa",
   "Doença gastrointestinal (doença inflamatória intestinal, doença celíaca), hipertiroidismo, diabetes mellitus, insuficiência suprarrenal, infeção crónica, neoplasia, síndrome da artéria mesentérica superior a excluir primeiro (AAP 2021, quadro 4)",
   "Depressão, esquizofrenia, ansiedade ou perturbação obsessivo-compulsiva e consumo de substâncias com perda de peso (AAP 2021, quadro 4; DSM-5-TR pp. 386-387: nestas perturbações falta o medo de engordar e a perturbação da imagem corporal). Estimulantes e outras substâncias que reduzem o apetite com medo de engordar: avaliar anorexia nervosa comórbida (DSM-5-TR)",
   "Perturbação dismórfica corporal (preocupação com outras características que não o peso global; CDDR). No DSM-5-TR só se acrescenta se a distorção não for sobre peso ou forma; o mesmo critério vale para a perturbação obsessivo-compulsiva (obsessões e compulsões sem relação com comida, peso ou forma) e para a ansiedade social (medos sociais que não se limitam ao comer) (pp. 386-387)"
  ],
  "comorbid": [
   "Depressão e perturbações bipolares (DSM-5-TR p. 387)",
   "Ansiedade (frequentemente anterior ao início; DSM-5-TR p. 387)",
   "Perturbação obsessivo-compulsiva",
   "Autolesão",
   "Consumo de álcool ou substâncias (sobretudo no tipo compulsão-purga; DSM-5-TR p. 387)",
   "Diabetes tipo 1 (omissão de insulina)"
  ],
  "source": "ICD-11 CDDR secção 6B80 Anorexia nervosa (pp. 398-404; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf); NICE NG69, 2017 (atualizada em 2020), https://www.nice.org.uk/guidance/ng69/chapter/Recommendations (rec. 1.2.5-1.2.9); AAP, Hornberger et al., Pediatrics 2021;147(1):e2020040279, https://publications.aap.org/pediatrics/article/147/1/e2020040279/33504/Identification-and-Management-of-Eating-Disorders (quadros DSM-5 e quadro 4). DSM-5-TR (APA, 2022), secção Feeding and Eating Disorders, Anorexia Nervosa (F50.01 e F50.02), pp. 381-387 (índices 555-563 do texto extraído), lida: critérios A a C, subtipos, gravidade, diferencial e comorbilidade verificados no manual. Divergência DSM-5-TR contra CID-11: o DSM-5-TR exige medo de engordar ou comportamento que impede o ganho de peso (B) e perturbação da vivência do peso ou forma (C), não fixa percentis, e a CID-11 (peso baixo obrigatório, sem exigir medo de engordar) foi a seguida no texto."
 },
 {
  "id": "h-bulimia-nervosa",
  "name": "Bulimia nervosa",
  "icd11": "6B81",
  "branches": [
   "adol"
  ],
  "core": [
   {
    "domain": "d-alimentacao",
    "level": 2,
    "why": "Episódios de ingestão compulsiva com comportamentos compensatórios para evitar engordar e preocupação com peso ou forma."
   }
  ],
  "support": [
   {
    "risk": "risk-auto",
    "why": "Risco acrescido de suicidalidade (CDDR) e autolesão a avaliar (NICE NG69 1.2.9)."
   },
   {
    "risk": "risk-suic",
    "why": "Risco de suicídio aumentado na bulimia nervosa (CDDR); DSM-5-TR (p. 391): ideação e tentativas em cerca de um quarto a um terço."
   },
   {
    "domain": "d-humor",
    "level": 1,
    "why": "Depressão associada a avaliar (NICE NG69 1.2.9); culpa, nojo e vergonha após os episódios (CDDR)."
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Ansiedade associada a avaliar (NICE NG69 1.2.9)."
   },
   {
    "domain": "d-substancias",
    "level": 1,
    "why": "Risco acrescido de consumo de substâncias (CDDR)."
   },
   {
    "risk": "risk-subs",
    "why": "Consumo de substâncias na triagem (CDDR refere risco acrescido)."
   }
  ],
  "confirm": [
   "Episódios frequentes de ingestão compulsiva com perda de controlo, em período definido (por exemplo 2 horas): a CID-11 pede cerca de 1 vez por semana ou mais durante pelo menos 1 mês. O DSM-5-TR (critério C, p. 388; a AAP 2021 coincide) pede, em média, 1 vez por semana durante 3 meses, para a compulsão e para as compensações; seguiu-se a CID-11. Gravidade no DSM-5-TR pelo número de comportamentos compensatórios por semana (1-3 ligeira, 4-7 moderada, 8-13 grave, 14 ou mais extrema).",
   "Comportamentos compensatórios inadequados repetidos com a mesma frequência (vómito autoinduzido, jejum, diuréticos, laxantes ou clisteres, omissão de insulina, exercício extenuante).",
   "Preocupação excessiva com peso ou forma (ou comportamentos que a revelam: verificações, contagem de calorias, evitamentos); no DSM-5-TR (critério D) a autoavaliação é indevidamente influenciada pelo peso e forma.",
   "Sofrimento marcado com o padrão ou prejuízo significativo; nas fases iniciais pode estar oculto.",
   "Peso não suficientemente baixo para anorexia nervosa (IMC para a idade abaixo do percentil 5 com compulsão e purga: anorexia nervosa, padrão compulsivo-purgativo; DSM-5-TR critério E: não ocorre exclusivamente durante episódios de anorexia nervosa; depois de uma anorexia, só se diagnostica bulimia com todos os critérios cumpridos há pelo menos 3 meses, p. 391).",
   "Sinais físicos: desgaste dentário atípico, desequilíbrio eletrolítico ou hipoglicemia, dor abdominal com vómitos ou restrições que a doença médica não explica (NICE NG69 1.2.6). Início antes da puberdade é raro (CDDR e DSM-5-TR p. 390); crianças pequenas raramente têm compulsão alimentar por falta de acesso à comida (CDDR). Perguntar por ideação suicida e tentativas (um quarto a um terço dos casos, DSM-5-TR p. 391)."
  ],
  "differential": [
   "h-anorexia-nervosa",
   "h-ingestao-compulsiva",
   "h-ruminacao-regurgitacao",
   "Compensação pouco frequente ou de curta duração: não cumpre os limiares da CID-11; considerar outra perturbação alimentar especificada (6B8Y); no DSM-5-TR é a 'bulimia nervosa de baixa frequência (menos de 1 vez por semana e/ou menos de 3 meses)' ou a perturbação de purga (F50.89, pp. 396-397)",
   "Doença gastrointestinal (refluxo, esofagite eosinofílica, pancreatite, vómitos cíclicos), aumento da pressão intracraniana, enxaqueca ou alergia alimentar como causa de vómitos (AAP 2021, quadro 4)",
   "Síndrome de Kleine-Levin (comportamento alimentar perturbado sem preocupação com peso e forma) e depressão major com características atípicas (hiperfagia sem compensação nem preocupação com peso e forma); se se cumprirem os critérios de ambas, dão-se os dois diagnósticos (DSM-5-TR p. 392)",
   "Perturbação de personalidade borderline (a ingestão compulsiva integra o critério de impulsividade): se se cumprirem ambos os critérios, dão-se os dois diagnósticos (DSM-5-TR p. 392)"
  ],
  "comorbid": [
   "Depressão e perturbações bipolares (sobretudo depressivas; DSM-5-TR p. 392)",
   "Ansiedade (incluindo ansiedade social)",
   "Autolesão",
   "Consumo de substâncias (DSM-5-TR: prevalência ao longo da vida de pelo menos 30%, sobretudo álcool e estimulantes, estes por vezes iniciados para controlar o apetite e o peso; p. 392)",
   "Perturbação obsessivo-compulsiva",
   "Diabetes tipo 1"
  ],
  "source": "ICD-11 CDDR secção 6B81 Bulimia nervosa (pp. 404-407; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf); NICE NG69, 2017 (atualizada em 2020), https://www.nice.org.uk/guidance/ng69/chapter/Recommendations (rec. 1.2.6, 1.2.9); AAP, Hornberger et al., Pediatrics 2021;147(1):e2020040279, https://publications.aap.org/pediatrics/article/147/1/e2020040279/33504/Identification-and-Management-of-Eating-Disorders (quadros DSM-5 e quadro 4). DSM-5-TR (APA, 2022), Bulimia Nervosa (F50.2), pp. 387-393 (índices 563-569), lida: critérios A a E, gravidade, diferencial e comorbilidade verificados no manual. Divergência DSM-5-TR contra CID-11: 1 vez por semana durante 3 meses (DSM-5-TR) contra pelo menos 1 mês (CID-11); seguiu-se a CID-11."
 },
 {
  "id": "h-ingestao-compulsiva",
  "name": "Ingestão alimentar compulsiva",
  "icd11": "6B82",
  "branches": [
   "esc",
   "adol"
  ],
  "core": [
   {
    "domain": "d-alimentacao",
    "level": 2,
    "why": "Episódios recorrentes de ingestão com perda de controlo, sem compensação regular."
   }
  ],
  "support": [
   {
    "domain": "d-humor",
    "level": 1,
    "why": "Na criança a ingestão compulsiva é usada para regular emoções (CDDR); excluir que seja melhor explicada por perturbação depressiva."
   }
  ],
  "confirm": [
   "Episódios recorrentes de ingestão compulsiva com perda de controlo: a CID-11 pede cerca de 1 vez por semana ou mais durante 3 meses; pode-se atribuir mais cedo (por exemplo 1 mês) se houver vários episódios por semana com sofrimento significativo. O DSM-5-TR (critério D, F50.81) pede, em média, pelo menos 1 vez por semana durante 3 meses, sem a possibilidade de encurtar; gravidade pelos episódios por semana (1-3, 4-7, 8-13, 14 ou mais).",
   "Sem comportamentos compensatórios regulares (se houver, é bulimia nervosa); no DSM-5-TR também não ocorre exclusivamente durante a bulimia nervosa ou a anorexia nervosa (critério E).",
   "Sofrimento marcado com o padrão ou prejuízo significativo; esconder o comportamento é frequente.",
   "Na criança: pode referir 'sentir-se fora de controlo' em vez de quantidade excessiva; os episódios podem ser menos frequentes e mais curtos por falta de acesso a comida (CDDR). O DSM-5-TR (p. 394) também descreve ingestão com perda de controlo sem quantidade objetivamente excessiva em crianças, associada a aumento de gordura corporal, ganho de peso e sintomas psicológicos, e possível fase prodrómica de outras perturbações alimentares; a perturbação surge tipicamente na adolescência ou início da idade adulta.",
   "Distinguir de ingestão excessiva sem perda de controlo e de comer sem atenção que se consegue interromper: estes não são ingestão compulsiva (CDDR).",
   "Não explicada por condição médica (por exemplo síndrome de Prader-Willi), por outra perturbação mental (por exemplo depressiva), nem por substância ou medicação.",
   "Divergência: o DSM-5-TR (critérios B e C, pp. 392-393; a AAP 2021 coincide) exige 3 ou mais de 5 características dos episódios (comer muito mais depressa, até desconforto, sem fome, sozinho por vergonha, nojo de si, depressão ou culpa depois) e sofrimento marcado com a compulsão; a CID-11 apresenta-as como características adicionais, não obrigatórias. Seguiu-se a CID-11; as duas versões mantêm-se.",
   "Perguntar por ideação suicida (cerca de 25% no DSM-5-TR, p. 395) e por consumo de álcool."
  ],
  "differential": [
   "h-bulimia-nervosa",
   "Obesidade: regista-se em separado (CID-11); obesidade sem padrão de compulsão alimentar não é este diagnóstico. O DSM-5-TR (pp. 395-396) também a distingue: a maioria das pessoas obesas não tem ingestão compulsiva recorrente, e a obesidade não é perturbação mental no DSM",
   "Hipotiroidismo, hipercortisolismo, efeito de medicação, síndrome de Prader-Willi, síndrome de Kleine-Levin (AAP 2021, quadro 4: ingestão compulsiva ou aumento de peso inexplicado)",
   "Depressão com aumento de apetite e ganho de peso (características atípicas) e perturbação bipolar: se se cumprirem os critérios de ambas, dão-se os dois diagnósticos; perturbação de personalidade borderline, idem (DSM-5-TR p. 396)"
  ],
  "comorbid": [
   "Obesidade (CID-11: registar separadamente)",
   "Depressão major (DSM-5-TR p. 396: com a perturbação por consumo de álcool, as comorbilidades mais comuns; ligadas à gravidade da compulsão e não ao grau de obesidade)",
   "Consumo de álcool (DSM-5-TR p. 396)"
  ],
  "source": "ICD-11 CDDR secção 6B82 Binge-eating disorder (pp. 407-410; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf); AAP, Hornberger et al., Pediatrics 2021;147(1):e2020040279, https://publications.aap.org/pediatrics/article/147/1/e2020040279/33504/Identification-and-Management-of-Eating-Disorders (quadro DSM-5 e quadro 4). Divergência indicada em 'confirm'; seguiu-se a CID-11. DSM-5-TR (APA, 2022), Binge-Eating Disorder (F50.81), pp. 392-396 (índices 569-573), lida: critérios A a E, gravidade, diferencial e comorbilidade verificados no manual. Divergência DSM-5-TR contra CID-11 indicada em 'confirm' (3 de 5 características obrigatórias e 3 meses no DSM-5-TR); seguiu-se a CID-11."
 },
 {
  "id": "h-arfid",
  "name": "Perturbação evitante/restritiva da ingestão alimentar (ARFID)",
  "icd11": "6B83",
  "core": [
   {
    "domain": "d-alimentacao",
    "level": 2,
    "why": "Evitamento ou restrição alimentar com consequências no crescimento, na nutrição ou no funcionamento, sem preocupação com peso ou forma."
   }
  ],
  "support": [
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Receio de engasgar, vomitar ou de consequências para a saúde; ansiedade em situações de refeição (CDDR)."
   },
   {
    "domain": "d-social",
    "level": 1,
    "why": "Seletividade sensorial e rotinas rígidas também ocorrem no autismo (CDDR)."
   },
   {
    "scale": "mchat_positivo",
    "why": "Rastreio de autismo positivo: a seletividade pode ser sensorial e coexistir com ARFID (CDDR); relevante em pré-escolar."
   },
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "Um padrão de restrição variável associa-se a elevada distraibilidade e a necessidade de estímulo para comer (CDDR)."
   }
  ],
  "confirm": [
   "Evitamento ou restrição de alimentos com pelo menos um destes efeitos: ingestão insuficiente em quantidade ou variedade com perda de peso significativa (ou falha de ganho esperado), défices nutricionais clinicamente significativos, dependência de suplementos orais ou sonda, ou prejuízo funcional significativo (por exemplo evitar situações sociais com comida). O DSM-5-TR (critério A, F50.82, pp. 376-377) tem os mesmos quatro efeitos alternativos (a AAP 2021, baseada no DSM-5, ainda acrescentava 'falha persistente em satisfazer necessidades nutricionais ou energéticas', ausente no DSM-5-TR); o prejuízo psicossocial inclui a disrupção marcada da vida familiar.",
   "Motivação não relacionada com peso ou forma: falta de interesse em comer, características sensoriais (cheiro, textura, cor, temperatura) ou receio de consequências (engasgar, vomitar, doença). Perguntar por episódio prévio de engasgamento ou vómito.",
   "Não é explicado por falta de comida, prática cultural ou religiosa (vegetarianismo, jejum) sem consequências, nem por condição médica ou outra perturbação mental, nem por substância. Se ocorrer no contexto de outra condição ou perturbação (DSM-5-TR, critério D), só se diagnostica se a gravidade da alteração alimentar exceder a habitualmente associada e justificar atenção clínica adicional.",
   "Seletividade alimentar sem perda de peso, défice de saúde ou prejuízo não chega para o diagnóstico; a preocupação dos pais isolada também não (CDDR).",
   "Se surgirem preocupações com peso e forma durante o seguimento, reavaliar para anorexia nervosa (CDDR). No DSM-5-TR (pp. 379-380) as duas não se diagnosticam em simultâneo; a distinção é difícil no fim da infância e início da adolescência, sobretudo na anorexia sem medo de engordar, e o ARFID pode preceder a anorexia: ponderar sintomas, evolução e história familiar ao longo do tempo.",
   "Início habitual na infância; a evitação sensorial surge na primeira década e pode persistir; a evitação por consequências aversivas (engasgamento, vómitos repetidos, procedimento digestivo) pode surgir em qualquer idade; mais comum em crianças e adolescentes do que em adultos, com longo atraso até à consulta (DSM-5-TR p. 377-378). Início agudo, tardio ou sintomas atípicos: afastar síndrome neuropsiquiátrico agudo pediátrico (PANS; DSM-5-TR p. 379)."
  ],
  "differential": [
   "h-anorexia-nervosa",
   "Autismo com seletividade sensorial: pode atribuir-se ARFID adicional se houver perda de peso, consequências para a saúde ou prejuízo funcional específicos (CDDR); no DSM-5-TR (p. 379) só se diagnostica em simultâneo se todos os critérios de ambos estiverem cumpridos e a alteração alimentar exigir tratamento específico",
   "Fobia específica (medo de engasgar ou vomitar) ou ansiedade social (medo de ser observado a comer) ou outra perturbação de ansiedade (podem ser diagnosticadas em conjunto; quando o problema alimentar é o foco principal da atenção clínica, o DSM-5-TR (p. 379) prefere ARFID)",
   "Depressão, perturbação bipolar, psicose (medo de envenenamento) como causa da restrição",
   "Alergias alimentares, doença gastrointestinal, infeções, cancro, hipertiroidismo",
   "Seletividade alimentar própria da idade (neofobia) sem consequências",
   "Perturbação obsessivo-compulsiva (restrição ligada a preocupações ou rituais com comida), perturbação de vinculação reativa, perturbação factícia e perturbação factícia imposta a outrem (cuidador descreve a restrição e pode induzir a falha de ganho de peso), condições neurológicas, neuromusculares ou estruturais com dificuldade de alimentação (o ARFID pode diagnosticar-se se todos os critérios forem cumpridos) (DSM-5-TR pp. 379-381)"
  ],
  "comorbid": [
   "Autismo",
   "Fobia específica ou outra perturbação de ansiedade",
   "PHDA (DSM-5-TR p. 381)",
   "Perturbação obsessivo-compulsiva (DSM-5-TR p. 381)",
   "Deficiência intelectual (DSM-5-TR p. 381)"
  ],
  "source": "ICD-11 CDDR secção 6B83 Avoidant-restrictive food intake disorder (pp. 410-414; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf); AAP, Hornberger et al., Pediatrics 2021;147(1):e2020040279, https://publications.aap.org/pediatrics/article/147/1/e2020040279/33504/Identification-and-Management-of-Eating-Disorders (quadro DSM-5, texto sobre ARFID). A CID-11 inclui explicitamente a exclusão de motivação por peso e forma; o DSM-5-TR exprime-a no critério C (sem perturbação da vivência do peso ou forma). DSM-5-TR (APA, 2022), Avoidant/Restrictive Food Intake Disorder (F50.82), pp. 376-381 (índices 549-555), lido: critérios A a D, desenvolvimento, diferencial e comorbilidade verificados no manual. CID-11 e DSM-5-TR coincidem no essencial; a AAP 2021 (DSM-5) traz um quinto efeito ausente no DSM-5-TR."
 },
 {
  "id": "h-pica",
  "name": "Pica",
  "icd11": "6B84",
  "branches": [
   "pre",
   "esc"
  ],
  "core": [
   {
    "domain": "d-alimentacao",
    "level": 2,
    "why": "Consumo regular de substâncias não nutritivas ou de ingredientes crus em grande quantidade."
   }
  ],
  "support": [
   {
    "domain": "d-social",
    "level": 1,
    "why": "Ocorre com mais frequência no autismo e na deficiência intelectual (CDDR)."
   },
   {
    "scale": "mchat_positivo",
    "why": "Rastreio de autismo positivo (relevante em pré-escolar): a pica pode coexistir (CDDR)."
   }
  ],
  "confirm": [
   "Consumo regular de substâncias não nutritivas (barro, terra, giz, gesso, plástico, metal, papel) ou de ingredientes crus em grande quantidade (sal, farinha).",
   "Persistente ou grave ao ponto de exigir atenção clínica: dano ou risco significativo para a saúde, ou prejuízo funcional (frequência, quantidade ou natureza).",
   "Idade de desenvolvimento a partir de cerca de 2 anos, quando a criança já distingue comestível de não comestível (DSM-5-TR: idade mínima de 2 anos sugerida, p. 372); a exploração oral em lactentes e crianças muito pequenas é normal. Início mais comum na infância, mas pode ocorrer na adolescência ou na idade adulta (CDDR; DSM-5-TR p. 372).",
   "Excluir carência nutricional (por exemplo anemia por défice de ferro, vitamina B12 ou folato): só diagnosticar se o comportamento persistir depois de corrigida (CDDR). Excluir prática culturalmente aceite, a menos que as quantidades exijam atenção. O DSM-5-TR não tem esta exclusão: refere carências de ferro ou zinco como associadas, mas muitas vezes sem anomalia biológica específica, e manda procurar complicações (obstrução intestinal, perfuração, infeções como toxoplasmose e toxocaríase, intoxicação por chumbo) e carências (p. 372-373).",
   "Duração: a CID-11 não exige duração mínima; o DSM-5-TR (critério A, F98.3 na criança, F50.89 no adulto) exige que o comportamento seja persistente durante pelo menos 1 mês. Se ocorrer no contexto de outra perturbação (deficiência intelectual, autismo, esquizofrenia) ou condição médica, só se diagnostica pica se for suficientemente grave para atenção clínica adicional (critério D; a CID-11 pede o mesmo). Se a ingestão for usada sobretudo para controlar o peso, o diagnóstico principal é anorexia nervosa (DSM-5-TR p. 373). Divergência mantida: segue-se o texto da CID-11 na descrição e o DSM-5-TR na duração (releitura dal-17).",
   "Risco aumentado com negligência, falta de supervisão e atraso do desenvolvimento (DSM-5-TR p. 372)."
  ],
  "differential": [
   "Carência nutricional (ferro, B12, folato)",
   "Deficiência intelectual (pode coexistir, desde que distinga comestível de não comestível)",
   "Anorexia nervosa (papel ou lenços para suprimir a fome; se a ingestão for sobretudo para controlo do peso, o diagnóstico principal é anorexia nervosa, DSM-5-TR) (h-anorexia-nervosa)",
   "Tricotilomania ou escoriação (come o cabelo ou a pele arrancados)",
   "Autismo, esquizofrenia",
   "Perturbação factícia ou simulação (ingestão para parecer doente); no DSM-5-TR também a autolesão não suicidária e comportamentos de perturbações de personalidade (engolir alfinetes, agulhas ou facas)",
   "Síndrome de Kleine-Levin (DSM-5-TR p. 373)"
  ],
  "comorbid": [
   "Autismo",
   "Deficiência intelectual",
   "Tricotilomania e escoriação (nos casos comórbidos o que se ingere é o cabelo ou a pele; DSM-5-TR p. 373)",
   "Perturbação evitante/restritiva da ingestão alimentar, sobretudo com forte componente sensorial (DSM-5-TR p. 373)",
   "Perturbação obsessivo-compulsiva e esquizofrenia, em menor grau (DSM-5-TR p. 373)"
  ],
  "source": "ICD-11 CDDR secção 6B84 Pica (pp. 414-416; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf). Sem guideline clínica pediátrica lida para esta hipótese; para além do CDDR e do DSM-5-TR, o que consta é prática clínica (sem fonte). DSM-5-TR (APA, 2022), Pica (F98.3 em crianças, F50.89 em adultos), pp. 371-374 (índices 543-546), lido: critérios A a D, desenvolvimento, diferencial e comorbilidade verificados no manual. Divergência DSM-5-TR contra CID-11: duração mínima de 1 mês só no DSM-5-TR; exclusão por carência nutricional só na CID-11."
 },
 {
  "id": "h-ruminacao-regurgitacao",
  "name": "Perturbação de ruminação-regurgitação",
  "icd11": "6B85",
  "core": [
   {
    "domain": "d-alimentacao",
    "level": 2,
    "why": "Regurgitação intencional e repetida de alimento já engolido."
   }
  ],
  "support": [
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Nos casos episódicos associa-se a stress ou ansiedade, e o comportamento pode aliviar a ansiedade (CDDR)."
   },
   {
    "domain": "d-social",
    "level": 1,
    "why": "Ligeiramente mais frequente no autismo e na deficiência intelectual, onde pode ter função autocalmante (CDDR)."
   }
  ],
  "confirm": [
   "Regurgitação repetida do alimento para a boca, que pode ser remastigado e reengolido ou cuspido (não é vómito), pelo menos várias vezes por semana. Duração: a CID-11 pede pelo menos várias semanas e regurgitação intencional; o DSM-5-TR (critério A, F98.21, pp. 374-375) pede pelo menos 1 mês, sem náusea, ânsias involuntárias nem nojo aparentes, e não exige a intenção (o doente pode descrevê-la como habitual ou fora de controlo). Mantêm-se as duas versões.",
   "Idade de desenvolvimento de pelo menos 2 anos; em lactentes não se diagnostica (síndrome de ruminação do lactente, capítulo digestivo da CID-11). Divergência: o DSM-5-TR não fixa idade mínima e descreve o início em lactentes, em geral entre os 3 e os 12 meses, muitas vezes com remissão espontânea (p. 375); mantém-se a redação da CID-11.",
   "Excluir condição médica que cause regurgitação, náusea ou vómito (estenose esofágica, perturbações neuromusculares do esófago, estenose do piloro; no DSM-5-TR também refluxo gastroesofágico, gastroparesia, hérnia do hiato e, em lactentes, síndrome de Sandifer). No DSM-5-TR não ocorre exclusivamente durante anorexia nervosa, bulimia nervosa, ingestão compulsiva ou ARFID; se for no contexto de deficiência intelectual ou outra perturbação, tem de ser grave para atenção clínica adicional (critérios B a D).",
   "Perguntar diretamente: o comportamento é muitas vezes escondido por vergonha, e a criança pode induzi-lo com a língua, os músculos abdominais ou tosse. Adolescentes tapam a boca ou tossem para disfarçar, evitam comer em público e podem restringir a ingestão, com perda de peso ou baixo peso (DSM-5-TR p. 375). Perda de peso e má progressão ponderal são frequentes nos lactentes.",
   "Distinguir de vómito autoinduzido da anorexia nervosa ou bulimia nervosa. Risco de aspiração em crianças muito pequenas (CDDR)."
  ],
  "differential": [
   "h-anorexia-nervosa",
   "h-bulimia-nervosa",
   "Síndrome de ruminação do lactente (em lactentes; capítulo das doenças digestivas)",
   "'Vómito psicogénico': a regurgitação voluntária favorece este diagnóstico",
   "Doenças gastrointestinais (refluxo, estenose do piloro, hérnia do hiato, gastroparesia), enxaqueca, aumento da pressão intracraniana, alergia alimentar (AAP 2021, quadro 4, vómitos; DSM-5-TR p. 375)"
  ],
  "comorbid": [
   "Autismo",
   "Deficiência intelectual",
   "Ansiedade (por exemplo ansiedade generalizada; DSM-5-TR p. 375)",
   "Outras perturbações do neurodesenvolvimento (a regurgitação pode ter função autocalmante ou autoestimulante; DSM-5-TR p. 375)"
  ],
  "source": "ICD-11 CDDR secção 6B85 Rumination-regurgitation disorder (pp. 416-418; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf); AAP, Hornberger et al., Pediatrics 2021;147(1):e2020040279, https://publications.aap.org/pediatrics/article/147/1/e2020040279/33504/Identification-and-Management-of-Eating-Disorders (quadro 4). Duração segundo o CDDR ('várias semanas'); o 1 mês é do DSM-5-TR (releitura dal-18). DSM-5-TR (APA, 2022), Rumination Disorder (F98.21), pp. 374-375 (índices 546-548), lido: critérios A a D, desenvolvimento, diferencial e comorbilidade verificados no manual. Divergência DSM-5-TR contra CID-11: duração (1 mês contra várias semanas), idade (sem mínimo contra 2 anos) e intencionalidade (só na CID-11)."
 },
 {
  "id": "h-insonia",
  "name": "Insónia (incluindo insónia comportamental da infância)",
  "icd11": "Capítulo 7 da CID-11 (perturbações do sono-vigília); código específico não verificado (o CDDR da OMS não descreve este capítulo)",
  "core": [
   {
    "domain": "d-sono",
    "level": 2,
    "why": "Dificuldade persistente em adormecer ou em manter o sono, com repercussão diurna."
   }
  ],
  "support": [
   {
    "domain": "d-humor",
    "level": 1,
    "why": "Em adolescentes, queixas de sono associam-se a sintomas depressivos e a ideação suicida (estudo transversal; AACAP 2023 refere perturbações do humor como possível causa)."
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Os problemas de sono podem vir de ansiedade ou de preocupações ao deitar (AACAP 2023)."
   },
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "PHDA associa-se a problemas de sono (AACAP 2023); sono insuficiente pode imitar PHDA."
   },
   {
    "domain": "d-trauma",
    "level": 1,
    "why": "Perturbação de stress pós-traumático é causa possível de problemas de sono no adolescente (AACAP 2023)."
   },
   {
    "domain": "d-substancias",
    "level": 1,
    "why": "Cafeína, nicotina, álcool, drogas e ecrãs à noite afetam o sono (AACAP 2023; AFP 2014)."
   }
  ],
  "confirm": [
   "Caracterizar o sono: hora de deitar e levantar em dias de escola e fim de semana, latência, despertares, duração total face ao recomendado para a idade; diário do sono se o quadro não ficar claro.",
   "Na criança, procurar insónia comportamental: tipo de associação ao início do sono (precisa de condições como ser embalado) e tipo de falta de limites (recusa ir para a cama), muitas vezes ambos (AFP 2014). O DSM-5-TR (p. 413) não usa o rótulo 'insónia comportamental da infância': descreve o condicionamento (criança que não aprende a adormecer ou a readormecer sem a presença do progenitor) e a falta de horários e rotinas regulares; no adolescente, os horários irregulares, sobretudo o atraso de fase, desencadeiam ou agravam a insónia.",
   "Critérios do DSM-5-TR (insónia, F51.01, pp. 410-411): queixa predominante de insatisfação com a quantidade ou a qualidade do sono, com dificuldade em adormecer (na criança, sem intervenção do cuidador), em manter o sono ou despertar precoce sem readormecer; sofrimento ou prejuízo clinicamente significativo; pelo menos 3 noites por semana e pelo menos 3 meses; apesar de oportunidade adequada para dormir; não explicada por outra perturbação do sono-vigília nem por substância, e não explicada só por perturbação mental ou condição médica coexistentes. Quadro com menos de 3 meses: outra insónia especificada. O diagnóstico baseia-se na perceção do doente ou no relato do cuidador (p. 411). Os critérios da CID-11 (capítulo 7) e da ICSD-3-TR não foram lidos (fora dos textos fornecidos): só há versão DSM-5-TR.",
   "Excluir antes causas médicas e outras perturbações do sono: apneia obstrutiva, pernas inquietas, atraso de fase, parassónias, dor, eczema, asma, refluxo, medicação (incluindo estimulantes) e cafeína (a dor crónica e as doenças médicas como comorbilidade e a perturbação do sono induzida por substância ou medicamento têm suporte no DSM-5-TR pp. 416-417; eczema, asma, refluxo e a medicação específica continuam prática clínica, sem fonte). O DSM-5-TR (p. 416) acrescenta que a insónia coexiste muitas vezes com outras perturbações do sono (cerca de 1 em 7 doentes com insónia tem apneia obstrutiva moderada a grave) e que, havendo condição coexistente, não é preciso atribuir causalidade: diagnostica-se a insónia com o especificador da condição associada, se justificar atenção clínica própria.",
   "Rastrear depressão e ideação suicida no adolescente com queixa de sono (Teresi 2024; estudo transversal, não prova causalidade). O DSM-5-TR (pp. 410 e 415) refere a insónia como fator de risco independente para ideação e comportamento suicida, e a insónia persistente como fator de risco para depressão, ansiedade e perturbação por consumo de substâncias (risco pelo menos duplo)."
  ],
  "differential": [
   "h-atraso-fase-sono",
   "h-sindrome-pernas-inquietas",
   "h-apneia-obstrutiva-sono",
   "h-parassonias",
   "Sono insuficiente por horário, oportunidade de dormir ou higiene do sono; dormidor curto (sem sintomas diurnos) e variação normal do sono; insónia aguda ou situacional com menos de 3 meses (outra insónia especificada) (DSM-5-TR pp. 415-416)",
   "Depressão, ansiedade, PHDA, trauma, consumo de substâncias como causa ou consequência",
   "Perturbação do sono induzida por substância ou medicamento (por exemplo insónia só com consumo intenso de cafeína; DSM-5-TR p. 416) e narcolepsia (predomina a sonolência diurna excessiva, cataplexia e paralisia do sono)"
  ],
  "comorbid": [
   "PHDA",
   "Ansiedade",
   "Depressão",
   "Perturbação de stress pós-traumático",
   "Autismo (prática clínica, sem fonte)",
   "Perturbação por consumo de substâncias (a insónia persistente aumenta o risco; DSM-5-TR p. 415). Cerca de 40% a 50% dos casos de insónia têm perturbação mental comórbida (DSM-5-TR p. 413, valores sobretudo de adultos)"
  ],
  "source": "Capítulo 7 da CID-11: o CDDR da OMS só o refere (https://www.who.int/publications/i/item/9789240077263, pp. 27-28 do texto lido) e não dá critérios; Carter, Hathaway, Lettieri, Am Fam Physician 2014;89(5):368-377, https://www.aafp.org/pubs/afp/issues/2014/0301/p368.html (insónia comportamental da infância); AACAP, Facts for Families n.º 34 Sleep Problems (atualizado março 2023), https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Childrens-Sleep-Problems-034.aspx; Teresi et al., JAACAP Open 2024;3(3):589-600, https://pmc.ncbi.nlm.nih.gov/articles/PMC12414329/. Sem guideline de diagnóstico pediátrica mais recente lida; releitura em drafts/sono.json (dso-19). DSM-5-TR (APA, 2022), Insomnia Disorder (F51.01), pp. 410-417 (índices 589-597), lido: critérios A a H, especificadores, desenvolvimento, diferencial e comorbilidade verificados no manual. A CID-11 (capítulo 7) não consta do CDDR fornecido: só há texto do DSM-5-TR para os critérios; o código CID-11 fica por verificar e o ICSD-3-TR não foi lido."
 },
 {
  "id": "h-apneia-obstrutiva-sono",
  "name": "Apneia obstrutiva do sono (a excluir)",
  "icd11": "Capítulo 7 da CID-11 (perturbações do sono-vigília); código específico não verificado (o CDDR da OMS não descreve este capítulo)",
  "branches": [
   "pre",
   "esc",
   "adol"
  ],
  "core": [
   {
    "domain": "d-sono",
    "level": 2,
    "why": "Ronco frequente com respiração difícil, pausas ou ruídos durante o sono."
   }
  ],
  "support": [
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "PHDA e problemas de aprendizagem estão entre os sinais da apneia (AAP 2012); em crianças a sonolência manifesta-se como desatenção ou comportamento (AFP 2014)."
   },
   {
    "scale": "snap_desatencao",
    "why": "Desatenção elevada: a apneia pode imitar ou agravar PHDA (AAP 2012, quadro 2; AFP 2014)."
   },
   {
    "scale": "snap_hi",
    "why": "Hiperatividade-impulsividade elevada: sonolência na criança pode manifestar-se assim (AFP 2014)."
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Problemas de comportamento e desregulação emocional associam-se à apneia não tratada (AFP 2014)."
   },
   {
    "domain": "d-humor",
    "level": 1,
    "why": "Em crianças a sonolência pode manifestar-se como humor deprimido (AFP 2014)."
   },
   {
    "domain": "d-outros",
    "level": 1,
    "why": "Enurese, sobretudo secundária (após pelo menos 6 meses de continência), é um sinal (AAP 2012); o DSM-5-TR (p. 432) diz o mesmo para a enurese que reaparece em criança antes seca."
   }
  ],
  "confirm": [
   "Ronco regular (pelo menos 3 noites por semana) com pelo menos um destes: respiração difícil, gasps ou pausas observadas, enurese (sobretudo secundária), dormir sentado ou com o pescoço em hiperextensão, cianose, cefaleias ao acordar, sonolência diurna, PHDA, problemas de aprendizagem (AAP 2012, quadro 2). O DSM-5-TR (apneia obstrutiva do sono, G47.33, pp. 429-435) não fixa limiar de noites de ronco; na criança usa um índice de apneia-hipopneia obstrutiva de 1 ou mais por hora (ou hipoventilação obstrutiva com ronco ou obstrução do fluxo na polissonografia), contra 5 ou mais no adulto, e estima a prevalência em 1% a 4%.",
   "Perguntar por ronco a todas as crianças: os pais nem sempre o referem espontaneamente (AAP 2012).",
   "A história e o exame sozinhos correlacionam-se mal com o estudo do sono: o passo seguinte é polissonografia ou referenciação a especialista em sono ou otorrinolaringologia (AAP 2012; AFP 2014). Nem todos os que roncam têm apneia.",
   "Sinais ao exame a registar: hipertrofia amigdalina, retrognatia ou micrognatia, palato ogival, excesso ou baixo peso, má progressão ponderal, hipertensão (AAP 2012, quadro 2).",
   "Fatores de risco para referenciação a medicina do sono: PHDA, anomalias craniofaciais, síndrome de Down (AFP 2014). O DSM-5-TR (p. 432) acrescenta obesidade, história familiar e hipertrofia adenoamigdalina (sobretudo nas crianças pequenas).",
   "As fontes pediátricas principais são de 2012 e 2014; o DSM-5-TR (2022) confirma o enquadramento clínico e o limiar pediátrico (índice de apneia-hipopneia de 1 ou mais por hora), sem substituir uma guideline pediátrica. Não foi encontrada guideline pediátrica posterior nesta tarefa (releitura dso-22 e dso-33). A CID-11 (capítulo 7) não consta do CDDR: só há versão DSM-5-TR.",
   "Idade (DSM-5-TR pp. 431-432): dois picos, aos 3 a 8 anos (hipertrofia adenoamigdalina) e na adolescência (obesidade). Abaixo dos 5 anos predominam sintomas noturnos (apneias observadas, respiração difícil); acima dos 5 predominam sonolência, comportamento (impulsividade, hiperatividade), PHDA, dificuldades de aprendizagem e cefaleias matinais. Também respiração pela boca de dia, dificuldade em engolir, má articulação, má progressão de crescimento e atrasos do desenvolvimento; enurese que reaparece em criança antes seca deve levantar a suspeita."
  ],
  "differential": [
   "h-parassonias",
   "h-insonia",
   "PHDA primária com sono insuficiente (a apneia e a PHDA podem coexistir; fatores como amígdalas grandes, obesidade ou história familiar de apneia sugerem a coexistência; DSM-5-TR p. 434)",
   "Ronco primário sem apneia",
   "h-enurese",
   "Apneia central e hipoventilação relacionada com o sono; narcolepsia e hipersónia (sonolência diurna) (DSM-5-TR p. 433; distinção exige polissonografia)",
   "Asma noturna, refluxo e ataques de pânico noturnos (engasgo ou falta de ar durante o sono, sem apneias na polissonografia; DSM-5-TR p. 434)"
  ],
  "comorbid": [
   "PHDA",
   "Obesidade (fator de risco; origina o segundo pico, na adolescência)",
   "Enurese",
   "Parassónias (a apneia é gatilho frequente)",
   "Atraso de crescimento e do desenvolvimento (DSM-5-TR p. 432)"
  ],
  "source": "CID-11 capítulo 7 (código não verificado). AAP, Marcus et al., Pediatrics 2012;130(3):576-584, https://publications.aap.org/pediatrics/article/130/3/576/30284/Diagnosis-and-Management-of-Childhood-Obstructive (quadro 2 e declarações de ação 1 e 2, lidos na página da AAP); Carter, Hathaway, Lettieri, Am Fam Physician 2014;89(5):368-377, https://www.aafp.org/pubs/afp/issues/2014/0301/p368.html (secção de apneia obstrutiva do sono e quadro 3). DSM-5-TR (APA, 2022), Obstructive Sleep Apnea Hypopnea (G47.33), pp. 429-435 (índices 612-619), lido: critérios, caraterísticas pediátricas, desenvolvimento, diferencial e comorbilidade verificados no manual. Só há versão DSM-5-TR (a CID-11 capítulo 7 não está no CDDR). Ramos: acrescentado o escolar-adolescente por o DSM-5-TR descrever um segundo pico na adolescência."
 },
 {
  "id": "h-parassonias",
  "name": "Parassónias (terrores noturnos, sonambulismo, pesadelos)",
  "icd11": "Capítulo 7 da CID-11 (perturbações do sono-vigília); código específico não verificado (o CDDR da OMS não descreve este capítulo)",
  "branches": [
   "pre",
   "esc",
   "adol"
  ],
  "core": [
   {
    "domain": "d-sono",
    "level": 2,
    "why": "Episódios noturnos de despertar parcial, sonambulismo, terrores ou pesadelos."
   }
  ],
  "support": [
   {
    "domain": "d-trauma",
    "level": 1,
    "why": "Pesadelos recorrentes podem relacionar-se com acontecimentos adversos ou stress, e fazem parte da perturbação de stress pós-traumático (DSM-5-TR pp. 459-460); nem todos os pesadelos replicam o trauma."
   }
  ],
  "confirm": [
   "Hora do episódio: terrores e sonambulismo na primeira metade da noite, sem memória e com dificuldade em acordar a criança; pesadelos na segunda metade, com memória do sonho e receio de adormecer (AFP 2014).",
   "Perguntar por movimentos repetitivos e estereotipados, posturas estranhas ou episódios sempre iguais: podem ser convulsões noturnas (AFP 2014). O DSM-5-TR (p. 456) acrescenta que as crises noturnas são mais estereotipadas, ocorrem várias vezes por noite, também em sestas e podem surgir da vigília; a presença de crises não exclui parassónia NREM.",
   "Gatilhos: sono insuficiente, apneia obstrutiva (mais de metade das crianças referenciadas por terrores ou sonambulismo tinham apneia), movimentos periódicos dos membros, refluxo, despertares forçados, medicamentos (AFP 2014). O DSM-5-TR (p. 454) lista também sedativos, febre, perturbações do horário sono-vigília, fadiga e stress físico ou emocional; fármacos (benzodiazepinas, hipnóticos, antipsicóticos, antidepressivos tricíclicos e outros) podem induzir comportamentos semelhantes (perturbação do sono induzida por substância, tipo parassónia).",
   "Comportamentos atípicos, nocivos, violentos ou sem resposta ao tratamento conservador justificam avaliação especializada (AFP 2014).",
   "Segurança no quarto e riscos de lesão a avaliar (sonambulismo).",
   "Seguiu-se a história clínica como método de diagnóstico (AFP 2014); sem guideline posterior encontrada (releitura dso-21).",
   "Critérios do DSM-5-TR. Despertares NREM (F51.3 sonambulismo, F51.4 terrores noturnos; pp. 452-457): despertar incompleto recorrente, em geral no primeiro terço do sono principal; pouca ou nenhuma imagem onírica recordada; amnésia do episódio; sofrimento ou prejuízo clinicamente significativo; sem efeito de substância; sem perturbação mental ou condição médica que o expliquem. Pesadelos (F51.5; pp. 457-461): sonhos longos, disfóricos e bem recordados, em geral na segunda metade do sono; orientação rápida ao acordar; sofrimento ou prejuízo clinicamente significativo; gravidade pela frequência (menos de 1 por semana ligeira, 1 ou mais mas não todas as noites moderada, todas as noites grave) e duração (agudo até 1 mês, subagudo de 1 a 6 meses, persistente 6 meses ou mais). A CID-11 (capítulo 7) não consta do CDDR: só há versão DSM-5-TR.",
   "Episódios isolados ou pouco frequentes são muito comuns (10% a 30% das crianças têm pelo menos um episódio de sonambulismo); a perturbação depende do sofrimento, do potencial de violência ou lesão, da vergonha e da perturbação do agregado. Sonambulismo e terrores costumam passar com a idade (remissão de 50% a 65%); os pesadelos começam muitas vezes aos 3 a 6 anos e atingem o máximo na adolescência tardia ou início da idade adulta (DSM-5-TR pp. 454-459).",
   "Pesadelos após trauma nem sempre repetem o trauma, e quem tem pesadelos refere mais acontecimentos adversos, não necessariamente trauma; pesadelos frequentes associam-se a maior risco de ideação e comportamento suicida (DSM-5-TR pp. 459-460)."
  ],
  "differential": [
   "Epilepsia noturna",
   "h-apneia-obstrutiva-sono (gatilho frequente)",
   "h-sindrome-pernas-inquietas",
   "Perturbação de stress pós-traumático (pesadelos com conteúdo do trauma)",
   "Sono insuficiente",
   "Terrores noturnos contra pesadelos: terrores no primeiro terço do sono, sem enredo recordado e com amnésia; pesadelos mais tarde, com sonho longo recordado e despertar completo (DSM-5-TR pp. 456 e 460)",
   "Ataques de pânico noturnos (acordam rápida e completamente, sem confusão, amnésia nem atividade motora), fuga dissociativa e simulação (surgem de um período de vigília; DSM-5-TR p. 456)",
   "Narcolepsia (pesadelos frequentes mas com sonolência diurna excessiva) e perturbação do sono induzida por substância ou medicamento (DSM-5-TR pp. 456 e 460-461)"
  ],
  "comorbid": [
   "Apneia obstrutiva do sono",
   "Ansiedade e depressão (crianças e adultos com terrores noturnos podem ter pontuações elevadas; DSM-5-TR p. 457). No sonambulismo na criança, tipicamente sem perturbação mental significativa (DSM-5-TR p. 457)",
   "Insónia (cerca de 20% das crianças com pesadelos frequentes; DSM-5-TR p. 458)",
   "Enurese noturna (associada às parassónias NREM; DSM-5-TR p. 402)"
  ],
  "source": "CID-11 capítulo 7 (código não verificado; o CDDR refere pesadelos, sonambulismo e terrores como antigos diagnósticos do capítulo mental, p. 28). Carter, Hathaway, Lettieri, Am Fam Physician 2014;89(5):368-377, https://www.aafp.org/pubs/afp/issues/2014/0301/p368.html (parassónias e quadro 2). DSM-5-TR (APA, 2022), Non-REM Sleep Arousal Disorders (F51.3 e F51.4), pp. 452-457 (índices 639-645), e Nightmare Disorder (F51.5), pp. 457-461 (índices 645-650), lido: critérios, desenvolvimento, diferencial e comorbilidade verificados no manual. Só há versão DSM-5-TR (a CID-11 capítulo 7 não está no CDDR). Ramos: acrescentado o adolescente por os pesadelos atingirem o máximo de prevalência na adolescência tardia."
 },
 {
  "id": "h-sindrome-pernas-inquietas",
  "name": "Síndrome das pernas inquietas",
  "icd11": "Capítulo 7 da CID-11 (perturbações do sono-vigília); código específico não verificado (o CDDR da OMS não descreve este capítulo)",
  "branches": [
   "esc",
   "adol"
  ],
  "core": [
   {
    "domain": "d-sono",
    "level": 2,
    "why": "Desconforto ou vontade de mexer as pernas ao deitar, que melhora com o movimento e é pior à noite."
   }
  ],
  "support": [
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "Cerca de um quarto das crianças com síndrome das pernas inquietas tem problemas de atenção e 13 a 35% das crianças com PHDA cumprem critérios (IRLSSG 2013)."
   },
   {
    "scale": "snap_desatencao",
    "why": "Desatenção elevada: PHDA é comorbilidade frequente (IRLSSG 2013)."
   }
  ],
  "confirm": [
   "Critérios IRLSSG 2013 (todos): (1) vontade de mexer as pernas, geralmente com sensações desagradáveis, descrita nas palavras da criança; (2) começa ou piora em repouso ou inatividade; (3) alivia total ou parcialmente com movimento, enquanto este dura; (4) só ocorre ou é pior ao fim do dia ou à noite; (5) não explicada por outra condição médica ou comportamental. O DSM-5-TR (G25.81, pp. 464-465) tem os mesmos critérios A1 a A3 e acrescenta pelo menos 3 vezes por semana durante pelo menos 3 meses (B), sofrimento ou prejuízo significativo (C), exclusão de condição médica ou mental e de condição comportamental (D) e de efeito de substância ou medicamento, por exemplo acatisia (E). Divergência: o IRLSSG não fixa frequência nem duração; mantêm-se as duas versões. A CID-11 (capítulo 7) não consta do CDDR: só há as versões IRLSSG e DSM-5-TR.",
   "A aplicabilidade depende da linguagem e do desenvolvimento, não da idade; é pouco provável que a criança com menos de 6 anos descreva os aspetos necessários (IRLSSG 2013). O DSM-5-TR (p. 466) concorda: a descrição tem de ser nas palavras da criança, a partir dos 6 anos costuma ser possível, e as crianças dizem que as pernas 'têm de' mexer. Dois terços das crianças e adolescentes referem sensações também de dia (por exemplo sentados na aula): comparar tempos iguais de repouso de dia e à noite. Cerca de 20% dos adultos com a síndrome referem sintomas antes dos 10 anos.",
   "Excluir imitadores: mialgia, estase venosa, edema, artrite, cãibras, desconforto posicional, bater habitual do pé (IRLSSG 2013, critério 5); o DSM-5-TR (p. 467) acrescenta neuropatia periférica, radiculopatia, acatisia por neurolépticos, insuficiência venosa, eczema e inquietação por ansiedade. Em crianças pode confundir-se com 'dores de crescimento' (AFP 2014).",
   "Fatores agravantes a rever: carência de ferro (AFP 2014 refere medir a ferritina; o DSM-5-TR p. 466 refere o ferro baixo como desencadeante), cafeína, nicotina, anti-histamínicos, ISRS e antidepressivos tricíclicos (o DSM-5-TR refere que os antidepressivos serotoninérgicos podem induzir ou agravar), atividade física excessiva ou insuficiente (AFP 2014). História familiar (apoia o diagnóstico).",
   "A AFP 2014 aceita o diagnóstico com história compatível e pelo menos 2 de: perturbação do sono, familiar de primeiro grau, 5 ou mais movimentos periódicos por hora na polissonografia; seguiram-se os critérios IRLSSG 2013, mais recentes."
  ],
  "differential": [
   "PHDA (comorbilidade frequente, não imitador)",
   "Dores de crescimento, cãibras, artrite, desconforto posicional",
   "h-insonia",
   "h-atraso-fase-sono",
   "Acatisia induzida por neurolépticos, neuropatia periférica e inquietação por ansiedade (DSM-5-TR p. 467)"
  ],
  "comorbid": [
   "PHDA",
   "Insónia",
   "Depressão, ansiedade generalizada, perturbação de pânico e perturbação de stress pós-traumático (DSM-5-TR p. 467; não específico da idade pediátrica); a síndrome pode predispor a depressão",
   "Apneia obstrutiva do sono e narcolepsia (DSM-5-TR p. 467)"
  ],
  "source": "CID-11 capítulo 7 (código não verificado). IRLSSG, Picchietti et al., Sleep Med 2013;14:1253-1259, https://www.irlssg.org/wp-content/uploads/2025/04/Ped-RLS-dx-crit-2013.pdf (critérios e notas, lidos); Carter, Hathaway, Lettieri, Am Fam Physician 2014;89(5):368-377, https://www.aafp.org/pubs/afp/issues/2014/0301/p368.html (síndrome das pernas inquietas). Sem atualização dos critérios pediátricos posterior a 2013 encontrada (releitura dso-13 e dso-23). DSM-5-TR (APA, 2022), Restless Legs Syndrome (G25.81), pp. 464-468 (índices 655-659), lido: critérios A a E, desenvolvimento, diferencial e comorbilidade verificados no manual. O DSM-5-TR não refere PHDA na comorbilidade: a ligação à PHDA vem só do IRLSSG."
 },
 {
  "id": "h-atraso-fase-sono",
  "name": "Atraso de fase do sono",
  "icd11": "Capítulo 7 da CID-11 (perturbações do sono-vigília); código específico não verificado (o CDDR da OMS não descreve este capítulo)",
  "branches": [
   "adol"
  ],
  "core": [
   {
    "domain": "d-sono",
    "level": 2,
    "why": "Hora de adormecer e de acordar persistentemente atrasada, com dificuldade em acordar de manhã."
   }
  ],
  "support": [
   {
    "domain": "d-substancias",
    "level": 1,
    "why": "A exposição a luz de ecrãs antes de dormir atrasa o início do sono; cafeína e substâncias também (AFP 2014; AACAP 2023)."
   },
   {
    "domain": "d-humor",
    "level": 1,
    "why": "Perturbações do humor podem estar na origem de problemas de sono do adolescente (AACAP 2023)."
   }
  ],
  "confirm": [
   "Horas habituais de dormir e acordar atrasadas pelo menos 2 horas em relação ao socialmente aceitável (AFP 2014); o DSM-5-TR (atraso de fase, G47.21, pp. 443-446) diz 'habitualmente mais de 2 horas' e exige sofrimento ou prejuízo clinicamente significativo e insónia ou sonolência diurna; quando o horário é livre, o sono tem qualidade e duração normais para a idade. Sem duração mínima: 'persistente' (3 meses ou mais) é especificador. Prevalência: 7% a 16% nos adolescentes (AFP 2014); 3,3% a 4,6% na Noruega e na Suécia (DSM-5-TR, p. 444), o máximo ocorre em adolescentes e jovens adultos. Mantêm-se as duas versões.",
   "Registo do sono em diário durante pelo menos 1 semana (AFP 2014); o DSM-5-TR (p. 445) pede diário ou actigrafia durante pelo menos 7 dias, incluindo fins de semana, para mostrar um padrão atrasado consistente. A releitura dso-20 refere que o ICSD-3-TR (2023) passou a exigir diário do sono, com actigrafia sempre que possível (resumo da AASM, lido por quem fez a releitura; ICSD-3-TR fora dos textos fornecidos).",
   "Típico: deitar tardio (por exemplo depois das 2 horas), dormir até tarde, dificuldade em acordar, atrasos na escola; despertares noturnos são raros e a arquitetura do sono é normal (AFP 2014).",
   "Perguntar a que horas dormiria e acordaria sem constrangimentos (férias) e se a duração de sono é então adequada.",
   "Excluir sono insuficiente por horário escolar, insónia, depressão e consumo de substâncias. O DSM-5-TR (pp. 445-446) manda distinguir do atraso normal do adolescente (horário tardio sem sofrimento nem prejuízo, ligado à puberdade) e de outras perturbações circadianas (avanço de fase, irregular, não 24 horas, trabalho por turnos) e outras causas de sonolência (apneia, insónia, pernas inquietas). A exacerbação é típica quando o horário escolar impõe levantar cedo."
  ],
  "differential": [
   "h-insonia",
   "Sono insuficiente por horário social",
   "Depressão",
   "Consumo de substâncias ou cafeína à noite",
   "h-sindrome-pernas-inquietas",
   "Variação normal do sono do adolescente (atraso fisiológico da puberdade, sem sofrimento ou prejuízo) e outras perturbações do ritmo circadiano (DSM-5-TR pp. 445-446)"
  ],
  "comorbid": [
   "Depressão e outras perturbações depressivas (DSM-5-TR p. 445)",
   "Ansiedade",
   "PHDA (DSM-5-TR p. 445; AACAP 2023 refere PHDA e ansiedade como causas possíveis de problemas de sono)",
   "Perturbação do espetro do autismo e perturbação obsessivo-compulsiva (DSM-5-TR p. 445)"
  ],
  "source": "CID-11 capítulo 7 (código não verificado). Carter, Hathaway, Lettieri, Am Fam Physician 2014;89(5):368-377, https://www.aafp.org/pubs/afp/issues/2014/0301/p368.html (atraso de fase); AACAP, Facts for Families n.º 34 Sleep Problems (atualizado março 2023), https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Childrens-Sleep-Problems-034.aspx. Sem guideline pediátrica mais recente lida (releitura dso-14 e dso-20). DSM-5-TR (APA, 2022), Circadian Rhythm Sleep-Wake Disorders, tipo atraso de fase (G47.21), pp. 443-446 (índices 629-632), lido: critérios, desenvolvimento, marcadores, diferencial e comorbilidade verificados no manual. Só há versão DSM-5-TR (a CID-11 capítulo 7 não está no CDDR)."
 },
 {
  "id": "h-enurese",
  "name": "Enurese",
  "icd11": "6C00",
  "branches": [
   "pre",
   "esc",
   "adol"
  ],
  "core": [
   {
    "domain": "d-outros",
    "level": 2,
    "why": "Perda repetida de urina na cama ou na roupa em idade em que a continência é esperada."
   }
  ],
  "support": [
   {
    "domain": "d-sono",
    "level": 1,
    "why": "Enurese secundária pode acompanhar a apneia obstrutiva do sono (AAP 2012)."
   },
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "O NICE manda avaliar dificuldades de atenção, aprendizagem e desenvolvimento associadas à enurese (CG111 1.3.9)."
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Problemas de comportamento ou emocionais associados (NICE CG111 1.3.9); CDDR indica coexistência frequente."
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Enurese diurna pode dever-se a evitamento da casa de banho por ansiedade social (CDDR)."
   },
   {
    "domain": "d-trauma",
    "level": 1,
    "why": "Na enurese secundária, perguntar por gatilhos médicos, emocionais ou físicos (NICE CG111 1.3.2)."
   }
  ],
  "confirm": [
   "Perda repetida e persistente de urina na cama ou na roupa (por exemplo várias vezes por semana durante vários meses, segundo o CDDR); a CID-11 não fixa um limite fixo de meses. O DSM-5-TR (critério B, F98.0, pp. 399-402) pede pelo menos 2 vezes por semana durante pelo menos 3 meses consecutivos, ou sofrimento ou prejuízo clinicamente significativo (basta um dos dois, mesmo com menos de 2 vezes por semana); involuntária ou intencional. Divergência mantida, com as duas versões.",
   "Idade de desenvolvimento equivalente a cerca de 5 anos (DSM-5-TR: idade cronológica de pelo menos 5 anos ou nível de desenvolvimento equivalente); perdas ocasionais até à meia infância não são raras. Taxa de remissão espontânea de 5% a 10% por ano depois dos 5 anos; cerca de 1% continua em adolescentes de 15 ou mais anos e a enurese diurna ainda se observa em 1,2% a 3,0% aos 15-17 anos (DSM-5-TR pp. 400-401).",
   "Especificar noturna, diurna ou ambas (DSM-5-TR: só noturna, só diurna, noturna e diurna). Perguntar se esteve seco pelo menos 6 meses (enurese secundária; NICE CG111 1.3.2). A distinção primária/secundária não é termo do CDDR; o limiar de 6 meses secos é do NICE e da AAP. O DSM-5-TR (p. 400) descreve os dois cursos (primário: nunca houve continência; secundário: depois de continência, mais comum aos 5 a 8 anos) sem os usar como especificador nem fixar 6 meses, e sem diferença na comorbilidade mental entre eles.",
   "Excluir causa médica: infeção urinária, diabetes mellitus, bexiga neurogénica, doença do sistema nervoso ou musculoesquelético, anomalias das vias urinárias (CDDR); perguntar por início recente (dias ou semanas), que pode ser doença sistémica (NICE CG111 1.3.1); sintomas diurnos, esforço, jato fraco, dor (1.3.4). O DSM-5-TR (p. 402) acrescenta epilepsia, ureter ectópico, válvulas uretrais posteriores, medula ancorada e diabetes insípida; não se diagnostica durante infeção urinária aguda nem com diabetes não tratada, mas o diagnóstico é compatível com estas condições se a incontinência já existia antes delas ou persiste depois de tratadas.",
   "Excluir efeito de medicamentos (antipsicóticos, diuréticos): se a enurese surgiu com o fármaco, em geral não se diagnostica (CDDR). O DSM-5-TR (p. 402) diz que nesse caso não se diagnostica isoladamente e se pode registar como efeito secundário; diagnostica-se se a incontinência já existia antes do fármaco.",
   "Perguntar por obstipação ou encoprese, que se avaliam em conjunto (NICE CG111 1.3.9 e 1.3.12). Perguntar também por ronco intenso e apneia do sono, pernas inquietas e parassónias NREM, associados à enurese noturna (cerca de 50% das crianças com enurese e apneia comprovada ficam secas após adenoamigdalectomia; DSM-5-TR pp. 402-403), e por infeções urinárias, mais frequentes na enurese diurna e não monossintomática.",
   "Se não cumprir os critérios, o CDDR indica a categoria de sintoma MF50.2 (incontinência urinária).",
   "Impacto a registar: limitação de atividades sociais (por exemplo campos de férias), autoestima, ostracismo dos pares e zanga, castigo ou rejeição pelos cuidadores (DSM-5-TR p. 401)."
  ],
  "differential": [
   "Causas médicas (infeção urinária, diabetes, bexiga neurogénica, anomalias urinárias) a excluir primeiro",
   "h-apneia-obstrutiva-sono (enurese secundária)",
   "h-encoprese (obstipação)",
   "Efeito de medicamentos",
   "Criança vulnerável ou problemas familiares (NICE CG111 1.3.9)",
   "Diurna: retenção por ansiedade social ou preocupação com a escola ou o jogo, e urgência com instabilidade do detrusor (DSM-5-TR pp. 399-401)"
  ],
  "comorbid": [
   "h-encoprese",
   "PHDA",
   "Perturbação de oposição",
   "Ansiedade",
   "Depressão",
   "Apneia obstrutiva do sono",
   "Problemas de comportamento e do desenvolvimento (mais frequentes na enurese diurna e noturna; atrasos da linguagem, da aprendizagem e da motricidade em parte dos casos). Nota: a maioria das crianças com enurese não tem perturbação mental comórbida (DSM-5-TR p. 402)",
   "Perturbações de aprendizagem (prevalência mais alta; DSM-5-TR p. 400)",
   "Pernas inquietas e parassónias NREM (associadas à enurese noturna; DSM-5-TR pp. 402-403)"
  ],
  "source": "ICD-11 CDDR secção 6C00 Enuresis (pp. 421-424; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf); NICE CG111, publicada 27/10/2010, https://www.nice.org.uk/guidance/cg111/chapter/Recommendations (rec. 1.3.1-1.3.15); AAP, Marcus et al., Pediatrics 2012;130(3):576-584, https://publications.aap.org/pediatrics/article/130/3/576/30284/Diagnosis-and-Management-of-Childhood-Obstructive (quadro 2). Releitura do-17: mantida a CID-11 sem limite de 3 meses. DSM-5-TR (APA, 2022), Enuresis (F98.0), pp. 399-402 (índices 576-580), lido: critérios A a D, subtipos, desenvolvimento, diferencial e comorbilidade verificados no manual. Divergência DSM-5-TR contra CID-11: 2 vezes por semana durante 3 meses, ou sofrimento/prejuízo (DSM-5-TR), contra vários meses sem número (CID-11). Ramos: acrescentado o adolescente porque o DSM-5-TR descreve persistência e enurese diurna nessa idade."
 },
 {
  "id": "h-encoprese",
  "name": "Encoprese",
  "icd11": "6C01",
  "branches": [
   "pre",
   "esc"
  ],
  "core": [
   {
    "domain": "d-outros",
    "level": 2,
    "why": "Emissão repetida de fezes em locais inadequados em idade em que a continência é esperada."
   }
  ],
  "support": [
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "A encoprese intencional pode associar-se a perturbação de oposição ou de conduta (CDDR)."
   },
   {
    "scale": "snap_oposicao",
    "why": "Oposição elevada: a encoprese intencional pode associar-se a perturbação de oposição (CDDR)."
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Fobias específicas ou ansiedade social (receio de casas de banho públicas) contribuem para a retenção (CDDR)."
   },
   {
    "risk": "risk-mt",
    "why": "Perante dúvida de maus-tratos na história ou no exame, o NICE CG99 1.1.5 manda seguir a orientação própria."
   }
  ],
  "confirm": [
   "Emissão repetida e persistente de fezes em locais inadequados, pelo menos 1 episódio por mês durante vários meses (CDDR). O DSM-5-TR (critério B, F98.1, pp. 402-405) exige pelo menos 1 episódio por mês durante pelo menos 3 meses, involuntária ou intencional; prevalência de 1% a 4% nos países de rendimento elevado, mais alta aos 4 a 6 anos (mais de 4%) do que aos 10 a 12 (menos de 2%). Divergência mantida, com as duas versões.",
   "Idade de desenvolvimento equivalente a cerca de 4 anos; episódios ocasionais na primeira infância não são raros.",
   "Especificar com ou sem obstipação e incontinência por transbordamento (a forma mais comum: retenção e impactação, fezes geralmente mal formadas, história de evitamento da casa de banho). Sem obstipação: fezes de forma normal, episódios intermitentes, por vezes em local proeminente; associa-se a perturbação de oposição ou de conduta ou a masturbação anal (DSM-5-TR p. 403). Os cursos primário e secundário (nunca teve continência ou perdeu-a) descrevem-se sem serem especificador.",
   "Excluir efeito de substância (por exemplo excesso de laxantes) e causa médica: megacólon aganglionar, espinha bífida, estenose anal, diarreia crónica, anomalias do intestino, gastroenterite (CDDR). O DSM-5-TR (p. 405) só admite condição médica se o mecanismo for obstipação: incontinência por diarreia crónica, espinha bífida ou estenose anal não é encoprese; a doença celíaca, o hipotiroidismo, a dieta e fármacos podem causar a obstipação (p. 403).",
   "Sinais de alarme (NICE CG99): atraso na passagem do mecónio (mais de 48 horas), fezes em fita, distensão abdominal com vómitos, fraqueza nas pernas ou atraso locomotor: não tratar como obstipação simples e referenciar com urgência.",
   "Perguntar por enurese associada: ambos os diagnósticos podem ser atribuídos (CDDR). Avaliar vergonha, provocações e evitamento social.",
   "Fatores e impacto (DSM-5-TR pp. 403-404): treino do bacio inadequado ou inconsistente, stress psicossocial (entrada na escola, nascimento de irmão), dor ao defecar com retenção, ansiedade, depressão, perturbações do comportamento e bullying; mais frequente após abuso ou negligência precoces; vergonha com evitamento (campo, escola) e ostracismo."
  ],
  "differential": [
   "Obstipação funcional com incontinência por transbordamento (NICE CG99, quadro 1)",
   "Doença de Hirschsprung, espinha bífida e outras causas orgânicas",
   "h-enurese",
   "Perturbação de oposição ou de conduta (encoprese intencional)",
   "Efeito de medicamentos (laxantes, alguns antibióticos, antiácidos com magnésio)"
  ],
  "comorbid": [
   "h-enurese",
   "Perturbação de oposição",
   "Ansiedade e depressão (fatores associados no DSM-5-TR p. 404)",
   "Deficiência intelectual (CDDR)",
   "Perturbação de conduta (fator associado; DSM-5-TR p. 404)"
  ],
  "source": "ICD-11 CDDR secção 6C01 Encopresis (pp. 424-427; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf); NICE CG99, publicada 26/05/2010, última atualização 13/07/2017, https://www.nice.org.uk/guidance/cg99/chapter/Recommendations (rec. 1.1.1-1.1.5, quadros 1 e 2). Releitura do-18: CID-11 sem limite fixo de 3 meses. DSM-5-TR (APA, 2022), Encopresis (F98.1), pp. 402-405 (índices 580-583), lido: critérios A a D, subtipos, desenvolvimento, diferencial e comorbilidade verificados no manual. Divergência DSM-5-TR contra CID-11: 3 meses (DSM-5-TR) contra vários meses (CID-11)."
 },
 {
  "id": "h-psicose-inicio-precoce",
  "name": "Psicose de início precoce / esquizofrenia",
  "icd11": "6A20",
  "branches": [
   "adol"
  ],
  "core": [
   {
    "risk": "risk-psic",
    "why": "Triagem de risco positiva para sintomas psicóticos: avaliação especializada sem demora (NICE CG155 1.2.1; urgente se sustentados há 4 semanas ou mais, 1.3.1)."
   },
   {
    "domain": "d-outros",
    "level": 2,
    "why": "Rastreio de experiências psicóticas (vozes, ideias bizarras, pensamento desorganizado) clinicamente significativo."
   }
  ],
  "support": [
   {
    "domain": "d-humor",
    "level": 1,
    "why": "A fase prodrómica inclui sintomas depressivos e perda de interesse (CDDR)."
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Ansiedade ou agitação na fase prodrómica (CDDR)."
   },
   {
    "domain": "d-social",
    "level": 1,
    "why": "Declínio social e esquivança precedem a psicose de início na infância (CDDR); atrasos sociais, de linguagem ou motores são mais frequentes."
   },
   {
    "domain": "d-sono",
    "level": 1,
    "why": "Inversão do ciclo do sono na fase prodrómica (CDDR)."
   },
   {
    "domain": "d-substancias",
    "level": 1,
    "why": "Consumo de substâncias a avaliar na primeira avaliação (NICE CG155 1.3.4) e a excluir como causa (CDDR)."
   }
  ],
  "confirm": [
   "Pelo menos 2 sintomas, na maior parte do tempo durante 1 mês ou mais, com pelo menos 1 de: delírios persistentes, alucinações persistentes, pensamento desorganizado, experiências de influência, passividade ou controlo; outros sintomas aceites: negativos, comportamento muito desorganizado, perturbações psicomotoras (CDDR). O DSM-5-TR (esquizofrenia, F20.9, pp. 114-117) pede 2 ou mais de 5 sintomas (delírios, alucinações, discurso desorganizado, comportamento muito desorganizado ou catatónico, sintomas negativos; pelo menos 1 dos 3 primeiros) durante uma parte significativa de 1 mês, e sinais contínuos durante pelo menos 6 meses (incluindo pródromo ou fase residual e pelo menos 1 mês de fase ativa), com declínio do funcionamento (ou, no início na infância ou adolescência, falha em atingir o nível esperado). Divergência: a CID-11 pede só 1 mês; 1 a 6 meses é perturbação esquizofreniforme no DSM-5-TR (F20.81). Mantêm-se as duas.",
   "Não explicados por condição médica (por exemplo tumor cerebral) nem por substância ou medicação (por exemplo corticoides, abstinência) (CDDR). NICE CG155 1.3.4: avaliação multidisciplinar com história de álcool e drogas, exame físico e causas orgânicas, desenvolvimento e perturbações do neurodesenvolvimento.",
   "Na criança e no adolescente jovem, distinguir de fenómenos próprios da idade (amigo imaginário, 'monstro' debaixo da cama), de experiências reais (provocações, bullying) e de pensamento mágico; as alucinações são muitas vezes uma única voz que comenta ou comanda (CDDR). O DSM-5-TR (pp. 117-118) acrescenta: as alucinações visuais são mais comuns na criança e devem distinguir-se de brincadeira de fantasia; os delírios são menos elaborados; os casos de início na infância têm início gradual com sintomas negativos e antecedentes de perturbações emocionais ou do comportamento, alterações intelectuais e da linguagem e atrasos motores subtis; início antes da adolescência é raro.",
   "Considerar autismo e PHDA antes de atribuir a desorganização a psicose; antes da puberdade o início pleno é extremamente raro (CDDR; 'raro antes da adolescência' no DSM-5-TR) e é antecedido por declínio social e escolar, comportamento estranho e alteração do afeto (CDDR). No DSM-5-TR (critério F), perante autismo ou perturbação da comunicação de início na infância, só se acrescenta esquizofrenia se houver delírios ou alucinações proeminentes durante pelo menos 1 mês.",
   "Sintomas transitórios ou atenuados: referenciar sem demora para avaliação especializada; sintomas sustentados há 4 semanas ou mais: referenciação urgente (NICE CG155 1.2.1 e 1.3.1). Avaliar risco de dano para si ou para outros (risk-suic, risk-auto, risk-terc). O DSM-5-TR (p. 119) refere que cerca de 5% a 6% morrem por suicídio e cerca de 20% tentam; o risco é maior perto do início, com sintomas depressivos e consumo de substâncias, e pode responder a alucinações de comando.",
   "Experiências psicóticas fugazes sem outros sintomas nem deterioração do funcionamento são comuns na população geral e não são esquizofrenia (CDDR)."
  ],
  "differential": [
   "Psicose induzida por substância ou medicamento (por exemplo canábis): CID-11 6C41.6 e equivalentes, a excluir primeiro",
   "Causa médica ou orgânica cerebral (NICE CG155 1.3.4)",
   "Episódio depressivo moderado ou grave, ou episódio maníaco ou misto, com sintomas psicóticos (CDDR); no DSM-5-TR, se os delírios ou alucinações ocorrem só durante um episódio depressivo ou maníaco, é perturbação depressiva ou bipolar com características psicóticas (p. 120)",
   "Perturbação esquizoafetiva (6A21)",
   "Perturbação psicótica aguda e transitória (6A23): sintomas flutuantes, sem sintomas negativos, duração até 3 meses (CDDR)",
   "Perturbação de stress pós-traumático (reexperiência com qualidade alucinatória) (CDDR)",
   "Autismo ou PHDA com pensamento ou comportamento desorganizado",
   "Sintomas de duração inferior a 1 mês: outra perturbação psicótica primária especificada (CDDR); no DSM-5-TR, perturbação psicótica breve (F23; pelo menos 1 dia e menos de 1 mês) e, de 1 a 6 meses, perturbação esquizofreniforme (F20.81)",
   "Perturbação delirante; perturbação obsessivo-compulsiva e dismórfica corporal com insight pobre; perturbação de personalidade esquizotípica (DSM-5-TR p. 120)"
  ],
  "comorbid": [
   "Depressão e ansiedade (NICE CG155 1.3.6)",
   "Consumo de substâncias (NICE CG155 1.3.6)",
   "Perturbação de stress pós-traumático (CDDR: ocorre frequentemente em conjunto)",
   "Autismo, deficiência intelectual ou perturbação da aprendizagem (CDDR: mais frequentes no início na infância)",
   "Perturbação obsessivo-compulsiva e perturbação de pânico (taxas elevadas; DSM-5-TR p. 121). Consumo de substâncias é muito frequente (mais de metade tem perturbação por uso de tabaco)"
  ],
  "source": "ICD-11 CDDR secção 6A20 Schizophrenia (pp. 162-170; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf); NICE CG155, publicada 23/01/2013, última atualização 26/10/2016, https://www.nice.org.uk/guidance/cg155/chapter/Recommendations (rec. 1.2.1, 1.3.1, 1.3.4, 1.3.6). Parâmetro AACAP 2013 de esquizofrenia não lido nesta tarefa (descontinuado segundo a auditoria). DSM-5-TR (APA, 2022), Schizophrenia (F20.9), pp. 114-121 (índices 222-231), com perturbação esquizofreniforme (F20.81, pp. 111-113) e perturbação psicótica breve (F23, p. 108), lido: critérios A a F, desenvolvimento e curso na criança, diferencial e comorbilidade verificados no manual. Divergência DSM-5-TR contra CID-11: 6 meses de sinais contínuos (DSM-5-TR) contra 1 mês (CID-11); a referenciação sem demora (NICE) tem finalidade diferente dos limiares de diagnóstico."
 },
 {
  "id": "h-perturbacao-uso-substancias",
  "name": "Perturbação por uso de substâncias (uso nocivo ou dependência)",
  "icd11": "6C40-6C4G, por classe de substância (por exemplo 6C41 canábis: .0 episódio de uso nocivo, .1 padrão de uso nocivo, .2 dependência)",
  "branches": [
   "adol"
  ],
  "core": [
   {
    "domain": "d-substancias",
    "level": 2,
    "why": "Consumo de substâncias com dano ou perda de controlo clinicamente significativos."
   }
  ],
  "support": [
   {
    "risk": "risk-subs",
    "why": "Consumo ou intoxicação na triagem de risco: se positivo, seguir o ramo de ação urgente e usar este domínio para a avaliação detalhada."
   },
   {
    "risk": "risk-psic",
    "why": "Sintomas psicóticos podem ser induzidos por substância (por exemplo 6C41.6 canábis): excluir primeiro."
   },
   {
    "domain": "d-humor",
    "level": 1,
    "why": "Perturbação mental coexistente é comum e o consumo pode induzir ou agravar episódios de humor ou psicose (CDDR)."
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Perturbação mental coexistente é comum (CDDR)."
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Comportamento relacionado com intoxicação (agressividade impulsiva, lesões) é fonte de dano (CDDR, quadro 6.15)."
   },
   {
    "domain": "d-sono",
    "level": 1,
    "why": "Perturbação do sono pode ser consequência do consumo (AACAP 2023: nicotina, álcool e drogas afetam o sono)."
   }
  ],
  "confirm": [
   "Identificar a(s) substância(s), via de administração, frequência e duração; o diagnóstico é por classe.",
   "Uso nocivo (episódio ou padrão): dano clinicamente significativo à saúde física ou mental do próprio (ou comportamento por intoxicação que prejudique a saúde de outros), com relação causal clara; padrão com pelo menos 12 meses se episódico, ou pelo menos 1 mês se contínuo (diário ou quase). Problemas sociais isolados (faltas, discussões) ou ressaca ligeira não bastam (CDDR). O DSM-5-TR não tem esta categoria: diagnostica a perturbação por uso de substâncias de ligeira a grave (ver abaixo).",
   "Dependência: padrão recorrente ou contínuo com regulação do consumo comprometida, em pelo menos 2 de: controlo diminuído; prioridade crescente do consumo apesar de dano; características fisiológicas de neuroadaptação (tolerância, abstinência, consumo para aliviar abstinência), geralmente evidente durante pelo menos 12 meses, ou pelo menos 3 meses se contínuo (CDDR). Nos adolescentes a dependência pode desenvolver-se mais depressa e a tolerância surgir rapidamente (CDDR).",
   "Consumo sem dano clínico é 'uso de risco' (capítulo 24), não perturbação (CDDR).",
   "Distinguir intoxicação, abstinência e perturbação induzida por substância de perturbação mental primária; excluir efeito de medicação prescrita.",
   "O rastreio estruturado (CRAFFT) está nos itens do domínio d-substancias (dsu-16 a dsu-18); aqui não foi relido. CID-11 contra DSM-5-TR (pp. 545-548 e, para a canábis, pp. 575-582): o DSM-5-TR (F12.10 canábis ligeira, F12.20 moderada ou grave, e códigos por classe) diagnostica um único continuum por classe, com 2 ou mais de 11 critérios no mesmo período de 12 meses (controlo diminuído: quantidades maiores do que o pretendido, tentativas falhadas de reduzir, muito tempo gasto, desejo intenso; prejuízo social: falha de obrigações, problemas interpessoais, abandono de atividades; uso arriscado: em situações perigosas, apesar de dano físico ou psicológico; tolerância; abstinência), e gravidade ligeira (2 a 3), moderada (4 a 5) e grave (6 ou mais); tolerância e abstinência em medicação prescrita tomada como indicado não contam. A CID-11 separa uso nocivo e dependência (2 de 3 requisitos) e deixa o 'uso de risco' sem dano fora das perturbações. Seguiu-se a CID-11; as duas versões mantêm-se.",
   "Na canábis, o DSM-5-TR (pp. 581-582) refere que 20% a 30% dos consumidores têm perturbação, que em adolescentes em tratamento a canábis é muitas vezes a substância principal (76%), e que o consumo em períodos críticos se associa a um risco 3 vezes maior de psicose. Nos adolescentes com perturbação por canábis, cerca de metade tem perturbações internalizantes e 64% externalizantes (conduta, PHDA)."
  ],
  "differential": [
   "Uso de risco sem dano clínico (CID-11, capítulo 24)",
   "Intoxicação, abstinência ou perturbação induzida por substância (humor, psicose)",
   "h-psicose-inicio-precoce",
   "Perturbação do humor, ansiedade, PHDA ou trauma como causa (automedicação) ou consequência",
   "Efeito de medicamentos prescritos",
   "Consumo não problemático (no DSM-5-TR 20% a 30% dos consumidores de canábis têm perturbação, a distinção é difícil porque o jovem nem sempre atribui os problemas à substância; p. 581)"
  ],
  "comorbid": [
   "h-perturbacao-jogo-videojogos",
   "Perturbação do humor",
   "Perturbação de ansiedade",
   "PHDA",
   "Perturbação do comportamento",
   "Trauma",
   "Perturbações por outras substâncias e por tabaco (a perturbação por canábis multiplica por cerca de 9 o risco de outra perturbação por substâncias; DSM-5-TR p. 581)"
  ],
  "source": "ICD-11 CDDR secção disorders due to substance use: padrão de uso nocivo (p. 459), dependência (pp. 463-464) e quadro de categorias por classe; texto lido na cópia do PDF https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf); AACAP, Facts for Families n.º 34 Sleep Problems (atualizado março 2023), https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Childrens-Sleep-Problems-034.aspx (sono). Guidelines clínicas de perturbação por uso de substâncias (AACAP 2026, NICE, NIDA, CRAFFT) não lidas nesta tarefa: prática clínica (sem fonte) para o que não consta do CDDR. DSM-5-TR (APA, 2022), Substance Use Disorders, pp. 545-548 (índices 755-758), e Cannabis Use Disorder (F12.10 e F12.20), pp. 575-582 (índices 790-799), lido: critérios, gravidade, diferencial e comorbilidade verificados no manual. Divergência DSM-5-TR contra CID-11: continuum único de ligeira a grave (DSM-5-TR) contra uso nocivo e dependência (CID-11)."
 },
 {
  "id": "h-perturbacao-jogo-videojogos",
  "name": "Perturbação de jogo (videojogos)",
  "icd11": "6C51",
  "branches": [
   "esc",
   "adol"
  ],
  "core": [
   {
    "domain": "d-substancias",
    "level": 2,
    "why": "Padrão de jogo com controlo diminuído, prioridade crescente sobre outras atividades e continuação apesar de consequências, com prejuízo."
   }
  ],
  "support": [
   {
    "domain": "d-sono",
    "level": 1,
    "why": "Alterações do sono, da alimentação e do exercício e problemas escolares acompanham o jogo excessivo (CDDR)."
   },
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "Autismo e PHDA têm taxas mais elevadas de jogo problemático (CDDR)."
   },
   {
    "scale": "snap_desatencao",
    "why": "Desatenção elevada: PHDA coexiste com jogo problemático (CDDR)."
   },
   {
    "domain": "d-social",
    "level": 1,
    "why": "Autismo tem taxas elevadas de jogo problemático (CDDR)."
   },
   {
    "domain": "d-humor",
    "level": 1,
    "why": "Em adolescentes associa-se a problemas internalizantes (sofrimento emocional, baixa autoestima) (CDDR)."
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Perturbação de ansiedade coexiste frequentemente (CDDR)."
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Problemas externalizantes (comportamento antissocial, controlo da raiva); disforia, agressividade verbal ou física quando se interrompe o jogo (CDDR)."
   },
   {
    "scale": "sdq_emocional",
    "why": "Dificuldades emocionais elevadas: associação a problemas internalizantes (CDDR)."
   },
   {
    "scale": "sdq_comportamento",
    "why": "Problemas de comportamento elevados: associação a problemas externalizantes (CDDR)."
   }
  ],
  "confirm": [
   "Padrão persistente de jogo com todos: controlo diminuído (início, frequência, intensidade, duração, interrupção, contexto); prioridade crescente sobre outros interesses e atividades; continuação ou escalada apesar de consequências negativas (conflito familiar, mau desempenho escolar, saúde).",
   "Em geral evidente durante cerca de 12 meses; pode diagnosticar-se após período mais curto (por exemplo 6 meses) se os sintomas forem graves (por exemplo dias seguidos sem pausa) e os restantes critérios estiverem cumpridos (CDDR).",
   "Sofrimento ou prejuízo significativo pessoal, familiar, social, escolar.",
   "Não basta uso elevado: horas elevadas em adolescentes do sexo masculino, nas férias ou em atividades organizadas, ou jogar para treinar competências, melhorar o humor, aliviar o aborrecimento ou socializar, sem os outros critérios, não indicam perturbação (CDDR).",
   "Excluir mania ou hipomania, perturbação obsessivo-compulsiva (as compulsões não são vividas como prazerosas) e efeito de substância ou medicação (por exemplo agonistas dopaminérgicos).",
   "Se o jogo envolver apostas com dinheiro, considerar perturbação de jogo de apostas (6C50, não incluída neste catálogo).",
   "Divergência: o DSM-5-TR não reconhece a perturbação como diagnóstico: a perturbação por jogo na internet ('Internet gaming disorder') está na secção III, condições para estudo posterior (pp. 913-916). Critérios propostos: 5 ou mais de 9 num período de 12 meses (preocupação com jogos; abstinência sem sinais físicos, com irritabilidade, ansiedade ou tristeza; tolerância; tentativas falhadas de controlar; perda de interesse por outras atividades; uso continuado apesar de problemas psicossociais; enganar família ou terapeutas; usar o jogo para escapar ao humor negativo; pôr em risco ou perder relação, escola ou emprego); gravidade ligeira, moderada ou grave; só jogos sem apostas (o jogo de apostas é outro diagnóstico). A CID-11 (6C51) pede 3 características (controlo diminuído, prioridade crescente, continuação apesar de consequências), em geral com cerca de 12 meses. Mantêm-se as duas; seguiu-se a CID-11. O texto do DSM-5-TR foi lido no manual (substitui a referência anterior à página da APA).",
   "O DSM-5-TR (p. 915) descreve o jogo típico como 8 a 10 horas por dia ou mais (pelo menos 30 horas por semana), sem usar as horas como critério; a CID-11 diz que horas elevadas, por si, não bastam. Prevalência a 12 meses de 4,7% em média (0,7% a 15,6%), em adolescentes 4,6% (rapazes 6,8%, raparigas 1,3%); rapazes de 12 a 15 anos podem ter mais consequências (notas, solidão) (pp. 915-916).",
   "Avaliar ideação suicida, autolesão e sono: o jogo problemático associa-se a maior risco de ideação e tentativa, em parte mediado pelo sono, e a sintomas emocionais, conduta e hiperatividade ou desatenção (DSM-5-TR p. 916)."
  ],
  "differential": [
   "Uso de risco ('hazardous gaming', QE22, capítulo 24): padrão com risco sem os outros critérios",
   "Jogo de apostas (6C50) se houver apostas com dinheiro; o DSM-5-TR (p. 916) também remete o jogo de apostas na internet para a perturbação de jogo de apostas. Uso excessivo da internet sem jogos (redes sociais, pornografia) não é análogo",
   "PHDA ou autismo (explicam preferência por estímulos e regulação da atenção)",
   "Depressão ou ansiedade (o jogo como fuga ou regulação do humor)",
   "Mania ou hipomania",
   "Perturbação obsessivo-compulsiva",
   "Efeito de substância ou medicação"
  ],
  "comorbid": [
   "h-perturbacao-uso-substancias",
   "Perturbação do humor (depressão major no DSM-5-TR p. 916)",
   "Perturbação de ansiedade",
   "PHDA (CDDR; DSM-5-TR p. 916)",
   "Perturbação obsessivo-compulsiva (DSM-5-TR p. 916)",
   "Perturbações do sono"
  ],
  "source": "ICD-11 CDDR secção 6C51 Gaming disorder (pp. 511-515; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf). DSM-5-TR (APA, 2022), secção III, Internet Gaming Disorder (condição para estudo posterior, sem código), pp. 913-916 (índices 1179-1183), lido: critérios propostos, prevalência, diferencial e comorbilidade verificados no manual. Só a CID-11 tem este diagnóstico formal (6C51); no DSM-5-TR só existe como condição para estudo."
 },
 {
  "id": "h-perturbacao-neurologica-funcional",
  "name": "Perturbação neurológica funcional (CID-11: perturbação dissociativa de sintomas neurológicos)",
  "icd11": "6B60",
  "branches": [
   "esc",
   "adol"
  ],
  "core": [
   {
    "domain": "d-outros",
    "level": 2,
    "why": "Sintomas motores, sensoriais ou cognitivos (por exemplo fraqueza, alterações da marcha, crises não epiléticas) que variam e não se explicam por doença neurológica."
   }
  ],
  "support": [
   {
    "domain": "d-trauma",
    "level": 1,
    "why": "Acontecimento adverso ou stress psicossocial precede muitas vezes o início: bullying, stress escolar, conflito familiar ou separação, luto (CDDR)."
   },
   {
    "risk": "risk-mt",
    "why": "Antecedentes de abuso ou negligência são fator de risco (CDDR)."
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Perturbações de ansiedade associadas são frequentes no adolescente e podem persistir (CDDR)."
   },
   {
    "domain": "d-humor",
    "level": 1,
    "why": "Perturbações do humor associadas são frequentes no adolescente (CDDR)."
   },
   {
    "scale": "phqa_10",
    "why": "Rastreio de depressão associada no adolescente (CDDR refere perturbações do humor frequentes)."
   }
  ],
  "confirm": [
   "Perturbação involuntária da integração de funções motoras, sensoriais ou cognitivas, com duração de pelo menos várias horas (CDDR). Especificar: marcha, fraqueza, movimento, crises não epiléticas, visual, fala, sensorial; na criança e no adolescente predominam alterações da marcha e crises não epiléticas. O DSM-5-TR (perturbação de sintomas neurológicos funcionais / perturbação de conversão, pp. 360-364) exige sintomas de alteração da função motora ou sensorial voluntária (A), achados clínicos que mostram incompatibilidade com doença neurológica reconhecida (B), não melhor explicada por outra condição médica ou mental (C) e sofrimento ou prejuízo significativo ou necessidade de avaliação médica (D); sem duração mínima (aguda até 6 meses, persistente 6 meses ou mais).",
   "Achados clínicos incompatíveis com doença do sistema nervoso ou outra condição médica: exige avaliação médica (por exemplo EEG normal durante uma crise aparente); referenciar a neuropediatria antes de concluir (CDDR). O DSM-5-TR (pp. 361-362) torna-o um diagnóstico de inclusão, por sinais positivos de incompatibilidade (sinal de Hoover na fraqueza, 'entrainment' do tremor, inconsistência interna), e não de exclusão; pode coexistir com doença neurológica (cerca de 1 em 5 com crises funcionais têm também epilepsia, p. 363). Crises funcionais: olhos fechados persistentes, movimentos bilaterais com consciência preservada ou duração superior a 5 minutos (p. 362).",
   "Excluir efeito de substância ou medicação, perturbação do sono (movimento rítmico, paralisia do sono isolada) e que os sintomas ocorram só durante outra perturbação dissociativa.",
   "Prejuízo significativo do funcionamento. Sintomas transitórios com ansiedade intensa ou alterações breves sem prejuízo não contam (CDDR).",
   "Perguntar por acontecimentos recentes (perdas, bullying, escola, conflito familiar), por doença física semelhante em familiares ou amigos e por famílias muito preocupadas com doença (CDDR). No DSM-5-TR a falta de stressor não impede o diagnóstico: pode estar ausente em até 50% dos casos; pode haver história de abuso e negligência na infância, e o stress é frequente mas não universal (p. 362). Perguntar por ideação suicida, que é mais frequente (p. 363).",
   "Não simulados ou provocados (distinguir de perturbação factícia ou simulação).",
   "Nota: 'perturbação neurológica funcional' é a designação usada na prática; a CID-11 usa 6B60 (perturbação dissociativa de sintomas neurológicos) e o DSM-5-TR chama-lhe perturbação de sintomas neurológicos funcionais (perturbação de conversão), codificada por tipo de sintoma (F44.4 fraqueza, movimento, deglutição ou fala; F44.5 crises; F44.6 anestesia ou sintomas sensoriais especiais; F44.7 misto). O prognóstico pode ser melhor em crianças mais novas do que em adolescentes e adultos; duração curta e concordância com o diagnóstico favorecem (DSM-5-TR pp. 362-363). Nenhuma guideline pediátrica específica foi lida nesta tarefa."
  ],
  "differential": [
   "Doença neurológica (AVC, traumatismo craniano, epilepsia) e outra condição médica a excluir primeiro",
   "Tiques e tiques funcionais (a CID-11 descreve espasmo facial funcional semelhante a tiques) ",
   "h-perturbacao-sofrimento-corporal",
   "Perturbação de ansiedade, depressão, psicose ou perturbação de stress pós-traumático que expliquem os sintomas",
   "Amnésia dissociativa (se o défice for só de memória autobiográfica)",
   "Perturbação factícia ou simulação",
   "Perturbação do sono (movimento rítmico relacionado com o sono, paralisia do sono)",
   "Perturbação de pânico (ataques com sintomas cardiorrespiratórios e consciência retida; a perda de consciência com amnésia ocorre nas crises funcionais e não no pânico; DSM-5-TR p. 364)",
   "Perturbação de sintomas somáticos: pode coexistir; na perturbação neurológica funcional o essencial é a perda de função incompatível com doença neurológica, e não o sofrimento com o sintoma (DSM-5-TR p. 364)",
   "Perturbação dismórfica corporal e depressão (queixa de peso generalizado nos membros, em vez de fraqueza focal) (DSM-5-TR p. 364)"
  ],
  "comorbid": [
   "Depressão",
   "Ansiedade",
   "Outros sintomas médicos (CDDR: adolescentes)",
   "h-perturbacao-sofrimento-corporal",
   "Perturbação de pânico e outras de ansiedade (DSM-5-TR p. 364)",
   "Sintomas dissociativos (frequentes; se houver perturbação dissociativa, dão-se os dois diagnósticos; DSM-5-TR p. 364)"
  ],
  "source": "ICD-11 CDDR secção 6B60 Dissociative neurological symptom disorder (pp. 366-372; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf). A releitura do-11 e do-20 cita Kozlowska et al., Harv Rev Psychiatry 2023 (PMC9997641), que não li nesta tarefa. DSM-5-TR (APA, 2022), Functional Neurological Symptom Disorder (Conversion Disorder), F44.4 a F44.7, pp. 360-364 (índices 528-533), lido: critérios A a D, especificadores, desenvolvimento, diferencial e comorbilidade verificados no manual. Divergência de nome e estrutura entre DSM-5-TR e CID-11 indicada em 'confirm'; a nota anterior sobre Kozlowska 2023 continua por ler."
 },
 {
  "id": "h-perturbacao-sofrimento-corporal",
  "name": "Perturbação de sofrimento corporal (sintomas somáticos)",
  "icd11": "6C20",
  "core": [
   {
    "domain": "d-outros",
    "level": 2,
    "why": "Sintomas corporais persistentes e angustiantes (dor, cansaço, queixas digestivas), com atenção excessiva a eles."
   }
  ],
  "support": [
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "Coexiste muitas vezes com perturbações de ansiedade (CDDR)."
   },
   {
    "domain": "d-humor",
    "level": 1,
    "why": "Coexiste muitas vezes com perturbações depressivas; os sintomas somáticos podem dominar a depressão (CDDR)."
   },
   {
    "scale": "phqa_10",
    "why": "Rastreio de depressão no adolescente: os sintomas somáticos podem ser expressão de episódio depressivo (CDDR)."
   },
   {
    "domain": "d-social",
    "level": 1,
    "why": "Faltas à escola por causa dos sintomas são frequentes nas crianças (CDDR); registar o impacto no funcionamento."
   }
  ],
  "confirm": [
   "Sintomas corporais persistentes: alguns sintomas presentes na maior parte dos dias durante pelo menos vários meses (por exemplo 3 meses ou mais), não necessariamente os mesmos (CDDR). O DSM-5-TR (perturbação de sintomas somáticos, F45.1, pp. 351-357) pede um ou mais sintomas somáticos perturbadores ou com disrupção da vida diária (A), pensamentos, sentimentos ou comportamentos excessivos sobre eles (pelo menos um: pensamentos desproporcionados e persistentes sobre a gravidade, ansiedade persistentemente elevada, tempo e energia excessivos) (B) e estado sintomático persistente, tipicamente mais de 6 meses (C); com dor predominante e/ou persistente; gravidade pelo número de critérios B. Sintomas sem explicação médica não bastam. Divergência: 'vários meses' (CID-11) contra 'tipicamente mais de 6 meses' (DSM-5-TR); mantêm-se as duas.",
   "Atenção excessiva aos sintomas: preocupação persistente com a gravidade ou consequências, e/ou contactos repetidos com os serviços de saúde muito acima do necessário; mantém-se apesar de exame e reasseguramento adequados.",
   "Prejuízo significativo (pessoal, familiar, social, escolar).",
   "Em crianças e adolescentes os sintomas mais comuns são dor abdominal, náuseas, fadiga, cefaleias e dor musculoesquelética, geralmente um só sintoma recorrente; as respostas dos pais (preocupação excessiva) podem agravar ou prolongar (CDDR). O DSM-5-TR (p. 353) concorda: sintomas mais comuns na criança são dor abdominal recorrente, cefaleia, fadiga e náuseas, com um sintoma proeminente mais frequente do que no adulto; manda obter a perspetiva do doente, da família e da escola, porque a interpretação e a resposta dos pais podem determinar o sofrimento, o pedido de exames e as faltas à escola.",
   "Não melhor explicada por outra perturbação mental (psicose, humor, ansiedade); se houver perturbação do humor, só diagnosticar se a preocupação precede o episódio ou persiste após a remissão (CDDR).",
   "Excluir condição médica que explique os sintomas; se existir, o grau de atenção deve ser claramente excessivo face à sua gravidade (CDDR).",
   "Gravidade (ligeira, moderada, grave) pelo tempo e energia dedicados e pelo prejuízo (CDDR); no DSM-5-TR pelo número de critérios B cumpridos e pela multiplicidade dos sintomas (pp. 351-352). A CID-11 e o DSM-5-TR coincidem em que o diagnóstico assenta na atenção excessiva e não na falta de explicação médica, e em que pode coexistir com doença médica."
  ],
  "differential": [
   "Doença médica que explique os sintomas (a excluir primeiro)",
   "h-perturbacao-neurologica-funcional",
   "Perturbação depressiva com sintomas somáticos",
   "Perturbação de ansiedade generalizada ou de pânico",
   "Ansiedade de saúde (hipocondria): preocupação com ter doença grave, procura de reasseguramento (CDDR); no DSM-5-TR é a perturbação de ansiedade de doença (F45.21: preocupação com ter ou adquirir doença grave durante pelo menos 6 meses, com sintomas ausentes ou ligeiros; p. 357)",
   "Perturbação factícia imposta a si próprio",
   "Perturbação de pânico (sintomas somáticos em episódios agudos), perturbação delirante do tipo somático (convicção de intensidade delirante), perturbação dismórfica corporal e perturbação obsessivo-compulsiva (DSM-5-TR pp. 355-356)"
  ],
  "comorbid": [
   "Depressão (DSM-5-TR p. 356: até 50% dos casos de perturbação de sintomas somáticos, valor não específico da idade pediátrica)",
   "Ansiedade (DSM-5-TR p. 356: até 50% dos casos, valor não específico da idade pediátrica)",
   "h-perturbacao-neurologica-funcional",
   "Perturbação de stress pós-traumático e perturbação obsessivo-compulsiva (DSM-5-TR p. 356)"
  ],
  "source": "ICD-11 CDDR secção 6C20 Bodily distress disorder (pp. 429-435; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf). Sem guideline pediátrica lida: prática clínica (sem fonte) para a abordagem; o DSM-5-TR (2022) confirma os critérios e o quadro na criança. DSM-5-TR (APA, 2022), Somatic Symptom Disorder (F45.1), pp. 351-357 (índices 517-525), com perturbação de ansiedade de doença (F45.21), lido: critérios A a C, especificadores, desenvolvimento na criança, diferencial e comorbilidade verificados no manual. Divergência DSM-5-TR contra CID-11: duração (mais de 6 meses contra vários meses) e foco (o DSM-5-TR exige pensamentos, sentimentos ou comportamentos excessivos; a CID-11 exige atenção excessiva)."
 }
];
