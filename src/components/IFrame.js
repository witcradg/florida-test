const IFrame = ({
    src,
    width,
    height,
    style,
    allowFullScreen,
    loading,
    referrerPolicy
  }) => {
    return (
      <iframe
        src={src}
        width={width}
        height={height}
        style={style}
        allowFullScreen={allowFullScreen}
        loading={loading}
        referrerPolicy={referrerPolicy}
      />
    )
  }
  
  export default IFrame