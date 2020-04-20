import React from 'react'
import Slider from 'react-animated-slider'

import horizontalCss from 'react-animated-slider / build / horizontal.css'

< Slider className={} verticalCss direction="vertical" >
    {Content.map((item, index) => (
        < div
            key={index}
            style={{ background: ` URL ( '$ { item.image }') no-repeat  center  center ` }}
        >
            < div className="center" >
                < h1 > {item.title} </ h1 >
                < p > {item.description} </ p >
                < button > {item.button} </ button >
            </ div>
        </ div>
    ))}
</ Slider >