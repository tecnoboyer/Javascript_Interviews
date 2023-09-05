const arrayinit=[4,7,2,1,5]
const li=arrayinit.length

for(let i=0;i<li;i++){
    for(let j=0;j<li-i-1;j++){
        if(arrayinit[j]>arrayinit[j+1]){
            let tem=arrayinit[j];
            arrayinit[j]=arrayinit[j+1];
            arrayinit[j+1]=tem;

        }
    }

    console.log(arrayinit);
}