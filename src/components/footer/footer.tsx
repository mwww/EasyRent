import { Link } from 'react-router-dom'
import css from './footer.module.scss'

import lg_fb from './icons/fb.svg'
import lg_ig from './icons/ig.svg'

export default function Footer() {
  const footerLinks = [
    {
      Title: 'SiteMap',
      Links: [
        {
          Text: 'Home',
          url: '/',
        },
        {
          Text: 'Catalogue',
          url: '/catalogue',
        },
        {
          Text: 'About Us',
          url: '/aboutus',
        },
        {
          Text: 'Contact',
          url: '/contact',
        },
      ],
    },
    {
      Title: 'Costumer',
      Links: [
        {
          Text: 'FAQ',
          url: '/dummy-page',
        },
        {
          Text: 'Policy',
          url: '/dummy-page',
        },
        {
          Text: 'Support',
          url: '/dummy-page',
        },
        {
          Text: 'Feedback',
          url: '/dummy-page',
        },
      ],
    },
    {
      Title: 'Company',
      Links: [
        {
          Text: 'Our Story',
          url: '/dummy-page',
        },
        {
          Text: 'Members',
          url: '/dummy-page',
        },
        {
          Text: 'Careers',
          url: '/dummy-page',
        },
        {
          Text: 'Collaboration',
          url: '/dummy-page',
        },
      ],
    },
  ]
  return (
    <>
      {Array.from({ length: 2 }).map((_, index) => (
        <footer className={`${css.footer} ${index && css.isReal}`}>
          <div className={`content_wrapper`}>
            {/* <h1>footer!</h1> */}
            {/* <a href="" className={`background_def ${css.logo}`}></a> */}
            <div className={css.footerContent}>
              <div>
                <div className={css.logoContainer}>
                  <a href="" className={`background_def ${css.logo}`}></a>
                </div>
              </div>

              {/* why do I call it "cat"? IDK I don't even remember writing this. probably my subconscious self. */}
              {footerLinks.map((cat) => (
                <div>
                  <h3>{cat.Title}</h3>
                  <ul>
                    {cat.Links.map((link) => (
                      <li>
                        {/* <a href={link.Link}>{link.Text}</a> */}
                        <Link to={link.url}>{link.Text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                <h3>Find us at</h3>
                <ul>
                  <li>
                    <a href="">LinkedIn</a>
                  </li>
                  <li>
                    <a href="">GitHub</a>
                  </li>
                </ul>
                {/* <div> */}
                {/* icons */}
                <ul className={css.socialIcons}>
                  <li>
                    <a href="">
                      <img className="no_drag" src={lg_fb} alt="fb" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img className="no_drag" src={lg_ig} alt="ig" />
                    </a>
                  </li>
                </ul>
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className={css.legalStuff}>
            <div className={`content_wrapper ${css.container}`}>
              <p>© Copyright 2023 - EasyRent</p>
              <p>
                <ul className={css.legalLinks}>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Terms and Conditions</a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </footer>
      ))}
    </>
  )
}
