function checkspeed(n){
    let c=0;
    n=Math.floor(n);
    if(n<=70){
        console.log('ok');

    }
    else{
    for(let i=71;i<=n;i++){
        if(i%5==0){
            c+=1;
        }
    }
    if(c<12){
        console.log(c);
    }
    else{
        console.log('liscense suspended');
    }
}
}
checkspeed(71);