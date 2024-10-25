import { useState } from 'react'
import css from './SearchForm.module.css'
import toast from 'react-hot-toast';


const SearchForm = ({onSubmit}) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const form = ev.currentTarget.value;
       if (form === "") {
           toast.error('Enter a search');
           return;
        };
        onSubmit(query)
      setQuery("");
  }

  return (
    <header className={css.header}>
  <form onSubmit={handleSubmit}>
              <input className={css.input}
          type="text"
          value={query}
          onChange={(ev) => setQuery(ev.target.value)}
          placeholder="Enter movie title"
          required
    />
    <button className={css.button} type="submit">Search</button>
      </form>
    </header>
  )
}

export default SearchForm