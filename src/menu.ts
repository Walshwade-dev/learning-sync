export function setupMenu() {
    // -------------------------
    // ELEMENTS
    // -------------------------
    const menuToggle = document.getElementById("menuToggle") as HTMLButtonElement | null;
    const mobileMenu = document.getElementById("mobileMenu") as HTMLElement | null;
    const userMenuBtn = document.getElementById("userMenuBtn") as HTMLButtonElement | null;
    const userDropdown = document.getElementById("userDropdown") as HTMLElement | null;

    const pageSettingsBtns = document.querySelectorAll("#pageSettingsBtn, #pageSettingsBtnMobile") as NodeListOf<HTMLButtonElement>;
    const logoutBtns = document.querySelectorAll("#logout, #logoutMobile") as NodeListOf<HTMLButtonElement>;
    const darkToggles = document.querySelectorAll("#darkToggle, #darkToggleMobile") as NodeListOf<HTMLInputElement>;

    // Helper to close mobile menu safely
    const closeMobileMenu = () => {
        if (mobileMenu && menuToggle) {
            mobileMenu.classList.add("hidden");
            menuToggle.setAttribute("aria-expanded", "false");
            mobileMenu.setAttribute("aria-hidden", "true");
        }
    };

    // -------------------------
    // 1️⃣ MOBILE MENU TOGGLE
    // -------------------------
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            const isHidden = mobileMenu.classList.toggle("hidden");
            menuToggle.setAttribute("aria-expanded", String(!isHidden));
            mobileMenu.setAttribute("aria-hidden", String(isHidden));
        });

        // Close on outside click
        document.addEventListener("click", (e) => {
            if (!mobileMenu.classList.contains("hidden")) {
                const target = e.target as Node;
                if (!menuToggle.contains(target) && !mobileMenu.contains(target)) {
                    closeMobileMenu();
                }
            }
        });

        // Close on Escape key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
                closeMobileMenu();
            }
        });

        // Close when link clicked
        mobileMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
            link.addEventListener("click", closeMobileMenu);
        });
    }

    // -------------------------
    // 2️⃣ USER DROPDOWN (TABLET+)
    // -------------------------
    if (userMenuBtn && userDropdown) {
        userMenuBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            userDropdown.classList.toggle("hidden");
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", (e) => {
            const target = e.target as Node;
            if (!userDropdown.contains(target) && !userMenuBtn.contains(target)) {
                userDropdown.classList.add("hidden");
            }
        });
    }

    // -------------------------
    // 3️⃣ PAGE SETTINGS + LOGOUT
    // -------------------------
    pageSettingsBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            alert("Open page settings (implement logic here)");
            closeMobileMenu();
        });
    });

    logoutBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            alert("Logging out... (implement logic here)");
            closeMobileMenu();
        });
    });

    // -------------------------
    // 4️⃣ DARK MODE (using data-theme)
    // -------------------------
    const htmlEl = document.documentElement;

    // Helper: Apply theme
    const applyTheme = (dark: boolean) => {
        htmlEl.setAttribute("data-theme", dark ? "dark" : "light");
        try {
            localStorage.setItem("theme", dark ? "dark" : "light");
        } catch { }
    };

    // Detect saved or system theme
    const savedTheme = (() => {
        try {
            return localStorage.getItem("theme");
        } catch {
            return null;
        }
    })();

    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const initialDark = savedTheme === "dark" || (savedTheme === null && prefersDark);

    // Apply initial theme
    applyTheme(initialDark);

    // Sync toggles with current state
    darkToggles.forEach((toggle) => (toggle.checked = initialDark));

    // Handle toggle change
    darkToggles.forEach((toggle) => {
        toggle.addEventListener("change", (e) => {
            const dark = (e.target as HTMLInputElement).checked;
            applyTheme(dark);
            // Sync both toggles visually
            darkToggles.forEach((t) => (t.checked = dark));
        });
    });
}
