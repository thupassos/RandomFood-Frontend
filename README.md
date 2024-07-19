## 🍕 RandomFood
Projeto web de recomendação de restaurantes, desenvolvido com React e utilizando Firebase para autenticação e backend.

## 💻 Tecnologias Utilizadas:

- React.js
- JavaScript (ou possivelmente TypeScript, a confirmar)
- Firebase (Autenticação, Banco de Dados, etc.)

## 📂 Estrutura do Projeto

### 📁 public/

Recursos estáticos, como:
- `favicon.ico` 🖼️: Ícone do site.
- `index.html`: Arquivo HTML principal.
- `manifest.json`: Configura o aplicativo web progressivo (PWA).
- `robots.txt`: Instruções para robôs de mecanismos de pesquisa.

### 📁 src/

Código-fonte principal do aplicativo.

- `App.js`: Componente raiz da aplicação.
- `assets/`: Imagens e outros recursos.
- `components/`: Componentes React reutilizáveis.
    - `AuthGuard.js` 🔐: Provavelmente lida com a proteção de rotas.
    - `BackButton.js`: Componente de botão "Voltar".
    - `FilteredOptions.js`, `FilteringOptions.js`: Sugere funcionalidades de filtros. 
    - `Footer.js`: Componente de rodapé.
    - `ForgotPassword.js`: Componente para redefinição de senha.
    - `Home.js`: Componente da página inicial.
    - `Login.js`, `Register.js`: Componentes de autenticação.
    - `LogoutButton.js`: Componente para logout.
    - `SurpriseSelection.js`: Recurso interessante, talvez sugira uma comida aleatória!
    - `Welcome.js`: Componente de boas-vindas.
- `context/AuthContext.js`:  Gerencia o contexto de autenticação.
- `firebase/firebaseConfig.js`: Configurações do Firebase.
- `styles/`: Arquivos CSS para estilização dos componentes.

### 📁 build/

Contém a build de produção do aplicativo, pronta para deploy.

### 📁 .git/

Pasta oculta com o repositório Git, gerenciando o controle de versão.

### 📄 Arquivos da raiz

- `.gitignore`: Define arquivos e pastas ignorados pelo Git.
- `.vscodeignore`: Define arquivos e pastas ignorados pelo VS Code.
- `CHANGELOG.md` 📑: Histórico de mudanças.
- `package-lock.json`, `package.json` 📦: Gerenciamento de dependências.
- `README.md` 📄: Este arquivo!

Bom apetite explorando o código! 😄 
