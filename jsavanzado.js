//Clase 1
/*let alumnos = ["Carlos", "Sandra", "Marcos", "Laura"]
alumnos.forEach((alumnos)=>{
    console.log(alumnos)
})
alumnos.reverse().forEach((alumnos)=>{
    console.log(alumnos)
})
let inputNombre = document.querySelector("#nombre")*/
/*var list = document.createElement('ul');
var elements = document.createDocumentFragment();

for (var i = 0; i < 10; i++) {
  let element = document.createElement('li');
  element.innerText = "Elemento " + i;
  elements.appendChild(element);
}

list.appendChild(elements);
document.body.appendChild(list);*/

//CLASE 2
//documento.addEventListener("tipoDeEvento", declaracionDeFuncionCuandoSucedaElElemento)
/*let p = document.querySelector("p")
let saludar = (nombre)=>{
  console.log(`Holaaaa ${nombre}!!!!`)
}
p.addEventListener("click", saludar("juancito") )*/

/*let input = document.querySelector("input")
input.addEventListener("keydown", (event)=>{
    console.log("Escribiste una letra")
})*/
/*let input = document.querySelector("input")
input.addEventListener("keydown", function(event){
    if(event.target.value.lenght>8) 
    event.preventDefault()
})*/
/*let hm1 = document.querySelector("#hm1")
let hm2 = document.querySelector("#hm2")

let holaMundo = (event)=>{
  console.log("Hola Mundo!!!! desde " + event.target.id)
}
hm1.addEventListener("click", holaMundo)
hm2.addEventListener("click", holaMundo)*/



/*let ul = document.querySelector("#listaDesordenada")
console.log(ul)
let items = [1,2,3,4,5,6, "perro", "gato", "jirafa"]
let stringHTML = ""
items.forEach((item)=>{
    stringHTML = `${stringHTML}<li>${item}</li>`
  })
ul.insertAdjacentHTML("afterbegin",`${stringHTML}`)
//1- Obtengo el boton
let boton= document.querySelector(".boton")
//2- Definir el tipo de evento
//3- Definir la accion a realizarse ante el evento
//block
boton.addEventListener("click",(e)=>{
  ul.style.display= ul.style.display== "none" ? "block" : "none"
  //condicion ? queRetornoSiEsTrue: queRetornoSiEsFalse
  /*console.log(ul)
  console.log("Hola")
})*/
/*let input = document.querySelector("input")
let btn = document.querySelector("button")
btn.addEventListener("click", ()=>{
  //CheckValidity es buleano, permite saber por ejemplo si el usuario escribio algo o no
  console.log(input.checkValidity())
})*/
/*let form = document.getElementById("formulario")
let btn = document.getElementById("btn")
/*btn.addEventListener("click", ()=>{
  console.log("click")
})*/
//Submit : click - teclado(keyup - keydown)*/
/*form.addEventListener("submit",(e)=>{
  e.preventDefault()
  console.log("click")
})*/
/*let input = document.querySelector("input")
let form = document.querySelector("form")
form.addEventListener("submit", (e)=>{
  e.preventDefault()
  let valor = input.value
  let longitud = valor.length
  if (longitud>3){
  } else {
    //element.setCustomValidity("")
    input.setCustomValidity("Este campo debe tener mas de 3 caracteres")
  }
  console.log(longitud)
})*/
//setTimeout(()=>{})Para decirle a una funcion que espere
//setTimeout(()=>{console.log("Espera")}, 3000)
/*IMAGINEMOS QUE EL SET TIME OUT LEE DE UNA BASE DE DATOS
UNA LISTA DE NOMBRES*/
/*let nombres = []
let filtrarNombres = ()=>{
  let gus = nombres.filter((nombre)=>{return nombre=="Gus"})
  console.log(gus)
}
setTimeout(() => {
  nombres = ["Gus", "Fernanda", "Jimena", "Fernando"]
  filtrarNombres()
}, 5000);*/

