function customRender(reactElement, mainContainer){
    // const domElement =document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.childern
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // mainContainer.appendChild(domElement)

    const domElement =document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern
    for( let prop in reactElement.props){
        if(prop === 'children')continue
        domElement.setAttribute(prop, reactElement[prop])
    }

    mainContainer.appendChild(domElement)

}

const reactElement = {

    type : 'a',
    props : {
        href : "https://google.com",
        target : '_blank'
    },
    childern : "Click to visit google "
}

const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)

