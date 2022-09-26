showprimes(20);
function showprimes(n){
    for(let i=0;i<=n;i++)
        if(isprime(i))
        console.log(i);
}
function isprime(n){
    if(n<2){
        return 0;
    }
    else{
        for(let i=2;i<n;i++){
            if(n%i===0){
                    return 0;
            }
        }
        return 1
    }
}
const c={a:1,b:2};
const cc={a:1,bb:2};
const d=Object.assign(c,cc);
console.log(d);