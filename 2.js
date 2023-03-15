var n1 = true && false && false
var n2 = true || false || false
var v1 = 10
var v2 = 20
var v3 = 100

var r1=30



if ( r1 > v2 || r1 > v3 ) {
    console.log ('Result == TRUE')
} else{console.log ('Result == False')

}

if ( r1 > v2 && r1 > v3 ) {
    console.log ('Result == TRUE')
} else{console.log ('Result == False')

}

if ( r1 == v2 && (r1 > v3 || r1 > v1)) {
    console.log ('Result == TRUE')
} else{console.log ('Result == False')

}

