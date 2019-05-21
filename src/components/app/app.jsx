import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import WelcomeScreen from '../welcome-screen/welcome-screen';
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";

class App extends PureComponent {
  _getScreen(question) {
    const {gameTime, maxMistakes, onWelcomeScreenClick} = this.props;
    if (!question) {
      return <WelcomeScreen
        errorCount={maxMistakes}
        gameTime={gameTime}
        onClick={onWelcomeScreenClick}
      />;
    }

    const {onUserAnswer, mistakes} = this.props;

    switch (question.type) {
      case `genre`:
        return <GenreQuestionScreen
          question={question}
          mistakes={mistakes}
          onAnswer={(userAnswer) => onUserAnswer(userAnswer, question, mistakes, maxMistakes)}
        />;

      case `artist`:
        return <ArtistQuestionScreen
          question={question}
          mistakes={mistakes}
          onAnswer={(userAnswer) => onUserAnswer(userAnswer, question, mistakes, maxMistakes)}
        />;
    }
    return null;
  }

  render() {
    const {questions, step} = this.props;
    return this._getScreen(questions[step]);
  }
}

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  step: state.step,
  mistakes: state.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(userAnswer, question, mistakes, maxMistakes));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
