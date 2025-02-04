import {Component} from 'react'

import './App.css'

import LanguageList from './components/LanguageList'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {activeLanguage: languageGreetingsList[0].id}

  onClickLanguage = id => {
    this.setState({activeLanguage: id})
  }

  getImage = id => {
    const image = languageGreetingsList.find(
      eachLangauge => eachLangauge.id === id,
    )
    return image
  }

  render() {
    const {activeLanguage} = this.state
    const image = this.getImage(activeLanguage)

    return (
      <div className="main-container">
        <div className="app-container">
          <h1>Multilingual Greeting</h1>
          <ul className="list-container">
            {languageGreetingsList.map(eachLanguage => (
              <LanguageList
                className=""
                key={eachLanguage.id}
                language={eachLanguage}
                onClickLanguage={this.onClickLanguage}
                isActive={activeLanguage === eachLanguage.id}
              />
            ))}
          </ul>
          <div className="img-container">
            <img
              className="img"
              src={image.imageUrl}
              alt={image.imageAltText}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default App
