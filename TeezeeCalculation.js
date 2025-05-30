import {html, css, LitElement} from 'https://unpkg.com/lit@2.8.0/index.js?module';

export class TeezeeCalculation extends LitElement {

    static styles = css`

        .game-over {
            font-size: 75px;
            color: lightpink;
            font-family: "Baloo Tamma 2";
            text-shadow: 0 0 10px lightpink;
            transition: all 0.3s ease;
        }

        .game-over:hover {
            animation: fireworks 1s ease-in-out;
        }

        @keyframes fireworks {
            0% {
                text-shadow: 0 0 10px lightpink, 0 0 20px lightpink, 0 0 30px lightpink;
            }
            100% {
                text-shadow: 0 0 20px red,
                0 0 30px orange,
                0 0 40px yellow,
                0 0 50px green,
                0 0 60px blue,
                0 0 70px indigo,
                0 0 80px violet;
            }
        }

        .calculation-game {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100vw;
            height: calc(100vh - 200px);
            background-color: darkmagenta;
            box-sizing: border-box;
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
                box-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
            }
            50% {
                transform: scale(1.05);
                box-shadow: 0 0 20px rgba(255, 105, 180, 0.8);
            }
            100% {
                transform: scale(1);
                box-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
            }
        }

        #timer {
            position: fixed;
            top: 15%;
            transform: translate(-50%, -50%);
            font-size: 64px;
            font-family: 'Baloo Tamma 2', cursive;
            color: white;
            background: linear-gradient(135deg, #8e2de2, #ff6ec4);
            margin: 16px;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.3);
            animation: pulse 2s infinite;
        }


        .calculation-container {
            font-family: "Baloo Tamma 2", cursive;
            font-size: 200px;
            color: fuchsia;
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
            height: 200px;
            background-color: fuchsia;
            color: lightpink;
            font-family: "Baloo Tamma 2";
            font-size: 200px;
            width: 235px;
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

        .table-choice-container {
            display: flex;
            justify-content: center;
        }

        .table-number {
            display: flex;
            color: white;
            justify-content: center;
            border: 1px solid lightpink;
            width: 50px;
            height: 30px;
            padding: 16px;
            margin: 16px;

        }

        .table-number.selected {
            background-color: deeppink;
            border-color: white;
            box-shadow: 0 0 10px lightpink;

        }

        .table-number:hover {
            background-color: deeppink;
            border-color: white;
            box-shadow: 0 0 10px lightpink;
        }

        .table-number:selected {
            background-color: deeppink;
            border-color: white;
            box-shadow: 0 0 10px lightpink;
        }

        .score {
            background-color: deeppink;
            border-color: white;
            box-shadow: 0 0 10px lightpink;
            color: white;
            font-size: 24px;
            display: flex;
            justify-content: flex-end;
        }

        .img {
            position: absolute;
            top: 100px;
            left: -200px;
            width: 100px;
            opacity: 0;
            transition: opacity 1s ease-in;
        }

        .fly {
            animation: flyAnimation 16s linear forwards;
            opacity: 1;
        }

        @keyframes flyAnimation {
            0% {
                transform: translateX(0) rotate(0deg);
            }
            25% {
                transform: translateX(300px) translateY(-25px) rotate(45deg);
            }
            50% {
                transform: translateX(600px) translateY(0px) rotate(90deg);
            }
            75% {
                transform: translateX(900px) translateY(-50px) rotate(45deg);
            }
            100% {
                transform: translateX(1100px) translateY(0px) rotate(0deg);
            }
        }

        .calculation-button {
            font-family: 'Baloo Tamma 2', cursive;
            font-size: 24px;
            color: white;
            background: linear-gradient(135deg, #8e2de2, #ff6ec4); /* paars naar roze */
            border: none;
            border-radius: 12px;
            padding: 15px 40px;
            cursor: pointer;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            animation: pulse 2s infinite;
        }

        .calculation-button:hover {
            transform: scale(1.05);
            box-shadow: 0 0 25px rgba(255, 105, 180, 0.6);
        }

        @keyframes pulse {
            0% {
                box-shadow: 0 0 10px rgba(255, 105, 180, 0.4);
            }
            50% {
                box-shadow: 0 0 20px rgba(255, 105, 180, 0.8);
            }
            100% {
                box-shadow: 0 0 10px rgba(255, 105, 180, 0.4);
            }
        }


        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            font-family: "Baloo Tamma 2", cursive;
            border: 1px solid lightpink;
            font-size: 24px;
            list-style-type: none;
        }

        th {
            background-color: #800080; /* Paars */
            color: white;
            padding: 24px;
            text-align: left;
        }

        td {
            padding: 12px;
            border: 1px solid #ddd;
        }

        tr:nth-child(even) {
            background-color: #ffc0cb; /* Roze */
        }

        tr:nth-child(odd) {
            background-color: #ffffff; /* Wit */
        }

        .set-name-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh; /* Volledige hoogte van het scherm */
        }

        .name-header {
            font-size: 2em;
            font-weight: bold;
            color: white;
            margin-bottom: 10px;
        }

        .name-input {
            width: 20%;
            padding: 10px 15px;
            font-size: 3em;
            border: 2px solid #800080;
            border-radius: 6px;
            background-color: #fff;
            color: #4b004b;
            outline: none;
            transition: border-color 0.3s, box-shadow 0.3s;
        }

        .name-input:focus {
            border-color: #ff69b4; /* Roze */
            box-shadow: 0 0 8px #ffb6c1;
        }



    `;

