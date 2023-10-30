fetch('https://jsonplaceholder.typicode.com/posts')
// converting object into json format array of object 
.then(data => data.json)


// getting full data 
.then(data => console.log(data))

// if error 
.catch(err => console.log(err))


// another 
fetch('https://jsonplaceholder.typicode.com/posts')
// converting object into json format array of object 
.then(data => data.json)


// getting full data 
.then(data => console.log(data[0].title))

// if error 
.catch(err => console.log(err))
