// here is the component for the book info 

export const BookInfo = ({ year, genre, rating, description }) => {
    return (
        <div>
            <p>{year} {genre} {rating}⭐</p>
            <span>{description}</span>
        </div>
    );
}; 