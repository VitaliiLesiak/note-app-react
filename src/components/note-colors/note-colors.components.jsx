import './note-colors.styles.css'
function NoteColors(props) {
    let colors = ["grey", "forestgreen", "tomato", "yellowgreen", "firebrick", "brown", 'blue', 'orange', 'white'];
    return (
        <div className="colors-list">
            {
                colors.map((el, i) => {
                    return (
                        <div key={i} style={{backgroundColor: el}}>
                            <input
                                className="radio-custom"
                                id={el}
                                type="radio"
                                name="color"
                                onChange={(e)=>props.onColorChanged(e, el)}
                            />
                            <label className="radio-custom-label" htmlFor={el}/>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default NoteColors
