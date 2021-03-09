import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';

const Welcome = () => {
    return ( 
        <Jumbotron>
        <h1>Hello there!</h1>

        <p>
            This is Project Dogwood.  As of right now it is a seedling, far from bearing fruit.  However it will be updated incrementally, so
            be on the lookout for new updates!
        </p>
        <h3>About The Project</h3>
        <p>
            A while back (like so many others) I was hit with a fascination and love for trees.  In my attempt to learn as much as possible I found myself frustrated with the resources available.  
            It wasn't that they weren't full of information, but the opposite: they were full of all sorts of plants and most not relevant to my area.  Dogwood is 
            an attempt to create a database of trees refined for the Arkansas/Missouri region.  This will allow for a guide that is both simpler and more detailed
            than typical ones found elsewhere.
        </p>
        </Jumbotron>
    )};

export default Welcome