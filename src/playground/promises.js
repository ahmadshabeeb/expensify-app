const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Ahmed',
        //     age: 25 });
        // resolve('this is my other resovle data');

        reject('something went wrong');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch( (error) => {
    console.log('error: ' + error);
});

console.log('after');

// asynchronous