const API_URL='https://swapi.co/api/'
const PEOPLE_URL='people/:id'

const opts={crossDomain:true} //el segundo parametro crossDomain indica que el request sera hara en otra pagina 
//request=solicitud en ingles

//callback es una funcion que se va ejecutar en algun futuro pero el pesos "$.get" es el encargado de llamar
//o tambien nunca lo llame
// la primera repuesta es la data o la informacion que no interesa 
//const response=persona=>console.log(`hola my name is: ${persona.name}`) //tercer parametro
 
function obtenerpersonaje(id)
{
	return new Promise((resolve,reject)=>{
	const Url=`${API_URL}${PEOPLE_URL.replace(':id',id)}`// primer parametro url

	$.get(Url,opts,data=>resolve(data)) //$.get(valores1,boleano,valores array) el valor boleano si es verdad entonces $.get() se ejecutara si es falso entonces ejecutrara el .fail 
	.fail(()=>reject(id))// el metodo fail funciona en casao de una desconeccion del servidor
})
}
function OnError(id){

console.log(`No se pudo obtener el personaje de: ${id}`)
}

//////--------USANDO PROMESAS O PROMISE CON LA FUNCIONA .map para menejar array	
	

///usando el meotodo Async Await es una manera simple de usar promesas y 
// nos reduce codigo ya que elimina este codigo: 
//-----------------codigo-----------------------------
// Promise
// .all(promesas) // cada promesa es un objeto
// .then(personajes=>console.log(personajes))
// .catch(OnError)
//----------------------------------------------------
function getpersonaje(personajes)
{
	for (var i = 0; i < personajes.length; i++) {
		console.log(personajes[i].name.toUpperCase())
	}
}

async function ObtenerPersonajes() // no olvidar poner el async e el prinicipio de una funcion
{
var ids=[1,2,3,4,5,6,7,8,9]

var promesas=ids.map(ids=>obtenerpersonaje(ids)) // con .map extrae del array "ids" y las envia ala funcion dada como: (obtenerpersonaje)
try {
var personajes=await Promise.all(promesas) 	// esta parte del codigo sustituye al ".then" y con esto ya podemos trabjar de una manera sincronizada y obtener los valor en orden de llegada
//console.log(`El personaje  es : ${personajes.name}`)
getpersonaje(personajes)
//console.log(personajes)
} catch(id)
	{
OnError(id)
	}
}

ObtenerPersonajes()

// EN ESTE EJMPLOE LLAMANOS AL AFUNCION **OBTENERPERSONAJES Y VEREMOS EL ASINCRONISMOS DE JAVASCRIPTS
// VIENDO QUE EL ORDEN DE SOLICTUD NO ES COMO LO ESPERAVAMOS YA QUE LLEGA EN DESORDEN Y COMO ESTA EN EL EJEMPLO DE ABAJO:
// obtenerpersonaje(1).then(personaje=>
// {
// 	console.log(`El personaje 1 es: ${personaje.name}`)
// 	return obtenerpersonaje(2)
// })
// .then(personaje=>
// {
// 	console.log(`El Personaje 2 es: ${personaje.name}`)
// 	return obtenerpersonaje(3)
// })
// .then(personaje=>{
// 	console.log(`El Personaje 3 es: ${personaje.name}`)
// 	return obtenerpersonaje(4)
// })
// .then(personaje=>{
// 	console.log(`El personaje 4 es:${personaje.name}`)
// })
// .catch(OnError)
	

// Los Callbacks en JavaScript son como su propio nombre, en inglés, 
// indica, llamadas de vuelta, quiere decir que cuando invoco una función
//  pasándole como parámetro otra función (el callback) esta función parámetro 
//  se ejecuta cuando la función principal ha terminado de ejecutarse. 
//  O cuando a nosotros nos interese

///jquery.get(url[,data][,success][,dataType]) como se ve acepta 3 parametros y el tercer parametro
/// es lo que nos interesa como resultado y como ejemplos aqui pide datos de un array de personajes de star wars de otra pagina
/// -----[arguments]------- son variables que tienen todas las funciones que va devolvera un array  con los valores que recibe una funcion
// ejemploe ----: console.log(arguments)

//////////pagina de donde se PIDE EL REQUEST O SOLICITU DE DATOS 
/////////////77    https://swapi.co/





///////-------------- EJEMPLO DE CODIGO DE CALLBACK O CALLBACKHELL--------------------
// obtenerpersonaje(1,function(persona){
// 	console.log(`hola my name is: ${persona.name}`)
// 	obtenerpersonaje(2,function(persona){
// 		console.log(`hola my name is: ${persona.name}`)
// 		obtenerpersonaje(3,function(persona){
// 			console.log(`hola my name is: ${persona.name}`)
// 			obtenerpersonaje(4,function(persona){
// 				console.log(`hola my name is: ${persona.name}`)
// 				obtenerpersonaje(5,function(persona){
// 					console.log(`hola my name is: ${persona.name}`)
// 					obtenerpersonaje(6,function(persona){
// 						console.log(`hola my name is: ${persona.name}`)
// 						obtenerpersonaje(7,function(persona){
// 							console.log(`hola my name is: ${persona.name}`)

// 						})
// 					})
// 				})
// 			})
// 		})
// 	})
// })
