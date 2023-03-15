var code_list = [100, 200, 300, 400, 500, 600, 700, 800]
// console.log(code_list.length)
// console.log(code_list[2])
for (var i = 0; i < code_list.length; i++){
    console.log ('iter -- ',i)
}

for (var i = 0; i < code_list.length; i++){
    console.log ('iter -- ', i, 'arr_item = ',code_list[i] + 20 )
}

for (var i of code_list){
    if (i == 400){
        i = i + 55
    }
    console.log(i) 
}