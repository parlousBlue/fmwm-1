import { render } from '@testing-library/react';
import React from 'react';

class Definitions extends React.Component {
    state = {
        articles: [], // array of states
    
      };

    render() {
        return (
            <main>
                This is definitions
            </main>
        );
    }
}

export default Definitions;