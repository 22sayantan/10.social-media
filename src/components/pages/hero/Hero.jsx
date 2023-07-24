import NewPost from './NewPost/NewPost'
import './hero.scss'

function Hero() {
    return (
      <>
        <h1>this is Hero page</h1>
        <NewPost/>
        <div className="postCard">
          <div className="content">
            <p>
              <b>
                <h3>John Doe</h3>
              </b>
              <span>shared a post</span>
            </p>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Saepe provident, pariatur temporibus iure error obcaecati vitae, 
              cum est cumque sequi dolore nobis consectetur inventore
              ! Aliquam omnis blanditiis esse ad non. Minima obcaecati consequatur 
              quis velit qui perspiciatis voluptate dolore accusamus.
            </p>
          </div>

          <div className="buttons">
                <button>Like</button>
                <button>Comment</button>
                <button>Share</button>
          </div>
        </div>
      </>
    )
  }
  
  export default Hero
  