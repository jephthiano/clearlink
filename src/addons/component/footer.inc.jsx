function Footer() {
  return (
    <div className="j-home-padding"style={{marginTop:"70px"}}>
        <div className="j-row">
            <div className="j-col l5 j-padding">
                <div className="j-bolder"style={{marginBottom:'10px'}}>
                    <img src={require('addons/images/logo.png')}style={{marginRight:'2px',width:'15px',height:'15px'}}/>
                    ClearLink
                </div>
                <div className="j-text-color5"style={{maxWidth:'350px'}}>ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</div>
            </div>
            <div className="j-col m3 l1 j-padding">
                <div className="j-text-color5">Product</div>
                <div style={{lineHeight:'35px'}}>
                    Overview <br/>
                    Features <br/>
                    Solutions <br/>
                    Tutorials <br/>
                    Pricing
                </div>
            </div>
            <div className="j-col m3 l1 j-padding">
                <div class="j-text-color5">Company</div>
                <div style={{lineHeight:'35px'}}>
                    About us <br/>
                    Careers <br/>
                    Press <br/>
                    News <br/>
                    Contact
                </div>
            </div>
            <div className="j-col m3 l1 j-padding">
                <div class="j-text-color5">Resources</div>
                <div style={{lineHeight:'35px'}}>
                    Blog <br/>
                    Events <br/>
                    Help <br/>
                    Tutorials <br/>
                    Support
                </div>
            </div>
            <div className="j-col m3 l1 j-padding">
                <div class="j-text-color5">Legal</div>
                <div style={{lineHeight:'35px'}}>
                    Terms <br/>
                    Privacy <br/>
                    Cookies <br/>
                    Licenses <br/>
                    Contact
                </div>
            </div>
            <div className="j-col l3 j-padding">
                <div className="j-bolder j-text-color1"style={{marginBottom:'10px'}}>Get the app</div>
                <div>
                <img src={require('addons/images/footer/apple.png')}style={{marginRight:"10px"}}/>
                <span className="j-hide-small j-hide-medium"><br/><br/></span>
                <img src={require('addons/images/footer/google.png')}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer