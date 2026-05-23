# Middager — familiens kokebok

En enkel personlig kokebok bygget med [Astro](https://astro.build) og publisert til GitHub Pages.
Hver oppskrift er en markdown-fil i `src/content/oppskrifter/` med en handleliste fordelt på Meny, Rema 1000 og Kiwi.

## Kjør lokalt

```bash
npm install
npm run dev    # http://localhost:4321
```

## Bygg statisk

```bash
npm run build
npm run preview
```

## Legg til en ny oppskrift

1. Opprett `src/content/oppskrifter/<slug>.md`
2. Fyll inn frontmatter etter samme mønster som `grillede-lammekoteletter.md`
   (alle felt er typesikret via `src/content/config.ts`)
3. Skriv fremgangsmåten som vanlig markdown under `---`
4. `git commit && git push` — GitHub Actions bygger og deployer automatisk

## Publiser til GitHub Pages

### Førstegangsoppsett

1. Lag et nytt **public** GitHub-repo (Pages krever public på gratis-konto)
   ```bash
   git init
   git add .
   git commit -m "first commit: middager kokebok"
   git branch -M main
   git remote add origin https://github.com/<din-bruker>/middager.git
   git push -u origin main
   ```

2. Gå til **Settings → Pages** på repoet
   - Source: **GitHub Actions**
   - (Du trenger ikke velge branch — workflow-en publiserer)

3. Oppdater `astro.config.mjs` slik at `site` matcher din GitHub-bruker:
   ```js
   site: 'https://<din-bruker>.github.io',
   base: '/middager',  // bytt hvis repoet heter noe annet
   ```

4. Push på nytt. Etter ~1 minutt er siden live på
   `https://<din-bruker>.github.io/middager/`

### Egen domene (valgfritt, senere)

- Legg til en `public/CNAME`-fil med domenenavnet ditt
- Sett `base: '/'` i `astro.config.mjs`
- Konfigurer DNS hos domeneleverandøren etter [GitHub Pages-guiden](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Filstruktur

```
src/
├── content/
│   ├── config.ts                     # schema for oppskrifter (Zod)
│   └── oppskrifter/
│       └── grillede-lammekoteletter.md
├── layouts/Base.astro                # felles HTML-skall
├── components/
│   ├── OppskriftCard.astro           # kort på forsiden
│   ├── Ingredienser.astro            # ingrediensliste gruppert
│   └── Handleliste.astro             # handleliste fordelt på butikker
└── pages/
    ├── index.astro                   # forside med alle oppskrifter
    └── oppskrifter/[slug].astro      # detaljside per oppskrift
```

## Senere utvidelser

- **Kommentarer:** [giscus](https://giscus.app) (GitHub Discussions-basert) kan plugges inn på oppskriftssiden uten egen backend
- **Stjerner og familie-innlogging:** Firebase Auth + Firestore er enkelt å legge til hvis dere senere vil ha vurderinger som synker mellom enheter
- **Søk og filter:** klient-side filtrering på tagger og tekst
- **Bilder:** legg matbilder i `public/bilder/` og referer i frontmatter via `bilde: /bilder/<navn>.jpg`
