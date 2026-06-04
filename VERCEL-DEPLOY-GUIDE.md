# 🚀 VERCEL DEPLOYMENT GUIDE

Je Git repo is klaar! Nu volgen deze stappen om live te gaan:

---

## **STAP 1: Maak GitHub Repo aan (2 minuten)**

1. Ga naar https://github.com/new
2. **Repository name:** `synyco-pagespeed-test`
3. **Description:** "Synyco PageSpeed Test - Baseline vs Optimized"
4. **Public** (selecteer)
5. **Create repository**
6. Copy je repo URL (bijv. `https://github.com/YOUR_USERNAME/synyco-pagespeed-test.git`)

---

## **STAP 2: Push naar GitHub**

Open Terminal en voer uit:

```bash
cd "/Users/remcoroos/Documents/Claude/Projects/Auto Synyco snelheid VDP pagina"

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/synyco-pagespeed-test.git

# Rename branch (GitHub default is 'main')
git branch -M main

# Push
git push -u origin main
```

**Done!** Je code staat nu op GitHub.

---

## **STAP 3: Connect Vercel to GitHub (5 minuten)**

1. Ga naar https://vercel.com
2. **Sign in** met je Vercel account
3. Click **"New Project"**
4. Click **"Import Git Repository"**
5. **GitHub** tabblad → "Continue with GitHub"
6. Authorize Vercel op GitHub
7. Zoek je repo: `synyco-pagespeed-test`
8. Click **"Import"**

---

## **STAP 4: Vercel Configuration**

Vercel detecteert `vercel.json` automatisch. Settings:

- **Framework:** Static
- **Build Command:** (leeg laten)
- **Output Directory:** (leeg laten)
- **Root Directory:** (leeg laten)

Click **"Deploy"** → ⏳ ~1 minuut

---

## **STAP 5: Test je Deployment!**

Zodra Vercel klaar is, krijg je een URL:
```
https://synyco-pagespeed-test.vercel.app
```

**Test procedure:**

1. Open: `https://synyco-pagespeed-test.vercel.app`
2. Je ziet landing page met 2 buttons
3. Click **"Test Baseline"** → Gaat naar `/baseline`
4. Open PageSpeed Insights: https://pagespeed.web.dev/
5. Voer in: `https://synyco-pagespeed-test.vercel.app/baseline`
6. Analyze → Noteer scores
7. Ga terug naar Vercel URL
8. Click **"Test Optimized"** → Gaat naar `/optimized`
9. PageSpeed: `https://synyco-pagespeed-test.vercel.app/optimized`
10. Analyze → Vergelijk scores

---

## **EXPECTED RESULTS**

| Metric | Baseline | Optimized | Verschil |
|--------|----------|-----------|----------|
| Performance | 40-50 | 85-95 | **+40-50** ✅ |
| Mobile LCP | 2.5s | 0.8s | **-68%** |
| Page Load | 4.5s | 1.5s | **-67%** |

---

## **TROUBLESHOOTING**

### ❓ GitHub push werkt niet
```bash
git status  # Check status
git remote -v  # Check URL
```

### ❓ Vercel import vindt repo niet
- Zorg GitHub is geverifieerd
- Repo is PUBLIC (niet private)

### ❓ PageSpeed scores zijn hetzelfde
- Hard refresh browser: Cmd+Shift+R
- Wacht 2-3 minuten voor cache clear
- Check console voor errors

---

## **JE VERCEL URL**

Zodra deployment klaar is:
```
https://synyco-pagespeed-test.vercel.app
```

Stuur deze link naar je devteam als proof van concept! 🚀

---

**Questions?** Open DevTools (F12) → Network tab → Check requests
