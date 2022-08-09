import React from 'react';
import PropTypes from 'prop-types';
import SocialNetwork from './SocialNetwork';

const SocialNetworks = (props) => {
  const { title, networks } = props;
  return (
    <div className={'col social-network'}>
      <p className="text-up-01 text-extra-bold text-uppercase">{title}</p>
      {networks.map(function (network, i) {
        return <SocialNetwork key={i} id={network.id} href={network.href} />;
      })}
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
SocialNetworks.propTypes = {
  title: PropTypes.string.isRequired,
  networks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
SocialNetworks.defaultProps = {
  title: 'Redes Sociais',
};

export default SocialNetworks;
