# Admin Invitation — Dashboard Admin (GitHub Pages)

Dashboard admin untuk mengelola daftar tamu, di-deploy sebagai **project site** terpisah:

**URL:** `https://USERNAME-GITHUB.github.io/admin-inv/`

## Isi repo
- `index.html` — dashboard admin (asalnya `admin.html`, di-rename jadi `index.html`)
- `config.js` — kredensial Supabase + URL halaman undangan (satu-satunya file yang perlu diedit)
- `admin.css` — styling

> ⚠️ `config.js` adalah **template** — nilai `SUPABASE_URL`, `SUPABASE_ANON_KEY`, & `ADMIN_PASSWORD_HASH`
> diisi otomatis oleh GitHub Actions dari **repo secrets** saat build. Jangan commit nilai aslinya!
> `GITHUB_USERNAME` & isi acara (`EVENT`) tetap diedit manual di `config.js`.

## Deploy ke GitHub Pages (via GitHub Actions)
1. Buat repo baru di GitHub dengan nama **persis** `admin-inv` (public).
2. Tambahkan repo secrets (wajib, lihat bagian "GitHub Repository Secrets").
3. Dari folder ini, push ke repo tersebut:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME-GITHUB/admin-inv.git
   git push -u origin main
   ```
4. Di GitHub: **Settings → Pages** → Source: **GitHub Actions** (bukan "Deploy from a branch").
5. Workflow `.github/workflows/deploy.yml` otomatis build & deploy tiap push ke `main`.
6. Cek tab **Actions** di repo, lalu buka `https://USERNAME-GITHUB.github.io/admin-inv/`.

## Cara kerja link personal
Link tamu dibangun dari `INVITATION_URL` di `config.js`:
```
https://USERNAME-GITHUB.github.io/invitation/?to=slug-tamu
```

## Login admin (password gate)
- Halaman admin dilindungi password sederhana (hanya dicek di browser).
- Password diambil dari **repo secret** `ADMIN_PASSWORD_HASH` (bukan dari `config.js`).
- Cara ganti password:
  1. Buat hash SHA-256 dari password baru di PowerShell:
     ```powershell
     [Convert]::ToHexString([Security.Cryptography.SHA256]::HashData([Text.Encoding]::UTF8.GetBytes("PASSWORD-BARU"))).ToLower()
     ```
  2. Update secret `ADMIN_PASSWORD_HASH` di repo (Settings → Secrets and variables → Actions) dengan hash tersebut.
  3. Kosongkan secret-nya untuk menonaktifkan login.

> ⚠️ Ini **bukan** keamanan nyata — siapa pun bisa membuka source code & melewatinya. Untuk proteksi data sungguhan, gunakan Supabase Auth + RLS.

## GitHub Repository Secrets (wajib — dipakai workflow saat build)
1. Buka repo di GitHub → **Settings → Secrets and variables → Actions → New repository secret**.
2. Tambahkan **tiga** secret di repo `admin-inv`:
   - `SUPABASE_URL` → `https://brahomjawmfckgtzgaea.supabase.co`
   - `SUPABASE_ANON_KEY` → key anon dari Supabase Dashboard
   - `ADMIN_PASSWORD_HASH` → hash SHA-256 password admin (lihat bagian Login)
3. Workflow `.github/workflows/deploy.yml` membaca secret ini dan menyuntikkannya ke `config.js` saat build, lalu deploy ke Pages.

> Catatan penting:
> - `SUPABASE_ANON_KEY` **publik by design** — ikut terkirim ke browser & tampil di JS situs. Menyimpannya di secret hanya membuatnya tidak ada di source repo; nilainya tetap terlihat di situs.
> - Secret bersifat **per-repo**: `SUPABASE_URL` & `SUPABASE_ANON_KEY` juga wajib ditambahkan di repo `invitation`.
> - Jangan **pernah** menaruh **SERVICE_ROLE key** di `config.js`/frontend — itu secret asli yang wajib dijaga.
