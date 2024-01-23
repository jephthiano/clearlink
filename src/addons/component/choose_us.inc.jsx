function ChooseUS() {
  return (
    <div className="j-home-padding"style={{marginTop:"70px"}}>
        <div>
            <div className="j-row">
                <div className='j-col m7 j-padding'>
                    <div className="j-text-color1 j-bolder">
                        The ClearLink Advantage
                    </div>
                    <div className='j-xxlarge j-bolder'style={{margin:'10px 0px'}}>
                        Why choose ClearLink
                    </div>
                    <div className="j-text-color5">
                        In a world where connection is everything, ClearLink takes the lead.Our <br/>
                        cutting-edge video conference app offers:
                    </div>
                </div>
                <div className='j-col m5 j-hide-small'>
                <img src={require('addons/images/choose/arrow.png')}style={{position:'relative',top:'38px',right:'15px'}}/>
                </div>
            </div>
            <div className="j-row">
                <div className='j-col l7'>
                    <div className="j-row j-padding">
                        <div className='j-col m6'>
                            <div className='j-padding j-text-color1 j-large'>
                                <img src={require('addons/images/choose/camera.png')}style={{marginBottom:'10px'}}/>
                            </div>
                            <div className='j-bolder j-large'>Crystal-clear HD video</div>
                            <div className='j-text-color5'style={{marginRight:'30px'}}>
                            No more pixelation or blurriness – just stunning, life like clarity that brings your team closer in meetings.
                            </div>
                        </div>
                        <div className='j-col m6'>
                            <div className='j-padding j-text-color1 j-large'>
                                <img src={require('addons/images/choose/noise.png')}style={{marginBottom:'10px'}}/>
                            </div>
                            <div className='j-bolder j-large'>Noise-canceling audio</div>
                            <div className='j-text-color5'style={{marginRight:'30px'}}>
                            Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.
                            </div>
                        </div>
                    </div>
                    <div className="j-row j-padding"style={{marginTop:'10px'}}>
                        <div className='j-col m6'>
                            <div className='j-padding j-text-color1 j-large'>
                                <img src={require('addons/images/choose/calendar.png')}style={{marginBottom:'10px'}}/>
                            </div>
                            <div className='j-bolder j-large'>Scheduling made easy</div>
                            <div className='j-text-color5'style={{marginRight:'30px'}}>
                            Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.
                            </div>
                        </div>
                        <div className='j-col m6 '>
                            <div className='j-padding j-text-color1 j-large'>
                                <img src={require('addons/images/choose/lock.png')}style={{marginBottom:'10px'}}/>
                            </div>
                            <div className='j-bolder j-large'>Bank-grade security</div>
                            <div className='j-text-color5'style={{marginRight:'30px'}}>
                            Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='j-col l5 j-hide-small j-hide-medium'style={{marginTop:'20px'}}>
                    <img src={require('addons/images/choose/image1.png')}style={{width:'80%'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseUS