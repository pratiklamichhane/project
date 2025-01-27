<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import Hero from '../components/Hero.vue'
import Projects from '../components/Projects.vue'

const isMenuOpen = ref(false)
const currentSlide = ref(0)
const isIntersecting = ref<{ [key: string]: boolean }>({
  projects: false,
  wpplugins: false,
  personalProjects: false,
  experience: false,
  technologies: false
})

// Projects data with images
const projects = [
  {
    title: 'Gym Sathi',
    description: 'A web application that helps gym owners manage their gym, clients, and payments. Built with Laravel, MySQL, and Tailwind CSS.',
    link: '#',
    image: 'https://img.p30download.ir/software/screenshot/2016/06/1465724301_mocha-pro-ss-2.jpg'
  },
  {
    title: 'Driving Sathi',
    description: 'A web application that connects driving instructors with students. Developed using Laravel, MySQL, and Tailwind CSS.',
    link: '#',
    image: 'https://img.p30download.ir/software/screenshot/2016/06/1465724301_mocha-pro-ss-2.jpg'
  },
  {
    title: 'Wrapzap',
    description: 'A web application that allows users to create and share custom gift wraps. Developed with Laravel, MySQL, and Tailwind CSS.',
    link: '#',
    image: 'https://img.p30download.ir/software/screenshot/2016/06/1465724301_mocha-pro-ss-2.jpg'
  },
  {
    title: 'IT Exams',
    description: 'A web application that helps students prepare for IT certification exams. Developed with Laravel, Vue.js, and Inertia.',
    link: '#',
    image: 'https://img.p30download.ir/software/screenshot/2016/06/1465724301_mocha-pro-ss-2.jpg'
  },
  {
    title: 'Horizon Explorations',
    description: 'A web application that offers guided tours and travel packages. Developed with Laravel, Vue.js, and Inertia.',
    link: '#',
    image: 'https://img.p30download.ir/software/screenshot/2016/06/1465724301_mocha-pro-ss-2.jpg'
  }
]

const personalProjects = [
  {
    title: 'Buddhi Babu | AI Chat Bot - Desktop App',
    description: 'A desktop application that uses gemini API to provide AI-powered chatbot services. Developed with PHP Native',
    link: 'https://github.com/pratiklamichhane/Desktop-app-ai-chat-bot'
  },
  {
    title: 'Musikeyy - Music Streaming platform',
    description: 'A web application that helps manage election processes, candidates, and votes. Developed with Django.',
    link: 'https://github.com/pratiklamichhane/MusiKeyy'
  },
  {
    title: 'Linkify - Manage your links',
    description: 'A web application that allows users to save and manage links from all over the internet. Developed with Laravel and Tailwind CSS.',
    link: 'https://github.com/pratiklamichhane/linkify'
  },
  {
    title: 'Personal Portfolio Website - This website',
    description: 'A personal portfolio website that showcases my projects, skills, and experience. Developed with Vue.js, Tailwind CSS, and Vite.',
    link: "https://github.com/pratiklamichhane/project"
  },
  {
    title: 'Election Management System',
    description: 'A web application that helps manage election processes, candidates, and votes. Developed with Laravel, Vue.js, and Tailwind CSS.',
    link: 'https://github.com/pratiklamichhane/election'
  },
  {
    title: 'Feedwala - Social Media Platform',
    description: 'A social media platform that allows users to share posts, photos, and videos. Developed with Laravel.',
    link: 'https://github.com/pratiklamichhane/Feedwala-Social-Media-'
  },
  {
    title: 'Country Finder',
    description: 'A web application that helps users find countries by their names. Developed with JavaScript.',
    link: 'https://github.com/pratiklamichhane/countryFinder'
  },
  {
    title: 'Boredom - Random Task Generator',
    description: 'A web application that generates random tasks for users to do when they are bored. Developed with Javascript.',
    link: 'https://boredom.netlify.app/'
  },
  {
    title: 'Jockify - Jokes for Developers',
    description: 'A web application that provides jokes for developers to lighten their mood. Developed with Javascript.',
    link: 'https://jockify.netlify.app/'
  },
  {
    title: 'Mitho Mitho Mitho - Recipe App',
    description: 'A web application that provides recipes for users to try at home. Developed with Javascript.',
    link: 'https://mithorecipe.netlify.app/'
  },
 

]


