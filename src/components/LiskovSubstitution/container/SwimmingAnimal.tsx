import { FC, ReactNode } from 'react'

type Props = {
  name : string;
  buttonText : string;
  children : ReactNode;
}

export const SwimmingAnimals: FC<Props> = ({ name, buttonText, children }) => {
  return (
    <div>
        <h2>{name}</h2>
        <button onClick={() => console.log('I can swim')}>{buttonText}</button>
        {children}
    </div>
  )
}
