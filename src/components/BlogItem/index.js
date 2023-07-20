import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, title, author, imageUrl, topic, avatarUrl} = blogItemDetails

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`}>
        <div className="blog-container">
          <img src={imageUrl} alt={`item${id}`} />
          <div className="blog-item-container">
            <p>{topic}</p>
            <h1>{title}</h1>
            <div>
              <img src={avatarUrl} alt={`avatar ${id}`} />
              <p>{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
