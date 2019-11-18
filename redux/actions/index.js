export const actionTypes = {
    GET_SLIDER                :'GET_SLIDER',  
    SLIDER_RECEIVED           :'SLIDER_RECEIVED',
    SLIDER_REQUEST_FAILED     :'SLIDER_REQUEST_FAILED',
    GET_SERVICE               :'GET_SERVICE',
    SERVICE_RECEIVED          :'SERVICE_RECEIVED',
    SERVICE_REQUEST_FAILED    :'SERVICE_REQUEST_FAILED',
    GET_EVENT                 :'GET_EVENT',
    EVENT_RECEIVED            :'EVENT_RECEIVED',
    EVENT_REQUEST_FAILED      :'EVENT_REQUEST_FAILED',
    GET_TESTIMONIAL           :'GET_TESTIMONIAL',
    TESTIMONIAL_RECEIVED      :'TESTIMONIAL_RECEIVED',
    TESTIMONIAL_REQUEST_FAILED:'TESTIMONIAL_REQUEST_FAILED',
    GET_CUISINE               :'GET_CUISINE',
    CUISINE_RECEIVED          :'CUISINE_RECEIVED',
    CUISINE_REQUEST_FAILED    :'CUISINE_REQUEST_FAILED',
    ADD_TO_CART               :'ADD_TO_CART',
    REMOVE_ITEM               :'REMOVE_ITEM',
    ADD_QUANTITY              :'ADD_QUANTITY',
    SUB_QUANTITY              :'SUB_QUANTITY',
    EMPTY_CART                :'EMPTY_CART',
}

export function fetchSlider() {
    return { type: actionTypes.GET_SLIDER };
}

export function fetchService() {
    return { type: actionTypes.GET_SERVICE };
}

export function fetchEvent() {
    return { type: actionTypes.GET_EVENT };
}

export function fetchTestimonial() {
    return { type: actionTypes.GET_TESTIMONIAL };
}

export function fetchCuisine(data) {
    return { type: actionTypes.GET_CUISINE, data  };
}

export function addToCart(item) {
    return { type: actionTypes.ADD_TO_CART,item }
}

export function removeFromCart(id) {
    return { type: actionTypes.REMOVE_ITEM,id }
}

export function addQuantityToCart(item) {
    return { type: actionTypes.ADD_QUANTITY,item }
}

export function subtractQuantityFromCart(item) {
    return { type: actionTypes.SUB_QUANTITY,item }
}

export function emptyCart() {
    return { type: actionTypes.EMPTY_CART }
}