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
   "Pelo menos 5 sintomas em simultâneo, quase todos os dias, durante pelo menos 2 semanas, com pelo menos 1 do grupo afetivo: humor deprimido (na criança e no adolescente pode ser irritabilidade) ou perda marcada de interesse ou prazer. Restantes: dificuldade de concentração ou indecisão, baixa autoestima ou culpa excessiva, desesperança, pensamentos recorrentes de morte ou ideação suicida, alteração do sono, do apetite ou do peso, agitação ou lentificação observáveis, cansaço.",
   "Que os sintomas são mudança face ao funcionamento anterior; na criança pequena depende sobretudo do relato de pais e educadores.",
   "Prejuízo funcional significativo (pessoal, familiar, social, escolar), ou funcionamento só mantido com esforço adicional significativo.",
   "Irritabilidade isolada não basta: pode indicar outra perturbação ou ser reação normal à frustração.",
   "Sem história de episódio maníaco, misto ou hipomaníaco: se existir, o diagnóstico passa a ser bipolar. Perguntar por história familiar de depressão e de bipolaridade (NICE NG134 1.1.11).",
   "Excluir luto normal (morte de pessoa querida há menos de 6 meses, ou mais tempo conforme a cultura); suspeitar de episódio depressivo se houver sintomas contínuos 1 mês ou mais após a perda, culpa grave não ligada ao falecido, sintomas psicóticos, ideação suicida ou lentificação psicomotora.",
   "Episódio único: um só episódio. Recorrente: pelo menos 2 episódios separados por vários meses sem perturbação significativa do humor.",
   "Gravidade do episódio (ligeira, moderada, grave) e presença de delírios ou alucinações.",
   "Perguntar sempre pelo consumo de álcool e drogas, bullying ou abuso, autolesão e ideias de suicídio; o adolescente deve ter oportunidade de falar em privado (NICE NG134 1.1.7).",
   "Não explicado por doença médica, substância ou medicamento."
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
   "PHDA: a desatenção persiste fora dos episódios e não acompanha as mudanças de humor ou de energia (CDDR)",
   "Perturbação mista depressiva e ansiosa (6A73), se nenhum dos conjuntos de sintomas atinge o limiar (CDDR; não incluída no catálogo)",
   "Causa médica a excluir primeiro: hipotiroidismo, mononucleose, anemia, doença autoimune, síndrome de fadiga crónica, enxaqueca, epilepsia, asma, doença inflamatória intestinal (AACAP 2023)",
   "Medicamentos e substâncias que causam sintomas depressivos (por exemplo corticoides, estimulantes, canábis, álcool): rever a medicação e perguntar por consumos (AACAP 2023)"
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
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção Mood disorders: episódio depressivo (pp. 212-217), 6A70 (pp. 244-245), 6A71 (pp. 246-254); AACAP, Walter et al., JAACAP 2023;62(5):479-502, https://www.jaacap.org/article/S0890-8567(22)01852-4/fulltext (diferencial e comorbilidades); NICE NG134 (publicada 25/06/2019), https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (1.1.7, 1.1.11). Divergência: o NG134 não define critérios diagnósticos; os critérios seguidos são os da CID-11; DSM-5-TR fica para fase posterior (a AACAP 2023 descreve o DSM-5-TR: 2 semanas)."
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
   "Humor deprimido na maior parte do dia, na maioria dos dias, durante pelo menos 2 anos (na criança e no adolescente pode ser irritabilidade pervasiva). Na criança, a CID-11 admite diagnosticar após cerca de 1 ano; a AACAP 2023 refere duração mínima de 1 ano para a perturbação depressiva persistente em crianças e adolescentes (coincide com esse limiar).",
   "Sintomas adicionais típicos do episódio depressivo, ainda que mais ligeiros: perda de interesse ou prazer, menor concentração ou indecisão, baixa autoestima ou culpa excessiva, desesperança, alteração do sono, do apetite, baixa energia.",
   "Nos primeiros 2 anos nunca houve um período de 2 semanas com sintomas em número e duração suficientes para episódio depressivo.",
   "Sem períodos prolongados sem sintomas (cerca de 2 meses ou mais) desde o início; intervalos curtos são compatíveis.",
   "Sem história de episódio maníaco, misto ou hipomaníaco.",
   "Sofrimento significativo com os sintomas persistentes, ou prejuízo funcional significativo.",
   "Não explicado por doença médica (por exemplo hipotiroidismo), substância ou medicamento.",
   "Se, mais tarde, os sintomas atingirem o limiar de episódio depressivo, podem diagnosticar-se ambos (distimia e depressão major)."
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
   "Medicamentos e substâncias que causam sintomas depressivos (por exemplo corticoides, estimulantes, canábis, álcool): rever a medicação e perguntar por consumos (AACAP 2023)"
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
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6A72 (pp. 255-258); AACAP, Walter et al., JAACAP 2023;62(5):479-502, https://www.jaacap.org/article/S0890-8567(22)01852-4/fulltext (duração de 1 ano em jovens, DSM-5-TR); NICE NG134 (publicada 25/06/2019), https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (cita a distimia só na categoria de depressão ligeira). Divergência CID-11 versus DSM: 2 anos na CID-11 com possibilidade de 1 ano na criança; seguida a CID-11; DSM-5-TR fica para fase posterior."
 },
 {
  "id": "h-ddm",
  "name": "Perturbação de desregulação disruptiva do humor (DMDD)",
  "icd11": "Sem categoria própria na CID-11; a irritabilidade-raiva crónica é enquadrada em 6C90.0 (perturbação de oposição e desafio, com irritabilidade-raiva crónica). No DSM-5, F34.81",
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
   "A CID-11 não tem esta categoria: seguiu-se o construto DSM-5 (Rao 2014; NIMH 2023) e, para a CID-11, o especificador 6C90.0 do CDDR. Que 6C90.0 seja o equivalente da DMDD é inferência: o CDDR descreve-o como padrão de desregulação do humor, mas não nomeia a DMDD.",
   "DSM-5 (Rao 2014): explosões graves (verbais ou comportamentais), desproporcionadas à situação e ao nível de desenvolvimento, em média 3 ou mais por semana.",
   "Humor persistentemente irritável ou zangado entre as explosões, na maior parte do dia, quase todos os dias, observável por outros.",
   "Presente há 12 meses ou mais, sem mais de 3 meses seguidos sem sintomas; em pelo menos 2 de 3 contextos (casa, escola, pares), graves em pelo menos 1.",
   "Primeiro diagnóstico nunca antes dos 6 nem depois dos 18 anos; início antes dos 10 anos (Rao 2014). O NIMH resume 'diagnosticada entre os 6 e os 10 anos'; seguida a formulação de Rao, mais próxima dos critérios.",
   "Exclusões DSM-5 (Rao 2014): não ocorre só durante episódio depressivo major nem é melhor explicado por autismo, distimia, stress pós-traumático ou ansiedade de separação; não coexiste com bipolar ou perturbação explosiva intermitente; se cumprir também os critérios de oposição, só DMDD.",
   "CID-11 (6C90.0): critérios de perturbação de oposição e desafio (padrão persistente, por exemplo 6 meses ou mais, de desobediência e desafio, com prejuízo) mais irritabilidade-raiva quase todos os dias, em vários contextos, desproporcionada e não limitada à relação com os pais; só irritabilidade e raiva não bastam para oposição.",
   "Que a irritabilidade crónica não é episódica: a mania exige episódio distinto com euforia (NICE CG185 1.11.5).",
   "Procurar causas da irritabilidade: stress psicossocial, conflito familiar, maus-tratos, perturbações da aprendizagem e da comunicação (Rao 2014)."
  ],
  "differential": [
   "h-bipolar-1",
   "h-bipolar-2",
   "h-depressao-major",
   "h-distimia",
   "h-ansiedade-separacao",
   "h-pstp",
   "Perturbação de oposição e desafio (6C90), com ou sem irritabilidade-raiva crónica",
   "PHDA",
   "autismo",
   "Perturbação explosiva intermitente (6C73)",
   "Perturbação do comportamento (6C91)",
   "Problemas de linguagem, aprendizagem e sono, doença médica ou medicamentos que alterem o humor (prática clínica, sem fonte)"
  ],
  "comorbid": [
   "PHDA",
   "perturbação de oposição e desafio",
   "h-pag",
   "h-depressao-major",
   "perturbações da aprendizagem e da comunicação"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6C90 e especificadores (pp. 537-543); NIMH, Disruptive Mood Dysregulation Disorder: The Basics (revisto em 2023), https://www.nimh.nih.gov/health/publications/disruptive-mood-dysregulation-disorder; Rao U, DSM-5: Disruptive Mood Dysregulation Disorder, Asian J Psychiatr 2014, https://pmc.ncbi.nlm.nih.gov/articles/PMC4254488/ (fonte secundária do DSM-5); AACAP, Walter et al., JAACAP 2023;62(5):479-502, https://www.jaacap.org/article/S0890-8567(22)01852-4/fulltext (lista a DMDD como perturbação depressiva do DSM-5-TR, F34.81, sem critérios). Divergência: CID-11 sem a categoria, DSM com ela; DSM-5-TR fica para fase posterior; NICE sem guideline lida."
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
   "Pelo menos um episódio maníaco ou misto (CID-11); um só chega para o tipo I. Na criança e no jovem, o NICE exige mania, com euforia na maior parte dos dias e do tempo durante pelo menos 7 dias; a irritabilidade não é critério diagnóstico central (CG185 1.11.5).",
   "Divergência: a CID-11 admite estado de humor extremo com euforia, irritabilidade ou expansividade e refere que na criança pode ser irritabilidade extrema. Seguido o NICE e a releitura de drafts/humor.json (campo changed de dh-24): a irritabilidade crónica ou os acessos de raiva não bastam; só apontam para mania se episódicos, prolongados, diferentes do habitual e com outros sintomas e mudança de funcionamento (apoio CANMAT/ISBD 2018 da releitura anterior, não relido nesta tarefa).",
   "Aumento de atividade ou de energia e vários sintomas associados: maior loquacidade, fuga de ideias ou pensamentos acelerados, grandiosidade, menor necessidade de sono, distractibilidade, comportamento impulsivo de risco, aumento do impulso sexual, da sociabilidade ou da atividade dirigida a objetivos. O CDDR não fixa número mínimo.",
   "Comportamentos episódicos e recorrentes (ou de início rápido se for o primeiro episódio), inadequados ao contexto, acima do esperado para a idade, mudança nítida face ao funcionamento anterior (CDDR). Grandiosidade: crenças mantidas contra evidência clara ou que põem a criança em perigo, não a sobrestimação normal das capacidades.",
   "Prejuízo significativo, ou necessidade de tratamento intensivo (por exemplo internamento), ou sintomas psicóticos.",
   "Sintomas de PHDA só contam se agravarem nos períodos de humor elevado; na PHDA o início é antes dos 12 anos, são persistentes e não ligados a mudanças de humor ou de energia (CDDR).",
   "Não decorrente de doença médica, substância ou medicamento; síndrome maníaca durante antidepressivo só conta se persistir depois de suspenso o tratamento e se cumprirem os critérios completos (CDDR).",
   "NICE CG185: diagnóstico só após monitorização longitudinal prospetiva intensiva, por profissional ou equipa com experiência, com os pais ou cuidadores (1.11.4); não usar questionários em cuidados primários para identificar (1.11.1); suspeita abaixo dos 14 anos: referenciar a CAMHS (1.11.2); a partir dos 14: serviço de intervenção precoce em psicose ou CAMHS com experiência em bipolaridade (1.11.3).",
   "Não diagnosticar com base apenas em depressão com história familiar de bipolaridade: seguir (NICE 1.11.6).",
   "Avaliação completa (NICE 1.3.2 e 1.11.7): história de humor, episódios de hiperatividade e desinibição, gatilhos, história familiar, trauma precoce, perturbação do desenvolvimento, funcionamento escolar e social, com informação de pais ou cuidadores."
  ],
  "differential": [
   "h-ddm",
   "h-bipolar-2",
   "h-depressao-major",
   "h-pstp",
   "PHDA",
   "Perturbação de oposição e desafio",
   "Esquizofrenia e outras perturbações psicóticas primárias: os sintomas psicóticos da bipolaridade ocorrem só durante os episódios de humor (NICE 1.3.3; CDDR)",
   "Perturbação de personalidade (NICE 1.3.3)",
   "Consumo de substâncias (NICE 1.3.3; CDDR)",
   "Causa médica a excluir primeiro: hipotiroidismo ou hipertiroidismo (NICE 1.3.3)"
  ],
  "comorbid": [
   "PHDA",
   "perturbações de ansiedade",
   "consumo de substâncias",
   "perturbação de oposição e desafio"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), episódios maníaco, misto e hipomaníaco (pp. 217-224), 6A60 (pp. 225-229) e secção das perturbações bipolares (pp. 236-240); NICE CG185 (publicada 24/09/2014, atualizada 02/09/2025), https://www.nice.org.uk/guidance/cg185/chapter/Recommendations (1.1.2, 1.3.2, 1.3.3, 1.11.1 a 1.11.7); drafts/humor.json (dh-7, dh-23, dh-24, dh-27, dh-34, campo changed). Divergência CID-11 versus NICE na irritabilidade: seguido o NICE; DSM-5-TR fica para fase posterior."
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
   "Pelo menos um episódio hipomaníaco e pelo menos um episódio depressivo, sem história de episódio maníaco ou misto (CID-11, 6A61). Hipomania sem episódio depressivo não chega.",
   "Hipomania: humor persistentemente elevado ou irritabilidade aumentada, com aumento de atividade ou de energia, quase todos os dias, durante pelo menos vários dias, e vários sintomas associados (loquacidade, pensamentos acelerados, autoestima aumentada, menor necessidade de sono, distractibilidade, comportamento impulsivo, mais impulso sexual ou sociabilidade); sem prejuízo marcado e sem sintomas psicóticos (CDDR).",
   "Divergência: o NICE CG185 (1.11.5) exige mania, com euforia pelo menos 7 dias, para diagnosticar bipolaridade em crianças e jovens, e nas recomendações lidas não encontrei critérios próprios de hipomania nem de tipo II para esta idade. Por isso, até à avaliação especializada, manter como hipótese a vigiar (1.11.2 a 1.11.4), não como diagnóstico.",
   "Na criança e no adolescente a hipomania é difícil de distinguir de comportamento normal para a idade (por exemplo alterações do sono ou irritabilidade): considerar a episodicidade e a mudança marcada e concomitante de cognições (pensamentos acelerados) ou de comportamento (mais atividade) (CDDR).",
   "A hipomania é muitas vezes avaliada retrospetivamente, porque o doente procura ajuda nos episódios depressivos (CDDR): pedir descrição dos pais e de outros informadores.",
   "Se surgir um episódio maníaco ou misto, o diagnóstico muda para tipo I (CDDR).",
   "Não decorrente de doença médica, substância ou medicamento; síndrome hipomaníaca durante antidepressivo só conta se persistir depois de suspenso o tratamento (CDDR).",
   "NICE: monitorização longitudinal prospetiva por equipa com experiência (1.11.4) e referenciação (1.11.2, 1.11.3), como no tipo I."
  ],
  "differential": [
   "h-bipolar-1",
   "h-depressao-major",
   "h-distimia",
   "h-ddm",
   "Perturbação ciclotímica (6A62), se os períodos depressivos nunca atingiram o limiar de episódio e nunca houve mania (CDDR; não incluída no catálogo)",
   "PHDA",
   "Variações normais do humor, do sono e da irritabilidade na adolescência (CDDR)",
   "Consumo de substâncias",
   "Causa médica a excluir primeiro: hipotiroidismo ou hipertiroidismo (NICE 1.3.3)"
  ],
  "comorbid": [
   "perturbações de ansiedade",
   "consumo de substâncias",
   "PHDA"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), episódio hipomaníaco (pp. 222-224), 6A61 (pp. 230-233) e perturbações bipolares (pp. 236-240); NICE CG185 (publicada 24/09/2014, atualizada 02/09/2025), https://www.nice.org.uk/guidance/cg185/chapter/Recommendations (1.11.2 a 1.11.5); drafts/humor.json (campo changed de dh-24 e dh-34). Divergência CID-11 versus NICE: seguido o NICE; DSM-5-TR fica para fase posterior."
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
   "Persistente: pelo menos vários meses, na maioria dos dias; não transitória. Limiar em meses e número de sintomas do DSM-5-TR por confirmar.",
   "Na criança: perfecionismo, busca repetida de reasseguramento, conformidade excessiva com as regras, preocupação com a segurança e a saúde; sensibilidade à crítica. Pouco habitual antes dos 5 anos.",
   "Sofrimento significativo com a ansiedade persistente, ou prejuízo funcional significativo.",
   "Só diagnosticar se os critérios já existiam antes de um episódio depressivo ou depois da sua remissão completa (CDDR).",
   "Não explicada por outra perturbação, doença médica, substância ou medicamento.",
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
   "Hipocondria ou perturbação de mal-estar corporal, se a preocupação se limita à saúde (CDDR)",
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
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B00 (pp. 266-270); AACAP, Walter et al., JAACAP 2020;59(10):1107-1124, doi 10.1016/j.jaac.2020.05.005 (diferencial e comorbilidades). Sem guideline NICE para esta perturbação na criança lida nesta tarefa. Divergência: o CDDR dá 'pelo menos vários meses'; o DSM-5-TR fica para fase posterior."
 },
 {
  "id": "h-ansiedade-separacao",
  "name": "Perturbação de ansiedade de separação",
  "icd11": "6B05",
  "branches": [
   "pre",
   "esc"
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
   "Manifestações: pensamentos persistentes de que um acontecimento mau (por exemplo rapto) levará à separação, relutância ou recusa em ir à escola, mal-estar recorrente na separação (birras, retraimento), recusa em dormir sem a figura de vinculação, pesadelos de separação, sintomas físicos nas separações. Na criança pequena, seguir o cuidador de perto em casa.",
   "Persistente: pelo menos vários meses; as reações de separação do pré-escolar são esperadas e distinguem-se pela persistência com separações repetidas e pela preocupação excessiva com o bem-estar das figuras de vinculação.",
   "Sofrimento significativo ou prejuízo funcional significativo.",
   "Não explicada por outra perturbação (por exemplo agorafobia, perturbação de personalidade).",
   "Os limites culturais da separação normal; um estilo parental que impede a autonomia pode associar-se (CDDR). Ver item dan-11.",
   "Se houve perda ou trauma, que o foco é a perda futura ou o dano às figuras, e não a re-experienciação do acontecimento."
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
   "Doença física que explique as queixas somáticas (prática clínica, sem fonte)"
  ],
  "comorbid": [
   "h-pag",
   "h-fobia-especifica",
   "h-ansiedade-social",
   "h-depressao-major"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B05 (pp. 289-293); AACAP, Walter et al., JAACAP 2020;59(10):1107-1124, doi 10.1016/j.jaac.2020.05.005. Sem guideline NICE para esta perturbação na criança lida nesta tarefa. Divergência: a CID-11 pede 'vários meses'; o DSM-5-TR fica para fase posterior."
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
   "Medo ou ansiedade marcados e excessivos, de forma consistente, numa ou mais situações sociais (conversar, ser observado, atuar perante outros), com receio de agir de forma ou mostrar sintomas de ansiedade que os outros avaliem negativamente.",
   "Situações evitadas ou suportadas com intenso medo. Na criança e no adolescente: estratégias subtis de evitamento (falar pouco, evitar contacto ocular), recusa escolar, dificuldade em exprimir vontades.",
   "Persistente: pelo menos vários meses; não é a timidez nem a ansiedade face a estranhos normais para a idade; pouco habitual antes dos 10 anos.",
   "Sofrimento significativo ou prejuízo funcional significativo.",
   "Que o medo é desproporcionado à situação: perante bullying, o receio dos pares pode ser adequado (CDDR).",
   "NICE CG159: entrevista a sós com a criança ou o jovem sempre que possível, com informação de um adulto que o conheça (1.4.5); descrever situações temidas, comportamentos de segurança, ruminação antes e depois do evento (1.4.6); avaliar parentalidade que mantém a ansiedade e vitimização pelos pares (1.4.7); avaliar comorbilidades (1.4.8); risco (1.4.11).",
   "Se a criança responder 'sim' a uma ou mais das perguntas de identificação do NICE (1.4.1), considerar avaliação completa (1.4.2)."
  ],
  "differential": [
   "h-mutismo-seletivo",
   "h-pag",
   "h-panico",
   "h-fobia-especifica",
   "h-depressao-major",
   "Autismo: défices de comunicação social e, em regra, desinteresse pela interação (CDDR)",
   "Agorafobia (6B02): o foco é a incapacidade de escapar, não a avaliação dos outros (CDDR; não incluída no catálogo)",
   "Perturbação dismórfica corporal e perturbação de referência olfativa, se o receio se limita à aparência ou ao odor (CDDR)",
   "Perturbação de oposição e desafio: recusa só em situações que provocam ansiedade (CDDR)",
   "h-vinculacao-reativa (na ansiedade social a criança procura conforto nos cuidadores)"
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
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B04 (pp. 284-288); NICE CG159 (publicada 22/05/2013), https://www.nice.org.uk/guidance/cg159/chapter/Recommendations (1.4.1 a 1.4.12); AACAP, Walter et al., JAACAP 2020;59(10):1107-1124, doi 10.1016/j.jaac.2020.05.005. Divergência: o CDDR dá 'pelo menos vários meses'; DSM-5-TR fica para fase posterior."
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
   "Duração de pelo menos 1 mês, não limitada ao primeiro mês de escola.",
   "Não se deve a desconhecimento ou desconforto com a língua falada na situação (por exemplo criança imigrante ou de minoria linguística).",
   "Não explicada por outra perturbação (autismo, perturbação do desenvolvimento da linguagem).",
   "A seletividade interfere com a aprendizagem ou a comunicação social, ou causa prejuízo noutras áreas.",
   "Início em regra antes dos 5 anos, podendo só ser notada à entrada na escola; testes de linguagem recetiva por apontar ou executar ordens podem ser possíveis (CDDR)."
  ],
  "differential": [
   "h-ansiedade-social",
   "Perturbação do desenvolvimento da fala e da linguagem: afeta a expressão em todos os contextos (CDDR)",
   "Autismo e perturbação do desenvolvimento intelectual: défices de comunicação em todos os contextos (CDDR)",
   "Perturbações psicóticas primárias: perturbação da fala em todos os contextos (CDDR)",
   "Criança que não domina a língua do contexto (CDDR)",
   "Défice auditivo a excluir primeiro (prática clínica, sem fonte)"
  ],
  "comorbid": [
   "h-ansiedade-social",
   "h-ansiedade-separacao",
   "h-fobia-especifica",
   "perturbações do desenvolvimento da linguagem e da comunicação"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B06 (pp. 293-295); AACAP, Walter et al., JAACAP 2020;59(10):1107-1124, doi 10.1016/j.jaac.2020.05.005 (comorbilidade com perturbações do desenvolvimento e da comunicação); NICE CG159 (publicada 22/05/2013), https://www.nice.org.uk/guidance/cg159/chapter/Recommendations (1.4.12, mutismo seletivo como dificuldade associada). DSM-5-TR fica para fase posterior."
 },
 {
  "id": "h-fobia-especifica",
  "name": "Fobia específica",
  "icd11": "6B03",
  "branches": [
   "pre",
   "esc"
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
   "Medo ou ansiedade marcados, consistentes, perante o objeto ou a situação específicos (animais, alturas, espaços fechados, sangue ou lesão, tempestades, escuro, procedimentos médicos), desproporcionados ao perigo real, ou na antecipação.",
   "Objeto ou situação evitados ou suportados com intenso medo; no pré-escolar a resposta pode ser paralisar, birra ou choro.",
   "Persistente: pelo menos vários meses; não é medo normativo para a idade (por exemplo medo do escuro em crianças pequenas) nem medo partilhado pela cultura. Distinguir pela duração, frequência e intensidade.",
   "Sofrimento significativo ou prejuízo funcional significativo.",
   "Não explicada por outra perturbação (ansiedade social, psicose).",
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
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B03 (pp. 280-283); AACAP, Walter et al., JAACAP 2020;59(10):1107-1124, doi 10.1016/j.jaac.2020.05.005. Sem guideline NICE para esta perturbação na criança lida nesta tarefa. Divergência: 'vários meses' na CID-11; DSM-5-TR fica para fase posterior."
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
   "Ataques de pânico recorrentes: episódios discretos de medo intenso com início rápido e simultâneo de vários sintomas (palpitações, suor, tremor, falta de ar, sensação de sufocar, dor no peito, náuseas, tonturas, calafrios, parestesias, despersonalização ou desrealização, medo de perder o controlo ou de morrer).",
   "Pelo menos alguns ataques inesperados, não restritos a estímulos ou situações.",
   "Seguidos de preocupação persistente (por exemplo durante semanas) com a recorrência ou o significado, ou de comportamentos de evitamento.",
   "Os ataques não se limitam a situações que provocam ansiedade no contexto de outra perturbação: ataques só perante o foco de outra perturbação não justificam este diagnóstico.",
   "Prejuízo funcional significativo.",
   "Não explicados por doença médica (por exemplo feocromocitoma) nem por substância (café, cocaína) ou privação.",
   "Muito raro em crianças pequenas; a prevalência aumenta na adolescência (CDDR)."
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
   "Medicamentos e substâncias que causam ansiedade (broncodilatadores, descongestionantes, esteroides, estimulantes, cafeína, canábis) e privação de nicotina, álcool ou cafeína (AACAP 2020)"
  ],
  "comorbid": [
   "h-depressao-major",
   "h-pag",
   "h-ansiedade-social",
   "consumo de substâncias",
   "agorafobia"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B01 (pp. 271-275); AACAP, Walter et al., JAACAP 2020;59(10):1107-1124, doi 10.1016/j.jaac.2020.05.005. Sem guideline NICE para esta perturbação na criança lida nesta tarefa. DSM-5-TR fica para fase posterior."
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
   "Obsessões: pensamentos, imagens ou impulsos repetitivos e persistentes, vividos como intrusivos e indesejados, com ansiedade, que a criança tenta ignorar, suprimir ou neutralizar. Compulsões: comportamentos ou rituais (incluindo atos mentais) que a criança sente que tem de fazer, segundo regras rígidas ou para sentir que está 'completo'.",
   "As compulsões não têm ligação realista ao acontecimento temido ou são claramente excessivas.",
   "As obsessões e compulsões ocupam tempo (por exemplo mais de 1 hora por dia) ou causam sofrimento ou prejuízo significativos.",
   "Na criança pode ser mais fácil avaliar as compulsões do que as obsessões. Não atribuir a rituais e preocupações próprios da idade (transitórios, adequados à idade, que não ocupam tempo nem causam prejuízo).",
   "Início em regra gradual; início súbito justifica avaliação de causa médica (CDDR; a PANDAS é referida como atribuição possível de início abrupto).",
   "Especificar o nível de insight (bom ou razoável; pobre ou ausente).",
   "NICE CG31: perguntar diretamente por lavagem, verificação, pensamentos que incomodam, tarefas lentas, ordem e simetria (1.4.1.1); envolver a família e avaliar o impacto dos rituais nos outros e o grau em que os cuidadores participam nos rituais (1.1.4.1); pensamentos intrusivos sexuais, agressivos ou de morte são comuns no TOC e muitas vezes mal interpretados como risco: se houver dúvida, consultar quem tenha experiência em TOC (1.4.1.3).",
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
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B20 (pp. 300-307); NICE CG31 (publicada 29/11/2005), https://www.nice.org.uk/guidance/cg31/chapter/Recommendations (1.1.4.1, 1.4.1.1 a 1.4.1.3; segundo releitura-ansiedade.md a atualização está em desenvolvimento, não reverificado aqui); AACAP, Walter et al., JAACAP 2020;59(10):1107-1124, doi 10.1016/j.jaac.2020.05.005 (OCD como diagnóstico diferencial e comorbilidade da ansiedade). Divergência: a CID-11 aceita 'mais de 1 hora por dia' ou sofrimento ou prejuízo; DSM-5-TR fica para fase posterior."
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
   "Arrancar cabelo de forma recorrente, tentativas sem êxito de parar ou diminuir, e perda de cabelo significativa.",
   "Sofrimento significativo ou prejuízo funcional significativo (pessoal, familiar, social, escolar).",
   "Confirmar a perda por observação direta ou exame; se não for possível, informação de pessoa conhecedora ou de médico que tenha examinado.",
   "Locais mais comuns: couro cabeludo, sobrancelhas e pestanas; perguntar por tricofagia (ingestão do cabelo), que pode causar sintomas gastrointestinais graves.",
   "Nas crianças e adolescentes o arrancar é mais frequentemente automático, fora da consciência; na adolescência é mais frequente o arrancar focado, precedido de impulso e seguido de alívio.",
   "Puxar ocasional, enrolar ou brincar com o cabelo, morder ou rasgar o cabelo não qualificam.",
   "Não explicada por doença dermatológica (biópsia ou dermatoscopia diferenciam) nem por delírio ou alucinação."
  ],
  "differential": [
   "h-toc",
   "Perturbação do movimento estereotipado: início mais precoce, movimentos coordenados e previsíveis (CDDR)",
   "Perturbação dismórfica corporal (remoção de pelos por aparência) (CDDR)",
   "Perturbações psicóticas, se o arrancar responde a delírio ou alucinação (CDDR)",
   "Doença dermatológica do folículo piloso a excluir primeiro (CDDR)"
  ],
  "comorbid": [
   "perturbação de escoriação e outros comportamentos repetitivos centrados no corpo (por exemplo roer unhas)",
   "h-toc",
   "h-depressao-major",
   "h-pag",
   "PHDA"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B25 e 6B25.0 (pp. 327-330); sem guideline lida para esta perturbação: prática clínica (sem fonte). Ver também item do-12 e do-21 (domínio Outros)."
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
   "Exposição a acontecimento ou situação (breve ou prolongado) extremamente ameaçador ou horrível: vivido diretamente, testemunhado (lesão ou morte súbita, violenta) ou conhecimento de morte súbita, inesperada ou violenta de pessoa querida. A exposição por si só não indica PSPT.",
   "Síndrome com os 3 elementos, com duração de pelo menos várias semanas: (1) re-experienciar no presente, não só recordar (memórias ou imagens intrusivas, flashbacks, pesadelos ligados ao acontecimento; ruminar não chega); (2) evitamento deliberado de lembranças internas ou externas; (3) perceção persistente de ameaça atual (hipervigilância, sobressalto aumentado).",
   "Prejuízo funcional significativo, ou funcionamento só mantido com esforço adicional.",
   "Idade pré-escolar (menos de 6 anos): basear-se no relato dos cuidadores sobre sintomas comportamentais: reencenação em jogo repetitivo ou desenho, sonhos assustadores sem conteúdo claro, terrores noturnos, impulsividade invulgar; menos específicos podem surgir birras, ansiedade de separação, regressão, medos exagerados. A criança pode não parecer aflita ao falar ou brincar o acontecimento.",
   "Crianças e adolescentes: relutância em relatar; pode ser preciso apoiar-se em mudanças de comportamento, reencenação ou evitamento visível; podem negar aflição ou referir emoções não angustiantes.",
   "Reação aguda normal que começa a diminuir em cerca de 1 semana após o fim do acontecimento (cerca de 1 mês se o stressor continua) não é perturbação (CDDR). NICE NG116 1.1.6: aconselhar os pais a contactar o médico de família se os sintomas persistirem além de 1 mês.",
   "Perguntar de forma específica por re-experienciação, evitamento, hiperativação, dissociação, alterações do humor e do pensamento e prejuízo funcional (NICE NG116 1.1.3), com exemplos concretos de acontecimentos (1.1.4), incluindo abuso na infância e violência doméstica (1.1.2).",
   "Que os sintomas surgiram após o acontecimento; outras perturbações (depressão, ansiedade, substâncias, dissociação) são comuns depois de trauma, muitas vezes sem PSPT (CDDR)."
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
   "PHDA: a ansiedade e o trauma causam inquietação, distração e irritabilidade (NICE NG116 1.1.1)",
   "Psicose: flashbacks graves com qualidade alucinatória, hipervigilância que parece paranoide e pseudoalucinações não são evidência de perturbação psicótica (CDDR)",
   "Perturbações dissociativas: só se os sintomas dissociativos ocorrerem fora dos episódios de re-experienciação (CDDR)",
   "Reação aguda ao stress (QE84): não é perturbação; começa a diminuir em dias (CDDR)",
   "Epilepsia e outras causas neurológicas de olhar parado, amnésia ou confusão (prática clínica, sem fonte)"
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
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B40 (pp. 339-344); NICE NG116 (publicada 05/12/2018), https://www.nice.org.uk/guidance/ng116/chapter/Recommendations (1.1.1 a 1.1.6). AACAP 2010 não citada: a cópia lida tem rodapé de 1998 'not for distribution or citation'. Divergência: o NG116 não distingue critérios CID-11 ou DSM; seguida a CID-11; DSM-5-TR fica para fase posterior."
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
   "Perguntar de forma específica pelas várias áreas de sintomas e por exposição a trauma (NICE NG116 1.1.1 a 1.1.4)."
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
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B41 (pp. 344-348, mais PSPT pp. 339-344); NICE NG116 (publicada 05/12/2018), https://www.nice.org.uk/guidance/ng116/chapter/Recommendations (1.1.1 a 1.1.4, 1.2.4). AACAP 2010 não citada (cópia lida é de 1998, não citável). DSM-5-TR não tem o PSPT complexo; fica para fase posterior."
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
   "Reação mal-adaptada a stressor ou stressores identificáveis (acontecimento único, dificuldade continuada ou combinação), que habitualmente surge no prazo de 1 mês, podendo atrasar (por exemplo 3 meses).",
   "Preocupação com o stressor ou as suas consequências: preocupação excessiva, pensamentos recorrentes e angustiantes, ruminação. Na criança, expressa muitas vezes por queixas somáticas, comportamento disruptivo ou oposicional, hiperatividade, birras, problemas de concentração, irritabilidade, maior agarramento; regressão, enurese e perturbações do sono se persistirem cerca de 1 mês.",
   "Os sintomas resolvem em 6 meses depois de terminados o stressor e as suas consequências; se persistirem além disso, considerar outro diagnóstico.",
   "Prejuízo funcional significativo, ou funcionamento só mantido com esforço adicional; reações emocionais a acontecimentos negativos sem estes requisitos não são perturbação.",
   "Funcionamento normal antes do stressor; considerar a relação temporal entre stressor e início e a mudança face ao funcionamento anterior.",
   "Diagnóstico de exclusão: se a reação cumprir os critérios de depressão major ou de PSPT, diagnostica-se esse, mesmo com stressor identificável; não se atribui se outra perturbação (humor, ansiedade generalizada, ansiedade de separação, autismo, TOC) explica os sintomas.",
   "NICE NG134 1.3.7 a 1.3.10: perante acontecimento isolado (luto, separação dos pais), avaliar risco de depressão e oferecer apoio; em regra não referenciar se não houver outros fatores de risco."
  ],
  "differential": [
   "h-depressao-major",
   "h-pstp",
   "h-pag",
   "h-ansiedade-separacao",
   "h-luto-prolongado",
   "Reação aguda ao stress (QE84): reação normal, começa a diminuir em cerca de 1 semana (1 mês se o stressor continua) (CDDR)",
   "Reação normal ao stressor, sem prejuízo significativo",
   "Outra perturbação mental, incluindo autismo, que explique os sintomas (CDDR)"
  ],
  "comorbid": [
   "fobia específica e perturbação de pânico (sintomatologia não sobreposta, curso distinguível) (CDDR)"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B43 (pp. 352-354); NICE NG134 (publicada 25/06/2019), https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (1.3.7 a 1.3.10). Sem guideline NICE para esta perturbação na criança lida nesta tarefa. Divergência: a CID-11 usa o limiar de 6 meses após o fim do stressor; DSM-5-TR fica para fase posterior."
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
   "Resposta de luto persistente e pervasiva: saudade da pessoa ou preocupação persistente com ela, com dor emocional intensa (tristeza, culpa, raiva, negação, culpabilização, dificuldade em aceitar a morte, sentir que perdeu uma parte de si, incapacidade de sentir humor positivo, entorpecimento, dificuldade em envolver-se em atividades).",
   "Duração atipicamente longa, que excede claramente as normas sociais, culturais ou religiosas; respostas com menos de 6 meses, ou mais tempo em certas culturas, não contam.",
   "Prejuízo funcional significativo.",
   "Em crianças e adolescentes: a perda de uma figura de vinculação pode provocar resposta intensa e prolongada que deve ser considerada normal; diagnosticar com cautela. Nas crianças, a saudade pode expressar-se no jogo, em esperar que a pessoa regresse, em voltar aos locais onde a viram, em medo de que outros morram; reações podem ser retriggered ao longo do desenvolvimento.",
   "Considerar o contexto: mudança de ambiente, forma como os cuidadores lidam com a perda e a comunicação na família (CDDR).",
   "NICE NG134 1.3.7 a 1.3.10: após perda isolada avaliar o risco de depressão e oferecer apoio; referenciar se houver outros fatores de risco."
  ],
  "differential": [
   "h-depressao-major",
   "h-pstp",
   "h-adaptacao",
   "h-ansiedade-separacao",
   "Luto normal dentro do período esperado para a cultura e a religião (CDDR)"
  ],
  "comorbid": [
   "h-depressao-major",
   "h-pstp",
   "h-ansiedade-separacao",
   "consumo de substâncias"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B42 (pp. 348-351); NICE NG134 (publicada 25/06/2019), https://www.nice.org.uk/guidance/ng134/chapter/Recommendations (1.3.7 a 1.3.10). Sem guideline lida específica de luto prolongado na criança. DSM-5-TR (luto prolongado, versão distinta) fica para fase posterior."
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
   "Padrão persistente e pervasivo de comportamento inibido e emocionalmente retraído para com os cuidadores adultos, com os dois: procura mínima de conforto quando aflita e resposta rara ou mínima ao conforto oferecido.",
   "Os cuidados insuficientes presumem-se responsáveis pelo padrão; sintomas evidentes antes dos 5 anos.",
   "A criança atingiu o nível de desenvolvimento em que se formam vinculações seletivas (idade cronológica de cerca de 1 ano ou idade de desenvolvimento de pelo menos 9 meses).",
   "Não explicado por autismo; não confinado a uma relação diádica específica (observar com mais de um cuidador).",
   "A redução transitória de comportamentos de vinculação é normal; a perturbação persiste, abrange todas as situações sociais e não se limita a um cuidador (CDDR).",
   "NICE NG26: avaliação completa antes de qualquer intervenção, incluindo história de colocações, sensibilidade parental, maus-tratos e trauma, saúde física e problemas de saúde mental coexistentes (1.3.2); só diagnosticar se cumprir os critérios DSM-5 ou CID-10 (1.3.6; o NG26 é anterior à CID-11)."
  ],
  "differential": [
   "h-relacao-social-desinibida",
   "h-pstp-complexo",
   "h-ansiedade-social",
   "h-depressao-major",
   "Autismo: a criança tem capacidade de iniciar e manter comunicação e reciprocidade social; o 'quase-autismo' da privação grave melhora em ambiente nutritivo (CDDR)",
   "Perturbação do desenvolvimento intelectual: forma vinculações seletivas ao nível do desenvolvimento (CDDR)"
  ],
  "comorbid": [
   "h-pstp",
   "h-pstp-complexo",
   "h-depressao-major",
   "PHDA",
   "perturbações do comportamento",
   "autismo",
   "h-pag"
  ],
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B44 (pp. 355-357); NICE NG26 (publicada 25/11/2015), https://www.nice.org.uk/guidance/ng26/chapter/Recommendations (1.3.2, 1.3.6). Divergência: o NG26 refere DSM-5 e CID-10; seguida a CID-11; DSM-5-TR fica para fase posterior. Sem tratamento nesta entrada."
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
   "Padrão persistente e pervasivo de comportamento social marcadamente anormal, com pouca ou nenhuma reserva em abordar e interagir com adultos desconhecidos, com um ou mais de: comportamento demasiado familiar com violação de limites físicos e verbais (por exemplo procurar conforto em desconhecidos, perguntas inadequadas à idade); pouca ou nenhuma verificação do cuidador depois de se afastar, mesmo em locais novos; disposição para ir com um adulto desconhecido com pouca ou nenhuma hesitação.",
   "Sintomas evidentes antes dos 5 anos; a criança atingiu o nível de desenvolvimento em que se formam vinculações seletivas (cerca de 1 ano ou 9 meses de idade de desenvolvimento).",
   "Não explicado melhor por outra perturbação (por exemplo PHDA); distinguir da extroversão própria do temperamento: o que distingue é o carácter disfuncional e a história de cuidados insuficientes.",
   "Pode persistir após cuidados adequados e coexistir com vinculações seletivas; mais persistente em quem viveu longamente em instituições (CDDR).",
   "NICE NG26: avaliação completa antes de qualquer intervenção (1.3.2); só diagnosticar se cumprir os critérios DSM-5 ou CID-10 (1.3.6).",
   "A disposição para ir com desconhecidos é um risco de segurança: ver triagem de maus-tratos."
  ],
  "differential": [
   "h-vinculacao-reativa",
   "h-pstp-complexo",
   "PHDA: pode coexistir e ambas ser diagnosticadas (CDDR)",
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
  "source": "ICD-11 CDDR (OMS, 2024, ISBN 978-92-4-007726-3, https://www.who.int/publications/i/item/9789240077263; texto lido na cópia com o mesmo ISBN em https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), 6B45 (pp. 358-360); NICE NG26 (publicada 25/11/2015), https://www.nice.org.uk/guidance/ng26/chapter/Recommendations (1.3.2, 1.3.6). Divergência: o NG26 refere DSM-5 e CID-10; seguida a CID-11; DSM-5-TR fica para fase posterior. Sem tratamento nesta entrada."
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
   "Padrão persistente (a CID-11 dá como exemplo pelo menos 6 meses) de desatenção e/ou hiperatividade-impulsividade, fora dos limites normais de variação para a idade e o nível de desenvolvimento intelectual. A CID-11 não fixa número mínimo de sintomas.",
   "Evidência de vários sintomas significativos antes dos 12 anos (CID-11; o DSM-5 também usa os 12 anos, segundo a AAP 2019). Pode só chegar à consulta na adolescência, quando as exigências excedem a capacidade de compensar (CID-11).",
   "Sintomas em 2 ou mais contextos importantes (casa, escola, amigos ou familiares), com informação de pais e de professores, sabendo que variam com a estrutura e as exigências de cada contexto (CID-11 6A05; NICE NG87 1.3.3; AAP 2019 KAS 2). Os sintomas de desatenção podem não se ver em atividades muito estimulantes e recompensadoras (CID-11).",
   "Impacto negativo direto no funcionamento escolar, social ou familiar; o NICE NG87 1.3.3 exige pelo menos prejuízo moderado, apurado por entrevista ou observação em vários contextos.",
   "Sintomas não explicados por outra perturbação mental (por exemplo ansiedade), nem por efeito de substância ou medicação (a CID-11 cita, por exemplo, broncodilatadores, hormona da tiroide, carbamazepina, valproato, risperidona), nem por doença do sistema nervoso; rever a medicação em curso e o consumo de substâncias.",
   "Início agudo de hiperatividade em criança em idade escolar ou adolescente: pensar noutra perturbação mental ou numa condição médica (CID-11; por exemplo mania ou psicose emergentes na adolescência).",
   "Pré-escolar: a AAP 2019 inicia a avaliação a partir dos 4 anos e não encontra evidência suficiente para diagnóstico abaixo dos 4; a hiperatividade predomina na idade pré-escolar (CID-11), por isso comparar com o esperado para a idade e obter informação de mais de um contexto, o que pode ser difícil se não frequenta creche ou jardim de infância.",
   "Avaliação completa: necessidades, condições coexistentes, circunstâncias familiares e escolares, saúde física e saúde mental dos pais ou cuidadores (NICE NG87 1.3.4); ter em conta a opinião da criança sobre o impacto (NICE NG87 1.3.6).",
   "Escalas e observação (por exemplo na escola) apoiam, mas o diagnóstico não se faz só com elas (NICE NG87 1.3.2)."
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
   "Episódio depressivo ou (hipo)maníaco: inquietação, má concentração e irritabilidade; início tardio, episodicidade e intensidade da elevação do humor distinguem a perturbação bipolar (CID-11)",
   "Perturbação explosiva intermitente: impulsividade em acessos graves, não generalizada (CID-11)",
   "Efeitos de álcool, nicotina, canábis, estimulantes ou de medicação (informantes que conheceram a criança antes do consumo ou da medicação são essenciais; CID-11)",
   "Condições médicas que alteram a atenção: hipoglicemia, disfunção da tiroide, exposição a toxinas, perturbações do sono (CID-11)",
   "Trauma, luto e adversidade na infância podem causar desatenção ou hiperatividade (CID-11, aspetos culturais): perguntar pela história de vida"
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
   "Perturbações de ansiedade e do humor",
   "TOC (risco aumentado, CID-11)",
   "Perturbação do jogo (gaming) (risco aumentado, CID-11)",
   "Epilepsia (taxas elevadas, CID-11)",
   "Consumo de álcool, nicotina, canábis ou estimulantes (adolescentes, CID-11)"
  ],
  "source": "ICD-11 CDDR, OMS, 2024 (ISBN 978-92-4-007726-3), https://www.who.int/publications/i/item/9789240077263 (texto lido numa cópia com o mesmo ISBN, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção 6A05, pp. 142-149 (essential features, additional clinical features, boundaries); NICE NG87, 2018 (atualizada 13/09/2019), https://www.nice.org.uk/guidance/ng87, rec. 1.2.7, 1.3.1 a 1.3.6; AAP (Wolraich et al.), Pediatrics 2019;144(4):e20192528, https://doi.org/10.1542/peds.2019-2528 (KAS 1 a 3 e texto de apoio). Critérios seguidos: CID-11 (limiar 'fora dos limites normais para a idade e nível intelectual', sem número mínimo de sintomas). Divergências lidas: a AAP 2019 indica que o DSM-5 não exige explicitamente comparação com a idade de desenvolvimento; o NICE NG87 1.3.3 aceita DSM-5 ou CID-11 e não recomenda excluir PHDA por autismo ou por início incerto."
 },
 {
  "id": "h-autismo",
  "name": "Perturbação do espetro do autismo",
  "icd11": "6A02 (6A02.0 a 6A02.5 segundo os especificadores de desenvolvimento intelectual e de linguagem funcional; 6A02.x1 com perda de competências adquiridas)",
  "core": [
   {
    "domain": "d-social",
    "level": 2,
    "why": "Défices persistentes de comunicação e reciprocidade social, com padrões restritos, repetitivos e inflexíveis (as duas componentes são exigidas pela CID-11, 6A02)."
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
    "why": "Seletividade alimentar por características sensoriais ou rotinas inflexíveis é referida na CID-11 (fronteira com ARFID); alimentação restrita é condição coexistente a rastrear (NICE CG128 1.5.15). Inespecífico."
   },
   {
    "domain": "d-ansiedade",
    "level": 1,
    "why": "No meio da infância surgem com frequência sintomas de ansiedade, incluindo ansiedade social, recusa escolar e fobia específica (CID-11). Inespecífico."
   },
   {
    "domain": "d-atencao",
    "level": 1,
    "why": "Desatenção, impulsividade e hiperatividade são frequentes no autismo (CID-11) e a PHDA aumenta a prevalência de autismo (NICE CG128, caixa 1). Inespecífico."
   }
  ],
  "confirm": [
   "Défices persistentes em iniciar e manter comunicação social e interação social recíproca, fora do esperado para a idade e o nível de desenvolvimento intelectual (CID-11 6A02): por exemplo resposta ou interesse pelas comunicações dos outros, integração de linguagem e sinais não verbais, uso social da linguagem e conversa recíproca, partilha de interesses, relações com pares.",
   "E padrões persistentes de comportamento, interesses ou atividades restritos, repetitivos e inflexíveis, claramente atípicos para a idade e o contexto sociocultural (por exemplo rotinas rígidas, interesses especiais, movimentos estereotipados, hiper ou hiporreatividade sensorial). A CID-11 exige as duas componentes; por si sós, comportamentos repetitivos e interesses intensos são comuns no desenvolvimento típico.",
   "Início no período do desenvolvimento, tipicamente na primeira infância, mesmo que os sintomas só se manifestem plenamente quando as exigências sociais excedem a capacidade (CID-11). A CID-11 não fixa duração mínima nem número de sintomas.",
   "Prejuízo significativo no funcionamento pessoal, familiar, social ou escolar; pode estar escondido por esforço excecional de compensação, sobretudo em raparigas, e o diagnóstico mantém-se (CID-11; NICE CG128 1.2.5).",
   "Dificuldades evidentes em todas as situações e contextos; se só surgem em situações específicas ou ansiogénicas, pensar em ansiedade social ou mutismo seletivo. Se o relato e a observação discordam, obter informação de outras fontes e observar noutros contextos (CID-11; NICE CG128 1.5.9).",
   "Não excluir autismo por bom contacto ocular, sorrisos e afeto com a família, jogo de faz de conta referido, marcos de linguagem normais, melhoria num ambiente estruturado, ou avaliação anterior negativa se houver informação nova (NICE CG128 1.2.7). Atraso de linguagem isolado não indica autismo, a menos que haja também pouca motivação para a comunicação social e poucas competências de interação (CID-11).",
   "Regressão: perda de competências de linguagem ou sociais antes dos 3 anos, referenciar à equipa de autismo; regressão da linguagem depois dos 3 anos, ou motora a qualquer idade, avaliar primeiro por pediatria ou neuropediatria (NICE CG128 1.3.1 e 1.3.2). A CID-11 tem o especificador 'com perda de competências adquiridas', raro depois dos 3 anos.",
   "Audição avaliada em toda a criança com atraso de linguagem ou atenção reduzida à linguagem (AAP 2020); o NICE CG128 1.5.7 inclui défice auditivo grave no diferencial.",
   "Perfil do doente para os especificadores da CID-11 e o plano: nível intelectual (com ou sem perturbação do desenvolvimento intelectual), linguagem funcional (nenhum ou ligeiro défice, linguagem funcional comprometida, ausência quase completa), capacidades motoras, saúde mental, sensibilidades sensoriais, comportamento adaptativo (CID-11; NICE CG128 1.5.8).",
   "Exame físico: estigmas cutâneos (esclerose tuberosa, neurofibromatose), dismorfias, perímetro cefálico; testes genéticos só se houver dismorfias, anomalias congénitas ou evidência de deficiência intelectual; EEG só se houver suspeita de epilepsia (NICE CG128 1.5.6 e 1.7.1).",
   "Instrumentos específicos de autismo não chegam para diagnosticar nem um resultado negativo exclui; o diagnóstico usa informação de todas as fontes e juízo clínico segundo a CID-11 ou o DSM-5 (NICE CG128 1.3.5, 1.5.10 e 1.5.11).",
   "Maior incerteza diagnóstica em menores de 24 meses, idade de desenvolvimento inferior a 18 meses, adolescentes mais velhos, falta de história precoce e quadros complexos (NICE CG128 1.5.12); a CID-11 considera possível o diagnóstico no pré-escolar (até aos 4 anos), sobretudo com atraso global."
  ],
  "differential": [
   "h-linguagem",
   "h-ddi",
   "h-phda",
   "h-tiques",
   "h-oposicao",
   "Défice auditivo ou visual grave (NICE CG128 1.5.7): avaliar a audição antes de atribuir o atraso de linguagem ao autismo",
   "Privação ou maus-tratos graves ('quase-autismo'): melhoram muito num ambiente mais cuidador; perturbação reativa da vinculação e perturbação de desinibição social (CID-11)",
   "Ansiedade social e mutismo seletivo (CID-11 6B04 e 6B06; ver domínio Ansiedade): comunicação adequada em situações familiares ou não ansiogénicas e sem padrões repetitivos",
   "Timidez e inibição comportamental: comunicação social adequada em situações familiares (CID-11)",
   "TOC: as compulsões são mais resistidas e não há défice de comunicação social (CID-11)",
   "Esquizofrenia ou perturbação esquizotípica: início típico na adolescência, sintomas psicóticos, sem padrões restritos e repetitivos na infância (CID-11)",
   "Síndrome de Rett e encefalopatia epilética com regressão (NICE CG128 1.5.7)"
  ],
  "comorbid": [
   "h-phda",
   "h-ddi",
   "h-linguagem (outras formas, não só a pragmática)",
   "h-dcd",
   "h-tiques",
   "h-oposicao",
   "h-aprendizagem",
   "Perturbações de ansiedade (incluindo ansiedade social), recusa escolar e fobia específica no meio da infância; perturbações depressivas na adolescência, por vezes com apresentação atípica",
   "TOC",
   "Comportamento autolesivo (mais frequente com perturbação do desenvolvimento intelectual, CID-11)",
   "Perturbação do movimento estereotipado, se os movimentos exigirem atenção clínica por autolesão (CID-11 6A06)",
   "Epilepsia; síndromes genéticos (X frágil, esclerose tuberosa, neurofibromatose)",
   "Problemas de sono, alimentação, esfíncteres (enurese, encoprese) e gastrointestinais (NICE CG128 1.5.15; AAP 2020)"
  ],
  "source": "ICD-11 CDDR, OMS, 2024 (ISBN 978-92-4-007726-3), https://www.who.int/publications/i/item/9789240077263 (texto lido numa cópia com o mesmo ISBN, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção 6A02, pp. 124-133; NICE CG128, 2011 (atualizada 20/12/2017; revista 14/06/2021), https://www.nice.org.uk/guidance/cg128, rec. 1.2, 1.3, 1.5, 1.7; AAP (Hyman et al.), Pediatrics 2020;145(1):e20193447, https://doi.org/10.1542/peds.2019-3447 (texto integral). Critérios seguidos: CID-11 (sem duração mínima nem número de sintomas; dois eixos obrigatórios). Divergência: a CID-11 não tem perturbação da comunicação social (pragmática) autónoma, só o especificador pragmático da perturbação do desenvolvimento da linguagem (ver h-linguagem); o DSM-5 tem-na como diagnóstico próprio (AAP 2020)."
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
    "why": "Dificuldades com os pares são frequentes na perturbação do desenvolvimento da linguagem (CID-11 6A01.2)."
   },
   {
    "scale": "sdq_emocional",
    "why": "Perturbação emocional associada com frequência a esta perturbação (CID-11 6A01.2)."
   },
   {
    "domain": "d-comportamento",
    "level": 1,
    "why": "Comportamento disruptivo associado com frequência, sobretudo em idade escolar (CID-11 6A01.2)."
   }
  ],
  "confirm": [
   "Défices persistentes na aquisição, compreensão, produção ou uso da linguagem (falada ou gestual), claramente abaixo do esperado para a idade (CID-11 6A01.2). Caracterizar a área afetada: fonologia, gramática, semântica, discurso narrativo e conversacional, pragmática.",
   "Início no período do desenvolvimento, tipicamente na primeira infância; limitação funcional da comunicação em casa, na escola ou nas atividades (CID-11).",
   "Idade e persistência: ausência de palavras (ou aproximações) aos 2 anos, ausência de frases de duas palavras aos 3 anos e défices persistentes, sobretudo com história familiar de problemas de linguagem ou de literacia, são mais indicativos; atrasos muito precoces isolados não indicam perturbação, aos 4 anos as diferenças individuais são mais estáveis e problemas ainda evidentes aos 5 anos ou mais tendem a persistir (CID-11; CATALISE-2, declaração 3).",
   "Não é melhor explicada por perturbação do desenvolvimento intelectual, autismo, outra perturbação do neurodesenvolvimento, défice sensorial ou doença do sistema nervoso, incluindo lesão cerebral ou infeção (CID-11). A CATALISE-2 usa 'condições diferenciadoras' (lesão cerebral, perda auditiva neurossensorial, síndromes genéticos, deficiência intelectual, autismo) em vez de exclusões; fatores de risco e outras condições coexistentes não impedem o diagnóstico.",
   "Audição avaliada em toda a criança com défice de linguagem; a perda auditiva não impede o diagnóstico se as dificuldades de linguagem forem desproporcionadas à gravidade da perda (CID-11).",
   "Documentar todas as línguas a que a criança esteve exposta e avaliar competência em todas: o bilinguismo não causa perturbação persistente, e exposição insuficiente à língua da escola não é perturbação, salvo se faltar competência adequada à idade em todas as línguas (CID-11; CATALISE-2, declaração 4).",
   "Sem perda de competências de linguagem já adquiridas: a regressão faz pensar em autismo (perda das primeiras palavras no 2.º ano com declínio social) ou em causa neurológica (por exemplo encefalopatia, epilepsia afásica adquirida) e não em perturbação do desenvolvimento da linguagem (CID-11).",
   "Se a apresentação é pragmática (6A01.22): dificuldades persistentes e substanciais em compreender e usar a linguagem em contexto social (inferências, humor verbal, ambiguidade), com linguagem recetiva e expressiva relativamente preservadas. Não usar este especificador se houver autismo (CID-11).",
   "Reciprocidade social preservada (inicia e responde a sinais sociais e emocionais, partilha interesses) e sem comportamentos restritos, repetitivos e estereotipados; se faltarem, pensar em autismo (CID-11).",
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
   "Variação dialetal e plurilinguismo: exposição insuficiente à língua da escola (CATALISE-2)"
  ],
  "comorbid": [
   "h-phda",
   "h-aprendizagem (sobretudo literacia: leitura, compreensão, escrita)",
   "h-dcd",
   "h-autismo (formas não pragmáticas, se houver défices específicos semânticos, sintáticos ou fonológicos)",
   "Perturbação dos sons da fala",
   "Dificuldades com os pares, perturbação emocional e comportamento disruptivo (CID-11)",
   "Mutismo seletivo (podem coexistir, CID-11)",
   "Anomalias cromossómicas (rastrear, se disponível, e diagnosticar também, CID-11)"
  ],
  "source": "ICD-11 CDDR, OMS, 2024 (ISBN 978-92-4-007726-3), https://www.who.int/publications/i/item/9789240077263 (texto lido numa cópia com o mesmo ISBN, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção 6A01.2 (e introdução 6A01, p. 112), pp. 118-123; Bishop et al. (CATALISE-2), J Child Psychol Psychiatry 2017;58(10):1068-1080, https://doi.org/10.1111/jcpp.12721 (texto integral, declarações 3, 4 e comentário sobre pragmática); AAP (Hyman et al.), Pediatrics 2020;145(1):e20193447, https://doi.org/10.1542/peds.2019-3447 (apenas a passagem sobre perturbação da comunicação social e a audição). Não encontrei guideline NICE ou AAP específica de perturbação da linguagem. Critérios seguidos: CID-11, que trata a pragmática como especificador da perturbação do desenvolvimento da linguagem e não como diagnóstico autónomo. Divergência: o DSM-5 tem a perturbação da comunicação social (pragmática) como categoria própria; a CATALISE-2 segue a CID-11 e descreve a razão (pragmática como parte da linguagem)."
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
    "why": "Comportamentos desafiantes (agressão, autolesão, oposição) são mais frequentes na perturbação do desenvolvimento intelectual do que na população geral (CID-11 6A00)."
   }
  ],
  "confirm": [
   "Limitações significativas do funcionamento intelectual em vários domínios (raciocínio percetivo, memória de trabalho, velocidade de processamento, compreensão verbal), cerca de 2 ou mais desvios-padrão abaixo da média (aproximadamente abaixo do percentil 2,3), medidas com testes normalizados e administrados individualmente; sem testes adequados, juízo clínico com os indicadores comportamentais da CID-11 (6A00, Tabela 6.1).",
   "E limitações significativas do comportamento adaptativo (competências conceptuais, sociais e práticas), também cerca de 2 ou mais desvios-padrão abaixo da média (CID-11). O QI sozinho não basta: o diagnóstico exige avaliação do comportamento adaptativo.",
   "Início no período do desenvolvimento (CID-11).",
   "Abaixo dos 4 anos, ou em qualquer idade quando não é possível avaliação válida (défice sensorial ou motor, problemas de comunicação, comportamentos problemáticos graves, sintomas de outra perturbação), usar a categoria provisória 6A00.4, a que a CID-11 chama 'atraso global do desenvolvimento'; reavaliar mais tarde.",
   "As pontuações variam durante o desenvolvimento: uma criança pode cumprir os critérios numa ocasião e não noutra, e uma só avaliação na primeira infância tem utilidade preditiva limitada; podem ser precisas várias avaliações em momentos diferentes (CID-11).",
   "Cuidado especial em quem tem défices de comunicação, sensoriais ou motores, perturbações do comportamento, é imigrante, tem baixa literacia, perturbação mental, tratamento médico ou privação social ou sensorial grave: estes fatores reduzem a validade dos testes. Verificar a adequação cultural e linguística dos testes (CID-11).",
   "Gravidade (ligeira a profunda) atribuída segundo o nível em que se situa a maioria das capacidades intelectuais e adaptativas nos três domínios (CID-11); funcionamento intelectual 'limite' (cerca de 1 a 2 desvios-padrão abaixo) não é perturbação, mas pode exigir apoios.",
   "Etiologia: se for conhecida, diagnosticar também a condição subjacente (CID-11); a avaliação genética, por fenótipo quando possível ou abordagem sem hipótese prévia, é descrita na AAP 2025 (só resumo lido).",
   "Descartar declínio de competências já adquiridas: faz pensar em doença neurodegenerativa e não em perturbação do desenvolvimento (CID-11)."
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
   "Síndrome neurodesenvolvimental secundário: condição médica pré-natal ou do desenvolvimento sem limitação adaptativa (CID-11)"
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
   "Maior vulnerabilidade a vitimização e engano (credulidade, CID-11): rever risco de maus-tratos"
  ],
  "source": "ICD-11 CDDR, OMS, 2024 (ISBN 978-92-4-007726-3), https://www.who.int/publications/i/item/9789240077263 (texto lido numa cópia com o mesmo ISBN, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção 6A00, pp. 92-100 (tabelas 6.1 a 6.4, pp. 101-111); AAP (Rodan et al., Council on Genetics), Genetic Evaluation of the Child With Intellectual Disability or Global Developmental Delay, Pediatrics 2025;156(1):e2025072219, https://doi.org/10.1542/peds.2025-072219 (só resumo lido; mesmo tema da AAP 2014 de Moeschler e Shevell, https://doi.org/10.1542/peds.2014-1839; não li se a substitui formalmente). Critérios seguidos: CID-11 (desvios-padrão no funcionamento intelectual e no comportamento adaptativo, categoria provisória abaixo dos 4 anos). O DSM-5 não foi lido. Não encontrei guideline NICE de diagnóstico de deficiência intelectual (o NICE NG11 trata comportamento desafiante e não foi lido)."
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
    "why": "Muitos têm dificuldades marcadas de autorregulação da atenção, sem gravidade para diagnóstico separado de PHDA (CID-11 6A03); confirmar se a desatenção surge só nas tarefas da área afetada."
   }
  ],
  "confirm": [
   "Limitações significativas na aprendizagem da leitura, escrita ou aritmética, com desempenho muito abaixo do esperado para a idade, apesar de instrução adequada nessas áreas. Podem limitar-se a um componente (por exemplo decodificação de palavras ou numeracia básica) ou afetar tudo. Medir idealmente com testes normalizados (CID-11 6A03).",
   "Início tipicamente nos primeiros anos de escola, mas pode só ser identificado mais tarde, quando as exigências excedem a capacidade, inclusive na idade adulta (CID-11); perguntar por dificuldades pré-escolares de linguagem, contagem, rimas ou motricidade fina.",
   "Não atribuível a fatores externos (desvantagem económica ou ambiental, falta de acesso a educação) (CID-11).",
   "Não melhor explicada por perturbação do desenvolvimento intelectual ou outra perturbação do neurodesenvolvimento, nem por perturbação motora ou défice visual ou auditivo (CID-11).",
   "Prejuízo significativo académico, ocupacional ou noutras áreas; se o desempenho se mantém, é só à custa de esforço adicional significativo (CID-11).",
   "Uma só pontuação num teste não distingue perturbação de normalidade: considerar várias fontes de evidência sobre a capacidade de aprendizagem fora da situação formal de teste (CID-11).",
   "Aquisição mais tardia de uma competência não indica por si perturbação; conta a dificuldade persistente apesar de oportunidades educativas adequadas e a gravidade do prejuízo (CID-11).",
   "Teste de leitura validado se houver suspeita de dificuldade de leitura (NICE CG158 1.3.12); a expressão da dificuldade de leitura varia com a língua (CID-11).",
   "Rever visão e audição; o resumo da AAP 2011 considera que não há evidência científica adequada de que problemas visuais subtis causem ou agravem as dificuldades de aprendizagem (só resumo lido)."
  ],
  "differential": [
   "h-ddi",
   "h-linguagem",
   "h-phda",
   "Défice visual ou auditivo não corrigido (CID-11)",
   "Falta de oportunidades de ensino ou desvantagem socioeconómica (CID-11)",
   "Perda de competências académicas já adquiridas após lesão cerebral ou doença neurodegenerativa (CID-11)",
   "Ansiedade e depressão: coexistem muitas vezes e dificultam a avaliação (CID-11)"
  ],
  "comorbid": [
   "h-phda",
   "h-dcd",
   "h-linguagem",
   "h-autismo",
   "Perturbações depressivas, com risco aumentado de ideação e tentativa de suicídio ao longo da vida (CID-11)",
   "Perturbações de ansiedade",
   "Perturbações do comportamento externalizante (h-oposicao, h-conduta)"
  ],
  "source": "ICD-11 CDDR, OMS, 2024 (ISBN 978-92-4-007726-3), https://www.who.int/publications/i/item/9789240077263 (texto lido numa cópia com o mesmo ISBN, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção 6A03, pp. 134-138; AAP (Handler, Fierson et al.), Learning disabilities, dyslexia, and vision, Pediatrics 2011;127(3):e818-56, https://doi.org/10.1542/peds.2010-3670 (só resumo lido; não verifiquei se foi reafirmada ou substituída); NICE CG158, 2013 (atualizada 19/04/2017; revista 17/04/2025), https://www.nice.org.uk/guidance/cg158, rec. 1.3.12 (teste de leitura validado). Critérios seguidos: CID-11. Não encontrei guideline NICE de diagnóstico de perturbação específica da aprendizagem; o DSM-5-TR fica para a fase seguinte."
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
   "Atraso significativo na aquisição de competências motoras grossas ou finas e execução descoordenada (desajeitamento, lentidão, imprecisão), claramente abaixo do esperado para a idade (CID-11 6A04). Medir, idealmente, com testes de coordenação motora normalizados, individuais e culturalmente adequados, e avaliar o impacto em casa e na escola (CID-11; EACD 2019).",
   "Limitações significativas e persistentes em atividades de vida diária, trabalho escolar, atividades profissionais, lazer ou jogo (CID-11; EACD 2019, rec. 3, critério II).",
   "Início no período do desenvolvimento, tipicamente evidente desde a primeira infância (CID-11).",
   "Idade: o diagnóstico habitualmente não se faz antes dos 5 anos (CID-11); a EACD 2019 (rec. 4) só admite diagnóstico formal abaixo dos 5 anos em défice grave, com pelo menos duas avaliações motoras com intervalo mínimo de 3 meses.",
   "Não melhor explicada por doença do sistema nervoso (paralisia cerebral, distrofia muscular), doença musculo-esquelética ou do tecido conjuntivo, défice sensorial (sobretudo visual grave), hipermobilidade articular ou perturbação do desenvolvimento intelectual (CID-11); verificar também falta de oportunidade ou de prática (EACD 2019, critério I).",
   "Movimentos coreiformes ou em espelho ('de transbordo') não excluem o diagnóstico (CID-11).",
   "Se o desajeitamento (esbarrar em obstáculos, deixar cair coisas) se deve a distração e impulsividade, não diagnosticar (CID-11, fronteira com PHDA).",
   "Com perturbação do desenvolvimento intelectual, ambos podem ser atribuídos se a coordenação estiver bem abaixo do esperado para o nível intelectual e for foco de atenção clínica (CID-11); no autismo, a relutância em jogos de coordenação pode ser desinteresse e não défice motor (CID-11).",
   "Diagnóstico por profissional médico ou equipa multiprofissional qualificada (EACD 2019, rec. 2)."
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
   "h-phda (cerca de 50% dos casos, CID-11)",
   "h-linguagem",
   "h-aprendizagem (sobretudo leitura e escrita)",
   "h-autismo",
   "h-ddi",
   "Perturbação dos sons da fala (articulação)",
   "Problemas de comportamento disruptivo, ansiedade e depressão (CID-11)",
   "Excesso de peso ou obesidade (risco aumentado, CID-11)"
  ],
  "source": "ICD-11 CDDR, OMS, 2024 (ISBN 978-92-4-007726-3), https://www.who.int/publications/i/item/9789240077263 (texto lido numa cópia com o mesmo ISBN, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção 6A04, pp. 139-142; Blank et al. (EACD), International clinical practice recommendations on DCD, Dev Med Child Neurol 2019;61(3):242-285, https://doi.org/10.1111/dmcn.14132 (texto integral; rec. 2, 3, 4 e 14; o texto indica validade até 31/12/2022 e não encontrei a revisão seguinte; as recomendações seguem os critérios do DSM-5 com pequenas alterações). Não encontrei guideline NICE nem AAP de diagnóstico. Critérios seguidos: CID-11 6A04 (descrição sem limiar quantitativo); a EACD acrescenta a prudência abaixo dos 5 anos. Nota: este quadro só tem um sinal de domínio (d-outros) e nenhum sinal de apoio nos dados disponíveis."
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
    "why": "Irritabilidade ou raiva quase diárias, em vários contextos, podem configurar o especificador com irritabilidade-raiva crónica (CID-11 6C90.0); excluir antes episódio de humor."
   }
  ],
  "confirm": [
   "Padrão marcadamente não cumpridor, desafiador e desobediente, atípico para a idade, o nível de desenvolvimento, o género e o contexto sociocultural (CID-11 6C90): dificuldade persistente em se relacionar (discutir com figuras de autoridade, recusar pedidos ou regras, irritar de propósito, culpar os outros), comportamento provocador, rancoroso ou vingativo, irritabilidade ou raiva extremas.",
   "Padrão mantido durante um período prolongado (a CID-11 dá como exemplo 6 meses ou mais). Desafio ou birras transitórios, em fases de maior exigência ou mudança (por exemplo escola nova) ou por ansiedade normativa, não bastam (CID-11). Ocorrência pouco frequente de comportamentos desafiadores não exclui, se caracterizam a maioria das interações com figuras de autoridade (CID-11).",
   "Prejuízo significativo pessoal, familiar, social ou escolar (CID-11).",
   "Não é melhor explicado por um problema relacional com uma figura de autoridade em particular que seja antagonista ou faça exigências desrazoáveis (CID-11).",
   "O comportamento não ocorre só no contexto de episódios de humor (depressivo, maníaco, hipomaníaco ou misto) nem só em resposta a situações que provocam ansiedade, medo ou pânico (CID-11).",
   "Especificadores a registar: com ou sem irritabilidade-raiva crónica (quase todos os dias, em vários contextos e não só com os pais; CID-11) e com emoções pró-sociais limitadas ou típicas (CID-11).",
   "Início: sintomas iniciais tipicamente em idade pré-escolar, início habitual no meio da infância, raramente surge pela primeira vez depois do início da adolescência (CID-11).",
   "Informação de várias fontes (pais, professor, a própria criança a sós), funcionamento em casa, na escola e com os pares, qualidade da parentalidade e saúde mental e física (NICE CG158 1.3.8 e 1.3.10).",
   "Rastrear fatores complicadores: perturbação mental coexistente, PHDA, autismo, dificuldades de aprendizagem, problemas de comunicação, epilepsia, consumo de substâncias (NICE CG158 1.3.5 e 1.3.11); a história de uma condição do neurodesenvolvimento não é barreira à avaliação (NICE CG158 1.3.3).",
   "Avaliar parentalidade (inclusive disciplina coerciva), relações familiares e risco de abuso físico, sexual ou emocional (NICE CG158 1.3.14 e 1.3.15); a CID-11 associa a perturbação a perturbações nos cuidados e a parentalidade dura, inconsistente ou negligente."
  ],
  "differential": [
   "h-phda",
   "h-autismo",
   "h-conduta",
   "Ansiedade: recusa, explosões e irritabilidade para evitar o que assusta; sem comportamento provocador, rancoroso ou vingativo (CID-11; ver domínio Ansiedade)",
   "Episódio depressivo, maníaco ou hipomaníaco: irritabilidade e não colaboração dentro do episódio (CID-11; ver domínio Humor)",
   "Perturbação explosiva intermitente: acessos graves desproporcionados sem o padrão desafiador, com mais agressão física (CID-11)",
   "Problema relacional com uma figura de autoridade específica ou exigências desrazoáveis (CID-11)",
   "Contexto: mudanças (escola ou cidade nova), perdas, conflito familiar ou maus-tratos; perguntar o que mudou e quando começou (CID-11; NICE CG158 1.3.14)"
  ],
  "comorbid": [
   "h-phda",
   "h-conduta (podem coexistir se cumprirem ambos os critérios, CID-11)",
   "h-autismo",
   "h-aprendizagem",
   "h-linguagem",
   "Perturbações depressivas e de ansiedade (o especificador com irritabilidade-raiva crónica associa-se a depressão e ansiedade posteriores, CID-11)",
   "Consumo de substâncias (adolescentes)"
  ],
  "source": "ICD-11 CDDR, OMS, 2024 (ISBN 978-92-4-007726-3), https://www.who.int/publications/i/item/9789240077263 (texto lido numa cópia com o mesmo ISBN, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção 6C90, pp. 538-543, e especificador de emoções pró-sociais, pp. 548-549; NICE CG158, 2013 (atualizada 19/04/2017; revista 17/04/2025), https://www.nice.org.uk/guidance/cg158, rec. 1.3.1 a 1.3.16. Critérios seguidos: CID-11 (padrão 'por exemplo 6 meses ou mais', sem número mínimo de sintomas nem divisão por idade). Divergência lida: o NICE CG158 1.3.10 separa os sintomas nucleares por idade (comportamento negativista, hostil ou desafiador abaixo dos 11 anos; agressão, destruição, fraude ou furto e violação de regras acima dos 11); a CID-11 não divide por idade e distingue a oposição da perturbação do comportamento pela gravidade e pela violação dos direitos dos outros. A série de parâmetros AACAP sobre oposição (2007) não é usada: foi descontinuada."
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
    "why": "Agressão a pessoas ou animais, ameaças, intimidação ou uso de armas fazem parte do padrão (CID-11 6C91); triagem de risco positiva reforça e exige gestão de risco (NICE CG158 1.3.13)."
   },
   {
    "domain": "d-substancias",
    "level": 1,
    "why": "Consumo de substâncias, sobretudo álcool, coocorre com frequência na adolescência (CID-11 6C91); o NICE CG158 1.3.5 inclui-o como fator complicador."
   },
   {
    "scale": "sdq_prosocial_baixo",
    "why": "Comportamento pró-social baixo no SDQ: ligação indireta ao especificador de emoções pró-sociais limitadas (pouca empatia, pouco remorso), que a CID-11 define por informação de quem conhece a criança há muito tempo e por um padrão persistente."
   }
  ],
  "confirm": [
   "Padrão repetitivo e persistente em que se violam os direitos básicos dos outros ou normas, regras ou leis sociais importantes para a idade, tipicamente com vários comportamentos de pelo menos um destes grupos: agressão a pessoas ou animais (intimidação, ameaças, lutas, armas, crueldade, roubo com violência, coação sexual); destruição de bens (incluindo fogo posto intencional); fraude ou furto; violações graves de regras (noites fora apesar de proibição, fugas repetidas, faltas frequentes à escola) (CID-11 6C91).",
   "Padrão persistente e recorrente, com vários episódios durante um período prolongado (a CID-11 dá como exemplo pelo menos 1 ano). Um ou mais atos delinquentes isolados não bastam; avaliar o padrão global e não só a criminalidade de cada episódio (CID-11).",
   "Prejuízo significativo pessoal, familiar, social ou escolar (CID-11).",
   "Idade de início: subtipo de início na infância (um ou mais aspetos claramente presentes e persistentes antes da adolescência, por exemplo antes dos 10 anos, com pior prognóstico) ou de início na adolescência (nenhum antes); a CID-11 indica início típico no início ou meio da adolescência e raro depois dos 16 anos.",
   "Emoções pró-sociais limitadas (especificador): vários de pouca empatia, pouco remorso ou culpa, pouca preocupação com o desempenho, expressão emocional superficial; pervasivo e persistente (por exemplo 1 ano ou mais); informação de quem conhece a criança há muito tempo, além do autorrelato (CID-11). É independente do início na infância.",
   "Excluir comportamentos adaptativos ao contexto (por exemplo fugir de uma casa abusiva, roubar para sobreviver), e coerção em contextos de violência organizada ou de guerra (CID-11). Protestos políticos não contam (CID-11).",
   "Se o comportamento dissocial se limita a obter ou usar substâncias, ou à intoxicação, dependência ou abstinência, considerar antes perturbação por uso de substâncias (CID-11); se ocorre só dentro de episódios de humor, geralmente não se diagnostica (CID-11).",
   "Avaliação completa (NICE CG158 1.3.8 a 1.3.16): ouvir a criança ou jovem a sós, informador que conheça o comportamento atual e passado, funcionamento em casa, escola e pares, qualidade da parentalidade (incluindo disciplina coerciva), saúde mental e física, riscos para si e para os outros, abuso físico, sexual ou emocional.",
   "Fatores complicadores a rastrear (perturbação mental, PHDA, autismo, dificuldade de aprendizagem, consumo): se presentes, o NICE CG158 1.3.6 manda para avaliação especializada abrangente."
  ],
  "differential": [
   "h-oposicao",
   "h-phda",
   "Episódios de humor (depressivo, maníaco, misto ou hipomaníaco): irritabilidade, agressão e comportamentos de risco dentro do episódio (CID-11)",
   "Perturbação explosiva intermitente: agressão impulsiva em acessos, sem padrão geral de violação de regras, mentira ou furto; na perturbação do comportamento a agressão é muitas vezes premeditada e instrumental (CID-11)",
   "Perturbação por uso de substâncias (comportamento limitado à obtenção ou uso, ou ligado à intoxicação) (CID-11)",
   "Perturbação da personalidade (pode coexistir, sobretudo em adolescentes mais velhos; CID-11)",
   "Trauma, maus-tratos ou contexto de perigo: comportamentos adaptativos ao ambiente não devem ser a única base do diagnóstico (CID-11; ver domínio Trauma e risk-mt)"
  ],
  "comorbid": [
   "h-phda",
   "h-oposicao",
   "h-aprendizagem",
   "h-autismo",
   "h-linguagem",
   "Perturbações de ansiedade e do humor, TEPT e perturbação bipolar (NICE CG158 1.3.11)",
   "Consumo de substâncias, sobretudo álcool (adolescentes, CID-11)",
   "Epilepsia e défices motores (NICE CG158 1.3.11)"
  ],
  "source": "ICD-11 CDDR, OMS, 2024 (ISBN 978-92-4-007726-3), https://www.who.int/publications/i/item/9789240077263 (texto lido numa cópia com o mesmo ISBN, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção 6C91, pp. 544-549 (especificadores de início e de emoções pró-sociais, pp. 544-545 e 548-549); NICE CG158, 2013 (atualizada 19/04/2017; revista 17/04/2025), https://www.nice.org.uk/guidance/cg158, rec. 1.3.1 a 1.3.16. Critérios seguidos: CID-11 (padrão 'por exemplo pelo menos 1 ano', sem número mínimo de comportamentos, sem divisão por idade). Divergência lida: o NICE CG158 1.3.10 divide os sintomas nucleares por idade (acima dos 11 anos: agressão, destruição de bens, fraude ou furto, violação de regras); a CID-11 não o faz. O DSM-5 não foi lido."
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
    "why": "PHDA coexiste em cerca de 55 a 60% das pessoas com síndrome de Tourette (ESSTS 2022; CID-11 8A05.00); associação, não critério."
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
   "Síndrome de Tourette: tiques motores e tiques fónicos (vocais), os dois tipos presentes, não necessariamente em simultâneo nem de forma contínua. Só motores: tiques motores crónicos (8A05.01). Só fónicos: tiques fónicos crónicos (8A05.02) (CID-11).",
   "Tiques definidos como movimentos ou vocalizações súbitos, rápidos, não rítmicos e recorrentes (CID-11).",
   "Presentes há pelo menos 1 ano (podem aumentar e diminuir), com início no período do desenvolvimento (CID-11). A ESSTS 2022 refere que o DSM-5 usa início antes dos 18 anos; os dois sistemas pedem 12 meses.",
   "Tiques transitórios (piscar de olhos, pigarrear) são comuns na infância e distinguem-se pela natureza transitória (CID-11): sem 1 ano de evolução não cumprem os critérios de síndrome de Tourette nem de tiques crónicos.",
   "Não são manifestação de outra condição médica (por exemplo doença de Huntington), nem efeito de substância ou medicação no sistema nervoso central (por exemplo anfetamina), incluindo abstinência (por exemplo de benzodiazepinas) (CID-11).",
   "Características do tique: suprimíveis por períodos curtos, agravam com stress, diminuem no sono ou em atividade agradável focada, sugestionáveis; urgência premonitória, tipicamente reconhecida a partir dos 10 anos (CID-11; ESSTS 2022).",
   "História de início e evolução: idade de início dos tiques motores e dos fónicos (os fónicos costumam surgir 1 a 2 anos depois), idade média de início cerca de 5 anos, pior período entre os 8 e os 12 anos (CID-11; ESSTS 2022).",
   "Início súbito ou tardio, movimentos complexos e rítmicos nos braços, pernas e tronco, ausência de urgência premonitória ou de supressão, e relação com redes sociais: pensar em tiques funcionais, que podem coexistir com tiques verdadeiros (ESSTS 2022).",
   "Se não há tiques na consulta, apoiar-se em vários informadores e em vídeo, porque os tiques variam e podem ser suprimidos no consultório (ESSTS 2022).",
   "Avaliar comorbilidade (PHDA, TOC, autismo, ansiedade, humor, comportamento, sono, aprendizagem), acessos de raiva e autolesão (ESSTS 2022; CID-11)."
  ],
  "differential": [
   "h-autismo",
   "h-phda",
   "Perturbação do movimento estereotipado (CID-11 6A06) e estereotipias do autismo: movimentos mais fixos, mais prolongados, quase rítmicos, em vários grupos musculares, com início aos 0-3 anos, sem urgência premonitória e muitas vezes calmantes ou prazerosos (CID-11; ESSTS 2022)",
   "TOC: as compulsões visam neutralizar cognições ou reduzir ansiedade, e os tiques complexos podem ser difíceis de distinguir; ambos podem ser atribuídos (CID-11; ver domínio Ansiedade)",
   "Tiques funcionais (ESSTS 2022)",
   "Coreia, distonia, mioclonias e blefarospasmo: tiques breves confundem-se com coreia e tiques prolongados com distonia; podem coexistir (ESSTS 2022)",
   "Epilepsia focal: movimentos estereotipados e ligados a partes específicas do corpo, por vezes com estímulo fotossensível (ESSTS 2022)",
   "Causas oftalmológicas (tiques oculares), otorrinolaringológicas ou digestivas (pigarrear ou fungar, por alergia ou refluxo) (ESSTS 2022)",
   "Substâncias e medicação: perguntar por fármacos e drogas recentes (CID-11)",
   "Autolesão intencional: a síndrome de Tourette não envolve intenção de se ferir, embora tiques com força e repetição possam causar lesão (CID-11)",
   "Disfluência da fala: os tiques complexos não implicam a disfluência marcada da perturbação da fluência da fala (CID-11 6A01.1)",
   "PANS/PANDAS: hipótese debatida; um grande estudo europeu (EMTICS) não mostrou relação específica entre infeções estreptocócicas e exacerbação dos tiques (ESSTS 2022)"
  ],
  "comorbid": [
   "h-phda (cerca de 55 a 60%)",
   "TOC (22 a 66% em populações clínicas)",
   "h-autismo",
   "Ansiedade de separação (crianças) e outras perturbações de ansiedade",
   "Perturbações depressivas, perturbação por uso de substâncias e perturbação bipolar (mais em adolescentes e adultos, CID-11)",
   "Acessos de raiva e comportamento autolesivo",
   "h-aprendizagem",
   "h-dcd (dificuldades motoras, ESSTS 2022)"
  ],
  "source": "ICD-11 CDDR, OMS, 2024 (ISBN 978-92-4-007726-3), https://www.who.int/publications/i/item/9789240077263 (texto lido numa cópia com o mesmo ISBN, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf), secção 8A05.0 (8A05.00, 8A05.01 e 8A05.02), pp. 153-159 (categorias do capítulo das doenças do sistema nervoso, com referência cruzada no neurodesenvolvimento); ESSTS, European clinical guidelines for Tourette syndrome and other tic disorders, version 2.0, Part I: assessment, Eur Child Adolesc Psychiatry 2022;31:383-402, https://doi.org/10.1007/s00787-021-01842-2 (texto integral). Não encontrei guideline NICE nem AAP de diagnóstico de tiques. Critérios seguidos: CID-11 (pelo menos 1 ano, início no período do desenvolvimento). Divergência: a ESSTS 2022 refere que usa o DSM-5 (início antes dos 18 anos) para diagnosticar e critica a colocação da síndrome de Tourette, na CID-11, nos movimentos do capítulo do sistema nervoso e não nas perturbações emocionais; a CID-11 não fixa 18 anos."
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
    "why": "A morte prematura na anorexia deve-se a complicações da inanição ou a suicídio (CDDR)."
   },
   {
    "domain": "d-substancias",
    "level": 1,
    "why": "Consumo de álcool ou substâncias a avaliar (NICE NG69 1.2.9); fármacos que aumentam o gasto de energia fazem parte dos comportamentos descritos no CDDR."
   }
  ],
  "confirm": [
   "Peso significativamente baixo para a idade, estatura e trajetória de crescimento: o CDDR dá como limiar habitual IMC para a idade abaixo do percentil 5 em crianças e adolescentes; perda rápida (mais de 20% em 6 meses) pode substituir o peso baixo; em crianças pode haver falha de ganho esperado em vez de perda. Peso baixo não explicado por doença médica nem por falta de alimento.",
   "Padrão persistente de restrição ou de outros comportamentos para manter peso baixo (jejum, escolha de alimentos de baixo valor energético, comer muito devagar, esconder ou cuspir comida, vómito autoinduzido, laxantes, diuréticos, omissão de insulina na diabetes, exercício excessivo, medicação que aumenta o gasto de energia).",
   "Preocupação excessiva com peso ou forma: baixo peso sobrevalorizado ou perceção inexata do corpo; se não referida, procurar verificações repetidas (balança, fita métrica, espelho), contagem de calorias ou evitamentos. Medo explícito de engordar não é obrigatório na CID-11.",
   "Em crianças pequenas a preocupação com o corpo pode não ser articulada: recusa alimentar com 'não tenho fome' ou dor abdominal, e recusa não verbal (CDDR).",
   "Avaliar o risco médico para lá do peso: hipotensão ortostática, bradicardia, hipotermia, arritmia, alterações bioquímicas, perda de peso rápida (CDDR; NICE NG69 1.2.8 desaconselha decidir pelo IMC ou duração isolados).",
   "Se o peso estiver dentro ou acima do normal apesar de perda significativa: não cumpre a anorexia nervosa da CID-11 (peso baixo é exigido); a AAP 2021 (DSM-5) descreve a 'anorexia nervosa atípica' como outra perturbação alimentar especificada. Seguiu-se a CID-11; DSM-5-TR não consultado."
  ],
  "differential": [
   "h-arfid",
   "h-bulimia-nervosa",
   "Doença gastrointestinal (doença inflamatória intestinal, doença celíaca), hipertiroidismo, diabetes mellitus, insuficiência suprarrenal, infeção crónica, neoplasia, síndrome da artéria mesentérica superior a excluir primeiro (AAP 2021, quadro 4)",
   "Depressão, psicose, ansiedade ou perturbação obsessivo-compulsiva e consumo de substâncias com perda de peso (AAP 2021, quadro 4)",
   "Perturbação dismórfica corporal (preocupação com outras características que não o peso global; CDDR)"
  ],
  "comorbid": [
   "Depressão",
   "Ansiedade",
   "Perturbação obsessivo-compulsiva",
   "Autolesão",
   "Consumo de álcool ou substâncias",
   "Diabetes tipo 1 (omissão de insulina)"
  ],
  "source": "ICD-11 CDDR secção 6B80 Anorexia nervosa (pp. 398-404; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf); NICE NG69, 2017 (atualizada em 2020), https://www.nice.org.uk/guidance/ng69/chapter/Recommendations (rec. 1.2.5-1.2.9); AAP, Hornberger et al., Pediatrics 2021;147(1):e2020040279, https://publications.aap.org/pediatrics/article/147/1/e2020040279/33504/Identification-and-Management-of-Eating-Disorders (quadros DSM-5 e quadro 4). Divergência: o DSM-5 (via AAP 2021) não fixa percentis e exige medo de engordar ou comportamentos que impedem o ganho de peso; seguiu-se a CID-11."
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
    "why": "Risco de suicídio aumentado na bulimia nervosa (CDDR)."
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
   "Episódios frequentes de ingestão compulsiva com perda de controlo, em período definido (por exemplo 2 horas): a CID-11 pede cerca de 1 vez por semana ou mais durante pelo menos 1 mês. O DSM-5 (AAP 2021) pede 1 vez por semana durante 3 meses; seguiu-se a CID-11.",
   "Comportamentos compensatórios inadequados repetidos com a mesma frequência (vómito autoinduzido, jejum, diuréticos, laxantes ou clisteres, omissão de insulina, exercício extenuante).",
   "Preocupação excessiva com peso ou forma (ou comportamentos que a revelam: verificações, contagem de calorias, evitamentos).",
   "Sofrimento marcado com o padrão ou prejuízo significativo; nas fases iniciais pode estar oculto.",
   "Peso não suficientemente baixo para anorexia nervosa (IMC para a idade abaixo do percentil 5 com compulsão e purga: anorexia nervosa, padrão compulsivo-purgativo).",
   "Sinais físicos: desgaste dentário atípico, desequilíbrio eletrolítico ou hipoglicemia, dor abdominal com vómitos ou restrições que a doença médica não explica (NICE NG69 1.2.6). Início antes da puberdade é raro; crianças pequenas raramente têm compulsão alimentar por falta de acesso à comida (CDDR)."
  ],
  "differential": [
   "h-anorexia-nervosa",
   "h-ingestao-compulsiva",
   "h-ruminacao-regurgitacao",
   "Compensação pouco frequente ou de curta duração: não cumpre os limiares da CID-11; considerar outra perturbação alimentar especificada (6B8Y); a AAP 2021 (DSM-5) descreve bulimia de baixa frequência e perturbação de purga",
   "Doença gastrointestinal (refluxo, esofagite eosinofílica, pancreatite, vómitos cíclicos), aumento da pressão intracraniana, enxaqueca ou alergia alimentar como causa de vómitos (AAP 2021, quadro 4)"
  ],
  "comorbid": [
   "Depressão",
   "Ansiedade",
   "Autolesão",
   "Consumo de substâncias",
   "Perturbação obsessivo-compulsiva",
   "Diabetes tipo 1"
  ],
  "source": "ICD-11 CDDR secção 6B81 Bulimia nervosa (pp. 404-407; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf); NICE NG69, 2017 (atualizada em 2020), https://www.nice.org.uk/guidance/ng69/chapter/Recommendations (rec. 1.2.6, 1.2.9); AAP, Hornberger et al., Pediatrics 2021;147(1):e2020040279, https://publications.aap.org/pediatrics/article/147/1/e2020040279/33504/Identification-and-Management-of-Eating-Disorders (quadros DSM-5 e quadro 4)."
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
   "Episódios recorrentes de ingestão compulsiva com perda de controlo: a CID-11 pede cerca de 1 vez por semana ou mais durante 3 meses; pode-se atribuir mais cedo (por exemplo 1 mês) se houver vários episódios por semana com sofrimento significativo.",
   "Sem comportamentos compensatórios regulares (se houver, é bulimia nervosa).",
   "Sofrimento marcado com o padrão ou prejuízo significativo; esconder o comportamento é frequente.",
   "Na criança: pode referir 'sentir-se fora de controlo' em vez de quantidade excessiva; os episódios podem ser menos frequentes e mais curtos por falta de acesso a comida (CDDR).",
   "Distinguir de ingestão excessiva sem perda de controlo e de comer sem atenção que se consegue interromper: estes não são ingestão compulsiva (CDDR).",
   "Não explicada por condição médica (por exemplo síndrome de Prader-Willi), por outra perturbação mental (por exemplo depressiva), nem por substância ou medicação.",
   "Divergência: o DSM-5 (AAP 2021) exige 3 ou mais características dos episódios (por exemplo comer depressa, até desconforto, sem fome, sozinho por vergonha, culpa); a CID-11 apresenta-as como características adicionais, não obrigatórias. Seguiu-se a CID-11."
  ],
  "differential": [
   "h-bulimia-nervosa",
   "Obesidade: regista-se em separado (CID-11); obesidade sem padrão de compulsão alimentar não é este diagnóstico",
   "Hipotiroidismo, hipercortisolismo, efeito de medicação, síndrome de Prader-Willi, síndrome de Kleine-Levin (AAP 2021, quadro 4: ingestão compulsiva ou aumento de peso inexplicado)",
   "Depressão"
  ],
  "comorbid": [
   "Obesidade (CID-11: registar separadamente)",
   "Depressão (prática clínica, sem fonte para esta associação)"
  ],
  "source": "ICD-11 CDDR secção 6B82 Binge-eating disorder (pp. 407-410; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf); AAP, Hornberger et al., Pediatrics 2021;147(1):e2020040279, https://publications.aap.org/pediatrics/article/147/1/e2020040279/33504/Identification-and-Management-of-Eating-Disorders (quadro DSM-5 e quadro 4). Divergência indicada em 'confirm'; seguiu-se a CID-11."
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
   "Evitamento ou restrição de alimentos com pelo menos um destes efeitos: ingestão insuficiente em quantidade ou variedade com perda de peso significativa (ou falha de ganho esperado), défices nutricionais clinicamente significativos, dependência de suplementos orais ou sonda, ou prejuízo funcional significativo (por exemplo evitar situações sociais com comida).",
   "Motivação não relacionada com peso ou forma: falta de interesse em comer, características sensoriais (cheiro, textura, cor, temperatura) ou receio de consequências (engasgar, vomitar, doença). Perguntar por episódio prévio de engasgamento ou vómito.",
   "Não é explicado por falta de comida, prática cultural ou religiosa (vegetarianismo, jejum) sem consequências, nem por condição médica ou outra perturbação mental, nem por substância.",
   "Seletividade alimentar sem perda de peso, défice de saúde ou prejuízo não chega para o diagnóstico; a preocupação dos pais isolada também não (CDDR).",
   "Se surgirem preocupações com peso e forma durante o seguimento, reavaliar para anorexia nervosa (CDDR)."
  ],
  "differential": [
   "h-anorexia-nervosa",
   "Autismo com seletividade sensorial: pode atribuir-se ARFID adicional se houver perda de peso, consequências para a saúde ou prejuízo funcional específicos (CDDR)",
   "Fobia específica ou outra perturbação de ansiedade (podem ser diagnosticadas em conjunto)",
   "Depressão, perturbação bipolar, psicose (medo de envenenamento) como causa da restrição",
   "Alergias alimentares, doença gastrointestinal, infeções, cancro, hipertiroidismo",
   "Seletividade alimentar própria da idade (neofobia) sem consequências"
  ],
  "comorbid": [
   "Autismo",
   "Fobia específica ou outra perturbação de ansiedade",
   "PHDA (prática clínica, sem fonte)"
  ],
  "source": "ICD-11 CDDR secção 6B83 Avoidant-restrictive food intake disorder (pp. 410-414; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf); AAP, Hornberger et al., Pediatrics 2021;147(1):e2020040279, https://publications.aap.org/pediatrics/article/147/1/e2020040279/33504/Identification-and-Management-of-Eating-Disorders (quadro DSM-5, texto sobre ARFID). CID-11 e DSM-5 coincidem no essencial; a CID-11 inclui explicitamente a exclusão de motivação por peso e forma."
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
   "Idade de desenvolvimento a partir de cerca de 2 anos, quando a criança já distingue comestível de não comestível; a exploração oral em lactentes e crianças muito pequenas é normal.",
   "Excluir carência nutricional (por exemplo anemia por défice de ferro, vitamina B12 ou folato): só diagnosticar se o comportamento persistir depois de corrigida. Excluir prática culturalmente aceite, a menos que as quantidades exijam atenção.",
   "Nota: a CID-11 não exige duração mínima; a duração de 1 mês é do DSM-5 (segue-se a releitura de drafts/alimentacao.json, item dal-17)."
  ],
  "differential": [
   "Carência nutricional (ferro, B12, folato)",
   "Deficiência intelectual (pode coexistir, desde que distinga comestível de não comestível)",
   "Anorexia nervosa (papel ou lenços para suprimir a fome) (h-anorexia-nervosa)",
   "Tricotilomania ou escoriação (come o cabelo ou a pele arrancados)",
   "Autismo, esquizofrenia",
   "Perturbação factícia ou simulação (ingestão para parecer doente)"
  ],
  "comorbid": [
   "Autismo",
   "Deficiência intelectual",
   "Tricotilomania"
  ],
  "source": "ICD-11 CDDR secção 6B84 Pica (pp. 414-416; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf). Sem guideline clínica pediátrica lida para esta hipótese: prática clínica (sem fonte) para além do CDDR."
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
   "Regurgitação intencional e repetida do alimento para a boca, que pode ser remastigado e reengolido ou cuspido de propósito (não é vómito), pelo menos várias vezes por semana durante pelo menos várias semanas.",
   "Idade de desenvolvimento de pelo menos 2 anos; em lactentes não se diagnostica (síndrome de ruminação do lactente, capítulo digestivo da CID-11).",
   "Excluir condição médica que cause regurgitação, náusea ou vómito (estenose esofágica, perturbações neuromusculares do esófago, estenose do piloro).",
   "Perguntar diretamente: o comportamento é muitas vezes escondido por vergonha, e a criança pode induzi-lo com a língua, os músculos abdominais ou tosse.",
   "Distinguir de vómito autoinduzido da anorexia nervosa ou bulimia nervosa. Risco de aspiração em crianças muito pequenas (CDDR)."
  ],
  "differential": [
   "h-anorexia-nervosa",
   "h-bulimia-nervosa",
   "Síndrome de ruminação do lactente (em lactentes; capítulo das doenças digestivas)",
   "'Vómito psicogénico': a regurgitação voluntária favorece este diagnóstico",
   "Doenças gastrointestinais, enxaqueca, aumento da pressão intracraniana, alergia alimentar (AAP 2021, quadro 4, vómitos)"
  ],
  "comorbid": [
   "Autismo",
   "Deficiência intelectual",
   "Ansiedade"
  ],
  "source": "ICD-11 CDDR secção 6B85 Rumination-regurgitation disorder (pp. 416-418; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf); AAP, Hornberger et al., Pediatrics 2021;147(1):e2020040279, https://publications.aap.org/pediatrics/article/147/1/e2020040279/33504/Identification-and-Management-of-Eating-Disorders (quadro 4). Duração segundo o CDDR ('várias semanas'), não 1 mês do DSM-5 (releitura dal-18)."
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
   "Na criança, procurar insónia comportamental: tipo de associação ao início do sono (precisa de condições como ser embalado) e tipo de falta de limites (recusa ir para a cama), muitas vezes ambos (AFP 2014).",
   "Duração e frequência mínimas e critérios de insónia crónica do adolescente: não verificados (o CDDR não cobre o capítulo do sono e o ICSD-3-TR não foi lido nesta tarefa); prática clínica (sem fonte).",
   "Excluir antes causas médicas e outras perturbações do sono: apneia obstrutiva, pernas inquietas, atraso de fase, parassónias, dor, eczema, asma, refluxo, medicação (incluindo estimulantes) e cafeína (a medicação específica e a dor são prática clínica, sem fonte).",
   "Rastrear depressão e ideação suicida no adolescente com queixa de sono (Teresi 2024; estudo transversal, não prova causalidade)."
  ],
  "differential": [
   "h-atraso-fase-sono",
   "h-sindrome-pernas-inquietas",
   "h-apneia-obstrutiva-sono",
   "h-parassonias",
   "Sono insuficiente por horário ou higiene do sono",
   "Depressão, ansiedade, PHDA, trauma, consumo de substâncias como causa ou consequência"
  ],
  "comorbid": [
   "PHDA",
   "Ansiedade",
   "Depressão",
   "Perturbação de stress pós-traumático",
   "Autismo (prática clínica, sem fonte)"
  ],
  "source": "Capítulo 7 da CID-11: o CDDR da OMS só o refere (https://www.who.int/publications/i/item/9789240077263, pp. 27-28 do texto lido) e não dá critérios; Carter, Hathaway, Lettieri, Am Fam Physician 2014;89(5):368-377, https://www.aafp.org/pubs/afp/issues/2014/0301/p368.html (insónia comportamental da infância); AACAP, Facts for Families n.º 34 Sleep Problems (atualizado março 2023), https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Childrens-Sleep-Problems-034.aspx; Teresi et al., JAACAP Open 2024;3(3):589-600, https://pmc.ncbi.nlm.nih.gov/articles/PMC12414329/. Sem guideline de diagnóstico pediátrica mais recente lida; releitura em drafts/sono.json (dso-19)."
 },
 {
  "id": "h-apneia-obstrutiva-sono",
  "name": "Apneia obstrutiva do sono (a excluir)",
  "icd11": "Capítulo 7 da CID-11 (perturbações do sono-vigília); código específico não verificado (o CDDR da OMS não descreve este capítulo)",
  "branches": [
   "pre",
   "esc"
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
    "why": "Enurese, sobretudo secundária (após pelo menos 6 meses de continência), é um sinal (AAP 2012)."
   }
  ],
  "confirm": [
   "Ronco regular (pelo menos 3 noites por semana) com pelo menos um destes: respiração difícil, gasps ou pausas observadas, enurese (sobretudo secundária), dormir sentado ou com o pescoço em hiperextensão, cianose, cefaleias ao acordar, sonolência diurna, PHDA, problemas de aprendizagem (AAP 2012, quadro 2).",
   "Perguntar por ronco a todas as crianças: os pais nem sempre o referem espontaneamente (AAP 2012).",
   "A história e o exame sozinhos correlacionam-se mal com o estudo do sono: o passo seguinte é polissonografia ou referenciação a especialista em sono ou otorrinolaringologia (AAP 2012; AFP 2014). Nem todos os que roncam têm apneia.",
   "Sinais ao exame a registar: hipertrofia amigdalina, retrognatia ou micrognatia, palato ogival, excesso ou baixo peso, má progressão ponderal, hipertensão (AAP 2012, quadro 2).",
   "Fatores de risco para referenciação a medicina do sono: PHDA, anomalias craniofaciais, síndrome de Down (AFP 2014).",
   "As fontes são de 2012 e 2014; não foi encontrada guideline pediátrica posterior nesta tarefa (releitura dso-22 e dso-33)."
  ],
  "differential": [
   "h-parassonias",
   "h-insonia",
   "PHDA primária com sono insuficiente",
   "Ronco primário sem apneia",
   "h-enurese"
  ],
  "comorbid": [
   "PHDA",
   "Obesidade",
   "Enurese",
   "Parassónias (a apneia é gatilho frequente)"
  ],
  "source": "CID-11 capítulo 7 (código não verificado). AAP, Marcus et al., Pediatrics 2012;130(3):576-584, https://publications.aap.org/pediatrics/article/130/3/576/30284/Diagnosis-and-Management-of-Childhood-Obstructive (quadro 2 e declarações de ação 1 e 2, lidos na página da AAP); Carter, Hathaway, Lettieri, Am Fam Physician 2014;89(5):368-377, https://www.aafp.org/pubs/afp/issues/2014/0301/p368.html (secção de apneia obstrutiva do sono e quadro 3)."
 },
 {
  "id": "h-parassonias",
  "name": "Parassónias (terrores noturnos, sonambulismo, pesadelos)",
  "icd11": "Capítulo 7 da CID-11 (perturbações do sono-vigília); código específico não verificado (o CDDR da OMS não descreve este capítulo)",
  "branches": [
   "pre",
   "esc"
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
    "why": "Pesadelos recorrentes podem relacionar-se com acontecimentos assustadores ou trauma (prática clínica, sem fonte)."
   }
  ],
  "confirm": [
   "Hora do episódio: terrores e sonambulismo na primeira metade da noite, sem memória e com dificuldade em acordar a criança; pesadelos na segunda metade, com memória do sonho e receio de adormecer (AFP 2014).",
   "Perguntar por movimentos repetitivos e estereotipados, posturas estranhas ou episódios sempre iguais: podem ser convulsões noturnas (AFP 2014).",
   "Gatilhos: sono insuficiente, apneia obstrutiva (mais de metade das crianças referenciadas por terrores ou sonambulismo tinham apneia), movimentos periódicos dos membros, refluxo, despertares forçados, medicamentos (AFP 2014).",
   "Comportamentos atípicos, nocivos, violentos ou sem resposta ao tratamento conservador justificam avaliação especializada (AFP 2014).",
   "Segurança no quarto e riscos de lesão a avaliar (sonambulismo).",
   "Seguiu-se a história clínica como método de diagnóstico (AFP 2014); sem guideline posterior encontrada (releitura dso-21)."
  ],
  "differential": [
   "Epilepsia noturna",
   "h-apneia-obstrutiva-sono (gatilho frequente)",
   "h-sindrome-pernas-inquietas",
   "Perturbação de stress pós-traumático (pesadelos com conteúdo do trauma)",
   "Sono insuficiente"
  ],
  "comorbid": [
   "Apneia obstrutiva do sono",
   "Ansiedade (prática clínica, sem fonte)"
  ],
  "source": "CID-11 capítulo 7 (código não verificado; o CDDR refere pesadelos, sonambulismo e terrores como antigos diagnósticos do capítulo mental, p. 28). Carter, Hathaway, Lettieri, Am Fam Physician 2014;89(5):368-377, https://www.aafp.org/pubs/afp/issues/2014/0301/p368.html (parassónias e quadro 2)."
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
   "Critérios IRLSSG (todos): (1) vontade de mexer as pernas, geralmente com sensações desagradáveis, descrita nas palavras da criança; (2) começa ou piora em repouso ou inatividade; (3) alivia total ou parcialmente com movimento, enquanto este dura; (4) só ocorre ou é pior ao fim do dia ou à noite; (5) não explicada por outra condição médica ou comportamental.",
   "A aplicabilidade depende da linguagem e do desenvolvimento, não da idade; é pouco provável que a criança com menos de 6 anos descreva os aspetos necessários (IRLSSG 2013).",
   "Excluir imitadores: mialgia, estase venosa, edema, artrite, cãibras, desconforto posicional, bater habitual do pé (IRLSSG 2013, critério 5). Em crianças pode confundir-se com 'dores de crescimento' (AFP 2014).",
   "Fatores agravantes a rever: carência de ferro (AFP 2014 refere medir a ferritina), cafeína, nicotina, anti-histamínicos, ISRS e antidepressivos tricíclicos, atividade física excessiva ou insuficiente (AFP 2014). História familiar.",
   "A AFP 2014 aceita o diagnóstico com história compatível e pelo menos 2 de: perturbação do sono, familiar de primeiro grau, 5 ou mais movimentos periódicos por hora na polissonografia; seguiram-se os critérios IRLSSG 2013, mais recentes."
  ],
  "differential": [
   "PHDA (comorbilidade frequente, não imitador)",
   "Dores de crescimento, cãibras, artrite, desconforto posicional",
   "h-insonia",
   "h-atraso-fase-sono"
  ],
  "comorbid": [
   "PHDA",
   "Insónia"
  ],
  "source": "CID-11 capítulo 7 (código não verificado). IRLSSG, Picchietti et al., Sleep Med 2013;14:1253-1259, https://www.irlssg.org/wp-content/uploads/2025/04/Ped-RLS-dx-crit-2013.pdf (critérios e notas, lidos); Carter, Hathaway, Lettieri, Am Fam Physician 2014;89(5):368-377, https://www.aafp.org/pubs/afp/issues/2014/0301/p368.html (síndrome das pernas inquietas). Sem atualização dos critérios pediátricos posterior a 2013 encontrada (releitura dso-13 e dso-23)."
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
   "Horas habituais de dormir e acordar atrasadas pelo menos 2 horas em relação ao socialmente aceitável; prevalência de 7 a 16% nos adolescentes (AFP 2014).",
   "Registo do sono em diário durante pelo menos 1 semana (AFP 2014); a releitura dso-20 refere que o ICSD-3-TR (2023) passou a exigir diário do sono, com actigrafia sempre que possível (resumo da AASM, lido por quem fez a releitura, não nesta tarefa).",
   "Típico: deitar tardio (por exemplo depois das 2 horas), dormir até tarde, dificuldade em acordar, atrasos na escola; despertares noturnos são raros e a arquitetura do sono é normal (AFP 2014).",
   "Perguntar a que horas dormiria e acordaria sem constrangimentos (férias) e se a duração de sono é então adequada.",
   "Excluir sono insuficiente por horário escolar, insónia, depressão e consumo de substâncias."
  ],
  "differential": [
   "h-insonia",
   "Sono insuficiente por horário social",
   "Depressão",
   "Consumo de substâncias ou cafeína à noite",
   "h-sindrome-pernas-inquietas"
  ],
  "comorbid": [
   "Depressão",
   "Ansiedade",
   "PHDA (AACAP 2023 refere PHDA e ansiedade como causas possíveis de problemas de sono)"
  ],
  "source": "CID-11 capítulo 7 (código não verificado). Carter, Hathaway, Lettieri, Am Fam Physician 2014;89(5):368-377, https://www.aafp.org/pubs/afp/issues/2014/0301/p368.html (atraso de fase); AACAP, Facts for Families n.º 34 Sleep Problems (atualizado março 2023), https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Childrens-Sleep-Problems-034.aspx. Sem guideline pediátrica mais recente lida (releitura dso-14 e dso-20)."
 },
 {
  "id": "h-enurese",
  "name": "Enurese",
  "icd11": "6C00",
  "branches": [
   "pre",
   "esc"
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
   "Perda repetida e persistente de urina na cama ou na roupa (por exemplo várias vezes por semana durante vários meses, segundo o CDDR); a CID-11 não fixa um limite fixo de meses.",
   "Idade de desenvolvimento equivalente a cerca de 5 anos; perdas ocasionais até à meia infância não são raras.",
   "Especificar noturna, diurna ou ambas. Perguntar se esteve seco pelo menos 6 meses (enurese secundária; NICE CG111 1.3.2). A distinção primária/secundária não é termo do CDDR; o limiar de 6 meses secos é do NICE e da AAP.",
   "Excluir causa médica: infeção urinária, diabetes mellitus, bexiga neurogénica, doença do sistema nervoso ou musculoesquelético, anomalias das vias urinárias (CDDR); perguntar por início recente (dias ou semanas), que pode ser doença sistémica (NICE CG111 1.3.1); sintomas diurnos, esforço, jato fraco, dor (1.3.4).",
   "Excluir efeito de medicamentos (antipsicóticos, diuréticos): se a enurese surgiu com o fármaco, em geral não se diagnostica (CDDR).",
   "Perguntar por obstipação ou encoprese, que se avaliam em conjunto (NICE CG111 1.3.9 e 1.3.12).",
   "Se não cumprir os critérios, o CDDR indica a categoria de sintoma MF50.2 (incontinência urinária)."
  ],
  "differential": [
   "Causas médicas (infeção urinária, diabetes, bexiga neurogénica, anomalias urinárias) a excluir primeiro",
   "h-apneia-obstrutiva-sono (enurese secundária)",
   "h-encoprese (obstipação)",
   "Efeito de medicamentos",
   "Criança vulnerável ou problemas familiares (NICE CG111 1.3.9)"
  ],
  "comorbid": [
   "h-encoprese",
   "PHDA",
   "Perturbação de oposição",
   "Ansiedade",
   "Depressão",
   "Apneia obstrutiva do sono"
  ],
  "source": "ICD-11 CDDR secção 6C00 Enuresis (pp. 421-424; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf); NICE CG111, publicada 27/10/2010, https://www.nice.org.uk/guidance/cg111/chapter/Recommendations (rec. 1.3.1-1.3.15); AAP, Marcus et al., Pediatrics 2012;130(3):576-584, https://publications.aap.org/pediatrics/article/130/3/576/30284/Diagnosis-and-Management-of-Childhood-Obstructive (quadro 2). DSM-5-TR não consultado (releitura do-17 manteve a CID-11 sem limite de 3 meses)."
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
   "Emissão repetida e persistente de fezes em locais inadequados, pelo menos 1 episódio por mês durante vários meses (CDDR).",
   "Idade de desenvolvimento equivalente a cerca de 4 anos; episódios ocasionais na primeira infância não são raros.",
   "Especificar com ou sem obstipação e incontinência por transbordamento (a forma mais comum: retenção e impactação, fezes geralmente mal formadas, história de evitamento da casa de banho).",
   "Excluir efeito de substância (por exemplo excesso de laxantes) e causa médica: megacólon aganglionar, espinha bífida, estenose anal, diarreia crónica, anomalias do intestino, gastroenterite (CDDR).",
   "Sinais de alarme (NICE CG99): atraso na passagem do mecónio (mais de 48 horas), fezes em fita, distensão abdominal com vómitos, fraqueza nas pernas ou atraso locomotor: não tratar como obstipação simples e referenciar com urgência.",
   "Perguntar por enurese associada: ambos os diagnósticos podem ser atribuídos (CDDR). Avaliar vergonha, provocações e evitamento social."
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
   "Ansiedade",
   "Deficiência intelectual (CDDR)"
  ],
  "source": "ICD-11 CDDR secção 6C01 Encopresis (pp. 424-427; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf); NICE CG99, publicada 26/05/2010, última atualização 13/07/2017, https://www.nice.org.uk/guidance/cg99/chapter/Recommendations (rec. 1.1.1-1.1.5, quadros 1 e 2). Releitura do-18: sem limite fixo de 3 meses."
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
   "Pelo menos 2 sintomas, na maior parte do tempo durante 1 mês ou mais, com pelo menos 1 de: delírios persistentes, alucinações persistentes, pensamento desorganizado, experiências de influência, passividade ou controlo; outros sintomas aceites: negativos, comportamento muito desorganizado, perturbações psicomotoras (CDDR).",
   "Não explicados por condição médica (por exemplo tumor cerebral) nem por substância ou medicação (por exemplo corticoides, abstinência) (CDDR). NICE CG155 1.3.4: avaliação multidisciplinar com história de álcool e drogas, exame físico e causas orgânicas, desenvolvimento e perturbações do neurodesenvolvimento.",
   "Na criança e no adolescente jovem, distinguir de fenómenos próprios da idade (amigo imaginário, 'monstro' debaixo da cama), de experiências reais (provocações, bullying) e de pensamento mágico; as alucinações são muitas vezes uma única voz que comenta ou comanda (CDDR).",
   "Considerar autismo e PHDA antes de atribuir a desorganização a psicose; antes da puberdade o início pleno é extremamente raro e é antecedido por declínio social e escolar, comportamento estranho e alteração do afeto (CDDR).",
   "Sintomas transitórios ou atenuados: referenciar sem demora para avaliação especializada; sintomas sustentados há 4 semanas ou mais: referenciação urgente (NICE CG155 1.2.1 e 1.3.1). Avaliar risco de dano para si ou para outros (risk-suic, risk-auto, risk-terc).",
   "Experiências psicóticas fugazes sem outros sintomas nem deterioração do funcionamento são comuns na população geral e não são esquizofrenia (CDDR)."
  ],
  "differential": [
   "Psicose induzida por substância ou medicamento (por exemplo canábis): CID-11 6C41.6 e equivalentes, a excluir primeiro",
   "Causa médica ou orgânica cerebral (NICE CG155 1.3.4)",
   "Episódio depressivo moderado ou grave, ou episódio maníaco ou misto, com sintomas psicóticos (CDDR)",
   "Perturbação esquizoafetiva (6A21)",
   "Perturbação psicótica aguda e transitória (6A23): sintomas flutuantes, sem sintomas negativos, duração até 3 meses (CDDR)",
   "Perturbação de stress pós-traumático (reexperiência com qualidade alucinatória) (CDDR)",
   "Autismo ou PHDA com pensamento ou comportamento desorganizado",
   "Sintomas de duração inferior a 1 mês: outra perturbação psicótica primária especificada (CDDR)"
  ],
  "comorbid": [
   "Depressão e ansiedade (NICE CG155 1.3.6)",
   "Consumo de substâncias (NICE CG155 1.3.6)",
   "Perturbação de stress pós-traumático (CDDR: ocorre frequentemente em conjunto)",
   "Autismo, deficiência intelectual ou perturbação da aprendizagem (CDDR: mais frequentes no início na infância)"
  ],
  "source": "ICD-11 CDDR secção 6A20 Schizophrenia (pp. 162-170; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf); NICE CG155, publicada 23/01/2013, última atualização 26/10/2016, https://www.nice.org.uk/guidance/cg155/chapter/Recommendations (rec. 1.2.1, 1.3.1, 1.3.4, 1.3.6). Parâmetro AACAP 2013 de esquizofrenia não lido nesta tarefa (descontinuado segundo a auditoria)."
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
   "Uso nocivo (episódio ou padrão): dano clinicamente significativo à saúde física ou mental do próprio (ou comportamento por intoxicação que prejudique a saúde de outros), com relação causal clara; padrão com pelo menos 12 meses se episódico, ou pelo menos 1 mês se contínuo (diário ou quase). Problemas sociais isolados (faltas, discussões) ou ressaca ligeira não bastam (CDDR).",
   "Dependência: padrão recorrente ou contínuo com regulação do consumo comprometida, em pelo menos 2 de: controlo diminuído; prioridade crescente do consumo apesar de dano; características fisiológicas de neuroadaptação (tolerância, abstinência, consumo para aliviar abstinência), geralmente evidente durante pelo menos 12 meses, ou pelo menos 3 meses se contínuo (CDDR). Nos adolescentes a dependência pode desenvolver-se mais depressa e a tolerância surgir rapidamente (CDDR).",
   "Consumo sem dano clínico é 'uso de risco' (capítulo 24), não perturbação (CDDR).",
   "Distinguir intoxicação, abstinência e perturbação induzida por substância de perturbação mental primária; excluir efeito de medicação prescrita.",
   "O rastreio estruturado (CRAFFT) está nos itens do domínio d-substancias (dsu-16 a dsu-18); aqui não foi relido. CID-11 vs DSM-5-TR: DSM-5-TR não consultado; seguiu-se a CID-11 (uso nocivo versus dependência)."
  ],
  "differential": [
   "Uso de risco sem dano clínico (CID-11, capítulo 24)",
   "Intoxicação, abstinência ou perturbação induzida por substância (humor, psicose)",
   "h-psicose-inicio-precoce",
   "Perturbação do humor, ansiedade, PHDA ou trauma como causa (automedicação) ou consequência",
   "Efeito de medicamentos prescritos"
  ],
  "comorbid": [
   "h-perturbacao-jogo-videojogos",
   "Perturbação do humor",
   "Perturbação de ansiedade",
   "PHDA",
   "Perturbação do comportamento",
   "Trauma"
  ],
  "source": "ICD-11 CDDR secção disorders due to substance use: padrão de uso nocivo (p. 459), dependência (pp. 463-464) e quadro de categorias por classe; texto lido na cópia do PDF https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf); AACAP, Facts for Families n.º 34 Sleep Problems (atualizado março 2023), https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Childrens-Sleep-Problems-034.aspx (sono). Guidelines clínicas de perturbação por uso de substâncias (AACAP 2026, NICE, NIDA, CRAFFT) não lidas nesta tarefa: prática clínica (sem fonte) para o que não consta do CDDR."
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
   "Divergência: o DSM-5-TR não reconhece o diagnóstico (condição para estudo posterior, segundo item dsu-26 de d-substancias; página da APA não relida aqui); seguiu-se a CID-11."
  ],
  "differential": [
   "Uso de risco ('hazardous gaming', QE22, capítulo 24): padrão com risco sem os outros critérios",
   "Jogo de apostas (6C50) se houver apostas com dinheiro",
   "PHDA ou autismo (explicam preferência por estímulos e regulação da atenção)",
   "Depressão ou ansiedade (o jogo como fuga ou regulação do humor)",
   "Mania ou hipomania",
   "Perturbação obsessivo-compulsiva",
   "Efeito de substância ou medicação"
  ],
  "comorbid": [
   "h-perturbacao-uso-substancias",
   "Perturbação do humor",
   "Perturbação de ansiedade",
   "PHDA",
   "Perturbação obsessivo-compulsiva",
   "Perturbações do sono"
  ],
  "source": "ICD-11 CDDR secção 6C51 Gaming disorder (pp. 511-515; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf)."
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
   "Perturbação involuntária da integração de funções motoras, sensoriais ou cognitivas, com duração de pelo menos várias horas (CDDR). Especificar: marcha, fraqueza, movimento, crises não epiléticas, visual, fala, sensorial; na criança e no adolescente predominam alterações da marcha e crises não epiléticas.",
   "Achados clínicos incompatíveis com doença do sistema nervoso ou outra condição médica: exige avaliação médica (por exemplo EEG normal durante uma crise aparente); referenciar a neuropediatria antes de concluir (CDDR).",
   "Excluir efeito de substância ou medicação, perturbação do sono (movimento rítmico, paralisia do sono isolada) e que os sintomas ocorram só durante outra perturbação dissociativa.",
   "Prejuízo significativo do funcionamento. Sintomas transitórios com ansiedade intensa ou alterações breves sem prejuízo não contam (CDDR).",
   "Perguntar por acontecimentos recentes (perdas, bullying, escola, conflito familiar), por doença física semelhante em familiares ou amigos e por famílias muito preocupadas com doença (CDDR).",
   "Não simulados ou provocados (distinguir de perturbação factícia ou simulação).",
   "Nota: 'perturbação neurológica funcional' é a designação usada na prática e no DSM-5; a CID-11 usa 6B60. DSM-5-TR não consultado. Nenhuma guideline pediátrica específica foi lida nesta tarefa."
  ],
  "differential": [
   "Doença neurológica (AVC, traumatismo craniano, epilepsia) e outra condição médica a excluir primeiro",
   "Tiques e tiques funcionais (a CID-11 descreve espasmo facial funcional semelhante a tiques) ",
   "h-perturbacao-sofrimento-corporal",
   "Perturbação de ansiedade, depressão, psicose ou perturbação de stress pós-traumático que expliquem os sintomas",
   "Amnésia dissociativa (se o défice for só de memória autobiográfica)",
   "Perturbação factícia ou simulação",
   "Perturbação do sono (movimento rítmico relacionado com o sono, paralisia do sono)"
  ],
  "comorbid": [
   "Depressão",
   "Ansiedade",
   "Outros sintomas médicos (CDDR: adolescentes)",
   "h-perturbacao-sofrimento-corporal"
  ],
  "source": "ICD-11 CDDR secção 6B60 Dissociative neurological symptom disorder (pp. 366-372; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf). A releitura do-11 e do-20 cita Kozlowska et al., Harv Rev Psychiatry 2023 (PMC9997641), que não li nesta tarefa."
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
   "Sintomas corporais persistentes: alguns sintomas presentes na maior parte dos dias durante pelo menos vários meses (por exemplo 3 meses ou mais), não necessariamente os mesmos.",
   "Atenção excessiva aos sintomas: preocupação persistente com a gravidade ou consequências, e/ou contactos repetidos com os serviços de saúde muito acima do necessário; mantém-se apesar de exame e reasseguramento adequados.",
   "Prejuízo significativo (pessoal, familiar, social, escolar).",
   "Em crianças e adolescentes os sintomas mais comuns são dor abdominal, náuseas, fadiga, cefaleias e dor musculoesquelética, geralmente um só sintoma recorrente; as respostas dos pais (preocupação excessiva) podem agravar ou prolongar (CDDR).",
   "Não melhor explicada por outra perturbação mental (psicose, humor, ansiedade); se houver perturbação do humor, só diagnosticar se a preocupação precede o episódio ou persiste após a remissão (CDDR).",
   "Excluir condição médica que explique os sintomas; se existir, o grau de atenção deve ser claramente excessivo face à sua gravidade (CDDR).",
   "Gravidade (ligeira, moderada, grave) pelo tempo e energia dedicados e pelo prejuízo (CDDR). DSM-5-TR (perturbação de sintomas somáticos) não consultado."
  ],
  "differential": [
   "Doença médica que explique os sintomas (a excluir primeiro)",
   "h-perturbacao-neurologica-funcional",
   "Perturbação depressiva com sintomas somáticos",
   "Perturbação de ansiedade generalizada ou de pânico",
   "Ansiedade de saúde (hipocondria): preocupação com ter doença grave, procura de reasseguramento (CDDR)",
   "Perturbação factícia imposta a si próprio"
  ],
  "comorbid": [
   "Depressão",
   "Ansiedade",
   "h-perturbacao-neurologica-funcional"
  ],
  "source": "ICD-11 CDDR secção 6C20 Bodily distress disorder (pp. 429-435; texto lido na cópia do PDF) https://www.who.int/publications/i/item/9789240077263 (texto lido na cópia com o mesmo ISBN 978-92-4-007726-3, https://www.drugsandalcohol.ie/41519/1/WHO_Clinical_descriptions_and_diagnostic_requirements_ICD-11.pdf). Sem guideline pediátrica lida: prática clínica (sem fonte) para a abordagem."
 }
];
