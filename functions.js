/*
* @Author: clown
* @Date:   2016-04-05 23:42:27
* @Last Modified by:   Administrator
* @Last Modified time: 2016-04-06 13:57:27
*/

'use strict';

/**
 * 检测浏览器是否支持 canvas API
 * @return {boolean} 返回布尔值
 */
function supports_canvas() {
  return !!document.createElement('canvas').getContext;
}

/**
 * 检测浏览器是否支持 canvas 文本 API
 * @return {boolean} 返回布尔值
 */
function supports_canvas_text() {
  if(!supports_canvas()) { return false;}  //前提要先支持canvas API
  var dummy_canvas = document.createElement('canvas');
  var context = dummy_canvas.getContext('2d');
  return typeof context.fillText == 'function';
}

/**
 * 检测浏览器是否支持 <video>
 * (正常情况下，可以不用js去检测，直接使用该标签，如果支持的浏览器会解析播放视频，不支持的浏览器会忽略。)
 * @return {boolean} 返回布尔值
 */
function supports_video() {
	return !!document.createElement('video').canPlayType;
}

/**
 * 检测视频格式“H.264”——mac和iphone支持的受专利保护的格式
 * @return {string} 
 *         "probably"  表示浏览器有重复把握播放此格式
 *         "maybe"  表示浏览器有可能可以播放此格式
 *         ""(空字符串)  表示浏览器无法播放此格式   
 */
function supports_h264_baseline_video() {
	if(!supports_video()) { return false;}
	var v = document.createElement('video');
	return v.canPlayType('video/mp4; codes="avc1.42E01E, mp4a.40.2"');
}

/**
 * 检测开放视频格式
 * @return {string} 返回值同上
 */
function supports_ogg_theora_video() {
	if(!supports_video()) { return false;}
	var v = document.createElement('video');
	return v.canPlayType('video/ogg; codes="theora, vorbis"');
}

/**
 * 检测webm格式——新的不受专利约束的视频编码格式
 * @return {string} 返回值同上
 */
function supports_webm_video() {
	if(!supports_video()) { return false;}
	var v = document.createElement('video');
	return v.canPlayType('video/webm; codes="vp8, vorbis"');
}

/**
 * 检测浏览器是否支持本地存储
 * @return {boolean} 返回布尔值
 */
function supports_local_storage() {
	return ('localStorage' in window) && window['localStorage'] !== null;
}

/**
 * 检测浏览器是否支持 Web Worler
 * @return {boolean} 返回布尔值
 */
function supports_web_workers() {
	return !!window.Worker;
}

/**
 * 检测浏览器是否支持离线特性
 * @return {boolean} 返回布尔值
 */
function supports_offline() {
	return !!window.applicationCache;
}

/**
 * 检测浏览器是否支持地理位置特性
 * @return {boolean} 返回布尔值
 */
function supports_geolocation() {
	return !!navigator.geolocation;
}

/**
 * 检测浏览器是否支持新的输入框类型
 * @param  {string} iType [iType表示新的输入框类型，可以为：'search', 'number', 'range', 'color', 'tel', 'url', 'email', 'date', 'month', 'week', 'time', 'datetime', 'datetime-local']
 * @return {boolean} 返回布尔值
 */
function supports_input_type(iType) {
	var i = document.createElement('input');
	i.setAttribute('type', iType);
	return i.type !== 'text';
}

/**
 * 检测浏览器是否支持 placeholder 属性
 * @return {boolean} 返回布尔值
 */
function supports_input_placeholder() {
	var i = document.createElement('input');
	return 'placeholder' in i;
}

/**
 * 检测浏览器是否支持 autofocus 属性
 * @return {boolean} 返回布尔值
 */
function supports_input_autofocus() {
	var i = document.createElement('input');
	return 'autofocus' in i;
}

/**
 * 检测浏览器是否支持 html5 微数据
 * @return {[type]} [description]
 */
function supports_microdata_api() {
	return !!document.getItems;
}