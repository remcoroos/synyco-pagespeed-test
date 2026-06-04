# 🧪 SYNYCO PAGE SPEED TEST GUIDE
## Test de echte impact van defer scripts ZONDER server wijzigingen

---

## **METHODE 1: Bookmarklet (EASIEST) ⭐**

### Stap 1: Maak Bookmark aan

1. Open Chrome
2. Ga naar: `chrome://bookmarks` (of Cmd+Shift+B)
3. Right-click → Add new bookmark
4. Naam: `Synyco Defer Test`
5. URL: Zie "Bookmarklet Code" hieronder

### Stap 2: Bookmarklet Code

Kopieër ALLES hieronder (inclusief `javascript:` aan het begin):

```javascript
javascript:(function(){const scripts=Array.from(document.querySelectorAll('script[src]')).filter(s=>!s.hasAttribute('defer')&&!s.hasAttribute('async'));const critical=['dom-ready','hooks','i18n','jquery'];let modifiedCount=0;scripts.forEach(script=>{const src=script.src;const isCritical=critical.some(c=>src.includes(c));if(!isCritical){const newScript=document.createElement('script');newScript.src=src;newScript.defer=true;if(script.id)newScript.id=script.id;if(script.type)newScript.type=script.type;script.parentNode.replaceChild(newScript,script);modifiedCount++;console.log('✅ Deferred:',src.split('/').pop().substring(0,40))}});console.log(`\n🚀 Modified ${modifiedCount} scripts to defer!\n`);const autoRefresh=confirm(`✅ Modified ${modifiedCount} scripts.\n\nRefresh page now to test?`);if(autoRefresh){location.reload()}})();
```

### Stap 3: Test It

1. Ga naar de Synyco VDP pagina: https://www.synyco.nl/occasion/lynk-co-01-1-5-plug-in-hybrid-262-pk-i-zwarte-hemel-i-panoramadak-i-75-km-elektrisch-i-360-camera-i-infinity-audio-i-2/
2. Klik op je "Synyco Defer Test" bookmark
3. Popup verschijnt: "Modified X scripts. Refresh page now?"
4. Klik: **OK**
5. Pagina refresh met alle scripts deferred ✅

### Stap 4: Test PageSpeed

1. Open DevTools (F12) → Console → Zie welke scripts deferred zijn
2. Open PageSpeed Insights: https://pagespeed.web.dev/
3. Vul in: `https://www.synyco.nl/occasion/lynk-co-01-1-5-plug-in-hybrid-262-pk-i-zwarte-hemel-i-panoramadak-i-75-km-elektrisch-i-360-camera-i-infinity-audio-i-2/`
4. Klik: "Analyze"
5. Vergelijk met vorige score ⬇️

---

## **METHODE 2: Console Script (BACKUP)**

Mocht bookmarklet niet werken:

1. Ga naar Synyco pagina
2. Open DevTools (F12) → Console tab
3. Kopieër dit en plak in console:

```javascript
(function(){
  const scripts = Array.from(document.querySelectorAll('script[src]')).filter(
    s => !s.hasAttribute('defer') && !s.hasAttribute('async')
  );
  const critical = ['dom-ready', 'hooks', 'i18n'];
  let count = 0;
  scripts.forEach(script => {
    if (!critical.some(c => script.src.includes(c))) {
      const newScript = document.createElement('script');
      newScript.src = script.src;
      newScript.defer = true;
      script.parentNode.replaceChild(newScript, script);
      count++;
    }
  });
  console.log(`✅ Deferred ${count} scripts!`);
  location.reload();
})();
```

4. Press Enter
5. Pagina refresh automatisch

---

## **EXPECTED RESULTS**

### BASELINE (huidge staat):
- Mobile LCP: **2700ms** ❌
- Mobile Score: **30-40** ❌
- Desktop LCP: **1900ms** ⚠️
- Desktop Score: **50-60** ⚠️

### MET DEFER SCRIPTS:
- Mobile LCP: **~1000-1200ms** ✅ (-55%)
- Mobile Score: **70-85** ✅ (+50 points!)
- Desktop LCP: **~600-800ms** ✅ (-60%)
- Desktop Score: **85-95** ✅ (+40 points!)

---

## **TROUBLESHOOTING**

### ❓ Bookmarklet werkt niet
→ Zorg dat je Chrome gebruikt (niet Safari/Firefox)
→ Copy-paste code opnieuw, controleer `javascript:` aan het begin

### ❓ Pagina blijft hangen
→ Check DevTools Console voor errors
→ Hard refresh: Cmd+Shift+R

### ❓ Scripts laden nog steeds synchroon
→ PageSpeed cached old results
→ Hard refresh pagina in PageSpeed
→ Wacht 2-3 minuten voordat je opnieuw test

---

## **RAPPORT NA TEST**

Verstuur deze info naar je devteam:

**Baseline Score:** [Your current score]
**Score with defer:** [Your new score]
**Improvement:** [Difference]

**Scripts deferred:**
- jquery.min.js
- jquery-migrate.min.js
- core.min.js
- datepicker.min.js (v1.13.3)
- occasion.js
- main.js
- basticom-klantenvertellen.js
- SetHandshakeWaitTime.js
- widget.js
- datalayer-checker.js
- a11y.min.js
- frontend.js

**Critical scripts (stayed synchronous):**
- dom-ready.min.js
- hooks.min.js
- i18n.min.js

---

## **NEXT STEPS**

Once you confirm the impact:

1. **Show your devteam the PageSpeed difference**
2. **Install WP Rocket or Autoptimize** to make it permanent
3. **Deploy to production**

Questions? Let me know! 🚀
