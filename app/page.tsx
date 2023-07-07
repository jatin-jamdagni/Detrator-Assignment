import ProductCard from '@/components/ProductCard';
import React from 'react';
import { ApiProps } from '@/types';
import Image from 'next/image';

const Page = async () => {
    const data = await (await fetch('https://fakestoreapi.com/products/')).json();

    return (
        <div style={{ display: 'flex', width: "80%", marginLeft: "15%" }}>
            <div style={{ left: "20%" }}>
                {data?.map((obj: ApiProps) => (
                    <ProductCard
                        title={obj.title}
                        key={obj.id}
                        image={obj.image}
                        description={obj.description}
                        category={obj.category}
                        rating={obj.rating?.rate}
                        count={obj.rating?.count}
                        price={obj.price}
                    />
                ))}
            </div>
            <div style={{ position: "fixed", left: "70%", top: "10%" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Image src={"/user.png"} alt='User Image' width={100} height={100} />
                    <br />
                    <h2>UserName</h2>
                </div>
            </div>
        </div>
    );
};

export default Page;
