<?php

namespace App\Http\Controllers\Api;

use App\ProductReview;
use App\User;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ProductReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        // $user = User::find(1);
        $request['user_id'] = $user->id;
        $review = ProductReview::create($request->all());
        return response()->json($review, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ProductReview  $productReview
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $store = Product::find($id);
        $reviews = $store->reviews;

        foreach ($reviews as $rev) {
            $rev["key"] = $rev->id;
            $rev['username'] = User::find($rev->user_id)->name;
            $rev['store_name'] = Store::find($rev->store_id)->name;
            $rev['store_picture'] = Store::find($rev->store_id)->display_picture;
        }
        return response()->json($reviews);
    }

    public function getProductAvg($id)
    {
        $product = Product::findOrFail($id);
        $reviews = $product->reviews;

        $total = 0;
        $noOfReviews = 0;
        foreach ($reviews as $rev) {
            $total += $rev['rating'];
            $noOfReviews++;
        }
        return $total / $noOfReviews;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ProductReview  $productReview
     * @return \Illuminate\Http\Response
     */
    public function edit(ProductReview $productReview)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ProductReview  $productReview
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProductReview $productReview)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ProductReview  $productReview
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductReview $productReview)
    {
        //
    }
}
