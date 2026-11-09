# ecommerceTest

Projeto de estudo de um e-commerce full-stack com AdonisJS, React e Vite. Está em desenvolvimento: por enquanto tem a autenticação de usuários e o começo da interface da loja.

## Funcionalidades

**Backend (`backend/`)**
- Cadastro de usuário com validação (e-mail único, senha de 8 a 32 caracteres e confirmação de senha)
- Login e logout com sessão
- Rotas restritas a visitantes (cadastro e login) e a usuários autenticados (logout), separadas por middleware
- Páginas renderizadas com Inertia + React, com SSR
- Banco SQLite via Lucid ORM

**Frontend (`frontend/`)**
- App React + Vite separado, com o componente de cabeçalho da loja (busca, menu, botões de conta e categorias)

## Tecnologias

- **Backend:** AdonisJS 7, Inertia.js, React 19, Lucid ORM, SQLite (better-sqlite3), VineJS e TypeScript
- **Frontend:** React 19, Vite e TypeScript

## Como rodar

Requer Node.js 24 ou mais recente.

### Backend

```bash
cd backend
npm install
cp .env.example .env
node ace generate:key
node ace migration:run
npm run dev
```

A aplicação sobe em http://localhost:3333.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Licença

[MIT](LICENSE)
