# 🎬 ApiFilmes — Explorador de Filmes

Aplicação web desenvolvida com **React + TypeScript + Vite** para consumo de API de filmes. Permite explorar, buscar e visualizar detalhes de filmes de forma rápida e moderna.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Função |
|---|---|---|
| [React](https://react.dev/) | ^18 | Biblioteca principal para construção da interface |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Tipagem estática e segurança no desenvolvimento |
| [Vite](https://vitejs.dev/) | ^5 | Bundler e servidor de desenvolvimento ultrarrápido |
| [ESLint](https://eslint.org/) | ^9 | Análise estática e padronização do código |

---

## 📁 Estrutura do Projeto

```
meu-projeto-react/
├── dist/                        # Build de produção (gerado automaticamente)
│   ├── assets/
│   ├── favicon.svg
│   ├── icons.svg
│   └── index.html
│
├── public/                      # Arquivos públicos estáticos
│
├── src/                         # Código-fonte principal
│   ├── assets/                  # Imagens, ícones e recursos estáticos
│   │
│   ├── components/              # Componentes reutilizáveis
│   │   └── MovieCard.tsx        # Card de exibição de filme
│   │
│   ├── page/                    # Páginas da aplicação
│   │   ├── Home.tsx             # Página inicial com listagem de filmes
│   │   └── MovieDetails.tsx     # Página de detalhes do filme
│   │
│   ├── services/                # Camada de comunicação com a API
│   │
│   ├── App.css                  # Estilos globais do componente App
│   ├── App.tsx                  # Componente raiz e configuração de rotas
│   ├── index.css                # Estilos globais da aplicação
│   └── main.tsx                 # Ponto de entrada da aplicação
│
├── .gitignore
├── eslint.config.js             # Configuração do ESLint
├── index.html                   # HTML base da aplicação
├── package.json                 # Dependências e scripts do projeto
├── package-lock.json
├── README.md
├── tsconfig.app.json            # Configuração TypeScript para a aplicação
├── tsconfig.json                # Configuração TypeScript raiz
├── tsconfig.node.json           # Configuração TypeScript para Node/Vite
└── vite.config.ts               # Configuração do Vite
```

---

## 🗂️ Arquitetura e Responsabilidades

### `src/components/`
Componentes reutilizáveis e independentes de contexto. Atualmente contém:
- **`MovieCard.tsx`** — Exibe o cartão de um filme com poster, título e informações resumidas. Utilizado na listagem da página Home.

### `src/page/`
Páginas completas da aplicação, cada uma correspondendo a uma rota:
- **`Home.tsx`** — Página principal. Lista os filmes consumidos da API, renderizando múltiplos `MovieCard`.
- **`MovieDetails.tsx`** — Página de detalhes. Exibe informações completas de um filme específico ao clicar em um card.

### `src/services/`
Camada de serviços responsável por toda a comunicação com a API externa de filmes. Centraliza as chamadas HTTP (fetch/axios), mantendo o restante da aplicação desacoplado da origem dos dados.

### `src/App.tsx`
Componente raiz que configura o roteamento entre as páginas `Home` e `MovieDetails`.

---

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) — versão 18 ou superior
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## 🛠️ Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/meu-projeto-react.git
cd meu-projeto-react
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API:

```env
VITE_API_KEY=sua_chave_api_aqui
VITE_API_BASE_URL=https://api.themoviedb.org/3
```

> ⚠️ Nunca versione o arquivo `.env`. Ele já está listado no `.gitignore`.

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| `npm run build` | Gera o build otimizado para produção na pasta `dist/` |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Executa o ESLint para verificar problemas no código |

---

## 🔌 API de Filmes

Este projeto consome uma API externa de filmes. A camada de integração está centralizada na pasta `src/services/`, o que facilita a troca ou atualização do provider da API sem impactar os componentes.

**Exemplo de endpoints utilizados:**

| Endpoint | Descrição |
|---|---|
| `/movie/popular` | Lista os filmes mais populares |
| `/movie/{id}` | Detalhes de um filme específico |
| `/search/movie` | Busca de filmes por título |

---
## 🔗 Acesso à aplicação

A API está disponível online no link abaixo:
👉 https://apifilmes-web.vercel.app/

---
## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature: `git checkout -b feature/minha-feature`
3. Commit suas alterações: `git commit -m 'feat: adiciona minha feature'`
4. Push para a branch: `git push origin feature/minha-feature`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">Feito com ❤️ usando React + TypeScript + Vite</p>
