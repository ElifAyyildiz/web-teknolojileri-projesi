<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Sonucu</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <section class="container mt-5">

        <h1 class="mb-4">Gönderilen Form Bilgileri</h1>

        <p><strong>Ad Soyad:</strong> <?php echo $_POST["adsoyad"]; ?></p>
        <p><strong>E-posta:</strong> <?php echo $_POST["email"]; ?></p>
        <p><strong>Telefon:</strong> <?php echo $_POST["telefon"]; ?></p>
        <p><strong>Cinsiyet:</strong> <?php echo $_POST["cinsiyet"]; ?></p>
        <p><strong>Konu:</strong> <?php echo $_POST["konu"]; ?></p>
        <p><strong>Mesaj:</strong> <?php echo $_POST["mesaj"]; ?></p>

        <p><strong>İlgi Alanları:</strong>
            <?php
            if (isset($_POST["ilgiler"])) {
                foreach ($_POST["ilgiler"] as $ilgi) {
                    echo $ilgi . " ";
                }
            } else {
                echo "Seçilmedi";
            }
            ?>
        </p>

        <a href="iletisim.html" class="btn btn-dark mt-3">Geri Dön</a>

    </section>

</body>

</html>