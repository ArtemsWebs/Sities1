
function load_index(new_state=true){
    let info=null;
    console.log("индекс")
    axios.get('https://tttdd.github.io/Sities1/index.html')
        .then((response)=> {
            // handle success
            let link=document.querySelector("#index")
            info= response.data
            link.setAttribute("href","src/css/index-style.css")
            let new_main= document.createElement("div")
            new_main.innerHTML=info
            document.querySelector(".main-content").remove()
            document.body.appendChild(new_main.querySelector(".main-content"))
            get_new_active_index_class()
            if (new_state && !window.location.href.includes("page=index"))
                window.history.pushState({page: "index"},"index", "?page=index")
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}
function get_new_active_index_class(){
    document.querySelector(".low-title-right-items-container-map-container").classList.remove("active")
    document.querySelector(".low-title-right-items-container-activity-container").classList.add("active")
    document.querySelector(".low-title-right-items-container-time-container").classList.remove("active")
}