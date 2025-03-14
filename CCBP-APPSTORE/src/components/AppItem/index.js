// Write your code here
import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appId, appName, imageUrl, category} = appsList

  return (
    <li className="app-item-container">
      <img src={imageUrl} alt={appName} className="app-item-image" />
      <div>
        <p>{appName}</p>
      </div>
    </li>
  )
}

export default AppItem
