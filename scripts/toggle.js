document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.querySelector('.js-toggle');
    var addIcon = document.querySelector(".icon--add");
    var checkIcon = document.querySelector(".icon--check");

    checkIcon.style.display = "none";

    toggleButton.addEventListener('click', function () {
        if (addIcon.style.display !== "none") {
            addIcon.style.display = "none";
            checkIcon.style.display = "inline-block";
        } else {
            addIcon.style.display = "inline-block";
            checkIcon.style.display = "none";
        }
    });
});
