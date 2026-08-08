# Admin Invitation — Dashboard Admin (GitHub Pages)

Dashboard admin untuk mengelola daftar tamu, di-deploy sebagai **project site** terpisah:

**URL:** `https://USERNAME-GITHUB.github.io/admin-inv/`

## Isi repo
- `index.html` — dashboard admin (asalnya `admin.html`, di-rename jadi `index.html`)
- `config.js` — kredensial Supabase + URL halaman undangan (satu-satunya file yang perlu diedit)
- `admin.css` — styling

> ⚠️ Sebelum deploy: buka `config.js` dan ganti `USERNAME-GITHUB` dengan username GitHub kamu.
> `config.js` di repo ini harus tetap **sinkron** dengan repo `invitation` (kredensial & isi acara sama).

## Deploy ke GitHub Pages
1. Buat repo baru di GitHub dengan nama **persis** `admin-inv` (public).
2. Dari folder ini, push ke repo tersebut:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME-GITHUB/admin-inv.git
   git push -u origin main
   ```
3. Di GitHub: **Settings → Pages** → Source: **Deploy from a branch** → branch `main`, folder `/ (root)` → **Save**.
4. Tunggu 1–2 menit, lalu buka `https://USERNAME-GITHUB.github.io/admin-inv/`.

## Cara kerja link personal
Link tamu dibangun dari `INVITATION_URL` di `config.js`:
```
https://USERNAME-GITHUB.github.io/invitation/?to=slug-tamu
```

## Login admin (password gate)
- Halaman admin dilindungi password sederhana (hanya dicek di browser).
- Password default: `admin123` → **WAJIB GANTI!**
- Cara ganti password:
  1. Buat hash SHA-256 dari password baru di PowerShell:
     ```powershell
     [Convert]::ToHexString([Security.Cryptography.SHA256]::HashData([Text.Encoding]::UTF8.GetBytes("PASSWORD-BARU"))).ToLower()
     ```
  2. Tempel hasilnya ke `ADMIN_PASSWORD_HASH` di `config.js`.
  3. Kosongkan (`""`) untuk menonaktifkan login.

> ⚠️ Ini **bukan** keamanan nyata — siapa pun bisa membuka source code & melewatinya. Untuk proteksi data sungguhan, gunakan Supabase Auth + RLS.

## GitHub Repository Secrets
Supaya kredensial tidak tercecer di catatan lokal, simpan sebagai secret repo:
1. Buka repo di GitHub → **Settings → Secrets and variables → Actions → New repository secret**.
2. Tambahkan dua secret:
   - `SUPABASE_URL` → `https://brahomjawmfckgtzgaea.supabase.co`
   - `SUPABASE_ANON_KEY` → key anon dari Supabase Dashboard
3. Karena memakai **"Deploy from a branch"**, secret ini **tidak otomatis dipakai** build (tidak ada workflow Actions) — secret hanya tersimpan aman. Kalau mau dipakai, perlu workflow GitHub Actions.

> Catatan penting:
> - `SUPABASE_ANON_KEY` **publik by design** — ikut terkirim ke browser & tampil di JS situs. Menyimpannya di secret tidak menyembunyikannya dari pengunjung.
> - Jangan **pernah** menaruh **SERVICE_ROLE key** di `config.js`/frontend — itu secret asli yang wajib dijaga.
