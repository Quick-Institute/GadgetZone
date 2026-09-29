export default function AdminCategoriesPage() {
  return (
    <div className="bg-slate-100 p-8 min-h-screen">
      <div className="bg-white p-6 rounded-xl border max-w-2xl space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">
            Categories
          </h2>

          <button className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded">
            + Add Category
          </button>
        </div>

        <ul className="divide-y text-sm">
          <li className="py-2 flex justify-between">
            <span>Smartphones</span>
            <span className="text-xs text-slate-500">
              34 items
            </span>
          </li>

          <li className="py-2 flex justify-between">
            <span>Laptops</span>
            <span className="text-xs text-slate-500">
              18 items
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}