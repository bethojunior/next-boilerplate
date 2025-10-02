# Sistema de Fiscalização Não Invasiva - ETUFOR

Sistema de fiscalização para transporte urbano de Fortaleza, desenvolvido com Next.js 15 e React 19.

## 🚀 Funcionalidades

### 1. Autenticação
- Login mocado (aceita qualquer usuário e senha)
- Interface responsiva para dispositivos móveis

### 2. Seleção de Fiscalização
- QR Code Nativo
- QR Code Fiscalização Municipal (ETUFOR)
- QR Code Sec. Transporte e Mobilidade (Prefeitura de Florianópolis)

### 3. Leitura de QR Code
- Scanner de câmera real para QR Code
- Detecção automática em 1 segundo
- Entrada manual de placa do veículo
- Interface intuitiva para fiscalização

### 4. Exibição de QR Code
- Visualização do QR Code para leitura
- Interface otimizada para dispositivos móveis

### 5. Resultado da Fiscalização
- Perfil do motorista e passageiro
- Detalhes da viagem e rota
- Informações do veículo
- Sistema de alertas e regularização
- Geração de relatórios
- Envio de notificações

## 🛠️ Tecnologias

- **Next.js 15** - Framework React
- **React 19** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **Radix UI** - Componentes acessíveis

## 📱 Interface

O sistema foi desenvolvido seguindo as especificações das imagens fornecidas:

1. **Tela de Login** - Credenciais do agente
2. **Seleção de Fiscalização** - Três opções de QR Code
3. **Scanner de QR Code** - Câmera e entrada manual
4. **Exibição de QR Code** - Para leitura
5. **Resultado da Fiscalização** - Perfis, detalhes e ações

## 🚀 Como Executar

```bash
# Instalar dependências
yarn install

# Executar em desenvolvimento
yarn dev

# Build para produção
yarn build

# Executar em produção
yarn start
```

## 📋 Passo a Passo de Uso

1. **Abrir app e entrar com credencial do agente**
2. **Selecionar "Fiscalização rápida"**
3. **Apontar câmera para QR Code do selo ETUFOR ou digitar placa manualmente**
4. **Aguardar retorno automático das informações da corrida**
5. **Conferir motorista, passageiro, trajeto e regularidade**
6. **Visualizar alertas; solicitar regularização, se aplicável**
7. **Gerar registro com data, hora e geolocalização**
8. **Exportar relatório ou enviar notificação padronizada**
9. **Encerrar fiscalização; próximo veículo com registro da fiscalização**

## 🎨 Design

- Interface limpa e minimalista
- Cores principais: Laranja (ETUFOR), Azul (botões), Verde (suporte)
- Otimizado para dispositivos móveis
- Componentes acessíveis e responsivos

## 📁 Estrutura do Projeto

```
app/
├── page.tsx                 # Página principal
├── layout.tsx              # Layout raiz
└── globals.css             # Estilos globais

components/
├── app-flow.tsx            # Fluxo principal da aplicação
├── login-page.tsx          # Tela de login
├── inspection-selection.tsx # Seleção de fiscalização
├── qr-scanner.tsx          # Scanner de QR Code
├── qr-display.tsx          # Exibição de QR Code
├── inspection-result.tsx   # Resultado da fiscalização
└── ui/                     # Componentes de interface
```

## 🔧 Configuração

O projeto está configurado para:
- Porta 3001 (fallback se 3000 estiver ocupada)
- TypeScript com configurações otimizadas
- ESLint e Prettier para qualidade de código
- Tailwind CSS para estilização