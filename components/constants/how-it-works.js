import React from 'react';
import AssetManager from '../../static/svgs/other/how-it-works-asset-manager1.svg'
import Delivery from '../../static/svgs/other/how-it-works-delivery1.svg'
import Escrow from '../../static/svgs/other/how-it-works-escrow2.svg'
import FundEnd from '../../static/svgs/other/how-it-works-fund-ends2.svg'
import FundStart from '../../static/svgs/other/how-it-works-fund-start2.svg'
import Revenue from '../../static/svgs/other/how-it-works-revenue1.svg'
import Destribution from '../../static/svgs/other/how-it-works-revenue-destribution10.svg'
import Assets from '../../static/svgs/other/how-it-works-assets2.svg'

export const guide = (translator) => [{
	title: translator('common:mybit_how_it_works_step_one_title'),
	desc: `<p>${translator('common:mybit_how_it_works_step_one')}</p>`,
	image: <AssetManager />
}, {
  title: translator('common:mybit_how_it_works_step_two_title'),
  desc: `<p>${translator('common:mybit_how_it_works_step_two')}</p>`,
	image: <Assets />
}, {
  title: translator('common:mybit_how_it_works_step_three_title'),
  desc: `<p>${translator('common:mybit_how_it_works_step_three')}</p>`,
	image: <Escrow />
}, {
  title: translator('common:mybit_how_it_works_step_four_title'),
  desc: `<p>${translator('common:mybit_how_it_works_step_four')}</p>`,
  image: <FundStart />
}, {
  title: translator('common:mybit_how_it_works_step_five_title'),
  desc: `<p>${translator('common:mybit_how_it_works_step_five')}</p>`,
	image: <FundEnd />
}, {
  title: translator('common:mybit_how_it_works_step_six_title'),
  desc: `<p>${translator('common:mybit_how_it_works_step_six')}</p>`,
	image: <Delivery />
}, {
  title: translator('common:mybit_how_it_works_step_seven_title'),
  desc: `<p>${translator('common:mybit_how_it_works_step_seven')}</p>`,
	image: <Revenue />
}, {
  title: translator('common:mybit_how_it_works_step_eight_title'),
  desc: `<p>${translator('common:mybit_how_it_works_step_eight')}</p>`,
	image: <Destribution />
}];

export const desc = (translator) => `<p>${translator('common:mybit_how_it_works-journey_one')}</p><p>${translator('common:mybit_how_it_works-journey_two')}</p>`

