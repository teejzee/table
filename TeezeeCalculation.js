import {html, LitElement, css} from 'lit';

export class TeezeeCalculation extends LitElement {

    static styles = css`

        .calculation-game {
            display: flex;
            justify-content: center;
            align-items: center; /* begin bovenaan */
            flex-direction: column;
            width: 100vw;
            height: 100vh;
            background-color: darkmagenta;
            box-sizing: border-box;
            
        }

        .header {
            font-size: 75px;
            color: lightpink;
            font-family: "Baloo Tamma 2";
            text-shadow: 0 0 10px lightpink;
            transition: all 0.3s ease;
        }

        .header:hover {
            animation: fireworks 1s ease-in-out;
        }

        @keyframes fireworks {
            0% {
                text-shadow: 0 0 10px lightpink, 0 0 20px lightpink, 0 0 30px lightpink;
            }
            100% {
                text-shadow:
                        0 0 20px red,
                        0 0 30px orange,
                        0 0 40px yellow,
                        0 0 50px green,
                        0 0 60px blue,
                        0 0 70px indigo,
                        0 0 80px violet;
            }
        }



        .calculation-container {
            font-family: "Baloo Tamma 2";
            font-size: 100px;
            color: fuchsia;
            height: 150px;
            animation: flyIn 1s ease-out;
        }

        @keyframes flyIn {
            0% {
                transform: translateX(-100%);
                opacity: 0;
            }
            25% {
                transform: translateX(0);
                opacity: 1;
            }
        }

        
        .notification.success {
            background-color: green;
            border-radius: 3px;
            width: 200px;
            position: relative;
            overflow: hidden;
            animation: glowGreen 1s ease-in-out infinite alternate;
        }

        .notification.success .message {
            padding: 8px;
            font-size: 24px;
            font-weight: bold;
            color: whitesmoke;
            animation: bounce 1s ease infinite;
        }


        .notification.error {
            background-color: red;
            border-radius: 3px;
            width: 200px;
            position: relative;
            overflow: hidden;
            animation: glowRed 1s ease-in-out infinite alternate;
        }

        .notification.error .message {
            padding: 8px;
            font-size: 24px;
            font-weight: bold;
            color: whitesmoke;
            animation: shake 1s ease infinite;
        }

        @keyframes glowGreen {
            0% {
                box-shadow: 0 0 10px green, 0 0 20px green, 0 0 30px green;
            }
            100% {
                box-shadow: 0 0 20px lime, 0 0 30px lime, 0 0 40px lime;
            }
        }

        @keyframes glowRed {
            0% {
                box-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
            }
            100% {
                box-shadow: 0 0 20px darkred, 0 0 30px darkred, 0 0 40px darkred;
            }
        }
        
        @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
            }
            20% {
                transform: translateY(-10px);
            }
        }
        
        @keyframes shake {
            0%, 100% {
                transform: translateX(0);
            }
            25% {
                transform: translateX(-5px);
            }
            75% {
                transform: translateX(5px);
            }
        }



        .error {
            background-color: red;
            border-radius: 3px;
            width: 200px;
        }

        .message {
            padding: 8px;
            font-size: 24px;
            font-weight: bold;
            color: whitesmoke;
        }

        .calculation-input {
            height: 80%;
            background-color: fuchsia;
            color: lightpink;
            font-family: "Baloo Tamma 2";
            font-size: 100px;
            width: 150px;
            border: 2px solid lightpink;
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .calculation-input:hover {
            background-color: deeppink;
            border-color: white;
        }

        .calculation-input:focus {
            outline: none;
            box-shadow: 0 0 10px lightpink;
            border-color: white;
        }


    `;

    static properties = {
        randomNumberLeft: {
            type: Number,
        },
        randomNumberRight: {
            type: Number,
        },
        _succes: {
            type: Boolean,
        },
        _displayCalculation: {
            type: Boolean,
        }
    }

    constructor() {
        super();
        this._displayCalculation = true;
        this._succes = false;
    }

    updated() {
        const inputElement = this.shadowRoot.querySelector('input');
        if (inputElement) inputElement.focus();
    }

    createRandomNumber() {
        return Math.floor(Math.random() * (9) + 1);
    }

    createMath() {
        this.randomNumberLeft = this.createRandomNumber();
        this.randomNumberRight = this.createRandomNumber();

    }

    _renderError() {
        return html`
            <div class="notification error">
                <div class="message">Helaas, niet goed</div>
            </div>
        `
    }

    _renderSucces() {
        return html`
            <div class="notification success">
                <div class="message">Goed gedaan!!</div>
            </div>

        `
    }

    _renderCalculation() {

        if (!this._displayCalculation) {
            return this._succes ? this._renderSucces() : this._renderError();
        }


        return html`
            <div class="calculation-container">
                <span class="number">${this.randomNumberLeft}</span>
                <span> x </span>
                <span class="number">${this.randomNumberRight}</span>
                <span> = </span>
                <input @keydown="${(e) => this.calculate(e)}" class="noscroll calculation-input" type="number">
            </div>
        `
    }

    calculate(event) {
        if (event.key !== 'Enter') return;

        const correct = parseInt(this.randomNumberLeft * this.randomNumberRight);
        const userInput = parseInt(document.querySelector('teezee-calculation').shadowRoot.querySelector('.calculation-input').value);

        if (userInput) {
            this._succes = correct === userInput;
            this._displayCalculation = false;
        }

        setTimeout(() => {
            this._displayCalculation = true;


        }, 1000)
    }

    render() {
        this.createMath();
        return html`
            <div class="calculation-game">
                <div class="header">Tafeldiploma Kiki</div>
                ${this._renderCalculation()}
            </div>

        `
    }
}





