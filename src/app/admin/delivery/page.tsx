export default function AdminDeliveryPage() {
  return (
    <div className="bg-slate-100 p-8 min-h-screen">
      <div className="bg-white p-6 rounded-xl border space-y-6">
        <div className="border-b pb-3 flex space-x-4 text-sm font-bold">
          <span className="text-blue-600 border-b-2 border-blue-600 pb-2 cursor-pointer">
            🚚 Delivery Orders
          </span>

          <span className="text-slate-400 cursor-pointer">
            🏬 Store Pickup Orders
          </span>
        </div>

        <table className="w-full text-left text-sm divide-y">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Address</th>
              <th>Assign Courier</th>
              <th>Delivery Status</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            <tr>
              <td className="py-3 font-bold">
                #GZ-88901
              </td>

              <td>
                123 Tech St, Main City
              </td>

              <td>
                <select className="border p-1 rounded text-xs">
                  <option>Driver A</option>
                </select>
              </td>

              <td>
                <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded font-bold">
                  Out for Delivery
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}