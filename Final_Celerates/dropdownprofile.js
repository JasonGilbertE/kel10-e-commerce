document.addEventListener("DOMContentLoaded", function () {
    const profileIcon = document.querySelector(".profile-icon");
    const profilDropdownContent = document.querySelector(".profil-dropdown-content");

    // Tampilkan dropdown saat ikon profil diklik
    profileIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Mencegah event bubbling
        profilDropdownContent.classList.toggle("show");
    });

    // Tutup dropdown saat klik di luar area dropdown
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".profile-icon") && profilDropdownContent) {
            profilDropdownContent.classList.remove("show");
        }
    });
});
