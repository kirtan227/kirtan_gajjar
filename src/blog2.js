import React from 'react';
import pic1 from "./2.jpg";

export default class Blog1 extends React.Component {
    render() {
        return (

            <main>
                <img className="blog" src={pic1 } alt="Vikings" />
                <h1 className="title">DRS: An analytical review

                </h1>
                <p id="t">April 18, 2020</p>

                <p>
                 <strong>   Is Virat Kohli the most compulsive reviewer in cricket today?</strong> </p>
                <br/>

                    <p>Do Stuart Broad and Ravindra Jadeja coax their skippers to review almost every other time? Which team uses their fielding reviews better than others?

                    With no live cricket in the near future, it's a good time to look at how teams and players have dealt with the now common place Decision Review System (DRS) in the past five years.

                    The scope of this article is all the decisions reviewed in international cricket since January 2015. There have been over 3300 reviews used across formats in this period. In September 2017, the ICC passed a new rule which introduced DRS to T20 Internationals as well as allowing teams to retain reviews for umpire's call on LBW decisions. While DRS was almost universally applicable in the period since 2015, India started using it only from November 2016, with the exception of the ICC World Cups.



                </p>

                <br/>
                <br/>

                <p>
                  <strong>  Who uses DRS better - the fielding side or the batsmen?</strong>  </p>

                <br/>
                <p>

                    The batsmen win hands down as they overturn about 37% of the decisions, compared to only just above 22% for the fielding side. A big reason for this being the caught dismissals and leg before wicket decisions. The batsman invariably knows whether he has hit the ball or not. More than half (55%) of the caught behind referrals from batsmen have been successful, compared to just under 33% for LBW referrals. On the other hand, the success rate for fielding sides on caught and LBW reviews reads 35% and 17% respectively - both well below the mark set by batsman reviews.

                    Which team makes the best use of DRS in terms of decisions overturned?

                    Pakistan have the highest success rate for fielding reviews in Test cricket. They overturn 23.70% of the referrals, just ahead of South Africa's 23.62%. New Zealand occupy the bottom place with just 17.14% success rate. In limited overs internationals (ODIs and T20Is combined), New Zealand fare much better and sit at the top of the table (33.96% success rate) while Pakistan now move to the bottom of the pile with just 14.93% success. In fact, all teams with the lone exception of Pakistan have fared better in LOIs compared to Test cricket when it comes to fielding reviews.


                </p>

                <br/>

                <br/>

                <p>

                  <strong>  Is Virat Kohli the most compulsive reviewer in international cricket?  </strong></p>
                <br/>

                <p>

                    When it comes to LBW dismissals, Kohli is certainly right up there. Of the 20 times he's been adjudicated out leg before wicket by the on-field umpire, he has challenged the decision on as many as 17 times. He's gotten the decision reversed only four times while five others have ended up as umpire's call. Incidentally, against Bangladesh in Hyderabad in 2017, he didn't challenge the LBW decision when he was stuck outside off stump.

                    In Tests, Kohli has overturned only two of his 15 DRS calls, giving him a success rate of 13.33% - by far the lowest among all batsman who made at least ten referrals in the longest format. Kohli is the leading India batsman among referrals with 15 calls, followed by Ajinkya Rahane's 11 - none of the other Indian batsmen have made more than seven calls. On the other hand, Kohli has done much better in LOIs with three of his five calls overturned with one being an umpire's call on hitting.

                    Another interesting aspect about Kohli the batsman and DRS is the fact that many opposition captains fall into the trap of burning their reviews for marginal calls against a batsman of the stature of Kohli. Of the 25 fielding calls against Kohli, only thrice has the on-field call been reversed with the other two ending as umpire's call - teams lose out on their review 80% (four out of five reviews) of the time they challenge a decision against Kohli.



                </p>
            </main>
        );
    }
}