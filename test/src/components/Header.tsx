import { useState } from 'react'
import style from '@/styles/components/header.module.css'

type Props = {
    title: string
}

export default function Header(props: Props) {

    const [state, setState] = useState<Props>({
        title: props.title
    })

    return (
        <>
            <header className={style.head}>
                <h1 className={style.title}>{state.title}</h1>
            </header>
        </>
    )
}