const o = {
    a : "a",
    b : "b",
    obj:{
        key : "key"
    }
}

const o2 = o

o2.a = "nuevo valor"

console.log(o.a)

const o3 = Object.assign({},o)

console.log(o3)

//Cada objeto que se cree se guarda en una heap(Memoria de JS) pero cuando se copia este objeto y se cambia alguna variable o propiedad de los objetos esta se cambiaria para ambos objetos

const num = 5

const implicito = num + ""

const explicita = String(num)

console.log(typeof implicito, typeof explicita)


arr = [
    "miguel", "rudas"  
]

arr.push("valeria")

console.log(arr)

const str = "hello world"

console.log(str.toUpperCase())
console.log(arr.__proto__)
// Herencia prototipal: Cada variable hereda los metodos de cada tipo de dato, en este caso el arreglo arr puede utilizar .push, .delete, etc.

function ft(){
    console.log("i am hoisted")
}

const nh = function ft1(){
    console.log()
} 

const text = "ABCDEFGHIJK"

console.log(text.split(""))