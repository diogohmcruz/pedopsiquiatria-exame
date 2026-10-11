# Revisão final 5: farmacologia-5, farmacologia-6, farmacologia-7 (pacote source/farmacologia.json) e tratamento (pacote source/tratamentos.json)

Verificação independente com base apenas no texto dos itens (campos texto, dose, regulatorio_pt, resumo, quando, sessoes). 92 perguntas: 89 OK, 3 AJUSTAR, 0 RETIRAR. Nenhum ficheiro editado.

Perguntas de dose (farmacologia-5, 6 e 7): conferidos um a um números, idades e durações com o campo `dose` (litemia NICE 0,6 a 0,8 mmol/L; Liskonum 225 a 450 mg 2x/dia; risperidona 4 a 6 mg/dia, máx. 16, e 2,5 mg/dia no escalão 20 a 45 kg com 0,5 mg 4 dias, 1 mg, passos de 0,5, revisão às 3 a 4 e paragem às 6 semanas; olanzapina 5 a 10 mg inicial, máx. 20; quetiapina 25 mg 2x/dia, máx. 750; Camcolit 1 a 1,5 g/dia; fluoxetina 10 mg/dia a partir dos 8 anos; topiramato 25 a 150 mg/dia; melatonina 2 a 3 mg durante 1 a 2 semanas, máx. 10; oxibutinina libertação modificada máx. 15 mg/dia; imipramina 1,7 mg/kg/dia; olanzapina na anorexia 0,625 a 1,25 mg; fluoxetina Generis 10 mg/dia). Todos conferem; as idades das vinhetas (15, 16, 9, 10, 8, 9 e 14 anos) estão dentro das faixas dos itens.

Verificações da 2.ª passagem (a a d): (a) nenhuma opção reescrita passou a ser também correta ou ambígua; (b) as certas encurtadas continuam sustentadas pelo item e distintas dos distratores; (c) os distratores alongados contradizem ou não são sustentados pelo item; alguns têm remate absoluto que os denuncia ("sem qualquer vigilância nem seguimento posterior" em farmaco-bipolar-psicose-27, "Cerca de 5 anos, sempre" em farmaco-humor-ansiedade-31, "não dar qualquer aconselhamento dietético" em farmaco-phda-tiques-44), ponto menor sem alteração obrigatória; (d) nenhuma explicação refere posições de opções nem a palavra "item" (ocorrências de "primeira", "segunda", "certa", "opção", "A)" são "primeira linha", "segunda opinião", "incerta", "opção" genérico e "FFT-A)"). Todas as perguntas têm 4 opções distintas e índice `correct` válido. Sem DSM-5-TR nem CID-11 nestes ficheiros, logo sem questão de classificação nem de citação literal. Onde há várias fontes com valores diferentes (litemia NICE/RCM/BNFc, risperidona, olanzapina, duração do antipsicótico), os enunciados dizem qual fonte usam.

## farmacologia-5.json (24 perguntas)

