import css from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={`content_wrapper`}>
        {/* <h1>footer!</h1> */}
        {/* <a href="" className={`background_def ${css.logo}`}></a> */}
        <div className={css.footerContent}>
          <div>
            <div className={css.logoContainer}>
              <a href="" className={`background_def ${css.logo}`}></a>
            </div>
            {/* <p>
              EasyRent is a platform to rent awesome cars, dont care its for
              music video or something or something
            </p> */}
            {/* <p>
              EasyRent offers high-quality, hassle-free car rental with flexible
              terms and exceptional service. Find the perfect car for any
              occasion, from music video shoots to daily use, all at competitive
              prices. With 24/7 support, EasyRent is the ultimate car rental web
              app.
            </p> */}
          </div>
          <div>
            <div>
              <h3>SiteMap</h3>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Catalogue</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3>Costumer</h3>
            <ul>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Policy</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Feedback</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <a href="">Our Story</a>
              </li>
              <li>
                <a href="">Members</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Collaboration</a>
              </li>
            </ul>
          </div>
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
                  <img src="" alt="fb" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="" alt="ig" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="" alt="wa" />
                </a>
              </li>
            </ul>
            {/* </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
