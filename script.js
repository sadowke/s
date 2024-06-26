document.addEventListener('DOMContentLoaded', function() {
    // حماية الإعدادات والتعديلات
    if (!isAuthorizedUser()) {
        alert("غير مسموح لك بالوصول إلى هذه الإعدادات.");
        document.body.innerHTML = "";
    }
});

function isAuthorizedUser() {
    // يمكنك إضافة منطق التحقق من الوصول هنا
    return true; // تعديل هذه القيمة بناءً على تحقق المستخدم
}
document.addEventListener('DOMContentLoaded', function() {
    var music = document.getElementById('backgroundMusic');
    music.play();
});