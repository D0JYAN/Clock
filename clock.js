document.addEventListener("DOMContentLoaded", function () {
    //Se crea un arreglo con los nombres de los días de la semana
    const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    //Se crea una función para actualizar la fecha y el tiempo
    function updateTime() {
        var now = new Date();

        document.getElementById("time").innerText = 
            zeroPadding(now.getHours(), 2) + " : " + 
            zeroPadding(now.getMinutes(), 2) + " : " +
            zeroPadding(now.getSeconds(), 2);

        document.getElementById("date").innerText = 
            now.getFullYear() + " - " +
            zeroPadding(now.getMonth() + 1, 2) + " - " +
            zeroPadding(now.getDate(), 2) + " - " +
            week[now.getDay()];
    }

    //Llamar a updateTime cada segundo
    setInterval(updateTime, 1000);

    //Función para rellenar con ceros a la izquierda
    function zeroPadding(num, digit) {
        return String(num).padStart(digit, "0");
    }

    //Llamada inicial para evitar el retraso de un segundo
    updateTime();
});