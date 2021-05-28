const { Sequelize } = require('sequelize')
var connection = new Sequelize('rabbit', 'root', 'Varshini1998@', {
    host: 'localhost',
    dialect: 'mysql'
});

const Article = Sequelize;


Article.use = connection.define('article', {
    title: Sequelize.STRING,
    body: Sequelize.TEXT
})

// Article.use.findAll().then(Articles => {
//     console.log(Article);
// }).catch(function (err) {
//     console.log("findAll failed with error: " + err);
//     return null;

// });

// Article.use.destroy({
//     where: { body: 'varshini' }
// })
//     .then(() => {
//         console.log('deleted record with body', body)
//     })
//     .catch(function (err) {
//         console.log("delete failed with error: " + err);
//         return 0;
//     });

// var Article2 = connection.define('article2', {
//     section: Sequelize.STRING,
//     ref: Sequelize.STRING
// })

// Article.hasOne(Article2, {
//     foreignKey: "title"
// });
// Article2.belongsTo(Article);

Article.use.destroy({
    where: {
        id: 2
    }
}).then(function (rowDeleted) {
    if (rowDeleted === 2) {
        console.log('Deleted successfully');
    }
}, function (err) {
    console.log(err);
});

// Article.destroy({
//     where: {
//         // criteria
//         id: 1
//     }
// })

connection.sync({
    force: true
})
    .then(function () {
        Article.use.bulkCreate([
            {
                index: '1',
                title: 'Article 1',
                body: 'varshini',
                dept: 'IT'
            },
            {
                index: '2',
                title: 'Article 2',
                body: 'surya',
                dept: 'MECH'
            },
            {
                index: '3',
                title: 'Article 3',
                body: 'kabii',
                dept: 'EEE'
            },
            {
                index: '4',
                title: 'Article 4',
                body: 'shrii',
                dept: 'AERO'
            }
        ],
        )
    }
    )
