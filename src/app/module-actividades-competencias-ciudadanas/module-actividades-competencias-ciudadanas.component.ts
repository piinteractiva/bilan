import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-module-actividades-competencias-ciudadanas',
  templateUrl: './module-actividades-competencias-ciudadanas.component.html',
  styleUrls: ['./module-actividades-competencias-ciudadanas.component.scss'],
})
export class ModuleActividadesCompetenciasCiudadanasComponent
  implements OnInit
{
  page: any;

  module = [
    `
				<h1>
					FASE PREACTIVA O DE EXPLORACIÓN DE SABERES PREVIOS
				</h1>

				<p>
					<strong>
						PARTICIPACIÓN CIUDADANA PARA LA RESOLUCIÓN DE CONFLICTOS Y LA CONSTRUCCIÓN DE PAZ
					</strong>
				</p>

				<p>
					La Constitución Política afirma en su primer artículo, que Colombia es un Estado Social de Derecho. Esto significa que es un Estado en el que se protegen y se promueven nuestros derechos fundamentales y los Derechos Humanos. De los derechos fundamentales más importantes de cualquier Constitución justa e igualitaria, son los Derechos Políticos, puesto que nos garantizan la participación democrática en diferentes escenarios que atañen a los intereses colectivos y nacionales. Una de las formas de participación que se establecen en la constitución se denomina mecanismos de participación ciudadana.
				</p>

				<img class="divicion_image" src="assets/images/fondos/Fondo_division_mod.png">

				<h2>
					Actividad 1.
				</h2>

				<p>
					 Antes de hablar sobre participación ciudadana, se propone debatir frente al siguiente caso de discriminación sucedido en Argentina (nota de Semana, 2017). Al finalizar la lectura, en el grupo, se debaten las preguntas orientadoras:
				</p>

				<section class="extract_content">
					<p>
						<strong>
							<i>
								El caso de discriminación a un niño con Asperger que conmociona a la Argentina
							</i>
						</strong>
					</p>

					<p>
						Un grupo de madres celebró la decisión de un colegio de haber sacado a un menor del curso que sufre esta especie de autismo. Pensaron que el hecho pasaría desapercibido, pero generó una ola de indignación.
					</p>

					<p>
						Hace unos días un grupo de madres decidieron no enviar más a sus hijos de cuarto grado al colegio San Antonio de Padua, en Argentina, hasta que la institución no expulsara a un niño con el síndrome de asperger. Ante la presión de las familias, el colegio cambió al pequeño de curso. Pensaron que el hecho no tendría mucha importancia. Pero no fue así.
					</p>

					<p>
						Días después se conoció una conversación en la que algunas madres celebraron la decisión de las directivas del colegio, manifestaciones que hicieron a través de un grupo de Whatsapp. “Al fin una buena noticia”, decía una mujer llamada Viviana quien a su mensaje agregó un gran número de emojis de celebración: Caras felices, aplausos, campanas y botellas de champagne. Otras respondieron con frases como “Ya era hora de que se hagan valer los derechos del niño para 35 y no para uno solo!”. “Ojalá sea una buena noticia para ese nene y una buena noticia para todos los que peleamos para que nuestros hijos tengan una primaria como se merecen”. “Qué bueno para los chicos, que puedan trabajar y estar tranquilos”.  “Un alivio para los nuestros”.
					</p>

					<br>
					<img src="https://i.postimg.cc/N0YShsF5/10-CC-img1.png" alt="" class="tabla">

					<p>
						Rosaura Gómez, la tía del menor, compartió la historia en su cuenta de Facebook y además publicó las imágenes de la conversación de este grupo de mujeres. “Las mamás de los compañeritos hacían paro: no llevaban a sus hijos hasta que no sacaran a mi sobrino del colegio; eso no pasó pero lo cambiaron al otro 4°. Se supone que es un colegio religioso y esta fue la reacción de las mamás al enterarse”, escribió. La publicación se viralizó y fueron miles las personas que mostraron su indignación con el colegio como con las madres que promovían la discriminación del menor.
					</p>

					<p>
						El diario El Clarín de Argentina contactó a Paola Giaco, la madre del pequeño, para que contara su versión de la historia: “ver lo que escribieron las madres me generó angustia y vergüenza ajena. Pedí una reunión con la directora de la escuela para que me ponga por escrito por qué cambiaron a mi hijo de sección. Verbalmente me dijo que lo hacía para ‘aliviar al curso’”.
					</p>

					<p>
						Una de las madres del grupo no estaba de acuerdo con lo que se decía en el grupo así que le envió imágenes de esa conversación a Paola, quien no hacía parte del chat desde segundo grado pues ya habían dicho algo acerca de su hijo que la lastimó y prefirió salirse.
					</p>

					<p>
						“En ese contexto, me anunciaron el cambio a 4° B. Yo firmé y cuando llegué a mi casa me di cuenta de que quería tener los motivos por escrito, por eso volví a pedir una reunión con la directora. Mi hijo está angustiado. Le costó mucho tener un grupo de amigos y no quiere perder lo que consiguió. Lo charló con la psicóloga, pero no es un cambio fácil para él”, agregó la mamá que resaltó que “durante el año lo suspendieron en varias ocasiones. Lo sancionan por sus crisis, cuando son características del Asperger”. […] (Semana, 2017).
					</p>
				</section>

				<br>

				<img src="https://i.postimg.cc/tJJ8rL0v/diana-ciudad.png">

				<ul class="menu_momento_introductivo">
					<li class="btn_foro"><span><a alt="Competencias Básicas" href=""></a></span></li>
					<li class="btn_maloka"><span><a alt="Competencias Socioemocionales" href=""></a></span></li>
				</ul>

				<img class="divicion_image" src="assets/images/fondos/Fondo_division_mod.png">

				<p>
					Preguntas orientadoras del debate:
				</p>

				<p>
					<strong>a.</strong>
					Ante este hecho, ¿qué tipo de acciones o decisiones hubieran tomado en el caso de haber conocido <strong>con antelación</strong>  la decisión del colegio ante la situación de discriminación por parte de las madres?
				</p>
				<p>
					<strong>b.</strong>
					¿Qué tipo de acciones o decisiones hubieran tomado <strong> posterior </strong> a la decisión del colegio ante la situación de discriminación?
				</p>
				<p>
					<strong>c.</strong>
					¿Qué acciones de participación dentro del colegio emplearían para evitar este tipo de acciones discriminatorias en el colegio? ¿A qué instancias de su colegio irían para denunciar cualquier tipo de discriminación?
				</p>

				<p>
					Para responder las preguntas a, b y c se sugiere tener en cuenta la Ley 1620 de 2013 - Decreto 1965 de 2013 y las Guía 29 Guías pedagógicas para la convivencia escolar. Allí claramente se expone que:
				</p>

				<section class="extract_content">
					<p>
						…la Ley 1620 de 2013 y su decreto reglamentario aporta al mejoramiento de la calidad educativa y a la formación para el ejercicio de la ciudadanía, al convertirse en herramientas de política pública que organizan el sector educativo para contribuir al fortalecimiento de la convivencia escolar. De igual forma, la ley hace énfasis en la necesidad de entender la convivencia escolar como un asunto colectivo, cuya responsabilidad es compartida entre la comunidad educativa y otros sectores involucrados (MEN, s.f., p. 17)
					</p>
				</section>

				<p>
					La idea es que, a partir de esta guía y las orientaciones de la ley y el decreto, se centre la discusión en el concepto de la convivencia escolar entendido como:
				</p>

				<section class="extract_content">
					<p>
					…la acción de vivir en compañía de otras personas en el contexto escolar y de manera pacífica y armónica. Se refiere al conjunto de relaciones que ocurren entre las personas que hacen parte de la comunidad educativa, el cual debe enfocarse en el logro de los objetivos educativos y su desarrollo integral (MEN, s.f., p. 25)					</p>
				</section>

				<p>
					Por tanto, es importante que, para el análisis de este caso de discriminación, el cual, también podría suceder en nuestro colegio, tengamos los conocimientos, habilidades y destrezas para resolver conflictos teniendo en cuenta, las pautas asignadas por el manual de convivencia, las Leyes y la Constitución Colombiana.
				</p>

				<p>
					<strong>
						d.
					</strong>
					  Si la situación hubiese sucedido en Colombia, ¿crees que la tutela sería un mecanismo para reparar al niño víctima de la discriminación? ¿qué derechos fundamentales se le estaría vulnerando desde la actuación de las madres que protestaron para sacarlo y del colegio que finalmente lo cambió del curso?
				</p>


				<ul class="next-prev">
					<a href="#">
						<li class="numbers_np">1/3</li>
					</a>
					<a href="ciudadanas2.html">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			`,
    `
				<img src="https://i.postimg.cc/tJJ8rL0v/diana-ciudad.png">

				<ul class="menu_momento_introductivo">
					<li class="btn_foro"><span><a alt="Competencias Básicas" href=""></a></span></li>
				</ul>

				<img class="divicion_image" src="assets/images/fondos/Fondo_division_mod.png">
				<h2>Actividad 2.</h2>


				<p>Es importante que se logre distinguir algunos conceptos fundamentales sobre la temática. Para ello, vamos a hacerlo de manera más interactiva.</p>

				<p>
					<span class="bold_">a.</span>
					A continuación, vas a encontrar una tabla con dos columnas. Relaciona el concepto de la columna A con la definición correcta de la columna B escribiendo el número que corresponda en el paréntesis:
				</p>

				<img class="tabla" src="https://i.postimg.cc/LX8WXxzS/10-CC-tabla1.png" alt="">

				<p>
					Para verificar que hubo una buena relación entre el concepto y la definición, resuelva el siguiente crucigrama haciendo uso de los conceptos de la columna A de la tabla anterior:
				</p>
				<br>

				<img src="https://i.postimg.cc/mDm0Nvbh/10-CC-crucigrama.png" alt="" class="tabla">
				<br>
				<br>

				<img src="https://i.postimg.cc/435MsDHw/10-CC-tabla2.png" alt="" class="tabla">

				<br>
				<p>
					<span class="bold_">b.</span>
					Teniendo en cuenta los conceptos que anteriormente se trabajaron y aclararon con la con la orientación de su profesor, a continuación se propone explorar la siguiente narrativa (a manera de historieta como aparece abajo) en el que deban acudir a un mecanismo de participación ciudadana. Al final, socialízalo con tus compañeros.
				</p>
				<br>
				<img src="https://i.postimg.cc/MKMhV3gK/10-CC-img2.png" alt="" class="tabla">


				<p>
					<span class="bold_">c.</span>
					La iniciativa legislativa popular en Colombia
				</p>
				<p>
					La iniciativa legislativa, en términos conceptuales, se puede sintetizar de la siguiente manera:
				</p>
				
				<section class="extract_content">
					<p>
						La ILP [Iniciativa Legislativa Popular] es la institución que da forma al derecho de la ciudadanía a plantear reformas legislativas —sea o no en forma de ley— ante el Poder Legislativo, obligando a este a su correspondiente toma en consideración. En algunos casos, como el de Colombia, puede abarcar también reformas constitucionales. La ILP es directa cuando culmina en la activación de un referéndum en el que se toma la decisión —sin pasar por el Poder Legislativo— e indirecta cuando la decisión final sobre el tema propuesto corresponde al Parlamento u otro órgano de representación. Esta última modalidad, conocida también como Iniciativa de Agenda, permite introducir temas en la agenda legislativa sin erosionar el poder de los legisladores: «consiste en que un determinado mínimo de ciudadanos políticamente capaces puedan presentar un proyecto de ley, a cuya toma en consideración se halle obligado el Parlamento» (Kelsen, 1920, pp. 65-66). (Suárez y Welp, 2019, p. 109).
					</p>
				</section>

				<p>
					Según el texto anterior, en Colombia la figura de la iniciativa legislativa popular, como mecanismo de participación ciudadana, se fortaleció gracias a la carta constitucional de 1991 que la incluyó junto con el referendo, plebiscito, revocatoria del mandato y cabildo abierto. Sin embargo, dicho mecanismo ha sido pocas veces utilizada por los ciudadanos y, cuando se presentan, no prosperan, como lo muestra la Registraduría Nacional del Estado Civil (s.f.):
				</p>

				<br>
				<img src="https://i.postimg.cc/1tXWPfQ5/10-CC-tabla3.png" alt="" class="tabla">

				<ul class="next-prev">
					<a href="ciudadanas1.html">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a href="#">
						<li class="numbers_np">2/3</li>
					</a>
					<a href="ciudadanas3.html">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			`,
    `

				<img src="https://i.postimg.cc/tJJ8rL0v/diana-ciudad.png">
				<ul class="menu_momento_introductivo">
					<li class="btn_foro"><span><a alt="Competencias Básicas" href=""></a></span></li>
					<li class="btn_maloka"><span><a alt="Competencias Socioemocionales" href=""></a></span></li>
				</ul>

				<img class="divicion_image" src="assets/images/fondos/Fondo_division_mod.png">
				<h2>Actividad 3</h2>

				<p>
					De acuerdo con el texto y la tabla presentada,
				</p>



				<p>
					<strong>
						a.
					</strong>
					Qué ejemplos se pueden exponer de una iniciativa legislativa popular directa y una indirecta. Utiliza ejemplos hipotéticos si es el caso.
				</p>

				<p>
					<strong>
						b.
					</strong>
					Con la orientación de tu profesor, consulta cuáles son los requerimientos, según la Constitución, para presentar una iniciativa legislativa popular.
				</p>

				<p>
					<strong>
						c.
					</strong>
					Después de casi 30 años de la Constitución Política de Colombia, ¿por qué crees que se han presentado pocas iniciativas legislativas populares y por qué ninguna ha prosperado?
				</p>

				<div class="mod_tar">
						<div class="mod_tar_iz">
							<p class="btn_form btn_intro btn-modal" id="subirArchivoModal">Subir Archivo</p>
						</div>
						<div class="mod_tar_der disabled
						">
							<p class="btn_form btn_intro"><small>Ver calificación</small></p>
						</div>
				</div>


				<ul class="next-prev">
					<a href="ciudadanas2.html">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a href="#">
						<li class="numbers_np">2/3</li>
					</a>
					<a href="ciudadanas4.html">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			`,
    `

				<img src="https://i.postimg.cc/tJJ8rL0v/diana-ciudad.png">
				<ul class="menu_momento_introductivo">
					<li class="btn_foro"><span><a alt="Competencias Básicas" href=""></a></span></li>
					<li class="btn_maloka"><span><a alt="Competencias Socioemocionales" href=""></a></span></li>
				</ul>

				<img class="divicion_image" src="assets/images/fondos/Fondo_division_mod.png">
				<h2>Actividad 3</h2>

				<p>
					De acuerdo con el texto y la tabla presentada,
				</p>



				<p>
					<strong>
						a.
					</strong>
					Qué ejemplos se pueden exponer de una iniciativa legislativa popular directa y una indirecta. Utiliza ejemplos hipotéticos si es el caso.
				</p>

				<p>
					<strong>
						b.
					</strong>
					Con la orientación de tu profesor, consulta cuáles son los requerimientos, según la Constitución, para presentar una iniciativa legislativa popular.
				</p>

				<p>
					<strong>
						c.
					</strong>
					Después de casi 30 años de la Constitución Política de Colombia, ¿por qué crees que se han presentado pocas iniciativas legislativas populares y por qué ninguna ha prosperado?
				</p>

				<div class="mod_tar">
						<div class="mod_tar_iz">
							<p class="btn_form btn_intro btn-modal" id="subirArchivoModal">Subir Archivo</p>
						</div>
						<div class="mod_tar_der disabled
						">
							<p class="btn_form btn_intro"><small>Ver calificación</small></p>
						</div>
				</div>


				<ul class="next-prev">
					<a href="ciudadanas2.html">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a href="#">
						<li class="numbers_np">2/3</li>
					</a>
					<a href="ciudadanas4.html">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			`,
    `

				<h2>
					Actividad 2.
				</h2>
				<p>
					<strong>
						La tutela.
					</strong>
				</p>

				<p>
					¿Recuerdan el caso del niño que sufrió un hecho de discriminación por su estado de salud en Argentina? Pues bien, en ocasiones los mecanismos de participación no son suficientes para proteger y promover tanto los derechos fundamentales como los derechos humanos, característicos de una democracia como la nuestra. Frente a esto, en Colombia se implementó un mecanismo que ha sido un avance en términos democráticos para los ciudadanos y es la tutela. La Constitución Política lo estableció de la siguiente manera:
				</p>

				<section class="extract_content">
					<p>
						Toda persona tendrá acción de tutela para reclamar ante los jueces, en todo momento y lugar, mediante un procedimiento preferente y sumario, por sí misma o por quien actúe a su nombre, la protección inmediata de sus derechos constitucionales fundamentales, cuando quiera que éstos resulten vulnerados o amenazados por la acción o la omisión de cualquier autoridad pública. La protección consistirá en una orden para que aquél respecto de quien se solicita la tutela, actúe o se abstenga de hacerlo. El fallo, que será de inmediato cumplimiento, podrá impugnarse ante el juez competente y, en todo caso, éste lo remitirá a la Corte Constitucional para su eventual revisión. Esta acción sólo procederá cuando el afectado no disponga de otro medio de defensa judicial, salvo que aquélla se utilice como mecanismo transitorio para evitar un perjuicio irremediable. En ningún caso podrán transcurrir más de diez días entre la solicitud de tutela y su resolución. La ley establecerá los casos en los que la acción de tutela procede contra particulares encargados de la prestación de un servicio público o cuya conducta afecte grave y directamente el interés colectivo, o respecto de quienes el solicitante se halle en estado de subordinación o indefensión (CPC, artículo 86).
					</p>

					<p>
						En este orden, la tutela es procedente cuando se le vulneran los derechos fundamentales por parte de la autoridad pública o particulares (en el Titulo II de la Constitución Política podrás encontrar los derechos fundamentales) a cualquier ciudadano de Colombia. Por ello, es conocer nuestros derechos fundamentales y saber cuándo y cómo están siendo amenazados o vulnerados para que puedan ser restituidos mediante la tutela.
					</p>
				</section>
				
				<br>
					<img src="https://i.postimg.cc/tJJ8rL0v/diana-ciudad.png">
				<ul class="menu_momento_introductivo">
					<li class="btn_foro"><span><a alt="Competencias Básicas" href=""></a></span></li>
					<li class="btn_maloka"><span><a alt="Competencias Socioemocionales" href=""></a></span></li>
					<li class="btn_perfil"><span><a alt="Competencias Ciudadanas" href=""></a></span></li>
				</ul>


				<img class="divicion_image" src="assets/images/fondos/Fondo_division_mod.png">

				<p>
					A continuación, vamos a redactar entre todos, una acción de tutela, que permita reestablecer los derechos que le fueron vulnerados al niño que fué discriminado en Argentina, esto en el caso hipotético que haya sucedido en Colombia. Entre to redactemos una acción de tutela que permita reestablecer los derechos vulneradores por el niño que fue discriminado, en el caso hipotético que haya sucedido en Colombia.  Entre todos, ayudémosle a redactar una tutela completando el siguiente formato:
				</p>

				<section class="extract_content">

					<p>
						Señor <br>
						JUEZ_____________________(REPARTO) <br>
						Ciudad
					</p>

					REFERENCIA: SOLICITUD DE ACCIÓN DE TUTELA

					<p>
						Yo,  ___________________ , mayor de edad, vecino de esta ciudad, identificado con la cédula de ciudadanía cuyo número y lugar de expedición aparece al pie de mi correspondiente firma, residente en _________________ municipio de ________________, actuando en nombre propio (o en representación de), acudo respetuosamente ante su Despacho para promover ACCIÓN DE TUTELA, de conformidad con el artículo 86 de la Constitución Política y los Decretos Reglamentarios 2591 de 1.991 y 1382 de 2.000, para que judicialmente se me (le) conceda la protección de los derechos constitucionales fundamentales que considero vulnerados y/o amenazados por las acciones y/o omisiones de la autoridad pública (o el particular, según el caso) que mencioné en la referencia de este escrito. Fundamento mi petición en los siguientes:
					</p>

					HECHOS

					<p>
						(Detalle en este espacio de manera clara y completa los hechos sucedidos, derechos vulnerados y/o amenazados. Amplíe los hechos de manera hipotética)
					</p>

					<p>
						<strong>
						1.	______________________________________________________________
							______________________________________________________________
							______________________________________________________________
						</strong>
					</p>
					<p>
						<strong>
						2.	______________________________________________________________
							______________________________________________________________
							______________________________________________________________
						</strong>
					</p>

						PETICIÓN

						<p>
							Con fundamento en los hechos narrados y en las consideraciones expuestas, respetuosamente solicito al señor Juez TUTELAR a mi favor los derechos constitucionales fundamentales invocados ORDENÁNDOLE a la autoridad accionada que (detalle en este espacio la orden que pretende que el Juez declare para la protección de sus derechos)
						</p>

						<p>
						<strong>
						1.	______________________________________________________________
							______________________________________________________________
							______________________________________________________________
						</strong>
					</p>
					<p>
						<strong>
						2.	______________________________________________________________
							______________________________________________________________
							______________________________________________________________
						</strong>
					</p>

					MEDIOS DE PRUEBAS

					<p>
						(Relacione en este espacio los documentos o pruebas sumarias que pretende hacer valer y quiere aportar para la defensa de sus derechos fundamentales vulnerados).
					</p>

					JURAMENTO

					<p>
						Bajo la gravedad del juramento manifiesto que, por los mismos hechos y derechos, no he presentado petición similar ante ninguna autoridad judicial.

					</p>
					
					NOTIFICACIONES
					<p>
						Las mías las recibiré en la secretaria de su Despacho o ____________________________________________________________ Teléfono________________
					</p>

					<p>
						El Accionado en la _____________________________________________________________ Teléfono________________
					</p>

					<p>
						Ruégole, señor Juez, ordenar el trámite de ley para esta petición.
					</p>

					<p>
						Del señor Juez
					</p>

					<p>
						Firma _______________________
					</p>

					<p>
						NOMBRE ______________________
					</p>

					<p>
C.C._____________ DE___________
					</p>

					
					<p>
						DIRECCIÓN: _______________________
					</p>
					
					<p>
						
						CORREO ELECTRÓNICO:   _______________________
					</p>

					<p>
TELÉFONOS DE CONTACTO:    _______________________
					</p>
					
				</section>

				<div class="mod_tar">
						<div class="mod_tar_iz">
							<p class="btn_form btn_intro btn-modal" id="subirArchivoModal">Subir Archivo</p>
						</div>
						<div class="mod_tar_der disabled
						">
							<p class="btn_form btn_intro">Calificación</p>
						</div>
				</div>

				<ul class="next-prev">
					<a href="ciudadanas4.html">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a href="#">
						<li class="numbers_np">1/5</li>
					</a>
					<a href="ciudadanas6.html">
						<li class="adelante_btn_mod italic_">Continuar<span class="icon_proximo"></span></li>
					</a>
				</ul>
			`,
    `

				<h1>
					Fase Postactiva o de Interacción.
				</h1>

				<p>
					Construyamos en grupo una iniciativa mediante un mecanismo de participación ciudadana:
				</p>

				<img class="divicion_image" src="assets/images/fondos/Fondo_division_mod.png">
				<br>
				<img src="https://i.postimg.cc/tJJ8rL0v/diana-ciudad.png">
				<ul class="menu_momento_introductivo">
					<li class="btn_foro"><span><a alt="Competencias Básicas" href=""></a></span></li>
					<li class="btn_maloka"><span><a alt="Competencias Socioemocionales" href=""></a></span>
					</li>
					<li class="btn_perfil"><span><a alt="Competencias Ciudadanas" href=""></a></span></li>
				</ul>
				
				<br>
				<h2>
					Actividad 1
				</h2>

				<p>
					Con la orientación del docente, lo primero que vamos a hacer es identificar un problema que exista en nuestro territorio departamental, con base a ello, vamos a proponer una iniciativa de participación ciudadana que tenga como finalidad resolver un problema del territorio y la comunidad. Para lo anterior, se sugiere seguir las siguientes indicaciones:
				</p>


				<p>
					<strong>
					1. Definición del problema:
					</strong>
					es el análisis y diagnóstico del territorio. La idea es resolver un (1) problema, que exista en nuestro territorio, así existan otros más y con ello, brindar una posíble solución. Para ello, se propone que, con la orientación del profesor, se realice lluvia de ideas y debates que permitan identificar el problema base que se desea resolver en la comunidad y territorio.
				</p>

				<p>
					Teniendo identificado el problema, es importante realizar el “árbol de problemas”. Para ello, es didáctico realizarlo de acuerdo con la siguiente gráfica:
				</p>

				<br>
				<img src="https://i.postimg.cc/FH08nd9M/10-CC-img5.png" alt="" class="tabla">
				<br>

				<p>
					<strong>
						2.	Posible solución:
					</strong>
					con el árbol de problemas, conociendo las causas y efectos que podría tener, es necesario identificar la posible solución del problema mediante un árbol de objetivos. En él se puede identificar lo siguiente:
				</p>
				<p>
					<strong>
						a.	Fines o resultados:
					</strong>
					el propósito final del proyecto que no es otra cosa que resolver un problema específico de la comunidad. Aquí se debe identificar todos los fines o resultados que se esperan lograr con la solución del problema.
				</p>
				<p>
					<strong>
						b.	Solución:
					</strong>
					es la acción principal y central que eligieron para la solución del problema identificado.
				</p>
				<p>
					<strong>
						c.	Medios:
					</strong>
					es identificar cuáles son los medios o instrumentos que se necesitan para solución del problema y que aportan a los fines y resultados.
				</p>
				<p>
					<strong>
						d.
					</strong>
					Esta parte se puede realizar a partir de la siguiente imagen que tiene un buen ejemplo:
				</p>
				<br>
				<img src="https://i.postimg.cc/WbBxn6Pm/10-CC-img6.png" alt="">
				<br>

				<p>
					Ahora bien, si ya hemos realizado tanto el árbol de problemas como el de objetivos; se procede a buscar, realizar y luego ejecutar una iniciativa de participación ciudadana que, para el caso expuesto, se podría resolver realizando un cabildo abierto (si desean, con la orientación de su profesor, se puede hacer otro tipo de mecanismo, como, por ejemplo, un proyecto legislativo).
				</p>

				<p>
					Te recordamos que un cabildo abierto “…es la reunión pública del concejo distrital, municipal o juntas administradoras locales, en la cual hay participación de los habitantes para discutir libremente de manera directa y pública acerca de los asuntos de interés de la comunidad” (Instituto Distrital de la participación y acción comunal, 2017).
				</p>

				<p>
					Para organizar el cabildo abierto, se sugiere tener un documento organizado en el que se exponga claramente el árbol de problemas y de objetivos que anteriormente trabajaron con la orientación de su profesor. Se sugiere el siguiente orden:
				</p>

				<p>
					<strong>
						a.
					</strong>
					Nombre del debate o tema que se va a exponer en el cabildo abierto.
				</p>
				<p>
					<strong>
						b.
					</strong>
					Incluir el árbol de problemas y de objetivos en el documento (los diagramas).
				</p>
				<p>
					<strong>
						c.
					</strong>
					Objetivos:
					</p><p style="margin-left: 20px; margin-top: -10px;">
						<strong>
							i.
						</strong>
						General: es la solución del árbol de objetivos. <br>
						<strong>
							ii.
						</strong>
						Específicos: son los medios del árbol de objetivos.
					</p>
				<p></p>
				<p>
					<strong>
						d.
					</strong>
					Justificación: en esta fase se debe argumentar sobre la importancia de generar un cabildo abierto para discutir sobre una de las problemáticas de nuestra comunidad. Se debe exponer, además, por qué es importante solucionar este problema y quiénes se van a beneficiar con el proyecto.
				</p>
				<p>
					<strong>
						e.
					</strong>
					Resultados esperados: ¿qué esperan conseguir con el cabildo abierto? ¿Cuál es la propuesta que quieren presentar al gobernante de su territorio?
				</p>
				<p>
					<strong>
						f.
					</strong>
					Actividades y responsables: desarrollar un cronograma y definir los responsables de cada paso para lograr realizar el cabildo abierto.
				</p>

				<p>
					Para mayor información de los pasos y requerimientos para hacer un cabildo abierto, pueden seguir el siguiente enlace de la Registraduría Nacional del Estado Civil:
					<a href="https://www.registraduria.gov.co/-Cabildo-Abierto,3756-.html">https://www.registraduria.gov.co/-Cabildo-Abierto,3756-.html </a>
				</p>

				<div class="mod_tar">
						<div class="mod_tar_iz">
							<p class="btn_form btn_intro btn-modal" id="subirArchivoModal">Subir Archivo</p>
						</div>
						<div class="mod_tar_der disabled
						">
							<p class="btn_form btn_intro">Calificación</p>
						</div>
				</div>

				<ul class="next-prev">
					<a href="ciudadanas5.html">
						<li class="atra_btn_mod italic_"><span class="icon_anterior"></span>Atrás</li>
					</a>
					<a href="#">
						<li class="numbers_np">3/5</li>
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
