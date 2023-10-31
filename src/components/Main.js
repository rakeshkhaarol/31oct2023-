//1. import area
import React from 'react'
import LeftAside from './LeftAside'
import Section from './Section'
import RightAside from './RightAside'

//2. function definetion area
function Main() {
    return (
        <main>
            <LeftAside />
            <Section />
            <RightAside />
        </main>
    )
}

//3. export area
export default Main