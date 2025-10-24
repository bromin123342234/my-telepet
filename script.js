// Получаем ID пользователя
function getUserId() {
    if (window.Telegram && window.Telegram.WebApp) {
        return Telegram.WebApp.initDataUnsafe.user?.id || `user_${Date.now()}`;
    }
    return `user_${Date.now()}`;
}

const USER_ID = getUserId();

// Показываем ID пользователя
document.getElementById('userId').textContent = USER_ID;

// Копирование ID
function copyUserId() {
    navigator.clipboard.writeText(USER_ID).then(() => {
        alert('✅ ID скопирован! Отправьте его администратору @YourTelegramNick');
    });
}

// Обновите loadGame и saveGame чтобы использовали USER_ID
function loadGame() {
    const userKey = `magicEggs_${USER_ID}`;
    // ... остальной код
}

function saveGame() {
    const userKey = `magicEggs_${USER_ID}`;
    // ... остальной код
}