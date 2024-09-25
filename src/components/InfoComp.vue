<template>
    <section>
        <footer>
            <a title="Twitter/X" target="_blank" href="https://x.com/mugiwara_xdxd?t=M4kitbRc0KcKw39DEdNwFA&s=09">
                <TwitterXIcon class="svg" />
            </a>
            <a title="Instagram" target="_blank"
                href="https://www.instagram.com/mugiwara_xdxd?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==">
                <InstagramIcon class="svg" />
            </a>
            <a title="GitHub" target="_blank" href="https://github.com/mugiwaraxdxd">
                <GithubIcon class="svg" />
            </a>
            <a title="LinkedIn" target="_blank"
                href="https://www.linkedin.com/in/yamir-pedrera-a5162732a/">
                <LinkedInIcon class="svg" />
            </a>
        </footer>
        <div class="gmail"><a href="mailto:yamir.pedrera@gmail.com">yamir.pedrera@gmail.com</a></div>
    </section>
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

.gmail {
    margin-top: 20px;
}

.gmail a {
    font-size: 15px;
    color: var(--font2);
    text-decoration: none;
    padding: 3px;
    margin-left: -10px;
    position: relative;
    transition: .2s ease;
}

.gmail a:hover {
    color: var(--font1);
}

.gmail a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0px;
    height: 1px;
    background-color: var(--blue);
    transition: 0.2s ease;
}

.gmail a:hover::after {
    width: 100%;
    left: 0;
    transform: none;
}
</style>
