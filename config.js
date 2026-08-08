// ============================================================
// KONFIGURASI — edit file ini untuk mengganti kredensial & isi undangan
// ============================================================

// 1) KREDENSIAL SUPABASE
//    Ambil dari: Supabase Dashboard > Project Settings > API
const SUPABASE_URL = "__SUPABASE_URL__";           // diisi otomatis oleh GitHub Actions (secret SUPABASE_URL)
const SUPABASE_ANON_KEY = "__SUPABASE_ANON_KEY__"; // diisi otomatis oleh GitHub Actions (secret SUPABASE_ANON_KEY)

// 1b) URL UNDANGAN DI GITHUB PAGES
//    Ganti USERNAME-GITHUB dengan username GitHub kamu.
//    Halaman undangan akan tampil di: https://USERNAME-GITHUB.github.io/invitation/
const GITHUB_USERNAME = "wargavi48"; // TODO: ganti dengan username GitHub kamu
const INVITATION_URL = `https://${GITHUB_USERNAME}.github.io/invitation/`;

// 1c) PASSWORD ADMIN (dipakai halaman admin di repo admin-inv)
//    Diisi otomatis oleh GitHub Actions dari secret ADMIN_PASSWORD_HASH.
//    Isi secret-nya dengan hash SHA-256 (hex) dari password admin.
//    Cara bikin hash baru (PowerShell):
//      [Convert]::ToHexString([Security.Cryptography.SHA256]::HashData([Text.Encoding]::UTF8.GetBytes("PASSWORD-ANDA"))).ToLower()
//    Kosongkan ("") untuk menonaktifkan login.
const ADMIN_PASSWORD_HASH = "__ADMIN_PASSWORD_HASH__";

// 2) ISI UNDANGAN — placeholder, silakan edit sesuai acara kamu
const EVENT = {
  hostTag: "Wargavi48",              // teks kecil kiri atas (dipakai kalau hostLogoUrl kosong)
  brandTag: "KodoknyaMaura",         // teks kecil kanan atas (dipakai kalau brandLogoUrl kosong)
  hostLogoUrl: "asset/Pictorial.png",                   // logo kiri atas (host) — ganti path/URL kalau perlu
  hostLogoHeight: 36,                 // tinggi logo kiri dalam px — ganti angka ini untuk memperbesar/perkecil
  brandLogoUrl: "asset/makeitMemaurable_log_logoo.png", // logo kanan atas (brand) — ganti path/URL kalau perlu
  brandLogoHeight: 72,                // tinggi logo kanan dalam px — ganti angka ini untuk memperbesar/perkecil
  category: "Graduation",            // label pill kecil di slide pertama (contoh: Birthday, Event, Wedding)
  eventName: "Graduation of Maura Nilambari",
  hostGreeting:
    "You are warmly invited to attend the online graduation ceremony of",
  honoreeName: "Maura Nilambari",
  hostGreetingAfter:
    "As a valued part of this community, your presence would mean a great deal as we celebrate their journey and say farewell together.",
  date: "Sunday, 9 August 2026",
  time: "19.19 WIB",
  place: "Watch on YouTube",
  placeMapUrl: "https://www.youtube.com/live/2QxfnXY6OoA",
  closingMessage:
    "Let us gather one final time to honor their memories and wish them the very best in their next chapter.",
  defaultGuestName: "Tamu Undangan", // dipakai kalau slug di URL tidak ditemukan di database
};

// Jangan diubah — dipakai oleh index.html & admin.html
window.__INVITATION_CONFIG__ = { SUPABASE_URL, SUPABASE_ANON_KEY, INVITATION_URL, ADMIN_PASSWORD_HASH, EVENT };