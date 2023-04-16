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
          Link: '/',
        },
        {
          Text: 'Catalogue',
          Link: '/catalogue',
        },
        {
          Text: 'About Us',
          Link: '/aboutus',
        },
        {
          Text: 'Contact',
          Link: '/contact',
        },
      ],
    },
    {
      Title: 'Costumer',
      Links: [
        {
          Text: 'FAQ',
          Link: '/',
        },
        {
          Text: 'Policy',
          Link: '/',
        },
        {
          Text: 'Support',
          Link: '/',
        },
        {
          Text: 'Feedback',
          Link: '/',
        },
      ],
    },
    {
      Title: 'Company',
      Links: [
        {
          Text: 'Our Story',
          Link: '/',
        },
        {
          Text: 'Members',
          Link: '/',
        },
        {
          Text: 'Careers',
          Link: '/',
        },
        {
          Text: 'Collaboration',
          Link: '/',
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

              {footerLinks.map((cat) => (
                <div>
                  <h3>{cat.Title}</h3>
                  <ul>
                    {cat.Links.map((link) => (
                      <li>
                        <a href={link.Link}>{link.Text}</a>
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
