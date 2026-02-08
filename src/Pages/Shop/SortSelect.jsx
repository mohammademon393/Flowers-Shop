const SortSelect = ({ setSort }) => {
  return (
    <select
      onChange={(e) => setSort(e.target.value)}
      className="select select-bordered focus:border-rose-500"
    >
      <option value="">Sort By</option>
      <option value="low">Price: Low → High</option>
      <option value="high">Price: High → Low</option>
      <option value="new">Newest</option>
    </select>
  );
};

export default SortSelect;
