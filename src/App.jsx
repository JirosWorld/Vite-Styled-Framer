import React from "react"
import ButtonComp from "./components/ButtonComp"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"
import "./App.css"
// import { motion } from "framer-motion"

export default function App() {
  const cards = data.map((item) => {
    // console.log(item)
    // returning the child component with its props
    return <Card key={item.title} item={item} />
  })

  // the 'cards' need to be passed as a javascript Map so it must be surrounded with curly braces, even though it renders JSX tags
  return (
    <div>
      <Header></Header>
      <section className="cards-list">{cards}</section>
      <ButtonComp primaryprop customprop />
    </div>
  )
}
