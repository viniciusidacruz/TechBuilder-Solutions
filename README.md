# Monorepo - TechBuilder

Este é um monorepo que contém tanto o código do backend quanto o código do frontend para o projeto "TechBuilder". O objetivo deste repositório é organizar e gerenciar o desenvolvimento do sistema como um todo.

## Estrutura de Pastas

### 1. Pasta "api"

A pasta "api" contém todo o código relacionado ao backend do projeto. Aqui estão algumas subpastas e seus propósitos:

- EM DEFINIÇÃO

### 2. Pasta "web"

A pasta "web" contém todo o código relacionado ao frontend do projeto. Aqui estão algumas subpastas e seus propósitos:

- **`src/`**: Contém o código-fonte do frontend, incluindo componentes, páginas, estilos, etc.
- **`public/`**: Armazena arquivos estáticos que serão servidos publicamente, como imagens ou arquivos de índice.
- **`tests/`**: Contém testes unitários ou de integração para o frontend.

## GitFlow e Conventional Commits

Para manter um fluxo de trabalho eficiente e padronizado, este projeto adota o GitFlow como estratégia de ramificação e Conventional Commits para mensagens de commit. Aqui está uma breve explicação de ambos:

### GitFlow

O GitFlow é um modelo de ramificação que ajuda a organizar o desenvolvimento em diferentes estágios. As branches principais são:

- **`main`**: Contém o código de produção estável.
- **`develop`**: É a branch de desenvolvimento, onde as features são mescladas antes de serem lançadas.
- **`feature/`**: Branches de features para o desenvolvimento de novas funcionalidades.

Este modelo facilita o gerenciamento de versões e a integração de novos recursos de forma controlada.

### Conventional Commits

Conventional Commits é uma convenção para mensagens de commit que segue um padrão específico. As mensagens de commit seguem o formato:

Exemplos:

- `feat(api): adiciona endpoint para login`
- `fix(web): corrige estilo no botão de envio`

O uso de mensagens de commit convencionais facilita a geração de changelogs automáticos e a compreensão do histórico de alterações.

## Como Começar

1. **Backend (api)**:

   - EM DEFINIÇÃO

2. **Frontend (web)**:
   - Navegue até a pasta `web/`.
   - Execute `nvm use` para usar a versão correta do node
   - Execute `bun install` para instalar as dependências.
   - Execute `bun dev` para iniciar a aplicação frontend.

Certifique-se de seguir as instruções acima para configurar e iniciar tanto o backend quanto o frontend. Qualquer dúvida ou problema, consulte a documentação específica em cada pasta.

## Contribuição

Se você deseja contribuir para este projeto, consulte o arquivo CONTRIBUTING.md para obter informações sobre como ajudar no desenvolvimento.

---

Esperamos que este README ajude a entender a estrutura do monorepo e facilite o desenvolvimento, testes e colaboração no projeto "TechBuilder".
