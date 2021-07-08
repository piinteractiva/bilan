import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-module-actividades-ciencias-naturales',
  templateUrl: './module-actividades-ciencias-naturales.component.html',
  styleUrls: ['./module-actividades-ciencias-naturales.component.scss'],
})
export class ModuleActividadesCienciasNaturalesComponent implements OnInit {
  page: any;

  module = [
    `
				<h1>FASE PREACTIVA O DE EXPLORACIÓN DE SABERES PREVIOS</h1>
				<img class="divicion_image" src="Assets/Fondos/Fondo_division_mod.png">
				<h2 class="ct-matematicas">→ Actividad 1.</h2>

				<p class="parrafo_tiempo"><span class="icon_tiempo"></span>A. Activación cognitiva para el aprendizaje</p>
				<p>Este módulo es un reto, a ti estudiante de grado 11, que, si ya no lo eres, pronto serás un ciudadano activo cumpliendo un rol que puede ser de cambio y transformación para tu comunidad o de continuidad pasiva frente a todo aquello que puede ser mejor.</p>

				<p class="_italic">Si desde el inicio nos contaran que en la infancia se define la salud mental de un adulto… <br> Entonces trataríamos con más amor el alma de los niños. <br> Anónimo.</p>
				
				<img src="https://i.postimg.cc/tgbw01Qx/diana-mate.png">

				<ul class="menu_momento_introductivo">
					<li class="btn_foro"><span><a alt="Competencias Básicas" href=""></a></span></li>
					<li class="btn_maloka"><span><a alt="Competencias Socioemocionales" href=""></a></span></li>
					<li class="btn_perfil"><span><a alt="Competencias Ciudadanas" href=""></a></span></li>
				</ul>
				<img class="divicion_image" src="Assets/Fondos/Fondo_division_mod.png">


				<p>¿Con cuánta frecuencia las personas se dan cuenta de lo que piensan? ¿Son capaces de regular sus pensamientos?</p> 
				<p>Para familiarizarse con la temática de este módulo debemos conocer un poco de la realidad sobre salud mental en el mundo, y de manera particular en Colombia; para lograrlo presentaremos algunos conceptos fundamentales y datos tomados de fuentes como el Ministerio de Salud y Protección Social, el DANE y organizaciones no gubernamentales dedicadas al cuidado y la divulgación de temas sobre salud, estos facilitarán la comprensión del contexto:</p>

				<section class="extract_content">
					<p class="boton_rojo_content">Según la OMS, la salud mental se define como un “estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades”. (DANE, 2020)</p>
					<p class="boton_rojo_content">Los problemas de salud mental afectan a una tercera parte de las personas a lo largo de su vida. La afectación de los problemas de salud mental en la vida y el bienestar de las personas puede llegar a ser muy seria: no solo la afectación directa del problema en sí, sino también el estigma, la falta de comprensión o tolerancia, los problemas de trabajo y la pérdida de derechos civiles que pueden acompañar el problema. (Xplore Health, 2021)</p>
					<p class="boton_rojo_content">¡Vive plenamente, cuida tu salud mental! Este es un factor determinante para el desarrollo humano y social, puesto que es fundamental para la construcción de capital social y redes de apoyo, el fomento de la productividad y el fortalecimiento de sociedades más pacíficas (MEN, Nubia Bautista, subdirectora (e) de Enfermedades No Transmisibles, 2020)</p>
				</section>

				<p>Estos tres reportes validan y muestran la importancia de analizar la problemática de la salud mental en cada región de nuestro país, para garantizar una sociedad más justa, productiva, pacífica y feliz.</p>

				<img class="divicion_image" src="Assets/Fondos/Fondo_division_mod.png">

				<p>Ahora te invitamos a realizar el siguiente “Juego de Diálogo”: </p>
				<p>(Basado en Discussion Continuum desarrollado por Ecsite, en colaboración con Barcelona Science Park y Centre of the Cell (Londres), en el contexto del proyecto Xplore Health. Gracias a At-Bristol por el desarrollo del formato del continuo del debate: www.at-bristol.org.uk)</p>
				<p>Instrucciones:</p>
				<p>Adaptado de:  Xplore Health, en su página <a class="p-800" target="_blank" href="https://www.xplorehealth.eu/es">https://www.xplorehealth.eu/es</a></p>
				<p>Esta actividad está pensada para facilitar el diálogo sobre los aspectos éticos, legales y sociales de los estudios sobre salud mental. Los estudiantes debatirán las cuestiones suscitadas por cada afirmación y, para cada tarjeta, elegirán entre «de acuerdo» y «en desacuerdo».</p>
				<p class="boton_rojo_content">En grupos de trabajo colaborativo integrados por 8 a máximo 12 estudiantes, se debatirán las cuestiones planteadas por cada una de las afirmaciones o situaciones y se escogerá qué posición debe ocupar cada carta entre “de acuerdo” y “en desacuerdo”. Al final los estudiantes acordarán un orden de las tarjetas: desde aquellas con las que están más de acuerdo hasta aquellas con las que están más en desacuerdo. Este orden establecido se puede comparar entre los grupos y así se abre el debate a todo el grupo. La actividad se puede realizar en cualquier espacio físico o virtual.</p>
				<p class="boton_rojo_content">El “Juego de Diálogo”: se planea para jóvenes de grado once y tiene una duración de entre 60 y 90 minutos, debe estar moderado y asesorado por el docente.</p>

				<h3>Elementos del juego:</h3>

				<p class="boton_rojo_content">Una tarjeta DE ACUERDO y una tarjeta EN DESACUERDO.</p>
				<p class="boton_rojo_content">Ocho tarjetas de debate, que incluyen afirmaciones sobre algún aspecto de la salud mental.</p>

				<h3>Reglas del juego:</h3>

				<p><span class="bold_">1.</span> Cada grupo recibe una tarjeta DE ACUERDO, una tarjeta EN DESACUERDO y máximo 8 tarjetas de debate.</p>
				<p><span class="bold_">2.</span> Cada grupo coloca en el suelo o sobre la mesa, a un metro de distancia, la tarjeta DE ACUERDO y la tarjeta EN DESACUERDO para representar los dos extremos de un debate. Las tarjetas de debate se colocarán en ese espacio de separación. </p>
				<p><span class="bold_">3.</span> El primer jugador lee la primera tarjeta de debate al resto del grupo. El jugador deberá asegurarse de que todos entienden la tarjeta y, si es necesario, deberá utilizar la información de los preconceptos para asegurarse de que el grupo comprende la afirmación. </p>
				<p><span class="bold_">4.</span> A continuación, el primer jugador decide en qué medida está de acuerdo con la primera tarjeta. Coloca la tarjeta boca arriba en un punto de la secuencia, más o menos cerca de DE ACUERDO o EN DESACUERDO, según su criterio. Esta será la elección del jugador y el grupo no la someterá a debate. Si lo desea, el jugador podrá dar una justificación. </p>
				<p><span class="bold_">5.</span> A continuación, los jugadores, por turnos, leen una de las tarjetas de debate, comprueban que todos la comprenden y eligen individualmente dónde colocarla en la secuencia, como hemos visto anteriormente (DE ACUERDO o EN DESACUERDO). </p>
				<p><span class="bold_">6.</span> Una vez se hayan leído, comprendido y colocado en la secuencia todas las tarjetas, podrá iniciarse el debate. El objetivo es colocar las tarjetas entre DE ACUERDO y EN DESACUERDO en un orden convenido por la mayoría de los jugadores. Los jugadores deben elegir una tarjeta de discusión y debatir si moverla o no. </p>
				<p><span class="bold_">7.</span> Al final del debate, cada grupo deberá tener una secuencia acordada por la mayoría. </p>
				<p><span class="bold_">8.</span> Si son varios los grupos que juegan al mismo tiempo, el profesor puede aportar para la presentación de los resultados de los distintos grupos. Preguntando, por ejemplo: ¿Son similares? ¿Puede alguien de cada grupo explicar sus decisiones sobre una tarjeta en particular?</p>
				
				<h3>Modelo de Tarjetas:</h3>
				<img class="imgtabla" width="100%" src="imagenes_2/m11_1_1.jpg" alt="">
				<br>
				<ul class="next-prev">
					<a>
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a>
						<li class="numbers_np">1/3</li>
					</a>
					<a href="/modulos/ciencias-naturales/actividades/10/2">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			`,
    `
				<h2>→ Actividad 2:</h2>
				<img src="https://i.postimg.cc/tgbw01Qx/diana-mate.png">

				<ul class="menu_momento_introductivo">
					<li class="btn_foro"><span><a alt="Competencias Básicas" href=""></a></span></li>
					<li class="btn_maloka"><span><a alt="Competencias Socioemocionales" href=""></a></span></li>
					<li class="btn_perfil"><span><a alt="Competencias Ciudadanas" href=""></a></span></li>
				</ul>

				<img class="divicion_image" src="Assets/Fondos/Fondo_division_mod.png">

				<h3>B. Preconceptos:</h3>
				<h3 class="italic_">Palabras clave</h3>
				
				<p class="parrafo_tiempo">Ten en cuenta los siguientes conceptos para el desarrollo de las actividades propuestas</p>
				<p class="parrafo_tiempo"><span class="bold_">Enfermedad mental:</span> Trastorno médico que altera los pensamientos, sentimientos, estado de ánimo y capacidad para relacionarse con otras personas, así como el funcionamiento diario. </p>

				<p class="parrafo_tiempo"><span class="bold_">Psiquiatra: </span> Médico especialista en el diagnóstico y el tratamiento de los problemas de salud mental.  </p>
				<p class="parrafo_tiempo"><span class="bold_">Psicólogo:</span>  Un psicólogo clínico trabaja con personas que han sido diagnosticadas de problemas de salud mental. </p>
				<p class="parrafo_tiempo"><span class="bold_">Depresión:</span>  La depresión clínica es un trastorno mental que se caracteriza por un estado de ánimo deprimido, baja autoestima y pérdida de interés en actividades normalmente placenteras.  </p>
				<p class="parrafo_tiempo"><span class="bold_">Trastornos de ansiedad:</span>  Conjunto de trastornos de larga duración que provocan ansiedad a los pacientes en relación con una amplia variedad de situaciones y temas, más que en un acontecimiento específico. </p>

				<h3>Cuestiones en torno a los problemas de salud mental </h3>

				<p>Los problemas de salud mental afectan hasta a un tercio de las personas durante el curso de su vida. Los efectos de los problemas de salud mental en la vida y el bienestar de las personas pueden ser muy graves: no solo como consecuencia del efecto directo del problema en sí mismo, sino también del estigma, la falta de comprensión o tolerancia, los problemas de trabajo y la pérdida de derechos civiles que pueden acompañar al problema. El diagnóstico es a menudo complejo y algunos tipos de tratamiento siguen siendo objeto de controversia. Con un presupuesto limitado para investigación, prevención y tratamiento, ¿cómo deben centrar sus esfuerzos las autoridades de salud? ¿Y qué opciones deben ofrecer a los pacientes?</p>

				<h3>Estadísticas </h3>

				<p class="boton_rojo_content">40%: población colombiana adulta ha sufrido, está sufriendo o sufrirá un trastorno mental diagnosticable en algún momento de la vida. </p>
				<p class="boton_rojo_content"><span class="bold_">30.539:</span> casos de intento de suicidio en el país para el año 2019. </p>

				<h3>Preguntas y respuestas sobre cuestiones científicas </h3>

				<section class="extract_content">
					<p class="bold_">¿Cuál es la magnitud de los problemas de salud mental?</p>
					<p>Uno de cada diez jóvenes sufre un trastorno psiquiátrico grave que provoca angustia o discapacidad grave, y dificulta sus vidas en el plano emocional, social y académico. Los más frecuentes son los trastornos de ansiedad. La depresión es la principal causa de discapacidad entre los adolescentes, y el suicidio es la segunda causa de muerte más frecuente entre los jóvenes. Una revisión reciente de estudios en Colombia constató que más de 4 de cada 100 adultos había sufrido un trastorno mental durante el año anterior. Esto representa aproximadamente 1.928.000 personas. La cifra real puede ser incluso más alta</p>

					<h3>¿Cuándo aparecen las enfermedades mentales?  </h3>
					<p>Diversos problemas empiezan a aparecer a distintas edades. Enfermedades como el trastorno por déficit de atención con hiperactividad (TDAH, ver el recuadro en la página siguiente) tienden a aparecer en la infancia, mientras que la depresión, por ejemplo, generalmente tiene su inicio durante la adolescencia. Otras enfermedades mentales están más asociadas con la edad avanzada</p>

					<h3>¿Qué problemas pueden causar las enfermedades mentales? </h3>
					<p>Los niños que padecen enfermedades mentales generalmente se ven afectados de forma recurrente y a largo plazo, y ello repercute de forma importante en su vida y en la de las personas de su entorno. Los estudios demuestran que los problemas de salud mental en la infancia están asociados a problemas en el hogar, la escuela y posteriormente durante la vida, incluyendo mayores índices de enfermedad mental en la edad adulta, menores niveles de empleo y dificultades para establecer relaciones a largo plazo. La sociedad en su conjunto se ve afectada por la enorme magnitud de los problemas de salud mental. Cuanto mayor es el número de personas que sufren trastornos mentales, más recursos económicos deben dedicarse a la atención de salud, la educación, los servicios sociales y el sistema judicial. </p>

					<h3>¿Cómo se diagnostican las enfermedades mentales?</h3>
					<p>Un psiquiatra realizará una entrevista exhaustiva. Si el paciente muestra ciertas conductas y síntomas psicológicos que están asociados a un trastorno, y sufre angustia significativa y no es capaz de vivir satisfactoriamente, entonces puede hacerse un diagnóstico. Los psiquiatras buscan la presencia conjunta de ciertos síntomas y conductas que han estado presentes durante un periodo definido de tiempo. Por ejemplo, para el diagnóstico de la depresión buscan síntomas como estado de ánimo deprimido y falta de interés o placer en las actividades habituales durante un periodo de más de dos semanas. Ello no siempre es fácil, ya que síntomas como “estado de ánimo deprimido” son difíciles de medir. A veces los médicos tienen dificultades para distinguir, por ejemplo, si un paciente sufre depresión leve o simplemente está triste.</p>

					<p>Entre los investigadores existe el debate sobre si las enfermedades mentales deben diagnosticarse por los síntomas o bien construyendo una teoría que explique la causa. No obstante, estas teorías también son difíciles de probar, y es difícil decir si una diferencia en el cerebro causa esquizofrenia, o si la esquizofrenia causa una diferencia en el cerebro, por ejemplo.</p>

					<h3>¿Cuáles son los factores de riesgo para las enfermedades mentales?</h3>
					<p>La mayoría de los problemas de salud mental son muy complejos y es difícil identificar una sola causa. En lugar de ello, los investigadores estudian diversos factores que incrementan el riesgo. Los psiquiatras a menudo investigan los antecedentes familiares del paciente, ya que los problemas de salud mental son más frecuentes en personas cuyos familiares biológicos también sufren un trastorno. Pero hay muchos otros factores que pueden aumentar el riesgo de desarrollar un problema de salud mental. Algunos de estos factores incluyen anomalías o desequilibrios químicos en el cerebro, lesiones en la cabeza o abuso de drogas. Los trastornos también pueden desencadenarse como consecuencia de episodios estresantes, como ser víctima de maltrato, la separación de la pareja o el fallecimiento de un amigo o miembro de la familia. </p>

					<h3>¿Qué tipos de tratamiento existen? </h3>
					<p>Los médicos generalmente recomiendan una combinación de tratamiento psicológico y farmacológico, así como intervenciones en la familia del paciente, la escuela o la comunidad. La terapia cognitivo-conductual es un tratamiento psicológico que funciona especialmente bien en niños y adolescentes con problemas tales como ansiedad, trastorno obsesivo-compulsivo y depresión. Se trata de un tipo de terapia dirigida a ayudar a las personas a gestionar sus problemas mediante la modificación de sus pensamientos y conducta. La terapia puede ser administrada por un profesional sanitario, pero hay estudios que demuestran que también puede administrarse con un ordenador, con buenos resultados. Los médicos también pueden recetar varios tipos de medicación para tratar los trastornos mentales. Algunos medicamentos están diseñados para su administración a corto plazo, mientras que otros se prescriben durante periodos de tiempo más prolongados. En función de los síntomas, los pacientes pueden necesitar medicamentos para tratar síntomas físicos además de los psicológicos. La medicación puede afectar a los niños y adolescentes de forma diferente que, a los adultos, puesto que los nuevos tratamientos farmacológicos generalmente no se estudian en personas muy jóvenes.
</p>

					<h3>¿Cómo pueden prevenirse los problemas de salud mental?</h3>
					<p>La probabilidad de que un joven desarrolle un problema de salud mental es menor si está bien estimulado desde las primeras etapas de la vida, si está bien atendido y si no tiene otros problemas de salud.</p>

				</section>
					<p>Adicionalmente, es necesario comprender la noción de porcentaje y la aplicación de conceptos estadísticos a la situación específica de análisis de la situación actual de las enfermedades mentales en Colombia.</p>

					<h3>Conceptos implicados</h3>
					<p class="boton_rojo_content">Al revisar las condiciones generales de la salud mental en Colombia es necesario tener un buen dominio del proceso de recolección, organización y análisis de datos. El cálculo e interpretación de medidas de tendencia central y por supuesto el diseño y la interpretación de gráficas de tipo estadístico.</p>
					<p class="boton_rojo_content">Al revisar las condiciones generales de la salud mental en Colombia es necesario tener un buen dominio del proceso de recolección, organización y análisis de datos. El cálculo e interpretación de medidas de tendencia central y por supuesto el diseño y la interpretación de gráficas de tipo estadístico.</p>
					<p>
						Para repasar sobre estas temáticas propias de los diferentes pensamientos variacional, numérico, etc. se sugiere consultar:</p>
					<p>
						<a class="p-800" target="_blank" href="https://www.colombiaaprende.edu.co/contenidos-para-aprender?Nombre=&amp;field_nivel_value=3&amp;field_grado_target_id=3336&amp;field_asignatura_target_id=3322">https://www.colombiaaprende.edu.co/contenidos-para-aprender?Nombre=&amp;field_nivel_value=3&amp;field_grado_target_id=3336&amp;field_asignatura_target_id=3322
						</a>
					</p>
					<p>
						<a class="p-800" target="_blank" href="http://instaladores-curriculos.sucerman.com/1-curriculo-matematicas/matematicas/">
							http://instaladores-curriculos.sucerman.com/1-curriculo-matematicas/matematicas/
						</a>
					</p>

				
				<ul class="next-prev">
					<a href="/modulos/ciencias-naturales/actividades/10/1">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a>
						<li class="numbers_np">2/3</li>
					</a>
					<a href="/modulos/ciencias-naturales/actividades/10/3">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			`,
    `

				<ul class="menu_momento_introductivo">
					<li class="btn_foro"><span><a alt="Competencias Básicas" href=""></a></span></li>
					<li class="btn_maloka"><span><a alt="Competencias Socioemocionales" href=""></a></span></li>
					<li class="btn_perfil"><span><a alt="Competencias Ciudadanas" href=""></a></span></li>
				</ul>

				<img class="divicion_image" src="Assets/Fondos/Fondo_division_mod.png">

				<h3>C. Realizar un análisis de cada contexto desde la aplicación de las matemáticas identificada, por ejemplo</h3>

				<p>“En Colombia, las encuestas... han permitido identificar que la principal problemática en materia de salud mental es la creciente prevalencia de la depresión (aproximadamente 5% de la población adulta)” (DANE 2020).</p>

				<p>Para realizar el análisis de esta afirmación es fundamental averiguar cuál es el tamaño de la población colombiana según el último censo aplicado por el DANE, esto permitirá al grupo de estudiantes calcular el 5% de este número y evaluar las implicaciones de esta problemática para el desarrollo y sostenibilidad del sistema de salud, entre otros tantos aspectos por evaluar.</p>

				<p>“El 43% de las sesiones virtuales atendidas por la línea de Minsalud durante la pandemia se orientaron a la respuesta frente a síntomas de ansiedad, estrés y depresión, principalmente dando respuesta a solicitudes de apoyo de personas de Bogotá, Antioquia, Cundinamarca y Atlántico (54.5%)” (DANE 2020). </p>

				<img class="divicion_image" src="Assets/Fondos/Fondo_division_mod.png">

				<h3>D. Elaborar una tabla que permita la recolección de datos sobre las siguientes cuestiones:</h3>

				<p>Indagar con los integrantes de la familia de cada estudiante del grupo de trabajo colaborativo sobre la presencia de síntomas como la ansiedad, el estrés y la depresión durante el último año, considerando las implicaciones de la pandemia: el aislamiento, las dificultades económicas, el desempleo, el fallecimiento o enfermedad de familiares, entre otras.</p>

				<p>Indagar también sobre la presencia de emociones tales como el enojo, la tristeza y el temor</p>

				<h3>Ejemplo de tabla:</h3>

				<img class="imgtabla" src="https://bilan.pi-interactiva.com/fotos/var/albums/11Mat_tabla1.png">

				<p>
					<a class="p-800" target="_blank" href="https://www.colombiaaprende.edu.co/Página sugerida para este análisis: https://www.minsalud.gov.co/Paginas/Minsalud-ratifica-su-compromiso-con-la-salud-mental-de-los-colombianos.aspx">https://www.colombiaaprende.edu.co/Página sugerida para este análisis: https://www.minsalud.gov.co/Paginas/Minsalud-ratifica-su-compromiso-con-la-salud-mental-de-los-colombianos.aspx
					</a>
				</p>
				<p>
					<a class="p-800" target="_blank" href="https://www.colombiaaprende.edu.co/Página sugerida para este análisis: https://www.minsalud.gov.co/Paginas/Minsalud-ratifica-su-compromiso-con-la-salud-mental-de-los-colombianos.aspx">
						http://instaladores-curriculos.sucerman.com/1-curriculo-matematicas/matematicas/
					</a>
				</p>


				<div class="mod_tar">
						<div class="mod_tar_iz">
							<p class="btn_form btn_intro btn-modal" id="subirArchivoModal">Subir Archivo</p>
						</div>
						<div class="mod_tar_der disabled">
							<!-- agregé un small -->
							<p class="btn_form btn_intro"><small>Ver calificación</small></p>	
						</div>
				</div>

				
				<ul class="next-prev">
					<a href="/modulos/ciencias-naturales/actividades/10/3">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a>
						<li class="numbers_np">3/3</li>
					</a>
					<a href="/modulos/ciencias-naturales/actividades/10/4">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			`,
    `

				<h1>FASE INTERACTIVA</h1>
				<h3>Desarrollo</h3>

				<p>En esta fase se debe diseñar la propuesta para la evaluación de la salud mental de la comunidad durante y después del distanciamiento social obligatorio por COVID-19 en la familia como primer núcleo social, la región, pueblo, localidad, vereda, etc., identificando factores asociados a la presencia y evolución de síntomas. </p>

				<p>El objetivo de esta fase del proceso es definir, reconocer e identificar las emociones adaptativas, desadaptativas y/o los posibles síntomas de problemas de salud mental en los integrantes de la familia y la comunidad: </p>

				<ul class="menu_momento_introductivo">
					<li class="btn_foro"><span><a alt="Competencias Básicas" href=""></a></span></li>
					<li class="btn_maloka"><span><a alt="Competencias Socioemocionales" href=""></a></span></li>
					<li class="btn_perfil"><span><a alt="Competencias Ciudadanas" href=""></a></span></li>
				</ul>

				<img class="divicion_image" src="Assets/Fondos/Fondo_division_mod.png">


				<h2>→ Actividad 3.</h2>

				<h3>Elaboración de la propuesta de estudio sobre condiciones asociadas a salud mental en el contexto de la pandemia del Covid – 19 en la comunidad</h3>

				<p>Cada grupo de estudiantes, con base en la información aquí aportada y la consulta de información relacionada deberá diseñar un estudio sobre condiciones asociadas a salud mental en el contexto de la pandemia del Covid – 19, haciendo uso de la siguiente estructura o modelo.</p>

				<h3>GUÍA DE ELABORACIÓN DEL ESTUDIO:</h3>

				<img class="imgtabla" src="https://bilan.pi-interactiva.com/fotos/var/albums/11Mat_tabla2.png">

				
				<ul class="next-prev">
					<a href="/modulos/ciencias-naturales/actividades/10/3">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a>
						<li class="numbers_np">1/5</li>
					</a>
					<a href="/modulos/ciencias-naturales/actividades/10/5">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			`,
    `

				<ul class="menu_momento_introductivo">
					<li class="btn_foro"><span><a alt="Competencias Básicas" href=""></a></span></li>
					<li class="btn_maloka"><span><a alt="Competencias Socioemocionales" href=""></a></span></li>
					<li class="btn_perfil"><span><a alt="Competencias Ciudadanas" href=""></a></span></li>
				</ul>

				<img class="divicion_image" src="Assets/Fondos/Fondo_division_mod.png">
				<h3>Guía para la elaboración del diseño metodológico de la propuesta</h3>
				<p>Elabora una tabla como la propuesta, usando la columna en blanco para el desarrollo de los items propuestos en el modelo.</p>
				<h3>Conceptos básicos</h3>

				<p>Para el desarrollo de este estudio se hará uso de la estadística como medio para la recolección, organización y análisis de la información, y la posterior divulgación de los resultados.</p>
				<p>La realización de un estudio de esta naturaleza requiere considerar la ética de la investigación, que no es otra cosa que informar a los participantes todas las características del estudio e invitarlos a participar del mismo; siempre debe utilizarse un consentimiento informado que cada uno de los participantes firmará si está de acuerdo en participar en el proyecto, si es un menor de edad el consentimiento debe ser firmado por el padre de familia o el tutor legal del niño.</p>
				<p>Para la primera etapa, recolección de información se propone el diseño de una encuesta, a continuación, se describen los conceptos básicos a utilizar:</p>

				<p><span class="bold_">Encuesta:</span> es un método de investigación y recopilación de datos utilizadas para obtener información de personas sobre diversos temas. Las encuestas tienen una variedad de propósitos y se pueden llevar a cabo de muchas maneras dependiendo de la metodología elegida y los objetivos que se deseen alcanzar.</p>
				<p><span class="bold_">Pregunta cerrada:</span> en estas preguntas el encuestado tiene que elegir entre las opciones establecidas. A su vez se dividen en dicotómicas o politómicas. </p>
				<p>Las dicotómicas son preguntas que se responden con un Sí o con un No, o en su defecto No sabe, No contesta o No responde.</p>
				<p>Las politómicas también conocidas como categorizadas, presentan varias alternativas para que el encuestado elija la más conveniente, por ejemplo, responder “Sí, no, tal vez” o las de tipo “Algunas veces, casi siempre, nunca, casi nunca, siempre”.</p>
				<p><span class="bold_">Grupo Etario:</span> Es un grupo integrado por personas de la misma edad o de una edad similar.</p>
				<p>Se sugieren consultar sobre grupos etarios según el Ministerio de salud</p>
				<p><a class="p-800" target="_blank" href="https://www.minsalud.gov.co/proteccionsocial/Paginas/cicloVida.aspx">https://www.minsalud.gov.co/proteccionsocial/Paginas/cicloVida.aspx</a></p>

				<h3>Conceptos estadísticos fundamentales </h3>

				<p>Para la consecución de esta información se propone que el grupo de estudiantes realice una consulta con el apoyo del docente y producto de ella se defina: estadística descriptiva, población, muestra, dato, variable, variable continua, variable discreta, frecuencia, frecuencia relativa, frecuencia absoluta, medidas de tendencia central (media, mediana, moda), gráficos estadísticos (Diagrama de barras, histograma de frecuencias, polígono de frecuencias, diagrama circular) y otros que considere importantes para el desarrollo del estudio y la presentación de los resultados obtenidos.</p>
				<p>Se sugiere consultar:</p>
				<p><a class="p-800" target="_blank" href="https://www.colombiaaprende.edu.co/contenidos-para-aprender?Nombre=&amp;field_nivel_value=3&amp;field_grado_target_id=3336&amp;field_asignatura_target_id=3322">https://www.colombiaaprende.edu.co/contenidos-para-aprender?Nombre=&amp;field_nivel_value=3&amp;field_grado_target_id=3336&amp;field_asignatura_target_id=3322</a></p>
				<p><a class="p-800" target="_blank" href="http://instaladores-curriculos.sucerman.com/1-curriculo-matematicas/matematicas/">http://instaladores-curriculos.sucerman.com/1-curriculo-matematicas/matematicas/</a></p>

				<h3>Análisis de la población y selección de la muestra a estudiar</h3>

				<p>Es necesario que él o los cursos de grado once se organicen para identificar la población a estudiar teniendo en cuenta todos los miembros de la comunidad, esto requiere información de la alcaldía, es necesario acceder a datos censales para determinar el número de habitantes por grupo etario.</p>
				<p>Con base en esta información se propone que cada grupo de trabajo colaborativo integrado por cuatro (4) estudiantes asuma el estudio de uno de los grupos etarios identificados, seleccionando una muestra aleatoria de un tamaño adecuado a las condiciones del estudio, por ejemplo, una cantidad representativa de personas, pero también se deben tener en cuenta factores como la disponibilidad de recursos para el trabajo de campo, recursos tecnológicos, transporte, entre otros. Cada uno de estos factores y su análisis deberá describirse y así explicar con claridad el tamaño y la selección de la muestra de cada grupo.</p>

				
				<ul class="next-prev">
					<a href="/modulos/ciencias-naturales/actividades/10/4">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a>
						<li class="numbers_np">2/5</li>
					</a>
					<a href="/modulos/ciencias-naturales/actividades/10/6">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			`,
    `
				<h3>Variables a evaluar y diseño de instrumentos para la recolección de datos</h3>
				<p>Determinada la muestra que participará del estudio se deben considerar preguntas en relación con las siguientes variables:
				</p>
				<p>1. Características sociodemográficas: son características para investigar como edad, género, grupos vulnerables, pertenencia étnica, ciudad de residencia, tenencia de vivienda, situación laboral, ingresos y ahorros del hogar.</p>
				<p>2. Factores relacionados con las emociones que surgieron como resultado del aislamiento en tiempos de pandemia.</p>
				<p>3. Factores relacionados con los efectos negativos en el ámbito económico y en el cuidado del hogar a causa de la pandemia.</p>
				<p>4. Factores relacionados con la salud en general, y con la salud mental en particular.</p>
				<p>5. Presencia de síntomas relacionados con el estrés, la depresión y la ansiedad.</p>
				<p>Para abordar a profundidad este tema se sugiere la consulta y estudio de:</p>
				<p><a class="p-800" target="_blank" href="https://www.colombiaaprende.edu.co/contenidos-para-aprender/formulacion-de-situaciones-aleatorias-de-recoleccion-de-informacion">https://www.colombiaaprende.edu.co/contenidos-para-aprender/formulacion-de-situaciones-aleatorias-de-recoleccion-de-informacion</a></p>
				<h3>Para diseñar el instrumento se proponen los siguientes parámetros:</h3>
				<p>a. Diseñen un máximo de cinco (5) preguntas por cada una de las variables, tomen como ejemplo el material sugerido en el enlace. Estas preguntas deben ser cerradas, para facilitar la organización y el análisis de los datos resultantes (usar tablas para tal fin).</p>
				<p>b. Defina el medio a utilizar para aplicar la encuesta, si se aplicara de manera personal el grupo de trabajo se encargará de aplicar la encuesta, hacer las preguntas a cada miembro de la comunidad que quiera y pueda participar de forma presencial tomando nota de las respuestas sin modificarlas ni interpretarlas, también se pueden grabar las respuestas con ayuda de un celular para evitar sesgos o cambios de sentido en la información.</p>
				<p>c. Otra posibilidad es el uso de herramientas como Formularios de Google la cual es gratuita y de fácil diseño y uso, podrá ser aplicado a los integrantes de la comunidad que tengan correo electrónico.</p>
				<p>También están las redes sociales mediante las cuales también es posible diseñar una encuesta:</p>
				<p>A continuación, se proponen algunos enlaces para facilitar esta actividad:</p>
				<h3>En Instagram:</h3>
				<p><a class="p-800" target="_blank" href="https://www.cnet.com/es/noticias/instagram-encuestas-opcion-respuesta/">https://www.cnet.com/es/noticias/instagram-encuestas-opcion-respuesta/</a></p>
				<h3>En Facebook: </h3>
				<p><a class="p-800" target="_blank" href="https://www.facebook.com/mis.encuestas/app/155008507867572/?gclid=CjwKCAiA9vOABhBfEiwATCi7GFN-huOh7Av9u5xphO3155ot7Eju7hh3A4qlqbfhmQTemJ-z_84WKhoCz90QAvD_BwE">https://www.facebook.com/mis.encuestas/app/155008507867572/?gclid=CjwKCAiA9vOABhBfEiwATCi7GFN-huOh7Av9u5xphO3155ot7Eju7hh3A4qlqbfhmQTemJ-z_84WKhoCz90QAvD_BwE</a></p>
				<p>d. La redacción de las preguntas será clave y deberá considerarse el grupo etario aun cuando la intencionalidad de la pregunta sea la misma, el lenguaje deberá cambiar de acuerdo con las características de quienes van a ser encuestados, algunos ejemplos de preguntas se proponen a continuación:</p>
				<p>Para personas jóvenes y adultas en relación con las emociones se proponen como ejemplo:</p>

				<img class="imgtabla" src="https://bilan.pi-interactiva.com/fotos/var/albums/11Mat_tabla3.png">

				

				
				<ul class="next-prev">
					<a href="/modulos/ciencias-naturales/actividades/10/5">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a>
						<li class="numbers_np">3/5</li>
					</a>
					<a href="/modulos/ciencias-naturales/actividades/10/7">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			`,
    `

				<ul class="menu_momento_introductivo">
					<li class="btn_foro"><span><a alt="Competencias Básicas" href=""></a></span></li>
					<li class="btn_maloka"><span><a alt="Competencias Socioemocionales" href=""></a></span></li>
					<li class="btn_perfil"><span><a alt="Competencias Ciudadanas" href=""></a></span></li>
				</ul>

				<img class="divicion_image" src="Assets/Fondos/Fondo_division_mod.png">

				<h3>Organización y análisis de los datos obtenidos mediante la encuesta</h3>

				<p>En esta parte del proceso es necesario explicar el cómo organizar los datos obtenidos de acuerdo con la forma en que se haya desarrollado la encuesta.</p>
				<p>Las aplicaciones y redes sociales facilitan esta etapa del proceso pues están diseñadas para organizar y presentar la información obtenida tanto en tablas como en gráficas de tipo estadístico. Sin embargo, tienen una gran debilidad pues no todos los integrantes de la comunidad podrán o querrán acceder a estos medios.</p>
				<p>Así que, en caso de realizar una encuesta de forma personal y con datos en papel. No olviden hacer las tablas adecuadas para facilitar la recolección de la información.</p>

				<h3>Continuando con el ejemplo:</h3>

				<p>Suponiendo una muestra de diez (10) personas, los resultados obtenidos son:</p>
				<p>a. Resultados de la aplicación de la encuesta:</p>

				<img class="imgtabla" src="https://bilan.pi-interactiva.com/fotos/var/albums/11Mat_tabla4.png">

				<p>b. Tabla de frecuencia resultante para la pregunta 1:</p>

				<img class="imgtabla" src="https://bilan.pi-interactiva.com/fotos/var/albums/11Mat_tabla5.png">

				<p><span class="bold_">Fa:</span> Frecuencia absoluta, <span class="bold_">FAA:</span> Frecuencia absoluta acumulada, <span class="bold_">Fr:</span> Frecuencia relativa, <span class="bold_">Fra:</span> Frecuencia relativa acumulada.</p>
				<p>¿Y cómo se realiza el análisis?, haciendo uso de las medidas de tendencia central previamente consultadas: La medía y la mediana son medidas aplicables a datos numéricos, por lo cual en este ejemplo sólo se aplicará la moda.</p>

				<img class="imgtabla" src="https://bilan.pi-interactiva.com/fotos/var/albums/11Mat_tabla6-01.png">

				<p>Como es posible observar, se puede concluir que: </p>
				<p class="boton_rojo_content">El 50% de las personas entrevistadas piensa que la pandemia de COVID-19 es un problema grave.</p>
				<p class="boton_rojo_content">El 60% de las personas entrevistadas se ha sentido cansado sin motivo.</p>
				<p class="boton_rojo_content">El 40% de las personas entrevistadas se ha sentido nervioso</p>
				<p class="boton_rojo_content">El 60% de las personas entrevistadas NO ha sentido rabia.</p>
				<p class="boton_rojo_content">Este análisis es apenas un ejemplo de todas las deducciones que es posible extraer de la tabla de datos.</p>
				<p>d. Representación gráfica de la tabla de frecuencia correspondiente a la pregunta 1:</p>

				<div class="mod_tar">
					<div class="mod_tar_iz">
						<h3>Diagrama de barras</h3>
						<p>Pregunta 1	 </p>
						<img width="300" src="https://bilan.pi-interactiva.com/fotos/var/albums/11Mat_img2.png">
					</div>

					<div class="mod_tar_der">
						<h3>Diagrama circular</h3>
						<p>Pregunta 1	 </p>
						<img width="300" src="https://bilan.pi-interactiva.com/fotos/var/albums/11Mat_img3.png">
					</div>
				</div>

				<p>El análisis de cada una de las preguntas elaboradas por los grupos colaborativos aportará información de gran importancia para la comunidad, posibilitará la detección de la aparición de emociones desadaptativas en los integrantes de esta, especialmente en los núcleos familiares de los estudiantes, y también la presencia de síntomas relacionados con el estrés, la depresión y la ansiedad.</p>

				
				<ul class="next-prev">
					<a href="/modulos/ciencias-naturales/actividades/10/6">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a>
						<li class="numbers_np">4/5</li>
					</a>
					<a href="/modulos/ciencias-naturales/actividades/10/8">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			`,
    `

				<ul class="menu_momento_introductivo">
					<li class="btn_foro"><span><a alt="Competencias Básicas" href=""></a></span></li>
					<li class="btn_maloka"><span><a alt="Competencias Socioemocionales" href=""></a></span></li>
					<li class="btn_perfil"><span><a alt="Competencias Ciudadanas" href=""></a></span></li>
				</ul>

				<img class="divicion_image" src="Assets/Fondos/Fondo_division_mod.png">

				<h3>Estrategias para favorecer la buena salud mental</h3>

				<p>Esta fase del proyecto es una de las más importantes pues en ella los grupos de trabajo colaborativo deben proponer actividades y alternativas para mantener una mente positiva y lograr que las personas de la comunidad, especialmente niños, niñas y jóvenes se desprendan de ideas limitadoras para mejorar su bienestar.</p>

				<p>La primera propuesta está enfocada en un conjunto de actividades llamada higiene mental, que trata de cuidar de nuestra mente como lo hacemos o debemos hacerlo con nuestro cuerpo, que permite que una persona esté en equilibrio con su entorno sociocultural. Estas acciones intentan prevenir el surgimiento de comportamientos que no se adapten al funcionamiento social y garantizar el ajuste psicológico imprescindible para que la persona goce de buena salud mental.</p>

				<p>Se sugieren las siguientes claves para aplicar las técnicas de higiene mental:</p>

				<p class="boton_rojo_content">Cuestionar las expectativas.</p>
				<p class="boton_rojo_content">Desprenderse de los imposibles.</p>
				<p class="boton_rojo_content">Cuidar de sus relaciones.</p>
				<p class="boton_rojo_content">Pensar sobre sus necesidades básicas.</p>
				<p class="boton_rojo_content">Practicar la resiliencia.</p>
				<p class="boton_rojo_content">Marcarse objetivos concretos. </p>
				<p class="boton_rojo_content">Practica la atención plena.</p>

				<p>La autonomía, el bienestar, el potencial emocional y la competitividad forman parte de los factores que debe cuidar la higiene mental y resulta necesario desarrollar los siguientes hábitos: tener una valoración positiva de sí mismo, gestionar las emociones, atraer los recuerdos positivos, estar dispuesto a ver lo positivo.</p>

				<p>Algunas actividades que pueden orientar el diseño de estrategias son:</p>

				<p>1. Ejercitar la mente leyendo</p>
				<p>2. Aprender a valorarse, buscar las fortalezas, cualidades y virtudes en cada uno.</p>
				<p>3. Generar hábitos de descanso, planificar horarios y organizar actividades que mejoren el uso del tiempo libre y la realización de actividades lúdicas que promuevan la motivación y la alegría.</p>
				<p>4. Practicar la aceptación, reconocer y aceptar la diferencia, adaptarse al cambio y la incertidumbre, ser flexible</p>
				<p>5. Reconocer las prioridades, dará propósito, motivación y fuerza a todo lo que se haga.</p>
				<p>6. Practicar actividades al aire libre con compañeros, amigos y/o familiares. </p>
				<p>7. No dejar para mañana lo que puedas hacer hoy, la organización del tiempo y las actividades facilitará fortalecer hábitos de responsabilidad y evitará la procrastinación, la pereza y la pérdida de tiempo.</p>
				<p>La segunda propuesta es la llamada gimnasia mental o gimnasia cerebral, es una técnica que permite mejorar el rendimiento escolar y se basa en una serie de ejercicios corporales para despejar la mente, enfocar la atención y revertir casos de hiperactividad, dislexia y trastornos de conducta, entre otros, en los niños, niñas y jóvenes.</p>
				<p>Se propone un ejemplo de estas actividades para facilitar la consulta y motivación de los estudiantes de grado undécimo en la búsqueda de otras, y así poder diseñar un manual o guía con las estrategias para favorecer la buena salud mental de la comunidad, especialmente la comunidad académica.</p>

				<h3>Ejercicios simples para aumentar la concentración y la memoria:</h3>

				<div class="mod_tar" style="display: flex;">
					<div class="mod_tar_iz">
						<div class="text_exercise_mat">
							<h3>1. Ejercicio para niños (Gateo Cruzado)</h3>
							<p>Con este ejercicio se obtienen diversos beneficios, activa el cerebro para cruzar la línea media visual, auditiva, kinesiológica y táctil, favorece la receptividad para el aprendizaje, mejora los movimientos oculares derecha a izquierda y la visión binocular y mejora la coordinación izquierda/derecha y la visión y audición.</p>
							<p>Para realizar: mueve un brazo simultáneamente con la pierna de la parte opuesta del cuerpo. Hay diferentes formas de hacerlo: dobla una rodilla y levántala para tocarla con la mano del lado opuesto o dobla la rodilla llevando el pie hacia atrás y tócalo con la mano del lado contrario. En los niños más pequeños, también se puede hacer con la rodilla y los codos.</p>
						</div>

						<div class="text_exercise_mat">
							<h3>2. Ejercicio para jóvenes (Brazo extendido, manos abiertas)</h3>
							<p>Como la canción, extiende los brazos frente a ti, abre las palmas. Tu mano derecha tendrá la palma hacia y cerca a tu rostro, y la izquierda hacia a fuera. Ahora cambia. Izquierda a dentro, derecha a fuera. Izquierda a fuera, derecha dentro. Cambia durante 1 minuto, lo más rápido posible.</p>
							<p>La práctica continua de estos ejercicios aumenta la conexión entre los dos hemisferios del cerebro y también ayuda a desarrollar el aprendizaje, la memoria y la creatividad.</p>
						</div>

						<div class="text_exercise_mat">
							<h3>3. Ejercicio para adultos</h3>
							<p>Apoyar las manos contra la pared y estirar la pierna izquierda hacia atrás, levantando el talón, el cuerpo debe adoptar un ángulo de 45°. En esta posición exhalar mientras se inclina contra la pared y flexionar la rodilla derecha, al mismo tiempo que presiona contra el piso el talón del pie izquierdo. Luego inhalar regresando a la posición inicial, levantando el talón izquierdo. Este ejercicio mejora la atención y favorece la concentración.
</p>
						</div>

						<div class="text_exercise_mat">
							<h3>4. Ejercicio para adultos mayores</h3>
							<p>Escribir una lista de tareas y luego memorizarla, escuchar una nueva canción y escribir una parte de la letra, dibujar un mapa desde su casa hasta un lugar importante para la comunidad, investigar un nuevo tema de interés.</p>
						</div>

					</div>

					<div class="mod_tar_der">
						<div class="img_exercise_mat">
							<img height="300" src="https://bilan.pi-interactiva.com/fotos/var/albums/11MAT_PG27-1%402x.png">
						</div>
						<div class="img_exercise_mat">
							<img height="300" src="https://bilan.pi-interactiva.com/fotos/var/albums/11MAT_PG27-2%402x.png">
						</div>
						<div class="img_exercise_mat">
							<img height="300" src="https://bilan.pi-interactiva.com/fotos/var/albums/11MAT_PG27-3%402x.png">
						</div>
						<div class="img_exercise_mat">
							<img height="300" src="https://bilan.pi-interactiva.com/fotos/var/albums/11MAT_PG27-4%402x.png">
						</div>
					</div>
				</div>

				<div class="mod_tar">
						<div class="mod_tar_iz">
							<p class="btn_form btn_intro btn-modal" id="subirArchivoModal">Subir Archivo</p>
						</div>
						<div class="mod_tar_der">
							<p class="btn_form btn_intro"><small>Ver calificación</small></p>	<!-- small agregado -->
						</div>
				</div>



				
				<ul class="next-prev">
					<a href="/modulos/ciencias-naturales/actividades/10/7">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a>
						<li class="numbers_np">5/5</li>
					</a>
					<a href="/modulos/ciencias-naturales/actividades/10/9">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			`,
    `

				<h1>Fase postactiva o de aplicación</h1>
				<h2>→ Actividad 4.</h2>
				

				<ul class="menu_momento_introductivo">
					<li class="btn_foro"><span><a alt="Competencias Básicas" href=""></a></span></li>
					<li class="btn_maloka"><span><a alt="Competencias Socioemocionales" href=""></a></span></li>
					<li class="btn_perfil"><span><a alt="Competencias Ciudadanas" href=""></a></span></li>
				</ul>
				<img class="divicion_image" src="Assets/Fondos/Fondo_division_mod.png">

				<p>A. En los grupos de trabajo colaborativo deben consultar uno de los siguientes estudios estadísticos realizados sobre salud mental en tiempos de pandemia por diferentes organizaciones gubernamentales y no gubernamentales:</p>
				<p class="boton_rojo_content">a. DIAN. Salud mental en Colombia: una aproximación desde las estadísticas oficiales en el contexto de pandemia. Consultar en: <a class="p-800" target="_blank" href="https://www.dane.gov.co/files/webinar/presentacion-webinar-salud-mental-en-colombia-21-10-2020.pdf">https://www.dane.gov.co/files/webinar/presentacion-webinar-salud-mental-en-colombia-21-10-2020.pdf</a></p>
				<p class="boton_rojo_content">b. Universidad Javeriana. Salud mental y resiliencia en adultos jóvenes de Sudamérica durante el aislamiento (distanciamiento social obligatorio) por la pandemia de COVID-19. Consultar en: 
					<a class="p-800" target="_blank" href="https://medicina.javeriana.edu.co/documents/3185897/0/ESM+Jo%C2%BFvenes+-+Present+MinSalud+versi%C3%B3n+3.pdf/c5414e93-e078-4e0a-971f-99dfd9adbdbd">https://medicina.javeriana.edu.co/documents/3185897/0/ESM+Jo%C2%BFvenes+-+Present+MinSalud+versi%C3%B3n+3.pdf/c5414e93-e078-4e0a-971f-99dfd9adbdbd</a>
				</p>
				<p class="boton_rojo_content">c. Unicef. Encuesta #ENCOVID19Infancia. Efectos de COVID-19 en el bienestar de las niñas, niños y adolescentes. Consultar en: <a class="p-800" target="_blank" href="https://www.unicef.org/mexico/informes/encuesta-encovid19infancia">https://www.unicef.org/mexico/informes/encuesta-encovid19infancia</a></p>
				<p>B. De acuerdo con los resultados presentados en el estudio seleccionado, el grupo de estudiantes deberá preparar una infografía o poster que contenga la información explicada mediante gráficas de tipo estadístico e interpretaciones elaboradas en un lenguaje claro que permita la comprensión de estos por todos los miembros de la comunidad</p>
				<p class="boton_rojo_content">a. La infografía o poster debe elaborarse según un modelo común acordado entre estudiantes y docente.</p>
				<p class="boton_rojo_content">b. La interpretación de las gráficas y los datos estadísticos deben explicarse ampliamente considerando el público, deberán organizar sesiones para los estudiantes del colegio, padres de familia, docentes y directivos, otros miembros de la comunidad que hayan participado del proyecto.</p>
				<p>C. Elaborar una infografía o poster que contenga los resultados del proyecto sobre salud mental en la comunidad desarrollado por cada grupo de trabajo colaborativo.</p>
				<p class="boton_rojo_content">a. Organizar un evento de tipo académico donde los diferentes grupos presenten dichos resultados a los estudiantes del colegio, padres de familia, docentes y directivos, y otros miembros de la comunidad.</p>
				<p class="boton_rojo_content">b. Preparar y desarrollar jornadas académicas donde se socialicen las estrategias propuestas por los estudiantes sobre higiene y gimnasia mental.</p>
				<p class="boton_rojo_content">c. Documentar estas actividades mediante fotos, audios y/o videos que faciliten su socialización con otras instituciones educativas, de cuidado del adulto mayor, empresas, etc.</p>

				<div class="mod_tar">
						<div class="mod_tar_iz">
							<p class="btn_form btn_intro">Subir Archivo</p>
						</div>
						<div class="mod_tar_der">
							<p class="btn_form btn_intro"><small>Ver calificació</small>n</p>	
						</div>
				</div>
				
				<ul class="next-prev">
					<a href="/modulos/ciencias-naturales/actividades/10/7">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a>
						<li class="numbers_np">1/1</li>
					</a>
					<a href="/modulos/ciencias-naturales/actividades/10/9">
						<!--<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>-->
					</a>
				</ul>
			`,
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.page = params.page;
      console.log(this.page);
    });
  }
}
