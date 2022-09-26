const movie={
    title:'a',
    releaseyear:2018,
    rating:4.5,
    director:'b'
};
showproperties(movie);
function showproperties(obj){
    for(let i in obj){
            if(typeof(obj[i])==='string'){
                console.log(i,obj[i]);
            }
    }
}