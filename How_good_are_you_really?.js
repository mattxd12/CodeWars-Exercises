There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You got an array with your colleges' points. Now calculate the average to your points!

Return True if you're better, else False!

Note:

Your points are not included in the array of your classes points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
var sum = classPoints.reduce(function(a, b) { return a + b; }, 0);

  if ((sum+yourPoints)/(classPoints.length + 1) > yourPoints){
    return false;
    }else{
    return true;
    }
    };

43 Passed
0 Failed
0 Errors
Process took 216ms to complete
