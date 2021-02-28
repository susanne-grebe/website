import React, { useState } from "react"
import styled from "@emotion/styled"

import GoogleMapReact from "google-map-react"

const SimpleMap = ({
  companyName,
  companyAddress,
  companyPostalCode,
  companyCity,
  companyEmail,
  companyPhone,
}) => {
  const [ show, setShow ] = useState(true)

  const onChildClickCallback = key => {
    setShow(!show)
  }

  const data = {
    companyName,
    companyAddress,
    companyPostalCode,
    companyCity,
    companyEmail,
    companyPhone,
  }

  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={ { key: "AIzaSyBB7Ial0ifpSHaexRUGDC_JL-QVuOrYnzg" } }
        defaultCenter={ defaultProps.center }
        defaultZoom={ defaultProps.zoom }
        yesIWantToUseGoogleMapApiInternals
        onChildClick={ () => onChildClickCallback() }
      >
        <MarkerPoint
          lat={ defaultProps.center.lat }
          lng={ defaultProps.center.lng }
          show={ show }
          data={ data }
        />
      </GoogleMapReact>
    </MapWrapper>
  )
}

const MapWrapper = styled.div`
  height: 100vh;
  width: 100%;
  @media (min-width: 768px) {
    height: 75vh;
  }
  @media (min-width: 992px) {
    height: 70vh;
  }
  
  @media (min-width: 1024px) {
    height: 50vh;
  }
`

const Marker = styled.div`
  background: #aa5d00;
  border-radius: 5px;
  z-index: 100;
  width: calc(320px - 2rem);
  padding: 1rem;
  position: relative;
  left: -132px;
  top: 20px;
  @media (min-width: 768px) {
    width: 540px;
    left: -250px;
  }
`

const MarkerTitle = styled.h2`
  font-size: 1.4rem;
  color: #fff;
`

const MarkerList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`

const MarkerListItem = styled.li`
  color: #fff;
  font-size: 1rem;
  padding: 0.2rem 0;
  a {
    color: #fff;
    text-decoration: underline;
  }
`

const MarkerComponent = ({ show, data }) => {
  return (
    <Marker data-show={ show.show }>
      <MarkerTitle>{ data.companyName }</MarkerTitle>
      <MarkerList>
        <MarkerListItem>{ data.companyAddress }</MarkerListItem>
        <MarkerListItem>
          { data.companyPostalCode }, { data.companyCity }
        </MarkerListItem>
        <MarkerListItem>
          <a
            href={ `tel:${ data.companyPhone }` }
            target="_blank"
            rel="noopener noreferrer"
          >
            { data.companyPhone }
          </a>
        </MarkerListItem>
        <MarkerListItem>
          <a
            href={ `mailto:${ data.companyEmail }` }
            target="_blank"
            rel="noopener noreferrer"
          >
            { data.companyEmail }
          </a>
        </MarkerListItem>
      </MarkerList>
    </Marker>
  )
}
const defaultProps = {
  center: {
    lat: 50.81431,
    lng: 6.05527,
  },
  zoom: 18,
}

const MarkerPoint = props => {
  const markerStyle = {
    border: "1px solid white",
    borderRadius: "5px",
    height: 20,
    width: 20,
    backgroundColor: props.show ? "#aa5d00" : "#7b341d",
    cursor: "pointer",
    zIndex: 100,
    position: "relative",
  }

  return (
    <>
      <div style={ markerStyle }/>
      { props.show &&
      <MarkerComponent show={ props.show } data={ props.data }/> }
    </>
  )
}

export default SimpleMap
