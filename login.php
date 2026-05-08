<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Sonucu</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <section class="container mt-5">

        <?php

        $kullaniciAdi = $_POST["kullaniciAdi"];
        $sifre = $_POST["sifre"];

        $dogruKullanici = "b2412100456@sakarya.edu.tr";
        $dogruSifre = "b2412100456";

        if ($kullaniciAdi == $dogruKullanici && $sifre == $dogruSifre) {
            echo "<h1>Hoşgeldiniz</h1>";
            echo "<p>Giriş başarılı.</p>";
            echo "<p><strong>Kullanıcı:</strong> " . $kullaniciAdi . "</p>";
        } else {
            echo "<h1>Giriş Başarısız</h1>";
            echo "<p>Kullanıcı adı veya şifre hatalı.</p>";
            echo "<a href='login.html' class='btn btn-dark'>Tekrar Dene</a>";
        }

        ?>

    </section>

</body>

</html>