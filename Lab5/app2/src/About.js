

import './About.css'

const someData = {
    name: 'Britta',
    imgURL: 'https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/master/pass/gettyimages-1146431497.jpg',
    imgSize: 90,
}

const products = [
    {title: 'apple', id: '1', isSpecial: false},
    {title: 'orange', id: '2', isSpecial: true},
    {title: 'kiwi', id: '3', isSpecial: false},
]

function ProductList()
{
    const listItem = products.map(element =>
        <li key={element.id}>{element.title}</li>  
    )
    return (<ul>listItems</ul>);
}

function About()
{
    return (
        <>
            <h1 className="about">This is about {someData.name}</h1>
            <img 
                src = {someData.imgURL} 
                alt = "This is an image">
            </img>
            <ProductList/>
        </>
    );
}

export default About;