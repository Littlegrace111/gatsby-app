import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const SectionGroup = styled.div`
    height: 720px;
    background: url(${props => props.image});
    background-size: cover;
    position: relative;

    @media (max-width: 640px) {
        height: 840px;
    }
`

const SectionLogo = styled.img`
    width: 128px;
    display: block;
    margin: 0px auto;
    padding: 160px 0 40px 0;
`

const SectionTitleGroup = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 40px;
    color: white;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 300px auto;
    justify-items: center;
    

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto 100%;
    }
`

const SectionTitle = styled.h3`
    font-size: 60px;
    line-height: 1.2;
    margin: 0;

    @media (max-width: 640px) {
        font-size: 40px;
    }
`

const SectionText = styled.p`
    line-height: 1.5;
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`


const Section = props => (
    <SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
        
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section