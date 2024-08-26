import React from 'react'
export const BioSection = () => {

    return (
        <section className="bio-section">
          <iframe
            width="100%"
            height="400"
            style={{ borderRadius: '8px' }}
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="YouTube video"
          ></iframe>
    
          <div className="bio-content">
            <h2>Bio</h2>
            <p>How can I help?</p>
            <ul>
              <li>Paid Ads: Audit your FB/Google ad accounts and show the clear path to improvements with your</li>
              <li>Creative Strategy: Improve your ad creative workflow and help with a clear testing roadmap</li>
              <li>Set up marketing automation and roadmap to scale</li>
            </ul>
            <p>Talk to me about → Paid ads, Growth Frameworks, Creative Strategy, Analytics, Attribution</p>
    
            <h2>Projects:</h2>
            <p>Gaming:</p>
            <ul>
              <li>Adventure Communist: 70% ROAS uplift and 69% CPI improvement, an idle-clicking game. 👑</li>
              <li>Merge Meadows</li>
              <li>Fashion Stylist</li>
              <li>Travel Crush (Match 3 game)</li>
            </ul>
    
            <p>DTC:</p>
            <ul>
              <li>Soundboks $1000 AOV performance Bluetooth speaker, improved ROAS by 44%</li>
              <li>Spinn - premium coffee maker</li>
              <li>Yak Grils charcoal</li>
            </ul>
    
            <p>Apps:</p>
            <ul>
              <li>QuackQuack (Ddating app): 2.5x scale in MRR from $28,000 to $70,000 in a year via Facebook and Google ads UA. 💘</li>
              <li>RummyPassion: 10x scale in FTDs via Facebook and Google ads. 💰</li>
              <li>MoneyTap: 10x scale in organic installs in just one year (15k installs to 150k installs). 💸</li>
            </ul>
    
            <p>Media:</p>
            <ul>
              <li>Sportskeeda: 3x scale in 2.5 years from 6 MM unique views to 20 MM unique views. ⚽🏀</li>
            </ul>
          </div>
        </section>
      );
}

