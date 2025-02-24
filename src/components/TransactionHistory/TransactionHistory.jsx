import css from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) => {
    return (
        <div>
            <h2 className={css.title}>Transactions History</h2>
       <table className={css.table}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(transaction => (
        <tr key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
                    ))}
  </tbody>
</table>
</div>
    )
}

export default TransactionHistory;