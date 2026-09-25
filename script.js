// Data Structure Final Portal Script

(function () {
  'use strict';

  // --- Theme Management ---
  const THEME_KEY = 'ds_portal_theme';
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      if (themeIcon) themeIcon.innerHTML = `<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
      if (themeText) themeText.textContent = 'Light';
      if (themeToggleBtn) themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
    } else {
      if (themeIcon) themeIcon.innerHTML = `<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
      if (themeText) themeText.textContent = 'Dark';
      if (themeToggleBtn) themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
    }
  }

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const initialTheme = savedTheme || getSystemTheme();
    applyTheme(initialTheme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, newTheme);
      applyTheme(newTheme);
    });
  }

  // Listen for OS theme changes if user hasn't explicitly set preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Run immediately
  initTheme();

  // --- Interactive Search / Filter ---
  const searchInput = document.getElementById('chapter-search');
  const chapterCards = document.querySelectorAll('.chapter-card');
  const emptyState = document.getElementById('search-empty');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      let matchCount = 0;

      chapterCards.forEach((card) => {
        const title = card.getAttribute('data-title') || '';
        const chapterNum = card.getAttribute('data-chapter') || '';
        const desc = card.getAttribute('data-desc') || '';

        const isMatch =
          title.toLowerCase().includes(query) ||
          chapterNum.toLowerCase().includes(query) ||
          desc.toLowerCase().includes(query) ||
          `chapter ${chapterNum}`.includes(query) ||
          `บทที่ ${chapterNum}`.includes(query);

        if (isMatch) {
          card.style.display = 'flex';
          matchCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (emptyState) {
        if (matchCount === 0) {
          emptyState.classList.add('active');
        } else {
          emptyState.classList.remove('active');
        }
      }
    });
  }
})();
