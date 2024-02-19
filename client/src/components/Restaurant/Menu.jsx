import React, { useState } from "react";

import MenuCollection from "./MenuCollection";

const Menu = () => {

    const [menus, setMenus] = useState([
        "https://b.zmtcdn.com/data/menus/089/95089/6191c39a52e8970e043d81c5d2b36986.jpg",
        "https://b.zmtcdn.com/data/menus/089/95089/cc4d8bcc6de9d03de94f447ea85352eb.jpg",
        "https://b.zmtcdn.com/data/menus/089/95089/2e06ae13ecad8d22daebb8b45a73595e.jpg",
        "https://b.zmtcdn.com/data/menus/089/95089/1fca61d137d1f89e7a7c21219cc73282.jpg",
        "https://b.zmtcdn.com/data/menus/089/95089/ff795044432f67eb87965069ff3d18ae.jpg"

    ]);

    return (
        <>
            <div className="flex flex-wrap gap-3">
                <MenuCollection menuTitle="title" pages={menus.length} images={menus} />
            </div>
        </>
    )
}

export default Menu