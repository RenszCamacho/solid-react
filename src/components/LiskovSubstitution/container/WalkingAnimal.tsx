import { FC, ReactNode } from 'react'

type Props = {
  name : string;
  buttonText : string;
  children : ReactNode;
}

export const WalkingAnimal: FC<Props> = ({ name, children, buttonText }) => {
  return (
    <div>
        <h2>{name}</h2>
        <button onClick={() => console.log('I can run')}>{buttonText}</button>
        {children}
    </div>
  )
}
