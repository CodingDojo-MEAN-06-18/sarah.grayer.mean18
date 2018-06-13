//Challenge 1
const students = [
  {name: 'Remy', cohort: 'Jan'},
  {name: 'Genevieve', cohort: 'March'},
  {name: 'Chuck', cohort: 'Jan'},
  {name: 'Osmund', cohort: 'June'},
  {name: 'Nikki', cohort: 'June'},
  {name: 'Boris', cohort: 'June'},
];

for (const student of students){
  console.log(`Name: ${student.name}, Cohort: ${student.cohort}`)
}

//Challenge 2
let users = {
  employees: [
    {'first_name': 'Miguel', 'last_name': 'Jones'},
    {'first_name': 'Ernie', 'last_name': 'Bertson'},
    {'first_name': 'Nora', 'last_name': 'Lu'},
    {'first_name': 'Sally', 'last_name': 'Barkyoumb'},
  ],
  managers: [
    {'first_name': 'Lillian', 'last_name': 'Chambers'},
    {'first_name': 'Gordon', 'last_name': 'Poe'},
  ]
};
for (const key in users){ //do below for each key in users, first 'employees', then 'managers'
  console.log(key.toUpperCase());
  for (let i = 0; i<users[key].length; i++){ //i is the instance, loop through each
    const num = i+1; //const is a type of variable, stays constant
    const first = users[key][i].first_name; //define variable 'first' wtih value of the key 'first_name' from instance i
    const last = users[key][i].last_name;
    const length = first.length + last.length;
    console.log(`${num} - ${last}, ${first} - ${length}`);
  }
};
