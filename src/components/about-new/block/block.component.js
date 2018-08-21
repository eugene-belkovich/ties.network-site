import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import './block.styles.css'

export const Block = ({ children, className, id, style, title }) => (
  <div
    className={classNames('block', className)}
    id={id}
    style={style}
  >
    <div className="block-container">
      {title && (
        <div className="block-title">
          {title}
        </div>
      )}

      <div className="block-content">
        {children}
      </div>
    </div>
  </div>
)

Block.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.shape({
    background: PropTypes.string,
  }),
  title: PropTypes.string,
}
