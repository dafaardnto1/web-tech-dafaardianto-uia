<div align="center">
  <img src="./public/logo/uialogo.png" alt="Logo Universitas Islam As-Syafi'iyah" width="330" />
  <h1>Web Teknologi · UIA</h1>
  <p>Dashboard pembelajaran dengan alur autentikasi dari antarmuka hingga database.</p>
  <p>Project Ini Dalam Tahap Pengembangan.</p>
  <p>
    <img alt="Dibuat oleh Dafa Ardianto" src="https://img.shields.io/badge/Dibuat_oleh-Dafa_Ardianto-173B66?style=for-the-badge">
    <img alt="NIM 3420230004" src="https://img.shields.io/badge/NIM-3420230004-2563EB?style=for-the-badge">
    <img alt="Teknik Informatika, UIA" src="https://img.shields.io/badge/Teknik_Informatika-UIA-0F9D8A?style=for-the-badge">
  </p>
  <p>
    <a href="#alur-aplikasi">Jelajahi alur</a> ·
    <a href="#mulai-di-lokal">Jalankan lokal</a> ·
    <a href="#status-fitur">Status fitur</a>
  </p>
</div>

<p align="center">
  <img alt="Next.js 16" src="https://img.shields.io/badge/Next.js-16-111827?logo=next.js">
  <img alt="React 19" src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white">
  <img alt="Tailwind CSS 4" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white">
  <img alt="Auth.js" src="https://img.shields.io/badge/Auth.js-Credentials-6D5EF5">
  <img alt="Vercel Postgres" src="https://img.shields.io/badge/Database-Vercel_Postgres-111827?logo=postgresql&logoColor=white">
</p>

<p align="center">
  <img src="./docs/auth-flow.gif" alt="Animasi alur autentikasi dari form login hingga dashboard" width="100%">
</p>

## Tentang Proyek

Proyek pembelajaran Web Teknologi ini dibuat dengan Next.js App Router. Pengunjung dapat melihat halaman utama, masuk dengan akun, lalu membuka dashboard yang dilindungi autentikasi. Antarmukanya memakai palet biru, latar bernuansa glass, dan navigasi dashboard yang tetap stabil saat konten halaman berganti.

> **Catatan ruang lingkup:** autentikasi terhubung ke database. Halaman Dashboard, Customers, dan Invoices saat ini masih berupa kerangka tampilan; fitur pengelolaan data (CRUD) belum diimplementasikan.

## Alur Aplikasi

Animasi di atas menggambarkan alur login yang benar-benar digunakan aplikasi. Diagram berikut merangkum jalur berhasil dan jalur ketika pengguna belum terautentikasi:

```mermaid
flowchart LR
    A["Form login<br/>Email + password"] --> B["Server Action<br/>authenticate()"]
    B --> C["Auth.js Credentials<br/>Validasi dengan Zod"]
    C --> D[("Vercel Postgres<br/>Cari user berdasarkan email")]
    D --> E["bcrypt<br/>Bandingkan password"]
    E --> F["Auth.js<br/>Buat sesi login"]
    F --> G{"Middleware<br/>Akses dashboard"}
    G -->|Sudah login| H["Dashboard<br/>Home · Customers · Invoices"]
    G -->|Belum login| I["Kembali ke /login"]

    classDef browser fill:#eaf2ff,stroke:#4b83d1,color:#19375f
    classDef server fill:#f0edff,stroke:#8170d4,color:#322768
    classDef database fill:#e8f7f2,stroke:#39a48d,color:#155e50
    class A,H,I browser
    class B,C,E,F,G server
    class D database
```

<details>
  <summary><strong>01 — Form dan Server Action</strong></summary>
  <p>Form di <code>app/login/page.tsx</code> mengirim kredensial ke <code>authenticate()</code> pada <code>app/lib/actions.ts</code>. Action ini memanggil Auth.js dan menampilkan pesan untuk kegagalan login yang dikenali.</p>
</details>

<details>
  <summary><strong>02 — Validasi, database, dan password</strong></summary>
  <p>Provider Credentials memvalidasi format email dan panjang password dengan Zod, mencari pengguna di tabel <code>users</code> melalui <code>@vercel/postgres</code>, lalu memeriksa password menggunakan <code>bcrypt.compare</code>. Password di database harus berupa hash bcrypt, bukan teks biasa.</p>
</details>

<details>
  <summary><strong>03 — Sesi dan halaman terlindungi</strong></summary>
  <p>Setelah autentikasi berhasil, konfigurasi Auth.js dan middleware membatasi akses ke rute <code>/dashboard</code>. Pengguna yang belum masuk diarahkan ke halaman login.</p>
</details>

## Status Fitur

| Area | Status |
| --- | --- |
| Halaman utama dan navigasi ke login | Tersedia |
| Login credentials dengan Auth.js | Tersedia, membutuhkan konfigurasi database |
| Proteksi rute dashboard | Tersedia |
| Dashboard, Customers, dan Invoices | Kerangka UI; belum terhubung ke data |
| Transisi halaman dashboard | Hanya konten halaman yang bertransisi; navigasi tetap stabil |

## Teknologi

| Bagian | Teknologi |
| --- | --- |
| Framework dan routing | Next.js 16 App Router |
| Antarmuka | React 19, TypeScript, Tailwind CSS 4 |
| Autentikasi | Auth.js Credentials, Zod, bcrypt |
| Database | Vercel Postgres (`@vercel/postgres`) |
| Animasi konten | Framer Motion |

## Struktur Proyek

```text
app/
├── dashboard/
│   ├── customers/page.tsx   # Kerangka halaman Customers
│   ├── invoices/page.tsx    # Kerangka halaman Invoices
│   ├── layout.tsx           # Navigasi bersama dan transisi konten
│   └── page.tsx             # Kerangka halaman Dashboard
├── lib/
│   └── actions.ts           # Server Action untuk login
├── login/
│   └── page.tsx             # Form login
├── ui/
│   └── page-transition.tsx  # Animasi konten halaman
├── layout.tsx               # Root layout dan metadata
└── page.tsx                 # Halaman utama
auth.config.ts               # Aturan autentikasi dan akses rute
auth.ts                      # Provider Credentials dan lookup pengguna
middleware.ts                # Proteksi rute
```

## Mulai di Lokal

### Prasyarat

- Node.js 20.9 atau lebih baru
- npm
- Database Postgres yang dapat diakses melalui `POSTGRES_URL`

### 1. Pasang dependensi

```bash
npm install
```

### 2. Atur environment

Buat file `.env.local` di root proyek:

```env
AUTH_SECRET="ganti-dengan-secret-acak-yang-kuat"
POSTGRES_URL="postgres://user:password@host:5432/database"
```

Jangan commit `.env.local` atau membagikan nilai secret dan kredensial database.

### 3. Siapkan data pengguna

Aplikasi membaca tabel `users` dengan kolom `email` dan `password`; kolom `id` dan `name` juga digunakan oleh tipe pengguna. Buat tabel tersebut di database dan isi akun dengan password yang sudah di-hash menggunakan bcrypt. Proyek ini belum menyediakan registrasi atau seed akun otomatis.

Contoh struktur tabel minimal:

```sql
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);
```

### 4. Jalankan aplikasi

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### Perintah lain

```bash
npm run build   # Build produksi
npm run start   # Jalankan build produksi
```
