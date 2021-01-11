// Урок 5. JavaScript. Promise. Что это, как работает (+ пример) ================================
// console.log('Request data...');

// setTimeout(() => {
//   console.log('Preparing data...')

//   const backcendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }

//   setTimeout(() => {
//     backcendData.modified = true;
//     console.log('Data received', backcendData)
//   }, 2000)
// }, 2000)

// const p = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//       console.log('Preparing data...')
    
//       const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//       }
//       resolve(backendData) // чтобы получить доступ к backendData, передаем ее как аргумент в функцию resolve
//   }, 2000)
// });

// p.then((data) => { // а затем принимаем в then
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         data.modified = true;
//         resolve(data)
//       }, 2000)
//     })
//   })
//   .then(clientData => {
//     clientData.fromPromise = true;
//     return clientData
//   })
//   .then(data => console.log('Modified', data))
//   .catch(err => console.error('Error:', err))
//   .finally(() => console.log('Finally'))

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

// sleep(2000).then(() => console.log('After 2 seconds'));
// sleep(3000).then(() => console.log('After 3 seconds'));

Promise.all([sleep(2000), sleep(5000)]).then(() => console.log('All promises'))
Promise.race([sleep(2000), sleep(5000)]).then(() => console.log('Race promises'))