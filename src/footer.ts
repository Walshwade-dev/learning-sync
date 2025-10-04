/**
 * footer.ts
 * Adaptive footer using your theme color variables.
 */

export const footerEl = `
  <footer id="app-footer" 
    class="fixed bottom-0 w-full border-t transition-colors duration-300"
    style="
      background-color: var(--color-dark-slate-gray-500);
      color: var(--color-ash-gray-900);
      border-color: var(--color-dark-slate-gray-400);
    "
  >
    <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      <!-- CTA Section -->
      <div>
        <h3 class="text-xl font-semibold mb-2">AI Learning Assistant</h3>
        <p class="text-sm opacity-80 mb-3">
          Accelerate your learning journey with AI-powered insights and personalized guidance.
        </p>
        <button id="getStartedBtn"
          class="px-4 py-2 rounded-full font-medium transition-colors duration-200"
          style="
            background-color: var(--color-ash-gray-900);
            color: var(--color-dark-slate-gray-500);
          "
          onmouseover="this.style.backgroundColor='var(--color-ash-gray-700)'"
          onmouseout="this.style.backgroundColor='var(--color-ash-gray-900)'"
        >
          Get Started
        </button>
      </div>

      <!-- Features -->
      <div>
        <h4 class="text-lg font-semibold mb-3">Features</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="footer-link">Dashboard</a></li>
          <li><a href="#" class="footer-link">Learning Logs</a></li>
          <li><a href="#" class="footer-link">Quizzes</a></li>
          <li><a href="#" class="footer-link">Projects</a></li>
        </ul>
      </div>

      <!-- Support -->
      <div>
        <h4 class="text-lg font-semibold mb-3">Support</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="footer-link">Help Center</a></li>
          <li><a href="#" class="footer-link">Contact Us</a></li>
          <li><a href="#" class="footer-link">Privacy Policy</a></li>
        </ul>
      </div>

      <!-- Connect -->
      <div>
        <h4 class="text-lg font-semibold mb-3">Connect</h4>
        <div class="flex space-x-4 text-xl">
          <a href="#" aria-label="Twitter" class="footer-icon"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="#" aria-label="LinkedIn" class="footer-icon"><i class="fa-brands fa-linkedin"></i></a>
          <a href="#" aria-label="GitHub" class="footer-icon"><i class="fa-brands fa-github"></i></a>
          <a href="#" aria-label="Instagram" class="footer-icon"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="py-4 text-center text-sm opacity-75 border-t"
      style="border-color: var(--color-dark-slate-gray-400);">
      &copy; ${new Date().getFullYear()} LearnSync. All rights reserved.
    </div>
  </footer>
`;

/**
 * Renders the footer dynamically in the document.
 */
export function renderFooter(containerSelector: string = "body") {
    const container = document.querySelector(containerSelector);

    if (container) {
        const oldFooter = container.querySelector("#app-footer");
        if (oldFooter) oldFooter.remove();

        container.insertAdjacentHTML("beforeend", footerEl);
        setupFooterEvents();
    } else {
        console.warn("Footer container not found:", containerSelector);
    }
}

/**
 * Adds interactivity and dynamic behavior to the footer.
 */
function setupFooterEvents() {
    const getStartedBtn = document.getElementById("getStartedBtn");

    if (getStartedBtn) {
        getStartedBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            alert("🚀 Let's get started with your AI learning journey!");
        });
    }

    // Apply hover effects from CSS variables
    document.querySelectorAll(".footer-link").forEach((link) => {
        link.addEventListener("mouseenter", () => {
            (link as HTMLElement).style.color = "var(--color-cambridge-blue-600)";
        });
        link.addEventListener("mouseleave", () => {
            (link as HTMLElement).style.color = "inherit";
        });
    });

    document.querySelectorAll(".footer-icon").forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
            (icon as HTMLElement).style.color = "var(--color-cambridge-blue-500)";
        });
        icon.addEventListener("mouseleave", () => {
            (icon as HTMLElement).style.color = "inherit";
        });
    });
}
