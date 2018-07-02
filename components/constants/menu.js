import { testAlphaUrl } from './';

export const mobileMenu = [{
    name: "How it Works",
    path: "how-it-works"
  },{
    name: "Products",
    path: "products"
  },{
    name: "Token",
    path: "access-layer"
  },{
    name: "About",
    path: "about-us"
  },{
    name: "Community",
    path: "community"
  },{
    name: "Blog",
    path: "https://medium.com/mybit-dapp",
    external: true
}];


export const headerMenu = [{
    name: "Products",
    path: "products"
  },{
    name: "Token",
    path: "access-layer"
  },{
    name: "About",
    path: "about-us"
  }
  ,{
    name: "Test Alpha",
    path: testAlphaUrl,
    external: true,
    className: "Link__test-alpha"
  }];
