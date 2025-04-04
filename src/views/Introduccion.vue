<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.fondo-text-img
      .col-lg.mb-3
        .col.d-flex
          p El componente formativo aborda el impacto de las variables ambientales en los agroecosistemas, definiendo aquellas de tipo meteorológico y las relacionadas con los componentes agua y suelo. Estas influyen directamente en la productividad y el desarrollo de los agroecosistemas, por lo que su análisis es fundamental para una gestión sostenible. Posteriormente, se establecen criterios de priorización mediante una matriz que permite evaluar la importancia de cada variable según el tipo de agroecosistema a estudiar.
        .row.mb-3
          .col-lg-auto
            figure(data-aos="fade-right").d-none.d-xl-block
              img(src="@/assets/curso/intro/img1.png" style="max-width: 300px").m-auto
          .col-lg.caja-text-intro
            p.mb-0 Una vez identificadas las variables, se aplican parámetros como magnitud, gravedad, capacidad y beneficio para priorizarlas en función de su impacto en el agroecosistema. Esta metodología facilita la toma de decisiones informadas para la optimización de prácticas agrícolas y pecuarias, promoviendo un equilibrio entre producción y conservación ambiental.
        .col
          p El uso de herramientas de priorización contribuye a la gestión sostenible de los recursos naturales, minimizando el deterioro ambiental. Además, permite la implementación de estrategias adaptadas a las condiciones específicas de cada agroecosistema, asegurando su resiliencia y sostenibilidad a largo plazo.
      .col-lg-auto.p-0
        figure(data-aos="fade-up").d-none.d-xl-block
          img(src="@/assets/curso/intro/img2.png" style="max-width: 300px").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
