export default function (context) {
  context.store.commit('updatePage', context.route.name)
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
}