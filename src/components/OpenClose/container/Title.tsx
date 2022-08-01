import { FC, ReactNode } from 'react'

type Props = {
    title: string;
    children: ReactNode;
}

export const Title: FC<Props> = ({ title, children }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>{title}</h1>
        {children}
    </div>
  )
}
