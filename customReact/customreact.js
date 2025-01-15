function customRender(reactElement, mainContainer) {


  let a = document.createElement(reactElement.type)
  // a.setAttribute('href', reactElement.props.href)
  // a.setAttribute('target', reactElement.props.target)

  // Object.keys(reactElement.props).forEach(key => {
  //   console.log(key);
  //   a.setAttribute(key, reactElement.props[key])
  // });

  for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    a.setAttribute(prop, reactElement.props[prop])
  }
  a.innerHTML = reactElement.children
  mainContainer.appendChild(a)
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click Me'
}

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer)

