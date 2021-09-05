import React from 'react';
import mainlogo from '../../../../assets/images/mainlogo.png';

function MainImage(props) {
    return (
        <div style={{
        //     background: `linear-gradient(to bottom, rgba(0,0,0,0)
        // 39%,rgba(0,0,0,0)
        // 41%,rgba(0,0,0,0.65)
        // 100%),
        // url('${props.image}'), #1c1c1c`,
            
            height: '500px',
            backgroundSize: '100%, cover',
            backgroundPosition: 'center, center',
            width: '100%',
            position: 'relative'
        }}>
            <a href="/">
                <img src={mainlogo}/>
            </a>
            <div>
                <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem' }}>
                    <h2 style={{ color: 'black' }}>[메뉴이름]</h2>
                    <p style={{ color: 'black', fontSize: '1rem' }}> [알러지 정보]</p>
                    {/* <h2 style={{ color: 'white' }}>  {props.title} </h2>
                    <p style={{ color: 'white', fontSize: '1rem' }}> {props.text}</p> */}
                    {/* props.title : mainImage 의 title, props.text : mainImage 의 text */}
                </div>
            </div>
        </div>
    )
}


export default MainImage