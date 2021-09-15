import {Component} from 'react'

import './index.css'

import {v4 as uniquev4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {username: '', usercomment: '', commentlist: []}

  togglelikedItem = id => {
    this.setState(prevstate => ({
      commentlist: prevstate.commentlist.map(eachlikecomment => {
        if (eachlikecomment.id === id) {
          return {...eachlikecomment, isFavourite: !eachlikecomment.isFavourite}
        }
        return eachlikecomment
      }),
    }))
  }

  delteItem = id => {
    const {commentlist} = this.state
    this.setState({
      commentlist: commentlist.filter(eachitem => eachitem.id !== id),
    })
  }

  renderingelements = () => {
    const {commentlist} = this.state
    return commentlist.map(eachcomment => (
      <CommentItem
        eachcomment={eachcomment}
        key={eachcomment.id}
        togglelikedItem={this.togglelikedItem}
        delteItem={this.delteItem}
      />
    ))
  }

  onaddcomment = event => {
    event.preventDefault()
    const {username, usercomment} = this.state
    const initialclassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newcommentlist = {
      username,
      usercomment,
      id: uniquev4(),
      isFavourite: false,
      date: new Date(),
      initialclassNameStyle: initialclassName,
    }
    this.setState(prevstate => ({
      commentlist: [...prevstate.commentlist, newcommentlist],
      username: '',
      usercomment: '',
    }))
  }

  onchangeinput = event => this.setState({username: event.target.value})

  onchangetextarea = event => this.setState({usercomment: event.target.value})

  render() {
    const {username, usercomment, commentlist} = this.state

    return (
      <div className="commentmainbg">
        <h1 className="heading">Comments</h1>
        <p className="discription">say something about 4.0 technologies</p>
        <div className="commentsappcontenetcontainer">
          <form className="userinputcontainer" onSubmit={this.onaddcomment}>
            <input
              type="text"
              className="userinput"
              placeholder="Your Name"
              onChange={this.onchangeinput}
              value={username}
            />
            <textarea
              rows="6"
              className="usertextarea"
              placeholder="Your Comment"
              onChange={this.onchangetextarea}
              value={usercomment}
            />
            <div>
              <button type="submit" className="button">
                Add Comment
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="commentsimg"
            alt="comments"
          />
        </div>
        <div className="countcontainer">
          <p className="count">{commentlist.length}</p>
          <p className="countname">comments</p>
        </div>
        <ul className="commentitemscon">{this.renderingelements()}</ul>
      </div>
    )
  }
}
export default Comments
