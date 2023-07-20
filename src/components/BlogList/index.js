import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const fetchedData = await response.json()
    const formattedData = fetchedData.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      author: eachData.author,
      topic: eachData.topic,
    }))

    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, blogsData} = this.state
    return (
      <div className="container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" height={80} width={80} color="#ffffff" />
          </div>
        ) : (
          <ul className="blogsList">
            {blogsData.map(eachBlog => (
              <BlogItem key={eachBlog.id} blogItemDetails={eachBlog} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
