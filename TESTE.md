# 🧪 Instruções de Teste - Sistema de Fiscalização ETUFOR

## 🔑 Credenciais de Login
```
Qualquer e-mail e senha funcionam!
Exemplo:
E-mail: teste@teste.com
Senha: 123
```

## 📱 Fluxo de Teste Completo

### 1. **Login**
- Acesse: http://localhost:3001
- Use as credenciais acima
- Clique em "Entrar"

### 2. **Seleção de Fiscalização**
- Escolha uma das três opções:
  - **QR Code Nativo** (cinza)
  - **QR Code Fiscalização Municipal** (laranja - ETUFOR)
  - **QR Code Sec. Transporte e Mobilidade** (azul - Prefeitura)

### 3. **Scanner de QR Code**
- **Opção 1 - Câmera Real:**
  - Clique em "Ativar Câmera"
  - A câmera será aberta automaticamente
  - Aponte para um QR Code real
  - Em 1 segundo será redirecionado automaticamente
  - Use "Parar Câmera" se necessário
  - **⚠️ Mobile:** Precisa de HTTPS para funcionar

- **Opção 2 - Manual:**
  - Digite uma placa (ex: HXY-1234)
  - Clique em "BUSCA"
  - **✅ Sempre funciona** - Use esta opção se a câmera não funcionar

### 4. **Exibição de QR Code**
- Visualize o QR Code simulado
- Clique em "LEIA O QRCOD" para continuar

### 5. **Resultado da Fiscalização**
- **Perfis:** Motorista (Lucas Silva) e Passageiro (Maria Santos)
- **Rota:** Pickup e destino com distâncias e tempos
- **Veículo:** WV - POLO, HXY 1234, vistoriado em 2025
- **Alertas:** Status de conformidade
- **Ações:**
  - "Gerar Relatório" - Mostra dados da fiscalização
  - "Enviar Notificação" - Confirma envio
  - "NOVA CONSULTA" - Volta ao início

## 🎯 Dados Mocados Disponíveis

### Motorista
- Nome: Lucas Silva
- Veículo: Honda Civic-ABC-1234
- Viagens: 1,226
- Avaliação: 4.9★
- Anos: 2

### Passageiro
- Nome: Maria Santos
- Veículo: Honda Civic-ABC-1234
- Viagens: 856
- Avaliação: 4.7★
- Anos: 1

### Veículo
- Modelo: WV - POLO
- Ano: 2025/2025
- Placa: HXY 1234
- Status: VISTORIADO EM 2025
- Plataforma: UBER

### Rota
- **Pickup:** R. Nunes Valente, 980 - Aldeota, Fortaleza - CE
- **Destino:** R. Matos Vasconcelos, 213 - Bela Vista, Fortaleza - CE
- **Distância:** 3.3 km (12 min) → 9.20 km (25 min)

## 🚀 Como Executar

```bash
# Instalar dependências
yarn install

# Executar em desenvolvimento
yarn dev

# Acessar no navegador
http://localhost:3001
```

## 📋 Checklist de Teste

- [ ] Login com credenciais corretas
- [ ] Login com credenciais incorretas (deve mostrar alerta)
- [ ] Seleção de cada tipo de fiscalização
- [ ] Scanner por câmera (simulação)
- [ ] Scanner manual com placa
- [ ] Visualização de QR Code
- [ ] Navegação entre todas as telas
- [ ] Geração de relatório
- [ ] Envio de notificação
- [ ] Nova consulta

## 🎨 Recursos Visuais

- Interface responsiva para mobile
- Cores oficiais ETUFOR (laranja)
- Animações de loading
- Alertas e notificações
- Dados realistas para teste

## 🔧 Funcionalidades Implementadas

✅ **Autenticação** - Login com validação  
✅ **Seleção** - Três tipos de fiscalização  
✅ **Scanner** - Câmera e entrada manual  
✅ **QR Code** - Exibição para leitura  
✅ **Resultado** - Perfis, rota, veículo, alertas  
✅ **Relatórios** - Geração e exportação  
✅ **Notificações** - Envio simulado  
✅ **Navegação** - Fluxo completo funcional  

---

**Status:** ✅ Sistema 100% funcional para teste
