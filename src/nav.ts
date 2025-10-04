export const navEl = `
  <header class="relative flex items-center justify-between px-4 py-2 bg-[var(--color-charcoal-500)] text-[var(--color-ash-gray-500)] transition-colors duration-300">
    <!-- Left: Logo -->
    <div class="nav-logo flex items-center space-x-3">
      <img src="/logo.png" alt="Logo" class="h-10 w-10 rounded-full"/>
      <h2 class="text-lg font-semibold">LearnSync</h2>
    </div>

    <!-- Center (desktop/tablet nav links) -->
    <nav class="hidden md:flex items-center space-x-6">
      <a href="#dashboard" class="hover:text-[var(--color-cambridge-blue-500)] transition">Dashboard</a>
      <a href="#learning-logs" class="hover:text-[var(--color-cambridge-blue-500)] transition">Learning Logs</a>
      <a href="#quizzes" class="hover:text-[var(--color-cambridge-blue-500)] transition">Quizzes</a>
      <a href="#projects" class="hover:text-[var(--color-cambridge-blue-500)] transition">Projects</a>
    </nav>

    <!-- Right (User dropdown + dark mode toggle inside dropdown) -->
    <div class="hidden md:flex items-center space-x-3 relative">
      <!-- Dropdown trigger -->
      <button id="userMenuBtn" class="flex items-center space-x-2 hover:text-[var(--color-cambridge-blue-500)] transition">
        <i class="fa-solid fa-user-circle text-xl"></i>
        <span id="username">Wade</span>
        <i class="fa-solid fa-chevron-down text-sm"></i>
      </button>

      <!-- Dropdown content -->
      <div id="userDropdown"
        class="hidden absolute right-0 top-full mt-2 w-48 bg-[var(--color-bg)] text-[var(--color-text)] rounded-md shadow-lg ring-1 ring-black/5">
        <button id="pageSettingsBtn" class="block w-full text-left px-4 py-2 hover:bg-[var(--color-cambridge-blue-900)] transition">Settings</button>
        <button id="logout" class="block w-full text-left px-4 py-2 hover:bg-[var(--color-cambridge-blue-900)] transition">Logout</button>
        <div class="px-4 py-2 flex items-center justify-between border-t border-[var(--color-cambridge-blue-700)]">
          <span class="text-sm">Dark Mode</span>
          <input id="darkToggle" type="checkbox" class="rounded border-gray-300" aria-label="Toggle dark mode"/>
        </div>
      </div>
    </div>

    <!-- Mobile hamburger menu -->
    <button id="menuToggle" aria-expanded="false" aria-controls="mobileMenu"
      class="md:hidden text-[var(--color-ash-gray-500)] text-2xl focus:outline-none">
      <i class="fa-solid fa-bars"></i>
      <span class="sr-only">Open menu</span>
    </button>

    <!-- Mobile dropdown menu -->
    <div id="mobileMenu" role="menu" aria-hidden="true"
      class="hidden absolute right-3 top-full mt-2 w-56 bg-[var(--color-bg)] text-[var(--color-text)] rounded-lg shadow-lg ring-1 ring-black/5 z-50">
      <ul class="flex flex-col gap-1 p-2" role="none">
        <li><a href="#dashboard" class="block px-3 py-2 rounded hover:bg-[var(--color-cambridge-blue-900)]" role="menuitem">Dashboard</a></li>
        <li><a href="#learning-logs" class="block px-3 py-2 rounded hover:bg-[var(--color-cambridge-blue-900)]" role="menuitem">Learning Logs</a></li>
        <li><a href="#quizzes" class="block px-3 py-2 rounded hover:bg-[var(--color-cambridge-blue-900)]" role="menuitem">Quizzes</a></li>
        <li><a href="#projects" class="block px-3 py-2 rounded hover:bg-[var(--color-cambridge-blue-900)]" role="menuitem">Projects</a></li>
      </ul>
      <div class="border-t border-[var(--color-cambridge-blue-700)] my-2"></div>
      <div class="flex items-center justify-between px-3 py-2">
        <button id="pageSettingsBtnMobile" class="text-sm px-2 py-1 rounded hover:bg-[var(--color-cambridge-blue-900)]">Settings</button>
        <button id="logoutMobile" class="text-sm px-2 py-1 rounded hover:bg-[var(--color-cambridge-blue-900)]">Logout</button>
        <input id="darkToggleMobile" type="checkbox" class="rounded border-gray-300" aria-label="Toggle dark mode"/>
      </div>
    </div>
  </header>
`;
