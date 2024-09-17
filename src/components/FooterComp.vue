<template>
  <footer>
    <a href=""><TwitterXIcon/></a>
    <a href=""><InstagramIcon/></a>
    <a href=""><GithubIcon/></a>
    <a href=""><LinkedInIcon/></a>
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
    svg{
        width: 30px;
        fill: var(--font2);
        transition: .15s ease;
    }
    a:hover svg{
        fill: var(--font1);
    }
</style>
