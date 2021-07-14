import { useField } from 'formik'
import React from 'react'
import { FormField } from 'semantic-ui-react'

export default function KodlamaioTextInput({...props}) {
//console.log(props)
   const [field, meta] = useField(props)
   // console.log(meta)

   //hata varsa ve touchsa toch: true false
    return (
      <FormField error= {meta.touched && !!meta.error ? (
        <label pointing basic color= 'red' content= {meta.error}>  </label>
      ):null} > 
          <input {...props}/>
      </FormField>
    )
}
