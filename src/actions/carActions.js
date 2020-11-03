export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const addFeature = (featureId) => {
    console.log('adding: ', featureId)
    return { type: ADD_FEATURE, payload: featureId }
}

export const removeFeature = (featureId) => {
    console.log('subtracting: ', featureId)
    return { type: REMOVE_FEATURE, payload: featureId }
} 