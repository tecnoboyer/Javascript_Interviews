// Generators are special types of functions that can be paused and resumed. 
// They allow a function to yield (produce) multiple values over time, 
// rather than calculating and returning everything at once.



let fibonashiiGenerator = function* (){
    let a= 0 ;
    let prev= 1 ;

    yield a;  // first value
    yield prev; // second value
    while(true){
        let future = a+prev;
        yield future;
        a=prev;
        prev=future;
    }

}

let gen = fibonashiiGenerator();

for (let i=0;i<10;i++){
    console.log(gen.next().value);
}   

