const args = process.argv.slice(2)
if (!isNaN(args)){
  for (i = 0; i < args; i++){
     console.log('X'.repeat(args))
  }
}else{
  console.log("Missing size")
}