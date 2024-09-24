<template>
    <footer>
        <a target="_blank" href="https://x.com/mugiwara_xdxd?t=M4kitbRc0KcKw39DEdNwFA&s=09">
            <TwitterXIcon class="svg" />
        </a>
        <a target="_blank" href="https://www.instagram.com/mugiwara_xdxd?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==">
            <InstagramIcon class="svg" />
        </a>
        <a target="_blank" href="https://github.com/mugiwaraxdxd">
            <GithubIcon class="svg" />
        </a>
        <a target="_blank"
            href="https://www.linkedin.com/in/yamir-pedrera-b49a47325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <LinkedInIcon class="svg" />
        </a>
    </footer>
</template>

<script setup>
import TwitterXIcon from '@/assets/icons/TwitterXIcon.vue';
import InstagramIcon from '@/assets/icons/InstagramIcon.vue';
import GithubIcon from '@/assets/icons/GithubIcon.vue';
import LinkedInIcon from '@/assets/icons/LinkedInIcon.vue';
</script>

<style scoped>
footer {
    display: flex;
    gap: 15px;
    width: min-content;
}

a {
    width: 30px;
    height: 30px;
}

.svg {
    width: 30px;
    fill: var(--font2);
    transition: .15s ease;
}

a:hover .svg {
    fill: var(--font1);
}
</style>
