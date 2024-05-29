const sendAllGames = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // Вернём найденные игры в формате JSON
    res.end(JSON.stringify(req.gamesArray));
};

const sendGameCreated = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // Вернём созданную игру в формате JSON
    res.end(JSON.stringify(req.game));
};

const sendGameById = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // Вернём созданную игру в формате JSON
    res.end(JSON.stringify(req.game));
};

const sendGameUpdated = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // Вернём созданную игру в формате JSON
    res.status(200).end(JSON.stringify({ message: 'Game updated' }));
};

const sendGameDeleted = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // Вернём созданную игру в формате JSON
    res.end(JSON.stringify(req.game));
};

module.exports = { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted };