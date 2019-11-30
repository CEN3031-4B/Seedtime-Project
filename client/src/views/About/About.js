import React from 'react';
import './About.css'
import Card from 'react-bootstrap/Card'

class About extends React.Component {
        render() {
            return (
                <div>
                    <Card id="aboutBox" style={{ width: '68.5em' }}>
                    <Card.Body>
                        <Card.Title> <font size="6"> <b><center>About Us</center></b></font></Card.Title>
                        <br></br>
                        <br></br>
                        <Card.Text>
                           Seed Time Harvest Farms has been serving the North Florida area with fresh food delivery services, 
                        gathering produce from local farmers and vendors since May 2012.
                        We offer great customer services bringing fresh food to your table and creative ways to use produce in 
                        new ways.
                        </Card.Text>
                        <br></br>
                        <Card.Text>
                           Our mission is to ensure that each family served has a clear path of how to use their money to build a 
                        solid foundation that will protect them when faced with common life occurrences while also preparing 
                        for the unknown. Seed Time's team of financial advisors assist employees and individuals through a proven step by 
                        step process that leads to financial wellness. Financial wellness is a place where the best use of your current 
                        income provides all the coverage you need to ensure your family is protected in life or death situations.
                        </Card.Text>
                        <br></br>
                        <br></br>
                        <Card.Title> <font size="4"> <b>Contact Information</b></font></Card.Title>
                        <br></br>
                        <Card.Text>
                        Cetta Barnhart
                        <p></p>
                        Email: seedtimebiz@gmail.com
                        </Card.Text>
                        <br></br>

                    </Card.Body>
                    </Card>                
                </div>
                
                
                
            )
        }
        
    
    }

export default About;
