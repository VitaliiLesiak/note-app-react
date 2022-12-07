import { useFormik } from 'formik'
import * as Yup from 'yup'


export default function TodoEditor(props) {
    const formik = useFormik({
        initialValues: {
            name: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
        }),
        onSubmit: function (values) {
            props.text(values.name)
        }
    })
    function allText(event) {
        if (event.keyCode === 13 || event.key === 'Enter') {
            props.text(event.target.value)
        }
    }
    return (
        // <div className="todo-editor">
        //     <input type="text" name="todo-alert" id="todo-alert" placeholder="What you need to do?" onKeyUp={allText} />
        // </div>
        <div className='notepad-form'>
            <form onSubmit={formik.handleSubmit}>
                <div className='container-notepad'>
                    <label htmlFor='name'>Title: </label>
                    <input type="text" name="name" id="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name} />
                    {formik.touched.name && formik.errors.name && (
                        <span className='error'>{formik.errors.name}</span>
                    )}
                </div>
                <div className='sumbitPos'>
                    <button type='submit' id='submit' className='waves-effect waves-light btn pink darken-4' disabled={!(formik.isValid && formik.dirty)}>ADD</button>
                </div>
            </form>
        </div>
    )
}