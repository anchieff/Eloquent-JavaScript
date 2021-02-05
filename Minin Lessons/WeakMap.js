let obj = {name: 'weakmap'}

// const arr = [obj]

// obj = null

// console.log(obj)
// console.log(arr[0])

const map = new WeakMap([
  [obj, 'obj data']
])

obj = null

console.log(map)


const cashe = new WeakMap()

function casheUser(user) {
  if (!cashe.has(user)) {
    cashe.set(user, Date.now())
  }
  return cashe.get(user)
}

let lena = {name: 'Lena'}
let alex = {name: 'Alex'}

casheUser(lena)
casheUser(alex)

lena = null

console.log(cashe.has(lena))
console.log(cashe.has(alex))