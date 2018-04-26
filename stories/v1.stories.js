import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Card from '../components/card';
import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import Industries from '../components/industries';
import Links from '../components/links';
import Logo from '../components/logo';
import Nav from '../components/nav';
import News from '../components/news';
import Offers from '../components/offers';
import Partners from '../components/partners';
import Roadmap from '../components/roadmap';
import Section from '../components/section';
import Team from '../components/team';

storiesOf('Version 1', module)
  .add('Card', () => <Card title={'Title'} paragraph={'Paragraph'} image={''} isLeft={false} isBorderless={false} />)
  .add('Footer', () => <Footer />)
  .add('Hero', () => <Hero />)
  .add('Header', () => <Header />)
  .add('Industries', () => <Industries />)
  .add('Links', () => <Links changeLanguage={action('clicked')} />)
  .add('Links - footer', () => <Links isFooter={false} />)
  .add('Logo', () => <Logo />)
  .add('Nav', () => <Nav />)
  .add('News', () => <News />)
  .add('Offers', () => <Offers />)
  .add('Partners', () => <Partners />)
  .add('Roadmap', () => <Roadmap />)
  .add('Section', () => <Section />)
  .add('Team', () => <Team />)
