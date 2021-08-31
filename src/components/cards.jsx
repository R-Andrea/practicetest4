import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: blue;

    width: 20%;
    height: 20%;
    margin: 20px;
`

function Cards(characters) {

let chars = characters.characters

chars.sort(function(a,b) {
    let A = a.chance;
    let B = b.chance;

    return (A > B) ? -1 : (A < B) ? 1 : 0
})

    return (
        <div>
            {chars.map((char, index) => {
                return (
                <Card key="index">
                    <p>{char.name}</p>
                    <p>{char.type}</p>
                    <p>{char.chance}</p>
                </Card>)
            })}
        </div>
    )
}

export default Cards
