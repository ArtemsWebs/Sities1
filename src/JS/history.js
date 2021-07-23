window.addEventListener('popstate', function(e){
    if(e.state.page==="location" && e.state.page!=undefined){
        load_location(false)
    }
    else if(e.state.page==="index" && e.state.page!=undefined){
        load_index(false )
    }
    else {
        load_time(false)
    }
}, false);