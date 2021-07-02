import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts';
import GiftGridItem from './GiftGridItem';
// import { getGift } from './helpers/getGift';

export const GiftGrid = ({ category }) => {


    // const [imagenes, setImagenes] = useState([]);

    const { data: imagenes, loading } = useFetchGifts(category);


    // useEffect(() => {
    //     getGift(category).then(
    //         // setImagenes
    //         (imgs) => setImagenes(imgs)
    //     )
    // }, [category])

    // getGift();
    return (
        <>
            <h3 className="animate__animated animate__zoomInDown">{category}</h3>

            <div className="card-grid">

            {loading && <p className="animate__animated animate__heartBeat">Cargando...</p>}
                {
                    imagenes.map((img) => (
                        <GiftGridItem
                            key={img.id}
                            {...img} />
                    ))
                }

            </div>
        </>

    )
}
