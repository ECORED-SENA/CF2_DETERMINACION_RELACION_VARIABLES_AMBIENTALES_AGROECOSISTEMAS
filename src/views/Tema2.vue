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
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema2/img1.png" style="max-width: 400px").m-auto

    <!-- BLOQUE 2 -->
    .row.fondo-tema2
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido
        h2 2.1 Variables agroclimáticas
      
      p.mb-5.ajuste-movil-bloque4 Entre las variables agroclimáticas más importantes están:

      .row.mb-4.ajuste-movil-bloque4
        .col-xl-3.col-md-6
          .caja-text-img-tema1-bloque2.h-100(data-aos="flip-left")
            .col-7
              figure.mb-3
                img(src='@/assets/curso/tema2/img1.svg', alt='' style="max-width: 95px").m-auto
            h5.mb-4.text-center Temperatura (°C)
            p Magnitud física que expresa el grado de frío o calor de los cuerpos o del ambiente.
        .col-xl-3.col-md-6.ajuste-2
          .caja-text-img-tema1-bloque2.h-100(data-aos="flip-left")
            .col-7
              figure.mb-3
                img(src='@/assets/curso/tema2/img2.svg', alt='' style="max-width: 95px").m-auto
            h5.mb-4.text-center Humedad Relativa (%)
            p Cantidad de vapor de agua presente en el aire en relación a la máxima posible para unas condiciones dadas de presión y temperatura.
        .col-xl-3.col-md-6.ajuste-1
          .caja-text-img-tema1-bloque2.h-100(data-aos="flip-left")
            .col-7
              figure.mb-3
                img(src='@/assets/curso/tema2/img3.svg', alt='' style="max-width: 95px").m-auto
            h5.mb-4.text-center Precipitación (mm)
            p Cantidad de lluvias que se presenta en un lugar y tiempo determinado. La relación entre precipitación y temperatura a través del tiempo constituyen los escenarios de cambio climático.
        .col-xl-3.col-md-6.ajuste-1
          .caja-text-img-tema1-bloque2.h-100(data-aos="flip-left")
            .col-7
              figure.mb-3
                img(src='@/assets/curso/tema2/img4.svg', alt='' style="max-width: 95px").m-auto
            h5.mb-4.text-center Velocidad del Viento (m/s)
            p Relación de la distancia recorrida por el aire con respecto al tiempo empleado en recorrerla.

    p.mb-4 Según la FAO (2021), IDEAM (2018) y Minagricultura (2024), las variables agroclimáticas permiten identificar las condiciones atmosféricas que pueden afectar la producción agrícola y el equilibrio de los agroecosistemas. Algunos de los principales factores que influyen en su desarrollo incluyen:

    .row.fondo-slider.mb-4
      .ajuste-slider
        SlyderA(tipo="b")
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure.mb-3
                img(src='@/assets/curso/tema2/img2.png', alt='')
            .col-lg-6.mb-4
              h4.mb-4 Temperatura
              p Influye en la germinación, crecimiento y desarrollo de los cultivos. Determina la tasa de fotosíntesis y respiración de las plantas. Variaciones extremas pueden afectar la producción agrícola (heladas, sequías).
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure.mb-3
                img(src='@/assets/curso/tema2/img3.png', alt='')
            .col-lg-6.mb-4
              h4.mb-4 Humedad relativa
              p Afecta la transpiración de las plantas y la evapotranspiración del suelo. Valores muy altos pueden favorecer enfermedades por hongos, mientras que valores bajos pueden provocar estrés hídrico en los cultivos.
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure.mb-3
                img(src='@/assets/curso/tema2/img4.png', alt='')
            .col-lg-6.mb-4
              h4.mb-4 Precipitación
              p Factor clave para la disponibilidad de agua en los suelos y la hidratación de los cultivos. Excesos pueden causar erosión e inundaciones, mientras que déficits generan sequías.
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure.mb-3
                img(src='@/assets/curso/tema2/img5.png', alt='')
            .col-lg-6.mb-4
              h4.mb-4 Radiación solar
              p Su cantidad y calidad afectan el crecimiento y rendimiento de los cultivos. Una radiación insuficiente puede reducir la producción, mientras que una excesiva puede provocar estrés térmico.
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure.mb-3
                img(src='@/assets/curso/tema2/img6.png', alt='')
            .col-lg-6.mb-4
              h4.mb-4 Vientos
              p Influye en la dispersión de semillas, polinización y evaporación del agua del suelo. Puede favorecer la erosión del suelo. Vientos fuertes pueden afectar estructuras agrícolas e incrementar la evaporación del agua disponible.
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure.mb-3
                img(src='@/assets/curso/tema2/img7.png', alt='')
            .col-lg-6.mb-4
              h4.mb-4 Presión atmosférica
              p Afecta el comportamiento del clima y la formación de fenómenos meteorológicos que ocasionan variabilidad climática. Cambios en la presión pueden influir en la temperatura y humedad del ambiente.
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure.mb-3
                img(src='@/assets/curso/tema2/img8.png', alt='')
            .col-lg-6.mb-4
              h4.mb-4 Evapotranspiración
              p Relacionada con la disponibilidad de agua para los cultivos. Determina la necesidad de riego en los sistemas de producción agrícola.
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6
              figure.mb-3
                img(src='@/assets/curso/tema2/img9.png', alt='')
            .col-lg-6.mb-4
              h4.mb-4 Nubosidad
              p Influye en la cantidad de radiación solar que llega a la superficie terrestre. Un exceso de nubosidad puede reducir la fotosíntesis, mientras que una nubosidad escasa puede aumentar la evaporación y la temperatura.

    p Además de estas variables, es importante conocer en determinados casos el comportamiento de variables como el caudal de fuentes hídricas aledañas, radiación solar, brillo solar, rosa de vientos, horas brillo solar entre otras.

    Separador
    <!-- BLOQUE 3 -->
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Definición de las variables ambientales del agua
    
    p.mb-4.ajuste-movil-bloque4 La calidad del agua es el resultado de comparar las características físicas, químicas y microbiológicas encontradas en el agua con el contenido de las normas que regulan la materia (IDEAM, 2018). Las variables o parámetros de calidad de agua recomendados para realizar el monitoreo se definen a continuación (IDEAM, 2018):

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 1.
      span Definición de variables asociadas a la calidad del agua
    
    .tabla-a.ajuste-tabla.mb-4(data-aos="fade-up")
      table
        caption Nota. Tomado y adaptado de IDEAM (2018)
        thead
          tr
            th Clasificación
            th Variable de calidad de agua
            th Unidad
            th Definición
        tbody
          tr
            td Variables <em>In Situ</em>
            td pH
            td Unidades de pH
            td.ajuste-align Número de iones libres de hidrógeno (H+) en una sustancia. El pH sirve como un indicador que compara algunos de los iones más solubles en agua. El pH aceptado para agua de uso agrícola está entre 4,5 y 9,0.
          tr
            td Variables <em>In Situ</em>
            td Conductividad (CE)
            td µs/cm
            td.ajuste-align El grado de salinidad se mide por su conductividad eléctrica.
          tr
            td Variables <em>In Situ</em>
            td Oxígeno Disuelto (OD)
            td mg/L
            td.ajuste-align Cantidad de oxígeno disuelto en el agua. Si se encuentra una concentración de 5 a 6 ppm, hay oxígeno suficiente para la mayor parte de las especies. Menor de 3 ppm, es dañino para el ecosistema. A partir de este punto hacia abajo, el ecosistema experimenta hipoxia. Menor de 2 ppm, es fatal para la mayor parte de las especies (anoxia).
          tr
            td Variables <em>In Situ</em>
            td Porcentaje de saturación de oxígeno
            td %
            td.ajuste-align Oxígeno disuelto en mg/L, dividido por el 100 % del valor de oxígeno disuelto para el agua (a la misma temperatura y presión del aire).
          tr
            td Físicos
            td Sólidos suspendidos totales
            td mg/L
            td.ajuste-align Suma de los valores del Total de Sólidos en Suspensión (SST) por punto de muestreo, dividido por el número de puntos de muestreo. Los Sólidos Suspendidos Totales (SST) hacen referencia al material particulado que se mantiene en suspensión en las corrientes de agua superficial y/o residual.
          tr
            td Físicos
            td Sólidos disueltos totales
            td mg/L
            td.ajuste-align Suma de todos los minerales, metales, y sales disueltos en el agua.
          tr
            td Físicos
            td Turbidez
            td UNT
            td.ajuste-align La turbidez es una medida del grado en el cual el agua pierde su transparencia debido a la presencia de partículas en suspensión.
          tr
            td Materia Orgánica
            td Demanda Bioquímica de Oxígeno (DBO)
            td mg/L
            td.ajuste-align Cantidad de oxígeno requerido para oxidación de la materia orgánica biodegradable presente en la muestra de agua, como resultado de la acción de oxidación aerobia.
          tr
            td Materia Orgánica
            td Demanda Química de Oxígeno (DQO)
            td mg/L
            td.ajuste-align Cantidad de oxígeno requerido para oxidar la materia orgánica en una muestra de agua, bajo condiciones específicas de agente oxidante, temperatura y tiempo.
          tr
            td Microbiológicos
            td Coliformes Totales
            td UFC/100 mL
            td.ajuste-align Bacterias gramnegativas, no esporoformadoras, oxidasa negativa, con capacidad de crecimiento aeróbico y facultativamente anaeróbico en presencia de sales biliares, que, a temperatura especificada de 35ºC +/- 2ºC, causan fermentación de lactosa con producción de gas. Poseen la enzima B-galactosidasa. La presencia de valores por encima del número máximo permitido indica contaminación microbiológica del agua.
    
    .row.m-0
      .caja-text-img-nota.ajuste-movil-bloque3
        .col-lg-auto.align-self-center
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/tema2/img5.svg" style="width: 85px").m-auto
        .col-lg
          p.mb-0 Según el alcance del estudio de medición de variables ambientales y de las características del agroecosistema, se pueden adicionar o suprimir parámetros para la medición de la calidad del agua.

    Separador
    <!-- BLOQUE 4 -->
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Definición variables ambientales para calidad del suelo
    
    .row.mb-4.ajuste-movil-bloque4
      .col-lg
        p.mb-5 Entre las principales variables del suelo que pueden influir en el desarrollo de los agroecosistemas se encuentran las siguientes:
        .caja-titulos-tercer-nivel.mb-4(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/img6.svg" style="max-width: 62px").m-auto
          .col
            h3 Textura y estructura del suelo
        p La textura es una propiedad física determinada por la composición granulométrica del suelo, compuesta por arena, limo y arcilla, cuyos diámetros están definidos según la escala de la Sociedad Internacional de la Ciencia del Suelo. Por otro lado, la estructura hace referencia a la forma en que las partículas se agrupan, lo que influye en la porosidad, la retención de agua y la aireación del suelo (Fundación Grupo Cajamar, 2024).
      .col-lg-auto.align-self-center  
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src="@/assets/curso/tema2/img10.png" style="max-width: 400px").m-auto
    
    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 2.
      span Triangulo textural y estructura de suelo

    .row.fondo-color.align-items-center.m-0.justify-content-center.mb-2
      .col-lg-auto.m-0
        figure(data-aos="fade-right")
          img(src="@/assets/curso/tema2/img11.svg" alt="La imagen contiene el triángulo textural, el cual relaciona los porcentajes entre arcilla, arena y limo, lo cual permite clasificar la textura de un suelo, adicionalmente muestra los tipos de estructura que puede presentar el suelo." style="max-width: 600px").m-auto
      .col-lg.text-tema2-bloque4(data-aos="fade-left")
        p.mb-0 Nota. La textura (izquierda) franca, junto con la estructura (derecha) granular, son las ideales en agricultura, porque facilitan que exista una proporción ideal de aire 25 %, agua 25 %, minerales 45 %, y materia orgánica 5%. Tomado de Fundación Grupo Cajamar, 2024. 
    
    figcaption.mb-5 Nota. Tomado de Fundación Grupo Cajamar, 2024. 
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img6.svg" style="max-width: 62px").m-auto
      .col
        h3 Profundidad del suelo
    
    .row.m-0.mb-4
      .col-lg-auto.align-self-center
        figure.ajuste-img.d-none.d-xl-block(data-aos="fade-up")
          img(src="@/assets/curso/tema2/img12.png" style="max-width: 400px").m-auto
      .col-lg.ajuste-movil-bloque4
        p.mb-0.text-tema2-bloque4-1.mb-3 Comprende la capa superficial del suelo (horizonte A) y el subsuelo (horizontes E y B). El horizonte C se caracteriza por presentar un menor grado de formación edafogénetica. La profundidad efectiva del suelo se define como el espesor total del perfil edáfico que influye en el desarrollo de las plantas (FAO, 2025).
        p.mb-0 Los horizontes del suelo son capas que determinan sus características y propiedades. El sistema de clasificación más utilizado para su designación emplea letras mayúsculas: H, O, A, E, B, C y R, que representan los horizontes dominantes. A continuación, se presenta una tabla y figura explicativa con su clasificación.
    
    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 2.
      span Definiciones y designaciones simplificadas de los horizontes dominantes del suelo
    
    .tabla-a.ajuste-tabla.mb-5(data-aos="fade-up")
      table
        caption Nota. Tomado de documento <em>Web</em> “Generalidades”. FAO (2025). 
        thead
          tr
            th Símbolo
            th Horizonte dominante
        tbody
          tr
            td H
            td.ajuste-align <strong>Horizonte orgánico</strong>, formado (o en formación) por un depósito de materia orgánica en la superficie del suelo. Se compone por un 20 a 30% de materia orgánica, y ésta depende del tipo de vegetación de donde procede la materia orgánica. 
          tr
            td O
            td.ajuste-align <strong>Horizonte orgánico</strong>, a diferencia que no está saturado de agua más de unos cuantos días por año. Contiene por lo menos un 35% de materia orgánica que, por lo general, consiste en materia orgánica parcialmente descompuesta.
          tr
            td A
            td.ajuste-align <strong>Horizonte mineral</strong>, formado (o en formación) en la superficie o adyacente a ésta. Este horizonte muestra una acumulación de materia orgánica humificada altamente asociada con partículas minerales. Es de coloración algo más oscura que el horizonte B subyacente y el material orgánico descompuesto aparece mezclado con el material mineral dependiendo a la actividad biológica.
          tr
            td E
            td.ajuste-align <strong>Horizonte eluvial</strong>, yace bajo un horizonte H, O o A. Contiene menos materia orgánica, presenta una acumulación de minerales resistentes y es de color más claro. Se forma por la pérdida de hierro, arcilla fina, etc., que han sido trasladados al horizonte B subyacente y se acumulan allí.
          tr
            td B
            td.ajuste-align <strong>Horizonte mineral</strong>, en que las partículas minerales (solas o combinadas con humus) se han concentrado con el decursar del tiempo.
          tr
            td C
            td.ajuste-align <strong>Horizonte mineral de material no consolidado</strong>, a partir del cual se ha desarrollado el suelo. También se incluyen aquí los materiales gravosos y pedregosos de fondo que permiten el desarrollo de las raíces.
          tr
            td R
            td.ajuste-align <strong>Capa de roca continua endurecida</strong>, suficientemente coherente en húmedo para hacer imposible la excavación con una pala. Esta roca puede tener fisuras, pero éstas son muy escasas y demasiado pequeñas para un desarrollo radical significativo. 

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 3.
      span Horizontes del suelo
    
    .row.fondo-color.h-100.align-items-center.m-0.justify-content-center.mb-5
      .col-lg-auto
        figure(data-aos="fade-up").py-4
          img(src="@/assets/curso/tema2/img13.png" alt="La imagen realiza una representación gráfica de los horizontes del suelo, los cuales componen el suelo, subsuelo y roca madre." style="max-width: 500px").m-auto
    
    .row.mb-5.ajuste-movil-bloque4
      .col-lg-6.mb-3
        .caja-titulos-tercer-nivel.ajuste__movil(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/img6.svg" style="max-width: 62px").m-auto
          .col.ajuste-movil
            h3 Densidad del suelo
        figure(data-aos="fade-up").py-4
          img(src="@/assets/curso/tema2/img14.png" style="max-width: 650px").m-auto
        p.mb-0.ajuste-color-1 Permite determinar la porosidad total del suelo, ya que se refiere al peso por unidad de volumen. Se distinguen dos tipos: la densidad real, que corresponde a las partículas densas del suelo y varía según su composición, con un valor promedio de 2,65; y la densidad aparente, que considera el volumen total del suelo, incluyendo espacios porosos (FAO, 2025).
      .col-lg-6
        .caja-titulos-tercer-nivel.ajuste__movil(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/img6.svg" style="max-width: 62px").m-auto
          .col
            h3 pH del suelo
        figure(data-aos="fade-up").py-4
          img(src="@/assets/curso/tema2/img15.png" style="max-width: 650px").m-auto
        p.mb-0.ajuste-color-2 Indica la actividad de los iones hidrógeno en la solución del suelo, determinando si es ácido, neutro o alcalino. Este parámetro influye en múltiples factores edáficos y afecta directamente el crecimiento de las plantas.
    
    .caja-titulos-tercer-nivel.mb-4(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img6.svg" style="max-width: 62px").m-auto
      .col
        h3 Macronutrientes y micronutrientes del suelo
    
    p.mb-4 El suelo proporciona nutrientes esenciales para el crecimiento saludable de las plantas, los cuales se clasifican en dos grandes grupos según su abundancia:

    .row.mb-4.ajuste-movil-bloque4
      .col-lg-6.mb-4
        .caja-text-img-nota-corto.d-flex.h-100
          .col-xl-3
            figure(data-aos="fade-up").d-none.d-xl-block
              img(src="@/assets/curso/tema2/img7.svg" style="width: 85px").m-auto
          .col-xl-9
            h4.p-0 Macronutrientes
            p.mb-0.p-0 Incluyen nitrógeno, fósforo, potasio, calcio y magnesio. Se encuentran en mayor cantidad y son esenciales para el desarrollo de las plantas.
      .col-lg-6.mb-4
        .caja-text-img-nota-corto.d-flex.h-100
          .col-xl-3
            figure(data-aos="fade-up").d-none.d-xl-block
              img(src="@/assets/curso/tema2/img8.svg" style="width: 85px").m-auto
          .col-xl-9
            h4.p-0 Micronutrientes
            p.mb-0.p-0 Comprenden zinc, boro, molibdeno, manganeso, cloro y cobre. Aunque están presentes en menor proporción, son indispensables para el metabolismo vegetal.
    
    p.mb-4 Para comprender la relevancia de estas y otras variables que influyen en el desarrollo de los agroecosistemas, la siguiente tabla relaciona las variables con la condición y las funciones del suelo.

    .bg--img_03.mb-4
      .row.h-100.align-items-center
        .col-lg-auto
          figure(data-aos="fade-up").d-none.d-xl-block
            img(src="@/assets/curso/tema2/img16.png", alt='' style="width: 370px").m-auto
        .col-lg
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Físicas").ajuste-cajaAcordion
              <ul class="fa-ul">
                <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf ajuste-i"></i></span><strong>Textura y estructura</strong>: influye en la retención y transporte de agua y compuestos químicos, además de afectar la erosión del suelo.</li>
                <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf ajuste-i"></i></span><strong>Profundidad del suelo</strong>: determina la productividad potencial del suelo y su susceptibilidad a la erosión.</li>
                <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf ajuste-i"></i></span><strong>Infiltración y densidad aparente</strong>: relacionada con el potencial de lavado, la productividad del suelo y su erosividad.</li>
                <li><span class="fa-li"><i class="fas fa-leaf ajuste-i"></i></span><strong>Capacidad de retención de agua</strong>: influye en la retención de agua, el transporte de compuestos, la erosividad, la humedad aprovechable, la textura y la materia orgánica del suelo.</li>
              </ul>
            .row(titulo="Químicas ").ajuste-cajaAcordion
              <ul class="fa-ul">
                <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf ajuste-i"></i></span><strong>Materia orgánica (N y C total)</strong>: define la fertilidad del suelo, su estabilidad y su susceptibilidad a la erosión.</li>
                <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf ajuste-i"></i></span><strong>pH</strong>: determina la actividad química y biológica del suelo.</li>
                <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf ajuste-i"></i></span><strong>Conductividad eléctrica</strong>: influye en la actividad vegetal y microbiana.</li>
                <li><span class="fa-li"><i class="fas fa-leaf ajuste-i"></i></span><strong>P, N y K extractables</strong>: representan los nutrientes disponibles para la planta, la posible pérdida de nitrógeno, la productividad y los indicadores de calidad ambiental.</li>
              </ul>               
            .row(titulo="Biológicas").ajuste-cajaAcordion
              <ul class="fa-ul">
                <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf ajuste-i"></i></span><strong>Biomasa microbiana (C y N)</strong>: representa el potencial microbiano catalítico y actúa como depósito de carbono y nitrógeno, reflejando cambios tempranos en la materia orgánica debido al manejo del suelo.</li>
                <li class="mb-3"><span class="fa-li"><i class="fas fa-leaf ajuste-i"></i></span><strong>Respiración, humedad y temperatura</strong>: miden la actividad microbiana y permiten estimar la actividad de la biomasa.</li>
                <li><span class="fa-li"><i class="fas fa-leaf ajuste-i"></i></span><strong>N potencialmente mineralizable</strong>: indica la productividad del suelo y el suministro potencial de nitrógeno.</li>
              </ul>
    .row.mb-5.ajuste-movil-bloque4
      .col-lg
        p.mb-4 Para seleccionar los indicadores que forman parte de las variables de calidad del suelo, es necesario que cumplan con ciertas condiciones (Masera et al., 2000):
        <ul class="fa-ul ajuste-ul-tema2">
          <li><span class="fa-li"><i class="fas fa-leaf ajuste-i"></i></span>Ser integradores.</li>
          <li><span class="fa-li"><i class="fas fa-leaf ajuste-i"></i></span>Ser fáciles de medir, basados en información objetiva y de fácil reconocimiento.</li>
          <li><span class="fa-li"><i class="fas fa-leaf ajuste-i"></i></span>Adecuarse al nivel de análisis y al sistema estudiado.</li>
          <li><span class="fa-li"><i class="fas fa-leaf ajuste-i"></i></span>Ser aplicables a diversos ecosistemas y condiciones.</li>
          <li><span class="fa-li"><i class="fas fa-leaf ajuste-i"></i></span>Reflejar el atributo de sostenibilidad que se desea evaluar.</li>
          <li><span class="fa-li"><i class="fas fa-leaf ajuste-i"></i></span>Ser comprensibles y accesibles para su interpretación.</li>
          <li><span class="fa-li"><i class="fas fa-leaf ajuste-i"></i></span>Permitir identificar cambios y diferencias entre los sistemas.</li>
          <li><span class="fa-li"><i class="fas fa-leaf ajuste-i"></i></span>Centrarse en aspectos prácticos y relevantes.</li>
        </ul>
      .col-lg-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema2/img17.svg", alt='' style="width: 410px").m-auto
    
    .caja-titulos-tercer-nivel.mb-4(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img6.svg" style="max-width: 62px").m-auto
      .col
        h3 Metodología de priorización
      
    .row.fondo-tema2-1
      p.mb-5 Se recomienda el uso de la <strong>matriz de priorización</strong>, una herramienta que permite jerarquizar variables ambientales según su magnitud, gravedad, capacidad y beneficio, facilitando la toma de decisiones en el manejo del agroecosistema. Para su aplicación, se deben seguir los siguientes pasos:
      .row.mb-4
        .col-xl-3.col-md-6
          .caja-text-img-tema1-bloque2.h-100(data-aos="flip-left")
            .col-7
              figure.mb-3
                img(src='@/assets/curso/tema2/img9.svg', alt='' style="max-width: 95px").m-auto
            h5.mb-4.text-center Revisión bibliográfica
            p Investigar y seleccionar información sobre las variables ambientales que influyen en el agroecosistema.
        .col-xl-3.col-md-6.ajuste-2
          .caja-text-img-tema1-bloque2.h-100(data-aos="flip-left")
            .col-7
              figure.mb-3
                img(src='@/assets/curso/tema2/img10.svg', alt='' style="max-width: 95px").m-auto
            h5.mb-4.text-center Consulta con actores locales
            p Consultar con técnicos y agricultores locales para conocer los aspectos ambientales relevantes que están generando impacto en la región.
        .col-xl-3.col-md-6.ajuste-1
          .caja-text-img-tema1-bloque2.h-100(data-aos="flip-left")
            .col-7
              figure.mb-3
                img(src='@/assets/curso/tema2/img20.svg', alt='' style="max-width: 95px").m-auto
            h5.mb-4.text-center Particularidades del agroecosistema
            p Tipo de cultivo. Plan de fertilización. Prácticas agropecuarias. Asistencia técnica. Requerimiento de condiciones climáticas.
        .col-xl-3.col-md-6.ajuste-1
          .caja-text-img-tema1-bloque2.h-100(data-aos="flip-left")
            .col-7
              figure.mb-3
                img(src='@/assets/curso/tema2/img12.svg', alt='' style="max-width: 95px").m-auto
            h5.mb-4.text-center Análisis de impacto
            p Evaluar cada variable que podría impactar el rendimiento del agroecosistema de acuerdo a las condiciones o requerimiento de producción.

    p.mb-4 Existen metodologías de priorización como la Matriz Vester y el Proceso de Jerarquía Analítica (AHP); sin embargo, la matriz de priorización es sencilla de aplicar y se recomienda para efectos del curso de formación, como se presenta a continuación.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 3.
      span Criterios de valoración para matriz de priorización
    
    .tabla-a.ajuste-tabla.mb-5(data-aos="fade-up")
      table
        thead
          tr
            th Criterio
            th Descripción
            th Escala de valoración
        tbody
          tr
            td Magnitud (M)
            td.ajuste-align ¿Cuántas prácticas de manejo del agroecosistema afectan esta variable?
            td 0 – 1 = 1 
              br
              |2 - 3 = 2; 
              br
              |4 o más = 3
          tr
            td Gravedad (G)
            td.ajuste-align ¿Con qué gravedad/frecuencia afecta las prácticas de manejo del agroecosistema esta variable?
            td Levemente grave = 1
              br
              |Medianamente grave = 2
              br
              |Muy grave = 3.
          tr
            td Capacidad (C)
            td.ajuste-align ¿Qué capacidad tenemos de resolver/corregir la práctica de manejo del agroecosistema a corto plazo?
            td Nula = 1
              br
              |Medio = 2 
              br
              |Alta = 3
          tr
            td Beneficio (B)
            td.ajuste-align ¿Cuánto se beneficia el medioambiente en el agroecosistema al resolver o corregir la práctica de manejo?
            td Nula = 1
              br
              |Medio = 2 
              br
              |Alta = 3
    
    .row.mb-4.h-100.align-items-center.ajuste-movil-bloque4
      .col-lg
        p De acuerdo con los valores asignados a cada criterio, la importancia de la variable puede variar entre 2	y 12 unidades, para lo cual se establece la siguiente significancia:
        .row.m-0(data-aos="fade-right")
          .col-6.caja-text-bloque4.mb-3.text-center
            p.mb-0 <strong>Total</strong> = M+G+C+B
          .col-6.caja-text-bloque4.mb-3.dividir-caja
            p.mb-0 <strong>Inferiores o igual a 4</strong>: importancia baja Entre 4 y 8: importancia media Superior a 8: importancia alta
        p.mb-0 Para mayor comprensión a la hora de elaborar la priorización de las variables o criterios que tienen impacto en el agroecosistema, se presenta la siguiente matriz de priorización, donde se evalúan diferentes factores según su magnitud, gravedad, capacidad de manejo y beneficio ambiental.
      .col-lg-auto
        figure(data-aos="fade-up").d-none.d-xl-block
          img(src="@/assets/curso/tema2/img18.png", alt='' style="width: 450px").m-auto
    
    .titulo-sexto.color-acento-contenido.mb-4
      h5 Figura 4.
      span Matriz de priorización
    
    .row.justify-content-center.m-0.mb-1(data-aos="fade-up")
      .col-lg-12
        figure.ajuste-img-matrix
          img(src='@/assets/curso/tema2/img19.svg', alt='Matriz de priorización con variables ambientales y criterios de evaluación, incluyendo contaminación del suelo, deforestación y fertilidad.' style="max-width: 900px").m-auto

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