/*let miPromesa = (random)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
    //resolve("Todo salio bien") 
    //reject("Todo salio mal")       
    if(random<4){resolve("Todo salio bien")}
    else{reject("Todo salio mal")}
  }, 3000);
})
}
let llamadoPromesa = async()=>{
  let random = Math.random() * 10000
  let resultadoPromesa = await miPromesa(random)
  console.log(resultadoPromesa)
}         
llamadoPromesa().then(()=>{console.log("Termino el llamado a la promesa")})
/*miPromesa.then((mensaje)=>{console.log(mensaje)})
       .catch((err)=>{console.error(err)})
*/
/*let promesaConErrorAutentico = ()=>{
    return new Promise((resolve,reject)=>{
            try{
                const nombre = "Gus"
                nombre = "Fernanda"
                setTimeout(() => {
                resolve("Hola!") 
                }, 2000);
            }catch(e){
                reject(e)
            }
    })
} 
promesaConErrorAutentico().then((saludo)=>{
    console.log(saludo)
}).catch((error)=>{
    console.error("Hubo un error")
    console.error(error)
})*/
//fetch(LoQueNecesitaParaConstruirElObjetoRequest)
//Primer Caso
/*fetch("url")
/*
metodo:GET
body:vacio
header:AlgunosPorDefecto==>content-type:*//*
*/

//Segundo Caso==>Misma url, mismo header, pero POST 
/*fetch("url",{
    method:"POST",
    body: "HOLA"//Siempre tiene que se un objeto PLANO
})

//Tercer caso ==>Misma url
fetch("url",{
    method:"POST"
    body:JSON.stringify({"Mensaje":"Hola"}),
    Headers:{
        "content-type":"aplication/json"
    }
})*/
/*fetch("https://reqres.in/api/users").then((respuesta)=>{
    console.log(respuesta)
    if (respuesta.status==404){throw new Exeption("lksajds")}
    return respuesta.json()
}).catch((error)=>{
    console.error("Error en la comunicacion")
}).then((json)=>{
    console.log(json)
}).catch(()=>{
    console.error("El recurso no contesto lo esperado")
})*/
/*fetch("https://reqres.in/api/register",{
    method:"POST",
    body: JSON.stringify({"email": "eve.holt@reqres.in"}),
    headers:{
        'Content-type':'application/json'
    }
}).then((res)=>{
    if(res.status==400) {throw new Exception("Errorrrrrrrr")}
    return res.json()
}).catch((err)=>{
    console.log("Te olvidaste la contraseña")
})
.then((json)=>{
    console.log("json")
    console.log(json)
}).then(()=>{
    console.log("json2")
})*/


/*navigator.geolocation.getCurrentPosition((pos)=>{
    console.log(pos)
    document.write(pos)
},(err)=>{
    console.error(err)
})

navigator.geolocation.watchPosition((pos)=>{
    console.log(pos)
},(err)=>{
    console.error(err)
})*/

//CLASE 3 DE NUEVO
//DELEGACION DE EVENTOS
/*const nav = document.querySelector("nav")
nav.addEventListener("click", (e) =>{
    console.log(e.target.tagName)
    if (e.target.tagName.toLowerCase()=== "button") {
        alert("Vas a ir a " + e.target.dataset.href)
    }
    //Nos conviene siempre ponerle el evento al elemento padre, para que se aplique en los hijo
    //En el evento del click entro a target, entro a dataset, y pongo el mensaje
    //En el button pongo como "data-mensaje" lo que quiero que me salga en el mensaje
    //Poniendo el forEach hago que si agrego un nuevo button, no tenga que hacer un nuevo evento
    })
*/

