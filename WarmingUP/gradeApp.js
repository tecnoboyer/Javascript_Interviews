function getAverage(scores) {
    let value=0;
    let cant=0;
    scores.forEach(( element,index) =>{
        value=element+value;
        cant = cant +1;
    });
    return value/cant
  
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));