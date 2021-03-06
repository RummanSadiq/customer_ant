<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//User
Route::get('/user', 'Api\UserController@index');


//Shop
Route::get('/shops', 'Api\StoreController@index');
Route::get('/shops/{id}', 'Api\StoreController@show');
Route::post('/shop', 'Api\StoreController@store');
Route::post('/updateshop', 'Api\StoreController@update');
Route::delete('/shops/{id}', 'Api\StoreController@destroy');
Route::get('/myshop', 'Api\StoreController@myShop');


//Store Types
Route::get('/storetypes', 'Api\StoreTypeController@index');



//Store Followers
Route::middleware('auth:api')->get('/follow/{id}', 'Api\StoreFollowerController@follow');
// Route::get('/follow/{id}', 'Api\StoreFollowerController@follow');
Route::get('/followed', 'Api\StoreFollowerController@index');


//Categories
Route::get('/categories/{parent}', 'Api\CategoryController@show');


//Posts
Route::get('/posts', 'Api\PostController@index');
Route::get('/posts/shop/{id}', 'Api\PostController@getShopPosts');
Route::post('/posts', 'Api\PostController@store');
Route::post('/product_post', 'Api\PostController@productPost');
Route::post('/posts/{id}', 'Api\PostController@update');
Route::delete('/posts/{id}', 'Api\PostController@destroy');
// Route::get('/myposts', 'Api\PostController@show');

//Products
Route::get('/products', 'Api\ProductController@index');
Route::post('/products', 'Api\ProductController@getFiltered');
Route::get('/products/shop/{id}', 'Api\ProductController@getShopProducts');
Route::get('/products/{id}', 'Api\ProductController@show');


//Faqs
Route::get('/faqs', 'Api\FaqController@index');
Route::get('/faqs/shop/{id}', 'Api\FaqController@getShopFaqs');

Route::post('/faqs', 'Api\FaqController@store');
Route::post('/faqs/{id}', 'Api\FaqController@update');
Route::delete('/faqs/{id}', 'Api\FaqController@destroy');

//Reviews
Route::get('/reviews', 'Api\ReviewController@index');
Route::get('/reviews/shops/{id}', 'Api\ReviewController@shopReviews');
Route::post('/reviews', 'Api\ReviewController@store');
// Route::post('/reviews/{id}', 'Api\ReviewController@update');
Route::delete('/reviews/{id}', 'Api\ReviewController@destroy');

//Product Reviews
// Route::get('/reviews', 'Api\ProductReviewController@index');
// Route::get('/reviews/shops/{id}', 'Api\ProductReviewController@shopReviews');
Route::post('/products/reviews', 'Api\ProductReviewController@store');
// Route::post('/reviews/{id}', 'Api\ProductReviewController@update');
Route::delete('/products/reviews/{id}', 'Api\ProductReviewController@destroy');


//Messages
// Route::get('/messages', 'Api\MessageController@index');
Route::get('/messages/{id}', 'Api\MessageController@show');
Route::post('/messages/shop', 'Api\MessageController@shopSent'); //might not get used 
Route::post('/messages/customer', 'Api\MessageController@customerSent'); //might not get used 
// Route::post('/messages', 'Api\MessageController@messageSent'); //sending message to a specific id
Route::delete('/messages/{id}', 'Api\MessageController@destroy'); //Delete chat with some user

//Conversations
Route::get('/conversations/shop', 'Api\ConversationController@shopConversations');
Route::get('/conversations/customer', 'Api\ConversationController@customerConversations');


//Image Attachments 
Route::post(
    '/attachment/{type}',
    function (Request $request, $type) {
        $image = $request->file('image');
        $input['imagename'] = time() . '.' . $image->getClientOriginalExtension();
        $destinationPath = public_path('images/' . $type);
        $image->move($destinationPath, $input['imagename']);

        return response()->json([
            'status' => 'done',
            'url' => '../images/' . $type  . '/' . $input['imagename']
        ]);
    }
);
