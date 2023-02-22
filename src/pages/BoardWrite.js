import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import axios from "axios";

const BoardWrite = () => {

    const [title, setTitle] = useState("");
    const [context, setContext] = useState("");

    const handleCancel = () => {
        window.location.href = '/board';
    }

    const handleSubmit = (event) => {

        debugger;

        event.preventDefault();

        axios.post('/api/board/save', {}, {
            params: {
                title: title,
                context: context,
                userId: localStorage.getItem('userId')
            }
        }).then(({data}) => {
            console.log(data);
            alert('저장 완료');
        }).catch(() => {
            alert('저장 실패');
        });
    }

    const handleChangeTitle = ({target: {value}}) => {
        setTitle(value);
    }

    const handleChangeText = ({target: {value}}) => {
        setContext(value);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="text" placeholder="Title" onChange={handleChangeTitle}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>내용</Form.Label>
                    <Form.Control as="textarea" onChange={handleChangeText}/>
                </Form.Group>
                <Button variant="info" type="submit">작성완료</Button>
                <Button variant="secondary" onClick={handleCancel}>취소</Button>
            </Form>
        </div>
    );
}

export default BoardWrite;