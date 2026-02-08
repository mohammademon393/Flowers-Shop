const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input input-bordered w-full md:w-1/2 focus:border-rose-500"
      />
    </div>
  );
};

export default SearchBar;
