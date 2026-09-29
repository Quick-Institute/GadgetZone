export default function PastOrdersPage() {
  return (
    <div className="bg-slate-50 p-8 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl border shadow-sm">
        <h2 className="text-2xl font-black mb-4">
          Past Orders
        </h2>

        <table className="w-full text-left text-sm divide-y">
          <thead>
            <tr className="text-slate-500">
              <th>Order #</th>
              <th>Date</th>
              <th>Type</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            <tr>
              <td className="py-3 font-bold">
                #GZ-88901
              </td>
              <td>2026-09-12</td>
              <td>Delivery</td>
              <td>$1,014.00</td>
              <td>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-bold">
                  Shipped
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}