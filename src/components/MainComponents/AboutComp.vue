<template>
    <section>
        <h3 class="section-title">SOBRE MÍ</h3>
        <p>Alrededor del 2020, comencé a interesarme por el mundo de la programación. Exploré un poco sobre que trataba y
            vi la cantidad de cosas que se pueden crear con dedicación y algo de creatividad. Una vez me decidí por el desarrollo
            web, comencé aprendiendo <span>HTML</span> como suele ser habitual. Al mismo tiempo,investigaba sobre <span>CSS</span> mediante
            cursos y libros. Una vez
            dominé lo básico en ambos realicé, varios proyectos hasta que decidí comenzar con <span>Javascript</span>.
            Tambien hice una
            serie de proyectos allí para familiarizarme mejor y obtener la práctica necesaria. Gracias a todo ello,
            también puedo usar <span>Git</span> y <span>Github</span>. Por último, dominé <span>Vue.js</span>, ya que fue el framework
            por el que opté, y aquí estoy, desarrollando mi primer portfolio con
            dicho framework.</p>

        <p>Actualmente, me encuentro formándome más en el área del backend mientras sigo desarrollando mis habilidades
            con este framework. Estoy aprendiendo sobre <span>Node.js</span> con <span>Express</span> y sobre <span>Bases de datos</span>, tanto
            relacionales como no relacionales. Tengo la certeza de que pronto podré desarrollar aplicaciones web
            completas, y estoy emocionado al respecto.
        </p>

        <p>En resumen, será un placer ayudarte a llevar cualquier idea que te propongas al mundo digital. :)</p>
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
