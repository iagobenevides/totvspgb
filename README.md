# Protheus - Projeto Cypress com TypeScript

Este projeto foi convertido de JavaScript para TypeScript para melhorar a experiência de desenvolvimento e adicionar tipagem estática.

## Estrutura do Projeto

```
protheus/
├── cypress/
│   ├── e2e/
│   │   └── login.cy.ts
│   ├── fixtures/
│   │   └── example.json
│   ├── pageObjects/
│   └── support/
│       ├── commands.ts
│       └── e2e.ts
├── cypress.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Mudanças Realizadas

### Arquivos Convertidos:
- `cypress.config.js` → `cypress.config.ts`
- `cypress/e2e/login.cy.js` → `cypress/e2e/login.cy.ts`
- `cypress/support/commands.js` → `cypress/support/commands.ts`
- `cypress/support/e2e.js` → `cypress/support/e2e.ts`

### Novos Arquivos:
- `tsconfig.json` - Configuração do TypeScript
- `README.md` - Documentação do projeto

### Dependências Adicionadas:
- `typescript` - Compilador do TypeScript
- `@types/node` - Tipos para Node.js

## Scripts Disponíveis

- `npm test` - Executa os testes do Cypress
- `npm run cypress:open` - Abre o Cypress em modo interativo
- `npm run cypress:run` - Executa os testes em modo headless

## Benefícios da Conversão

1. **Tipagem Estática**: Detecção de erros em tempo de compilação
2. **Melhor IntelliSense**: Autocompletar e navegação de código aprimorados
3. **Refatoração Segura**: Mudanças de código mais seguras
4. **Documentação Integrada**: Tipos servem como documentação
5. **Manutenibilidade**: Código mais fácil de manter e entender

## Como Usar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute os testes:
   ```bash
   npm test
   ```

3. Abra o Cypress em modo interativo:
   ```bash
   npm run cypress:open
   ```

## Configuração TypeScript

O arquivo `tsconfig.json` está configurado para:
- Target ES2020
- Módulos ESNext
- Strict mode habilitado
- Suporte a JSON modules
- Tipos do Cypress e Node.js incluídos
