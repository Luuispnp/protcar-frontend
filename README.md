# ProtCar - Front-end

Landing page de conversão para captação de leads de proteção veicular, com botão de cotação que envia os dados do cliente (Nome, Telefone e E-mail) para a API, e um painel administrativo protegido onde a equipe de vendas consulta os leads recebidos.

## Stack

| Camada | Tecnologias |
|---|---|
| Framework | React + Vite |
| Estilização | Tailwind CSS v4 |
| Requisições HTTP | Axios |
| Roteamento | React Router Dom |
| Ícones | Lucide React |
| Infraestrutura | AWS S3 + CloudFront |

## Estrutura

```
front-end/
└── src/
    ├── components/      componentes de UI
    ├── pages/            LandingPage, AdminPanel, Login
    └── services/         cliente Axios (api.js)
```

## Como rodar localmente

### Pré-requisitos
- Node.js (LTS)
- API do back-end rodando (veja o README do back-end)

### Passos

```bash
npm install
npm run dev
```

Por padrão, disponível em `http://localhost:5173`.

Configure a URL da API em `src/services/api.js` conforme o ambiente (local ou produção).

## Deploy

Build gerado via `npm run build`, publicado no Amazon S3 e servido pelo CloudFront, com fallback de rotas (404) apontando para `index.html`.

## Licença

Desenvolvido sob medida para a ProtCar - Associação de Benefícios. Todos os direitos reservados.
