// Typing Animation
var typed = new Typed(".typing",{
    strings:["","Web Developer", "Python Programmer", "Engineering Student"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
// Aside
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++){
       const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
        removeBackSection();
        for(let j=0; j<totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                // allSection[j].classList.add("back-section");
                addBackSection(j)
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
        })
    }
    function removeBackSection(){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num){
        allSection[num].classList.add("back-section");
    }
function showSection(element)
{
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) { 
    for(let i=0; i<totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active"); 
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
} 
document.querySelector(".hire-me").addEventListener("click", function() 
{ 
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this); 
    updateNav(this); 
    removeBackSection();
    addBackSection(sectionIndex);
})
    
const navTogglerBtn = document.querySelector(".nav-toggler"), 
aside = document.querySelector(".aside"); 
navTogglerBtn.addEventListener("click", () => 
{ 
asideSectionTogglerBtn(); 
}) 
function asideSectionTogglerBtn() 
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.toggle("open");
    }

} 


document.querySelector('.no-service-btn').onclick =() => {
    console.log("Unselected");
    noServiceEnable.classList.remove('active');
}
window.addEventListener("scroll", function() {
    if(document.querySelector(".no-service").classList.contains("active"))
    {
        document.querySelector(".no-service").classList.remove("active")
    }
})       
noServiceEnable = document.querySelector('.no-service');
btns = document.getElementsByClassName("not-available");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            noServiceEnable.classList.toggle('active');
    });
}








// gear animation
// photos in media query
// transition in light to dark