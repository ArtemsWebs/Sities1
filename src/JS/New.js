document.body.querySelector(".low-title-right-items-container-activity-container").addEventListener('click',(e)=>{
    load_index();
    e.preventDefault();
})
document.body.querySelector(".low-title-right-items-container-map-container").addEventListener('click',(e)=>{
    load_location();
    e.preventDefault();

})
document.body.querySelector(".low-title-right-items-container-time-container").addEventListener('click',(e)=>{
    load_time();
    e.preventDefault();
})