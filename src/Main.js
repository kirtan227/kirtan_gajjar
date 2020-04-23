import React from 'react';
import pic1 from "./1.jpg";
import pic2 from "./2.jpg";
import pic3 from "./3.jpg";
import pic4 from "./4.jpg";

import {
	Link
} from 'react-router-dom';

export default class Main extends React.Component {
  render() {
    return (
     <main>
     <ol>
     <li>
     <img src={pic1 } alt="Ganguly "  />
     <Link className="title" exact to="/Blog1"><strong>No cricket in India in the near future</strong></Link>
     <p id="t">April 22, 2020</p>
     <p> With the COVID-19 pandemic bringing the sporting activities around the world to a halt, playing in empty stadiums is the likely scenario in the foreseeable future until the threat of the virus is completely negated. Bundesliga, the German football league, is likely to be the first top-flight league that sets the tone for the future with discussions being held for the league to resume sometime in May. </p>
     </li>

      <br/>
      <br/>

     <li>
     <img src={pic2 } alt="DRS"  />
     <Link className="title" exact to="/Blog2"><strong>DRS: An analytical review
     </strong></Link>
     <p id="t">April 22, 2020</p>
     <p>Is Virat Kohli the most compulsive reviewer in cricket today? Do Stuart Broad and Ravindra Jadeja coax their skippers to review almost every other time? Which team uses their fielding reviews better than others?

     </p>
     </li>
<br/>
<br/>

      <li>
     <img src={pic3 } alt="Chennai Super Kings"  />
     <Link className="title" exact to="/Blog3"><strong>Why CSK win and RCB lose
     </strong></Link>
     <p id="t">April 22, 2020</p>
     <p>"The fight is won or lost far away from witnesses - behind the lines, in the gym, and out there on the road, long before I dance under those lights," Muhammad Ali once said. And so it was in the IPL: in many ways the league was not won or lost on the field of play but in the air-conditioned function rooms of glitzy hotels that staged the annual player auction.

     </p>
     </li>

         <li>
             <img src={pic4 } alt="Chennai Super Kings"  />
             <Link className="title" exact to="/Blog4"><strong>IPL 13 set to be postponed

             </strong></Link>
             <p id="t">April 22, 2020</p>
             <p>"The fight is won or lost far away from witnesses - behind the lines, in the gym, and out there on the road, long before I dance under those lights," Muhammad Ali once said. And so it was in the IPL: in many ways the league was not won or lost on the field of play but in the air-conditioned function rooms of glitzy hotels that staged the annual player auction.

             </p>
         </li>





     </ol>
     
     </main>
    );
  }
}
