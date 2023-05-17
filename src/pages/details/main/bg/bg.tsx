import css from './bg.module.scss'

interface Props {
  imgUrl: string
}

export default function Bg(props: Props) {
  const imgUrl = '/imgs/cars/' + (props.imgUrl ? props.imgUrl : '1.jpg')
  console.log(imgUrl)

  const bgImageStyle = {
    backgroundImage: `url(${imgUrl})`,
  }
  return <div className={css.root_bg} style={bgImageStyle}></div>
}
