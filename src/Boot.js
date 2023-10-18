import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function Boot() {
  const [activated, setActivated] = useState(0);
  console.log(activated);

  return (
    <Wrap className="row justify-content-center">
      <div className="col-6 mb-5" onClick={() => setActivated(1)}>
        <Card className={`mx-5 ${activated === 1 ? "active" : ""}`}>
          <h1 className="title">Create a Professional Profile</h1>
          <p className="desc w-100">
            Create a Professional profile for your driving career. Its LinkedIn
            for drivers. Mobility employers search & hire drivers from
            Instadriver, not Linkedin. No more CV’s when applying for jobs. Send
            your Instadriver professional handle.
          </p>

          <img
            className="w-100"
            src="https://cdn.instadriver.co/dist/images/Feature-img6.svg"
          ></img>
        </Card>
      </div>

      <div className="col-6 mb-5" onClick={() => setActivated(2)}>
        <Card className={`mx-5 ${activated === 2 ? "active" : ""}`}>
          <h1 className="title">Access Tons Of Driving Jobs</h1>
          <p className="desc w-100">
            Instadriver is a dedicated platform to find and hire drivers.
            Employers rely on Instadriver to recruit drivers. We have made it
            free for transport employers to post driving job ads. So that you
            can get your dream job faster.
          </p>

          <img
            className="w-100"
            src="https://cdn.instadriver.co/dist/images/Feature-img8.svg"
          ></img>
        </Card>
      </div>

      <div className="col-6 mb-5" onClick={() => setActivated(3)}>
        <Card className={`mx-5 ${activated === 3 ? "active" : ""}`}>
          <h1 className="title">Get Access To Loans</h1>
          <p className="desc w-100">
            Instadriver in conjuction with financing institutions gives acces to
            loans to drivers who have attained good points and credit scores.
            With loans, you can be able to invest in your entrepreneurs ventures
            consequently moving up the income ladder.
          </p>

          <img
            className="w-100"
            src="https://cdn.instadriver.co/dist/images/Feature-img9.svg"
          ></img>
        </Card>
      </div>

      <div className="col-6 mb-5" onClick={() => setActivated(4)}>
        <Card className={`mx-5 ${activated === 4 ? "active" : ""}`}>
          <h1 className="title">A Savings Portal For Drivers</h1>
          <p className="desc w-100">
            With the E-wallet and driving gigs you get from Instadriver, we are
            making it possible for drivers to develop a savings habit. Savings
            requires descipline. Our tools enables you develop amazing savings
            habits. Use your savings score to acquire loans.
          </p>

          <img
            className="w-100"
            src="https://cdn.instadriver.co/dist/images/Feature-img10.svg"
          ></img>
        </Card>
      </div>

      <div className="col-6" onClick={() => setActivated(5)}>
        <Card className={`mx-5 ${activated === 5 ? "active" : ""}`}>
          <h1 className="title">Tools To Know Traffic Condition</h1>
          <p className="desc w-100">
            We have inbuilt tools to help you know traffic condition and beat
            the traffic. With Instadriver app, no wasting of time and fuel on
            the road. Real-time data on traffic leveraged by our solution and
            communications by fellow drivers.
          </p>

          <img
            className="w-100"
            src="https://cdn.instadriver.co/dist/images/Feature-img11.svg"
          ></img>
        </Card>
      </div>

      <div className="col-6" onClick={() => setActivated(6)}>
        <Card className={`mx-5 ${activated === 6 ? "active" : ""}`}>
          <h1 className="title">Acquire New Skills & Earn More</h1>
          <p className="desc w-100">
            We are now in "the Fourth Industrial Revolution" period, where Ai
            and automation is disrupting the world. With autonomous driving
            coming, we have to prepare drivers for this driver-less tech era,
            and hence upskilling and reskilling is critical. Learn soft skills
            e.g. Graphic design, SMM, Coding, etc.
          </p>

          <img
            className="w-100"
            src="https://cdn.instadriver.co/dist/images/Feature-img12.svg"
          ></img>
        </Card>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  margin: 40px 170px;
  padding: 0px 100px;
  justify-content: center;

  .active {
    background-color: #3b3b3b;

    .title {
      color: #f0f0f0;
    }

    .desc {
      color: #f0f0f0;
    }
  }
`;

const Card = styled.div`
  background-color: #f4f4f4;
  //! width: 40%;
  height: 100%;
  padding: 0 25px;
  padding-bottom: 15px;
  border-radius: 10px;

  .title {
    color: #3b3b3b;
    font-weight: 500;
    font-size: 1.825rem;
    // margin: 10px 50px;
    padding: 20px 0px;
  }

  .desc {
    font-size: 20px;
    font-weight: 400;
    color: #3b3b3b;
    padding-bottom: 10px;
    //! margin: 0px 50px;
  }
`;
