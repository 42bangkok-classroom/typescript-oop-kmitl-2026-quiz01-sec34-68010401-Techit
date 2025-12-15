const q = parseInt(process.argv[2]);
for (let i = 0 ; i < q ; i++){
    if( i % 2 ){
        console.log(`0`.repeat(q));
    } else{
        console.log(`1`.repeat(q));
    }
}