/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying, doubleCounter, winningScore;

init();


document.getElementById('winningScore').addEventListener('input', function()
{
    var input = document.getElementById('winningScore').value;
    if (input)
    {   
        winningScore=input;
    }
    else
    {
        winningScore=100;
    }
})


document.querySelector('.btn-roll').addEventListener('click', function () 
{
    if (gamePlaying)
    {
        // 1. Random Number
        var dice1 = Math.floor(Math.random()*6) +1;
        var dice2 = Math.floor(Math.random()*6) +1;

        // 2. Display the result 
        var diceDOM1 = document.querySelector('.dice-1');
        var diceDOM2 = document.querySelector('.dice-2');
        
        diceDOM1.style.display='block';
        diceDOM1.src='dice-' + dice1 + '.png';

        diceDOM2.style.display='block';
        diceDOM2.src='dice-' + dice2 + '.png';


        //3. Update the round score if the rolled number was not a 1
        if (dice1 !== 1 && dice2 !==1)
        {
            if (dice1===6 && dice2 ===6)
            {
                // Add score
                score[activePlayer]=0;
                nextPlayer();
            }
            else
            {   
                // Add score
                roundScore=roundScore+dice1+dice2;
                document.querySelector('#current-' + activePlayer).textContent=roundScore;
            }
        }
        else 
        {
            //Next Player
            nextPlayer();        
       }
    }
}
);

document.querySelector('.btn-hold').addEventListener('click', function () 
{
    if(gamePlaying)
    {

        // Add the current score to the player global score
        scores[activePlayer]+=roundScore;


        // Update the UI 
        document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];


        // Check if player won the game
        if (scores[activePlayer] >= winningScore)
        {
            document.querySelector('#name-' + activePlayer).textContent='Winner !';
            document.querySelector('.dice-1').style.display='none';
            document.querySelector('.dice-2').style.display='none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying=false;
        }
        else
        {
            nextPlayer();
        }
    }
})

function nextPlayer()
{

    roundScore=0;
    doubleCounter=0;
    activePlayer ===0 ? activePlayer =1 : activePlayer = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //document.querySelector('.dice').style.display='none';
}


document.querySelector('.btn-new').addEventListener ('click', init);


function init()
{
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    doubleCounter = 0;

    document.querySelector('.dice-1').style.display='none';
    document.querySelector('.dice-2').style.display='none';
    
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    
    document.getElementById('name-1').textContent='Player 1';
    document.getElementById('name-0').textContent='Player 0';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
//document.querySelector('#current-' + activePlayer).textContent=dice;
//document.querySelector('#current-' + activePlayer).innerHTML='<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;
//console.log(x);
