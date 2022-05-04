player_1_name= localStorage.getItem("player_1");
player_2_name= localStorage.getItem("player_2");

function ask(){
    number1= document.getElementById("n1").value;
    number2= document.getElementById("n2").value;
    exp_answer= parseInt(number1)* parseInt(number2);
    document.getElementById("qn1").innerHTML=" "+ number1;
    document.getElementById("qn2").innerHTML=" "+ number2;
    document.getElementById("n1").value= " ";
    document.getElementById("n2").value= " ";
}

q_turn= localStorage.getItem("player_1");
a_turn= localStorage.getItem("player_2");
f_score=0;
s_score= 0;


function check(){
    answer= document.getElementById("answer").value;
    if (answer== exp_answer){
        if (q_turn== "player_1"){
            f_score= f_score +1;
            document.getElementById("score_1").innerHTML= "player_1"+ ": " + f_score;
        }
        else {
            s_score= s_score +1;
            document.getElementById("score_2").innerHTML= "player_2"+ ": " + s_score;
        }
    }

    if(q_turn == "player_1")
    {
        q_turn = "player_2"
        document.getElementById("Turn").innerHTML= player_2_name;
    }
    else 
    {
        q_turn= "player_1"
        document.getElementById("Turn").innerHTML= player_1_name;
    }

    if(a_turn == "player_1")
    {
        a_turn = "player_2"
        document.getElementById("Turn").innerHTML= player_2_name;
    }
    else 
    {
        a_turn= "player_1"
        document.getElementById("Turn").innerHTML= player_1_name;
    }
}

