
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import './stylesCarousel.css'
import Slide from "react-reveal/Slide";

export default function Example(props) {
    const items = [
        {
            description: "Mary (Mosman) - 'Joe and Dominic have been our electricians for over 12 years, delivering high quality service including major electrical renovations and outdoor lighting. Joe and Dominic are a pleasure to have working in our home and we highly recommend their services.'"
        },
        {
            description: "Callum - 'Fast, professional and reliable. Highly recommend'"
        },
        {
            description: "Bryant (Lane Cove North) - 'Polite, professional, honest and timely. Very competitive rates. A breath of fresh air and would highly recommend them.'"
        }
    ]

    return (
        <Carousel autoPlay={false} navButtonsAlwaysVisible={true} navButtonsProps={{   
        style: { backgroundColor: 'transparent',} }} >
        {
            items.map( (item, i) => <Item key={i} item={item} /> )
        }
        </Carousel>
    )
}

const Item= (props) => {
    return (
        <Paper id="Paper">
        <Slide up>
            <div className="containerCar">
                <div className="review">
                    <h1 id="review-h1">Our Reviews</h1>
                                <div className="Icon">
                                    <FormatQuoteIcon style={{ 
                                        color:"#FFF",
                                        fontSize: 55, 
                                        textAlign: 'right', 
                                        marginTop: '-10px' }} />
                                </div>
                            {props.item.description}
                        <p id="review-p">
                           {/* NOT being used */}
                            {props.item.name}
                            <span id="review-star-spans">
                                <span className="star-icon filled">★</span>
                                <span className="star-icon filled">★</span>
                                <span className="star-icon filled">★</span>
                                <span className="star-icon filled">★</span>
                                <span className="star-icon filled">★</span>
                            </span>
                        </p>
                </div>
            </div>
            </Slide>
        </Paper>
    )
}