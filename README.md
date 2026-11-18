# KOMSI NEWS
Portal berita dan dokumentasi UKM Komunitas Seni UIN KHAS Jember.

## Struktur
- `index.html`: beranda, pencarian, dan filter kategori.
- `detail.html`: halaman detail artikel.
- `app.js`: daftar berita.
- `berita.js`: detail artikel dan berbagi WhatsApp.
- `style.css`: desain responsif.
- `data/berita.json`: sumber data artikel.

## Menambahkan berita
Tambahkan objek ke array `data/berita.json` dengan format:
```json
[{"id":"berita-001","judul":"Judul berita","kategori":"Kegiatan","penulis":"Redaksi KOMSI","tanggal":"2026-11-18","ringkasan":"Ringkasan singkat.","gambar":"https://domain.com/foto.jpg","isi":"Paragraf pertama.\n\nParagraf kedua."}]
```
Gunakan ID unik, tanggal ISO `YYYY-MM-DD`, dan URL gambar publik HTTPS.

## Menjalankan lokal
Jalankan `python -m http.server 8000`, lalu buka `http://localhost:8000`. Hindari membuka HTML lewat `file://` karena halaman menggunakan fetch.

## Deploy
Aktifkan GitHub Pages dari branch/folder yang berisi `index.html`.

## Batasan versi saat ini
Ini adalah portal publik statis yang membaca `data/berita.json`. Belum ada backend, database bersama, login admin, unggah gambar, atau editor artikel. Jangan menaruh password/token/API key rahasia di JavaScript browser. Untuk fitur admin multi-perangkat dibutuhkan backend/API dan penyimpanan terpusat; localStorage bukan database bersama.
