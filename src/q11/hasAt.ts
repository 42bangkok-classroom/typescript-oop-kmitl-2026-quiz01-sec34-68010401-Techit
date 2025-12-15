const word = process.argv[2];
if (word.includes("@")) {
  console.log(`Has @`)
} else {
  console.log(`No @`)
}