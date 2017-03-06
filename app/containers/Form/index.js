import React from 'react'
import { Field, reduxForm } from 'redux-form'

const CategoryForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (


    <form onSubmit={handleSubmit}>
      <div>
        <label>Type the $ you have for each catigory</label>
        <div className="input-group">
          <span className="input-group-addon">Gold</span>
          <Field name="gold" component="input" type="number" placeholder="1,000,000" className="form-control"/>
          <span className="input-group-addon">.00</span>
        </div>
      </div>
      <div>
        <div className="input-group">
          <span className="input-group-addon">Bonds</span>
          <Field name="bonds" component="input" type="number" placeholder="1,000,000" className="form-control"/>
          <span className="input-group-addon">.00</span>
        </div>
      </div>
      <div>
        <div className="input-group">
          <span className="input-group-addon">Stocks</span>
          <Field name="stocks" component="input" type="number" placeholder="1,000,000" className="form-control"/>
          <span className="input-group-addon">.00</span>
        </div>
      </div>
      <div>
        <div className="input-group">
          <span className="input-group-addon">Real Estate</span>
          <Field name="realEstate" component="input" type="number" placeholder="1,000,000" className="form-control"/>
          <span className="input-group-addon">.00</span>
        </div>
      </div>
      <div>
        <div className="input-group">
          <span className="input-group-addon">Mutual Funds</span>
          <Field name="mutualFunds" component="input" type="number" placeholder="1,000,000" className="form-control"/>
          <span className="input-group-addon">.00</span>
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="Email"/>
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
          <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option></option>
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field name="employed" id="employed" component="input" type="checkbox"/>
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea"/>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'category'  // a unique identifier for this form
})(CategoryForm)
