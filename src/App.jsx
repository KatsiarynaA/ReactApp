import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function App() {
    const items1= [{
        text: 'Home',
        link: 'home-page'
    }, {
        text: 'Products',
        link: 'prod-page'
    }, {
        text: 'Services',
        link: 'serv-page'
    }, {
        text: 'Prices',
        link: 'price-page'
    }];

    const items2 = [{
        text: '1 Item',
        link: '1item-page'
    }, {
        text: '2 Item',
        link: '2item-page'
    }, {
        text: '3 Item',
        link: '3item-page'
    }];

    const textForFooter = 'He as compliment unreserved projecting. Between had observe pretend delight for believe.';

    return (
        <div className="App">
            <Header menuItems1={items1} />
            <Content />
            <Footer menuItems1={items1} menuItems2={items2} text={textForFooter}/>
        </div>
    );
}

export default App;
