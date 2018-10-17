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
              <h2 className={"IndustriesMain__industry-title " + val.icon}>{this.props.translator(val.title)}</h2>
              <div dangerouslySetInnerHTML={{ __html: this.props.translator(val.examples) }} className="IndustriesMain__industry-examples" />
              <div className="IndustriesMain__industry-info">
                <p className="IndustriesMain__industry-value">{this.props.translator(val.industryValue)}</p>
                <p className="IndustriesMain__industry-predicted">{this.props.translator('common:mybit_home_industries_predicted_value')}</p>
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
