import  {toggle_modal} from 'addons/function/general.fuc.js';

function Nav(props) {
    return (
      <>
      <div className="j-home-padding"style={{marginTop:'20px'}}>
        <div className='j-color6 j-medium j-round-xxlarge j-padding j-bar'>
            <div class="j-bar-item">
                <a href=""className='j-clickable j-round-large j-margin-small'>
                    <img src={require('addons/images/logo.png')}style={{marginRight:'2px',width:'15px',height:'15px'}}/>
                    <span class='j-bolder'>ClearLink<span class='j-text-color1'>.</span></span>
                </a>
            </div>
            <span  id="mo"className="j-right j-xlarge j-clickable j-hide-large j-hide-xlarge"onClick={() => toggle_modal('show','menu_modal')}>
                    &#9776;
                </span>
            <div class='j-hide-small j-hide-medium'>
                <div class='j-text-color7 j-bar-item j-center'style={{marginLeft:'10%'}}>
                        <a href=""className='j-clickable j-round-large j-margin-small j-hide-small'style={{marginRight:'8px',padding:'16px 8px'}}>
                            Products <span class="fas fa-angle-down"style={{marginLeft:'2px'}}></span>
                        </a>
                        <a href=""className='j-clickable j-round-large j-margin-small j-hide-small'style={{marginRight:'8px',padding:'16px 8px'}}>
                            Solutions <span class="fas fa-angle-down"style={{marginLeft:'2px'}}></span>
                        </a>
                        <a href=""className='j-clickable j-round-large j-margin-small j-hide-small'style={{marginRight:'8px',padding:'16px 8px'}}>
                            Resources <span class="fas fa-angle-down"style={{marginLeft:'2px'}}></span>
                        </a>
                        <a href=""className='j-clickable j-round-large j-margin-small j-hide-small'style={{marginRight:'8px',padding:'16px 8px'}}>
                            Pricing 
                        </a>
                </div>
                <div className='j-right j-bar-item'>
                    <a href=""className='j-clickable j-round-large j-margin-small j-hide-small'style={{marginRight:'8px'}}>
                        <span class='j-color4 j-padding-large j-round-xxlarge j-border'>Talk to sales</span>
                    </a>
                    <a href=""className='j-clickable j-round-large j-margin-small j-hide-small'style={{marginRight:'8px'}}>
                        <span class='j-color1 j-padding-large j-round-xxlarge'>Sign up for free</span>
                    </a>
                </div>
                <div className='j-clearfix'></div>
            </div>
        </div>
      </div>
      {/* sidebar for medium and small screen */}
      <div className='j-hide-large j-hide-xlarge'>
            <div id="menu_modal"className="j-color6 j-sidebar j-padding"style={{position:'absolute',width:'100%',top:'0px',display:'none'}}>
                <div className='j-right j-margin j-xxlarge'onClick={() => toggle_modal('hide','menu_modal')}>X</div>
                <div class="j-center j-xlarge">
                    <br className='j-clearfix'/>
                    <a href="">
                        <div onClick={() => {toggle_modal('hide','menu_modal')}}style={{opacity:'100%'}}className="j-padding">Home</div><br/>
                    </a>
                    <a href="">
                        <div onClick={() => {toggle_modal('hide','menu_modal')}}style={{opacity:'100%'}}className="j-padding">Product</div><br/>
                    </a>
                    <a href="">
                        <div onClick={() => {toggle_modal('hide','menu_modal')}}style={{opacity:'100%'}}className="j-padding">Solution</div><br/>
                    </a>
                    <a href="">
                        <div onClick={() => {toggle_modal('hide','menu_modal')}}style={{opacity:'100%'}}className="j-padding">Resoures</div><br/>
                    </a>
                    <a href="">
                        <div onClick={() => {toggle_modal('hide','menu_modal')}}style={{opacity:'100%'}}className="j-padding">Pricing</div><br/>
                    </a>
                    <a href="">
                        <div class='j-color4 j-padding j-round-xxlarge j-tn'>Talk to sales</div><br/>
                    </a>
                    <a href="">
                        <div class='j-color1 j-padding j-round-xxlarge jbtn'>Sign up for free</div><br/>
                    </a>
                </div>
            </div>
        </div>

      </>
    );
  }
  
  export default Nav;