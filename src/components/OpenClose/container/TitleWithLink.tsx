import { FC } from 'react'
import { Title } from './Title'

type Props = {
    title: string;
    href: string;
    buttonText: string;
}

export const TitleWithLink: FC<Props> = ({ title, href, buttonText }) => {
  return (
    <Title title={title}>
      <div>
          <a href={href}>{buttonText}</a>
      </div>
    </Title>
  )
}
