<template>
    <section>
        <h3 class="section-title">{{ $t('projectsComp.title') }}</h3>
        <ul @mouseover="active" @mouseleave="unactive" class="projects">
            <li>
                <a target="_blank" :class="{ opacity: transparent }" class="project"
                    href="https://leafy-liart.vercel.app/">
                    <img src="../../assets/images/Leafy-project.png" alt="">
                    <div class="project-text">
                        <h3>Leafy
                            <ArrowIcon />
                        </h3>
                        <p>{{ $t('projectsComp.leafy') }}</p>
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
                <a target="_blank" :class="{ opacity: transparent }" class="project"
                    href="https://yolanda-wood.vercel.app/">
                    <img src="../../assets/images/YW-project.png" alt="">
                    <div class="project-text">
                        <h3>Yolanda Wood
                            <ArrowIcon />
                        </h3>
                        <p>{{ $t('projectsComp.yolanda') }}</p>
                        <ul class="tools-list">
                            <li class="tool">HTML</li>
                            <li class="tool">CSS</li>
                        </ul>
                    </div>
                </a>
            </li>
            <li>
                <a target="_blank" :class="{ opacity: transparent }" class="project"
                    href="https://practice-a-three.vercel.app/">
                    <img src="../../assets/images/A-project.png" alt="">
                    <div class="project-text">
                        <h3>A+
                            <ArrowIcon />
                        </h3>
                        <p>{{ $t('projectsComp.A') }}</p>
                        <ul class="tools-list">
                            <li class="tool">HTML</li>
                            <li class="tool">CSS</li>
                        </ul>
                    </div>
                </a>
            </li>
            <li>
                <a target="_blank" :class="{ opacity: transparent }" class="project"
                    href="https://practice-malecon-663.vercel.app/">
                    <img src="../../assets/images/MALECON-project.png" alt="">
                    <div class="project-text">
                        <h3>MALECON 663
                            <ArrowIcon />
                        </h3>
                        <p>{{ $t('projectsComp.malecon') }}</p>
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
    
}

.section-title {
    color: var(--font1);
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 3px;
    padding: 20px 50px;
    position: sticky;
    top: 0;
    background-color: #0f172aaa;
    backdrop-filter: blur(5px);
    margin-left: -50px;
    margin-right: -50px;
    display: none;
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
    flex-wrap: wrap;
}

.tool {
    padding: 5px 12px;
    background-color: #132E44;
    border-radius: 50px;
    font-size: 12px;
    color: var(--blue);
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
    fill: var(--blue);
    transform: translateY(-5px) translateX(5px);
}

a:hover img {
    border-color: #4B5B7A;
}

a:hover h3 {
    color: var(--blue);
}


.opacity {
    opacity: .3;
}

.opacity1 {
    opacity: 1;
}

@media (max-width: 1024px) {
    img {
        width: 30%;
        max-width: 200px;
    }

    .section-title {
        display: block;
    }

    .opacity {
        opacity: 1;
    }

    a {
        pointer-events: none;
    }

    a h3 {
        pointer-events: auto;
    }
}

@media (min-width: 1025px) {
    a:hover {
        background-color: #4b5b7a1c;
        box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.098);
        border-top: 1px solid rgba(255, 255, 255, 0.091);
        opacity: 1;
    }
}

@media (max-width: 700px) {
    .section-title {
        margin-left: -20px;
        margin-right: -20px;
        padding: 20px;
    }

    a {
        padding: 10px;
    }

    @media (max-width: 640px) {
        a {
            flex-direction: column;
        }

        img {
            order: 3;
            min-width: 200px;
        }

        .projects {
            gap: 70px;
        }
    }
}
</style>
