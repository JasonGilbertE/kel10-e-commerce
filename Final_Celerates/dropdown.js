document.addEventListener("DOMContentLoaded", function() {
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    // Toggle dropdown saat tombol diklik
    dropbtn.addEventListener("click", function(event) {
        event.stopPropagation();
        dropdownContent.classList.toggle("show"); 
    });

    // Tutup dropdown saat klik di luar area dropdown
    document.addEventListener("click", function(event) {
        if (!event.target.closest(".dropdown")) {
            dropdownContent.classList.remove("show"); 
        }
    });
});