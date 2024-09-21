<template>
    <section>
        <ul @mouseover="active" @mouseleave="unactive" class="projects">
            <li>
                <a :class="{ opacity: transparent }" class="project" href="https://leafy-liart.vercel.app/">
                    <img src="../../assets/images/Leafy-project.png" alt="">
                    <div class="project-text">
                        <h3>Leafy
                            <ArrowIcon />
                        </h3>
                        <p>Leafy es un proyecto personal desarrollado con Vue.js para mejorar mis habilidades. Es una
                            landing page responsiva con diseño sencillo, que incluye un banner, servicios, galería de
                            imágenes y formulario de contacto, optimizada para móviles y escritorio.</p>
                        <ul class="tools-list">
                            <li class="tool">Vue.js</li>
                            <li class="tool">HTML</li>
                            <li class="tool">CSS</li>
                            <li class="tool">Javascript</li>
                        </ul>
                    </div>
                </a>

            </li>
            <li>
                <a :class="{ opacity: transparent }" class="project" href="https://yolanda-wood.vercel.app/">
                    <img src="../../assets/images/YW-project.png" alt="">
                    <div class="project-text">
                        <h3>Yolanda Wood
                            <ArrowIcon />
                        </h3>
                        <p>Yolanda Wood es un proyecto de práctica enfocado en una landing page responsive hecha con
                            HTML y CSS. Incluye un banner, servicios, galería y formulario, optimizada para móviles y
                            desktop.</p>
                        <ul class="tools-list">
                            <li class="tool">HTML</li>
                            <li class="tool">CSS</li>
                        </ul>
                    </div>
                </a>
            </li>
            <li>
                <a :class="{ opacity: transparent }" class="project" href="https://practice-a-three.vercel.app/">
                    <img src="../../assets/images/A-project.png" alt="">
                    <div class="project-text">
                        <h3>A+
                            <ArrowIcon />
                        </h3>
                        <p>A+ es un proyecto de práctica diseñado como una landing page adaptable, creada usando solo
                            HTML y CSS. Presenta un banner destacado, secciones de servicios, galería de imágenes, y un
                            formulario de contacto. La página está optimizada para ofrecer una experiencia fluida tanto
                            en dispositivos móviles como en escritorio.</p>
                        <ul class="tools-list">
                            <li class="tool">HTML</li>
                            <li class="tool">CSS</li>
                        </ul>
                    </div>
                </a>
            </li>
            <li>
                <a :class="{ opacity: transparent }" class="project" href="https://practice-malecon-663.vercel.app/">
                    <img src="../../assets/images/MALECON-project.png" alt="">
                    <div class="project-text">
                        <h3>MALECON 663
                            <ArrowIcon />
                        </h3>
                        <p>Esta landing page, MALECON 663, se desarrolló como un ejercicio práctico utilizando
                            únicamente HTML y CSS. Ofrece un diseño responsivo que incluye un banner principal, una
                            sección de servicios, una galería de imágenes y un formulario de contacto, garantizando una
                            experiencia de navegación fluida tanto en dispositivos móviles como en escritorio.</p>
                        <ul class="tools-list">
                            <li class="tool">HTML</li>
                            <li class="tool">CSS</li>
                        </ul>
                    </div>
                </a>
            </li>
        </ul>
    </section>
</template>

<script setup>
import ArrowIcon from '@/assets/icons/ArrowIcon.vue';
import { ref } from 'vue';

let transparent = ref(false)

const active = () => {
    transparent.value = true;
}
const unactive = () => {
    transparent.value = false;
}

</script>

<style scoped>
section {
    padding: 96px 0 0 0;
}

li {
    list-style: none;
}

img {
    width: 130px;
    height: min-content;
    border-radius: 5px;
    border: 2px solid #242E47;
    transition: .15s ease;
}

svg {
    width: 15px;
    margin-left: 5px;
    transition: .15s ease;
}

.project {
    display: flex;
    gap: 20px;
}

.projects {
    display: flex;
    flex-direction: column;
    gap: 30px;
    z-index: 999;
}

.project-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.tools-list {
    display: flex;
    gap: 10px;
}

.tool {
    padding: 5px 12px;
    background-color: #132E44;
    border-radius: 50px;
    font-size: 12px;
    color: #64FFDA;
}

h3 {
    display: flex;
    align-items: center;
    color: var(--font1);
    font-weight: 400;
    font-size: 18px;
    transition: .15s ease;
}

p {
    font-size: 15px;
}

a {
    text-decoration: none;
    padding: 30px;
    border-radius: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0);
    transition: .15s ease;
}

a:hover svg {
    fill: #64FFDA;
    transform: translateY(-5px) translateX(5px);
}

a:hover img {
    border-color: #4B5B7A;
}

a:hover h3 {
    color: #64FFDA;
}

a:hover {
    background-color: #4b5b7a1c;
    box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.098);
    border-top: 1px solid rgba(255, 255, 255, 0.091);
    opacity: 1;
}

.opacity {
    opacity: .3;
}

.opacity1 {
    opacity: 1;
}
</style>
