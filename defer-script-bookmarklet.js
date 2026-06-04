// SYNYCO DEFER TEST BOOKMARKLET
// Hoe te gebruiken:
// 1. Maak een nieuwe bookmark in Chrome
// 2. Plak deze code als URL (voeg "javascript:" aan het begin toe)
// 3. Klik bookmark op Synyco pagina
// 4. Pagina refresh met defer scripts
// 5. Run PageSpeed Insights

javascript:(function(){
  // Get all blocking scripts (no defer, no async)
  const scripts = Array.from(document.querySelectorAll('script[src]')).filter(
    s => !s.hasAttribute('defer') && !s.hasAttribute('async')
  );

  // Critical scripts that MUST stay synchronous
  const critical = ['dom-ready', 'hooks', 'i18n', 'jquery'];

  let modifiedCount = 0;

  scripts.forEach(script => {
    const src = script.src;
    const isCritical = critical.some(c => src.includes(c));

    if (!isCritical) {
      // Create new script with defer
      const newScript = document.createElement('script');
      newScript.src = src;
      newScript.defer = true;

      // Copy other attributes
      if (script.id) newScript.id = script.id;
      if (script.type) newScript.type = script.type;

      // Replace old script
      script.parentNode.replaceChild(newScript, script);
      modifiedCount++;
      console.log('✅ Deferred:', src.split('/').pop().substring(0, 40));
    }
  });

  console.log(`\n🚀 Modified ${modifiedCount} scripts to defer!\n`);
  console.log('📊 Test procedure:');
  console.log('1. Refresh this page (F5)');
  console.log('2. Open PageSpeed Insights');
  console.log('3. Compare score vs baseline');

  // Optionally auto-refresh
  const autoRefresh = confirm(`✅ Modified ${modifiedCount} scripts.\n\nRefresh page now to test? (Recommended)`);
  if (autoRefresh) {
    location.reload();
  }
})();
