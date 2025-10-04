export const footerEl = `
  <footer class="bg-[#0f4c5c] text-white mt-10">
    <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      <!-- CTA Section -->
      <div>
        <h3 class="text-xl font-semibold mb-2">AI Learning Assistant</h3>
        <p class="text-sm text-gray-200 mb-3">
          Accelerate your learning journey with AI-powered insights and personalized guidance.
        </p>
        <button class="bg-white text-[#0f4c5c] px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>

      <!-- Features -->
      <div>
        <h4 class="text-lg font-semibold mb-3">Features</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:underline">Dashboard</a></li>
          <li><a href="#" class="hover:underline">Learning Logs</a></li>
          <li><a href="#" class="hover:underline">Quizzes</a></li>
          <li><a href="#" class="hover:underline">Projects</a></li>
        </ul>
      </div>

      <!-- Support -->
      <div>
        <h4 class="text-lg font-semibold mb-3">Support</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:underline">Help Center</a></li>
          <li><a href="#" class="hover:underline">Contact Us</a></li>
          <li><a href="#" class="hover:underline">Privacy Policy</a></li>
        </ul>
      </div>

      <!-- Connect -->
      <div>
        <h4 class="text-lg font-semibold mb-3">Connect</h4>
        <div class="flex space-x-4 text-xl">
          <a href="#" aria-label="Twitter" class="hover:text-gray-300"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="#" aria-label="LinkedIn" class="hover:text-gray-300"><i class="fa-brands fa-linkedin"></i></a>
          <a href="#" aria-label="GitHub" class="hover:text-gray-300"><i class="fa-brands fa-github"></i></a>
          <a href="#" aria-label="Instagram" class="hover:text-gray-300"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-600 py-4 text-center text-sm text-gray-300">
      &copy; ${new Date().getFullYear()} LearnSync. All rights reserved.
    </div>
  </footer>
`;
