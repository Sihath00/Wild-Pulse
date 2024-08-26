document.addEventListener('DOMContentLoaded', function(){
    // Getting form, dialog, close button, response text, and submit button elements from DOM
    const form = document.getElementById('feedback-form-container');
    const dialog = document.getElementById('feedback-dialog');
    const closeBtn = document.querySelector('.close-btn');
    const responseText = document.getElementById('feedback-response');
    const submitButton = document.querySelector('.button3[type="submit"]');

    let valid = false;

    form.addEventListener('submit', function(event){
        event.preventDefault();

        let messages = [];

        // store and retrieving input data 
        const data = new FormData(form);
        const firstname = data.get('firstname');
        const lastname = data.get('lastname');
        const email = data.get('email');
        const visiting = data.get('visiting');
        const informative_enough = data.get('websitefeedback');
        const rating = data.get('satificationlevel');
        const recommend = data.get('recommendornot');
        const comment = form.querySelector('.additionalinfo').value;

        


        // validating user inputs and input fields
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) messages.push("Please provide a valid e-mail address");
        if (!visiting) messages.push("Please let us know if this was your first visiting");
        if (!informative_enough) messages.push("Please let us know if the website was informative and easy to navigate through");
        if (!rating) messages.push ("Please rate your overall experience while using");
        if (!recommend) messages.push("Please let us know would you recommend us to others");
        if (!comment.trim()) messages.push("Please drop your ideas in a comment");

        valid = messages.length === 0;

        // displaying validation messages
        if (!valid){
            alert(messages.join("\n"));
            return;
        }

        // displaying inputed data on preview window
        responseText.innerHTML = `<div style="color: #333;">
                                    <p><strong>First Name:</strong> <span style="color: #555;">${firstname}</span></p>
                                    <p><strong>Last Name :</strong> <span style="color: #555;">${lastname}</span></p>
                                    <p><strong>Email:</strong> <span style="color: #555;">${email}</span></p>
                                    <p><strong>Was this your first time visiting :</strong> <span style="color: #555;">${visiting}</span></p>
                                    <p><strong>Was this website informative and easy to navigate through?:</strong> <span style="color: #555;">${informative_enough}</span></p>
                                    <p><strong>Overall Experience and satisfaction level:</strong> <span style="color: #555;">${rating}</span></p>
                                    <p><strong>Would Recommend:</strong> <span style="color: #555;">${recommend}</span></p>
                                    <p><strong>Comments:</strong> <span style="color: #555;">${comment}</span></p>
                                  </div>`;
        dialog.style.display = 'block';
    });

    // close button to hide feedback dialog
    closeBtn.addEventListener('click', function(){
        dialog.style.display = 'none';
    })

    // submit button to handle form submission
    submitButton.addEventListener('click', function(){
        if (valid){
            alert("Thank you for submitting your feedback!");
            window.location.reload();
        }
    });
});
