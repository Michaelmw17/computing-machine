import React, {useState} from 'react'
import Href from './Services/Href'
import {
  GoogleMap,
  LoadScript,
  OverlayView,
  Marker
} from "@react-google-maps/api";
const testData = {
  text: "View on Google Maps",
  link: "https://goo.gl/maps/hrBNba4G8a1EbgFg6"
};

const containerStyle = {
  height: `400px`,
  width: '90%',
  marginLeft: '20px',
  marginRight: '20px',
  marginTop: '40px',
  maxWidth: '480px',
  maxHeight: '680px',
  borderRadius: '14px'
};

const center = {
  lat: -33.8097541497481,
  lng:  151.14841320640292
};

function MyComponent(props) {
  const [isOpened, setOpened] = useState(false);
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBWQPgM5WysP6GSH5Ay_Vm037aWajBpT6s">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}>
          <Marker
            title='JDP Electrical'
            position={center}
            onClick={() => {
              setOpened(!isOpened);
            }} />
        {isOpened && (
          <OverlayView
            position={center}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            getPixelPositionOffset={(width, height) => ({
              x: -(width / 2),
              y: -(height / 330)
                })}
                    >
                    <div style={{ background: `white`, border: `1px solid #ccc`, padding: 5,}}>
                      <p style={{ textAlign:`center`}}>JDP Electrical </p>
                      <p style={{ textAlign:`center`}}> 17/4-6 Chaplin Dr, Lane Cove West NSW 2066</p>
                      <ul className='list-unstyled' >
                      <li>
                          <Href
                              text={testData.text}
                              url={testData.link} />
                        </li>
                      </ul>
              </div>
          </OverlayView>
        )}
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

class MyFancyComponent extends React.PureComponent {
  constructor(props) {
  super(props);
  this.delayedShowMarker = this.props.componentDidMount
};
  state = {
    isMarkerShown: false,
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }


  render() {
    return (
      <MyComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}
export default React.memo(MyFancyComponent)