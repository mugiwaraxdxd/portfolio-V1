<template>
  <div class="body" @mousemove="handleMouseMove">
    <div class="light" :style="{ top: `${lightPosition.y}px`, left: `${lightPosition.x}px` }"></div>
    <div class="web">
      <div class="principal left">
        <Header />
        <Info class="footer" />
      </div>
      <Main class="principal" />
    </div>
  </div>
</template>

<script setup>
import Header from "./components/HeaderComp.vue";
import Info from "./components/InfoComp.vue";
import Main from "./components/MainComp.vue";
import { ref } from "vue";

const lightPosition = ref({ x: 0, y: 0 });

const handleMouseMove = (event) => {
  lightPosition.value = {
    x: event.clientX,
    y: event.clientY
  };
};
</script>

<style>
:root {
  --font1: #E2E8F0;
  --font2: #808EA3;
  --font3:#64748B;
  --blue: #64FFDA;
}

@font-face {
  font-family: 'Rubik';
  src: url(./assets/fonts/Rubik-VariableFont_wght.ttf);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Rubik';
  scroll-behavior: smooth;
  -webkit-tap-highlight-color: transparent;
}

p {
  color: var(--font2);
  line-height: 25px;
  font-size: 16px;
}
p::selection, span::selection, h1::selection, h2::selection, h3::selection, a::selection, img::selection, li::selection {
  background-color: #64FFDA;
  color: #134E4A;
}
.body {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #0F172A;
}

.light {
  position: fixed;
  width: 1100px;
  height: 1100px;
  border-radius: 50%;
  background: radial-gradient(circle,
      rgba(29, 106, 248, 0.148) 0%,
      rgba(0, 102, 255, 0) 70%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 50;
}

.web {
  display: flex;
  gap: 20px;
  width: 1400px;
  height: 100%;
  padding: 0 96px;
  margin: 0 auto;
}

.principal {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.left {
  padding: 96px 0;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  z-index: 100;
  position: sticky;
  top: 0;
}

.footer {
  position: relative;
  bottom: 0;
}

/* DE AQUI EN ADELANTE SON LOS MEDIA QUERIS */

@media (max-width: 1420px) {
  .web {
    width: 100%;
    padding: 0 5%;
  }
}

@media (max-width: 1024px) {
  .light {
    display: none;
  }

  .web {
    flex-direction: column;
    padding: 0 50px;
  }

  .left {
    position: static;
    padding: 56px 0;
    justify-content: start;
    min-height: auto;
    height: 400px;
  }
}

@media (max-width: 700px) {
  .web {
    padding: 0 20px;
  }

  .left {
    padding: 45px 0;
  }
}

/* ESTILOS DE OTROS COMPONENTES QUE NECESITAN ESTAR AQUI */

.span-about {
  font-weight: 500;
  color: var(--font1);
}

.span-footer{
  color: var(--font1);
}
</style>
