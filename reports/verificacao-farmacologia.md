# Verificação independente: questions/farmacologia.json

Critério: só o texto do item de origem (source/farmacologia.json, campos texto, dose, regulatorio_pt). Nenhum ficheiro de perguntas foi alterado.

Contagem: 14 OK, 8 AJUSTAR, 0 RETIRAR.

Todas as 10 perguntas de dose têm número, idade e duração conferidos com o campo `dose`, a opção `correct` sustentada e nenhum distrator válido. As alterações abaixo são de explicação, enunciado ou fonte.

| id | veredicto | motivo e alteração proposta |
|---|---|---|
| farmaco-bipolar-psicose-6-q1 (dose) | AJUSTAR | Resposta 10 mg correta (13 anos, RCM EMA, 2 mg, 5 mg, 10 mg, máx. 12 semanas). Na explicação, "doses mais altas associam-se a mais sintomas extrapiramidais, sonolência, fadiga e aumento de peso" generaliza: o item só diz isto de 30 mg/dia (e que doses acima de 10 mg só em casos excecionais). Alterar para "30 mg/dia associa-se a ..., e doses acima de 10 mg só em casos excecionais com monitorização". |
| farmaco-bipolar-psicose-34-q1 (dose) | OK | 0,5 a 3 mg/dia em 2 a 3 tomas, 13 a 17 anos, máx. 5 mg/dia: tudo no item. Os distratores ficam acima do máximo ou abaixo do intervalo. |
| farmaco-phda-tiques-11-q1 (dose) | AJUSTAR | 1,2 mg/kg/dia correto (RCM, até 70 kg). Na explicação, "2,4 mg/kg/dia ou mais duplicam ou triplicam": 4,8 é o quádruplo. Alterar para "duplicam, triplicam ou quadruplicam a dose de manutenção". O resto (início 0,5, 7 dias, limiar 1,8, CADDRA com teto diferente) está sustentado. |
| farmaco-phda-tiques-8-q1 (dose) | AJUSTAR | 18 mg correto (osmótico; +18 mg por semana; máx. 54 mg em crianças). O enunciado diz "Segundo o RCM", mas o campo `source` só cita NICE, AAP e Coghill, sem o RCM. Acrescentar ao `source` o RCM Infarmed do metilfenidato de libertação prolongada (consultado a 10/10/2026), referido em regulatorio_pt. Convém acrescentar o mesmo ao `source` do item de origem. |
| farmaco-sono-outros-16-q1 (dose) | OK | 120 µg ao deitar (sublingual 60/120 µg), aumentável a 240 µg, a partir dos 5 anos, até 3 meses, suspender sem efeito às 4 semanas: tudo no item. Os distratores 60, 180 e 360 µg não constam do esquema. |
| farmaco-sono-outros-4-q1 (dose) | OK | Slenyto: 2 mg iniciais, 5 mg se resposta inadequada, máx. 10 mg/dia, 30 min a 1 h antes de deitar, 2 a 18 anos com PEA. Corresponde ao item. |
| farmaco-humor-ansiedade-36-q1 (dose) | OK | Sertralina Farmoz, POC, 6 a 12 anos: 25 mg iniciais, 50 mg após 1 semana; 13 a 17 anos: 50 mg; máx. 200 mg. Corresponde ao item. |
| farmaco-humor-ansiedade-8-q1 (dose) | OK | Rótulo FDA, 12 anos ou mais, 10 mg iniciais, máx. 20 mg/dia, intervalo de pelo menos 3 semanas. O enunciado indica fonte e "não é dose portuguesa"; a explicação cita o estatuto PT corretamente. |
| farmaco-phda-tiques-39-q1 (dose) | AJUSTAR | Opção A correta (máx. 1 mg a cada 3 a 7 dias, TA e pulso). Na explicação, "rara encefalopatia hipertensiva" contradiz o item ("muito rara"): alterar para "muito rara". A frase "Passos maiores ou mais frequentes ... aproximam-se da suspensão abrupta" não está no item: remover ou reformular como "Os outros esquemas não são o da RCM". |
| farmaco-sono-outros-39-q1 (dose) | OK | 21 mg/24 h durante 6 semanas (adolescente de 12 a 17 anos segue o esquema do adulto; fase 2 14 mg/2 semanas, fase 3 7 mg/2 semanas; máx. 12 semanas). Enunciado algo pesado ("não é fumador moderado, ou seja ...") mas inequívoco; se se quiser, simplificar para "que fuma 15 cigarros por dia (10 ou mais)". |
| farmaco-sono-outros-15-q1 | AJUSTAR | Alarme é a 1.ª linha segundo o item (conselhos falharam, sem contraindicação ao alarme). A explicação afirma "O anticolinérgico só entra associado à desmopressina após avaliação por profissional", o que o item não diz (não menciona anticolinérgicos). Substituir por "o item não prevê anticolinérgico isolado como 1.ª linha". O resto da explicação está sustentado. |
| farmaco-humor-ansiedade-35-q1 | AJUSTAR | Opção D correta (12 a 18 anos: ISRS deve ser oferecido, licenciado = sertralina ou fluvoxamina, com TCC). A explicação diz "os antipsicóticos isolados são fármacos a não usar no TOC pediátrico", que o item não afirma (não menciona antipsicóticos). Alterar para "o item só prevê ISRS licenciado em combinação com TCC; não prevê antipsicótico isolado". |
| farmaco-phda-tiques-18-q1 | OK | Sem sinais de alarme nem fármaco de risco cardíaco, ECG não é necessário (NG87). Distratores errados. Nota menor: o item não menciona ecocardiograma, mas a opção é excluída pela regra do ECG. |
| farmaco-phda-tiques-47-q1 | OK | AAN: oferecer CBIT antes da medicação quando acessível; evidência de manutenção a partir dos 9 anos (doente com 11). Sustentado. |
| farmaco-humor-ansiedade-12-q1 | OK | Monitorização apertada de ideação suicida, autolesão, hostilidade e ativação, pelo prescritor e pelo psicoterapeuta; sustentado pelo item (NICE e AACAP). |
| farmaco-bipolar-psicose-23-q1 | OK | Programa de prevenção da gravidez (teste, contraceção, revisão especializada anual, formulário); sustentado. Explicação coerente com a RCM e a circular de 2018. Não é contraindicação sem exceções nem uso sem restrições. |
| farmaco-bipolar-psicose-61-q1 | OK | CAN basal igual ou superior a 1500/mm3, semanal nas primeiras 18 semanas, depois mensal nas 34 seguintes; AACAP diverge e a explicação di-lo. Nota menor: o item diz que a RCM não dá posologia pediátrica aos 16 a 17 anos, mas a monitorização não depende disso. |
| farmaco-humor-ansiedade-45-q1 | OK | NG116: não oferecer tratamentos farmacológicos abaixo dos 18 anos; sustentado, distratores adultos ou inventados. |
| farmaco-humor-ansiedade-9-q1 | AJUSTAR | Paroxetina e venlafaxina corretas. Na explicação, "Fluoxetina é a 1.ª linha e sertralina ou citalopram são a 2.ª linha" não consta deste item (só o item farmaco-humor-ansiedade-8 diz que a 2.ª linha é sertralina ou citalopram). Reformular para "fluoxetina, sertralina e citalopram não estão na lista de exclusão do NICE" ou citar o outro item. |
| farmaco-phda-tiques-30-q1 | AJUSTAR | Glaucoma é a única contraindicação listada. O item não menciona epilepsia nem ansiedade. A opção "Epilepsia, que exige apenas precaução" afirma algo não sustentado e denuncia a resposta: reescrever como "Epilepsia". A explicação diz "Na epilepsia usa-se com precaução" e "a ansiedade deve ser perguntada antes de iniciar": ambas ausentes do item. Substituir por "epilepsia e ansiedade não constam da lista de contraindicações do item". |
| farmaco-bipolar-psicose-21-q1 | OK | NICE: litemia de 6 em 6 meses depois do 1.º ano, 3 em 3 meses se houver fatores de risco; o enunciado exclui esses fatores e indica a fonte. A divergência com a RCM está registada no item e na explicação. |
| farmaco-sono-outros-21-q1 | OK | Restrição de líquidos desde 1 h antes da toma até à manhã seguinte e pelo menos 8 h depois; hiponatremia e raros casos de edema cerebral; pais e doente instruídos. Sustentado. |

## Nota de estilo (não altera veredictos)

O género de "RCM" varia entre perguntas ("a RCM" em atomoxetina, haloperidol, aripiprazol e guanfacina; "o RCM" em metilfenidato, desmopressina, Slenyto, sertralina e nicotina). Uniformizar para "a RCM".
