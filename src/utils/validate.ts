/* ===================================
 * 校验规则
 * Created by cjking on 2022/10/18.
 * Copyright 2022, Inc.
 * =================================== */
// eslint-disable-next-line
export const EmailReg =
  /^([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
export const AmountReg = /(^[1-9]([0-9]{1,9})?(\.[0-9]{1,2})?$)|(^(0)$)|(^[0-9]\.[0-9]([0-9])?$)/;
export const NumberReg = /^\d+$/;
export const FloatNumberReg = /^[0-9.]+$/;
export const PhoneReg = /^[1][3-9][0-9]{9}$/;
export const TelReg = /[0-9\\-]{11,12}/;
export const BankCardReg = /^([1-9])(\d{15}|\d{18})$/;
export const UserNameReg = /^[A-Za-z0-9_.\-\u4e00-\u9fa5]+$/; // 只支持中文、数字、英文、下划线、中横线和小数点，不可包含其他特殊字符
export const RoleCodeReg = /^\w+$/; // 只能由英文、数字、下划线组成
export const HasZH_CNReg = /[\u4e00-\u9fa5]/gm; // 匹配中文字符
export const OnlyCN_EN_NumReg = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/i; // 只能输入汉字、英文字母和数字
export const SCIENTIFIC_COUNTING_METHOD = /^[+-]?[\d]*([.][\d]+)?([Ee][+-]?[\d]+)?$/; // 科学计数法 可以识别正负数，以及科学计数法的表示
// eslint-disable-next-line
export const PasswordReg =
  /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)[0-9a-zA-Z\\[\]【】!@#$%^&?*>_\-/、。~()￥（）—+《》？："「」|,.:'`]{8,16}$/; // 密码长度为8~16位，数字、字母、特殊字符至少包含两种
