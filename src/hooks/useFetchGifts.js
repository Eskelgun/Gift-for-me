import { useEffect, useState } from "react";
import { getGift } from "../components/helpers/getGift";


export const useFetchGifts = (categoria) => {

    const [state, setstate] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {

        getGift(categoria).then(
            (imgs) => {

                setTimeout( () => {
                    // console.log(imgs);
                    setstate({
                        data: imgs,
                        loading: false,
                    });
                },1000)
            }
        )

    }, [categoria])


    return state; // {data: [], loading: true}
};
