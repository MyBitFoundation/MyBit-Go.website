import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { industries } from './constants/industries'
import stylesheet from './industries-main.scss'


export class IndustriesMain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndustry: null
    }
  }

  setActiveIndustry(selectedIndustry) {
    this.setState({ selectedIndustry })
  }

  render(){
    const { selectedIndustry } = this.state;
    
    return(
      <div ref={this.props.setRef} className="IndustriesMain">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {industries.map((val) => (
          <div key={val.title}>
            <div 
              className={classNames({
                "IndustriesMain__industry": true,
                'IndustriesMain__industry--is-active': val.title === selectedIndustry
              })} 
              onClick={() =>
              this.setActiveIndustry(val.title)
            }
            >
              <h2 className={"IndustriesMain__industry-title " + val.icon}>{val.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: val.examples }} className="IndustriesMain__industry-examples" />
              <div className="IndustriesMain__industry-info">
                <p className="IndustriesMain__industry-value">{val.industryValue}$ Trillion</p>
                <p className="IndustriesMain__industry-predicted">Predicted market value</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

IndustriesMain.propTypes = {
  setRef: PropTypes.func.isRequired
}
