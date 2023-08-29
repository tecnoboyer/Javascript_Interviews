function orderer(arr){
    var i=0;
    var acu=-Infinity;
    arr.map(()=>{
        for (var j=1+i; (j<arr.length);j++ ){
            acu=arr[i];
            if(acu>arr[j]){
                arr[i]=arr[j];
                console.log("Ohh : "+arr);
                arr[j]=acu;
            }
        }
        i++;
    });
    return arr;
}


console.log("Finaly: "+orderer([7,4,5,3]))