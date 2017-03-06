import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form'

const CategoryForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Type the $ you have for each catigory</label>
        <div className="input-group">
          <span className="input-group-addon" style={{backgroundColor: '#1f77b4', color: 'white'}}>Gold</span>
          <Field name="gold" component="input" type="number" placeholder="1,000,000" className="form-control"/>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon" style={{backgroundColor: '#ff7f0e', color: 'white'}}>Bonds</span>
          <Field name="bonds" component="input" type="number" placeholder="1,000,000" className="form-control"/>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon" style={{backgroundColor: '#2ca02c', color: 'white'}}>Stocks</span>
          <Field name="stocks" component="input" type="number" placeholder="1,000,000" className="form-control"/>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon" style={{backgroundColor: '#d62728', color: 'white'}}>Real Estate</span>
          <Field name="realEstate" component="input" type="number" placeholder="1,000,000" className="form-control"/>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon" style={{backgroundColor: '#9467bd', color: 'white'}}>Mutual Funds</span>
          <Field name="mutualFunds" component="input" type="number" placeholder="1,000,000" className="form-control"/>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'category'  // a unique identifier for this form
})(CategoryForm)
