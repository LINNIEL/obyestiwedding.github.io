/* =========================================
   GUEST NAME
========================================= */

function getGuestName() {

    const params = new URLSearchParams(
        window.location.search
    );


    const guest = params.get("to");


    if (!guest) {

        return "Tamu Undangan";

    }


    return guest;

}


/* =========================================
   DISPLAY GUEST
========================================= */

function displayGuestName() {

    const guestName =
        document.getElementById("guestName");


    if (!guestName) {
        return;
    }


    const name = getGuestName();


    guestName.textContent = name;

}


displayGuestName();