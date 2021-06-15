
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

import './stylesCarousel.css'
export default function Example(props)
{
    const items = [
        {
            name: "- Mary (Mosman).",
            description: "'Joe and Dominic have been our electricians for over 12 years, delivering high quality service including major electrical renovations and outdoor lighting. Joe and Dominic are a pleasure to have working in our home and we highly recommend their services.'"
        },
        {
            name: "- Callum .",
            description: "'Fast, professional and reliable. Highly recommend'"
        },
        {
            name: " - Bryant (Lane Cove North).",
            description: "'Polite, professional, honest and timely. Very competitive rates. A breath of fresh air and would highly recommend them.'"
        }
    ]

    return (
        <Carousel autoPlay={false} navButtonsAlwaysVisible={true} navButtonsProps={{   
        style: {
            backgroundColor: 'transparent',
        }
    }} 
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

const Item= (props) =>
{
    return (
        <Paper id="Paper">
        <div className="containerCar">
            <div className="review">
            <h1 id="review-h1">
            Our Reviews</h1>
            <div className="Icon">
            <FormatQuoteIcon style={{ color:"#FFF", fontSize: 105, textAlign: 'right'   }} />
            </div>
            {props.item.description}
            <p id="review-p">{props.item.name}</p>
            </div>
        </div>
        </Paper>
    )
}