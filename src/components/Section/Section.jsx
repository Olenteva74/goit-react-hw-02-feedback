import PropTypes from 'prop-types';
import css from "./Section.module.css"

export const Section = ({title, children}) => {
    return (
        <div>
            <h3 className={css.title}>{title}</h3>
            {children}
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}