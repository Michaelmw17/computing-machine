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
                    timeout={3000}
                    />
                            }>
        <img src={process.env.PUBLIC_URL + '/JDP-BRANDING-04.png'}
            alt="Logo" 
            max-age="31536000"
            className="JDP-BRANDING"
        />
    </Suspense>;
};


export default MyComp;