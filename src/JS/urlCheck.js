let href=window.location.href
function get_content() {
    if (href.includes("page=location"))
        document.addEventListener('DOMContentLoaded', function(){load_location(false)})
    else if (href.includes("page=timer"))
        document.addEventListener('DOMContentLoaded', function(){load_time(false)})
     else
        document.addEventListener('DOMContentLoaded', function(){load_index(false)})
}
get_content()