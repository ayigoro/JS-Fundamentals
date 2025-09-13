const args = process.argv.slice(2)
if (!isNaN(args)){
  console.log(`My number: ${args}`)
}else{
  console.log("Not a number")
}