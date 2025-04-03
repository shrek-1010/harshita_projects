<?php include 'header.php'; ?>
<?php include 'config/db.php'; ?>

<div class="row justify-content-center">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">
                <h3 class="mb-0"><i class="fas fa-search"></i> Search for Donors</h3>
            </div>
            <div class="card-body">
                <form method="POST" action="search_donors.php" class="needs-validation" novalidate>
                    <div class="mb-3">
                        <label for="blood_group" class="form-label">Blood Group</label>
                        <select class="form-select" id="blood_group" name="blood_group" required>
                            <option value="">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="city" class="form-label">City</label>
                        <input type="text" class="form-control" id="city" name="city" required>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-search"></i> Search Donors
                    </button>
                </form>
            </div>
        </div>

        <div id="donorResults" class="mt-4"></div>
    </div>
</div>

<script>
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    
    // Show loading spinner
    document.getElementById("donorResults").innerHTML = `
        <div class="text-center">
            <div class="loading"></div>
            <p class="mt-2">Searching for donors...</p>
        </div>
    `;

    fetch("search_donors.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("donorResults").innerHTML = data;
    })
    .catch(error => {
        document.getElementById("donorResults").innerHTML = `
            <div class="alert alert-danger">
                <i class="fas fa-exclamation-circle"></i> Error: ${error.message}
            </div>
        `;
    });
});

function openLoginPopup(email) {
    // Create Bootstrap modal
    const modalHtml = `
        <div class="modal fade" id="loginModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Hospital Login</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="loginForm">
                            <div class="mb-3">
                                <label class="form-label">Hospital Name</label>
                                <input type="text" class="form-control" id="hospitalName" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Username</label>
                                <input type="text" class="form-control" id="username" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" required>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="submitLogin('${email}')">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Remove existing modal if any
    const existingModal = document.getElementById('loginModal');
    if (existingModal) {
        existingModal.remove();
    }

    // Add new modal to body
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('loginModal'));
    modal.show();
}

function submitLogin(email) {
    const hospitalName = document.getElementById('hospitalName').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (hospitalName && username && password) {
        fetch("send_request.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: "email=" + encodeURIComponent(email) + "&hospital=" + encodeURIComponent(hospitalName)
        })
        .then(response => response.text())
        .then(data => {
            // Close modal
            bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
            
            // Show success message
            const alertHtml = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <i class="fas fa-check-circle"></i> ${data}
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            `;
            document.getElementById("donorResults").insertAdjacentHTML('beforebegin', alertHtml);
        })
        .catch(error => {
            // Show error message
            const alertHtml = `
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <i class="fas fa-exclamation-circle"></i> Error: ${error.message}
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            `;
            document.getElementById("donorResults").insertAdjacentHTML('beforebegin', alertHtml);
        });
    }
}
</script>

</div>
</body>
</html>
