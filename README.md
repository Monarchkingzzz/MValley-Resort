# The Mugumo Valley Resort - Website

A modern, responsive website for **The Mugumo Valley Resort** located in Thika, Kenya.

---

## 🚀 How to View the Site in VS Code

You have multiple convenient ways to preview the site directly from VS Code:

### Option 1: Live Server (Recommended)
1. In the bottom-right status bar of VS Code, click **"Go Live"** (from the Live Server extension).
2. Or right-click [`index.html`](file:///c:/Users/MonarchKingz/OneDrive/Desktop/MValley-Resort/index.html) in the file explorer and select **"Open with Live Server"**.
3. The site will automatically open at `http://127.0.0.1:5500/` and reload instantly whenever you save changes.

### Option 2: Press F5 (One-Click Launch)
1. Press `F5` (or go to **Run** &rarr; **Start Debugging**).
2. Choose **"View Site (Live Server - Chrome)"** or **"View Site (Direct File)"** to immediately open the site in your browser.

### Option 3: Terminal Command
Open the integrated terminal in VS Code (`Ctrl + ` `) and run:
```bash
npm start
```
or
```bash
npm run dev
```

---

## 🛠️ How to Modify the Site

The project is structured cleanly so you can edit content, styles, and scripts without breaking anything:

### 1. Changing Text, Sections, and Contact Information
Open [`index.html`](file:///c:/Users/MonarchKingz/OneDrive/Desktop/MValley-Resort/index.html):
- **Hero & Headline**: Line ~38 (`Slow weekends by the river...`)
- **Rooms & Accommodation**: Line ~61 (`#stay` section)
- **Dining & Restaurant**: Line ~92 (`#dine` section)
- **Pool & Amenities**: Line ~116 (`#play` section)
- **Events & Banquets**: Line ~133 (`#events` section)
- **Contact Information & WhatsApp**: Line ~142 (`#visit` section)

### 2. Changing Colors, Fonts, and Layout
Open [`css/style.css`](file:///c:/Users/MonarchKingz/OneDrive/Desktop/MValley-Resort/css/style.css):
- Top section (`:root`) contains the design variables:
  - `--deep`: `#825b3e` (Serene light brown / sandalwood)
  - `--aqua`: `#b88656` (Serene light brown / camel accent)
  - `--gold`: `#df9e42` (Warm amber gold highlights)
  - `--bg`: `#f9f6f0` (Calming light sand linen background)
- In VS Code, hovering over any hex color code displays an interactive color picker so you can change palette colors visually.

### 3. Modifying Form Behavior and Email Handling
Open [`js/main.js`](file:///c:/Users/MonarchKingz/OneDrive/Desktop/MValley-Resort/js/main.js):
- `RESORT_EMAIL` is set to `mugumovresort@gmail.com`.
- Add additional validation or integrate an API / form endpoint if desired.

---

## 📁 Project Structure

```text
MValley-Resort/
├── .vscode/
│   ├── settings.json       # Live Server, format-on-save, and editor config
│   ├── launch.json         # F5 browser preview configurations
│   ├── tasks.json          # One-click tasks to open in default browser
│   └── extensions.json     # Recommended VS Code extensions
├── css/
│   └── style.css           # Modular, commented stylesheet with design tokens
├── js/
│   └── main.js             # Form handler and client-side interactions
├── index.html              # Primary website homepage
├── mugumo-valley-resort.html # Mirror file for backwards compatibility
├── package.json            # Node dev scripts (npm start, npm run dev)
└── README.md               # Documentation guide
```
