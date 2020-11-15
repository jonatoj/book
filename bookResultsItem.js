import React from 'react'
import './BookResultItem.css'

function BookResultItem({ book }) {
	return (
		<article key={book.id} className="book-result">
			{book.volumeInfo.imageLinks &&
				book.volumeInfo.imageLinks.thumbnail && (
					<img
						src={book.volumeInfo.imageLinks.thumbnail}
						alt={`cover for ${book.volumeInfo.title}`}
					/>
				)}
			<h2 className="md:pl-6 text-3xl">{book.volumeInfo.title}</h2>
			<p className="md:pl-6 font-light">{book.volumeInfo.description}</p>
		</article>
	)
}

export default BookResultItem