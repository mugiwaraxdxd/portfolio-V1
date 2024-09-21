<template>
    <section>
        <h3 class="section-title">SOBRE MÍ</h3>
        <p>Alrededor del 2020 comencé a interesarme por el mundo de la programación, exploré un poco sobre que trataba,
            vi el montón de cosas que puedes crear con ganas y algo de creatividad, una vez me decanté por el desarrollo
            web aprendí sobre <span>HTML</span> como cualquier inicio, a la par indagaba sobre <span>CSS</span> mediante
            cursos y libros, una vez
            conocí lo básico en ambos realicé varios proyectos hasta que decidí comenzar con <span>Javascript</span>,
            realicé una
            serie de proyectos ahí tambien para familiarizarme mejor y tener la práctica necesaria, gracias a todo ello
            también puedo usar <span>Git/Github</span>, por último dominé <span>Vue.js</span> ya que fue el framework
            por el que me decidí y aquí estoy, desarrollando mi primer portfolio con
            dicho framework.</p>

        <p>Actualmente me encuentro formándome más en el lado del backend mientras sigo desarrollando mis habilidades
            con este framework, estoy aprendiendo sobre <span>Node.js</span> con <span>Express</span> y a cerca de
            <span>Bases de datos</span> tanto
            relacionales como no relacionales, tengo la certeza de que podré desarrollar pronto aplicaciones web
            completas, estoy emocionado al respecto.
        </p>

        <p>En resumen será un placer ayudarte a llevar al mundo digital cualquier idea que propongas :D</p>
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
    padding: 56px 0 0 0;
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
