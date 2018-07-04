// 1. Create a database called 'my_first_db'.
	use my_first_db

// 2.Create students collection.
	db.createCollection("students")

// 3. Each document you insert into this collection should have the following format: {name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}}
// 4. Create 5 students with the appropriate info.
	db.students.insert({name: "Sarah", home_state:"Missouri", lucky_number:17, birthday: {month:"June", day:17, year:1989}})
	db.students.insert({name: "Chloe", home_state:"California", lucky_number:5, birthday: {month:"October", day:7, year:2016}})
	db.students.insert({name: "Justin", home_state:"Missour", lucky_number:83, birthday: {month:"November", day:5, year:1986}})
	db.students.insert({name: "Lacy", home_state:"Illinois", lucky_number:20, birthday: {month:"April", day:28, year:2008}})
	db.students.insert({name: "Stella", home_state:"California", lucky_number:42, birthday: {month:"May", day:3, year:2008}})

// 5. Get all students.
	db.students.find()

// 6. Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
	db.students.find({$or: [{home_state:"California"}, {home_state:"Washington"}]})

// 7. Get all students whose lucky number is:
// 7.1 Greater than 3
	db.students.find({lucky_number:{$gt:3}})

// 7.2 Less than or equal to 10
	db.students.find({lucky_number:{$lte:10}})

// 7.3 Between 1 and 9, inclusive
	db.students.find({$and:[{lucky_number:{$lte:9}}, {lucky_number:{$gte:1}}]})

// 8. Add a field in each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
	db.students.update({},{$set: {"interests":['coding', 'brunch', 'MongoDB']}}

// 9. Add some unique interests for each particular students into each of their interest arrays.
	db.students.update({name: "Sarah"},{$push: {interests:{$each:['yoga']}}})
	db.students.update({name: "Chloe"},{$push: {interests:{$each:['frisbee']}}})
	db.students.update({name: "Justin"},{$push: {interests:{$each:['science']}}})
	db.students.update({name: "Lacey"},{$push: {interests:{$each:['barking']}}})
	db.students.update({name: "Stella"},{$push: {interests:{$each:['scratching']}}})

// 10. Add the interest 'taxes' into someone's interest array.
	db.students.update({name: "Sarah"},{$push: {interests: "taxes"}})

// 11. Remove the 'taxes' interest you just added.
	db.students.update({name: "Sarah"},{$pull: {interests: "taxes"}})

// 12. Remove all students who are from California (or Washington).
	db.students.remove({$or: [{home_state:"California"}, {home_state:"Washington"}]})

// 13. Remove a user by name.
	db.students.remove({name:"Sarah"})

// 14. Remove a student whose lucky number is greater than 5 (JUST ONE)
	db.students.remove({lucky_number: {$gt:5}}, true)

// 15. Add a field in each student collection called 'number_of_belts' and set it to 0.
	db.students.update({},{$set: {"number_of_belts":0}})

// 16. Increment this field by 1 for all students in Washington (Seattle Dojo).
	db.students.update({home_state: "Washington"},{$inc: {number_of_belts: 1}})

// 17. Rename the 'number_of_belts' field to 'belts_earned'
	db.students.update({}, {$rename: {"number_of_belts":"belts_earned"}})

// 18. Remove the 'lucky_number' field.
	db.students.update({}, {$unset:{lucky_number:""}})

// 19. Add a 'updated_on' field, and set the value as the current date.
	db.students.update({}, {$currentDate:{updated_on:true}})
