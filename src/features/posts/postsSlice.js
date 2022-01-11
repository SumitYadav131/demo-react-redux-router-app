import { createSlice, nanoid } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'posts',
    initialState: [
        { id: '1', title: 'First Post!', content: 'Hello!', user: 1},        
    ],
    reducers: {

        postAdded: {
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(title, content , userId){
                return{
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        user: userId
                    }
                }
            }
        },
        postUpdated: {
            reducer(state, action){
                const { id, title, content } = action.payload
                const existingPost = state.find(post => post.id === id)
                if (existingPost) {
                    existingPost.title = title
                    existingPost.content = content
                }
            }
        }
        
    }
})

export const { postAdded, postUpdated } = postsSlice.actions
 
export default postsSlice.reducer