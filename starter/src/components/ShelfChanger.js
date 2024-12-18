const ShelfChanger = ({book, onChangeShelf}) => {

    const handleChangeShelf = (event) => {
        const selected = event.target.value;
        onChangeShelf(book, selected);
    }

    return (
        <div className="book-shelf-changer">
            <select defaultValue={book.shelf} onChange={handleChangeShelf} name="selectShelf">
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">
                    Want to Read
                </option>
                <option value="read">
                    Read
                </option>
                <option value="noShelf">
                    None
                </option>
            </select>
        </div>
    )
}

export default ShelfChanger;