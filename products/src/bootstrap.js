import faker from 'faker'

const mount = (el) => {
  let products = ''

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName()
    products += `<div>${name}</div>`
  }

  el.innerHTML = products
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products')

  // Assuming our container doesnt have an element
  // with id 'dev-products'
  if (el) {
    // We are probably running in isolation
    mount(el)
  }
}

// Context/Situation #1
// We are running this file in development isolation
// We are using our local index.html file
// Whic DEFINETELY has an element with an id of 'dev-products'
// We want to immedietly render our app into that element

// Context/Situtation #2
// We are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an elemet with an id of 'dev-products'
// WE dont want try to immedietly run our app

export { mount }
