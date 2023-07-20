import {Component} from 'react'
import Loader from 'react-loader-spinner'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      title: eachData.title,
      imageUrl: eachData.image_url,
      content: eachData.content,
      avatarUrl: eachData.avatar_url,
      author: eachData.author,
    }))

    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogItems = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData

    return (
      <div>
        <h1>{title}</h1>
        <div>
          <img src={avatarUrl} alt={author} />
          <p>{author}</p>
        </div>
        <img src={imageUrl} alt={title} />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" height={80} width={80} color="#ffffff" />
          </div>
        ) : (
          this.renderBlogItems()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
