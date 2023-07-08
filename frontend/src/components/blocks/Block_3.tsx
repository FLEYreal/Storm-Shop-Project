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
                {/* <Good desc={{
                    title: 'NITRO FULL: 1 МЕСЯЦ',
                    subtitle: 'ваше описание товара здесь ваше описание товара здесь ваше описание товара здесь',
                    cost: 324.99,
                    image: "/public/images/previews/preview_1.png",
                    theme: "#F04EFF",
                    themeTransparent: "rgba(240, 78, 255, 0.10)"
                }} /> */}
            </div>
        </section>
    )
};

export default Block_3