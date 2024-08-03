import React, { useState, useEffect } from "react";
import Contacts from "./../data/chat-contacts.json";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      // Filtrează contactele pe baza query-ului
      const filteredResults = Contacts.filter((contact) =>
        contact.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search the person you need..."
      />
      {query && results.length > 0 && (
        <div className="results-list">
          <ul>
            {results.map((contact) => (
              <li key={contact.id}>
                <img src={`.${contact.img}`} alt={contact.name} />
                {contact.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
