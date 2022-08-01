import { FC } from 'react'
import { Title } from './Title'

type Props = {
    title: string;
    buttonText: string;
    onClick: () => void;
}

export const TitleWithButton: FC<Props> = ({ title, buttonText, onClick }) => {
  return (
    <Title title={title}>
    <button onClick={onClick}>{buttonText}</button>
    </Title>
  )
}
