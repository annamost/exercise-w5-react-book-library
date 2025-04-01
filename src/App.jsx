import "./App.css";
import data from "./data.json";
import { Book } from "./components/Book";


function App() {
  const { books } = data;

  return (
    <>
      <div>
        {books.map((book, index) => {
          return <Book key={index} book={book} />
        })}
      </div>


    </>
  );
}

export default App;
