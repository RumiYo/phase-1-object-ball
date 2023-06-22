function gameObject(){
    const gameDetails = {
        home: {
        teamName: "Brooklyn Nets",
        colors: ["black", "white"], 
        players: [
            {
                playerName: "Alan Anderson", 
                number: "0",
                shoe: "16",
                points: "22",
                rebounds: "12",
                assists: "12",
                steals: "3", 
                blocks: "1", 
                slamDunks: "1", 
            }, 
            {
                playerName: "Reggie Evans", 
                number: "30",
                shoe: "14",
                points: "12",
                rebounds: "12",
                assists: "12",
                steals: "12", 
                blocks: "12", 
                slamDunks: "7", 
            },
            {
                playerName: "Brook Lopez", 
                number: "11",
                shoe: "17",
                points: "17",
                rebounds: "19",
                assists: "10",
                steals: "3", 
                blocks: "1", 
                slamDunks: "15", 
            },
            {
                playerName: "Mason Plumlee", 
                number: "1",
                shoe: "19",
                points: "26",
                rebounds: "12",
                assists: "6",
                steals: "3", 
                blocks: "8", 
                slamDunks: "5", 
            },
            {
                playerName: "Jason Terry", 
                number: "31",
                shoe: "15",
                points: "19",
                rebounds: "2",
                assists: "2",
                steals: "4", 
                blocks: "11", 
                slamDunks: "1", 
            }
        ],
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"], 
            players: [
                {
                    playerName: "Jeff Adrien", 
                    number: "4",
                    shoe: "18",
                    points: "10",
                    rebounds: "1",
                    assists: "1",
                    steals: "2", 
                    blocks: "7", 
                    slamDunks: "2", 
                },
                {
                    playerName: "Bismak Biyombo", 
                    number: "0",
                    shoe: "16",
                    points: "12",
                    rebounds: "4",
                    assists: "7",
                    steals: "7", 
                    blocks: "15", 
                    slamDunks: "10", 
                },
                {
                    playerName: "DeSagna Diop",
                    number: "2",
                    shoe: "14",
                    points: "24",
                    rebounds: "12",
                    assists: "12",
                    steals: "4", 
                    blocks: "5", 
                    slamDunks: "5", 
                },
                {
                    playerName: "Ben Gordon", 
                    number: "8",
                    shoe: "15",
                    points: "33",
                    rebounds: "3",
                    assists: "2",
                    steals: "1", 
                    blocks: "1", 
                    slamDunks: "0", 
                },
                {
                    playerName: "Brendan Haywood", 
                    number: "33",
                    shoe: "15",
                    points: "6",
                    rebounds: "12",
                    assists: "12",
                    steals: "22", 
                    blocks: "5", 
                    slamDunks: "12", 
                },
            ],
        },
    }
    return gameDetails;
}


function homeTeamName (){
    let object = gameObject();
    return object["home"]["teamName"];
}

// function numPointsScored(){
//     let object = gameObject();
//     console.log("Home Team");
//      for (let i = 0; i < object.home.players.length; i++){
//         const player = object.home.players[i];
//         const playerName = player.playerName;
//         const points = player.points; 
//         console.log(`Points for ${playerName}: ${points}`)
//      }
//      console.log("Away team");
//      for (let i = 0; i < object.away.players.length; i++){
//         const player = object.away.players[i];
//         const playerName = player.playerName;
//         const points = player.points; 
//         console.log(`Points for ${playerName}: ${points}`)
//      }
// }

function numPointsScored(playersName){
    const object = gameObject();
    for (let i = 0; i < object.home.players.length; i++){
        if(object.home.players[i].playerName === playersName){
            const homePlayersPoint = object.home.players[i].points;
            return homePlayersPoint;
        }
    }
    for (let i = 0; i < object.away.players.length; i++){
        if(object.away.players[i].playerName === playersName){
            const awayPlayersPoint = object.away.players[i].points;
            return awayPlayersPoint;
        }
    }
}

function shoeSize(playersName){
    const object = gameObject();
    for (let i = 0; i < object.home.players.length; i++){
        if(object.home.players[i].playerName === playersName){
            const homePlayersShoe = object.home.players[i].shoe;
            return homePlayersShoe;
        }
    }
    for (let i = 0; i < object.away.players.length; i++){
        if(object.away.players[i].playerName === playersName){
            const awayPlayersShoe = object.away.players[i].shoe;
            return awayPlayersShoe;
        }
    }
}

// function teamColors(){
//     let object = gameObject();
//         const homeTeam = object.home.teamName;
//         const homeColor = object.home.colors;
//         console.log(`Team color for ${homeTeam}: ${homeColor}`)
//         const awayTeam = object.away.teamName;
//         const awayColor = object.away.colors;
//         console.log(`Team color for ${awayTeam}: ${awayColor}`)
// }
function teamColors(inputTeamName){
    let object = gameObject();
    if (object.home.teamName === inputTeamName){
        const homeColor = object.home.colors;   
        return homeColor;    
    } else if (object.away.teamName === inputTeamName) {
        const awayColor = object.away.colors;   
        return awayColor; 
    } else {
        return null;
    }   
}

