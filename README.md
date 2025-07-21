# automationExercise

Projeto de automação de testes utilizando **Cypress** com **Cucumber (BDD)**, focado em testes para aplicações **Web (UI)** e **API**.

---

## ✅ Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado na sua máquina:

- [Node.js](versão 14 ou superior)
- [Git]
- Um terminal (ex: Git Bash, CMD, Terminal do VSCode)

---

## 🚀 Como clonar o projeto

1. Abra o terminal.
2. Navegue até a pasta onde deseja salvar o projeto.
3. Execute os comandos:
```bash
git clone https://github.com/Hatgiargyrion/automationExercise.git
cd automationExercise
```

Após clonar o projeto e entrar na pasta, instale as dependências com:
```bash
npm install
```

Após instalar as dependências, abra o cypress:
```bash
npm run cypress:open
```

Para executar com evidência, execute:
```bash
npm run cypress:run:report
```

Para gerar HTML das evidências, execute:
```bash
npm run generate-report
```