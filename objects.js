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