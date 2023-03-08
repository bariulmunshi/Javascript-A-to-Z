              // Who is the tallest? Find the max number in an array
function maxInArray(number){
  let largest=number[0];
  for(let i=0; i<number.length;i++){
    const index=i;  
    const element=number[index];
    if(element>largest){
      largest=element;
    }
  }
  return largest; 
}
const heights=[121,124,125,164,156,164];
const tallest=maxInArray(heights);
console.log('tallest person is:',tallest);