"use strict";
exports.id = 8104;
exports.ids = [8104];
exports.modules = {

/***/ 8104:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9958);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__]);
_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Todo({
  todo,
  index,
  completeTodo,
  removeTodo
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(TodoStyled, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "front",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CheckButton, {
        onClick: () => completeTodo(index),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__.CheckIcon, {
          width: "16",
          height: "16"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TodoText, {
        isCompleted: todo.isCompleted,
        children: todo.text
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(DeleteButton, {
      onClick: () => removeTodo(index),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__.XIcon, {
        width: "16",
        height: "16"
      })
    })]
  });
}

const TodoStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "TodoApp__TodoStyled",
  componentId: "sc-1c7g388-0"
})(["display:flex;align-items:center;justify-content:space-between;padding:1rem;border:1px solid var(--color-tinted-cream);margin-bottom:0.5rem;border-radius:0.25rem;box-shadow:var(--box-shadow-sm);transition:all 0.3s ease-in-out;.front{display:flex;align-items:center;grid-gap:0.75rem;}:hover{box-shadow:var(--box-shadow-lg);transform:scale(1.01);}"]);
const TodoText = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "TodoApp__TodoText",
  componentId: "sc-1c7g388-1"
})(["text-decoration:", ";transition:all 0.3s ease-in-out;color:", ";"], props => props.isCompleted ? "line-through" : "none", props => props.isCompleted ? "var(--color-gray-300)" : "var(--color-gray-800)");
const CheckButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
  displayName: "TodoApp__CheckButton",
  componentId: "sc-1c7g388-2"
})(["color:var(--color-sea-blue);border:1px solid var(--color-sea-blue);border-radius:6rem;display:flex;align-items:center;justify-content:center;padding:0;width:28px;height:28px;transition:all 0.2s ease-in-out;:hover{background-color:var(--color-sea-blue);color:white;transform:scale(0.95);}"]);
const DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
  displayName: "TodoApp__DeleteButton",
  componentId: "sc-1c7g388-3"
})(["color:var(--color-gray-600);border:1px solid var(--color-gray-300);border-radius:6rem;display:flex;align-items:center;justify-content:center;padding:0;width:28px;height:28px;transition:all 0.2s ease-in-out;:hover{background-color:var(--color-gray-100);color:var(--color-gray-800);transform:scale(0.95);}"]);

function TodoForm({
  addTodo,
  resetTodos
}) {
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!value) {
      return;
    }

    addTodo(value);
    setValue("");
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledForm, {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("label", {
      children: "Add a new todo"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "end",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
        type: "text",
        className: "input",
        placeholder: "Push a pixel",
        value: value,
        onChange: e => setValue(e.target.value)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(StyledSubmitButton, {
        type: "submit",
        onClick: handleSubmit,
        children: "Add"
      })]
    })]
  });
}

const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_2___default().form.withConfig({
  displayName: "TodoApp__StyledForm",
  componentId: "sc-1c7g388-4"
})(["margin-top:0.5rem;div.end{display:flex;align-items:center;grid-gap:0.5rem;}label{font-size:var(--font-size-xs);color:var(--color-gray-600);}input{border:1px solid var(--color-gray-300);width:100%;color:var(--color-gray-800);padding:0.75rem 1.25rem;margin-top:0.25rem;border-radius:0.25rem;}input::placeholder{color:var(--color-gray-300);}"]);
const StyledSubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
  displayName: "TodoApp__StyledSubmitButton",
  componentId: "sc-1c7g388-5"
})(["color:white;background:var(--color-sea-blue);border-radius:0.25rem;padding:0.75rem 1.25rem;"]);

function TodoApp() {
  const [todos, setTodos] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([{
    text: "Doomscroll on Twitter",
    isCompleted: false
  }, {
    text: "Directly manipulate my family",
    isCompleted: false
  }, {
    text: "Weigh in on whether designers should code",
    isCompleted: false
  }]);
  const initialTodos = [{
    text: "Push a pixel",
    isCompleted: false
  }, {
    text: "Doomscroll on Twitter",
    isCompleted: false
  }, {
    text: "Directly manipulate my family",
    isCompleted: false
  }];

  const addTodo = text => {
    const newTodos = [...todos, {
      text
    }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted ? newTodos[index].isCompleted = false : newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }; //   const resetTodos = () => {
  //     setTodos(initialTodos);
  //   };


  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(StyledApp, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "todo-list",
      children: [todos.map((todo, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Todo, {
        index: index,
        todo: todo,
        completeTodo: completeTodo,
        removeTodo: removeTodo
      }, index)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TodoForm, {
        addTodo: addTodo // resetTodos={resetTodos}

      })]
    })
  });
}

const StyledApp = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "TodoApp__StyledApp",
  componentId: "sc-1c7g388-6"
})(["font-family:var(--font-sans);margin:0rem 0 3rem;color:var(--color-gray-800);"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoApp);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;