    static properties = {
        _nameSet: {
            type: String,
        },
        _gameName: {
            type:String,
        },
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
        },
        _tableChoice: {
            type: Array,
        },
        _tableChoiceSelected: {
            type: Array
        },
        _score: {
            type: Number,
        },
        _gameStarted: {
            type: Boolean,
        },
        _gameOver: {
            type: Boolean,
        },
        _wrongAnswer: {
            type: Number,
        }

    }

    constructor() {
        super();
        this._displayCalculation = true;
        this._succes = false;
        this._tableChoice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this._tableChoiceSelected = [];
        this._score = 0;
        this._gameStarted = false;
        this._gameOver = false;
        this._wrongAnswer = 0;
    }

    firstUpdated() {

    }

    updated() {
        const inputElement = this.shadowRoot.querySelector('input');
        if (inputElement) inputElement.focus();
    }

    createRandomNumber() {
        return Math.floor(Math.random() * (9) + 1);
    }

    createMath() {
        const randomNumber = this._tableChoiceSelected[Math.floor(Math.random() * this._tableChoiceSelected.length)];
        this.randomNumberLeft = this.createRandomNumber();
        this.randomNumberRight = randomNumber ? randomNumber : this.createRandomNumber();
    }

    _renderError() {
        return html`
            <div class="notification error">
                <div class="message">Helaas, niet goed het antwoord was: ${this._correctAnswer}</div>
            </div>
        `
    }

    _renderSucces() {
        this._score = this._score + 1;
        const flyImage = document.createElement('img');
        const randomFly = Math.floor(Math.random() * (4) + 1);
        flyImage.setAttribute('src', `./assets/butterfly${randomFly}.png`);
        flyImage.classList.add('img');

        const randomStartY = Math.floor(Math.random() * (600) + 1);
        const randomStartX = Math.floor(Math.random() * (3) + 1);
        flyImage.style.top = `${randomStartY}px`;
        flyImage.style.left = `${randomStartX}px`;
        this.shadowRoot.querySelector('.calculation-game').appendChild(flyImage);
        flyImage.classList.add('fly');

        return html`
            <div class="notification success">
                <div class="message">Goed gedaan!!</div>
            </div>
        `
    }

    _renderScoreBoard() {

        const savedGames = JSON.parse(localStorage.getItem('calculationGame'));
        if(!savedGames) return;

        const sortedSavedGames = savedGames.sort((a, b) => b.score - a.score);

        return html`
            <table>
                <thead>
                <tr>
                    <th>Naam</th>
                    <th>Tafels</th>
                    <th>Score</th>
                    <th>Foutjes</th>
                    <th>Diploma</th>
                </tr>
                </thead>
                <tbody>
                ${sortedSavedGames.map((game) => {
                    return html`
                        <tr>
                            <td>${game.name}</td>
                            <td>${game.tables.length < 1 ? 'alle' : game.tables}</td>
                            <td>${game.score}</td>
                            <td>${game.errors}</td>
                            <td>${game.graduate ? 'Ja' : 'Nee'}</td>
                        </tr>
                    `
                })}
                </tbody>
            </table>
        `
    }

    _renderCalculation() {

        if (!this._gameOver) {

            if (!this._displayCalculation) {

                if (!this._succes) {
                    this._wrongAnswer = this._wrongAnswer + 1;
                }

                return this._succes ? this._renderSucces() : this._renderError();
            }

            return html`
                <div class="calculation-container">
                    <span class="number">${this.randomNumberLeft}</span>
                    <span> x </span>
                    <span class="number">${this.randomNumberRight}</span>
                    <span> = </span>
                    <input @keydown="${(e) => this.calculate(e)}" class="calculation-input" type="text"
                           inputmode="numeric"
                           pattern="[0-9]*">
                    <div class="score">PUNTEN ${this._score}</div>
                </div>
            `
        } else {
            return html`
                <div class="game-over">
                    <div>Je hebt er ${this._score} goed!</div>
                    <div>Je hebt ${this._wrongAnswer} foutjes gemaakt</div>
                    ${this._renderDiploma()}

                    <button @click="${this._startGame}" class="calculation-button">Start opnieuw</button>

                </div>
            `
        }
    }

    _startGame() {
        window.location.reload();
    }

    _renderDiploma() {
        return this._wrongAnswer === 0 && this._score > 19 ? html`
            <div>Je hebt je diploma gehaald!</div>` : html`
            <div>Je hebt helaas geen diploma :(</div>`
    }

    _timer() {
        let totalSeconds = 2 * 60;

        const timerElement = document.querySelector('teezee-calculation').shadowRoot.getElementById("timer");

        const countdown = setInterval(() => {
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;

            timerElement.textContent =
                `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

            if (totalSeconds <= 0) {
                clearInterval(countdown);

                this._gameOver = true;


                let mergedGames = [];
                const graduate = this._wrongAnswer === 0 && this._score > 19;
                const calculationGame = [{
                    name: this._gameName,
                    tables: this._tableChoiceSelected,
                    score: this._score,
                    errors: this._wrongAnswer,
                    graduate: graduate
                }];

                const savedGames = JSON.parse(localStorage.getItem('calculationGame'));

                if (savedGames && savedGames.length > 0) {
                    mergedGames = [...calculationGame, ...savedGames];
                } else {
                    mergedGames = calculationGame;
                }


                localStorage.setItem('calculationGame', JSON.stringify(mergedGames));

                //remove timer
                const timer = document.querySelector('teezee-calculation').shadowRoot.querySelector('#timer');
                document.querySelector('teezee-calculation').shadowRoot.querySelector('.calculation-game').removeChild(timer);
            }

            totalSeconds--;
        }, 1000);

    }

    calculate(event) {

        if (event.key !== 'Enter') return;

        if (!this._gameOver && !this._gameStarted) {
            this._timer();
            this._gameStarted = true;
        }

        if (!this._gameOver) {


            this._correctAnswer = parseInt(this.randomNumberLeft * this.randomNumberRight);
            const userInput = parseInt(document.querySelector('teezee-calculation').shadowRoot.querySelector('.calculation-input').value);

            if (userInput) {
                this._succes = this._correctAnswer === userInput;
                this._displayCalculation = false;
            }

            setTimeout(() => {
                this._displayCalculation = true;


            }, 1000)
        }
    }

    _setTableChoice(event, tableChoice) {
        this._tableChoiceSelected = this._tableChoiceSelected.includes(tableChoice)
            ? this._tableChoiceSelected.filter(item => item !== tableChoice)
            : [...this._tableChoiceSelected, tableChoice];

        console.log(this._tableChoiceSelected)

    }

    setSelectedClass(number) {
        if (this._tableChoiceSelected.includes(number)) {
            return 'selected';
        }
    }

    _selectTables() {
        return html`
            <div class="table-choice-container">
                ${this._tableChoice.map((table) => {
                    return html`
                        <div class="table-number ${this.setSelectedClass(table)}"
                             @click="${(e) => this._setTableChoice(e, table)}">${table}
                        </div>
                    `
                })}
            </div>
        `


    }

    _setName(event) {
        if (event.key !== 'Enter') return;
        this._gameName = document.querySelector('teezee-calculation').shadowRoot.querySelector(".name-input").value;
    }

    render() {
        if(!this._gameStarted && !this._nameSet) {
            this._nameSet = true;
            return html`
                <div class="set-name-container">
                    <div class="name-header">Voer je naam in</div>
                    <input @keydown="${(e) => this._setName(e)}" type="text" class="name-input">
                </div>
            `
        }
        this.createMath();
        return html`
            ${this._selectTables()}
            <div class="calculation-game">
                <div id="timer"></div>
                ${this._renderCalculation()}
            </div>
            ${this._renderScoreBoard()}
        `
    }
}
