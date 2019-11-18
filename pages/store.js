import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer, { exampleInitialState } from '../redux/reducers/index';
import rootSaga from '../redux/sagas/index';
import {loadState,saveState,clearState} from '../localStorage';

const logger = createLogger({
    collapsed: true,
});

export default function configureStore(initialState = exampleInitialState) {
    const sagaMiddleware = createSagaMiddleware();

    const getMiddleware = () => {
      if (process.env.NODE_ENV === 'development') {
        return applyMiddleware(sagaMiddleware, logger);
      }
      return applyMiddleware(sagaMiddleware);
    };
    //clearState();
    let getCartItems=loadState();
    if(getCartItems)
    {
      initialState.cartItems= getCartItems.cartItems;
      initialState.total= getCartItems.total;
      initialState.quantity= getCartItems.quantity;
      
    }
    const store = createStore(
      rootReducer,
      initialState,
      getMiddleware(),
    );

    store.subscribe(() => {
      saveState({
        cartItems: store.getState().cartItems,
        total: store.getState().total,
        quantity: store.getState().quantity,
      });
    });
    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store
}
