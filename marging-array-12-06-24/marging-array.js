const arr = [2, 4, 3, 5, 4, 6];
const arr2 = [1, 2, 6, 5, 4, 6];
const mergingArray = ((val,val2) => {
    const data = val.concat(val2);
    const new_merge =data.filter((items, index) =>
        data.indexOf(items) == index);
    new_merge.sort();
    return new_merge;
});
console.log(mergingArray(arr,arr2));
    
