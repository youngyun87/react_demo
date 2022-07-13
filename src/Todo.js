import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

class Todo extends React.Component {
    state = {
        todoList: []
    };

    render() {

        console.log(this.state.todoList);

        return (
            <Container>
                <Input placeholder="오늘 할 일" onKeyPress={this.handleInputKeyPress}></Input>
                <TodoList todoList={this.state.todoList}></TodoList>
            </Container>
        );
    }

    componentDidMount() {
        this.setState({
            todoList: JSON.parse(localStorage.getItem("todoList")) || []
        });
    }

    handleInputKeyPress = event => {
        const {
            target: { value }
        } = event;
        if (event.key === "Enter") {
            this.setState(
                state => ({ todoList: [...state.todoList, value] }),
                () =>
                    localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
            );
            event.target.value = "";
        }
    };

    handleClickRemove = index => {
        console.log(index);
    }
}

const Container = styled.div`
  margin-top: 44px;
  text-align: center;
`;

const Input = styled.input`
  width: 80%;
  height: 33px;
  padding: 7px;
  outline: none;
  border: 1px solid silver;
  border-radius: 11px;
  background: transparent;
  font-size: 22px;
  color: white;
`;

export default Todo;