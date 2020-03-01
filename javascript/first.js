//Es (Ecma Script)
//Es5
//Es6

String ="54364"/'xjbj'/'true'/'353.453'
Number= 838 , 834789.9835
Boolean= true/false


var a = "Hi"
var b =" JavaScript"

var a = "Hi"
var b =" JavaScript"
undefined
a+b
"Hi JavaScript"
var a = 10
undefined
var b = 20
undefined
a+b
30
var c ="hi"
undefined
a+b
30
a+c
"10hi"
var d = "bie"
undefined
a-b
-10
a*b
200
a/b
0.5
c-d
NaN
d*c
NaN
c/d
NaN

string+string = string
string+number = string
number+string = string
number+number = number

'5'+5+5  ='55'+5
5+'5'+5
5+5+'5' =10+'5' 105

'5'+5+5-'1'
5+5+'5'-'1'
'5'+5+5-'1'
554
5+5+'5'-'1'
104
1-'1'
0
1-'a'
NaN
1+'1'
"11"
1+'a1'
"1a1"
1-'a1'
NaN

if in double qouets you have number than 
+ is concat
-,*,/ will be normal math operater

///////
//es5
//function
function add(a,b){
    return a+b
}

//method
var add = function (a,b){
    return a+b
}

add(1,2)

//es6

var add = (a,b) => {  a+b }
add(2,4)
var add = (a,b) => {  a+b }
undefined
add(1,2)
undefined
var add = (a,b) => { return a+b }
undefined
add(1,2)
3

//classes
class add extends abc{
    constructor(a,b){
        this.sum  =a+b
    }
    super()
    sum;
}
////
map 
filter
...(spread operator)
geneator function

function * abc(){
    yield i
}

string literals

var  a = 10
//es5
var b ="my age is "+a
//es6
var c = `my age is ${a}`

> codecademy.com/catalog/language/javascript


class geo{
    constructor(lat,long){
        this.lat = lat;
        this.long = long; 
    }
}

class language1 extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name = name;
        this.country = country; 
    }
}

var english = new language1('English','England',45.55,67.77)