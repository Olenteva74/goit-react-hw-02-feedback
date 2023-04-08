import PropTypes from 'prop-types';
import { StatisticsWrapper, StatisticsOptionName } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
       <StatisticsWrapper>
       <StatisticsOptionName>Good: {good}</StatisticsOptionName>
       <StatisticsOptionName>Neutral: {neutral}</StatisticsOptionName>
       <StatisticsOptionName>Bad: {bad}</StatisticsOptionName> 
       <StatisticsOptionName>Total: {total}</StatisticsOptionName>
       <StatisticsOptionName>Positive feedback: {positivePercentage}%</StatisticsOptionName>    
       </StatisticsWrapper>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}