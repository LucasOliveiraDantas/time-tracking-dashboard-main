function timeDaily(){

    document.getElementById('time-work').innerHTML = "5hrs"
    document.getElementById('last-work').innerHTML = "7hrs"


    document.getElementById('time-play').innerHTML = "1hrs"
    document.getElementById('last-play').innerHTML = "2hrs"

    document.getElementById('time-study').innerHTML = "0hrs"
    document.getElementById('last-study').innerHTML = "1hr"

    document.getElementById('time-exerc').innerHTML = "1hr"
    document.getElementById('last-exerc').innerHTML = "1hr"

    document.getElementById('time-social').innerHTML = "1hr"
    document.getElementById('last-social').innerHTML = "3hrs"

    document.getElementById('time-self').innerHTML = "0hrs"
    document.getElementById('last-self').innerHTML = "1hr"

    document.getElementById('b-daily').classList.add('active')
    document.getElementById('b-weekly').classList.remove('active')
    document.getElementById('b-monthly').classList.remove('active')

}

function timeWeekly(){

    document.getElementById('time-work').innerHTML = "32hrs"
    document.getElementById('last-work').innerHTML = "36hrs"


    document.getElementById('time-play').innerHTML = "10hrs"
    document.getElementById('last-play').innerHTML = "8hrs"

    document.getElementById('time-study').innerHTML = "4hrs"
    document.getElementById('last-study').innerHTML = "7hrs"

    document.getElementById('time-exerc').innerHTML = "4hrs"
    document.getElementById('last-exerc').innerHTML = "5hrs"

    document.getElementById('time-social').innerHTML = "5hrs"
    document.getElementById('last-social').innerHTML = "10hrs"

    document.getElementById('time-self').innerHTML = "2hrs"
    document.getElementById('last-self').innerHTML = "2hrs"
    
    document.getElementById('b-daily').classList.remove('active')
    document.getElementById('b-weekly').classList.add('active')
    document.getElementById('b-monthly').classList.remove('active')
}

function timeMonth(){
    document.getElementById('time-work').innerHTML = "10hrs"
    document.getElementById('last-work').innerHTML = "128hrs"


    document.getElementById('time-play').innerHTML = "23hrs"
    document.getElementById('last-play').innerHTML = "29hrs"

    document.getElementById('time-study').innerHTML = "13hrs"
    document.getElementById('last-study').innerHTML = "19hrs"

    document.getElementById('time-exerc').innerHTML = "11hrs"
    document.getElementById('last-exerc').innerHTML = "18hrs"

    document.getElementById('time-social').innerHTML = "21hrs"
    document.getElementById('last-social').innerHTML = "23hrs"

    document.getElementById('time-self').innerHTML = "7hrs"
    document.getElementById('last-self').innerHTML = "11hrs"
    
    document.getElementById('b-daily').classList.remove('active')
    document.getElementById('b-weekly').classList.remove('active')
    document.getElementById('b-monthly').classList.add('active')
}






