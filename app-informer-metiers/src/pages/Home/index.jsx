import React, { useEffect, useState } from 'react';

const Home = ({ getRecipe }) => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    onSearch()
  }, [search])

  const onSearch = () => {
    if (search.length >= 3) {
      getRecipe(search);
    };
  }

  return (<>
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a href="/" className="navbar-brand me-2">Informer sur les métiers</a>
          <input type="text" 
                  placeholder="Recherche" 
                  value={search} 
                  onChange={(e) => setSearch(e.target.value)} />
        </div>
      </nav>
    </header>
  </>)
}

export default Home