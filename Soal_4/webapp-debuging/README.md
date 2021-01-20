## Expected

![expected](./expected.png)

## Penjelasan Hasil Analisa Error dan Perbaikan

1. Pada app.js value clientId, redirectUri, clientSecret masih kosong (menambahakan value clientId, redirectUri, clientSecre)
2. pada utils.js terdapat 2 eqaul atau = di let query (menghapus 1 equal atau = di let query)
3. pada GithubLogin.js belum menambahkan clientSecret dan code belum terbaca (menambahakn clientSecret dan .code)
