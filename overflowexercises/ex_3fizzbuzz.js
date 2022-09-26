function fizzbuzz(num){
    if(typeof(num)!=='number')
        console.log('give only number');
    else if(num%3===0 && num%5===0){
        console.log('fizzbuzz');
    }
    else if(num%3===0){
        console.log('fizz');
    }
    else if(num%5===0){
        console.log('buzz');
    }
    else
    console.log('invlaid num');
}
fizzbuzz('10');