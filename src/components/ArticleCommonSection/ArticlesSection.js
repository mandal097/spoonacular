import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
const ArticlesSection = () => {
  const navigate = useNavigate()
  return (
    <div className='articles_section'>
      <h2>Popular Articles</h2>
      <div className="articles_section_top articles_section_">
        <div className="articles_section_stretched common_class"
          onClick={() => {
            navigate('/*');
            window.scroll({
              top:0,
              behavior:'auto'
            })
          }}
          style={{
            background: `
          linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.01)
          ),
              url(/images/articles_avacodo1.avif)
          `
          }} articles_avacodo
        >
          <div className="bottom">
            <h3>Metabollic Health 101 (And cab keto Help ?)</h3>
            <div className="article_writer">
              <div className="article_writer_img">
                <img src="https://media.istockphoto.com/photos/portrait-smile-beautiful-business-asian-woman-in-pink-suit-working-in-picture-id1318459282?b=1&k=20&m=1318459282&s=170667a&w=0&h=R8EREjFEEkI8cG9BgUQ1MBwNG5poo_toJQOhmuinzhM=" alt="" />
              </div>
              <div className="article_writer_desc">
                <span>name here</span>
              </div>
            </div>
          </div>
        </div>
        <div className="articles_section_smaller common_class"
          onClick={() => {
            navigate('/*');
            window.scroll({
              top:0,
              behavior:'auto'
            })
          }}
          style={{
            background: `
        linear-gradient(
          to top,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.01)
        ),
            url(/images/articles_avacodo.avif)
        `
          }}
        >
          <div className="bottom">
            <h3>Metabollic Health 101 (And cab keto Help ?)</h3>
            <div className="article_writer">
              <div className="article_writer_img">
                <img src="https://media.istockphoto.com/photos/portrait-smile-beautiful-business-asian-woman-in-pink-suit-working-in-picture-id1318459282?b=1&k=20&m=1318459282&s=170667a&w=0&h=R8EREjFEEkI8cG9BgUQ1MBwNG5poo_toJQOhmuinzhM=" alt="" />
              </div>
              <div className="article_writer_desc">
                <span>name here</span>
              </div>
            </div>
          </div>
        </div>
        <div className="articles_section_smaller common_class"
          onClick={() => {
            navigate('/*');
            window.scroll({
              top:0,
              behavior:'auto'
            })
          }}
          style={{
            background: `
          linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.01)
          ),
              url(/images/articles_avacodo2.avif)
          `
          }}>
          <div className="bottom">
            <h3>Metabollic Health 101 (And cab keto Help ?)</h3>
            <div className="article_writer">
              <div className="article_writer_img">
                <img src="https://media.istockphoto.com/photos/portrait-smile-beautiful-business-asian-woman-in-pink-suit-working-in-picture-id1318459282?b=1&k=20&m=1318459282&s=170667a&w=0&h=R8EREjFEEkI8cG9BgUQ1MBwNG5poo_toJQOhmuinzhM=" alt="" />
              </div>
              <div className="article_writer_desc">
                <span>name here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="articles_section_top articles_section_">
        <div className="articles_section_smaller common_class"
          onClick={() => {
            navigate('/*');
            window.scroll({
              top:0,
              behavior:'auto'
            })
          }}
          style={{
            background: `
          linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.01)
          ),
              url(/images/articles_avacodo5.avif)
          `
          }}>
          <div className="bottom">
            <h3>Metabollic Health 101 (And cab keto Help ?)</h3>
            <div className="article_writer">
              <div className="article_writer_img">
                <img src="https://media.istockphoto.com/photos/portrait-smile-beautiful-business-asian-woman-in-pink-suit-working-in-picture-id1318459282?b=1&k=20&m=1318459282&s=170667a&w=0&h=R8EREjFEEkI8cG9BgUQ1MBwNG5poo_toJQOhmuinzhM=" alt="" />
              </div>
              <div className="article_writer_desc">
                <span>name here</span>
              </div>
            </div>
          </div>
        </div>
        <div className="articles_section_smaller common_class"
          onClick={() => {
            navigate('/*');
            window.scroll({
              top:0,
              behavior:'auto'
            })
          }}
          style={{
            background: `
          linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.01)
          ),
              url(/images/articles_avacodo3.avif)
          `
          }}>
          <div className="bottom">
            <h3>Metabollic Health 101 (And cab keto Help ?)</h3>
            <div className="article_writer">
              <div className="article_writer_img">
                <img src="https://media.istockphoto.com/photos/portrait-smile-beautiful-business-asian-woman-in-pink-suit-working-in-picture-id1318459282?b=1&k=20&m=1318459282&s=170667a&w=0&h=R8EREjFEEkI8cG9BgUQ1MBwNG5poo_toJQOhmuinzhM=" alt="" />
              </div>
              <div className="article_writer_desc">
                <span>name here</span>
              </div>
            </div>
          </div>
        </div>
        <div className="articles_section_stretched common_class"
          onClick={() => {
            navigate('/*');
            window.scroll({
              top:0,
              behavior:'auto'
            })
          }}
          style={{
            background: `
          linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.01)
          ),
              url(/images/articles_avacodo4.avif)
          `
          }}>
          <div className="bottom">
            <h3>Metabollic Health 101 (And cab keto Help ?)</h3>
            <div className="article_writer">
              <div className="article_writer_img">
                <img src="https://media.istockphoto.com/photos/portrait-smile-beautiful-business-asian-woman-in-pink-suit-working-in-picture-id1318459282?b=1&k=20&m=1318459282&s=170667a&w=0&h=R8EREjFEEkI8cG9BgUQ1MBwNG5poo_toJQOhmuinzhM=" alt="" />
              </div>
              <div className="article_writer_desc">
                <span>name here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlesSection