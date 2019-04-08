import React, { Component } from 'react';
import { Pie, PieChart, Label, Cell } from 'recharts';
import PropTypes from 'prop-types';
import Section from './shared/section';

const COLORS = [
  '#43D2B6',
  '#37C8BC',
  '#2ABEC2',
  '#42A8C0',
  '#2397AF',
  '#03869D',
  '#00667C',
  '#00576C',
  '#00475C',
  '#002A3E'
];

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
                fill="#42A8C0"
              >
                {
                  byUsage.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                }
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
                fill="#42A8C0"
              >
                {
                  byTime.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                }
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

