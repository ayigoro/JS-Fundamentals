const args = process.argv.slice(2)
if (!isNaN(args)){
  for (i = 0; i < args; i++){
   console.log("C is fun")
  }
}else{
  console.log("Missing number of occurrences")
}