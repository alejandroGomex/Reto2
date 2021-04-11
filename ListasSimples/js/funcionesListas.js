
let valoresNodos = document.getElementById("nodos").value;
/* 
const capturaValorInputAnonima = function () {
  document.getElementById("nodosIngresados").innerHTML = valoresNodos;
};

*/


/* const capturaValorInputFlecha = () => {
    let valoresNodos = document.getElementById("nodos").value;
    document.getElementById("nodosIngresados").innerHTML = valoresNodos;
};
function funcionEstandar() {
    let valoresNodos = document.getElementById("nodos").value;
    document.getElementById("nodosIngresados").innerHTML = valoresNodos;
} */
let tomarUrl;
function cargueImagenes(eventoSeleccionar) {
let files = eventoSeleccionar.target.files;
  
  for (let i = 0, f; (f = files[i]); i++) {
    /* Cargue de sólo imagenes */
    if (!f.type.match("image.*")) {
      continue;
    }
    /* Capturar información de la imagen: tipo, nombre, tamaño */
    let cargueImagenes = new FileReader();
    cargueImagenes.onload = (function (imagenSeleccionada) {
      return function (imagen) {
        /* Crear etiqueta HTML en el DOM */
        let span = document.createElement("span");
        /* Escribimos en la etiqueta span: cargamos la imagen */
        span.innerHTML = [
          '<img class ="thumb" width ="100px" heigth="100px" src= " ',
          imagen.target.result,
          ' "title=" '
          ,
          escape(imagenSeleccionada.name),
          ' "/> ',
        ].join("");
        document.getElementById("list").insertBefore(span, null);
      };
    })(f);
    /* Función de la API FileReader
        Hace la lectura del contenido de un objeto Blob
        Trabaja con el atributo result que devuelve los datos del fichero, en este caso la imagen seleccionada */
         tomarUrl=cargueImagenes
      tomarUrl.readAsDataURL(f);
   
  }
}
document.getElementById("files").addEventListener("change", cargueImagenes, false);

/* Cargar archivo txt */
let input = myInput;
let infoArchivo = new FileReader();
input.addEventListener("change", onChange);

function onChange(event) {
  /* event es el evento click del archivo */
  /* Target es el tipo de archivo seleccionado */
  /* files[0] solo permite el cargue de un archivo */
  let archivo = event.target.files[0];
  /* readAsText se utiliza para leer el contenido de los archivos */
  infoArchivo.readAsText(archivo);
  /* permite ejecutar la funcion onload despues de cargar el archivo */
  infoArchivo.onload = onLoad;
}
/* lectura del contenidop del archivo */
let contenido = " ";
function onLoad() {
  let contenidoTxt = infoArchivo.result;
  let lecturaLineaPorLinea = contenidoTxt.split("\n");
  
  contenido += lecturaLineaPorLinea;
  document.getElementById("ver").innerHTML = contenido;

}



class NodeClass {
  constructor(valor) {
    this.valor = valor;
    this.next = null;
  }
}

