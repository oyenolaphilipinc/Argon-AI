import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Argon" text="An AI powered company providing solutions to world growing problems using the power of data and AI. We are a focused team ready to solve world arising problems in AI. AI is the future but Join us to unlock the future in the present." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Unlock the power of AI messaging and communication using AI powered chatbots." />
      <Feature title="Knowledgebase" text="Get a whole lot of features using Argon AI powered products to solve your problems." />
      <Feature title="Education" text="We at Argon are dedicated to solving world problems with AI and we are not limited to learning, we are a team that learns from each other." />
    </div>
  </div>
);

export default WhatGPT3;
