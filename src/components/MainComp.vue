<template>
  <main>
    <About id="0"/>
    <Projects id="1"/>
  </main>
</template>

<script setup>
    import About from './MainComponents/AboutComp.vue';
    import Projects from './MainComponents/ProjectsComp.vue';
    import { observerStore } from '@/stores/observerStore';
    import { ObserveElements } from '@/composables/Observer';

    const store = observerStore()

    store.setCurrentSection(ObserveElements('section'))

</script>

<style scoped>
    main {
      display: flex;
      flex-direction: column;
      gap: 120px;
    }
</style>
