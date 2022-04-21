<?php

namespace App\Http\Controllers;

use App\Models\Szakdoga;
use Illuminate\Http\Request;

class SzakdogaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Szakdoga::get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $request->validate([
            'szakdoga_nev' => 'required',
            'githublink' => 'required',
            'oldallink' => 'required',
            'tagokneve' => 'required',
        ]);
        return Szakdoga::create($request->all());
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $szakdoga = Szakdoga::find($id);
        $request->validate([
            'szakdoga_nev' => 'required',
            'githublink' => 'required',
            'oldallink' => 'required',
            'tagokneve' => 'required',
        ]);

        $szakdoga->update($request->all());
        return $szakdoga;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $szakdoga = Szakdoga::find($id);
        $szakdoga->delete();
    }
}
