import React from 'react';

import { storiesOf } from '@storybook/react';

import TeamMembers from '../components/team-members';
import Achievements from '../components/achievements';
import Highlights from '../components/highlights';

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

const highlights = [
  {
    title: 'About Us',
    content: `
<p><b>MyBit is an IoT investment ecosystem powered by Ethereum</b>. Founded in Switzerland by industry veterans, MyBit believes that people should be able to follow their passion instead of having to work to survive.</p>
<p>By redefining the way people generate income, MyBit strives to democratise financial services so everyone has equal access to investment opportunities. This becomes critical when the future machine economy automates 800 million jobs by 2030 (Mckinsey, 2017) and the average person, whose job is automated, has no ability to participate in this new economy.</p>
<p>MyBit provides an ecosystem for the upcoming Trillion dollar IoT industry (Forbes, 2017), with the belief that everyone should have an equal opportunity to participate in this revolution.</p>`
  }, {
    title: 'Our core conviction',
    content: `
<p>Although we all come from different countries, cultures and (professional) backgrounds there is one thing that connects us. We all share a common vision; to improve the life of everyone.</p>
<p>We have seen the vast potential of IoT and automation but are aware that this will have major repercussions for the role humans play in the future economy.
Instead of fighting this development we have chosen to embrace it.
</p>
<p>By utilising our shared resources we are building the first decentralised ecosystem that enables humans to play an active role in the economy of tomorrow.</p>
<p>MyBit offers everyone to either invest or manage revenue generating machines over the blockchain, resulting in a new way to generate income in an automated world. MyBit lets the machines work for you again so you can enjoy the things that are truly important..</p>`
  }
];

storiesOf('Version 2', module)
  .add(
    'Team Members',
    () => <TeamMembers team={team} />
  )
  .add(
    'Achievements',
    () => <Achievements achievements={achievements}/>
  ).add(
    'Highlights',
    () => <Highlights highlights={highlights} />
  );
