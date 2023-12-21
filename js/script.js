function replaceName() {
    let name = prompt("Silakan Tulis nama Anda", "");
    document.getElementById("name").innerHTML = name;
}
replaceName();

let slideIndex = 1;

        function plusDivs(n) {
            showDivs(slideIndex += n);
        }

        function showDivs(n) {
            let i;
            let x = document.getElementsByClassName("img-slideshow");
            if (n > x.length) {slideIndex = 1}
            if (n < 1) {slideIndex = x.length}
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex-1].style.display = "block";
        }
        showDivs(slideIndex);

        function validateForm(event) {
            event.preventDefault();

            var nama = document.getElementById("nama").value;
            if (nama == "") {
              document.getElementById("errorNama").innerHTML = "Nama harus diisi";
              return false;
            } else {
              document.getElementById("errorNama").innerHTML = "";
            }
          
            var tglLahir = document.getElementById("tglLahir").value;
            if (tglLahir == "") {
              document.getElementById("errorTglLahir").innerHTML = "Tanggal lahir harus diisi";
              return false;
            } else {
              document.getElementById("errorTglLahir").innerHTML = "";
            }
          
            var jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked');
            if (!jenisKelamin) {
              document.getElementById("errorJenisKelamin").innerHTML = "Pilih jenis kelamin";
              return false;
            } else {
              document.getElementById("errorJenisKelamin").innerHTML = "";
            }
    
            var pesan = document.getElementById("pesan").value;
            if (pesan == "") {
              document.getElementById("errorPesan").innerHTML = "Pesan harus diisi";
              return false;
            } else {
              document.getElementById("errorPesan").innerHTML = "";
            }
          
            document.getElementById("resultNama").innerHTML = "Nama: " + nama;
            document.getElementById("resultTglLahir").innerHTML = "Tanggal Lahir: " + tglLahir;
            document.getElementById("resultJenisKelamin").innerHTML = "Jenis Kelamin: " + jenisKelamin.value;
            document.getElementById("resultPesan").innerHTML = "Pesan: " + pesan;

            document.getElementById("nama").value = "";
            document.getElementById("tglLahir").value = "";
            document.querySelector('input[name="jenisKelamin"]:checked').checked = false;
            document.getElementById("pesan").value = "";
          }
          