import Svg, { Path } from "react-native-svg";


const Receive = () => (
  <Svg fill="none" viewBox="0 0 24 24" width="24px" height="24px" strokeLinecap="round" strokeLinejoin="round" color="#ab9ff2">
    <Path fill="currentColor" fillRule="evenodd" d="M5.5 6.1a.6.6 0 0 1 .6-.6h.8a.6.6 0 0 1 .6.6v.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6zM5.5 17.1a.6.6 0 0 1 .6-.6h.8a.6.6 0 0 1 .6.6v.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6zM16.5 6.1a.6.6 0 0 1 .6-.6h.8a.6.6 0 0 1 .6.6v.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6z" clipRule="evenodd"></Path><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM3 16a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM14 5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2z"></Path><Path fill="currentColor" d="M13 14a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM13 20a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM19 20a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM19 14a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM16 17a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"></Path>
  </Svg>
);

const Send = () => (
  <Svg fill="none" viewBox="0 0 24 24" width="24px" height="24px" strokeLinecap="round" strokeLinejoin="round" color="#ab9ff2">
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 14 2.976 6.695c.367.828 1.558.78 1.857-.076l5.48-15.659a1 1 0 0 0-1.273-1.274L3.38 9.166c-.854.3-.903 1.49-.075 1.858zm0 0 3.5-3.5"></Path>
  </Svg>
);

const Swap = () => (
  <Svg fill="none" viewBox="0 0 24 24" width="24px" height="24px" strokeLinecap="round" strokeLinejoin="round" color="#ab9ff2">
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 14-4 4m0 0 4 4m-4-4h11a4 4 0 0 0 4-4m-5-4 4-4m0 0-4-4m4 4H8a4 4 0 0 0-4 4"></Path>
  </Svg>
);

const Buy = () => (
  <Svg fill="none" viewBox="0 0 24 24" width="24px" height="24px" strokeLinecap="round" strokeLinejoin="round" color="#ab9ff2">
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1v22m5-18H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"></Path>
  </Svg>
);

const Stack1 =() =>(
  <Svg fill="none" viewBox="0 0 24 24" width="16px" height="16px" strokeLinecap="round" strokeLinejoin="round">
    <Path fill="currentColor" d="M11.982 22.5C17.79 22.5 22.5 17.8 22.5 12S17.791 1.5 11.982 1.5C6.47 1.5 1.949 5.732 1.5 11.117h13.903v1.766H1.5c.45 5.385 4.97 9.617 10.482 9.617"></Path>
  </Svg>
);

const Stack2 =() =>(
  <Svg fill="none" viewBox="0 0 24 24" width="16px" height="16px" strokeLinecap="round" strokeLinejoin="round">
    <Path fill="currentColor" fillRule="evenodd" d="M6.092 16.253a.62.62 0 0 1 .458-.203l14.14.012a.312.312 0 0 1 .306.36.31.31 0 0 1-.077.16l-3.011 3.315a.62.62 0 0 1-.459.203L3.31 20.09a.311.311 0 0 1-.229-.52zm14.827-2.76a.31.31 0 0 1-.23.52l-14.138.012a.62.62 0 0 1-.459-.203l-3.01-3.317a.31.31 0 0 1 .228-.52l14.14-.012a.62.62 0 0 1 .458.203zM6.092 4.103A.62.62 0 0 1 6.55 3.9l14.14.011a.311.311 0 0 1 .229.52l-3.011 3.316a.62.62 0 0 1-.459.203L3.31 7.938a.31.31 0 0 1-.229-.52z" clipRule="evenodd"></Path>
  </Svg>
);
  
const Icons = { Receive, Send, Swap, Buy, Stack1,Stack2}

export default Icons;
