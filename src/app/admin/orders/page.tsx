export default function AdminOrdersPage() {
  return (
    <div className="bg-slate-100 p-8 min-h-screen">
      <div className="bg-white p-6 rounded-xl border space-y-4">
        <h2 className="text-xl font-bold">
          Manage Customer Orders
        </h2>

        <table className="w-full text-left text-sm divide-y">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Fulfillment</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            <tr>
              <td className="py-3 font-bold">
                #GZ-88901
              </td>
              <td>
                John Doe
              </td>
              <td>
                Delivery
              </td>
              <td>
                <select className="border p-1 rounded text-xs bg-white">
                  <option>Processing</option>
                  <option>Ready</option>
                  <option>Completed</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}