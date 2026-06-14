/* ========================
   KOMSI NEWS PRO
   HALAMAN DETAIL BERITA
======================== */


const artikel =
JSON.parse(
localStorage.getItem("artikel")
);


/* Jika artikel tidak ada */
if(!artikel){

window.location.href =
"index.html";

}


document.getElementById("judul")
.innerHTML =
artikel.judul;


document.getElementById("kategori")
.innerHTML =
artikel.kategori;


document.getElementById("penulis")
.innerHTML =
artikel.penulis;


document.getElementById("tanggal")
.innerHTML =
artikel.tanggal;


document.getElementById("gambar")
.src =
artikel.gambar;


document.getElementById("isi")
.innerHTML =
`
<p>${artikel.isi}</p>

<p>
KOMSI NEWS terus menjadi media informasi dan dokumentasi kegiatan UKM Komunitas Seni UIN KHAS Jember.
</p>
`;




/* ========================
   SHARE WHATSAPP
======================== */


function shareWA(){


let pesan =
`
📰 ${artikel.judul}

✍️ ${artikel.penulis}

${artikel.isi}

Baca berita terbaru hanya di KOMSI NEWS
`;


let link =
"https://wa.me/?text=" +
encodeURIComponent(pesan);


window.open(link,"_blank");


}