| id | veredicto | motivo e alteração proposta |
|---|---|---|
| farmaco-bipolar-psicose-11-q1 | OK | OK |
| farmaco-bipolar-psicose-17-q1 | OK | OK |
| farmaco-bipolar-psicose-31-q1 | OK | OK |
| farmaco-bipolar-psicose-32-q1 | AJUSTAR | Explicação diz que 15 a 20 mg/dia é o "topo da gama de manutenção"; o item só fala em dose habitual 5 a 20 mg/dia, sem "manutenção". Novo texto da explicação: "O BNFc dá 5 a 10 mg/dia como dose inicial, com dose habitual de 5 a 20 mg/dia e máximo de 20 mg/dia. O intervalo de 15 a 20 mg/dia fica na parte alta da gama habitual, acima da dose inicial, e 20 a 30 mg/dia excede o máximo. Em Portugal a RCM não recomenda a olanzapina abaixo dos 18 anos." Opções e resposta mantêm-se. Restantes números (5 a 10 inicial, máx. 20, 12 a 17 anos) conferem. |
| farmaco-bipolar-psicose-33-q1 | OK | OK |
| farmaco-bipolar-psicose-46-q1 | OK | OK |
| farmaco-bipolar-psicose-49-q1 | OK | OK |
| farmaco-humor-ansiedade-4-q1 | OK | OK |
| farmaco-bipolar-psicose-9-q1 | OK | OK |
| farmaco-bipolar-psicose-36-q1 | OK | OK |
| farmaco-bipolar-psicose-2-q1 | OK | OK |
| farmaco-bipolar-psicose-10-q1 | OK | OK |
| farmaco-bipolar-psicose-19-q1 | OK | OK |
| farmaco-bipolar-psicose-25-q1 | OK | OK |
| farmaco-bipolar-psicose-27-q1 | OK | OK |
| farmaco-bipolar-psicose-28-q1 | AJUSTAR | Explicação: "a não ser em consulta com esse psiquiatra" sem antecedente (o psiquiatra não foi referido na explicação). Novo texto: "O NICE manda referenciar com urgência e não iniciar antipsicótico em cuidados primários, a não ser em consulta com o psiquiatra consultor com formação em infância e adolescência. As outras condutas fazem parte da abordagem recomendada, incluindo avaliação multidisciplinar abrangente e revisão do consumo de substâncias. A neuroimagem estrutural também não é de rotina." Resposta e opções sustentadas pelo item (rec. 1.3.1, 1.3.2, 1.3.4, 1.3.6). |
| farmaco-bipolar-psicose-38-q1 | OK | OK |
| farmaco-bipolar-psicose-45-q1 | OK | OK |
| farmaco-bipolar-psicose-44-q1 | OK | OK |
| farmaco-bipolar-psicose-18-q1 | OK | OK |
| farmaco-bipolar-psicose-60-q1 | OK | OK |
| farmaco-bipolar-psicose-66-q1 | OK | OK |
| farmaco-bipolar-psicose-40-q1 | OK | OK |
| farmaco-bipolar-psicose-37-q1 | OK | OK |

## farmacologia-6.json (24 perguntas)

| id | veredicto | motivo e alteração proposta |
|---|---|---|
| farmaco-humor-ansiedade-25-q1 | OK | OK |
| farmaco-humor-ansiedade-39-q1 | OK | OK |
| farmaco-humor-ansiedade-11-q1 | OK | OK |
| farmaco-humor-ansiedade-13-q1 | OK | OK |
| farmaco-humor-ansiedade-14-q1 | OK | OK |
| farmaco-humor-ansiedade-16-q1 | OK | OK |
| farmaco-humor-ansiedade-17-q1 | OK | OK |
| farmaco-humor-ansiedade-19-q1 | OK | OK |
| farmaco-humor-ansiedade-20-q1 | OK | OK |
| farmaco-humor-ansiedade-21-q1 | OK | OK |
| farmaco-humor-ansiedade-26-q1 | OK | OK |
| farmaco-humor-ansiedade-28-q1 | OK | OK |
| farmaco-humor-ansiedade-29-q1 | OK | OK |
| farmaco-humor-ansiedade-30-q1 | OK | OK |
| farmaco-humor-ansiedade-31-q1 | OK | OK |
| farmaco-humor-ansiedade-32-q1 | OK | OK |
| farmaco-humor-ansiedade-34-q1 | OK | OK |
| farmaco-humor-ansiedade-44-q1 | OK | OK |
| farmaco-humor-ansiedade-46-q1 | OK | OK |
| farmaco-phda-tiques-1-q1 | OK | OK. O texto do item só cita o NICE; o AAP consta da fonte da pergunta (KAS 5a, 4 anos ao 6.º aniversário), logo o enunciado é sustentado. |
| farmaco-phda-tiques-2-q1 | OK | OK |
| farmaco-phda-tiques-22-q1 | OK | OK |
| farmaco-phda-tiques-25-q1 | OK | OK |
| farmaco-phda-tiques-36-q1 | OK | OK |

## farmacologia-7.json (24 perguntas)