const experience = [
  {
    company: 'F.A.C.T',
    role: 'Software Developer',
    period: '2024 Aug - Present',
    description: 'Developing web applications using Laravel and Vue.js. Responsible for designing and implementing new features, optimizing performance, and ensuring code quality through code reviews and testing.'
  },
  {
    company: 'F.A.C.T',
    role: 'Software Developer Intern',
    period: '2024 May - 2024 Aug',
    description: 'Collaborated with senior developers to build web applications using Laravel and Vue.js. Gained hands-on experience in full-stack development, debugging, and deploying applications.'
  },
  {
    company: 'Freelance',
    role: 'Frontend Developer',
    period: '2022 - 2024',
    description: 'Developed user interfaces for web applications using React and Vue.js. Worked with clients to understand their requirements and deliver high-quality, responsive designs.'
  },
  {
    company: 'Gaming Sansar',
    role: 'Graphics Designer',
    period: '2019 - 2022',
    description: 'Designed graphics for gaming platforms, websites, and social media. Created visually appealing and user-friendly designs that enhanced user engagement and experience.'
  }
]

const Technologies = [
  {
    'name': 'Backend',
    'description': 'Laravel',
    'icon': '🔧'
  },
  {
    'name': 'Frontend',
    'description': 'Vue, React, Nuxt, Next, Tailwind CSS, Bootstrap',
    'icon': '🎨'
  },
  {
    'name': 'Databases',
    'description': 'MySQL, SQLite, MongoDB, Firebase',
    'icon': '💾'
  },
  {
    'name': 'Cloud',
    'description': 'AWS',
    'icon': '☁️'
  },
  {
    'name': 'DevOps',
    'description': 'Docker',
    'icon': '🐳'
  },
  {
    'name': 'Version Control',
    'description': 'Git, Github, Gitlab, Bitbucket',
    'icon': '📚'
  },
  {
    'name': 'Project Management',
    'description': 'Jira, Trello',
    'icon': '📊'
  },
  {
    'name': 'Communication',
    'description': 'Slack',
    'icon': '💬'
  },
  {
    'name': 'API Testing',
    'description': 'Postman, Insomnia',
    'icon': '🔍'
  },
  {
    'name': 'Design',
    'description': 'Figma',
    'icon': '✏️'
  }
]

// WordPress plugins data
const wpplugins = [
  {
    name: 'Elementor widget finder ',
    description: 'A WordPress plugin that helps you find and add Elementor widgets to your website.',
    icon: '🔍',
    link: 'https://github.com/pratiklamichhane/Elementor-Widget-Finder'
  },
  {
    name: 'Specticles customizer plugin',
    description: 'A plugin to enhance WooCommerce stores with a spectacles customization feature.',
    icon: '🕶️',
    link: 'https://github.com/pratiklamichhane/Woocommerce-spectacles-customizer-plugin'
  },
  {
    name: 'Modern woocommerce checkout',
    description: 'A WordPress plugin that transforms the default WooCommerce checkout page into a modern, user-friendly design.',
    icon: '🏗️',
    'link': 'https://github.com/pratiklamichhane/modern-woocommerce-checkout'
  },
]



// Slider functions
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 2) % projects.length
}


// Auto advance timer
let autoAdvanceTimer: number | null = null

const startAutoAdvance = () => {
  stopAutoAdvance()
  autoAdvanceTimer = window.setInterval(nextSlide, 5000)
}

