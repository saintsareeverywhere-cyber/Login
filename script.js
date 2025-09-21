/**
 * Handles the form submission event.
 * - Prevents the default form submission behavior.
 * - Retrieves values from input fields: name, email, password, and confirm password.
 * - Logs the input values to the console.
 * - Validates that none of the input fields are empty.
 * - Checks if password and confirm password fields match.
 * - If validation passes, stores the user data in localStorage with the key 'userData'.
 *
 * @param {Event} event - The form submission event object.
 */
// saat  event submit terjadi, tolong dikasih event prevent habis itu ambil nilai dari input masing-masing yang ada di index html, seperti nama, email, password, dan konfirmasi password
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();


// Fungsi untuk validasi input dan menampilkan nilainya di konsol
function validasiInput(nama, email, password, konfirmasiPassword) {
    console.log('Nama:', nama);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Konfirmasi Password:', konfirmasiPassword);
}
function validateInput(name, email, password, confirmPassword) {
    console.log('Nama:', nama);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Konfirmasi Password:', konfirmasiPassword);
}

    const nama = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const konfirmasiPassword = document.getElementById('confirm-password').value;

    

    // tambahkan validasi sederhana seperti pengecekan masing-masing input nama, email, password, dan konfirmasi password tidak kosong
    if (!nama || !email || !password || !konfirmasiPassword) {
        alert('Semua field harus diisi!');
        return;
    }

    // cek password dan konfirmasi password harus sama, kalau tidak sama kasih alert password dan konfirmamsi password tidak sama
    if (password !== konfirmasiPassword) {
        alert('Password dan Konfirmasi Password tidak sama!');
        return;
    }

    // tolong buat penampung sementara nilai dalam bentuk object lalu simpan di local storage dengan key userData
    const userData = { nama, email, password, konfirmasiPassword };
    localStorage.setItem('userData', JSON.stringify(userData));

});

