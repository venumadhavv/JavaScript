/*
// eg -1print ele from one array which are not in other array
 l=[1,2,6,4,5]
 ll=[2,6,4]
 excpect(l,ll);
 function excpect(l,ll){
        for(let i of l){
            if(ll.indexOf(i)==-1){
                console.log(i);
            }
        }
 };


//eg -2 array rotation 
// it contains 3 1st array 2nd index of array 3rd the array postion to be moved left or right
// -ve number to move left and +ve for right
l=[1,2,3,4]
moveBy(l,1,-2)
function moveBy(l,ind,rot){
    if(rot>0){
        if(l.length>rot){
            a=l[ind];
            l.splice(ind,1)
            l.splice(rot,0,a);
            console.log(l)
        }
        else{
            console.error('invalid')
        }
    }
    else{//if neg then left
        if(ind+rot>=0){
            d=l[ind];
            d=l[ind]
            l.splice(ind,1)
            l.splice(ind+rot,0,d)
            console.log(l)
        }
        else{
            console.error('invalid')
        }
    }
}
*/
//count occurences using reduce
l=[1,2,3,4,1,5]

function count_occurences(l,ele){
   return( 
       l.reduce((count,i)=>{
        c=(i===ele?1:0);
        return(count+c)

    },0)
   );
}
console.log(count_occurences(l,1))