function teamNames(){
    let object = gameObject();
    const teamNames = [object.home.teamName, object.away.teamName];
    return teamNames;
}
function playerNumbers(inputTeamName){
    let object = gameObject();
    const playersNumbers = [];

    if (object.home.teamName === inputTeamName){
        const homePlayers = object.home.players;
        for ( let i = 0; i < homePlayers.length; i++){
            playersNumbers.push(homePlayers[i].number);
        }
        return playersNumbers;
    }  else if (object.away.teamName === inputTeamName) {
        const awayPlayers = object.away.players;
        for ( let i = 0; i < awayPlayers.length; i++){
            playersNumbers.push(awayPlayers[i].number);
        }
        return playersNumbers; 
    } else {
        return null;
    }   
}
function playerStats(playersName){
    const object = gameObject();
    for (let i = 0; i < object.home.players.length; i++){
        if(object.home.players[i].playerName === playersName){
            const homePlayersStats = object.home.players[i];
            delete homePlayersStats.playerName;
            return homePlayersStats;
        }
    }
    for (let i = 0; i < object.away.players.length; i++){
        if(object.away.players[i].playerName === playersName){
            const awayPlayersStats = object.away.players[i];
            delete awayPlayersStats.playerName;
            return awayPlayersStats;
        }
    }
}

function bigShoeRebounds(){
    const object = gameObject();
    let largestShoe = 0;
    let largestShoePlayer = null;
//home
    for (let i = 0; i < object.home.players.length; i++){
    const player = object.home.players[i];
    const playersShoeSize = parseInt(player.shoe);
        if(playersShoeSize >= largestShoe){
            largestShoe = playersShoeSize;
            largestShoePlayer = player;
        }
    }
//away
for (let i = 0; i < object.away.players.length; i++){
    const player = object.away.players[i];
    const playersShoeSize = parseInt(player.shoe);
        if(playersShoeSize >= largestShoe){
            largestShoe = playersShoeSize;
            largestShoePlayer = player;
        }
    }
let largestShoePlayersRebounds = largestShoePlayer.rebounds;
return largestShoePlayersRebounds;
}

function mostPointsScored(){
    const object = gameObject();
    let mostPointScored = 0;
    let mostPointScoredPlayer = null;
//home
    for (let i = 0; i < object.home.players.length; i++){
    const player = object.home.players[i];
    const playersPoints = parseInt(player.points);
        if(playersPoints >= mostPointScored){
            mostPointScored = playersPoints;
            mostPointScoredPlayer = player;
        }
    }
//away
    for (let i = 0; i < object.away.players.length; i++){
        const player = object.away.players[i];
        const playersPoints = parseInt(player.points);
            if(playersPoints >= mostPointScored){
                mostPointScored = playersPoints;
                mostPointScoredPlayer = player;
            }
        }
return mostPointScoredPlayer;
}

function winningTeam(){
    const object = gameObject();
    let homePoints = 0;
    let awayPoints = 0; 
//home
for (let i = 0; i < object.home.players.length; i++){
    const homePlayer = object.home.players[i];
    const homePlayersPoints = parseInt(homePlayer.points);
    homePoints += homePlayersPoints;
}

//away
for (let i = 0; i < object.away.players.length; i++){
    const awayPlayer = object.away.players[i];
    const awayPlayersPoints = parseInt(awayPlayer.points);
    awayPoints += awayPlayersPoints;
}

if (homePoints > awayPoints){
    return object.home;
}else{
    return object.away;
}
}

function playerWithLongestName(){
    const object = gameObject();
    longestNamePlayer = null;
    longestNameLength = 0;
//home   
for (let i = 0; i < object.home.players.length; i++){
    const player = object.home.players[i];
    const playersName = player.playerName;
    const playersNameLength = parseInt(playersName.length);
        if(playersNameLength >= longestNameLength){
            longestNameLength = playersNameLength;
            longestNamePlayer = player;
        }
    }   
//away   
for (let i = 0; i < object.away.players.length; i++){
    const player = object.away.players[i];
    const playersName = player.playerName;
    const playersNameLength = parseInt(playersName.length);
        if(playersNameLength >= longestNameLength){
            longestNameLength = playersNameLength;
            longestNamePlayer = player;
        }
    }
return longestNamePlayer;
}

function doesLongNameStealATon(){
    const object = gameObject();
    const longestName = playerWithLongestName();
    const longestNamePlayerSteals = longestName.steals;
    let doesLongNameSteal = null; 
//home  
for (let i = 0; i < object.home.players.length; i++){
    const player = object.home.players[i];
    const playersSteals = player.steals;
    if(playersSteals > longestNamePlayerSteals){
        doesLongNameSteal = false;
    }else{
        doesLongNameSteal = true; 
    }
}
//away  
for (let i = 0; i < object.away.players.length; i++){
    const player = object.away.players[i];
    const playersSteals = player.steals;
    if(playersSteals > longestNamePlayerSteals){
        doesLongNameSteal = false;
    }else{
        doesLongNameSteal = true; 
    }
return doesLongNameSteal;
}
}