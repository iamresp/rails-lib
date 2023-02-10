## Среда

Для конфигурации среды можно использовать `.env`-файл.

`DEV_SERVER_PORT` - порт для WDS, по умолчанию `3000`.

## Использование WDS и rails-project

Для использования подключения rails-lib в dev-режиме к rails-project необходимо заменить URL скрипта сборки библиотеки в rails-project на `http://localhost:3000/rails-common-lib.js` (с поправкой на использ. порт, `3000` по умолчанию).

## Доступные глобальные функции (св-ва объекта `window`):

`detectCollision` - полностью определяет столкновение и его направление, задаёт объект столкновения для `getObject`.\
`getObject` - используется вместе с `detectCollision`, возвращает объект, с которым произошло столкновение (или `undefined`, если столкновения нет).\
`getDirection` - высчитывает направление столкновения между двумя объектами.

## Пример ручной реализации функции `detectCollision`:

```javascript
let collidedObj; // выносим переменную

/**
 * @param {HTMLElement} player - элемент игрока.
 * @param {HTMLElement[]} objects - массив элементов объектов.
 */
function newDetectCollision (player, objects) {
    const playerBox = player.getBoundingClientRect(); // получаем bounding box игрока
    let objectBox;

    collidedObj = undefined; // очищаем значение collidedObj

    // 1) проверяем наличие столкновений
    for (let i = 0; i < objects.length; i++) {
        objectBox = objects[i].getBoundingClientRect();

        if (
            objectBox.left <= playerBox.right &&
            objectBox.right >= playerBox.left &&
            objectBox.top <= playerBox.bottom &&
            objectBox.bottom >= playerBox.top
        ) {
            collidedObj = objects[i];
            break;
        }
    }

    // 2) если столкновение произошло, определяем направление столкновения
    if (collidedObj) {
        return getDirection(playerBox, objectBox);
    }
}
```