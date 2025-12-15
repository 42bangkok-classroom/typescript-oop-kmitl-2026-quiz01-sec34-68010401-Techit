const word = process.argv[2];
if (word.includes("@")) {
  console.log("has @");
} else {
  console.log("NO @");
}