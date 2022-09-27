
function StarterPage() {

    return (
        <div style={{ marginBottom: '5vh' }}>
            <iframe style={{ width: '100vw', height: '50vw' }} src="https://www.youtube.com/embed/j9_8oUd8mhQ" frameBorder='0'></iframe>
            <p>Хочешь записаться на бесплатные курсы английского языка? Нажми на кнопку ниже</p>
            <a style={{ border: 'solid 5px aliceblue', backgroundColor: 'aliceblue', fontSize: '30px', textDecoration: 'none', color: 'rgba(33, 33, 177, 1)' }} href={'/signup'}>Записаться</a>
        </div>
    )
}

export default StarterPage;