import React from 'react';
import Button from 'storybook-material-ui-project/dist/components/Button';
const About = () => {
  return (
    <div>
      <h1>About Storybook Sample Page</h1>
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <Button variant="contained" color="secondary">
      Secondary Button
      </Button>
      <Button variant="contained" color="primary" disabled="true">
        Disabled Button
      </Button>
    </div>
  );
};

export default About;