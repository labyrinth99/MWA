(function () {
    function isWeekend() {
        const todayDate = new Date();
        const day = todayDate.getDay();  
        const daysMap = { 0: "Weekend", 6: "Weekend" };
        return daysMap[day] || "Weekday";

    }

    console.log(isWeekend());
})();