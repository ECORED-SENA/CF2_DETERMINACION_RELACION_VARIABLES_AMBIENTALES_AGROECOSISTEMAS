<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Biodiversidad en agroecosistemas

    
    Separador
    <!-- BLOQUE  -->
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Inventarios y evaluación

    
    Separador
    <!-- BLOQUE  -->
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Gestión entre servicios ecosistémicos y biodiversidad

    
    Separador
    <!-- BLOQUE  -->
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Tipos de coberturas vegetales

    
    Separador
    <!-- BLOQUE  -->
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Bioindicadores

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
