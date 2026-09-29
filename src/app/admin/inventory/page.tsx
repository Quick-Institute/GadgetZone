export default function AdminInventoryPage() {
  return (
    <div className="bg-slate-100 p-8 min-h-screen">
      <div className="bg-white p-6 rounded-xl border space-y-4">
        <div className="p-3 bg-amber-100 text-amber-900 border border-amber-300 rounded-lg text-xs font-bold">
          ⚠️ Low Stock Alerts: 1 Item Below Minimum Threshold
        </div>

        <table className="w-full text-left text-sm divide-y">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Stock</th>
              <th>Threshold</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            <tr>
              <td className="py-3 font-bold">
                Wireless Mouse
              </td>
              <td>2</td>
              <td>5</td>
              <td>
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded font-bold">
                  Low Stock
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}