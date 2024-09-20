<template>
  <main>
    <About/>
    <Projects/>
    <Prueba/>
  </main>
</template>

<script setup>
    import About from './MainComponents/AboutComp.vue';
    import Projects from './MainComponents/ProjectsComp.vue';
    import Prueba from './PruebaComp.vue';
</script>

<style scoped>
    main {
      display: flex;
      flex-direction: column;
      gap: 120px;
    }
</style>
