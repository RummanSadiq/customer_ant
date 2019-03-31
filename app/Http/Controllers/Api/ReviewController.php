<?php

namespace App\Http\Controllers\Api;

use App\Review;
use App\User;
use App\Store;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $reviews = Review::all();

        foreach($reviews as $rev) {
            $rev["key"] = $rev->id;
            $rev['username'] = User::find($rev->user_id)->name;
            $rev['store_name'] = Store::find($rev->store_id)->name;
            $rev['store_picture'] = Store::find($rev->store_id)->display_picture;
        }
        return response()->json($reviews);
    }

    public function shopReviews($id)
    {
        $store = Store::find($id);
        $reviews = $store->reviews;

        foreach($reviews as $rev) {
            $rev["key"] = $rev->id;
            $rev['username'] = User::find($rev->user_id)->name;
            $rev['store_name'] = Store::find($rev->store_id)->name;
            $rev['store_picture'] = Store::find($rev->store_id)->display_picture;
        }
        return response()->json($reviews);    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        // $user = User::find(2);
        $request['user_id'] = $user->id;
        $review = Review::create($request->all());
        return response()->json($review, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // $review = Review::find($id);
        // $review->update($request->all());
        // return response()->json($review, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $review = Review::find($id);
        $review->delete();
    }
}