var gameRunning = false;

var p1win 	= 0;
var p1loss 	= 0;
var p1draw 	= 0;

var p2win 	= 0;
var p2loss 	= 0;
var p2draw 	= 0;

var playerTurn 	= 1;
var turnNumber 	= 0;
var boardList 	= ["tl","tm","tr","ml","mm","mr","bl","bm","br"];


function startGame() {
	if (gameRunning == false) {
		//document.getElementById("cpuPlayer").disabled=true;
		// document.getElementById("twoPlayer").disabled=true;
		var startButton = document.getElementById("startButton");
		startButton.innerHTML = "Reset";
		startButton.style.backgroundColor = "white";
		startButton.style.color = "#666";
		startButton.style.border = "1px solid #666";

		document.getElementById("playerTurnText").innerHTML = "Player 1's Turn (X)";

		document.getElementById("scoreArea").style.visibility = "visible";

		// var versusPlayer = document.getElementById("twoPlayer").checked;
		initializeBoard();
		updateScoreBoard();
		gameRunning = true;
	}
	else {
		resetGame();
	}
}

function resetGame() {
	//document.getElementById("cpuPlayer").disabled=false;
	// document.getElementById("twoPlayer").disabled=false;
	var startButton = document.getElementById("startButton")
	startButton.innerHTML = "Start!";
	startButton.style.backgroundColor = "#59ace0";
	startButton.style.color = "white";
	startButton.style.border = "1px solid #59ace0";
	document.getElementById("playerTurnText").innerHTML = "";
	document.getElementById("scoreArea").style.visibility = "hidden";
	turnNumber = 0;
	playerTurn = 1;
	p1win = 0;
	p1loss = 0;
	p1draw = 0;
	p2win = 0;
	p2loss = 0;
	p2draw = 0;
	gameRunning = false;
	clearBoard();
}

function clearBoard() {
	for (var i = 0; i < boardList.length; i++) {
		document.getElementById(boardList[i]).innerHTML= "";
	}
	resetColor();
	turnNumber = 0;
	playerTurn = 1;
	if (gameRunning) {
		document.getElementById("playerTurnText").innerHTML = "Player 1's Turn (X)";
	}
}

function initializeBoard() {
	document.getElementById("tl").addEventListener("click", function() {
		addMarker("tl");
	});
	document.getElementById("tm").addEventListener("click", function() {
		addMarker("tm");
	});
	document.getElementById("tr").addEventListener("click", function() {
		addMarker("tr");
	});
	document.getElementById("ml").addEventListener("click", function() {
		addMarker("ml");
	});
	document.getElementById("mm").addEventListener("click", function() {
		addMarker("mm");
	});
	document.getElementById("mr").addEventListener("click", function() {
		addMarker("mr");
	});
	document.getElementById("bl").addEventListener("click", function() {
		addMarker("bl");
	});
	document.getElementById("bm").addEventListener("click", function() {
		addMarker("bm");
	});
	document.getElementById("br").addEventListener("click", function() {
		addMarker("br");
	});
}

function addMarker(cellName) {
	if (gameRunning) {
		if (document.getElementById(cellName).innerHTML == "") {
			if (playerTurn == 1) {
				document.getElementById(cellName).innerHTML = "X";
				playerTurn = 2;
				turnNumber++;
				checkForWinner();
				if (turnNumber != 0) {
					document.getElementById("playerTurnText").innerHTML = "Player 2's Turn (O)";
				}
				
			}
			else {
				document.getElementById(cellName).innerHTML = "O";
				playerTurn = 1;
				turnNumber++;
				checkForWinner();
				if (turnNumber != 0) {
					document.getElementById("playerTurnText").innerHTML = "Player 1's Turn (X)";
				}
			}
		}
	}
}

