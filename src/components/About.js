import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import BGImg from '../images/about.jpg';

const StyledAbout = styled.section`
  padding: 3rem;
  color: white;
  background: linear-gradient(0deg, rgba(25, 18, 87, 0.6), rgba(25, 18, 87, 0.8)), url(${BGImg}) no-repeat center fixed;
`

const About = () => {
  return (
    <StyledAbout id="aboutus">
      <Container>
        <h2><span role="img" aria-label="Muscle">💪</span> Our team</h2>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur hendrerit placerat laoreet. In sed malesuada nisi. Duis et diam et massa ullamcorper lacinia. Pellentesque sed aliquam turpis. Quisque lorem velit, congue a felis nec, aliquet pretium erat. Fusce nunc sem, aliquam vel tortor vestibulum, finibus tempus lacus. In nulla enim, mollis sit amet nisi rutrum, vestibulum rutrum ipsum. Maecenas aliquam odio in rhoncus commodo. Fusce ut ipsum vel lorem tempus dapibus ut sit amet tellus. Praesent sed erat nulla. Curabitur efficitur laoreet sapien ut convallis.
        </p>
      </Container>
    </StyledAbout>
  )
}

export default About
