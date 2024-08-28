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

    

    console.log(currentBooks, addedBook)

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
                <input placeholder="Book Author"
                type="text"
                onChange={handleChange}
                value={currentBooks.author}
                name={"author"}
                ></input>
                <button>Add Book</button>
            </form>
        </div>
        <div className="bookCardsDiv">
            {currentBooks.map((book, index) => {
                return <div key={index} className="bookCard"> 
                    <h3>{book.title}</h3>
                    <br></br>
                    <p>by {book.author}</p>
                </div>   
            })}
        </div>
    </div>
}

export default Bookshelf