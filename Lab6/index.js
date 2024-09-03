function test(){
    var method = document.getElementById("method").value;
    if(method == "normal"){
        var rexp = /E213/;
        var enter=document.getElementById('inputString').value;
        if(rexp.test(enter)){
            alert("true")
        }
        else{
            alert("false");
        }
    }
    else if(method == "i"){
        var rexp = /E213/i;
        var enter=document.getElementById('inputString').value;
        if(rexp.test(enter)){
            alert("true")
        }
        else{
            alert("false");
        }
    }

    else if(method == "g"){
        var rexp = /E213/g;
        var enter=document.getElementById('inputString').value;
        if(rexp.test(enter)){
            alert("true")
        }
        else{
            alert("false");
        }
    }

    else if(method == "gi"){
        var rexp = /E213/gi;
        var enter=document.getElementById('inputString').value;
        if(rexp.test(enter)){
            alert("true")
        }
        else{
            alert("false");
        }
    }


    else if(method == "b"){
        var rexp = /\bE213\b/;
        var enter=document.getElementById('inputString').value;
        if(rexp.test(enter)){
            alert("true")
        }
        else{
            alert("false");
        }
    }


    else if(method == "B"){
        var rexp = /\BE213\B/;
        var enter = document.getElementById('inputString').value;
        if(rexp.test(enter)){
            alert("true");
        }
        else{
            alert("false");
        }
    }    

}

