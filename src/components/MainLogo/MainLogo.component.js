import React from 'react'
import PropTypes from 'prop-types'

const MainLogo = ({ width, height }) => (
  <svg data-name="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.51 226.73" width={width} height={height}>
    <defs>
      <linearGradient id="a" x1="181.06" y1="71.95" x2="180.11" y2="193.93" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ff3860" />
        <stop offset=".15" stopColor="#f73e72" />
        <stop offset=".46" stopColor="#e24da1" />
        <stop offset=".89" stopColor="#c165eb" />
        <stop offset="1" stopColor="#b86bff" />
      </linearGradient>
      <linearGradient id="b" x1="171.71" y1="186.91" x2="85.95" y2="207.87" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#b86bff" />
        <stop offset="1" stopColor="#3273dc" />
      </linearGradient>
      <linearGradient id="c" x1="13.57" y1="240.57" x2="140.35" y2="11.58" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ff470f" />
        <stop offset=".13" stopColor="#ff4518" />
        <stop offset=".35" stopColor="#ff4132" />
        <stop offset=".62" stopColor="#ff395b" />
        <stop offset=".65" stopColor="#ff3860" />
      </linearGradient>
    </defs>
    <path fill="url(#a)" d="M144.24 45.21l96.27 181.52h-47.73l-.01-.02-30.89-58.23L120.26 90l23.98-44.79z" />
    <path fill="url(#b)" d="M161.88 168.48l30.89 58.23-91.27-32.93 20.53-39.68 39.85 14.38z" />
    <path fill="url(#c)" d="M120.26 0l23.98 45.21L120.26 90 47.74 226.73H0L120.26 0z" />
  </svg>
)

export default MainLogo

MainLogo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}

MainLogo.defaultProps = {
  width: '30px',
  height: '30px',
}
