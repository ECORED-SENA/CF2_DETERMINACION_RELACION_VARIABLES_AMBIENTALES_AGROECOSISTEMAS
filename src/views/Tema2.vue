<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Definición de las variables ambientales
    
    <!-- BLOQUE 1 -->
    .row.h-100.align-items-center.text-tema1-bloque1.d-d-flex
      .col-lg
        p.mb-0 Para mayor comprensión a continuación, se describen cada una de las variables ambientales que pueden tener incidencia en el desarrollo de los agroecosistemas.
      .col-lg-auto.p-0
        figure(data-aos="fade-left").d-none.d-lg-block
          img(src="@/assets/curso/tema2/img1.png" style="max-width: 400px").m-auto

    <!-- BLOQUE 2 -->
    .row.fondo-tema2
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido
        h2 2.1 Variables agroclimáticas
      
      p.mb-5 Entre las variables agroclimáticas más importantes están:

      .row.mb-4
        .col-lg-3.col-md-6
          .caja-text-img-tema1-bloque2.h-100
            .col-7
              figure(data-aos="flip-right").mb-3
                img(src='@/assets/curso/tema2/img1.svg', alt='Texto que describa la imagen' style="max-width: 95px").m-auto
            h5.mb-4 Temperatura (°C)
            p Magnitud física que expresa el grado de frío o calor de los cuerpos o del ambiente.
        .col-lg-3.col-md-6.ajuste-2
          .caja-text-img-tema1-bloque2.h-100
            .col-7
              figure(data-aos="flip-right").mb-3
                img(src='@/assets/curso/tema2/img2.svg', alt='Texto que describa la imagen' style="max-width: 95px").m-auto
            h5.mb-4 Humedad Relativa (%)
            p Cantidad de vapor de agua presente en el aire en relación a la máxima posible para unas condiciones dadas de presión y temperatura.
        .col-lg-3.col-md-6.ajuste-1
          .caja-text-img-tema1-bloque2.h-100
            .col-7
              figure(data-aos="flip-left").mb-3
                img(src='@/assets/curso/tema2/img3.svg', alt='Texto que describa la imagen' style="max-width: 95px").m-auto
            h5.mb-4 Precipitación (mm)
            p Cantidad de lluvias que se presenta en un lugar y tiempo determinado. La relación entre precipitación y temperatura a través del tiempo constituyen los escenarios de cambio climático.
        .col-lg-3.col-md-6.ajuste-1
          .caja-text-img-tema1-bloque2.h-100
            .col-7
              figure(data-aos="flip-left").mb-3
                img(src='@/assets/curso/tema2/img4.svg', alt='Texto que describa la imagen' style="max-width: 95px").m-auto
            h5.mb-4 Velocidad del Viento (m/s)
            p Relación de la distancia recorrida por el aire con respecto al tiempo empleado en recorrerla.

    p.mb-4 Según la FAO (2021), IDEAM (2018) y Minagricultura (2024), las variables agroclimáticas permiten identificar las condiciones atmosféricas que pueden afectar la producción agrícola y el equilibrio de los agroecosistemas. Algunos de los principales factores que influyen en su desarrollo incluyen:

    .row.fondo-slider.mb-4
      .ajuste-slider
        SlyderA(tipo="b")
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img2.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Temperatura
              p Influye en la germinación, crecimiento y desarrollo de los cultivos. Determina la tasa de fotosíntesis y respiración de las plantas. Variaciones extremas pueden afectar la producción agrícola (heladas, sequías).
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img3.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Humedad relativa
              p Afecta la transpiración de las plantas y la evapotranspiración del suelo. Valores muy altos pueden favorecer enfermedades por hongos, mientras que valores bajos pueden provocar estrés hídrico en los cultivos.
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img4.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Precipitación
              p Factor clave para la disponibilidad de agua en los suelos y la hidratación de los cultivos. Excesos pueden causar erosión e inundaciones, mientras que déficits generan sequías.

          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img5.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Radiación solar
              p Su cantidad y calidad afectan el crecimiento y rendimiento de los cultivos. Una radiación insuficiente puede reducir la producción, mientras que una excesiva puede provocar estrés térmico.
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img6.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Vientos
              p Influye en la dispersión de semillas, polinización y evaporación del agua del suelo. Puede favorecer la erosión del suelo. Vientos fuertes pueden afectar estructuras agrícolas e incrementar la evaporación del agua disponible.
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img7.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Presión atmosférica
              p Afecta el comportamiento del clima y la formación de fenómenos meteorológicos que ocasionan variabilidad climática. Cambios en la presión pueden influir en la temperatura y humedad del ambiente.
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img8.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Evapotranspiración
              p Relacionada con la disponibilidad de agua para los cultivos. Determina la necesidad de riego en los sistemas de producción agrícola.
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img9.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Nubosidad
              p Influye en la cantidad de radiación solar que llega a la superficie terrestre. Un exceso de nubosidad puede reducir la fotosíntesis, mientras que una nubosidad escasa puede aumentar la evaporación y la temperatura.

    p Además de estas variables, es importante conocer en determinados casos el comportamiento de variables como el caudal de fuentes hídricas aledañas, radiación solar, brillo solar, rosa de vientos, horas brillo solar entre otras.

    Separador
    <!-- BLOQUE 3 -->
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Definición de las variables ambientales del agua
    
    p La calidad del agua es el resultado de comparar las características físicas, químicas y microbiológicas encontradas en el agua con el contenido de las normas que regulan la materia (IDEAM, 2018). Las variables o parámetros de calidad de agua recomendados para realizar el monitoreo se definen a continuación (IDEAM, 2018):

    .titulo-sexto.color-acento-contenido.mb-3.d-flex
      h5 Tabla 1.
      span Definición de variables asociadas a la calidad del agua


      

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
