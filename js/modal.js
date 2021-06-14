var modal = document.getElementById("myModal");

function displayModal(title){
    var modal_header = document.getElementById("modal_header");
    modal_header.innerText = title;

    var modal_body = document.getElementById("modal_body");

    switch(title){
        case 'Reporting Dashboard Design': modal_body.innerHTML ='<center><img src="img/Service Design.png" width=350px height=250px></center> <p> A data dashboard is an information management tool that visually tracks, analyzes and displays key performance indicators (KPI), metrics and key data points to monitor the health of a business, department or specific process. They are customizable to meet the specific needs of a department and company. </p>' ; break;
        case 'Analytics': modal_body.innerHTML = '<p>Analytics is the systematic computational analysis of data or statistics. It is used for the discovery, interpretation, and communication of meaningful patterns in data. It also entails applying data patterns towards effective decision-making.</p> '; break;
        case 'Analysis Architecture': modal_body.innerHTML = 'Analysis Architecture'; break;
        case 'Data Governance': modal_body.innerHTML = '<p>Data Governance is the process, and procedure organizations use to manage, utilize, and protect their data. In this context, data can mean either all or a subset of a companys digital and/or hard copy assets. In fact, defining what data means to an organization is one of the data governance best practices </p>'; break;
        case 'Best Fit For Your Business': modal_body.innerHTML = 'Best Fit For Your Business'; break;
        case 'Change Management': modal_body.innerHTML = 'Change Management'; break;
    }

    modal.style.display = "block";

  }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