const stopAutoAdvance = () => {
  if (autoAdvanceTimer) {
    clearInterval(autoAdvanceTimer)
    autoAdvanceTimer = null
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target.id) {
          isIntersecting.value[entry.target.id] = entry.isIntersecting
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section)
  })

  // Start auto-advance when component mounts
  startAutoAdvance()
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
    <!-- Navbar -->
    <nav class="px-8 py-4 mb-16">
      <div class="max-w-3xl mx-auto">
        <div class="flex justify-between items-center">
          <div class="text-xl font-bold">Pratik</div>
          <button @click="toggleMenu" class="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul class="hidden md:flex gap-8">
            <li><a href="#" class="hover:text-gray-400 transition-colors">Home</a></li>
            <li><a href="#projects" class="hover:text-gray-400 transition-colors">Projects</a></li>
            <li><a href="#experience" class="hover:text-gray-400 transition-colors">Experience</a></li>
            <li><a href="#technologies" class="hover:text-gray-400 transition-colors">Technologies</a></li>
          </ul>
        </div>
        <div v-show="isMenuOpen" class="md:hidden mt-4">
          <ul class="flex flex-col gap-4">
            <li><a href="#" class="block hover:text-gray-400 transition-colors" @click="toggleMenu">Home</a></li>
            <li><a href="#projects" class="block hover:text-gray-400 transition-colors" @click="toggleMenu">Projects</a></li>
            <li><a href="#experience" class="block hover:text-gray-400 transition-colors" @click="toggleMenu">Experience</a></li>
            <li><a href="#technologies" class="block hover:text-gray-400 transition-colors" @click="toggleMenu">Technologies</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="max-w-3xl mx-auto px-8">
      <!-- Hero Section -->
      <Hero />
      <Projects />
      <!-- Projects Section -->
      <!-- wordpress plugins section-->
      <section id="wpplugins" class="mb-20" :class="{ 'opacity-0': !isIntersecting.wpplugins, 'opacity-100 transition-opacity duration-1000': isIntersecting.wpplugins }">
        <div>
    <h2 class="text-2xl mb-2  bg-gradient-to-r from-blue-200 to-slate-200 bg-clip-text text-transparent">
      I Develop Wordpress Plugins too.
    </h2>
    <p class="mb-8 text-gray-300">
      Here are some of the WordPress plugins that I have developed. I enjoy building plugins that enhance the functionality of WordPress websites and provide users with a better experience.
    </p>
  </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="plugin in wpplugins" :key="plugin.name" 
               class="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
            <div class="text-2xl mb-2">{{ plugin.icon }}</div>
            <h3 class="text-xl mb
            -2">{{ plugin.name }}</h3>
            <p class="text-gray-400">{{ plugin.description }}</p>
            <a :href="plugin.link" class="text-blue-400 hover:text-blue-300 transition-colors mt-auto" target="_blank">
              View Plugin →
            </a>
          </div>
        </div>
      </section>

      <!-- Personal Projects Section -->
       <!-- //persoanal projects in tablular list -->
      <section id="personalProjects" class="mb-20" :class="{ 'opacity-0': !isIntersecting.personalProjects, 'opacity-100 transition-opacity duration-1000': isIntersecting.personalProjects }">
        <div>
    <h2 class="text-2xl mb-2  bg-gradient-to-r from-blue-200 to-slate-200 bg-clip-text text-transparent">
      Personal Open Source Projects I've worked on.
    </h2>
    <p class="mb-8 text-gray-300">
      Here are some of the personal projects that I have worked on in my free time. I enjoy exploring new technologies and building side projects that allow me to experiment with different tools and frameworks.
    </p>
  </div>
        <div class="space-y-8">
          <div v-for="project in personalProjects" :key="project.title" 
               class="border-l-2 border-gray-800 pl-6">
            <h3 class="text-xl">{{ project.title }}</h3>
            <p class="text-gray-400">{{ project.description }}</p>
            <a :href="project.link" class="text-blue-400 hover:text-blue-300 transition-colors mt-2" target="_blank">
              View Project →
            </a>
          </div>
        </div>
      </section>
    
      <!-- Experience Section -->
      <section id="experience" class="mb-20" :class="{ 'opacity-0': !isIntersecting.experience, 'opacity-100 transition-opacity duration-1000': isIntersecting.experience }">
        <div>
    <h2 class="text-2xl mb-2  bg-gradient-to-r from-blue-200 to-slate-200 bg-clip-text text-transparent">
      Experience I've gained so far.
    </h2>
    <p class="mb-8 text-gray-300">
      Here are some of the roles I have held and the experience I have gained over the years. I have worked on a variety of projects, from web development to graphic design, and have developed a wide range of skills that allow me to tackle complex challenges and deliver high-quality solutions.
    </p>
  </div>
        <div class="space-y-8">
          <div v-for="job in experience" :key="job.company" 
               class="border-l-2 border-gray-800 pl-6">
            <h3 class="text-xl">{{ job.role }}</h3>
            <p class="text-gray-400">{{ job.company }} | {{ job.period }}</p>
            <p class="text-gray-300 mt-2">{{ job.description }}</p>
          </div>
        </div>
      </section>

      <!-- Technologies Section -->
      <section id="technologies" class="mb-20" :class="{ 'opacity-0': !isIntersecting.technologies, 'opacity-100 transition-opacity duration-1000': isIntersecting.technologies }">
        <div>
    <h2 class="text-2xl mb-2  bg-gradient-to-r from-blue-200 to-slate-200 bg-clip-text text-transparent">
      Technologies I work with.
    </h2>
    <p class="mb-8 text-gray-300">
      Here are some of the technologies I work with on a daily basis. I have experience with a wide range of tools and frameworks that allow me to build efficient web applications, manage databases, and deploy applications to the cloud. I am always eager to learn new technologies and explore innovative solutions to complex problems.
    </p>
  </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="tech in Technologies" :key="tech.name" 
               class="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
            <div class="text-2xl mb-2">{{ tech.icon }}</div>
            <h3 class="text-xl mb-2">{{ tech.name }}</h3>
            <p class="text-gray-400">{{ tech.description }}</p>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="mt-16 max-w-3xl mx-auto text-center px-8 py-8">
      <div class="flex gap-8 mb-4 justify-center">
        <a href="#" class="text-gray-400 hover:text-gray-300 transition-colors">Github</a>
        <a href="#" class="text-gray-400 hover:text-gray-300 transition-colors">LinkedIn</a>
        <a href="#" class="text-gray-400 hover:text-gray-300 transition-colors">Twitter</a>
        <a href="#" class="text-gray-400 hover:text-gray-300 transition-colors">Email</a>
      </div>
      <div class="text-gray-600">© 2024 MIT Licensed</div>
    </footer>
  </div>
</template>