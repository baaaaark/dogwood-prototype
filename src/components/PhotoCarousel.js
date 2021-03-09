import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';

import sketch from '../images/sample/sketch.jpg';
import seed from '../images/sample/seed.jpg';
import treebark from '../images/sample/treebark.jpg';
import fallcolor from '../images/sample/fallcolor.jpg';
import fulltree from '../images/sample/fulltree.jpg';
import flower from '../images/sample/flower.jpg';
import leaf from '../images/sample/leaf.jpg';

const PhotoCarousel = () => {

    const commonName = "Yellow Poplar";
    const scientificName = "Liriodendron Tulipfera"

    return ( <div> 
        <Card border="success">
            <Card.Header>
                <Card.Title><h3>{commonName}</h3></Card.Title>
                <Card.Subtitle ><h5>{scientificName}</h5></Card.Subtitle>
            </Card.Header>

            <Card.Body>
                <Carousel interval={null} controls={true}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            height={640}
                            src={sketch}
                            alt={commonName}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height={640}
                        src={fulltree}
                        alt={commonName}
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height={640}
                        src={treebark}
                        alt={commonName}
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height={640}
                        src={leaf}
                        alt={commonName}
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height={640}
                        src={flower}
                        alt={commonName}
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height={640}
                        src={seed}
                        alt={commonName}
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            height={640}
                            src={fallcolor}
                            alt={commonName}
                        />
                    </Carousel.Item>        
                </Carousel>
            </Card.Body>
        </Card>
        
        
      
      <DropdownButton as={ButtonGroup} size="lg" title="Dropdown" variant="success" id="bg-vertical-dropdown-1">
        <Dropdown.Item eventKey="1">Form/Full Tree</Dropdown.Item>
        <Dropdown.Item eventKey="2">Bark</Dropdown.Item>
        <Dropdown.Item eventKey="3">Leaf</Dropdown.Item>
        <Dropdown.Item eventKey="4">Blossom</Dropdown.Item>
        <Dropdown.Item eventKey="5">Fruit/Nut/Seed</Dropdown.Item>
        <Dropdown.Item eventKey="6">Fall Color</Dropdown.Item>
      </DropdownButton>

      {/* <ButtonGroup vertical aria-label="Basic example" size="sm">
        <Button variant="outline-secondary">Sketch</Button>
        <Button variant="primary">Form</Button>
        <Button variant="secondary">Bark</Button>
        <Button variant="success">Leaf</Button>
        <Button variant="info">Blossom</Button>
        <Button variant="warning">Fruit/Nut</Button>
        <Button variant="danger">Fall</Button>
      </ButtonGroup> */}
        </div>
     )};

export default PhotoCarousel