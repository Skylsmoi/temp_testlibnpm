import React from 'react'
import PropTypes from 'prop-types'
const className = require('classnames')

export function Loader ({ isFetching, children }) {
  const loaderModalClass = className('loadermodal', {'fetching': isFetching})

  return (
    <div className={loaderModalClass}>
      <div className='loadermodal__loader'>
        <i className='fa fa-spinner fa-pulse fa-3x' />
      </div>
      { children }
    </div>
  )
}

Loader.propTypes = {
  isFetching: PropTypes.bool.isRequired
}

export default Loader
