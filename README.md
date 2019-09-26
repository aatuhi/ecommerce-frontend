# Frontend verkkokauppa-alustalle

Backend löytyy [täältä.](https://github.com/aatuhi/ecommerce-backend)

## Tietoa

Yksinkertainen verkkokauppa mock-up omaksi ilokseni.

## Sisältää seuraavat toiminnallisuudet

- Admin-paneeli sisältäen tuotteiden, tilausten ja käyttäjien hallintamahdollisuuden
- Näkymä tuotteille kategorioittain
- Ostoskori
- Tilauksen tekeminen
- Käyttäjän luominen
- "Showcase-näkymä" etusivulla (toistaiseksi implementaatio vähintääkin kysenalainen)

## Tulevaisuuden toiminnallisuuksia

- Notifikaatiot operaatiosta (sisäänkirjautuminen, tilauksen tekeminen, tuotteen lisäys/poisto/muokkaus...)
- Tallentetut osoitetiedot
- Redesign käyttäen omatekoista CSS:sää Semantic UI:n sijasta

## Bugeja

- Sivun päivitys muualla kuin etusivulla heittää 404-errorin (Netlify + react-router)
- Samasta syystä johtuen monet operaatiot eivät aiheuta päivitystä reaaliajassa (tuotetiedot, tilaustiedot)
