import { nanoid } from 'nanoid'
import envSettings from '~/config/envSettings'
export default ({ app, redirect }, inject) => {
  // Set the function directly on the context.app object
  inject('loginWith', (type) => {
    const GOOGLE = 'google'
    const FB = 'facebook'
    if (!process.client || ![GOOGLE, FB].includes(type)) {
      return
    }
    const urlStr = window.location.origin
    const redirectUri = urlStr + envSettings.callback
    const state = nanoid()
    const serviceEndpoint =
      type === GOOGLE
        ? 'https://accounts.google.com/o/oauth2/v2/auth?prompt=select_account&'
        : 'https://www.facebook.com/v15.0/dialog/oauth?'
    const clientID = type === GOOGLE ? envSettings.googleID : envSettings.fbID
    const scope =
      type === GOOGLE
        ? envSettings.googleScope.join('+')
        : envSettings.fbScope.join('+')
    app.$cookiz.set('state', state)
    window.location.href = `${serviceEndpoint}client_id=${clientID}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}&response_type=token`
  })
}
