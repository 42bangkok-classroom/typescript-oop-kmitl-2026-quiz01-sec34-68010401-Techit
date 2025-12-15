const light = process.argv[2];
const c = light.toLowerCase();
if (c === 'red'){
    console.log(`Stop`)
} else if (c === 'yellow'){
    console.log(`Caution`)
} else if (c === 'green'){
    console.log(`Go`)
} else {
    console.log(`Unknown`)
}