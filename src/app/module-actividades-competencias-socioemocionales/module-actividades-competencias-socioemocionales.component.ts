import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-module-actividades-competencias-socioemocionales',
  templateUrl:
    './module-actividades-competencias-socioemocionales.component.html',
  styleUrls: [
    './module-actividades-competencias-socioemocionales.component.scss',
  ],
})
export class ModuleActividadesCompetenciasSocioemocionalesComponent
  implements OnInit
{
  page: any;

  module = [
    `<section class="contenct_modulo" id="contenct_modulo" style="max-width: unset;">
				<h1>FASE PREACTIVA O DE EXPLORACIÓN DE SABERES PREVIOS</h1>

				<p>En esta primera serie de actividades encontrarán un grupo de ejercicios reflexivos que tienen como propósito vincular la experiencia vital de tal modo que nos demos cuenta de que, las competencias socio emocionales son asunto de la vida cotidiana y de la manera en que hacemos conciencia de quiénes somos, a dónde nos dirigimos y en qué mundo queremos vivir. </p>
				
				<img class="divicion_image" src="../Assets/Fondos/Fondo_division_mod.png">
				<h2 class="ct-socio">→ Actividad 1:</h2><br>
				<p><strong>Reflexiono</strong> sobre los siguientes aspectos, teniendo en cuenta el ejemplo a continuación (Autoconciencia)</p>
				<p>¿Quién soy yo? ¿Lo que quiero y me gusta en mi vida concuerda con lo que estoy haciendo para alcanzar la meta que busco?</p>
				<p>Ejemplo: Mi mayor sueño es lograr armonía material, emocional y espiritual que me permita poder viajar, vivir bien y ayudar a mi familia.</p>
				<p>Completa las siguientes oraciones:</p>
				<p><span class="icon_objetivos"></span>Mi mayor sueño es:</p>
				<p><span class="icon_objetivos"></span>Lo que mejor hago es:</p>
				<p><span class="icon_objetivos"></span>Lo que quisiera mejorar académicamente es:</p>
				<p><span class="icon_objetivos"></span>Lo que quisiera mejorar como persona es:</p>
				<p><span class="icon_objetivos"></span>Lo que veo a mi favor de mi entorno es:</p>
				<p><span class="icon_objetivos"></span>Lo que más me apasiona en la vida es:</p>
				<p><span class="icon_objetivos"></span>Lo que más valoro de lo que hago es:</p>
				<p><span class="icon_objetivos"></span>Para llegar a hacer lo que quiero en el futuro debo:</p>
				<p><span class="icon_objetivos"></span>Lo que más me llena de entusiasmo es:</p>
				<p><span class="icon_objetivos"></span>Mis habilidades más fuertes se evidencian cuando:</p>
				<p><span class="icon_objetivos"></span>además reflejan lo que me gusta que es:</p>
				
				<ul class="next-prev">
					<a href="#">
						<li class="numbers_np">1/3</li>
					</a>
					<a href="10 - socio 2.html">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			</section>`,
    `<section class="contenct_modulo" id="contenct_modulo" style="max-width: unset;">
				<h2 class="ct-socio">→ Actividad 2:</h2><br><br>
				<b>Emociones y consecuencias (Autorregulación)</b>
				<br><br>
				<p>Pienso en dos situaciones en las que he sentido emociones fuertes y difíciles de manejar para mí. Luego, describo la situación, qué emoción estaba sintiendo, qué hice en ese momento (cómo reaccioné) y qué pasó después (qué consecuencias tuvieron mis acciones o reacciones). Como el ejemplo cotidiano lo muestra.</p>
				<p>Completa la siguiente tabla y súbela en la plataforma en un archivo *.XLS, *.DOC O PDF</p>

				<img src="" width="100%">    <!-- colocar imagen -->

				<ul class="next-prev">
					<a href="10 - socio 1.html">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a href="#">
						<li class="numbers_np">2/3</li>
					</a>
					<a href="10 - socio 3.html">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			</section>`,
    `<section class="contenct_modulo" id="contenct_modulo" style="max-width: unset;">
				<h2 class="ct-socio">→ Actividad 3:</h2><br><br>
				<b>Dibujo cómo me veo en el futuro (Toma responsable de decisiones)</b>
				<br><br>
				<p>De acuerdo con mis sueños y a través de un escudo, dibujo donde me gustaría verme en unos 10 años. </p>
				<p>Como sugerencia: Puedo dividir el escudo en cuatro partes, en una parte simbolizo en donde me gustaría vivir, en la otra las personas con quien quisiera estar compartiendo, en un tercero el lugar de trabajo donde me imagino estar y el cuarto, el impacto social que quisiera ejercer.  Utilice una hoja en papel en blanco para realizar su dibujo, tómele una foto y adjuntelo al archivo PDF donde va a presentar las actividades.</p>
				<p>Suba las actividades 1, 2 y 3, compiladas en un solo archivo PDF en la plataforma.</p>
				<br><br>
				<b>Ejemplo de escudo</b>
				<br><br>
				<img src="" width="100%">
				<div class="mod_tar">
						<div class="mod_tar_iz">
							<p class="btn_form btn_intro btn-modal" id="subirArchivoModal">Subir Archivo</p>
						</div>
						<div class="mod_tar_der">
							<p class="btn_form btn_intro"><small>Ver calificación</small></p>	
						</div>
				</div>

				<ul class="next-prev">
					<a href="10 - socio 2.html">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a href="#">
						<li class="numbers_np">3/3</li>
					</a>
					<a href="10 - socio 5.html">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			</section>`,
    `<section class="contenct_modulo" id="contenct_modulo" style="max-width: unset;">
				<h1>FASE INTERACTIVA</h1>

				<p>Este segundo grupo de actividades presentan una serie de conceptos, definiciones y categorías que te van a permitir comprender mejor el significado de las competencias socio emocionales y vincularlo significativamente con los hallazgos de la fase anterior.</p>
				
				<img class="divicion_image" src="../Assets/Fondos/Fondo_division_mod.png">
				<h2 class="ct-socio">→ Actividad 1:</h2><br>
				<p>Lea con detenimiento el siguiente texto y subraye la idea principal de cada párrafo. Luego resuelva los ejercicios propuestos (Autoconciencia) y suba los archivos en formato *.DOC o PDF a la plataforma.</p>
				<section class="extract_content">
					<p><span class="icon_objetivos"></span>Autoconciencia:</p><br>
					<p>Separación que hace el hombre de sí mismo respecto al mundo objetivo, toma de conciencia de su relación con el mundo, de su propio ser como persona, de su conducta, de sus actos, pensamientos y sentimientos, de sus deseos e intereses.</p>
					<p>Las habilidades que fortalecen esta competencia son: Motivación al logro, perseverancia y manejo de emociones. Estas implican a su vez, autopercepción, es como nos percibimos a nosotros mismos, la autoimagen que cada persona tiene de sí, esta nos permite evaluar nuestro valor interno. También, es la que permite el conocimiento que los individuos tienen acerca de sus capacidades y confianza para alcanzar una meta o enfrentar una situación. Y, por último, habilidad para el manejo de emociones, es la que nos aporta datos necesarios para la toma de decisiones, para realizar nuestra actividad diaria y saber relacionarlas con las situaciones que las provocan. (Ministerio de Educación Nacional y Banco Mundial, 2017)</p>
					<p>Para desarrollar tu autoconciencia es importante que logres identificar cuáles son las creencias que has ido construyendo a lo largo de tu vida, cómo se han construido y también reconocer tus deseos, con estos, puedes hacerte una idea de tu mundo interior. Ahora veamos que significan creencias y deseos:</p>
					<p><span class="icon_objetivos"></span>Creencias:</p><br>
					<p>Afirmaciones que se hacen sobre el mundo. Son imaginarios producidos por el análisis de la experiencia propia y ajena (padres, profesores, medios de comunicación, entre otros).</p>
					<p><span class="icon_objetivos"></span>Deseos:</p><br>
					<p>Son los ideales arraigados en la subjetividad del individuo, que en ocasiones son inconscientes e irracionales. Abarcan todo tipo de gustos, expectativas, aspiraciones. Ambiciones sobre lo que se quiere ser y hace.</p>
				</section>

				<ul class="next-prev">
					<a href="10 - socio 3.html">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a href="#">
						<li class="numbers_np">1/4</li>
					</a>
					<a href="10 - socio 6.html">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			</section>`,
    `<section class="contenct_modulo" id="contenct_modulo" style="max-width: unset;">

				<h2 class="ct-socio">→ Actividad 2:</h2><br>
				<p><span class="icon_objetivos"></span>Escriba una historia de su vida personal que dio origen a algunas creencias y deseos que hay en su vida en este momento.</p>
				<br><br>
				<b>Recuerde..</b>
				<br><br>
				<p>- Viva libre de pensamientos del pasado que te atormentan.</p>
				<p>- Está bien ocuparse de planear su futuro, pero no preocuparse por el futuro.</p>
				<p>- Haga uso de aquello que puede hacer con libertad y responsabilidad.</p>
				<p>- Evite en la medida de lo posible estar buscando la aprobación.</p>
				<p>- Tome decisiones responsables.</p>
				<p>- Afronte las cosas con buen humor.</p>
				<p>- Aceptese a si mismo.</p>
				<p>- Establezca buenas relaciones con los demás.</p>
				<p>- Tenga autodisciplina.</p>
				<p>- No tenga miedo a los fracasos.</p>
				<br><br>
				<b>Evalúo mi experiencia</b>
				<p><span class="icon_objetivos"></span>En mis palabras defino qué es autoconciencia</p>
				<p><span class="icon_objetivos"></span>¿Qué fue lo que más me llamó la atención de lo que leí y por qué?</p>
				<p><span class="icon_objetivos"></span>Por último, respondo a la pregunta ¿De qué soy consciente ahora?</p>

				<ul class="next-prev">
					<a href="10 - socio 5.html">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a href="#">
						<li class="numbers_np">2/4</li>
					</a>
					<a href="10 - socio 7.html">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			</section>`,
    `<section class="contenct_modulo" id="contenct_modulo" style="max-width: unset;">

				<h2 class="ct-socio">→ Actividad 3:</h2><br><br>
				<b>Lea con detenimiento el siguiente texto y conecte gráficamente las ideas que se relacionan entre los párrafos, luego resuelva las preguntas planteadas. (Autorregulación).</b>
				<section class="extract_content">
					<p><span class="icon_objetivos"></span>Autorregulación:</p><br>
					<p>Es la que hace que podamos dirigir nuestros pensamientos, emociones y conducta hacia la correcta adaptación en el medio y el cumplimiento de nuestros deseos y expectativas en base a las circunstancias contextuales. </p>

					<p>Las habilidades que fortalecen esta competencia son Manejo de Emociones, postergación de la Gratificación y la Tolerancia a la Frustración. En cuanto a la primera habilidad, manejo de emociones, es la que nos permitirá comprender lo que sentimos y no perder el control ante una situación que nos quite la tranquilidad. La segunda habilidad, postergación de la gratificación, es la capacidad para dejar de lado actividades de satisfacción inmediata, para poder lograr las metas que más adelante nos darán mayor satisfacción. Y por última habilidad, la tolerancia a la frustración es saber diferenciar entre situaciones frustrantes que puedo cambiar y las que están fuera de mi control e identificar qué hacer. (Ministerio de Educación Nacional y Banco Mundial, 2017)</p>
					<p>Es así como esta competencia, sí la fortaleces, te permitirá saber que puedes rediseñar tus emociones para abordar las situaciones que te alteran, siendo capaz de aceptar de manera flexible cuando las cosas no salen como las esperabas; es por esto que es la autorregulación la que nos permite fortalecer actitudes de nuestra razón y emoción inteligente, también nos ayuda a incrementar la confianza en nosotros mismos, aumentando la esperanza y el optimismo frente a nuestra realidad, pero sobre todo, tener la capacidad potencial para afrontar diferentes adversidades y salir fortalecidos de ellas, a esto también se le llama Resiliencia.</p>
					<p><span class="icon_objetivos"></span>Resiliencia:</p><br>
					<p>Es la capacidad potencial que tiene un individuo para afrontar la adversidad y salir fortalecido de ella. Las características suficientes para que a una persona se le pueda llamar resiliente serían: autoestima, autonomía, afrontamiento, conciencia, esperanza, responsabilidad, sociabilidad y tolerancia a la frustración. (Flores, 2013)
					Retomo las definiciones sobre las habilidades de la persona resiliente, y respondo de acuerdo con mi experiencia, las frases que a continuación encontraré. </p>
					</section>
					<br><br>
					<b>En cuanto al poder del afrontamiento.</b>
					<br><br>
					<p><i>Ejemplo: </i>Me considero una persona orientada más a… <i>no querer enfrentar lo que me molesta, desde ahora intentare… buscar otras alternativas para expresar lo que no me gusta.</i></p>
					<p>Complete las frases según su experiencia:</p>
					<p><span class="icon_objetivos"></span>Me considero una persona orientada más a … desde ahora intentaré …</p><br>
					<p><span class="icon_objetivos"></span>Mejoraría más mi mentalidad si …</p><br>
					<p><span class="icon_objetivos"></span>Afronto mis adversidades con actitud …</p><br>

					<b>En cuanto a la fuerza de la autonomía.</b>
					<br><br>
					<p><i>Ejemplo: </i>Yo construyo mi futuro si… <i>logro ser más responsable y disciplinado con mis tareas y compromisos académicos.</i></p>
					<p><span class="icon_objetivos"></span>Yo construyo mi futuro si … </p><br>
					<p><span class="icon_objetivos"></span>Sería más auto disciplinado si … </p><br>
					<p><span class="icon_objetivos"></span>Podría ser autodidacta si … </p><br>

					<b>En cuanto a la magia de la autoestima. </b>
					<br><br>
					<p><i>Ejemplo: </i>: Me aceptaría a mí mismo si … <i>dejara de pensar en lo que los demás piensan de mí.</i></p>
					<p><span class="icon_objetivos"></span>Me aceptaría a mí mismo si … </p><br>
					<p><span class="icon_objetivos"></span>Tendría Autoafirmación si …</p><br>
					<p><span class="icon_objetivos"></span>Mi gran Propósito es …</p><br>

					<b>En cuanto a la iluminación de la conciencia. </b>
					<br><br>
					<p><span class="icon_objetivos"></span>¿Por qué es tan importante la Conciencia?</p><br>
					<p><span class="icon_objetivos"></span>¿Qué significa vivir de manera CONSCIENTE?</p><br>
					<p><span class="icon_objetivos"></span>Una persona es consciente cuando …</p><br>

					<b>En cuanto al valor de la responsabilidad. </b>
					<br><br>
					<p><span class="icon_objetivos"></span>¿De quién dependen las acciones y decisiones, cuando soy responsable?</p><br>
					<p><span class="icon_objetivos"></span>¿Asumir el logro de mis objetivos o propósitos implica?</p><br>
					<p><span class="icon_objetivos"></span>Estoy teniendo Responsabilidad cuando…</p><br><br>

					<b>En cuanto a la formación de la esperanza y del optimismo.</b>
					<p><i>Ejemplo: </i>¿Cómo puedo intervenir en mis creencias para cambiar, de ser pesimista a ser optimista? T<i>rataré de ver si las cosas negativas que pienso de mí son reales, por ejemplo, pienso que soy mal estudiante, pero sé, que, si me dedicara más, le pediría ayuda a profesores y compañeros, yo podría mejorar… esto me haría más optimista.</i></p>
					<p><span class="icon_objetivos"></span>¿Cómo puedo intervenir en mis creencias para cambiar, de ser pesimista a ser optimista?</p><br><br>
					<p><span class="icon_objetivos"></span>¿Cómo puedo fortalecer y mantener mi optimismo?</p><br><br>
					<p><span class="icon_objetivos"></span>¿Cómo puedo evitar construir pesimismo en ellos?</p><br><br>

					<b>En cuanto al tesoro de la sociabilidad inteligente. </b>
					<br><br>
					<p><span class="icon_objetivos"></span>¿Qué es Sociabilidad?</p><br>
					<p><span class="icon_objetivos"></span>¿Cómo es tu SOCIABILIDAD?</p><br>
					<p><span class="icon_objetivos"></span>Tener Sociabilidad me permite mejorar mi…</p><br><br>

					<b>En cuanto a la Tolerancia a la frustración.</b>
					<br><br>
					<p><span class="icon_objetivos"></span>La BAJA Tolerancia a la Frustración es …</p><br>
					<p><span class="icon_objetivos"></span>Por lo general mi reacción ante los obstáculos es …</p><br>
					<p><span class="icon_objetivos"></span>Lo que voy a intentar de ahora en adelante para la superación de mis obstáculos es…</p><br><br>

				<ul class="next-prev">
					<a href="10 - socio 6.html">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a href="#">
						<li class="numbers_np">3/4</li>
					</a>
					<a href="10 - socio 8.html">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			</section>`,
    `<section class="contenct_modulo" id="contenct_modulo" style="max-width: unset;">
				<h2 class="ct-socio">→ Actividad 4:</h2><br>
				<p><b>Lea el siguiente texto y escriba un resumen en una frase, luego desarrolle los ejercicios propuestos <i>(Toma Responsable de Decisiones)</i></b> en un archivo *DOC o PDF y súbalo a la plataforma.</p>
				<p><b>La toma responsable de decisiones </b>es el proceso de resolución de una situación o problema a partir de la selección de una opción, entre diferentes cursos posibles de acción, comprendiendo y previendo las consecuencias o efectos de la opción elegida.</p>
				<p>Las habilidades que fortalecen esta competencia son: Pensamiento Creativo, Pensamiento Crítico y Responsabilidad. En cuanto a la primera habilidad, pensamiento creativo, es la que permite interpretar una tarea o situación y cambiar de estrategia en el momento de abordarla. Implica la producción de respuestas inusitadas e ingeniosas a partir de premisas aparentemente desconectadas. La segunda habilidad, pensamiento crítico, es la que permite participar en una actividad con escepticismo reflexivo; implica establecer juicios decididos y autorregulados. Y por última la habilidad responsabilidad, es la que permite comprometerse y actuar en post de la consecución del cumplimiento de una tarea asignada por sí mismo o por otros.</p>

				<p>A continuación, se presenta el proceso de toma responsable de decisiones en once pasos, conforme a este proceso, leo, reflexiono y pienso en una decisión importante en la que no quedé satisfecho/a con la forma como la asumí. Luego, lo confronto con cada uno de los pasos, describiendo qué hice adecuadamente y qué no. </p>
				<br><br>
				<b>Proceso de toma responsable de desiciones</b>
				<style type="text/css">
					._enum1{display: inline-block;vertical-align: top;border: 1px solid #333;padding: 5px;}
					._num1{display: inline-block;vertical-align: top;border: 1px solid #333;padding: 5px;}
					._displayers{display: table;text-align: left;}
				</style>
				<section class="_displayers">
				<p class="_num1">1</p><p class="_enum1">Reconocer el problema</p><br>
				<p class="_num1">2</p><p class="_enum1">Analizar el problema</p><br>
				<p class="_num1">3</p><p class="_enum1">Considerar lo que es importante para mi</p><br>
				<p class="_num1">4</p><p class="_enum1">Buscar alternativas</p><br>
				<p class="_num1">5</p><p class="_enum1">Analizar los recursos de cada alternativa</p><br>
				<p class="_num1">6</p><p class="_enum1">Seleccionar la mejor alternativa</p><br>
				<p class="_num1">7</p><p class="_enum1">Poner la decisión en acción</p><br>
				<p class="_num1">8</p><p class="_enum1">Tomar decisiones adicionales</p><br>
				<p class="_num1">9</p><p class="_enum1">Aceptar la responsabilidad</p><br>
				<p class="_num1">10</p><p class="_enum1">Evaluar los resultados</p><br>
				<p class="_num1">11</p><p class="_enum1">Tener en cuenta estos pasos para una próxima toma responsable de decisiones y reducir tiempos</p><br>
				</section>
				<p><span class="icon_objetivos"></span>Confronte con cada uno de los pasos, describiendo qué hizo adecuadamente y qué no.</p><br><br>

				<section class="_displayers">
				<p class="_num1">1</p><p class="_enum1"></p><br>
				<p class="_num1">2</p><p class="_enum1"></p><br>
				<p class="_num1">3</p><p class="_enum1"></p><br>
				<p class="_num1">4</p><p class="_enum1"></p><br>
				<p class="_num1">5</p><p class="_enum1"></p><br>
				<p class="_num1">6</p><p class="_enum1"></p><br>
				<p class="_num1">7</p><p class="_enum1"></p><br>
				<p class="_num1">8</p><p class="_enum1"></p><br>
				<p class="_num1">9</p><p class="_enum1"></p><br>
				<p class="_num1">10</p><p class="_enum1"></p><br>
				<p class="_num1">11</p><p class="_enum1"></p><br>
				</section>

				<div class="mod_tar">
						<div class="mod_tar_iz">
							<p class="btn_form btn_intro btn-modal" id="subirArchivoModal">Subir Archivo</p>
						</div>
						<div class="mod_tar_der">
							<p class="btn_form btn_intro"><small>Ver calificación</small></p>	
						</div>
				</div>

				<ul class="next-prev">
					<a href="10 - socio 7.html">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a href="#">
						<li class="numbers_np">4/4</li>
					</a>
					<a href="10 - socio 9.html">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			</section>`,
    `<section class="contenct_modulo" id="contenct_modulo" style="max-width: unset;">
				<h1>FASE POSTACTIVA</h1>
				<img class="divicion_image" src="../Assets/Fondos/Fondo_division_mod.png">
				<h2 class="ct-socio">→ Actividad 1:</h2><br>
				<br>
				<p><b>LA METÁFORA DEL FUTURO</b></p>
				<p>Leo con atención algunas metáforas planteadas sobre lo que significa el futuro y luego propongo una personal. <b>(Autoconciencia, Autorregulación, Toma responsable de decisiones)</b></p>
				<p>La realidad es en parte de cómo la vemos, y en parte lo que hacemos que sea, por lo tanto, requiere tanto hacer como soñar. Sabemos en lo que creemos…</p>
				<p>Respecto a las metáforas planteadas sobre el futuro, decido cuál es la que más se aproxima a dicha visión. Supongo que es una decisión de opciones múltiples, de opciones forzadas; debo escoger una.</p>

				<style type="text/css">
					.centered{text-align: center;}
				</style>
				<section class="extract_content">
					<div class="centered">
					<b>Opción A</b><br><br>
					<b>La montaña rusa</b><br><br>
					<p>El futuro es como una gran montaña rusa, que da vueltas frente a nosotros en la oscuridad, aunque solo podemos ver cada parte al acercarnos a ella. A veces podemos ver a lo lejos al llegar a una cima o una curva; pero el futuro es fijo y determinado. Estamos atrapados en nuestros asientos y nada de lo que sepamos o hagamos cambiará el curso dispuesto para nosotros.</p>
					<b>Opción B</b><br><br>
					<b>El gran río</b><br><br>
					<p>El futuro es como un gran río. La gran fuerza de la historia va fluyendo, arrastrándonos con ella. El curso del río pueden cambiarlo solamente los desastres naturales, como los terremotos y deslizamiento de tierra, o un trabajo humano de proporciones similares. Sin embargo, como personas estamos libres para adaptarnos o transformar el curso de la historia. Mirando hacia el futuro sortearemos los obstáculos y los remolinos, escogiendo el mejor paso entre los rápidos y también construimos herramientas que nos permitan navegar, fluir y salir del río cuando queramos.</p>
					<b>Opción C</b><br><br>
					<b>El gran océano</b><br><br>
					<p>El futuro es un gran océano. Hay muchos destinos posibles y muchas vías diferentes hacia cada destino. Aprovechando las principales corrientes de cambio, manteniendo siempre un ojo avizor y navegando con cuidado en las aguas inexploradas, el buen navegante puede llegar sano y salvo al lugar de su destino; esquivando un huracán u otro desastre impredecible e inevitable.</p>
					<b>Opción D</b><br><br>
					<b>Un juego de dados Colosal</b><br><br>
					<p>El futuro es totalmente al azar, como un juego de dados de colosales proporciones. En cada segundo ocurren cosas que pudieran haber sucedido de otro modo y producir otro futuro. Cómo todo es fortuito o casual, no podemos hacer más que seguir el juego, rogara  a los dioses de la fortuna y disfrutar de la buena suerte que nos pueda tocar.</p>
					</div>
				</section>

				<p><span class="icon_objetivos"></span><b>Indique ¿cuál de las cuatro metáforas descritas se parece más a la idea que tengo del futuro?</b></p>
				<p>- La montaña rusa.</p>
				<p>- El gran río.</p>
				<p>- El gran Océano.</p>
				<p>- Un juego de dados colosal.</p>

				<p><span class="icon_objetivos"></span>¿Por qué?</p>
				<p><span class="icon_objetivos"></span>¿Qué no me convenció de las otras?</p>
				<p><span class="icon_objetivos"></span>¿Pienso que puede controlar mi futuro?</p>
				<br><br>
				<p>Quizás mis respuestas no estén bien desarrolladas porque no he pensado mucho en ellas; pero mi respuesta tiene gran importancia en mi toma de decisiones a menudo determina lo que yo hago. Sigo trabajando sobre mis respuestas; las metáforas pueden serte útiles.</p>
				<p><b>La metáfora personal</b></p>
				<p>Ahora creo mi propia metáfora del futuro, o de mi vida, si lo prefiero. ¿Qué describe mejor mi idea? Trato de usar algo que me sea familiar: un entretenimiento, algo favorito, una actividad, un animal preferido. No me preocuparé por usar gran fantasía, luego modelo esa metáfora de manera tridimensional.</p>
				<p><span class="icon_objetivos"></span>Para mí el futuro es como</p>
				<p>Conservo <i>esta metáfora y trabajo con ella: la agrando, modifico, cambio u obtengo una nueva. Veo si me puede brindar percepciones de mi visión del futuro, o me ayuda a expandir o modificar dicha visión.</i><br> (Gelatt, 1996)</p>
				<p>Responda todas las preguntas planteadas en las actividades de esta fase y realice las diferentes actividades.  Compile toda la información en un archivo *.DOC O PDF</p>
				<div class="mod_tar">
						<div class="mod_tar_iz">
							<p class="btn_form btn_intro btn-modal" id="subirArchivoModal">Subir Archivo</p>
						</div>
						<div class="mod_tar_der">
							<p class="btn_form btn_intro"><small>Ver calificación</small></p>	
						</div>
				</div>

				<ul class="next-prev">
					<a href="10 - socio 8.html">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a href="#">
						<li class="numbers_np">1/1</li>
					</a>
				</ul>
			</section>`,
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.page = params.page;
      console.log(this.page);
    });
  }
}
