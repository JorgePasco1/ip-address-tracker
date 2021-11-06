import PropTypes from 'prop-types';

import './ResultCard.css';

const ResultCard = ({ ipAddress, location, timezone, isp }) => {
  return (
    <div className="result-card">
      <CardSection title="ip address">{ipAddress}</CardSection>
      <CardSection title="location">{location}</CardSection>
      <CardSection title="timezone">{timezone}</CardSection>
      <CardSection title="isp">{isp}</CardSection>
    </div>
  );
};

const CardSection = ({ title, children }) => {
  return (
    <div className="card-section">
      <h2 className="card-section__title">{title}</h2>
      <div className="card-section__content">{children}</div>
    </div>
  );
};

ResultCard.propTypes = {
  ipAddress: PropTypes.string,
  location: PropTypes.string,
  timezone: PropTypes.string,
  isp: PropTypes.string,
};

ResultCard.defaultProps = {
  ipAddress: '192.168.1.1',
  location: 'Brooklyn, NY 10001',
  timezone: 'UTC -05:00',
  isp: 'SpaceX Starlink',
};

CardSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ResultCard;
