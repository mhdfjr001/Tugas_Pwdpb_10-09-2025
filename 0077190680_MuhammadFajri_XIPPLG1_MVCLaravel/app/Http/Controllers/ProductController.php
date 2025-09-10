<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Product;
class ProductController extends Controller
{
public function index()
{
$products = Product::all();
return view('products.index', compact('products'));
}
public function create()
{
return view('products.create');
}
public function store(Request $request)
{
Product::create($request->all());
return redirect()->route('products.index')->with('success', 'Produk 
berhasil ditambahkan');
}
public function edit($id)
{
$product = Product::findOrFail($id);
return view('products.edit', compact('product'));
}
public function update(Request $request, $id)
{
$product = Product::findOrFail($id);
$product->update($request->all());
return redirect()->route('products.index')->with('success', 'Produk 
berhasil diperbarui');
}
public function destroy($id)
{
$product = Product::findOrFail($id);
$product->delete();
return redirect()->route('products.index')->with('success', 'Produk 
berhasil dihapus');
}
}