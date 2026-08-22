DED+ Notas + Chamadas Widget — v1.1.0

O que tem:
- Lê planilhas de notas .xlsx/.csv e preenche notas no DED+.
- NOVO: lê a atividade que está aberta no DED+ e guarda NOME DO ALUNO + REGISTRO + NOTA na planilha do widget.
- NOVO: junta várias atividades da mesma turma em colunas e exporta tudo em um novo .xlsx.
- NOVO: se a atividade já existir na planilha carregada, a captura do DED+ atualiza os alunos encontrados nessa atividade.
- “Não realizada” é guardado como NF; campo sem nota continua vazio.
- Lê planilha de chamada com P/F e lança falta para quem está como F.
- Na tela de chamada do DED+, quando a falta é lançada clicando no ícone verde de presença, o widget reconhece esse ícone e clica nele.
- Exporta modelo de notas em branco.
- Exporta modelo de chamadas em branco, com abas por turma e menus P/F.
- Mantém exceções de nomes parecidos: Lavynna/Lavyna, Luis/Luiz, Sousa/Souza, Isabela/Isabella etc.
- Não clica em Salvar automaticamente no DED+.

DED+ → PLANILHA (NOVO):
1. Abra no DED+ a tela “Avaliações - Lançar Notas” da atividade que você quer copiar.
2. No widget, clique em “Ler atividade do DED”.
3. O widget detecta a turma e o título da atividade e lê os cartões dos alunos.
4. Para cada aluno ele guarda:
   - nome;
   - registro/matrícula quando estiver visível;
   - nota da atividade;
   - NF quando “Não realizada” estiver marcado.
5. Abra outras atividades e repita “Ler atividade do DED”. Elas viram novas colunas da mesma turma.
6. Clique em “Baixar planilha atualizada” para gerar o .xlsx com abas por turma.

IMPORTANTE SOBRE A CAPTURA:
- O widget lê os alunos que estão presentes no DOM da página do DED+.
- Ele não altera nenhuma nota ao usar “Ler atividade do DED”; apenas copia os dados para o armazenamento local do widget.
- Se você já carregou uma planilha de notas, a captura é incorporada aos dados dela no widget e o download sai como uma versão atualizada.
- O navegador não sobrescreve o arquivo original no seu computador: ele baixa um novo .xlsx.

Formato de notas:
- Aba por turma: 6º1, 6º2, 7º1...
- Linha com NOME DO ALUNO.
- REGISTRO/MATRÍCULA é aceito e ignorado como coluna de atividade.
- Colunas de atividades depois do nome: JEMG, PROJETO, TRABALHO, PROVA etc.
- TOTAL, NOTA FINAL e OBSERVAÇÕES são ignoradas.

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
