# Pedopsiquiatria — Estudo para o exame — Glossário

Linguagem partilhada do projeto: um site de estudo para um exame teórico de pedopsiquiatria. O conteúdo clínico vem do projeto `pedopsiquiatria` (a ferramenta de apoio à consulta), copiado para aqui e mantido de forma independente.

## Termos

**Estudante**
Único utilizador do site: o médico que se prepara para o exame. Usa o site sozinho, no seu browser.

**Exame**
Prova teórica de pedopsiquiatria. Tem vários tipos de pergunta; o site começa pelas de escolha múltipla.

**Pergunta de exame**
Pergunta de escolha múltipla com quatro opções, uma só certa, uma explicação e uma **fonte** citada. Nasce de um item de conteúdo e guarda o seu identificador.

**Banco de perguntas**
Conjunto fixo de perguntas de exame, gerado a partir dos itens de conteúdo e guardado como dados.

**Item de conteúdo**
Unidade de conteúdo clínico (critério, hipótese, opção de tratamento, fármaco, escala) com fonte e estado rascunho ou validado. Só entra no banco se tiver fonte citada.

**Fonte**
Guideline, manual ou documento de onde vem um item (NICE, AACAP, AAP, CID-11, RCM…). Mostrada ao estudante depois de cada resposta.

**Tema**
Categoria de uma pergunta de exame: Hipóteses, Tratamento, Farmacologia ou Critérios (critérios, diferencial, comorbilidades e sinais de alerta de cada domínio, revistos contra o DSM-5-TR e a CID-11). Aparece no título de cada pergunta e nos gráficos.

**Quiz**
Sessão de estudo com 10 perguntas de todo o banco misturadas, sem cronómetro e sem desconto por resposta errada. Depois de cada resposta o estudante vê logo se acertou. Dá prioridade às perguntas não vistas, depois às erradas da última vez.

**Histórico de erradas**
Registo, guardado no browser, das perguntas que o estudante já errou. Sobrevive a vários quizzes e pode ser exportado, com enunciado, resposta dada, resposta certa e fonte. Treinar só as erradas fica para uma fase futura.

**Id de pergunta**
Identificador estável de uma pergunta, derivado do item de origem e de um número de variante. Uma correção mantém o id; se a resposta certa mudar, o histórico dessa pergunta é reposto.

**Revisão final**
Ecrã no fim do quiz com todas as perguntas: primeiro as erradas, abertas com a resposta certa e a explicação; depois as certas, colapsadas.

**Sinalização**
Marca "isto parece errado" posta pelo estudante numa pergunta, com nota opcional. Fica guardada e exportável para corrigir o banco, e a pergunta deixa de sair nos quizzes até ser corrigida.

**Lacuna**
Parte do conteúdo conhecida como em falta ou por confirmar. Hoje: o conteúdo de origem ainda não foi validado item a item pelo médico (continua em rascunho), embora os critérios dos domínios e das hipóteses diagnósticas já tenham sido revistos contra o DSM-5-TR e a CID-11.
