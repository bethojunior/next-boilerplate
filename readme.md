# Next.js Boilerplate

Um boilerplate simples e completo para iniciar projetos Next.js de forma rápida e fácil. Este projeto utiliza Next.js 15.2 com React 19, TypeScript, Tailwind CSS e uma série de componentes UI prontos para uso.

## 🚀 Tecnologias

- **Next.js** 15.2.4
- **React** 19
- **TypeScript** 5
- **Tailwind CSS** 3.4
- **shadcn/ui** - Componentes UI baseados em Radix UI
- **Next Auth** 4.24 - Autenticação
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Axios** - Cliente HTTP
- **Framer Motion** - Animações
- **Docker** - Containerização

## 📦 Estrutura do Projeto

```
next-boilerplate/
├── app/                    # App Router do Next.js
│   ├── (auth)/            # Rotas de autenticação
│   │   ├── login/
│   │   ├── registro/
│   │   └── esqueci-senha/
│   ├── (dashboard)/       # Rotas do dashboard
│   │   ├── dashboard/
│   │   └── configuracoes/
│   └── layout.tsx
├── components/            # Componentes React
│   ├── ui/               # Componentes shadcn/ui
│   └── ...
├── hooks/                # Custom hooks
├── lib/                  # Utilitários
├── providers/            # Context providers
├── services/             # Serviços (API, auth, etc.)
├── infra/                # Configuração Docker
│   ├── Dockerfile
│   └── docker-compose.yaml
└── makefile              # Comandos Docker simplificados
```

## 🛠️ Instalação

### Pré-requisitos

- Node.js 20 ou superior
- Yarn (gerenciador de pacotes configurado)
- Docker e Docker Compose (para ambiente containerizado)

### Instalação Local

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd next-boilerplate
```

2. Instale as dependências:
```bash
yarn install
```

3. Execute o projeto em modo desenvolvimento:
```bash
yarn dev
```

4. Acesse `http://localhost:3000`

## 🐳 Docker

O projeto inclui configuração Docker para facilitar o deploy e desenvolvimento. Os arquivos Docker estão localizados na pasta `infra/`.

### Comandos Disponíveis

O Makefile fornece comandos simplificados para trabalhar com Docker:

#### Build da imagem
```bash
make build
```

#### Iniciar containers
```bash
make up
```

#### Parar containers
```bash
docker-compose -f infra/docker-compose.yaml down
```

#### Ver logs
```bash
docker-compose -f infra/docker-compose.yaml logs -f
```

### Configuração Docker

- **Porta**: A aplicação roda na porta `3001` no container
- **Ambiente**: Produção por padrão no Docker
- **Base Image**: Node.js 20 Alpine (otimizada para produção)

## 📝 Scripts Disponíveis

```bash
yarn dev      # Inicia servidor de desenvolvimento
yarn build    # Cria build de produção
yarn start    # Inicia servidor de produção
yarn lint     # Executa o linter
```

## 🎨 Componentes UI

Este boilerplate inclui uma biblioteca completa de componentes baseados em **shadcn/ui** e **Radix UI**:

- Accordion, Alert, Avatar, Badge
- Button, Card, Checkbox, Dialog
- Dropdown Menu, Form, Input, Label
- Select, Switch, Tabs, Toast
- E muitos outros...

Todos os componentes estão em `components/ui/` e podem ser facilmente customizados.

## 🔐 Autenticação

O projeto inclui estrutura básica de autenticação com Next Auth:

- Páginas de login, registro e recuperação de senha
- Middleware de autenticação
- Provider de autenticação configurado

## 🎯 Funcionalidades

- ✅ Next.js 15.2 com App Router
- ✅ TypeScript configurado
- ✅ Tailwind CSS com tema customizável
- ✅ Componentes UI prontos (shadcn/ui)
- ✅ Sistema de autenticação básico
- ✅ Layout responsivo com sidebar
- ✅ Dark mode (next-themes)
- ✅ Formulários com validação (React Hook Form + Zod)
- ✅ Docker configurado
- ✅ Estrutura de pastas organizada

## 📚 Próximos Passos

1. Configure suas variáveis de ambiente (`.env.local`)
2. Ajuste as rotas de autenticação conforme necessário
3. Customize os componentes UI em `components/ui/`
4. Configure seu banco de dados
5. Adicione suas APIs em `providers/api/`

## 🤝 Contribuindo

Este é um boilerplate para uso pessoal/profissional. Sinta-se livre para adaptar conforme suas necessidades.

## 📄 Licença

Este projeto é um boilerplate de uso livre.

---

**Desenvolvido para facilitar o início de novos projetos Next.js** 🚀

