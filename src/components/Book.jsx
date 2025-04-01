// Here is the render of the individual book 
import { Title } from "./Title";
import { Author } from "./Author";
import { BookInfo } from "./BookInfo";
import { CoverImage } from "./CoverImage";


export const Book = ({ book }) => {
    return (
        <div>
            <Title title={book.title} />
            <Author author={book.author} />
            <BookInfo year={book.year} genre={book.genre} rating={book.rating} description={book.description} />
            <CoverImage image={book.image} />
        </div>
    );
}; 