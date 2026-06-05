// src/payload-client.js
import { getPayload } from 'payload'
import config from '@payload-config'

let _payload

export const getPayloadClient = async () => {
  if (!_payload) {
    _payload = await getPayload({ config })
  }
  return _payload
}

export const getPayloadSync = () => {
  return _payload
}