const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
}

if(toggle){
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        localStorage.setItem("theme",
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
        localStorage.setItem("showTime", selectedTime);
    });
});

const seats = document.querySelectorAll(".seat:not(.booked)");
const totalDisplay = document.getElementById("total");
let price = 200;

seats.forEach(seat => {
    seat.addEventListener("click", () => {
        seat.classList.toggle("selected");
        let count = document.querySelectorAll(".seat.selected").length;
        let total = count * price;
        if(totalDisplay) totalDisplay.textContent = total;
        localStorage.setItem("seatCount", count);
        localStorage.setItem("totalPrice", total);
    });
});

if(document.getElementById("summaryTime")){
    document.getElementById("summaryTime").textContent =
        localStorage.getItem("showTime");
    document.getElementById("summarySeats").textContent =
        localStorage.getItem("seatCount");
    document.getElementById("summaryTotal").textContent =
        localStorage.getItem("totalPrice");
}

if(document.getElementById("bookingId")){
    document.getElementById("bookingId").textContent =
        "CW" + Math.floor(Math.random()*100000);
}
