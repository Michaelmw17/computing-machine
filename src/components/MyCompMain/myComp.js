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
        timeout={2000}
      />
                            }>
        <img src={process.env.PUBLIC_URL + '/light3.jpg'}
            alt="MainDisplay" style={{
                background: '#FFF',
                marginRight: "auto",
                height: "100%",
                width: "100%",
                maxWidth: "80%",
                maxHeight: "80%",
                position: "relative",
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'drop-shadow(2.5px 2.5px 5px #000)',
                borderRadius: '5%',
            }}
            loading="lazy"
            max-age="31536000"
        />
    </Suspense>;
};


export default MyComp;