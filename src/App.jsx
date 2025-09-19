import { useState } from 'react'
import booksData from './data/books.json'
import './App.css'

function Book({ title, price, subtitle, image, url }) {
  return (
    <div className="book">
      {image && <img src={image} alt={title} className="book-image" />}
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="learn-more">Learn more</a>
    </div>
  )
}

function App() {
  const [books, setBooks] = useState(booksData)

  const handleAddBook = () => {
    // For now, just log - you can implement actual add functionality later
    console.log('Add book clicked')
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Sarah's Awesome Book Catalog</h1>
      </header>
      
      <main className="main-content">
        <div className="books-grid">
          {books.map((book) => (
            <Book 
              key={book.isbn13} 
              title={book.title} 
              price={book.price}
              subtitle={book.subtitle}
              image={book.image}
              url={book.url}
            />
          ))}
          <div className="add-book-card" onClick={handleAddBook}>
            <div className="add-book-text">Add Book +</div>
          </div>
        </div>
      </main>
      
      <footer className="footer">
        <p>© 2025 Sarah's Book Catalog</p>
      </footer>
    </div>
  )
}

export default App
