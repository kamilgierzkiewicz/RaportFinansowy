# Raport Finansowy — PWA (v1.0.1)

Koszty stałe (osobiste i firmowe), raty i leasingi, wpływy z faktur na konto firmowe z automatycznym przelewem reszty na osobiste, wydatki bieżące z kategoriami, bilans, wykresy i analiza AI.

## Wgranie (GitHub Pages)
1. Publiczne repo, np. `raportfinansowy` → wgraj wszystkie pliki z tego folderu (bez podfolderu).
2. Settings → Pages → Deploy from a branch → `main`, `/ (root)`.
3. Adres: `https://TWÓJLOGIN.github.io/raportfinansowy/RaportFinansowy.html`
4. iPhone: Safari → Udostępnij → Do ekranu początkowego (ikona: białe tło w jasnym motywie, czarne w ciemnym — ustalane w chwili dodania). Android: Chrome → ⋮ → Zainstaluj aplikację.

## Dane i synchronizacja
Dane są w prywatnym repo `RaportFinansowy-data`. Na każdym urządzeniu: Ustawienia → Synchronizacja → `TWÓJLOGIN/RaportFinansowy-data` + token (fine-grained, Contents: Read and write). Po zmianie nazwy repo: „Odłącz to urządzenie” i połącz ponownie z nową nazwą.

## Analiza AI
Ustawienia → Asystent AI → klucz z platform.claude.com/settings/keys (zostaje tylko w urządzeniu).

## Wersje
Numeracja 1.0.0: poprawki 1.0.x, nowe funkcje 1.x.0. Aktualizacja: podmieniasz `RaportFinansowy.html` i `sw.js`.
