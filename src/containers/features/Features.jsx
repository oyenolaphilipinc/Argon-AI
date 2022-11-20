import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving the power of AI',
    text: 'Your company get to improve the infrastructure of their AI, They get to move their company forward with the power of data and AI.',
  },
  {
    title: 'Powerful Chatbots',
    text: 'You get to improve the performance of your company using the power of chatbots. Chatbots helps in improving the efficiency of your company communication.',
  },
  {
    title: 'Online Customer Care',
    text: 'Your company get a 24/7 customer care in case of any troubles using our product. Our customers are the first to us so we love our customers.',
  },
  {
    title: 'Improved Fraud Detection',
    text: 'Our team built an AI powered algorithm that detect fraud faster and help you solve it. It is an improved fraud detection system that detects fraud and let your company focus on its customers.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
