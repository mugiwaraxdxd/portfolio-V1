<template>
    <div class="main">
        <div>
            <h1>lista</h1>
            <article v-for="(header, index) of headers" :key="header">
                <h2 :id="index">{{ header }}</h2>
                <p>me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel
                    me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me resingo en fidel me
                    resingo en fidel me resingo en fidel </p>
            </article>
        </div>
        <aside>
            <ul>
                <li v-for="(header, index) of headers" :key="index" :class="{ cambio: index == currentSection }">{{
                    header }}</li>
                <li>{{ currentSection }}</li>
            </ul>
        </aside>
    </div>
</template>

<script setup>
import { ObserveElements } from '@/composables/Observerr';

const headers = [
    'caca1',
    'caca2',
    'caca3',
    'caca4',
    'caca5',
]

const currentSection = ObserveElements('article h2')



</script>

<style scoped>
.main {
    display: flex;
    flex-direction: row;
}

aside {
    position: fixed;
    top: 500px;
    right: 0;
}

.cambio {
    color: white;
}
</style>
