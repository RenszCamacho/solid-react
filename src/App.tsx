// import { SingleResponsability } from './components'

import { TitleWithButton, TitleWithLink } from './components'

const App = () => {
  return (
    <>
      <TitleWithLink
        title='Title with Link'
        buttonText='Click me'
        href='https://www.google.com'
      />

      <TitleWithButton
        title='Title with Button'
        buttonText='Click me'
        onClick={() => console.log('Clicked')}
      />
    </>
  )
}

export default App
