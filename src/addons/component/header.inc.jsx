function Header(props) {
    return (
      <>
      <section className='j-home-padding'>
        <div className='margin-top'>
          <div className="j-row">
            <div className="j-col m7 j-padding">
              <div className="j-bolder"style={{fontSize:'50px',lineHeight:'50px'}}>
                Uniting the world,<br/>
                one video call at a time
              </div>  
              <div className="j-text-color5"style={{fontSize:'16px',marginTop:'30px'}}>
                Experience the future of communicating with ClearLink - <br/>
                where crystal-clear video conferencing meets <br/>
                unparalleled simplicity<br/>
              </div>
              <div style={{marginTop:'30px'}}>
                <a href=""className='j-padding-large j-color1 j-round-xxlarge'style={{marginRight:'20px'}}>Start your free trial</a>
                <span className="j-hide-large j-hide-xlarge"><br/><br/></span>
                <a href=""className="j-padding-large j-text-color1 j-btn j-round-xxlarge j-bolder j-border j-border-color1">
                <img src={require('addons/images/header/discover.png')}style={{marginRight:'10px',position:'relative',top:'-1px'}}/>
                  Discover AI assistant
                </a>
              </div>
              <div style={{marginTop:'30px',color:'orange'}}>
                <div class='j-padding'style={{display:'inline-block',position:'relative',top:'-12px'}}>
                  <div>
                    <img src={require('addons/images/header/avatar5.png')}style={{marginRight:'10px',position:'absolute',top:'-12px',right:'-135px'}}/>
                    <img src={require('addons/images/header/avatar4.png')}style={{marginRight:'10px',position:'absolute',top:'-12px',right:'-105px'}}/>
                    <img src={require('addons/images/header/avatar3.png')}style={{marginRight:'10px',position:'absolute',top:'-12px',right:'-75px'}}/>
                    <img src={require('addons/images/header/avatar2.png')}style={{marginRight:'10px',position:'absolute',top:'-12px',right:'-45px'}}/>
                    <img src={require('addons/images/header/avatar1.png')}style={{marginRight:'10px',position:'absolute',top:'-12px',right:'-15px'}}/>
                  </div>
                </div>
                <div style={{display:'inline-block',marginLeft:'150px'}}>
                  <span  className="fas fa-star"></span>
                  <span  className="fas fa-star"></span>
                  <span  className="fas fa-star"></span>
                  <span  className="fas fa-star"></span>
                  <span  className="fas fa-star"></span>
                  <span className='j-text-color3'> 5.0</span><br/>
                  <span className='j-text-color3'style={{marginTop:'2px'}}>From 3000+ reviews</span>
                </div>
              </div>
            </div>
            <div className="j-col m5">
              <div className="j-padding-large j-center"style={{backgroundColor:'#EFF8FF'}}>
                <div style={{margin:'20px 0px'}}>
                  <div style={{marginBottom:'10px'}}>
                    <img src={require('addons/images/header/animoji1.png')}style={{width:'30%',marginRight:'4%'}}/>
                    <img src={require('addons/images/header/animoji2.png')}style={{width:'30%',marginRight:'4%'}}/>
                    <img src={require('addons/images/header/animoji3.png')}style={{width:'30%'}}/>
                  </div>
                  <div>
                    <img src={require('addons/images/header/animoji4.png')}style={{width:'30%',marginRight:'4%'}}/>
                    <img src={require('addons/images/header/animoji5.png')}style={{width:'30%',marginRight:'4%'}}/>
                    <img src={require('addons/images/header/animoji6.png')}style={{width:'30%'}}/>
                  </div>
                  <div style={{marginTop:'20px'}}>
                    <img src={require('addons/images/header/mic.png')}style={{marginRight:'8px'}}/>
                    <img src={require('addons/images/header/camera.png')}style={{marginRight:'8px'}}/>
                    <img src={require('addons/images/header/monitor.png')}style={{marginRight:'8px'}}/>
                    <img src={require('addons/images/header/smile.png')}style={{marginRight:'8px'}}/>
                    <img src={require('addons/images/header/message.png')}style={{marginRight:'8px'}}/>
                    <img src={require('addons/images/header/setting.png')}style={{marginRight:'8px'}}/>
                  </div>
              </div>
              </div>
            </div>
          </div>
          </div>
      </section>
      </>
    );
  }
  
  export default Header;