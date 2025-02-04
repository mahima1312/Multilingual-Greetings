import './index.css'

const LanguageList = props => {
  const {onClickLanguage, language, isActive} = props
  const {id, buttonText} = language
  const activeLanguage = isActive ? 'active-btn' : 'btn'
  const onClickChangeLanguage = () => {
    onClickLanguage(id)
  }
  return (
    <li className="list">
      <button
        type="button"
        className={activeLanguage}
        onClick={onClickChangeLanguage}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageList
