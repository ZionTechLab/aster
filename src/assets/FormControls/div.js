function Div(props) {

  const className = [
      props.flex ? 'flex' : '',
      props.center ? 'center' : '',
      props.sb ? 'sb' : '',
        props.p0 ? 'p-0' : '',   props.m0 ? 'm-0' : ''
  ].filter(Boolean).join(' '); 

  return (
      <div className={className}>
          {props.children}
      </div>
  );
}

export { Div };