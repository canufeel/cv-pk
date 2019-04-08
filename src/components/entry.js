import React from 'react';
import CompanySection from './company-section';

const Entry = ({
  date,
  title,
  company,
  companyLink,
  companyShortDetail,
  tags,
  description,
  bulletPoints,
}) => (
  <div className="item" key={`exp_item_${title}`}>
    <div className="meta-container">
      <div className="meta">
        <div className="time">{date}</div>
        <div className="upper-row">
          <h3 className="job-title">{title}</h3>
        </div>
        <CompanySection
          company={company}
          companyLink={companyLink}
          companyShortDetail={companyShortDetail}
        />
      </div>
      <div className="tag-cloud">
        { !!tags && tags.length ? (
          <div className="skillset">
            { tags.map((tag) => (
              <div className="item" key={tag}>
                { tag }
              </div>
            ))
            }
          </div>
        ) : null }
      </div>
    </div>
    <div className="details">
      { !!description ? (
        <p dangerouslySetInnerHTML={{ __html: description }} />
      ) : null }
      {
        !!bulletPoints && !!bulletPoints.length ? (
          <div className="description-bulletpoints">
            {
              bulletPoints.map((bulletPoint) => (
                <div className="bulletpoint" key={ bulletPoint }>
                  { bulletPoint }
                </div>
              ))
            }
          </div>
        ) : null }
    </div>
  </div>
);

export default Entry;