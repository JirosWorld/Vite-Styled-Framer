import React from "react"
import styled from "styled-components"
import pin from "../assets/location.png"
import { motion } from "framer-motion"

// interface Props {
//   children?: JSX.Element | JSX.Element[]
//   title?: string
//   pin?: string
//   location?: string
//   googleMapsUrl: string
//   startDate?: string
//   endDate: string
//   description?: string
//   imageUrl?: string
// }

// styled component in combination with Framer Motion
// gives Pascal case error
/* The best method is to use the 'as' prop:
<CardContainer as={motion.div}/>
This maintains the framer-motion intent of "variability" as you put it, in being able to easily replace DOM elements with their motion counterparts.
<TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
This works perfectly fine with custom components too!
<Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
*/

const CardContainer = styled(motion.div)`
  width: 100%;
  font-size: 12px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
`

// instead of animation on 1 div, make a constant and put them every where
// spread its props into an motion div
// instead of animation on 1 div, make a constant and put them every where
// spread its props into an motion div
const boxAnimation = {
  scale: [1, 2, 2, 1, 1],
  rotate: [0, 0, 270, 270, 0],
  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  transition: { duration: 2 },
}

const containerAnimate = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
}

const itemAnimate = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function Card(
  // { title, location, googleMapsUrl, startDate, endDate, description, imageUrl },
  props
) {
  // console.log(props)
  // props are like attributes
  return (
    <motion.CardContainer
      as={motion.div}
      className="card"
      variants={containerAnimate}
      initial="hidden"
      animate="visible"
    >
      {props.item.imageUrl && (
        // conditional rendering, if photo is not loading from external server
        <motion.img
          src={props.item.imageUrl}
          alt="location photo"
          className="card--image"
          variants={itemAnimate}
        />
      )}
      <motion.div variants={itemAnimate} className="card--stats">
        <img src={pin} alt="Pin" className="card--star" />
        <span>{props.item.startDate}</span>
        <span className="gray">({props.item.endDate}) • </span>
        <motion.span animate={boxAnimation} className="gray">
          {props.item.location}
        </motion.span>
      </motion.div>
      <motion.h2 variants={itemAnimate} className="card--title">
        {props.item.title}
      </motion.h2>
      <motion.p variants={itemAnimate} className="card--description">
        {props.item.description}
      </motion.p>
      <motion.p variants={itemAnimate} className="card--price">
        <span className="bold">
          Googlemaps{" "}
          <a href={props.item.googleMapsUrl} target={"_blank"}>
            View on Google Maps
          </a>
        </span>
      </motion.p>
    </motion.CardContainer>
  )
}
