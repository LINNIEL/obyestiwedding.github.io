function addToGoogleCalendar() {

    const title = "Acara Pernikahan";
    const description = "Pernikahan Heri & Nita";
    const location = "https://maps.app.goo.gl/NnRzAmKxWahSseDz9";

    // 18 September 2026
    // 17.00 - 23.59 WITA
    const start = "20260918T190000";
    const end = "20260918T235900";

    const googleCalendarURL =
        "https://calendar.google.com/calendar/render?action=TEMPLATE" +
        "&text=" + encodeURIComponent(title) +
        "&dates=" + start + "/" + end +
        "&details=" + encodeURIComponent(description) +
        "&location=" + encodeURIComponent(location);

    window.open(googleCalendarURL, "_blank");
}