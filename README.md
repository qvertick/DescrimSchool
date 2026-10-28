# WHYDESCR1M — landing page starter

## Files
- `index.html` — page structure and content
- `style.css` — responsive styling, motion and visual effects
- `script.js` — RU/EN language switch, RUB/USD demo price switch, scroll reveals and mobile navigation
- `app.py` — optional Flask backend starter for a contact endpoint

## Run as a static website
Open `index.html` in a browser, or use a local static server.

## Run with Python (optional)
1. Install Python 3.10+.
2. In this folder, run: `python -m venv .venv`
3. Activate the virtual environment.
4. Run: `pip install flask`
5. Run: `python app.py`
6. Open `http://127.0.0.1:5000`

## Before publishing
- Replace demo course prices and the example USD conversion in `script.js` with your actual pricing policy.
- Replace portfolio placeholders with real work you have permission to publish.
- Change the example contact email in `index.html`.
- Connect real checkout/payment provider and secure backend workflows if you intend to sell courses.
- Configure hosting, domain, analytics, privacy/cookie notices and production security.
- Flask `debug=True` is for local development only; do not use it in production.
