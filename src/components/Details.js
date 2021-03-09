import React from 'react'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

const Details = () => {
    return (
        <Card border="success">
            <Accordion defaultActiveKey="0">            
                <Card>
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                        <Card.Title>Tulip Poplar</Card.Title>
                        <Card.Subtitle>Liriodendron Tulipfera</Card.Subtitle>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    
                    <Card.Body>The Tulip Poplar is the North American representative of the two-species genus Liriodendron, and the
                        tallest eastern hardwood. It is native to eastern North America from Southern Ontario and possibly southern Quebec to Illinois eastward
                        to southwestern Massachusetts and Rhode Island, and south to central Florida and Louisiana. It can grow to more than 50 m (160 ft) in
                        virgin cove forests of the Appalachian Mountains, often with no limbs until it reaches 25–30 m (80–100 ft) in height, making it a very
                        valuable timber tree. </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                        <Card.Title>Scientific Nomenclature</Card.Title>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>This will eventually contain the Taxonomical information for the Tree</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                        <Card.Title>Tree Characteristics</Card.Title>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <ListGroup>
                            <ListGroup.Item action variant="outline-success">Native/Exotic/Invasive: Native</ListGroup.Item>
                            <ListGroup.Item action variant="success">Toxicity: None</ListGroup.Item>
                            <ListGroup.Item action variant="outline-success">Height at 20 Years: 50'</ListGroup.Item>
                            <ListGroup.Item action variant="success">Height at Maturity: 120'</ListGroup.Item>
                            <ListGroup.Item action variant="outline-success">Life Span: Moderate</ListGroup.Item>
                            <ListGroup.Item action variant="success">Tree Shape: Erect</ListGroup.Item>
                        </ListGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                        <Card.Title>Leaves</Card.Title>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>                        
                            <ListGroup>
                            <ListGroup.Item action variant="outline-success">Leaf Color: Green</ListGroup.Item>
                            <ListGroup.Item action variant="success">Fall Color: Yellow</ListGroup.Item>
                            <ListGroup.Item action variant="outline-success">Winter Leaves: No</ListGroup.Item>
                        </ListGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                        <Card.Title>Blossom</Card.Title>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <ListGroup>
                            <ListGroup.Item action variant="outline-success">Color: Yellow</ListGroup.Item>
                            <ListGroup.Item action variant="success">Bloom Period: Mid-Spring</ListGroup.Item>
                        </ListGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                        <Card.Title>Fruit/Nut/Seed</Card.Title>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <ListGroup>
                            <ListGroup.Item action variant="outline-success">Fruit Color: Brown</ListGroup.Item>
                            <ListGroup.Item action variant="success">Fruit Period: Summer</ListGroup.Item>
                            <ListGroup.Item action variant="outline-success">Winter Leaves: No'</ListGroup.Item>
                            <ListGroup.Item action variant="success">Edible: No'</ListGroup.Item>
                            <ListGroup.Item action variant="outline-success">Abundancy: High'</ListGroup.Item>
                            <ListGroup.Item action variant="success">Conspicuous: Yes'</ListGroup.Item>
                        </ListGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                        <Card.Title>Growing Conditions</Card.Title>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>                            
                        <ListGroup>
                            <ListGroup.Item action variant="outline-success">Growth Rate: Rapid</ListGroup.Item>
                            <ListGroup.Item action variant="success">Soil Adaptation: Coarse, Medium</ListGroup.Item>
                            <ListGroup.Item action variant="outline-success">Min/Mix Precipitation: 30-80"</ListGroup.Item>
                            <ListGroup.Item action variant="success">Height at Maturity: 120'</ListGroup.Item>
                            <ListGroup.Item action variant="outline-success">Draught Tolerance: Low</ListGroup.Item>
                            <ListGroup.Item action variant="success">Moisture Use: Medium</ListGroup.Item>
                            <ListGroup.Item action variant="outline-success">Shade Tolerance: Intolerant</ListGroup.Item>
                        </ListGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Card>
    )};

export default Details