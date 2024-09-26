<template>
    <section>
        <p v-html="$t('footerComp.footer')">
        </p>
    </section>
</template>

<script setup>

</script>

<style scoped>
section {
    padding: 10px 150px 100px 30px;
}

section p {
    font-size: 14px;
    color: var(--font3);
}

@media (max-width: 700px) {
    section {
        padding: 10px 150px 100px 10px;
    }

    @media (max-width: 640px) {
        section {
            padding: 10px 100px 100px 10px;
        }
    }
    @media (max-width: 500px) {
        section {
            padding: 10px 70px 100px 10px;
        }
    }
    @media (max-width: 500px) {
        section {
            padding: 10px 50px 100px 10px;
        }
    }
}
</style>
