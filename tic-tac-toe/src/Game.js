import React, {Component} from 'react';
import './index.css';
import Board from './Board';

class Game extends Component{

    render() {
        return(
            <div className='game'>
                <div className='game-board'>
                    <Board />
                </div>
            </div>
        );
    }
}

export default Game;