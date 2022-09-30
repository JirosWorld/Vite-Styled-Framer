import React from "react"
import herophoto from "../assets/globecolor.png"

export default function Header() {
  return (
    <section className="hero">
      <img src={herophoto} alt="Logo" className="hero--photo" />
      <h1 className="hero--header">my travel journal.</h1>
      <p className="hero--text">undertitle</p>
    </section>
  )
}
