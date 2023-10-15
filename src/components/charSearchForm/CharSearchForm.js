import { useState } from "react";

import "./CharSearchForm.scss"

import { Formik, Form, Field, ErrorMessage as FormikErrorMessage, ErrorMessage } from "formik"
import * as Yup from 'yup';
import { Link } from "react-router-dom";

import useMarvelService from '../../services/MarvelService';

const CharSearchForm = () => {
  const [char, setChar] = useState()
  const {loading, error, searchChar, clearError} = useMarvelService()

  const getLinkOnChar = (name) => {
    clearError()
    
    searchChar(name)
      .then(onCharLoaded)
  }

  const onCharLoaded = char => {
    setChar(char)
  }

  const errorMessage = error ? <div className="char__form-error"><ErrorMessage /></div> : null
  const results = !char ? null : char.id != null ?
                  <div>
                    <div className="char__form-wrapper">There is! Visit {char.name} page</div>
                    <Link to={`/character/${char.id}`}>
                      <div className="inner">page</div>
                    </Link>
                  </div> :
                  <div className="char__form-error">That character was not found. Chech the name and try again</div>
  
  return (
    <div className="char__form">
      <Formik
        initialValues={{
          charName: ''
        }}
        validationSchema={Yup.object({
          charName: Yup.string().required('This field is required')
        })}
        onSubmit={({charName}) => getLinkOnChar(charName)}
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
      {results}
      {errorMessage}
    </div>
  )
}

export default CharSearchForm;