export default function SearchBar({ value, onChange, autoFocus = false }) {
  return (
    <div className="search-bar">
      <label htmlFor="search-input" className="visually-hidden">Search bags</label>
      <input
        id="search-input"
        type="search"
        placeholder="Search by name or category"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoFocus={autoFocus}
      />
    </div>
  );
}
