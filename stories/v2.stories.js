import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import TeamMembers from '../components/team-members';
import Achievements from '../components/achievements';
import { Highlights, Highlight } from '../components/highlights';
import { Bit } from '../components/bit';
import { VideoPlayer } from '../components/video-player';
import { Wallets, Wallet } from '../components/wallets';
import { Button } from '../components/button';
import { Icon, IconList, PartnersList, MediaList } from '../components/icon';
import { Media, Medium } from '../components/media';
import { MediaCTA } from '../components/media-cta';
import { achievements, highlights, diamondHighlights, mediaHighlights, wallets, media } from '../components/constants';
import { Paragraph } from '../components/paragraph';
import { MainTitle } from '../components/main-title';
import { BackgroundVideo } from '../components/background-video';
import { HeroBanner } from '../components/hero-banner';
import { Link } from '../components/link';
import { Menu } from '../components/menu';
import { Header } from '../components/header';
import { Container } from '../components/layout/container';
import { MyBitFooter } from '../components/footer/footer';
import { Subscribe } from '../components/subscribe';
import { ColumnList } from '../components/column-list';
import { Event, Events } from '../components/events';
import { EventCard, EventCards } from '../components/event-cards';

const [ diamondHighlight ] = diamondHighlights;
const [ highlight ] = highlights;
const [ wallet ] = wallets;
const [ medium ] = media;

const darkDecorator = (storyFn) => (
  <div style={{ backgroundColor: '#001358', padding: '30px' }}>
    {storyFn()}
  </div>
);

const events = [{
  title: 'My sample image',
  description: 'Lorem ipsum dolor sit amet ...',
  imageSrc: '/static/social/mybit_facebook_cover.png',
  imageAlt: 'Sample image',
  button: <Button isLight label="See more" onClick={action('button-click')} />
}, {
  title: 'My second sample image',
  description: 'Lorem ipsum dolor sit amet ...',
  imageSrc: '/static/social/mybit_facebook_cover.png',
  imageAlt: 'Sample image two',
  button: <Button isLight label="See more" onClick={action('button-click')} />
}];

const team = [
  {
    name: 'Ian Worrell',
    intro:
      'a veteran to the bitcoin industry who began as a miner and trader and moved into blockchain applications in 2013.',
    bio: 'this is the bio.',
    linkedin: 'https://linkedin.com/in/'
  },
  {
    name: 'Jose Aguinaga',
    intro: 'this is an intro.',
    bio:
      'josé is a web engineer with multiple years of experience in javascript related technologies and software engineering. having worked for different startups in various cities across the world like zürich, san francisco, méxicocity, and bali, josé has developed an insider’s understanding of the startup culture within the fintech and blockchain ecosystem.',
    linkedin: 'https://linkedin.com/in/'
  },
  {
    name: 'Connor',
    intro:
      'a blockchain engineer, who has experience not only in the blockchain industry for some years, but also the cyber security industry.',
    bio: 'this is the bio.',
    linkedin: 'https://linkedin.com/in/'
  },
  {
    name: 'Joost',
    intro:
      'studied international business with a specialization in branding and marketing.',
    bio: 'this is the bio.',
    linkedin: 'https://linkedin.com/in/'
  },
  {
    name: 'Ash',
    intro:
      'brings 8 years creative experience working on brand development, digital design and creative consultancy.',
    bio: 'this is the bio.',
    linkedin: 'https://linkedin.com/in/'
  },
  {
    name: 'Kyle',
    intro:
      'A blockchain engineer, developing Ethereum Dapps for various projects since early 2016.',
    bio: 'This is the bio.',
    linkedin: 'https://linkedin.com/in/'
  }
]

storiesOf('Test', module)
  .add(
    'Default',
    () => <div><Header/><HeroBanner /></div>
  );

storiesOf('Header', module)
  .add(
    'Default',
    () => <Header/>
  );

