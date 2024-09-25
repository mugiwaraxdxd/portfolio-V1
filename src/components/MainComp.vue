<template>
  <main>
    <About id="0"/>
    <Projects id="1"/>
    <Footer id="2"></Footer>
  </main>
</template>

<script setup>
    import About from './MainComponents/AboutComp.vue';
    import Projects from './MainComponents/ProjectsComp.vue';
    import Footer from './FooterComp.vue';
    import { observerStore } from '@/stores/observerStore';
    import { ObserveElements } from '@/composables/Observer';

    const store = observerStore()

    store.setCurrentSection(ObserveElements('section'))

</script>

<style scoped>
    main {
      display: flex;
      flex-direction: column;
      gap: 70px
    }
</style>
