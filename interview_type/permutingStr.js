function getpermutations(str){
    var permt=[];
    if (str.length<=1)return [str]
      
      for(let i=0;i<str.length;i++){
        var char = str[i];
        var remain = str.slice(0,i)+str.slice(i+1);
        for ( var perm of getpermutations(remain)){
            permt.push(char+perm);
        }

      }
      return permt;
}

console.log(getpermutations('abcdef')) ;//['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
