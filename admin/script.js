function buatLink(){

    let daftar = document.getElementById("daftarNama").value.trim().split("\n");

    let hasil = "";

    daftar.forEach(function(nama){

        nama = nama.trim();

        if(nama !== ""){

            nama = nama
                .toLowerCase()
                .replace(/\b\w/g, huruf => huruf.toUpperCase());

            let urlNama = encodeURIComponent(nama);

            let link = "https://linniel.github.io/herinitawedding.github.io/?to=" + urlNama;

            let pesan =
`Assalamu’alaikum Warahmatullahi Wabarakatuh
Shalom
Salam Sejahtera
Om Swastiastu
Namo Buddhaya
Salam Kebajikan 🙏

Dengan hormat, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.

Untuk informasi lengkap mengenai waktu dan lokasi acara, silakan membuka undangan digital melalui link berikut:

${link}

Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.

Yang Berbahagia  
Oby & Esti`;

            hasil += `
<div class="message-box">

<div class="nama-label">Tamu: ${nama}</div>

<div>${pesan}</div>

<button class="copy-btn" onclick='copyPesan(${JSON.stringify(pesan)})'>
Copy Pesan
</button>

</div>
`;

        }

    });

    document.getElementById("hasil").innerHTML = hasil;

}

function copyPesan(text){

    navigator.clipboard.writeText(text);

    alert("Pesan untuk tamu berhasil disalin");

}