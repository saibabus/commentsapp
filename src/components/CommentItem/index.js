import './index.css'

import {formatDistanceToNow} from 'date-fns'

// Write your code here
const CommentItem = props => {
  const {eachcomment, delteItem, togglelikedItem} = props
  const {
    id,
    username,
    usercomment,
    isFavourite,
    date,
    initialclassNameStyle,
  } = eachcomment
  const posteddate = formatDistanceToNow(date)
  const initial = username ? username[0].toUpperCase() : ''
  console.log(id)
  const onclickdeleteItem = () => {
    delteItem(id)
  }

  const onclicklikedItem = () => {
    togglelikedItem(id)
  }

  const likedbuttonstyle = isFavourite ? ' like-button active' : 'like-button'
  const likedimg = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="commentlistconeach">
      <div className="username-time">
        <div className={`initialcontainer ${initialclassNameStyle}`}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time">
            <p className="username">{username}</p>
            <p className="foramtdate">{posteddate}</p>
          </div>
          <p className="usercomment">{usercomment}</p>
        </div>
      </div>
      <div className="buttonscon">
        <div className="likescontiner">
          <img src={likedimg} alt="like" className="likeimages" />
          <button
            type="button"
            className={likedbuttonstyle}
            onClick={onclicklikedItem}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          className="delete-button"
          testid="delete"
          onClick={onclickdeleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}
export default CommentItem
