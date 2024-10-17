const d = new Date()
let hour = d.getHours();

console.log(hour)

if (hour < 12) {
    console.log('It is morning')
}
else if (hour < 17) {
   console.log('It is the afternoon')
} 
 else {
    console.log('It is night')
} 
