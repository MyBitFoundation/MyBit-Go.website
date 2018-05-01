import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TeamMembers from '../components/team-members';
import Achievements from '../components/achievements';
import { Highlights, Highlight } from '../components/highlights';
import { MediaHighlights, MediaHighlight } from '../components/media-highlights';
import { Bit } from '../components/bit';
import { Container } from '../components/container';
import { VideoPlayer } from '../components/video-player';
import { Wallets, Wallet } from '../components/wallets';
import { Button } from '../components/button';
import { Media, Medium } from '../components/media';
import { highlights, mediaHighlights, wallets, media } from '../components/constants';

const [ highlight ] = highlights;
const [ mediaHighlight ] = mediaHighlights;
const [ wallet ] = wallets;
const [ medium ] = media;

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
  .addDecorator(story => <div style={{height:"150px", backgroundColor:"#516ba4"}}>{story()}</div>)
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
storiesOf('Media Highlights (v2)', module)
  .add(
    'Media Highlight',
  () => <MediaHighlight {...mediaHighlight} />
  )
  .add(
    'Media Highlights',
  () => <MediaHighlights highlights={mediaHighlights} />
  );
storiesOf('Wallets (v2)', module)
  .add('Wallet', () => <ul className="Wallets"><Wallet {...wallet} /></ul>)
  .add('Wallets', () => <Wallets Wallets={wallets} />);
storiesOf('Button (v2)', module)
  .add('Button', () => <Button label="Learn more" onClick={action('button-click')} />);
storiesOf('Media (v2)', module)
  .add(
    'Medium',
    () => <div className="Media"><Medium {...medium} /></div>
  )
  .add(
    'Media',
    () => <Media media={media} />
  );
