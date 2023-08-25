const Viewer = (props) => {
    // 구조 분해 할당으로 값 넘겨받기
    const {count} = props
    return(
    <div>
        <div>현재 카운트 : </div>
        <h1>{count}</h1>
    </div>
    )
}
export default Viewer;