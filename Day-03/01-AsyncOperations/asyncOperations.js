// Sync
function add(x,y){
   console.log("returning result");
   var result = x + y;
   return result;
}
function usingAddSync(x,y){
   console.log("triggering operation");
   var result = add(x,y);
   console.log("result = ", result);
}
usingAddSync(100,200);

// Async
//Not the right way
function addAsync(x,y){
   setTimeout(function(){
       console.log("returning result");
       var result = x + y;
       return result;
   },5000);
}
function usingAddAsync(x,y){
   console.log("triggering operation");
   var result = addAsync(x,y);
   console.log("result = ", result);
}

//right way - using callbacks
function addAsync(x,y, onResult){
   setTimeout(function(){
       console.log("returning result");
       var result = x + y;
       if (typeof onResult === "function")
           onResult(result);
   },5000);
}
function usingAddAsync(x,y){
   console.log("triggering operation");
   addAsync(x,y, function(result){
       console.log("result = ", result);
   });
}

//right way - using events
function getAdder(){
    var onResultCallbacks = [];
    return {
        add : function(x,y){
            setTimeout(function(){
               console.log("returning result");
               var result = x + y;
               onResultCallbacks.forEach(function(callback){
                   callback(result);
               });
           },5000);
        },
        addResultCallback : function(callbackFn){
            onResultCallbacks.push(callbackFn);
        }
    }
};

//right way - using promise
function addAsyncUsingPromise(x,y){
   var p = new Promise(function(resolve, reject){
        setTimeout(function(){
           console.log("returning result");
           var result = x + y;
           resolve(result);
       },5000);
   });
   return p;
}

var p = addAsyncUsingPromise(100,200);
p.then(function(result){
    console.log("result = ", result);
});
