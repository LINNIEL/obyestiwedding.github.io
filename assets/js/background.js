/* =========================================
   BACKGROUND SLIDESHOW
========================================= */

const backgroundImages = [

    "assets/bg/cover_2.jpg",
    "assets/bg/bg_2.jpg",
    "assets/bg/bg_3.jpg",
    "assets/bg/bg_4.jpg",
    "assets/bg/bg_5.jpg"

];


/* =========================================
   ELEMENTS
========================================= */

const backgroundLayers = [

    document.querySelector(
        ".background-layer-1"
    ),

    document.querySelector(
        ".background-layer-2"
    )

];


const backgroundWrapper =
    document.getElementById(
        "backgroundWrapper"
    );


const openInvitation =
    document.getElementById(
        "openInvitation"
    );


const cover =
    document.getElementById(
        "cover"
    );


/* =========================================
   VARIABLES
========================================= */

let currentImageIndex = 0;

let currentLayerIndex = 0;

let slideshowStarted = false;


/*
    Jeda antar foto

    4000 = 4 detik
*/

const changeInterval = 4000;


/* =========================================
   PRELOAD IMAGES
========================================= */

function preloadImages() {

    backgroundImages.forEach((image) => {

        const img = new Image();

        img.src = image;

    });

}


/* =========================================
   INITIAL BACKGROUND
========================================= */

function setInitialBackground() {

    const firstLayer =
        backgroundLayers[0];


    firstLayer.style.backgroundImage =
        `url("${backgroundImages[0]}")`;


    firstLayer.classList.add(
        "active"
    );

}


/* =========================================
   CHANGE BACKGROUND
========================================= */

function changeBackground() {

    /*
        Layer yang sedang tampil
    */

    const currentLayer =
        backgroundLayers[currentLayerIndex];


    /*
        Tentukan layer berikutnya

        Jika sekarang layer 0,
        berikutnya layer 1.

        Jika sekarang layer 1,
        berikutnya layer 0.
    */

    const nextLayerIndex =
        currentLayerIndex === 0
            ? 1
            : 0;


    const nextLayer =
        backgroundLayers[nextLayerIndex];


    /*
        Tentukan foto berikutnya
    */

    currentImageIndex++;


    if (
        currentImageIndex >=
        backgroundImages.length
    ) {

        currentImageIndex = 0;

    }


    const nextImage =
        backgroundImages[
            currentImageIndex
        ];


    /*
        Pasang foto berikutnya
    */

    nextLayer.style.backgroundImage =
        `url("${nextImage}")`;


    /*
        Pastikan layer berikutnya
        belum aktif
    */

    nextLayer.classList.remove(
        "active"
    );


    /*
        Mulai dengan blur
    */

    nextLayer.classList.add(
        "blur"
    );


    /*
        Beri kesempatan browser
        menerapkan kondisi awal
    */

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            /*
                Tampilkan foto berikutnya
            */

            nextLayer.classList.add(
                "active"
            );


            /*
                Hilangkan blur
            */

            nextLayer.classList.remove(
                "blur"
            );


            /*
                Sembunyikan foto sebelumnya
            */

            currentLayer.classList.remove(
                "active"
            );

        });

    });


    /*
        Layer berikutnya sekarang
        menjadi layer aktif
    */

    currentLayerIndex =
        nextLayerIndex;

}


/* =========================================
   START SLIDESHOW
========================================= */

function startBackgroundSlideshow() {

    /*
        Mencegah slideshow
        dimulai lebih dari satu kali
    */

    if (slideshowStarted) {

        return;

    }


    slideshowStarted = true;


    /*
        Tampilkan background slideshow
    */

    backgroundWrapper.classList.add(
        "active"
    );


    /*
        Tampilkan foto pertama
    */

    setInitialBackground();


    /*
        Mulai pergantian foto
    */

    setInterval(
        changeBackground,
        changeInterval
    );

}


/* =========================================
   OPEN INVITATION
========================================= */

openInvitation.addEventListener(
    "click",
    function () {

        /*
            =================================
            1. MULAI BACKGROUND SLIDESHOW
            =================================
        */

        startBackgroundSlideshow();


        /*
            =================================
            2. PUTAR BACKGROUND MUSIC
            =================================
        */

        playMusic();


        /*
            =================================
            3. HILANGKAN COVER
            =================================
        */

        cover.classList.add(
            "hide"
        );


        /*
            =================================
            4. KEMBALI KE AWAL UNDANGAN
            =================================
        */

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });


        /*
            =================================
            5. REFRESH AOS
            =================================
        */

        if (
            typeof AOS !== "undefined"
        ) {

            setTimeout(() => {

                AOS.refresh();

            }, 1000);

        }

    }
);


/* =========================================
   PRELOAD BACKGROUND
========================================= */

preloadImages();