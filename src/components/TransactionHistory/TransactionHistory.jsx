import PropTypes from 'prop-types';
import s from "./transactions.module.css"

function getTrColor (index) {
    if (index % 2 === 0) {
        return '#b1d9f4';
    } else {
        return '#fdfdfd';
    }
}
const TransactionHistory = ({items}) => {
    return (<table className={s.transactionHistory}>
    <thead>
        <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
        </tr>
    </thead>
    {items.map(({id, ...props}, index) => 
    <tbody key={id}>
        <tr style={{backgroundColor: getTrColor(index)}}>
        <td>{props.type}</td>
        <td>{props.amount}</td>
        <td>{props.currency}</td>
        </tr>
    </tbody>
    )}
    </table>)
}

export default TransactionHistory;

TransactionHistory.defaultProps = {
    items: []
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        }))
    }