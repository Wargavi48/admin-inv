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
