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
                    timeout={3000}
                    />
                            }>
        <img src={process.env.PUBLIC_URL + '/JDP-BRANDING-04.png'}
            alt="Logo" style={{
                display: "absolute",
                background: '#FFF',
                marginRight: "auto",
                marginTop: "15px",
                height: "100%",
                width: "100%",
                maxWidth: "85%",
                maxHeight: "55px",
            }}
            max-age="31536000"
        />
    </Suspense>;
};


export default MyComp;