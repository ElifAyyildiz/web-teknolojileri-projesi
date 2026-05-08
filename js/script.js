function filmleriGetir() {

    const filmAlani = document.getElementById("filmAlani");

    const filmler = [

        {
            isim: "Prison Break",
            tur: "Aksiyon / Dram",
            dil: "İngilizce",
            puan: "8.3",
            resim: "images/prison-break.jpg"
        },

        {
            isim: "11.22.63",
            tur: "Bilim Kurgu / Dram",
            dil: "İngilizce",
            puan: "8.1",
            resim: "images/112263.jpg"
        },

        {
            isim: "The Pianist",
            tur: "Dram / Tarih",
            dil: "İngilizce",
            puan: "8.5",
            resim: "images/the-pianist.jpg"
        },

        {
            isim: "Ayla",
            tur: "Dram",
            dil: "Türkçe",
            puan: "8.4",
            resim: "images/ayla.jpg"
        },

        {
            isim: "Awake",
            tur: "Gerilim / Bilim Kurgu",
            dil: "İngilizce",
            puan: "6.5",
            resim: "images/awake.jpg"
        },

        {
            isim: "Leyla ile Mecnun",
            tur: "Komedi / Dram",
            dil: "Türkçe",
            puan: "9.1",
            resim: "images/leyla-ile-mecnun.jpg"
        }

    ];

    filmAlani.innerHTML = "";

    filmler.forEach(function(film) {

        filmAlani.innerHTML += `

        <div class="col-md-4 mb-4">

            <div class="card h-100 shadow">

                <img src="${film.resim}"
                     class="card-img-top"
                     style="height:500px; object-fit:cover;"
                     alt="${film.isim}">

                <div class="card-body">

                    <h5 class="card-title">
                        ${film.isim}
                    </h5>

                    <p class="card-text">
                        Tür: ${film.tur}
                    </p>

                    <p class="card-text">
                        Dil: ${film.dil}
                    </p>

                    <p class="card-text">
                        IMDb: ${film.puan}
                    </p>

                </div>

            </div>

        </div>

        `;
    });

}function formKontrol() {

    const adsoyad = document.getElementById("adsoyad").value;
    const email = document.getElementById("email").value;
    const telefon = document.getElementById("telefon").value;
    const konu = document.getElementById("konu").value;
    const mesaj = document.getElementById("mesaj").value;

    if (adsoyad == "" || email == "" || telefon == "" || konu == "" || mesaj == "") {
        alert("Lütfen tüm zorunlu alanları doldurunuz.");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Lütfen geçerli bir e-posta adresi giriniz.");
        return false;
    }

    if (telefon.length < 10) {
        alert("Telefon numarası en az 10 haneli olmalıdır.");
        return false;
    }

    alert("Form başarıyla gönderiliyor.");
    return true;
}function loginKontrol() {

    const kullaniciAdi = document.getElementById("kullaniciAdi").value;
    const sifre = document.getElementById("sifre").value;

    if (kullaniciAdi == "" || sifre == "") {
        alert("Kullanıcı adı ve şifre boş bırakılamaz.");
        return false;
    }

    if (!kullaniciAdi.includes("@sakarya.edu.tr")) {
        alert("Kullanıcı adı sakarya.edu.tr uzantılı olmalıdır.");
        return false;
    }

    return true;
}