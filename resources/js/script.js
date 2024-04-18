var firstPlayer = []
var secondPlayer = []
var playedCards = []
var cards = []
var $draw = $("#draw");
var $firstPlayer = $("#firstPlayer");
var $secondPlayer = $("#secondPlayer");
var $firstPlayerNumber = $("#firstPlayerNumber");
var $secondPlayerNumber = $("#secondPlayerNumber");
var $firstPlayerSuit = $("#firstPlayerSuit");
var $secondPlayerSuit = $("#secondPlayerSuit");
var $winner = $("#winner");
var $player1count = $("#player1count");
var $player2count = $("#player2count");
var $end = $("#end");
var number1;
var number2;
var suit1;
var suit2;
var numberImg1;
var numberImg2;

for(i=1; i<14; i++) {
	for(k=1; k<5; k++) {
		var j = [i,k];
		cards.push(j);
	}
}

cards.shuffle = function() {
	var input = this;
	for(var i = cards.length-1; i >=0; i--) {
		var randomIndex = Math.floor(Math.random()*(i+1));
		var itemAtIndex = cards[randomIndex][0];
		var itemAtSecond = cards[randomIndex][1];
		
		input[randomIndex][0] = input[i][0];
		input[randomIndex][1] = input[i][1];
		input[i][0] = itemAtIndex;
		input[i][1] = itemAtSecond;
	}
	return input;
}

cards.shuffle();
var half = cards.length/2;
for(i=0; i<half; i++) {
	firstPlayer.push(cards[i])
}
cards.splice(0, half);


secondPlayer = cards;

$player1count.html(firstPlayer.length);
$player2count.html(secondPlayer.length);

function endGame() {
	if(firstPlayer.length == 0) {
		$winner.html("GAME OVER </br> Player Two Wins </br> Player One has no more cards to play.");
	}
	if(secondPlayer.length == 0) {
		$winner.html("GAME OVER </br> Player One Wins </br> Player Two has no more cards to play.");
	}
	$winner.css("color", "red");
	$winner.css("font-weight", "bold");
	$end.css("display", "none");
	$firstPlayerNumber.html("");
	$secondPlayerNumber.html("");
	$draw.off();
}

function assign() {
	$firstPlayer.css("border-color", "black");
	$secondPlayer.css("border-color", "black");
	
	if(firstPlayer.length == 0 || secondPlayer.length == 0) {
		endGame();
	}

	$firstPlayerSuit.empty();
	$secondPlayerSuit.empty();
	
	$firstPlayerSuit.css("display", "block");
	$secondPlayerSuit.css("display", "block");
	
	number1=firstPlayer[0][0];
	number2=secondPlayer[0][0];
	
	$firstPlayerNumber.html(number1);
	$secondPlayerNumber.html(number2);

	suit1 = firstPlayer[0][1];
	suit2 = secondPlayer[0][1];
	
	if (suit1 === 1) {
		suit1 = "<img src='./resources/pictures/heart.png'/>";
	}
	if (suit1 === 2) {
		suit1 = "<img src='./resources/pictures/diamond.png'/>";
	}
	if (suit1 === 3) {
		suit1 = "<img src='./resources/pictures/spade.png'/>";
	}
	if (suit1 === 4) {
		suit1 = "<img src='./resources/pictures/club.png'/>";
	}
	if (suit2 === 1) {
		suit2 = "<img src='./resources/pictures/heart.png'/>";
	}
	if (suit2 === 2) {
		suit2 = "<img src='./resources/pictures/diamond.png'/>";
	}
	if (suit2 === 3) {
		suit2 = "<img src='./resources/pictures/spade.png'/>";
	}
	if (suit2 === 4) {
		suit2 = "<img src='./resources/pictures/club.png'/>";
	}
	if (number1 < 11) {
	    for(i=0; i<number1; i++) {
		    $firstPlayerSuit.append(suit1);
	    };
	} else {
		if (number1 == 11) {
			numberImg1 = "<img src='./resources/pictures/jack.png'/>";
			$firstPlayerSuit.append(suit1);
			$firstPlayerNumber.html(numberImg1);
		}
		if (number1 == 12) {
			numberImg1 = "<img src='./resources/pictures/queen.png'/>";
			$firstPlayerSuit.append(suit1);
			$firstPlayerNumber.html(numberImg1);
		}
		if (number1 == 13) {
			numberImg1 = "<img src='./resources/pictures/king.png'/>";
			$firstPlayerSuit.append(suit1);
			$firstPlayerNumber.html(numberImg1);
		}
	}
	if (number2 < 11) {
	    for(i=0; i<number2; i++) {
		    $secondPlayerSuit.append(suit2);
	    };
	} else {
		if (number2 == 11) {
			numberImg2 = "<img src='./resources/pictures/jack.png'/>";
			$secondPlayerSuit.append(suit2);
			$secondPlayerNumber.html(numberImg2);
		}
		if (number2 == 12) {
			numberImg2 = "<img src='./resources/pictures/queen.png'/>";
			$secondPlayerSuit.append(suit2);
			$secondPlayerNumber.html(numberImg2);
		}
		if (number2 == 13) {
			numberImg2 = "<img src='./resources/pictures/king.png'/>";
			$secondPlayerSuit.append(suit2);
			$secondPlayerNumber.html(numberImg2);
		}
	}
	playedCards.push(firstPlayer[0]);
	playedCards.push(secondPlayer[0]);
	
	firstPlayer.splice(0,1);
	secondPlayer.splice(0,1);
	$player1count.html(firstPlayer.length);
	$player2count.html(secondPlayer.length);
	
	greater();
}

function war() {
	$winner.html("This Means War!");
	
	$firstPlayerSuit.empty();
	$secondPlayerSuit.empty();
	
	for(i=0; i<3; i++) {
		playedCards.push(firstPlayer[0]);
		playedCards.push(secondPlayer[0]);
		firstPlayer.splice(0,1);
		secondPlayer.splice(0,1);
		$player1count.html(firstPlayer.length);
		$player2count.html(secondPlayer.length);
	}
	
	numberImg1 = "<img style='height:10rem;' src='./resources/pictures/card.png'/>";
	$firstPlayerNumber.html(numberImg1);
	numberImg2 = "<img style='height:10rem;' src='./resources/pictures/card.png'/>";
	$secondPlayerNumber.html(numberImg2);
	
	var audio = new Audio('card.mp3');
		audio.play();
		
	window.setTimeout(function() {
		audio.play();
	}, 1000);
	window.setTimeout(function() {
		audio.play();
	}, 1800);
	window.setTimeout(function() {
		assign();
		audio.play();
	}, 2600);
}

function greater() {
	if (number1 > number2) {
		$winner.html("Player One Wins!");
		for(i=0; i<playedCards.length; i++) {
			firstPlayer.push(playedCards[i]);
		}
		$player1count.html(firstPlayer.length);
		playedCards=[];
	} else if (number2 > number1) {
		$winner.html("Player Two Wins!");
		for(i=0; i<playedCards.length; i++) {
			secondPlayer.push(playedCards[i]);
		}
		$player2count.html(secondPlayer.length);
		playedCards=[];
	} else if (number1 == number2) {
		war();
	}
}

$draw.on("click", function() {
	assign();
})