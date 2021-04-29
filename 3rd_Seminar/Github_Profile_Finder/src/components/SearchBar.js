import react , {useState} from 'react';
import styled from 'styled-components'

const Form = styled.form`
    display : flex;
    justify-content : center;
    margin : 15px;
`
const Input = styled.input`
    width : 280px;
    background-color : rgba(0, 0, 0, 0);
    border : 2px solid #F9D0C8;
    color : #F9D0C8;
    padding : 7px 10px;
    border-radius: 20px;
    outline-style: none;
    font-size : 1.05em;
    &::placeholder{
        color : #F9D0C8;
    }
`;



let SearchBar = ({getData}) => {
    const [userName, setUserName] = useState("");
    const changeHandeler = (event)=>{
        setUserName(event.target.value);
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        getData(userName);
    }
    return (
        <Form onSubmit = {submitHandler}>
            <Input type = "text" value = {userName} onChange = {changeHandeler} placeholder = "id를 입력하세요"></Input>
        </Form>
    )
}

export default SearchBar;