function openTab(evt, tabName) {
    const tabContent = document.getElementsByClassName("tab-content");
    for(let i = 0; i<tabContent.length; i++){
        tabContent[i].style.display = "none";
        tabContent[i].classList.remove('active');
    }
    const tabButtons = document.getElementsByName("button");
    for(let i = 0; i<tabButtons.length; i++){
        tabButtons[i].classList.remove('active');
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add("active");
}
document.addEventListener('DOMContentLoaded', function(){
    document.getElementsByName(button).click();
});