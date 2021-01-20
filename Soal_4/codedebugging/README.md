# CodeDebugging

Code debugging built with NodeJs

## Penjelasan Hasil Analisa Error dan Perbaikan

1. File .env belum terbaca (menambahkna tanda . pada awal file)
2. Pada index.js Undefined saat mengambil data dari .env (menambahkan dotenv.config())
3. Pada app.js data config belum terbaca (menambahkan .config.)
4. pada authCallbackService.js data config belum terbaca, return pada promise dan async await (menambahkan .config. , return pada promise dan asyc await)
5. pada authServices.js data config belum terbaca dan kurang menambahkan s pada export (menambahkan .config. dan s pada akhir export)
6. Pada userInfoServices.js belum retrun dari get, data config belum terbaca, kurang menambahakn s pada export (menambahkan return get API, s pada export dan .config.)
