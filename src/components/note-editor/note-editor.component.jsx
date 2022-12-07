
import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import NoteColors from '../note-colors/note-colors.components'

function NoteEditor(props) {
    const [color, setColor] = useState('grey')
    const formik = useFormik({
        initialValues: {
            title: '',
            text: ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required(),
            text: Yup.string().required()
        }),
        onSubmit: function (values) {
            props.text({
                title: values.title,
                text: values.text,
                color: color
            })
        }
    })
    function test(text) {
        setColor(text.target.id)
    }
    return (
        <div className='notepad-form'>
            <form onSubmit={formik.handleSubmit}>
                <div className='container-notepad'>
                    <label htmlFor='title'>Title: </label>
                    <input type="text" name="title" id="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                        className={`${formik.touched.title && formik.errors.title ? 'danger' : ''}`} />
                    {formik.touched.title && formik.errors.title && (
                        <span className='error'>{formik.errors.title}</span>
                    )}
                </div>
                <div className='container-notepad'>
                    <label htmlFor='text'>Text: </label>
                    <textarea name="text" id="text" cols="30" rows="10"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.text}
                        className={`${formik.touched.text && formik.errors.text ? 'materialize-textarea danger' : 'materialize-textarea'}`}></textarea>
                    {formik.touched.text && formik.errors.text && (
                        <span className='error'>{formik.errors.text}</span>
                    )}
                </div>
                <div className='sumbitPos'>
                    <div className='palitres'>
                        <NoteColors onColorChanged={test} />
                    </div>
                    <button type='submit' id='submit' className='waves-effect waves-light btn pink darken-4' disabled={!(formik.isValid && formik.dirty)}>ADD</button>
                </div>
            </form>
        </div>
    )
}
export default NoteEditor