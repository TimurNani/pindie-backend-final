const sendAllUsers = (req, res) => {
    // Установим заголовок ответа в формате JSON
    res.setHeader('Content-Type', 'application/json');
    // Отправим данные в виде JSON-объекта, 
    // которые подготовим в миддлваре findAllCategories
    res.end(JSON.stringify(req.usersArray));
};

const sendUserCreated = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // Вернём созданного пользователя в формате JSON
    res.end(JSON.stringify(req.user));
}

const sendUserById = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // Вернём созданного пользователя в формате JSON
    res.end(JSON.stringify(req.user));
}

const sendUserUpdated = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // Вернём созданного пользователя в формате JSON
    res.status(200).end(JSON.stringify({ message: 'Пользователь обновлён' }));
}

const sendUserDeleted = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // Вернём созданного пользователя в формате JSON
    res.end(JSON.stringify(req.user));
}

const sendMe = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
};

// Экспортируем контроллер
module.exports = { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted, sendMe };