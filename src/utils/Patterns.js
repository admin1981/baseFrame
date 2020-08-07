/**
 * 验证中英文加数字
 */
export const enCnNumberPatter = /^[a-zA-z0-9\u4e00-\u9fa5]+$/

/**
 * 验证中英文加数字加标点符号   。，、
 */
export const enCnNumberPunctuation = /^[a-zA-z0-9\u4e00-\u9fa5\u3002\uff0c\u3001]+$/

/**
 * URL   。，、
 */
export const gmUrl = /^(?:http(s)?:\/\/)?[\w\.-]+(?:\.[\w\.-]+)+[\w-\._~:/?#[\]@!\$&'\*\+,;=.]+$/

/**
 * 字母、汉字、不可空，不超过24个字符
 */
export const lettersCharacters = /^[a-zA-Z\u4e00-\u9fa5]{0,24}$/


/**
 * 验证手机号
 */
export const phonePattern = /^[1][3,4,5,6,7,8,9][0,9]{9}$/

/**
 * 验证电话号码（支持手机号码，3-4位区号，7-8位直播号码，1-4位分机号）
 */
export const telPattern = /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{3}|\d{2}|\d{1}))$)/
