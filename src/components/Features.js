import React from 'react';
import styled from 'styled-components';
import Bounce from 'react-reveal/Bounce';
import simple from '../images/simple.svg';
import modular from '../images/modular.svg';
import robust from '../images/robust.svg';

const StyledFeatures = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 1em auto;
  @media (max-width: 960px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  article {
    img {
      display: block;
      max-width: 90px;
      height: 50px;
    }
    h3 {
      color: #191257;
    }
    p {
      color: #333333;
    }
  }
`

const Features = () => {
  return (
    <StyledFeatures id="features">
      <article>
        <Bounce>
          <img src={simple} alt="simple" />
        </Bounce>
        <h3>Simple</h3>
        <p>Pickled butcher portland gastropub disrupt, literally keytar williamsburg mixtape master cleanse thundercats green juice cloud bread slow-carb. Seitan pinterest yr affogato +1 poutine, gluten-free chillwave ramps man bun messenger bag kombucha thundercats cray. Man braid mumblecore artisan cronut green juice umami gastropub shabby chic. Next level williamsburg etsy fixie, yuccie health goth YOLO kitsch.</p>
      </article>
      <article>
        <Bounce>
          <img src={modular} alt="modular" />
        </Bounce>
        <h3>Modular</h3>
        <p>Scenester gluten-free jean shorts authentic PBR&amp;B austin wolf wayfarers tacos sartorial. Fixie four dollar toast heirloom swag cred pork belly letterpress tousled shoreditch try-hard put a bird on it tote bag blue bottle meggings. Cornhole shabby chic cardigan gastropub. Marfa chillwave drinking vinegar small batch, four dollar toast echo park semiotics copper mug woke literally plaid. Pop-up occupy pinterest tousled. Listicle food truck fingerstache thundercats man braid.</p>
      </article>
      <article>
        <Bounce>
          <img src={robust} alt="robust" />
        </Bounce>
        <h3>Robust</h3>
        <p>Hoodie roof party yuccie, farm-to-table cold-pressed put a bird on it selvage. Normcore messenger bag chambray tumeric shabby chic copper mug. Literally kickstarter banjo occupy, cred migas neutra snackwave cornhole. Kitsch banjo copper mug lomo, fashion axe leggings semiotics selfies cred YOLO succulents helvetica sartorial. Poutine post-ironic retro everyday carry.</p>
      </article>
    </StyledFeatures>
  )
}

export default Features