import { LOADING, IDCATEGORY } from '../types'

export const loadingAction = (payload) => {
    return {
        type: LOADING,
        payload
    };
};

export const idCategory = (payload) => {
    return {
        type: IDCATEGORY,
        payload
    }
}