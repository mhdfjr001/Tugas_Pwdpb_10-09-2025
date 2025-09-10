<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::get('/', function () {
    return view('welcome');
});

// Resource routes (CRUD bawaan Laravel)
Route::resource('products', ProductController::class);

// Custom routes
Route::get('/products/search', [ProductController::class, 'search'])->name('products.search');
Route::delete('/products', [ProductController::class, 'destroyAll'])->name('products.destroyAll');