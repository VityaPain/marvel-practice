import "./CharSearchForm.scss"

import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from "formik"
import * as Yup from 'yup';

import useMarvelService from '../../services/MarvelService';


const CharSearchForm = () => {
  const {loading, error, searchChar, clearError} = useMarvelService()

  const getLinkOnChar = () => {
    searchChar('Spider-man').then(data => {console.log(data)})
  }
  
  return (
    <div className="char__form">
      <Formik
        initialValues={{
          charName: ''
        }}
        validationSchema={Yup.object({
          charName: Yup.string().required('This field is required')
        })}
        onSubmit={() => getLinkOnChar()}
      >
        <Form>
          <label className="char__form-label" htmlFor="charName">Or find a character by name:</label>
          <div className="char__form-row">
            <Field 
              id="charName"
              name="charName"
              type="text"
            />
            <button
              type="submit"
              className="button button__main"
            >
              <div className="inner">find</div>
            </button>
          </div>
          <FormikErrorMessage component="div" className="char__form-error" name="charName"/>
        </Form>
      </Formik>
    </div>
  )
}

export default CharSearchForm;