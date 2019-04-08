import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './shared/section';
import Entry from './entry';

export default class Projects extends Component {
  renderListItem(item, i) {
    return (
      <div className="item" key={`project_item_${i}`}>
        {this.renderProjectTitle(item)}
         -
        <span
          style={{ marginLeft: 5 }}
          className="project-tagline"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
      </div>
    );
  }
  renderProjectTitle(project) {
    let inner = project.title;
    if (project.url) {
      inner = <a href={project.url} target="_blank">{project.title}</a>;
    }
    return (<span className="project-title" style={{ marginRight: 5 }}>{inner}</span>);
  }
  renderIntro(description) {
    if (!description) { return null; }
    return (
      <div className="intro">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>);
  }
  renderCategory(category) {
    return (
      <div className="category-item">
        <h5>{category.name}</h5>
        <hr />
        {
          category.list.map((item, i) => this.renderListItem(item, i))
        }
      </div>
    );
  }
  render() {
    const {
      icon,
      sectionTitle,
      list,
      description
    } = this.props;
    return (
      <Section
        className="projects-section"
        icon={icon || 'archive'}
        id="projects"
        title={sectionTitle || 'Projects'}
      >
        { this.renderIntro(description) }
        <div className="projects">
          {
            list.map((item) => (
              <Entry key={item.companyLink} { ...item } />
            ))
          }
        </div>
      </Section>
    );
  }
}

Projects.propTypes = {
  description: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string.isRequired,
  icon: PropTypes.string
};