| id | veredicto | motivo e alteração proposta |
|---|---|---|
| farmaco-phda-tiques-42-q1 | OK | OK |
| farmaco-phda-tiques-44-q1 | OK | OK |
| farmaco-phda-tiques-45-q1 | OK | OK |
| farmaco-phda-tiques-46-q1 | OK | OK |
| farmaco-phda-tiques-50-q1 | OK | OK |
| farmaco-phda-tiques-59-q1 | OK | OK |
| farmaco-phda-tiques-62-q1 | OK | OK |
| farmaco-sono-outros-9-q1 | AJUSTAR | Explicação afirma que os AINEs "não são o hábito que exige ajuste de dose"; o item só diz que AINEs à noite podem suprimir a melatonina endógena, sem falar em ajuste de dose nem negá-lo. Novo texto: "O RCM refere que o tabagismo induz o metabolismo da melatonina (CYP1A2), pelo que começar ou parar de fumar pode exigir ajuste de dose. Os AINEs à noite são referidos apenas como supressores da melatonina endógena, sem indicação de ajuste de dose, e a fonte não refere cafeína nem jejum." Opções mantêm-se (a de AINEs não é suportada como causa de ajuste de dose). |
| farmaco-sono-outros-13-q1 | OK | OK |
| farmaco-sono-outros-14-q1 | OK | OK |
| farmaco-sono-outros-17-q1 | OK | OK |
| farmaco-sono-outros-24-q1 | OK | OK |
| farmaco-sono-outros-25-q1 | OK | OK |
| farmaco-sono-outros-34-q1 | OK | OK |
| farmaco-sono-outros-42-q1 | OK | OK |
| farmaco-sono-outros-44-q1 | OK | OK |
| farmaco-sono-outros-45-q1 | OK | OK |
| farmaco-sono-outros-46-q1 | OK | OK |
| farmaco-phda-tiques-58-q1 | OK | OK |
| farmaco-sono-outros-6-q1 | OK | OK |
| farmaco-sono-outros-18-q1 | OK | OK |
| farmaco-sono-outros-19-q1 | OK | OK |
| farmaco-sono-outros-26-q1 | OK | OK |
| farmaco-sono-outros-31-q1 | OK | OK |

## tratamento.json (20 perguntas)

| id | veredicto | motivo e alteração proposta |
|---|---|---|
| tx-monitorizacao-ativa-depressao-q1 | OK | OK |
| tx-tcc-digital-depressao-q1 | OK | OK |
| tx-tip-familiar-esc-depressao-q1 | OK | OK. TIP-F aos 5 a 11 anos (NG134 1.6.4); os outros intervalos não correspondem ao item. |
| tx-fft-a-bipolar-q1 | OK | OK. Versão completa 21 sessões em 9 meses (12+6+3) confere; a de 12 sessões em 4 meses é a curta (o enunciado diz "completa"). A referência ao CBIT na explicação vem do item do CBIT, exata. |
| tx-coping-cat-q1 | OK | OK |
| tx-intervencao-comportamental-mutismo-q1 | OK | OK |
| tx-emdr-pstp-q1 | OK | OK |
| tx-pact-q1 | OK | OK |
| tx-multimodal-mst-conduta-q1 | OK | OK |
| tx-fbt-arfid-q1 | OK | OK |
| tx-treino-parental-phda-pre-q1 | OK | OK |
| tx-cbt-ar-arfid-q1 | OK | OK |
| tx-tcc-epr-familiar-toc-5-8-q1 | OK | OK |
| tx-alarme-enurese-q1 | OK | OK |
| tx-tcc-luto-grief-help-q1 | OK | OK. 9 sessões com a criança e 5 com os pais, 8 a 18 anos e CBT-CTG com 12 sessões conferem. Sugestão cosmética opcional: na explicação, trocar "A opção de 12 sessões" por "O esquema de 12 sessões". |
| tx-cbit-q1 | OK | OK. 8 sessões em 10 semanas (6 semanais, 2 quinzenais), 3 reforços mensais, 9 a 17 anos conferem; 21 sessões (FFT-A) e 16 (Coping Cat) são de outros itens do pacote, exatos. |
| tx-incredible-years-q1 | OK | OK |
| tx-tcci-adolescentes-q1 | OK | OK |
| tx-comportamental-sono-pequenos-q1 | OK | OK |
| tx-programa-crianca-resolucao-problemas-q1 | OK | OK |
