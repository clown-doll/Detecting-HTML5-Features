/*
* @Author: clown
* @Date:   2016-04-05 23:42:27
* @Last Modified by:   clown
* @Last Modified time: 2016-04-06 00:14:48
*/

'use strict';

/**
 * 检测浏览器是否支持canvas API
 * @return {boolean} 返回布尔值
 */
function supports_canvas() {
  return !!document.createElement('canvas').getContext;
}

/**
 * 检测浏览器是否支持canvas 文本 API
 * @return {boolean} 返回布尔值
 */
function supports_canvas_text() {
  if(!supports_canvas()) { return false;}  //前提要先支持canvas API
  var dummy_canvas = document.createElement('canvas');
  var context = dummy_canvas.getContext('2d');
  return typeof context.fillText == 'function';
}

/**
 * 检测浏览器是否支持<video>
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