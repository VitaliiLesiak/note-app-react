import './search.styles.css'

function Search(props) {
    function filterNote(text) {
        props.searchNote(text.target.value)
    }
    return (
        <div className="search">
            <input type="text" name="search" id="search" placeholder='Search note' onChange={filterNote} />
        </div>
    )
}

export default Search