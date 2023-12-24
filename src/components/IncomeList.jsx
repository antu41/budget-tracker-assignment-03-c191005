import { formatMoney } from "../utils/format-money";
import { useEntries } from "../hooks/useEntries";

export default function IncomeList() {
  const { entries, deleteEntry, editEntry } = useEntries();
  const incomeEntries = entries.filter((entry) => entry.type === "income");

  return (
    <div>
      <h2 className="border-b pb-2 font-medium text-green-600">Income</h2>
      {incomeEntries.length === 0 && (
        <p className="py-2.5 text-gray-600">There are no expenses.</p>
      )}

      <ul id="income-list" className="divide-y">
        {incomeEntries.map((item) => {
          return (
            <li key={item.id} className="py-2.5">
              <div className="group flex justify-between gap-2 text-sm">
                <span>{item.title}</span>

                <div>
                  <span className="text-green-600">
                    {formatMoney(item.value)}
                  </span>
                  <span className="ml-2 hidden cursor-pointer font-medium text-blue-500 group-hover:inline-block"
                  onClick={()=>
                  editEntry(item.id)}>
                    Edit
                  </span>                 
                  <span className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                  onClick={()=>
                  deleteEntry(item.id)}>
                    Delete
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
