import Vue from 'vue'

Vue.filter('resize', (image, size) => {
  if (typeof image !== 'undefined') {
    return '//img2.storyblok.com/' + size + image.replace('//a.storyblok.com', '')
  }
  return null
})

Vue.filter('dashify', function (value) {
  if (typeof value === 'undefined') {
    return 'undefined'
  }
  let dashified = value.toString()
                       .replace(/([A-Z])/g, ' $1')
                       .trim()
                       .toLowerCase()
                       .replace(/[ _]/g, '-')

  return 'blok-' + dashified
})
