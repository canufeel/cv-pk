import React from 'react';
import PropTypes from 'prop-types';
import Section from './shared/section';
import Entry from './entry';
import CompanySection from './company-section';

const Education = ({
  icon,
  sectionTitle,
  list
}) => (
  <Section
    className="experiences-section"
    icon={icon || 'briefcase'}
    title={sectionTitle || 'Education'}
    id="experiences"
  >
    {
      list.map(
        (item) => (
          <div className="item" key={`exp_item_${item.title}`}>
            <div className="meta-container">
              <div className="meta">
                <div className="time">{item.date}</div>
                <div className="upper-row">
                  <h3 className="job-title">{item.school}</h3>
                </div>
                <div
                  className="company"
                >
                  <a>
                    {item.degree}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      )
    }
  </Section>
);

Education.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  sectionTitle: PropTypes.string.isRequired,
  icon: PropTypes.string
};

export default Education;