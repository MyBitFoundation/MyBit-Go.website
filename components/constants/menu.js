import { testAlphaUrl } from './';

export const mobileMenu = [{
    name: "How it Works",
    path: "products",
    className: "how-it-works",
  },{
    name: "Products",
    path: "access-layer",
    className: "access-layer",
  },{
    name: "Token",
    path: "about-us",
    className: "token",
  },{
    name: "About",
    path: "about-us",
    className: "about",
  },{
    name: "Community",
    path: "about-us",
    className: "community",
  },{
    name: "Blog",
    path: "about-us",
    className: "blog",
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
