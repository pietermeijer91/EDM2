# Bijdragen aan het EDSN Delivery Model

Fijn dat je wilt meehelpen. Zo werk je mee:

1. Maak een branch, bijvoorbeeld `fix/tekst-rte` of `feature/nieuwe-pagina`.
2. Pas de bestanden in `src/` aan (niet `index.html` zelf: die wordt gebouwd).
3. Controleer lokaal met `npm run dev` en open `index.html`.
4. Open een pull request. Na de merge bouwt GitHub Actions de site en staat je wijziging live.

## Waar pas ik wat aan?

**Een tekst op een pagina**
Open `src/view/buildView.js` en zoek op de sleutel van de pagina, bijvoorbeeld `rte:`. Elke pagina heeft:
- `I.<sleutel>`: titel en samenvatting
- `C.<sleutel>`: secties (`x`), kernpunten (`k`), de tekst "Bij EDSN" (`e`) en gerelateerde pagina's (`r`)

De teksten van de AI Innovation Pipeline en de vier lagen staan apart in `src/content/aiPipeline.js`.

Teksten die per weergave verschillen, staan als `L('tekst Basis EDSN', 'tekst AI-Native EDSN')`.

De sleutel van een pagina zie je in de adresbalk: `.../EDM2/#rte`.

**De opmaak van een onderdeel**
Kijk in `src/components/` (algemene onderdelen) of `src/components/pages/` (pagina-specifiek). Stijlen staan inline in de JSX, zodat je ze direct naast de inhoud ziet.

**Kleuren, ARTie-link of AI-Native EDSN openzetten**
`src/config.js`.

**Een wijzigingsvoorstel (concept) toevoegen**
Zoek in `buildView.js` op `propDefs`. Concepten staan achter het reviewer-wachtwoord en gaan pas live in de vastgestelde WoW na review door het LACE.

## Spelregels

- Schrijf in helder Nederlands, in de stijl van de bestaande pagina's.
- Houd je aan de EDSN-huisstijl (kleuren in `config.js`).
- Wijzigingen aan de WoW zelf lopen via een wijzigingsvoorstel en review door het LACE.
