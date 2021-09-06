import React from 'react'
import { Descriptions, Badge } from 'antd';

function MovieInfo(props) {

    let { movie } = props;

    return (
        <Descriptions title="[메뉴정보]" bordered>
            <Descriptions.Item label="[메뉴 이름]">{movie.original_title}</Descriptions.Item>
            {/* 메뉴 정보들이 담겨져있는 props 들의 메뉴이름, 출시일, 조리시간, 가게이름, 알러지 정보 등을 props 로 받아와야하는데 여기도 문제.. */}
            {/* 메뉴 정보들이 담겨져있는 props 들의 메뉴이름, 출시일, 조리시간, 가게이름, 알러지 정보 등을 props 로 받아와야하는데 여기도 문제.. */}
            {/* 메뉴 정보들이 담겨져있는 props 들의 메뉴이름, 출시일, 조리시간, 가게이름, 알러지 정보 등을 props 로 받아와야하는데 여기도 문제.. */}
            {/* 메뉴 정보들이 담겨져있는 props 들의 메뉴이름, 출시일, 조리시간, 가게이름, 알러지 정보 등을 props 로 받아와야하는데 여기도 문제.. */}
            
            <Descriptions.Item label="[출시일]">{movie.release_date}</Descriptions.Item>
            {/* <Descriptions.Item label="revenue">{movie.revenue}</Descriptions.Item> */}
            <Descriptions.Item label="[조리 시간]">{movie.runtime}</Descriptions.Item>
            {/* <Descriptions.Item label="vote_average" span={2}>
                {movie.vote_average}
            </Descriptions.Item> */}
            {/* <Descriptions.Item label="vote_count">{movie.vote_count}</Descriptions.Item> */}
            <Descriptions.Item label="[가게 이름]">{movie.status}</Descriptions.Item>
            <Descriptions.Item label="[알러지 정보]">{movie.popularity}</Descriptions.Item>
        </Descriptions>
    )
}

export default MovieInfo