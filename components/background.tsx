export function Background() {
    return (
      <div style={styles.backgroundMain}>
        <div style={styles.backgroundMainBefore} />
        <div style={styles.backgroundMainAfter} />
      </div>
    );
  }
  
  const styles: { [key: string]: React.CSSProperties } = {
    backgroundMain: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        height: "100%",
        width: "100%",
    },
    backgroundMainBefore: {
      background: "radial-gradient(circle, rgba(2, 0, 36, 0) 0, #FFFFFF 100%)",
      position: "absolute",
      content: '""',
      zIndex: 2,
      width: "100%",
      height: "100%",
      top: 0,
    },
    backgroundMainAfter: {
      content: '""',
      backgroundImage: "url(/grid.svg)",
      zIndex: 1,
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      opacity: 1,
      filter: "invert(1)",
    },
  };