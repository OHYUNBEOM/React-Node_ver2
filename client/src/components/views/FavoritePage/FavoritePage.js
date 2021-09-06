import React, { useEffect, useState } from 'react'
import './favorite.css';
import Axios from 'axios';
import { Popover } from 'antd';
import { IMAGE_BASE_URL } from '../../Config';

function FavoritePage() {
    const [Favorites, setFavorites] = useState([])
    useEffect(() => {
        fetchFavoredMovie()
    }, [])
    const fetchFavoredMovie = () => {
        Axios.post('/api/favorite/getFavoredMovie', { userFrom: localStorage.getItem('userId') })//favoried 한 UserId를 가져와야함
            .then(response => {
                if (response.data.success) {
                    setFavorites(response.data.favorites)
                } else {
                    alert('메뉴 정보를 가져오는데 실패 했습니다.')
                }
            })
    }

    const onClickDelete = (movieId, userFrom) => {

        const variables = {
            movieId,
            userFrom
        }

        Axios.post('/api/favorite/removeFromFavorite', variables)
            .then(response => {
                if (response.data.success) {
                    fetchFavoredMovie()
                } else {
                    alert("리스트에서 지우는데 실패했습니다.")
                }
            })
    }


    const renderCards = Favorites.map((favorite, index) => {
        const content = (
            <div>
                {favorite.moviePost ?
                    <img src={`${IMAGE_BASE_URL}w500${favorite.moviePost}`} /> : "no image"}
                    {/* Popover 에 띄워줄 이미지를 content 에 넣어준다 */}
            </div>
        )


        return <tr key={index}>

            <Popover content={content} title={`${favorite.movieTitle}`} >
                <td>{favorite.movieTitle}</td>
            </Popover> {/* Popover 로 감싸주게되면 커서를 올렸을때, content 에 넣어둔 사진과함께 title 이 보여짐 */}

            <td>{favorite.movieRunTime} 분(min)</td>
            <td><button onClick={() => onClickDelete(favorite.movieId, favorite.userFrom)}>Remove</button></td>

        </tr>
    })



    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h2> 즐겨찾기 메뉴 </h2>
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>[메뉴 이름]</th>
                        <th>[제조 시간]</th>
                        <td>[즐겨찾기 삭제]</td>
                    </tr>
                </thead>
                <tbody>


                    {renderCards}


                </tbody>
            </table>
        </div>
    )
}

export default FavoritePage