/*const enviar = document.getElementById("form")
form.addEventListener("submit",(e)=>{
    console.log("SUBMIT")
    alert("Vamos a enviar su informacion")
    //Se puede hacer el evento click en el input, pero lo mejor es hacer el evento submit en el formulario.
    //El atributo "novalidate" en el form hace que podamos enviar el formulario sin completar los campos
})*/
//const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
/*const link = document.querySelector("a")
const form = document.getElementById("form")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const edad = document.getElementById("edad")
const email = document.getElementById("email")
link.addEventListener("click",e=>{
    e.preventDefault()
    alert("No podemos redireccionar")
} )
form.addEventListener("submit",e=>{
    let error = false;
    if (!nombre.value.length) { //sino nombre.value === "" || nombre.value.length === 0 || !nombre.value. Todo para que haya error cuando no completemos el nombre
        error = true
    }
    if (!apellido.value.length) { 
        error = true
    }
    if (!edad.value.length) { 
        error = true
    }
    if (!email.value.length) { 
        error = true
    }
    /*if (!(edad.value > 0 && edad.value <=100)) {
        error = true
    } Esto es lo mismo que decir lo de abajo*/
    /*if (edad.value <= 0 || edad.value >100){
        error = true
    }
    
    if (!email.value.includes("@")) {
        error = true
        alert("Ingrese un @")//Es solo para que ingrese un arroba, sin importar el resto del email
    }
    const split = email.value.split("@")//el split divide al mail, en este caso, en partes, usando el arroba como separador
    if (!error && split.length !==2) {
        error = true
        alert("Hay mas de un arroba")
    }
    if (!error && split[0].length === 0) {//El [0] significa la posicion 0 del split, o sea lo que haya antes del arroba
        error = true
        alert("Ingrese algo antes del @")
    }
    if (!error && split[1].length === 0) {
        error = true
        alert("Ingrese algo despues del @")
    }
    if (!regex.test(email.value)) {
        error = true
    }
    if (error) {
        e.preventDefault()
        alert("Hay errores en el formulario")
    }   
    /*O sino, es lo mismo que poner:
    if (!email.value === "" || !nombre.value === "" || !apellido.value === "" || !edad.value ==="") {
        error = true
    }
    
}) LO DE ABAJO ES LO DEL HTML
<a href="https://www.google.com.ar/" target="_blank">Ir a </a>
    <form action="enviar.php" method="GET" id="form" novalidate>
        <div>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>
        </div>
        <div>
            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido">
        </div>
        <div>
            <label for="edad">Edad:</label>
            <input type="number" id="edad" name="edad">
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
        </div>
        <input type="submit" value="Enviar" id="enviar">
    </form>
*/ 
//CLASE 4 DE NUEVO
/*console.log("INICIO")
setInterval(() => {
    console.log("MOSTRAR FECHA")
    const d = new Date();
    const hora = d.getHours();
    const minutos = d.getMinutes();
    const segundos = d.getSeconds();
    document.body.innerText = `${hora}:${minutos}:${segundos}`;
}, 1000);
console.log("FIN") 
*/
/*const xhr = new XMLHttpRequest()
xhr.addEventListener("load", ()=>{
    console.log("response")
})
xhr.open("GET", "jsavanzado.html")
xhr.send()
/*Metodos:
GET (obtener) ${protocolo}://${servidor}/${recurso}
 "  (obtener) ${protocolo}://${servidor}/${coleccion}
POST (creacion) ${protocolo}://${servidor}/${coleccion}//El POST sirve para crear
PATCH (update) ${protocolo}://${servidor}/${recurso} //El PATCH es para reemplazar informacion
  " (update) ${protocolo}://${servidor}/${coleccion}
PUT (update) ${protocolo}://${servidor}/${recurso} //El PUT es para actualizacion
 " (update) ${protocolo}://${servidor}/${coleccion} //Recurso es para actualiza uno en particular, coleccion para todos
DELETE (eliminar) ${protocolo}://${servidor}/${recurso}
  "    (eliminar) ${protocolo}://${servidor}/${coleccion}
Los metodos GET y DELETE envian informacion en la url
Los metodos POST, PUT y PATCH envian informacion en el body
El PATCH y el PUT se diferencian porque el primero se usa para reemplazar una parte de la informacion 
 */
