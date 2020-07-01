
const users = [{
    id: 1,
    name: "Richard Hendricks",
    email: "richard@piedpiper.com",
},
{
    id: 2,
    name: "Bertram Gilfoyle",
    email: "gilfoyle@piedpiper.com",
},
];

const router = app => {
    app.get('/', (req, res) => {
        res.send({
            message: 'Node.js and Express REST API'
        });
    });

    app.get('/users', (req, res) => {
        res.send(users);
    });
}



module.exports = router;