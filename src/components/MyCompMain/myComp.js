import React, { Suspense } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const MyComp = () => {
    return<Suspense fallback={
        <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={2000}/>
                            }>
        <img src={process.env.PUBLIC_URL + '/light3.jpg'}
            alt="MainDisplay" style={{
                background: '#FFF',
                marginRight: "auto",
                height: "100%",
                width: "100%",
                maxWidth: "95%",
                maxHeight: "80%",
                position: "relative",
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'drop-shadow(7.5px 8.5px 12px #000)',
                borderRadius: '5%',
            }}
            loading="lazy"
            max-age="31536000"
        />
    </Suspense>;
};


export default MyComp;