"use strict";
exports.id = 24;
exports.ids = [24];
exports.modules = {

/***/ 24:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9958);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4009);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__]);
([_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function DetatchedTodo({
  todo,
  index,
  completeTodo,
  removeTodo
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(TodoStyled, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "front",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(TodoText, {
        isCompleted: todo.isCompleted,
        children: todo.text
      })
    })
  });
}

const TodoStyled = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "DetatchedTodoApp__TodoStyled",
  componentId: "s8sjjl-0"
})(["z-index:1;position:relative;overflow:visible;display:flex;align-items:center;justify-content:space-between;padding:1rem;border:1px solid var(--color-tinted-cream);margin-bottom:0.5rem;border-radius:0.25rem;box-shadow:var(--box-shadow-sm);transition:all 0.3s ease-in-out;.front{display:flex;align-items:center;grid-gap:0.75rem;}:hover{box-shadow:var(--box-shadow-lg);transform:scale(1.01);}"]);
const TodoText = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "DetatchedTodoApp__TodoText",
  componentId: "s8sjjl-1"
})(["text-decoration:", ";transition:all 0.3s ease-in-out;color:", ";"], props => props.isCompleted ? "line-through" : "none", props => props.isCompleted ? "var(--color-gray-300)" : "var(--color-gray-800)");

function DetatchedTodoApp() {
  const [todos, setTodos] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([{
    text: "Push a pixel",
    isCompleted: false
  }, {
    text: "Doomscroll on Twitter",
    isCompleted: false
  }]);
  const initialTodos = [{
    text: "Push a pixel",
    isCompleted: false
  }, {
    text: "Doomscroll on Twitter",
    isCompleted: false
  }];

  const completeTodo = index => {
    const newTodos = [...todos]; // check if there are any items in the array

    if (newTodos.length > 0) {
      // check if the index is within the array
      if (index < newTodos.length) {
        // toggle the isCompleted property
        newTodos[index].isCompleted = !newTodos[index].isCompleted; // set the new todos array

        setTodos(newTodos);
      }
    }
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const resetTodos = () => {
    setTodos(initialTodos);
  };

  const {
    ref,
    inView,
    entry
  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)({
    rootMargin: "-100px 0px -200px",
    threshold: 0.5
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(StyledApp, {
    ref: ref,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "todo-list",
      children: todos.map((todo, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(DetatchedTodo, {
        index: index,
        todo: todo,
        completeTodo: completeTodo,
        removeTodo: removeTodo
      }, index))
    }), inView && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(DeleteButton, {
        onClick: () => removeTodo(0),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__.XIcon, {
          width: "20",
          height: "20"
        }), " Delete"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(CheckButton, {
        onClick: () => completeTodo(0),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__.CheckIcon, {
          width: "20",
          height: "20"
        }), " Complete"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(ResetButton, {
        onClick: () => resetTodos(),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__.RefreshIcon, {
          width: "20",
          height: "20"
        }), " Reset"]
      })]
    })]
  });
}

const StyledApp = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "DetatchedTodoApp__StyledApp",
  componentId: "s8sjjl-2"
})(["font-family:var(--font-sans);margin:0rem 0 3rem;color:var(--color-gray-800);"]);
const CheckButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
  displayName: "DetatchedTodoApp__CheckButton",
  componentId: "s8sjjl-3"
})(["z-index:2;position:fixed;bottom:6rem;left:4rem;color:var(--color-sea-blue);border:1px solid var(--color-sea-blue);background:white;border-radius:6rem;display:flex;align-items:center;justify-content:center;padding:0.5rem 1rem;gap:0.5rem;transition:all 0.2s ease-in-out;font-size:var(--font-size-sm);@media (max-width:768px){bottom:2rem;left:2rem;}:hover{background-color:var(--color-sea-blue);color:white;transform:scale(0.98);}"]);
const DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
  displayName: "DetatchedTodoApp__DeleteButton",
  componentId: "s8sjjl-4"
})(["z-index:2;position:fixed;top:4rem;right:4rem;background:white;color:var(--color-gray-600);border:1px solid var(--color-gray-300);border-radius:6rem;display:flex;align-items:center;justify-content:center;padding:0.5rem 1rem;font-size:var(--font-size-sm);gap:0.5rem;transition:all 0.2s ease-in-out;@media (max-width:768px){top:2rem;right:2rem;}:hover{background-color:var(--color-gray-100);color:var(--color-gray-800);transform:scale(0.98);}"]);
const ResetButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
  displayName: "DetatchedTodoApp__ResetButton",
  componentId: "s8sjjl-5"
})(["z-index:2;position:fixed;top:7rem;right:4rem;background:white;color:var(--color-gray-400);border:1px solid var(--color-gray-300);border-radius:6rem;display:flex;align-items:center;justify-content:center;padding:0.5rem 1rem;font-size:var(--font-size-sm);gap:0.5rem;transition:all 0.2s ease-in-out;@media (max-width:768px){top:5rem;right:2rem;}:hover{background-color:var(--color-gray-100);color:var(--color-gray-600);transform:scale(0.98);}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetatchedTodoApp);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;