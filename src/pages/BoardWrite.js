import {useState} from "react";
import axios from "axios";
import {Form} from "react-bootstrap";

const BoardWrite = () => {
    const [board, setBoard] = useState( {} );

    /**
     * @name handleCancel
     * @description 취소 버튼, 이전 게시글 목록 화면으로 이동
     */
    const handleCancel = () => {
        window.location.href = '/board';
    }

    /**
     * @name handleSave
     * @param event
     * @description 저장 버튼 클릭 시
     */
    const handleSave = ( event ) => {
        event.preventDefault();

        axios.post( '/api/board/insert', {}, {
            params: {
                title  : board.title,
                content: board.content,
                userId : localStorage.getItem( 'userId' )
            }
        } ).then( ( {data} ) => {
            window.location.href = '/board'
            alert( `${data} 저장 완료` );
        } ).catch( () => {
            alert( '저장 실패' );
        } );
    }

    /**
     * @name handleChange
     * @param target
     * @description 제목, 본문 편집 시
     */
    const handleChange = ( {target} ) => {
        setBoard( {
            ...board,
            [target.name]: target.value
        } )
    }

    return (
        <div>
            <Form>
                <div>
                    <div>제목</div>
                    <input name="title" type="text" placeholder="Title" value={board.value} onChange={handleChange}/>
                </div>

                <div>
                    <div>내용</div>
                    <textarea name="content" style={{width: "50%", height: "200px"}} value={board.content}
                              onChange={handleChange}/>
                </div>
                <div>
                    <div>첨부 이미지</div>
                    <input name="image" type="file" accept="image/*"/>
                </div>
            </Form>
            <button variant="info" onClick={handleSave}>작성완료</button>
            <button variant="secondary" onClick={handleCancel}>취소</button>
        </div>
    );
}

export default BoardWrite;