import img from './error.gif'

const ErrorMessage = () => {
    return (
        //<img src={process.env.PUBLIC_URL + '/error.gif'} /> // работа с папкой public (очень редко) (если использовать обычный импорт, то кантинку лучше перемещать в папку с компонентом)
        <img style={{display: 'block', width: '250px', height: '250px', objectFit: 'contain', margin: '0 auto'}} src={img} alt='Error'/>
    )
}

export default ErrorMessage