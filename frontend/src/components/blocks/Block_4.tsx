import React, { useContext, useEffect, useState } from 'react'

import Good from '../Good'
import { APIContext } from '../../context/APIContext'

import styles from '../../styles/App.module.scss'
import resStyles from '../../utils/resStyles';
import useResolutions from '../../hooks/useResolusions';

interface Good {
    type: string;
    id: number;
    name: string;
    displayName: string;
    desc: string;
    imageUrl: string;
    themeColor: string;
    themeTransparent: string;
    cost: number;
}

function Block_3() {
    const [goodList, setGoodlist] = useState<Good[]>([]);

    const resolutions = useResolutions()
    const api = useContext(APIContext)!.api

    useEffect(() => {
        async function fetchEffect() {
            let res = await api?.getGoodList() as { data: any };
            setGoodlist(res!.data)
        }
        fetchEffect()
    }, [])

    return (
        <>
            <section className={`${styles.botOrder}`}>
                <div>

                </div>
            </section>
        </>
    )
};

export default Block_3