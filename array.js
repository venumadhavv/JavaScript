/*
const l=[]
l.push(1,2,3,4,5); //apppend can add one or more arguments
l.pop()//to delete at end
l.shift()//to delte at begin
l.unshift(1);//insert at begin  can add one or more arguments
//console.log(l);
l.splice(2,0,1);//insert at any position fst parameter index no 2nd no of elements to delete 3rd element to be inserted 
                // if 2nd is 0 then nothing to be deleted and only insrt the 3rd  paramenter value in the array.
//console.log(l.length);
 
//index

console.log(l.indexOf(1))//returns 1st searched value by deafult not found returns -1
console.log(l.indexOf(1,2))// 1st parameter element to be searched 2nd is from which index to be searched 
console.log(l.lastIndexOf(1))//returns last index of the given value
console.log(l.includes(1)) //returns true if the value is present in that


//to find the index in array of objects

arr=[
    { id:1,name:'venu'},
    { id:2,name:'RAmu'}
];
c=arr.find(function(ele){
    return ele.name==='venu'; //here for arr of  obj we should write like this to find ele it wil return the ele
});
console.log(c);
c=arr.findIndex(function(ele){
    return ele.name==='venu'; //here for arr of  obj we should write like this to find ele it wil return the index of ele
});
console.log(c);
//arrow function using above

c=arr.find((ele)=>{
    return ele.name==='venu'; //here for arr of  obj we should write like this to find ele it wil return the ele
});
console.log(c);
// or we can also write as when only single paramenter is there
c=arr.find(ele=>
      ele.name==='venu' //here for arr of  obj we should write like this to find ele it wil return the ele
);
console.log(c);

///
arr=[1,2,3];
brr=[4,5,5];
c=arr.concat(brr); // merege two arrays
console.log(c);
d=c.slice(2,3); //similar to slicing in python
e=c.slice(2,);
//spread is used to combine two or more arrays or objects fst it will make them as a single value and then combine it

l=[1,2,3,4,5]
r=[6,7,8,9,10]
c=[...l,...r]; //... is spred makes the arrays or objects into a single one
console.log(c);

//For each loop

l=[1,2,3,4,5]
l.forEach((arr,ind) => {
        console.log(arr,ind); //1st parameter is array and second is its index
    }
);
//split and join similar to python
st='This is my new laptop'
k=st.split('');
console.log(k)
st=k.join(' ');
console.log(st);

//fileter

l=[1,2,3,4,5]
d=l.filter(ele=>{
    return (ele%2!==0?1:0);
})
console.log(d);

//map  used to map the value with the element

l=[1,2,3,4,5]

console.log(l.map(ele=>{
    return(ele%2!==0?{odd:ele}:{even:ele});
}))
*/

//reduce used to do some kind of adding or subtracting or multiplying all the elements.
// it takes two parameters fst is a function which contains sum/final val and curr val and 2nd parameter is the 
//initla val of the final/sum value
l=[1,2,6,4,5,4]
d= l.reduce((final,curr)=>{
        return final+=curr;
},0); // 0 is the intial val of the final
console.log(d);