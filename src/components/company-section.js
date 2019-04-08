import React from 'react';

const CompanySection = ({
  company,
  companyLink,
  companyShortDetail,
}) => company && companyLink ? (
  <div
    className="company"
  >
    <a
      href={companyLink}
      target="_blank"
    >
      {company}
    </a>
    {companyShortDetail || ''}
  </div>
) : null;

export default CompanySection;
