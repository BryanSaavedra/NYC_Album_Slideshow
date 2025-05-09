let slideIndex = 0;
let slideTimeout; //stores the timeout ID

function showSlides() 
{
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    
    slides[slideIndex - 1].style.display = "block";

    clearTimeout(slideTimeout); //Clears exiisting timeout function before initializing next one
    //this should stop the dupplication of timeout function
    slideTimeout = setTimeout(showSlides, 5000); // Change image every 7 seconds
}

function changeSlide(n) 
{
    slideIndex += n - 1;
    showSlides();
}

document.addEventListener("DOMContentLoaded", showSlides);

const startDate = new Date("2023-05-26T00:00:00") 
const counterElement = document.getElementById("ymd-counter");

function getYMDifference(from, to)
{
    let years = to.getFullYear() - from.getFullYear();
    let months = to.getMonth() - from.getMonth();
    let days = to.getDate() - from.getDate();

    if (days < 0)
    {
        months -= 1;
        const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0)
    {
        years -= 1;
        months += 12;
    }

    return {years, months, days };
}

function updateCounter()
{
    const now = new Date();
    const { years, months, days } = getYMDifference(startDate, now);
    counterElement.textContent = `${years} years, ${months} months, ${days} days`;
}

updateCounter();
setInterval(updateCounter, 1000);