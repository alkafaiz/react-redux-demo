import { loadAlbumPage, fetchAlbum } from './album.action';

export const albumMiddleware = ({ dispatch }) => next => async action => {
    next(action);

    const { type } = action;
    if (type === loadAlbumPage.type) {
        dispatch(fetchAlbum());
    }
}

export const fetchAlbumMiddleware = ({ dispatch }) => next => async action => {
    next(action);

    const { type } = action;
}

export default [albumMiddleware, fetchAlbumMiddleware];