//  button controls
const start = document.querySelector('button.start')
const stop = document.querySelector('button.stop')
const lap = document.querySelector('button.lap')
const reset = document.querySelector('button.reset')

// DOM elements to update
const lapList = document.querySelector('#lapList')
const stopwatchTime = document.querySelector('#stopwatchTime')


// constants that shouldn't change
const laps = []
const intervalRate = 10
// update the stopwatch every 10 milliseconds

// values that will change pretty often
let intervalId = null
let rawTime = 0


// turns the time into a human readable format
function formatTime (raw) {
  let seconds = Math.floor(raw / 1000)
  let fractionalSeconds = (raw % 1000) / 1000
  let minutes = Math.floor(seconds / 60)
  seconds = seconds - (60 * minutes) + fractionalSeconds

  return `${zeroPad(minutes)}:${zeroPad(seconds.toFixed(2))}`
}

// start the stopwatch by creating a new interval
// we'll store interval id so we can manipulate the interval later
function stopwatchStart (event){
event.preventDefault()
console.log('started')

// every 10 milliseconds, update the stopwatch
intervalId = setInterval(stopwatchUpdate, intervalRate)
}

// adds the interval to the stopwatch time since the last "tick" of the watch
// then updates the DOM with the new stopwatch time
function stopwatchUpdate () {
  rawTime += intervalRate
  stopwatchTime.innerHTML = formatTime(rawTime)
}

// stops the stopwatch by clearing the interval
function stopwatchStop (event) {
  event.preventDefault()
  console.log('stopped!')

  clearInterval(intervalId)
}

// adds a leading zero because humans like them
function zeroPad (value) {
  let pad = value < 10 ? '0' : ''
  return `${pad}${value}`
}

document.addEventListener("DOMContentLoaded", function () {
  console.log('ready!')

  start.addEventListener("click", stopwatchStart)
  stop.addEventListener("click", stopwatchStop)
  lap.addEventListener("click", clickLap)
  reset.addEventListener("click", clickReset)

})

//   a lap button that records the current stopwatch time into an Array.
// Whenever a new lap is recorded, update the DOM with a list showing all the recorded
// lap times.

function clickLap(event){
  event.preventDefault()
  console.log("lap!")
}

function lapStart (){
  if (event != null) {
    event.preventDefault()
}
  var lapClicked = stopwatchUpdate(intervalId)
  laps.push(lapClicked)
}

function recordsLap () {
  var lapsArray = laps
  var text = lapsArray[i]
  lapList.innerHTML = text
}

// a reset button that immediately resets the stopwatch time to _0:00.00_ and clears all
 // the recorded lap times.

 function clickReset(event){
   event.preventDefault()
   console.log("reset!")
 }
