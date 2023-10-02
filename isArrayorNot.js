const tupapa= [1,2,3]

if (Object.prototype.toString.call(tupapa)=='[object Array]'){
    console.log('is an Array')
}else {
    console.log('is not ')
    console.log(Object.prototype.toString.call(tupapa))
}