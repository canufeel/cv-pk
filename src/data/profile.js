import userImg from '../assets/profile.jpg';

const profile = {
  name: 'Petr Kosikhin',
  title: 'Lead Developer',
  mail: 'mq3_storm@mail.ru',
  phoneNumber: '+7 916 4190453',
  website: '',
  linkedin: 'linkedin.com/in/petr-kosikhin-16816113/',
  github: 'github.com/canufeel',
  imagePath: userImg,
  twitter: null,
  educationDetails: {
    sectionTitle: '',
    list: [
      { degree: 'BSc in Engineering', school: 'Moscow Technical university of Telecoms and Informatics', date: '2001-2006' },
      { degree: 'MBA', school: 'Moscow School of Management Skolkovo', date: '2012-2013' }
    ]
  },
  languages: {
    sectionTitle: 'Languages',
    list: [{ name: 'Russian', level: 'Native' }, { name: 'English', level: 'Fluent' }]
  },
  interests: {
    sectionTitle: '',
    list: ['Cryptography', 'Snowboarding', 'Burgers', 'Travelling']
  }
};

export default profile;
