DED+ Notas + Chamadas Widget

O que tem:
- Lê planilhas de notas .xlsx/.csv e preenche notas no DED+.
- Lê planilha de chamada com P/F e lança falta para quem está como F.
- Na tela de chamada do DED+, quando a falta é lançada clicando no ícone verde de presença, o widget reconhece esse ícone e clica nele.
- Exporta modelo de notas em branco.
- Exporta modelo de chamadas em branco, com abas por turma e menus P/F.
- Mantém exceções de nomes parecidos: Lavynna/Lavyna, Luis/Luiz, Sousa/Souza, Isabela/Isabella etc.
- Não clica em Salvar automaticamente no DED+.
- Não tem botão de rolagem automática. Você preenche a tela atual, confere e salva manualmente.

Formato de notas:
- Aba por turma: 6º1, 6º2, 7º1...
- Linha com NOME DO ALUNO.
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
3. Ative "Modo do desenvolvedor".
4. Clique em "Carregar sem compactação".
5. Selecione a pasta "extensao-ded-notas".
6. Abra o DED+.

Como usar pelo Console:
1. Abra o DED+.
2. Aperte F12.
3. Aba Console.
4. Cole o arquivo manual/ded_notas_chamadas_widget_injetavel.js.
5. Carregue a planilha no widget.

Segurança:
- Tudo roda localmente no navegador.
- Nenhum arquivo é enviado para servidor.
- Sempre confira antes de salvar no DED+.
