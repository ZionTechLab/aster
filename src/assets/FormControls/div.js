// function Div(props) { 
//   console.log(props)
//   const className = `flex ${props.center ? 'center' : ''}`.trim();
//   return (
   
//     <div className={className}>{props.children} </div>
//   );
// }
// export { Div };


function Div(props) {
//   console.log(props);

  // Create an array of class names based on the props
  const className = [
      props.flex ? 'flex' : '',
      props.center ? 'center' : '',
      props.sb ? 'sb' : ''
  ].filter(Boolean).join(' '); // Filter out falsy values and join them into a string

  return (
      <div className={className}>
          {props.children}
      </div>
  );
}

export { Div };