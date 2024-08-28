import React from "react"
import './index.css'


function Bookshelf() {

    const [currentBooks, setCurrentBooks] = React.useState([
        {title: 'The Fellowship of the Ring', author: 'J.R.R Tolkien'},
        {title: 'The Lion, the Witch, and the Wardrobe', author: 'C.S. Lewis'}
    ])
    const [addedBook, setAddedBook] = React.useState([{title: '', author: ''}])

    function handleSubmit(e) {
        e.preventDefault()
        const newBooks = structuredClone(currentBooks)
        newBooks.push(addedBook)
        setCurrentBooks(newBooks)
        setAddedBook(addedBook)
    }

    function handleChange(e) {
        const newBook = structuredClone(addedBook)
        newBook[e.target.name] = e.target.value
        setAddedBook(newBook)
    }

    function clearBookshelf() {
        let emptyBooks = structuredClone(currentBooks);
        emptyBooks = [];
        console.log(emptyBooks)
        setCurrentBooks(emptyBooks)
        setAddedBook(addedBook)
    }

    function removeBook(title, author) {
        const newBooks = structuredClone(currentBooks);
        const updatedBooks = newBooks.filter((book) => {
            return book.title !== title || book.author !== author
        })
        setCurrentBooks(updatedBooks)   
    }

    return <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <input 
                placeholder="Book Title" 
                type="text"
                onChange={handleChange}
                value={currentBooks.title}
                name={"title"}>
                </input>
                <br></br>
                <input placeholder="Book Author"
                type="text"
                onChange={handleChange}
                value={currentBooks.author}
                name={"author"}
                ></input>
                <br></br>
                <button>Add Book</button>
                <br></br>
            </form>
            <button onClick={clearBookshelf}>Clear Bookshelf</button>
        </div>
        <div className="bookCardsDiv">
            {currentBooks.map((book, index) => {
                return <div key={index} className="bookCard"> 
                    <h3>{book.title}</h3>
                    <br></br>
                    <p>by {book.author}</p>
                    <button onClick={() =>removeBook(book.title, book.author)} className="bookCardButton">Remove Book</button>
                </div>   
            })}
        </div>
    </div>
}

export default Bookshelf