/*const xhr = new XMLHttpRequest()
xhr.addEventListener("load", (e)=>{
    const usuarios = JSON.parse(xhr.response);
    console.log(usuarios[0])
})*/ 
//O sino es lo mismo decir:
/*const xhr = new XMLHttpRequest()
xhr.responseType = "json"
xhr.addEventListener("load", (e)=>{
    console.log(xhr.response[1])
})*/
//CLASE 5
/*location.hash = "Home"

const xhr = new XMLHttpRequest()
xhr.open("get", "https://jsonplaceholder.typicode.com/users")
xhr.send()
xhr.responseType = "json"
xhr.addEventListener('load', e=>{
    console.log(xhr)
    if (xhr.status >=200 && xhr.status <=299) {
        xhr.response.forEach(usuario =>{
            const article = document.createElement
            ("article")
            article.innerHTML=`
            <ul>
                <li><strong>Nombre:</strong>${usuario.name}</li>
                <li><strong>Mail:</strong>${usuario.email}</li>
                <li><strong>Telefono:</strong>${usuario.phone}</li>
            </ul>
            `
            const eliminar = document.createElement("button")
            eliminar.textContent = "Eliminar"
            eliminar.addEventListener("click", (e)=>{
                location.hash ="Eliminar"
                const x = new XMLHttpRequest()
                x.addEventListener("load", e=>{
                    console.log("load", x)
                if (x.status ===200) {
                    article.style.display = "none"
                }else{
                    alert(`Error al eliminar el usuario ID${usuario.id}`)
                }
                })
            x.open("delete", `https://jsonplaceholder.typicode.com/users/${usuario.id}`)
            x.send()
            })
            const modificar = document.createElement("button")
            modificar.textContent = "Modificar"
            modificar.addEventListener("click", (e)=>{
                location.hash = "Modificar"
                const x = new XMLHttpRequest()
                x.addEventListener("load", e=>{
                    console.log("load", x)
                if (x.status ===200) {
                    article.style.display = "none"
                }else{
                    alert(`Error al modificar el usuario ID${usuario.id}`)
                }
                })
            x.open("delete", `https://jsonplaceholder.typicode.com/users/${usuario.id}`)
            x.send()
            })
            article.appendChild(eliminar)
            article.appendChild(modificar)
            document.body.appendChild(article)
        })
    } else{
        console.error("ERROR")
    }
})
/*<body>
    <nav>
        <button id="home">Home</button>
        <button id="modificar">Modificar</button>
    </nav>
    <main>
        <section id="seccion-home">
            <h1>Home</h1>
        </section>
        <section id="seccion-modificar">
            <h1>Modificar</h1>
        </section>
    </main>
<script>
    window.addEventListener("hashchange", e=>{
        mostrarSeccion()
    })
    const seccionHome = document.getElementById("seccion-home")
    const seccionModificar = document.getElementById("seccion-modificar")
    function mostrarSeccion(){
        seccionHome.style.display = "none"
        seccionModificar.style.display = "none"
        const hash = location.hash.split("/")
        switch (hash[0]) {
            case "#home": seccionHome.style.display = "block";
                break;
            case "#modificar": seccionModificar.style.display = "block"
                break;
                
        }
    }
    
    const home = document.getElementById("home")
    home.addEventListener("click", e=>{
        location.hash = "home"
        seccionHome.style.display = "block"
        seccionModificar.style.display = "none"
    })
    const modificar = document.getElementById("modificar")
    modificar.addEventListener("click", e =>{
        location.hash = "modificar/1"
        seccionHome.style.display = "none"
        seccionModificar.style.display = "block"
    })
    if (location.hash === "") {
        location.hash = "home"
        seccionHome.style.display = "block"
        seccionModificar.style.display = "none"
    } 
    mostrarSeccion()
</script>
</body> 
*/
/*
history.back()
history.forward()
history.go(-3)
history.go(2)
*/ 
/*
const seccionHome = document.getElementById("seccion-home")
    const seccionModificar = document.getElementById("seccion-modificar")
    function mostrarSeccion(){
        seccionHome.style.display = "none"
        seccionModificar.style.display = "none"
    }
    
    const home = document.getElementById("home")
    home.addEventListener("click", e=>{
        history.pushState(null, "home", "/home")
        seccionHome.style.display = "block"
        seccionModificar.style.display = "none"
    })
    const modificar = document.getElementById("modificar")
    modificar.addEventListener("click", e =>{
        history.pushState(null, "modificar", "/modificar/1")
        seccionHome.style.display = "none"
        seccionModificar.style.display = "block"
    })
        seccionHome.style.display = "block"
        seccionModificar.style.display = "none"
    mostrarSeccion()
    */
