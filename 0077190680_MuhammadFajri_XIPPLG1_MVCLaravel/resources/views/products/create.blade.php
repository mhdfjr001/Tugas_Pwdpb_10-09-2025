<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tambah Produk</title>
<!-- Bootstrap CSS -->
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.cs
s" rel="stylesheet">
</head>
<body>
<div class="container my-5">
<h1 class="text-center mb-4">Tambah Produk</h1>
<form action="{{ route('products.store') }}" method="POST">
@csrf
<div class="mb-3">
<label class="form-label">Nama Produk</label>
<input type="text" name="name" class="form-control"
required>
</div>
<div class="mb-3">
<label class="form-label">Harga</label>
<input type="number" name="price" class="form-control"
required>
</div>
<div class="mb-3">
<label class="form-label">Deskripsi</label>
<textarea name="description" class="formcontrol"></textarea>
</div>
<div class="mb-3">
<label class="form-label">Stok</label>
<input type="number" name="stock" class="form-control"
required>
</div>
<button type="submit" class="btn btn-primary">Simpan</button>
<a href="{{ route('products.index') }}" class="btn btnsecondary">Batal</a>
</form>
</div>
</body>
</html>