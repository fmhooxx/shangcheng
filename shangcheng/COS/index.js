// import TIM from 'tim-js-sdk';
// import COS from "cos-js-sdk-v5";
const TIM = require('./tim.js')
const COS = require('./cos.js')

let StartTime = uni.getStorageSync("infos").StartTime
let ExpiredTime = uni.getStorageSync("infos").ExpiredTime
const options = {
	SDKAppID: 1400378604 // 接入时需要将0替换为您的即时通信应用的 SDKAppID
};
// 创建 SDK 实例，TIM.create() 方法对于同一个 SDKAppID 只会返回同一份实例
const tim = TIM.create(options); // SDK 实例通常用 tim 表示
const TIMData = TIM
// 注册 COS SDK 插件
console.log(COS)
tim.registerPlugin({
	'cos-js-sdk': COS
});

var cos = new COS({
	 SecretId: "AKIDmidgdP7UkokU1McWN2UxFKDvd9TaGxBE",
	 SecretKey: "f6MNgoeU9duMUnEsNhplXDh5qgDtOmz6",
	Object:"B2CBankCards"
});
console.log(cos)


/* eslint-disable require-jsdoc */
function genTestUserSig(userID) {
	const SDKAPPID = 1400378604;
	const EXPIRETIME = 604800;
	const SECRETKEY = appkey;

	if (SDKAPPID === '' || SECRETKEY === '') {
		alert(
			'请先配置好您的账号信息： SDKAPPID 及 SECRETKEY ' +
			'\r\n\r\nPlease configure your SDKAPPID/SECRETKEY in js/debug/GenerateTestUserSig.js'
		);
	}
	const generator = new LibGenerateTestUserSig(SDKAPPID, SECRETKEY, EXPIRETIME);
	const userSig = generator.genTestUserSig(userID);
	return {
		sdkAppId: SDKAPPID,
		userSig: userSig
	};
}

export default {
	tim,
	TIMData,
	genTestUserSig,
	cos
}
