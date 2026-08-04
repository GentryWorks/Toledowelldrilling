# Well Drilling Rank-and-Rent — Full Site Build SOP

Complete process for researching, building, and launching a well drilling rank-and-rent website. Follow each phase in order. A full build takes ~2–3 hours once you have all credentials.

---

## Phase 1 — Market Research (Google Keyword Planner)

### Goal
Identify cities worth building in based on monthly search volume. Toledo, OH (683/mo) is the baseline. Build if ≥900/mo, Maybe at 400–899, Skip below 400.

### Steps
1. Open Google Keyword Planner → **Discover new keywords**
2. Search: `well drilling [State]` (e.g., "well drilling Pennsylvania")
3. Set location filter to the target state
4. Set date range to last 12 months
5. Download CSV → saves to Downloads as a `.csv` file
6. Open the Excel workbook: `Well-Drilling-City-Comparison.xlsx` on Desktop
7. Run the Python import script to parse the CSV and add rows to the City Comparison sheet
8. Fill in the **Build?** column:
   - `YES ✓` (green) — ≥900/mo
   - `MAYBE` (yellow) — 400–899/mo
   - `SKIP` (red) — <400/mo
9. Ask the owner which MAYBE cities to build → mark confirmed cities `BUILT ✓` (dark navy) after launch

### Notes
- CSV files from Google are UTF-16 encoded, tab-delimited — the import script handles this automatically
- Watch for data spikes (e.g., one month 10x normal) — flag as DATA SPIKE and recheck in 4–6 weeks
- Toledo OH = 683/mo is the baseline reference

---

## Phase 2 — Domain & Hosting Setup

### Domain
1. Register `welldrillingCITY.com` at Namecheap (or preferred registrar)
   - Format: `welldrillingdallas.com`, `welldrillingharrisburg.com`, etc.
   - Avoid including state abbreviation in the domain unless city name is ambiguous

### GitHub Repo
1. Go to GitHub → GentryWorks organization → **New repository**
2. Name: `welldrillingCITY` (e.g., `welldrillingdallas`)
3. Set to **Private**
4. Do NOT initialize with README (you'll push the template)

### Clone the Template
```bash
cp -r /Users/AdamDetig_1/well-drilling-template /Users/AdamDetig_1/welldrillingCITY
cd /Users/AdamDetig_1/welldrillingCITY
rm -rf .git
git init
git remote add origin https://TOKEN@github.com/GentryWorks/welldrillingCITY.git
```

---

## Phase 3 — Site Configuration

### Edit `src/data/config.ts`
This is the only file that needs to change for each city. Update every field:

```ts
export const siteConfig = {
  businessName: "Well Drilling CITY",
  phone: "(XXX) XXX-XXXX",         // Twilio number for this city
  phoneRaw: "XXXXXXXXXX",          // 10 digits, no formatting
  email: "info@welldrillingCITY.com",

  city: "CITY",
  state: "STATE",
  stateAbbr: "XX",
  address: "123 Main St",          // Generic placeholder is fine
  zip: "XXXXX",                    // City's main zip code

  suburbs: [
    "Suburb1", "Suburb2", ...      // 10–12 surrounding cities
  ],

  domain: "welldrillingCITY.com",
  url: "https://www.welldrillingCITY.com",

  hours: "Mon–Fri: 7:00 AM – 6:00 PM | Sat: 8:00 AM – 2:00 PM",

  license: "",
  yearsInBusiness: 15,

  ghlFormId: "FORM_ID_HERE",
  ghlFormUrl: "https://api.leadconnectorhq.com/widget/form/FORM_ID_HERE",

  ga4Id: "G-XXXXXXXXXX",          // From Google Analytics
  clarityId: "XXXXXXXXXX",        // From Microsoft Clarity

  titleSuffix: "Well Drilling CITY",
};
```

### Suburbs
Use 10–12 cities surrounding the target city. Include the county seat, nearby towns, and commuter suburbs. These power internal linking and local SEO.

---

## Phase 4 — GHL Form Setup

1. Log into GoHighLevel
2. Go to **Sites** → **Forms** → **New Form**
3. Build a simple quote request form:
   - Name, Phone, Email, Service Type, Message
4. Copy the **Form ID** from the embed code (the alphanumeric string in the iframe src URL)
5. Paste the Form ID and full URL into `config.ts` (`ghlFormId` and `ghlFormUrl`)

---

## Phase 5 — Analytics Setup

### Google Analytics 4
1. Go to analytics.google.com
2. **Admin** → **Create Property** → name it "Well Drilling CITY"
3. Set up a Web data stream → enter the domain
4. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)
5. Paste into `config.ts` as `ga4Id`

### Microsoft Clarity
1. Go to clarity.microsoft.com
2. **New Project** → name it "Well Drilling CITY" → enter the domain
3. Copy the **Project ID** (10-character string)
4. Paste into `config.ts` as `clarityId`

Both are injected automatically via `src/app/layout.tsx` — no other code changes needed.

---

## Phase 6 — Twilio Phone Number Setup

### Buy a Number
1. Log into twilio.com/console
2. **Phone Numbers** → **Buy a Number**
3. Search by area code for the target city
4. Buy the number (~$1.15/mo)

### Create TwiML Bins

