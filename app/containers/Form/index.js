import React from 'react'
import { Field, reduxForm } from 'redux-form'

const CategoryForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (


    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Type the $ you have for each catigory</label>
        <div className="input-group">
          <span className="input-group-addon">Gold</span>
          <Field name="gold" component="input" type="number" placeholder="1,000,000" className="form-control"/>
          <span className="input-group-addon">.00</span>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">Bonds</span>
          <Field name="bonds" component="input" type="number" placeholder="1,000,000" className="form-control"/>
          <span className="input-group-addon">.00</span>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">Stocks</span>
          <Field name="stocks" component="input" type="number" placeholder="1,000,000" className="form-control"/>
          <span className="input-group-addon">.00</span>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">Real Estate</span>
          <Field name="realEstate" component="input" type="number" placeholder="1,000,000" className="form-control"/>
          <span className="input-group-addon">.00</span>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">Mutual Funds</span>
          <Field name="mutualFunds" component="input" type="number" placeholder="1,000,000" className="form-control"/>
          <span className="input-group-addon">.00</span>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'category'  // a unique identifier for this form
})(CategoryForm)
