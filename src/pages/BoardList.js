import React, {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {v4 as uuidV4} from 'uuid';

/**
 * 인터넷에서 주워온 디자인 코드(화면 그리는건 제 능력이 아니라서 죄송합니다 :( )
 */

const BoardList = () => {
    const [contentInfo, setContentInfo] = useState( [] );

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
                console.log( data[0] );
            } )
            .catch();
    }

    return (
        <>
            <div>
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
            </div>
        </>
    );
}

BoardList.deafaultProps = {
    title: '게시판'
}

export default BoardList;