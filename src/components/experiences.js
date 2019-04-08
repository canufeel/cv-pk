import React from 'react';
import PropTypes from 'prop-types';
import Section from './shared/section';
import Entry from './entry';

const Experiences = ({
  icon,
  sectionTitle,
  list
}) => (
  <Section
    className="experiences-section"
    icon={icon || 'briefcase'}
    title={sectionTitle || 'Experiences'}
    id="experiences"
  >
    {
      list.map(
        (item) => (
          <Entry key={item.title} { ...item } />
        )
      )
    }
  </Section>
);

Experiences.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  sectionTitle: PropTypes.string.isRequired,
  icon: PropTypes.string
};

export default Experiences;