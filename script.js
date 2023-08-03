var hour = document.getElementById('hour')
var minute = document.getElementById('minute')
var second = document.getElementById('second')

function updateTime() {
    var date = new Date();
    hour = date.getHours()
    minute = date.getMinutes()
    second = date.getSeconds()

    hour = hour <= 9 ? '0' +  hour : hour
    minute = minute <= 9 ? '0' +  minute : minute
    second = second <= 9 ? '0' +  second : second

    document.getElementById('hour').innerHTML = hour
    document.getElementById('minute').innerHTML = minute
    document.getElementById('second').innerHTML = second
}

setInterval(updateTime, 1000);
let call =  setInterval(updateTime, 1000)
clearInterval(call)