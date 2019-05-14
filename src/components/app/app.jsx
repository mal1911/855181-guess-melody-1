import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
    this._handlerClick = this._handlerClick.bind(this);
  }

  _handlerClick() {
    const {questions} = this.props;
    const {question} = this.state;
    this.setState({
      question: question + 1 >= questions.length
        ? -1
        : question + 1,
    });
  }

  _getScreen(question, onClick) {
    const {settings} = this.props;
    if (!question) {
      return <WelcomeScreen
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
        onClick={onClick}
      />;
    }

    switch (question.type) {
      case `genre`:
        return <GenreQuestionScreen
          question={question}
          onAnswer={onClick}
        />;

      case `artist`:
        return <ArtistQuestionScreen
          question={question}
          onAnswer={onClick}
        />;
    }
    return null;
  }

  render() {
    const {questions} = this.props;
    const {question} = this.state;
    return this._getScreen(questions[question], this._handlerClick);
  }
}

App.propTypes = {
  settings: PropTypes.shape({
    gameTime: PropTypes.number.isRequired,
    errorCount: PropTypes.number.isRequired}
  ),
  questions: PropTypes.array.isRequired
};
