// ============================================================
// KONFIGURASI — edit file ini untuk mengganti kredensial & isi undangan
// ============================================================

// 1) KREDENSIAL SUPABASE
//    Ambil dari: Supabase Dashboard > Project Settings > API
const SUPABASE_URL = "https://brahomjawmfckgtzgaea.supabase.co";       // contoh: https://xxxxxxxx.supabase.co
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyYWhvbWphd21mY2tndHpnYWVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwODU2NDYsImV4cCI6MjEwMTY2MTY0Nn0.HJaixEsw9AI1mulh3YAHT4oC6C7PieXIWJcj-G-0hJk";

// 1b) URL UNDANGAN DI GITHUB PAGES
//    Ganti USERNAME-GITHUB dengan username GitHub kamu.
//    Halaman undangan akan tampil di: https://USERNAME-GITHUB.github.io/invitation/
const GITHUB_USERNAME = "wargavi48"; // TODO: ganti dengan username GitHub kamu
const INVITATION_URL = `https://${GITHUB_USERNAME}.github.io/invitation/`;

// 2) ISI UNDANGAN — placeholder, silakan edit sesuai acara kamu
const EVENT = {
  hostTag: "Wargavi48",              // teks kecil kiri atas (dipakai kalau hostLogoUrl kosong)
  brandTag: "KodoknyaMaura",         // teks kecil kanan atas (dipakai kalau brandLogoUrl kosong)
  hostLogoUrl: "",                   // opsional: path/URL logo kiri atas, contoh: "logo-host.png". Kosongkan untuk pakai teks (hostTag).
  hostLogoHeight: 28,                 // tinggi logo kiri dalam px — ganti angka ini untuk memperbesar/perkecil
  brandLogoUrl: "",                  // opsional: path/URL logo kanan atas, contoh: "logo-brand.png". Kosongkan untuk pakai teks (brandTag).
  brandLogoHeight: 28,                // tinggi logo kanan dalam px — ganti angka ini untuk memperbesar/perkecil
  category: "Birthday",              // label pill kecil di slide pertama (contoh: Birthday, Event, Wedding)
  eventName: "Fritzy 18th Birthday Project",
  hostGreeting: "It is a pleasure to invite you to",
  date: "Sunday, 2 August 2026",
  time: "15.00 – 20.00",
  place: "CGV fX Sudirman, Lt. 7",
  placeMapUrl: "https://maps.google.com/?q=CGV+fX+Sudirman",
  closingMessage:
    "We sincerely hope you can join us and create magic together on this special day.",
  defaultGuestName: "Tamu Undangan", // dipakai kalau slug di URL tidak ditemukan di database
};

// Jangan diubah — dipakai oleh index.html & admin.html
window.__INVITATION_CONFIG__ = { SUPABASE_URL, SUPABASE_ANON_KEY, INVITATION_URL, EVENT };