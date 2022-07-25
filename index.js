setTimeout(function(){
    var player1 = prompt("Enter the Name of Player 1");
    var player2 = prompt("Enter the Name of Player 2");

    if(player1==="" && player2===""){
        player1 = "Player 1";
        player2 = "Player 2";
    }

    document.querySelector(".player1").innerHTML = player1;
    document.querySelector(".player2").innerHTML = player2;

    document.querySelector("button").addEventListener("click", function(){
        let x = Math.floor((Math.random() * 3) + 1);
        let y = Math.floor((Math.random() * 3) + 1);
    
        document.querySelector(".img1").setAttribute("src", "images/img"+x+".jpeg");
        document.querySelector(".img2").setAttribute("src", "images/img"+y+".jpeg");
    
        if(x===1 && y===2){
            document.querySelector(".result p").innerHTML = player1 + " Wins !!!";
        }
        else if(x===1 && y===3){
            document.querySelector(".result p").innerHTML = player2 + " Wins !!!";
        }
        else if(x===2 && y===1){
            document.querySelector(".result p").innerHTML = player2 + " Wins !!!";
        }
        else if(x===2 && y===3){
            document.querySelector(".result p").innerHTML = player1 + " Wins !!!";
        }
        else if(x===3 && y===1){
            document.querySelector(".result p").innerHTML = player1 + " Wins !!!";
        }
        else if(x===3 && y===2){
            document.querySelector(".result p").innerHTML = player2 + " Wins !!!";
        }
        else if(x===y){
            document.querySelector(".result p").innerHTML = "Draw !!!";
        }
    })
}, 100);






