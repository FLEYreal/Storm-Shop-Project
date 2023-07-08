import React, { useContext, useEffect, useState } from 'react'

import Good from '../Good'
import { APIContext } from '../../context/APIContext'

import styles from '../../styles/App.module.scss'

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

    const api = useContext(APIContext)!.api

    useEffect(() => {
        async function fetchEffect() {
            let res = await api?.getGoodList() as { data: any };
            setGoodlist(res!.data)
        }
        fetchEffect()
    }, [])

    goodList.map(good => console.log(good))
    return (
        <section>
            <hr style={{margin: '0 auto', width: 1170}}></hr>
            <div className={styles.goodList_title}>
                ТОВАРЫ:
            </div>
            <div className={styles.goodList}>
                {
                    goodList.map(good =>
                        <Good
                            key={good.id}
                            desc={{
                                title: good.displayName,
                                subtitle: good.desc,
                                cost: good.cost,
                                image: good.imageUrl,
                                theme: good.themeColor,
                                themeTransparent: good.themeTransparent
                            }}
                        />
                    )
                }
            </div>
        </section>
    )
};

export default Block_3