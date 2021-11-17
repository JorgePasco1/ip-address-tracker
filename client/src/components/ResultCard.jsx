import PropTypes from 'prop-types';

import './ResultCard.css';

const ResultCard = ({ ipAddress, location, timezone, isp }) => {
  return (
    <div className="result-card">
      {ipAddress || location || timezone || isp ? (
        <>
          <CardSection title="ip address">{<p>{ipAddress}</p>}</CardSection>
          <CardSection title="location">{<p>{location}</p>}</CardSection>
          <CardSection title="timezone">{<p>UTC {timezone}</p>}</CardSection>
          <CardSection title="isp">{<p>{isp}</p>}</CardSection>
        </>
      ) : (
        <p>Enter an IP address to start</p>
      )}
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
  ipAddress: '',
  location: '',
  timezone: '',
  isp: '',
};

CardSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ResultCard;
