import React from 'react'
import { Col } from 'antd';//css Framework 를 이용하겠다


function GridCards(props) {

    return (
        <Col lg={6} md={8} xs={24}>{/* 총 크기가 24인데, 전체화면일때는 6으로 즉 4칸, 줄어들면 8으로 즉 3칸, 제일작을때는 24 즉 한칸만 */}
                <div style={{ position: 'relative' }}>
                    <a href={`/movie/${props.movieId}`} >
                        <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.movieName} />
                    </a>
                </div>
            </Col>
    )
    // if (props.landingPage) {
    //     return (
    //         <Col lg={6} md={8} xs={24}>{/* 총 크기가 24인데, 전체화면일때는 6으로 즉 4칸, 줄어들면 8으로 즉 3칸, 제일작을때는 24 즉 한칸만 */}
    //             <div style={{ position: 'relative' }}>
    //                 <a href={`/movie/${props.movieId}`} >
    //                     <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.movieName} />
    //                 </a>
    //             </div>
    //         </Col>
    //     )
    // } else {
    //     return (
    //         <Col lg={6} md={8} xs={24}>
    //             <div style={{ position: 'relative' }}>

    //                 <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.characterName} />

    //             </div>
    //         </Col>
    //     )
    // }

}

export default GridCards