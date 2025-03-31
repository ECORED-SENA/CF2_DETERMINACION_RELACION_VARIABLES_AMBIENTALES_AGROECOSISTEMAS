<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Variables ambientales y su incidencia en agroecosistemas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo: Identificar la relación y posibles impactos de las variables ambientales en los agroecosistemas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: '¡VUELVA A INTENTARLO!',
      preguntas: [
        {
          id: 1,
          texto: '¿Cómo se define el concepto de agrodiversidad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de cultivos en una región.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La relación entre biodiversidad y producción agrícola.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La variedad de técnicas agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de agroecosistemas en un país.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes es un ejemplo de bioindicador del suelo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Protozoos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Abejas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Lombrices.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aves.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué indica el oxígeno disuelto en el agua?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El grado de contaminación química.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La calidad del suelo agrícola.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La presencia de microorganismos dañinos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El buen estado del ecosistema y de la vida acuática.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'Cuál de las siguientes variables NO es agroclimática?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Temperatura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Precipitación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Conductividad del agua.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Vientos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué tipo de cobertura incluye zonas urbanas y comerciales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Territorios agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Áreas húmedas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Bosques y áreas seminaturales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Territorios artificializados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es el rango aceptado de pH para agua de uso agrícola?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '3.0 - 7.0.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '4.5 - 9.0.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '5.5 - 10.5.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '6.0 - 8.5.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué bioindicador tiene relación contaminación del aire?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Protozoos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Peces.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Lombrices.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aves silvestres.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es un factor que se evalúa en la priorización de variables ambientales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conductividad eléctrica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Densidad aparente del suelo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Magnitud del impacto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cantidad de agua en el ecosistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué representa la demanda bioquímica de oxígeno (DBO)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cantidad de oxígeno necesario para degradar materia orgánica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cantidad de metales pesados en el agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nivel de salinidad del suelo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cantidad de dióxido de carbono en el agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de los siguientes es un macronutriente esencial en el suelo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Zinc.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cobre.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nitrógeno.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Molibdeno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Los bioindicadores son organismos que permiten evaluar la calidad ambiental y los cambios en el ecosistema debido a factores naturales o antropogénicos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Las variables agroclimáticas, como temperatura, humedad y precipitación, no tienen un impacto significativo en la producción agrícola.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La matriz de priorización permite evaluar y jerarquizar variables ambientales según su magnitud, gravedad, capacidad de manejo y beneficio en el agroecosistema.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La biodiversidad en agroecosistemas no influye en la seguridad alimentaria ni en la sostenibilidad de la producción agrícola.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El control biológico en los agroecosistemas reduce el uso de agroquímicos mediante la acción de depredadores, parásitos y agentes patógenos naturales.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
