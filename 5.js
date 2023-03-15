var code_list = [100, 200, 300,[401, 402, 403, 404], 500, 600, 700, 800]
console.log (typeof(code_list))
for (var i of code_list){
    if (typeof(i) == 'object')
    {
        for (var ii of i){
            console.log ('Inner_item ==', ii)
        }
    }
}
