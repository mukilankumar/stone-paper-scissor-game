import {
  GameViewContainer,
  GameButton,
  GameImage,
  ResultImageContainer,
  ResultName,
  ResultText,
} from './styledComponents'

import './index.css'

const GameResults = props => {
  const {choicesList, isShow, checkResult, newArray, text, restartGame} = props
  const rockBtn = choicesList[0]
  const scissorBtn = choicesList[1]
  const paperBtn = choicesList[2]
  const showGame = () => (
    <GameViewContainer>
      {isShow && (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <GameImage
              src={rockBtn.imageUrl}
              alt={rockBtn.id}
              key={rockBtn.id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <GameImage
              src={scissorBtn.imageUrl}
              alt={scissorBtn.id}
              key={scissorBtn.id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <GameImage
              src={paperBtn.imageUrl}
              alt={paperBtn.id}
              key={paperBtn.id}
            />
          </GameButton>
        </>
      )}
      {!isShow && (
        <>
          <ResultImageContainer>
            <ResultName>YOU</ResultName>
            <GameImage src={newArray[0].imageUrl} alt="your choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultName>OPPONENT</ResultName>
            <GameImage src={newArray[1].imageUrl} alt="opponent choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultText>{text}</ResultText>
            <button
              className="result-button"
              type="button"
              onClick={restartGame}
            >
              PLAY AGAIN
            </button>
          </ResultImageContainer>
        </>
      )}
    </GameViewContainer>
  )
  return showGame()
}

export default GameResults
