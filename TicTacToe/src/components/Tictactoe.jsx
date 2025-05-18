import React, { use } from 'react'
import './Tictactoe.css'
import { useRef } from 'react'
import { useState } from 'react'
import cross from '../assets/cross.png'
import circle from '../assets/circle.png'

let data = ["", "", "", "", "", "", "", "", ""];

const Tictactoe = () => {

    let [player1, setPlayer1] = useState('');
    let [player2, setPlayer2] = useState('');
    let [gameStarted, setGameStarted] = useState(false);


    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleref = useRef(null);

    const toggle = (e, num) => {
        if (lock) return 0;
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src=${cross} alt="cross" />`;
            data[num] = "x";
            setCount(count + 1);
        }
        else {
            e.target.innerHTML = `<img src=${circle} alt="circle" />`;
            data[num] = "o";
            setCount(count + 1);
        };
        checkWin();
    }

    const checkWin = () => {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                setLock(true);

                let winnername = data[a] === "x" ? player1 : player2;
                let winnerimg = data[a] === "x" ? cross : circle;
                titleref.current.innerHTML = `${winnername} <img src=${winnerimg}> wins`;
                return;
            }
        }
        if (data.every(cell => cell != "")) {
            titleref.current.innerHTML = `It's a Draw!`;
            setLock(true);
        }
    }

    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        titleref.current.innerHTML = "Tic Tac Toe Game in <span> React</span>";
        setCount(0);

        const boxes = document.querySelectorAll('.boxes');
        boxes.forEach((box) => {
            box.innerHTML = "";
        });
    }

    const newgame = () => {
        setGameStarted(false);
        setPlayer1('');
        setPlayer2('');
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        titleref.current.innerHTML = "Tic Tac Toe Game in <span> React</span>";
        setCount(0);
        const boxes = document.querySelectorAll('.boxes');
        boxes.forEach((box) => {
            box.innerHTML = "";
        });
    }

    return (
        <>
        <div className='container'>
            <h1 className='title' ref={titleref}>Tic Tac Toe Game in <span> React</span></h1>
            {!gameStarted ? (

                <div className='yes'>
                    <div className="left" >
                        <form
                          onSubmit={e => {
                            e.preventDefault();
                            if (player1.trim() && player2.trim()) {
                              setGameStarted(true);
                            } else {
                              alert("Please enter both names!");
                            }
                          }}
                        >
                          <h2>Enter Names</h2>
                          <input
                            type="text"
                            placeholder="Enter Player 1 Name (X)"
                            value={player1}
                            onChange={e => setPlayer1(e.target.value)}
                          />
                          <input
                            type="text"
                            placeholder="Enter Player 2 Name (O)"
                            value={player2}
                            onChange={e => setPlayer2(e.target.value)}
                          />
                          <button type="submit">
                            Start Game
                          </button>
                        </form>
                    </div>
                    <div className="right">
                        <div className="loader">
                            <div className="cell d-0" />
                            <div className="cell d-1" />
                            <div className="cell d-2" />
                            <div className="cell d-1" />
                            <div className="cell d-2" />
                            <div className="cell d-2" />
                            <div className="cell d-3" />
                            <div className="cell d-3" />
                            <div className="cell d-4" />
                        </div>
                    </div>
                </div>


            ) : (
                <>
                    <div className="board">

                        <div className="row1">
                            <div className="boxes" onClick={(e) => { toggle(e, 0) }}></div>
                            <div className="boxes" onClick={(e) => { toggle(e, 1) }}></div>
                            <div className="boxes" onClick={(e) => { toggle(e, 2) }}></div>
                        </div>

                        <div className="row2">
                            <div className="boxes" onClick={(e) => { toggle(e, 3) }}></div>
                            <div className="boxes" onClick={(e) => { toggle(e, 4) }}></div>
                            <div className="boxes" onClick={(e) => { toggle(e, 5) }}></div>
                        </div>

                        <div className="row3">
                            <div className="boxes" onClick={(e) => { toggle(e, 6) }}></div>
                            <div className="boxes" onClick={(e) => { toggle(e, 7) }}></div>
                            <div className="boxes" onClick={(e) => { toggle(e, 8) }}></div>
                        </div>

                    </div>

                    <div className="endbut">
                        <button className='reset' onClick={() => { reset() }}>Play Again</button>
                        <button className='newgame' onClick={() => { newgame() }}>New Game</button>
                    </div>
                </>
            )}
        </div>

        <footer className="footer">
            <a href="https://github.com/Suryaatejk" target="_blank" rel="noopener noreferrer">
                @ GitHub
            </a>
        </footer>
</>
    )
}


export default Tictactoe
