DED+ Notas + Chamadas Widget — v1.3

O que tem:
- NOVO v1.3: lê a relação de alunos e a situação de matrícula direto da Visão Geral da Turma. Inclui remanejados e retira inativos da planilha exportada, com prévia e confirmação, sem apagar as notas salvas no widget.
- NOVO v1.3: permite acumular leituras quando o DED+ mostra apenas parte da lista durante a rolagem. Também é possível reiniciar a leitura de uma turma sem apagar notas nem chamadas.
- Lê planilhas de notas .xlsx/.csv e preenche notas no DED+.
- Lê uma atividade aberta em “Avaliações - Lançar Notas” e guarda NOME DO ALUNO + REGISTRO + NOTA.
- NOVO v1.2.2: na página “Visão Geral da Turma / Relatório Geral”, captura todos os alunos e TODAS as colunas visíveis, inclusive colunas de resumo como TOTAL DE NOTAS, NOTA FINAL, MÉDIA, TOTAL DE FALTAS, FREQUÊNCIA e SITUAÇÃO.
- CORREÇÃO v1.2.2: evita alunos/colunas duplicados quando o DED+ mantém cópias sticky/virtuais da tabela no DOM; a exportação também limpa duplicatas legadas compatíveis (ex.: “Lista 1” e “Lista 1 · 2”) sem apagar atividades realmente diferentes.
- CORREÇÃO v1.2.2: turmas equivalentes no formato do DED+ (ex.: “6º EF AF REG 2 (2026)” e “6º2”) são consolidadas em uma única aba no XLSX.
- CORREÇÃO v1.2.2: cabeçalho do XLSX fica congelado na primeira linha e com quebra de texto para melhorar a leitura de colunas longas.
- Na Visão Geral, usa os títulos das colunas como nomes das atividades e também guarda a pontuação máxima quando ela aparece no cabeçalho.
- Aceita notas com ponto ou vírgula (ex.: 8.5, 8,5, 1,50) sem transformar 5.0 em 50.
- Junta várias atividades da mesma turma em colunas e exporta tudo em um novo .xlsx.
- Se uma atividade já existir na planilha carregada, a captura do DED+ atualiza os alunos encontrados nessa atividade.
- “Não realizada”/NF é guardado como NF; célula sem nota continua vazia.
- Lê planilha de chamada com P/F e lança falta para quem está como F.
- Na tela de chamada do DED+, quando a falta é lançada clicando no ícone verde de presença, o widget reconhece esse ícone e clica nele.
- Exporta modelo de notas em branco.
- Exporta modelo de chamadas em branco, com abas por turma e menus P/F.
- Mantém exceções de nomes parecidos: Lavynna/Lavyna, Luis/Luiz, Sousa/Souza, Isabela/Isabella etc.
- Não clica em Salvar automaticamente no DED+.

DED+ → PLANILHA:

Opção A — atividade individual:
1. Abra no DED+ a tela “Avaliações - Lançar Notas” da atividade.
2. No widget, clique em “Ler notas desta página”.
3. O widget detecta turma, atividade, aluno, registro e nota.
4. “Não realizada” vira NF e campo sem nota fica vazio.

Opção B — Visão Geral da Turma:
1. Abra a página da turma onde aparece “Visão Geral da Turma” e o quadro “Relatório Geral”.
2. Selecione o trimestre desejado no DED+.
3. Clique em “Ler notas desta página”.
4. O widget lê a tabela inteira: nomes, registros, atividades e colunas de resumo disponíveis.
5. Cada coluna de dados do DED+ vira uma coluna na planilha da turma, inclusive TOTAL DE NOTAS e TOTAL DE FALTAS.
6. Clique em “Baixar planilha atualizada” para gerar o .xlsx.

Opção C — atualizar alunos da planilha:
1. Abra “Visão Geral da Turma” no DED+ e deixe a tabela de alunos carregada.
2. Na seção “Atualizar relação de alunos”, deixe ativadas as opções “Incluir remanejados” e “Retirar inativos da planilha”, ou ajuste-as como desejar.
3. Clique em “Ler alunos desta turma” e confira a prévia de inclusões e retiradas.
4. Se o DED+ mostrar a lista por partes, role a tabela e repita a leitura. As leituras são acumuladas, sem remover quem ainda não apareceu na tela.
5. Clique em “Aplicar atualização” e, depois, “Baixar planilha atualizada”.
6. Se precisar recomeçar uma conferência, use “Reiniciar leitura desta turma”. As notas e chamadas continuarão guardadas.
- Os remanejados ganham uma linha vazia nas atividades onde ainda não têm nota. Os alunos marcados como inativos ficam fora do novo XLSX.
- O XLSX inclui a coluna “SITUAÇÃO DA MATRÍCULA”, separada de qualquer coluna de situação acadêmica que já existia.
- O arquivo original não é sobrescrito e notas antigas não são apagadas do widget.

IMPORTANTE SOBRE A CAPTURA:
- A leitura é feita diretamente no DOM da página aberta e não envia os dados para servidor externo.
- O botão de leitura não altera notas no DED+; apenas copia os dados para o armazenamento local do widget.
- Se você já carregou uma planilha de notas, a captura é incorporada aos dados dela no widget.
- O navegador não sobrescreve o arquivo original: ele baixa um novo .xlsx.
- Na Visão Geral, colunas de resumo NÃO são ignoradas: TOTAL, TOTAL DE NOTAS, NOTA FINAL, MÉDIA, TOTAL DE FALTAS, FREQUÊNCIA, SITUAÇÃO e outras colunas visíveis também são capturadas.

Formato de notas:
- Aba por turma: 6º1, 6º2, 7º1...
- NOME DO ALUNO e REGISTRO/MATRÍCULA.
- Colunas de atividades: JEMG, PARTICIPAÇÃO, LISTA 1, PROVA, PROJETO etc.
- Ao IMPORTAR uma planilha para lançar notas no DED+, TOTAL, NOTA FINAL e OBSERVAÇÕES continuam sendo tratados como colunas auxiliares e não como atividades. Isso não afeta a captura da Visão Geral: nela, os resumos são exportados.

Formato de chamada:
- Aba por turma: 6º1, 6º2, 7º1...
- Linha com NOME DO ALUNO.
- Dias em colunas: 01, 02, 03... 31.
- Use P para presente e F para falta.
- O widget só lança falta por padrão. Existe uma opção para também marcar P como presente.
- Em telas onde o DED+ mostra um ícone verde de presença no canto direito, esse é o controle usado para virar falta.

Como instalar no Chrome/Edge:
1. Extraia o ZIP.
2. Abra chrome://extensions/ ou edge://extensions/.
3. Ative “Modo do desenvolvedor”.
4. Clique em “Carregar sem compactação”.
5. Selecione a pasta “extensao-ded-notas”.
6. Abra ou recarregue o DED+.

Como usar pelo Console:
1. Abra o DED+.
2. Aperte F12.
3. Aba Console.
4. Cole o arquivo manual/ded_notas_chamadas_widget_injetavel.js.
5. Use o widget normalmente.

Segurança:
- Tudo roda localmente no navegador.
- Nenhum arquivo é enviado para servidor.
- A leitura DED+ → planilha não salva nem altera a atividade no DED+.
- Sempre confira antes de usar “Preencher notas” e salvar no DED+.
