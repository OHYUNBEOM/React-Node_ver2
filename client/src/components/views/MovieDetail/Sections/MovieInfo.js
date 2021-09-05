import React from 'react'
import { Descriptions, Badge } from 'antd';

function MovieInfo(props) {

    let { movie } = props;

    return (
        <Descriptions title="[메뉴정보]" bordered>
            <Descriptions.Item label="[메뉴 이름]">{movie.original_title}</Descriptions.Item>
            <Descriptions.Item label="[출시일]">{movie.release_date}</Descriptions.Item>
            {/* <Descriptions.Item label="revenue">{movie.revenue}</Descriptions.Item> */}
            <Descriptions.Item label="[조리 시간]">{movie.runtime}</Descriptions.Item>
            {/* <Descriptions.Item label="vote_average" span={2}>
                {movie.vote_average}
            </Descriptions.Item> */}
            {/* <Descriptions.Item label="vote_count">{movie.vote_count}</Descriptions.Item> */}
            <Descriptions.Item label="[출시상태]">{movie.status}</Descriptions.Item>
            <Descriptions.Item label="[알러지 정보]">{movie.popularity}</Descriptions.Item>
        </Descriptions>
    )
}

export default MovieInfo