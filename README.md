# Gyomei Himejima

Site em React + Vite + Tailwind CSS + Framer Motion + Lucide (tema dark, animações e áudio).

## Scripts

- `npm run dev` - inicia servidor de desenvolvimento
- `npm run build` - build de produção
- `npm run preview` - pré-visualizar build

## Passos para iniciar

```bash
npm install
npm run dev
```

Acesse http://localhost:5173

## Estrutura

- `index.html` – Documento HTML principal
- `src/main.jsx` – Entrada do React
- `src/App.jsx` – Layout básico (Header, Main, Footer)
- `src/index.css` – Estilos com Tailwind
- `tailwind.config.js` – Configuração Tailwind
- `postcss.config.js` – Configuração PostCSS
- `vite.config.js` – Configuração Vite

## Customização

Altere cores em `tailwind.config.js` na chave `theme.extend.colors.brand`.

## Deploy no GitHub Pages

### 1. Criar repositório
Crie no GitHub (ex: `seu-usuario/gyomei_himejima`). Clone local e coloque estes arquivos.

### 2. Base do Vite
`vite.config.js` já está configurado com `base: '/Gyomei/'` para publicação em `https://MazziDev.github.io/Gyomei/`.

### 3. Workflow
Arquivo `.github/workflows/deploy.yml` (Pages via Actions) já faz:
1. Checkout
2. Install
3. Build (`npm run build`)
4. Publica para Pages

Push na branch `main` dispara deploy.

Se o método Pages Actions falhar com 404, há fallback: `.github/workflows/deploy-ghpages.yml` publica em branch `gh-pages` usando `peaceiris/actions-gh-pages`. Nesse caso, em Settings → Pages selecione Source = Deploy from a branch → Branch: `gh-pages` / root.

### 5. Ativar Pages
Settings → Pages → Source = GitHub Actions (se não estiver automático). Primeiro deploy configura ambiente.

### 6. URL final
- Projeto: `https://MazziDev.github.io/Gyomei/`
- (Site de usuário não aplicável aqui)

### 7. Testar build local
```bash
npm run build
npm run preview
```
Acesse a URL preview (normalmente http://localhost:4173) e verifique caminhos.

### 8. Cache
Se alterações de estilo não aparecerem: Ctrl+F5 / limpar cache / invalidar service workers (não usamos SW por padrão).

## Dica: Ícones / Cores adicionais
Pode adicionar mais gradientes usando classes utilitárias do Tailwind (ex: `from-brand-500 via-brand-400 to-brand-600`).

## Licença

MIT
