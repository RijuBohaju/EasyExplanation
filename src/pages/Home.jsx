import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from "../images/bn.png" ;
import  "../styles/HomeStyles.css";

function Home() {
  return (
    <Layout>
      <div className="home" style={{backgroundImage: `url(${Banner})`}}>
        <div className="headerContainer">
            <h1>Learn with Us</h1>
            <p>Text sdhfbjhdfdsf sf idsp</p>            
            <Link to="/courses">
            <button>Get Started</button>
            </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
