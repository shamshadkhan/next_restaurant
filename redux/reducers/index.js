import { actionTypes } from '../actions/index'

export const exampleInitialState = {
  cuisineInfo:null,
  testimonialInfo:null,
  sliderInfo:null,
  serviceInfo:null,
  eventInfo:null,
  isLoading:false,
  cartItems:[],
  total:0,
  quantity:0,

}

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
      case actionTypes.GET_CUISINE:
  	return { 
  		...state,
  		isLoading: true
  	};
  	case actionTypes.CUISINE_RECEIVED:
  	return { 
  		...state,
  		isLoading: false,
  		cuisineInfo: action.data
  	};
	case actionTypes.CUISINE_REQUEST_FAILED:
  	return { 
  		...state,
  		isLoading: false,
  		error: action.error
  	};

  	case actionTypes.GET_EVENT:
  	return { 
  		...state,
  		isLoading: true 
  	};
  	case actionTypes.EVENT_RECEIVED:
  	return { 
  		...state,
  		isLoading: false,
  		eventInfo: action.data
  	};
	case actionTypes.EVENT_REQUEST_FAILED:
  	return { 
  		...state,
  		isLoading: false,
  		error: action.error
  	};
  	case actionTypes.GET_SERVICE:
  	return { 
  		...state,
  		isLoading: true 
  	};
  	case actionTypes.SERVICE_RECEIVED:
  	return { 
  		...state,
  		isLoading: false,
  		serviceInfo: action.data
  	};
	case actionTypes.SERVICE_REQUEST_FAILED:
  	return { 
  		...state,
  		isLoading: false,
  		error: action.error
  	};
  	case actionTypes.GET_SLIDER:
  	return { 
  		...state,
  		isLoading: true 
  	};
  	case actionTypes.SLIDER_RECEIVED:
  	return { 
  		...state,
  		isLoading: false,
  		sliderInfo: action.data
  	};
	case actionTypes.SLIDER_REQUEST_FAILED:
  	return { 
  		...state,
  		isLoading: false,
  		error: action.error
  	};
  	case actionTypes.GET_TESTIMONIAL:
  	return { 
  		...state,
  		isLoading: true 
  	};
  	case actionTypes.TESTIMONIAL_RECEIVED:
  	return { 
  		...state,
  		isLoading: false,
  		testimonialInfo: action.data
  	};
	case actionTypes.TESTIMONIAL_REQUEST_FAILED:
  	return { 
  		...state,
  		isLoading: false,
  		error: action.error
  	};
  case actionTypes.ADD_TO_CART:
    let addedItem = action.item
    //check if the action id exists in the cartItems
    let existed_item= state.cartItems.find(item=> action.item.id === item.id)
    if(existed_item)
    {
      addedItem.quantity += 1;
      addedItem.discount_price = addedItem.discount>0 ? (addedItem.price  - ((addedItem.price * addedItem.discount_amount)/100)) : addedItem.price;
       return{
          ...state,
           total: addedItem.discount>0 ? state.total + (addedItem.price  - ((addedItem.price * addedItem.discount_amount)/100)) : state.total + addedItem.price,
           isLoading: false,
           quantity: state.quantity+1,
            }
    }
    else{
      addedItem.quantity = 1;
      addedItem.discount_price = addedItem.discount>0 ? (addedItem.price  - ((addedItem.price * addedItem.discount_amount)/100)) : addedItem.price;
      //calculating the total
      let newTotal = addedItem.discount>0 ? state.total + (addedItem.price  - ((addedItem.price * addedItem.discount_amount)/100)) : state.total + addedItem.price 
      
      return{
          ...state,
          cartItems: [...state.cartItems, addedItem],
          total : newTotal,
          quantity: state.quantity+1,
          isLoading: false,
      }
      
    };
  case actionTypes.REMOVE_ITEM:
    let itemToRemove= state.cartItems.find(item=> action.id === item.id)
    let new_items = state.cartItems.filter(item=> action.id !== item.id)
    
    //calculating the total
    let newTotal = itemToRemove.discount>0 ? (state.total - ((itemToRemove.price  - ((itemToRemove.price * itemToRemove.discount_amount)/100)) * itemToRemove.quantity )): state.total - (itemToRemove.price * itemToRemove.quantity);
    return{
        ...state,
        cartItems: new_items,
        total: newTotal,
        quantity: state.quantity - itemToRemove.quantity,
        isLoading: false,
    }
  case actionTypes.ADD_QUANTITY:
    addedItem = action.item
    addedItem.quantity += 1 
    newTotal = addedItem.discount>0 ? state.total + (addedItem.price  - ((addedItem.price * addedItem.discount_amount)/100)) : state.total + addedItem.price;
    return{
        ...state,
        total: newTotal,
        quantity: state.quantity+1,
        isLoading: false,
    }
  case actionTypes.SUB_QUANTITY:
    addedItem = action.item 
    //if the qt == 0 then it should be removed
    if(addedItem.quantity === 1){
        let new_items = state.cartItems.filter(item=>item.id !== action.id)
        newTotal = addedItem.discount>0 ? state.total - (addedItem.price  - ((addedItem.price * addedItem.discount_amount)/100)) : state.total - addedItem.price;
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    else {
        addedItem.quantity -= 1
        newTotal = addedItem.discount>0 ? state.total - (addedItem.price  - ((addedItem.price * addedItem.discount_amount)/100)) : state.total - addedItem.price;
        return{
            ...state,
            total: newTotal,         
            quantity: state.quantity-1,
            isLoading: false,
        }
    }
    case actionTypes.EMPTY_CART:
    return {
      ...state,
        cartItems: [],
        total: 0,
        quantity: 0,
        isLoading: false,
    }
    default:
      return state
  }
}

export default reducer