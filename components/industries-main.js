import React from 'react'
import PropTypes from 'prop-types'
import { industries } from './constants/industries'
import stylesheet from './industries-main.scss'

export const IndustriesMain  = ({ setRef }) => (
  <div ref={setRef} className="IndustriesMain">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    {industries.map((val) => (
      <div key={val.title}>
        <div className="IndustriesMain__industry">
          <h2 className={"IndustriesMain__industry-title " + val.icon}>{val.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: val.content }} />
        </div>
      </div>
    ))}
  </div>
);


IndustriesMain.propTypes = {
  setRef: PropTypes.func.isRequired
}
