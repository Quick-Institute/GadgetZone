export default function AdminProductsPage() {
  return (
    <div className="bg-slate-100 p-8 min-h-screen">
      <div className="bg-white p-6 rounded-xl border space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">
            Product Catalog
          </h2>

          <button className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded">
            + Add Product
          </button>
        </div>

        <table className="w-full text-left text-sm divide-y">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            <tr>
              <td className="py-2">
                PRD-01
              </td>
              <td className="font-bold">
                Pro Smartphone X12
              </td>
              <td>
                Smartphones
              </td>
              <td>
                $999.00
              </td>
              <td>
                24
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}