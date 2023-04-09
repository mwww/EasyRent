import css from './legalStuff.module.scss'

export default function LegalStuff() {
  return (
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
  )
}
