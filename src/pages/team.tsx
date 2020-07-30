import React from 'react';
import Member from '../components/Member';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import SectionHeading from '../components/shared/SectionHeading';

const teamMembers = [
  { name: 'Praveen Kumar', img: require('../images/team/pk.jpeg'), role: 'Web Developer', ln: 'https://www.linkedin.com/in/praveen-kumar-8512b4189/', ig: 'https://instagram.com/pkspyder007', tw: 'https://twitter.com/pkspyder007', web: 'https://thejsguy.me' },
  { name: 'Kushagra Johari', img: require('../images/team/kj.jpeg'), role: 'Web Developer', ln: '', ig: 'https://instagram.com/kushagra_johari', tw: 'https://twitter.com/', web: '' },
  { name: 'Harsh Kohli', img: require('../images/team/hk.jpeg'), role: 'Web Developer', ln: '', ig: 'https://instagram.com/kohli_27', tw: '', web: '' },
  { name: 'Riya Rana', img: require('../images/team/rr.jpg'), role: 'Web Developer', ln: '', ig: 'https://instagram.com/r1_y4_', tw: '', web: '' },
  { name: 'Devang Sharma', img: require('../images/team/ds.jpg'), role: 'Flutter Developer', ln: '', ig: 'https://instagram.com/_devang_sharma_', tw: '', web: '' },
  { name: 'Vanshika Pandey', img: require('../images/team/vp.jpg'), role: 'Web Developer', ln: '', ig: 'https://instagram.com/vanshika_pandeyyy', tw: '', web: '' },
  { name: 'Harsh Anand', img: require('../images/team/ha.jpg'), role: 'Flutter Developer', ln: '', ig: 'https://instagram.com/oyee_anand', tw: '', web: '' },
  { name: 'Muskan Agrawal', img: require('../images/team/my.jpg'), role: 'Web Developer', ln: '', ig: 'https://instagram.com/agrlmuskan', tw: '', web: '' },
];

const Team = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* margin-top: 12vh; */
`;

export default function () {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '12vh' }}><SectionHeading>Our Team</SectionHeading></div>
      <Team>
        {teamMembers.map((member, i) => <Member key={i} name={member.name} role={member.role} img={member.img} web={member.web} ig={member.ig} ln={member.ln} tw={member.tw} />)}
      </Team>
    </>
  )
}
