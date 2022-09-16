function timeToWalk(steps, footprint, speed) {
    let studentMetersRest = 500;
    let distanceInMeters = steps * footprint;
    let speedInMetersInSec = speed * 1000 / (60 * 60);
    let time = distanceInMeters / speedInMetersInSec;
    let timeInMin = Math.floor(time / 60);
    let timeInSec = (time - (timeInMin * 60)).toFixed(0);
    let timeInH = Math.floor(time / 3600);
    let studentRestInMin = Math.floor(distanceInMeters / studentMetersRest);
    timeInMin += studentRestInMin;
    timeInH += Math.floor(timeInMin / 60);
    timeInMin = timeInMin % 60;
    
    formattedH = timeInH < 10 ? `0${timeInH}` : `${timeInH}`;
    formattedMin = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
    formattedSec = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;
    
    console.log(`${formattedH}:${formattedMin}:${formattedSec}`)
}

timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)