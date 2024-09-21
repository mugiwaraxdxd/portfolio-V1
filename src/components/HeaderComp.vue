<template>
  <header>
    <section class="header-text">
      <h1>Yamir Pedrera</h1>
      <h2>Desarrollador Frontend Junior</h2>
      <p>Me dedico a crear experiencias digitales enfocadas al entorno de la web.</p>
    </section>
    <section class="header-links">
      <a :href="'#'+index" v-for="(section, index) in sections" :key="index"
        :class="{ active: observerStore().section == index }"><span
          :class="{ activeSpan: observerStore().section == index }"></span>{{ section }}</a>
    </section>
  </header>
</template>

<script setup>
import { observerStore } from '@/stores/observerStore';


const sections = [
  'SOBRE MÍ',
  'PROYECTOS',
  'EXPERIENCIA'
]
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 360px;
}

.header-text {
  display: flex;
  flex-direction: column;
  text-align: left;
}

h1 {
  color: var(--font1);
  font-weight: 600;
  font-size: 50px;
  margin-bottom: 5px
}

h2 {
  color: var(--font1);
  font-weight: 400;
  font-size: 22px;
  margin-bottom: 20px
}

p {
  color: var(--font2);
  width: 50%;
  font-size: 16px;
}

.header-links {
  display: flex;
  flex-direction: column;
}

a {
  display: flex;
  justify-self: center;
  align-items: center;
  padding: 10px 0;
  width: max-content;
  text-decoration: none;
  color: var(--font2);
  transition: .15s ease;
  font-size: 14px;
  font-family: 'Rubik';
  font-weight: 800;
  margin: 4px 0;
  gap: 10px;
}

span {
  display: block;
  width: 35px;
  height: 1px;
  background-color: var(--font2);
  transition: .15s ease;
}

a:hover {
  color: var(--font1);
}

a:hover span {
  background-color: var(--font1);
  width: 70px;
}

.active {
  color: var(--font1);
}

.activeSpan {
  background-color: var(--font1);
  width: 70px;
}
</style>