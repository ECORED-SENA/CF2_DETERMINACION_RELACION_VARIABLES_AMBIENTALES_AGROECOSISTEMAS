<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Biodiversidad en agroecosistemas
    
    <!-- BLOQUE 1 -->
    .row.text-tema1-bloque1.h-100.align-items-center.d-d-flex.ajuste-movil-bloque4.m-0
      .col-lg
        p.mb-0 La diversidad agrícola o agrodiversidad es un concepto que vincula la diversidad biológica con la producción agrícola. Su importancia radica en la disponibilidad de recursos asociados a la flora y fauna, incluyendo bioindicadores del suelo y otros organismos que favorecen el desarrollo óptimo de los agroecosistemas. En los últimos años, los científicos han resaltado la relevancia de la biodiversidad para que los sistemas agrícolas produzcan en armonía con el medio biótico, convirtiéndola en un principio fundamental de la agricultura sostenible (Metroflor-Agro, 2017).
      .col-lg-auto.p-0
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img1.png" style="max-width: 400px").m-auto
    
    Separador
    <!-- BLOQUE 2 -->
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Inventarios y evaluación
    
    p.mb-5.ajuste-movil-bloque4 Conocer la biodiversidad en un sistema agrícola o pecuario es esencial para implementar un manejo sostenible y garantizar una productividad óptima a lo largo del ciclo de vida del agroecosistema. A continuación, se presentan algunos aspectos clave que justifican la gestión de la biodiversidad en una finca (FAO, 2018).

    .row.fondo-slider
      .ajuste-slider
        SlyderA(tipo="b")
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure.mb-3
                img(src='@/assets/curso/tema1/img2.png', alt='')
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Aumento de producción
              p Permite satisfacer la creciente demanda de alimentos mientras se conserva la biodiversidad y se reduce la presión sobre los recursos naturales y los ecosistemas.
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure.mb-3
                img(src='@/assets/curso/tema1/img3.png', alt='')
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Seguridad alimentaria
              p Garantiza la producción sostenible de alimentos nutritivos frente a desafíos como el cambio climático, el crecimiento poblacional y las variaciones en la dieta.
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure.mb-3
                img(src='@/assets/curso/tema1/img4.png', alt='')
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Sector agrícola como usuario de la biodiversidad
              p Una gestión sostenible de los agroecosistemas favorece funciones ecosistémicas esenciales para la producción agrícola.

          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure.mb-3
                img(src='@/assets/curso/tema1/img5.png', alt='')
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Servicios reguladores
              p El mantenimiento adecuado de tierras agrícolas y forestales ayuda a mitigar riesgos y minimizar daños causados por fenómenos climáticos extremos.
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure.mb-3
                img(src='@/assets/curso/tema1/img6.png', alt='')
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Menor erosión
              p La cubierta vegetal protege el suelo contra la erosión y mantiene su fertilidad mediante procesos biológicos naturales como la fijación de nitrógeno.
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure.mb-3
                img(src='@/assets/curso/tema1/img7.png', alt='')
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Control biológico
              p Los enemigos naturales de las plagas, como depredadores, parásitos y agentes patógenos, proporcionan un control biológico que reduce la necesidad de agroquímicos.
      
    Separador
    <!-- BLOQUE 3 -->
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Gestión entre servicios ecosistémicos y biodiversidad
    
    p.mb-5.ajuste-movil-bloque4 Según la FAO (2018), es fundamental promover sistemas productivos sostenibles basados en los principios de la agroecología. Este enfoque permite integrar factores ecológicos, sociales y propios de los agroecosistemas, garantizando una producción en armonía con la biodiversidad. Para ello, es necesario implementar acciones climáticas que vinculen la conservación de la biodiversidad con el desarrollo territorial sostenible.

    .titulo-sexto.color-acento-contenido.mb-3.ajuste-movil-bloque4
      h5 Figura 1.
      span Gestión de la biodiversidad y servicios
    
    .row.justify-content-center.m-0.mb-1
      .col-lg-12.caja-img-tema1-bloque3
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema1/img16.svg', alt='La imagen describe la necesidad de integrar los principios de la agroecología con las necesidades de biodiversidad, contemplando acciones climáticas y enfoques de desarrollo territorial' style="max-width: 1200px").m-auto
    figcaption Nota. Tomado de Agricultura Sostenible y Biodiversidad. FAO (2018, p. 33). 
    
    Separador
    <!-- BLOQUE 4 -->
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Tipos de coberturas vegetales
    
    p.ajuste-movil-bloque4 Teniendo en cuenta la leyenda nacional de coberturas de la tierra 2010, las categorías de primer nivel según metodología <em>Corine Land Cover</em> se definen como (IDEAM, 2009): 

    .row.fondo-slider
      .ajuste-slider
        SlyderA(tipo="b")
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure.mb-3
                img(src='@/assets/curso/tema1/img8.png', alt='')
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Territorios artificializados
              p Comprende áreas urbanas y zonas contiguas en proceso de transformación por ordenamiento territorial o cambio de uso del suelo con fines comerciales, industriales, de servicios y recreativos.
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure.mb-3
                img(src='@/assets/curso/tema1/img9.png', alt='')
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Territorios agrícolas
              p Áreas dedicadas a la producción de alimentos y materias primas industriales. Incluyen cultivos, pastoreo, sistemas agroforestales, industrialización agrícola, cultivos transitorios y zonas agrícolas heterogéneas.
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure.mb-3
                img(src='@/assets/curso/tema1/img10.png', alt='')
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Bosques y áreas seminaturales
              p Incluye coberturas vegetales boscosas, arbustivas y herbáceas en distintos sustratos y altitudes. También abarca suelos desnudos, afloramientos rocosos, plantaciones forestales y vegetación secundaria o en transición.
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure.mb-3
                img(src='@/assets/curso/tema1/img11.png', alt='')
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Áreas húmedas
              p Terrenos húmedos que pueden inundarse temporalmente y estar cubiertos parcialmente por vegetación acuática. Se encuentran en bordes marinos y en el interior del continente.
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure.mb-3
                img(src='@/assets/curso/tema1/img12.png', alt='')
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Superficies de agua
              p Cuerpos y cauces de agua permanentes, intermitentes o estacionales, tanto en el interior del continente como en zonas costeras. Incluye fondos marinos de hasta 12 metros de profundidad.
    
    Separador
    <!-- BLOQUE 5 -->
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Bioindicadores
    
    .row.m-0
      .col-lg
        .row.caja-text-img-tema1-bloque5.mb-3.ajuste-movil-bloque4
          .col-lg-auto
            figure(data-aos="fade-right").d-none.d-xl-block
              img(src="@/assets/curso/tema1/img1.svg" style="max-width: 90px").m-auto
          .col-lg
            p.mb-0 Los bioindicadores o indicadores biológicos comprenden procesos biológicos, especies o comunidades de organismos utilizados para evaluar la calidad del medio ambiente y su evolución a lo largo del tiempo. Las variaciones en el entorno pueden deberse tanto a la intervención humana (contaminación, erosión, actividades agrícolas) como a procesos naturales (sequías, heladas). Sin embargo, la investigación sobre bioindicadores se centra principalmente en los factores antropogénicos, ya que son los que generan mayor impacto ambiental (<em>Holt</em> y Miller, 2010).
        p.mb-4 A continuación, se describen los diferentes tipos de bioindicadores, según el tipo de ecosistema de estudio, y algunos ejemplos (Fernández, 2020):
      .col-lg-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img13.png" style="max-width: 400px").m-auto
    
    .row.mb-4.m-0
      .col-lg-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img.ajuste-img-tema1-bloque5(src="@/assets/curso/tema1/img14.svg" style="max-width: 420px").m-auto
      .col-lg.caja-text-img-tema1-bloque5-1.d-flex.h-100.justify-content-center.align-items-center
        .col-auto
          figure.d-none.d-lg-block.img-intro
            img.img-tema1-bloque5(src="@/assets/curso/tema1/img15.svg" style="max-width: 185px").m-auto
        .col
          h4.mb-5 Lo invitamos a escuchar el siguiente <em>Podcast</em>:
          TarjetaAudio.color-secundario.mb-3(
            texto="Bioindicadores"
            :audio="require('@/assets/componentes/audios/Podcast_CF2_DETERMINACION_RELACION_VARIABLES_AMBIENTALES_AGROECOSISTEMAS.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
    p El muestreo de cada bioindicador varía según el tipo de organismo. Por ejemplo, en el caso de las aves, se puede llevar a cabo un inventario mediante observación directa. Para registrar insectos acuáticos, se emplean trampas entomológicas como método de recolección. En el caso de los microorganismos, es necesario tomar muestras y enviarlas a un laboratorio para su análisis y procesamiento.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<script>
export default {
  components: {},
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
