document.body.querySelector(".low-title-right-items-container-activity-container").addEventListener('click',(e)=>{
    console.log("Я тут")
    load_index();
    e.preventDefault();
})
document.body.querySelector(".low-title-right-items-container-map-container").addEventListener('click',(e)=>{
    console.log("Я тут")
    load_location();
    e.preventDefault();

})
document.body.querySelector(".low-title-right-items-container-time-container").addEventListener('click',(e)=>{
    console.log("Я тут")
    load_time();
    e.preventDefault();
})