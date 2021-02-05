const obj = {
  name: "Anna",
  age: 33,
  job: "frontend"
}

const entries = [
  ['name', 'Anna'],
  ['age', 33],
  ['job', 'frontend']
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

const map = new Map(entries)

map
  .set('pet', 'Penny')
  .set(obj, 'Value of object')
  .set(NaN, '?? NaN')

// map.delete('job')

// console.log(map.has('job'))
// console.log(map.size)

// map.clear()
// console.log(map.size)

// for (let entry of map.entries()) {
//   console.log(entry)
// }

// for (let [key, value] of map) {
//   console.log(key, value)
// }

// for (let val  of map.values()) {
//   console.log(val)
// }

// for (let key  of map.keys()) {
//   console.log(key)
// }

// map.forEach((val, key, m) => {
//   console.log(key, val)
// })

// const array = Array.from(map)
// console.log(array)

// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj)

const users = [
  {name: 'Anna'},
  {name: 'Nikita'},
  {name: 'Dmitry'}
]

const visits = new Map()

visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000 * 60))
  .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
  return visits.get(user)
}

console.log(lastVisit(users[2]))
