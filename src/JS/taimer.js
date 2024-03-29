
function load_time(new_state=true){
    let info=null;
    axios.get('https://tttdd.github.io/Sities1/src/timer.html')
        .then((response)=> {
            // handle success
            info= response.data
            let new_main= document.createElement("div")
            new_main.innerHTML=info
            document.querySelector(".main-content").remove()
            document.body.appendChild(new_main.querySelector(".main-content"))
            let link=document.querySelector("#index")
            link.setAttribute("href","src/css/timer-style.css")
            get_new_active_time_class()
            session_time()
            if (new_state && !window.location.href.includes("page=timer"))
                window.history.pushState({page: "timer"},"timer", "?page=timer")

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}
function get_new_active_time_class(){
    document.querySelector(".low-title-right-items-container-map-container").classList.remove("active")
    document.querySelector(".low-title-right-items-container-activity-container").classList.remove("active")
    document.querySelector(".low-title-right-items-container-time-container").classList.add("active")
}