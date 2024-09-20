<template>
    <ul @mouseover="active" @mouseleave="unactive" class="projects">
        <li>
            <a :class="{ opacity: transparent}" class="project" href="https://leafy-liart.vercel.app/">
                <img src="../../assets/images/Leafy-project.png" alt="">
                <div class="project-text">
                    <h3>Leafy
                        <ArrowIcon />
                    </h3>
                    <p>Desarrollé una landing page responsiva usando solo HTML y CSS. El diseño incluye secciones como
                        un
                        banner principal, descripción de servicios, galería de imágenes y un formulario de contacto. Se
                        optimizó para una experiencia de usuario fluida en dispositivos móviles y de escritorio.</p>
                    <ul class="tools-list"></ul>
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
                    <p>Desarrollé una landing page responsiva usando solo HTML y CSS. El diseño incluye secciones como
                        un
                        banner principal, descripción de servicios, galería de imágenes y un formulario de contacto. Se
                        optimizó para una experiencia de usuario fluida en dispositivos móviles y de escritorio.</p>
                    <ul class="tools-list"></ul>
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
                    <p>Desarrollé una landing page responsiva usando solo HTML y CSS. El diseño incluye secciones como
                        un
                        banner principal, descripción de servicios, galería de imágenes y un formulario de contacto. Se
                        optimizó para una experiencia de usuario fluida en dispositivos móviles y de escritorio.</p>
                    <ul class="tools-list"></ul>
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
                    <p>Desarrollé una landing page responsiva usando solo HTML y CSS. El diseño incluye secciones como
                        un
                        banner principal, descripción de servicios, galería de imágenes y un formulario de contacto. Se
                        optimizó para una experiencia de usuario fluida en dispositivos móviles y de escritorio.</p>
                    <ul class="tools-list"></ul>
                </div>
            </a>
        </li>
    </ul>
    <button @click="mostrar">a</button>
    <ul>
        <li class="prueba" :class="{visible: isInViewport[0]}">element1</li>
        <li class="prueba" :class="{visible: isInViewport[1]}">element2</li>
        <li class="prueba" :class="{visible: isInViewport[2]}">element3</li>
        <li>a</li>
        <li>s</li>
        <li>d</li>
        <li>s</li>
        <li>s</li>
        <li ref="observedElement1" >SOY EL 1</li>
        <li>s</li>
        <li>s</li>
        <li>s</li>
        <li>s</li>
        <li>s</li>
        <li ref="observedElement2">SOY EL 2</li>
        <li>s</li>
        <li>s</li>
        <li>s</li>
        <li>s</li>
        <li >s</li>
        <li>s</li>
        <li ref="observedElement3" >SOY EL 3</li>
        <li>s</li>
    </ul>
    
</template>

<script setup>
import ArrowIcon from '@/assets/icons/ArrowIcon.vue';
import { ref } from 'vue';
import { useMultipleIntersectionObserver } from '@/composables/Observer';

let transparent = ref(false)

const active = () => {
    transparent.value = true;
}
const unactive = () => {
    transparent.value = false;
}

const observedElement1 = ref(null);
const observedElement2 = ref(null);
const observedElement3 = ref(null);

const { isInViewport } = useMultipleIntersectionObserver([
    observedElement1,
    observedElement2,
    observedElement3
]);


const mostrar = () => {
    console.log(isInViewport.value);
}


</script>

<style scoped>
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
.visible{
    background-color: red;
}
.prueba{
    transition: 2s ease;
}
</style>
