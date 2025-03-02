
// the DOMContent makes sure that JavaScript is loaded after the HTML is loeaded
document.addEventListener('DOMContentLoaded', function() {
    // these are the elements that we get from the HTML so we can use them later
    // you write them like this: const name = document.getElementById('name');
    // I would have to get the right Id or class in order to use it
    const form = document.querySelector('form');
    const addButton = document.getElementById('add');
    const participantCountElement = document.getElementById('participantCount');
    const totalFeeElement = document.getElementById('totalFee');
    const summary = document.getElementById('summary');
    const summaryMessage = document.getElementById('summaryMessage');
    const participantsContainer = document.querySelector('.participants');

    // this keeps counts of the participants
    let count = 1;

    const newFeeInput = document.querySelectorAll('input[name="fee"]');
        newFeeInput.forEach(input => {
            input.addEventListener('input', sumFees);
        });
        


    // this is listening for the interaction from the user (clicking the button)
    addButton.addEventListener('click', function() {

        // this call the template that we made previously
        const newParticipantHTML = participantTemplate(count);

        //adds the HTML before the button that we created 
       addButton.insertAdjacentHTML('beforebegin', newParticipantHTML);

        // this updates the count of the participants
        participantCountElement.textContent = count + 1;

        // count++ updates the count by 1
        count++;

        const newFeeInput = document.getElementById(`fee${count}`);
        if (newFeeInput) {
            newFeeInput.addEventListener('input', sumFees);
        }  
        sumFees();      
    });
    
    function sumFees() {
    // this selects all the inputs that have the name "fee"
            const feeInputs = document.querySelectorAll('input[name="fee"]');
        
        // this number can be changed, it starts at 0
            let total = 0;

            // this loops through each of the "fee" inputs
            feeInputs.forEach(input => {
                // this gets the text and enters it into a number
                const fee = parseFloat(input.value) || 0;
                // adds the fee to the total
                total += fee
            });
            // totalFeeElement is the element that is on the HTML we created
            // total.toFixed(2) makes sure that its 2 decimal points only
            totalFeeElement.textContent = total.toFixed(2);
            return total;
    }
    
    
    
    // listens for when the form is submitted
    form.addEventListener('submit', submitForm);

    // this function prevents the page from reloading
        function submitForm(event) {
            event.preventDefault();
            console.log('Form submitted');

            // gets the values for the adult name
            const adultName = document.getElementById('adult_name').value;
            
            // call the function of sumFees, giving us the results
            const total = sumFees();

            const info = {
                adultName: adultName,
                participantCount: participantCountElement.textContent,
                totalFee: total,
            }

            displaySuccess(info);
        }

        function displaySuccess(info){

            // this hides the form when the form is submitted
            form.style.display = 'none';

            // this shows the summary after we submit the form
            summary.style.display = 'block';

            
            summaryMessage.textContent = successTemplate(info);
        }

        function successTemplate(info) {
            return `Thank you ${info.adultName} you have registered ${info.participantCount} participants. You owe $${info.totalFee}.`;
        }

});

function participantTemplate(count) {
    // creating a template for the participant
    // it grabs the HTML and creates it here so we can add our own stuff multiple times
    // it is usually the [name]Template format, dont forget it: 
    // example function costcoTemplate({variable})
    return `
    <section class="participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
            <label for="fname${count}">First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname" value="" required />
        </div>
        <div class="item activities">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity" />
        </div>
        <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee" />
        </div>
        <div class="item">
            <label for="date${count}">Desired Date <span>*</span></label>
            <input id="date${count}" type="date" name="date" />
        </div>
        <div class="item">
            <p>Grade</p>
            <select>
            <option selected value="" disabled selected></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
            </select>
        </div>
    </section>
    `;
}