**Forwarding Bin** (rings your personal phone first):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>This call may be recorded for quality purposes.</Say>
  <Dial action="VOICEMAIL_BIN_URL" timeout="20" record="record-from-answer">
    <Number>+1YOURNUMBER</Number>
  </Dial>
</Response>
```

**Voicemail Bin** (plays when call is not answered):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>You've reached Well Drilling CITY. We're currently unavailable. Please leave your name, number, and a brief message and we'll call you back shortly. Thank you.</Say>
  <Record maxLength="120" finishOnKey="#"/>
  <Say>Thank you for your message. We will be in touch soon.</Say>
</Response>
```

**Steps:**
1. Twilio Console → **Develop** → **TwiML Bins** → **Create new TwiML Bin**
2. Create the voicemail bin first → copy its URL
3. Create the forwarding bin → paste voicemail bin URL as the `action` value
4. Go to **Phone Numbers** → click the number → set **A call comes in** → TwiML Bin → select the forwarding bin → Save

### When You Get a Tenant
Just update the forwarding bin — change `+1YOURNUMBER` to `+1THEIRNUMBER`. You keep the Twilio number. All recordings are stored in Twilio Console → Monitor → Logs → Recordings.

---

## Phase 7 — Favicon

The favicon SVG is already in `public/favicon.svg` (water drop icon, dark navy background). No changes needed — it's shared across all sites.

If you need to regenerate PNG sizes:
```bash
cd public
node generate-favicon.js
```

This produces: `favicon.png` (32x32), `favicon-16x16.png`, `favicon-48x48.png`, `favicon.ico`, `apple-touch-icon.png` (180x180).

---

## Phase 8 — Local Preview

```bash
cd /Users/AdamDetig_1/welldrillingCITY
npm install --cache /tmp/npm-cache
npm run dev
```

Visit `http://localhost:3000` to verify:
- [ ] Business name, phone, city name appear correctly throughout
- [ ] GHL form loads in the quote section
- [ ] All suburb names are correct
- [ ] No placeholder text remaining

---

## Phase 9 — Deploy to Vercel

1. Go to vercel.com → **New Project**
2. Import from GitHub → select `GentryWorks/welldrillingCITY`
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy** — takes ~2 minutes
5. Once deployed, go to **Settings** → **Domains**
6. Add `welldrillingCITY.com` and `www.welldrillingCITY.com`
7. Update DNS at your registrar to point to Vercel:
   - A record: `76.76.21.21`
   - CNAME `www` → `cname.vercel-dns.com`

---

## Phase 10 — Push to GitHub

```bash
cd /Users/AdamDetig_1/welldrillingCITY
git add src/data/config.ts
git commit -m "Initial build: Well Drilling CITY"
git push -u origin main
```

If auth fails, use token-embedded URL:
```bash
git remote set-url origin https://TOKEN@github.com/GentryWorks/welldrillingCITY.git
git push -u origin main
```

---

## Phase 11 — Google Search Console

1. Go to search.google.com/search-console
2. **Add Property** → URL prefix → `https://www.welldrillingCITY.com`
3. Verify via HTML tag (paste into `src/app/layout.tsx` metadata) or DNS TXT record
4. Once verified, go to **Sitemaps** → submit `https://www.welldrillingCITY.com/sitemap.xml`

---

## Phase 12 — Bing Webmaster Tools

1. Go to bing.com/webmasters
2. Log in with Microsoft account
3. **Add a site** → enter `https://www.welldrillingCITY.com`
4. Verify ownership (XML file, meta tag, or DNS)
5. Go to **Sitemaps** → submit `https://www.welldrillingCITY.com/sitemap.xml`

---

## Phase 13 — Final Checklist

Before marking a city as BUILT in the Excel sheet:

- [ ] `config.ts` filled out completely (no placeholder values)
- [ ] GHL form loading on site
- [ ] GA4 Measurement ID added
- [ ] Clarity Project ID added
- [ ] Twilio number purchased
- [ ] Forwarding bin created (with recording disclosure)
- [ ] Voicemail bin created
- [ ] Number assigned to forwarding bin in Twilio
- [ ] Site deployed to Vercel
- [ ] Custom domain connected and resolving
- [ ] Pushed to GitHub
- [ ] GSC verified + sitemap submitted
- [ ] Bing verified + sitemap submitted
- [ ] Excel sheet updated: marked BUILT ✓ (dark navy)

---

## Reference — Credentials & Accounts

| Service | Login | Notes |
|---|---|---|
| Vercel | GentryWorks account | Deploy from GitHub |
| GitHub | GentryWorks org | All repos stored here |
| Google Analytics | GentryWorks Google account | One property per site |
| Microsoft Clarity | GentryWorks Microsoft account | One project per site |
| Twilio | GentryWorks account | ~$1.15/mo per number |
| GoHighLevel | GentryWorks account | One form per site |
| GSC | GentryWorks Google account | One property per domain |
| Bing Webmaster | GentryWorks Microsoft account | One property per domain |

---

## Reference — Key File Locations

| File | Path |
|---|---|
| Excel workbook | `~/Desktop/Well-Drilling-City-Comparison.xlsx` |
| Site template | `~/well-drilling-template/` |
| Built sites | `~/welldrillingCITY/` (one folder per city) |
| Config file | `src/data/config.ts` in each site folder |
| Favicon SVG | `public/favicon.svg` in each site folder |
