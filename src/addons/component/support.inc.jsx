import $ from 'jquery';
function Support() {

  const horNav = (clk_s,clk) =>{
    let x = document.getElementsByClassName("trigger");
    for(let i = 0; i < x.length; i++){x[i].style.display="none";} //hide all details
    $('#'+clk_s).show(); //show the click detail
    //set all icon to plus
    $('.laucher').each(function(){
      $(this).removeClass('fas fa-minus-circle');$(this).addClass('fas fa-plus-circle');
    })
    //change the icon of clicked button to minus
    clk.removeClass('fas fa-plus-circle');clk.addClass('fas fa-minus-circle');
  }

  return (
    <div className="j-home-padding"style={{marginTop:"70px"}}>
      <div className="j-row">
        <div className='j-col m6'>
          <div className="j-margin j-text-color1 j-bolder">
            Support
          </div>
          <div className="j-xxlarge j-bolder j-margin">
            FAQs
          </div>
          <div className="j-text-color5 j-margin"style={{maxWidth:'400px'}}>
          Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please
          <a href=""className="j-underline"> chat to our friendly team.</a>
          </div>
        </div>
        <div className='j-col m6'>
          <div style={{marginBottom:'20px'}}>
            <div className="j-color6 j-padding j-clickable"onClick={() => horNav('part',$('#t_part'))}>
              How many participants can join a ClearLink video conference?
              <span id="t_part"className="fas fa-minus-circle j-text-color7 laucher j-right"style={{fontSize:'22px'}}></span>
              <br className="j-clearfix"/>
            </div>
            <div id="part"className="trigger j-color4 j-padding">
              ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small 
              team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
            </div>
          </div>
          <div style={{marginBottom:'20px'}}>
            <div className="j-color6 j-padding j-clickable" onClick={() => horNav('mult',$('#t_mult'))}>
              Can I use ClearLink on multiple devices?
              <span id="t_mult"className="fas fa-plus-circle j-text-color7 laucher j-right"style={{fontSize:'22px'}}></span>
              <br className="j-clearfix"/>
            </div>
            <div id='mult'className="trigger j-color4 j-padding"style={{display:'none'}}>
              will be added later
            </div>
          </div>
          <div style={{marginBottom:'20px'}}>
            <div className="j-color6 j-padding j-clickable"onClick={() => horNav('comp',$('#t_comp'))}>
              Is ClearLink compatible with other video conferencing platforms?
              <span id="t_comp"className="fas fa-plus-circle j-text-color7 laucher j-right"style={{fontSize:'22px'}}></span>
              <br className="j-clearfix"/>
            </div>
            <div id="comp"className="trigger j-color4 j-padding"style={{display:'none'}}>
              will be added later
            </div>
          </div>
          <div style={{marginBottom:'20px'}}onClick={() => horNav('secur',$('#t_secur'))}>
            <div className="j-color6 j-padding j-clickable">
              How does ClearLink ensure the security of my video conferences?
              <span id="t_secur"className="fas fa-plus-circle j-text-color7 laucher j-right"style={{fontSize:'22px'}}></span>
              <br className="j-clearfix"/>
            </div>
            <div id='secur'className="trigger j-color4 j-padding"style={{display:'none'}}>
            will be added later
            </div>
          </div>
          <div style={{marginBottom:'20px'}}>
            <div className="j-color6 j-padding j-clickable"onClick={() => horNav('downl',$('#t_downl'))}>
              Do i need to download any software to use ClearLink?
              <span id="t_downl"className="fas fa-plus-circle j-text-color7 laucher j-right"style={{fontSize:'22px'}}></span>
              <br className="j-clearfix"/>
            </div>
            <div id='downl'className="trigger j-color4 j-padding"style={{display:'none'}}>
              will be added later
            </div>
          </div>
          <div style={{marginBottom:'20px'}}>
            <div className="j-color6 j-padding j-clickable"onClick={() => horNav('cust',$('#t_cust'))}>
              What kind of customer support does ClearLink provide
              <span id="t_cust"className="fas fa-plus-circle j-text-color7 laucher j-right"style={{fontSize:'22px'}}></span>
              <br className="j-clearfix"/>
            </div>
            <div id="cust"className="trigger j-color4 j-padding"style={{display:'none'}}>
              will be added later
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support