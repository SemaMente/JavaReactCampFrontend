import React from 'react'
import { Formik, Form, Field , ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { FormField, Button } from 'semantic-ui-react'
import KodlamaioTextInput from '../utilities/customFormControls/KodlamaioTextInput'
export default function ProductAdd() {

    const initialValues = { productName: '', unitPrice: 10 }
    const schema = Yup.object({

        productName: Yup.string().required('Ürün adı zorunludur.'),// metinsel girilecek ve zorunlu
        unitPrice: Yup.number().required('Ürün fiyatı zorunludur.'),
    })//doğrulamma yapmamızı sağlayan yapı

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form className='ui form'>
                    <KodlamaioTextInput name='productName' placeholder='Ürün adı'/>
                    <KodlamaioTextInput name='unitPrice' placeholder='Ürün fiyatı'/>
                    <Button color= 'green' type='submit'>Ekle</Button>
                </Form>
            </Formik>
        </div >
    )
}
