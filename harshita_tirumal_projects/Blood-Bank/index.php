<?php include 'header.php'; ?>

<!-- Hero Section -->
<div class="hero-section text-center py-5">
    <div class="container">
        <h1 class="display-4 mb-4">Save Lives Through Blood Donation</h1>
        <p class="lead mb-4">Connect donors with hospitals for life-saving blood donations.</p>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="d-grid gap-3 d-md-flex justify-content-md-center">
                    <a href="donor.php" class="btn btn-primary btn-lg">
                        <i class="fas fa-user-plus"></i> Register as Donor
                    </a>
                    <a href="receiver.php" class="btn btn-outline-primary btn-lg">
                        <i class="fas fa-search"></i> Find Donors
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Features Section -->
<div class="features-section py-5 bg-light">
    <div class="container">
        <h2 class="text-center mb-5">Why Choose Us?</h2>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm">
                    <div class="card-body text-center">
                        <i class="fas fa-heartbeat fa-3x text-danger mb-3"></i>
                        <h3 class="card-title h5">Quick Response</h3>
                        <p class="card-text">Connect with donors instantly in emergency situations.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm">
                    <div class="card-body text-center">
                        <i class="fas fa-shield-alt fa-3x text-primary mb-3"></i>
                        <h3 class="card-title h5">Verified Donors</h3>
                        <p class="card-text">All donors are verified to ensure safe blood donation.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm">
                    <div class="card-body text-center">
                        <i class="fas fa-hospital fa-3x text-success mb-3"></i>
                        <h3 class="card-title h5">Hospital Network</h3>
                        <p class="card-text">Connected with multiple hospitals for efficient blood supply.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Blood Types Section -->
<div class="blood-types-section py-5">
    <div class="container">
        <h2 class="text-center mb-5">Blood Types</h2>
        <div class="row g-4">
            <?php
            $blood_types = [
                'A+' => '#e74c3c',
                'A-' => '#c0392b',
                'B+' => '#3498db',
                'B-' => '#2980b9',
                'O+' => '#2ecc71',
                'O-' => '#27ae60',
                'AB+' => '#9b59b6',
                'AB-' => '#8e44ad'
            ];
            
            foreach ($blood_types as $type => $color) {
                echo "<div class='col-md-3 col-sm-6'>
                        <div class='blood-type-card text-center'>
                            <div class='blood-type-circle' style='background-color: {$color}'>
                                {$type}
                            </div>
                        </div>
                    </div>";
            }
            ?>
        </div>
    </div>
</div>

<!-- Statistics Section -->
<div class="stats-section py-5 bg-light">
    <div class="container">
        <div class="row text-center">
            <div class="col-md-4">
                <div class="stat-item">
                    <i class="fas fa-users fa-3x text-primary mb-3"></i>
                    <h3 class="display-4 fw-bold">1000+</h3>
                    <p class="lead">Registered Donors</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="stat-item">
                    <i class="fas fa-hospital fa-3x text-success mb-3"></i>
                    <h3 class="display-4 fw-bold">50+</h3>
                    <p class="lead">Connected Hospitals</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="stat-item">
                    <i class="fas fa-heart fa-3x text-danger mb-3"></i>
                    <h3 class="display-4 fw-bold">5000+</h3>
                    <p class="lead">Lives Saved</p>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Call to Action -->
<div class="cta-section py-5 text-center">
    <div class="container">
        <h2 class="mb-4">Ready to Make a Difference?</h2>
        <p class="lead mb-4">Join our community of blood donors and help save lives.</p>
        <a href="donor.php" class="btn btn-primary btn-lg">
            <i class="fas fa-user-plus"></i> Register Now
        </a>
    </div>
</div>

<style>
.hero-section {
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    color: white;
    padding: 100px 0;
}

.hero-section h1 {
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.blood-type-card {
    padding: 20px;
}

.blood-type-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    margin: 0 auto;
    transition: transform 0.3s ease;
}

.blood-type-circle:hover {
    transform: scale(1.1);
}

.stat-item {
    padding: 20px;
}

.stat-item i {
    color: var(--primary-color);
}

.cta-section {
    background: linear-gradient(135deg, #2c3e50, #3498db);
    color: white;
}

.btn-outline-primary {
    border-color: white;
    color: white;
}

.btn-outline-primary:hover {
    background-color: white;
    color: var(--primary-color);
}
</style>

</div>
</body>
</html>
