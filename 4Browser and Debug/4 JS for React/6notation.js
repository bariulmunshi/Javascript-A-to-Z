/* dot vs bracket notation
 */
const person={
  name:'lal nil holud mia',
  profession:'Traffic surgeon',
  age:40,
  32:'summer',
  'son-name':'sunny',
  address: 'shahabag'
}
//dot notation
const prof1=person.profession;

//bracket notation
const prof2=person['profession'];
const pName='profession';
const prof3=person[pName];
// console.log(prof2);
const season=person[32];
// console.log(season);
const son=person['son-name'];
console.log(son);