function checkForWinner() {

	var tl = document.getElementById("tl");
	var tm = document.getElementById("tm");
	var tr =document.getElementById("tr")

	var tlBox = tl.innerHTML;
	var tmBox = tm.innerHTML;
	var trBox = tr.innerHTML;

	if (threeMatches(tlBox,tmBox,trBox)) {
		colorWinningRow(tl,tm,tr);
		return playerWins(tlBox);
	}

	var ml = document.getElementById("ml");
	var mm = document.getElementById("mm");
	var mmr = document.getElementById("mr");

	var mlBox = ml.innerHTML;
	var mmBox = mm.innerHTML;
	var mrBox = mr.innerHTML;

	if (threeMatches(mlBox,mmBox,mrBox)) {
		colorWinningRow(ml,mm,mr);
		return playerWins(mlBox);
	}

	var bl = document.getElementById("bl");
	var bm = document.getElementById("bm");
	var br = document.getElementById("br");

	var blBox = bl.innerHTML;
	var bmBox = bm.innerHTML;
	var brBox = br.innerHTML;

	if (threeMatches(blBox,bmBox,brBox)) {
		colorWinningRow(bl,bm,br);
		return playerWins(blBox);
	}

	else if (threeMatches(tlBox,mlBox,blBox)) {
		colorWinningRow(tl,ml,bl);
		return playerWins(tlBox);
	}

	else if (threeMatches(tmBox,mmBox,bmBox)) {
		colorWinningRow(tm,mm,bm);
		return playerWins(tmBox);
	}

	else if (threeMatches(trBox,mrBox,brBox)) {
		colorWinningRow(tr,mr,br);
		return playerWins(trBox);
	}

	else if (threeMatches(tlBox,mmBox,brBox)) {
		colorWinningRow(tl,mm,br);
		return playerWins(tlBox);
	}

	else if (threeMatches(trBox,mmBox,blBox)) {
		colorWinningRow(tr,mm,bl);
		return playerWins(trBox);
	}

	else if (turnNumber == 9) {
		var winningPlayer = 3;
		p1draw++;
		p2draw++;
		colorWinningRow(tl,tm,tr);
		colorWinningRow(ml,mm,mr);
		colorWinningRow(bl,bm,br);
		return  winnerPopup(winningPlayer);
	}
}


function threeMatches(pos0,pos1,pos3) {
	if ((pos0 == pos1 && pos0 == pos3) && (pos0 != "" && pos1 != "" && pos3 != "")) {
		return true;
	} else {
		return false;
	}
}

function updateScoreBoard() {
	document.getElementById("p1win").innerHTML= p1win;
	document.getElementById("p1loss").innerHTML= p1loss;
	document.getElementById("p1draw").innerHTML= p1draw;
	document.getElementById("p2win").innerHTML= p2win;
	document.getElementById("p2loss").innerHTML= p2loss;
	document.getElementById("p2draw").innerHTML= p2draw;
}

function playerWins(x_or_o) {
	var winningPlayer;
	if (x_or_o == "X") {
		winningPlayer = 1;
		p1win++;
		p2loss++;
		winnerPopup(winningPlayer);
	} else {
		winningPlayer = 2;
		p2win++;
		p1loss++;
		winnerPopup(winningPlayer);
	}
}

function colorWinningRow(pos0,pos1,pos2) {
	pos0.style.color = "#f00";
	pos1.style.color = "#f00";
	pos2.style.color = "#f00";
}

function resetColor() {
	for (var i = 0; i < boardList.length; i++) {
		document.getElementById(boardList[i]).style.color= "black";
	}
}

function winnerPopup(winner) {

	var modal = document.getElementById("winnerModal");
	var span = document.getElementsByClassName("closeModal")[0];

	if (winner == 3) {
		document.getElementById("modalText").innerHTML = "Draw!!!"
	} else {
		document.getElementById("modalText").innerHTML = "Player " + winner + " Wins!!!";
	}

	modal.style.display = "block";

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  	modal.style.display = "none";
	  	updateScoreBoard();
	  	clearBoard();
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  	if (event.target == modal) {
	    	modal.style.display = "none";
	    	updateScoreBoard();
			clearBoard();
		}
	}
}

