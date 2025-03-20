const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("jx_3ahGn9ReL60E26");

    document.getElementById("sendButton").addEventListener("click", function(event) {
        event.preventDefault(); 

        let email = document.getElementById("emailInput").value.trim(); 

        if (email === "") {
            alert("Por favor, insira um email válido.");
            return;
        }

        let params = {
            from_name: "Usuário",
            email: email
        };

        emailjs.send("service_7zpxkg2", "template_tq9td1b", params)
            .then(function(response) {
                alert("Mensagem enviada com sucesso!");
            })
            .catch(function(error) {
                alert("Erro ao enviar mensagem: " + error);
            });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.documentElement.style.scrollBehavior = "smooth";

    const elements = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); 
            } else {
                entry.target.classList.remove("show"); 
            }
        });
    }, { threshold: 0.1 }); 

    elements.forEach((el) => observer.observe(el));
});



