<?php

namespace App\Http\Controllers;

use App\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class ImagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $images = Image::all();
        $response = Response::json($images, 200);
        return $response;
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
        if((!$request->title) || (!$request->thumbnail) || (!$request->imageLink)) {
            return Response::json(["message" => "Por favor escriba todos los campos requeridos"], 422);
        }

        $image = new Image(array(
            'thumbnail' => trim($request->thumbnail),
            'imageLink' => trim($request->imageLink),
            'title' => trim($request->title),
            'description' => trim($request->description),
            'user_id' => 1
        ));

        $image->save();

        $message = "Su imagen ha sido añadida correctamente";

        return Response::json(
            [
                "message" => $message,
                "data" => $image
            ],
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $image = Image::find($id);

        if(!$image) {
            return Response::json([
                'error' => [
                    'message' => 'No se ha encontrado la imagen.'
                ]
            ], 404);
        }

        return Response::json($image, 200);
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
        if((!$request->title) || (!$request->thumbnail) || (!$request->imageLink)) {
            return Response::json(["message" => "Por favor escriba todos los campos requeridos"], 422);
        }

        $image = Image::find($request->id);

        if(!$image) {
            return Response::json([
                'error' => [
                    'message' => 'No se ha encontrado la imagen.'
                ]
            ], 404);
        }

        $image->thumbnail = trim($request->thumbnail);
        $image->imageLink = trim($request->imageLink);
        $image->title = trim($request->title);
        $image->description = trim($request->description);

        $image->save();

        $message = "Su imagen se ha actualizado correctamente";

        return Response::json(
            [
                "message" => $message,
                "data" => $image
            ],
            201
        );


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
