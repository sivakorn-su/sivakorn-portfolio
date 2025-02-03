<template>
  <section class="profile-container mt-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-12 lg:py-24">
    <div class="flex flex-col md:flex-row justify-between items-start gap-8">
      <!-- Left content -->
      <div class="flex-1">
        <h1 class="text-4xl font-bold mb-4 flex items-center gap-2">
          Hi, I'm Note<span class="wave-emoji">👋</span>
        </h1>
        <p class="text-gray-700 mb-6 leading-relaxed">
          I'm a backend engineer specializing in PHP (Laravel), Node.js (NestJS), and ASP.NET MVC, with a passion for
          building functional, user-friendly, and scalable web applications. I thrive on solving complex problems,
          optimizing performance, and staying up to date with emerging technologies. Even with over a year of
          experience, I remain eager to learn, innovate, and create impactful digital solutions.
        </p>

        <div class="flex items-center gap-2 mb-4">
          <span class="text-gray-600">🇹🇭 Bangkok, Thailand</span>
        </div>

        <div class="flex items-center gap-2 mb-6">
          <span class="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
          <span class="text-gray-600">Available for new projects</span>
        </div>

        <!-- Social Links -->
        <div class="flex gap-4">
          <a class="text-gray-600 hover:text-gray-900" href="#">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                  d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3ZM17 15H7V13H17V15ZM17 11H7V9H17V11Z"/>
            </svg>
          </a>
          <a class="text-gray-600 hover:text-gray-900" href="#">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"
              />
            </svg>
          </a>
          <a class="text-gray-600 hover:text-gray-900" href="#">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Right content - Profile Image -->
      <div class="w-full md:w-80">
        <div class="relative ">
          <img
              alt="Profile"
              class="w-full h-auto rounded-full"
              src="/public/icons/image_cropped.png"
          />
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'ProfileSection'
}
</script>

<style scoped>
.wave-emoji {
  animation: wave 2.5s infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>