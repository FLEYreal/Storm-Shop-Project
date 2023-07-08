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
            <hr style={{margin: '0 auto'}} className={`${resStyles('hr', resolutions)}`}></hr>
            <section>
            <div className={`${styles.goodList_title} ${resStyles('goodList_title', resolutions)}`}>
                ТОВАРЫ:
            </div>
            <div className={`${styles.goodList} ${resStyles('goodList', resolutions)}`}>
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
        </>
    )
};

export default Block_3