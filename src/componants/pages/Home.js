import React from 'react'
import Layout from '../Layout'
import { Link } from 'react-router-dom'
import banner from '../images/banner.jpeg'
import '../styles/HomeStyles.css';
const Home = () => (
  <Layout>
    <div className='home'
     style={{ backgroundImage: `url(${banner})` }}>
      <div className='headerContainer'>
        <h1>Food Website</h1>
        <p>Best Food India</p>
        <Link to="/menu">
        <button >
          ORDER NOW
        </button>
        </Link>
      </div>

    </div>
  </Layout>
)

export default Home
