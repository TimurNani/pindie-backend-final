const sendAllCategories = (req, res) => {
    // Установим заголовок ответа в формате JSON
  res.setHeader('Content-Type', 'application/json');
  // Отправим данные в виде JSON-объекта, 
  // которые подготовим в миддлваре findAllCategories
  res.end(JSON.stringify(req.categoriesArray));
};

const sendCategoryCreated = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // Вернём созданную категорию в формате JSON
    res.end(JSON.stringify(req.category));
}

const sendСategoryById = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // Вернём созданную категорию в формате JSON  
    res.end(JSON.stringify(req.category));
}

const sendCategoryUpdated = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // Вернём созданную категорию в формате JSON
    res.status(200).end(JSON.stringify({ message: 'Category updated' }));
}

const sendCategoryDeleted = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // Вернём созданную категорию в формате JSON
    res.end(JSON.stringify(req.category));
}

// Экспортируем контроллер
module.exports = { sendAllCategories, sendCategoryCreated, sendСategoryById, sendCategoryUpdated, sendCategoryDeleted };