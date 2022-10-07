import React from "react"
import logo from "./logo.svg"
import "./App.css"
import axios from "axios"

import { Input } from "./components/Input"
import { Select } from "./components/Select"
import { Button } from "./components/Button"
import { Label } from "./components/Label"

import { dummyData } from "./dummy/dummy"

function App() {
  const [data, setData] = React.useState(dummyData)

  return (
    <div className="App mr-4">
      <div className="flex w-full px-20 p-8 shadow-md rounded-md">
        <div className="product-image flex flex-col grow items-start">
          <p className="font-semibold text-lg">Kembali</p>
          <img src={data.picture_1} alt="product" />
          <img className="w-24" src={data.picture_1_do} alt="product" />
        </div>
        <div className="product-detail flex flex-col grow items-start">
          <span className="font-bold text-xl mb-4">Udang Pencet</span>
          <span>{`Stock tersedia: ${data.stock.qty_float} Kg`}</span>
          <hr />
          <table className="table text-left">
            <tr>
              <td>Tgl. Update</td>
              <td>30-09-2022</td>
            </tr>
            <tr>
              <td>Lokasi</td>
              <td>Jakarta Timur</td>
            </tr>
            <tr>
              <td>Min. Order</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Perkiraan Harga</td>
              <td>5000/Kg</td>
            </tr>
          </table>
        </div>
        <div className="form grow bg-slate-300 flex flex-col p-4 items-start rounded-md">
          <span>Isi data dibawah untuk mengetahui rincian harga</span>
          <Label value="Nama Kontak" />
          <Input
            className="w-full mb-2"
            placeholder="Nama Kontak"
            type="text"
          />
          <Label value="No. Handphone" />
          <Input
            className="w-full mb-2"
            placeholder="No. Handphone"
            type="text"
          />
          <Label value="Provinsi" />

          <Select className="mb-2 w-full" items={[]} />
          <Label value="Kota/Kabupaten" />

          <Select className="mb-2 w-full" items={[]} />
          <Label value="Kuantitas" />
          <div>
            <Input className="mr-4" placeholder="Kuantitas" type="number" />
            <span>Kg</span>
          </div>
          <Label className="mb-2" value="Contoh:" />
          <Button
            label="Submit"
            className="block p-2 bg-lime-500 w-full text-white font-bold rounded-md"
          />
        </div>
      </div>
    </div>
  )
}

export default App
