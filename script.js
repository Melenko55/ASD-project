document.addEventListener("DOMContentLoaded", () => {
    //bg-change func
    const wrapper = document.querySelector(".inner-container-img-block"),
    bgArray = wrapper.querySelectorAll(".bg-image"),
    page = document.querySelector(".page");

    const clearSelected = () => {
        bgArray.forEach(elem => elem.classList.remove("selected"));
    }

    wrapper.addEventListener('click', (e) => {
        if (e.target.tagName == "IMG") {
            clearSelected();
            e.target.parentElement.classList.add("selected");
            page.style.backgroundImage = `url("${e.target.src}")`;
        };
    });


    //timer
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


    const date = document.querySelector(".date"),
    day = date.querySelector(".day"),
    month = date.querySelector(".month"),
    time = date.querySelector(".time");

    function formatDateCurrentTime(dataNow) {
        let hours = dataNow.getHours();
        let minutes = dataNow.getMinutes();
        let sec = dataNow.getSeconds();

        if (hours < 10) {
            hours = `0${hours}`;
        }
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        if (sec < 10) {
            sec = `0${sec}`;
        }


        return `${hours}:${minutes}:${sec}`;
    }

    const setDate = () => {
        const dataNow = new Date();
        day.innerHTML = `${daysInWeek[dataNow.getDay()]} ${dataNow.getDate()}`;
        month.innerHTML = `${monthNames[dataNow.getMonth()]}`;
        time.innerHTML = formatDateCurrentTime(dataNow);
    }

    const timeInterval = setInterval(setDate, 1000);


    //settings
    const settings =  document.querySelector(`[data-setting="setting"]`),
          window = document.querySelector(".window");
    
    settings.addEventListener('click', () => {
        window.classList.toggle("hide");
    });
})

