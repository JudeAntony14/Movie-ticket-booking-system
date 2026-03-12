const toggle = document.getElementById("themeToggle");

if(sessionStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
}

if(toggle){
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        sessionStorage.setItem("theme",
            document.body.classList.contains("light-mode") ? "light" : "dark"
        );
    });
}

const times = document.querySelectorAll(".time");
let selectedTime = null;

times.forEach(time => {
    time.addEventListener("click", () => {
        times.forEach(t => t.classList.remove("selected"));
        time.classList.add("selected");
        selectedTime = time.textContent;
        sessionStorage.setItem("showTime", selectedTime);
    });
});

const seats = document.querySelectorAll(".seat:not(.booked)");
const totalDisplay = document.getElementById("total");
const seatInfo = document.getElementById("seatInfo");

if(seats.length){
seats.forEach(seat => {

seat.addEventListener("click", () => {

seat.classList.toggle("selected");

let selectedSeats = document.querySelectorAll(".seat.selected");

let total = 0;

let standard = 0;
let premium = 0;
let preferred = 0;

selectedSeats.forEach(s => {

if(s.classList.contains("standard")){
standard++;
total += 200;
}

if(s.classList.contains("premium")){
premium++;
total += 250;
}

if(s.classList.contains("preferred")){
preferred++;
total += 300;
}

});

if(totalDisplay){
totalDisplay.textContent = total;
}
if(seatInfo){
seatInfo.textContent =
"Standard: " + standard +
" | Premium: " + premium +
" | Preferred: " + preferred;
}
sessionStorage.setItem("seatCount", selectedSeats.length);
sessionStorage.setItem("totalPrice", total);

});
});
}

if(document.getElementById("summaryTime")){
    document.getElementById("summaryTime").textContent =
        sessionStorage.getItem("showTime");
    document.getElementById("summarySeats").textContent =
        sessionStorage.getItem("seatCount");
    document.getElementById("summaryTotal").textContent =
        sessionStorage.getItem("totalPrice");
}

if(document.getElementById("bookingId")){
    document.getElementById("bookingId").textContent =
        "CW" + Math.floor(Math.random()*100000);
}

function searchMovies(){

let input=document.getElementById("searchMovie").value.toLowerCase();

let movies=document.querySelectorAll(".movie-card");

movies.forEach(movie=>{

let title=movie.querySelector("h3").textContent.toLowerCase();

if(title.includes(input)){

movie.style.display="block";

}else{

movie.style.display="none";

}

});

}

function loginUser(){

let user=document.getElementById("username").value;

if(user.length>0){

sessionStorage.setItem("user",user);

window.location.href="index.html";

}else{

alert("Enter username");

}

}

const user=sessionStorage.getItem("user");

const loginLink=document.getElementById("loginLink");
const profileBox=document.getElementById("profileBox");
const userDisplay=document.getElementById("userDisplay");

if(user){

if(loginLink){
loginLink.style.display="none";
}

if(profileBox){
profileBox.style.display="block";
}

if(userDisplay){
userDisplay.textContent=user;
}

}

function logout(){
sessionStorage.removeItem("user");
location.reload();
}

const profileMenu=document.querySelector(".profile-menu");

if(profileBox){

profileBox.addEventListener("click",function(e){

e.stopPropagation();

if(profileMenu.style.display==="block"){
profileMenu.style.display="none";
}else{
profileMenu.style.display="block";
}

});

}

document.addEventListener("click",function(){

if(profileMenu){
profileMenu.style.display="none";
}

});