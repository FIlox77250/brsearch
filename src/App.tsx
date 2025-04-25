import './index.css';

function App() {
  return (
    <div className="main-container">
      <div className="logo-brsearch">
        <span className="br">BR</span>
        <span className="search">search</span>
      </div>
      <form className="search-bar">
        <span className="icon left">
          {/* Loupe svg */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="#9AA0A6" strokeWidth="2"/><path stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round" d="M20 20l-3.5-3.5"/></svg>
        </span>
        <input
          className="input-search"
          type="text"
          placeholder="Effectuez une recherche sur BRsearch ou saisissez une URL"
        />
        <span className="icon right">
          {/* Microphone svg */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4285F4" viewBox="0 0 24 24"><path d="M12 15a3 3 0 0 0 3-3V8a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3Z"/><path fill="#34A853" d="M19 11v1a7 7 0 1 1-14 0v-1h2v1a5 5 0 1 0 10 0v-1h2Z"/></svg>
        </span>
        <span className="icon right">
          {/* Appareil photo/icône image Google Lens  */}
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5" fill="#4285F4"/><path d="M12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#fff"/><rect x="3" y="3" width="18" height="18" rx="5" stroke="#9AA0A6" strokeWidth="2" fill="none"/></svg>
        </span>
      </form>
    </div>
  );
}

export default App;
