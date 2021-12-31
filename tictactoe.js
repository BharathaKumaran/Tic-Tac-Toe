var flag=1;
function fnBox0(){
    if(flag==1){
        document.getElementById("btn0").value="X";
        document.getElementById("btn0").disabled="true";
        flag=0;
    }else{
        document.getElementById("btn0").value="O";
        document.getElementById("btn0").disabled="true";
        flag=1;
    }
    }
    

function fnBox1(){
    if(flag==1){
        document.getElementById("btn1").value="X";
        document.getElementById("btn1").disabled="true";
        flag=0;
    }else{
        document.getElementById("btn1").value="O";
        document.getElementById("btn1").disabled="true";
        flag=1;
    }
    
}
function fnBox2(){
    if(flag==1){
        document.getElementById("btn2").value="X";
        document.getElementById("btn2").disabled="true";
        flag=0;
    }else{
        document.getElementById("btn2").value="O";
        document.getElementById("btn2").disabled="true";
        flag=1;

    }
    
}
function fnBox3(){
         if(flag==1){
            document.getElementById("btn3").value="X";
            document.getElementById("btn3").disabled="true";
            flag=0;
         }else{
            document.getElementById("btn3").value="O";
            document.getElementById("btn3").disabled="true";
            flag=1;
         }
        }
