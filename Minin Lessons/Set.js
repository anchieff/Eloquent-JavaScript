const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6])

set.add(10).add(20).add(30).add(20).add(50)

// console.log(set)
// console.log(set.has(10))
// console.log(set.size)

function uniqValues(array) {
  return [...new Set(array)].sort((a, b) => b - a)
}

console.log(uniqValues([1, 2, 2, 2, 2, 8, 9, 4, 8, 3, 2]))