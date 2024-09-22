<template>
    <section>
        <h3 class="section-title">{{$t('aboutComp.title')}}</h3>
        <p v-html="$t('aboutComp.text1')">
        </p>
        <p  v-html="$t('aboutComp.text2')">
        </p>
        <p  v-html="$t('aboutComp.text3')">
        </p>
    </section>
</template>

<script setup>

</script>

<style scoped>
span {
    font-weight: 500;
    color: var(--font1);
}

section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 96px 0 0 0;
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

@media (max-width: 1024px) {
    .section-title {
        display: block;
    }

    section {
        padding: 0;
    }
}

@media (max-width: 700px) {
    .section-title {
        padding: 20px;
        margin-left: -20px;
        margin-right: -20px;
    }
}
</style>
