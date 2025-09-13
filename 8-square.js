const args = process.argv.slice(2)
if (!isNaN(args)){
  console.log(args**2)
}else{
  console.log("Missing size")
}