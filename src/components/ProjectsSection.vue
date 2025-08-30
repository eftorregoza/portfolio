<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  year: number;
  stack: string[];
}

const projects: Project[] = [
  {
    title: 'Portfolio v1',
    description: 'My first personal portfolio site built with Laravel in 2024.',
    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    link: '#',
    year: 2024,
    stack: ['Laravel', 'React'],
  },
  {
    title: 'Portfolio v2',
    description: 'This current personal portfolio built with Vue 3 and Vite in 2025.',
    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    link: '#',
    year: 2025,
    stack: ['Vue 3', 'Vite', 'TypeScript'],
  },
  {
    title: 'Snicosh',
    description: 'An e-commerce site built with WordPress and WooCommerce.',
    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    link: 'https://snicosh.com',
    year: 2024,
    stack: ['WordPress', 'WooCommerce', 'PHP'],
  },
  {
    title: 'Sample LMS',
    description: 'A demo Learning Management System built with Laravel and Vue.js.',
    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    link: '#',
    year: 2023,
    stack: ['Laravel', 'Vue 3', 'TypeScript'],
  },
];
</script>

<template>
  <section id="projects" class="xl:px-0">
    <div class="flex flex-col gap-8 p-0 md:gap-18">
      <h2 class="text-center">Projects</h2>
      <div
        class="projects-grid mx-auto grid w-full grid-cols-1 gap-12 sm:grid-cols-2 md:w-2xl md:gap-16 lg:w-4xl lg:grid-cols-2 xl:w-full xl:grid-cols-3 2xl:grid-cols-4"
      >
        <div
          class="project-card rounded-x flex w-full flex-col rounded-xl border border-black/10 bg-white/30 shadow-xl shadow-sky-800/30"
          v-for="(project, index) in projects"
          :key="index"
          :class="{ 'xl:col-start-2 2xl:col-start-4': index === projects.length - 1 }"
        >
          <div class="project-card-header">
            <img :src="project.image" :alt="project.title" class="w-full rounded-tl-xl rounded-tr-xl" />
          </div>
          <div
            class="project-card-body flex h-auto flex-1 flex-col justify-between space-y-4 px-6 pt-4 pb-6 sm:space-y-4 sm:py-6 sm:pt-6 sm:pb-8 md:space-y-5"
          >
            <div class="space-y-1">
              <h3>
                <a href="#" target="_blank">{{ project.title }}</a>
              </h3>
              <p class="leading-normal">{{ project.description }}</p>
            </div>
            <ul class="flex list-inside flex-wrap gap-2 text-sm">
              <li v-for="(tech, index) in project.stack" :key="index" class="rounded-xl border px-2 py-0.5">{{ tech }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <p v-for="n in 10" class="mt-10" :key="n">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat molestiae magni quidem nostrum dicta reprehenderit unde ipsum
    consequuntur. Ex odio maxime quo hic, facere distinctio necessitatibus laudantium, exercitationem debitis provident cum inventore
    officia veritatis quasi voluptatem nesciunt enim! Aut veritatis itaque optio ullam rerum quis, sunt consectetur, placeat dolor esse,
    sequi eius at maxime. Alias recusandae quis hic nesciunt, rerum facere debitis libero necessitatibus esse! Laboriosam praesentium, aut
    inventore vel dolores commodi accusamus porro a perferendis, consequatur molestias modi doloremque necessitatibus vero. Vero soluta eum
    magni dolore suscipit impedit quibusdam nobis ipsum nemo! Unde molestias sequi perferendis nisi ex?
  </p> -->
</template>
