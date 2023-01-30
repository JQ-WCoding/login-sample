const Board = () => {

    /**
     * 템플릿
     * @returns {JSX.Element}
     */
    const template = () => {
        return (
            <div>
                <div>
                    <div>제목</div>
                    <div>이름</div>
                </div>
                <div>
                    <img src="" alt="첨부파일"/>
                    <div></div>
                </div>
                <div>댓글</div>
            </div>
        );
    }


    return (
        <>
            {template}
        </>
    )
}

export default Board;