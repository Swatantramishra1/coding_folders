import { useState, useRef, useCallback } from 'react';
import './App.css';
import SearchHooks from './searchHooks';

function App() {

   const [query, setQuery] = useState('');
   const [pageNumber, setPageNumber] = useState(1);

   const {books, hasMore, error, loading} =  SearchHooks(query, pageNumber);


   const observer = useRef();
   const lastElementRef = useCallback(node => {
      if(loading) return;
      if(observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        console.log("test");
        if(entries[0].isIntersecting && hasMore) {
          console.log("Visible");
          setPageNumber(prevPage => prevPage + 1);
        }
      })
      if(node) observer.current.observe(node);
   }, [loading, hasMore]);

   
   function handleChange(e) {
     setQuery(e.target.value);
     setPageNumber(1);
    }


  return (
    <div className="Container">
       <input type="text" value={query} onChange={handleChange}></input>
        {books.map((book, index) => {
                if(books.length === index+1) {
                    return <div ref={lastElementRef} key={book} className="SearchResults"> {book}</div>
                } else {
                 return <div key={book} className="SearchResults"> {book}</div>
                }
        })}

        
       <div className="Loading"> {loading ? 'loading ...' : ''}</div>
       <div className="Error"> {error && 'error...' }</div>
    </div>
  );
}

export default App;
