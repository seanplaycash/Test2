import React, {useState} from 'react'
import Akeno from './images/Akeno.jpg'
import Rias from './images/Rias.jpg'
import Albedo from './images/Albedo.jpg'

export default function Window() {

    let[akeno, setAkeno]=useState(true)
    let[rias, setRias]=useState(true)
    let[albedo, setAlbedo]=useState(true)
    let[details, setDetails]=useState(true)

    let akenoBtn = document.getElementById("akeno")
    let riasBtn = document.getElementById("rias")
    let albedoBtn = document.getElementById("albedo")
    let detailsBtn = document.getElementById("details")

    function change(id) {
        if (id === "akeno") {
            if (akeno === false) {
                akenoBtn.innerText = 'Hide'
            } else {
                akenoBtn.innerText = 'Show'
            }
        } else if (id === "rias") {
            if (rias === false) {
                riasBtn.innerText = 'Hide'
            } else {
                riasBtn.innerText = 'Show'
            }
        } else if (id === "albedo") {
            if (albedo === false) {
                albedoBtn.innerText = 'Hide'
            } else {
                albedoBtn.innerText = 'Show'
            }
        } else if (id === "details") {
            if (details === false) {
                detailsBtn.innerText = 'Hide'
            } else {
                detailsBtn.innerText = 'Show'
            }
        }
    }

  return (
    <>
    <div>
      <h1>Sean's Project</h1>
      { details && (
        <ul class="list-group">
            <li class="list-group-item">Your Details:</li>
            <li class="list-group-item">Full Name: Sean Ernest B. Regala</li>
            <li class="list-group-item">Contact No: 09054412148</li>
            <li class="list-group-item">Email: sean@playcash.finance</li>
        </ul>
      )}
      <button id="details" onClick={() => {setDetails(!details); change("details");}} classname="btn btn-primary mb-5">Hide</button>
    </div>
    <div>
      <h1>Images</h1>
      { akeno && (
        <img src={Akeno} height={300} width={300} />
      )}
      <button id="akeno" onClick={() => {setAkeno(!akeno); change("akeno");}} classname="btn btn-primary mb-5">Hide</button>
      { rias && (
        <img src={Rias} height={300} width={300} />
      )}
      <button id="rias" onClick={() => {setRias(!rias); change("rias");}} classname="btn btn-primary mb-5">Hide</button>
      { albedo && (
        <img src={Albedo} height={300} width={300} />
      )}
      <button id="albedo" onClick={() => {setAlbedo(!albedo); change("albedo");}} classname="btn btn-primary mb-5">Hide</button>    
    </div>
    </>
  )
}
