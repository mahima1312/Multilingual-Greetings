import './index.css'

const LanguageList = props => {
  const {languageList, isActive, onClickChangeLanguage} = props
  const {id, buttonText} = languageList

  const changeImageUrl = () => {
    onClickChangeLanguage(id)
  }
  const btnClassName = isActive ? 'active-btn' : 'btn'

  return (
    <li className="list">
      <button className={btnClassName} onClick={changeImageUrl} type="button">
        {buttonText}
      </button>
    </li>
  )
}
export default LanguageList
