/**
 * Created by shaoqian on 2015/10/12.
 */
/*function text(){
    var message="hi";
    alert(message);
}
text();
var message=true;
alert(typeof message);
var message;
alert(message==undefined);
var message;
alert(typeof message);
alert(typeof age);

var message="hello world";
if(message){
    alert( message);
}

var result=Number.MAX_VALUE+Number.MAX_VALUE;
alert(isFinite(result));
alert(isNaN("10"));
alert(isNaN(10));
alert(isNaN(true));
alert(isNaN("HELLO"));
var num1=parseFloat("0.123")
var num2=parseFloat("003")
var num3=Number("123e10");
alert(num1);
alert(num2);
alert(num3);
var text="this is the \f letter sigma:\u03a3.";
alert(text);
alert(text.length);

var age=11;
var ageAsString=age.toString();
var found=true;
var foundAsString=found.toLocaleString();
alert(ageAsString);
alert(foundAsString);
var value1=10;
var value2=true;
var value3=null;
var value4;
alert(String(value1));
alert(String(value2));
alert(String(value3));
alert(String(value4));
alert(String(value5));


var s1="01";
var s2="1.1";
var s3="z";
var b=false;
var f=1.1;
var o={
    valueOf:function(){
        return -1;
    }
}

alert(-s1);
alert(-s2);
alert(-s3);
alert(-b);
alert(-f);
alert(-o);
var num1=25;
var num2=~num1;
alert(num2);
alert(!false);
alert(!"");
alert(!"10");
var found="hello ";
var someUnderfinedVariable=true;
alert(found||someUnderfinedVariable);
var preferredObject = null;
var backupObject = NaN;
var myObject = preferredObject || backupObject;
alert(myObject);
var i= 18;
if(i > 25){
    alert("Greater than 25.");
}else if( i < 0 ){
    alert( "less than 0");
}else{
    alert("Between 0 and 25,inclusive");
}

var i = 0;
do{
    i += 2;
}while(i < 10)
alert (i);

var i = 0;
while(i < 10){
    i += 2;
}
alert(i);

var count = 10;
for( var i = 0; i < count; i++){
    alert(i);
}
alert(i);
for ( var propName in window){
    document.write(propName) ;
}
document.write(propName);
var num = 0;
for ( var i = 1; i<10; i++){
    if( i % 5 == 0){
        break;
     }
    num ++;
}
alert(num);
var num = 0;
for ( var i = 1; i<10; i++){
    if( i % 5 == 0){
        continue;
    }
    num ++;
}
alert(num);
var num = 0;
outermost:
for(var i = 0; i<10; i++){
    for(var j = 0; j<10; j++){
        if(i == 5 &&  j == 5){
            break outermost;
        }
        num ++;
    }
}
alert(num);
var num = 25;
switch (true){
    case num < 0:
        alert("Less than 0");
        break;
    case num >= 0 && num <=10:
        alert("Between 0 and 10");
        break;
    case num > 10:
        alert("Greater than 10");
        break;
}
function sayHi(name,message){
    alert("Hi " + arguments[0]+ "," + arguments[1]);
}
sayHi("jack","how old are you?");


function sum( num1,num2){
    return num1+num2;
}
var result = sum(5,10);
alert(result);*/

