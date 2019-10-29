import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, animateScroll as scroll } from "react-scroll";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      started: false
    }

    this.handleStart = this.handleStart.bind(this);
    
  }

  handleStart(e) {
    this.setState({started: true})
  }
  
  handleClick(e) {
    this.onClick = this.handleClick.bind(this);
    console.log("hello");
  }

  

  


  render() {
    const { started } = this.state;
    
    return (
      <div className="App">
        <div className="App-bg">
          <div className={`${started ? "grow" : ""} home-rect`} onClick={this.handleStart}>
            { !started ? (
              <div className="homeTitle"><h1>MY FAVORITE PLACE:</h1>
                <h4>THE PACIFIC NORTHWEST</h4><p></p>
                  <button className="enter"> ENTER </button>
              </div>
            ) :
            (
            <div id="sectionFirst" className={`${started ? "animatePhotos grow" : ""} main-rect`} onClick={this.handleStart}><section id="section_start"></section>
             <div className="main-container">
                  <div className="main-text-container">
                    <h1>SEATTLE</h1>
                    <div class="photos-container">
                      <ul>
                        <a href="#seattle_description">
                          <span>
                            <img src="https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80"  className="preview-img" onClick={(e) => this.handleClick(e)} alt="seattle"/>   
                          </span>
                        </a>
                      </ul>
                    </div>
                  </div>
                  <div className="main-text-container">
                    <h1>SHI SHI BEACH</h1>
                    <div className="photos-container">
                      <ul>
                        <a href="#bonfire_description">
                          <span>
                            <img src="https://images.unsplash.com/photo-1569918970203-ea053ffda098?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" className="preview-img" alt="bonfire"/>   
                          </span>
                        </a>
                      </ul>
                    </div>
                  </div>
                  <div className="main-text-container">
                    <h1>MOUNT RAINIER</h1>
                    <div className="photos-container">
                      <ul>
                        <a href="#rainier_description">
                            <span>
                              <img src="https://images.unsplash.com/photo-1565272266123-8ad03c357bc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="preview-img" alt="rainier"/>   
                            </span>
                        </a>
                      </ul>
                    </div>
                  </div>
                  <div className="main-text-container">
                    <h1>FRIDAY HARBOR</h1>
                    <div className="photos-container">
                      <ul>
                        <a href="#fharbor_description">
                            <span>
                              <img src="https://images.unsplash.com/photo-1523764674925-9bef2771e486?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80" className="preview-img" alt="friday harbor"/>   
                            </span>
                        </a>
                      </ul>
                    </div>
                  </div>
                  <div className="main-text-container">
                    <h1>RAMEN DANBO</h1>
                    <div className="photos-container">
                      <ul>
                        <a href="#ramen_description">
                            <span>
                              <img src="https://cdn.vox-cdn.com/thumbor/m_ziNFvlqNUEovUqvm3Nt8C143w=/0x0:960x720/1200x800/filters:focal(404x284:556x436)/cdn.vox-cdn.com/uploads/chorus_image/image/57036709/17498571_607813352751352_6136458671372775181_n.0.jpg" className="preview-img" alt="danbo"/>   
                            </span>
                        </a>
                      </ul>
                    </div>
                  </div>
                  <div className="main-text-container">
                    <h1>WATSON KENNEDY</h1>
                    <div className="photos-container">
                      <ul>
                        <a href="#watsonk_description">
                            <span>
                              <img src="http://3.bp.blogspot.com/--_G_SqwG4cg/Tt8Ry21zqWI/AAAAAAAAD-M/fv0fj13boDw/s1600/Watson+%2526+Kennedy.jpg" className="preview-img" alt="watsonk"/>   
                            </span>
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="pagebreaks"></div>
                
                <div className="sectionSecond">
                  <div className="second-text-container">
                    <div class="photos-container">
                      <section id="seattle_description"></section>
                        <img src="https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80" class="img" className="main-img second-text-container" onClick={(e) => this.handleClick(e)} />   
                        <div class="top-right"><h2>SEATTLE</h2></div>                  
                    </div>
                  </div>
                    <div class="description-text-container">
                      <p>“This past summer, I made Seattle, Washington my new home and was able to explore the various beauties of 
                        the area such as Olympic Sculpture Park, the Seattle Art Museum, and Golden Gardens Beach. I enjoyed
                        the mild summer weather, which was always around the low 70s, and living in the Redmond suburban area. 
                        On the weekends, I loved exploring the city and heading to Capitol Hill for some good ramen, window shopping
                        and checking out the cool candles at Labo, and eating some Molly Moon's ice cream. I am excited to be back
                        in Seattle next summer, where I hope to live in closer proximity to downtown and the Space Needle, and can
                        look forward to more days looking out at the sunset from Gas Works Park.”</p>
                    </div>
                </div>
                
                <div className="sectionSecond">
                    <div className="second-text-container">
                    <div class="photos-container">
                        <img src="https://images.unsplash.com/photo-1569918970203-ea053ffda098?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" class="img" className="main-img second-text-container" onClick={(e) => this.handleClick(e)} />   
                        <div class="top-right"><h2>SHI SHI BEACH</h2></div> 
                        <section id="bonfire_description"></section>                 
                    </div>
                  </div>
                    <div class="description-text-container">
                      <p>“I'm a huge fan of the outdoors, and I'm super excited to check out Shi Shi Beach next summer.
                        I was at Olympic National Park this summer, but did not get to explore nearly as many places as I 
                        would have liked. Shi Shi Beach Trail is a 6.7 mile moderately trafficked out and back trail located
                        near Neah Bay, Washington that features beautiful wild flowers and is rated as moderate.
                        The trail offers a number of activity options and is accessible year-round.</p>
                        
                        <p>I am excited to check out the beaches a bit more when I return next summer; having a summer beach 
                          bonfire is certainly on the bucket list.”</p>
                    </div>
                </div>

                <div className="sectionSecond">
                    <div className="second-text-container">
                    <div class="photos-container">
                        <img src="https://images.unsplash.com/photo-1565272266123-8ad03c357bc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" class="img" className="main-img second-text-container" onClick={(e) => this.handleClick(e)} />   
                        <div class="top-right"><h2>MOUNT RAINIER</h2></div> 
                        <section id="rainier_description"></section>                 
                    </div>
                  </div>
                    <div class="description-text-container">
                      <p>“Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape. 
                        An active volcano, Mount Rainier is the most glaciated peak in the contiguous U.S.A., spawning five major 
                        rivers. Subalpine wildflower meadows ring the icy volcano while ancient forest cloaks Mount Rainier’s lower 
                        slopes. Wildlife abounds in the park’s ecosystems.</p>

                        <p>When my family and I first visited Seattle in the summer of 2018, we didn't actually get
                        to hike Mount Rainier; we actually rented a Jeep Wrangler and drove up to Hurricane Ridge instead.
                        I'm excited to take on this challenge next summer and actually hike some trails here."</p>
                    </div>  
                </div>

                <div className="sectionSecond">
                    <div className="second-text-container">
                    <div class="photos-container">
                        <img src="https://images.unsplash.com/photo-1523764674925-9bef2771e486?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80" class="img" className="main-img second-text-container" onClick={(e) => this.handleClick(e)} />   
                        <div class="top-right"><h2>FRIDAY HARBOR</h2></div> 
                        <section id="fharbor_description"></section>                 
                    </div>
                  </div>
                    <div class="description-text-container">
                      <p>“Friday Harbor is a charming, historic, walkable seaport just steps from the ferry landing, with small, 
                        friendly shops and restaurants, and a refreshing absence of fast-food chains.</p>

                        <p>The seaport is actually one of many popular summer destinations on the San Juan Islands. Funny enough,
                          I am working on a project in my Interaction Design Studio course dedicated to creating a beautiful display
                          that can enable travelers to easily get to one destination after another. The project has very well primed me
                          with anticipation for a weekend getaway next summer."</p>
                    </div>  
                </div>

                <div className="sectionSecond">
                    <div className="second-text-container">
                    <div class="photos-container">
                        <img src="https://cdn.vox-cdn.com/thumbor/m_ziNFvlqNUEovUqvm3Nt8C143w=/0x0:960x720/1200x800/filters:focal(404x284:556x436)/cdn.vox-cdn.com/uploads/chorus_image/image/57036709/17498571_607813352751352_6136458671372775181_n.0.jpg" class="img" className="main-img second-text-container" onClick={(e) => this.handleClick(e)} />   
                        <div class="top-right"><h2>RAMEN DANBO</h2></div> 
                        <section id="ramen_description"></section>                 
                    </div>
                  </div>
                    <div class="description-text-container">
                      <p>“Warm your soul with authentic Japanese ramen Now open in Vancouver, Seattle, and New York,
                        Danbo brings traditional Fukuoka-style Kyushu Hakata Tonkotsu ramen to Japanese food fans in North America.</p>

                        <p>Ramen Danbo is located in Seattle's Capitol Hill, and I have found myself in the neighborhood on many occasions
                          due to its tasty ramen. This past summer, I've been doing a classic Ramen+Molly Moon's ice cream combo, and then
                          my friends and I would sit on the grass at the park across the street. Also, there's a really amazing fragrance 
                          store located nearby called Le Labo."</p>
                    </div>  
                </div>

                <div className="sectionSecond">
                    <div className="second-text-container">
                    <div class="photos-container">
                        <img src="http://3.bp.blogspot.com/--_G_SqwG4cg/Tt8Ry21zqWI/AAAAAAAAD-M/fv0fj13boDw/s1600/Watson+%2526+Kennedy.jpg" class="img" className="main-img second-text-container" onClick={(e) => this.handleClick(e)} />   
                        <div class="top-right"><h2>WATSON KENNEDY</h2></div> 
                        <section id="watsonk_description"></section>                 
                    </div>
                  </div>
                    <div class="description-text-container">
                      <p>“Located in the heart of Seattle’s historic Pike Place Market, in the Courtyard of the Inn at the Market, 
                        the store has become a Seattle fixture, a must shop for visitors and a trusted friend for locals. 
                        With the feel of a shop on the Left Bank, the Living store has our deepest selection of products for bed, 
                        body and bath. Ted’s eclectic taste and eye for detail are also represented in a wide assortment of 
                        French and English goods and antiques.</p>

                        <p>I get excited by every single item in the store like a little kid on Christmas. 
                          I'm super interested in interior design and decor, which is why this is probably my favorite
                          store of all time. I discovered this store during my first trip to Seattle, on the first day of
                          stepping into the downtown Pike Place Market area--and quickly fell in love with both the store
                          and the city itself."
                        </p>
                    </div>  
                </div>

                
              
                <div id="pagebreaks"></div>
                <div class="footer"><a href="#section_start">Back to top</a>&nbsp; &nbsp; &nbsp; <a href="/">Back to home</a></div>
                

              </div>
            )
            }
          </div>
        </div>
      </div>
    );
  }

  


}






export default App;