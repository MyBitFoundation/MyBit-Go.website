import React from 'react';
import AssetManager from '../../static/svgs/other/how-it-works-asset-manager1.svg'
import Delivery from '../../static/svgs/other/how-it-works-delivery1.svg'
import Escrow from '../../static/svgs/other/how-it-works-escrow2.svg'
import FundEnd from '../../static/svgs/other/how-it-works-fund-ends2.svg'
import FundStart from '../../static/svgs/other/how-it-works-fund-start2.svg'
import Revenue from '../../static/svgs/other/how-it-works-revenue1.svg'
import Destribution from '../../static/svgs/other/how-it-works-revenue-destribution10.svg'
import Assets from '../../static/svgs/other/how-it-works-assets2.svg'

export const guide = [{
	title: 'Asset Manager',
	desc: '<p>Asset Managers see opportunities and maintain the machines. In this example, a store owner has space for a Bitcoin ATM in his local supermarket and he has already arranged the necessary license and insurance.</p>',
	image: <AssetManager />
}, {
	title: 'Select an Asset',
	desc: '<p>Depending on location, the Asset Manager selects an asset from a variety of carefully selected partners, who supply the device.</p>',
	image: <Assets />
}, {
	title: 'Escrow',
	desc: '<p>To ensure that the asset manager meets the expectations of the investors, a portion of the asset’s value is put down as collateral.</p>',
	image: <Escrow />
}, {
	title: 'Funding Starts',
	desc: '<p>Investors from all over the world invest in the Bitcoin ATM for a maximum of 30 days or until the funding goal is met. If the funding goal isn’t met, the funds are automatically returned back to investors.</p>',
	image: <FundStart />
}, {
	title: 'Funding Ends',
	desc: '<p>Once the Bitcoin ATM is fully funded, the order and payment is directly sent to the selected partner.</p>',
	image: <FundEnd />
}, {
	title: 'Delivery and Install',
	desc: '<p>The partner delivers the machine and installs it for the the asset manager.</p>',
	image: <Delivery />
}, {
	title: 'Revenue Generation',
	desc: '<p>The asset is now generating revenue in the case the Bitcoin ATM as it charges fees for every transaction.</p>',
	image: <Revenue />
}, {
	title: 'Revenue Distributed',
	desc: '<p>This revenue is distributed proportionally back to the investors over the blockchain. This means there are no brokers, middlemen or intermediaries, resulting in an cost-efficient, secure and transparent investment experience for everyone.</p>',
	image: <Destribution />
}];

export const desc = "<p>The machine economy is projected to produce trillions of dollars, with IoT devices operating in nearly every industry.</p><p>By enabling everyone to invest in these revenue generating machines, MyBit redefines the way people generate income.</p>"

