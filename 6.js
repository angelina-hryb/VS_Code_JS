var users = {
    'person1' : 'Alex',
    'person2' : 'Elena',
    'person3' : 'Anna',
    'person4' : 'Misha',
    'person5' : 'Inna'
}
// var new_users = Object.keys(users)
// for (var i of new_users ){
//     console.log (users [i])
// }
for (var i of Object.values(users) ){
    console.log (i)
}
//здесь мы делали итерацию js
