import { error } from 'next/dist/build/output/log';
import React from 'react';
import BookCard from '../components/book/BookCard';
const getBooks = async()=>{
    const res =await fetch("http://localhost:3001/books", {next : {revalidate:10}})
    if(!res.ok){
        throw new error("Failed to fetch book data")
    }
    return res.json()
}
const BookPage =async () => {
    const books= await getBooks();
    return (
        <div>
            <h2 className="text-2xl">Books Page {books.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.map(book=><BookCard key={book.id} book={book}/>)}
            </div>
        </div>
    );
};

export default BookPage;