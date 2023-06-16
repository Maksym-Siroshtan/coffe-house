import './Subtitle.css';

const Subtitle = ({subtitle, color}) => {
  const clazz = color === 'white' ? 'subtitle subtitle_color-white' : 'subtitle'
  return (
    <h2 className={clazz}>
      {subtitle}
    </h2>
  )
}

export default Subtitle;