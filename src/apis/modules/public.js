import ajax from '../ajax'

/**
 * 获取验证码
 * @param mobile 手机号
 */
function getCode(phone) {
  return ajax.get(
    'public/code',
    {
      params: {
        phone,
      },
    },
  )
}

export default {
  getCode,
}
