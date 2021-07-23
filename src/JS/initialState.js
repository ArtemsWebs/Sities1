function get_first_state(){
    if(!window.location.href.includes("page=location") && !window.location.href.includes("page=time") && !window.location.href.includes("page=index"))
         window.history.pushState({page: "index"},"index", "?page=index")
}
get_first_state()