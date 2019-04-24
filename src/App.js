import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './assets/theme/styles-5.css';
import Section from './components/shared/section';
import Sidebar from './components/sidebar';
import Experiences from './components/experiences';
import Projects from './components/projects';
import Tags from './components/tags';
import { calculateTags } from './helpers/calculate-tags';
import EducationDetails from './components/sidebar/educationDetails';
import Education from './components/education';

export default class CV extends Component {
  renderExperiencesSection() {
    if (this.props.experiences) {
      return (<Experiences {...this.props.experiences} />);
    }
    return null;
  }
  renderProjectsSection() {
    if (this.props.projects) {
      return (<Projects {...this.props.projects} />);
    }
    return null;
  }
  renderTags() {
    const {
      projects,
      experiences
    } = this.props;

    if (projects && experiences) {
      const result = calculateTags({
        projects,
        experiences,
      });
      return (
        <Tags
          { ...{...this.props.tags, ...result } }
        />
      );
    }
    return null;
  }

  renderCareerProfile() {
    const { icon, sectionTitle, description } = this.props.careerProfile;
    const innerContent = (<div className="summary" dangerouslySetInnerHTML={{ __html: description }} />);
    return (
      <Section
        className="summary-section"
        icon={icon || 'user'}
        title={sectionTitle || 'Career Profile'}
      >
        {innerContent}
      </Section>
    );
  }

  renderEducationDetails(educationDetails) {
    if (educationDetails) {
      return (<EducationDetails list={educationDetails.list} title={educationDetails.sectionTitle} />);
    }
    return null;
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props.profile}
        />
        <div className="main-wrapper">
          {this.renderCareerProfile()}
          {this.renderTags()}
          {this.renderExperiencesSection()}
          {this.renderProjectsSection()}
          <Education
            icon={ 'graduation-cap' }
            list={this.props.profile.educationDetails.list}
          />
        </div>
      </div>
    );
  }
}

CV.propTypes = {
  profile: PropTypes.shape().isRequired,
  careerProfile: PropTypes.shape().isRequired,
  experiences: PropTypes.shape().isRequired,
  projects: PropTypes.shape().isRequired,
  tags: PropTypes.shape().isRequired
};
