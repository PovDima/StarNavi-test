import axios from '../axios';

export const SUCCESS_GET_SERVER_DATA = 'SUCCESS_GET_SERVER_DATA';

export function getServerData() {
    return async dispatch => {
        try {
            const [settingsData, winnersData] = await Promise.all([axios.get(`/game-settings`), axios.get(`/winners`)]);

            dispatch({
                type: SUCCESS_GET_SERVER_DATA,
                winners: winnersData.data,
                settings: settingsData.data
            });

        } catch (error) {
            console.log(error)
        }
    };
}
