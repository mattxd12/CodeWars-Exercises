Directions Reduction

Once upon a time, on a way through the old wild west,…

plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

plan = ["WEST"]
Other examples: In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away. What a waste of time! Better to do nothing. The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure). In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task

You have to write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South. The Clojure version returns nil when the path is reduced to nothing.

function dirReduc(arr){
  var i = 0;
  while(i < arr.length) {
    if ((arr[i] === "SOUTH" && arr[i+1] === "NORTH") || (arr[i] === "NORTH" && arr[i+1] === "SOUTH") ||
        (arr[i] === "WEST" && arr[i+1] === "EAST") || (arr[i] === "EAST" && arr[i+1] === "WEST")) {
        arr.splice(i, 2);
        i--;
    } else {
        i++;
    }
  }
  return arr;
};

Time: 220ms Passed: 11
