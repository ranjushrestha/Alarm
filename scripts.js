function checkAlarm(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const alarmSound = document.getElementById('alarmSound');
    const stopButton = document.getElementById('stopButton');


    if (hours === 22 && minutes === 39) {
       
        alarmSound.play();
    alert("Time to wake up!")
    document.getElementById('message').textContent = "Alarm triggered! Time to wake up!";
    stopButton.style.display = "block";
}else {
    document.getElementById('message').textContent = ""
}

}

document.getElementById('stopButton').addEventListener('click', function() {
    const  alarmSound = document.getElementById("alarmSound");
    alarmSound.pause();
    alarmSound.currentTime = 0;
    this.style.display = "none";
});


setInterval(checkAlarm, 60000)

checkAlarm();

