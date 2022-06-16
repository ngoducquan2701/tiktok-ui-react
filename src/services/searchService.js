import request from '~/utils/httpRequest';

export const searchService = async (q, type = 'less') => {
    const res = await request.get('users/search', {
        params: {
            q,
            type,
        },
    });
    return res.data;
};
