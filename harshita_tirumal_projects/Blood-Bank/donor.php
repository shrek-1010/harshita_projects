<?php include 'header.php'; ?>
<?php include 'config/db.php'; ?>

<div class="row">
    <div class="col-md-6">
        <div class="card">
            <div class="card-header">
                <h3 class="mb-0"><i class="fas fa-user-plus"></i> Register as a Donor</h3>
            </div>
            <div class="card-body">
                <form method="POST" class="needs-validation" novalidate>
                    <div class="mb-3">
                        <label for="name" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="name" name="name" required>
                    </div>
                    <div class="mb-3">
                        <label for="age" class="form-label">Age</label>
                        <input type="number" class="form-control" id="age" name="age" required>
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone Number</label>
                        <input type="text" class="form-control" id="phone" name="phone" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" name="email" required>
                    </div>
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
                    <div class="mb-3">
                        <label for="address" class="form-label">Address</label>
                        <textarea class="form-control" id="address" name="address" rows="3"></textarea>
                    </div>
                    <button type="submit" name="register" class="btn btn-primary">
                        <i class="fas fa-save"></i> Register
                    </button>
                </form>
            </div>
        </div>
    </div>

    <div class="col-md-6">
        <div class="card">
            <div class="card-header">
                <h3 class="mb-0"><i class="fas fa-list"></i> Donors List</h3>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Blood Group</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            $result = $conn->query("SELECT name, blood_group, city FROM donors");
                            while ($row = $result->fetch_assoc()) {
                                echo "<tr>
                                    <td>{$row['name']}</td>
                                    <td><span class='badge bg-danger'>{$row['blood_group']}</span></td>
                                    <td>{$row['city']}</td>
                                </tr>";
                            }
                            ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<?php
if (isset($_POST['register'])) {
    $name = $_POST['name'];
    $age = $_POST['age'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $blood_group = $_POST['blood_group'];
    $city = $_POST['city'];
    $address = $_POST['address'];

    $sql = "INSERT INTO donors (name, age, phone, email, blood_group, city, address) 
            VALUES ('$name', '$age', '$phone', '$email', '$blood_group', '$city', '$address')";

    if ($conn->query($sql) === TRUE) {
        echo "<div class='alert alert-success mt-3'>
                <i class='fas fa-check-circle'></i> Donor Registered Successfully!
              </div>";
    } else {
        echo "<div class='alert alert-danger mt-3'>
                <i class='fas fa-exclamation-circle'></i> Error: " . $conn->error . "
              </div>";
    }
}
?>

</div>
</body>
</html>
