import request from '@/utils/request'

export const filePreviewUrl = process.env.VUE_APP_BASE_API + 'back-end/sys-file/download/'
export const fileUploadUrl = process.env.VUE_APP_BASE_API + 'back-end/sys-file/upload'

/**
 * 操作记录
 */
export function operationLogEntityListAPI(data) {
  return request({
    url: '/back-end/sys-operation-log/list-entity',
    method: 'post',
    data: data
  })
}

export function fileListAPI(data) {
  return request({
    url: `/back-end/sys-file/list`,
    data: data,
    method: 'get'
  })
}

export function fileGetAPI(code) {
  return request({
    url: `/back-end/sys-file/get/${code}`
  })
}

/**
 * 通过ID删除文件
 */
export function fileDeleteAPI(code) {
  return request({
    url: `/back-end/sys-file/delete/${code}`,
    method: 'post'
  })
}

export function fileUploadAPI(data, config = {}) {
  var param = new FormData()
  Object.keys(data).forEach(key => {
    param.append(key, data[key])
  })
  return request({
    url: '/back-end/sys-file/upload',
    method: 'post',
    data: param,
    ...config,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export function fileDownloadAPI(code) {
  return request({
    url: `/back-end/sys-file/download/${code}`,
    method: 'get',
    responseType: 'blob'
  })
}

export function fileUrlDownloadAPI(url) {
  return request({
    url: url,
    method: 'get',
    responseType: 'blob'
  })
}

export function fileModifyAPI(code, data) {
  return request({
    url: `/back-end/sys-file/modify/${code}`,
    data: data,
    method: 'post'
  })
}

/**
 * 系统消息列表
 */
export function systemMessageListAPI(data) {
  return request({
    url: 'adminMessage/queryList',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 未读消息数
 */
export function systemMessageUnreadCountAPI() {
  return request({
    url: '/back-end/sys-config/getUnreadMessageNum'
  })
}

/**
 * 读消息
 */
export function systemMessageReadAPI(data) {
  return request({
    url: 'adminMessage/readMessage',
    method: 'post',
    data: data
  })
}

/**
 * 读全部消息
 */
export function systemMessageReadAllAPI(data) {
  return request({
    url: 'adminMessage/readAllMessage',
    method: 'post',
    data: data
  })
}

/**
 * 系统消息按类别删除
 */
export function systemMessageClearAPI(data) {
  return request({
    url: 'adminMessage/clear',
    method: 'post',
    data: data
  })
}

/**
 * 系统消息删除
 */
export function systemMessageDeleteByIdAPI(id) {
  return request({
    url: `adminMessage/deleteById/${id}`,
    method: 'post'
  })
}