storiesOf('Menu', module)
  .addDecorator(story => <div style={{height:"100px", backgroundColor:"#516ba4"}}>{story()}</div>)
  .add(
    'Default',
    () => <div style={{paddingTop: "25px", width:"max-content", margin: "0px auto"}}> <Menu /> </div>
  );


storiesOf('Link', module)
  .addDecorator(story => <div style={{height:"100px", backgroundColor:"#516ba4"}}>{story()}</div>)
  .add(
    'Default',
    () => <div style={{paddingTop: "25px", width:"max-content", margin: "0px auto"}}> <Link name="Explore" /> </div>
  );

storiesOf('Hero Banner', module)
  .add(
    'Default',
    () => <HeroBanner />
  );

storiesOf('Main Title', module)
  .add(
    'Default',
    () => <MainTitle />
  );

storiesOf('Paragraph', module)
  .add(
    'Default',
    () => <Paragraph />
  );

storiesOf('Video Player', module)
  .addDecorator(story => (
    <div style={{ height: '150px', backgroundColor: '#516ba4' }}>{story()}</div>
  ))
  .add('Default', () => <VideoPlayer />)
storiesOf('Bit', module).add('Default', () => <Bit />)
storiesOf('Team Members (v2)', module).add('Default', () => (
  <TeamMembers team={team} />
))
storiesOf('Achievements (v2)', module).add('Default', () => (
  <Achievements achievements={achievements} />
))
storiesOf('Background Video', module).add('Default', () => <BackgroundVideo />)
storiesOf('Highlights (v2)', module)
  .add('Highlight', () => (
    <Highlight title={highlight.title} content={highlight.content} />
  ))
  .add('Highlights', () => <Highlights highlights={highlights} />)
  .add('Diamond Highlight', () => (
    <Highlight
      title={diamondHighlight.title}
      content={diamondHighlight.content}
      isDiamond
    />
  ))
  .add('Diamond Highlight (Light)', () => (
    <Highlight
      title={diamondHighlight.title}
      content={diamondHighlight.content}
      isDiamond
      isLight
    />
  ))
  .add('Media Highlight', () => (
    <Highlight
      title={highlight.title}
      content={highlight.content}
      icon="MyBitDappIcon"
      isCentered
      isLight
    />
  ))
  .add('Media Highlights', () => <Highlights highlights={mediaHighlights} />)
  .add('Media Diamond Highlight', () => (
    <Highlight
      title={diamondHighlight.title}
      content={diamondHighlight.content}
      icon="MyBitDappIcon"
      isDiamond
      isCentered
      isLight
    />
  ))
  .add('Grouped Diamond Highlights', () => (
    <Highlights
      highlights={diamondHighlights}
      isDiamond
      startsFromLight={false}
    />
  ))
storiesOf('Container (v2)', module)
  .add('Styled', () => <Container isStyled />)
  .add('Centered Diamond', () => <Container isStyled hasCenteredDiamond />)
  .add('Styled (Short)', () => <Container isStyledShort />)
  .add('Styled (Short) w/Diamond', () => (
    <Container hasCenteredDiamond isStyledShort />
  ))
storiesOf('Wallets (v2)', module)
  .add('Wallet', () => (
    <ul className="Wallets">
      <Wallet {...wallet} />
    </ul>
  ))
  .add('Wallets', () => <Wallets Wallets={wallets} />)

storiesOf('Button (v2)', module)
  .add('Button', () => (
    <Button label="Learn more" onClick={action('button-click')} />
  ))
  .addDecorator(darkDecorator)
  .add('Light Button', () => (
    <Button isLight label="Sign up" onClick={action('button-click')} />
  ))
storiesOf('Icon (v2)', module)
  .add('Icon', () => <Icon name="medium" />)
  .add('Icon List', () => <IconList />)
  .add('Partner List', () => <PartnersList />)
  .add('Media List', () => <MediaList />)
storiesOf('Media (v2)', module)
  .add('Medium', () => (
    <div className="Media">
      <Medium {...medium} />
    </div>
  ))
  .add('Media', () => <Media media={media} />)
