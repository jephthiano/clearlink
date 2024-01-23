function Testimonial() {
  return (
    <div className="j-home-padding j-color6"style={{marginTop:"70px"}}>
      <div className="j-row j-paddng"style={{padding:"50px 0px"}}>
        <div className='j-col m6 j-padding'>
          <div>
            <img src={require('addons/images/testimonial/shopify.png')}style={{width:'20px'}}/>
            <b><i>shopify</i></b>
          </div>
          <div style={{margin:'20px 0px',color:'orange'}}>
              <span  className="fas fa-star"></span>
              <span  className="fas fa-star"></span>
              <span  className="fas fa-star"></span>
              <span  className="fas fa-star"></span>
              <span  className="fas fa-star"></span>
          </div>
          <div className="j-bolder j-xlarge"style={{maxWidth:'400px'}}>
            ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.
          </div>
          <div style={{margin:'20px 0px'}}>
            <div className="j-col s8">
              <div style={{display:'inline-block',marginRight:'8px'}}>
                <img src={require('addons/images/testimonial/sarah.png')}style={{width:'50px',position:'relative',top:'-12px'}}/>
              </div>
              <div style={{display:'inline-block',marginLeft:'5px'}}>
                <div className='j-bolder'>Sarah Thompson</div>
                <div className="j-text-color5">Project Manager, Shopify</div>
              </div>
            </div>
            <div className="j-col s4">
              <div class='j-right'>
              <img src={require('addons/images/testimonial/arrow.png')}style={{width:'100px'}}/>
              </div>
            </div>
          </div>
        </div>
        <div className="j-col m6 j-padding">
          <center>
          <div style={{marginBottom:'5px'}}>
            <img src={require('addons/images/testimonial/Image1.png')}style={{width:'100px',marginRight:'10px',verticalAlign:'baseline'}}/>
            <img src={require('addons/images/testimonial/Image2.png')}style={{width:'100px',verticalAlign:'baseline'}}/>
          </div>
          <div>
            <img src={require('addons/images/testimonial/Image3.png')}style={{width:'100px',marginRight:'10px',verticalAlign:'top'}}/>
            <img src={require('addons/images/testimonial/Image4.png')}style={{width:'100px',marginRight:'10px',verticalAlign:'top'}}/>
            <img src={require('addons/images/testimonial/Image5.png')}style={{width:'100px',marginRight:'10px',verticalAlign:'top'}}/>
          </div>
          </center>
        </div>
      </div>
    </div>
  )
}

export default Testimonial