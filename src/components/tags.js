import React, { Component } from 'react';
import { Pie, PieChart, Label } from 'recharts';
import PropTypes from 'prop-types';
import Section from './shared/section';

const labelBuilderPercentage = ({ name, percent }) => `${name} ${(percent * 100).toFixed(2)} %`;

const labelBuilderMonths = ({
  name,
  percent,
  years,
  months
}) => {
  let toReturn = name;
  if (years) {
    toReturn += ` ${years} yrs,`;
  }
  toReturn += ` ${months} m`;
  return `${toReturn} (${(percent * 100).toFixed(0)} %)`;
};

export default class Tags extends Component {
  render() {
    const { icon, sectionTitle, byUsage, byTime } = this.props;
    return (
      <Section
        className="tags-section"
        icon={icon || 'rocket'}
        id="tags"
        title={sectionTitle || 'Skills & Proficiency'}
      >
        <div className="skills">
          <div className="skillset">
            <PieChart width={600} height={300}>
              <Pie
                data={ byUsage }
                nameKey="tag"
                dataKey="count"
                label={labelBuilderPercentage}
                innerRadius={70}
                outerRadius={90}
                fill="#2d7788"
              >
                <Label value={ 'In project terms' } position="center" />
              </Pie>
            </PieChart>
            <PieChart width={600} height={300}>
              <Pie
                data={ byTime }
                nameKey="tag"
                dataKey="total"
                label={labelBuilderMonths}
                innerRadius={70}
                outerRadius={90}
                fill="#2d7788"
              >
                <Label value={ 'By time' } position="center" />
              </Pie>
            </PieChart>
          </div>
        </div>
      </Section>
    );
  }
}

Tags.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  icon: PropTypes.string
};

