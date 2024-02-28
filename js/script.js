function validateForm() {
    const nama = document.getElementById('nama-input').value;
    const tgl = document.getElementById('tgl-input').value;
    const jk = document.querySelector('input[name="jk-input"]:checked').value;
    const pesan = document.getElementById('pesan-input').value;

    const nama1 = document.getElementById('nama');
    const tgl1 = document.getElementById('tgl');
    const jk1 = document.getElementById('jenis_kelamin');
    const pesan1 = document.getElementById('pesan');

    document.getElementById('time').innerHTML = Date();

    nama1.innerHTML = nama;
    tgl1.innerHTML = tgl;
    jk1.innerHTML = jk;
    pesan1.innerHTML = pesan;
    return false
}
