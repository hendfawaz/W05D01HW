import React from 'react'
import { logedInContext } from '../App'

export default function Home() {
    let logedIn = React.useContext(logedInContext)
    return (
        <div>
            { logedIn? <h3>Hellwo</h3> : <h3>You should be singin</h3>}
        </div>
    )
}
