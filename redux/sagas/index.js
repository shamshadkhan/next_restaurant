/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
import { actionTypes} from '../actions/index'
import data from '../../services/data.json';
import axios from '../../utils/axios';
import * as netwrok from '../networkServices/index';

es6promise.polyfill()

function* fetchSlider() {
  try {
    const sliderInfo = yield axios.get(`${data.constants.site_url}${netwrok.GET_SLIDER}`).then(response => response.data);
    yield put({ type: actionTypes.SLIDER_RECEIVED, data: sliderInfo });
  } catch (error) {
    yield put({ type: actionTypes.SLIDER_REQUEST_FAILED, error });
  }
}

function* fetchService() {
  try {
    const serviceInfo = yield axios.get(`${data.constants.site_url}${netwrok.GET_SERVICE}`).then(response => response.data);
    yield put({ type: actionTypes.SERVICE_RECEIVED, data: serviceInfo });
  } catch (error) {
    yield put({ type: actionTypes.SERVICE_REQUEST_FAILED, error });
  }
}

function* fetchEvent() {
  try {
    const eventInfo = yield axios.get(`${data.constants.site_url}${netwrok.GET_EVENT}`).then(response => response.data);
    yield put({ type: actionTypes.EVENT_RECEIVED, data: eventInfo });
  } catch (error) {
    yield put({ type: actionTypes.EVENT_REQUEST_FAILED, error });
  }
}

function* fetchTestimonial() {
  try {
    const testimonialInfo = yield axios.get(`${data.constants.site_url}${netwrok.GET_TESTIMONIAL}`).then(response => response.data);
    yield put({ type: actionTypes.TESTIMONIAL_RECEIVED, data: testimonialInfo });
  } catch (error) {
    yield put({ type: actionTypes.TESTIMONIAL_REQUEST_FAILED, error });
  }
}

function* fetchCuisine(action) {
  try {
    const cuisineInfo = yield axios.get(`${data.constants.site_url}${netwrok.GET_CUISINE}?page=${action.data}`).then(response => response.data);
    yield put({ type: actionTypes.CUISINE_RECEIVED, data: cuisineInfo });
  } catch (error) {
    yield put({ type: actionTypes.CUISINE_REQUEST_FAILED, error });
  }
}


function* rootSaga() {
  yield all([
    takeLatest(actionTypes.GET_CUISINE, fetchCuisine),
    takeLatest(actionTypes.GET_TESTIMONIAL, fetchTestimonial),
    takeLatest(actionTypes.GET_EVENT, fetchEvent),
    takeLatest(actionTypes.GET_SERVICE, fetchService),
    takeLatest(actionTypes.GET_SLIDER, fetchSlider),
  ])
}

export default rootSaga