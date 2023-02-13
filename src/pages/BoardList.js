import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

/**
 * 인터넷에서 주워온 디자인 코드(화면 그리는건 제 능력이 아니라서 죄송합니다 :( )
 */

const BoardList = ( props ) => {
    console.log( 'inBoard' );

    return (
        <>
            <div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>선택</th>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <input type="checkbox"></input>
                        </td>
                        <td>1</td>
                        <td>게시글1</td>
                        <td>artistJay</td>
                        <td>2022-03-19</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox"></input>
                        </td>
                        <td>2</td>
                        <td>게시글2</td>
                        <td>artistJay</td>
                        <td>2022-03-19</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox"></input>
                        </td>
                        <td>3</td>
                        <td>게시글2</td>
                        <td>artistJay</td>
                        <td>2022-03-19</td>
                    </tr>
                    </tbody>
                </Table>
                <Button variant="info">글쓰기</Button>
                <Button variant="secondary">수정하기</Button>
                <Button variant="danger">삭제하기</Button>
            </div>
        </>
    );
}

BoardList.deafaultProps = {
    title: '게시판'
}

export default BoardList;