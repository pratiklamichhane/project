<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import gymsathiImage from '../assets/images/gymsathi.png'
import drivingSathiImage from '../assets/images/ds.png';
import itExamsImage from '../assets/images/examsathi.png';
import horizonImage from '../assets/images/horizon.png';
import wrapzapImage from '../assets/images/wrapzap.png';

const projects = [
  {
    title: "Gym Sathi",
    description: "An AI-powered saas-based gym management software that helps gym owners manage their gym operations efficiently. Developed using Laravel, blade , gemini api and Tailwind CSS.",
    link: "https://app.gymsathi.com/",
    image: gymsathiImage,
  },
  {
    title: "Driving Sathi",
    description: "Saas-based management platform that manages driving schools' operations, student enrollments, and schedules. Developed with Laravel, blade, and Tailwind CSS.",
    link: "https://ds.gymsathi.com/",
    image: drivingSathiImage,
  },
  {
    title: "Wrapzap",
    description: "Ecommerce web application for sticker selling brand , wrapzap. Developed with Laravel , includes all the features of ecommerce platform like cart, wishlist, order management etc.",
    link: "https://wrapzapnepal.com/",
    image: wrapzapImage,
  },
  {
    title: "IT Exams",
    description: "Platform which provide online exam preparation materials for IT students. Developed with Laravel, Inertia , Vue and Tailwind CSS. Includes features like AI chatbot , live chat between students.",
    link: "https://examsathi.tech/",
    image: itExamsImage,
  },
  {
    title: "Horizon Explorations",
    description: "Travel agency website developed with Laravel, Vue , and Tailwind CSS. Includes features like booking, payment gateway integration, user management and more.",
    link: "https://horizonexplorations.com/",
    image: horizonImage,
  },
];

const modules = [Navigation];
</script>

<template>
  <section id="projects" class="mb-20">
    <div>
    <h2 class="text-2xl mb-2  bg-gradient-to-r from-blue-200 to-slate-200 bg-clip-text text-transparent">
      Projects people are using.
    </h2>
    <p class="mb-8 text-gray-300">
      Here are some of the projects that are live and running. I have worked on these projects as a solo full-stack developer.
    </p>
  </div>
    <div class="relative">
      <Swiper
        :modules="modules"
        :slides-per-view="2"
        :space-between="16"
        :loop="true"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16
          }
        }"
        class="project-slider"
      >
        <SwiperSlide v-for="project in projects" :key="project.title" class="h-full">
          <div class="flex flex-col h-full bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
            <div class="relative h-48">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6 flex-1 flex flex-col">
              <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-gray-400 mb-4 flex-1">{{ project.description }}</p>
              <a :href="project.link" class="text-blue-400 hover:text-blue-300 transition-colors mt-auto" target="_blank">
                View Project →
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <button class="swiper-button-prev !w-8 !h-8 !bg-gray-800/80 rounded-full !text-white after:!text-sm">
        <span class="swiper-prev-icon">‹</span>
      </button>
      <button class="swiper-button-next !w-8 !h-8 !bg-gray-800/80 rounded-full !text-white after:!text-sm">
        <span class="swiper-next-icon">›</span>
      </button>
    </div>

    <div class="flex justify-center mt-8">
      <p class="text-gray-400">
        There are more projects which cannot be disclosed publicly. If you want
        to know more about my work, feel free to contact me on
        <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors ml-1">LinkedIn</a>
      </p>
    </div>
  </section>
</template>

<style>
.swiper-button-next,
.swiper-button-prev {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: rgba(31, 41, 55, 0.9) !important;
}

.swiper-prev-icon,
.swiper-next-icon {
  font-size: 1.40rem;
  font-weight: bold;
  display: block;
  line-height: 1;
  margin-top: -5px;
}

/* Equal height slides */
.project-slider .swiper-slide {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-slider .swiper-slide div {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 240px;
}
</style>
