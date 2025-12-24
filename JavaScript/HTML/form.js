function dataTransfer(event) {
           event.preventDefault();

            let name = document.getElementById("name").value;
            let contact = document.getElementById("contact").value;
            let reamrks = document.getElementById("remarks").value;
            let location = document.getElementById("location").value;
            let gender = document.querySelector('input[type=radio]:checked').value;
            let sub=document.querySelectorAll('input[type=checkbox]:checked');
            let subject=[];

            sub.forEach(function(sub){
                subject.push(sub.value);
            });


          var  output = "Name: " + name + "<br>";            
            output += "Contact: " + contact + "<br>";
            output += "Remarks : " + reamrks + "<br>";
            output += "Gender : " + gender + "<br>";
            output += "Subject : " + subject.join(", ")  + "<br>";
            output += "location : " + location + "<br>";

            
            var newWindow = window.open('', '_blank');
            newWindow.document.writeln('<pre>' + output + '</pre>');
        }

        let form = document.getElementById('idb');
        form.addEventListener('submit', dataTransfer);




