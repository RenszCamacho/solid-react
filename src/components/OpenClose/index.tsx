import { FC } from 'react'

interface Props {
    title: string;
    type: 'default' | 'withLinkButton' | 'withNormalButton';
    href?: string;
    buttonText?: string;
    onClick?: () => void;
}

export const OpenClosePrinciple: FC<Props> = ({
  title,
  type,
  href,
  buttonText,
  onClick
}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <h1>{title}</h1>

        {type === 'withLinkButton' && (
            <div>
                <a href={href}>{buttonText}</a>
            </div>
        )}

        {type === 'withNormalButton' && (
            <button onClick={onClick}>{buttonText}</button>
        )}
    </div>
  )
}