storiesOf('Media CTA (v2)', module)
  .add('Media CTA', () => (
    <MediaCTA
      title="Are you an app developer?"
      content="<p>Learn about being rewarded for developing for MyBit.</p>"
      button={<Button label="Learn more" onClick={action('button-click')} />}
    />
  ))
  .add('Media CTA multiple buttons', () => (
    <MediaCTA
      title="Are you an app developer?"
      content="<p>Learn about being rewarded for developing for MyBit.</p>"
      button={[
        <Button
          key="buttonA"
          label="Learn more"
          onClick={action('button-click')}
        />,
        <Button
          key="buttonB"
          label="Learn even more"
          onClick={action('button-click')}
        />
      ]}
    />
  ))
  .add('Media CTA pull right with merchandice', () => (
    <MediaCTA
      title="MyBit merchandise"
      content={`<p>Want to rock some MyBit gear? Head over to Redbubble to check out our official products.</p>`}
      button={<Button label="Go to store" onClick={action('button-click')} />}
      icon="merchandice"
      isRight
    />
  ))
  .add('Media CTA pull left', () => (
    <MediaCTA
      title="Attend a meetup"
      content={`<p>MyBit supporters spawn across nearly every city, in every country which provides a vibrant network of
            meetups globally. Meet like minded people near you whilst having a drink and a laugh. Nothing fancy, just some
            great people, gathered to talk about great things.</p>`}
      icon="community"
      isLeft
      button={[
        <Button
          key="buttonA"
          label="Attend a meetup"
          onClick={action('button-click')}
        />,
        <Button
          key="buttonB"
          label="Host a meetup"
          onClick={action('button-click')}
        />
      ]}
    />
  ))
  .add('Media CTA pull right, dark with discord', () => (
    <MediaCTA
      title="Join the community"
      content={`<p>Our digital HQ is located on Discord.  Here you will find everything you want to know about MyBit,
          IoT, and other related topics. Become a member of our great community today.</p>`}
      icon='discord'
      isRight
      isDark
      button={<Button label="Join here" onClick={action('button-click')} />}
    />
    )
  );

storiesOf('Footer (v2)', module)
  .add(
    'Mobile footer',
  () => <MyBitFooter />
  );

storiesOf('Subscribe (v2)', module)
  .addDecorator(darkDecorator)
  .add(
    'Subscription',
    () => <Subscribe onSubmit={action('form-submit')} label='To our email list' buttonLabel='Send' placeholder='Enter email address' />
  ).add(
    'Subscription with error',
    () => <Subscribe errorMessage='Error subscribing' onSubmit={action('form-submit')} label='To our email list' buttonLabel='Send' placeholder='Enter email address' />
  ).add(
    'Subscription with success',
    () => <Subscribe successMessage='Thank you for subscribing' onSubmit={action('form-submit')} label='To our email list' buttonLabel='Send' placeholder='Enter email address' />
  ).add(
    'Subscription sending',
    () => <Subscribe sending errorMessage='' onSubmit={action('form-submit')} label='To our email list' buttonLabel='Send' placeholder='Enter email address' />
  );

storiesOf('Column List (v2)', module)
  .addDecorator(darkDecorator)
  .add(
    'Column list',
    () => (
      <ColumnList
        links={[{
          title: 'My link 1',
          url: '#'
        }, {
          title: 'My link 2',
          url: '#'
        }, {
          title: 'List text'
        }, {
          title: 'My link 3',
          url: '#',
          inactive: true
        }]}
      />)
  );

storiesOf('Events', module)
  .add(
    'Events with two Event molecules',
    () => <Events events={events}/>
  )
  .add(
    'Events with four Event molecules',
    () => <Events events={[...events, ...events]} />
  )
  .addDecorator(darkDecorator)
  .add(
    'Event molecule',
    () => <Event {...events[0]} />
  );

storiesOf('Event cards', module)
  .add(
    'Events card',
    () => <EventCard />
  )
  .add(
    'Event cards',
    () => <EventCards />
  );
