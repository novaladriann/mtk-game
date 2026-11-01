# Math Tower Defense: Galaxy Guardians

Versi revisi dari paket yang diberikan. Game dapat dijalankan melalui server lokal. Kontrol mouse/keyboard tidak memerlukan library eksternal; kontrol gestur webcam memuat MediaPipe Hands dan Camera Utils dari CDN sehingga internet diperlukan untuk gestur. Font memakai font sistem.

## Privasi kamera
Video kamera diproses di perangkat melalui browser. Game tidak merekam, menyimpan, atau mengirim video ke mana pun. Kamera opsional dan dapat dimatikan kapan saja; game tetap berjalan dengan mouse dan keyboard. Browser meminta izin kamera hanya setelah tombol **Aktifkan kamera** ditekan.

## Menjalankan di Windows
1. Ekstrak ZIP ke folder biasa, misalnya `C:\\Games\\math-tower-defense-galaxy-guardians`.
2. Pasang Python 3 jika belum ada.
3. Buka folder tersebut di File Explorer, klik bilah alamat, ketik `cmd`, lalu Enter.
4. Jalankan `python -m http.server 8000`.
5. Buka Chrome/Edge ke `http://localhost:8000`.
6. Tekan `Ctrl+C` di jendela Command Prompt untuk menghentikan server.

Browser mensyaratkan `localhost` atau HTTPS untuk akses webcam. Mouse/keyboard tetap dapat digunakan tanpa internet; untuk pelacakan gestur, komputer harus terhubung ke internet agar library dan model MediaPipe dimuat dari CDN.

## Webcam dan pelacakan gestur
Runtime MediaPipe Hands dan Camera Utils dimuat dari CDN jsDelivr dengan versi yang dikunci. Internet diperlukan saat mengaktifkan kamera karena runtime dan berkas model dimuat secara daring. Tekan **Aktifkan kamera**, izinkan akses kamera, dan tunggu status **TANGAN TERDETEKSI**. Jika hanya muncul pratinjau, periksa koneksi internet/CDN lalu muat ulang halaman. Gunakan Chrome atau Edge melalui `http://localhost:8000` atau HTTPS. Video diproses di browser pada perangkat; game tidak merekam atau menyimpan video.

## Kontrol
- Klik jawaban untuk menjawab; tombol A/B/C/D juga memilih opsi.
- Pilih menara di Bengkel Menara yang berada di sisi kiri arena, lalu klik area kosong di luar jalur alien. Area di bawah panel bengkel tidak dapat digunakan untuk membangun.
- Menara yang tersedia: Laser (1 energi), Pemerlambat/Freeze (2 energi), dan Bom (3 energi). Menara yang tidak terjangkau energi akan tampak redup/terkunci.
- Tombol `1`, `2`, `3` memilih Laser, Pemerlambat, atau Bom. Tombol **Batal** membatalkan pilihan menara.
- Klik **Jeda** untuk menjeda dan **Layar penuh** untuk fullscreen.
- Mouse/keyboard tetap aktif meskipun kamera gagal atau dimatikan.

## Fitur yang diperbarui
- Font menggunakan font sistem; MediaPipe Hands dan Camera Utils dimuat dari CDN untuk mengaktifkan webcam saat internet tersedia.
- Layout arena responsif; Bengkel Menara tampil sebagai panel vertikal semi-transparan di ruang kosong sisi kiri dalam bingkai peta, dan area panel diblokir dari penempatan menara.
- Pesan privasi kamera, saran kalibrasi jarak 50–100 cm, indikator status kamera, dan fallback input.
- Kontrol kepekaan kursor dan waktu tahan pilih saat runtime hand tracking lokal tersedia.
- Audio memakai compressor, volume awal lebih rendah, pengaturan intensitas Normal/Lembut, slider volume terpisah, dan mute.
- Game berhenti musik saat tab tersembunyi; game dijeda otomatis saat tab tidak aktif.
- Rekap guru menampilkan akurasi per operasi yang tercatat, waktu rata-rata, operasi dengan kesalahan terbanyak, saran latihan, dan tombol salin.
- Jawaban salah memasukkan jenis operasi ke antrean pengulangan; kesulitan soal menyesuaikan streak dalam batas level dasar yang tersedia.
- Game loop menggunakan delta time dan membersihkan animasi saat reset.

## Mengubah keseimbangan permainan
Nilai utama dikumpulkan di bagian atas `js/game.js`:
- `BALANCE`: HP, kecepatan, dan jumlah alien per gelombang menurut level.
- `TOWERS`: harga energi, jarak, damage, cooldown, dan suara menara.
- `SHOTS_BY_DIFFICULTY`: amunisi per menara menurut tingkat soal.
- `QuestionBank.levels` di `js/questions.js`: waktu soal dan kecepatan alien per level.
Ubah angka di tabel tersebut lalu muat ulang halaman untuk menguji keseimbangan. Simpan salinan file sebelum mengubah nilai.

## Berkas utama
- `index.html` — menu, arena, pengaturan, privasi, dan layar hasil.
- `css/style.css` — tema dan layout responsif.
- `js/game.js` — loop, gelombang, menara, soal, hasil dan rekap.
- `js/questions.js` — generator soal dan klasifikasi operasi.
- `js/handtracking.js` — integrasi pelacakan tangan menggunakan runtime MediaPipe dari CDN.
- `js/audio.js` — musik dan efek sintetis.
- `js/main.js` — kontrol UI, keyboard, jeda otomatis, dan pengaturan.

## Pemeriksaan lokal
Dari folder proyek jalankan:
```bat
node --check js\\questions.js
node --check js\\audio.js
node --check js\\game.js
node --check js\\handtracking.js
node --check js\\main.js
```
Pemeriksaan sintaks bukan pengganti pengujian visual/browser. Uji webcam dua tangan, performa 30 FPS, layout proyektor, dan siklus restart berulang pada perangkat target sebelum digunakan di kelas.


## Perbaikan terbaru
- Slot lingkaran bertanda plus di arena dihapus. Menara kini ditempatkan dengan klik pada area kosong di luar jalur alien; lokasi yang terlalu dekat dengan jalur, tepi peta, alien, atau menara lain ditolak.
- Ikon menara di arena diperbesar dan panel Bengkel Menara dipindahkan ke bawah peta, sehingga pemilihan pertahanan lebih mudah dijangkau dan dibaca.
- Untuk kontrol webcam: gunakan Chrome/Edge melalui `http://localhost:8000` atau HTTPS, tekan **Aktifkan kamera**, lalu izinkan akses kamera. Jika browser menolak izin, kamera tidak tersedia, atau runtime/model MediaPipe gagal dimuat dari CDN, pesan status akan menjelaskan masalah dan mouse/keyboard tetap dapat digunakan.

