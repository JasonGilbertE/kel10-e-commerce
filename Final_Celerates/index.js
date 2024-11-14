let countdownDate = new Date().getTime() + 60 * 60 * 1000; // 60 menit

let countdownTimer = setInterval(function () {
    let now = new Date().getTime();
    let timeRemaining = countdownDate - now;

    if (timeRemaining > 0) {
        let hours = Math.floor(timeRemaining / (1000 * 60 * 60));
        let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
        
    } else {
        clearInterval(countdownTimer);
        document.getElementById("countdown").textContent = "Flash Sale Selesai!";
    }
}, 1000);

    document.addEventListener("DOMContentLoaded", function() {
        const dropbtn = document.querySelector(".dropbtn");
        const dropdownContent = document.querySelector(".dropdown-content");

        // Toggle dropdown saat tombol diklik
        dropbtn.addEventListener("click", function(event) {
            dropdownContent.style.display = 
                dropdownContent.style.display === "block" ? "none" : "block";
        });

        // Tutup dropdown saat klik di luar area dropdown
        document.addEventListener("click", function(event) {
            if (!event.target.closest(".dropdown")) {
                dropdownContent.style.display = "none";
            }
        });
    });