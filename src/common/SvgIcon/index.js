const SvgIcon = ({ src, width, height }) => (
  <img
  src={`/img/svg/${src}`}
  alt={src}
  loading="eager"
  max-age="31536000"
  with={width}
  height={height}
  />
);

export default SvgIcon;
