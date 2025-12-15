const p = parseInt(process.argv[2]);

for(let i = 0 ; i < p ;i++){
    let x = ""
    for (let j = 0 ; j <= i ; j++){
        x += "*"
    }
    console.log(x);
}