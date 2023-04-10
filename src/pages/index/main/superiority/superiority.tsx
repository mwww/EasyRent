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

    // {
    //   illustration: '1K+',
    //   tagline: 'A thousand or more satisfied customers and counting',
    // },
    // {
    //   illustration: '100+',
    //   tagline: 'Over one hundred cars treated with care',
    // },
    // {
    //   illustration: '5 Years+',
    //   tagline: 'More than five years of professional experience',
    // },

    // {
    //   illustration: '5 Years+',
    //   tagline:
    //     'With more than five years of professional experience in the industry, we have built a reputation for excellence and reliability. Our team of experts is committed to staying up-to-date with the latest trends and technologies to provide you with the best possible service.',
    // },
    // {
    //   illustration: '$$$',
    //   tagline:
    //     "At our company, we believe that you should never have to sacrifice quality for affordability. That's why we offer affordable prices without compromising on the quality of our service. You can trust us to provide you with the best possible value for your money.",
    // },

    // {
    //   illustration: '1K+ Customer',
    //   tagline:
    //     'Our commitment to exceptional customer service has resulted in over a thousand satisfied customers and counting. We take pride in providing top-notch service to each and every one of our clients.',
    // },
    // {
    //   illustration: '100+ Cars',
    //   tagline:
    //     'We have treated over one hundred cars with the utmost care and attention to detail. Our experienced technicians are dedicated to ensuring that each vehicle receives the best possible service to keep it running smoothly.',
    // },
    // {
    //   illustration: '24/7 Support',
    //   tagline:
    //     'We understand that car troubles can happen at any time, which is why we are always available for your convenience. Our 24/7 service ensures that you can get the help you need whenever you need it.',
    // },

    {
      //   illustration: '1K+ Customer',
      illustration: ['1K+', 'Customer'],
      tagline:
        'Over a thousand satisfied customers and counting. Exceptional service is our priority.',
    },
    {
      illustration: ['100+', 'Cars'],
      tagline:
        'Over one hundred cars treated with the utmost care. Trust us to keep your vehicle running smoothly.',
    },
    {
      illustration: ['5', 'Years+'],
      // tagline: 'More than five years of professional experience.',
      tagline:
        'More than five years of professional experience and make our costumer happy.',
    },
    {
      illustration: ['24/7', 'Support'],
      tagline:
        'Always available for your convenience. Count on us for prompt and reliable service.',
    },
  ]
  return (
    <section className={css.cards}>
      {superior_data.map((data) => (
        <div className={css.card}>
          <h3>
            {data.illustration[0]}
            &nbsp;
            <span>{data.illustration[1]}</span>
          </h3>
          <p>{data.tagline}</p>
        </div>
      ))}
    </section>
  )
}