class listasSimples {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  /* Métodos de la lista: añadir, eliminar, buscar, actualizar valor */
  añadirNodoF(valor) {
    /* Instancia de la clase NodeClass */
    let newNode = new NodeClass(valor);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  añadirNodoI(valor) {
    let newNode = new NodeClass(valor);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  eliminarNodoF() {
    if (!this.head) return undefined;
    let nodoVisitado = this.head;
    let nuevaColaLista = nodoVisitado;
    while (nodoVisitado.next) {
      nuevaColaLista = nodoVisitado;
      nodoVisitado = nodoVisitado.next;
    }
    this.tail = nuevaColaLista;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return nodoVisitado;
  }
  eliminarNodoI() {
    if (!this.head) return undefined;
    let cabezaactual = this.head;
    this.head = cabezaactual.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return cabezaactual;
  }

  
  getPosicionPuntero(index) {
    if (index < 0 || index >= this.length) return null;
    let contadorPuntero = 0;
    let nodoVisitado = this.head;
    while (contadorPuntero !== index) {
        nodoVisitado = nodoVisitado.next;
        contadorPuntero++;
    }
    return nodoVisitado;
}
  
  modificarValorNodo(index, valor) {
    let encontrarNodo = this.getPosicionPuntero(index);
    if (encontrarNodo) {
      encontrarNodo.valor = valor;
      return true;
    }
    return false;
  }

  removerNodoPorPosicion(index) {
    let nodoVisitad = this.head;
    let nodoAnteriorAlVisitado = null;
    if (index < 0 || index >= this.length) return null;
    if (index === 0) this.head = nodoVisitad.next;
    else {
      for (let i = 0; i < index; i++) {
        nodoAnteriorAlVisitado = nodoVisitad;
        nodoVisitad = nodoVisitad.next;
      }
      nodoAnteriorAlVisitado.next = nodoVisitad.next;
    }
    this.length--;
    return nodoVisitad.valor;
  }

  
  insertarNodoPorPosicion(valor, index) {
    let newNode = new NodeClass(valor);
    let nodoVisitado = this.head;
    let nodoAnteriorAlVisitado;
    if (index < 0 || index >= this.length) return null;
    if (index === 0) this.añadirNodoI(valor);
    else {
        for (let i = 0; i < index; i++) {
            nodoAnteriorAlVisitado = nodoVisitado;
            nodoVisitado = nonodoVisitado.next;
        }
        newNode.next = nodoVisitado;
        nodoAnteriorAlVisitado.next = newNode;
    }
    this.length++;
} 
  removerNodoPorValor(valor) {
    let nodoVisitado = this.head;
    let nodoAnteriorAlVisitado = null;
    while (nodoVisitado !== null) {
      if (nodoVisitado.valor === valor) {
        if (!nodoAnteriorAlVisitado) this.head = nodoVisitado.next;
        else nodoAnteriorAlVisitado.next = nodoVisitado.next;
        this.length--;
        return nodoVisitado.valor;
      }
      nodoAnteriorAlVisitado = nodoVisitado;
      nodoVisitado = nodoVisitado.next;
    }
    return null;
  }
  reverseList() {
    let prev = null;
    let current = this.head;
    let next = null;
    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
 
  /* Crear la lista simple a partir de los valores ingresados por el usuario en la opcion por default,y de campo imput  */

  imprimirArrayList() {
    let arregloNodos = [];
    let nodoVisitado = this.head;
    while (nodoVisitado) {
      arregloNodos.push(nodoVisitado.valor);
      nodoVisitado = nodoVisitado.next;
    }
    document.getElementById("listaPorDefault").innerHTML = arregloNodos;
    document.getElementById("listaFinal").innerHTML= arregloNodos;
  }
}

/* crear 3 funciones con tres botones para texsto numeros img */
let lista= new  listasSimples();
function agregarNumeros(){
    let valoresNodos = document.getElementById("nodos").value;
    console.log(valoresNodos)
    let valoresSeparados=valoresNodos.split(",");
    console.log(valoresSeparados);
    for(let i=0;i<valoresSeparados.length;i++){
        lista.añadirNodoF(valoresSeparados[i]);
    }
    lista.imprimirArrayList();
    console.log(lista)
    
}



function agregarImagenes(){
  let imagenesD=document.getElementById("rafael").value
 
    lista.añadirNodoF(imagenesD);
    console.log(lista)
  

 
}



function cargueTexto() {
   let contenido1=document.getElementById("ver").innerHTML;
   let valoresSeparados1=contenido1.split("\n");
   for(let i=0;i<valoresSeparados1.length;i++){
     lista.añadirNodoF(valoresSeparados1[i])
   }
    console.log(lista);
  }
  
function showSelected() {
  let valorFuncion = document.getElementById("funcionSelected").value;
  let valor = document.getElementById("valorN").value;
  let index = document.getElementById("posicionN").value;
  switch (valorFuncion) {
    case "1":
        lista.añadirNodoI(valor);
        lista.imprimirArrayList();
        console.log(lista)
      break;
    case "2":
        lista.añadirNodoF(valor)
        lista.imprimirArrayList();
        console.log(lista)
      break;
    case "3":
        lista.eliminarNodoI()
        lista.imprimirArrayList();
        console.log(lista)
      break;
    case "4":
        lista.eliminarNodoF()
        lista.imprimirArrayList();
        console.log(lista)
      break;
    case "5":
        lista.getPosicionPuntero(index) 
        lista.imprimirArrayList();
        console.log(lista)
      break;
    case "6":
        lista.removerNodoPorPosicion(index)
        lista.imprimirArrayList();
        console.log(lista)
      break;
    case "7":
        lista.modificarValorNodo(index, valor)
        lista.imprimirArrayList();
        console.log(lista)
      break;
    case "8":
        lista.insertarNodoPorPosicion(index, valor)
        lista.imprimirArrayList();
        console.log(lista)
      break;
    case "9":
        lista.reverseList()
        lista.imprimirArrayList();
        console.log(lista)
      break;
  }
}


lista.añadirNodoF(5);
lista.añadirNodoI(4);
lista.añadirNodoI(3);
lista.imprimirArrayList();
/* 


instClass.añadirNodoF(5);
instClass.añadirNodoI(4);
instClass.añadirNodoI(3);
instClass.añadirNodoI(2);
instClass.añadirNodoI(1);
instClass.añadirNodoI(7);
instClass.añadirNodoI(8);
instClass.añadirNodoI(9);

console.log(instClass);
 instClass.eliminarNodoI();
instClass.eliminarNodoF(); 
instClass.modificarValorNodo(1, "Dos");
instClass.removerNodoPorPosicion(1); /* Elimina nodo con valor 3 
console.log(instClass);

instClass.insertarNodoPorPosicion("Nuevo nodo", 0);
instClass.removerNodoPorValor(3);

instClass.imprimirArrayList();


*/

