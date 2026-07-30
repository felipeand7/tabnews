# tabnews — laboratório com Next.js e testes

Projeto em estágio inicial usado para estudar a construção incremental de uma aplicação com Next.js, organização de código e testes automatizados.

## Estado atual

O repositório contém:

- uma página inicial mínima em Next.js;
- um módulo de calculadora com operação de soma;
- validação básica do primeiro argumento;
- três testes unitários com Jest;
- verificação de formatação com Prettier.

Este ainda não é um clone funcional do TabNews.

## Tecnologias

- Next.js 16
- React 18
- JavaScript
- Jest 29
- Prettier 3

## Como executar

Requisitos: Node.js e npm.

```bash
git clone https://github.com/felipeand-dev/tabnews.git
cd tabnews
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Testes e qualidade

```bash
npm test
npm run test:watch
npm run lint:check
```

> [!NOTE]
> O script `lint:fix` do `package.json` contém uma opção inválida e não deve ser usado até ser corrigido.

## Estrutura

```text
.
├── models/
│   └── calculadora.js
├── pages/
│   └── index.js
├── tests/
│   └── calculadora.test.js
└── package.json
```

## Próximos passos possíveis

- evoluir a página inicial;
- ampliar a validação do módulo;
- adicionar casos de teste;
- configurar integração contínua;
- documentar a arquitetura à medida que a aplicação crescer.