/*const mover = document.getElementById("mover")
const caja = document.getElementById("caja")

mover.addEventListener("dragstart", (e) =>{//Cuando el elemento empieza a ser arrastrado.
    //console.log("DRAG START")
    e.target.style.borderRadius = "50%"
    e.target.style.opacity = "0.5"
    e.dataTransfer.setData("id", e.target.id)
})
mover.addEventListener("dragend", (e) =>{//Cuando deja de ser arrastrado.
    //console.log("DRAG END")
    e.target.style.borderRadius = "0%"
    e.target.style.opacity = "1"
})
mover.addEventListener("drag", (e) =>{//Mientras transcurre el tiempo en el que es arrastrado.
    //console.log("DRAG")
})
/*caja.addEventListener("dragenter", (e) =>{//Cuando el mouse entra al objeto en particular, mientras arrastra otro objeto.
    console.log("DRAG ENTER")
})*//*
caja.addEventListener("dragover", (e) =>{//Mientras transcurre el tiempo en el que es arrastrado encima de dicho objeto.
    e.preventDefault()
    //console.log("DRAG OVER")
})
/*caja.addEventListener("dragleave", (e) =>{//Cuando el mouse sale del objeto en particular, mientras arrastra otro objeto.
    console.log("DRAG LEAVE")
})
caja.addEventListener("drop", (e) =>{//Cuando se suelta un objeto arrastrado sobre dicho objeto.
    e.preventDefault()
    const id = e.dataTransfer.getData("id")
    const elemento = document.getElementById(id)
    e.target.appendChild(elemento)
    //e.target.appendChild(mover)
})LO DE ABAJO VA CON ESTO DE ARRIBA
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #mover{
            padding: 20px;
            border: 3px solid black;
            display: flex;
        }
        .mover{
            width: 100px;
            height: 100px;
            background-color: orange;
            margin: 10px;
            text-align: center;
            line-height: 100px;
        }
        #caja{
            width: 300px;
            height:300px;
            background-color: red;
            padding: 20px;
            box-sizing: border-box;
        }
    </style> 
<div id="mover">
            <div class="mover" id="uno" draggable="true">UNO</div>
            <div class="mover" id="dos" draggable="true">DOS</div>
        </div>
            <div id="caja"></div>
*/
/*const xhr = new XMLHttpRequest()
xhr.open("get", "C:\Users\zeitu\OneDrive\Pictures\buster.jpg")
xhr.responseType = "blob"
xhr.addEventListener("load", e=>{
    console.log("Imagen: ", xhr.response)
    const img = document.createElement("img")
    const url = URL.createObjectURL(xhr.response)
    img.src = ""
    document.appendChild(img)
})
xhr.send()
*/
/*console.log("INICIO")
const usuarios = new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open("get", "https://jsonplaceholder.typicode.com/users")
    xhr.responseType = "json"
    xhr.addEventListener("load", e=>{
        if (xhr.status >=200 && xhr.status<300) {
            resolve(xhr.response)
        }else{
            reject("Error")
        }
    })
    xhr.addEventListener("error", e=>{
        reject("Error")
        })
    xhr.send()
});
usuarios
    .then(dato =>{
        console.log("RESUELTA", dato)
        dato.forEach(usuarios => {
            const article = document.createElement("article")
            document.body.appendChild(article)
            article.innerHTML = `
            <ul>
                <li><strong>Nombre:</strong>${usuarios.name}</li>
                <li><strong>Email:</strong>${usuarios.email}</li>
                <li><strong>Telefono:</strong>${usuarios.phone}</li>
            </ul>
            `
        });
    })
    .catch(dato =>{
        console.log("RECHAZADA", dato)
    })
    .finally(() =>{
        console.log("FINAL")
    })
*/
/*const usuarios = fetch("https://jsonplaceholder.typicode.com/users")
usuarios
    .then(response=>{
        if (response.ok) {
            console.log("RESPONSE: ", response)
            const json = response.json()
            console.log("JSON:", json)
         } else {
             console.error("ERROR")
         }
    })*/
