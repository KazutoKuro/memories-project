import * as api from '../api/index.js';

// Action Creators
export const getPosts = () => async (disptach) => {
    try {
        const { data } = await api.fetchPosts();

        dispatchEvent({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
export const createPost = (post) => async(dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);

        dispatch({ type: 'UPDAtE', payload: data});
    } catch (error) {
        console.log(error.message)
    }
}

    // const action = { type: 'FETCH_ALL', payload: []}

    // disptach (action);