import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        setLoading(state) {
            state.loading = true;
            state.error = null;
        },
        setTodoList(state, action) {
            state.items = action.payload;
            state.loading = false;
        },
        setError(state, action) {
            state.error = action.payload;
            state.loading = false;
        },

        // usa Map invece di Find (Find utilizza oggetto originale, map ne crea una copia nuova)
        /* setCompletedTodo(state, action) {
            const todoId = action.payload;
            const todo = state.items.find(item => item.id === todoId);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
     */
        setCompletedTodo(state, action) {
            const todoId = action.payload;
            state.items = state.items.map(item => {
                if (item.id === todoId) {
                    return {
                        ...item, completed: !item.completed
                    };

                }
                return item;
            })
        }
    },
});

export const { setLoading, setTodoList, setError, setCompletedTodo } = listSlice.actions;
export default listSlice.reducer;