//En Fetch, con tener el "ok:true" ya está, a diferencia del XHR que tenes que poner que sea entre 200 y 300 para que esté bien
/*const usuarios = fetch("https://jsonplaceholder.typicode.com/users",{method: "POST",
body:JSON.stringify({
    name: "Pepe",
    username: "Pepito",
    Email: "pepe@pepito.com"
})
})
usuarios
    .then(res =>res.json())
    .then(usuarios=>{
        console.log(usuarios)
    })
    .catch(error=>{
        console.error(error)
    })
*/
/*Una funcion que devuelve una funcion, y la funcion devuelta utiliza
    informacion de la funcion que la devuelve
    
    //CON VAR    
    function mostrarValor(i){
        return function(){
            alert(i)
        };
    }
    for (var i = 0; i < 11; i++) {
        const boton = document.createElement("button");
        boton.textContent = i;
        boton.addEventListener("click", mostrarValor(i));
        document.body.appendChild(boton)
        }
        //CON LET
    for (let i = 0; i < 11; i++) {
        const boton = document.createElement("button");
        boton.textContent = i;
        boton.addEventListener("click", e=>{
            alert(i)
        });
        document.body.appendChild(boton)
    }
*/
/*
const carlos = {
        nombre: "Carlos",
        apellido: "Perez",
        dni: "1532305414",
        direccion: "Av. Corrientes 1234",
        telefono: "45212301",
        saludar: function () {
            alert (`Hola mi nombre es ${this.nombre}${this.apellido}`)
        },
        sonIguales: function(){
            return carlos===this
        },
        mostrarThis: function(){
            console.log(this)
        }
    } 
    console.log(carlos)

    function saludar(){
        alert("Hola")
        console.log(this)
    }
*/
/*function Persona(nombre, apellido, dni, direccion, tel){
    //CON NEW

    this.nombre = nombre
    this.apellido = apellido
    this.dni = dni
    this.direccion = direccion
    this.telefono = tel

    /*SIN NEW
    const p = {};

    p.nombre = nombre
    p.apellido = apellido
    p.dni = dni
    p.direccion = direccion
    p.telefono = tel

    return p
    */
    /*return{
        nombre,
        apellido,
        dni,
        direccion,
        telefono
    }
}

const carlos = Persona("Carlos", "Perez", "3322556684", "Av. Corrientes 5469", "1532462198")
const carla = new Persona("Carla", "Perez", "3264132984", "Monroe 2123", "15323231684")
*/
        //@ToDo refactorizar para utilizar clases

        // class Persona{
        //     constructor(nombre, apellido, dni){
        //         this.nombre = nombre;
        //         this.apellido = apellido;
        //         this.dni = dni;
        //     }
        //     saludar(){
        //         console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)
        //     }
        // }

        // class Empleado extends Persona {
        //     constructor (nombre,apellido,dni,sueldo){
        //         super(nombre, apellido, dni)
        //         this.sueldo = sueldo
        //     }
        //     saludar(){
        //         console.log(`Hola soy el empleado ${this.nombre} ${this.apellido}`)
        //     }
        //     trabajar(){
        //         console.log("Estoy trabajando...")
        //     }
        // }

        // function Persona(nombre, apellido, dni){
        //     this.nombre = nombre;
        //     this.apellido = apellido;
        //     this.dni = dni; 
        // }

        // Persona.prototype.saludar = function () {
        //     console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`);
        // }
        // function Empleado(nombre,apellido,dni,sueldo){
        //     Persona.call(this, nombre, apellido, dni)
        //     this.sueldo = sueldo
        // }

        // Empleado.prototype = Object.create(Persona.prototype)
        // Empleado.prototype.constructor = Empleado
        // Empleado.prototype.trabajar = function () {
        //     console.log("Estoy trabajando...")
        // }

        // const carlos = new Persona ("Carlos", "Perez", 16532265);
        // const empleadoCarlos = new Empleado ("Carlos", "Perez", 16532265, 15000)
        // carlos.saludar()
        // empleadoCarlos.saludar()
        // empleadoCarlos.trabajar()


        // class Calculadora {
        //     constructor(){}
        //     static sumar(a,b){
        //         return a + b
        //     }
        //     restar(a,b){
        //         return a - b
        //     }
        // }

        // console.log(Calculadora.sumar(10,20))
        // const c = Calculadora();
        // console.log(c.restar(10,20))

        // class Datos{
        //     #_alto
        //     #_ancho
        //     constructor(ancho, alto){
        //         this.#_alto = alto;
        //         this.#_ancho = ancho;
        //     }
            
        //     get ancho(){
        //         return this.#_ancho
        //     
        //     set alto(ac){
        //         this.#_alto = ac
        //     }
        // }

        // const a = new Datos (10,20)


