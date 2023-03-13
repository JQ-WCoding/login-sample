import React, {useEffect, useRef, useState} from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {v4 as uuidV4} from 'uuid';
import {Form} from "react-bootstrap";

/**
 * 인터넷에서 주워온 디자인 코드(화면 그리는건 제 능력이 아니라서 죄송합니다 :( )
 */

const BoardList = () => {
    const [contentInfo, setContentInfo] = useState( [] );
    const [contentLoad, setContenLoad] = useState( false );
    const [board, setBoard] = useState( {} );
    const [showEditButton, setShowEditButton] = useState( false );
    const [showSaveButton, setShowSaveButton] = useState( false );
    const [disabledEdit, setDisabledEdit] = useState( true );

    const handlePostInfo = async () => {
        axios.get( '/api/board/getAll' ).then( ( {data} ) => {
            setContentInfo( data.reverse() );
        } ).catch( ( err ) => {
            console.log( err );
        } );
    }

    useEffect( () => {
        handlePostInfo().then();
    }, [] );

    const handleButtonWrite = () => {
        window.location.href = '/board-write';
    }
    const handleOnClick = ( {currentTarget} ) => {
        axios.get( `/api/board/${currentTarget.id}` )
            .then( ( {data} ) => {
                boardLoad( data );
            } )
            .catch( () => {
                setContenLoad( false );
            } );
    }

    const handleSave = ( event ) => {
        event.preventDefault();

        axios.post( '/api/board/save', {}, {
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
     * @name boardLoad
     * @param data
     * @description 게시판 로딩
     */
    const boardLoad = ( data ) => {
        setBoard( data[0] );
        setContenLoad( true );

        if ( data[0].insPersonId === localStorage.getItem( 'userId' ) ) setShowEditButton( true );
    }

    const handleEdit = () => {
        setDisabledEdit( false );
        setShowEditButton( false );
        setShowSaveButton( true );
    }

    /**
     * @name handleCancel
     * @description 화면 뒤로가기 (취소 기능)
     */
    const handleCancel = () => {
        window.location.href = '/board'
        setContenLoad( false );
    }

    const handleChange = ( {target} ) => {
        setBoard( {
            ...board,
            [target.name]: target.value
        } )
    }

    return (
        <>
            {!contentLoad && <div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contentInfo.map( ( data ) =>
                        <tr style={{cursor: 'pointer'}} key={uuidV4()} onClick={handleOnClick} id={data[0]}>
                            <td>{data[0]}</td>
                            <td>{data[1]}</td>
                            <td>{data[3]}</td>
                            <td>{data[4]}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
                <Button variant="info" onClick={handleButtonWrite}>글쓰기</Button>
            </div>}


            {contentLoad && <div>
                <Form>
                    <div>
                        <div>제목</div>
                        <input name="title" type="text" value={board.title} onChange={handleChange}
                               disabled={disabledEdit}/>
                    </div>

                    <div>
                        <div>내용</div>
                        <textarea style={{width: "50%", height: "200px"}} name="content" type="text"
                                  value={board.content} onChange={handleChange} disabled={disabledEdit}/>
                    </div>

                    <div>
                        <div>작성일</div>
                        <input name="insDate" type="date" disabled={true}
                               value={board.insDate ? board.insDate : ''}/>
                    </div>
                </Form>
                {showEditButton && <button variant="info" onClick={handleEdit}>수정</button>}
                {showSaveButton && <button variant="save" onClick={handleSave}>저장</button>}
                <button variant="secondary" onClick={handleCancel}>취소</button>
            </div>}
        </>
    );
}

BoardList.deafaultProps = {
    title: '게시판'
}

export default BoardList;