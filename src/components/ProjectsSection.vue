<script setup lang="ts">
const projects = [
  {
    title: 'Portfolio Site',
    description: 'My personal portfolio built with Vue and Vite.',
    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    link: 'https://example.com',
  },
  {
    title: 'Laravel API',
    description: 'REST API service built with Laravel and Sanctum.',
    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    link: 'https://example.com',
  },
];
</script>

<template>
  <section id="projects">
    <h2>Projects</h2>
    <div class="projects-grid">
      <div class="project-card" v-for="project in projects" :key="project.title">
        <img :src="project.image" :alt="project.title" class="w-96" />
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank">View Project</a>
      </div>
    </div>
  </section>
</template>
