document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('icon-sun');
    const moonIcon = document.getElementById('icon-moon');
    const langBtn = document.getElementById('lang-switcher');

    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    const openBtns = document.querySelectorAll('.open-sidebar');
    const closeBtns = document.querySelectorAll('#close-sidebar-desktop, #close-sidebar-mobile');

    const videoWrapper = document.getElementById('video-wrapper');
    const playButton = document.getElementById('play-video-btn');
    const placeholder = document.querySelector('.video-placeholder-content');

    const body = document.body;

    const VIDEO_ID = 'cdQNj4BoXjI';
    let currentLang = localStorage.getItem('currentLang') || 'ua';

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let isDarkMode = savedTheme ? (savedTheme === 'dark') : systemPrefersDark;

    function renderTheme() {
        body.classList.toggle('dark-mode', isDarkMode);

        const isLight = !isDarkMode;

        if (sunIcon)
            sunIcon.classList.toggle('hidden', isDarkMode);

        if (moonIcon)
            moonIcon.classList.toggle('hidden', isLight);
    }

    function updateLanguage(lang) {
        if (typeof dictionary === 'undefined') {
            console.error('Dictionary not loaded. Check data.js path.');
            return;
        }

        const strings = dictionary[lang];
        if (!strings) return;

        document.documentElement.lang = lang === 'ua' ? 'uk' : 'en';

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (strings[key]) {
                element.innerHTML = strings[key];
            }
        });

        if (langBtn) {
            langBtn.textContent = dictionary[lang].switchLang;
        }
    }

    function toggleSidebar() {
        if (!sidebar || !overlay) return;
        sidebar.classList.toggle('sidebar-open');
        overlay.classList.toggle('overlay-open');
        body.classList.toggle('no-scroll');
    }

    function loadVideo() {
        if (!videoWrapper) return;

        const iframe = document.createElement('iframe');
        iframe.className = 'w-full h-full';
        iframe.src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&modestbranding=1&rel=0`;
        iframe.title = 'Embedded Systems Video';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;

        if (placeholder) {
            placeholder.classList.add('hidden');
            setTimeout(() => placeholder.remove(), 300);
        }

        videoWrapper.appendChild(iframe);
    }


    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            isDarkMode = !isDarkMode;
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
            renderTheme();
        });
    }

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = (currentLang === 'en' ? 'ua' : 'en');
            localStorage.setItem('currentLang', currentLang);
            updateLanguage(currentLang);
        });
    }

    if (openBtns)
        openBtns.forEach(btn => btn.addEventListener('click', toggleSidebar));

    if (closeBtns)
        closeBtns.forEach(btn => btn.addEventListener('click', toggleSidebar));

    if (overlay)
        overlay.addEventListener('click', toggleSidebar);

    if (playButton)
        playButton.addEventListener('click', loadVideo);

    renderTheme();
    updateLanguage(currentLang);
});

function toggleDesktopDropdown(button) {
    const menu = document.getElementById('desktop-sources-menu');
    if (menu) menu.classList.toggle('hidden');

    const icon = button.querySelector('svg');
    if (icon) icon.classList.toggle('rotate-180');
}

function toggleMobileDropdown(button) {
    const container = button.parentElement;
    const content = container.querySelector('.mobile-dropdown-content');

    if (content) content.classList.toggle('hidden');

    const icon = button.querySelector('svg');
    if (icon) icon.classList.toggle('rotate-180');
}

window.addEventListener('click', function (e) {
    const btn = document.querySelector('[onclick="toggleDesktopDropdown(this)"]');
    const menu = document.getElementById('desktop-sources-menu');

    if (btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) {
        if (!menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
            const icon = btn.querySelector('svg');
            if (icon) icon.classList.remove('rotate-180');
        }
    }
});
