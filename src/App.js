import React from 'react';
import logo from './logo.svg';
import './App.css';


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
            
            <div>
              <h1>My Place</h1>
              <h3>The Pacific Northwest</h3>
              </div>
            ) :
            
            
            (
            <div id="sectionFirst" className={`${started ? "animatePhotos" : ""} home-rect`} onClick={this.handleStart}>
             <div className="main-container">
                  <div className="main-text-container">
                    <h1>My Place</h1>
                    <div class="photos-container">
                      <ul>
                      <img src="https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80"  className="preview-img" onClick={(e) => this.handleClick(e)} alt="seattle"/>   
                      </ul>
                    </div>
                  </div>
                  <div className="main-text-container">
                    <h1>My Place</h1>
                    <div className="photos-container">
                      <ul>
                      <img src="https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80" className="preview-img" alt="seattle"/>   
                      </ul>
                    </div>
                  </div>
                  <div className="main-text-container">
                    <h1>My Place</h1>
                    <div className="photos-container">
                      <ul>
                      <img src="https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80" className="preview-img" alt="seattle"/>   
                      </ul>
                    </div>
                  </div>
                  <div className="main-text-container">
                    <h1>My Place</h1>
                    <div className="photos-container">
                      <ul>
                      <img src="https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80" className="preview-img" alt="seattle"/>   
                      </ul>
                    </div>
                  </div>
                  <div className="main-text-container">
                    <h1>My Place</h1>
                    <div className="photos-container">
                      <ul>
                      <img src="https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80" className="preview-img" alt="seattle"/>   
                      </ul>
                    </div>
                  </div>
                  <div className="main-text-container">
                    <h1>My Place</h1>
                    <div className="photos-container">
                      <ul>
                      <img src="https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80" className="preview-img" alt="seattle"/>   
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="pagebreaks"></div>
                
                <div className="new-page-container" >
                  <div className="second-text-container">
                    <h1>My Place</h1>
                    <div class="photos-container">
                      <ul>
                      <img src="https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80" class="img" className="main-img second-text-container" onClick={(e) => this.handleClick(e)} />   
                      </ul>
                    </div>
                  </div>
                  <div className="second-text-container">
                    <h1>My Place</h1>
                    <div class="photos-container">
                      <ul>
                      <img src="https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80" class="img" className="main-img second-text-container" onClick={(e) => this.handleClick(e)} />   
                      </ul>
                    </div>
                  </div>
                  <div className="second-text-container">
                    <h1>My Place</h1>
                    <div class="photos-container">
                      <ul>
                      <img src="https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80" class="img" className="main-img second-text-container" onClick={(e) => this.handleClick(e)} />   
                      </ul>
                    </div>
                  </div>
                  <div className="second-text-container">
                    <h1>My Place</h1>
                    <div class="photos-container">
                      <ul>
                      <img src="https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80" class="img" className="main-img second-text-container" onClick={(e) => this.handleClick(e)} />   
                      </ul>
                    </div>
                  </div>
                  <div className="second-text-container">
                    <h1>My Place</h1>
                    <div class="photos-container">
                      <ul>
                      <img src="https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80" class="img" className="main-img second-text-container" onClick={(e) => this.handleClick(e)} />   
                      </ul>
                    </div>
                  </div>
                  <div className="second-text-container">
                    <h1>My Place</h1>
                    <div class="photos-container">
                      <ul>
                      <img src="https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80" class="img" className="main-img second-text-container" onClick={(e) => this.handleClick(e)} />   
                      </ul>
                    </div>
                  </div>
           
                
                </div>
              
                <div id="pagebreaks"></div>

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