let href=window.location.href
function get_content() {
    if (href.includes("page=location"))
        load_location(false)
    else if (href.includes("page=timer")) {
        load_time(false)
    } else {
        load_index(false)
    }
}
get_content()