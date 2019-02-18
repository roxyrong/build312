import axios from 'axios';

export function getEventbriteData() {
    return (dispatch) => {
        axios.get('/event-data-url')
        .then(res => {
            const url = res.data;
            axios.get(url)
            .then(res => {
                const eventbriteData = res.data;
                dispatch ({
                    type: 'GET_EVENTS',
                    eventbriteData
                })
            });
        })
    }
}