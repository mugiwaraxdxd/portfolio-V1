<template>
  <div class="body" @mousemove="handleMouseMove">
    <div class="light" :style="{ top: `${lightPosition.y}px`, left: `${lightPosition.x}px` }"></div>
    <div class="project">
      <div class="left">
        <Header />
        <Footer class="footer"/>
      </div>
      <div class="right">
        
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "./components/HeaderComp.vue";
import Footer from "./components/FooterComp.vue";
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
:root{
  --font1:#E2E8F0;
  --font2:#808EA3;
}
@font-face {
  font-family: 'Inter';
  src: url(./assets/fonts/Inter-Regular.ttf);
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
}

.body {
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: #0F172A;
  overflow: hidden;
}

.light {
  position: absolute;
  width: 1100px;
  height: 1100px;
  border-radius: 50%;
  background: radial-gradient(circle,
      rgba(29, 106, 248, 0.148) 0%,
      rgba(0, 102, 255, 0) 70%);
  pointer-events: none;
  transform: translate(-50%, -50%);
}
.project{
  display: flex;
  gap: 20px;
  width: 1400px;
  height: 100%;
  padding: 0 96px;
  margin: 0 auto;
}
.left{
  width: 50%;
  padding: 96px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.footer{
  position: relative;
  bottom: 0;
}
</style>
