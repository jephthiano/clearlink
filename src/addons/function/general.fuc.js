import $ from 'jquery';


//toggle modal
export const toggle_modal = (type,id,mode='slow') => {
    if(type === 'show'){
        $('#'+id).fadeIn(mode)
    }else if(type === 'hide'){
        $('#'+id).fadeOut(mode)
    }
}