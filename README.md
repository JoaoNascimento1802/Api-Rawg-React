# Api-Rawg-React

![GitHub repo size](https://img.shields.io/github/repo-size/JoaoNascimento1802/Api-Rawg-React?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/JoaoNascimento1802/Api-Rawg-React?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/JoaoNascimento1802/Api-Rawg-React?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/JoaoNascimento1802/Api-Rawg-React?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/JoaoNascimento1802/Api-Rawg-React?style=for-the-badge)

> Projeto React que consome a API pública [RAWG.io](https://rawg.io/apidocs) para exibir jogos da série **Dark Souls** com cards interativos em linha.

## 💻 Pré-requisitos

Antes de começar, verifique se você tem os seguintes requisitos:

- Node.js e NPM instalados.
- Git instalado para clonar o repositório.
- VSCode ou outro editor de código.

## 🚀 Instalando o Api-Rawg-React

Clone o repositório:

```bash
git clone https://github.com/JoaoNascimento1802/Api-Rawg-React.git
```

Entre na pasta do projeto:

```bash
cd Api-Rawg-React
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto com sua chave da API RAWG:

```env
REACT_APP_RAWG_API_KEY=sua_chave_aqui
```

⚠️ **Importante:** A chave de API pode ser obtida gratuitamente em [RAWG.io](https://rawg.io/apidocs).

## ▶️ Rodando o projeto

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Acesse no navegador:

```
http://localhost:3000
```

Você verá uma lista com **cards dos jogos da franquia Dark Souls**, mostrando imagem, título, ID e nome do desenvolvedor.

## 🖼️ Funcionalidades

- 🔍 Busca automática de jogos relacionados à franquia "Dark Souls"
- 📦 Requisições assíncronas com Axios
- 🧩 Cards com ID, título, imagem e desenvolvedor
- 💡 Organização responsiva em 3 colunas

## 📁 Estrutura de Pastas

```
src/
├── components/
│   └── DarkSoulsGames/
│       ├── DarkSoulsGames.jsx
│       └── DarkSoulsGames.css
├── App.js
├── index.js
└── .env
```

## 🤝 Contribuindo

Para contribuir com este projeto:

1. Fork este repositório.
2. Crie um branch: `git checkout -b minha-feature`.
3. Faça suas alterações e commit: `git commit -m 'feat: minha nova feature'`.
4. Envie para seu fork: `git push origin minha-feature`.
5. Abra um Pull Request.

## 👤 Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/JoaoNascimento1802">
        <img src="https://avatars.githubusercontent.com/u/112444368?v=4" width="100px;" alt="Foto do João"/><br>
        <sub>
          <b>João Nascimento</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 📝 Licença

Este projeto está sob licença. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
