# Resumo Fiscal · EFD ICMS/IPI

Ferramenta em **um único arquivo HTML** para montar o **"Resumo análise"** de um estabelecimento a partir dos dados do **CADESP** e de um ou mais arquivos **EFD ICMS/IPI (SPED Fiscal)**.

**Abrir online:** https://SEU-USUARIO.github.io/resumo-fiscal/

## Privacidade

- Tudo roda **no navegador de quem usa**: dados do CADESP, prints e arquivos EFD **não são enviados** para servidor nenhum — nem para o GitHub. A própria página bloqueia conexões de rede (Content Security Policy).
- Este repositório guarda **apenas a ferramenta** e um EFD **fictício** de exemplo (`EFD-exemplo.txt`).
- **Não envie para cá EFDs reais, prints, PDFs ou planilhas de clientes.** O `.gitignore` já bloqueia esses tipos de arquivo por segurança.

## Como usar

1. **Dados CADESP** — cole o texto da consulta ou anexe o print (o texto é lido por OCR no próprio navegador). A **Delegacia** é preenchida automaticamente pela tabela de Postos Fiscais.
2. **Anexos** — prints do CADESP como evidência.
3. **Arquivos EFD** — um ou vários meses (ex.: os últimos 3 a 5). O resumo sai totalizado e mês a mês.
4. **Gerar resumo** → **Baixar PDF** (Identificação + Resumo mês a mês), **Copiar resumo** ou **Exportar CSV**.
5. **Limpar e recomeçar** zera tudo para um novo processo.

Para testar sem dados reais, carregue o `EFD-exemplo.txt`.

## O que o resumo traz

- Cartões: ICMS próprio, ICMS-ST, DIFAL/FCP, total e média mensal a recolher, saldo credor a transportar
- Apuração do ICMS próprio (E110/E111)
- ICMS-ST por UF (E200/E210/E220) e DIFAL/FCP por UF (E300/E310/E311)
- Obrigações a recolher resumidas (E116/E250/E316)
- Validações automáticas: E116 × E110, E250 × E210, E111 × E110, recálculos, saldo credor entre meses, meses faltando, retificadoras, CNPJ/IE do EFD × CADESP
- Resumo mês a mês com total e média

## Atualizar a ferramenta

Substitua o `index.html` pela nova versão, faça *commit* e *push*. O link é atualizado em cerca de 1 minuto.

## Componentes de terceiros

O OCR usa **Tesseract.js 7.0.0**, **tesseract.js-core 6.1.2** e o modelo de idioma português (**@tesseract.js-data/por 4.0.0_best_int**), todos sob licença **Apache-2.0**, embutidos no `index.html`.
