const categories = ["All", "Flowers", "Gifts", "Services"];

const CategoryFilter = ({ active, setActive }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`btn btn-sm ${
            active === cat
              ? "bg-rose-500 text-white"
              : "btn-outline border-rose-400 text-rose-500"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
