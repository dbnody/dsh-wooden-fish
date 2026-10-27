window.__ModuleLoader__.load({
  id: '@dbnody/dsh-wooden-fish',
  factory: (require) => {
    const React = require('react')
    const markup = /*__MARKUP__*/
    const css = /*__CSS__*/
    const appSource = /*__APP__*/

    function mount() {
      if (document.getElementById('dsh-wooden-fish')) return () => {}
      const style = document.createElement('style')
      style.setAttribute('data-mmwf-style', '')
      style.textContent = css
      document.head.appendChild(style)
      document.body.insertAdjacentHTML('beforeend', markup)
      const cleanup = typeof appSource === 'function' ? appSource() : undefined
      return () => {
        cleanup?.()
        document.getElementById('dsh-wooden-fish')?.remove()
        style.remove()
      }
    }

    function WoodenFish() {
      React.useEffect(() => mount(), [])
      return null
    }

    function apply(ctx) {
      ctx.slots.inject('shell.overlay', () => ctx.slots.register({
        name: 'shell.overlay', id: 'miaomiao-wooden-fish', order: 90,
      }, WoodenFish))
    }
    return { apply, inject: ['slots'] }
  },
})
