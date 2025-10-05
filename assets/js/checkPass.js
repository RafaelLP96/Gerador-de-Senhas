export function setupCheckPass() {

    function check_power() {
        var str = document.querySelector("#password").value;
        const _upper = document.querySelector("#upper");
        const _lower = document.querySelector("#lower");
        const _number = document.querySelector("#number");
        const _especial = document.querySelector("#especial");
        const _lenght = document.querySelector("#lenght");
        const _toggle = document.querySelector("#alternate");

        ///Test a password content with RegEx
        let upper = /[A-Z]/.test(str);
        let lower = /[a-z]/.test(str);
        let num = /[0-9]/.test(str);
        let special = /[^A-Za-z0-9]/g.test(str);
        let toggle = (__str) => {
        let lastChar = null;
        let _mychar = -1;
        let steps = 0;

        for (const char of __str) {
            if (char >= 'A' && char <= 'Z')
            _mychar = 0; 
            else if (char >= 'a' && char <= 'z')
            _mychar = 1; 
            else if (/[0-9]/.test(char))
            _mychar = 2;
            else if (/[^A-Za-z0-9]/.test(char))
            _mychar = 3;
            else
            continue; 

            steps++;

            if (lastChar !== null && _mychar === lastChar)
            return false; 

            lastChar = _mychar;
        }

        if (steps<2) //if we have only one character, the toggle is impossible
            return false;
        return true;
        };


        
        const enoughtlenght = str.length > 11;

        _upper.style.color = upper ? "#37db16" : "#de3a2f";
        _lower.style.color = lower ? "#37db16" : "#de3a2f";
        _number.style.color = num ? "#37db16" : "#de3a2f";
        _especial.style.color = special ? "#37db16" : "#de3a2f";
        _lenght.style.color = enoughtlenght ? "#37db16" : "#de3a2f";
        _toggle.style.color = toggle(str) ? "#37db16" : "#de3a2f";
    }

    setInterval(check_power, 1000);

    const input = document.querySelector("#password");
    input.addEventListener("input", () => {
        check_power();
    });

}