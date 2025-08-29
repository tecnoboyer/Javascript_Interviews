// The mathematical term symmetric difference (△ or ⊕) of two sets 
// is the set of elements which are in either of the two sets but 
// not in both. For example, for sets A = {1, 2, 3}
//  and B = {2, 3, 4}, A △ B = {1, 4}.

const born=[];
function sym(args1, args2) {
    const setA = new Set(args1);
    // console.log(setA);
    const setB = new Set(args2);
    setB.forEach((item) => {
        if(setA.has(item)){
            setA.delete(item);
            // console.log(setA);
        }else {
            born.push(item)
            // console.log(born);
        }}
    );
    return [...setA,...born];
}




console.log(sym([1, 2, 3,2], [2, 3, 4])); // should return [1, 4].