{/* <script type='text/javascript' src='https://api.stackexchange.com/js/2.0/all.js'></script> */ }
export function apiInit() {
    SE.init({
        clientId: 12679,
        key: 'llMpok01uLwieV8w1UxwCQ((',
        channelUrl: 'https://manukam.github.io/AnguStack/',
        complete: function (data) {
            console.log(data);
        }
    });
}

export function apiAuthenticate() {
    SE.authenticate({
        success: function (data) {
            console.log(data);
            alert(
                'User Authorized with account id = ' +
                data.networkUsers[0].account_id + ', got access token = ' +
                data.accessToken
            );
        },
        error: function (data) {
            alert('An error occurred:\n' + data.errorName + '\n' + data.errorMessage);
        },
        networkUsers: true
    });
}
