export default function ({app , store, redirect, route }) {

  const routes = ['log-connect', 'log-register']

  if (app.$cookies.get('email') !== undefined && routes.includes(route.name)) {
    return redirect('/dashboard')


  }

  if (!routes.includes(route.name)) {
    if (app.$cookies.get('email') !== undefined && route.path === '/') {
      return redirect('/dashboard')
    }
  }
  if (app.$cookies.get('email') === undefined) {
    if (route.name === 'dashboard') {
      return redirect('/log/connect')
    }else if (route.name !== 'log-connect' && route.name !== 'log-register') {
        return redirect('/log/connect')
    }
  }
}
