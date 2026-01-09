const name = "Juan";

// En javascript solo hay 2 tipos de variables primitivos u objetos, dentro de los primitivos estan los number, string, null, boolean, undefined, symbol.
// Objetos es todo lo que no sea un primitivos como por ejemplo arreglos, listas, diccionarios, objetos, etc.

console.log("Hello World")
console.log(name)

let miguelito = 5
const js = true
const k = null
const y = undefined

console.log(miguelito,js,k,y)
console.log(typeof miguelito)
console.log(typeof js)
console.log(typeof k)
console.log(typeof y)

// const es para hacer una variable inmutable, con let y var se hacen variables que se pueden reasignar

const object_name = new Object()
const obejota = {}
const miguel = {
    pro:{
        b:true
    }
}   

miguel.apellido = "alvarez"
miguel.pro.a = false

console.log(miguel)


const libros = {
    nombre: "mil años de seriedad",
    editorial: "norma",
    categorias: ["comedia","accion","seriedad"],
    año: 2016,
    mostrar: function show_category(){
    for(let i = 0; i <= 2; i++)
    {console.log(libros.categorias[i])}
}
}

libros.mostrar()


