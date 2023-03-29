import css from './superiority.module.scss'

export default function Superiority() {
  const superior_data = [
    // {
    //   illustration: '1K+',
    //   tagline: 'more than 1000 satisfied costumer.',
    // },
    // {
    //   illustration: '100+',
    //   tagline: 'more than 100 well-treated cars.',
    // },
    // {
    //   illustration: '5 Years+',
    //   tagline: 'more than 5 Years of experience.',
    // },
    {
      illustration: '1K+',
      tagline: 'A thousand or more satisfied customers and counting',
    },
    {
      illustration: '100+',
      tagline: 'Over one hundred cars treated with care',
    },
    {
      illustration: '5 Years+',
      tagline: 'More than five years of professional experience',
    },
  ]
  return (
    <section className={css.cards}>
      {superior_data.map((data) => (
        <div className={css.card}>
          <h3>{data.illustration}</h3>
          <p>{data.tagline}</p>
        </div>
      ))}
    </section>
  )
}
