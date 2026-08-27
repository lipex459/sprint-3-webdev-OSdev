# Jovi · Modo Estudo

Projeto da FIAP para a **Sprint 3 — Web Development**, feito com **React + Vite**.

Esta versão simples permite escrever resumos das aulas, salvar no navegador e sortear um material para revisar. Não é um aplicativo oficial da Jovi. O código está sem comentários; as explicações estão neste README.

## Tecnologias

- React: componentes, props e `useState`.
- Vite: execução e compilação do projeto.
- JavaScript, HTML/JSX e CSS comum.
- localStorage: guardar a lista no navegador.
- Math.random e Math.floor: sortear um material.

Não há `useEffect`, cronômetro, câmera, upload de fotos, flashcards, API, banco de dados ou login.

## Como executar

Instale o [Node.js](https://nodejs.org/), versão **22.13 ou superior**. O npm vem junto. O projeto foi testado com Node 24.14.1.

Extraia o ZIP, abra a pasta `jovi-modo-estudo` no VS Code e execute no terminal dessa pasta:

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal, normalmente `http://127.0.0.1:5173/`. Não abra o `index.html` por duplo clique. Para parar, pressione **Ctrl + C**.

Para usar exatamente as versões do arquivo `package-lock.json`, você pode instalar com `npm ci` no lugar de `npm install`.

Para gerar a versão de produção:

```bash
npm run build
```

O resultado fica na pasta `dist`. Para conferir essa versão, execute `npm run preview` e abra o endereço informado no terminal.

## Usuário e senha

Não são necessários. O projeto não possui autenticação.

## Como testar

1. Escreva um título e um resumo e clique em **Salvar material**.
2. Confira se o material apareceu na lista.
3. Recarregue a página e veja que o material continua salvo.
4. Cadastre outro material e clique em **Sortear para revisar**.
5. Clique em **Excluir** e teste cancelar e confirmar a exclusão.

No primeiro acesso, a lista fica vazia. O botão de sorteio só funciona quando há materiais. Um sorteio pode repetir o material anterior.

## Organização do código

```text
src/
├── components/
│   ├── Cabecalho.jsx
│   ├── Conteudo.jsx
│   └── Rodape.jsx
├── App.jsx
├── main.jsx
└── style.css
```

| Arquivo | O que faz |
| --- | --- |
| `main.jsx` | Coloca o React na página. |
| `App.jsx` | Guarda a lista e as funções de salvar, adicionar, excluir e sortear. |
| `Cabecalho.jsx` | Mostra o nome do projeto e os links da página. |
| `Conteudo.jsx` | Mostra o formulário e a lista de materiais. |
| `Rodape.jsx` | Mostra as informações finais. |
| `style.css` | Define a aparência em preto e dourado. |

O `App` é o componente pai e envia a lista e as funções para `Conteudo` por **props**. Cada componente é uma função em um arquivo separado, ligado aos outros por **import/export**.

**`useState`** guarda informações que mudam, como a lista, o título e o resumo. **`map`** mostra os materiais na tela. **`filter`** cria uma lista sem o item excluído. **`...`** copia os itens da lista para acrescentar um novo material sem alterar diretamente o estado anterior.

O **localStorage** guarda texto. Usamos `JSON.stringify` para transformar a lista em texto e `JSON.parse` para ler a lista de volta. `try/catch` evita que uma falha de armazenamento quebre a página.

**Math.random** sorteia um número, e **Math.floor** arredonda para baixo. Juntos, eles escolhem a posição de um material na lista.

Esses pontos demonstram os requisitos de componentes funcionais, relação de pai para filho, armazenamento local e operações com Math.

## Limitações

Os resumos são escritos pelo aluno. Esta versão não tira fotos, não usa Gemini, não gera resumos automaticamente e não bloqueia outros aplicativos. Essas funções pertencem à proposta futura do Jovi · Modo Estudo.

Os dados ficam na chave `jovi-materiais`, somente neste navegador e neste endereço. Não são sincronizados entre aparelhos. Limpar os dados do navegador pode apagar os materiais. Se o salvamento falhar, um aviso é mostrado e a alteração não é aplicada.

Materiais válidos da versão anterior continuam sendo lidos. Fotos e flashcards antigos não são exibidos nesta versão; seus dados não são apagados automaticamente. Novos materiais possuem apenas título e resumo.

O protótipo HTML das sprints anteriores não foi fornecido. Esta é uma implementação baseada na descrição do projeto; confira com o protótipo original antes da entrega.

## GitHub e Vercel

**Link do repositório GitHub:** https://github.com/lipex459/sprint-3-webdev-OSdev

**Link do deploy na Vercel:** https://sprint-3-webdev-osdev.vercel.app

O projeto está publicado no GitHub e na Vercel. Para publicar uma cópia, envie o código para o GitHub sem a pasta `node_modules`, importe o repositório na Vercel e confira:

- Framework: **Vite**.
- Comando de build: **`npm run build`**.
- Pasta de saída: **`dist`**.

O arquivo `vercel.json` já contém essa configuração. Não são necessárias variáveis de ambiente. A publicação foi feita no espaço Atlas, com a branch `main` do repositório acima.

Referências: [React](https://react.dev/learn), [Vite](https://vite.dev/guide/) e [Vite na Vercel](https://vercel.com/docs/frameworks/frontend/vite).

## Uso de IA no desenvolvimento

Foi utilizado o Codex, da OpenAI, como apoio para criar e simplificar os componentes, escrever os estilos, implementar o armazenamento e o sorteio, testar e preparar a documentação. O aluno forneceu a proposta do Jovi · Modo Estudo e pediu uma versão adequada a quem está começando em React. A IA não está integrada ao aplicativo. A equipe deve revisar, entender e adaptar o código antes de apresentá-lo.

## Entrega

Confira os nomes e RMs em `INTEGRANTES.TXT` e os links acima antes da entrega. O ZIP inclui o código, os arquivos de configuração, `package.json`, `package-lock.json`, `README.md` e `INTEGRANTES.TXT`. Não inclua `node_modules`, `dist` ou `.git`.

O enunciado pede um único ZIP, entregue por apenas um integrante.
