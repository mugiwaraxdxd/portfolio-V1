<template>
  <footer>
    <a href=""><TwitterXIcon class="svg"/></a>
    <a href=""><InstagramIcon class="svg"/></a>
    <a href=""><GithubIcon class="svg"/></a>
    <a href=""><LinkedInIcon class="svg"/></a>
  </footer>
</template>

<script setup>
    import TwitterXIcon from '@/assets/icons/TwitterXIcon.vue';
    import InstagramIcon from '@/assets/icons/InstagramIcon.vue';
    import GithubIcon from '@/assets/icons/GithubIcon.vue';
    import LinkedInIcon from '@/assets/icons/LinkedInIcon.vue';
</script>

<style scoped>
    footer{
        display: flex;
        gap: 15px;
    }
    a{
        width: 30px;
        height: 30px;        
    }
    .svg{
        width: 30px;
        fill: var(--font2);
        transition: .15s ease;
    }
    a:hover .svg{
        fill: var(--font1);
    }
</style>
