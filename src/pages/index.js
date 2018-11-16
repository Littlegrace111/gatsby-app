import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Wave from '../components/Wave';
import Section from '../components/Section';
import staticData from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br /> design and code React apps</h1>
        <p>Learn Design and Code! Now go build something great. Learn to use Sketch, After Effect and Figma.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <div className="Logos">
          <img src={require('../images/logo-figma.png')}  width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-invision.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          {/* <img src={require('../images/logo-swift.png')} width="50" />
          <img src={require('../images/logo-xcode.png')} width="50" /> */}
        </div>
        <Wave />
      </div>
    </div>

    <div className="Cards">
      <h2>11courses, more coming</h2>
      <div className="CardGroup">
        <Card
          title="Design System"
          text="10 sections"
          image={require('../images/wallpaper.jpg')} />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper2.jpg')} />
        <Card
          title="Sound Design"
          text="5 sections"
          image={require('../images/wallpaper3.jpg')} />
        <Card
          title="ARKit 2"
          text="10 sections"
          image={require('../images/wallpaper4.jpg')} />
      </div>
    </div>
    
    <Section 
      image={require('../images/wallpaper2.jpg')} 
      logo={require('../images/logo-react.png')}
      title="React for Designers" 
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify." />

    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticData.cells.map(cell => (
        <Cell 
          title={cell.title}
          image={cell.image} />
      ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage

