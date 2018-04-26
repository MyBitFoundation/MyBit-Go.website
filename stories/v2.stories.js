import React from 'react';

import { storiesOf } from '@storybook/react';

import TeamMembers from '../components/team-members';
import Achievements from '../components/achievements';
import { Highlights, Highlight } from '../components/highlights';
import { Bit } from '../components/bit';
import { Container } from '../components/container';
import { VideoPlayer } from '../components/video-player';

import { highlights } from '../components/constants'

const [ highlight ] = highlights;

const team = [
  { name: 'Ian Worrell', intro: 'a veteran to the bitcoin industry who began as a miner and trader and moved into blockchain applications in 2013.', bio: 'this is the bio.', linkedin: 'https://linkedin.com/in/' },
  { name: 'Jose Aguinaga', intro: 'this is an intro.', bio: 'josé is a web engineer with multiple years of experience in javascript related technologies and software engineering. having worked for different startups in various cities across the world like zürich, san francisco, méxicocity, and bali, josé has developed an insider’s understanding of the startup culture within the fintech and blockchain ecosystem.', linkedin: 'https://linkedin.com/in/' },
  { name: 'Connor', intro: 'a blockchain engineer, who has experience not only in the blockchain industry for some years, but also the cyber security industry.', bio: 'this is the bio.', linkedin: 'https://linkedin.com/in/' },
  { name: 'Joost', intro: 'studied international business with a specialization in branding and marketing.', bio: 'this is the bio.', linkedin: 'https://linkedin.com/in/' },
  { name: 'Ash', intro: 'brings 8 years creative experience working on brand development, digital design and creative consultancy.', bio: 'this is the bio.', linkedin: 'https://linkedin.com/in/' },
  { name: 'Kyle', intro: 'A blockchain engineer, developing Ethereum Dapps for various projects since early 2016.', bio: 'This is the bio.', linkedin: 'https://linkedin.com/in/' },
];

const achievements = [
  {
    title: 'Q4 2016',
    description: 'idea conceived'
  },
  {
    title: 'Q4 2016',
    description: 'idea conceived'
  },
  {
    title: 'Q4 2016',
    description: 'idea conceived'
  },
  {
    title: 'Q4 2016',
    description: 'idea conceived'
  },
  {
    title: 'Q4 2016',
    description: 'idea conceived'
  },
  {
    title: 'Q4 2016',
    description: 'idea conceived'
  }
];

storiesOf('Video Player', module)
  .add(
    'Default',
    () => <VideoPlayer />
  );
storiesOf('Bit', module)
  .add(
    'Default',
    () => <Bit />
  );
storiesOf('Team Members (v2)', module)
  .add(
    'Default',
    () => <TeamMembers team={team} />
  );
storiesOf('Achievements (v2)', module)
  .add(
    'Default',
    () => <Achievements achievements={achievements}/>
  );
storiesOf('Container', module)
  .add(
    'Default',
    () => <Container />
  );
storiesOf('Highlights (v2)', module)
  .add(
    'Highlight',
    () => <Highlight title={highlight.title} content={highlight.content} />
  )
  .add(
    'Highlights',
    () => <Highlights highlights={highlights} />
  );
