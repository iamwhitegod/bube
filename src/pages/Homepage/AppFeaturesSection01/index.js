import React from 'react';
import Button from '../../../components/Button';

import Container from '../../../layouts/Container';

import illustration_01 from '../../../assets/illustration_01.png';
import google_play from '../../../assets/google_play.png';
import apple_store from '../../../assets/app_store.png';

function AppFeaturesSection01() {
  return (
    <section className="app-features__section">
      <Container otherClassNames="flex">
        <div className="col-1-of-2">
          <div className="app-features__feature">
            <div className="app-features__feature-img">
              <img src={illustration_01} alt="App screen" />
            </div>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="app-features__feature">
            <div className="app-features__feature-content">
              <h2>
                <span className="accent">Bube</span> makes finding{' '}
                <span className="accent">artisans</span> a seemless experience
              </h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
              </p>
              <div className="app-features__feature-cta">
                <Button>
                  <img src={google_play} alt="Download on Google play button" />
                </Button>
                <Button>
                  <img src={apple_store} alt="Download on Google play button" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AppFeaturesSection01;