/*��������ֵ�Ĳ�
function diff(num1, num2){
    if(num1 < num2){
        return num2 - num1;
    }else{
        return num1 - num2;
    }
}
var result = diff(10, 5);
alert( result);

function howManyArus(){
    alert(arguments.length);
}
howManyArus(1);
howManyArus(1,"324");

function doAdd(){
    if(arguments.length == 1){
        alert(arguments[0] + 10);
    }else if(arguments.length == 2){
        alert(arguments[0] + arguments[1]);
    }
}
doAdd(10);
doAdd(5,10);
doAdd(5,10,10);
var person=new Object();
person.name="Nike";
alert( person.name);
function addTen(num){
    num += 10;
    return num;
}
var count = 20;
var result = addTen(count);
alert(count);
alert(result);

function  setName(obj){
    obj.name = "Nicholas";
}
var person =new Object();
setName(person);
alert(person.name);

var color = "blue";
function changeColors(){
    if(color === "blue"){
        alert( color="red");
    }else{
        alert( color = "blue");
    }
}
changeColors();
alert("Color is now " + color);
var color = "blue";
function changeColors(){
    var anotherColor = "red";

    function swapColors(){
        var tempColor = anotherColor;
        anotherColor = color;
        color =tempColor;
    }
    swapColors();

}
changeColors();
function buildUrl(){
    var qs = " ?debug = true";
    with (location){
        var url = href + qs;
    }
    retern url;
}

if(true){
    color = "blue";
}
alert(color);

function add(num1,num2){
    sum = num1 + num2 ;
    return sum;
}
var result = add(10,20);
alert(sum);

var color = "blue";
function getColors(){
    var color = "red";
    return color;
}
alert(getColors());


var person =new Object();
person.name = "Nike";
person.age = 15;

var person2 = {
    name:"Nike";
    age:16;
}

var values=[1,2,3,4,5];
values.reverse();
alert(values);

function campare(value1,value2){
    if(value1 < value2){
        return 1;
    }else if(value1 > value2){
        return -1;
    }else{
        return 0;
    }
}
var values = [0,1,5,10,15];
values.sort(campare);
alert(values);

var colors = ["red","yellow","blue"];
var colors2 = colors.concat("yellow",["black","white"]);
alert(colors);
alert(colors2);
var colors = ["red","green","blue","yellow","white"];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1,4);
alert(colors2);
alert(colors3);
var colors = ["red","green","blue"];
var colors2 = colors.splice(1,0,"yellow","white");
alert(colors);
alert(colors2);
var nums = [1,2,3,4,5,4,3,2,1];
alert(nums.indexOf(4));
alert(nums.lastIndexOf(4));
alert(nums.indexOf(4,5));

var person = { name: "Nicholas" };
var people = [{ name: "Nicholas" }];
var morePeople = [person];
alert(people.indexOf(person));     //-1
alert(morePeople.indexOf(person)); //0
var str = "red";
alert(str.length);
var colors = ["red","blue","white"];
if( colors instanceof Array){
    alert(colors[0]);
}

if(Array.isArray (colors)){
    alert(colors.length);
}
var test1 = "hi", test2 ="hello";
var sTem = "hello";
alert(typeof sTem);
alert(typeof 86);
var bFound ="false";
alert( bFound).toString();
var num1 = 10;
var num2 =10.0;
alert(num1.toString());
alert(num2.toString(2));
var arr = new Array();
arr[0] = "George";
arr[1] = "Mike";
arr[2] = "Thomas";
document.write(arr.toString());
var d = new Date();
document.write(d.toString());
var colors =new Array();
alert(colors.constructor);
var arr = new Array(3);
arr[0] = "John";
arr[1] = "Andy";
arr[2] = "Wendy";
document.write("Original length:" +arr.length);
document .write("<br/>");
arr.length = 5;
document.write(arr.length);
function employee(name,job,age){
    this.name=name;
    this.job=job;
    this.age=age;
};
var bill =new employee("Bill Gates","engineer",29);
employee.prototype.salary= null;
bill.salary =2000;
document.write(bill.salary);
var a =[1,2,3];
alert(a.concat(4,5));
var arr1= new Array();
arr1[0]="George";
arr1[1]="MIKE";
arr1[2]="john";
var arr2 =new Array();
arr2[0]="john";
arr2[1]="hanmei";
var arr3 = new Array();
arr3[0]= "li lei";
alert(arr1.concat(arr2,arr3));
function sortNumber(a,b){
    return a- b;
}
var arr =new Array(3);
arr[0] = "10";
arr[1] = "5";
arr[2] = "40";
arr[3] ="25";
arr[4] = "1000";
arr[5] = "1";
document.write(arr+"<br/>");
document.write(arr.splice(2,0,"Wlim")+"<br/>");
document.write(arr);
document.write(Date());
 var day = d.getDate();
 var month = d.getMonth()+1;
 var year = d.getFullYear();


var d = new Date("July 8,2005");
alert(d);
function  sum(num1,num2){
    return num1 +num2;
}
alert(sum(10,10));

var anotherSum = sum;
alert(anotherSum(10,10));

alert(sum(10,20));
alert(anotherSum(10,10));
alert (sum(10));
function sum(num1,num2){
    return sum;
}
function callSomeFunction(someFunction,someArgument){
    return someFunction(someArgument);
}
function add10(num){
    return num+10;
}
var result = callSomeFunction(add10,10);
alert (result);

function getGreeting(name){
    return "hello,"+ name;
}
var result2 = callSomeFunction(getGreeting,"Nicholas");
alert(result2);



window.color = "red";
var o ={ color:"blue"};

function sayColor(){
    alert (this.color);
}
sayColor();

o.sayColor = sayColor;
o.sayColor();
function sum(num1,num2){
    return num1+num2;
}
function callSum1(num1,num2){
    return sum.apply(this,arguments);
}

var s1= "hello world";
var s2= s1.substring(2);
alert(s2);

var value = "25";
alert(typeof value);
var number =Number(value);
alert(typeof number);
var obj =new Number(value);
alert(typeof obj);

var boo =new Boolean(false);
alert(boo.valueOf()); //valueOf()��������boolean��ԭʼֵ
alert(boo.toString());

if(test1="red"){
     test1 = blue;
    alert(test1);
}                           //����� ��ʾһϵ��Ӧ�ð�˳��ִ�е���䣬��Щ��䱻��װ�ڣ�����

var test = "hi" ; // var ����������������� test ������ hi ������ֵ
var test ;
var $test;
var _test;
var $1;
var _$te$t2;

var myTestValue = 0; mySecondValue = 1; //������������ camel;
var MyTestValue = 0; MySecondValue = 1; //pacal��������
var iMyTestValue =0;//��������������


var sTest1 = "Hello";
var sTest2 = sTest1 + "world";
alert(sTest2);

�������Ա����������͵�ֵ  ԭʼֵ������ֵ
ԭʼֵ���洢��ջ�еļ����ݶΣ�Ҳ����˵�����ǵ�ֱֵ�Ӵ洢�ڱ������ʵ�λ�ã�
����ֵ���洢�ڶ��еĶ���Ҳ����˵���洢�ڱ���������һ��ָ�룬ָ��洢������ڴ洦��


var sTemp ="Test String";
alert(typeof sTemp);
alert(typeof 86);
function testFunc(){

};
alert(typeof testFunc());  //����������ȷ����ֵʱ��Ҳ����undefined

undefined �������˱�����δ�������ʼ��ʱ����ñ�����ֵ                                  ��ʾȱ��ֵ��Ӧ����ֵ������û�ж���
null:���ڱ�ʾ��δ���ڵĶ���  ��׼�������������û��������������ֵ  ��ʾһ���ն���ָ��    ��ʾû�ж��󣬲�����ֵ

var color = "red";
alert(color.length);


var bFound = false;
alert(bFound.toString());
alert(typeof bFound.toString());

var iNum1 = 10;
alert(iNum1.toString(2));
alert(iNum1.toString(8));
alert(iNum1.toString(16));

 var iNum1 = parseInt("0xA");
alert(iNum1);


var  oBooleanObjec =new Boolean(true); //Ҫ������������ֻ��Ҫ����Booleanֵ��Ϊ������

var  oNumberObject = new Number(68);
var  iNumber =oNumberObject.valueOf();
alert(iNumber == oNumberObject.toString());

var  oNumberObject = new Number(68);
alert(oNumberObject.toFixed(2));  // toFixed()�������ɰ�Number��������Ϊָ��С��λ��������
alert(oNumberObject.toExponential(2)); //toExponential()���������ص����ÿ�ѧ������ʾ�����ֵ��ַ����γ�
alert(oNumberObject.toPrecision(1));//toPrecision()�������������������ʽ���������ֵ�Ԥ����ʽ��ָ����ʽ����һ�������������ڱ�ʾ������������


var  oStringObject = new String("hello world");
alert(oStringObject.valueOf()=== oStringObject.toString()); //true

var  oNumberObject = new Number(68);
var  iNumber =oNumberObject.valueOf();
alert(iNumber === oNumberObject.toString());   //false

//charAt() ��charCodeAt()���ʵ����ַ����еĵ����ַ�������һ����������Ҫ�������ַ���λ��
var  oStringObject = new String("hello world");
alert(oStringObject.length);
alert(oStringObject.charAt(2)); //charAt()���������ذ���ָ��λ�ô����ַ����ַ���
alert(oStringObject.charCodeAt(2));//charCodeAt()���������ص����ַ����룻




var oStringObject =new String("hello");
var sResult = oStringObject.concat("world");
alert(sResult);
alert(oStringObject); //concat()�������ڽ�һ�������ַ������ӵ�stringde �ַ�����


var oStringObject =new String("hello world");
alert(oStringObject.indexOf("o")); //  "hello" �е� "o"     indexOf()��lastIndexOf()���������صĶ���ָ�����ַ�������һ���ַ�����λ�ã����û���Ҳ����Ӵ����򷵻�-1��
alert(oStringObject.lastIndexOf("o"));  //"world"�е�"o"  indexOf()�Ǵ��ַ����Ŀ�ͷ��ʼ�����ַ�����lastIndexOf()���ַ����Ľ�β��ʼ����

var oStringObject =new String("yellow");
alert(oStringObject.localeCompare("brick"));
alert(oStringObject.localeCompare("yellow'")); //localCompare()���ַ�����������
// ���string��������ĸ˳�����ڲ����е��ַ���֮ǰ�����ظ�ֵ�����string ������ڲ����е��ַ���������0���������֮�󣬷�������

var oStringObject1 = new String("yellow");
var oStringObject2 = new String("brick");
var iResult  = oStringObject1.localeCompare(oStringObject2);

if (iResult < 0){
    alert(oStringObject1 +"come before" +oStringObject2);
}else if(iResult>0){
    alert(oStringObject1+"come after"+oStringObject2);
}else{
    alert("The two string are equal");
}


var  oStringObject = new String("hello world");
alert(oStringObject.slice("3")); //slice()
alert(oStringObject.slice("3","7"));
alert(oStringObject.substring(3));
alert(oStringObject.substring(3,7));

var  oStringObject = new String("hello world");
alert(oStringObject instanceof  String);


var  oStringObject = new String("hello world");
alert(oStringObject.toLocaleLowerCase()); //toLocaleLowerCase()���� ���ڰ��ַ���ת����Сд��
alert(oStringObject.toLowerCase());//toLowerCase()���������ڰ��ַ���ת����Сд��
alert(oStringObject.toUpperCase());
alert(oStringObject.toLocaleUpperCase());//toUpperCase()��tolocaleUpperCase()���������ڰ��ַ���ת���ɴ�д��ĸ


var  o  =new object;
o.name= "David";
alert(o.name);
delete(o.name);
alert(o.name);

//void ��������κ�ֵ����undefined���������ͨ�����ڱ��������Ӧ�õ�ֵ

var iNum = 10;
--iNum;
alert(iNum);//9
alert(--iNum);//8
alert(iNum);//8

var iNum = 10;
iNum--;
alert(iNum); // 9
alert(iNum--);//9
alert(iNum);  //8//��׺ʽ��������ڼ�����������ǵı��ʽ��Ž�����������������㡣



var bFound = false;
var  i = 0;
while(!bFound){
    if(aValue[i] == vSearchValues){
        bFound = true;
    }else{
        i++;
    }
}                                   //���ڼ�¼�����Ƿ�ɹ���



var bTrue = new Object(6);
var bUnknow = false;
var bResult =(bUnknow && bTrue);
alert (bResult);

var iMax =(iNum1 < iNum2) ? iNum1 : iNum2;

var  i = 20;
if(i <30){
    alert("С��30");
}else{
    alert("����30");
}
//do while ����Ǻ����ѭ�������˳�������ִ��ѭ���ڲ��Ĵ���֮����㣬����ζ���ڼ�����ʽ֮ǰ�����ٻ�ִ��ѭ������һ��
var  i =0;
do{
    i +=2;
} while(i<10);
alert(i);

//while���ǰ����ѭ��������ζ�ţ��˳���������ִ��ѭ���ڲ��Ĵ���֮ǰ����ģ����ѭ���������һ��Ҳ��ִ�С�
var i =0;
while(i<10){
    i +=2;
}
alert(i)
//for�����ǰ����ѭ��
iCound = 6;
for(var i = 0;i<iCound;i++){
    alert(i);
}
for(sProp in window){
    alert(sProp);
}

var iNum = 0;
for(var i = 0; i<10; i++){
    if(i % 5 ==0){
        break;
    }
    iNum++;
}
alert(iNum);

function sayHi(sName,sMessage){
    alert("Hello" + sName +sMessage);
}                                       //�ؼ���function,������ sayHi,���� sName,sMessage; ��ִ�д��� alert("Hello" + sName +sMessage);
sayHi("David","Nice to meet you");

function sum(iNum1,iNum2){
    return iNum1 + iNum2;
}
var  iResult = sum(1,2);
alert(iResult);

function sayHi(){
    if(arguments[0] == "bye"){
        return;
    }
    alert(arguments[0]);
}

function howManyArgus(){
    alert(arguments.length);
}
howManyArgus(10,"hello");

function doAdd(){
    if(arguments.length == 0){
        alert(arguments[0]+5);
    }else if(arguments.length == 2){
        alert(arguments[0] + arguments[1]);
    }
}
doAdd(10);
doAdd(10,20);


var sMessage ="hello world";
function sayHelloWorld(){
    alert(sMessage);
}
sayHelloWorld();
//�ű��������ڴ�󣬲�û��δ����sayHelloWorld()�������sMessage��ֵ��

//��function��Ƕ��functionʱ���ڲ���function ���Է����ⲿfunction �ı���



function foo(x){
    var tmp = 3;
    function bar(y){
        alert(x+y+(++tmp));
    }
    bar(10);
}
foo(2)
//���溯���Ǳհ�����

function foo(x){
    var tmp = 3;
    return function (y){
        alert(x +y +(++tmp));
    }
}
var bar = foo(2);
bar(10);


window.onload = function(){
    var oUl= document.getElementById("ul");
    var aLi = document.getElementsByTagName("li");
    var i =0;
    for(var i =0; i<aLi.length;i++){
        if( i%2 == 0){
           aLi[i].style.background = "#ccc";
        }
    }
}



window.onload= function(){
    var oUl = document.getElementById("ul");
    var aLi = document.getElementsByTagName("li");
    for(var i = 0; i<aLi.length; i++){
        if(i%2==0){
            aLi[i].style.background ="#fcc";
        }
    }
}


var  n = 1113;
alert(parseInt(n/60)+"��" +n%60+"��");




function sum(a,b){
    return a+b;
}
alert(sum(12,6));


//��֪����������ʱ�����
function sum(){
    var result= 0 ;
    var i =0;
    for(i=0;i<arguments.length;i++){
        result += arguments[i];
    }
    alert(result);
}
sum(1,2,4,4,5);

function css(){
    if(arguments.length ==3){
        arguments[0].style[arguments[1]]=arguments[2];
    }else if(arguments.length ==2){
        return arguments[0].style[arguments[1]];
    }
}
window.onload = function(){
    var oBtn= document.getElementById("btn1");
    var oDiv = document.getElementById("div1");
    oBtn.onclick = function(){
        css(oDiv,"background","red");
        alert(css(oDiv,"width"));
    }
}


function css(){
    if(arguments.length==3){
        arguments[0].style[arguments[1]]=arguments[2]
    }else if(arguments.length==2){
        return  getStyle(arguments[0],[arguments[1]]);
    }
}
window.onload = function(){
    var oBtn = document.getElementById("btn1");
    var oDiv = document.getElementById("div1");
    oBtn.onclick = function(){
        css(oDiv,"background","red");
        alert(css(oDiv,"width"));
    }
}

function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
}

window.onload = function(){
    var oBtn = document.getElementById("btn");
    var oInput = document.getElementsByTagName("input");
    var i ;
    oBtn.onclick= function(){
        for(i =0;i<oInput.length;i++){
            oInput[i].checked="true";
        }
    }

}
 */


window.onload =function(){
    var aInput = document.getElementsByTagName("input");
    var aDiv = document.getElementsByTagName("div");
    var i;
    for(i=0;i<aInput.length;i++){
        aInput[i].index= i;
        aInput[i].onclick = function () {
            for(i=0;i<aInput.length;i++){
                aInput[i].className="";
                aDiv[i].style.display ="none";
            }
            aDiv[this.index].style.display = "block";
            this.className="active";
        }
    }
}









