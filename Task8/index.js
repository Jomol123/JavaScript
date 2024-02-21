// var promise=new Promise(function(resolve,reject){
//     var a = prompt("Enter some input:")
//     if (a % 2 == 0){
//        resolve()
//     }
//     else{
//         reject()
//     }
// });
// promise.then(function(){
//     console.log("Even");
// }).
// catch(function(){
//     console.log("Odd");
// })


var promise=new Promise(function(resolve,reject){
    var a=10
    var b=100
    if(a==b){
        resolve()
    }
    else{
        reject()
    }
});
promise.then(function(){
    console.log("True");
}).
catch(function(){
    console.log("False");
})


var promise =new Promise((resolve, reject) => {
      var randomNumber = Math.floor(Math.random() * 10) + 1;
      if (randomNumber) {
        resolve(randomNumber);
      } else {
        reject();
      }
    });
    promise.then((randomNumber) => {
      console.log(`Random number: ${randomNumber}`);
    }).
    catch((error) => {
      console.error(`Error: ${error}`);
    });
  
   
   var Number=2
    var check= new Promise((resolve, reject) => {
          setTimeout(() => {
            if (Number % 2 === 0) {
              resolve()
            } else {
             reject()
            }
          }, 3000); 
        });
        check.then(function(){
                 console.log("Even");
             }).
             catch(function(){
                 console.log("Odd");
             });

       
        var promise=new Promise(function(resolve,reject){
            var a=10
            var b=100
            if(a==b){
                resolve("result")
            }
            else{
                reject("error message")
            }
        });

        function addNumbers(a, b, delay) {
            return new Promise((resolve) => {
              setTimeout(() => {
                const result = a + b;
                resolve(result);
              }, delay);
            });
          }
          
          const delay = 2000; 
          addNumbers(5, 7, delay)
          .then((sum) => {
            console.log(`The sum is: ${sum}`);
          });
          
          