# Umbrella Cafe · Ella digital menu

A responsive QR-ready menu experience for Umbrella Cafe in Ella, Sri Lanka. It is a no-build static site so it can be hosted from any simple web server or static hosting provider.

## Run locally

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Then open <http://localhost:4173>.

## Included experience

- Hero landing screen designed around a QR-scan journey
- Full menu from the supplied Umbrella Cafe menu, with category filters and search
- Chef’s picks, dish details, ingredients, prep timing and a kitchen preview interaction
- Table order drawer with quantities, subtotal and service-charge note
- Responsive layout for phones used at the table as well as desktop screens
- Local food photography assets in `assets/`, plus the sourced cafe reference image in `image-search/`

The decorative logo mark is intentionally inline so it can be swapped for the cafe’s supplied logo without changing the layout.
