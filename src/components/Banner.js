import React from 'react'

const bannerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: '#aa0000',
  minWidth: '100vw',
}

const iconCount = 3

class Banner extends React.Component {
  render() {
    return (
      <div className="Banner" style={bannerStyle}>
        {[...Array(iconCount)].map((x, i) =>
          <img src="favicon.ico" alt="n/a" key={i}></img>
        )}
      </div>
    )
  }
}

export default Banner
