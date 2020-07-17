document.addEventListener('DOMContentLoaded', function() {
    var Calendar = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(Calendar, {
        format:'dd / mmmm / yyyy',
        showClearBtn:true,
        onSelect: function(test){
            const date = new Date(test);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();

            calculate(day, month, year);
        }
    });

    function calculate(day, month, year) {
        const today = new Date();
        const mesec = today.getMonth() + 1;
        // netacana godina
        if (today.getFullYear() < year) {
            alert('Nepravilan datum rodjenja, godina rodjenja ne moze biti veca od ' + today.getFullYear() + '.');
            return false;
        }
        
        //netacan mesec
        if (today.getFullYear() === year && mesec < month){
            alert('Nepravilan datum rodjenja, mesec rodjenja ne moze biti veci od ' + mesec + '.');
            return false;
        } 
        
        //netacan dan
        if (today.getFullYear() === year && mesec === month && today.getDate() < day) {
            alert('Nepravilan datum rodjenja, dan rodjenja nije ispravan. ' + today.getDate() + '.');
            return false;  
        }

        // godine korisnika
        const user_y = today.getFullYear() - year;
        const user_m = (user_y * 12) + mesec - month;

        // racunamo bebjs
        const max = GetDaysInMonth(month,year);

        let onemonth = 0;
        console.log('meseci ' + user_m);
        if (user_m > 12) {
            for (let i = 1; i < user_m; i++) {
                onemonth += GetDaysInMonth(i, today.getFullYear());
            }
            console.log(onemonth);
        }
    }
        
    function leapyear(year) {
        if(year === 2000) return true;
        return ((year % 4 === 0) && (year % 100 !== 0));
    }
});