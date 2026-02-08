const PriceFilter = ({ max, setMax }) => {
  return (
    <div className="w-full md:w-64">
      <label className="text-sm font-medium text-gray-700">
        Max Price: ${max}
      </label>
      <input
        type="range"
        min="0"
        max="1000"
        value={max}
        onChange={(e) => setMax(e.target.value)}
        className="range range-rose-500 mt-2"
      />
    </div>
  );
};

export default PriceFilter;
