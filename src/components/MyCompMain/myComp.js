import React, { Suspense } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './styles.css'
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
            alt="MainDisplay"
            className="light"
            loading="lazy"
            max-age="31536000"
        />
    </Suspense>;
};


export default MyComp;