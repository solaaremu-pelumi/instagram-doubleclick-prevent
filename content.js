document.addEventListener('dblclick', function(e) {
      e.preventDefault();
      e.stopPropagation();
  }, true);
  
  // Also prevent double-tap on mobile
  let lastTap = 0;
  document.addEventListener('touchend', function(e) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    if (tapLength < 500 && tapLength > 0) {
      e.preventDefault();
      e.stopPropagation();
    }
    lastTap = currentTime;
  }, true);