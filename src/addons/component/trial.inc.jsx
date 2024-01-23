function Trial() {
  return (
    <div className="j-home-padding"style={{marginTop:"70px"}}>
        <div className="j-row">
          <div class="j-col m5 j-padding">
            <div className="j-bolder j-xlarge"style={{maxWidth:'350px'}}>
              Ready to clear the path to perfect communication?
            </div>
            <div className="j-text-color5 j-padding"style={{lineHeight:"35px"}}>
              <div>
                <span style={{marginRight:"8px"}}>
                  <img src={require('addons/images/trial/check.png')}style={{width:'20px'}}/>
                </span>
                <span>30 days free trial</span>
              </div>
              <div>
              <span style={{marginRight:"8px"}}>
                <img src={require('addons/images/trial/check.png')}style={{width:'20px'}}/>
              </span>
                <span>Cancel at any time</span>
              </div>
              <div>
              <span style={{marginRight:"8px"}}>               
                <img src={require('addons/images/trial/check.png')}style={{width:'20px'}}/>
              </span>
                <span>Access to all  features</span>
              </div>
              <div>
              <span style={{marginRight:"8px"}}>                
                <img src={require('addons/images/trial/check.png')}style={{width:'20px'}}/>
              </span>
                <span>Personalized onboarding</span>
              </div>
            </div>
            <div style={{marginTop:"24px"}}>
              <a href=""className='j-clickable j-round-large j-margin-small'style={{marginRight:'8px'}}>
                <span class='j-color4 j-padding j-round-xxlarge j-border'>Talk to sales</span>
              </a>
              <a href=""className='j-clickable j-round-large j-margin-small'>
                <span class='j-color1 j-padding j-round-xxlarge'>Sign up for free</span>
              </a>
            </div>
          </div>
          <div class="j-col m7 j-padding">
            <img src={require('addons/images/trial/trial.png')}style={{width:'100%',height:"400px"}}/>
          </div>
        </div>
    </div>
  )
}

export default Trial