import moment from 'moment';

const durationFromDateStr = date => {
  const dateParts = date.split(' - ');
  let duration;
  if (dateParts[1] === 'Now') {
    duration = [
      moment.duration(
        moment().diff(
          moment(dateParts[0], 'MMMM YYYY')
        )
      )
    ]
  } else {
    duration = [
      moment.duration(
        moment(dateParts[1], 'MMMM YYYY')
          .diff(
            moment(dateParts[0], 'MMMM YYYY')
          )
      )
    ];
  }
  return duration;
};

export const calculateTags = ({
  projects,
  experiences,
}) => {
  const allTags = {};
  const timeIntervals = {};
  const arr = [ ...projects.list, ...experiences.list ];
  arr.forEach(
    (
      {
        tags,
        date,
      }
    ) => {
      tags.forEach((tag) => {
        if (typeof allTags[ tag ] === 'undefined') {
          allTags[ tag ] = 1;
          timeIntervals[tag] = [durationFromDateStr(date)];
        } else {
          allTags[ tag ] += 1;
          timeIntervals[tag].push(durationFromDateStr(date))
        }
      });
    }
  );
  const initial = 1;
  let highest = initial;
  const allTagsArr = Object.entries(allTags)
    .map(([tag, count]) => {
    highest = highest < count ? count : highest;
    return {
      tag,
      count,
    };
  })
    .sort(
      (
        {
          count: countA
        },
        {
          count: countB
        }
      ) => countB - countA
    )
    .slice(0, 10);
  const perTagDurations = Object.entries(timeIntervals)
    .map(
      (
        [
          tag,
          durations
        ]
      ) => {
        const duration = durations.reduce((acc, item) => acc.add(item), moment.duration());
        return {
          tag,
          total: duration.years() * 12 + duration.months(),
          years: duration.years(),
          months: duration.months(),
        };
      }
    )
    .slice(0, 10);
  return { byUsage: allTagsArr, byTime: perTagDurations };
};