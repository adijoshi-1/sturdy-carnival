export const MainContent = (props) => {
  return (
    <div className="content">
      {window.location.pathname}
      {props.children}
    </div>
  )
}
