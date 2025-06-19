 window.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      loader.style.display = 'none';
    });

    function toggleTheme() {
      const html = document.documentElement;
      const isDark = html.getAttribute('data-theme') === 'dark';
      html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    }