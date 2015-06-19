var queue = [];

exports.addToQueue = function(player)
{
  queue.push(player);
  console.log("ADDED PLAYER: " + player.username + " TO QUEUE, Size:" + queue.length);
}

exports.removeFromQueue = function(player)
{
  removePlayerFromQueue(player.username);
  console.log("Remove Player Queue Size: " + queue.length);
}

//we will call this periodically to check if there are enough players
//if we have enough players it will return 2 of the player sessions for a game
exports.checkQueueForGame = function()
{

}


function removePlayerFromQueue(username)
{
  for (var i =0; i < queue.length; i++)
   if (queue[i].username === username) {
        queue.splice(i,1);
      break;
   }
}
