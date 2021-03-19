import  {useEffect, useState} from 'react'
import axios from 'axios';

export default function SearchHooks(query, pageNumber) {
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [books, setBooks] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    
    useEffect(() => {
        setBooks([])
    }, [query]);
    
    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel;
        axios({
            method: 'GET',
            url: 'https://openlibrary.org/search.json',
            params: {q: query, page: pageNumber},
            cancelToken: new axios.CancelToken(t => cancel = t)
        }).then(res => {
            console.log(res.data)
            setBooks(prevBooks => {
                return [...new Set([...prevBooks, ...res.data.docs.map(dt => dt.title)])]
            })
            setHasMore(res.data.docs.length > 0);
            setLoading(false);
        }).catch(e => {
            if(axios.isCancel(e)) return;
            setError(true);
        })

        
        return () => cancel();
    }, [query, pageNumber])
    return {loading, hasMore, books, error};
}
