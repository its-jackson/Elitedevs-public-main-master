(function() {

    function Start() 
    {
        console.log("App Started...");
        let deleteButtons = document.getElementsByName('deleteSurvey');
        console.log("btn found");

        for(button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if(!confirm("Are you sure?")) {
                    event.preventDefault();
                    window.location.assign('/survey');
                }
            });
        }
        
    
    }

    window.addEventListener("load", Start);

})();
