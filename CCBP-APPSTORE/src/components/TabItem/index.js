// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, clickTabItem, isActive} = props
  const {tabId, displayText} = tabsList
  const onclickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabBtnClassname = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        onClick={onclickTabItem}
        className={`tab-btn ${activeTabBtnClassname}`}
      >
        <p>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
