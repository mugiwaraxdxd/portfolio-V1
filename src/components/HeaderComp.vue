<template>
  <header>
    <section class="header-text">
      <h1>Yamir Pedrera</h1>
      <h2>{{ $t('headerComp.headerText.dev') }}</h2>
      <p>{{ $t('headerComp.headerText.info') }}</p>
    </section>
    <section class="header-links">
      <a :href="'#' + index" v-for="(section, index) in sections" :key="index"
        :class="{ active: observerStore().section == index }"><span
          :class="{ activeSpan: observerStore().section == index }"></span>{{ $t(`headerComp.links.${section}`) }}</a>
    </section>
    <div @click="changeLang" class="lang">
      <LangIcon :class="{ langES: es }" class="circle" />
      <p class="en" :class="{ unactive: es }">EN</p>
      <p class="es" :class="{ active: es }">ES</p>
    </div>
  </header>
</template>

<script setup>
import { observerStore } from '@/stores/observerStore';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import LangIcon from '@/assets/icons/LangIcon.vue';

let { locale } = useI18n()
let es = ref(false)

const changeLang = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en'
  es.value = !es.value
}

const sections = [
  'aboutLink',
  'projectsLink',
  'experienceLink'
]
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 460px;
}

.lang {
  cursor: pointer;
  width: 75px;
  border: 1px solid var(--font2);
  height: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  align-items: center;
  position: relative;
  transition: .2s ease;
}

.lang p {
  color: var(--font1);
}

.circle {
  position: absolute;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  right: 5px;
  transition: .2s ease;
}

.langES {
  transform: translateX(-33px);
}

p {
  transition: .2s ease;
}

.es {
  opacity: 0;
}

.active {
  opacity: 1;
}

.unactive {
  opacity: 0;
}

.lang:hover {
  border-color: #64FFDA;
}

.lang:hover .circle {
  fill: #64FFDA;
}

select {
  width: 40px;
  appearance: none;
  background-color: unset;
  outline: none;
  box-shadow: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
}

option {
  background-color: unset;
  transition: .2s ease;
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
  margin-bottom: 20px;
}

.header-text p {
  color: var(--font2);
  width: 50%;
  font-size: 16px;
  min-width: 320px;
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

@media (max-width: 1024px) {
  header {
    margin-bottom: 40px;
    height: auto;
  }

  .header-links {
    display: none;
  }

  .lang {
    margin-top: 20px;
  }
}

@media (max-width: 700px) {
  h1 {
    font-size: 37px;
  }

  h2 {
    font-size: 18px;
  }

  p {
    font-size: 15px;

  }

  .lang:hover {
    border-color: var(--font2);
  }

  .lang:hover .circle {
    fill: var(--font2);
  }
  .lang, .circle{
    transition: .1s ease;
  }
  .lang:active {
    border-color: #64FFDA;
  }

  .lang:active .circle {
    fill: #64FFDA;
  }
}

@media (max-width: 360px) {
  .header-text p {
    min-width: 280px;
  }
}
</style>