// PATRON MODULO
// (function(){
//     const version = "1.0.0"
//     const datos = []
//     console.log(`Iniciando aplicacion v${version}`)
//     const mensaje = "Bienvenido"
//     alert (mensaje)
// })()

/* PATRON REVELADOR
const CALCULADORA = (function(){
    function sumar(a,b){return a + b}
    function restar(a,b){return a - b}
    function multi(a,b){return a * b}
    function divi(a,b){return a / b}

    return{
        sumar,
        restar,
        multi,
        divi
    }
})()

o sino:

(function(){
    function sumar(a,b){return a + b}
    function restar(a,b){return a - b}
    function multi(a,b){return a * b}
    function divi(a,b){return a / b}

    Window.CALCULADORA{
        sumar,
        restar,
        multi,
        divi
    }
})()
 */
/* 
class App {
    constructor(version){
        if(App.instancia){
            return App.instancia
        }
        this.version = version
        App.instancia = this
    }
}

const appUno = new App("1.0.0")

const appDos = new App("2.0.0")
*/
/*
const bienvenido = document.getElementById("bienvenido")
const form = document.getElementById("form")
const nombre = document.getElementById("nombre")
const boton = document.querySelector("button")
const h1 = document.querySelector("h1")

const nombreGuardado = localStorage.getItem("nombre")

if(nombreGuardado === null){
    form.style.display = "block"
}else{
    bienvenido.style.display = "none"
    h1.textContent = `Bienvenido ${nombreGuardado}`
}

boton.addEventListener ("click", e=>{
    if(nombre.value !== ""){
        localStorage.setItem("nombre", nombre.value)
        form.style.display = "none"
        bienvenido.style.display = "block"
        h1.textContent = `Bienvenido ${nombre.value}`
    } else {
        alert("Ingrese su nombre")
    }
})
*/

