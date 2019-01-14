export const url = "http://muslim-pintar.herokuapp.com";

export function headers(token) {
    return (
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
};