function fnBox4(){
    if(flag==1){
        document.getElementById("btn4").value="X";
        document.getElementById("btn4").disabled="true";
        flag=0;
     }else{
        document.getElementById("btn4").value="O";
        document.getElementById("btn4").disabled="true";
        flag=1;
     }
    
}
function fnBox5(){
    if(flag==1){
        document.getElementById("btn5").value="X";
        document.getElementById("btn5").disabled="true";
        flag=0;
     }else{
        document.getElementById("btn5").value="O";
        document.getElementById("btn5").disabled="true";
        flag=1;
     }
}
function fnBox6(){
    if(flag==1){
        document.getElementById("btn6").value="X";
        document.getElementById("btn6").disabled="true";
        flag=0;
     }else{
        document.getElementById("btn6").value="O";
        document.getElementById("btn6").disabled="true";
        flag=1;
     }
}
function fnBox7(){
    if(flag==1){
        document.getElementById("btn7").value="X";
        document.getElementById("btn7").disabled="true";
        flag=0;
     }else{
        document.getElementById("btn7").value="O";
        document.getElementById("btn7").disabled="true";
        flag=1;
     }
}
function fnBox8(){
    if(flag==1){
        document.getElementById("btn8").value="X";
        document.getElementById("btn8").disabled="true";
        flag=0;
     }else{
        document.getElementById("btn8").value="O";
        document.getElementById("btn8").disabled="true";
        flag=1;
     }
}
function check(){
    var box0val = document.getElementById("btn0").value;
    var box1val = document.getElementById("btn1").value;
    var box2val = document.getElementById("btn2").value;
    var box3val = document.getElementById("btn3").value;
    var box4val = document.getElementById("btn4").value;
    var box5val = document.getElementById("btn5").value;
    var box6val = document.getElementById("btn6").value;
    var box7val = document.getElementById("btn7").value;
    var box8val = document.getElementById("btn8").value;
    if(box0val =="X" && box1val =="X" && box2val =="X")
    {
        document.getElementById("result").innerText="Player X Won";
        var box3val = document.getElementById("btn3").disabled= true;
        var box4val = document.getElementById("btn4").disabled= true;
        var box5val = document.getElementById("btn5").disabled= true;
        var box6val = document.getElementById("btn6").disabled= true;
        var box7val = document.getElementById("btn7").disabled= true;
        var box8val = document.getElementById("btn8").disabled= true;
    }else if(box0val =="O" && box1val =="O" && box2val =="O"){
        document.getElementById("result").innerText="Player O Won";
        var box3val = document.getElementById("btn3").disabled= true;
        var box4val = document.getElementById("btn4").disabled= true;
        var box5val = document.getElementById("btn5").disabled= true;
        var box6val = document.getElementById("btn6").disabled= true;
        var box7val = document.getElementById("btn7").disabled= true;
        var box8val = document.getElementById("btn8").disabled= true;

    }
            
    else if(box3val =="X" && box4val =="X" && box5val =="X")
    {
        document.getElementById("result").innerText="Player X Won";
        var box0val = document.getElementById("btn0").disabled= true;
        var box1val = document.getElementById("btn1").disabled= true;
        var box2va2 = document.getElementById("btn2").disabled= true;
        var box6val = document.getElementById("btn6").disabled= true;
        var box7val = document.getElementById("btn7").disabled= true;
        var box8val = document.getElementById("btn8").disabled= true;
    }else if(box3val =="O" && box4val =="O" && box5val =="O"){
        document.getElementById("result").innerText="Player O Won";
        var box1val = document.getElementById("btn3").disabled= true;
        var box2val = document.getElementById("btn4").disabled= true;
        var box3val = document.getElementById("btn5").disabled= true;
        var box6val = document.getElementById("btn6").disabled= true;
        var box7val = document.getElementById("btn7").disabled= true;
        var box8val = document.getElementById("btn8").disabled= true;

    }
    else if(box6val =="X" && box7val =="X" && box8val =="X")
    {
        document.getElementById("result").innerText="Player X Won";
        var box3val = document.getElementById("btn3").disabled= true;
        var box4val = document.getElementById("btn4").disabled= true;
        var box5val = document.getElementById("btn5").disabled= true;
        var box0val = document.getElementById("btn0").disabled= true;
        var box1val = document.getElementById("btn1").disabled= true;
        var box2val = document.getElementById("btn2").disabled= true;
    }else if(box6val =="O" && box7val =="O" && box8val =="O"){
        document.getElementById("result").innerText="Player O Won";
        var box3val = document.getElementById("btn3").disabled= true;
        var box4val = document.getElementById("btn4").disabled= true;
        var box5val = document.getElementById("btn5").disabled= true;
        var box0val = document.getElementById("btn0").disabled= true;
        var box1val = document.getElementById("btn1").disabled= true;
        var box2val = document.getElementById("btn2").disabled= true;

    }
    else if(box0val =="X" && box3val =="X" && box6val =="X")
    {
        document.getElementById("result").innerText="Player X Won";
        var box1val = document.getElementById("btn1").disabled= true;
        var box2val = document.getElementById("btn2").disabled= true;
        var box5val = document.getElementById("btn5").disabled= true;
        var box4val = document.getElementById("btn4").disabled= true;
        var box7val = document.getElementById("btn7").disabled= true;
        var box8val = document.getElementById("btn8").disabled= true;
    }else if(box0val =="O" && box3val =="O" && box6val =="O"){
        document.getElementById("result").innerText="Player O Won";
        var box1val = document.getElementById("btn1").disabled= true;
        var box2val = document.getElementById("btn2").disabled= true;
        var box5val = document.getElementById("btn5").disabled= true;
        var box4val = document.getElementById("btn4").disabled= true;
        var box7val = document.getElementById("btn7").disabled= true;
        var box8val = document.getElementById("btn8").disabled= true;

    }
    else if(box1val =="X" && box4val =="X" && box7val =="X")
    {
        document.getElementById("result").innerText="Player X Won";
        var box3val = document.getElementById("btn3").disabled= true;
        var box0val = document.getElementById("btn0").disabled= true;
        var box5val = document.getElementById("btn5").disabled= true;
        var box6val = document.getElementById("btn6").disabled= true;
        var box2val = document.getElementById("btn2").disabled= true;
        var box8val = document.getElementById("btn8").disabled= true;
    }else if(box1val =="O" && box4val =="O" && box7val =="O"){
        document.getElementById("result").innerText="Player O Won";
        var box3val = document.getElementById("btn3").disabled= true;
        var box0val = document.getElementById("btn0").disabled= true;
        var box5val = document.getElementById("btn5").disabled= true;
        var box6val = document.getElementById("btn6").disabled= true;
        var box2val = document.getElementById("btn2").disabled= true;
        var box8val = document.getElementById("btn8").disabled= true;

    }
    else if(box2val =="X" && box5val =="X" && box8val =="X")
    {
        document.getElementById("result").innerText="Player X Won";
        var box3val = document.getElementById("btn3").disabled= true;
        var box4val = document.getElementById("btn4").disabled= true;
        var box0val = document.getElementById("btn0").disabled= true;
        var box6val = document.getElementById("btn6").disabled= true;
        var box7val = document.getElementById("btn7").disabled= true;
        var box1val = document.getElementById("btn1").disabled= true;
    }else if(box2val =="O" && box5val =="O" && box8val =="O"){
        document.getElementById("result").innerText="Player O Won";
        var box3val = document.getElementById("btn3").disabled= true;
        var box4val = document.getElementById("btn4").disabled= true;
        var box0val = document.getElementById("btn0").disabled= true;
        var box6val = document.getElementById("btn6").disabled= true;
        var box7val = document.getElementById("btn7").disabled= true;
        var box1val = document.getElementById("btn1").disabled= true;

    }
    else if(box0val =="X" && box4val =="X" && box8val =="X")
    {
        document.getElementById("result").innerText="Player X Won";
        var box3val = document.getElementById("btn3").disabled= true;
        var box1val = document.getElementById("btn1").disabled= true;
        var box5val = document.getElementById("btn5").disabled= true;
        var box6val = document.getElementById("btn6").disabled= true;
        var box7val = document.getElementById("btn7").disabled= true;
        var box2val = document.getElementById("btn2").disabled= true;
    }else if(box0val =="O" && box4val =="O" && box8val =="O"){
        document.getElementById("result").innerText="Player O Won";
        var box3val = document.getElementById("btn3").disabled= true;
        var box1val = document.getElementById("btn1").disabled= true;
        var box5val = document.getElementById("btn5").disabled= true;
        var box6val = document.getElementById("btn6").disabled= true;
        var box7val = document.getElementById("btn7").disabled= true;
        var box2val = document.getElementById("btn2").disabled= true;

    }
    else if(box2val =="X" && box4val =="X" && box6val =="X")
    {
        document.getElementById("result").innerText="Player X Won";
        var box3val = document.getElementById("btn3").disabled= true;
        var box0val = document.getElementById("btn0").disabled= true;
        var box5val = document.getElementById("btn5").disabled= true;
        var box1val = document.getElementById("btn1").disabled= true;
        var box7val = document.getElementById("btn7").disabled= true;
        var box8val = document.getElementById("btn8").disabled= true;
    }else if(box2val =="O" && box4val =="O" && box6val =="O"){
        document.getElementById("result").innerText="Player O Won";
        var box3val = document.getElementById("btn3").disabled= true;
        var box0val = document.getElementById("btn0").disabled= true;
        var box5val = document.getElementById("btn5").disabled= true;
        var box1val = document.getElementById("btn1").disabled= true;
        var box7val = document.getElementById("btn7").disabled= true;
        var box8val = document.getElementById("btn8").disabled= true;

    }else if(
        (box0val == "X" || box0val == "O")&&
        (box1val == "X" || box1val == "O")&&
        (box2val == "X" || box2val == "O")&&
        (box3val == "X" || box3val == "O")&&
        (box4val == "X" || box4val == "O")&&
        (box5val == "X" || box5val == "O")&&
        (box6val == "X" || box6val == "O")&&
        (box7val == "X" || box7val == "O")&&
        (box8val == "X" || box8val == "O")

    ) {
        document.getElementById("result").innerText="Match tie";
    }
}
function fnRestart(){
    location.reload();
}