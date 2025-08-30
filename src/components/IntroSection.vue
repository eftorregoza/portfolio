<script setup lang="ts"></script>

<template>
  <section id="intro" class="flex justify-center">
    <div class="flex h-svh w-full flex-col justify-center gap-12 bg-white/0 p-2 md:max-w-4xl md:flex-row">
      <div class="flex items-center justify-center">
        <img src="" alt="Image here" class="h-52 w-52 border" />
      </div>
      <div class="mx-auto flex flex-col gap-4 text-center sm:justify-center md:text-left">
        <h1>Hi, I'm Exxel 👋</h1>
        <p>
          I'm a full stack developer mainly specializing in
          <strong>Laravel</strong> and <strong>Vue.js</strong>. <br />I have a background in teaching basic web development with PHP, and
          I'm always curious about how technology works behind the scenes.
        </p>
        <p>
          Outside of coding, I enjoy <strong>running</strong> and going to the <strong>gym</strong>. I&CloseCurlyQuote;m also into gaming —
          some of my favorites are <strong>Tekken</strong>, <strong>TFT</strong>, and <strong>Wild Rift</strong>.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
strong {
  color: var(--color-accent-1);
}
</style>
