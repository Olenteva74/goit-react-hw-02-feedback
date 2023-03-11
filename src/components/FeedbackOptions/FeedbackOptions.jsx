import PropTypes from 'prop-types';
import css from "./FeedbackOptions.module.css"

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={css.options}>
                {options.map(option => (
                    <button className={css.optionsButton }key={option} type="button" data-name={option} onClick={onLeaveFeedback}>{option}</button>
                ))}
                </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func
}