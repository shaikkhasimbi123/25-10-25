var p = new Promise((resolve, reject) => {
reject(Error('Promise Fails!'))
})
p.catch(error => console.log(error.message))
p.catch(error => console.log(error.message))



async function f() {
 let result = 'new!';
 let promise = new Promise((resolve, reject) => {
 setTimeout(() => resolve('done!'), 1000);
 });
result = await promise;
console.log(result);
}

f();