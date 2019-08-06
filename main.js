$(function() {
    
    // let promise = new Promise(function(resolve, reject) {
    //     // executor (the producing code, "singer")
    //     setTimeout(function(){
    //         resolve("done");
    //         // reject(new Error("Whoops!"));
    //     }, 1000);
    //     // resolve(123);
    // });

    //     promise.then(
    //     function(result){
    //         console.log("The result is", result);
    //     }).catch(function(error){
    //         console.log("The error from catch is", error);
    //     }).finally(function(){
    //         console.log("Clean up");    
    //     });

    //     promise.then(
    //         function(result2){
    //             console.log("The result from second then is", result2);
    //         }
    //     );

    //     console.log(promise);

        // let chainedPromise = new Promise(function(resolve, reject) {

        //     setTimeout(function(){
        //         resolve(1);
        //     }, 1000);
        //   }).then(function(result) { // (**)
        //     console.log(result);
        //     return result * 2;
        //   }).then(function(result) { // (***)
        //     console.log(result);
        //     return result * 2;
        //   }).then(function(result) {
        //     console.log(result);
        //     return result * 2;
        //   });
         
        //   console.log(chainedPromise);

        // fetch('http://api.icndb.com/jokes/random')
        // // .then below runs when the remote server responds
        // .then(function(response) {
        // // response.text() returns a new promise that resolves with the full response text
        // // when we finish downloading it
        //     return response.json();
        // })
        // .then(function(text) {
        // // ...and here's the content of the remote file
        //     console.log(text); // {"name": "iliakan", isAdmin: true}
        // });


        fetch("http://api.icndb.com/categories")
        .then(function(result){
            return result.json();
        })
        .then(function(json){
            console.log(json);
            return json.value[1];
        })
        .then(function(category){
            console.log(category);
            return fetch("http://api.icndb.com/jokes/random?limitTo=["+category+"]")
            
        })
        .then(function(jokeResult){
            console.log(jokeResult);
            return jokeResult.json();
        })
        .then(function(jokeJson){
            console.log(jokeJson.value.joke);
        })

        // console.log("ready");
})

