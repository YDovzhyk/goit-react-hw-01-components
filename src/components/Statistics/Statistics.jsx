import PropTypes from 'prop-types';
import s from "./statistics.module.css"

const Statistics = ({title, stats}) => {
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        }

    function hideElement(title) {
        if (title !== "undefined") {
            return "visible";
        } else {
            return "hidden"
        }
    }

    return (<section className={s.statistics}>
    <h2 className={s.title} style={{visibility: hideElement(title)}}>{title}</h2>
    <ul className={s.statlist}>
        {stats.map(({id, ...props}) =>
        <li key={id} className={s.item} style={{backgroundColor: getRandomHexColor()}}>
            <span className={s.label}>{props.label}</span>
            <span className={s.percentage}>{props.percentage + "%"}</span>
        </li>
        )}
    </ul>
    </section>);
}

export default Statistics;

Statistics.defaultProps = {
    title: "undefined",
    stats: []
    }

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        }))
    }